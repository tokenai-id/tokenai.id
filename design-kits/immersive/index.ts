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
import { IMMERSIVE_COMPONENTS } from './components';
import { IMMERSIVE_EXAMPLES } from './examples';
import { IMMERSIVE_SHOWCASE } from './showcase';
import { IMMERSIVE_STYLES } from './styles';

/**
 * Kit Immersive — kit orisinal TOKENAI dengan suasana immersive web: website
 * sebagai pengalaman, bukan sekadar halaman. Setiap seksi adalah adegan film
 * satu layar penuh (.tk-scene) dengan letterbox bar di hero, kicker slate film
 * (.tk-kicker "SCENE 01"), konten yang muncul dari kegelapan lewat reveal yang
 * digerakkan scroll murni CSS (.tk-reveal, animation-timeline dengan degradasi
 * anggun), transisi panjang sinematik (cubic-bezier 0.16,1,0.3,1 selama
 * 450ms), grain film dan vignette menyelimuti seluruh layar, isyarat scroll
 * berdenyut (.tk-scroll-cue), serta elemen suara — equalizer menari (.tk-eq)
 * dan chip "suara aktif" (.tk-sound-chip). Color grading teal-orange khas
 * film: oranye hangat (#FF8A3D) untuk subjek yang disorot, teal (#38C8B4)
 * untuk bayangan, di atas hitam pekat (#0A0A0F). Tipografi Syne (heading
 * artistik lebar), Manrope (body), dan JetBrains Mono (kode & kicker).
 *
 * Kit satu-tema seperti Cyberpunk dan Spatial: gelap secara bawaan tanpa mode
 * terang — pengalaman ditonton di ruang gelap — sehingga `dark: true`,
 * `themes: ['dark']`, dan semua halaman pratinjaunya menyembunyikan saklar
 * tema (`themeToggle: false` pada exNav).
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'immersive',
    title: 'Immersive',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Immersive web sinematik: setiap seksi adalah adegan film satu layar penuh dengan letterbox, kicker "SCENE", reveal yang digerakkan scroll, transisi panjang yang dramatis, grain film + vignette, isyarat scroll berdenyut, dan elemen suara (equalizer, chip suara) — color grading teal-orange di atas hitam pekat, gelap bawaan tanpa mode terang',
    style: 'Experimental',
    tags: ['Landing Page', 'Portfolio', 'Event', 'Personal'],
    license: 'MIT',
    dark: true,
    themes: ['dark'],
    icons: {
        set: 'ion',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Syne',
            role: 'heading dan title — artistik lebar khas situs pengalaman',
            import: 'https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Manrope:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Manrope',
            role: 'body, form, dan teks antarmuka — bersih dan nyaman dibaca di layar gelap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'JetBrains Mono',
            role: 'kode inline, kbd, kicker adegan, dan angka tabular',
            fallback: "'Courier New', monospace"
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Immersive" adalah karya orisinal TOKENAI.

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

export const IMMERSIVE_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': IMMERSIVE_STYLES,
        'showcase.html': IMMERSIVE_SHOWCASE,
        ...IMMERSIVE_COMPONENTS,
        ...IMMERSIVE_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
