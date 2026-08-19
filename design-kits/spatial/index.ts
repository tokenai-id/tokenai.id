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
import { SPATIAL_COMPONENTS } from './components';
import { SPATIAL_EXAMPLES } from './examples';
import { SPATIAL_SHOWCASE } from './showcase';
import { SPATIAL_STYLES } from './styles';

/**
 * Kit Spatial — kit orisinal TOKENAI dengan suasana spatial / 3D design: UI
 * dengan depth yang kuat sehingga website terasa seperti sebuah ruang. Panel
 * kaca tembus pandang melayang di kedalaman berbeda (bayangan dekat + jauh,
 * backdrop blur, tepi atas menangkap cahaya), objek 3D murni CSS — kubus
 * isometrik (.tk-cube) dan bola cahaya (.tk-orb) — mengambang pelan, lantai
 * grid perspektif memanjang ke titik hilang di hero, grid fitur menoleh dalam
 * perspektif 3D saat hover, dan pencahayaan azure-violet menyapu dari sudut
 * ruang. Palet ruang dalam: indigo gelap (#0D1120), azure bercahaya (#5B8CFF),
 * violet (#9D7BFF), dan cyan (#4FE0D2). Tipografi Space Grotesk (heading
 * geometris), Inter (body), dan Space Mono (kode).
 *
 * Kit satu-tema seperti Cyberpunk dan Acid Graphics: gelap secara bawaan tanpa
 * mode terang — ruang hanya terasa dalam gelap — sehingga `dark: true`,
 * `themes: ['dark']`, dan semua halaman pratinjaunya menyembunyikan saklar
 * tema (`themeToggle: false` pada exNav).
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'spatial',
    title: 'Spatial',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Spatial / 3D design dengan depth yang kuat: panel kaca melayang di kedalaman berbeda dengan bayangan dekat + jauh, objek 3D CSS (kubus isometrik, bola cahaya) yang mengambang, lantai grid perspektif, kartu yang mendekat ke mata saat disentuh, dan pencahayaan azure-violet dari sudut ruang — gelap bawaan tanpa mode terang',
    style: 'Futuristic',
    tags: ['Landing Page', 'SaaS', 'Portfolio', 'Business'],
    license: 'MIT',
    dark: true,
    themes: ['dark'],
    icons: {
        set: 'akar-icons',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Space Grotesk',
            role: 'heading dan title — geometris dengan aksen space-age',
            import: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Inter',
            role: 'body, form, dan teks antarmuka — bersih dan mudah dibaca di ruang gelap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Space Mono',
            role: 'kode inline, kbd, dan angka tabular',
            fallback: "'Courier New', monospace"
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Spatial" adalah karya orisinal TOKENAI.

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

export const SPATIAL_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': SPATIAL_STYLES,
        'showcase.html': SPATIAL_SHOWCASE,
        ...SPATIAL_COMPONENTS,
        ...SPATIAL_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
