/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import { TokenaiDesignKit } from './design-kit';
import { NEUTRAL_MODERN_KIT } from './neutral-modern';

export * from './app-shell-scaffolder';
export * from './archetypes';
export * from './demo-preview';
export * from './design-kit';
export * from './palettes';
export * from './site-scaffolder';
export * from './stack-converters';
export * from './type-packs';
export * from './website-types';

/**
 * Katalog kit bawaan. Menambah kit resmi = menambah satu folder sulingan + satu entri di sini;
 * katalog dari server (`download.tokenai.id`) menyusul tanpa mengubah bentuk datanya.
 */
export const TOKENAI_DESIGN_KITS: readonly TokenaiDesignKit[] = [
    NEUTRAL_MODERN_KIT
];

export function findDesignKit(name: string): TokenaiDesignKit | undefined {
    const normalized = name.trim().toLowerCase();
    return TOKENAI_DESIGN_KITS.find(kit => kit.manifest.name === normalized);
}
