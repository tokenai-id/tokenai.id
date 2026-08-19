/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

/**
 * Palet penimpa kit design.
 *
 * Kontrak kit menjamin semua komponen (dan chart) hanya membaca token `--tk-*`, jadi mengecat
 * ulang sebuah kit cukup dengan satu blok CSS di akhir `styles.css` yang menimpa warna primer
 * dan aksen — terang dan gelap sekaligus. Pengguna memilih preset atau mengisi dua warna
 * sendiri; sisanya (hover, warna teks kontras, varian gelap) diturunkan otomatis supaya palet
 * custom pun tetap patuh aksesibilitas dasar.
 */

export interface TokenaiKitPaletteColors {
    primary: string;
    primaryHover: string;
    primaryContrast: string;
    accent: string;
}

export interface TokenaiKitPalette extends TokenaiKitPaletteColors {
    /** Id kebab-case; `custom` untuk palet isian pengguna. */
    name: string;
    title: string;
    dark: TokenaiKitPaletteColors;
}

function parseHex(hex: string): [number, number, number] {
    const raw = hex.replace('#', '');
    const full = raw.length === 3 ? raw.split('').map(c => c + c).join('') : raw;
    const value = Number.parseInt(full, 16);
    // eslint-disable-next-line no-bitwise
    return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

function toHex(rgb: [number, number, number]): string {
    return '#' + rgb
        .map(channel => Math.max(0, Math.min(255, Math.round(channel))).toString(16).padStart(2, '0'))
        .join('')
        .toUpperCase();
}

/** Mencampur `hex` ke arah `target` sebanyak `ratio` (0..1). */
export function mixHex(hex: string, target: string, ratio: number): string {
    const from = parseHex(hex);
    const to = parseHex(target);
    return toHex([0, 1, 2].map(i => from[i] + (to[i] - from[i]) * ratio) as [number, number, number]);
}

/** Warna teks yang terbaca di atas `hex`: gelap untuk latar terang, putih untuk latar gelap. */
export function contrastTextFor(hex: string): string {
    const [r, g, b] = parseHex(hex);
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    return luminance > 0.55 ? '#18181B' : '#FFFFFF';
}

/**
 * Membangun palet lengkap dari dua warna. Hover digelapkan sedikit; mode gelap memakai versi
 * yang dicerahkan supaya tetap menonjol di permukaan gelap.
 */
export function buildKitPalette(primary: string, accent: string, name = 'custom', title = 'Custom'): TokenaiKitPalette {
    const darkPrimary = mixHex(primary, '#FFFFFF', 0.16);
    return {
        name,
        title,
        primary,
        primaryHover: mixHex(primary, '#000000', 0.14),
        primaryContrast: contrastTextFor(primary),
        accent,
        dark: {
            primary: darkPrimary,
            primaryHover: mixHex(primary, '#FFFFFF', 0.3),
            primaryContrast: contrastTextFor(darkPrimary),
            accent: mixHex(accent, '#FFFFFF', 0.16)
        }
    };
}

/**
 * Preset yang ditawarkan kartu katalog. "Bawaan kit" bukan bagian daftar ini — ketiadaan palet
 * berarti kit memakai warnanya sendiri.
 */
export const TOKENAI_KIT_PALETTES: TokenaiKitPalette[] = [
    buildKitPalette('#2563EB', '#2563EB', 'biru', 'Biru'),
    buildKitPalette('#16A34A', '#16A34A', 'hijau', 'Hijau'),
    buildKitPalette('#7C3AED', '#7C3AED', 'ungu', 'Ungu'),
    buildKitPalette('#E11D48', '#E11D48', 'mawar', 'Mawar'),
    buildKitPalette('#EA580C', '#EA580C', 'jingga', 'Jingga'),
    buildKitPalette('#0D9488', '#0D9488', 'teal', 'Teal')
];

export function findKitPalette(name: string): TokenaiKitPalette | undefined {
    return TOKENAI_KIT_PALETTES.find(palette => palette.name === name);
}

/**
 * Blok penimpa yang ditambahkan di akhir `styles.css`. Berada paling akhir membuatnya menang
 * kaskade atas `:root` dan blok `[data-tk-theme="dark"]` milik kit tanpa menyentuh keduanya.
 */
export function paletteCss(palette: TokenaiKitPalette): string {
    return `
/* == tk: palette (${palette.name}) — penimpa warna, ditulis IDE == */
:root {
    --tk-color-primary: ${palette.primary};
    --tk-color-primary-hover: ${palette.primaryHover};
    --tk-color-primary-contrast: ${palette.primaryContrast};
    --tk-color-accent: ${palette.accent};
}
[data-tk-theme="dark"] {
    --tk-color-primary: ${palette.dark.primary};
    --tk-color-primary-hover: ${palette.dark.primaryHover};
    --tk-color-primary-contrast: ${palette.dark.primaryContrast};
    --tk-color-accent: ${palette.dark.accent};
}
`;
}
