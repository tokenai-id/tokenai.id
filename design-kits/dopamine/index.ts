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
import { DOPAMINE_COMPONENTS } from './components';
import { DOPAMINE_EXAMPLES } from './examples';
import { DOPAMINE_SHOWCASE } from './showcase';
import { DOPAMINE_STYLES } from './styles';

/**
 * Kit Dopamine Design — kit orisinal TOKENAI yang dibangun dari warna sangat
 * cerah dan playful demi pengalaman yang energetic: neon pink (#FF2D87),
 * orange (#FF8A00), electric blue (#2D5BFF), dan lime (#C6FF1F) dipakai penuh
 * tanpa diredam. Bentuknya gemuk dan membulat — radius besar di semua tingkat,
 * tombol pil berhuruf Fredoka yang tebal, garis tegas dua piksel plum gelap,
 * dan bayangan padat berwarna yang membuat elemen terasa bisa ditekan. Kartu
 * statistik diblok warna bergantian lewat .tk-pop-*, ikon fitur duduk di kotak
 * cerah yang miring bergantian, stiker miring (.tk-sticker) dipakai sebagai
 * label, kata kunci ditandai stabilo lime (.tk-highlight), pemisah seksinya
 * pelangi (.tk-squiggle), dan latar krem hangatnya dinodai gradient
 * pink-biru-lime yang mengambang di belakang seluruh halaman.
 *
 * Kit satu-tema kebalikan dari Spatial dan Dark Futuristic: terang secara
 * bawaan tanpa mode gelap — kegembiraan seperti ini tidak punya versi gelap —
 * sehingga `dark: false`, `themes: ['light']`, dan semua halaman pratinjaunya
 * menyembunyikan saklar tema (`themeToggle: false` pada exNav).
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'dopamine',
    title: 'Dopamine',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Dopamine design dengan warna sangat cerah dan playful: neon pink, orange, electric blue, dan lime dipakai penuh tanpa diredam, bentuk gemuk membulat dengan garis tegas dan bayangan padat yang memantul saat disorot, blok warna bergantian, stiker miring, tanda stabilo lime, dan pemisah pelangi — terang bawaan tanpa mode gelap',
    style: 'Colorful',
    tags: ['Landing Page', 'Personal', 'Event', 'E-commerce'],
    license: 'MIT',
    dark: false,
    themes: ['light'],
    icons: {
        set: 'mynaui',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Fredoka',
            role: 'heading, tombol, dan label — gemuk membulat dan riang',
            import: 'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Azeret+Mono:wght@400;500&display=swap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Plus Jakarta Sans',
            role: 'body, form, dan teks antarmuka — ramah dan mudah dibaca',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Azeret Mono',
            role: 'caption, kode inline, kbd, dan angka tabular',
            fallback: "'Courier New', monospace"
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Dopamine" adalah karya orisinal TOKENAI.

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

export const DOPAMINE_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': DOPAMINE_STYLES,
        'showcase.html': DOPAMINE_SHOWCASE,
        ...DOPAMINE_COMPONENTS,
        ...DOPAMINE_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
