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
import { ZINE_COMPONENTS } from './components';
import { ZINE_EXAMPLES } from './examples';
import { ZINE_SHOWCASE } from './showcase';
import { ZINE_STYLES } from './styles';

/**
 * Kit Zine — kit orisinal TOKENAI dengan estetika zine fotokopian.
 *
 * Sengaja TIDAK terdaftar di `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): kit ini
 * didistribusikan murni lewat katalog tokenai.id, sehingga menjadi ujian ujung-ke-ujung jalur
 * remote — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'zine',
    title: 'Zine',
    // 1.1.0: kontrak v2 — halaman arketipe produksi (`pages/` + `partials/`, kontrak §8)
    // beserta field `archetypes`, bahan scaffolder wizard yang merakit situs tanpa token.
    // 1.0.1: menambah `license` di akar manifest supaya entri katalog kit orisinal terisi
    // "MIT", bukan string kosong (balasan tokenai.id §15). Objek per versi immutable, jadi
    // perbaikan sekecil apa pun wajib menaikkan versi — dan unggahan 1.0.1 sekalian menguji
    // jalur pembaruan: kartu katalog harus berpindah ke versi tertinggi. 1.0.1 belum pernah
    // diunggah, jadi perbaikan taut login/register di showcase (temuan tokenai.id atas 1.0.0)
    // ikut menumpang versi ini tanpa perlu 1.0.2.
    version: '1.1.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'kertas dan tinta, merah riot, sudut tajam, fotokopian',
    style: 'Brutalist',
    tags: ['Blog', 'Portfolio', 'Personal', 'Landing Page'],
    license: 'MIT',
    dark: false,
    themes: ['light', 'dark'],
    icons: {
        set: 'lucide',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Archivo Black',
            role: 'heading, uppercase',
            import: 'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap',
            fallback: "'Arial Black', system-ui, sans-serif"
        },
        {
            family: 'Space Grotesk',
            role: 'body',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Space Mono',
            role: 'caption, tombol, label mono',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Zine" adalah karya orisinal TOKENAI.

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

export const ZINE_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': ZINE_STYLES,
        'showcase.html': ZINE_SHOWCASE,
        ...ZINE_COMPONENTS,
        ...ZINE_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
