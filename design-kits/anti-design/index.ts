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
import { ANTI_DESIGN_COMPONENTS } from './components';
import { ANTI_DESIGN_EXAMPLES } from './examples';
import { ANTI_DESIGN_SHOWCASE } from './showcase';
import { ANTI_DESIGN_STYLES } from './styles';

/**
 * Kit Anti-Design — kit orisinal TOKENAI yang melanggar aturannya sendiri dengan sengaja.
 * Tangga ukuran judulnya tidak menaik (`.tk-h2` 62px lebih besar daripada `.tk-h1` 40px,
 * `.tk-h4` lebih besar daripada `.tk-h3`), token radiusnya bernilai empat penjuru sekaligus
 * (`19px 2px 24px 4px`) sehingga tiap sudut kotak berbeda, garisnya berbeda tebal di tiap sisi,
 * dan ketiga bayangannya jatuh ke arah yang saling menyangkal. Warnanya sepasang-sepasang
 * bertabrakan: merah muda (#EE0055) di atas latar mustard (#D8DC2E), kuning limau sebagai teks
 * kontras, biru tautan bawaan browser (#0000EE) yang tidak dipermak, dan latar lembut warna
 * semantik yang justru melawan artinya — sukses berlatar merah muda, bahaya berlatar hijau.
 * Hurufnya tiga klon paling default di web (Tinos untuk Times, Arimo untuk Arial, Courier Prime
 * untuk Courier) plus Comic Neue sebagai huruf yang memang sengaja salah tempat; tiap varian
 * tombol memakai keluarga huruf yang berbeda. Perkakas perusaknya delapan: `.tk-tilt`,
 * `.tk-offgrid`, `.tk-overlap`, `.tk-oversize`, `.tk-clash`, `.tk-wrong`, `.tk-squish`, dan
 * `.tk-sticker`.
 *
 * Yang TIDAK dilanggar, karena kekacauan ini dirancang dan bukan kecelakaan: rasio kontras
 * teks tetap terbaca, target kliknya tetap besar, tabel dan formulir tetap lurus, dan seluruh
 * nilai design tetap tinggal di `:root` sehingga palet penimpa tetap bekerja. Halaman dashboard
 * bahkan sengaja menjinakkan kemiringan kartunya — sebuah alat kerja boleh berkarakter, tapi
 * tabel yang miring tidak bisa dibaca.
 *
 * Set ikonnya `solar` gaya `-broken`: satu-satunya set Iconify yang garisnya memang sudah
 * terputus sejak digambar. Karena solar tidak punya logo brand sama sekali, dua ikon media
 * sosial di footer arketipe mengambil logo sungguhan dari `simple-icons` lewat alias lintas-set
 * di `archetypes.ts`.
 *
 * Kit satu-tema: terang secara bawaan tanpa mode gelap, sehingga `dark: false`,
 * `themes: ['light']`, dan semua halaman pratinjaunya menyembunyikan saklar tema
 * (`themeToggle: false` pada exNav).
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'anti-design',
    title: 'Anti-Design',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Anti-design yang melanggar aturannya sendiri dengan sengaja: tangga ukuran judul yang tidak menaik, sudut kotak berbeda di keempat penjurunya, garis berbeda tebal tiap sisi, bayangan yang jatuh ke arah saling menyangkal, warna bertabrakan (merah muda di atas mustard, biru tautan bawaan browser, latar alert yang melawan artinya), tiga klon huruf paling default di web plus Comic Neue yang sengaja salah tempat, elemen miring, lepas sumbu, dan saling menumpuk — chaotic tapi tetap terbaca',
    style: 'Experimental',
    tags: ['Portfolio', 'Personal', 'Blog', 'Event'],
    license: 'MIT',
    dark: false,
    themes: ['light'],
    icons: {
        set: 'solar',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Tinos',
            role: 'heading dan tombol primary — klon metrik Times New Roman, huruf paling default yang pernah ada di web',
            import: 'https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,700;1,400&family=Comic+Neue:wght@400;700&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Tinos:ital,wght@0,400;0,700;1,400&display=swap',
            fallback: "'Times New Roman', Times, serif"
        },
        {
            family: 'Arimo',
            role: 'body, form, dan tombol dasar — klon metrik Arial/Helvetica',
            fallback: 'Arial, Helvetica, sans-serif'
        },
        {
            family: 'Courier Prime',
            role: 'caption, label, isi tabel, kode inline, dan tombol secondary — klon metrik Courier',
            fallback: "'Courier New', Courier, monospace"
        },
        {
            family: 'Comic Neue',
            role: 'huruf yang sengaja salah tempat (--tk-ad-wrong): judul kartu, kepala tabel, teks bantuan, placeholder, dan kelas .tk-wrong',
            fallback: "'Comic Sans MS', cursive"
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Anti-Design" adalah karya orisinal TOKENAI.

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

export const ANTI_DESIGN_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': ANTI_DESIGN_STYLES,
        'showcase.html': ANTI_DESIGN_SHOWCASE,
        ...ANTI_DESIGN_COMPONENTS,
        ...ANTI_DESIGN_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
