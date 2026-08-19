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
import { GRUNGE_COMPONENTS } from './components';
import { GRUNGE_EXAMPLES } from './examples';
import { GRUNGE_SHOWCASE } from './showcase';
import { GRUNGE_STYLES } from './styles';

/**
 * Kit Grunge — kit orisinal TOKENAI dengan suasana zine fotokopi 90an: kertas kotor
 * bernoda (#E4DFD0) dengan grain dan goresan halus di seluruh halaman, tinta hitam pekat
 * (#1C1A17) dan merah karat (#9E2B1E), heading Rubik Distressed yang tergerus, label
 * mesin tik Special Elite, badge stempel karet miring, cetakan ganda xerox yang meleset,
 * coretan spidol, tepi sobek, dan fotografi desaturated kontras tinggi (otomatis lewat
 * filter pada gambar). Tipografi Rubik Distressed (heading), Archivo (body), dan
 * Special Elite (label mesin tik).
 *
 * Kit satu-tema kebalikan dari Cyberpunk: terang secara bawaan tanpa mode gelap — mesin
 * fotokopi hanya kenal kertas — sehingga `dark: false`, `themes: ['light']`, dan semua
 * halaman pratinjaunya menyembunyikan saklar tema (`themeToggle: false` pada exNav).
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'grunge',
    title: 'Grunge',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Zine fotokopi 90an: kertas kotor bergrain dan goresan, tinta hitam pekat dan merah karat, heading distressed, label mesin tik, stempel karet miring, tepi sobek, foto desaturated — terang bawaan tanpa mode gelap',
    style: 'Retro',
    tags: ['Portfolio', 'Personal', 'Blog', 'Landing Page'],
    license: 'MIT',
    dark: false,
    themes: ['light'],
    icons: {
        set: 'feather',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Rubik Distressed',
            role: 'heading tergerus, display, dan angka statistik',
            import: 'https://fonts.googleapis.com/css2?family=Rubik+Distressed&family=Archivo:wght@400;500;600;700&family=Special+Elite&display=swap',
            fallback: "Impact, 'Arial Black', sans-serif"
        },
        {
            family: 'Archivo',
            role: 'body, form, dan teks antarmuka',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Special Elite',
            role: 'caption, label mesin tik, badge stempel, dan label arsip',
            fallback: "'Courier New', monospace"
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Grunge" adalah karya orisinal TOKENAI.

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

export const GRUNGE_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': GRUNGE_STYLES,
        'showcase.html': GRUNGE_SHOWCASE,
        ...GRUNGE_COMPONENTS,
        ...GRUNGE_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
