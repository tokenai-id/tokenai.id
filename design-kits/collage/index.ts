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
import { COLLAGE_COMPONENTS } from './components';
import { COLLAGE_EXAMPLES } from './examples';
import { COLLAGE_SHOWCASE } from './showcase';
import { COLLAGE_STYLES } from './styles';

/**
 * Kit Collage — kit orisinal TOKENAI dengan estetika kolase/scrapbook: banyak elemen
 * terasa ditumpuk dan ditempel dalam satu komposisi — kartu bergaya stiker cut-out dengan
 * tepi putih tebal, tile fitur miring ringan dengan strip selotip yang menegak saat
 * disentuh, judul hero seperti sobekan kertas yang dipaste, anotasi tulisan tangan
 * (Caveat), fotografi berbingkai polaroid, dan tekstur titik halftone di latar. Palet
 * merah poster + biru klein di atas kertas krem.
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'collage',
    title: 'Collage',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'kolase scrapbook: stiker cut-out, selotip, rotasi ringan, tulisan tangan, polaroid, halftone',
    style: 'Experimental',
    tags: ['Portfolio', 'Personal', 'Blog', 'Event'],
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
            family: 'DM Serif Display',
            role: 'heading, serif',
            import: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Karla:wght@400;500;600;700&family=Caveat:wght@500;600&family=Fira+Mono:wght@400;700&display=swap',
            fallback: 'Georgia, serif'
        },
        {
            family: 'Karla',
            role: 'body',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Caveat',
            role: 'anotasi tulisan tangan (subjudul hero)',
            fallback: 'cursive'
        },
        {
            family: 'Fira Mono',
            role: 'caption, tombol, label mono',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Collage" adalah karya orisinal TOKENAI.

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

export const COLLAGE_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': COLLAGE_STYLES,
        'showcase.html': COLLAGE_SHOWCASE,
        ...COLLAGE_COMPONENTS,
        ...COLLAGE_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
