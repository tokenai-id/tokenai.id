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
 * Halaman contoh (`examples/`) kit Anti-Design: admin dashboard dan landing page utuh yang
 * dirakit murni dari komponen kontrak, responsif untuk web dan ponsel. Dua peran sekaligus:
 * bukti visual kit di halaman nyata (dibuka dari showcase) dan kerangka awal yang boleh disalin
 * agen saat pengguna meminta halaman sejenis — lebih murah daripada merakit dari nol.
 *
 * Dashboard sengaja tetap yang paling tertib di antara ketiganya: sebuah alat kerja boleh
 * berkarakter, tapi tabel yang miring tidak bisa dibaca. Kekacauan penuh disimpan untuk landing.
 *
 * Kit ini satu-tema (terang bawaan), jadi semua halaman memanggil exNav dengan
 * `themeToggle: false`.
 *
 * Kelas `dm-*` / `lp-*` / `ex-*` adalah perancah halaman contoh, bukan bagian kontrak kit.
 */

// Perancah pratinjau kit-agnostik, dipakai bersama lintas kit; rumahnya masih di kit pertama.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_EMBED_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

function ic(name: string, size = 18): string {
    return `<iconify-icon icon="solar:${name}" width="${size}" height="${size}"></iconify-icon>`;
}

const HEAD_COMMON = `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,700;1,400&family=Comic+Neue:wght@400;700&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Tinos:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../styles.css">
<script src="https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"></script>`;

/* ================================================================ */
/* Admin dashboard                                                   */
/* ================================================================ */

const DASHBOARD = `<!DOCTYPE html>
<html lang="id">
<head>
${HEAD_COMMON}
<script src="${CHARTJS_SCRIPT}"></script>
<title>Anti-Design — Contoh Admin Dashboard</title>
<style>
    /* Perancah halaman contoh (dm-*): bukan bagian kontrak kit. */
    ${EX_NAV_CSS}
    .dm-shell { display: flex; min-height: calc(100vh - 48px); }
    .dm-sidebar { position: sticky; top: 48px; height: calc(100vh - 48px); box-sizing: border-box; }
    .dm-sidebar-brand { display: flex; align-items: center; gap: 9px; font-family: var(--tk-font-heading); font-weight: 700; font-size: 24px; letter-spacing: -0.04em; text-transform: uppercase; padding: 8px 0 21px 6px; white-space: nowrap; transform: rotate(-1.8deg); }
    .dm-sidebar-brand iconify-icon { color: var(--tk-color-primary); flex: none; }
    .tk-sidebar-collapsed .dm-sidebar-brand { justify-content: center; padding: 8px 0 21px; }
    .dm-sidebar-foot { margin-top: auto; display: block; padding-top: 9px; border-top: 3px dashed var(--tk-color-border); }
    .dm-foot-btn { display: flex; align-items: center; gap: 9px; width: 100%; padding: 7px; border: 3px solid transparent; border-radius: var(--tk-radius-sm); background: transparent; font-family: inherit; color: var(--tk-color-text); text-align: left; cursor: pointer; }
    .dm-foot-btn:hover { background: var(--tk-color-accent); border-color: var(--tk-color-border); }
    .dm-foot-chevron { margin-left: auto; color: var(--tk-color-text-muted); }
    .dm-sidebar-foot .tk-dropdown-menu { left: 0; right: 0; min-width: 0; }
    .tk-sidebar-collapsed .dm-foot-btn { justify-content: center; padding: 7px 0; }
    .dm-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
    .dm-topbar { display: flex; align-items: center; gap: 11px; padding: 11px 26px 13px 15px; background: var(--tk-color-surface); border-bottom: 5px solid var(--tk-color-border); position: sticky; top: 48px; z-index: 10; }
    .ex-embedded .dm-shell { min-height: 100vh; }
    .ex-embedded .dm-sidebar { top: 0; height: 100vh; }
    .ex-embedded .dm-topbar { top: 0; }
    .dm-topbar .tk-search { width: 280px; }
    .dm-topbar-spacer { margin-left: auto; display: flex; align-items: center; gap: 9px; }
    .dm-avatar { width: 36px; height: 34px; border-radius: var(--tk-radius-sm); border: 3px solid var(--tk-color-border); background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); display: inline-flex; align-items: center; justify-content: center; font-family: var(--tk-font-mono); font-size: 13px; font-weight: 700; flex: none; transform: rotate(-4deg); }
    .dm-content { padding: 29px 26px 53px 15px; display: flex; flex-direction: column; gap: 26px; }
    .dm-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; }
    .dm-grid2 { display: grid; grid-template-columns: 3fr 2fr; gap: 26px; align-items: start; }
    .dm-chart-box { position: relative; height: 260px; }
    .dm-table-wrap { overflow-x: auto; }
    /* Kartu di dashboard dijinakkan: sebuah alat kerja boleh berkarakter, tapi
       tabel yang miring tidak bisa dibaca. */
    .dm-content .tk-card, .dm-content .tk-card:hover { transform: none; }
    .dm-content .tk-card-header, .dm-content .tk-card-body, .dm-content .tk-card-footer { text-align: left; }
    .dm-progress-row { margin-bottom: 19px; font-size: var(--tk-text-body-sm); }
    .dm-progress-row .tk-caption { display: flex; justify-content: space-between; margin-bottom: 7px; }
    .dm-activity { display: flex; flex-direction: column; gap: 15px; }
    .dm-activity-item { display: flex; gap: 11px; align-items: flex-start; font-size: var(--tk-text-body-sm); }
    .dm-activity-item iconify-icon { color: var(--tk-color-secondary); margin-top: 3px; flex: none; }
    @media (max-width: 960px) {
        .dm-sidebar { display: none; }
        .dm-stats { grid-template-columns: repeat(2, 1fr); }
        .dm-grid2 { grid-template-columns: 1fr; }
    }
    /* Di layar sempit sidebar jadi laci: tombol burger memunculkannya menumpuk konten. */
    .dm-sidebar.dm-sidebar-open { display: flex; position: fixed; top: 48px; left: 0; bottom: 0; height: auto; z-index: 90; box-shadow: var(--tk-shadow); }
    .ex-embedded .dm-sidebar.dm-sidebar-open { top: 0; }
    @media (max-width: 700px) {
        .dm-crumb { display: none; }
        .dm-topbar .tk-search { width: auto; flex: 1; min-width: 0; }
    }
    @media (max-width: 600px) {
        .dm-content { padding: 19px 15px 38px; gap: 15px; }
        .dm-topbar { padding: 9px 15px 11px; }
        .dm-stats { grid-template-columns: 1fr; }
        .dm-chart-box { height: 220px; }
    }
</style>
</head>
<body>
${EX_EMBED_SCRIPT}
${exNav('Anti-Design', 'dashboard', '../', { device: { base: 'dashboard', active: 'web' }, themeToggle: false })}
<div class="dm-shell">
    <aside class="tk-sidebar dm-sidebar">
        <span class="dm-sidebar-brand">${ic('widget-broken', 22)}<span class="tk-sidebar-label">Logo</span></span>
        <span class="tk-sidebar-group">umum</span>
        <a class="tk-sidebar-item tk-sidebar-item-active" href="#">${ic('home-broken')} <span class="tk-sidebar-label">Dashboard</span></a>
        <a class="tk-sidebar-item" href="#">${ic('gallery-broken')} <span class="tk-sidebar-label">Proyek</span></a>
        <a class="tk-sidebar-item" href="#">${ic('calendar-broken')} <span class="tk-sidebar-label">Jadwal</span></a>
        <span class="tk-sidebar-group">analitik</span>
        <a class="tk-sidebar-item" href="#">${ic('chart-2-broken')} <span class="tk-sidebar-label">Laporan</span></a>
        <a class="tk-sidebar-item" href="#">${ic('users-group-rounded-broken')} <span class="tk-sidebar-label">Pengguna</span></a>
        <span class="tk-sidebar-group">lainnya</span>
        <a class="tk-sidebar-item" href="#">${ic('settings-broken')} <span class="tk-sidebar-label">Pengaturan</span></a>
        <a class="tk-sidebar-item" href="#">${ic('question-circle-broken')} <span class="tk-sidebar-label">Bantuan</span></a>
        <div class="tk-dropdown dm-sidebar-foot">
            <button class="dm-foot-btn" type="button" aria-label="Menu profil">
                <span class="dm-avatar">JD</span>
                <span class="tk-sidebar-label" style="min-width: 0"><span class="tk-body-sm" style="display: block; font-weight: 700">Jane Doe</span><span class="tk-caption">jane@contoh.com</span></span>
                <span class="dm-foot-chevron tk-sidebar-label">${ic('alt-arrow-down-broken', 15)}</span>
            </button>
            <div class="tk-dropdown-menu tk-dropdown-menu-up">
                <button class="tk-dropdown-item" type="button">${ic('user-broken', 16)} Profil</button>
                <button class="tk-dropdown-item" type="button">${ic('settings-broken', 16)} Pengaturan</button>
                <hr class="tk-dropdown-divider">
                <button class="tk-dropdown-item tk-dropdown-item-danger" type="button">${ic('logout-broken', 16)} Keluar</button>
            </div>
        </div>
    </aside>
    <div class="dm-main">
        <header class="dm-topbar">
            <button class="tk-action-btn" aria-label="Buka/tutup sidebar" onclick="
                var sb = document.querySelector('.dm-sidebar');
                if (window.matchMedia('(max-width: 960px)').matches) { sb.classList.toggle('dm-sidebar-open'); }
                else { sb.classList.toggle('tk-sidebar-collapsed'); }
            ">${ic('hamburger-menu-broken', 20)}</button>
            <nav class="tk-breadcrumb dm-crumb">
                <a href="#">Beranda</a>
                <span class="tk-breadcrumb-sep">${ic('alt-arrow-right-broken', 13)}</span>
                <a href="#">Analitik</a>
                <span class="tk-breadcrumb-sep">${ic('alt-arrow-right-broken', 13)}</span>
                <span class="tk-breadcrumb-current">Dashboard</span>
            </nav>
            <div class="dm-topbar-spacer">
                <div class="tk-search">
                    <span class="tk-search-icon">${ic('magnifier-broken', 16)}</span>
                    <input class="tk-input" type="search" placeholder="Cari apa saja...">
                    <kbd class="tk-search-kbd">Ctrl K</kbd>
                </div>
                <button class="tk-action-btn" aria-label="Notifikasi">${ic('bell-broken')}</button>
            </div>
        </header>
        <main class="dm-content">
            <div style="display: flex; align-items: flex-end; justify-content: space-between; gap: 15px; flex-wrap: wrap">
                <div>
                    <p class="tk-caption tk-wrong">ringkasan hari ini</p>
                    <h2 class="tk-h2" style="margin: 6px 0 0">Halo, Jane</h2>
                </div>
                <span class="tk-badge tk-badge-info">Data 12 menit lalu</span>
            </div>
            <div class="dm-stats">
                <div class="tk-card tk-card-stat"><div class="tk-card-body"><p class="tk-caption">Total Pengguna</p><p class="tk-stat-value" style="margin: 5px 0">12.540</p><span class="tk-stat-trend-up">+12,5% dari bulan lalu</span></div></div>
                <div class="tk-card tk-card-stat"><div class="tk-card-body"><p class="tk-caption">Pendapatan</p><p class="tk-stat-value" style="margin: 5px 0">Rp84,2 jt</p><span class="tk-stat-trend-up">+8,1% dari bulan lalu</span></div></div>
                <div class="tk-card tk-card-stat"><div class="tk-card-body"><p class="tk-caption">Pesanan</p><p class="tk-stat-value" style="margin: 5px 0">1.203</p><span class="tk-stat-trend-down">-2,4% dari bulan lalu</span></div></div>
                <div class="tk-card tk-card-stat"><span class="tk-sticker">baru!</span><div class="tk-card-body"><p class="tk-caption">Konversi</p><p class="tk-stat-value" style="margin: 5px 0">3,6%</p><span class="tk-stat-trend-up">+0,8% dari bulan lalu</span></div></div>
            </div>
            <div class="dm-grid2">
                <div class="tk-card">
                    <div class="tk-card-header" style="display: flex; align-items: center; justify-content: space-between"><h3 class="tk-h4" style="margin: 0">Pendapatan</h3><span class="tk-caption">6 bulan terakhir</span></div>
                    <div class="tk-card-body"><div class="dm-chart-box"><canvas id="dm-chart-revenue"></canvas></div></div>
                </div>
                <div class="tk-card">
                    <div class="tk-card-header"><h3 class="tk-h4" style="margin: 0">Sumber Trafik</h3></div>
                    <div class="tk-card-body"><div class="dm-chart-box"><canvas id="dm-chart-traffic"></canvas></div></div>
                </div>
            </div>
            <div class="tk-filter-bar">
                <div class="tk-search">
                    <span class="tk-search-icon">${ic('magnifier-broken', 16)}</span>
                    <input class="tk-input" type="search" placeholder="Cari nama atau email...">
                </div>
                <div class="tk-select">
                    <button class="tk-select-trigger" type="button">Semua status ${ic('alt-arrow-down-broken', 15)}</button>
                    <div class="tk-select-menu">
                        <button class="tk-option tk-option-selected" type="button">Semua status <span class="tk-option-check">${ic('check-read-broken', 15)}</span></button>
                        <button class="tk-option" type="button">Aktif</button>
                        <button class="tk-option" type="button">Nonaktif</button>
                    </div>
                </div>
                <button class="tk-btn tk-btn-outline">${ic('filter-broken', 16)} Filter</button>
            </div>
            <div class="tk-card">
                <div class="tk-card-header" style="display: flex; align-items: center; justify-content: space-between"><h3 class="tk-h4" style="margin: 0">Pengguna Terbaru</h3><button class="tk-btn tk-btn-primary tk-btn-sm">${ic('add-circle-broken', 14)} Tambah</button></div>
                <div class="tk-card-body dm-table-wrap">
                    <table class="tk-table">
                        <thead><tr><th>nama</th><th>email</th><th>peran</th><th>status</th><th class="tk-table-actions">aksi</th></tr></thead>
                        <tbody>
                            <tr><td>Jane Smith</td><td>jane@contoh.com</td><td>Admin</td><td><span class="tk-badge tk-badge-success">Aktif</span></td><td class="tk-table-actions"><button class="tk-action-btn" aria-label="Lihat">${ic('eye-broken', 16)}</button><button class="tk-action-btn" aria-label="Edit">${ic('pen-broken', 16)}</button><button class="tk-action-btn tk-action-btn-danger" aria-label="Hapus">${ic('trash-bin-trash-broken', 16)}</button></td></tr>
                            <tr><td>John Doe</td><td>john@contoh.com</td><td>Editor</td><td><span class="tk-badge tk-badge-warning">Menunggu</span></td><td class="tk-table-actions"><button class="tk-action-btn" aria-label="Lihat">${ic('eye-broken', 16)}</button><button class="tk-action-btn" aria-label="Edit">${ic('pen-broken', 16)}</button><button class="tk-action-btn tk-action-btn-danger" aria-label="Hapus">${ic('trash-bin-trash-broken', 16)}</button></td></tr>
                            <tr><td>Maya Putri</td><td>maya@contoh.com</td><td>Kontributor</td><td><span class="tk-badge tk-badge-danger">Nonaktif</span></td><td class="tk-table-actions"><div class="tk-dropdown"><button class="tk-action-btn" aria-label="Menu aksi">${ic('menu-dots-broken', 16)}</button><div class="tk-dropdown-menu tk-dropdown-menu-right"><button class="tk-dropdown-item">${ic('eye-broken', 16)} Lihat detail</button><button class="tk-dropdown-item">${ic('pen-broken', 16)} Edit</button><hr class="tk-dropdown-divider"><button class="tk-dropdown-item tk-dropdown-item-danger">${ic('trash-bin-trash-broken', 16)} Hapus</button></div></div></td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="tk-card-footer" style="justify-content: space-between; align-items: center"><span class="tk-caption">Menampilkan 3 dari 128 pengguna</span><nav class="tk-pagination"><button class="tk-page">&lsaquo;</button><button class="tk-page tk-page-active">1</button><button class="tk-page">2</button><button class="tk-page">3</button><button class="tk-page">&rsaquo;</button></nav></div>
            </div>
            <div class="dm-grid2">
                <div class="tk-card">
                    <div class="tk-card-header"><h3 class="tk-h4" style="margin: 0">Target Kuartal</h3></div>
                    <div class="tk-card-body">
                        <div class="dm-progress-row"><span class="tk-caption"><span>Akuisisi pengguna</span><span>80%</span></span><div class="tk-progress"><div class="tk-progress-bar" style="width: 80%"></div></div></div>
                        <div class="dm-progress-row"><span class="tk-caption"><span>Pendapatan</span><span>45%</span></span><div class="tk-progress"><div class="tk-progress-bar" style="width: 45%"></div></div></div>
                        <div class="dm-progress-row" style="margin-bottom: 0"><span class="tk-caption"><span>Retensi</span><span>15%</span></span><div class="tk-progress"><div class="tk-progress-bar" style="width: 15%"></div></div></div>
                    </div>
                </div>
                <div class="tk-card">
                    <div class="tk-card-header"><h3 class="tk-h4" style="margin: 0">Aktivitas Terakhir</h3></div>
                    <div class="tk-card-body dm-activity">
                        <div class="dm-activity-item">${ic('user-broken', 16)}<span><strong>Jane Smith</strong> bergabung sebagai admin &middot; <span class="tk-caption">5 menit lalu</span></span></div>
                        <div class="dm-activity-item">${ic('check-circle-broken', 16)}<span>Laporan Juli disetujui &middot; <span class="tk-caption">1 jam lalu</span></span></div>
                        <div class="dm-activity-item">${ic('danger-triangle-broken', 16)}<span>Kuota penyimpanan hampir penuh &middot; <span class="tk-caption">3 jam lalu</span></span></div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
${CHART_HELPER_SCRIPT}
<script>
tkChart('dm-chart-revenue', function (t) {
    return {
        type: 'line',
        data: {
            labels: ['Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu'],
            datasets: [{ label: 'Pendapatan (jt)', data: [52, 61, 58, 71, 78, 84], borderColor: t.primary, backgroundColor: t.accent + '55', fill: true, tension: 0, stepped: true, pointRadius: 5, pointStyle: 'rectRot', pointBackgroundColor: t.secondary, pointBorderColor: t.text, borderWidth: 4 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('dm-chart-traffic', function (t) {
    return {
        type: 'doughnut',
        data: { labels: ['Organik', 'Langsung', 'Sosial', 'Iklan'], datasets: [{ data: [42, 27, 19, 12], backgroundColor: [t.primary, t.accent, t.secondary, t.warning], borderColor: t.text, borderWidth: 3 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '46%', plugins: { legend: { position: 'bottom' } } }
    };
});
</script>
</body>
</html>
`;

/* ================================================================ */
/* Landing page                                                      */
/* ================================================================ */

function plan(title: string, price: string, items: string[], featured: boolean): string {
    const list = items.map(item => `<li>${ic('check-read-broken', 15)} ${item}</li>`).join('\n                ');
    return `<div class="tk-card lp-plan${featured ? ' lp-plan-featured' : ''}">
        ${featured ? '<span class="tk-sticker">ambil ini</span>' : ''}
        <div class="tk-card-body">
            <h3 class="tk-h3" style="margin: 0 0 4px">${title}</h3>
            <p class="lp-price">${price}<span class="tk-caption">/bulan</span></p>
            <ul class="lp-plan-list">
                ${list}
            </ul>
            <button class="tk-btn ${featured ? 'tk-btn-primary' : 'tk-btn-outline'}" style="width: 100%">Pilih ${title}</button>
        </div>
    </div>`;
}

function feature(iconName: string, title: string, text: string): string {
    return `<div class="tk-feature"><span class="tk-feature-icon">${ic(iconName, 24)}</span><h4 class="tk-title" style="margin: 4px 0 0">${title}</h4><p class="tk-body-sm tk-muted" style="margin: 0">${text}</p></div>`;
}

/**
 * Kerangka SEO landing page — bagian kontrak kit (§7): judul berpola "Brand — proposisi nilai",
 * meta description, canonical, Open Graph + Twitter card, dan JSON-LD schema.org
 * (Organization/WebSite/WebPage + SoftwareApplication dengan penawaran harga yang sama dengan
 * seksi harga di halaman). Domain `https://contoh.id` dan brand `Logo` adalah placeholder yang
 * WAJIB diganti data proyek saat halaman ini disalin.
 */
const LANDING_SEO_HEAD = `<title>Logo — Bikin situs yang tidak mirip situs siapa pun</title>
<meta name="description" content="Rakit halaman yang berani terlihat berbeda: layout yang menolak rapi, warna yang berani bertabrakan, dan hasil yang diingat orang. Mulai gratis, tanpa kartu kredit.">
<link rel="canonical" href="https://contoh.id/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Logo">
<meta property="og:title" content="Logo — Bikin situs yang tidak mirip situs siapa pun">
<meta property="og:description" content="Rakit halaman yang berani terlihat berbeda: layout yang menolak rapi, warna yang berani bertabrakan, dan hasil yang diingat orang. Mulai gratis, tanpa kartu kredit.">
<meta property="og:url" content="https://contoh.id/">
<meta property="og:image" content="https://contoh.id/og-image.png">
<meta property="og:locale" content="id_ID">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Logo — Bikin situs yang tidak mirip situs siapa pun">
<meta name="twitter:description" content="Rakit halaman yang berani terlihat berbeda: layout yang menolak rapi, warna yang berani bertabrakan, dan hasil yang diingat orang. Mulai gratis, tanpa kartu kredit.">
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
            "name": "Logo — Bikin situs yang tidak mirip situs siapa pun",
            "description": "Rakit halaman yang berani terlihat berbeda: layout yang menolak rapi, warna yang berani bertabrakan, dan hasil yang diingat orang. Mulai gratis, tanpa kartu kredit.",
            "inLanguage": "id",
            "isPartOf": { "@id": "https://contoh.id/#website" },
            "about": { "@id": "https://contoh.id/#organization" }
        },
        {
            "@type": "SoftwareApplication",
            "name": "Logo",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "url": "https://contoh.id/",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "bestRating": "5", "ratingCount": "1200" },
            "offers": [
                { "@type": "Offer", "name": "Coba", "price": "0", "priceCurrency": "IDR" },
                { "@type": "Offer", "name": "Bikin", "price": "99000", "priceCurrency": "IDR" },
                { "@type": "Offer", "name": "Lepas", "price": "299000", "priceCurrency": "IDR" }
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
    .lp-skip { position: absolute; left: -9999px; top: 0; z-index: 30; background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); padding: 8px 16px; text-decoration: none; font-size: var(--tk-text-body-sm); }
    .lp-skip:focus { left: 12px; top: 60px; }
    .lp-header { position: sticky; top: 48px; z-index: 10; }
    .ex-embedded .lp-header { top: 0; }
    main [id] { scroll-margin-top: 128px; }
    /* Angka bukti di hero ditempel serong, tidak sejajar satu sama lain. */
    .lp-hero-marks { display: flex; gap: 21px; flex-wrap: wrap; margin-top: 38px; justify-content: center; }
    .lp-mark { border: 3px solid var(--tk-color-border); border-radius: var(--tk-radius-sm); background: var(--tk-color-surface); padding: 9px 19px 11px 13px; }
    .lp-mark:nth-child(1) { transform: rotate(-3deg); }
    .lp-mark:nth-child(2) { transform: rotate(2.2deg) translateY(-11px); background: var(--tk-color-info-soft); }
    .lp-mark:nth-child(3) { transform: rotate(-1.4deg) translateY(7px); }
    .lp-mark b { font-family: var(--tk-font-heading); font-size: 27px; display: block; line-height: 1; }
    .lp-proof { display: grid; grid-template-columns: 1fr 1fr; gap: 53px; align-items: center; }
    .lp-proof-stats { display: flex; gap: 31px; margin-top: 26px; flex-wrap: wrap; }
    .lp-proof-stat .lp-bignum { font-family: var(--tk-font-heading); font-size: 47px; font-weight: 700; line-height: 1; letter-spacing: -0.04em; color: var(--tk-color-primary); margin: 0; }
    .lp-proof-stat:nth-child(2) .lp-bignum { color: var(--tk-color-secondary); font-size: 33px; }
    .lp-proof-stat:nth-child(3) .lp-bignum { color: var(--tk-color-text); font-size: 58px; }
    .lp-proof-stat .tk-caption { display: block; margin-top: 7px; }
    .lp-chart-card { background: var(--tk-color-surface); border: 5px solid var(--tk-color-border); border-radius: var(--tk-radius); box-shadow: var(--tk-shadow); padding: 26px 26px 15px 38px; transform: rotate(1.3deg); }
    .lp-chart-box { position: relative; height: 280px; }
    .lp-links { display: flex; gap: 3px; align-items: center; }
    .lp-burger { display: none; }
    .lp-section { max-width: var(--tk-container); margin: 0 auto; padding: 96px 26px; width: 100%; box-sizing: border-box; }
    .lp-section-head { margin-bottom: 53px; }
    .lp-section-sub { color: var(--tk-color-text-muted); max-width: 520px; font-family: var(--tk-ad-wrong); font-size: 19px; margin: 0 0 0 auto; text-align: right; }
    .lp-features { grid-template-columns: repeat(3, 1fr); }
    .lp-pricing { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; align-items: start; }
    .lp-plan:nth-child(1) { transform: rotate(-1.4deg); }
    .lp-plan:nth-child(3) { transform: rotate(1.9deg) translateY(15px); }
    .lp-plan-featured { background: var(--tk-color-primary-contrast); transform: rotate(0.4deg) scale(1.05); z-index: 2; }
    .lp-price { font-family: var(--tk-font-heading); font-weight: 700; font-size: 44px; letter-spacing: -0.04em; margin: 0 0 8px; color: var(--tk-color-text); }
    .lp-price .tk-caption { margin-left: 5px; }
    .lp-plan-list { list-style: none; padding: 0; margin: 15px 0 26px; display: flex; flex-direction: column; gap: 9px; font-size: var(--tk-text-body-sm); }
    .lp-plan-list li { display: flex; align-items: center; gap: 9px; }
    .lp-plan-list iconify-icon { color: var(--tk-color-secondary); flex: none; }
    .lp-footer { background: var(--tk-color-text); color: var(--tk-color-background); border-top: 9px solid var(--tk-color-primary); }
    .lp-footer-inner { max-width: var(--tk-container); margin: 0 auto; padding: 38px 26px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px; }
    .lp-footer .tk-caption { color: var(--tk-color-background); }
    .lp-footer-links { display: flex; gap: 26px; }
    .lp-footer-links a { color: var(--tk-color-background); text-decoration: underline; font-family: var(--tk-ad-wrong); font-size: 17px; font-weight: 700; }
    .lp-footer-links a:nth-child(2) { transform: rotate(-3deg); display: inline-block; }
    .lp-footer-links a:hover { color: var(--tk-color-accent); }
    @media (max-width: 860px) {
        .lp-links { display: none; }
        .lp-burger { display: inline-flex; }
        .lp-features { grid-template-columns: 1fr; }
        .lp-pricing { grid-template-columns: 1fr; }
        .lp-plan:nth-child(1), .lp-plan:nth-child(3), .lp-plan-featured { transform: none; }
        .lp-proof { grid-template-columns: 1fr; gap: 31px; }
        .lp-chart-card { transform: none; padding: 21px; }
        .lp-chart-box { height: 220px; }
        .lp-section { padding: 64px 21px; }
        .lp-section-sub { margin-left: 0; text-align: left; }
        .tk-hero { padding: 71px 21px 53px; }
        .tk-hero .tk-display { font-size: 48px; }
        .tk-hero-actions { justify-content: flex-start; }
        .tk-cta { flex-direction: column; text-align: center; padding: 38px 21px; }
    }
</style>
</head>
<body>
${EX_EMBED_SCRIPT}
${exNav('Anti-Design', 'landing', '../', { device: { base: 'landing', active: 'web' }, themeToggle: false })}
<a class="lp-skip" href="#konten-utama">Langsung ke konten utama</a>
<header class="lp-header">
<nav class="tk-navbar" aria-label="Navigasi utama">
    <span class="tk-navbar-brand">Logo</span>
    <div class="lp-links">
        <a class="tk-navbar-link tk-navbar-link-active" href="#beranda">Beranda</a>
        <a class="tk-navbar-link" href="#fitur">Fitur</a>
        <a class="tk-navbar-link" href="#harga">Harga</a>
        <a class="tk-navbar-link" href="#cta">Kontak</a>
    </div>
    <button class="tk-btn tk-btn-ghost tk-btn-sm">Masuk</button>
    <button class="tk-btn tk-btn-primary tk-btn-sm">Daftar Gratis</button>
    <button class="tk-action-btn lp-burger" aria-label="Menu">${ic('hamburger-menu-broken', 20)}</button>
</nav>
</header>
<main id="konten-utama">
<section class="tk-hero" id="beranda" aria-labelledby="lp-h-hero">
    <p class="tk-caption tk-wrong">peringatan: tidak rapi</p>
    <h1 class="tk-display" id="lp-h-hero" style="margin-top: 21px">Situs yang <span class="tk-squish">tidak</span> mirip siapa pun</h1>
    <p class="tk-hero-sub">Semua orang memakai template yang sama. Halaman Anda tidak harus ikut.</p>
    <div class="tk-hero-actions">
        <button class="tk-btn tk-btn-primary tk-btn-lg">Mulai Gratis</button>
        <button class="tk-btn tk-btn-outline tk-btn-lg">Lihat Demo</button>
    </div>
    <div class="lp-hero-marks">
        <span class="lp-mark"><b>36.000</b><span class="tk-caption">Halaman dirakit</span></span>
        <span class="lp-mark"><b>99,9%</b><span class="tk-caption">Waktu aktif</span></span>
        <span class="lp-mark"><b>4,8 / 5</b><span class="tk-caption">Penilaian</span></span>
    </div>
</section>
<section id="fitur" aria-labelledby="lp-h-fitur">
    <div class="lp-section">
        <div class="lp-section-head">
            <p class="tk-caption tk-wrong">fitur</p>
            <h2 class="tk-h2" id="lp-h-fitur" style="margin: 11px 0 15px">Perkakas yang <span class="tk-oversize">tidak</span> sopan</h2>
            <p class="lp-section-sub">Enam hal yang dipakai tiap hari, bukan daftar panjang yang membingungkan.</p>
        </div>
        <div class="tk-feature-grid lp-features">
            ${feature('bolt-broken', 'Cepat', 'Halaman dirakit dalam hitungan menit, bukan minggu.')}
            ${feature('shield-check-broken', 'Aman', 'Enkripsi menyeluruh dan kontrol akses per peran.')}
            ${feature('chart-2-broken', 'Terukur', 'Laporan yang dirangkum otomatis tiap pekan.')}
            ${feature('users-group-rounded-broken', 'Kolaboratif', 'Komentar, mention, dan penugasan dalam satu alur.')}
            ${feature('link-broken', 'Terhubung', 'Menyambung ke alat yang sudah tim Anda pakai.')}
            ${feature('palette-broken', 'Berkarakter', 'Palet dan huruf boleh Anda rusak sesuka hati.')}
        </div>
    </div>
</section>
<section id="bukti" aria-labelledby="lp-h-bukti">
    <div class="lp-section" style="padding-top: 0">
        <div class="lp-proof">
            <div>
                <p class="tk-caption tk-wrong">pertumbuhan</p>
                <h2 class="tk-h2" style="margin: 11px 0 15px" id="lp-h-bukti">Dipakai ribuan tim</h2>
                <p class="tk-muted" style="margin: 0; max-width: 440px">Halaman yang dirakit naik empat kuartal berturut-turut. Angkanya bicara sendiri.</p>
                <div class="lp-proof-stats">
                    <div class="lp-proof-stat"><p class="lp-bignum">36rb</p><span class="tk-caption">Halaman</span></div>
                    <div class="lp-proof-stat"><p class="lp-bignum">99,9%</p><span class="tk-caption">Uptime</span></div>
                    <div class="lp-proof-stat"><p class="lp-bignum">4,8/5</p><span class="tk-caption">Penilaian</span></div>
                </div>
            </div>
            <div class="lp-chart-card">
                <p class="tk-caption tk-wrong" style="margin: 0 0 4px">per kuartal</p>
                <p class="tk-h4" style="margin: 0 0 15px">Halaman dirakit</p>
                <div class="lp-chart-box"><canvas id="lp-chart-growth"></canvas></div>
            </div>
        </div>
    </div>
</section>
<section id="harga" aria-labelledby="lp-h-harga">
    <div class="lp-section" style="padding-top: 0">
        <div class="lp-section-head">
            <p class="tk-caption tk-wrong">harga</p>
            <h2 class="tk-h2" id="lp-h-harga" style="margin: 11px 0 15px">Tiga paket, satu yang benar</h2>
            <p class="lp-section-sub">Mulai gratis, naik paket saat halaman Anda bertambah.</p>
        </div>
        <div class="lp-pricing">
            ${plan('Coba', 'Rp0', ['3 halaman aktif', '5 anggota tim', 'Template dasar'], false)}
            ${plan('Bikin', 'Rp99rb', ['Halaman tanpa batas', '25 anggota tim', 'Laporan & automasi', 'Dukungan prioritas'], true)}
            ${plan('Lepas', 'Rp299rb', ['Semua fitur Bikin', 'Anggota tanpa batas', 'SSO & audit log', 'SLA 99,9%'], false)}
        </div>
    </div>
</section>
<section id="cta" aria-labelledby="lp-h-cta">
    <div class="lp-section" style="padding-top: 0">
        <div class="tk-cta">
            <div><h2 class="tk-h3" id="lp-h-cta" style="margin: 0">Siap terlihat berbeda?</h2><p class="tk-muted" style="margin: 8px 0 0">Gratis 14 hari, tanpa kartu kredit.</p></div>
            <button class="tk-btn tk-btn-primary tk-btn-lg">Mulai Sekarang ${ic('arrow-right-broken', 16)}</button>
        </div>
    </div>
</section>
</main>
<footer class="lp-footer">
    <div class="lp-footer-inner">
        <span class="tk-caption">&copy; 2026 Logo. Seluruh hak cipta.</span>
        <div class="lp-footer-links">
            <a href="#">Privasi</a>
            <a href="#">Ketentuan</a>
            <a href="#">Bantuan</a>
        </div>
    </div>
</footer>
${CHART_HELPER_SCRIPT}
<script>
tkChart('lp-chart-growth', function (t) {
    return {
        type: 'bar',
        data: {
            labels: ['Q3 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026'],
            datasets: [{ label: 'Halaman dirakit (ribu)', data: [14, 19, 27, 36], backgroundColor: [t.accent, t.secondary, t.warning, t.primary], borderColor: t.text, borderWidth: 3, maxBarThickness: 58 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
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
    /* Dibiarkan tembus pandang supaya kisi miring di body tetap terlihat: halaman auth
       pun harus kelihatan salah cetak, bukan jadi kotak abu-abu yang rapi. */
    .au-wrap { min-height: calc(100vh - 48px); box-sizing: border-box; display: flex; align-items: center; justify-content: center; padding: 53px 15px; background: transparent; }
    .ex-embedded .au-wrap { min-height: 100vh; }
    .au-card { width: 100%; max-width: 424px; }
    .au-brand { font-family: var(--tk-font-heading); font-weight: 700; font-size: 33px; letter-spacing: -0.04em; text-transform: uppercase; text-align: left; margin-bottom: 3px; transform: rotate(-2.2deg); }
    .au-rule { width: 71px; height: 5px; background: var(--tk-color-primary); margin: 0 0 21px auto; }
    .au-title { text-align: center; margin: 0 0 5px; }
    .au-sub { text-align: right; margin: 0 0 26px; }
    .au-full { width: 100%; box-sizing: border-box; }
    .au-divider { display: flex; align-items: center; gap: 13px; margin: 21px 0; color: var(--tk-color-text-muted); font-family: var(--tk-ad-wrong); font-size: 15px; font-weight: 700; }
    .au-divider::before, .au-divider::after { content: ''; height: 3px; flex: 1; background: var(--tk-color-border); }
    .au-card .tk-field { margin-bottom: 15px; }
    .au-row { display: flex; align-items: center; justify-content: space-between; gap: 11px; margin: 5px 0 21px; font-size: var(--tk-text-body-sm); flex-wrap: wrap; }
    .au-link { color: var(--tk-color-secondary); text-decoration: underline; text-underline-offset: 3px; }
    .au-link:hover { color: var(--tk-color-primary); }
    .au-alt { text-align: center; margin: 21px 0 0; }`;

function authPage(base: 'login' | 'register', title: string, body: string): string {
    return `<!DOCTYPE html>
<html lang="id">
<head>
${HEAD_COMMON}
<title>Anti-Design — Contoh ${title}</title>
<style>
    ${EX_NAV_CSS}
${AUTH_CSS}
</style>
</head>
<body>
${EX_EMBED_SCRIPT}
${exNav('Anti-Design', 'components', '../', { device: { base, active: 'web' }, themeToggle: false })}
<div class="au-wrap">
    <div class="tk-card au-card">
        <div class="tk-card-body">
            <div class="au-brand">Logo</div>
            <div class="au-rule"></div>
${body}
        </div>
    </div>
</div>
</body>
</html>
`;
}

/** Isi kartu login; dipakai halaman contoh dan seksi Login & Register di showcase. */
export const AUTH_LOGIN_FORM = `            <h1 class="tk-h3 au-title">Masuk lagi</h1>
            <p class="tk-caption au-sub">Lanjutkan dari yang tadi ditinggal.</p>
            <button class="tk-btn tk-btn-outline au-full" type="button"><iconify-icon icon="logos:google-icon" width="16" height="16"></iconify-icon> Lanjut dengan Google</button>
            <div class="au-divider">atau pakai email</div>
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
                <a class="au-link" href="#">Lupa kata sandi?</a>
            </div>
            <button class="tk-btn tk-btn-primary au-full" type="button">Masuk</button>
            <p class="tk-caption au-alt">Belum punya akun? <a class="au-link" href="register.html">Daftar gratis</a></p>`;

const LOGIN = authPage('login', 'Login', AUTH_LOGIN_FORM);

/** Isi kartu register; dipakai halaman contoh dan seksi Login & Register di showcase. */
export const AUTH_REGISTER_FORM = `            <h1 class="tk-h3 au-title">Bikin akun</h1>
            <p class="tk-caption au-sub">Gratis 14 hari &mdash; tanpa kartu kredit.</p>
            <button class="tk-btn tk-btn-outline au-full" type="button"><iconify-icon icon="logos:google-icon" width="16" height="16"></iconify-icon> Daftar dengan Google</button>
            <div class="au-divider">atau pakai email</div>
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
                <label class="tk-check"><input class="tk-checkbox" type="checkbox"> Saya setuju dengan <a class="au-link" href="#">Ketentuan Layanan</a></label>
            </div>
            <button class="tk-btn tk-btn-primary au-full" type="button">Buat Akun</button>
            <p class="tk-caption au-alt">Sudah punya akun? <a class="au-link" href="login.html">Masuk</a></p>`;

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
<title>Anti-Design — ${title} (Ponsel)</title>
<style>
    ${EX_NAV_CSS}
    body { min-height: 100vh; margin: 0; box-sizing: border-box; }
    .ex-stage { display: flex; flex-direction: column; align-items: center; gap: 15px; padding: 21px; }
    .ex-device { width: 412px; max-width: 100%; height: 780px; max-height: calc(100vh - 150px); min-height: 420px; border: 12px solid var(--tk-color-text); border-radius: 44px 12px 44px 12px; background: var(--tk-color-text); box-shadow: var(--tk-shadow); overflow: hidden; flex: none; transform: rotate(-1.2deg); }
    .ex-device iframe { width: 100%; height: 100%; border: none; border-radius: 32px 4px 32px 4px; background: var(--tk-color-background); }
</style>
</head>
<body>
${exNav('Anti-Design', view, '../', { device: { base, active: 'mobile' }, themeToggle: false })}
<div class="ex-stage">
    <div class="ex-device"><iframe src="${base}.html?tk-embed" title="${title} versi ponsel"></iframe></div>
    <p class="tk-caption">${title} &mdash; lebar 388px, media query kit aktif seperti di ponsel sungguhan.</p>
</div>
</body>
</html>
`;
}

export const ANTI_DESIGN_EXAMPLES: Record<string, string> = {
    'examples/dashboard.html': DASHBOARD,
    'examples/dashboard-mobile.html': deviceFrame('Admin Dashboard', 'dashboard', 'dashboard'),
    'examples/landing.html': LANDING,
    'examples/landing-mobile.html': deviceFrame('Landing Page', 'landing', 'landing'),
    'examples/login.html': LOGIN,
    'examples/login-mobile.html': deviceFrame('Login', 'components', 'login'),
    'examples/register.html': REGISTER,
    'examples/register-mobile.html': deviceFrame('Register', 'components', 'register')
};
