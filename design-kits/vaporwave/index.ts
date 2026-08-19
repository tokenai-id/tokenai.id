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
import { VAPORWAVE_COMPONENTS } from './components';
import { VAPORWAVE_EXAMPLES } from './examples';
import { VAPORWAVE_SHOWCASE } from './showcase';
import { VAPORWAVE_STYLES } from './styles';

/**
 * Kit Vaporwave — kit orisinal TOKENAI dengan nostalgia surreal 80s-90s: neon pink-ungu,
 * gradien sunset, matahari bergaris dan lantai grid perspektif yang dilukis otomatis di
 * hero, serif klasikal miring (Playfair Display, aroma patung Romawi), huruf CRT pixel
 * (VT323) untuk caption/readout, window UI ber-title bar gradien ala window manager 90s,
 * teks gradien vapor, aberasi kromatik VHS statis, dan bayangan dwiwarna cyan-pink.
 *
 * Kit dua-tema: terang (bawaan) = pastel dream lavender; gelap = neon sunset indigo
 * dengan hot pink dan cyan menyala.
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'vaporwave',
    title: 'Vaporwave',
    version: '1.0.1',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Nostalgia surreal 80s-90s: neon pink-ungu, gradien sunset, grid perspektif, serif klasikal + CRT pixel, window UI retro, aberasi VHS — terang pastel dream, gelap neon sunset',
    style: 'Retro',
    tags: ['Portfolio', 'Landing Page', 'Personal', 'Blog'],
    license: 'MIT',
    dark: false,
    themes: ['light', 'dark'],
    icons: {
        set: 'ri',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Playfair Display',
            role: 'heading serif klasikal; display memakai varian miring — patung Romawi bertemu VHS',
            import: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700;1,800&family=Outfit:wght@300;400;500;600;700&family=VT323&display=swap',
            fallback: "'Times New Roman', serif"
        },
        {
            family: 'Outfit',
            role: 'body geometris lembut, tombol, tab, dan nav',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'VT323',
            role: 'caption, label tabel, badge sidebar, dan readout CRT pixel',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Vaporwave" adalah karya orisinal TOKENAI.

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

export const VAPORWAVE_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': VAPORWAVE_STYLES,
        'showcase.html': VAPORWAVE_SHOWCASE,
        ...VAPORWAVE_COMPONENTS,
        ...VAPORWAVE_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
