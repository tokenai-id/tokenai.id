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
import { MUSEUMCORE_COMPONENTS } from './components';
import { MUSEUMCORE_EXAMPLES } from './examples';
import { MUSEUMCORE_SHOWCASE } from './showcase';
import { MUSEUMCORE_STYLES } from './styles';

/**
 * Kit Museumcore — kit orisinal TOKENAI yang memindahkan ruang pamer museum ke layar:
 * dinding krem (#F4EDDD) bertekstur damask samar, burgundy tua (#6E1B2E) sebagai warna
 * utama, dan emas antik (#B08D3F) yang hanya muncul setipis rambut — di tepi pigura,
 * garis atas plakat, dan ornamen pemisah. Judulnya memakai Cinzel, huruf pahatan Romawi
 * yang selalu diberi jarak antarhuruf; isinya dibaca dengan EB Garamond Renaissance; dan
 * keterangannya diketik Anonymous Pro seperti plakat dinding museum. Kartu adalah karya
 * berbingkai — pigura tipis dengan garis emas di dalam tepinya dan lampu sorot yang
 * menguat saat karya didekati. Radiusnya nyaris nol karena bingkai klasik memang tidak
 * membulat; lengkung Renaissance disediakan terpisah lewat `.tk-arch`. Perkakas khasnya
 * lengkap: pigura bersepuh (`.tk-frame`), plakat keterangan (`.tk-plaque`), ornamen
 * fleuron (`.tk-ornament`), inisial beriluminasi (`.tk-initial`), teks bersepuh
 * (`.tk-gild`), kapital kurator (`.tk-caps`), dan panel kaca pameran (`.tk-vitrine`).
 * Gambar disepia sampai disorot, seperti arsip yang baru diperhatikan pengunjung.
 *
 * Kit satu-tema seperti Dopamine: terang secara bawaan tanpa mode gelap — galeri memang
 * dirancang untuk cahaya — sehingga `dark: false`, `themes: ['light']`, dan semua halaman
 * pratinjaunya menyembunyikan saklar tema (`themeToggle: false` pada exNav).
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'museumcore',
    title: 'Museumcore',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Museumcore bernuansa Renaissance dan Baroque: dinding krem bertekstur damask, burgundy tua, dan emas antik setipis rambut; huruf pahatan Cinzel untuk judul, EB Garamond untuk teks, plakat dinding untuk keterangan; kartu berpigura bersepuh dengan lampu sorot lembut, lengkung Renaissance, ornamen fleuron, inisial beriluminasi, dan gambar yang disepia sampai disorot — terang bawaan tanpa mode gelap',
    style: 'Luxury',
    tags: ['Portfolio', 'Blog', 'Education', 'Personal'],
    license: 'MIT',
    dark: false,
    themes: ['light'],
    icons: {
        set: 'flowbite',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Cinzel',
            role: 'heading, tombol, dan label — kapital pahatan Romawi berjarak lebar',
            import: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Anonymous+Pro:wght@400;700&display=swap',
            fallback: "'Times New Roman', serif"
        },
        {
            family: 'EB Garamond',
            role: 'body, form, dan teks antarmuka — serif Renaissance yang nyaman dibaca panjang',
            fallback: 'Georgia, serif'
        },
        {
            family: 'Anonymous Pro',
            role: 'caption, plakat keterangan, kode inline, kbd, dan angka tabular',
            fallback: "'Courier New', monospace"
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Museumcore" adalah karya orisinal TOKENAI.

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

export const MUSEUMCORE_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': MUSEUMCORE_STYLES,
        'showcase.html': MUSEUMCORE_SHOWCASE,
        ...MUSEUMCORE_COMPONENTS,
        ...MUSEUMCORE_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
