/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len */

import { ARCHETYPE_SITE_JS, TokenaiKitArchetype, buildArchetypeFiles } from './archetypes';
import { TokenaiDesignKit } from './design-kit';

/**
 * Perakit situs dari halaman arketipe kit — murni string, nol token.
 *
 * Sebelumnya struktur setiap halaman dikarang model saat scaffold, dan di sanalah kualitas
 * bocor: navigasi tidak konsisten antar halaman, logo dipasang tanpa ukuran, media query
 * terlupakan. Di sini semua yang deterministik dikerjakan IDE: halaman disalin dari arketipe
 * kit yang sudah teruji responsif, navigasi + footer + peta situs dibangun SEKALI dari daftar
 * halaman terpilih, logo dipasang lewat markup yang ukurannya dikunci CSS kit, dan placeholder
 * brand/tahun/kanonis diganti. Model hanya kebagian copywriting.
 */

export interface TokenaiScaffoldInput {
    brand: string;
    /** Deskripsi usaha dari wizard (jenis proyek); dipakai untuk meta description awal. */
    description?: string;
    /** Label halaman pilihan pengguna, urutan dipertahankan. */
    pages: string[];
    /** Path workspace-relatif logo (mis. `assets/images/logo-x.png`); kosong = logo teks. */
    logoPath?: string;
    /** Asal kanonis; default placeholder `https://contoh.id`. */
    baseUrl?: string;
    /**
     * Copy pengganti placeholder `{{TK_<KUNCI>}}` di badan arketipe (kunci tanpa awalan
     * `TK_`, mis. `HERO_BADGE`). Yang tidak diberi jatuh ke `DEFAULT_COPY` — sumber
     * utamanya type pack demo per jenis website; wizard boleh mengirimkan hasil karangan
     * model kelak lewat pintu yang sama.
     */
    copy?: Record<string, string>;
    /**
     * Resep beranda: urutan nama blok `partials/home/<nama>.html` (mis. `hero-visual`,
     * `menu-highlight`) yang menggantikan isi bawaan di antara marker `tk:home-body`.
     * Tanpa resep (atau kit tanpa blok) beranda memakai susunan bawaan halaman home.
     */
    recipe?: string[];
}

/**
 * Copy bawaan placeholder arketipe — netral untuk usaha apa pun, dipakai bila pemanggil
 * tidak menimpanya. `TAGLINE` dan `DESCRIPTION` tidak di sini: keduanya diturunkan dari
 * brand/deskripsi input agar tetap kompatibel dengan pemanggil lama.
 */
const DEFAULT_COPY: Record<string, string> = {
    HERO_BADGE: 'Dipercaya 500+ pelanggan',
    HERO_CTA: 'Hubungi Kami',
    HERO_IMG: 'Foto utama',
    HERO_CARD_T: 'Sejak 2015',
    HERO_CARD_S: 'Melayani ribuan pelanggan',
    ABOUT_IMG: 'Foto usaha',
    STAT1_V: '9+', STAT1_L: 'Tahun berpengalaman',
    STAT2_V: '500+', STAT2_L: 'Pelanggan puas',
    STAT3_V: '1.200+', STAT3_L: 'Pesanan selesai',
    STAT4_V: '4,9', STAT4_L: 'Rating rata-rata',
    FEAT1_T: 'Kualitas terjaga', FEAT1_D: 'Setiap detail diperiksa sebelum sampai ke tangan Anda.',
    FEAT2_T: 'Cepat dan tepat', FEAT2_D: 'Pesanan diproses tanpa menunggu lama.',
    FEAT3_T: 'Layanan ramah', FEAT3_D: 'Kami senang membantu, sebelum dan sesudah pembelian.',
    HOME_ABOUT: 'Ceritakan di sini bagaimana usaha ini dimulai, apa yang membuatnya berbeda, dan untuk siapa ia hadir.',
    CHECK1: 'Bahan dan proses pilihan, tanpa kompromi.',
    CHECK2: 'Harga jujur — yang Anda lihat, itu yang Anda bayar.',
    CHECK3: 'Garansi layanan bila ada yang kurang pas.',
    QUOTE1: 'Pelayanannya cepat dan hasilnya melebihi ekspektasi. Pasti balik lagi.',
    QUOTE2: 'Komunikasinya enak, harganya masuk akal, dan kualitasnya konsisten.',
    QUOTE3: 'Direkomendasikan teman, dan sekarang saya yang merekomendasikan ke semua orang.',
    CTA_T: 'Siap memulai?',
    CTA_S: 'Hubungi kami hari ini — gratis konsultasi.',
    ABOUT_STORY1: '{{TK_BRAND}} berdiri dari keyakinan sederhana: pelanggan layak mendapat yang terbaik. Tuliskan perjalanan usaha di sini — kapan dimulai, oleh siapa, dan apa misinya.',
    ABOUT_STORY2: 'Paragraf kedua untuk visi ke depan atau pencapaian yang membanggakan.',
    VAL1_T: 'Jujur', VAL1_D: 'Apa yang kami janjikan, itu yang kami berikan.',
    VAL2_T: 'Bertanggung jawab', VAL2_D: 'Terhadap pelanggan, tim, dan lingkungan.',
    VAL3_T: 'Terus belajar', VAL3_D: 'Selalu ada cara untuk jadi lebih baik.',
    SVC1_T: 'Layanan Satu', SVC1_D: 'Jelaskan layanan utama dalam satu-dua kalimat yang menjual.',
    SVC2_T: 'Layanan Dua', SVC2_D: 'Jelaskan layanan kedua — untuk siapa dan apa hasilnya.',
    SVC3_T: 'Layanan Tiga', SVC3_D: 'Jelaskan layanan ketiga beserta keunggulannya.',
    FAQ1_Q: 'Bagaimana cara memesan?', FAQ1_A: 'Hubungi kami lewat halaman kontak atau tombol pesan di halaman produk.',
    FAQ2_Q: 'Metode pembayaran apa yang tersedia?', FAQ2_A: 'Transfer bank, e-wallet, dan pembayaran di tempat.',
    FAQ3_Q: 'Berapa lama pengirimannya?', FAQ3_A: '1–3 hari kerja untuk area dalam kota.',
    FAQ4_Q: 'Apakah bisa refund?', FAQ4_A: 'Bisa, selama memenuhi syarat dan ketentuan yang berlaku.',
    CONTACT_SUB: 'Ada pertanyaan? Kirim pesan atau kunjungi kami langsung.',
    CATALOG_SUB: 'Jelajahi semua yang kami tawarkan.',
    CARD_META: '4,8 · Terjual 100+',
    CARD_DESC: 'Deskripsi singkat yang menjual.',
    CARD_PRICE: 'Rp99.000',
    CARD_CTA: 'Lihat',
    // Label filter kategori katalog — tiga kelompok generik yang masuk akal untuk usaha apa
    // pun; type pack/AI boleh mengganti TEKSNYA, nilai data-kategori kartu tetap.
    CAT1: 'Unggulan', CAT2: 'Terbaru', CAT3: 'Hemat',
    // Blok beranda per resep — bawaan netral; type pack menimpa yang blok-nya dipakai.
    CARD_WORD: 'Produk',
    STRIP_T: 'Unggulan kami', STRIP_S: 'Pilihan yang paling banyak dicari pelanggan.',
    MENU_T: 'Menu andalan',
    MENU1_N: 'Hidangan Pembuka', MENU1_D: 'Deskripsi singkat yang menggugah selera.', MENU1_P: 'Rp25.000',
    MENU2_N: 'Hidangan Utama', MENU2_D: 'Bahan segar, porsi pas, rasa konsisten.', MENU2_P: 'Rp45.000',
    MENU3_N: 'Hidangan Penutup', MENU3_D: 'Manis penutup yang tidak berlebihan.', MENU3_P: 'Rp22.000',
    MENU4_N: 'Minuman Spesial', MENU4_D: 'Racikan khas rumah, hanya di sini.', MENU4_P: 'Rp18.000',
    LOGOS_T: 'Dipercaya oleh',
    LOGO1: 'Mitra Satu', LOGO2: 'Mitra Dua', LOGO3: 'Mitra Tiga', LOGO4: 'Mitra Empat', LOGO5: 'Mitra Lima',
    PLAN_S: 'Mulai gratis, naikkan paket saat butuh.',
    PLAN1_N: 'Dasar', PLAN1_P: 'Rp0', PLAN1_D: 'Untuk mencoba fitur inti tanpa biaya.',
    PLAN2_N: 'Pro', PLAN2_P: 'Rp99rb', PLAN2_D: 'Untuk pemakaian serius dengan fitur penuh.',
    PLAN3_N: 'Bisnis', PLAN3_P: 'Rp299rb', PLAN3_D: 'Untuk tim dengan kebutuhan lanjutan.',
    STEPS_T: 'Cara kerjanya',
    STEP1_T: 'Hubungi kami', STEP1_D: 'Ceritakan kebutuhan Anda lewat formulir atau WhatsApp.',
    STEP2_T: 'Terima penawaran', STEP2_D: 'Kami susun rekomendasi dan estimasi biayanya.',
    STEP3_T: 'Mulai dikerjakan', STEP3_D: 'Pantau perkembangannya sampai selesai.',
    ED_KICKER: 'Terbaru',
    ED1_T: 'Judul tulisan utama yang menarik perhatian pembaca',
    ED2_T: 'Judul tulisan kedua yang layak dibaca',
    ED3_T: 'Judul tulisan ketiga yang layak dibaca',
    ED4_T: 'Judul tulisan keempat yang layak dibaca'
};

/**
 * Kata butir halaman koleksi, diturunkan dari label halamannya: "Katalog Produk" → "Produk",
 * "Karya" → "Karya", "Paket Wisata" → "Paket". Dipakai kartu katalog ("Nama Karya 1") dan
 * placeholder pencarian ("Cari karya…") supaya halaman koleksi tidak selalu berbunyi "Produk".
 */
function itemWord(label: string): string {
    const cleaned = label.replace(/^(katalog|daftar|semua)\s+/i, '').trim();
    const first = cleaned.split(/\s+/)[0] || 'Produk';
    return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
}

/**
 * Harga per kartu katalog (`{{TK_CARD1_PRICE}}`…`{{TK_CARD6_PRICE}}`), diturunkan dari
 * `CARD_PRICE` type pack. Enam kartu berharga identik membuat kontrol "Urutkan harga"
 * tampak mati; di sini angkanya diskalakan per kartu (format ribuan Indonesia dipertahankan).
 * `CARD_PRICE` tanpa angka (mis. "Studi kasus") dipakai apa adanya untuk semua kartu.
 */
function deriveCardPrices(base: string): Record<string, string> {
    const factors = [1, 0.65, 1.45, 0.8, 1.7, 1.2];
    const digits = /([0-9][0-9.,]*)/.exec(base)?.[1];
    const value = digits ? parseInt(digits.replace(/[.,]/g, ''), 10) : 0;
    const out: Record<string, string> = {};
    for (let index = 0; index < factors.length; index++) {
        if (!digits || !value) {
            out[`CARD${index + 1}_PRICE`] = base;
            continue;
        }
        let scaled = Math.round(value * factors[index]);
        // Bulatkan ke kelipatan wajar supaya harganya terlihat dikarang manusia.
        const step = value >= 1_000_000 ? 50_000 : value >= 20_000 ? 1000 : value >= 100 ? 100 : 1;
        scaled = Math.max(step, Math.round(scaled / step) * step);
        out[`CARD${index + 1}_PRICE`] = base.replace(digits, scaled.toLocaleString('id-ID'));
    }
    return out;
}

export interface TokenaiScaffoldPage {
    label: string;
    archetype: TokenaiKitArchetype;
    slug: string;
    file: string;
}

export interface TokenaiScaffoldResult {
    /** Berkas siap tulis, path relatif terhadap folder situs. */
    files: Record<string, string>;
    /** Halaman yang dirakit beserta arketipenya — bahan laporan ke model. */
    pages: TokenaiScaffoldPage[];
    /** Label yang sengaja diserahkan ke model (auth/dashboard perlu integrasi stack). */
    deferredToAgent: string[];
}

/** Slug tetap per arketipe — HARUS sama dengan href yang ditulis di badan arketipe. */
const ARCHETYPE_SLUGS: Partial<Record<TokenaiKitArchetype, string>> = {
    home: 'index',
    about: 'tentang-kami',
    contact: 'hubungi-kami',
    services: 'layanan',
    faq: 'faq',
    privacy: 'kebijakan-privasi',
    terms: 'syarat-dan-ketentuan',
    cookies: 'kebijakan-cookie',
    sitemap: 'peta-situs',
    'product-detail': 'detail-produk',
    cart: 'keranjang',
    menu: 'menu',
    pricing: 'harga',
    features: 'fitur',
    article: 'detail-artikel',
    gallery: 'galeri',
    booking: 'booking'
};

/** Arketipe yang tampil di navigasi utama; sisanya cukup di footer dan peta situs.
    'contact' sengaja TIDAK di sini: header partial sudah punya tombol CTA permanen ke
    hubungi-kami.html (ap-nav-cta), jadi link nav biasa hanya menduplikasinya. */
export const NAV_ARCHETYPES = new Set<TokenaiKitArchetype>([
    'home', 'about', 'services', 'catalog', 'menu', 'pricing', 'features', 'blog-list', 'gallery', 'booking', 'generic'
]);

/** Arketipe tautan footer (kepercayaan/legal + kontak). */
const FOOTER_ARCHETYPES = new Set<TokenaiKitArchetype>([
    'about', 'contact', 'faq', 'privacy', 'terms', 'cookies', 'sitemap'
]);

/** Halaman yang perakitan-nya diserahkan ke model karena butuh integrasi stack/auth. */
const AGENT_PAGE_RE = /\b(login|masuk|register|daftar|dashboard|admin|pengaturan admin)\b/i;

interface Matcher { pattern: RegExp; archetype: TokenaiKitArchetype; }

/** Pencocokan label → arketipe; urutan menentukan (yang spesifik di atas). */
const LABEL_MATCHERS: Matcher[] = [
    { pattern: /^beranda|^home|landing/i, archetype: 'home' },
    { pattern: /detail (artikel|berita)/i, archetype: 'article' },
    { pattern: /detail (produk|properti|paket|kursus)/i, archetype: 'product-detail' },
    { pattern: /tentang/i, archetype: 'about' },
    { pattern: /hubungi|kontak|contact|lokasi/i, archetype: 'contact' },
    { pattern: /faq|pertanyaan/i, archetype: 'faq' },
    { pattern: /privasi|privacy/i, archetype: 'privacy' },
    { pattern: /syarat|ketentuan|terms/i, archetype: 'terms' },
    { pattern: /cookie/i, archetype: 'cookies' },
    { pattern: /peta situs|sitemap/i, archetype: 'sitemap' },
    { pattern: /keranjang|cart/i, archetype: 'cart' },
    { pattern: /^menu$/i, archetype: 'menu' },
    { pattern: /harga|pricing|paket harga/i, archetype: 'pricing' },
    { pattern: /fitur|features/i, archetype: 'features' },
    { pattern: /artikel|blog|berita/i, archetype: 'blog-list' },
    { pattern: /galeri|gallery|dokumentasi/i, archetype: 'gallery' },
    { pattern: /booking|reservasi|janji temu/i, archetype: 'booking' },
    // Halaman koleksi: kartu ber-grid dengan judul mengikuti labelnya.
    { pattern: /katalog|produk|karya|listing|paket wisata|kursus|program|layanan|menu|jadwal|dokter|pembicara|topik|forum|kategori|tiket|donasi/i, archetype: 'catalog' }
];

export function slugify(label: string): string {
    return label
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/\(.*?\)/g, ' ')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '') || 'halaman';
}

export function resolvePage(label: string): TokenaiScaffoldPage {
    const normalized = label.trim();
    // Layanan punya arketipe khusus; matcher koleksi menangkap sisanya.
    if (/^layanan|^service/i.test(normalized)) {
        return { label: normalized, archetype: 'services', slug: 'layanan', file: 'layanan.html' };
    }
    for (const matcher of LABEL_MATCHERS) {
        if (matcher.pattern.test(normalized)) {
            const slug = ARCHETYPE_SLUGS[matcher.archetype] ?? slugify(normalized);
            return { label: normalized, archetype: matcher.archetype, slug, file: `${slug}.html` };
        }
    }
    const slug = slugify(normalized);
    return { label: normalized, archetype: 'generic', slug, file: `${slug}.html` };
}

/** Ambil template butir di antara marker `<!-- tk:x -->…<!-- /tk:x -->` dan buang markernya. */
function extractItemTemplate(html: string, marker: string): { template: string; html: string } {
    const re = new RegExp(`<!--\\s*tk:${marker}\\s*-->([\\s\\S]*?)<!--\\s*/tk:${marker}\\s*-->`);
    const match = re.exec(html);
    if (!match) {
        return { template: '', html };
    }
    return { template: match[1], html: html.replace(re, '') };
}

function renderItems(template: string, pages: TokenaiScaffoldPage[], activeFile?: string, activeClass = ''): string {
    return pages.map(page => template
        .replace(/\{\{TK_HREF\}\}/g, page.file)
        .replace(/\{\{TK_LABEL\}\}/g, page.label)
        .replace(/\{\{TK_ACTIVE\}\}/g, page.file === activeFile ? activeClass : '')
    ).join('\n        ');
}

/**
 * Rakit seluruh situs statis dari arketipe kit. Kit tanpa `pages/` (kontrak v1) menghasilkan
 * `files` kosong dan semua halaman masuk `deferredToAgent` — jalur lama tetap berfungsi.
 */
export function scaffoldSite(kit: TokenaiDesignKit, input: TokenaiScaffoldInput): TokenaiScaffoldResult {
    // Halaman arketipe SELALU dibangkitkan segar dari manifest — bukan dibaca dari `pages/`
    // bawaan kit. Kit di katalog remote diekspor pada suatu titik waktu; kalau arketipenya
    // ikut dibekukan di sana, setiap perbaikan (dropdown custom, reset gaya tab, dsb.)
    // menuntut pengguna meng-upload ulang semua kit. Dengan regenerasi di sini, kit lama
    // otomatis memakai arketipe terbaru — hanya styles.css & komponen yang milik kit.
    let freshArchetypes: Record<string, string> = {};
    try {
        freshArchetypes = buildArchetypeFiles(kit.manifest);
    } catch {
        // Manifest tidak lengkap (mis. tanpa fonts/icons) — pakai pages/ bawaan kit apa adanya.
    }
    const kitFiles: Record<string, string> = { ...kit.files, ...freshArchetypes };
    const header = kitFiles['partials/header.html'];
    const footer = kitFiles['partials/footer.html'];
    if (!header || !footer) {
        return { files: {}, pages: [], deferredToAgent: [...input.pages] };
    }

    const deferredToAgent: string[] = [];
    const pages: TokenaiScaffoldPage[] = [];
    const seenFiles = new Set<string>();
    for (const label of input.pages) {
        if (AGENT_PAGE_RE.test(label)) {
            deferredToAgent.push(label);
            continue;
        }
        const resolved = resolvePage(label);
        if (!kitFiles[`pages/${resolved.archetype}.html`] && !kitFiles['pages/generic.html']) {
            deferredToAgent.push(label);
            continue;
        }
        if (seenFiles.has(resolved.file)) {
            continue;
        }
        seenFiles.add(resolved.file);
        pages.push(resolved);
    }
    // Beranda wajib ada — tanpa index.html situs tidak punya pintu masuk.
    if (!pages.some(page => page.archetype === 'home') && kitFiles['pages/home.html']) {
        pages.unshift({ label: 'Beranda', archetype: 'home', slug: 'index', file: 'index.html' });
    }

    const navPages = pages.filter(page => NAV_ARCHETYPES.has(page.archetype)).slice(0, 7);
    const footerPages = pages.filter(page => FOOTER_ARCHETYPES.has(page.archetype));
    const brandSlug = slugify(input.brand);
    const baseUrl = (input.baseUrl ?? 'https://contoh.id').replace(/\/+$/, '');
    const year = String(new Date().getFullYear());
    const logoHtml = input.logoPath
        ? `<img src="${input.logoPath}" alt="${input.brand}">`
        : `<span>${input.brand}</span>`;
    const description = input.description
        ? `${input.brand} — ${input.description}`.slice(0, 158)
        : `${input.brand}: kualitas yang bisa Anda andalkan.`;

    const files: Record<string, string> = {};
    for (const page of pages) {
        const template = kitFiles[`pages/${page.archetype}.html`] ?? kitFiles['pages/generic.html'];
        let html = template;

        // Beranda per resep: isi di antara marker `tk:home-body` diganti rangkaian blok
        // `partials/home/` pilihan type pack — inilah yang membuat beranda restoran, SaaS,
        // dan portofolio tersusun beda, bukan satu template dengan teks berbeda.
        if (page.archetype === 'home') {
            const bodyRe = /<!--\s*tk:home-body\s*-->([\s\S]*?)<!--\s*\/tk:home-body\s*-->/;
            const marked = bodyRe.exec(html);
            if (marked) {
                let body = marked[1];
                if (input.recipe?.length) {
                    const blocks = input.recipe
                        .map(name => kitFiles[`partials/home/${name}.html`])
                        .filter((block): block is string => typeof block === 'string');
                    if (blocks.length > 0) {
                        body = `\n${blocks.join('\n')}\n`;
                    }
                }
                html = html.replace(bodyRe, body);
            }
        }

        html = html.replace(/<!--\s*tk:include partials\/header\.html\s*-->/, header);
        html = html.replace(/<!--\s*tk:include partials\/footer\.html\s*-->/, footer);

        const nav = extractItemTemplate(html, 'nav-item');
        html = nav.html.replace(/\{\{TK_NAV_ITEMS\}\}/g, renderItems(nav.template, navPages, page.file, ' tk-navbar-link-active'));
        const foot = extractItemTemplate(html, 'footer-item');
        html = foot.html.replace(/\{\{TK_FOOTER_ITEMS\}\}/g, renderItems(foot.template, footerPages));
        const site = extractItemTemplate(html, 'sitemap-item');
        if (site.template) {
            html = site.html.replace(/\{\{TK_SITEMAP_ITEMS\}\}/g, renderItems(site.template, pages));
        }

        // Copy per jenis/karangan menimpa bawaan; keduanya juga membersihkan placeholder
        // yang tersangkut di URL ter-encode (mis. label gambar placehold.co).
        const word = itemWord(page.label);
        const copy: Record<string, string> = {
            ...DEFAULT_COPY,
            ...input.copy,
            ITEM_WORD: word,
            ITEM_WORD_LC: word.toLowerCase()
        };
        for (const [key, value] of Object.entries(deriveCardPrices(copy['CARD_PRICE'] ?? 'Rp99.000'))) {
            copy[key] ??= value; // type pack boleh menimpa harga per kartu secara eksplisit
        }
        for (const [key, value] of Object.entries(copy)) {
            html = html
                .replace(new RegExp(`\\{\\{TK_${key}\\}\\}`, 'g'), value)
                .replace(new RegExp(`%7B%7BTK_${key}%7D%7D`, 'gi'), encodeURIComponent(value));
        }

        html = html
            .replace(/\{\{TK_BRAND_SLUG\}\}/g, brandSlug)
            .replace(/\{\{TK_BRAND\}\}/g, input.brand)
            // Placeholder yang tersangkut di URL ter-encode (mis. label placehold.co).
            .replace(/%7B%7BTK_BRAND%7D%7D/gi, encodeURIComponent(input.brand))
            .replace(/\{\{TK_TAGLINE\}\}/g, input.copy?.TAGLINE ?? `Selamat datang di ${input.brand}`)
            .replace(/\{\{TK_DESCRIPTION\}\}/g, description)
            .replace(/\{\{TK_URL\}\}/g, baseUrl)
            .replace(/\{\{TK_YEAR\}\}/g, year)
            .replace(/\{\{TK_LOGO\}\}/g, logoHtml)
            .replace(/\{\{TK_PAGE_TITLE\}\}/g, page.label)
            .replace(/\{\{TK_PAGE_SLUG\}\}/g, page.slug);
        // Kanonis index: `{{TK_URL}}/index.html` dinormalkan ke akar.
        html = html.replace(new RegExp(`${baseUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/index\\.html`, 'g'), `${baseUrl}/`);

        files[page.file] = html;
    }

    // Badan arketipe menaut halaman lain dengan nama tetap (mis. kartu katalog →
    // `detail-produk.html`, breadcrumb → `katalog-produk.html`). Bila targetnya tidak ikut
    // dirakit — halaman inti tiap jenis situs berbeda — tautannya dialihkan ke halaman
    // searketipe yang ADA, lalu ke kontak, lalu beranda. Tidak boleh ada 404 di hasil rakitan.
    const fileByArchetype: Partial<Record<TokenaiKitArchetype, string>> = {};
    for (const page of pages) {
        fileByArchetype[page.archetype] ??= page.file;
    }
    const slugToArchetype: Record<string, TokenaiKitArchetype> = { 'katalog-produk': 'catalog', 'artikel': 'blog-list' };
    for (const [archetype, slug] of Object.entries(ARCHETYPE_SLUGS)) {
        slugToArchetype[slug!] = archetype as TokenaiKitArchetype;
    }
    const fallback = fileByArchetype.contact ?? 'index.html';
    for (const [file, html] of Object.entries(files)) {
        if (!file.endsWith('.html')) {
            continue;
        }
        files[file] = html.replace(/href="([a-z0-9-]+\.html)"/g, (full, target: string) => {
            if (files[target] || target === file) {
                return full;
            }
            const desired = slugToArchetype[target.replace(/\.html$/, '')];
            // Detail produk yang absen berarti kartunya adalah CTA konversi (mis. "Buat
            // Janji" di klinik) — halaman booking lebih tepat daripada kontak bila ada.
            const substitute = desired === 'product-detail'
                ? fileByArchetype.booking ?? fallback
                : (desired && fileByArchetype[desired]) ?? fallback;
            return `href="${substitute}"`;
        });
    }

    if (kitFiles['styles.css']) {
        files['styles.css'] = kitFiles['styles.css'];
    }
    files['site.js'] = ARCHETYPE_SITE_JS;
    files['robots.txt'] = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`;
    files['sitemap.xml'] = '<?xml version="1.0" encoding="UTF-8"?>\n'
        + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + pages.map(page => `    <url><loc>${baseUrl}/${page.file === 'index.html' ? '' : page.file}</loc></url>`).join('\n')
        + '\n</urlset>\n';

    return { files, pages, deferredToAgent };
}
