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
import { DARK_FUTURISTIC_COMPONENTS } from './components';
import { DARK_FUTURISTIC_EXAMPLES } from './examples';
import { DARK_FUTURISTIC_SHOWCASE } from './showcase';
import { DARK_FUTURISTIC_STYLES } from './styles';

/**
 * Kit Dark Futuristic — kit orisinal TOKENAI untuk produk AI, SaaS, crypto, dan
 * teknologi: dark mode yang bersih dan tenang, bukan cyberpunk yang riuh.
 * Tipografi geometris rapi (Sora + Inter Tight) di atas latar hitam kebiruan
 * (#07080D), grid teknis setipis rambut yang menyelimuti seluruh halaman lewat
 * pseudo-element body, garis batas 1px yang nyaris tak terlihat, dan dua sumber
 * cahaya gradient biru elektrik (#4D7CFE) ke violet (#A78BFA) yang mengambang
 * jauh di puncak halaman. Elemen sci-fi-nya sengaja sedikit dan disiplin:
 * kurung sudut HUD (.tk-hud), titik status berdenyut (.tk-dot), berkas cahaya
 * pemisah seksi (.tk-beam), baris terminal (.tk-term), dan teks bergradasi
 * (.tk-gradient-text) untuk satu-dua kata kunci saja — tanpa glitch atau neon
 * berlebihan, karena keterbacaan tetap nomor satu.
 *
 * Kit satu-tema seperti Spatial dan Immersive: gelap secara bawaan tanpa mode
 * terang — produk teknologi hidup di ruang gelap — sehingga `dark: true`,
 * `themes: ['dark']`, dan semua halaman pratinjaunya menyembunyikan saklar tema
 * (`themeToggle: false` pada exNav).
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'dark-futuristic',
    title: 'Dark Futuristic',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Dark mode bersih untuk AI, SaaS, crypto, dan teknologi: tipografi geometris rapi, grid teknis tipis di seluruh latar, garis batas setipis rambut, cahaya gradient biru elektrik ke violet, dan sedikit elemen sci-fi yang disiplin — kurung HUD, titik status berdenyut, dan teks bergradasi — gelap bawaan tanpa mode terang',
    style: 'Dark Mode',
    tags: ['SaaS', 'Landing Page', 'Dashboard', 'Business'],
    license: 'MIT',
    dark: true,
    themes: ['dark'],
    icons: {
        set: 'hugeicons',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Sora',
            role: 'heading dan title — geometris bersih dengan karakter teknologi',
            import: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Inter+Tight:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Inter Tight',
            role: 'body, form, dan teks antarmuka — rapat dan tetap terbaca di latar gelap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'IBM Plex Mono',
            role: 'label, caption, kode inline, kbd, dan angka tabular',
            fallback: "'Courier New', monospace"
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Dark Futuristic" adalah karya orisinal TOKENAI.

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

export const DARK_FUTURISTIC_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': DARK_FUTURISTIC_STYLES,
        'showcase.html': DARK_FUTURISTIC_SHOWCASE,
        ...DARK_FUTURISTIC_COMPONENTS,
        ...DARK_FUTURISTIC_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
