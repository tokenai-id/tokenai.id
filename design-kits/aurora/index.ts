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
import { AURORA_COMPONENTS } from './components';
import { AURORA_EXAMPLES } from './examples';
import { AURORA_SHOWCASE } from './showcase';
import { AURORA_STYLES } from './styles';

/**
 * Kit Aurora — kit orisinal TOKENAI yang seluruh identitasnya dibangun dari cahaya yang saling
 * melarut. Latarnya gradient mesh: lima pusat warna (mint, cyan, violet, rose, biru langit) yang
 * bertemu tanpa satu pun garis batas, menempel di viewport dan bernapas pelan selama 34 detik
 * sekali putaran. Di atasnya tirai aurora — berkas cahaya miring rapat yang bergoyang, wujud yang
 * membedakan kit ini dari sekadar kumpulan blob gradien. Permukaannya kaca tipis yang membiarkan
 * mesh terbaca sebagai kabut di belakangnya, tepinya garis rambut bergradien yang menyala saat
 * kartu disorot, dan fokus form memancarkan pendar teal alih-alih cincin biru bawaan browser.
 * Tidak ada satu pun sudut tajam.
 *
 * Perkakas cahayanya tujuh: `.tk-mesh`, `.tk-aurora`, `.tk-veil`, `.tk-glow`, `.tk-halo`,
 * `.tk-gradient-text`, dan `.tk-float`.
 *
 * Paletnya dipilih dua lapis supaya dreamy tidak berarti tidak terbaca: terangnya disimpan untuk
 * mesh dan pendar (dekoratif), sementara warna yang menyentuh teks dan tombol sengaja dibuat
 * cukup dalam — teal laut #0E7C86 dan violet #6F4DEB, dua-duanya lolos kontras baik sebagai teks
 * di atas latar terang maupun sebagai isian tombol berteks putih.
 *
 * Set ikonnya `heroicons` gaya bawaannya: garis 24px berujung membulat dengan sapuan lapang,
 * senada dengan permukaan kit yang serba lembut. Karena heroicons tidak memuat logo brand, dua
 * ikon media sosial di footer arketipe mengambil logo sungguhan dari `simple-icons` lewat alias
 * lintas-set di `archetypes.ts`.
 *
 * Kit dua-mode: terang (aurora fajar di atas kertas dingin) dan gelap (aurora malam di atas
 * langit biru tinta) — aurora memang fenomena malam, jadi mode gelapnya bukan pelengkap
 * melainkan wujud aslinya. Karena itu `dark: false`, `themes: ['light', 'dark']`, dan saklar tema
 * dibiarkan hidup di semua halaman pratinjau. Seluruh bahan cahaya (mesh, tirai, gradien,
 * pendar, kaca) ikut jadi token `--tk-au-*` sehingga blok `[data-tk-theme="dark"]` cukup menimpa
 * variabel — tanpa satu pun komponen ditulis ulang.
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'aurora',
    title: 'Aurora',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Aurora gradient mesh yang lembut dan dreamy: lima pusat warna (mint, cyan, violet, rose, biru langit) melarut tanpa garis batas lalu bernapas pelan, tirai cahaya miring yang bergoyang di atasnya, permukaan kaca tembus pandang berpinggir rambut gradien, pendar berwarna pada fokus dan tombol, teks bergradien, sudut serba membulat, dan dua mode — fajar yang terang maupun malam kutub yang gelap — cocok untuk produk teknologi, creative tools, dan brand digital yang ingin terlihat modern tanpa berisik',
    style: 'Modern',
    tags: ['SaaS', 'Landing Page', 'Portfolio', 'Dashboard'],
    license: 'MIT',
    dark: false,
    themes: ['light', 'dark'],
    icons: {
        set: 'heroicons',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Outfit',
            role: 'heading — huruf geometris berujung lembut yang modern tanpa terasa kaku',
            import: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Outfit:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Plus Jakarta Sans',
            role: 'body, tombol, dan seluruh kontrol form',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'IBM Plex Mono',
            role: 'caption, label grup, kepala tabel, dan kode inline',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Aurora" adalah karya orisinal TOKENAI.

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

export const AURORA_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': AURORA_STYLES,
        'showcase.html': AURORA_SHOWCASE,
        ...AURORA_COMPONENTS,
        ...AURORA_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
