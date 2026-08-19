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
import { MAXIMAL_COMPONENTS } from './components';
import { MAXIMAL_EXAMPLES } from './examples';
import { MAXIMAL_SHOWCASE } from './showcase';
import { MAXIMAL_STYLES } from './styles';

/**
 * Kit Maximal — kit orisinal TOKENAI dengan estetika maximalism, kebalikan minimalism:
 * warna berani saling bertabrakan (magenta, ungu elektrik, kuning asam, toska), tipografi
 * raksasa Unbounded bergradasi neon, latar bertabur pola titik, tile fitur berwarna
 * bergantian seperti permen, bayangan dua lapis, tombol utama bergradasi tiga warna, dan
 * elemen aktif disorot stabilo kuning. Ramai dan dekoratif, tetapi tetap tertata di atas
 * grid yang disiplin.
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'maximal',
    title: 'Maximal',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'maximalism: warna tabrakan, tipografi raksasa, gradasi neon, pola titik, sorotan stabilo',
    style: 'Experimental',
    tags: ['Landing Page', 'Event', 'Portfolio', 'E-commerce'],
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
            family: 'Unbounded',
            role: 'heading, ekspresif dan lebar',
            import: 'https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700;900&family=Sora:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Sora',
            role: 'body',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Space Mono',
            role: 'caption, label, badge',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Maximal" adalah karya orisinal TOKENAI.

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

export const MAXIMAL_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': MAXIMAL_STYLES,
        'showcase.html': MAXIMAL_SHOWCASE,
        ...MAXIMAL_COMPONENTS,
        ...MAXIMAL_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
