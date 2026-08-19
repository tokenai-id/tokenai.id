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
import { Y2K_COMPONENTS } from './components';
import { Y2K_EXAMPLES } from './examples';
import { Y2K_SHOWCASE } from './showcase';
import { Y2K_STYLES } from './styles';

/**
 * Kit Y2K — kit orisinal TOKENAI dengan estetika nostalgia internet awal 2000-an:
 * chrome dan metallic, UI glossy dengan kilau kaca, bubble text bergradasi iridescent
 * biru-ungu-pink, dan grafis pixel — nuansa cyber-pop era dial-up. Navbar dan header
 * tabel berlapis pelat chrome, tombol pil aqua-glossy dengan highlight di paruh atas,
 * headline hero Baloo 2 dengan gradient text iridescent, ikon fitur glossy yang
 * bergiliran biru/pink/lime, dan caption VT323 pixel. Mode gelap memindahkan suasana
 * ke malam cyber biru-ungu dengan bayangan berpendar neon.
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'y2k',
    title: 'Y2K',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Y2K cyber-pop: chrome metalik, glossy UI, bubble text iridescent biru-ungu-pink, label pixel — nostalgia internet 2000-an',
    style: 'Retro',
    tags: ['Personal', 'Portfolio', 'Landing Page', 'Blog'],
    license: 'MIT',
    dark: false,
    themes: ['light', 'dark'],
    icons: {
        set: 'lucide',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Baloo 2',
            role: 'heading bubble membulat, juga tombol dan nav',
            import: 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Exo+2:wght@400;500;600;700&family=VT323&display=swap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Exo 2',
            role: 'body techy',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'VT323',
            role: 'caption dan label pixel 8-bit',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Y2K" adalah karya orisinal TOKENAI.

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

export const Y2K_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': Y2K_STYLES,
        'showcase.html': Y2K_SHOWCASE,
        ...Y2K_COMPONENTS,
        ...Y2K_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
