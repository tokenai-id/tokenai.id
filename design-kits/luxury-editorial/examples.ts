/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len */

/**
 * Halaman contoh (`examples/`) kit Luxury Editorial: admin dashboard dan landing page utuh yang
 * dirakit murni dari komponen kontrak, responsif untuk web dan ponsel. Dua peran sekaligus: bukti
 * visual kit di halaman nyata (dibuka dari showcase) dan kerangka awal yang boleh disalin agen
 * saat pengguna meminta halaman sejenis — lebih murah daripada merakit dari nol.
 *
 * Isinya sengaja bukan SaaS: kit ini dipakai rumah mode, butik, dan hospitality mewah, jadi
 * dashboard-nya adalah meja kerja atelier couture (pesanan klien, progres produksi, reservasi
 * salon) dan landing-nya katalog maison — atelier, koleksi, kurasi, reservasi. Struktur seksinya
 * tetap sama dengan kit lain (navbar, hero, fitur, bukti ber-chart, harga, CTA, footer) supaya
 * dua kit masih bisa dibandingkan berdampingan seksi demi seksi.
 *
 * Perkakas khas kit dipakai persis pada tugas yang dirancang untuknya, bukan sebagai tempelan:
 * `.tk-eyebrow` membuka setiap seksi, `.tk-rule` menjilid seksi yang berdempet, `.tk-plate`
 * memegang seluruh fotografi (garis emas di dalam tepi, zoom 1200ms), `.tk-drop-cap` membuka
 * paragraf kisah atelier, `.tk-quote` memikul testimoni, `.tk-gild` menggarisi tautan "baca
 * selengkapnya", dan `.tk-reveal` (+ `-2`, `-3`) menaikkan pembuka seksi berurutan. Kartu
 * editorial memakai `.tk-card-bare`, sedangkan panel data tetap `.tk-card` biasa.
 *
 * Angka statistik landing tidak memakai `.tk-stat-value` karena kelas itu hanya bergaya di dalam
 * `.tk-card-stat`; di luar kartu, perancah `.lp-figure` menyusun angka serif ringan yang sama
 * dari token huruf kit.
 *
 * Kit ini dua-mode, jadi saklar tema di bilah pratinjau dibiarkan hidup dan bingkai ponsel
 * meneruskan penggelapan ke dokumen di dalam iframe-nya lewat `FRAME_THEME_EXTRA_JS`.
 *
 * Kelas `dm-*` / `lp-*` / `au-*` / `ex-*` adalah perancah halaman contoh, bukan kontrak kit.
 */

// Perancah pratinjau kit-agnostik, dipakai bersama lintas kit; rumahnya masih di kit pertama.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_EMBED_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

/**
 * Set ikon kit ini `material-symbols-light` — Material Symbols pada bobot paling tipis, garis 1px
 * yang tidak pernah lebih berat daripada goresan halus serifnya. Penamaannya jauh dari Lucide
 * (user → person, trash → delete, sparkles → diamond), jadi jangan menyalin nama ikon dari kit lain.
 */
function icon(name: string, size = 18): string {
    return `<iconify-icon icon="material-symbols-light:${name}" width="${size}" height="${size}"></iconify-icon>`;
}

const FONT_LINK = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&family=IBM+Plex+Mono:wght@300;400&display=swap';

const HEAD_COMMON = `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="${FONT_LINK}" rel="stylesheet">
<link rel="stylesheet" href="../styles.css">
<script src="https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"></script>`;

/**
 * Chart kit ini bertumpu pada garis, bukan bidang: satu garis rambut champagne dengan isian
 * yang nyaris tidak terlihat. Isiannya dihitung `color-mix()` dari token yang dibaca helper,
 * jadi palet penimpa dan mode gelap ikut mengecatnya — tanpa satu pun heksa yang ditanam.
 */
const LUX_CHART_MIX = `
function lxSoft(color, amount) { return 'color-mix(in srgb, ' + color + ' ' + amount + '%, transparent)'; }
`;

/** Saklar tema di bingkai ponsel juga menjangkau dokumen di dalam iframe, termasuk chartnya. */
const FRAME_THEME_EXTRA_JS = `
    var frame = document.querySelector('iframe');
    try {
        var doc = frame.contentDocument.documentElement;
        if (dark) { doc.removeAttribute('data-tk-theme'); } else { doc.setAttribute('data-tk-theme', 'dark'); }
        if (frame.contentWindow.tkRedrawCharts) { frame.contentWindow.tkRedrawCharts(); }
    } catch (e) { /* lintas asal: biarkan */ }
`;

/* ================================================================ */
/* Admin dashboard                                                   */
/* ================================================================ */

const DASHBOARD = `<!DOCTYPE html>
<html lang="id">
<head>
${HEAD_COMMON}
<script src="${CHARTJS_SCRIPT}"></script>
<title>Luxury Editorial — Contoh Admin Dashboard</title>
<style>
    /* Perancah halaman contoh (dm-*): bukan bagian kontrak kit. */
    ${EX_NAV_CSS}
    .dm-shell { display: flex; min-height: calc(100vh - 48px); }
    .dm-sidebar { position: sticky; top: 48px; height: calc(100vh - 48px); box-sizing: border-box; }
    .dm-sidebar-brand { font-family: var(--tk-font-heading); font-weight: 400; font-size: 22px; letter-spacing: 0.18em; text-transform: uppercase; padding: 18px 16px 28px; white-space: nowrap; }
    .dm-sidebar-brand-mini { display: none; }
    .tk-sidebar-collapsed .dm-sidebar-brand { text-align: center; padding: 18px 0 28px; letter-spacing: 0; }
    .tk-sidebar-collapsed .dm-sidebar-brand-mini { display: inline; }
    .dm-sidebar-foot { margin-top: auto; display: block; padding-top: 12px; border-top: 1px solid var(--tk-color-border); }
    .dm-foot-btn { display: flex; align-items: center; gap: 12px; width: 100%; padding: 10px 12px; border: none; background: transparent; font-family: inherit; color: var(--tk-color-text); text-align: left; cursor: pointer; transition: background var(--tk-transition); }
    .dm-foot-btn:hover { background: var(--tk-color-surface-2); }
    .dm-foot-chevron { margin-left: auto; color: var(--tk-color-text-muted); }
    .dm-sidebar-foot .tk-dropdown-menu { left: 0; right: 0; min-width: 0; }
    .tk-sidebar-collapsed .dm-foot-btn { justify-content: center; padding: 10px 0; }
    /* Monogram, bukan foto: inisial berhuruf serif di dalam bingkai emas tipis. */
    .dm-monogram { width: 36px; height: 36px; flex: none; display: inline-flex; align-items: center; justify-content: center; border: 1px solid var(--tk-color-accent); font-family: var(--tk-font-heading); font-size: 14px; letter-spacing: 0.06em; color: var(--tk-color-primary); }
    .dm-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
    .dm-topbar { display: flex; align-items: center; gap: 16px; padding: 14px 32px; background: var(--tk-color-surface); border-bottom: 1px solid var(--tk-color-border); position: sticky; top: 48px; z-index: 10; }
    .ex-embedded .dm-shell { min-height: 100vh; }
    .ex-embedded .dm-sidebar { top: 0; height: 100vh; }
    .ex-embedded .dm-topbar { top: 0; }
    .dm-topbar .tk-search { width: 300px; }
    .dm-topbar-spacer { margin-left: auto; display: flex; align-items: center; gap: 12px; }
    .dm-content { padding: 40px 32px 64px; display: flex; flex-direction: column; gap: 40px; }
    .dm-page-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
    .dm-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
    .dm-grid2 { display: grid; grid-template-columns: 3fr 2fr; gap: 32px; align-items: start; }
    .dm-chart-box { position: relative; height: 280px; }
    .dm-table-wrap { overflow-x: auto; }
    .dm-progress-row { margin-bottom: 28px; font-size: var(--tk-text-body-sm); }
    .dm-progress-head { display: flex; justify-content: space-between; gap: 16px; margin-bottom: 10px; }
    .dm-activity { display: flex; flex-direction: column; gap: 22px; }
    .dm-activity-item { display: flex; gap: 14px; align-items: flex-start; font-size: var(--tk-text-body-sm); }
    .dm-activity-item iconify-icon { color: var(--tk-color-accent); margin-top: 3px; flex: none; }
    .dm-activity-item strong { font-weight: 500; }
    @media (max-width: 1040px) {
        .dm-stats { grid-template-columns: repeat(2, 1fr); }
        .dm-grid2 { grid-template-columns: 1fr; }
    }
    @media (max-width: 960px) {
        .dm-sidebar { display: none; }
    }
    /* Di layar sempit sidebar jadi laci: tombol yang sama di topbar memunculkannya menumpuk konten. */
    .dm-sidebar.dm-sidebar-open { display: flex; position: fixed; top: 48px; left: 0; bottom: 0; height: auto; z-index: 90; box-shadow: var(--tk-shadow-lg); }
    .ex-embedded .dm-sidebar.dm-sidebar-open { top: 0; }
    @media (max-width: 760px) {
        .dm-crumb { display: none; }
        .dm-topbar .tk-search { width: auto; flex: 1; min-width: 0; }
    }
    @media (max-width: 620px) {
        .dm-content { padding: 24px 20px 48px; gap: 28px; }
        .dm-topbar { padding: 12px 20px; }
        .dm-stats { grid-template-columns: 1fr; }
        .dm-chart-box { height: 230px; }
    }
</style>
</head>
<body>
${EX_EMBED_SCRIPT}
${exNav('Luxury Editorial', 'dashboard', '../', { device: { base: 'dashboard', active: 'web' } })}
<div class="dm-shell">
    <aside class="tk-sidebar dm-sidebar">
        <span class="dm-sidebar-brand"><span class="tk-sidebar-label">LOGO</span><span class="dm-sidebar-brand-mini">L</span></span>
        <span class="tk-sidebar-group">Atelier</span>
        <a class="tk-sidebar-item tk-sidebar-item-active" href="#">${icon('dashboard')} <span class="tk-sidebar-label">Ikhtisar</span></a>
        <a class="tk-sidebar-item" href="#">${icon('style')} <span class="tk-sidebar-label">Koleksi</span></a>
        <a class="tk-sidebar-item" href="#">${icon('receipt-long')} <span class="tk-sidebar-label">Pesanan Klien</span></a>
        <a class="tk-sidebar-item" href="#">${icon('inventory-2')} <span class="tk-sidebar-label">Persediaan Kain</span></a>
        <span class="tk-sidebar-group">Salon</span>
        <a class="tk-sidebar-item" href="#">${icon('event-available')} <span class="tk-sidebar-label">Reservasi</span></a>
        <a class="tk-sidebar-item" href="#">${icon('groups')} <span class="tk-sidebar-label">Klien Cercle</span></a>
        <span class="tk-sidebar-group">Kurasi</span>
        <a class="tk-sidebar-item" href="#">${icon('menu-book')} <span class="tk-sidebar-label">Jurnal</span></a>
        <a class="tk-sidebar-item" href="#">${icon('bar-chart-4-bars')} <span class="tk-sidebar-label">Laporan</span></a>
        <span class="tk-sidebar-group">Lainnya</span>
        <a class="tk-sidebar-item" href="#">${icon('settings')} <span class="tk-sidebar-label">Pengaturan</span></a>
        <div class="tk-dropdown dm-sidebar-foot">
            <button class="dm-foot-btn" type="button" aria-label="Menu profil">
                <span class="dm-monogram">AK</span>
                <span class="tk-sidebar-label" style="min-width: 0"><span class="tk-body-sm" style="display: block">Anindita K.</span><span class="tk-caption">Kepala Atelier</span></span>
                <span class="dm-foot-chevron tk-sidebar-label">${icon('expand-more', 18)}</span>
            </button>
            <div class="tk-dropdown-menu tk-dropdown-menu-up">
                <span class="tk-dropdown-label">Akun</span>
                <button class="tk-dropdown-item" type="button">${icon('person', 18)} Profil</button>
                <button class="tk-dropdown-item" type="button">${icon('settings', 18)} Pengaturan</button>
                <hr class="tk-dropdown-divider">
                <button class="tk-dropdown-item tk-dropdown-item-danger" type="button">${icon('logout', 18)} Keluar</button>
            </div>
        </div>
    </aside>
    <div class="dm-main">
        <header class="dm-topbar">
            <button class="tk-action-btn" aria-label="Buka/tutup sidebar" onclick="
                var sb = document.querySelector('.dm-sidebar');
                if (window.matchMedia('(max-width: 960px)').matches) { sb.classList.toggle('dm-sidebar-open'); }
                else { sb.classList.toggle('tk-sidebar-collapsed'); }
            ">${icon('menu', 20)}</button>
            <nav class="tk-breadcrumb dm-crumb">
                <a href="#">Maison</a>
                <span class="tk-breadcrumb-sep">${icon('keyboard-arrow-right', 14)}</span>
                <a href="#">Atelier</a>
                <span class="tk-breadcrumb-sep">${icon('keyboard-arrow-right', 14)}</span>
                <span class="tk-breadcrumb-current">Ikhtisar</span>
            </nav>
            <div class="dm-topbar-spacer">
                <div class="tk-search">
                    <span class="tk-search-icon">${icon('search', 18)}</span>
                    <input class="tk-input" type="search" placeholder="Cari klien atau pesanan...">
                    <kbd class="tk-search-kbd">Ctrl K</kbd>
                </div>
                <button class="tk-action-btn" aria-label="Notifikasi">${icon('notifications', 20)}</button>
            </div>
        </header>
        <main class="dm-content">
            <div class="dm-page-head tk-reveal">
                <div>
                    <p class="tk-eyebrow" style="margin-bottom: 12px">Edisi Musim Kemarau</p>
                    <h2 class="tk-h2" style="margin: 0">Ikhtisar Atelier</h2>
                </div>
                <div class="tk-segmented" role="group" aria-label="Rentang waktu">
                    <button class="tk-segment tk-segment-active" type="button">Bulan</button>
                    <button class="tk-segment" type="button">Musim</button>
                    <button class="tk-segment" type="button">Tahun</button>
                </div>
            </div>
            <hr class="tk-rule">
            <div class="dm-stats tk-reveal tk-reveal-2">
                <div class="tk-card tk-card-stat"><div class="tk-card-body">
                    <p class="tk-caption">Reservasi Salon</p>
                    <p class="tk-stat-value">148</p>
                    <span class="tk-stat-trend-up">+9,2% dari edisi lalu</span>
                </div></div>
                <div class="tk-card tk-card-stat"><div class="tk-card-body">
                    <p class="tk-caption">Nilai Pesanan</p>
                    <p class="tk-stat-value">Rp1,42 M</p>
                    <span class="tk-stat-trend-up">+12,4% dari edisi lalu</span>
                </div></div>
                <div class="tk-card tk-card-stat"><div class="tk-card-body">
                    <p class="tk-caption">Potong di Atelier</p>
                    <p class="tk-stat-value">86</p>
                    <span class="tk-stat-trend-up">+6 sejak Juli</span>
                </div></div>
                <div class="tk-card tk-card-stat"><div class="tk-card-body">
                    <p class="tk-caption">Klien Cercle</p>
                    <p class="tk-stat-value">312</p>
                    <span class="tk-stat-trend-down">-1,8% dari edisi lalu</span>
                </div></div>
            </div>
            <div class="dm-grid2">
                <div class="tk-card">
                    <div class="tk-card-header" style="display: flex; align-items: flex-end; justify-content: space-between; gap: 24px">
                        <div><p class="tk-eyebrow" style="margin-bottom: 10px">Tren</p><h3 class="tk-h3" style="margin: 0">Nilai pesanan couture</h3></div>
                        <span class="tk-caption">6 bulan terakhir</span>
                    </div>
                    <div class="tk-card-body"><div class="dm-chart-box"><canvas id="dm-chart-order"></canvas></div></div>
                </div>
                <div class="tk-card">
                    <div class="tk-card-header"><p class="tk-eyebrow" style="margin-bottom: 10px">Komposisi</p><h3 class="tk-h3" style="margin: 0">Kanal pemesanan</h3></div>
                    <div class="tk-card-body"><div class="dm-chart-box"><canvas id="dm-chart-channel"></canvas></div></div>
                </div>
            </div>
            <div>
                <div class="tk-filter-bar">
                    <div class="tk-search">
                        <span class="tk-search-icon">${icon('search', 18)}</span>
                        <input class="tk-input" type="search" placeholder="Cari nama klien atau nomor pesanan...">
                    </div>
                    <div class="tk-select">
                        <button class="tk-select-trigger" type="button">Semua tahap ${icon('keyboard-arrow-down', 18)}</button>
                        <div class="tk-select-menu">
                            <button class="tk-option tk-option-selected" type="button">Semua tahap <span class="tk-option-check">${icon('check', 16)}</span></button>
                            <button class="tk-option" type="button">Dalam pengerjaan</button>
                            <button class="tk-option" type="button">Menunggu fitting</button>
                            <button class="tk-option" type="button">Diserahkan</button>
                        </div>
                    </div>
                    <div class="tk-select">
                        <button class="tk-select-trigger" type="button">Koleksi &middot; 1 dipilih ${icon('keyboard-arrow-down', 18)}</button>
                        <div class="tk-select-menu">
                            <div class="tk-select-menu-search">${icon('search', 16)}<input type="text" placeholder="Cari koleksi..."></div>
                            <label class="tk-option"><input class="tk-checkbox" type="checkbox" checked> Musim Kemarau</label>
                            <label class="tk-option"><input class="tk-checkbox" type="checkbox"> Kapsul Nocturne</label>
                            <label class="tk-option"><input class="tk-checkbox" type="checkbox"> Arsip Reedisi</label>
                            <div class="tk-select-menu-footer">
                                <button class="tk-btn tk-btn-text tk-btn-sm" type="button">Bersihkan</button>
                                <button class="tk-btn tk-btn-primary tk-btn-sm" type="button">Terapkan</button>
                            </div>
                        </div>
                    </div>
                    <button class="tk-btn tk-btn-outline">${icon('tune', 18)} Filter <span class="tk-filter-count">2</span></button>
                </div>
                <div class="tk-filter-active">
                    <span class="tk-caption">Filter aktif</span>
                    <span class="tk-chip">Koleksi: Musim Kemarau <button class="tk-chip-remove" aria-label="Hapus filter">&times;</button></span>
                    <span class="tk-chip">Salon: Jakarta <button class="tk-chip-remove" aria-label="Hapus filter">&times;</button></span>
                    <button class="tk-btn tk-btn-text tk-btn-sm">Bersihkan semua</button>
                </div>
            </div>
            <div class="tk-card">
                <div class="tk-card-header" style="display: flex; align-items: flex-end; justify-content: space-between; gap: 24px">
                    <div><p class="tk-eyebrow" style="margin-bottom: 10px">Buku pesanan</p><h3 class="tk-h3" style="margin: 0">Pesanan atelier terbaru</h3></div>
                    <button class="tk-btn tk-btn-primary tk-btn-sm">${icon('add', 16)} Pesanan baru</button>
                </div>
                <div class="tk-card-body dm-table-wrap">
                    <table class="tk-table">
                        <thead><tr><th>Nomor</th><th>Klien</th><th>Karya</th><th>Tahap</th><th class="tk-table-actions">Aksi</th></tr></thead>
                        <tbody>
                            <tr>
                                <td>AT-0421</td><td>Anindita Kusuma</td><td>Gaun malam S&eacute;r&eacute;nit&eacute;</td><td><span class="tk-badge tk-badge-success">Diserahkan</span></td>
                                <td class="tk-table-actions">
                                    <button class="tk-action-btn" aria-label="Lihat">${icon('visibility', 18)}</button>
                                    <button class="tk-action-btn" aria-label="Edit">${icon('edit', 18)}</button>
                                    <button class="tk-action-btn tk-action-btn-danger" aria-label="Hapus">${icon('delete', 18)}</button>
                                </td>
                            </tr>
                            <tr>
                                <td>AT-0422</td><td>Rangga Wibisono</td><td>Setelan Nocturne</td><td><span class="tk-badge tk-badge-warning">Fitting kedua</span></td>
                                <td class="tk-table-actions">
                                    <button class="tk-action-btn" aria-label="Lihat">${icon('visibility', 18)}</button>
                                    <button class="tk-action-btn" aria-label="Edit">${icon('edit', 18)}</button>
                                    <button class="tk-action-btn tk-action-btn-danger" aria-label="Hapus">${icon('delete', 18)}</button>
                                </td>
                            </tr>
                            <tr>
                                <td>AT-0423</td><td>Maharani Prawira</td><td>Kebaya Alabaster</td><td><span class="tk-badge tk-badge-info">Dalam pengerjaan</span></td>
                                <td class="tk-table-actions">
                                    <div class="tk-dropdown">
                                        <button class="tk-action-btn" aria-label="Menu aksi">${icon('more-horiz', 18)}</button>
                                        <div class="tk-dropdown-menu tk-dropdown-menu-right">
                                            <span class="tk-dropdown-label">Aksi baris</span>
                                            <button class="tk-dropdown-item">${icon('visibility', 18)} Lihat detail</button>
                                            <button class="tk-dropdown-item">${icon('edit', 18)} Ubah jadwal fitting</button>
                                            <button class="tk-dropdown-item">${icon('content-copy', 18)} Duplikat pesanan</button>
                                            <hr class="tk-dropdown-divider">
                                            <button class="tk-dropdown-item tk-dropdown-item-danger">${icon('delete', 18)} Batalkan</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>AT-0424</td><td>Bagas Dirgantara</td><td>Mantel Kasmir Ivoire</td><td><span class="tk-badge">Menunggu kain</span></td>
                                <td class="tk-table-actions">
                                    <button class="tk-action-btn" aria-label="Lihat">${icon('visibility', 18)}</button>
                                    <button class="tk-action-btn" aria-label="Edit">${icon('edit', 18)}</button>
                                    <button class="tk-action-btn tk-action-btn-danger" aria-label="Hapus">${icon('delete', 18)}</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tk-card-footer" style="justify-content: space-between; align-items: center">
                    <span class="tk-caption">Menampilkan 4 dari 128 pesanan</span>
                    <nav class="tk-pagination" aria-label="Halaman pesanan"><button class="tk-page">&lsaquo;</button><button class="tk-page tk-page-active">1</button><button class="tk-page">2</button><button class="tk-page">3</button><button class="tk-page">&rsaquo;</button></nav>
                </div>
            </div>
            <div class="dm-grid2">
                <div class="tk-card">
                    <div class="tk-card-header"><p class="tk-eyebrow" style="margin-bottom: 10px">Produksi</p><h3 class="tk-h3" style="margin: 0">Progres koleksi</h3></div>
                    <div class="tk-card-body">
                        <div class="dm-progress-row"><span class="dm-progress-head"><span>Koleksi Musim Kemarau</span><span class="tk-muted">82%</span></span><div class="tk-progress"><div class="tk-progress-bar" style="width: 82%"></div></div></div>
                        <div class="dm-progress-row"><span class="dm-progress-head"><span>Kapsul Nocturne</span><span class="tk-muted">46%</span></span><div class="tk-progress"><div class="tk-progress-bar" style="width: 46%"></div></div></div>
                        <div class="dm-progress-row" style="margin-bottom: 0"><span class="dm-progress-head"><span>Arsip Reedisi</span><span class="tk-muted">18%</span></span><div class="tk-progress"><div class="tk-progress-bar" style="width: 18%"></div></div></div>
                    </div>
                </div>
                <div class="tk-card">
                    <div class="tk-card-header"><p class="tk-eyebrow" style="margin-bottom: 10px">Catatan</p><h3 class="tk-h3" style="margin: 0">Kabar dari atelier</h3></div>
                    <div class="tk-card-body dm-activity">
                        <div class="dm-activity-item">${icon('person', 18)}<span><strong>Anindita Kusuma</strong> menerima undangan pratinjau koleksi<br><span class="tk-caption">12 menit lalu</span></span></div>
                        <div class="dm-activity-item">${icon('check-circle-outline', 18)}<span>Fitting kedua Setelan Nocturne selesai<br><span class="tk-caption">2 jam lalu</span></span></div>
                        <div class="dm-activity-item">${icon('local-shipping', 18)}<span>Tiga paket berselubung dikirim ke Salon Jakarta<br><span class="tk-caption">Kemarin, 17.40</span></span></div>
                        <div class="dm-activity-item">${icon('warning', 18)}<span>Persediaan sutra <em>ivoire</em> tinggal dua rol<br><span class="tk-caption">Kemarin, 09.15</span></span></div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
${CHART_HELPER_SCRIPT}
<script>
${LUX_CHART_MIX}
tkChart('dm-chart-order', function (t) {
    return {
        type: 'line',
        data: {
            labels: ['Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu'],
            datasets: [{ label: 'Nilai pesanan (juta)', data: [820, 910, 880, 1040, 1180, 1420], borderColor: t.accent, backgroundColor: lxSoft(t.accent, 10), borderWidth: 1.5, fill: true, tension: 0.28, pointRadius: 0, pointHoverRadius: 5, pointBackgroundColor: t.accent }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: lxSoft(t.border, 70) }, border: { display: false } }, x: { grid: { display: false }, border: { color: t.border } } } }
    };
});
tkChart('dm-chart-channel', function (t) {
    return {
        type: 'doughnut',
        data: { labels: ['Butik flagship', 'Salon privat', 'Concierge', 'Undangan'], datasets: [{ data: [42, 27, 19, 12], backgroundColor: [t.primary, t.accent, lxSoft(t.primary, 45), lxSoft(t.accent, 35)], borderColor: t.surface, borderWidth: 1 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '76%', plugins: { legend: { position: 'bottom', labels: { boxWidth: 8, boxHeight: 8, usePointStyle: true, pointStyle: 'circle', padding: 18 } } } }
    };
});
</script>
</body>
</html>
`;

/* ================================================================ */
/* Landing page                                                      */
/* ================================================================ */

function plan(title: string, price: string, note: string, items: string[], featured: boolean): string {
    const list = items.map(item => `<li>${icon('check', 16)} ${item}</li>`).join('\n                ');
    return `<div class="tk-card lp-plan${featured ? ' lp-plan-featured' : ''}">
            <div class="tk-card-body">
                <p class="tk-eyebrow" style="margin-bottom: 14px">${featured ? 'Paling dipilih' : 'Keanggotaan'}</p>
                <h3 class="tk-h3" style="margin: 0 0 6px">${title}</h3>
                <p class="lp-price">${price}<span class="lp-price-unit">/bulan</span></p>
                <p class="tk-body-sm tk-muted" style="margin: 0 0 28px">${note}</p>
                <ul class="lp-plan-list">
                 ${list}
                </ul>
                <button class="tk-btn ${featured ? 'tk-btn-primary' : 'tk-btn-outline'}" style="width: 100%">Pilih ${title}</button>
            </div>
        </div>`;
}

function feature(iconName: string, title: string, text: string): string {
    return `<div class="tk-feature"><span class="tk-feature-icon">${icon(iconName, 22)}</span><h3 class="tk-h4" style="margin: 0">${title}</h3><p class="tk-body-sm tk-muted" style="margin: 0">${text}</p></div>`;
}

/** Kartu koleksi editorial: plate fotografi di atas garis rambut, tautan ber-garis-bawah emas. */
function piece(title: string, meta: string, text: string, image: string): string {
    return `<article class="tk-card tk-card-bare">
            <figure class="tk-plate" style="aspect-ratio: 4 / 5; margin: 0">
                <img src="https://placehold.co/720x900/F2EDE4/6F6656?text=${image}" alt="Karya ${title} dari koleksi Musim Kemarau" loading="lazy" data-tk-asset="foto-koleksi">
            </figure>
            <div class="tk-card-body">
                <p class="tk-caption">${meta}</p>
                <h3 class="tk-h3" style="margin: 6px 0 10px">${title}</h3>
                <p class="tk-body-sm tk-muted" style="margin: 0 0 20px">${text}</p>
                <a class="tk-gild tk-caption" href="#atelier">Lihat detail karya</a>
            </div>
        </article>`;
}

/**
 * Kerangka SEO landing page — bagian kontrak kit (§7): judul berpola "Brand — proposisi nilai",
 * meta description, canonical, robots, Open Graph + Twitter card, dan satu blok JSON-LD `@graph`.
 * Tipe kontennya `Service` (keanggotaan maison, bukan aplikasi) dengan `AggregateRating` 4,9 dari
 * 320 penilaian dan tiga penawaran yang angkanya sama persis dengan seksi harga di halaman —
 * begitu harga di halaman diubah, blok ini wajib ikut. Domain `https://contoh.id` dan brand
 * `LOGO` adalah placeholder yang WAJIB diganti data proyek saat halaman ini disalin.
 */
const LANDING_SEO_HEAD = `<title>LOGO — Couture yang dijahit perlahan di atelier sendiri</title>
<meta name="description" content="Rumah mode independen dengan koleksi terbatas: pengukuran privat di salon, jahitan tangan di atelier sendiri, dan layanan concierge bagi klien Cercle.">
<link rel="canonical" href="https://contoh.id/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="LOGO">
<meta property="og:title" content="LOGO — Couture yang dijahit perlahan di atelier sendiri">
<meta property="og:description" content="Rumah mode independen dengan koleksi terbatas: pengukuran privat di salon, jahitan tangan di atelier sendiri, dan layanan concierge bagi klien Cercle.">
<meta property="og:url" content="https://contoh.id/">
<meta property="og:image" content="https://contoh.id/og-image.png">
<meta property="og:locale" content="id_ID">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="LOGO — Couture yang dijahit perlahan di atelier sendiri">
<meta name="twitter:description" content="Rumah mode independen dengan koleksi terbatas: pengukuran privat di salon, jahitan tangan di atelier sendiri, dan layanan concierge bagi klien Cercle.">
<meta name="twitter:image" content="https://contoh.id/og-image.png">
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://contoh.id/#organization",
            "name": "LOGO",
            "url": "https://contoh.id/",
            "logo": "https://contoh.id/logo.png",
            "foundingDate": "2008",
            "address": { "@type": "PostalAddress", "streetAddress": "Jalan Kurasi 12", "addressLocality": "Jakarta", "addressCountry": "ID" }
        },
        {
            "@type": "WebSite",
            "@id": "https://contoh.id/#website",
            "url": "https://contoh.id/",
            "name": "LOGO",
            "inLanguage": "id",
            "publisher": { "@id": "https://contoh.id/#organization" }
        },
        {
            "@type": "WebPage",
            "@id": "https://contoh.id/#webpage",
            "url": "https://contoh.id/",
            "name": "LOGO — Couture yang dijahit perlahan di atelier sendiri",
            "description": "Rumah mode independen dengan koleksi terbatas: pengukuran privat di salon, jahitan tangan di atelier sendiri, dan layanan concierge bagi klien Cercle.",
            "inLanguage": "id",
            "isPartOf": { "@id": "https://contoh.id/#website" },
            "about": { "@id": "https://contoh.id/#organization" }
        },
        {
            "@type": "Service",
            "name": "Keanggotaan Maison LOGO",
            "serviceType": "Atelier couture dan salon privat",
            "url": "https://contoh.id/#keanggotaan",
            "areaServed": "ID",
            "provider": { "@id": "https://contoh.id/#organization" },
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "ratingCount": "320" },
            "offers": [
                { "@type": "Offer", "name": "Tamu Maison", "price": "0", "priceCurrency": "IDR" },
                { "@type": "Offer", "name": "Klien Atelier", "price": "1800000", "priceCurrency": "IDR" },
                { "@type": "Offer", "name": "Cercle Priv\\u00e9", "price": "4800000", "priceCurrency": "IDR" }
            ]
        }
    ]
}
</script>`;

const LANDING = `<!DOCTYPE html>
<html lang="id">
<head>
${HEAD_COMMON}
<script src="${CHARTJS_SCRIPT}"></script>
${LANDING_SEO_HEAD}
<style>
    /* Perancah halaman contoh (lp-*): bukan bagian kontrak kit. */
    ${EX_NAV_CSS}
    .lp-skip { position: absolute; left: -9999px; top: 0; z-index: 30; background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); padding: 12px 24px; text-decoration: none; font-size: var(--tk-text-caption); text-transform: uppercase; letter-spacing: 0.24em; }
    .lp-skip:focus { left: 12px; top: 60px; }
    .lp-header { position: sticky; top: 48px; z-index: 10; }
    .ex-embedded .lp-header { top: 0; }
    main [id] { scroll-margin-top: 140px; }
    .lp-links { display: flex; gap: 40px; align-items: center; }
    .lp-burger { display: none; }
    /* Whitespace kit ini 176px; di landing dipakai sebagai jarak antar seksi penuh, sementara
       seksi yang berdempet dijilid .tk-rule alih-alih diberi jarak dua kali. */
    .lp-section { max-width: var(--tk-container); margin: 0 auto; padding: 128px var(--tk-space-xl); }
    .lp-section-tight { padding-top: 0; }
    .lp-head { max-width: 620px; margin: 0 auto 72px; text-align: center; }
    .lp-head .tk-body-lg { margin: 0; }
    .lp-hero { padding: 112px var(--tk-space-xl) 72px; }
    .lp-hero-plate { max-width: var(--tk-container); margin: 0 auto; padding: 0 var(--tk-space-xl) 0; }
    .lp-hero-plate .tk-plate { aspect-ratio: 21 / 9; }
    .lp-pieces { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-2xl); }
    .lp-story { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: var(--tk-space-2xl); align-items: start; }
    .lp-story .tk-plate { aspect-ratio: 3 / 4; }
    .lp-proof { display: grid; grid-template-columns: 1fr 1fr; gap: var(--tk-space-2xl); align-items: center; }
    .lp-figures { display: flex; gap: var(--tk-space-2xl); flex-wrap: wrap; margin-top: var(--tk-space-xl); }
    /* Angka besar di luar kartu: .tk-stat-value hanya bergaya di dalam .tk-card-stat, jadi
       perancah ini menyusun ulang angka serif ringan yang sama dari token huruf kit. */
    .lp-figure { margin: 0; }
    .lp-figure-num { display: block; font-family: var(--tk-font-heading); font-weight: 300; font-size: 54px; line-height: 1.05; letter-spacing: -0.02em; }
    .lp-figure .tk-caption { display: block; }
    .lp-chart-box { position: relative; height: 300px; }
    .lp-pricing { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-xl); align-items: start; }
    /* Paket unggulan tidak berganti warna — hanya tepi atasnya yang menjadi garis emas. */
    .lp-plan-featured { border-top: 2px solid var(--tk-color-accent); }
    .lp-price { font-family: var(--tk-font-heading); font-weight: 300; font-size: var(--tk-text-h2); letter-spacing: -0.02em; margin: 0 0 8px; }
    .lp-price-unit { font-family: var(--tk-font-body); font-size: var(--tk-text-caption); font-weight: 500; text-transform: uppercase; letter-spacing: 0.2em; color: var(--tk-color-text-muted); }
    .lp-plan-list { list-style: none; padding: 0; margin: 0 0 32px; display: flex; flex-direction: column; gap: 14px; font-size: var(--tk-text-body-sm); }
    .lp-plan-list li { display: flex; align-items: flex-start; gap: 12px; }
    .lp-plan-list iconify-icon { flex: none; margin-top: 4px; color: var(--tk-color-accent); }
    .lp-cta-wrap { max-width: var(--tk-container); margin: 0 auto; padding: 0 var(--tk-space-xl) 128px; }
    .lp-footer { border-top: 1px solid var(--tk-color-border); background: var(--tk-color-surface); }
    .lp-footer-inner { max-width: var(--tk-container); margin: 0 auto; padding: var(--tk-space-2xl) var(--tk-space-xl); display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: var(--tk-space-xl); }
    .lp-footer-links { display: flex; gap: var(--tk-space-xl); flex-wrap: wrap; }
    .lp-footer-meta { display: flex; flex-direction: column; gap: 10px; font-size: var(--tk-text-body-sm); color: var(--tk-color-text-muted); }
    .lp-footer-meta span { display: flex; align-items: center; gap: 10px; }
    @media (max-width: 900px) {
        .lp-links { display: none; }
        .lp-burger { display: inline-flex; }
        .lp-section { padding: 72px 20px; }
        .lp-hero { padding: 56px 20px 40px; }
        .lp-hero-plate { padding: 0 20px; }
        .lp-hero-plate .tk-plate { aspect-ratio: 4 / 3; }
        .lp-pieces { grid-template-columns: 1fr; }
        .lp-story { grid-template-columns: 1fr; }
        .lp-proof { grid-template-columns: 1fr; }
        .lp-figures { gap: var(--tk-space-xl); }
        .lp-figure span { font-size: 40px; }
        .lp-chart-box { height: 240px; }
        .lp-pricing { grid-template-columns: 1fr; }
        .lp-cta-wrap { padding: 0 20px 72px; }
        .lp-footer-inner { padding: 40px 20px; }
    }
</style>
</head>
<body>
${EX_EMBED_SCRIPT}
${exNav('Luxury Editorial', 'landing', '../', { device: { base: 'landing', active: 'web' } })}
<a class="lp-skip" href="#konten-utama">Langsung ke konten utama</a>
<header class="lp-header">
<nav class="tk-navbar" aria-label="Navigasi utama">
    <span class="tk-navbar-brand">LOGO</span>
    <div class="lp-links">
        <a class="tk-navbar-link tk-navbar-link-active" href="#beranda">Beranda</a>
        <a class="tk-navbar-link" href="#koleksi">Koleksi</a>
        <a class="tk-navbar-link" href="#atelier">Atelier</a>
        <a class="tk-navbar-link" href="#keanggotaan">Keanggotaan</a>
    </div>
    <a class="tk-btn tk-btn-outline tk-btn-sm" href="#reservasi">Reservasi</a>
    <button class="tk-action-btn lp-burger" aria-label="Menu">${icon('menu', 22)}</button>
</nav>
</header>
<main id="konten-utama">
<section class="tk-hero lp-hero" id="beranda" aria-labelledby="lp-h-hero">
    <p class="tk-eyebrow tk-eyebrow-center tk-reveal">Edisi Musim Kemarau 2026</p>
    <h1 class="tk-display tk-reveal tk-reveal-2" id="lp-h-hero">Dijahit perlahan, dipakai bertahun-tahun</h1>
    <p class="tk-hero-sub tk-reveal tk-reveal-2">Dua puluh empat karya per musim, seluruhnya diselesaikan dengan tangan di atelier kami sendiri — dan tidak satu pun dibuat dua kali.</p>
    <div class="tk-hero-actions tk-reveal tk-reveal-3">
        <a class="tk-btn tk-btn-primary tk-btn-lg" href="#koleksi">Lihat Koleksi ${icon('arrow-right-alt', 18)}</a>
        <a class="tk-btn tk-btn-outline tk-btn-lg" href="#reservasi">Reservasi Salon</a>
    </div>
</section>
<div class="lp-hero-plate">
    <figure class="tk-plate" style="margin: 0">
        <img src="https://placehold.co/1680x720/F2EDE4/6F6656?text=Salon+Maison" alt="Ruang salon maison dengan cermin tinggi dan gaun yang sedang disiapkan" data-tk-asset="foto-salon">
    </figure>
    <p class="tk-plate-caption">Salon privat kami di Jalan Kurasi 12 &mdash; pengukuran hanya dengan reservasi.</p>
</div>
<section class="lp-section" id="koleksi" aria-labelledby="lp-h-koleksi">
    <div class="lp-head">
        <p class="tk-eyebrow tk-eyebrow-center">Koleksi terpilih</p>
        <h2 class="tk-h2" id="lp-h-koleksi">Tiga karya pembuka musim ini</h2>
        <p class="tk-body-lg tk-muted">Setiap karya dibuat dalam jumlah terbatas, dengan kain yang dipilih satu per satu dan nomor edisi yang dijahit di sisi dalamnya.</p>
    </div>
    <div class="lp-pieces">
        ${piece('Gaun Sérénité', 'Edisi 12 &middot; Sutra ivoire', 'Potongan lurus dengan lipatan tangan di pinggang, diselesaikan dalam sembilan puluh jam kerja.', 'Gaun')}
        ${piece('Setelan Nocturne', 'Edisi 8 &middot; Wol dingin', 'Setelan malam berbahu lembut, dijahit dengan kanvas mengapung agar jatuhnya melunak seiring pemakaian.', 'Setelan')}
        ${piece('Mantel Ivoire', 'Edisi 6 &middot; Kasmir', 'Mantel panjang tanpa kancing tampak, dengan saku dalam yang dilapisi sisa kain koleksi sebelumnya.', 'Mantel')}
    </div>
</section>
<section class="lp-section lp-section-tight" id="atelier" aria-labelledby="lp-h-atelier">
    <hr class="tk-rule" style="margin-bottom: 96px">
    <div class="lp-story">
        <div class="tk-prose">
            <p class="tk-eyebrow">Kisah atelier</p>
            <h2 class="tk-h2" id="lp-h-atelier">Delapan belas tahun di satu ruangan</h2>
            <p class="tk-body tk-drop-cap">Atelier kami dibuka pada 2008 di lantai dua sebuah rumah tua, dan sampai hari ini belum pindah. Dua belas penjahit bekerja di meja yang sama, dengan ritme yang sengaja tidak dipercepat: satu karya berpindah tangan paling sedikit lima kali sebelum dianggap selesai.</p>
            <p class="tk-body">Kami tidak mengejar musim. Koleksi keluar ketika kain yang tepat sudah tiba dan pola terakhir sudah lulus fitting ketiga — kadang itu berarti dua koleksi setahun, kadang hanya satu.</p>
            <blockquote class="tk-quote">Pakaian yang dibuat dengan tenang akan menua dengan tenang juga.</blockquote>
            <p class="tk-caption">Wastu Ardhana &mdash; pendiri dan kepala pola</p>
        </div>
        <figure class="tk-plate" style="margin: 0">
            <img src="https://placehold.co/900x1200/F2EDE4/6F6656?text=Atelier" alt="Penjahit sedang menyelesaikan kelim di meja atelier" loading="lazy" data-tk-asset="foto-atelier">
        </figure>
    </div>
    <div class="tk-feature-grid" style="margin-top: 96px">
        ${feature('diamond', 'Kain langka', 'Sutra, kasmir, dan wol dingin dari tiga penenun yang sudah bekerja dengan kami lebih dari satu dekade.')}
        ${feature('handshake', 'Pengukuran privat', 'Salon ditutup untuk satu klien setiap sesi, dengan dua puluh delapan titik ukur yang dicatat manual.')}
        ${feature('workspace-premium', 'Jahitan tangan', 'Kelim, lubang kancing, dan pemasangan lengan dikerjakan tanpa mesin — jejaknya bisa Anda rasakan.')}
        ${feature('eco', 'Sumber yang jelas', 'Setiap gulung kain membawa catatan asal, dan sisa potongan kembali menjadi pelapis saku.')}
        ${feature('spa', 'Perawatan seumur pakai', 'Penyesuaian ukuran dan perbaikan kelim tetap kami kerjakan bertahun-tahun setelah penyerahan.')}
        ${feature('local-shipping', 'Pengiriman berselubung', 'Karya dikirim dalam kotak arsip berlapis kain, diantar sendiri untuk alamat di dalam kota.')}
    </div>
</section>
<section class="lp-section lp-section-tight" id="bukti" aria-labelledby="lp-h-bukti">
    <hr class="tk-rule" style="margin-bottom: 96px">
    <div class="lp-proof">
        <div>
            <p class="tk-eyebrow">Angka maison</p>
            <h2 class="tk-h2" id="lp-h-bukti">Tumbuh tanpa mempercepat meja kerja</h2>
            <p class="tk-body-lg tk-muted" style="max-width: 46ch">Jumlah karya yang keluar dari atelier naik empat musim berturut-turut, dan penilaian klien bertahan di 4,9 dari 5 sepanjang periode itu.</p>
            <div class="lp-figures">
                <p class="lp-figure"><span class="lp-figure-num">18</span><span class="tk-caption">Tahun di satu atelier</span></p>
                <p class="lp-figure"><span class="lp-figure-num">1.400</span><span class="tk-caption">Potong per tahun</span></p>
                <p class="lp-figure"><span class="lp-figure-num">4,9/5</span><span class="tk-caption">320 penilaian klien</span></p>
            </div>
        </div>
        <div class="tk-card">
            <div class="tk-card-header"><p class="tk-eyebrow" style="margin-bottom: 10px">Empat musim</p><h3 class="tk-h3" style="margin: 0">Karya yang keluar atelier</h3></div>
            <div class="tk-card-body"><div class="lp-chart-box"><canvas id="lp-chart-atelier"></canvas></div></div>
        </div>
    </div>
</section>
<section class="lp-section lp-section-tight" id="keanggotaan" aria-labelledby="lp-h-keanggotaan">
    <hr class="tk-rule" style="margin-bottom: 96px">
    <div class="lp-head">
        <p class="tk-eyebrow tk-eyebrow-center">Keanggotaan</p>
        <h2 class="tk-h2" id="lp-h-keanggotaan">Tiga cara masuk ke maison</h2>
        <p class="tk-body-lg tk-muted">Mulai sebagai tamu tanpa biaya. Naik ke atelier atau Cercle ketika Anda ingin ruang, waktu, dan tangan kami sepenuhnya.</p>
    </div>
    <div class="lp-pricing">
        ${plan('Tamu Maison', 'Rp0', 'Untuk yang baru ingin melihat-lihat.', ['Undangan pratinjau digital', 'Buletin edisi musiman', 'Kunjungan butik tanpa janji'], false)}
        ${plan('Klien Atelier', 'Rp1,8jt', 'Untuk yang memesan satu hingga dua karya setahun.', ['Sesi pengukuran privat', 'Dua penyesuaian per tahun', 'Prioritas daftar tunggu koleksi', 'Perawatan tahunan'], true)}
        ${plan('Cercle Privé', 'Rp4,8jt', 'Untuk yang menginginkan maison sepenuhnya.', ['Semua layanan Klien Atelier', 'Salon privat di luar jam buka', 'Concierge pribadi', 'Akses arsip reedisi'], false)}
    </div>
</section>
<div class="lp-cta-wrap">
    <section class="tk-cta" id="reservasi" aria-labelledby="lp-h-reservasi">
        <div>
            <h2 class="tk-h3" id="lp-h-reservasi">Reservasi salon privat</h2>
            <p class="tk-muted" style="margin: 10px 0 0">Dua sesi tersisa pada Agustus, masing-masing sembilan puluh menit.</p>
        </div>
        <a class="tk-btn tk-btn-primary tk-btn-lg" href="#konten-utama">Ajukan Reservasi ${icon('north-east', 16)}</a>
    </section>
</div>
</main>
<footer class="lp-footer">
    <div class="lp-footer-inner">
        <div>
            <p class="tk-navbar-brand" style="margin: 0 0 16px">LOGO</p>
            <span class="tk-caption">&copy; 2026 LOGO. Seluruh hak cipta.</span>
        </div>
        <div class="lp-footer-meta">
            <span>${icon('location-on', 16)} Jalan Kurasi 12, Jakarta</span>
            <span>${icon('schedule', 16)} Selasa&ndash;Sabtu, 11.00&ndash;18.00</span>
            <span>${icon('mail', 16)} salon@contoh.id</span>
        </div>
        <div class="lp-footer-links">
            <a class="tk-navbar-link" href="#koleksi">Koleksi</a>
            <a class="tk-navbar-link" href="#atelier">Atelier</a>
            <a class="tk-navbar-link" href="#keanggotaan">Keanggotaan</a>
            <a class="tk-navbar-link" href="#reservasi">Reservasi</a>
        </div>
    </div>
</footer>
${CHART_HELPER_SCRIPT}
<script>
${LUX_CHART_MIX}
tkChart('lp-chart-atelier', function (t) {
    return {
        type: 'bar',
        data: {
            labels: ['Musim 2023', 'Musim 2024', 'Musim 2025', 'Musim 2026'],
            datasets: [{ label: 'Karya selesai', data: [820, 980, 1180, 1400], backgroundColor: [lxSoft(t.accent, 30), lxSoft(t.accent, 50), lxSoft(t.accent, 75), t.accent], borderRadius: 0, maxBarThickness: 48 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: lxSoft(t.border, 70) }, border: { display: false } }, x: { grid: { display: false }, border: { color: t.border } } } }
    };
});
</script>
</body>
</html>
`;

/* ================================================================ */
/* Login & register                                                  */
/* ================================================================ */

/** Perancah kartu auth; diekspor karena showcase menampilkan kartunya di seksi Login & Register. */
export const AUTH_CSS = `    /* Perancah halaman auth (au-*): bukan bagian kontrak kit. */
    .au-wrap { min-height: calc(100vh - 48px); box-sizing: border-box; display: flex; align-items: center; justify-content: center; padding: 64px 16px; background: var(--tk-color-surface-2); }
    .ex-embedded .au-wrap { min-height: 100vh; }
    .au-card { width: 100%; max-width: 424px; }
    .au-brand { font-family: var(--tk-font-heading); font-weight: 400; font-size: 30px; letter-spacing: 0.2em; text-transform: uppercase; text-align: center; margin-bottom: 8px; }
    .au-title { text-align: center; margin: 0 0 8px; }
    .au-sub { text-align: center; margin: 0 0 36px; }
    .au-full { width: 100%; box-sizing: border-box; }
    .au-divider { display: flex; align-items: center; gap: 18px; margin: 28px 0; color: var(--tk-color-text-muted); font-size: 10px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.24em; }
    .au-divider::before, .au-divider::after { content: ''; height: 1px; flex: 1; background: var(--tk-color-border); }
    .au-card .tk-field { margin-bottom: 24px; }
    .au-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin: 4px 0 32px; font-size: var(--tk-text-body-sm); }
    .au-alt { text-align: center; margin: 32px 0 0; }`;

function authPage(base: 'login' | 'register', title: string, body: string): string {
    return `<!DOCTYPE html>
<html lang="id">
<head>
${HEAD_COMMON}
<title>Luxury Editorial — Contoh ${title}</title>
<style>
    ${EX_NAV_CSS}
${AUTH_CSS}
</style>
</head>
<body>
${EX_EMBED_SCRIPT}
${exNav('Luxury Editorial', 'components', '../', { device: { base, active: 'web' } })}
<div class="au-wrap">
    <div class="tk-card au-card tk-reveal">
        <div class="tk-card-body">
            <p class="au-brand">LOGO</p>
${body}
        </div>
    </div>
</div>
</body>
</html>
`;
}

/** Isi kartu login; dipakai halaman contoh dan seksi Login & Register di showcase. */
export const AUTH_LOGIN_FORM = `            <p class="tk-eyebrow tk-eyebrow-center" style="width: 100%; margin-bottom: 20px">Ruang Klien</p>
            <h1 class="tk-h3 au-title">Masuk ke akun Anda</h1>
            <p class="tk-body-sm tk-muted au-sub">Selamat datang kembali. Riwayat ukuran dan pesanan Anda menunggu di dalam.</p>
            <button class="tk-btn tk-btn-outline au-full" type="button"><iconify-icon icon="logos:google-icon" width="16" height="16"></iconify-icon> Lanjut dengan Google</button>
            <div class="au-divider">atau dengan email</div>
            <div class="tk-field">
                <label class="tk-label">Email</label>
                <input class="tk-input" type="email" placeholder="nama@contoh.id">
            </div>
            <div class="tk-field">
                <label class="tk-label">Kata Sandi</label>
                <input class="tk-input" type="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;">
            </div>
            <div class="au-row">
                <label class="tk-check"><input class="tk-checkbox" type="checkbox" checked> Ingat saya</label>
                <a class="tk-link" href="#">Lupa kata sandi?</a>
            </div>
            <button class="tk-btn tk-btn-primary au-full" type="button">Masuk</button>
            <p class="tk-body-sm tk-muted au-alt">Belum menjadi klien? <a class="tk-link" href="register.html">Ajukan keanggotaan</a></p>`;

const LOGIN = authPage('login', 'Login', AUTH_LOGIN_FORM);

/** Isi kartu register; dipakai halaman contoh dan seksi Login & Register di showcase. */
export const AUTH_REGISTER_FORM = `            <p class="tk-eyebrow tk-eyebrow-center" style="width: 100%; margin-bottom: 20px">Keanggotaan</p>
            <h1 class="tk-h3 au-title">Ajukan keanggotaan</h1>
            <p class="tk-body-sm tk-muted au-sub">Tamu Maison tanpa biaya &mdash; undangan pratinjau koleksi dikirim setiap musim.</p>
            <button class="tk-btn tk-btn-outline au-full" type="button"><iconify-icon icon="logos:google-icon" width="16" height="16"></iconify-icon> Daftar dengan Google</button>
            <div class="au-divider">atau dengan email</div>
            <div class="tk-field">
                <label class="tk-label">Nama Lengkap</label>
                <input class="tk-input" type="text" placeholder="Anindita Kusuma">
            </div>
            <div class="tk-field">
                <label class="tk-label">Email</label>
                <input class="tk-input" type="email" placeholder="nama@contoh.id">
            </div>
            <div class="tk-field">
                <label class="tk-label">Kata Sandi</label>
                <input class="tk-input" type="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;">
                <span class="tk-help">Minimal 8 karakter dengan satu angka.</span>
            </div>
            <div class="au-row">
                <label class="tk-check"><input class="tk-checkbox" type="checkbox"> Saya setuju dengan <a class="tk-link" href="#">Ketentuan Maison</a></label>
            </div>
            <button class="tk-btn tk-btn-primary au-full" type="button">Ajukan Keanggotaan</button>
            <p class="tk-body-sm tk-muted au-alt">Sudah menjadi klien? <a class="tk-link" href="login.html">Masuk</a></p>`;

const REGISTER = authPage('register', 'Register', AUTH_REGISTER_FORM);

/* ================================================================ */
/* Bingkai ponsel                                                    */
/* ================================================================ */

/**
 * Versi mobile = halaman yang sama dirender di iframe selebar ponsel lewat query `?tk-embed`,
 * sehingga media query kit benar-benar berjalan — bukan tangkapan layar statis. Saklar tema di
 * bilah atas menjangkau dokumen di dalam bingkai karena keduanya dari server pratinjau yang sama.
 */
function deviceFrame(title: string, view: 'dashboard' | 'landing' | 'components', base: string): string {
    return `<!DOCTYPE html>
<html lang="id">
<head>
${HEAD_COMMON}
<title>Luxury Editorial — ${title} (Ponsel)</title>
<style>
    ${EX_NAV_CSS}
    body { min-height: 100vh; margin: 0; box-sizing: border-box; background: var(--tk-color-surface-2); }
    .ex-stage { display: flex; flex-direction: column; align-items: center; gap: 20px; padding: 24px; }
    .ex-device { width: 412px; max-width: 100%; height: 780px; max-height: calc(100vh - 156px); min-height: 420px; border: 12px solid #16130F; border-radius: 46px; background: #16130F; box-shadow: var(--tk-shadow-lg); overflow: hidden; flex: none; }
    .ex-device iframe { width: 100%; height: 100%; border: none; border-radius: 34px; background: var(--tk-color-background); }
</style>
</head>
<body>
${exNav('Luxury Editorial', view, '../', { device: { base, active: 'mobile' }, extraThemeJs: FRAME_THEME_EXTRA_JS })}
<div class="ex-stage">
    <div class="ex-device"><iframe src="${base}.html?tk-embed" title="${title} versi ponsel"></iframe></div>
    <p class="tk-caption">${title} &mdash; lebar 388px, media query kit aktif seperti di ponsel sungguhan.</p>
</div>
</body>
</html>
`;
}

export const LUXURY_EDITORIAL_EXAMPLES: Record<string, string> = {
    'examples/dashboard.html': DASHBOARD,
    'examples/dashboard-mobile.html': deviceFrame('Admin Dashboard', 'dashboard', 'dashboard'),
    'examples/landing.html': LANDING,
    'examples/landing-mobile.html': deviceFrame('Landing Page', 'landing', 'landing'),
    'examples/login.html': LOGIN,
    'examples/login-mobile.html': deviceFrame('Login', 'components', 'login'),
    'examples/register.html': REGISTER,
    'examples/register-mobile.html': deviceFrame('Register', 'components', 'register')
};
