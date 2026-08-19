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
import { LUXURY_EDITORIAL_COMPONENTS } from './components';
import { LUXURY_EDITORIAL_EXAMPLES } from './examples';
import { LUXURY_EDITORIAL_SHOWCASE } from './showcase';
import { LUXURY_EDITORIAL_STYLES } from './styles';

/**
 * Kit Luxury Editorial — kit orisinal TOKENAI yang membawa tata letak editorial ke ranah barang
 * mewah. Lima keputusan yang saling mengunci membentuk seluruh wajahnya:
 *
 * 1. Dua huruf berkontras ekstrem, tanpa ukuran menengah. Cormorant Garamond dipakai besar dan
 *    ringan (300–400) untuk judul, angka statistik, dan kutipan; Jost hanya muncul kecil, huruf
 *    besar, berjarak 0.24em untuk label, tombol, dan tautan navigasi.
 * 2. Emas adalah garis, bukan bidang. Champagne muncul sebagai garis rambut 1px, garis bawah yang
 *    tumbuh, tepi atas menu, dan tanda kecil — nyaris tidak pernah sebagai isian, karena emas
 *    sebagai latar justru membuat halaman terlihat murah.
 * 3. Gerak lambat. Transisi bawaannya 420ms dengan easing yang berhenti perlahan; foto membesar
 *    1200ms, seksi naik 900ms, spinner satu putaran 1,4 detik — semua di balik penjaga
 *    `prefers-reduced-motion` yang mematikannya, bukan mempercepatnya.
 * 4. Whitespace adalah struktur. Jarak antar seksi 176px (tertinggi di katalog), leading isi 1.75,
 *    dan kolom teks dibatasi 68ch lewat `.tk-prose`.
 * 5. Tanpa radius, nyaris tanpa bayangan. Kedalaman datang dari tipografi dan garis; bayangan
 *    hanya milik lapisan melayang, dan bentuknya lebar serta sangat pucat.
 *
 * Pembeda dari tetangga terdekat: kit Editorial memakai Playfair Display tebal dengan aksen
 * oxblood dan caption mono — bahasa majalah berita; kit ini berhuruf lebih ringan, jarak lebih
 * lega, captionnya sans berjarak lebar, dan satu-satunya warna hiasnya champagne — bahasa katalog
 * rumah mode. Museumcore tenang tetapi bertumpu pada bidang kosong dan kerangka pameran, bukan
 * pada fotografi; Monochrome menolak warna sama sekali.
 *
 * Enam perkakas khasnya: `.tk-eyebrow` (label rubrik berawalan garis emas), `.tk-rule` (garis
 * rambut ganda), `.tk-plate` (bingkai fotografi dengan garis emas di dalam tepi dan zoom lambat),
 * `.tk-drop-cap`, `.tk-gild` (garis bawah emas yang tumbuh dari kiri), dan `.tk-reveal`
 * (kemunculan naik perlahan). Semua turunan warnanya dihitung `color-mix()` dari token, jadi
 * palet penimpa ikut mengecat semuanya tanpa satu pun nilai heksa mentah di blok komponen.
 *
 * Set ikonnya `material-symbols-light`: Material Symbols pada bobot paling tipis yang tersedia,
 * garis 1px yang tidak pernah lebih berat daripada goresan halus serifnya. Set ini tidak memuat
 * logo brand sehingga dua ikon media sosial di footer arketipe mengambil logo sungguhan dari
 * simple-icons, dan penamaannya jauh dari Lucide (search tetap search, tetapi user → person,
 * trash-2 → delete, sparkles → diamond) sehingga hampir seluruh kosakata arketipe diterjemahkan
 * lewat tabel alias di `archetypes.ts`.
 *
 * Kit dua-mode: mode gelapnya *édition nuit* — kertas alabaster menjadi tinta hangat dan champagne
 * naik jadi satu-satunya sumber cahaya. Karena itu `dark: false`, `themes: ['light', 'dark']`, dan
 * saklar tema dibiarkan hidup di semua halaman pratinjau.
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'luxury-editorial',
    title: 'Luxury Editorial',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Editorial mewah yang sangat terkurasi: serif Cormorant Garamond berukuran raksasa dengan bobot ringan berhadapan dengan label Jost kecil beruppercase berjarak lebar, tanpa ukuran menengah di antaranya. Emas champagne hanya muncul sebagai garis rambut, garis bawah yang tumbuh perlahan, dan tepi menu — tidak pernah sebagai bidang. Fotografi premium dibingkai garis emas di dalam tepinya dan membesar 1200ms saat disentuh, whitespace antar seksi 176px, seluruh gerak lambat dan berhenti perlahan, kanvas alabaster hangat dengan tinta noir, drop cap, kutipan serif miring, dan kolom teks dibatasi selebar kolom cetak. Dua mode dengan gelap berupa edisi malam bertinta hangat — cocok untuk rumah mode, butik, hotel dan restoran fine dining, properti mewah, portofolio arsitektur, dan jurnal yang ingin terasa dikurasi, bukan diunggah',
    style: 'Luxury',
    tags: ['Portfolio', 'E-commerce', 'Blog', 'Real Estate', 'Restaurant'],
    license: 'MIT',
    dark: false,
    themes: ['light', 'dark'],
    icons: {
        set: 'material-symbols-light',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Cormorant Garamond',
            role: 'heading, angka statistik, dan kutipan — serif kontras tinggi yang goresan tipisnya baru terlihat di ukuran besar',
            import: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&family=IBM+Plex+Mono:wght@300;400&display=swap',
            fallback: 'Times New Roman, Georgia, serif'
        },
        {
            family: 'Jost',
            role: 'isi, tombol, label, dan seluruh kontrol form — sans geometris yang tetap rapi saat diberi jarak huruf lebar',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'IBM Plex Mono',
            role: 'pintasan papan tik dan kode inline',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Luxury Editorial" adalah karya orisinal TOKENAI.

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

export const LUXURY_EDITORIAL_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': LUXURY_EDITORIAL_STYLES,
        'showcase.html': LUXURY_EDITORIAL_SHOWCASE,
        ...LUXURY_EDITORIAL_COMPONENTS,
        ...LUXURY_EDITORIAL_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
