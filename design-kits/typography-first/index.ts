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
import { TYPOGRAPHY_FIRST_COMPONENTS } from './components';
import { TYPOGRAPHY_FIRST_EXAMPLES } from './examples';
import { TYPOGRAPHY_FIRST_SHOWCASE } from './showcase';
import { TYPOGRAPHY_FIRST_STYLES } from './styles';

/**
 * Kit Typography First — kit orisinal TOKENAI dengan prinsip typography-first:
 * hampir seluruh identitas visual dibangun dari huruf — pilihan font, skala
 * ukuran, spacing, dan komposisi — sementara imagery hanya pendukung (otomatis
 * grayscale, baru berwarna saat disorot). Pasangan serif: Fraunces untuk
 * display/heading (sumbu optical size 9–144 aktif — makin besar makin tajam
 * berkontras) dan Source Serif 4 untuk body yang nyaman dibaca panjang,
 * ditemani DM Mono untuk label, kicker, kbd, dan angka. Ornamennya perangkat
 * tipografi klasik: drop cap (.tk-dropcap), pull quote dengan tanda kutip
 * raksasa (.tk-pullquote), angka seksi pudar raksasa (.tk-num), fleuron ❦
 * (.tk-fleuron), kicker small caps bergaris (.tk-kicker), kata beritalik
 * oxblood di heading (.tk-ital), angka oldstyle di teks berjalan dan lining
 * tabular di tabel. Kanvas kertas hangat (#FAF9F6), tinta hampir hitam
 * (#1A1815), aksen oxblood (#8C2F39) dan ochre (#B08D3E); fitur tampil tanpa
 * kartu — kolom teks ber-hairline. Beda dari Kinetic yang berfokus gerak:
 * kit ini soal komposisi huruf yang tenang dan tertata.
 *
 * Kit satu-tema seperti Grunge dan Skeuomorph: terang secara bawaan tanpa mode
 * gelap — huruf paling nyaman dibaca di atas kertas — sehingga `dark: false`,
 * `themes: ['light']`, dan semua halaman pratinjaunya menyembunyikan saklar
 * tema (`themeToggle: false` pada exNav).
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'typography-first',
    title: 'Typography First',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Typography-first: identitas visual dibangun hampir seluruhnya dari huruf — serif Fraunces berkarakter dengan optical size, body Source Serif 4 yang nyaman dibaca, skala teks ekstrem, spacing lega, dan perangkat tipografi klasik (drop cap, pull quote, angka seksi raksasa, fleuron, small caps, angka oldstyle) — imagery hanya pendukung dan otomatis grayscale; kertas hangat bertinta hampir hitam dengan aksen oxblood, terang bawaan tanpa mode gelap',
    style: 'Editorial',
    tags: ['Blog', 'Portfolio', 'Landing Page', 'Personal'],
    license: 'MIT',
    dark: false,
    themes: ['light'],
    icons: {
        set: 'teenyicons',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Fraunces',
            role: 'display, heading, title, pull quote, dan angka seksi — serif berkarakter dengan sumbu optical size 9–144',
            import: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..700;1,8..60,400&family=DM+Mono:wght@400;500&display=swap',
            fallback: 'Georgia, serif'
        },
        {
            family: 'Source Serif 4',
            role: 'body, form, dan teks antarmuka — serif baca yang nyaman untuk teks panjang, dengan angka oldstyle',
            fallback: 'Georgia, serif'
        },
        {
            family: 'DM Mono',
            role: 'label, kicker, kbd, badge, tombol, dan angka tabular',
            fallback: "'Courier New', monospace"
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Typography First" adalah karya orisinal TOKENAI.

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

export const TYPOGRAPHY_FIRST_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': TYPOGRAPHY_FIRST_STYLES,
        'showcase.html': TYPOGRAPHY_FIRST_SHOWCASE,
        ...TYPOGRAPHY_FIRST_COMPONENTS,
        ...TYPOGRAPHY_FIRST_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
