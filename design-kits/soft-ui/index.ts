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
import { SOFT_UI_COMPONENTS } from './components';
import { SOFT_UI_EXAMPLES } from './examples';
import { SOFT_UI_SHOWCASE } from './showcase';
import { SOFT_UI_STYLES } from './styles';

/**
 * Kit Soft UI — kit orisinal TOKENAI untuk antarmuka yang ramah tanpa jadi kekanak-kanakan:
 * sudut membulat, warna lembut, bayangan tipis, dan jarak yang longgar. Empat keputusan yang
 * saling mengunci membentuk seluruh wajahnya:
 *
 * 1. Kanvas tidak pernah putih — latar halaman oat hangat, dan kartu justru lebih terang
 *    daripada latarnya.
 * 2. Bayangan tipis, menyebar, dan diwarnai kanvas; tidak ada hitam murni di mana pun.
 * 3. Sudut membulat besar dan konsisten sampai ke kotak centang; semua kontrol berbentuk pil.
 * 4. Tangga jarak dinaikkan satu tingkat dari nilai khas kontrak.
 *
 * Nama "soft UI" juga sering dipakai untuk neumorphism, yang sudah punya kitnya sendiri di
 * katalog ini — dan keduanya justru bertolak belakang di titik yang paling menentukan. Neumorph
 * membuat permukaan dan latar berwarna persis sama sehingga kedalaman harus dipahat dari sepasang
 * bayangan timbul-tenggelam; kit ini menjaga permukaan selalu lebih terang daripada latarnya dan
 * memakai bayangan hanya untuk menegaskan selisih yang sudah ada. Akibat praktisnya: teks tetap
 * punya kontras penuh di atas bidang putih, sesuatu yang jadi kelemahan bawaan neumorphism.
 * Pembeda dari tetangga lain: Clay bermain relief tiga lapis dengan palet permen, Organic
 * memakai blob dan layout asimetris, Aurora bertumpu pada gradient mesh dan kaca — kit ini rata,
 * matte, simetris, dan tenang.
 *
 * Enam perkakasnya: `.tk-icon-tile`, `.tk-soft`, `.tk-inset`, `.tk-lift`, `.tk-halo`, dan
 * `.tk-ring`. Turunan warnanya (ubin ikon, cincin fokus, pendar) dihitung dengan `color-mix()`
 * dari token primary dan accent, jadi palet penimpa ikut mengecat semuanya tanpa satu pun nilai
 * heksa mentah di blok komponen.
 *
 * Set ikonnya `mage`: garis berujung tumpul dengan setiap sudut dilengkungkan, jadi ikon tidak
 * pernah jadi satu-satunya benda bersudut tajam di layar yang serba membulat ini. Dua ikon media
 * sosial di footer arketipe mengambil logo sungguhan dari simple-icons karena mage hanya punya
 * Instagram versi berlingkar (lihat tabel alias di `archetypes.ts`).
 *
 * Kit dua-mode: mode gelapnya arang hangat, bukan hitam, dan aturan "kartu lebih terang daripada
 * latar" tetap berlaku di sana. Karena itu `dark: false`, `themes: ['light', 'dark']`, dan saklar
 * tema dibiarkan hidup di semua halaman pratinjau.
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'soft-ui',
    title: 'Soft UI',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Soft UI yang ramah dan menenangkan: kanvas oat hangat yang tidak pernah putih dengan kartu yang justru lebih terang daripada latarnya, bayangan setipis mungkin dan diwarnai kanvas alih-alih hitam, sudut membulat besar di setiap elemen sampai kotak centang, semua kontrol berbentuk pil, serta tangga jarak yang dinaikkan satu tingkat supaya halaman bernapas. Warnanya sage dan apricot yang diredam, tipografi Gabarito dan Lexend yang bulat dan mudah dibaca, ubin ikon berbidang lembut, cincin capaian, dan dua mode dengan gelap berupa arang hangat — cocok untuk aplikasi wellness, produktivitas, finance, dan SaaS modern yang ingin terasa hangat tanpa berisik',
    style: 'Modern',
    tags: ['SaaS', 'Health', 'Dashboard', 'Business'],
    license: 'MIT',
    dark: false,
    themes: ['light', 'dark'],
    icons: {
        set: 'mage',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Gabarito',
            role: 'heading — grotesque bersudut lunak yang tetap ramah di ukuran besar',
            import: 'https://fonts.googleapis.com/css2?family=Gabarito:wght@500;600;700&family=Lexend:wght@300;400;500;600&family=Overpass+Mono:wght@400;500&display=swap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Lexend',
            role: 'body, tombol, dan seluruh kontrol form — dirancang untuk mengurangi lelah baca',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Overpass Mono',
            role: 'angka, pintasan papan tik, dan kode inline',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Soft UI" adalah karya orisinal TOKENAI.

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

export const SOFT_UI_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': SOFT_UI_STYLES,
        'showcase.html': SOFT_UI_SHOWCASE,
        ...SOFT_UI_COMPONENTS,
        ...SOFT_UI_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
