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
import { BRUTAL_COMPONENTS } from './components';
import { BRUTAL_EXAMPLES } from './examples';
import { BRUTAL_SHOWCASE } from './showcase';
import { BRUTAL_STYLES } from './styles';

/**
 * Kit Brutal — kit orisinal TOKENAI dengan estetika web-brutalism murni: mentah dan keras.
 * Tipografi Anton raksasa serba kapital, kontras hitam-putih tajam, border 3px di mana-mana,
 * tanpa radius dan nyaris tanpa bayangan; biru elektrik dan stabilo kuning sebagai pukulan
 * aksen. Berbeda dari kit Zine (zine fotokopian: kertas pucat + bayangan offset), Brutal
 * sengaja tampil seperti dokumen mentah yang tidak berusaha terlihat polished.
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'brutal',
    title: 'Brutal',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'mentah dan keras: tipografi raksasa, kontras hitam-putih, border tebal, aksen elektrik',
    style: 'Brutalist',
    tags: ['Portfolio', 'Landing Page', 'Event', 'Personal'],
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
            family: 'Anton',
            role: 'heading, uppercase',
            import: 'https://fonts.googleapis.com/css2?family=Anton&family=Inter+Tight:wght@400;500;600;700;800&family=Courier+Prime:wght@400;700&display=swap',
            fallback: 'Impact, system-ui, sans-serif'
        },
        {
            family: 'Inter Tight',
            role: 'body',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Courier Prime',
            role: 'caption, tombol, label mono',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Brutal" adalah karya orisinal TOKENAI.

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

export const BRUTAL_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': BRUTAL_STYLES,
        'showcase.html': BRUTAL_SHOWCASE,
        ...BRUTAL_COMPONENTS,
        ...BRUTAL_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
