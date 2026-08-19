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
import { SWISS_COMPONENTS } from './components';
import { SWISS_EXAMPLES } from './examples';
import { SWISS_SHOWCASE } from './showcase';
import { SWISS_STYLES } from './styles';

/**
 * Kit Swiss — kit orisinal TOKENAI dengan estetika Swiss Style (International Typographic
 * Style): grid sangat disiplin, tipografi grotesque (Hanken Grotesk) rata kiri yang tegas,
 * whitespace luas, dan hierarki informasi yang sangat jelas. Sudut siku tanpa radius,
 * nyaris tanpa bayangan — keteraturan lahir dari garis hairline, aturan (rule) tebal di
 * kepala seksi dan tabel, serta satu merah Swiss (#E30613) sebagai aksen presisi untuk
 * aksi utama dan penanda. Mode gelap membalik tinta dengan merah yang lebih menyala.
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'swiss',
    title: 'Swiss',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Swiss Style: grid disiplin, grotesque rata kiri, whitespace luas, hierarki tegas, aksen merah Swiss',
    style: 'Minimalist',
    tags: ['Business', 'SaaS', 'Portfolio', 'Education'],
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
            family: 'Hanken Grotesk',
            role: 'heading dan body — grotesque ala Helvetica, hierarki dari ukuran dan bobot',
            import: 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=Fragment+Mono:ital@0;1&display=swap',
            fallback: "'Helvetica Neue', system-ui, sans-serif"
        },
        {
            family: 'Fragment Mono',
            role: 'caption dan label uppercase berjarak renggang',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Swiss" adalah karya orisinal TOKENAI.

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

export const SWISS_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': SWISS_STYLES,
        'showcase.html': SWISS_SHOWCASE,
        ...SWISS_COMPONENTS,
        ...SWISS_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
