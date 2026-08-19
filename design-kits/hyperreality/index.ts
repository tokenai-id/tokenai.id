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
import { HYPERREALITY_COMPONENTS } from './components';
import { HYPERREALITY_EXAMPLES } from './examples';
import { HYPERREALITY_SHOWCASE } from './showcase';
import { HYPERREALITY_STYLES } from './styles';

/**
 * Kit Hyperreality — kit orisinal TOKENAI yang seluruh dunianya sengaja dibuat lebih nyata
 * daripada kenyataan. Latarnya lingkungan mustahil: dua matahari berbeda warna menyala di sudut
 * berlawanan dan lantai grid melengkung ke titik hilang yang jaraknya tidak masuk akal. Objeknya
 * benda hasil render — bola krom yang memantulkan lingkungan yang tidak pernah ada, dan blob
 * iridesen yang radiusnya tidak pernah berhenti berubah. Warnanya lebih jenuh daripada yang bisa
 * dipantulkan benda nyata (violet ultra #6B2BFF, cyan mustahil #00BCD8, pink iridesen #FF57C7),
 * setiap permukaan punya sorot spekular di puncaknya, dan seluruh bayangannya violet alih-alih
 * hitam karena sumber cahayanya pun berwarna. Interaksinya terasa seperti dunia virtual: kartu
 * menoleh dalam perspektif saat disorot, dan tombol dilintasi kilau yang menyapu.
 *
 * Perkakas dunia mustahilnya tujuh: `.tk-chrome` (varian `-pink`/`-cyan`), `.tk-blob`,
 * `.tk-iridescent`, `.tk-warp`, `.tk-float`, `.tk-mirror`, dan `.tk-horizon`.
 *
 * Yang tetap dijaga, karena melampaui kenyataan bukan berarti melampaui keterbacaan: kontras teks
 * tetap aman di atas latar terang, tabel dan formulir tidak ikut bergoyang, objek mustahil hanya
 * dipakai di halaman pemasaran (dashboard menahan diri pada permukaan sekilap dan bayangan
 * berwarna, kartunya pun berhenti menoleh supaya angka bisa dibaca), dan seluruh animasi berhenti
 * sendiri saat pengguna menyalakan `prefers-reduced-motion`.
 *
 * Set ikonnya `fluent` gaya `-24-filled`: bentuk pejal membulat yang terbaca sebagai objek padat,
 * bukan gambar garis — senada dengan dunia serba-render kit ini. Karena fluent tidak memuat logo
 * brand, dua ikon media sosial di footer arketipe mengambil logo sungguhan dari `simple-icons`
 * lewat alias lintas-set di `archetypes.ts`.
 *
 * Kit satu-tema: terang secara bawaan tanpa mode gelap — dunia hiperreal ini bermandikan cahaya —
 * sehingga `dark: false`, `themes: ['light']`, dan semua halaman pratinjaunya menyembunyikan
 * saklar tema (`themeToggle: false` pada exNav).
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'hyperreality',
    title: 'Hyperreality',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Hyperreality yang sengaja melampaui kenyataan: lingkungan mustahil dengan dua matahari berbeda warna dan lantai grid melengkung ke cakrawala, objek surreal berupa bola krom dan blob iridesen yang bentuknya terus berubah, warna yang lebih jenuh daripada alam (violet ultra, cyan mustahil, pink iridesen), permukaan sekilap hasil render dengan sorot spekular, bayangan berwarna alih-alih hitam, gerak melengkung, kartu yang menoleh dalam perspektif, dan kilau yang menyapu tombol — terasa seperti dunia virtual, tapi tetap terbaca',
    style: 'Futuristic',
    tags: ['Landing Page', 'Portfolio', 'SaaS', 'Event'],
    license: 'MIT',
    dark: false,
    themes: ['light'],
    icons: {
        set: 'fluent',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Unbounded',
            role: 'heading — huruf display yang lebarnya tidak wajar, sesuai dunia yang proporsinya melampaui kenyataan',
            import: 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Figtree:wght@400;500;600;700;800&family=Unbounded:wght@500;600;700&display=swap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Figtree',
            role: 'body, tombol, dan seluruh kontrol form',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'DM Mono',
            role: 'caption, label grup, kepala tabel, dan kode inline',
            fallback: "'Courier New', monospace"
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Hyperreality" adalah karya orisinal TOKENAI.

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

export const HYPERREALITY_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': HYPERREALITY_STYLES,
        'showcase.html': HYPERREALITY_SHOWCASE,
        ...HYPERREALITY_COMPONENTS,
        ...HYPERREALITY_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
