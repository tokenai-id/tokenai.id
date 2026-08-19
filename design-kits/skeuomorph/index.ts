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
import { SKEUOMORPH_COMPONENTS } from './components';
import { SKEUOMORPH_EXAMPLES } from './examples';
import { SKEUOMORPH_SHOWCASE } from './showcase';
import { SKEUOMORPH_STYLES } from './styles';

/**
 * Kit Skeuomorph — kit orisinal TOKENAI dengan suasana skeuomorphism: antarmuka
 * menyerupai benda fisik nyata. Tombol glossy bergradien yang benar-benar
 * tenggelam saat ditekan, panel logam bersikat dengan sekrup di sudut
 * (.tk-plate), input yang dipahat masuk ke permukaan, saklar fisik dengan knob
 * logam, lampu LED status yang menyala (.tk-led), kenop putar dengan penunjuk
 * (.tk-knob), dan panel kulit berjahit (.tk-leather). Cahaya selalu datang dari
 * atas: bibir atas terang, bibir bawah gelap, teks ter-emboss. Palet bengkel:
 * linen hangat (#E9E5DC), aluminium, biru glossy (#3E6FA6), kulit cokelat
 * (#9A6A38), dan LED amber (#E8A33D). Tipografi Bitter (pelat label terukir),
 * PT Sans (body humanis), dan IBM Plex Mono (kode).
 *
 * Kit satu-tema seperti Grunge, Punk, Organic, dan Clay: terang secara bawaan
 * tanpa mode gelap — benda fisik dilihat di bawah lampu kerja — sehingga
 * `dark: false`, `themes: ['light']`, dan semua halaman pratinjaunya
 * menyembunyikan saklar tema (`themeToggle: false` pada exNav).
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'skeuomorph',
    title: 'Skeuomorph',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Skeuomorphism yang taktil seperti benda nyata: tombol glossy yang tenggelam saat ditekan, panel logam bersikat bersekrup, input terpahat masuk, saklar fisik, LED status menyala, kenop putar, kulit berjahit, teks ter-emboss dengan cahaya dari atas — terang bawaan tanpa mode gelap',
    style: 'Retro',
    tags: ['Landing Page', 'Business', 'Portfolio', 'Personal'],
    license: 'MIT',
    dark: false,
    themes: ['light'],
    icons: {
        set: 'bi',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Bitter',
            role: 'heading dan title — slab serif seperti label terukir di pelat',
            import: 'https://fonts.googleapis.com/css2?family=Bitter:wght@600;700&family=PT+Sans:wght@400;700&family=IBM+Plex+Mono:wght@400;500&display=swap',
            fallback: 'Georgia, serif'
        },
        {
            family: 'PT Sans',
            role: 'body, form, dan teks antarmuka — humanis era Lucida Grande',
            fallback: "'Lucida Grande', system-ui, sans-serif"
        },
        {
            family: 'IBM Plex Mono',
            role: 'kode inline, kbd, dan angka tabular',
            fallback: "'Courier New', monospace"
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Skeuomorph" adalah karya orisinal TOKENAI.

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

export const SKEUOMORPH_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': SKEUOMORPH_STYLES,
        'showcase.html': SKEUOMORPH_SHOWCASE,
        ...SKEUOMORPH_COMPONENTS,
        ...SKEUOMORPH_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
