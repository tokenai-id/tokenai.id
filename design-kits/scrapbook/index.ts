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
import { SCRAPBOOK_COMPONENTS } from './components';
import { SCRAPBOOK_EXAMPLES } from './examples';
import { SCRAPBOOK_SHOWCASE } from './showcase';
import { SCRAPBOOK_STYLES } from './styles';

/**
 * Kit Scrapbook — kit orisinal TOKENAI dengan estetika buku tempel handmade, saudara
 * Collage yang lebih jauh melangkah ke kerajinan tangan: heading benar-benar ditulis
 * tangan (Kalam), tombol dan kartu "digunting tangan" dengan sudut tidak rata, judul hero
 * berupa sobekan kertas bergerigi (clip-path), washi tape belang menandai elemen aktif,
 * badge seperti perangko berlubang, ikon fitur seperti stempel karet, caption diketik
 * mesin tik (Cutive Mono), dan foto dihangatkan sepia. Kertas kraft bergaris buku tulis,
 * aksen mawar dan hijau daun.
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'scrapbook',
    title: 'Scrapbook',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'buku tempel handmade: washi tape, perangko, torn paper, tulisan tangan, mesin tik, sepia',
    style: 'Playful',
    tags: ['Personal', 'Blog', 'Portfolio', 'Event'],
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
            family: 'Kalam',
            role: 'heading, tulisan tangan',
            import: 'https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Nunito:wght@400;600;700;800&family=Cutive+Mono&display=swap',
            fallback: 'cursive'
        },
        {
            family: 'Nunito',
            role: 'body',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Cutive Mono',
            role: 'caption, tombol, label mesin tik',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Scrapbook" adalah karya orisinal TOKENAI.

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

export const SCRAPBOOK_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': SCRAPBOOK_STYLES,
        'showcase.html': SCRAPBOOK_SHOWCASE,
        ...SCRAPBOOK_COMPONENTS,
        ...SCRAPBOOK_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
