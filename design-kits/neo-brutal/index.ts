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
import { NEO_BRUTAL_COMPONENTS } from './components';
import { NEO_BRUTAL_EXAMPLES } from './examples';
import { NEO_BRUTAL_SHOWCASE } from './showcase';
import { NEO_BRUTAL_STYLES } from './styles';

/**
 * Kit Neo Brutal — kit orisinal TOKENAI dengan estetika neo-brutalism: brutalism yang
 * modern dan usable. Border hitam tebal dan bayangan offset keras dipertahankan, tetapi
 * sudutnya dilembutkan, warnanya cerah playful (pink, kuning stabilo, biru elektrik), dan
 * komponennya tetap rapi untuk dipakai sehari-hari. Melengkapi keluarga brutalist di
 * katalog: Zine (fotokopian kertas + tinta) dan Brutal (hitam-putih mentah).
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'neo-brutal',
    title: 'Neo Brutal',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'neo-brutalism playful: border tebal, warna cerah, shadow keras, bold tapi rapi',
    style: 'Playful',
    tags: ['Landing Page', 'SaaS', 'E-commerce', 'Portfolio'],
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
            family: 'Bricolage Grotesque',
            role: 'heading, bold',
            import: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=DM+Sans:wght@400;500;700&family=DM+Mono:wght@400;500&display=swap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'DM Sans',
            role: 'body',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'DM Mono',
            role: 'kode, caption',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Neo Brutal" adalah karya orisinal TOKENAI.

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

export const NEO_BRUTAL_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': NEO_BRUTAL_STYLES,
        'showcase.html': NEO_BRUTAL_SHOWCASE,
        ...NEO_BRUTAL_COMPONENTS,
        ...NEO_BRUTAL_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
