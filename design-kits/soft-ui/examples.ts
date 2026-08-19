/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len, @typescript-eslint/quotes */

/**
 * Halaman contoh (`examples/`) kit Soft UI: admin dashboard dan landing page utuh yang dirakit
 * murni dari komponen kontrak, responsif untuk web dan ponsel. Dua peran sekaligus: bukti visual
 * kit di halaman nyata (dibuka dari showcase) dan kerangka awal yang boleh disalin agen saat
 * pengguna meminta halaman sejenis — lebih murah daripada merakit dari nol.
 *
 * Landing page-nya sebuah aplikasi kebiasaan dan kesejahteraan, salah satu peruntukan yang
 * disebut kit ini. Strukturnya tetap sama dengan kit lain seksi demi seksi (navbar, hero, fitur,
 * bukti ber-chart, harga, CTA, footer) supaya masih bisa dibandingkan berdampingan.
 *
 * Kit ini dua-mode, jadi saklar tema di bilah pratinjau dibiarkan hidup dan bingkai ponsel
 * meneruskan penggelapan ke dokumen di dalam iframe-nya lewat `FRAME_THEME_EXTRA_JS`.
 *
 * Kelas `dm-*` / `lp-*` / `au-*` / `ex-*` adalah perancah halaman contoh, bukan kontrak kit.
 */

// Perancah pratinjau kit-agnostik, dipakai bersama lintas kit; rumahnya masih di kit pertama.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_EMBED_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

function ic(name: string, size = 18): string {
    return `<iconify-icon icon="mage:${name}" width="${size}" height="${size}"></iconify-icon>`;
}

const FONT_LINK = 'https://fonts.googleapis.com/css2?family=Gabarito:wght@500;600;700&family=Lexend:wght@300;400;500;600&family=Overpass+Mono:wght@400;500&display=swap';

const HEAD_COMMON = `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="${FONT_LINK}" rel="stylesheet">
<link rel="stylesheet" href="../styles.css">
<script src="https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"></script>`;

/**
 * Chart kit ini memakai warna semantik yang sudah diredam di token, jadi deretnya cukup dibaca
 * apa adanya lewat `t`. Yang perlu ditambahkan cuma versi lembutnya untuk area di bawah garis:
 * `color-mix` dipakai supaya isian ikut palet penimpa alih-alih rgba yang ditanam.
 */
const SOFT_FILL = `
function suSoft(color, amount) { return 'color-mix(in srgb, ' + color + ' ' + amount + '%, transparent)'; }
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
<title>Soft UI — Contoh Admin Dashboard</title>
<style>
    /* Perancah halaman contoh (dm-*): bukan bagian kontrak kit. */
    ${EX_NAV_CSS}
    .dm-shell { display: flex; min-height: calc(100vh - 48px); gap: 0; }
    .dm-sidebar { position: sticky; top: 48px; height: calc(100vh - 48px); box-sizing: border-box; background: transparent; }
    .dm-sidebar-brand { font-family: var(--tk-font-heading); font-weight: 700; font-size: 19px; letter-spacing: -0.02em; padding: 12px 16px 24px; white-space: nowrap; }
    .dm-sidebar-brand-mini { display: none; }
    .tk-sidebar-collapsed .dm-sidebar-brand { text-align: center; padding: 12px 0 24px; }
    .tk-sidebar-collapsed .dm-sidebar-brand-mini { display: inline; }
    .dm-sidebar-foot { margin-top: auto; display: block; padding-top: 8px; }
    .dm-foot-btn { display: flex; align-items: center; gap: 12px; width: 100%; padding: 10px; border: none; background: transparent; font-family: inherit; color: var(--tk-color-text); text-align: left; cursor: pointer; border-radius: var(--tk-radius); transition: background var(--tk-transition); }
    .dm-foot-btn:hover { background: var(--tk-color-surface); }
    .dm-foot-chevron { margin-left: auto; color: var(--tk-color-text-muted); }
    .dm-sidebar-foot .tk-dropdown-menu { left: 0; right: 0; min-width: 0; }
    .tk-sidebar-collapsed .dm-foot-btn { justify-content: center; padding: 10px 0; }
    .dm-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
    /* Topbar melayang: bidang putih membulat yang duduk di atas kanvas oat, bukan bilah
       selebar layar yang menempel — cara yang sama dipakai navbar di landing. */
    .dm-topbar { display: flex; align-items: center; gap: 16px; margin: 16px 24px 0; padding: 12px 20px; background: var(--tk-color-surface); border-radius: var(--tk-radius-full); box-shadow: var(--tk-shadow-sm); position: sticky; top: 60px; z-index: 10; }
    .ex-embedded .dm-shell { min-height: 100vh; }
    .ex-embedded .dm-sidebar { top: 0; height: 100vh; }
    .ex-embedded .dm-topbar { top: 12px; }
    .dm-topbar .tk-search { width: 280px; }
    .dm-topbar-spacer { margin-left: auto; display: flex; align-items: center; gap: 10px; }
    .dm-avatar { width: 38px; height: 38px; border-radius: var(--tk-radius-full); background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 500; flex: none; }
    .dm-content { padding: 24px; display: flex; flex-direction: column; gap: 24px; }
    .dm-page-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; }
    .dm-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
    .dm-stat-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
    .dm-grid2 { display: grid; grid-template-columns: 3fr 2fr; gap: 24px; align-items: start; }
    .dm-chart-box { position: relative; height: 268px; }
    .dm-table-wrap { overflow-x: auto; }
    .dm-progress-row { margin-bottom: 22px; font-size: var(--tk-text-body-sm); }
    .dm-progress-head { display: flex; justify-content: space-between; margin-bottom: 10px; }
    .dm-activity { display: flex; flex-direction: column; gap: 12px; }
    .dm-activity-item { display: flex; gap: 14px; align-items: center; font-size: var(--tk-text-body-sm); }
    .dm-rings { display: flex; align-items: center; justify-content: space-around; gap: 16px; flex-wrap: wrap; text-align: center; }
    .dm-ring-cell p { margin: 10px 0 0; }
    @media (max-width: 960px) {
        .dm-sidebar { display: none; }
        .dm-stats { grid-template-columns: repeat(2, 1fr); }
        .dm-grid2 { grid-template-columns: 1fr; }
    }
    /* Di layar sempit sidebar jadi laci: tombol burger memunculkannya menumpuk konten. */
    .dm-sidebar.dm-sidebar-open { display: flex; position: fixed; top: 48px; left: 0; bottom: 0; height: auto; z-index: 90; background: var(--tk-color-surface); box-shadow: var(--tk-shadow-lg); }
    .ex-embedded .dm-sidebar.dm-sidebar-open { top: 0; }
    @media (max-width: 700px) {
        .dm-crumb { display: none; }
        .dm-topbar .tk-search { width: auto; flex: 1; min-width: 0; }
    }
    @media (max-width: 600px) {
        .dm-content { padding: 16px; gap: 16px; }
        .dm-topbar { margin: 12px 16px 0; padding: 10px 14px; }
        .dm-stats { grid-template-columns: 1fr; }
        .dm-chart-box { height: 224px; }
    }
</style>
</head>
<body>
${EX_EMBED_SCRIPT}
${exNav('Soft UI', 'dashboard', '../', { device: { base: 'dashboard', active: 'web' } })}
<div class="dm-shell">
    <aside class="tk-sidebar dm-sidebar">
        <span class="dm-sidebar-brand"><span class="tk-sidebar-label">Logo</span><span class="dm-sidebar-brand-mini">L</span></span>
        <span class="tk-sidebar-group">Umum</span>
        <a class="tk-sidebar-item tk-sidebar-item-active" href="#">${ic('dashboard')} <span class="tk-sidebar-label">Dashboard</span></a>
        <a class="tk-sidebar-item" href="#">${ic('users')} <span class="tk-sidebar-label">Pengguna</span></a>
        <a class="tk-sidebar-item" href="#">${ic('folder')} <span class="tk-sidebar-label">Program</span></a>
        <span class="tk-sidebar-group">Analitik</span>
        <a class="tk-sidebar-item" href="#">${ic('chart')} <span class="tk-sidebar-label">Laporan</span></a>
        <a class="tk-sidebar-item" href="#">${ic('goals')} <span class="tk-sidebar-label">Target</span></a>
        <span class="tk-sidebar-group">Lainnya</span>
        <a class="tk-sidebar-item" href="#">${ic('settings')} <span class="tk-sidebar-label">Pengaturan</span></a>
        <a class="tk-sidebar-item" href="#">${ic('information-circle')} <span class="tk-sidebar-label">Bantuan</span></a>
        <div class="tk-dropdown dm-sidebar-foot">
            <button class="dm-foot-btn" type="button" aria-label="Menu profil">
                <span class="dm-avatar">JD</span>
                <span class="tk-sidebar-label" style="min-width: 0"><span class="tk-body-sm" style="display: block; font-weight: 500">Jane Doe</span><span class="tk-caption">jane@contoh.com</span></span>
                <span class="dm-foot-chevron tk-sidebar-label">${ic('chevron-down', 15)}</span>
            </button>
            <div class="tk-dropdown-menu tk-dropdown-menu-up">
                <button class="tk-dropdown-item" type="button">${ic('user', 16)} Profil</button>
                <button class="tk-dropdown-item" type="button">${ic('settings', 16)} Pengaturan</button>
                <hr class="tk-dropdown-divider">
                <button class="tk-dropdown-item tk-dropdown-item-danger" type="button">${ic('logout', 16)} Keluar</button>
            </div>
        </div>
    </aside>
    <div class="dm-main">
        <header class="dm-topbar">
            <button class="tk-action-btn" aria-label="Buka/tutup sidebar" onclick="
                var sb = document.querySelector('.dm-sidebar');
                if (window.matchMedia('(max-width: 960px)').matches) { sb.classList.toggle('dm-sidebar-open'); }
                else { sb.classList.toggle('tk-sidebar-collapsed'); }
            ">${ic('dash-menu', 20)}</button>
            <nav class="tk-breadcrumb dm-crumb">
                <a href="#">Beranda</a>
                <span class="tk-breadcrumb-sep">${ic('chevron-right', 14)}</span>
                <a href="#">Analitik</a>
                <span class="tk-breadcrumb-sep">${ic('chevron-right', 14)}</span>
                <span class="tk-breadcrumb-current">Dashboard</span>
            </nav>
            <div class="dm-topbar-spacer">
                <div class="tk-search">
                    <span class="tk-search-icon">${ic('search', 16)}</span>
                    <input class="tk-input" type="search" placeholder="Cari apa saja...">
                    <kbd class="tk-search-kbd">Ctrl K</kbd>
                </div>
                <button class="tk-action-btn" aria-label="Notifikasi">${ic('notification-bell', 19)}</button>
            </div>
        </header>
        <main class="dm-content">
            <div class="dm-page-head">
                <div>
                    <p class="tk-body-sm tk-muted" style="margin: 0 0 4px">Ringkasan</p>
                    <h2 class="tk-h3" style="margin: 0">Selamat pagi, Jane</h2>
                </div>
                <span class="tk-caption">Diperbarui 14 Agustus 2026, 09.20</span>
            </div>
            <div class="dm-stats">
                <div class="tk-card tk-card-stat"><div class="tk-card-body">
                    <div class="dm-stat-head"><p class="tk-body-sm tk-muted" style="margin: 0">Anggota Aktif</p><span class="tk-icon-tile">${ic('users', 20)}</span></div>
                    <p class="tk-stat-value" style="margin: 0 0 10px">12.540</p><span class="tk-stat-trend-up">12,5%</span>
                </div></div>
                <div class="tk-card tk-card-stat"><div class="tk-card-body">
                    <div class="dm-stat-head"><p class="tk-body-sm tk-muted" style="margin: 0">Pendapatan</p><span class="tk-icon-tile tk-icon-tile-accent">${ic('credit-card', 20)}</span></div>
                    <p class="tk-stat-value" style="margin: 0 0 10px">Rp84,2 jt</p><span class="tk-stat-trend-up">8,1%</span>
                </div></div>
                <div class="tk-card tk-card-stat"><div class="tk-card-body">
                    <div class="dm-stat-head"><p class="tk-body-sm tk-muted" style="margin: 0">Sesi Selesai</p><span class="tk-icon-tile">${ic('check-circle', 20)}</span></div>
                    <p class="tk-stat-value" style="margin: 0 0 10px">1.203</p><span class="tk-stat-trend-down">2,4%</span>
                </div></div>
                <div class="tk-card tk-card-stat"><div class="tk-card-body">
                    <div class="dm-stat-head"><p class="tk-body-sm tk-muted" style="margin: 0">Retensi</p><span class="tk-icon-tile tk-icon-tile-accent">${ic('heart-health', 20)}</span></div>
                    <p class="tk-stat-value" style="margin: 0 0 10px">86,4%</p><span class="tk-stat-trend-up">0,8%</span>
                </div></div>
            </div>
            <div class="dm-grid2">
                <div class="tk-card">
                    <div class="tk-card-header" style="display: flex; align-items: center; justify-content: space-between"><h3 class="tk-title" style="margin: 0">Pertumbuhan</h3><div class="tk-segmented"><button class="tk-segment tk-segment-active">6 Bulan</button><button class="tk-segment">1 Tahun</button></div></div>
                    <div class="tk-card-body"><div class="dm-chart-box"><canvas id="dm-chart-revenue"></canvas></div></div>
                </div>
                <div class="tk-card">
                    <div class="tk-card-header"><h3 class="tk-title" style="margin: 0">Sumber Trafik</h3></div>
                    <div class="tk-card-body"><div class="dm-chart-box"><canvas id="dm-chart-traffic"></canvas></div></div>
                </div>
            </div>
            <div class="tk-filter-bar">
                <div class="tk-search">
                    <span class="tk-search-icon">${ic('search', 16)}</span>
                    <input class="tk-input" type="search" placeholder="Cari nama atau email...">
                </div>
                <div class="tk-select">
                    <button class="tk-select-trigger" type="button">Semua status ${ic('chevron-down', 15)}</button>
                    <div class="tk-select-menu">
                        <button class="tk-option tk-option-selected" type="button">Semua status <span class="tk-option-check">${ic('check', 16)}</span></button>
                        <button class="tk-option" type="button">Aktif</button>
                        <button class="tk-option" type="button">Nonaktif</button>
                    </div>
                </div>
                <button class="tk-btn tk-btn-outline">${ic('filter', 16)} Filter</button>
            </div>
            <div class="tk-card">
                <div class="tk-card-header" style="display: flex; align-items: center; justify-content: space-between"><h3 class="tk-title" style="margin: 0">Anggota Terbaru</h3><button class="tk-btn tk-btn-primary tk-btn-sm">${ic('plus', 15)} Tambah</button></div>
                <div class="tk-card-body dm-table-wrap">
                    <table class="tk-table">
                        <thead><tr><th>Nama</th><th>Email</th><th>Program</th><th>Status</th><th class="tk-table-actions">Aksi</th></tr></thead>
                        <tbody>
                            <tr><td>Jane Smith</td><td>jane@contoh.com</td><td>Tidur Lebih Awal</td><td><span class="tk-badge tk-badge-success">Aktif</span></td><td class="tk-table-actions"><button class="tk-action-btn" aria-label="Lihat">${ic('eye', 16)}</button><button class="tk-action-btn" aria-label="Edit">${ic('edit', 16)}</button><button class="tk-action-btn tk-action-btn-danger" aria-label="Hapus">${ic('trash-2', 16)}</button></td></tr>
                            <tr><td>John Doe</td><td>john@contoh.com</td><td>Jalan Pagi</td><td><span class="tk-badge tk-badge-warning">Menunggu</span></td><td class="tk-table-actions"><button class="tk-action-btn" aria-label="Lihat">${ic('eye', 16)}</button><button class="tk-action-btn" aria-label="Edit">${ic('edit', 16)}</button><button class="tk-action-btn tk-action-btn-danger" aria-label="Hapus">${ic('trash-2', 16)}</button></td></tr>
                            <tr><td>Maya Putri</td><td>maya@contoh.com</td><td>Fokus Dalam</td><td><span class="tk-badge tk-badge-danger">Berhenti</span></td><td class="tk-table-actions"><div class="tk-dropdown"><button class="tk-action-btn" aria-label="Menu aksi">${ic('dots-horizontal', 16)}</button><div class="tk-dropdown-menu tk-dropdown-menu-right"><button class="tk-dropdown-item">${ic('eye', 16)} Lihat detail</button><button class="tk-dropdown-item">${ic('edit', 16)} Edit</button><hr class="tk-dropdown-divider"><button class="tk-dropdown-item tk-dropdown-item-danger">${ic('trash-2', 16)} Hapus</button></div></div></td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="tk-card-footer" style="justify-content: space-between; align-items: center"><span class="tk-caption">Menampilkan 3 dari 128 anggota</span><nav class="tk-pagination"><button class="tk-page">&lsaquo;</button><button class="tk-page tk-page-active">1</button><button class="tk-page">2</button><button class="tk-page">3</button><button class="tk-page">&rsaquo;</button></nav></div>
            </div>
            <div class="dm-grid2">
                <div class="tk-card">
                    <div class="tk-card-header"><h3 class="tk-title" style="margin: 0">Progres Program</h3></div>
                    <div class="tk-card-body">
                        <div class="dm-progress-row"><span class="dm-progress-head"><span>Tidur Lebih Awal</span><span class="tk-muted">80%</span></span><div class="tk-progress"><div class="tk-progress-bar" style="width: 80%"></div></div></div>
                        <div class="dm-progress-row"><span class="dm-progress-head"><span>Jalan Pagi</span><span class="tk-muted">45%</span></span><div class="tk-progress"><div class="tk-progress-bar" style="width: 45%"></div></div></div>
                        <div class="dm-progress-row" style="margin-bottom: 24px"><span class="dm-progress-head"><span>Fokus Dalam</span><span class="tk-muted">15%</span></span><div class="tk-progress"><div class="tk-progress-bar" style="width: 15%"></div></div></div>
                        <div class="tk-inset dm-rings">
                            <div class="dm-ring-cell"><div class="tk-ring tk-ring-sm" style="--tk-ring-value: 72"><span class="tk-ring-label">72</span></div><p class="tk-caption">Harian</p></div>
                            <div class="dm-ring-cell"><div class="tk-ring tk-ring-sm tk-ring-accent" style="--tk-ring-value: 54"><span class="tk-ring-label">54</span></div><p class="tk-caption">Mingguan</p></div>
                            <div class="dm-ring-cell"><div class="tk-ring tk-ring-sm" style="--tk-ring-value: 91"><span class="tk-ring-label">91</span></div><p class="tk-caption">Kepuasan</p></div>
                        </div>
                    </div>
                </div>
                <div class="tk-card">
                    <div class="tk-card-header"><h3 class="tk-title" style="margin: 0">Aktivitas Terakhir</h3></div>
                    <div class="tk-card-body dm-activity">
                        <div class="dm-activity-item"><span class="tk-icon-tile">${ic('user', 19)}</span><span><strong>Jane Smith</strong> bergabung ke program<br><span class="tk-caption">5 menit lalu</span></span></div>
                        <div class="dm-activity-item"><span class="tk-icon-tile">${ic('check-circle', 19)}</span><span>Laporan Juli disetujui<br><span class="tk-caption">1 jam lalu</span></span></div>
                        <div class="dm-activity-item"><span class="tk-icon-tile tk-icon-tile-neutral">${ic('exclamation-circle', 19)}</span><span>Kuota penyimpanan hampir penuh<br><span class="tk-caption">3 jam lalu</span></span></div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
${CHART_HELPER_SCRIPT}
<script>
${SOFT_FILL}
tkChart('dm-chart-revenue', function (t) {
    return {
        type: 'line',
        data: {
            labels: ['Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu'],
            datasets: [{ label: 'Anggota (ribu)', data: [52, 61, 58, 71, 78, 84], borderColor: t.primary, backgroundColor: suSoft(t.primary, 14), fill: true, tension: 0.4, pointRadius: 0, pointHoverRadius: 5, borderWidth: 3 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: t.border }, border: { display: false } }, x: { grid: { display: false }, border: { display: false } } } }
    };
});
tkChart('dm-chart-traffic', function (t) {
    return {
        type: 'doughnut',
        data: { labels: ['Direct', 'Organik', 'Sosial', 'Referral'], datasets: [{ data: [38, 31, 19, 12], backgroundColor: [t.primary, t.accent, t.info, t.surface2], borderColor: t.surface, borderWidth: 4 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '70%', plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, boxHeight: 10, usePointStyle: true, pointStyle: 'circle', padding: 16 } } } }
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
    const list = items.map(item => `<li>${ic('check-circle', 17)} ${item}</li>`).join('\n                ');
    return `<div class="tk-card lp-plan${featured ? ' lp-plan-featured' : ''}">
            <div class="tk-card-body">
                ${featured ? '<span class="tk-badge tk-badge-success lp-plan-tag">Paling dipilih</span>' : ''}
                <h3 class="tk-h4" style="margin: 0 0 6px">${title}</h3>
                <p class="lp-price">${price}<span class="lp-price-unit">/bulan</span></p>
                <p class="tk-body-sm tk-muted" style="margin: 0 0 24px">${note}</p>
                <ul class="lp-plan-list">
                    ${list}
                </ul>
                <button class="tk-btn ${featured ? 'tk-btn-primary' : 'tk-btn-outline'}" style="width: 100%">Pilih paket ini</button>
            </div>
        </div>`;
}

function feature(iconName: string, title: string, text: string, accent = false): string {
    return `<div class="tk-feature"><span class="tk-feature-icon${accent ? ' tk-icon-tile-accent' : ''}">${ic(iconName, 24)}</span><h3 class="tk-title" style="margin: 0">${title}</h3><p class="tk-body-sm tk-muted" style="margin: 0">${text}</p></div>`;
}

/**
 * Kerangka SEO landing page — bagian kontrak kit (§7): judul berpola "Brand — proposisi nilai",
 * meta description, canonical, Open Graph + Twitter card, dan JSON-LD schema.org. Tipe kontennya
 * `SoftwareApplication` dengan `AggregateRating` dan penawaran yang angkanya sama persis dengan
 * seksi harga di halaman. Domain `https://contoh.id` dan brand `Logo` adalah placeholder yang
 * WAJIB diganti data proyek saat halaman ini disalin.
 */
const LANDING_SEO_HEAD = `<title>Logo — Kebiasaan kecil yang benar-benar bertahan</title>
<meta name="description" content="Aplikasi kebiasaan dan kesejahteraan yang tenang: rencanakan satu langkah kecil, catat tanpa rasa bersalah, dan lihat perkembangannya dalam satu layar.">
<link rel="canonical" href="https://contoh.id/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Logo">
<meta property="og:title" content="Logo — Kebiasaan kecil yang benar-benar bertahan">
<meta property="og:description" content="Aplikasi kebiasaan dan kesejahteraan yang tenang: rencanakan satu langkah kecil, catat tanpa rasa bersalah, dan lihat perkembangannya dalam satu layar.">
<meta property="og:url" content="https://contoh.id/">
<meta property="og:image" content="https://contoh.id/og-image.png">
<meta property="og:locale" content="id_ID">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Logo — Kebiasaan kecil yang benar-benar bertahan">
<meta name="twitter:description" content="Aplikasi kebiasaan dan kesejahteraan yang tenang: rencanakan satu langkah kecil, catat tanpa rasa bersalah, dan lihat perkembangannya dalam satu layar.">
<meta name="twitter:image" content="https://contoh.id/og-image.png">
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://contoh.id/#organization",
            "name": "Logo",
            "url": "https://contoh.id/",
            "logo": "https://contoh.id/logo.png"
        },
        {
            "@type": "WebSite",
            "@id": "https://contoh.id/#website",
            "url": "https://contoh.id/",
            "name": "Logo",
            "inLanguage": "id",
            "publisher": { "@id": "https://contoh.id/#organization" }
        },
        {
            "@type": "WebPage",
            "@id": "https://contoh.id/#webpage",
            "url": "https://contoh.id/",
            "name": "Logo — Kebiasaan kecil yang benar-benar bertahan",
            "description": "Aplikasi kebiasaan dan kesejahteraan yang tenang: rencanakan satu langkah kecil, catat tanpa rasa bersalah, dan lihat perkembangannya dalam satu layar.",
            "inLanguage": "id",
            "isPartOf": { "@id": "https://contoh.id/#website" },
            "about": { "@id": "https://contoh.id/#organization" }
        },
        {
            "@type": "SoftwareApplication",
            "name": "Logo",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web, iOS, Android",
            "url": "https://contoh.id/",
            "publisher": { "@id": "https://contoh.id/#organization" },
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "bestRating": "5", "ratingCount": "1240" },
            "offers": [
                { "@type": "Offer", "name": "Tenang", "price": "0", "priceCurrency": "IDR" },
                { "@type": "Offer", "name": "Bertumbuh", "price": "49000", "priceCurrency": "IDR" },
                { "@type": "Offer", "name": "Bersama", "price": "129000", "priceCurrency": "IDR" }
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
    .lp-skip { position: absolute; left: -9999px; top: 0; z-index: 30; background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); padding: 10px 20px; border-radius: var(--tk-radius-full); text-decoration: none; font-size: var(--tk-text-body-sm); }
    .lp-skip:focus { left: 12px; top: 60px; }
    /* Navbar melayang: pil putih yang duduk di tengah kanvas, tidak menempel ke tepi layar. */
    .lp-header { position: sticky; top: 60px; z-index: 10; max-width: var(--tk-container); margin: 16px auto 0; padding: 0 24px; }
    .ex-embedded .lp-header { top: 12px; }
    main [id] { scroll-margin-top: 150px; }
    .lp-links { display: flex; gap: 4px; align-items: center; }
    .lp-burger { display: none; }
    .lp-section { max-width: var(--tk-container); margin: 0 auto; padding: 88px 24px; }
    .lp-head { max-width: 620px; margin: 0 auto 48px; text-align: center; }
    .lp-head p { margin: 0; }
    .lp-hero { display: grid; grid-template-columns: 1.02fr 0.98fr; gap: 56px; align-items: center; max-width: var(--tk-container); margin: 0 auto; padding: 72px 24px 88px; }
    .lp-hero h1 { font-size: clamp(40px, 5.4vw, 66px); margin: 20px 0 22px; }
    .lp-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); max-width: 46ch; margin: 0 0 32px; }
    .lp-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
    .lp-hero-proof { display: flex; align-items: center; gap: 14px; margin-top: 32px; font-size: var(--tk-text-body-sm); color: var(--tk-color-text-muted); }
    .lp-faces { display: flex; }
    .lp-face { width: 34px; height: 34px; border-radius: var(--tk-radius-full); background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 500; border: 2px solid var(--tk-color-background); }
    .lp-face + .lp-face { margin-left: -12px; }
    /* Kartu tangkapan layar dipeluk pendar hangat — satu-satunya cahaya di halaman ini. */
    .lp-shot { position: relative; }
    .lp-shot img { width: 100%; display: block; border-radius: var(--tk-radius-lg); box-shadow: var(--tk-shadow-lg); }
    .lp-shot-float { position: absolute; left: -22px; bottom: 34px; display: flex; align-items: center; gap: 12px; padding: 14px 20px 14px 14px; background: var(--tk-color-surface); border-radius: var(--tk-radius-lg); box-shadow: var(--tk-shadow-lg); }
    .lp-shot-float p { margin: 0; }
    .lp-proof { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
    .lp-proof-rings { display: flex; gap: 28px; flex-wrap: wrap; }
    .lp-proof-ring { text-align: center; }
    .lp-proof-ring p { margin: 12px 0 0; }
    .lp-chart-box { position: relative; height: 300px; }
    .lp-quote { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .lp-quote-card p { margin: 0 0 18px; }
    .lp-quote-who { display: flex; align-items: center; gap: 12px; }
    .lp-pricing { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: start; }
    .lp-plan-tag { margin-bottom: 14px; }
    /* Paket unggulan dinaikkan sedikit dan bayangannya dilebarkan — di kit ini "menonjol"
       artinya melayang lebih tinggi, bukan berganti warna. */
    .lp-plan-featured { box-shadow: var(--tk-su-lift); transform: translateY(-10px); }
    .lp-price { font-family: var(--tk-font-heading); font-weight: 700; font-size: var(--tk-text-h2); letter-spacing: -0.03em; margin: 0 0 4px; }
    .lp-price-unit { font-family: var(--tk-font-body); font-size: var(--tk-text-body-sm); font-weight: 400; color: var(--tk-color-text-muted); letter-spacing: 0; }
    .lp-plan-list { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 12px; font-size: var(--tk-text-body-sm); }
    .lp-plan-list li { display: flex; align-items: flex-start; gap: 10px; }
    .lp-plan-list iconify-icon { flex: none; margin-top: 3px; color: var(--tk-color-success); }
    .lp-cta-wrap { max-width: var(--tk-container); margin: 0 auto; padding: 0 24px 88px; }
    .lp-footer { background: var(--tk-color-surface); border-radius: var(--tk-radius-lg) var(--tk-radius-lg) 0 0; }
    .lp-footer-inner { max-width: var(--tk-container); margin: 0 auto; padding: 40px 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
    .lp-footer-links { display: flex; gap: 28px; }
    .lp-footer-links a { color: var(--tk-color-text-muted); text-decoration: none; font-size: var(--tk-text-body-sm); }
    .lp-footer-links a:hover { color: var(--tk-color-primary); }
    @media (max-width: 900px) {
        .lp-links { display: none; }
        .lp-burger { display: inline-flex; }
        .lp-section { padding: 56px 20px; }
        .lp-hero { grid-template-columns: 1fr; gap: 40px; padding: 40px 20px 56px; }
        .lp-shot-float { left: 12px; }
        .lp-proof { grid-template-columns: 1fr; gap: 32px; }
        .lp-quote { grid-template-columns: 1fr; }
        .lp-pricing { grid-template-columns: 1fr; }
        .lp-plan-featured { transform: none; }
        .lp-chart-box { height: 240px; }
        .tk-feature-grid { grid-template-columns: 1fr; }
    }
</style>
</head>
<body>
${EX_EMBED_SCRIPT}
${exNav('Soft UI', 'landing', '../', { device: { base: 'landing', active: 'web' } })}
<a class="lp-skip" href="#konten-utama">Langsung ke konten utama</a>
<header class="lp-header">
<nav class="tk-navbar" aria-label="Navigasi utama">
    <span class="tk-navbar-brand">Logo</span>
    <div class="lp-links">
        <a class="tk-navbar-link tk-navbar-link-active" href="#beranda">Beranda</a>
        <a class="tk-navbar-link" href="#fitur">Fitur</a>
        <a class="tk-navbar-link" href="#bukti">Cerita</a>
        <a class="tk-navbar-link" href="#harga">Harga</a>
    </div>
    <button class="tk-btn tk-btn-primary tk-btn-sm">Coba Gratis</button>
    <button class="tk-action-btn lp-burger" aria-label="Menu">${ic('dash-menu', 20)}</button>
</nav>
</header>
<main id="konten-utama">
<section class="lp-hero" id="beranda" aria-labelledby="lp-h-hero">
    <div>
        <span class="tk-badge tk-badge-success">${ic('stars-a', 14)} Versi 3.0 sudah hadir</span>
        <h1 class="tk-display" id="lp-h-hero">Kebiasaan kecil yang benar-benar bertahan.</h1>
        <p class="lp-hero-sub">Rencanakan satu langkah kecil, catat tanpa rasa bersalah, dan lihat perkembangannya dalam satu layar yang tidak pernah memarahi Anda.</p>
        <div class="lp-hero-actions">
            <button class="tk-btn tk-btn-primary tk-btn-lg">Mulai Gratis ${ic('arrow-right', 17)}</button>
            <button class="tk-btn tk-btn-outline tk-btn-lg">Lihat Cara Kerjanya</button>
        </div>
        <div class="lp-hero-proof">
            <span class="lp-faces"><span class="lp-face">AR</span><span class="lp-face">SM</span><span class="lp-face">BP</span><span class="lp-face">NK</span></span>
            <span>Dipakai 12.000+ orang &middot; 4,8 dari 5</span>
        </div>
    </div>
    <div class="lp-shot tk-halo">
        <img src="https://placehold.co/1000x780/FFFFFF/6F6859?text=Tangkapan+Layar" alt="Tangkapan layar aplikasi menampilkan ringkasan kebiasaan harian" data-tk-asset="tangkapan-layar">
        <div class="lp-shot-float">
            <span class="tk-icon-tile">${ic('check-circle', 22)}</span>
            <div><p class="tk-title" style="font-size: 15px">7 hari berturut</p><p class="tk-caption">Rekor terbaru Anda</p></div>
        </div>
    </div>
</section>
<section class="lp-section" id="fitur" aria-labelledby="lp-h-fitur" style="padding-top: 0">
    <div class="lp-head">
        <h2 class="tk-h2" id="lp-h-fitur">Cukup empat hal, dikerjakan pelan-pelan</h2>
        <p class="tk-body-lg tk-muted">Tidak ada papan peringkat, tidak ada beruntun yang hangus. Hanya alat yang membantu Anda kembali.</p>
    </div>
    <div class="tk-feature-grid">
        ${feature('goals', 'Satu target sehari', 'Pilih satu hal kecil untuk hari ini. Sisanya boleh menunggu besok.')}
        ${feature('water-drop', 'Catat dalam sedetik', 'Satu ketukan sudah cukup. Tidak ada formulir yang harus diisi.', true)}
        ${feature('chart-up', 'Perkembangan jujur', 'Grafik menunjukkan arah, bukan menghakimi hari yang terlewat.')}
        ${feature('moon', 'Pengingat yang sopan', 'Muncul pada jam yang Anda pilih, lalu diam kalau Anda sedang sibuk.', true)}
        ${feature('users', 'Lingkaran kecil', 'Bagikan perkembangan hanya kepada orang yang Anda percaya.')}
        ${feature('shield-check', 'Data milik Anda', 'Terenkripsi, bisa diekspor, dan bisa dihapus kapan pun tanpa bertanya.', true)}
    </div>
</section>
<section class="lp-section" id="bukti" aria-labelledby="lp-h-bukti" style="padding-top: 0">
    <div class="lp-proof">
        <div>
            <h2 class="tk-h2" id="lp-h-bukti">Yang berubah setelah tiga bulan</h2>
            <p class="tk-body-lg tk-muted">Angka di bawah datang dari 1.240 pengguna yang memakai aplikasi ini setidaknya dua belas minggu berturut-turut.</p>
            <div class="lp-proof-rings">
                <div class="lp-proof-ring"><div class="tk-ring" style="--tk-ring-value: 78"><span class="tk-ring-label">78%</span></div><p class="tk-body-sm tk-muted">Bertahan<br>tiga bulan</p></div>
                <div class="lp-proof-ring"><div class="tk-ring tk-ring-accent" style="--tk-ring-value: 64"><span class="tk-ring-label">64%</span></div><p class="tk-body-sm tk-muted">Tidur lebih<br>teratur</p></div>
                <div class="lp-proof-ring"><div class="tk-ring" style="--tk-ring-value: 91"><span class="tk-ring-label">4,8</span></div><p class="tk-body-sm tk-muted">Rata-rata<br>penilaian</p></div>
            </div>
        </div>
        <div class="tk-card"><div class="tk-card-body">
            <p class="tk-title" style="margin: 0 0 6px">Kebiasaan tercatat per minggu</p>
            <p class="tk-body-sm tk-muted" style="margin: 0 0 20px">Rata-rata seluruh pengguna aktif</p>
            <div class="lp-chart-box"><canvas id="lp-chart-growth"></canvas></div>
        </div></div>
    </div>
</section>
<section class="lp-section" aria-labelledby="lp-h-cerita" style="padding-top: 0">
    <div class="lp-head">
        <h2 class="tk-h2" id="lp-h-cerita">Kata mereka</h2>
        <p class="tk-body-lg tk-muted">Tiga cerita dari orang yang sebelumnya berhenti di aplikasi kebiasaan lain.</p>
    </div>
    <div class="lp-quote">
        <div class="tk-card lp-quote-card"><div class="tk-card-body">
            <p class="tk-body">&ldquo;Baru kali ini saya tidak merasa gagal saat melewatkan satu hari. Itu saja yang bikin saya bertahan.&rdquo;</p>
            <div class="lp-quote-who"><span class="lp-face">AR</span><span><span class="tk-body-sm" style="font-weight: 500">Andi Rahman</span><br><span class="tk-caption">Guru, Bandung</span></span></div>
        </div></div>
        <div class="tk-card lp-quote-card"><div class="tk-card-body">
            <p class="tk-body">&ldquo;Antarmukanya tenang sekali. Membukanya tidak menambah beban seperti aplikasi lain.&rdquo;</p>
            <div class="lp-quote-who"><span class="lp-face">SM</span><span><span class="tk-body-sm" style="font-weight: 500">Sari Melati</span><br><span class="tk-caption">Perawat, Surabaya</span></span></div>
        </div></div>
        <div class="tk-card lp-quote-card"><div class="tk-card-body">
            <p class="tk-body">&ldquo;Saya pakai untuk tim kecil saya. Semua orang paham cara memakainya tanpa dijelaskan.&rdquo;</p>
            <div class="lp-quote-who"><span class="lp-face">BP</span><span><span class="tk-body-sm" style="font-weight: 500">Budi Prakoso</span><br><span class="tk-caption">Pemilik usaha, Yogyakarta</span></span></div>
        </div></div>
    </div>
</section>
<section class="lp-section" id="harga" aria-labelledby="lp-h-harga" style="padding-top: 0">
    <div class="lp-head">
        <h2 class="tk-h2" id="lp-h-harga">Harga yang tidak bikin cemas</h2>
        <p class="tk-body-lg tk-muted">Mulai gratis selamanya. Naik paket hanya kalau memang butuh, dan bisa turun kapan saja.</p>
    </div>
    <div class="lp-pricing">
        ${plan('Tenang', 'Gratis', 'Untuk satu orang yang baru mulai.', ['Tiga kebiasaan aktif', 'Riwayat 30 hari', 'Pengingat harian'], false)}
        ${plan('Bertumbuh', 'Rp49rb', 'Untuk yang sudah menemukan ritmenya.', ['Kebiasaan tanpa batas', 'Riwayat penuh', 'Catatan harian', 'Ekspor data'], true)}
        ${plan('Bersama', 'Rp129rb', 'Untuk keluarga atau tim kecil.', ['Semua di paket Bertumbuh', 'Lima anggota', 'Lingkaran bersama', 'Dukungan prioritas'], false)}
    </div>
</section>
<div class="lp-cta-wrap" id="cta">
    <section class="tk-cta" aria-labelledby="lp-h-cta">
        <div><h2 class="tk-h3" id="lp-h-cta">Mulai dari satu hal kecil hari ini</h2><p class="tk-muted" style="margin: 8px 0 0">Gratis selamanya untuk tiga kebiasaan pertama. Tanpa kartu kredit.</p></div>
        <button class="tk-btn tk-btn-primary tk-btn-lg">Buat Akun ${ic('arrow-right', 17)}</button>
    </section>
</div>
</main>
<footer class="lp-footer">
    <div class="lp-footer-inner">
        <span class="tk-caption">&copy; 2026 Logo. Seluruh hak cipta.</span>
        <div class="lp-footer-links">
            <a href="#">Privasi</a>
            <a href="#">Ketentuan</a>
            <a href="#">Kontak</a>
        </div>
    </div>
</footer>
${CHART_HELPER_SCRIPT}
<script>
${SOFT_FILL}
tkChart('lp-chart-growth', function (t) {
    return {
        type: 'bar',
        data: {
            labels: ['Minggu 1', 'Minggu 4', 'Minggu 8', 'Minggu 12'],
            datasets: [{ label: 'Kebiasaan tercatat', data: [9, 16, 21, 26], backgroundColor: [suSoft(t.primary, 28), suSoft(t.primary, 48), suSoft(t.primary, 72), t.primary], borderRadius: 12, maxBarThickness: 56 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: t.border }, border: { display: false } }, x: { grid: { display: false }, border: { display: false } } } }
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
    .au-wrap { min-height: calc(100vh - 48px); box-sizing: border-box; display: flex; align-items: center; justify-content: center; padding: 48px 16px; background: var(--tk-color-background); }
    .ex-embedded .au-wrap { min-height: 100vh; }
    .au-card { width: 100%; max-width: 424px; }
    .au-card:hover { transform: none; }
    .au-brand { display: flex; align-items: center; gap: 12px; font-family: var(--tk-font-heading); font-weight: 700; font-size: 19px; letter-spacing: -0.02em; margin-bottom: 28px; }
    .au-title { margin: 0 0 6px; }
    .au-sub { margin: 0 0 28px; }
    .au-full { width: 100%; box-sizing: border-box; }
    .au-divider { display: flex; align-items: center; gap: 14px; margin: 22px 0; color: var(--tk-color-text-muted); font-size: var(--tk-text-caption); }
    .au-divider::before, .au-divider::after { content: ''; height: 1px; flex: 1; background: var(--tk-color-border); }
    .au-card .tk-field { margin-bottom: 18px; }
    .au-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 4px 0 24px; font-size: var(--tk-text-body-sm); }
    .au-alt { margin: 24px 0 0; text-align: center; }`;

function authPage(base: 'login' | 'register', title: string, body: string): string {
    return `<!DOCTYPE html>
<html lang="id">
<head>
${HEAD_COMMON}
<title>Soft UI — Contoh ${title}</title>
<style>
    ${EX_NAV_CSS}
${AUTH_CSS}
</style>
</head>
<body>
${EX_EMBED_SCRIPT}
${exNav('Soft UI', 'components', '../', { device: { base, active: 'web' } })}
<div class="au-wrap">
    <div class="tk-card au-card">
        <div class="tk-card-body" style="padding: 40px">
            <div class="au-brand"><span class="tk-icon-tile">${ic('stars-a', 22)}</span> Logo</div>
${body}
        </div>
    </div>
</div>
</body>
</html>
`;
}

/** Isi kartu login; dipakai halaman contoh dan seksi Login & Register di showcase. */
export const AUTH_LOGIN_FORM = `            <h1 class="tk-h4 au-title">Masuk ke akun Anda</h1>
            <p class="tk-body-sm tk-muted au-sub">Selamat datang kembali. Silakan masuk untuk melanjutkan.</p>
            <button class="tk-btn tk-btn-outline au-full" type="button"><iconify-icon icon="logos:google-icon" width="16" height="16"></iconify-icon> Lanjut dengan Google</button>
            <div class="au-divider">atau dengan email</div>
            <div class="tk-field">
                <label class="tk-label">Email</label>
                <input class="tk-input" type="email" placeholder="nama@contoh.com">
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
            <p class="tk-body-sm tk-muted au-alt">Belum punya akun? <a class="tk-link" href="register.html">Daftar gratis</a></p>`;

const LOGIN = authPage('login', 'Login', AUTH_LOGIN_FORM);

/** Isi kartu register; dipakai halaman contoh dan seksi Login & Register di showcase. */
export const AUTH_REGISTER_FORM = `            <h1 class="tk-h4 au-title">Buat akun baru</h1>
            <p class="tk-body-sm tk-muted au-sub">Gratis selamanya untuk tiga kebiasaan pertama.</p>
            <button class="tk-btn tk-btn-outline au-full" type="button"><iconify-icon icon="logos:google-icon" width="16" height="16"></iconify-icon> Daftar dengan Google</button>
            <div class="au-divider">atau dengan email</div>
            <div class="tk-field">
                <label class="tk-label">Nama Lengkap</label>
                <input class="tk-input" type="text" placeholder="Jane Doe">
            </div>
            <div class="tk-field">
                <label class="tk-label">Email</label>
                <input class="tk-input" type="email" placeholder="nama@contoh.com">
            </div>
            <div class="tk-field">
                <label class="tk-label">Kata Sandi</label>
                <input class="tk-input" type="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;">
                <span class="tk-help">Minimal 8 karakter dengan satu angka.</span>
            </div>
            <div class="au-row">
                <label class="tk-check"><input class="tk-checkbox" type="checkbox"> Saya setuju dengan <a class="tk-link" href="#">Ketentuan Layanan</a></label>
            </div>
            <button class="tk-btn tk-btn-primary au-full" type="button">Buat Akun</button>
            <p class="tk-body-sm tk-muted au-alt">Sudah punya akun? <a class="tk-link" href="login.html">Masuk</a></p>`;

const REGISTER = authPage('register', 'Register', AUTH_REGISTER_FORM);

/* ================================================================ */
/* Bingkai ponsel                                                    */
/* ================================================================ */

/**
 * Versi mobile = halaman yang sama dirender di iframe selebar ponsel, sehingga media query kit
 * benar-benar teruji — bukan tangkapan layar statis.
 */
function deviceFrame(title: string, view: 'dashboard' | 'landing' | 'components', base: string): string {
    return `<!DOCTYPE html>
<html lang="id">
<head>
${HEAD_COMMON}
<title>Soft UI — ${title} (Ponsel)</title>
<style>
    ${EX_NAV_CSS}
    body { min-height: 100vh; margin: 0; box-sizing: border-box; }
    .ex-stage { display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 20px; }
    .ex-device { width: 412px; max-width: 100%; height: 780px; max-height: calc(100vh - 150px); min-height: 420px; border: 12px solid #24231F; border-radius: 46px; background: #24231F; box-shadow: var(--tk-shadow-lg); overflow: hidden; flex: none; }
    .ex-device iframe { width: 100%; height: 100%; border: none; border-radius: 34px; background: var(--tk-color-background); }
</style>
</head>
<body>
${exNav('Soft UI', view, '../', { device: { base, active: 'mobile' }, extraThemeJs: FRAME_THEME_EXTRA_JS })}
<div class="ex-stage">
    <div class="ex-device"><iframe src="${base}.html?tk-embed" title="${title} versi ponsel"></iframe></div>
    <p class="tk-caption">${title} &mdash; lebar 388px, media query kit aktif seperti di ponsel sungguhan.</p>
</div>
</body>
</html>
`;
}

export const SOFT_UI_EXAMPLES: Record<string, string> = {
    'examples/dashboard.html': DASHBOARD,
    'examples/dashboard-mobile.html': deviceFrame('Admin Dashboard', 'dashboard', 'dashboard'),
    'examples/landing.html': LANDING,
    'examples/landing-mobile.html': deviceFrame('Landing Page', 'landing', 'landing'),
    'examples/login.html': LOGIN,
    'examples/login-mobile.html': deviceFrame('Login', 'components', 'login'),
    'examples/register.html': REGISTER,
    'examples/register-mobile.html': deviceFrame('Register', 'components', 'register')
};
