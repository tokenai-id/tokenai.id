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
import { CLAY_COMPONENTS } from './components';
import { CLAY_EXAMPLES } from './examples';
import { CLAY_SHOWCASE } from './showcase';
import { CLAY_STYLES } from './styles';

/**
 * Kit Clay — kit orisinal TOKENAI dengan suasana claymorphism: kartu dan objek
 * terlihat seperti tanah liat atau plastik lembut yang bisa dipencet — gembur,
 * bulat, 3D, dan playful. Satu resep relief dipakai di mana-mana: bayangan luar
 * berwarna + inset terang di bibir atas + inset gelap di perut bawah. Tombol
 * menonjol lalu penyok saat ditekan, input dipencet ke dalam permukaan, checkbox
 * dan radio adalah bola clay mini, badan halaman lila pucat (#F2EFFB) dengan
 * palet permen lavender (#6C5CE7), pink (#F97AA6), dan kuning (#FFC75F), bola
 * clay melayang pelan di hero, dan radius minimum 16px tanpa satu pun sudut
 * tajam. Tipografi Baloo 2 (heading bulat gembur), Quicksand (body membulat),
 * dan Red Hat Mono (kode).
 *
 * Kit satu-tema seperti Grunge, Punk, dan Organic: terang secara bawaan tanpa
 * mode gelap — clay dipajang di rak yang terang — sehingga `dark: false`,
 * `themes: ['light']`, dan semua halaman pratinjaunya menyembunyikan saklar
 * tema (`themeToggle: false` pada exNav).
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'clay',
    title: 'Clay',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Claymorphism yang gembur dan playful: relief clay tiga-lapis (bayangan luar berwarna + inset terang atas + inset gelap bawah), radius minimum 16px tanpa sudut tajam, palet permen lavender-pink-kuning di atas lila pucat, bola clay melayang, tipografi bulat Baloo 2 — terang bawaan tanpa mode gelap',
    style: 'Playful',
    tags: ['Landing Page', 'SaaS', 'Education', 'Personal'],
    license: 'MIT',
    dark: false,
    themes: ['light'],
    icons: {
        set: 'uil',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Baloo 2',
            role: 'heading dan tombol — huruf bulat gembur seperti clay',
            import: 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Quicksand:wght@500;600;700&family=Red+Hat+Mono:wght@400;500&display=swap',
            fallback: "'Comic Sans MS', cursive"
        },
        {
            family: 'Quicksand',
            role: 'body, form, dan teks antarmuka — terminal huruf membulat',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Red Hat Mono',
            role: 'kode inline, kbd, dan angka tabular',
            fallback: "'Courier New', monospace"
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Clay" adalah karya orisinal TOKENAI.

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

export const CLAY_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': CLAY_STYLES,
        'showcase.html': CLAY_SHOWCASE,
        ...CLAY_COMPONENTS,
        ...CLAY_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
