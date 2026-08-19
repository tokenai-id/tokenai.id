/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import { TokenaiDesignKit } from './design-kit';
import { EX_EMBED_SCRIPT, EX_NAV_CSS, exNav, TokenaiExNavOptions } from './neutral-modern/preview-scaffold';
import { scaffoldSite } from './site-scaffolder';
import { typePackFor } from './type-packs';
import { TOKENAI_WEBSITE_TYPES, websiteTypeId } from './website-types';

/** Saklar tema bingkai ponsel ikut menggelapkan dokumen di dalam iframe. */
const FRAME_THEME_EXTRA_JS = `
    var frame = document.querySelector('iframe');
    try {
        var doc = frame.contentDocument.documentElement;
        if (dark) { doc.removeAttribute('data-tk-theme'); } else { doc.setAttribute('data-tk-theme', 'dark'); }
    } catch (e) { /* lintas asal: biarkan */ }
`;

/**
 * Bingkai ponsel demo: beranda jenis itu dirender di iframe selebar ponsel sehingga media
 * query kit benar-benar teruji — pola yang sama dengan `examples/*-mobile.html`.
 */
function phoneFrame(kit: TokenaiDesignKit, typeLabel: string, navBar: string): string {
    const fontLinks = kit.manifest.fonts
        .filter(font => font.import)
        .map(font => `<link href="${font.import}" rel="stylesheet">`)
        .join('\n');
    return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
${fontLinks}
<link rel="stylesheet" href="../../styles.css">
<script src="${kit.manifest.icons.script}"></script>
<title>${kit.manifest.title} — ${typeLabel} (Ponsel)</title>
<style>
    ${EX_NAV_CSS}
    body { min-height: 100vh; margin: 0; box-sizing: border-box; background: var(--tk-color-surface-2); }
    .ex-stage { display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 20px; }
    .ex-device { width: 412px; max-width: 100%; height: 780px; max-height: calc(100vh - 150px); min-height: 420px; border: 12px solid #18181B; border-radius: 48px; background: #18181B; box-shadow: var(--tk-shadow-lg); overflow: hidden; flex: none; }
    .ex-device iframe { width: 100%; height: 100%; border: none; border-radius: 36px; background: var(--tk-color-background); }
</style>
</head>
<body>
${navBar}
<div class="ex-stage">
    <div class="ex-device"><iframe src="index.html?tk-embed" title="${typeLabel} versi ponsel"></iframe></div>
    <p class="tk-caption">${typeLabel} &mdash; lebar 388px, media query kit aktif seperti di ponsel sungguhan.</p>
</div>
</body>
</html>
`;
}

/**
 * Situs contoh per jenis website di `demo/<id>/`: SATU rakitan scaffolder per jenis publik,
 * diisi type pack jenis itu (brand fiktif, headline, statistik, testimoni yang khas), dengan
 * halaman = pembuka SEO + halaman inti jenisnya. Navigasinya per jenis secara alami — halaman
 * yang dirakit memang cuma milik jenis itu — dan dropdown Jenis Website dipanggang dengan
 * label + item aktif, tanpa skrip state. Demo memakai scaffolder produksi yang sama dengan
 * wizard, jadi pratinjau = persis hasil rakitan proyek pengguna.
 *
 * Berkas demo BUKAN bagian kontrak kit (`kit.files`): dirakit saat pratinjau ditulis (lokal)
 * atau saat export (zip distribusi), dan disaring saat kit diterapkan ke workspace.
 * `styles.css` tidak digandakan per folder — semua halaman demo menunjuk `../../styles.css`
 * milik kit (yang juga sudah berpalet pilihan pengguna saat pratinjau lokal).
 */
export function buildDemoPreviewFiles(kit: TokenaiDesignKit): Record<string, string> {
    if (!kit.files['partials/header.html'] || !kit.files['partials/footer.html']) {
        return {};
    }
    const files: Record<string, string> = {};
    const navStyle = `<style>${EX_NAV_CSS}\n.ap-header { top: 48px; }\n.ex-embedded .ap-header { top: 0; }</style>`;
    for (const type of TOKENAI_WEBSITE_TYPES) {
        if (type.app) {
            continue;
        }
        const id = websiteTypeId(type);
        const pack = typePackFor(type);
        const result = scaffoldSite(kit, {
            brand: pack.brand,
            description: pack.description,
            pages: ['Beranda', 'Tentang Kami', ...type.corePages, 'Hubungi Kami', 'Pertanyaan Umum (FAQ)'],
            copy: pack.copy,
            recipe: pack.recipe
        });
        const navOptions: Omit<TokenaiExNavOptions, 'device'> = { activeType: { id, label: type.label } };
        for (const [path, content] of Object.entries(result.files)) {
            // robots/sitemap milik situs produksi; styles.css dirujuk dari akar kit.
            if (!path.endsWith('.html')) {
                continue;
            }
            const navBar = exNav(kit.manifest.title, 'demo', '../../', {
                ...navOptions,
                device: { active: 'web', webHref: path, mobileHref: 'ponsel.html' }
            });
            files[`demo/${id}/${path}`] = content
                .replace('<link rel="stylesheet" href="styles.css">', '<link rel="stylesheet" href="../../styles.css">')
                .replace('</head>', `${navStyle}\n</head>`)
                .replace(/<body([^>]*)>/, `<body$1>\n${EX_EMBED_SCRIPT}\n${navBar}`);
        }
        if (result.files['site.js']) {
            files[`demo/${id}/site.js`] = result.files['site.js'];
        }
        const frameNav = exNav(kit.manifest.title, 'demo', '../../', {
            ...navOptions,
            device: { active: 'mobile', webHref: 'index.html', mobileHref: 'ponsel.html' },
            extraThemeJs: FRAME_THEME_EXTRA_JS
        });
        files[`demo/${id}/ponsel.html`] = phoneFrame(kit, type.label, frameNav);
    }
    return files;
}
