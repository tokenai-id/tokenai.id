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
import { NEUMORPH_COMPONENTS } from './components';
import { NEUMORPH_EXAMPLES } from './examples';
import { NEUMORPH_SHOWCASE } from './showcase';
import { NEUMORPH_STYLES } from './styles';

/**
 * Kit Neumorph — kit orisinal TOKENAI dengan estetika neumorphism (soft UI): elemen seolah
 * menyatu dengan latar karena permukaan dan latar berbagi warna; kedalaman lahir dari
 * highlight kiri-atas dan soft shadow kanan-bawah sehingga panel terasa timbul dan input
 * tenggelam — lembut, embossed, seperti objek fisik yang bisa diraba.
 *
 * Seperti Zine dan Glass, kit ini sengaja TIDAK terdaftar di `TOKENAI_DESIGN_KITS` (kit
 * bawaan yang dibundel IDE): didistribusikan murni lewat katalog tokenai.id — unggah dari
 * dashboard admin → R2 → API katalog → unduh + verifikasi di IDE. Diekspor
 * `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'neumorph',
    title: 'Neumorph',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'soft UI menyatu dengan latar, embossed, highlight dan bayangan lembut, taktil',
    style: 'Minimalist',
    tags: ['SaaS', 'Dashboard', 'Landing Page', 'Personal'],
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
            family: 'Poppins',
            role: 'heading',
            import: 'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Nunito+Sans:wght@400;600;700&family=IBM+Plex+Mono:wght@400;700&display=swap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Nunito Sans',
            role: 'body',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'IBM Plex Mono',
            role: 'kode, kbd',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Neumorph" adalah karya orisinal TOKENAI.

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

export const NEUMORPH_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': NEUMORPH_STYLES,
        'showcase.html': NEUMORPH_SHOWCASE,
        ...NEUMORPH_COMPONENTS,
        ...NEUMORPH_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
