/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import { buildArchetypeFiles, TOKENAI_KIT_ARCHETYPES } from '../archetypes';
import { TokenaiDesignKit, TokenaiDesignKitManifest } from '../design-kit';
import { CHARTJS_SCRIPT } from '../neutral-modern/preview-scaffold';
import { ACID_GRAPHICS_COMPONENTS } from './components';
import { ACID_GRAPHICS_EXAMPLES } from './examples';
import { ACID_GRAPHICS_SHOWCASE } from './showcase';
import { ACID_GRAPHICS_STYLES } from './styles';

/**
 * Kit Acid Graphics — kit orisinal TOKENAI dengan suasana rave/underground: latar hitam
 * pekat berpendar fluorescent hijau acid (#C6FF00) dan ungu psychedelic (#B026FF),
 * tipografi Unbounded terdistorsi (miring, meregang, bernapas mengikuti beat), gradien
 * asam yang dipotong ke huruf, bentuk blob organik yang tidak simetris, tombol stiker
 * kapsul dengan bayangan keras fluoro, garis bawah bergelombang, dan marka rave mono.
 * Tipografi Unbounded (heading lebar), Space Grotesk (body), dan Space Mono (label).
 *
 * Kit satu-tema seperti Cyberpunk: gelap secara bawaan tanpa mode terang, sehingga
 * `dark: true`, `themes: ['dark']`, dan semua halaman pratinjaunya menyembunyikan saklar
 * tema (`themeToggle: false` pada exNav).
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'acid-graphics',
    title: 'Acid Graphics',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Rave/underground: hitam pekat berpendar fluorescent hijau acid dan ungu psychedelic, tipografi terdistorsi, gradien asam, blob organik aneh, stiker miring — gelap bawaan tanpa mode terang',
    style: 'Experimental',
    tags: ['Portfolio', 'Landing Page', 'Personal', 'SaaS'],
    license: 'MIT',
    dark: true,
    themes: ['dark'],
    icons: {
        set: 'iconoir',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Unbounded',
            role: 'heading lebar terdistorsi, brand, dan angka statistik',
            import: 'https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;800;900&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap',
            fallback: "'Arial Black', sans-serif"
        },
        {
            family: 'Space Grotesk',
            role: 'body, form, dan teks antarmuka',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Space Mono',
            role: 'caption, label, badge, dan marka rave',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Acid Graphics" adalah karya orisinal TOKENAI.

MIT License

Copyright (c) 2026 TOKENAI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;

export const ACID_GRAPHICS_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': ACID_GRAPHICS_STYLES,
        'showcase.html': ACID_GRAPHICS_SHOWCASE,
        ...ACID_GRAPHICS_COMPONENTS,
        ...ACID_GRAPHICS_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
