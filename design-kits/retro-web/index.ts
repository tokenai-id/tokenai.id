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
import { RETRO_WEB_COMPONENTS } from './components';
import { RETRO_WEB_EXAMPLES } from './examples';
import { RETRO_WEB_SHOWCASE } from './showcase';
import { RETRO_WEB_STYLES } from './styles';

/**
 * Kit Retro Web — kit orisinal TOKENAI yang sengaja meniru website internet lama era
 * dial-up: bitmap font Silkscreen, headline WordArt bergradasi pelangi dengan bayangan
 * keras, tombol pelat bevel gaya Win95 yang tenggelam saat ditekan, warna web-safe
 * mencolok, tabel ber-border seperti border="1", tautan biru bergaris bawah yang ungu
 * setelah dikunjungi, kursor panah pixel custom, badge berkedip, teks marquee, grafis
 * low-res (image-rendering: pixelated), dan hit counter hijau terminal — aesthetic
 * GeoCities 1997. Mode gelap memindahkan suasananya ke langit starfield hitam dengan
 * teks neon hijau-cyan.
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'retro-web',
    title: 'Retro Web',
    version: '1.0.1',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Retro web era dial-up: bitmap font, WordArt pelangi, tombol bevel Win95, warna web-safe mencolok, kursor pixel, hit counter — aesthetic GeoCities 1997',
    style: 'Retro',
    tags: ['Personal', 'Portfolio', 'Blog', 'Landing Page'],
    license: 'MIT',
    dark: false,
    themes: ['light', 'dark'],
    icons: {
        set: 'pixelarticons',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Silkscreen',
            role: 'heading bitmap pixel, WordArt, tombol dan nav',
            import: 'https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&family=Comic+Neue:wght@400;700&family=VT323&display=swap',
            fallback: 'ui-monospace, monospace'
        },
        {
            family: 'Comic Neue',
            role: 'body ramah ala Comic Sans',
            fallback: '"Comic Sans MS", cursive, sans-serif'
        },
        {
            family: 'VT323',
            role: 'caption, badge, dan hit counter terminal',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Retro Web" adalah karya orisinal TOKENAI.

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

export const RETRO_WEB_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': RETRO_WEB_STYLES,
        'showcase.html': RETRO_WEB_SHOWCASE,
        ...RETRO_WEB_COMPONENTS,
        ...RETRO_WEB_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
