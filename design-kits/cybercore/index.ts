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
import { CYBERCORE_COMPONENTS } from './components';
import { CYBERCORE_EXAMPLES } from './examples';
import { CYBERCORE_SHOWCASE } from './showcase';
import { CYBERCORE_STYLES } from './styles';

/**
 * Kit Cybercore — kit orisinal TOKENAI beraroma antarmuka komputer/internet, bukan kota
 * cyberpunk: seluruh teks monospace (JetBrains Mono untuk semua peran), kertas teknik
 * ber-grid milimeter, garis rambut tinta 1px di semua panel, window UI ber-title bar,
 * badge log ber-bracket [OK], progress bar blok tersegmentasi, prompt terminal $,
 * kursor blok berkedip, dan dither 1-bit sebagai artefak digital. Hover membalik warna
 * seperti blok seleksi terminal.
 *
 * Kit dua-tema: terang (bawaan) = kertas teknik putih dengan hijau terminal dan amber;
 * gelap = CRT fosfor hijau ber-scanline.
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'cybercore',
    title: 'Cybercore',
    version: '1.0.1',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Antarmuka komputer: full monospace, terminal, window UI, grid teknis kertas milimeter, loading blok, dither 1-bit — mode gelap CRT fosfor hijau ber-scanline',
    style: 'Experimental',
    tags: ['SaaS', 'Dashboard', 'Portfolio', 'Blog'],
    license: 'MIT',
    dark: false,
    themes: ['light', 'dark'],
    icons: {
        set: 'codicon',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'JetBrains Mono',
            role: 'satu-satunya keluarga huruf: heading 800, body 400, caption/label huruf besar — monospace menyeluruh adalah identitas kit',
            import: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&display=swap',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Cybercore" adalah karya orisinal TOKENAI.

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

export const CYBERCORE_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': CYBERCORE_STYLES,
        'showcase.html': CYBERCORE_SHOWCASE,
        ...CYBERCORE_COMPONENTS,
        ...CYBERCORE_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
