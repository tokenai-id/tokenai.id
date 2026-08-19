/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import { slugify } from './site-scaffolder';

/**
 * Kosakata jenis website — SATU sumber untuk tiga pemakai: langkah "Proyek ini untuk apa?"
 * di wizard Smart Start, pilihan jenis website di kartu Katalog Design, dan dropdown
 * "Jenis Website" di bilah pratinjau kit. Sebelumnya daftar ini hidup di renderer wizard
 * saja; begitu katalog ikut membutuhkannya, duplikasi tinggal menunggu tidak sinkron.
 */
export interface TokenaiWebsiteType {
    /** Label tampil sekaligus nilai jawaban wizard (dipertahankan agar kompatibel). */
    label: string;
    /** Halaman inti khas jenis ini, di antara pembuka dan penutup SEO. */
    corePages: string[];
    /**
     * Benar untuk aplikasi internal (dashboard/POS/CRM): tidak dikonsumsi mesin pencari,
     * halamannya dirakit model dari `examples/dashboard.html`, bukan oleh scaffolder publik.
     */
    app?: boolean;
}

export const TOKENAI_WEBSITE_TYPES: TokenaiWebsiteType[] = [
    { label: 'Bisnis / Company Profile', corePages: ['Layanan'] },
    { label: 'E-commerce / Toko Online', corePages: ['Katalog Produk', 'Detail Produk', 'Keranjang'] },
    { label: 'Portofolio', corePages: ['Karya'] },
    { label: 'Landing Page', corePages: [] },
    { label: 'Blog / Media', corePages: ['Artikel', 'Detail Artikel'] },
    { label: 'SaaS', corePages: ['Fitur', 'Harga'] },
    { label: 'Pendidikan / Kursus', corePages: ['Kursus', 'Detail Kursus'] },
    { label: 'Kesehatan / Klinik', corePages: ['Layanan', 'Dokter', 'Janji Temu'] },
    { label: 'Restoran / Kuliner', corePages: ['Menu', 'Lokasi'] },
    { label: 'Properti / Real Estate', corePages: ['Listing', 'Detail Properti'] },
    { label: 'Travel / Wisata', corePages: ['Paket Wisata', 'Detail Paket'] },
    { label: 'Event / Acara', corePages: ['Jadwal', 'Pembicara', 'Tiket'] },
    { label: 'Nonprofit / Komunitas', corePages: ['Program', 'Donasi'] },
    { label: 'Dashboard / Aplikasi Internal', corePages: ['Dashboard', 'Data', 'Pengaturan'], app: true },
    { label: 'Personal', corePages: [] },
    { label: 'Berita / Majalah', corePages: ['Kategori', 'Detail Berita'] },
    { label: 'Forum / Komunitas', corePages: ['Forum', 'Topik', 'Profil'] },
    { label: 'Booking / Reservasi', corePages: ['Layanan', 'Booking'] },
    { label: 'Kasir / POS UMKM', corePages: ['Dashboard', 'Kasir', 'Produk', 'Laporan'], app: true },
    { label: 'CRM / Manajemen Pelanggan', corePages: ['Dashboard', 'Pelanggan', 'Pipeline', 'Laporan'], app: true }
];

export function findWebsiteType(label: string): TokenaiWebsiteType | undefined {
    return TOKENAI_WEBSITE_TYPES.find(type => type.label === label);
}

/** Id jenis untuk URL/atribut (mis. `bisnis-company-profile`) — slug deterministik dari labelnya. */
export function websiteTypeId(type: TokenaiWebsiteType): string {
    return slugify(type.label);
}

/** Benar bila jenisnya aplikasi internal — scaffolder publik dilewati, semua halaman jatah model. */
export function isAppWebsiteType(label: string | undefined): boolean {
    return !!label && !!findWebsiteType(label)?.app;
}

/**
 * Penebak jenis website terdekat untuk deskripsi bebas (isian "Lainnya" di wizard).
 * Tanpa ini, jenis custom kehilangan resep beranda type pack-nya dan semua situs custom
 * lahir dengan susunan beranda bawaan yang sama. Urutan menentukan: tema komersial di atas
 * karena "jualan X" adalah maksud utama walau X-nya kuliner/karya/kursus.
 */
const TYPE_HINT_PATTERNS: { pattern: RegExp; label: string }[] = [
    { pattern: /\b(jual|jualan|toko|produk|e-?commerce|shop|store|marketplace|pesan online|order)\b/i, label: 'E-commerce / Toko Online' },
    { pattern: /\b(kopi|coffee|cafe|kafe|restoran|resto|kuliner|makanan|minuman|menu|warung|catering|bakery|kue|roti)\b/i, label: 'Restoran / Kuliner' },
    { pattern: /\b(portofolio|portfolio|karya|desainer|fotografer|photography|ilustrator)\b/i, label: 'Portofolio' },
    { pattern: /\b(blog|artikel|media|konten|majalah)\b/i, label: 'Blog / Media' },
    { pattern: /\b(berita|news)\b/i, label: 'Berita / Majalah' },
    { pattern: /\b(saas|software|platform|langganan|subscription|aplikasi web)\b/i, label: 'SaaS' },
    { pattern: /\b(kursus|kelas|belajar|sekolah|pendidikan|les|bootcamp|pelatihan|training)\b/i, label: 'Pendidikan / Kursus' },
    { pattern: /\b(klinik|dokter|kesehatan|rumah sakit|terapi|apotek|gigi)\b/i, label: 'Kesehatan / Klinik' },
    { pattern: /\b(properti|rumah|real estate|apartemen|kost|kontrakan|tanah|villa)\b/i, label: 'Properti / Real Estate' },
    { pattern: /\b(travel|wisata|tour|trip|liburan|penginapan|hotel|homestay)\b/i, label: 'Travel / Wisata' },
    { pattern: /\b(event|acara|konser|seminar|festival|wedding|pernikahan)\b/i, label: 'Event / Acara' },
    { pattern: /\b(donasi|yayasan|nonprofit|amal|masjid|gereja|panti)\b/i, label: 'Nonprofit / Komunitas' },
    { pattern: /\b(booking|reservasi|appointment|sewa|rental|barbershop|salon|spa|bengkel)\b/i, label: 'Booking / Reservasi' },
    { pattern: /\b(jasa|layanan|service|konsultan|agensi|agency|studio)\b/i, label: 'Bisnis / Company Profile' }
];

/**
 * Jenis website untuk sebuah jawaban wizard: cocok persis dengan label kosakata, atau
 * ditebak dari kata kunci deskripsi bebas. `undefined` bila tidak ada tema yang tersinggung.
 */
export function inferWebsiteType(description: string | undefined): TokenaiWebsiteType | undefined {
    if (!description) {
        return undefined;
    }
    const exact = findWebsiteType(description);
    if (exact) {
        return exact;
    }
    for (const hint of TYPE_HINT_PATTERNS) {
        if (hint.pattern.test(description)) {
            return findWebsiteType(hint.label);
        }
    }
    return undefined;
}

/**
 * Halaman masuk pratinjau demo untuk satu jenis website, relatif terhadap akar kit.
 * Situs publik masuk lewat BERANDA situs contoh jenisnya (`demo/<id>/index.html`) —
 * tiap jenis punya rakitan sendiri dengan konten type pack-nya, jadi tidak ada state
 * yang perlu dibawa-bawa antar halaman. Jenis aplikasi internal diarahkan ke contoh
 * dashboard (halamannya bukan rakitan scaffolder publik).
 */
export function websiteTypeEntry(type: TokenaiWebsiteType): string {
    if (type.app) {
        return 'examples/dashboard.html';
    }
    return `demo/${websiteTypeId(type)}/index.html`;
}
