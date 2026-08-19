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
import { RETRO_FUTURISM_COMPONENTS } from './components';
import { RETRO_FUTURISM_EXAMPLES } from './examples';
import { RETRO_FUTURISM_SHOWCASE } from './showcase';
import { RETRO_FUTURISM_STYLES } from './styles';

/**
 * Kit Retrofuturism — kit orisinal TOKENAI yang membayangkan masa depan dengan bahasa
 * visual masa lalu: headline chrome lettering bergradasi horizon, tipografi space-age
 * Michroma (keluarga Eurostile ala panel kontrol NASA 60s-70s), kanvas krem ber-grid
 * blueprint, tombol kapsul pil panel instrumen, ikon porthole bercincin ganda yang
 * bergiliran warna atomic, speed stripes ala livery roket, angka telemetri mono, dan
 * CTA papan matahari senja 70s. Mode gelap memindahkan suasananya ke synthwave 80s:
 * langit ungu pekat ber-grid neon magenta-cyan dengan cahaya horizon jingga.
 *
 * Seperti kit orisinal lain di jalur remote, kit ini sengaja TIDAK terdaftar di
 * `TOKENAI_DESIGN_KITS` (kit bawaan yang dibundel IDE): didistribusikan murni lewat katalog
 * tokenai.id — unggah dari dashboard admin → R2 → API katalog → unduh + verifikasi di IDE.
 * Diekspor `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'retro-futurism',
    title: 'Retrofuturism',
    version: '1.0.1',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'Masa depan dalam bahasa visual masa lalu: chrome lettering, tipografi space-age, grid blueprint futuristik, tombol kapsul, matahari senja 70s — mode gelap synthwave 80s',
    style: 'Retro',
    tags: ['SaaS', 'Landing Page', 'Portfolio', 'Business'],
    license: 'MIT',
    dark: false,
    themes: ['light', 'dark'],
    icons: {
        set: 'tabler',
        script: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js'
    },
    charts: {
        library: 'chart.js',
        script: CHARTJS_SCRIPT
    },
    fonts: [
        {
            family: 'Michroma',
            role: 'heading space-age keluarga Eurostile, tombol, tab dan nav',
            import: 'https://fonts.googleapis.com/css2?family=Michroma&family=Space+Grotesk:wght@400;500;700&family=Share+Tech+Mono&display=swap',
            fallback: "'Arial Black', sans-serif"
        },
        {
            family: 'Space Grotesk',
            role: 'body geometris hangat',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Share Tech Mono',
            role: 'caption, label, badge, dan readout telemetri',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Retrofuturism" adalah karya orisinal TOKENAI.

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

export const RETRO_FUTURISM_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': RETRO_FUTURISM_STYLES,
        'showcase.html': RETRO_FUTURISM_SHOWCASE,
        ...RETRO_FUTURISM_COMPONENTS,
        ...RETRO_FUTURISM_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
