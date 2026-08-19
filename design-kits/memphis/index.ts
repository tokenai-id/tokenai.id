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
import { MEMPHIS_COMPONENTS } from './components';
import { MEMPHIS_EXAMPLES } from './examples';
import { MEMPHIS_SHOWCASE } from './showcase';
import { MEMPHIS_STYLES } from './styles';

/**
 * Kit Memphis — kit orisinal TOKENAI dengan estetika Memphis Group era 80-an: bentuk
 * geometris playful, pola polka dots, squiggle, dan warna cerah pink-teal-kuning.
 * Tampilannya fun dan sengaja tidak terlalu formal: headline hero digarisbawahi squiggle
 * pink, kanvas krem bertabur dots halus, ikon fitur bergiliran lingkaran pink / persegi
 * teal miring / belah ketupat kuning, tombol pil gemuk bergaris tinta dengan bayangan
 * offset yang "menekan" saat ditekan, dan tipografi Fredoka yang membulat. Mode gelap
 * memindahkan pesta ke kanvas ungu malam dengan warna yang lebih menyala.
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'memphis',
    title: 'Memphis',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Memphis 80-an: geometri playful, polka dots, squiggle, pink-teal-kuning ceria — fun dan tidak formal',
    style: 'Playful',
    tags: ['Landing Page', 'Event', 'Personal', 'Portfolio'],
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
            family: 'Fredoka',
            role: 'heading membulat dan fun, juga tombol dan nav',
            import: 'https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Nunito',
            role: 'body ramah',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Space Mono',
            role: 'caption dan label uppercase',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Memphis" adalah karya orisinal TOKENAI.

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

export const MEMPHIS_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': MEMPHIS_STYLES,
        'showcase.html': MEMPHIS_SHOWCASE,
        ...MEMPHIS_COMPONENTS,
        ...MEMPHIS_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
