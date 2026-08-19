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
import { ORGANIC_COMPONENTS } from './components';
import { ORGANIC_EXAMPLES } from './examples';
import { ORGANIC_SHOWCASE } from './showcase';
import { ORGANIC_STYLES } from './styles';

/**
 * Kit Organic — kit orisinal TOKENAI dengan suasana organik/fluid yang mengalir
 * seperti alam: krem hangat (#FBF8F2) dengan semburat pastel, hijau lumut (#3F7253)
 * dan koral terakota (#DD7A50) sebagai warna kerja, aksen lila (#A78BD4), blob
 * dengan border-radius tak beraturan yang bermorf pelan, gradasi mesh
 * persik-mint-lila di hero, kartu daun dengan satu sudut kecil, tombol pil dengan
 * bayangan berwarna difus, garis bawah bergelombang, layout asimetris dengan
 * stagger vertikal di grid fitur, dan foto yang dipangkas jadi bentuk blob.
 * Tipografi Fraunces (heading hangat, italic untuk brand), Nunito (body membulat),
 * dan Sono (caption/label).
 *
 * Kit satu-tema seperti Grunge dan Punk: terang secara bawaan tanpa mode gelap —
 * cahaya matahari, bukan layar — sehingga `dark: false`, `themes: ['light']`,
 * dan semua halaman pratinjaunya menyembunyikan saklar tema (`themeToggle: false`
 * pada exNav).
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'organic',
    title: 'Organic',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Organik/fluid yang mengalir seperti alam: blob bermorf, kurva lembut, gradasi mesh pastel persik-mint-lila, hijau lumut dan koral terakota, layout asimetris dengan stagger vertikal, tipografi Fraunces hangat — terang bawaan tanpa mode gelap',
    style: 'Playful',
    tags: ['Landing Page', 'Health', 'Portfolio', 'Personal'],
    license: 'MIT',
    dark: false,
    themes: ['light'],
    icons: {
        set: 'mingcute',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Fraunces',
            role: 'heading hangat dan display; italic untuk brand',
            import: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;1,9..144,700&family=Nunito:wght@400;600;700;800&family=Sono:wght@400;600&display=swap',
            fallback: 'Georgia, serif'
        },
        {
            family: 'Nunito',
            role: 'body, form, dan teks antarmuka — terminal huruf membulat',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Sono',
            role: 'caption, label, dan angka tabular',
            fallback: "'Courier New', monospace"
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Organic" adalah karya orisinal TOKENAI.

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

export const ORGANIC_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': ORGANIC_STYLES,
        'showcase.html': ORGANIC_SHOWCASE,
        ...ORGANIC_COMPONENTS,
        ...ORGANIC_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
