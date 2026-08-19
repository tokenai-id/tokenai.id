/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

/**
 * Satu kit design sesuai `docs/kontrak-kit-design.md`.
 *
 * Kit adalah berkas nyata — CSS token + kelas komponen, fragmen HTML per elemen, dan lembar
 * peraga — bukan deskripsi untuk dirancang ulang model. Isinya dibundel sebagai string di sini
 * karena tool provider hidup di frontend (target webpack browser) yang tidak bisa membaca folder
 * resource lewat fs; dan disalinnya ke workspace lewat alat `apply_design_kit`, bukan lewat
 * konteks model, supaya puluhan kilobyte berkas kit tidak pernah menjadi token.
 */
/**
 * Kategori gaya visual — tepat satu per kit. Daftar ini kosakata bersama dengan katalog
 * tokenai.id: nilai di `kit.json`, di `catalog.json` hasil ekspor, dan di API katalog harus
 * berasal dari sini, supaya filter di IDE dan di dashboard admin membaca data yang sama.
 */
export const TOKENAI_KIT_STYLES = [
    'Minimalist', 'Modern', 'Corporate', 'Editorial', 'Luxury', 'Brutalist',
    'Retro', 'Futuristic', 'Dark Mode', 'Colorful', 'Playful', 'Experimental'
] as const;
export type TokenaiKitStyle = typeof TOKENAI_KIT_STYLES[number];

/** Tag peruntukan — boleh lebih dari satu per kit. Kosakata bersama dengan katalog tokenai.id. */
export const TOKENAI_KIT_TAGS = [
    'Business', 'E-commerce', 'Portfolio', 'Landing Page', 'Blog', 'SaaS', 'Education',
    'Health', 'Restaurant', 'Real Estate', 'Travel', 'Event', 'Nonprofit', 'Dashboard', 'Personal'
] as const;
export type TokenaiKitTag = typeof TOKENAI_KIT_TAGS[number];

export interface TokenaiDesignKitManifest {
    /** Id kebab-case, sama dengan nama foldernya di workspace. */
    name: string;
    title: string;
    /** Versi semver kit; naik setiap isi kit berubah — dasar pembaruan katalog tokenai.id. */
    version: string;
    /** Karakter design; bahan pencocokan dengan permintaan pengguna. */
    vibe: string;
    /** Kategori gaya visual, tepat satu dari `TOKENAI_KIT_STYLES`. */
    style: TokenaiKitStyle;
    /** Tag peruntukan, satu atau lebih dari `TOKENAI_KIT_TAGS`. */
    tags: TokenaiKitTag[];
    /** Benar bila kit ini gelap secara bawaan. */
    dark: boolean;
    /** Tema yang disediakan kit; dua-mode berarti ada blok `[data-tk-theme="dark"]` di styles.css. */
    themes: ('light' | 'dark')[];
    /**
     * Sistem ikon kit. Semua kit memakai Iconify (ratusan ribu ikon lewat satu web component,
     * dimuat sesuai kebutuhan); yang berbeda per kit hanya set bawaannya, dipilih yang senada
     * dengan karakternya.
     */
    icons: {
        /** Prefix set Iconify, mis. `lucide`; ikon ditulis `<iconify-icon icon="lucide:nama">`. */
        set: string;
        /** URL skrip web component yang harus ada di halaman mana pun yang memakai ikon. */
        script: string;
    };
    /**
     * Sistem chart kit. Semua kit memakai Chart.js dengan versi yang dipatok sama, supaya halaman
     * dari kit mana pun bisa berbagi konfigurasi chart; warna chart dibaca dari token kit saat
     * digambar sehingga ikut tema.
     */
    charts: {
        /** Nama pustakanya; saat ini selalu `chart.js`. */
        library: string;
        /** URL skrip UMD yang harus ada di halaman mana pun yang memakai chart. */
        script: string;
    };
    fonts: {
        family: string;
        role: string;
        import?: string;
        fallback: string;
    }[];
    /**
     * Arketipe halaman produksi yang disediakan kit di `pages/` (kontrak §8) — kosakata
     * `TOKENAI_KIT_ARCHETYPES` di `archetypes.ts`. Scaffolder wizard memakai daftar ini
     * untuk merakit situs tanpa token; katalog memakainya untuk menandai cakupan kit.
     */
    archetypes?: string[];
    /**
     * Lisensi kit orisinal (mis. `MIT`), dibaca server katalog saat kit tidak punya `source`.
     * Kit sulingan tidak membutuhkannya — lisensinya datang dari `source.license`.
     */
    license?: string;
    /** Asal-usul kit sulingan; kit orisinal tidak memilikinya. */
    source?: {
        title: string;
        url: string;
        license: string;
    };
}

export interface TokenaiDesignKit {
    manifest: TokenaiDesignKitManifest;
    /**
     * Isi kit, path relatif terhadap folder kit (`styles.css`, `showcase.html`,
     * `components/button.html`, `LICENSE`, `kit.json`).
     */
    files: Record<string, string>;
}

/**
 * Ringkasan yang dikirim ke model lewat alat katalog: cukup untuk memilih, tanpa isi berkas.
 * Asal-usul sulingan sengaja tidak ikut — atribusi adalah urusan `LICENSE` dan `kit.json`,
 * bukan bahan pertimbangan memilih kit.
 */
export interface TokenaiDesignKitSummary {
    name: string;
    title: string;
    vibe: string;
    style: TokenaiKitStyle;
    tags: TokenaiKitTag[];
    themes: ('light' | 'dark')[];
    iconSet: string;
    components: string[];
}

export function summarizeKit(kit: TokenaiDesignKit): TokenaiDesignKitSummary {
    const components = Object.keys(kit.files)
        .filter(path => path.startsWith('components/'))
        .map(path => path.replace('components/', '').replace('.html', ''))
        .sort();
    return {
        name: kit.manifest.name,
        title: kit.manifest.title,
        vibe: kit.manifest.vibe,
        style: kit.manifest.style,
        tags: kit.manifest.tags,
        themes: kit.manifest.themes,
        iconSet: kit.manifest.icons.set,
        components
    };
}
