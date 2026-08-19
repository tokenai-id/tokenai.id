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
import { EDITORIAL_COMPONENTS } from './components';
import { EDITORIAL_EXAMPLES } from './examples';
import { EDITORIAL_SHOWCASE } from './showcase';
import { EDITORIAL_STYLES } from './styles';

/**
 * Kit Editorial — kit orisinal TOKENAI dengan estetika majalah premium: headline serif
 * Playfair Display raksasa, garis rambut (hairline rules) sebagai pemisah, whitespace luas,
 * grid kuat, fotografi polos tanpa bingkai, dan label uppercase berjarak renggang seperti
 * masthead. Warna nyaris hanya tinta di atas kertas — satu aksen oxblood merah anggur
 * dipakai hemat. Tanpa radius dan nyaris tanpa bayangan; layout terasa seperti spread
 * halaman editorial cetak.
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'editorial',
    title: 'Editorial',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'majalah premium: headline serif besar, hairline rules, whitespace luas, aksen oxblood hemat',
    style: 'Editorial',
    tags: ['Blog', 'Portfolio', 'Business', 'Personal'],
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
            family: 'Playfair Display',
            role: 'heading, serif',
            import: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Libre+Franklin:wght@400;500;600;700&family=Spline+Sans+Mono:wght@400;600&display=swap',
            fallback: 'Georgia, serif'
        },
        {
            family: 'Libre Franklin',
            role: 'body',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Spline Sans Mono',
            role: 'caption, kode, label mono',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Editorial" adalah karya orisinal TOKENAI.

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

export const EDITORIAL_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': EDITORIAL_STYLES,
        'showcase.html': EDITORIAL_SHOWCASE,
        ...EDITORIAL_COMPONENTS,
        ...EDITORIAL_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
