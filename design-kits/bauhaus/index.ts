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
import { BAUHAUS_COMPONENTS } from './components';
import { BAUHAUS_EXAMPLES } from './examples';
import { BAUHAUS_SHOWCASE } from './showcase';
import { BAUHAUS_STYLES } from './styles';

/**
 * Kit Bauhaus — kit orisinal TOKENAI dengan estetika sekolah Bauhaus: bentuk geometris
 * dasar (lingkaran, persegi, belah ketupat), tipografi geometris tegas (Jost ala Futura),
 * dan trio warna kuat merah-kuning-biru di atas kertas krem hangat. Komposisinya artistik
 * tetapi selalu fungsional: sudut siku, garis tinta 2px, ikon fitur yang bergiliran bentuk
 * dan warna, bilah tiga warna menandai headline, dan CTA bidang kuning primer. Mode gelap
 * memindahkan komposisi ke kanvas arang dengan trio warna yang lebih menyala.
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'bauhaus',
    title: 'Bauhaus',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Bauhaus: geometri dasar, tipografi geometris tegas, merah-kuning-biru di kertas krem, artistik tetapi fungsional',
    style: 'Retro',
    tags: ['Portfolio', 'Event', 'Education', 'Landing Page'],
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
            family: 'Jost',
            role: 'heading geometris ala Futura, juga tombol dan nav',
            import: 'https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=DM+Sans:wght@400;500;700&family=DM+Mono:wght@400;500&display=swap',
            fallback: "'Futura', system-ui, sans-serif"
        },
        {
            family: 'DM Sans',
            role: 'body',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'DM Mono',
            role: 'caption dan label uppercase',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Bauhaus" adalah karya orisinal TOKENAI.

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

export const BAUHAUS_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': BAUHAUS_STYLES,
        'showcase.html': BAUHAUS_SHOWCASE,
        ...BAUHAUS_COMPONENTS,
        ...BAUHAUS_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
