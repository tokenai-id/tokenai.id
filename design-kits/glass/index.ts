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
import { GLASS_COMPONENTS } from './components';
import { GLASS_EXAMPLES } from './examples';
import { GLASS_SHOWCASE } from './showcase';
import { GLASS_STYLES } from './styles';

/**
 * Kit Glass — kit orisinal TOKENAI dengan estetika glassmorphism: panel semi-transparan
 * dengan blur frosted glass di atas gradasi cahaya ungu-biru, tepi seputih embun, dan
 * lapisan bertumpuk sehingga antarmuka terasa seperti lembaran kaca.
 *
 * Seperti Zine, kit ini sengaja TIDAK terdaftar di `TOKENAI_DESIGN_KITS` (kit bawaan yang
 * dibundel IDE): didistribusikan murni lewat katalog tokenai.id — unggah dari dashboard
 * admin → R2 → API katalog → unduh + verifikasi di IDE. Diekspor
 * `scripts/export-design-kits.js` untuk menghasilkan arsip unggahannya.
 */
const MANIFEST: TokenaiDesignKitManifest = {
    name: 'glass',
    title: 'Glass',
    version: '1.0.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'kaca buram bertumpuk, blur frosted glass, cahaya ungu-biru lembut, ringan',
    style: 'Futuristic',
    tags: ['SaaS', 'Landing Page', 'Business', 'Portfolio'],
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
            family: 'Sora',
            role: 'heading',
            import: 'https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'Inter',
            role: 'body',
            fallback: 'system-ui, sans-serif'
        },
        {
            family: 'JetBrains Mono',
            role: 'kode, kbd',
            fallback: 'ui-monospace, monospace'
        }
    ]
};

/** Kit orisinal: tanpa `source`, lisensinya MIT milik TOKENAI sendiri. */
const LICENSE = `Kit "Glass" adalah karya orisinal TOKENAI.

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

export const GLASS_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': GLASS_STYLES,
        'showcase.html': GLASS_SHOWCASE,
        ...GLASS_COMPONENTS,
        ...GLASS_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
