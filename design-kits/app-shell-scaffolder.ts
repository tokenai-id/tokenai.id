/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import { TokenaiDesignKit } from './design-kit';

/**
 * Perakit shell aplikasi internal (dashboard/POS/CRM) — pasangan scaffolder publik untuk
 * jenis website `app: true`. Halaman aplikasi butuh integrasi stack/auth sehingga tidak bisa
 * dirakit final oleh IDE, tetapi UI-nya TIDAK boleh jatuh 100% ke model: kit sudah membawa
 * halaman contoh dashboard/login/register yang utuh dan responsif. Di sini halaman contoh itu
 * disalin sebagai mock statis ber-brand pengguna — bilah pratinjau katalog (`ex-nav`) dibuang,
 * path stylesheet dibetulkan — sehingga jatah model tinggal bootstrap framework + wiring
 * auth/database/CRUD sesuai kontrak adminDashboard, bukan mendesain ulang UI.
 */

export interface TokenaiAppShellResult {
    /** Berkas siap tulis, path relatif terhadap folder tujuan (design-scaffold/). */
    files: Record<string, string>;
    /** Label halaman mock yang berhasil dirakit — bahan laporan ke model. */
    pages: string[];
}

interface AppShellPage {
    source: string;
    out: string;
    label: string;
    title: string;
}

const APP_SHELL_PAGES: AppShellPage[] = [
    { source: 'examples/dashboard.html', out: 'dashboard.html', label: 'Dashboard', title: 'Dashboard' },
    { source: 'examples/login.html', out: 'login.html', label: 'Login', title: 'Login' },
    { source: 'examples/register.html', out: 'register.html', label: 'Register', title: 'Register' }
];

/** Escape untuk string pengganti `String.replace` — `$` punya makna khusus di sana. */
function literal(value: string): string {
    return value.replace(/\$/g, '$$$$');
}

/**
 * Membersihkan satu halaman contoh kit menjadi mock aplikasi:
 * bilah `ex-nav` + skrip dropdown-nya dibuang, mode `ex-embedded` dipermanenkan (offset
 * 48px milik bilah itu ikut hilang), path aset dinaikkan satu folder, dan branding kit
 * (judul halaman, teks LOGO) diganti brand pengguna.
 */
function transformExamplePage(raw: string, brand: string, pageTitle: string): string {
    let html = raw;
    // Bilah navigasi pratinjau katalog + skrip dropdown jenis website-nya — bukan bagian aplikasi.
    html = html.replace(/<nav class="ex-nav">[\s\S]*?<\/nav>\s*/, '');
    html = html.replace(/<script>[\s\S]*?<\/script>\s*/g, block =>
        block.includes('tkExDd') || block.includes('tk-embed') ? '' : block);
    // CSS contoh menata ulang offset lewat kelas ex-embedded (bilah 48px-nya sudah tidak ada).
    html = html.replace(/<html lang="id">/, '<html lang="id" class="ex-embedded">');
    // Halaman contoh hidup di examples/; mock hidup satu folder dengan styles.css.
    html = html.replace(/(href|src)="\.\.\//g, '$1="');
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${literal(pageTitle)} — ${literal(brand)}</title>`);
    // Branding: teks LOGO di sidebar dashboard dan kartu auth diganti brand pengguna.
    const initial = (brand.trim()[0] ?? 'B').toUpperCase();
    html = html.replace(/(<span class="tk-sidebar-label">)LOGO(<\/span>)/, `$1${literal(brand)}$2`);
    html = html.replace(/(<span class="dm-sidebar-brand-mini">)L(<\/span>)/, `$1${literal(initial)}$2`);
    html = html.replace(/(<div class="au-brand">)LOGO(<\/div>)/, `$1${literal(brand)}$2`);
    return html;
}

/**
 * Merakit mock UI aplikasi dari halaman contoh kit. Mengembalikan `undefined` bila kit tidak
 * membawa halaman contoh sama sekali (kit lama) — jatuh kembali ke jalur model sepenuhnya.
 */
export function scaffoldAppShell(kit: TokenaiDesignKit, input: { brand: string }): TokenaiAppShellResult | undefined {
    const files: Record<string, string> = {};
    const pages: string[] = [];
    for (const page of APP_SHELL_PAGES) {
        const raw = kit.files[page.source];
        if (!raw) {
            continue;
        }
        files[page.out] = transformExamplePage(raw, input.brand, page.title);
        pages.push(page.label);
    }
    if (pages.length === 0) {
        return undefined;
    }
    if (kit.files['styles.css']) {
        files['styles.css'] = kit.files['styles.css'];
    }
    return { files, pages };
}
