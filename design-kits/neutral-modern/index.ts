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
import { NEUTRAL_MODERN_COMPONENTS } from './components';
import { NEUTRAL_MODERN_EXAMPLES } from './examples';
import { CHARTJS_SCRIPT } from './preview-scaffold';
import { NEUTRAL_MODERN_SHOWCASE } from './showcase';
import { NEUTRAL_MODERN_STYLES } from './styles';

const MANIFEST: TokenaiDesignKitManifest = {
    name: 'neutral-modern',
    title: 'Neutral Modern',
    // 1.1.0: kontrak v2 — halaman arketipe produksi (`pages/` + `partials/`, kontrak §8)
    // beserta field `archetypes`, bahan scaffolder wizard yang merakit situs tanpa token.
    // 1.0.1: taut login/register di seksi auth showcase kini menunjuk ke examples/ (temuan
    // tokenai.id — 1.0.0 sudah terbit dan immutable, jadi perbaikannya menaikkan versi).
    version: '1.1.0',
    archetypes: [...TOKENAI_KIT_ARCHETYPES],
    vibe: 'bersih, netral, profesional, kontras lembut',
    style: 'Modern',
    tags: ['Business', 'SaaS', 'Landing Page', 'Dashboard'],
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
            family: 'Inter',
            role: 'heading dan body',
            import: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
            fallback: 'system-ui, sans-serif'
        }
    ],
    source: {
        title: 'shadcn/ui',
        url: 'https://github.com/shadcn-ui/ui',
        license: 'MIT'
    }
};

/**
 * Teks MIT milik sumber sulingan, wajib ikut tersalin ke workspace bersama kit-nya
 * (`docs/kontrak-kit-design.md` §2).
 */
const LICENSE = `Kit "Neutral Modern" diturunkan dari keputusan design shadcn/ui.
Sumber: https://github.com/shadcn-ui/ui

MIT License

Copyright (c) 2023 shadcn

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

export const NEUTRAL_MODERN_KIT: TokenaiDesignKit = {
    manifest: MANIFEST,
    files: {
        'kit.json': JSON.stringify(MANIFEST, undefined, 4) + '\n',
        'LICENSE': LICENSE,
        'styles.css': NEUTRAL_MODERN_STYLES,
        'showcase.html': NEUTRAL_MODERN_SHOWCASE,
        ...NEUTRAL_MODERN_COMPONENTS,
        ...NEUTRAL_MODERN_EXAMPLES,
        ...buildArchetypeFiles(MANIFEST)
    }
};
