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
import { MONOCHROME_COMPONENTS } from './components';
import { MONOCHROME_EXAMPLES } from './examples';
import { MONOCHROME_SHOWCASE } from './showcase';
import { MONOCHROME_STYLES } from './styles';

/**
 * Kit Monochrome — kit orisinal TOKENAI yang seluruh paletnya satu keluarga: sebelas anak tangga
 * dari kertas ke tinta, tanpa satu pun rona. Batasan itulah isi kitnya. Karena warna tidak
 * tersedia sebagai alat, yang tersisa untuk bekerja hanya empat hal — tipografi yang dirapatkan
 * sampai kata terbaca sebagai bidang, komposisi bergaris bernomor, jarak yang sengaja jauh, dan
 * fotografi yang dipaksa tak berona di mana pun ia muncul.
 *
 * Yang membedakannya dari kit minimalis yang sudah ada bukan sekadar "warnanya sedikit",
 * melainkan bahwa warna benar-benar dicabut sampai ke lapisan semantik: `success`, `warning`, dan
 * `danger` sama-sama tinta. Keempat status dibedakan tiga isyarat yang dipakai bersamaan — nada
 * bidang, tebal rel kiri, dan bentuk ikon — cara yang kebetulan juga lebih aman untuk mata yang
 * tidak membedakan warna, karena rona tidak pernah jadi satu-satunya pembawa arti. Status
 * terberat mendapat arsir 45 derajat, satu-satunya tekstur di kit ini, persis cara ukiran dan
 * cetak satu tinta membedakan bidang tanpa bantuan warna.
 *
 * Tujuh perkakasnya: `.tk-caps`, `.tk-rule`, `.tk-measure`, `.tk-negative`, `.tk-hatch`,
 * `.tk-frame`, dan `.tk-halftone`.
 *
 * Set ikonnya `jam`: garis setipis hairline dengan sudut geometris dan satu bobot untuk semua,
 * sehingga ikon duduk setara dengan garis 1px yang memisahkan hampir semua hal di kit ini
 * alih-alih menonjol sendiri. Set ini memuat logo brand sungguhan, jadi ikon media sosial di
 * footer arketipe tidak perlu meminjam dari set lain.
 *
 * Kit dua-mode, dan pembalikannya lebih dari sekadar menukar warna: anak tangga di kit ini
 * berarti "jarak dari latar", bukan nilai abu yang tetap. Menyalakan mode gelap membalik seluruh
 * tangganya seperti negatif film — dan karena setiap komponen menyebut anak tangga, tidak satu
 * baris pun perlu ditulis ulang. Karena itu `dark: false`, `themes: ['light', 'dark']`, dan
 * saklar tema dibiarkan hidup di semua halaman pratinjau.
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'monochrome',
    title: 'Monochrome',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Monokrom sungguhan yang kuat dan sophisticated: satu keluarga warna saja — sebelas anak tangga dari kertas ke tinta tanpa satu pun rona, sampai status pun dibedakan lewat nada, tebal garis, arsir, dan ikon alih-alih hijau-kuning-merah. Identitasnya dibangun dari empat hal: tipografi grotesque yang dirapatkan sampai judul terbaca sebagai bidang gelap, komposisi rata kiri bergaris bernomor, jarak antarseksi yang sengaja jauh, dan fotografi yang selalu tak berona lengkap dengan pigura bercaption serta kisi halftone. Sudut nol, garis hairline, nyaris tanpa bayangan, dan dua mode yang saling menegatifkan — cocok untuk portofolio, studio foto, galeri, majalah, dan brand fashion yang ingin terlihat tenang tapi tegas',
    style: 'Luxury',
    tags: ['Portfolio', 'Landing Page', 'Blog', 'Personal'],
    license: 'MIT',
    dark: false,
    themes: ['light', 'dark'],
    icons: {
        set: 'jam',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Epilogue',
            role: 'heading — grotesque berkarakter yang tetap tegas saat dirapatkan di ukuran raksasa',
            import: 'https://fonts.googleapis.com/css2?family=Epilogue:wght@500;600;700;800&family=Instrument+Sans:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Instrument Sans',
            role: 'body, tombol, dan seluruh kontrol form',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Roboto Mono',
            role: 'label kapital kecil, caption, nomor seksi, kepala tabel, dan kode inline',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Monochrome" adalah karya orisinal TOKENAI.

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

export const MONOCHROME_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': MONOCHROME_STYLES,
        'showcase.html': MONOCHROME_SHOWCASE,
        ...MONOCHROME_COMPONENTS,
        ...MONOCHROME_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
