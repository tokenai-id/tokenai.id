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
import { BOLD_MINIMAL_COMPONENTS } from './components';
import { BOLD_MINIMAL_EXAMPLES } from './examples';
import { BOLD_MINIMAL_SHOWCASE } from './showcase';
import { BOLD_MINIMAL_STYLES } from './styles';

/**
 * Kit Bold Minimal — kit orisinal TOKENAI dengan estetika bold minimalism: strukturnya
 * tetap minimal (putih lapang, hairline, sedikit elemen) tetapi satu-dua elemen dibiarkan
 * sangat dominan — headline Archivo weight 900 berukuran raksasa dengan tracking rapat,
 * dan satu biru elektrik (#2B2BFF) sebagai satu-satunya warna kuat untuk tombol, tautan,
 * dan blok CTA. Hitam pekat di atas putih menjaga kontras maksimal; mode gelap membalik
 * kanvas menjadi hitam dengan biru yang lebih menyala.
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'bold-minimal',
    title: 'Bold Minimal',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'bold minimalism: struktur minimal dengan headline raksasa weight 900 dan satu biru elektrik dominan',
    style: 'Minimalist',
    tags: ['SaaS', 'Business', 'Portfolio', 'Landing Page'],
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
            family: 'Archivo',
            role: 'heading weight 900 raksasa dan body — satu keluarga, dominasi dari ukuran ekstrem',
            import: 'https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700;900&family=Space+Mono:wght@400;700&display=swap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Space Mono',
            role: 'caption dan label',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Bold Minimal" adalah karya orisinal TOKENAI.

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

export const BOLD_MINIMAL_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': BOLD_MINIMAL_STYLES,
        'showcase.html': BOLD_MINIMAL_SHOWCASE,
        ...BOLD_MINIMAL_COMPONENTS,
        ...BOLD_MINIMAL_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
