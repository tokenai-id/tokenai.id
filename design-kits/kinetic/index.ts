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
import { KINETIC_COMPONENTS } from './components';
import { KINETIC_EXAMPLES } from './examples';
import { KINETIC_SHOWCASE } from './showcase';
import { KINETIC_STYLES } from './styles';

/**
 * Kit Kinetic — kit orisinal TOKENAI dengan suasana kinetic typography:
 * tipografi adalah objek utama, dan ia bergerak. Judul memakai font variabel
 * Archivo (sumbu wght 100–900 dan wdth 62–125 ikut dimuat) yang melebar dan
 * menebal saat disorot lewat animasi font-variation-settings; headline marquee
 * raksasa berjalan tanpa henti dengan kata outline berselang-seling
 * (.tk-type-marquee, .tk-outline-text); baris teks meluncur masuk dari sisi
 * bergantian saat scroll murni CSS (.tk-kinetic-line dengan animation-timeline
 * dan degradasi anggun); tautan digarisbawahi garis yang tumbuh; huruf bisa
 * menari satu per satu (.tk-wave-text); dan hero landing mengikuti gerakan
 * mouse — bobot serta lebar hurufnya berubah mengikuti kursor. Kanvasnya
 * kertas hangat (#F4F2EC) dengan tinta hitam pekat (#111013) seperti lembar
 * type specimen, aksen indigo elektrik (#4B3CFA) dan jingga (#FF5C33).
 * Tipografi Archivo variabel (heading & body) dan Martian Mono (kode, kicker).
 *
 * Kit satu-tema kebalikan dari Spatial/Immersive: terang secara bawaan tanpa
 * mode gelap — huruf hitam paling hidup di atas kertas — sehingga
 * `themes: ['light']` dan semua halaman pratinjaunya menyembunyikan saklar
 * tema (`themeToggle: false` pada exNav).
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'kinetic',
    title: 'Kinetic',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Kinetic typography: tipografi adalah objek utama yang bergerak — judul font variabel Archivo yang melebar saat disorot, headline marquee berjalan dengan kata outline, baris teks meluncur masuk saat scroll, huruf menari per karakter, dan hero yang mengikuti gerakan mouse — di atas kertas hangat bertinta hitam pekat dengan aksen indigo elektrik, terang bawaan tanpa mode gelap',
    style: 'Experimental',
    tags: ['Landing Page', 'Portfolio', 'Personal', 'Event'],
    license: 'MIT',
    dark: false,
    themes: ['light'],
    icons: {
        set: 'carbon',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Archivo',
            role: 'heading, body, dan tombol — font variabel dengan sumbu wght 100–900 & wdth 62–125 yang dianimasikan saat hover dan mengikuti mouse',
            import: 'https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900&family=Martian+Mono:wght@400;700&display=swap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Martian Mono',
            role: 'kode inline, kbd, kicker spesimen, label form, dan angka tabular',
            fallback: "'Courier New', monospace"
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Kinetic" adalah karya orisinal TOKENAI.

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

export const KINETIC_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': KINETIC_STYLES,
        'showcase.html': KINETIC_SHOWCASE,
        ...KINETIC_COMPONENTS,
        ...KINETIC_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
