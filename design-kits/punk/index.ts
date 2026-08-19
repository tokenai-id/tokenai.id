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
import { PUNK_COMPONENTS } from './components';
import { PUNK_EXAMPLES } from './examples';
import { PUNK_SHOWCASE } from './showcase';
import { PUNK_STYLES } from './styles';

/**
 * Kit Punk — kit orisinal TOKENAI dengan suasana poster gig DIY yang difotokopi
 * hitam-putih: kertas kontras tinggi (#F2EFE7) berbintik toner, tinta hitam pekat
 * (#141312), pink menyolok (#E31577) dan kuning stabilo (#E8D200), heading Anton
 * agresif yang miring (skew), huruf tempelan ransom note, coretan Permanent Marker,
 * patch/stiker ditempel sembarangan, foto otomatis jadi fotokopi B&W kontras tinggi,
 * dan komposisi yang sengaja kacau — kartu, badge, dan ikon semuanya sedikit berputar.
 * Tipografi Anton (heading), Barlow (body), Courier Prime (label mesin tik), dan
 * Permanent Marker (coretan tangan).
 *
 * Kit satu-tema seperti Grunge: terang secara bawaan tanpa mode gelap — poster
 * ditempel di tiang listrik, bukan di layar — sehingga `dark: false`,
 * `themes: ['light']`, dan semua halaman pratinjaunya menyembunyikan saklar tema
 * (`themeToggle: false` pada exNav).
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'punk',
    title: 'Punk',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Poster gig DIY fotokopi B&W: tipografi Anton agresif miring, huruf tempelan ransom note, pink menyolok dan kuning stabilo, coretan marker, patch/stiker, komposisi sengaja kacau — terang bawaan tanpa mode gelap',
    style: 'Experimental',
    tags: ['Portfolio', 'Personal', 'Landing Page', 'Blog'],
    license: 'MIT',
    dark: false,
    themes: ['light'],
    icons: {
        set: 'la',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Anton',
            role: 'heading agresif, display, tombol, dan angka statistik',
            import: 'https://fonts.googleapis.com/css2?family=Anton&family=Barlow:wght@400;500;600;700&family=Courier+Prime:wght@400;700&family=Permanent+Marker&display=swap',
            fallback: "Impact, 'Arial Black', sans-serif"
        },
        {
            family: 'Barlow',
            role: 'body, form, dan teks antarmuka',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Courier Prime',
            role: 'caption, label mesin tik, badge, dan patch stiker',
            fallback: "'Courier New', monospace"
        },
        {
            family: 'Permanent Marker',
            role: 'aksen coretan tangan (.tk-scrawl) — hemat, hanya untuk penekanan',
            fallback: 'cursive'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Punk" adalah karya orisinal TOKENAI.

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

export const PUNK_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': PUNK_STYLES,
        'showcase.html': PUNK_SHOWCASE,
        ...PUNK_COMPONENTS,
        ...PUNK_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
