/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len */

import { TokenaiScaffoldResult } from './site-scaffolder';

/**
 * Konverter stack deterministik — murni string, nol token.
 *
 * Sebelumnya hasil rakitan scaffolder untuk stack ber-framework ditaruh di `design-scaffold/`
 * dan MODEL yang mengonversinya file demi file. Pada sesi nyata itulah ledakan token terjadi:
 * belasan halaman HTML utuh dibaca ke konteks, ditulis ulang sebagai komponen, dan seluruh
 * isinya terkirim ulang di setiap putaran berikutnya — jutaan token untuk pekerjaan yang
 * sepenuhnya mekanis. Konversinya memang mekanis KARENA kita mengendalikan bentuk masukannya:
 * semua halaman lahir dari arketipe kit yang markup-nya kita tulis sendiri, jadi transformasi
 * `class`→`className`, gaya inline→objek JSX, dan pemetaan tautan bisa dijamin benar tanpa
 * satu pun keputusan model. Model tinggal kebagian copywriting.
 */

export interface TokenaiStackConversionInput {
    brand: string;
    /** Path workspace-relatif berkas logo (mis. `.tokenai/out/images/logo-x.svg`). */
    logoPath?: string;
}

export interface TokenaiStackConversion {
    /** Label target untuk laporan (mis. `Next.js (App Router)`). */
    target: string;
    /** Berkas teks siap tulis, path relatif akar workspace. */
    files: Record<string, string>;
    /** Berkas biner yang harus DISALIN pemanggil (logo dsb.) — konverter hanya memegang teks. */
    assetCopies: { from: string; to: string }[];
    /** Perintah proyek hasil konversi — masuk STACK.md dan laporan ke model. */
    commands: { install: string; dev: string; build: string };
}

/** Target konversi native yang tersedia. */
export type TokenaiStackTarget =
    | 'nextjs' | 'astro' | 'vite' | 'nuxt' | 'sveltekit' | 'react-router'
    | 'laravel' | 'django' | 'rails' | 'wordpress'
    | 'express' | 'nestjs' | 'fastapi';

/**
 * Target konversi yang tersedia untuk satu nilai stack wizard; `undefined` = tanpa konverter
 * (jatuh ke jalur agent lewat `design-scaffold/`). Yang SENGAJA tidak diberi konverter:
 * - Angular: template-nya menuntut escaping `@` dan `{`/`}` di teks (control-flow syntax) —
 *   copywriting bebas membuat transformasi deterministiknya rapuh.
 * - Laravel + Inertia: dua sisi build (composer + vite/react) yang saling terkait — terlalu
 *   banyak keputusan proyek untuk dirakit buta.
 */
export function detectStackTarget(stack: string | undefined): TokenaiStackTarget | undefined {
    if (!stack) {
        return undefined;
    }
    const value = stack.trim();
    if (/inertia/i.test(value) || /angular/i.test(value)) {
        return undefined;
    }
    if (/next\.js/i.test(value)) {
        return 'nextjs';
    }
    if (/^astro\b/i.test(value)) {
        return 'astro';
    }
    if (/vite/i.test(value)) {
        return 'vite';
    }
    if (/nuxt/i.test(value)) {
        return 'nuxt';
    }
    if (/svelte/i.test(value)) {
        return 'sveltekit';
    }
    if (/remix|react router/i.test(value)) {
        return 'react-router';
    }
    if (/laravel/i.test(value)) {
        return 'laravel';
    }
    if (/wordpress/i.test(value)) {
        return 'wordpress';
    }
    if (/express/i.test(value)) {
        return 'express';
    }
    if (/nest/i.test(value)) {
        return 'nestjs';
    }
    if (/django/i.test(value)) {
        return 'django';
    }
    if (/fastapi/i.test(value)) {
        return 'fastapi';
    }
    if (/rails/i.test(value)) {
        return 'rails';
    }
    return undefined;
}

/** Konversi hasil scaffold ke proyek framework; `undefined` bila stack tidak punya konverter. */
export function convertScaffold(
    stack: string | undefined,
    scaffold: TokenaiScaffoldResult,
    input: TokenaiStackConversionInput
): TokenaiStackConversion | undefined {
    const target = detectStackTarget(stack);
    if (!target || scaffold.pages.length === 0) {
        return undefined;
    }
    // Keluarga server statis tidak butuh pembacaan — hasil scaffold disajikan apa adanya
    // dari public/ (tautan .html tetap valid), servernya saja yang ditulis.
    if (target === 'express' || target === 'nestjs' || target === 'fastapi') {
        return toStaticServer(target, scaffold, input);
    }
    const parsed = parseScaffold(scaffold, input);
    switch (target) {
        case 'nextjs': return toNextJs(parsed, input);
        case 'astro': return toAstro(parsed, input);
        case 'vite': return toViteSpa(parsed, input);
        case 'nuxt': return toNuxt(parsed, input);
        case 'sveltekit': return toSvelteKit(parsed, input);
        case 'react-router': return toReactRouter(parsed, input);
        case 'laravel': return toLaravel(parsed, input);
        case 'django': return toDjango(parsed, input);
        case 'rails': return toRails(parsed, input);
        default: return toWordPress(parsed, input);
    }
}

/* ================================================================ */
/* Pembacaan hasil scaffold                                          */
/* ================================================================ */

interface ParsedNavLink { href: string; label: string; }

interface ParsedPage {
    file: string;
    /** Route framework: `/` untuk index, `/tentang-kami` untuk sisanya. */
    route: string;
    label: string;
    slug: string;
    isHome: boolean;
    /** Judul TANPA sufiks ` — Brand` (template layout yang menambahkannya kembali). */
    title: string;
    description: string;
    /** JSON-LD mentah (isi tag script, tanpa tag-nya); kosong bila tidak ada. */
    jsonLd: string;
    /** Isi <main>, tautan sudah dipetakan ke route. */
    main: string;
}

interface ParsedScaffold {
    baseUrl: string;
    homeTitle: string;
    homeDescription: string;
    fontLinks: string[];
    iconScript: string;
    /** Blok CSS arketipe (`ap-*`) dari <style> di head. */
    archetypeCss: string;
    /** HTML logo di header (img atau span), tautan/aset sudah dipetakan. */
    logoHtml: string;
    navLinks: ParsedNavLink[];
    /** HTML dalam tombol CTA header (label + ikon) dan route tujuannya. */
    ctaInner: string;
    ctaRoute: string;
    /** HTML dalam tombol burger (ikon menu). */
    burgerInner: string;
    /** HTML dalam sakelar tema (ikon bulan + matahari); kosong bila scaffold-nya belum punya. */
    themeInner: string;
    /** Footer utuh, tautan/aset sudah dipetakan. */
    footerHtml: string;
    stylesCss: string;
    /** Perilaku dasar situs (tab/galeri/qty/cari) — dipindah ke public/ framework apa adanya. */
    siteJs: string;
    robotsTxt: string;
    /** sitemap.xml dengan URL `.html` sudah dipetakan ke route. */
    sitemapXml: string;
    pages: ParsedPage[];
}

function routeOf(file: string): string {
    return file === 'index.html' ? '/' : `/${file.replace(/\.html$/, '')}`;
}

/**
 * Skrip pemulih tema yang jalan sebelum paint — tanpa ini pengguna mode gelap melihat kilatan
 * putih di setiap navigasi. Disuntik inline di awal <body>/<head> semua target konversi.
 */
const THEME_INIT_JS = "try{if(localStorage.getItem('tk-theme')==='dark'){document.documentElement.setAttribute('data-tk-theme','dark')}}catch(e){}";

/**
 * Isi onclick sakelar tema untuk target ber-HTML mentah (Astro); padanan komponen client di
 * Next. Diekspor untuk perbaikan infrastruktur pasca-copywriting (tokenai-brand-assets-tool).
 */
export const THEME_TOGGLE_JS = "var r=document.documentElement;var d=r.getAttribute('data-tk-theme')==='dark';"
    + "if(d){r.removeAttribute('data-tk-theme')}else{r.setAttribute('data-tk-theme','dark')}"
    + "try{localStorage.setItem('tk-theme',d?'light':'dark')}catch(e){}";

/** Petakan tautan internal `x.html` → route framework; tautan luar/anchor tidak disentuh. */
function rewriteLinks(html: string): string {
    return html.replace(/href="([a-z0-9-]+\.html)"/g, (_, file: string) => `href="${routeOf(file)}"`);
}

/** Petakan src logo ke `/assets/<berkas>` — folder `public/` framework yang melayaninya. */
function rewriteLogoSrc(html: string, logoPath: string | undefined): string {
    if (!logoPath) {
        return html;
    }
    const basename = logoPath.split('/').pop()!;
    return html
        .replace(new RegExp(`src="(?:\\.\\./)*${logoPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g'), `src="/assets/${basename}"`);
}

function parseScaffold(scaffold: TokenaiScaffoldResult, input: TokenaiStackConversionInput): ParsedScaffold {
    const homePage = scaffold.pages.find(page => page.file === 'index.html') ?? scaffold.pages[0];
    const homeHtml = scaffold.files[homePage.file];

    const canonical = /<link rel="canonical" href="([^"]+)">/.exec(homeHtml)?.[1] ?? 'https://contoh.id/';
    const baseUrl = canonical.replace(/\/$/, '');
    const homeTitle = /<title>([\s\S]*?)<\/title>/.exec(homeHtml)?.[1]?.trim() ?? input.brand;
    const homeDescription = /<meta name="description" content="([^"]*)">/.exec(homeHtml)?.[1] ?? '';
    const fontLinks = [...homeHtml.matchAll(/<link href="(https:\/\/fonts\.[^"]+)" rel="stylesheet">/g)].map(match => match[1]);
    const iconScript = /<script src="([^"]+)"><\/script>/.exec(homeHtml)?.[1] ?? '';
    const archetypeCss = /<style>\n?([\s\S]*?)<\/style>/.exec(homeHtml)?.[1] ?? '';

    const headerHtml = /<header class="ap-header">[\s\S]*?<\/header>/.exec(homeHtml)?.[0] ?? '';
    const logoHtml = rewriteLogoSrc(/<a class="ap-logo" href="index\.html">([\s\S]*?)<\/a>/.exec(headerHtml)?.[1] ?? `<span>${input.brand}</span>`, input.logoPath);
    const navLinks: ParsedNavLink[] = [...headerHtml.matchAll(/<a class="tk-navbar-link[^"]*" href="([^"]+)">([\s\S]*?)<\/a>/g)]
        .map(match => ({ href: routeOf(match[1]), label: match[2].trim() }));
    const cta = /<a class="[^"]*ap-nav-cta[^"]*" href="([^"]+)">([\s\S]*?)<\/a>/.exec(headerHtml);
    const burgerInner = /<button class="tk-btn tk-btn-ghost ap-burger"[^>]*>([\s\S]*?)<\/button>/.exec(headerHtml)?.[1] ?? '';
    const themeInner = /<button class="tk-btn tk-btn-ghost ap-theme"[^>]*>([\s\S]*?)<\/button>/.exec(headerHtml)?.[1] ?? '';

    const footerRaw = /<footer class="ap-footer">[\s\S]*?<\/footer>/.exec(homeHtml)?.[0] ?? '';
    const footerHtml = rewriteLogoSrc(rewriteLinks(footerRaw), input.logoPath);

    const pages: ParsedPage[] = scaffold.pages.map(page => {
        const html = scaffold.files[page.file];
        const fullTitle = /<title>([\s\S]*?)<\/title>/.exec(html)?.[1]?.trim() ?? page.label;
        const suffix = ` — ${input.brand}`;
        return {
            file: page.file,
            route: routeOf(page.file),
            label: page.label,
            slug: page.slug,
            isHome: page.file === 'index.html',
            title: fullTitle.endsWith(suffix) ? fullTitle.slice(0, -suffix.length) : fullTitle,
            description: /<meta name="description" content="([^"]*)">/.exec(html)?.[1] ?? '',
            jsonLd: /<script type="application\/ld\+json">([\s\S]*?)<\/script>/.exec(html)?.[1]?.trim() ?? '',
            main: rewriteLinks(/<main id="konten-utama">([\s\S]*?)<\/main>/.exec(html)?.[1] ?? '')
        };
    });

    return {
        baseUrl, homeTitle, homeDescription, fontLinks, iconScript, archetypeCss,
        logoHtml, navLinks,
        ctaInner: cta?.[2]?.trim() ?? '', ctaRoute: cta ? routeOf(cta[1]) : '/hubungi-kami',
        burgerInner, themeInner, footerHtml,
        stylesCss: scaffold.files['styles.css'] ?? '',
        siteJs: scaffold.files['site.js'] ?? '',
        robotsTxt: scaffold.files['robots.txt'] ?? '',
        sitemapXml: (scaffold.files['sitemap.xml'] ?? '').replace(/\.html<\/loc>/g, '</loc>'),
        pages
    };
}

/* ================================================================ */
/* HTML → JSX                                                        */
/* ================================================================ */

/** `margin: 0 0 12px; color: red` → `margin: '0 0 12px', color: 'red'` (properti camelCase). */
function cssToJsxObject(css: string): string {
    return css
        .split(';')
        .map(declaration => declaration.trim())
        .filter(Boolean)
        .map(declaration => {
            const colon = declaration.indexOf(':');
            const property = declaration.slice(0, colon).trim();
            const value = declaration.slice(colon + 1).trim().replace(/'/g, "\\'");
            const camel = property.startsWith('--')
                ? `'${property}'`
                : property.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());
            return `${camel}: '${value}'`;
        })
        .join(', ');
}

/**
 * Transformasi HTML arketipe → JSX. Cakupannya SENGAJA sebatas konstruksi yang dihasilkan
 * `archetypes.ts` (atribut selalu berkutip ganda, tanpa `<`/`{` di teks) — bukan parser HTML
 * umum. Urutan langkahnya penting: elemen void ditutup dulu selagi atribut masih string polos,
 * baru gaya inline diubah jadi objek (yang memuat kutip tunggal dan kurung kurawal).
 */
function htmlToJsx(html: string): string {
    let out = html;
    // Handler inline dibuang — interaktivitas nav ditangani komponen klien.
    out = out.replace(/\son[a-z]+="[^"]*"/gi, '');
    // Elemen void ditutup mandiri.
    out = out.replace(/<(img|input|br|hr|source|link|meta)((?:[^>"]|"[^"]*")*)>/g, '<$1$2 />');
    // Input tak terkontrol: React menuntut defaultValue/defaultChecked.
    out = out.replace(/(<input\b[^>]*?)\svalue="/g, '$1 defaultValue="');
    out = out.replace(/(<input\b[^>]*?)\schecked\b/g, '$1 defaultChecked');
    // Atribut yang berganti nama di JSX.
    out = out.replace(/\bclass="/g, 'className="');
    out = out.replace(/\bfor="/g, 'htmlFor="');
    out = out.replace(/\bcolspan="/gi, 'colSpan="');
    out = out.replace(/\browspan="/gi, 'rowSpan="');
    // Komentar HTML → komentar JSX (penanda `<!-- AI: ... -->` harus selamat untuk copywriting).
    out = out.replace(/<!--([\s\S]*?)-->/g, (_, comment: string) => `{/*${comment.replace(/\*\//g, '*\u200b/')}*/}`);
    // Gaya inline → objek JSX.
    out = out.replace(/style="([^"]*)"/g, (_, css: string) => `style={{ ${cssToJsxObject(css)} }}`);
    return out;
}

/** String literal JS yang aman dari kutip/karakter khusus. */
function js(value: string): string {
    return JSON.stringify(value);
}

/** Isi template literal backtick yang aman (JSON-LD dsb.). */
function backtick(value: string): string {
    return value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

/* ================================================================ */
/* Next.js (App Router)                                              */
/* ================================================================ */

function toNextJs(parsed: ParsedScaffold, input: TokenaiStackConversionInput): TokenaiStackConversion {
    const files: Record<string, string> = {};
    const assetCopies: { from: string; to: string }[] = [];
    if (input.logoPath) {
        assetCopies.push({ from: input.logoPath, to: `public/assets/${input.logoPath.split('/').pop()}` });
    }

    const slug = input.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'situs';
    files['package.json'] = JSON.stringify({
        name: slug,
        private: true,
        scripts: { dev: 'next dev', build: 'next build', start: 'next start' },
        dependencies: { next: '^15', react: '^19', 'react-dom': '^19' }
    }, undefined, 4) + '\n';
    // ESLint tidak dipasang di proyek hasil rakitan; tanpa flag ini `next build` memungut
    // konfigurasi ESLint folder induk (monorepo/workspace pengguna) dan gagal karenanya.
    files['next.config.mjs'] = "/** @type {import('next').NextConfig} */\nconst nextConfig = {\n    eslint: { ignoreDuringBuilds: true }\n};\n\nexport default nextConfig;\n";
    files['.gitignore'] = 'node_modules/\n.next/\nout/\n';
    files['app/globals.css'] = parsed.stylesCss;
    files['app/archetype.css'] = parsed.archetypeCss;
    files['public/robots.txt'] = parsed.robotsTxt;
    files['public/sitemap.xml'] = parsed.sitemapXml;
    if (parsed.siteJs) {
        files['public/site.js'] = parsed.siteJs;
    }

    files['components/nav-link.jsx'] = `'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/** Tautan navigasi yang menandai dirinya aktif dari route berjalan. */
export default function NavLink({ href, children }) {
    const pathname = usePathname();
    const active = pathname === href;
    return (
        <Link className={\`tk-navbar-link\${active ? ' tk-navbar-link-active' : ''}\`} href={href}>
            {children}
        </Link>
    );
}
`;

    files['components/nav-toggle.jsx'] = `'use client';

/** Tombol burger menu mobile — membuka/menutup panel navigasi. */
export default function NavToggle({ children }) {
    return (
        <button
            className='tk-btn tk-btn-ghost ap-burger'
            type='button'
            aria-label='Buka menu'
            aria-expanded='false'
            aria-controls='ap-nav'
            onClick={event => {
                const nav = document.getElementById('ap-nav');
                const open = nav ? nav.classList.toggle('ap-nav-open') : false;
                event.currentTarget.setAttribute('aria-expanded', String(open));
            }}
        >
            {children}
        </button>
    );
}
`;

    files['components/theme-toggle.jsx'] = `'use client';

/** Sakelar tema terang/gelap — menulis data-tk-theme di <html> dan mengingatnya di localStorage. */
export default function ThemeToggle({ children }) {
    return (
        <button
            className='tk-btn tk-btn-ghost ap-theme'
            type='button'
            aria-label='Ganti tema terang/gelap'
            title='Ganti tema terang/gelap'
            onClick={() => {
                const root = document.documentElement;
                const dark = root.getAttribute('data-tk-theme') === 'dark';
                if (dark) {
                    root.removeAttribute('data-tk-theme');
                } else {
                    root.setAttribute('data-tk-theme', 'dark');
                }
                try {
                    localStorage.setItem('tk-theme', dark ? 'light' : 'dark');
                } catch {
                    /* penyimpanan penuh/terblokir — tema tetap berganti untuk sesi ini */
                }
            }}
        >
            {children}
        </button>
    );
}
`;

    // Footer hidup di komponen terpisah supaya copywriting AI tidak pernah punya alasan
    // membuka layout.jsx — riwayatnya: model mengedit teks footer di layout dan ikut
    // menghapus ThemeToggle/Script, mematikan tema gelap dan interaktivitas seluruh situs.
    files['components/site-footer.jsx'] = `/*
 * Footer situs — file INI tempat copywriting footer (alamat, kontak, jam buka, sosial).
 * Ganti hanya TEKSNYA; struktur, className, dan ikon dibiarkan.
 */
export default function SiteFooter() {
    return (
        <>
${htmlToJsx(parsed.footerHtml)}
        </>
    );
}
`;

    const navItems = parsed.navLinks
        .map(link => `                            <NavLink href=${js(link.href)}>${link.label}</NavLink>`)
        .join('\n');
    const fontLinkJsx = parsed.fontLinks
        .map(href => `                <link href=${js(href)} rel='stylesheet' />`)
        .join('\n');
    const themeToggleJsx = parsed.themeInner
        ? `\n                        <ThemeToggle>${htmlToJsx(parsed.themeInner)}</ThemeToggle>`
        : '';
    files['app/layout.jsx'] = `import './globals.css';
import './archetype.css';
import Link from 'next/link';
import Script from 'next/script';
import NavLink from '../components/nav-link';
import NavToggle from '../components/nav-toggle';
import SiteFooter from '../components/site-footer';
import ThemeToggle from '../components/theme-toggle';

export const metadata = {
    metadataBase: new URL(${js(parsed.baseUrl)}),
    title: {
        default: ${js(parsed.homeTitle)},
        template: ${js(`%s — ${input.brand}`)}
    },
    description: ${js(parsed.homeDescription)},
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        siteName: ${js(input.brand)},
        locale: 'id_ID'
    }
};

/*
 * INFRASTRUKTUR SITUS — JANGAN MENGEDIT FILE INI SAAT COPYWRITING/PEMBERSIHAN MARKER.
 * NavLink, NavToggle, ThemeToggle, dan kedua <Script> di bawah menghidupkan navigasi mobile,
 * sakelar tema gelap, dan interaktivitas halaman (tab, galeri, filter, pencarian).
 * File ini TIDAK berisi teks contoh; copywriting footer dilakukan di
 * components/site-footer.jsx, bukan di sini.
 */
export default function RootLayout({ children }) {
    return (
        <html lang='id'>
            <body>
                <script dangerouslySetInnerHTML={{ __html: ${js(THEME_INIT_JS)} }} />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
${fontLinkJsx}
                <a className='ap-skip' href='#konten-utama'>Langsung ke konten utama</a>
                <header className='ap-header'>
                    <nav className='tk-navbar' aria-label='Navigasi utama'>
                        <Link className='ap-logo' href='/'>${htmlToJsx(parsed.logoHtml)}</Link>
                        <div className='ap-links' id='ap-nav'>
${navItems}
                            <Link className='tk-btn tk-btn-primary tk-btn-sm ap-nav-cta' href=${js(parsed.ctaRoute)}>${htmlToJsx(parsed.ctaInner)}</Link>
                        </div>${themeToggleJsx}
                        <NavToggle>${htmlToJsx(parsed.burgerInner)}</NavToggle>
                    </nav>
                </header>
                {children}
                <SiteFooter />
                <Script src=${js(parsed.iconScript)} strategy='afterInteractive' />${parsed.siteJs ? `
                <Script src='/site.js' strategy='afterInteractive' />` : ''}
            </body>
        </html>
    );
}
`;

    for (const page of parsed.pages) {
        const dir = page.isHome ? 'app' : `app/${page.slug}`;
        const metadataLines = page.isHome
            ? [`    alternates: { canonical: '/' }`]
            : [
                `    title: ${js(page.title)},`,
                `    description: ${js(page.description)},`,
                `    alternates: { canonical: ${js(page.route)} }`
            ];
        const ldBlock = page.jsonLd
            ? `\nconst jsonLd = \`${backtick(page.jsonLd)}\`;\n`
            : '';
        const ldJsx = page.jsonLd
            ? `            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: jsonLd }} />\n`
            : '';
        files[`${dir}/page.jsx`] = `export const metadata = {
${metadataLines.join('\n')}
};
${ldBlock}
/*
 * CATATAN COPYWRITING: ganti hanya TEKS contoh dan penanda {AI: ...}.
 * JANGAN mengubah/menghapus elemen, className, atribut data-* (data-ap-tab, data-tk-asset,
 * data-kategori, data-value), struktur dropdown .ap-select (hanya teks labelnya yang boleh
 * diganti), id panel, maupun atribut hidden — semuanya dipakai styles.css dan site.js agar
 * dropdown, tab, galeri, filter, dan pencarian berfungsi.
 */
export default function Page() {
    return (
        <main id='konten-utama'>
${ldJsx}${htmlToJsx(page.main)}
        </main>
    );
}
`;
    }

    return {
        target: 'Next.js (App Router)',
        files,
        assetCopies,
        commands: { install: 'npm install', dev: 'npm run dev', build: 'npm run build' }
    };
}

/* ================================================================ */
/* Astro                                                             */
/* ================================================================ */

function toAstro(parsed: ParsedScaffold, input: TokenaiStackConversionInput): TokenaiStackConversion {
    const files: Record<string, string> = {};
    const assetCopies: { from: string; to: string }[] = [];
    if (input.logoPath) {
        assetCopies.push({ from: input.logoPath, to: `public/assets/${input.logoPath.split('/').pop()}` });
    }

    const slug = input.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'situs';
    files['package.json'] = JSON.stringify({
        name: slug,
        private: true,
        type: 'module',
        scripts: { dev: 'astro dev', build: 'astro build', preview: 'astro preview' },
        dependencies: { astro: '^5' }
    }, undefined, 4) + '\n';
    files['astro.config.mjs'] = "import { defineConfig } from 'astro/config';\n\nexport default defineConfig({});\n";
    files['.gitignore'] = 'node_modules/\ndist/\n.astro/\n';
    files['public/styles.css'] = parsed.stylesCss;
    files['public/robots.txt'] = parsed.robotsTxt;
    files['public/sitemap.xml'] = parsed.sitemapXml;
    if (parsed.siteJs) {
        files['public/site.js'] = parsed.siteJs;
    }

    // Footer di komponen terpisah — alasan yang sama dengan Next.js: copywriting AI tidak
    // boleh punya alasan menyentuh Base.astro yang memuat tombol tema dan site.js.
    files['src/components/Footer.astro'] = `---
// Footer situs — file INI tempat copywriting footer (alamat, kontak, jam buka, sosial).
// Ganti hanya TEKSNYA; struktur, class, dan ikon dibiarkan.
---
${parsed.footerHtml}
`;

    const fontLinkHtml = parsed.fontLinks
        .map(href => `<link href="${href}" rel="stylesheet">`)
        .join('\n');
    const navArray = parsed.navLinks
        .map(link => `    { href: ${js(link.href)}, label: ${js(link.label)} }`)
        .join(',\n');
    files['src/layouts/Base.astro'] = `---
// INFRASTRUKTUR SITUS — JANGAN MENGEDIT FILE INI SAAT COPYWRITING/PEMBERSIHAN MARKER.
// Skrip tema, site.js, tombol tema, dan burger menu di bawah menghidupkan navigasi mobile,
// mode gelap, dan interaktivitas halaman. File ini TIDAK berisi teks contoh; copywriting
// footer dilakukan di src/components/Footer.astro, bukan di sini.
import Footer from '../components/Footer.astro';
const { title, description, path } = Astro.props;
const base = ${js(parsed.baseUrl)};
const nav = [
${navArray}
];
---
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script is:inline>${THEME_INIT_JS}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
${fontLinkHtml}
<link rel="stylesheet" href="/styles.css">
<script is:inline src="${parsed.iconScript}"></script>
${parsed.siteJs ? '<script is:inline src="/site.js" defer></script>\n' : ''}
<title>{title}</title>
<meta name="description" content={description}>
<link rel="canonical" href={base + path}>
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content=${js(input.brand)}>
<meta property="og:title" content={title}>
<meta property="og:description" content={description}>
<meta property="og:url" content={base + path}>
<meta property="og:locale" content="id_ID">
<meta name="twitter:card" content="summary_large_image">
<slot name="head" />
<style is:global>
${parsed.archetypeCss}</style>
</head>
<body>
<a class="ap-skip" href="#konten-utama">Langsung ke konten utama</a>
<header class="ap-header">
<nav class="tk-navbar" aria-label="Navigasi utama">
    <a class="ap-logo" href="/">${parsed.logoHtml}</a>
    <div class="ap-links" id="ap-nav">
        {nav.map(item => <a class={'tk-navbar-link' + (item.href === path ? ' tk-navbar-link-active' : '')} href={item.href}>{item.label}</a>)}
        <a class="tk-btn tk-btn-primary tk-btn-sm ap-nav-cta" href="${parsed.ctaRoute}">${parsed.ctaInner}</a>
    </div>
${parsed.themeInner ? `    <button class="tk-btn tk-btn-ghost ap-theme" type="button" aria-label="Ganti tema terang/gelap" title="Ganti tema terang/gelap" onclick="${THEME_TOGGLE_JS}">${parsed.themeInner}</button>\n` : ''}    <button class="tk-btn tk-btn-ghost ap-burger" aria-label="Buka menu" aria-expanded="false" aria-controls="ap-nav" onclick="var n=document.getElementById('ap-nav');var open=n.classList.toggle('ap-nav-open');this.setAttribute('aria-expanded',open)">${parsed.burgerInner}</button>
</nav>
</header>
<slot />
<Footer />
</body>
</html>
`;

    for (const page of parsed.pages) {
        const file = page.isHome ? 'src/pages/index.astro' : `src/pages/${page.slug}.astro`;
        const fullTitle = page.isHome ? parsed.homeTitle : `${page.title} — ${input.brand}`;
        const description = page.isHome ? parsed.homeDescription : page.description;
        const ldConst = page.jsonLd ? `\nconst ld = \`${backtick(page.jsonLd)}\`;` : '';
        const ldSlot = page.jsonLd
            ? '\n<script type="application/ld+json" slot="head" is:inline set:html={ld}></script>'
            : '';
        files[file] = `---
import Base from '../layouts/Base.astro';
// CATATAN COPYWRITING: ganti hanya TEKS contoh dan penanda AI. JANGAN mengubah/menghapus
// elemen, class, atribut data-* (data-ap-tab, data-tk-asset, data-kategori, data-value),
// struktur dropdown .ap-select (hanya teks labelnya yang boleh diganti), id panel, maupun
// atribut hidden — dipakai styles.css dan site.js.
${ldConst}
---
<Base title=${js(fullTitle)} description=${js(description)} path=${js(page.route)}>${ldSlot}
<main id="konten-utama">
${page.main}
</main>
</Base>
`;
    }

    return {
        target: 'Astro',
        files,
        assetCopies,
        commands: { install: 'npm install', dev: 'npm run dev', build: 'npm run build' }
    };
}

/* ================================================================ */
/* Helper bersama konverter tambahan                                 */
/* ================================================================ */

function brandSlug(brand: string): string {
    return brand.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'situs';
}

/** `tentang-kami` → `TentangKami`; awalan angka diberi huruf agar sah sebagai identifier. */
function pascalCase(text: string): string {
    const name = text.split(/[^a-zA-Z0-9]+/).filter(Boolean)
        .map(word => word[0].toUpperCase() + word.slice(1)).join('');
    return /^[0-9]/.test(name) ? `P${name}` : (name || 'Halaman');
}

/** Isi onclick tombol burger untuk target ber-HTML mentah (Blade/Django/ERB/WP). */
const BURGER_ONCLICK = "var n=document.getElementById('ap-nav');var open=n.classList.toggle('ap-nav-open');this.setAttribute('aria-expanded',open)";

function fontLinksHtml(parsed: ParsedScaffold): string {
    return parsed.fontLinks.map(href => `<link href="${href}" rel="stylesheet">`).join('\n');
}

/** Tombol tema + burger versi HTML polos — dipakai semua target template server. */
function plainNavButtons(parsed: ParsedScaffold): string {
    const theme = parsed.themeInner
        ? `    <button class="tk-btn tk-btn-ghost ap-theme" type="button" aria-label="Ganti tema terang/gelap" title="Ganti tema terang/gelap" onclick="${THEME_TOGGLE_JS}">${parsed.themeInner}</button>\n`
        : '';
    return `${theme}    <button class="tk-btn tk-btn-ghost ap-burger" aria-label="Buka menu" aria-expanded="false" aria-controls="ap-nav" onclick="${BURGER_ONCLICK}">${parsed.burgerInner}</button>`;
}

/** Judul lengkap halaman (beranda memakai judul utuh scaffold). */
function fullTitleOf(parsed: ParsedScaffold, page: ParsedPage, brand: string): string {
    return page.isHome ? parsed.homeTitle : `${page.title} — ${brand}`;
}

function descriptionOf(parsed: ParsedScaffold, page: ParsedPage): string {
    return page.isHome ? parsed.homeDescription : page.description;
}

/* ================================================================ */
/* React + Vite (SPA)                                                */
/* ================================================================ */

function toViteSpa(parsed: ParsedScaffold, input: TokenaiStackConversionInput): TokenaiStackConversion {
    const files: Record<string, string> = {};
    const assetCopies: { from: string; to: string }[] = [];
    if (input.logoPath) {
        assetCopies.push({ from: input.logoPath, to: `public/assets/${input.logoPath.split('/').pop()}` });
    }

    files['package.json'] = JSON.stringify({
        name: brandSlug(input.brand),
        private: true,
        type: 'module',
        scripts: { dev: 'vite', build: 'vite build', preview: 'vite preview' },
        dependencies: { react: '^19', 'react-dom': '^19', 'react-router-dom': '^7' },
        devDependencies: { vite: '^6', '@vitejs/plugin-react': '^4' }
    }, undefined, 4) + '\n';
    files['vite.config.js'] = "import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\n\nexport default defineConfig({ plugins: [react()] });\n";
    files['.gitignore'] = 'node_modules/\ndist/\n';
    files['public/styles.css'] = parsed.stylesCss;
    files['public/archetype.css'] = parsed.archetypeCss;
    files['public/robots.txt'] = parsed.robotsTxt;
    files['public/sitemap.xml'] = parsed.sitemapXml;
    if (parsed.siteJs) {
        files['public/site.js'] = parsed.siteJs;
    }

    files['index.html'] = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script>${THEME_INIT_JS}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
${fontLinksHtml(parsed)}
<link rel="stylesheet" href="/styles.css">
<link rel="stylesheet" href="/archetype.css">
<script src="${parsed.iconScript}"></script>
${parsed.siteJs ? '<script src="/site.js" defer></script>\n' : ''}<title>${parsed.homeTitle}</title>
<meta name="description" content="${parsed.homeDescription}">
</head>
<body>
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
</body>
</html>
`;

    // Footer terpisah — alasan yang sama dengan Next.js: copywriting tidak menyentuh Layout.
    files['src/SiteFooter.jsx'] = `/*
 * Footer situs — file INI tempat copywriting footer (alamat, kontak, jam buka, sosial).
 * Ganti hanya TEKSNYA; struktur, className, dan ikon dibiarkan.
 */
export default function SiteFooter() {
    return (
        <>
${htmlToJsx(parsed.footerHtml)}
        </>
    );
}
`;

    const navItems = parsed.navLinks
        .map(link => `                    <NavLink className={({ isActive }) => \`tk-navbar-link\${isActive ? ' tk-navbar-link-active' : ''}\`} to=${js(link.href)} end>${link.label}</NavLink>`)
        .join('\n');
    const themeButton = parsed.themeInner
        ? `\n            <button className='tk-btn tk-btn-ghost ap-theme' type='button' aria-label='Ganti tema terang/gelap' title='Ganti tema terang/gelap' onClick={toggleTheme}>${htmlToJsx(parsed.themeInner)}</button>`
        : '';
    files['src/Layout.jsx'] = `import { Link, NavLink, Outlet } from 'react-router-dom';
import SiteFooter from './SiteFooter.jsx';

/*
 * INFRASTRUKTUR SITUS — JANGAN MENGEDIT FILE INI SAAT COPYWRITING/PEMBERSIHAN MARKER.
 * NavLink, tombol tema, dan burger di bawah menghidupkan navigasi mobile serta mode gelap.
 * File ini TIDAK berisi teks contoh; copywriting footer dilakukan di src/SiteFooter.jsx.
 */
function toggleTheme() {
    const root = document.documentElement;
    const dark = root.getAttribute('data-tk-theme') === 'dark';
    if (dark) {
        root.removeAttribute('data-tk-theme');
    } else {
        root.setAttribute('data-tk-theme', 'dark');
    }
    try {
        localStorage.setItem('tk-theme', dark ? 'light' : 'dark');
    } catch {
        /* penyimpanan penuh/terblokir — tema tetap berganti untuk sesi ini */
    }
}

function toggleNav(event) {
    const nav = document.getElementById('ap-nav');
    const open = nav ? nav.classList.toggle('ap-nav-open') : false;
    event.currentTarget.setAttribute('aria-expanded', String(open));
}

export default function Layout() {
    return (
        <>
            <a className='ap-skip' href='#konten-utama'>Langsung ke konten utama</a>
            <header className='ap-header'>
                <nav className='tk-navbar' aria-label='Navigasi utama'>
                    <Link className='ap-logo' to='/'>${htmlToJsx(parsed.logoHtml)}</Link>
                    <div className='ap-links' id='ap-nav'>
${navItems}
                        <Link className='tk-btn tk-btn-primary tk-btn-sm ap-nav-cta' to=${js(parsed.ctaRoute)}>${htmlToJsx(parsed.ctaInner)}</Link>
                    </div>${themeButton}
                    <button className='tk-btn tk-btn-ghost ap-burger' aria-label='Buka menu' aria-expanded='false' aria-controls='ap-nav' onClick={toggleNav}>${htmlToJsx(parsed.burgerInner)}</button>
                </nav>
            </header>
            <Outlet />
            <SiteFooter />
        </>
    );
}
`;

    const imports: string[] = [];
    const routes: string[] = [];
    for (const page of parsed.pages) {
        const component = pascalCase(page.slug);
        imports.push(`import ${component} from './pages/${component}.jsx';`);
        routes.push(page.isHome
            ? `                    <Route index element={<${component} />} />`
            : `                    <Route path=${js(page.route.slice(1))} element={<${component} />} />`);

        const ldBlock = page.jsonLd ? `\nconst jsonLd = \`${backtick(page.jsonLd)}\`;\n` : '';
        const ldJsx = page.jsonLd
            ? `            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: jsonLd }} />\n`
            : '';
        files[`src/pages/${component}.jsx`] = `import { useEffect } from 'react';
${ldBlock}
/*
 * CATATAN COPYWRITING: ganti hanya TEKS contoh dan penanda {AI: ...}.
 * JANGAN mengubah/menghapus elemen, className, atribut data-* (data-ap-tab, data-tk-asset,
 * data-kategori, data-value), struktur dropdown .ap-select (hanya teks labelnya yang boleh
 * diganti), id panel, maupun atribut hidden — dipakai styles.css dan site.js.
 */
export default function ${component}() {
    useEffect(() => {
        document.title = ${js(fullTitleOf(parsed, page, input.brand))};
    }, []);
    return (
        <main id='konten-utama'>
${ldJsx}${htmlToJsx(page.main)}
        </main>
    );
}
`;
    }

    files['src/main.jsx'] = `import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
${imports.join('\n')}

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
${routes.join('\n')}
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
`;

    return {
        target: 'React + Vite (SPA)',
        files,
        assetCopies,
        commands: { install: 'npm install', dev: 'npm run dev', build: 'npm run build' }
    };
}

/* ================================================================ */
/* Nuxt (Vue)                                                        */
/* ================================================================ */

function toNuxt(parsed: ParsedScaffold, input: TokenaiStackConversionInput): TokenaiStackConversion {
    const files: Record<string, string> = {};
    const assetCopies: { from: string; to: string }[] = [];
    if (input.logoPath) {
        assetCopies.push({ from: input.logoPath, to: `public/assets/${input.logoPath.split('/').pop()}` });
    }

    files['package.json'] = JSON.stringify({
        name: brandSlug(input.brand),
        private: true,
        type: 'module',
        scripts: { dev: 'nuxt dev', build: 'nuxt build', preview: 'nuxt preview' },
        dependencies: { nuxt: '^3.15' }
    }, undefined, 4) + '\n';
    files['.gitignore'] = 'node_modules/\n.nuxt/\n.output/\n';
    files['assets/css/styles.css'] = parsed.stylesCss;
    files['assets/css/archetype.css'] = parsed.archetypeCss;
    files['public/robots.txt'] = parsed.robotsTxt;
    files['public/sitemap.xml'] = parsed.sitemapXml;
    if (parsed.siteJs) {
        files['public/site.js'] = parsed.siteJs;
    }

    const headLinks = [
        "{ rel: 'preconnect', href: 'https://fonts.googleapis.com' }",
        ...parsed.fontLinks.map(href => `{ rel: 'stylesheet', href: ${js(href)} }`)
    ].join(',\n                ');
    const headScripts = [
        `{ innerHTML: ${js(THEME_INIT_JS)} }`,
        `{ src: ${js(parsed.iconScript)}, defer: true }`,
        ...(parsed.siteJs ? ["{ src: '/site.js', defer: true }"] : [])
    ].join(',\n                ');
    files['nuxt.config.ts'] = `// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-01-01',
    css: ['~/assets/css/styles.css', '~/assets/css/archetype.css'],
    vue: {
        compilerOptions: {
            // Ikon kit adalah web component iconify — bukan komponen Vue.
            isCustomElement: tag => tag === 'iconify-icon'
        }
    },
    app: {
        head: {
            htmlAttrs: { lang: 'id' },
            meta: [
                { name: 'robots', content: 'index, follow' },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: ${js(input.brand)} },
                { property: 'og:locale', content: 'id_ID' },
                { name: 'twitter:card', content: 'summary_large_image' }
            ],
            link: [
                ${headLinks}
            ],
            script: [
                ${headScripts}
            ]
        }
    }
});
`;

    // Footer terpisah — copywriting tidak boleh punya alasan menyentuh app.vue.
    files['components/SiteFooter.vue'] = `<!--
Footer situs — file INI tempat copywriting footer (alamat, kontak, jam buka, sosial).
Ganti hanya TEKSNYA; struktur, class, dan ikon dibiarkan.
-->
<template>
${parsed.footerHtml}
</template>
`;

    const navArray = parsed.navLinks
        .map(link => `    { href: ${js(link.href)}, label: ${js(link.label)} }`)
        .join(',\n');
    const themeButton = parsed.themeInner
        ? `\n        <button class="tk-btn tk-btn-ghost ap-theme" type="button" aria-label="Ganti tema terang/gelap" title="Ganti tema terang/gelap" @click="toggleTheme">${parsed.themeInner}</button>`
        : '';
    files['app.vue'] = `<script setup>
// INFRASTRUKTUR SITUS — JANGAN MENGEDIT FILE INI SAAT COPYWRITING/PEMBERSIHAN MARKER.
// Nav aktif, tombol tema, dan burger di bawah menghidupkan navigasi mobile serta mode gelap.
// File ini TIDAK berisi teks contoh; copywriting footer dilakukan di components/SiteFooter.vue.
const route = useRoute();
const nav = [
${navArray}
];

function toggleTheme() {
    const root = document.documentElement;
    const dark = root.getAttribute('data-tk-theme') === 'dark';
    if (dark) {
        root.removeAttribute('data-tk-theme');
    } else {
        root.setAttribute('data-tk-theme', 'dark');
    }
    try {
        localStorage.setItem('tk-theme', dark ? 'light' : 'dark');
    } catch {
        /* penyimpanan penuh/terblokir — tema tetap berganti untuk sesi ini */
    }
}

function toggleNav(event) {
    const el = document.getElementById('ap-nav');
    const open = el ? el.classList.toggle('ap-nav-open') : false;
    event.currentTarget.setAttribute('aria-expanded', String(open));
}
</script>

<template>
<div>
    <a class="ap-skip" href="#konten-utama">Langsung ke konten utama</a>
    <header class="ap-header">
        <nav class="tk-navbar" aria-label="Navigasi utama">
            <NuxtLink class="ap-logo" to="/">${parsed.logoHtml}</NuxtLink>
            <div class="ap-links" id="ap-nav">
                <NuxtLink v-for="item in nav" :key="item.href" :class="['tk-navbar-link', route.path === item.href ? 'tk-navbar-link-active' : '']" :to="item.href">{{ item.label }}</NuxtLink>
                <NuxtLink class="tk-btn tk-btn-primary tk-btn-sm ap-nav-cta" to="${parsed.ctaRoute}">${parsed.ctaInner}</NuxtLink>
            </div>${themeButton}
            <button class="tk-btn tk-btn-ghost ap-burger" aria-label="Buka menu" aria-expanded="false" aria-controls="ap-nav" @click="toggleNav">${parsed.burgerInner}</button>
        </nav>
    </header>
    <NuxtPage />
    <SiteFooter />
</div>
</template>
`;

    for (const page of parsed.pages) {
        const file = page.isHome ? 'pages/index.vue' : `pages/${page.slug}.vue`;
        const headParts = [`link: [{ rel: 'canonical', href: ${js(parsed.baseUrl + page.route)} }]`];
        if (page.jsonLd) {
            headParts.push(`script: [{ type: 'application/ld+json', innerHTML: ${js(page.jsonLd)} }]`);
        }
        files[file] = `<script setup>
// CATATAN COPYWRITING: ganti hanya TEKS contoh dan penanda AI. JANGAN mengubah/menghapus
// elemen, class, atribut data-* (data-ap-tab, data-tk-asset, data-kategori, data-value),
// struktur dropdown .ap-select (hanya teks labelnya yang boleh diganti), id panel, maupun
// atribut hidden — dipakai styles.css dan site.js.
useSeoMeta({
    title: ${js(fullTitleOf(parsed, page, input.brand))},
    description: ${js(descriptionOf(parsed, page))},
    ogTitle: ${js(fullTitleOf(parsed, page, input.brand))},
    ogDescription: ${js(descriptionOf(parsed, page))}
});
useHead({ ${headParts.join(', ')} });
</script>

<template>
<main id="konten-utama">
${page.main}
</main>
</template>
`;
    }

    return {
        target: 'Nuxt (Vue)',
        files,
        assetCopies,
        commands: { install: 'npm install', dev: 'npm run dev', build: 'npm run build' }
    };
}

/* ================================================================ */
/* SvelteKit                                                         */
/* ================================================================ */

function toSvelteKit(parsed: ParsedScaffold, input: TokenaiStackConversionInput): TokenaiStackConversion {
    const files: Record<string, string> = {};
    const assetCopies: { from: string; to: string }[] = [];
    if (input.logoPath) {
        assetCopies.push({ from: input.logoPath, to: `static/assets/${input.logoPath.split('/').pop()}` });
    }

    files['package.json'] = JSON.stringify({
        name: brandSlug(input.brand),
        private: true,
        type: 'module',
        scripts: { dev: 'vite dev', build: 'vite build', preview: 'vite preview' },
        devDependencies: {
            '@sveltejs/adapter-auto': '^3',
            '@sveltejs/kit': '^2',
            svelte: '^5',
            vite: '^5'
        }
    }, undefined, 4) + '\n';
    files['svelte.config.js'] = `import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = { kit: { adapter: adapter() } };

export default config;
`;
    files['vite.config.js'] = "import { sveltekit } from '@sveltejs/kit/vite';\nimport { defineConfig } from 'vite';\n\nexport default defineConfig({ plugins: [sveltekit()] });\n";
    files['.gitignore'] = 'node_modules/\n.svelte-kit/\nbuild/\n';
    files['static/styles.css'] = parsed.stylesCss;
    files['static/archetype.css'] = parsed.archetypeCss;
    files['static/robots.txt'] = parsed.robotsTxt;
    files['static/sitemap.xml'] = parsed.sitemapXml;
    if (parsed.siteJs) {
        files['static/site.js'] = parsed.siteJs;
    }

    files['src/app.html'] = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script>${THEME_INIT_JS}</script>
<link rel="preconnect" href="https://fonts.googleapis.com" />
${fontLinksHtml(parsed)}
<link rel="stylesheet" href="/styles.css" />
<link rel="stylesheet" href="/archetype.css" />
<script src="${parsed.iconScript}"></script>
${parsed.siteJs ? '<script src="/site.js" defer></script>\n' : ''}%sveltekit.head%
</head>
<body data-sveltekit-preload-data="hover">
<div style="display: contents">%sveltekit.body%</div>
</body>
</html>
`;

    // Footer terpisah — copywriting tidak boleh punya alasan menyentuh +layout.svelte.
    files['src/lib/Footer.svelte'] = `<!--
Footer situs — file INI tempat copywriting footer (alamat, kontak, jam buka, sosial).
Ganti hanya TEKSNYA; struktur, class, dan ikon dibiarkan.
-->
${parsed.footerHtml}
`;

    const navArray = parsed.navLinks
        .map(link => `    { href: ${js(link.href)}, label: ${js(link.label)} }`)
        .join(',\n');
    const themeButton = parsed.themeInner
        ? `\n    <button class="tk-btn tk-btn-ghost ap-theme" type="button" aria-label="Ganti tema terang/gelap" title="Ganti tema terang/gelap" on:click={toggleTheme}>${parsed.themeInner}</button>`
        : '';
    files['src/routes/+layout.svelte'] = `<script>
// INFRASTRUKTUR SITUS — JANGAN MENGEDIT FILE INI SAAT COPYWRITING/PEMBERSIHAN MARKER.
// Nav aktif, tombol tema, dan burger di bawah menghidupkan navigasi mobile serta mode gelap.
// File ini TIDAK berisi teks contoh; copywriting footer dilakukan di src/lib/Footer.svelte.
import { page } from '$app/stores';
import Footer from '$lib/Footer.svelte';

const nav = [
${navArray}
];

function toggleTheme() {
    const root = document.documentElement;
    const dark = root.getAttribute('data-tk-theme') === 'dark';
    if (dark) {
        root.removeAttribute('data-tk-theme');
    } else {
        root.setAttribute('data-tk-theme', 'dark');
    }
    try {
        localStorage.setItem('tk-theme', dark ? 'light' : 'dark');
    } catch {
        /* penyimpanan penuh/terblokir — tema tetap berganti untuk sesi ini */
    }
}

function toggleNav(event) {
    const el = document.getElementById('ap-nav');
    const open = el ? el.classList.toggle('ap-nav-open') : false;
    event.currentTarget.setAttribute('aria-expanded', String(open));
}
</script>

<a class="ap-skip" href="#konten-utama">Langsung ke konten utama</a>
<header class="ap-header">
<nav class="tk-navbar" aria-label="Navigasi utama">
    <a class="ap-logo" href="/">${parsed.logoHtml}</a>
    <div class="ap-links" id="ap-nav">
        {#each nav as item}
            <a class="tk-navbar-link{$page.url.pathname === item.href ? ' tk-navbar-link-active' : ''}" href={item.href}>{item.label}</a>
        {/each}
        <a class="tk-btn tk-btn-primary tk-btn-sm ap-nav-cta" href="${parsed.ctaRoute}">${parsed.ctaInner}</a>
    </div>${themeButton}
    <button class="tk-btn tk-btn-ghost ap-burger" aria-label="Buka menu" aria-expanded="false" aria-controls="ap-nav" on:click={toggleNav}>${parsed.burgerInner}</button>
</nav>
</header>
<slot />
<Footer />
`;

    for (const page of parsed.pages) {
        const file = page.isHome ? 'src/routes/+page.svelte' : `src/routes/${page.slug}/+page.svelte`;
        // Tag </script> literal dipecah supaya tidak menutup blok <script> komponen.
        const ldScript = page.jsonLd
            ? `\nconst ldTag = '<script type="application/ld+json">' + ${js(page.jsonLd)} + '<' + '/script>';`
            : '';
        const ldHead = page.jsonLd ? '\n{@html ldTag}' : '';
        files[file] = `<script>
// CATATAN COPYWRITING: ganti hanya TEKS contoh dan penanda AI. JANGAN mengubah/menghapus
// elemen, class, atribut data-* (data-ap-tab, data-tk-asset, data-kategori, data-value),
// struktur dropdown .ap-select (hanya teks labelnya yang boleh diganti), id panel, maupun
// atribut hidden — dipakai styles.css dan site.js.${ldScript}
</script>

<svelte:head>
<title>${fullTitleOf(parsed, page, input.brand)}</title>
<meta name="description" content="${descriptionOf(parsed, page)}" />
<link rel="canonical" href="${parsed.baseUrl}${page.route}" />${ldHead}
</svelte:head>

<main id="konten-utama">
${page.main}
</main>
`;
    }

    return {
        target: 'SvelteKit',
        files,
        assetCopies,
        commands: { install: 'npm install', dev: 'npm run dev', build: 'npm run build' }
    };
}

/* ================================================================ */
/* Remix / React Router (v7, framework mode)                         */
/* ================================================================ */

function toReactRouter(parsed: ParsedScaffold, input: TokenaiStackConversionInput): TokenaiStackConversion {
    const files: Record<string, string> = {};
    const assetCopies: { from: string; to: string }[] = [];
    if (input.logoPath) {
        assetCopies.push({ from: input.logoPath, to: `public/assets/${input.logoPath.split('/').pop()}` });
    }

    files['package.json'] = JSON.stringify({
        name: brandSlug(input.brand),
        private: true,
        type: 'module',
        scripts: {
            dev: 'react-router dev',
            build: 'react-router build',
            start: 'react-router-serve ./build/server/index.js'
        },
        dependencies: {
            react: '^19',
            'react-dom': '^19',
            'react-router': '^7',
            '@react-router/node': '^7',
            '@react-router/serve': '^7',
            isbot: '^5'
        },
        devDependencies: { '@react-router/dev': '^7', vite: '^6' }
    }, undefined, 4) + '\n';
    files['react-router.config.js'] = "/** @type {import('@react-router/dev/config').Config} */\nexport default { ssr: true };\n";
    files['vite.config.js'] = "import { reactRouter } from '@react-router/dev/vite';\nimport { defineConfig } from 'vite';\n\nexport default defineConfig({ plugins: [reactRouter()] });\n";
    files['.gitignore'] = 'node_modules/\nbuild/\n.react-router/\n';
    files['public/styles.css'] = parsed.stylesCss;
    files['public/archetype.css'] = parsed.archetypeCss;
    files['public/robots.txt'] = parsed.robotsTxt;
    files['public/sitemap.xml'] = parsed.sitemapXml;
    if (parsed.siteJs) {
        files['public/site.js'] = parsed.siteJs;
    }

    const routeEntries = parsed.pages
        .map(page => page.isHome
            ? `    index('routes/${page.slug}.jsx')`
            : `    route(${js(page.route.slice(1))}, 'routes/${page.slug}.jsx')`)
        .join(',\n');
    files['app/routes.js'] = `import { index, route } from '@react-router/dev/routes';

export default [
${routeEntries}
];
`;

    // Footer terpisah — copywriting tidak boleh punya alasan menyentuh root.jsx.
    files['app/site-footer.jsx'] = `/*
 * Footer situs — file INI tempat copywriting footer (alamat, kontak, jam buka, sosial).
 * Ganti hanya TEKSNYA; struktur, className, dan ikon dibiarkan.
 */
export default function SiteFooter() {
    return (
        <>
${htmlToJsx(parsed.footerHtml)}
        </>
    );
}
`;

    const navItems = parsed.navLinks
        .map(link => `                            <NavLink className={({ isActive }) => \`tk-navbar-link\${isActive ? ' tk-navbar-link-active' : ''}\`} to=${js(link.href)} end>${link.label}</NavLink>`)
        .join('\n');
    const fontLinkJsx = parsed.fontLinks
        .map(href => `                <link href=${js(href)} rel='stylesheet' />`)
        .join('\n');
    const themeButton = parsed.themeInner
        ? `\n                    <button className='tk-btn tk-btn-ghost ap-theme' type='button' aria-label='Ganti tema terang/gelap' title='Ganti tema terang/gelap' onClick={toggleTheme}>${htmlToJsx(parsed.themeInner)}</button>`
        : '';
    files['app/root.jsx'] = `import { Link, Links, Meta, NavLink, Outlet, Scripts, ScrollRestoration } from 'react-router';
import SiteFooter from './site-footer';

/*
 * INFRASTRUKTUR SITUS — JANGAN MENGEDIT FILE INI SAAT COPYWRITING/PEMBERSIHAN MARKER.
 * NavLink, tombol tema, burger, dan kedua <script> di bawah menghidupkan navigasi mobile,
 * mode gelap, dan interaktivitas halaman (tab, galeri, filter, pencarian).
 * File ini TIDAK berisi teks contoh; copywriting footer dilakukan di app/site-footer.jsx.
 */
function toggleTheme() {
    const root = document.documentElement;
    const dark = root.getAttribute('data-tk-theme') === 'dark';
    if (dark) {
        root.removeAttribute('data-tk-theme');
    } else {
        root.setAttribute('data-tk-theme', 'dark');
    }
    try {
        localStorage.setItem('tk-theme', dark ? 'light' : 'dark');
    } catch {
        /* penyimpanan penuh/terblokir — tema tetap berganti untuk sesi ini */
    }
}

function toggleNav(event) {
    const nav = document.getElementById('ap-nav');
    const open = nav ? nav.classList.toggle('ap-nav-open') : false;
    event.currentTarget.setAttribute('aria-expanded', String(open));
}

export function Layout({ children }) {
    return (
        <html lang='id'>
            <head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <script dangerouslySetInnerHTML={{ __html: ${js(THEME_INIT_JS)} }} />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
${fontLinkJsx}
                <link rel='stylesheet' href='/styles.css' />
                <link rel='stylesheet' href='/archetype.css' />
                <Meta />
                <Links />
            </head>
            <body>
                <a className='ap-skip' href='#konten-utama'>Langsung ke konten utama</a>
                <header className='ap-header'>
                    <nav className='tk-navbar' aria-label='Navigasi utama'>
                        <Link className='ap-logo' to='/'>${htmlToJsx(parsed.logoHtml)}</Link>
                        <div className='ap-links' id='ap-nav'>
${navItems}
                            <Link className='tk-btn tk-btn-primary tk-btn-sm ap-nav-cta' to=${js(parsed.ctaRoute)}>${htmlToJsx(parsed.ctaInner)}</Link>
                        </div>${themeButton}
                        <button className='tk-btn tk-btn-ghost ap-burger' aria-label='Buka menu' aria-expanded='false' aria-controls='ap-nav' onClick={toggleNav}>${htmlToJsx(parsed.burgerInner)}</button>
                    </nav>
                </header>
                {children}
                <SiteFooter />
                <ScrollRestoration />
                <Scripts />
                <script src=${js(parsed.iconScript)} />${parsed.siteJs ? `
                <script src='/site.js' defer />` : ''}
            </body>
        </html>
    );
}

export default function Root() {
    return <Outlet />;
}
`;

    for (const page of parsed.pages) {
        const ldBlock = page.jsonLd ? `\nconst jsonLd = \`${backtick(page.jsonLd)}\`;\n` : '';
        const ldJsx = page.jsonLd
            ? `            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: jsonLd }} />\n`
            : '';
        files[`app/routes/${page.slug}.jsx`] = `export function meta() {
    return [
        { title: ${js(fullTitleOf(parsed, page, input.brand))} },
        { name: 'description', content: ${js(descriptionOf(parsed, page))} },
        { tagName: 'link', rel: 'canonical', href: ${js(parsed.baseUrl + page.route)} }
    ];
}
${ldBlock}
/*
 * CATATAN COPYWRITING: ganti hanya TEKS contoh dan penanda {AI: ...}.
 * JANGAN mengubah/menghapus elemen, className, atribut data-* (data-ap-tab, data-tk-asset,
 * data-kategori, data-value), struktur dropdown .ap-select (hanya teks labelnya yang boleh
 * diganti), id panel, maupun atribut hidden — dipakai styles.css dan site.js.
 */
export default function Page() {
    return (
        <main id='konten-utama'>
${ldJsx}${htmlToJsx(page.main)}
        </main>
    );
}
`;
    }

    return {
        target: 'React Router v7 (Remix)',
        files,
        assetCopies,
        commands: { install: 'npm install', dev: 'npm run dev', build: 'npm run build' }
    };
}

/* ================================================================ */
/* Laravel (Blade)                                                   */
/* ================================================================ */

/** Placeholder folder runtime Laravel (storage/, bootstrap/cache/) supaya foldernya tercipta. */
const KEEP_GITIGNORE = '*\n!.gitignore\n';

function toLaravel(parsed: ParsedScaffold, input: TokenaiStackConversionInput): TokenaiStackConversion {
    const files: Record<string, string> = {};
    const assetCopies: { from: string; to: string }[] = [];
    if (input.logoPath) {
        assetCopies.push({ from: input.logoPath, to: `public/assets/${input.logoPath.split('/').pop()}` });
    }

    // Kerangka Laravel 12 minimal yang bisa boot tanpa `laravel new`: composer.json, artisan,
    // bootstrap/app.php, public/index.php, folder runtime, dan .env (APP_KEY diisi
    // `php artisan key:generate` saat install).
    files['composer.json'] = JSON.stringify({
        name: `tokenai/${brandSlug(input.brand)}`,
        type: 'project',
        require: { php: '^8.2', 'laravel/framework': '^12.0' },
        autoload: { 'psr-4': { 'App\\': 'app/' } },
        config: { 'optimize-autoloader': true, 'preferred-install': 'dist' },
        'minimum-stability': 'stable'
    }, undefined, 4) + '\n';
    files['artisan'] = `#!/usr/bin/env php
<?php

use Symfony\\Component\\Console\\Input\\ArgvInput;

define('LARAVEL_START', microtime(true));

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';

$status = $app->handleCommand(new ArgvInput);

exit($status);
`;
    files['bootstrap/app.php'] = `<?php

use Illuminate\\Foundation\\Application;
use Illuminate\\Foundation\\Configuration\\Exceptions;
use Illuminate\\Foundation\\Configuration\\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(web: __DIR__.'/../routes/web.php')
    ->withMiddleware(function (Middleware $middleware): void {
        //
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
`;
    files['bootstrap/providers.php'] = `<?php

return [
    App\\Providers\\AppServiceProvider::class,
];
`;
    files['app/Providers/AppServiceProvider.php'] = `<?php

namespace App\\Providers;

use Illuminate\\Support\\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        //
    }
}
`;
    files['public/index.php'] = `<?php

use Illuminate\\Http\\Request;

define('LARAVEL_START', microtime(true));

require __DIR__.'/../vendor/autoload.php';

(require_once __DIR__.'/../bootstrap/app.php')
    ->handleRequest(Request::capture());
`;
    files['.env'] = `APP_NAME="${input.brand.replace(/"/g, '')}"
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost:8000

LOG_CHANNEL=stack
SESSION_DRIVER=file
CACHE_STORE=file
QUEUE_CONNECTION=sync
`;
    files['.gitignore'] = '/vendor/\n/node_modules/\n.env\n/storage/*.key\n';
    files['storage/app/.gitignore'] = KEEP_GITIGNORE;
    files['storage/framework/cache/data/.gitignore'] = KEEP_GITIGNORE;
    files['storage/framework/sessions/.gitignore'] = KEEP_GITIGNORE;
    files['storage/framework/views/.gitignore'] = KEEP_GITIGNORE;
    files['storage/logs/.gitignore'] = KEEP_GITIGNORE;
    files['bootstrap/cache/.gitignore'] = KEEP_GITIGNORE;

    files['public/styles.css'] = parsed.stylesCss;
    files['public/archetype.css'] = parsed.archetypeCss;
    files['public/robots.txt'] = parsed.robotsTxt;
    files['public/sitemap.xml'] = parsed.sitemapXml;
    if (parsed.siteJs) {
        files['public/site.js'] = parsed.siteJs;
    }

    const routeLines = parsed.pages
        .map(page => `Route::view(${phpString(page.route)}, ${phpString(`pages.${page.slug}`)});`)
        .join('\n');
    files['routes/web.php'] = `<?php

use Illuminate\\Support\\Facades\\Route;

${routeLines}
`;

    // Footer partial terpisah — copywriting tidak boleh punya alasan menyentuh layout.
    files['resources/views/partials/footer.blade.php'] = `{{--
Footer situs — file INI tempat copywriting footer (alamat, kontak, jam buka, sosial).
Ganti hanya TEKSNYA; struktur, class, dan ikon dibiarkan.
--}}
${parsed.footerHtml}
`;

    const navItems = parsed.navLinks
        .map(link => {
            const active = link.href === '/'
                ? "request()->is('/')"
                : `request()->is(${phpString(link.href.slice(1))})`;
            return `        <a class="tk-navbar-link{{ ${active} ? ' tk-navbar-link-active' : '' }}" href="${link.href}">${link.label}</a>`;
        })
        .join('\n');
    files['resources/views/layouts/app.blade.php'] = `{{--
INFRASTRUKTUR SITUS — JANGAN MENGEDIT FILE INI SAAT COPYWRITING/PEMBERSIHAN MARKER.
Skrip tema, site.js, tombol tema, dan burger menu di bawah menghidupkan navigasi mobile,
mode gelap, dan interaktivitas halaman. Copywriting footer dilakukan di
resources/views/partials/footer.blade.php, bukan di sini.
--}}
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script>${THEME_INIT_JS}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
${fontLinksHtml(parsed)}
<link rel="stylesheet" href="/styles.css">
<link rel="stylesheet" href="/archetype.css">
<script src="${parsed.iconScript}"></script>
${parsed.siteJs ? '<script src="/site.js" defer></script>\n' : ''}<title>@yield('title', ${phpString(parsed.homeTitle)})</title>
<meta name="description" content="@yield('description', ${phpString(parsed.homeDescription)})">
<link rel="canonical" href="{{ url()->current() }}">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${input.brand.replace(/"/g, '')}">
<meta property="og:title" content="@yield('title', ${phpString(parsed.homeTitle)})">
<meta property="og:description" content="@yield('description', ${phpString(parsed.homeDescription)})">
<meta property="og:url" content="{{ url()->current() }}">
<meta property="og:locale" content="id_ID">
<meta name="twitter:card" content="summary_large_image">
@stack('head')
</head>
<body>
<a class="ap-skip" href="#konten-utama">Langsung ke konten utama</a>
<header class="ap-header">
<nav class="tk-navbar" aria-label="Navigasi utama">
    <a class="ap-logo" href="/">${parsed.logoHtml}</a>
    <div class="ap-links" id="ap-nav">
${navItems}
        <a class="tk-btn tk-btn-primary tk-btn-sm ap-nav-cta" href="${parsed.ctaRoute}">${parsed.ctaInner}</a>
    </div>
${plainNavButtons(parsed)}
</nav>
</header>
@yield('main')
@include('partials.footer')
</body>
</html>
`;

    for (const page of parsed.pages) {
        const ldPush = page.jsonLd
            ? `\n@push('head')\n<script type="application/ld+json">${page.jsonLd}</script>\n@endpush\n`
            : '';
        files[`resources/views/pages/${page.slug}.blade.php`] = `@extends('layouts.app')

@section('title', ${phpString(fullTitleOf(parsed, page, input.brand))})
@section('description', ${phpString(descriptionOf(parsed, page))})
${ldPush}
{{--
CATATAN COPYWRITING: ganti hanya TEKS contoh dan penanda AI. JANGAN mengubah/menghapus
elemen, class, atribut data-* (data-ap-tab, data-tk-asset, data-kategori, data-value),
struktur dropdown .ap-select (hanya teks labelnya yang boleh diganti), id panel, maupun
atribut hidden — dipakai styles.css dan site.js.
--}}
@section('main')
<main id="konten-utama">
${page.main}
</main>
@endsection
`;
    }

    return {
        target: 'Laravel (Blade)',
        files,
        assetCopies,
        commands: {
            install: 'composer install && php artisan key:generate',
            dev: 'php artisan serve',
            build: 'php artisan optimize'
        }
    };
}

/** String literal PHP berkutip tunggal. */
function phpString(value: string): string {
    return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

/* ================================================================ */
/* Django                                                            */
/* ================================================================ */

function toDjango(parsed: ParsedScaffold, input: TokenaiStackConversionInput): TokenaiStackConversion {
    const files: Record<string, string> = {};
    const assetCopies: { from: string; to: string }[] = [];
    if (input.logoPath) {
        assetCopies.push({ from: input.logoPath, to: `static/assets/${input.logoPath.split('/').pop()}` });
    }
    // Aset statis Django dilayani dari /static/ — path logo /assets/ dipetakan ke sana.
    const fixAssets = (html: string): string => html.replace(/src="\/assets\//g, 'src="/static/assets/');

    files['requirements.txt'] = 'Django>=5.0,<6.0\n';
    files['manage.py'] = `#!/usr/bin/env python
"""Utilitas baris perintah Django."""
import os
import sys


def main():
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Django belum terpasang. Jalankan: pip install -r requirements.txt"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
`;
    files['config/__init__.py'] = '';
    files['config/settings.py'] = `"""Pengaturan Django untuk situs ${input.brand.replace(/"/g, '')} — hasil rakitan TOKENAI."""
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

# PERINGATAN: ganti sebelum produksi (python -c "import secrets; print(secrets.token_urlsafe(50))").
SECRET_KEY = 'dev-only-ganti-di-produksi'
DEBUG = True
ALLOWED_HOSTS = ['*']

INSTALLED_APPS = [
    'django.contrib.staticfiles',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': False,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'

DATABASES = {}

LANGUAGE_CODE = 'id'
TIME_ZONE = 'Asia/Jakarta'
USE_I18N = True
USE_TZ = True

STATIC_URL = 'static/'
STATICFILES_DIRS = [BASE_DIR / 'static']

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
`;
    files['config/wsgi.py'] = `import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

application = get_wsgi_application()
`;

    const urlLines = parsed.pages
        .map(page => {
            const pattern = page.isHome ? '' : `${page.route.slice(1)}/`;
            return `    path('${pattern}', TemplateView.as_view(template_name='pages/${page.slug}.html'), name='${page.slug}'),`;
        })
        .join('\n');
    files['config/urls.py'] = `from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
${urlLines}
    path('robots.txt', TemplateView.as_view(template_name='robots.txt', content_type='text/plain')),
    path('sitemap.xml', TemplateView.as_view(template_name='sitemap.xml', content_type='application/xml')),
]
`;

    files['static/styles.css'] = parsed.stylesCss;
    files['static/archetype.css'] = parsed.archetypeCss;
    if (parsed.siteJs) {
        files['static/site.js'] = parsed.siteJs;
    }
    files['templates/robots.txt'] = parsed.robotsTxt;
    files['templates/sitemap.xml'] = parsed.sitemapXml;

    files['templates/partials/footer.html'] = `{# Footer situs — file INI tempat copywriting footer (alamat, kontak, jam buka, sosial). #}
{# Ganti hanya TEKSNYA; struktur, class, dan ikon dibiarkan. #}
${fixAssets(parsed.footerHtml)}
`;

    const navItems = parsed.navLinks
        .map(link => {
            // APPEND_SLASH mengarahkan /x ke /x/, jadi path final selalu bergaris miring.
            const activePath = link.href === '/' ? '/' : `${link.href}/`;
            return `        <a class="tk-navbar-link{% if request.path == '${activePath}' %} tk-navbar-link-active{% endif %}" href="${link.href}">${link.label}</a>`;
        })
        .join('\n');
    files['templates/base.html'] = `{# INFRASTRUKTUR SITUS — JANGAN MENGEDIT FILE INI SAAT COPYWRITING/PEMBERSIHAN MARKER. #}
{# Skrip tema, site.js, tombol tema, dan burger menu menghidupkan navigasi mobile, mode gelap, #}
{# dan interaktivitas halaman. Copywriting footer dilakukan di templates/partials/footer.html. #}
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script>${THEME_INIT_JS}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
${fontLinksHtml(parsed)}
<link rel="stylesheet" href="/static/styles.css">
<link rel="stylesheet" href="/static/archetype.css">
<script src="${parsed.iconScript}"></script>
${parsed.siteJs ? '<script src="/static/site.js" defer></script>\n' : ''}<title>{% block title %}${parsed.homeTitle}{% endblock %}</title>
<meta name="description" content="{% block description %}${parsed.homeDescription}{% endblock %}">
<link rel="canonical" href="${parsed.baseUrl}{{ request.path }}">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${input.brand.replace(/"/g, '')}">
<meta property="og:locale" content="id_ID">
<meta name="twitter:card" content="summary_large_image">
{% block head %}{% endblock %}
</head>
<body>
<a class="ap-skip" href="#konten-utama">Langsung ke konten utama</a>
<header class="ap-header">
<nav class="tk-navbar" aria-label="Navigasi utama">
    <a class="ap-logo" href="/">${fixAssets(parsed.logoHtml)}</a>
    <div class="ap-links" id="ap-nav">
${navItems}
        <a class="tk-btn tk-btn-primary tk-btn-sm ap-nav-cta" href="${parsed.ctaRoute}">${parsed.ctaInner}</a>
    </div>
${plainNavButtons(parsed)}
</nav>
</header>
{% block main %}{% endblock %}
{% include 'partials/footer.html' %}
</body>
</html>
`;

    for (const page of parsed.pages) {
        const ldBlock = page.jsonLd
            ? `\n{% block head %}\n<script type="application/ld+json">${page.jsonLd}</script>\n{% endblock %}\n`
            : '';
        files[`templates/pages/${page.slug}.html`] = `{% extends 'base.html' %}

{% block title %}${fullTitleOf(parsed, page, input.brand)}{% endblock %}
{% block description %}${descriptionOf(parsed, page)}{% endblock %}
${ldBlock}
{# CATATAN COPYWRITING: ganti hanya TEKS contoh dan penanda AI. JANGAN mengubah/menghapus #}
{# elemen, class, atribut data-* (data-ap-tab, data-tk-asset, data-kategori, data-value), #}
{# struktur dropdown .ap-select (hanya teks labelnya yang boleh diganti), id panel, maupun #}
{# atribut hidden — dipakai styles.css dan site.js. #}
{% block main %}
<main id="konten-utama">
${fixAssets(page.main)}
</main>
{% endblock %}
`;
    }

    return {
        target: 'Django',
        files,
        assetCopies,
        commands: {
            install: 'pip install -r requirements.txt',
            dev: 'python manage.py runserver',
            build: 'python manage.py check'
        }
    };
}

/* ================================================================ */
/* Ruby on Rails                                                     */
/* ================================================================ */

function toRails(parsed: ParsedScaffold, input: TokenaiStackConversionInput): TokenaiStackConversion {
    const files: Record<string, string> = {};
    const assetCopies: { from: string; to: string }[] = [];
    if (input.logoPath) {
        assetCopies.push({ from: input.logoPath, to: `public/assets/${input.logoPath.split('/').pop()}` });
    }
    const appModule = pascalCase(brandSlug(input.brand));
    const rubyAction = (slug: string): string => {
        const name = slug.replace(/-/g, '_');
        return /^[0-9]/.test(name) ? `p${name}` : name;
    };

    // Aplikasi Rails minimal (tanpa `rails new`): hanya railtie controller + view, tanpa DB.
    files['Gemfile'] = `source 'https://rubygems.org'

gem 'rails', '~> 8.0'
gem 'puma'
`;
    files['config.ru'] = `require_relative 'config/environment'

run Rails.application
Rails.application.load_server
`;
    files['config/boot.rb'] = `ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../Gemfile', __dir__)
require 'bundler/setup'
`;
    files['config/application.rb'] = `require_relative 'boot'

require 'rails'
require 'action_controller/railtie'
require 'action_view/railtie'

Bundler.require(*Rails.groups)

module ${appModule}
    class Application < Rails::Application
        config.load_defaults 8.0
        config.eager_load = false
        config.consider_all_requests_local = true
        config.hosts.clear
        # PERINGATAN: ganti sebelum produksi (bin/rails secret).
        config.secret_key_base = 'dev-only-ganti-di-produksi'
    end
end
`;
    files['config/environment.rb'] = `require_relative 'application'

Rails.application.initialize!
`;
    files['bin/rails'] = `#!/usr/bin/env ruby
APP_PATH = File.expand_path('../config/application', __dir__)
require_relative '../config/boot'
require 'rails/commands'
`;
    files['.gitignore'] = '/log/\n/tmp/\n.bundle/\n';

    const routeLines = parsed.pages
        .map(page => page.isHome
            ? `    root 'pages#${rubyAction(page.slug)}'`
            : `    get '${page.route.slice(1)}', to: 'pages#${rubyAction(page.slug)}'`)
        .join('\n');
    files['config/routes.rb'] = `Rails.application.routes.draw do
${routeLines}
end
`;

    files['app/controllers/application_controller.rb'] = `class ApplicationController < ActionController::Base
end
`;
    const actions = parsed.pages
        .map(page => `    def ${rubyAction(page.slug)}\n    end`)
        .join('\n\n');
    files['app/controllers/pages_controller.rb'] = `class PagesController < ApplicationController
${actions}
end
`;

    files['app/views/shared/_footer.html.erb'] = `<%# Footer situs — file INI tempat copywriting footer (alamat, kontak, jam buka, sosial). %>
<%# Ganti hanya TEKSNYA; struktur, class, dan ikon dibiarkan. %>
${parsed.footerHtml}
`;

    const navItems = parsed.navLinks
        .map(link => `        <a class="tk-navbar-link<%= ' tk-navbar-link-active' if request.path == '${link.href}' %>" href="${link.href}">${link.label}</a>`)
        .join('\n');
    files['app/views/layouts/application.html.erb'] = `<%# INFRASTRUKTUR SITUS — JANGAN MENGEDIT FILE INI SAAT COPYWRITING/PEMBERSIHAN MARKER. %>
<%# Skrip tema, site.js, tombol tema, dan burger menu menghidupkan navigasi mobile, mode gelap, %>
<%# dan interaktivitas halaman. Copywriting footer di app/views/shared/_footer.html.erb. %>
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script>${THEME_INIT_JS}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
${fontLinksHtml(parsed)}
<link rel="stylesheet" href="/styles.css">
<link rel="stylesheet" href="/archetype.css">
<script src="${parsed.iconScript}"></script>
${parsed.siteJs ? '<script src="/site.js" defer></script>\n' : ''}<title><%= content_for(:title) || ${js(parsed.homeTitle)} %></title>
<meta name="description" content="<%= content_for(:description) || ${js(parsed.homeDescription)} %>">
<link rel="canonical" href="${parsed.baseUrl}<%= request.path %>">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${input.brand.replace(/"/g, '')}">
<meta property="og:locale" content="id_ID">
<meta name="twitter:card" content="summary_large_image">
<%= yield :head %>
<%= csrf_meta_tags %>
</head>
<body>
<a class="ap-skip" href="#konten-utama">Langsung ke konten utama</a>
<header class="ap-header">
<nav class="tk-navbar" aria-label="Navigasi utama">
    <a class="ap-logo" href="/">${parsed.logoHtml}</a>
    <div class="ap-links" id="ap-nav">
${navItems}
        <a class="tk-btn tk-btn-primary tk-btn-sm ap-nav-cta" href="${parsed.ctaRoute}">${parsed.ctaInner}</a>
    </div>
${plainNavButtons(parsed)}
</nav>
</header>
<%= yield %>
<%= render 'shared/footer' %>
</body>
</html>
`;

    files['public/styles.css'] = parsed.stylesCss;
    files['public/archetype.css'] = parsed.archetypeCss;
    files['public/robots.txt'] = parsed.robotsTxt;
    files['public/sitemap.xml'] = parsed.sitemapXml;
    if (parsed.siteJs) {
        files['public/site.js'] = parsed.siteJs;
    }

    for (const page of parsed.pages) {
        const ldHead = page.jsonLd
            ? `\n<% content_for :head do %>\n<script type="application/ld+json">${page.jsonLd}</script>\n<% end %>\n`
            : '';
        files[`app/views/pages/${rubyAction(page.slug)}.html.erb`] = `<% content_for :title, ${js(fullTitleOf(parsed, page, input.brand))} %>
<% content_for :description, ${js(descriptionOf(parsed, page))} %>
${ldHead}
<%# CATATAN COPYWRITING: ganti hanya TEKS contoh dan penanda AI. JANGAN mengubah/menghapus %>
<%# elemen, class, atribut data-* (data-ap-tab, data-tk-asset, data-kategori, data-value), %>
<%# struktur dropdown .ap-select (hanya teks labelnya yang boleh diganti), id panel, maupun %>
<%# atribut hidden — dipakai styles.css dan site.js. %>
<main id="konten-utama">
${page.main}
</main>
`;
    }

    return {
        target: 'Ruby on Rails',
        files,
        assetCopies,
        commands: {
            install: 'bundle install',
            dev: 'bundle exec ruby bin/rails server',
            build: 'bundle exec ruby bin/rails about'
        }
    };
}

/* ================================================================ */
/* WordPress (tema klasik)                                           */
/* ================================================================ */

function toWordPress(parsed: ParsedScaffold, input: TokenaiStackConversionInput): TokenaiStackConversion {
    const files: Record<string, string> = {};
    const assetCopies: { from: string; to: string }[] = [];
    if (input.logoPath) {
        assetCopies.push({ from: input.logoPath, to: `assets/${input.logoPath.split('/').pop()}` });
    }
    const themeSlug = brandSlug(input.brand);
    // Aset tema dilayani dari folder tema, bukan akar situs.
    const fixAssets = (html: string): string =>
        html.replace(/src="\/assets\//g, 'src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/');

    files['style.css'] = `/*
Theme Name: ${input.brand.replace(/\*\//g, '')}
Description: Tema WordPress hasil rakitan TOKENAI dari kit design — halaman dipetakan ke template page-{slug}.php.
Version: 1.0.0
Author: TOKENAI
Text Domain: ${themeSlug}
*/

${parsed.stylesCss}`;
    files['archetype.css'] = parsed.archetypeCss;
    if (parsed.siteJs) {
        files['site.js'] = parsed.siteJs;
    }

    const fontEnqueues = parsed.fontLinks
        .map((href, index) => `    wp_enqueue_style('${themeSlug}-font-${index + 1}', ${phpString(href)}, [], null);`)
        .join('\n');
    files['functions.php'] = `<?php
/**
 * Tema ${input.brand.replace(/\*\//g, '')} — hasil rakitan TOKENAI.
 */

add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
});

add_action('wp_enqueue_scripts', function () {
${fontEnqueues}
    wp_enqueue_style('${themeSlug}', get_stylesheet_uri(), [], '1.0.0');
    wp_enqueue_style('${themeSlug}-archetype', get_template_directory_uri() . '/archetype.css', [], '1.0.0');
    wp_enqueue_script('${themeSlug}-icons', ${phpString(parsed.iconScript)}, [], null, true);
${parsed.siteJs ? `    wp_enqueue_script('${themeSlug}-site', get_template_directory_uri() . '/site.js', [], '1.0.0', true);\n` : ''}});
`;

    const navItems = parsed.navLinks
        .map(link => {
            const active = link.href === '/'
                ? 'is_front_page()'
                : `is_page(${phpString(link.href.slice(1))})`;
            return `        <a class="tk-navbar-link<?php echo ${active} ? ' tk-navbar-link-active' : ''; ?>" href="<?php echo esc_url(home_url(${phpString(link.href)})); ?>">${link.label}</a>`;
        })
        .join('\n');
    files['header.php'] = `<?php /*
INFRASTRUKTUR SITUS — JANGAN MENGEDIT FILE INI SAAT COPYWRITING/PEMBERSIHAN MARKER.
Skrip tema, tombol tema, dan burger menu menghidupkan navigasi mobile dan mode gelap.
*/ ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo('charset'); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script>${THEME_INIT_JS}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="ap-skip" href="#konten-utama">Langsung ke konten utama</a>
<header class="ap-header">
<nav class="tk-navbar" aria-label="Navigasi utama">
    <a class="ap-logo" href="<?php echo esc_url(home_url('/')); ?>">${fixAssets(parsed.logoHtml)}</a>
    <div class="ap-links" id="ap-nav">
${navItems}
        <a class="tk-btn tk-btn-primary tk-btn-sm ap-nav-cta" href="<?php echo esc_url(home_url(${phpString(parsed.ctaRoute)})); ?>">${parsed.ctaInner}</a>
    </div>
${plainNavButtons(parsed)}
</nav>
</header>
`;

    files['footer.php'] = `<?php /*
Footer situs — file INI tempat copywriting footer (alamat, kontak, jam buka, sosial).
Ganti hanya TEKSNYA; struktur, class, dan ikon dibiarkan.
*/ ?>
${fixAssets(parsed.footerHtml)}
<?php wp_footer(); ?>
</body>
</html>
`;

    files['index.php'] = `<?php get_header(); ?>
<main id="konten-utama">
<?php while (have_posts()) : the_post(); ?>
    <article <?php post_class(); ?>>
        <h1><?php the_title(); ?></h1>
        <?php the_content(); ?>
    </article>
<?php endwhile; ?>
</main>
<?php get_footer();
`;

    const pageSlugs: string[] = [];
    for (const page of parsed.pages) {
        const ld = page.jsonLd ? `<script type="application/ld+json">${page.jsonLd}</script>\n` : '';
        const body = `<?php get_header(); ?>
${ld}<?php /*
CATATAN COPYWRITING: ganti hanya TEKS contoh dan penanda AI. JANGAN mengubah/menghapus
elemen, class, atribut data-* (data-ap-tab, data-tk-asset, data-kategori, data-value),
struktur dropdown .ap-select (hanya teks labelnya yang boleh diganti), id panel, maupun
atribut hidden — dipakai styles.css dan site.js.
*/ ?>
<main id="konten-utama">
${fixAssets(page.main)}
</main>
<?php get_footer();
`;
        if (page.isHome) {
            files['front-page.php'] = body;
        } else {
            files[`page-${page.slug}.php`] = `<?php /* Template Name: ${page.label.replace(/\*\//g, '')} */ ?>\n${body}`;
            pageSlugs.push(page.slug);
        }
    }

    files['README-TEMA.md'] = `# Tema WordPress — ${input.brand}

Tema klasik hasil rakitan TOKENAI. Cara pakai:

1. Salin SELURUH folder proyek ini ke \`wp-content/themes/${themeSlug}/\` pada instalasi WordPress.
2. Aktifkan tema di **Appearance → Themes**.
3. Buat halaman (Pages) dengan slug berikut supaya template \`page-{slug}.php\` otomatis terpakai:
${pageSlugs.map(slug => `   - \`${slug}\``).join('\n')}
4. Set **Settings → Reading → Your homepage displays** ke *A static page* (front-page.php yang tampil).
5. Set **Settings → Permalinks** ke *Post name* supaya tautan antarhalaman (\`/${pageSlugs[0] ?? 'slug'}\`) berfungsi.

Konten halaman ada di template PHP (bukan editor WordPress) — sunting teksnya langsung di file template.
`;

    return {
        target: 'WordPress (tema klasik)',
        files,
        assetCopies,
        commands: {
            install: `salin folder proyek ke wp-content/themes/${themeSlug}/ lalu aktifkan temanya`,
            dev: 'buat Pages dengan slug yang sama dengan page-*.php (lihat README-TEMA.md)',
            build: 'tidak ada langkah build — tema PHP langsung jalan'
        }
    };
}

/* ================================================================ */
/* Server statis: Express / NestJS / FastAPI                         */
/* ================================================================ */

/**
 * Ketiga stack ini stack API — situs publiknya disajikan apa adanya dari `public/`
 * (hasil scaffold HTML utuh, tautan `.html` tetap valid), servernya saja yang ditulis.
 * Endpoint API tinggal ditambahkan pengguna di sebelah pelayan statisnya.
 */
function toStaticServer(
    target: 'express' | 'nestjs' | 'fastapi',
    scaffold: TokenaiScaffoldResult,
    input: TokenaiStackConversionInput
): TokenaiStackConversion {
    const files: Record<string, string> = {};
    const assetCopies: { from: string; to: string }[] = [];
    // Folder berawalan titik (.tokenai/) tidak dilayani express.static — logo dipindah ke
    // public/assets/ dan semua rujukannya di HTML dipetakan ke sana.
    const logoBasename = input.logoPath?.split('/').pop();
    for (const [name, content] of Object.entries(scaffold.files)) {
        files[`public/${name}`] = input.logoPath
            ? content.split(input.logoPath).join(`assets/${logoBasename}`)
            : content;
    }
    if (input.logoPath) {
        assetCopies.push({ from: input.logoPath, to: `public/assets/${logoBasename}` });
    }

    if (target === 'express') {
        files['package.json'] = JSON.stringify({
            name: brandSlug(input.brand),
            private: true,
            scripts: { start: 'node server.js', dev: 'node server.js' },
            dependencies: { express: '^4' }
        }, undefined, 4) + '\n';
        files['.gitignore'] = 'node_modules/\n';
        files['server.js'] = `const path = require('path');
const express = require('express');

const app = express();

// Situs publik dilayani statis dari public/; tambahkan endpoint API di bawah baris ini.
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));

app.use((req, res) => {
    res.status(404).send('Halaman tidak ditemukan');
});

// Port dari argumen CLI (node server.js 4310) atau env PORT — dipakai tombol Jalankan proyek IDE.
const port = Number(process.argv[2]) || process.env.PORT || 3000;
app.listen(port, () => {
    console.log(\`Server jalan di http://localhost:\${port}\`);
});
`;
        return {
            target: 'Express (situs statis + Node API)',
            files,
            assetCopies,
            commands: { install: 'npm install', dev: 'npm run dev', build: 'node --check server.js' }
        };
    }

    if (target === 'nestjs') {
        files['package.json'] = JSON.stringify({
            name: brandSlug(input.brand),
            private: true,
            scripts: { dev: 'ts-node src/main.ts', build: 'tsc', start: 'node dist/main.js' },
            dependencies: {
                '@nestjs/common': '^10',
                '@nestjs/core': '^10',
                '@nestjs/platform-express': '^10',
                '@nestjs/serve-static': '^4',
                'reflect-metadata': '^0.2',
                rxjs: '^7'
            },
            devDependencies: { typescript: '^5', 'ts-node': '^10', '@types/node': '^22' }
        }, undefined, 4) + '\n';
        files['tsconfig.json'] = JSON.stringify({
            compilerOptions: {
                target: 'ES2021',
                module: 'commonjs',
                moduleResolution: 'node',
                outDir: 'dist',
                experimentalDecorators: true,
                emitDecoratorMetadata: true,
                esModuleInterop: true,
                skipLibCheck: true,
                strict: true
            },
            include: ['src']
        }, undefined, 4) + '\n';
        files['.gitignore'] = 'node_modules/\ndist/\n';
        files['src/app.module.ts'] = `import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

// Situs publik dilayani statis dari public/; tambahkan module/controller API di imports.
@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public'),
            serveStaticOptions: { extensions: ['html'] }
        })
    ]
})
export class AppModule {}
`;
        files['src/main.ts'] = `import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    // Port dari argumen CLI (ts-node src/main.ts 4310) atau env PORT — dipakai tombol Jalankan proyek IDE.
    await app.listen(Number(process.argv[2]) || process.env.PORT || 3000);
}

void bootstrap();
`;
        return {
            target: 'NestJS (situs statis + API)',
            files,
            assetCopies,
            commands: { install: 'npm install', dev: 'npm run dev', build: 'npm run build' }
        };
    }

    files['requirements.txt'] = 'fastapi>=0.111\nuvicorn>=0.30\n';
    files['main.py'] = `from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Tambahkan endpoint API SEBELUM mount ini — mount '/' menangkap semua path sisanya.
app.mount('/', StaticFiles(directory='public', html=True), name='situs')
`;
    return {
        target: 'FastAPI (situs statis + API)',
        files,
        assetCopies,
        commands: {
            install: 'pip install -r requirements.txt',
            dev: 'uvicorn main:app --reload',
            build: 'python -m compileall main.py'
        }
    };
}
