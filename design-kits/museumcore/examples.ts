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
 * Halaman contoh (`examples/`) kit Museumcore: admin dashboard dan landing page utuh yang
 * dirakit murni dari komponen kontrak, responsif untuk web dan ponsel. Dua peran sekaligus:
 * bukti visual kit di halaman nyata (dibuka dari showcase) dan kerangka awal yang boleh disalin
 * agen saat pengguna meminta halaman sejenis — lebih murah daripada merakit dari nol.
 *
 * Kit ini satu-tema (terang bawaan — galeri memang dirancang untuk cahaya), jadi semua halaman
 * memanggil exNav dengan `themeToggle: false`.
 *
 * Kelas `dm-*` / `lp-*` / `ex-*` adalah perancah halaman contoh, bukan bagian kontrak kit.
 */

// Perancah pratinjau kit-agnostik, dipakai bersama lintas kit; rumahnya masih di kit pertama.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_EMBED_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

function ic(name: string, size = 18): string {
    return `<iconify-icon icon="flowbite:${name}" width="${size}" height="${size}"></iconify-icon>`;
}

const HEAD_COMMON = `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Anonymous+Pro:wght@400;700&display=swap" rel="stylesheet">
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
<title>Museumcore — Contoh Admin Dashboard</title>
<style>
    /* Perancah halaman contoh (dm-*): bukan bagian kontrak kit. */
    ${EX_NAV_CSS}
    .dm-shell { display: flex; min-height: calc(100vh - 48px); }
    .dm-sidebar { position: sticky; top: 48px; height: calc(100vh - 48px); box-sizing: border-box; }
    .dm-sidebar-brand { display: flex; align-items: center; gap: 10px; font-family: var(--tk-font-heading); font-weight: 600; font-size: 17px; letter-spacing: 0.18em; text-transform: uppercase; padding: 10px 16px 22px; white-space: nowrap; }
    .dm-sidebar-brand iconify-icon { color: var(--tk-mc-gold); flex: none; }
    .tk-sidebar-collapsed .dm-sidebar-brand { justify-content: center; padding: 10px 0 22px; }
    .dm-sidebar-foot { margin-top: auto; display: block; padding-top: 8px; border-top: 1px solid var(--tk-color-border); }
    .dm-foot-btn { display: flex; align-items: center; gap: 10px; width: 100%; padding: 8px; border: 1px solid transparent; border-radius: var(--tk-radius-sm); background: transparent; font-family: inherit; color: var(--tk-color-text); text-align: left; cursor: pointer; }
    .dm-foot-btn:hover { background: var(--tk-color-surface-2); border-color: var(--tk-color-border); }
    .dm-foot-chevron { margin-left: auto; color: var(--tk-color-text-muted); }
    .dm-sidebar-foot .tk-dropdown-menu { left: 0; right: 0; min-width: 0; }
    .tk-sidebar-collapsed .dm-foot-btn { justify-content: center; padding: 8px 0; }
    .dm-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
    .dm-topbar { display: flex; align-items: center; gap: 12px; padding: 12px 24px; background: var(--tk-color-surface); border-bottom: 1px solid var(--tk-color-border); box-shadow: 0 1px 0 rgba(176, 141, 63, 0.3); position: sticky; top: 48px; z-index: 10; }
    .ex-embedded .dm-shell { min-height: 100vh; }
    .ex-embedded .dm-sidebar { top: 0; height: 100vh; }
    .ex-embedded .dm-topbar { top: 0; }
    .dm-topbar .tk-search { width: 280px; }
    .dm-topbar-spacer { margin-left: auto; display: flex; align-items: center; gap: 8px; }
    .dm-avatar { width: 34px; height: 34px; border-radius: var(--tk-radius-full); background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); box-shadow: inset 0 0 0 1px rgba(220, 196, 137, 0.6); display: inline-flex; align-items: center; justify-content: center; font-family: var(--tk-font-heading); font-size: 12px; letter-spacing: 0.06em; flex: none; }
    .dm-content { padding: 28px 24px; display: flex; flex-direction: column; gap: 24px; }
    .dm-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
    .dm-grid2 { display: grid; grid-template-columns: 3fr 2fr; gap: 24px; align-items: start; }
    .dm-chart-box { position: relative; height: 260px; }
    .dm-table-wrap { overflow-x: auto; }
    .dm-progress-row { margin-bottom: 18px; font-size: var(--tk-text-body-sm); }
    .dm-progress-row .tk-caption { display: flex; justify-content: space-between; margin-bottom: 7px; }
    .dm-activity { display: flex; flex-direction: column; gap: 15px; }
    .dm-activity-item { display: flex; gap: 10px; align-items: flex-start; font-size: var(--tk-text-body-sm); }
    .dm-activity-item iconify-icon { color: var(--tk-mc-gold); margin-top: 3px; flex: none; }
    @media (max-width: 960px) {
        .dm-sidebar { display: none; }
        .dm-stats { grid-template-columns: repeat(2, 1fr); }
        .dm-grid2 { grid-template-columns: 1fr; }
    }
    /* Di layar sempit sidebar jadi laci: tombol burger memunculkannya menumpuk konten. */
    .dm-sidebar.dm-sidebar-open { display: flex; position: fixed; top: 48px; left: 0; bottom: 0; height: auto; z-index: 90; box-shadow: var(--tk-shadow-lg); }
    .ex-embedded .dm-sidebar.dm-sidebar-open { top: 0; }
    @media (max-width: 700px) {
        .dm-crumb { display: none; }
        .dm-topbar .tk-search { width: auto; flex: 1; min-width: 0; }
    }
    @media (max-width: 600px) {
        .dm-content { padding: 18px 16px; gap: 16px; }
        .dm-topbar { padding: 10px 16px; }
        .dm-stats { grid-template-columns: 1fr; }
        .dm-chart-box { height: 220px; }
    }
</style>
</head>
<body>
${EX_EMBED_SCRIPT}
${exNav('Museumcore', 'dashboard', '../', { device: { base: 'dashboard', active: 'web' }, themeToggle: false })}
<div class="dm-shell">
    <aside class="tk-sidebar dm-sidebar">
        <span class="dm-sidebar-brand">${ic('image-outline', 20)}<span class="tk-sidebar-label">Logo</span></span>
        <span class="tk-sidebar-group">Umum</span>
        <a class="tk-sidebar-item tk-sidebar-item-active" href="#">${ic('home-outline')} <span class="tk-sidebar-label">Dashboard</span></a>
        <a class="tk-sidebar-item" href="#">${ic('image-outline')} <span class="tk-sidebar-label">Koleksi</span></a>
        <a class="tk-sidebar-item" href="#">${ic('calendar-month-outline')} <span class="tk-sidebar-label">Pameran</span></a>
        <span class="tk-sidebar-group">Analitik</span>
        <a class="tk-sidebar-item" href="#">${ic('chart-outline')} <span class="tk-sidebar-label">Laporan</span></a>
        <a class="tk-sidebar-item" href="#">${ic('users-group-outline')} <span class="tk-sidebar-label">Pengunjung</span></a>
        <span class="tk-sidebar-group">Lainnya</span>
        <a class="tk-sidebar-item" href="#">${ic('cog-outline')} <span class="tk-sidebar-label">Pengaturan</span></a>
        <a class="tk-sidebar-item" href="#">${ic('question-circle-outline')} <span class="tk-sidebar-label">Bantuan</span></a>
        <div class="tk-dropdown dm-sidebar-foot">
            <button class="dm-foot-btn" type="button" aria-label="Menu profil">
                <span class="dm-avatar">JD</span>
                <span class="tk-sidebar-label" style="min-width: 0"><span class="tk-body-sm" style="display: block">Jane Doe</span><span class="tk-caption" style="text-transform: none; letter-spacing: 0.04em">jane@contoh.com</span></span>
                <span class="dm-foot-chevron tk-sidebar-label">${ic('chevron-down-outline', 15)}</span>
            </button>
            <div class="tk-dropdown-menu tk-dropdown-menu-up">
                <button class="tk-dropdown-item" type="button">${ic('user-outline', 16)} Profil</button>
                <button class="tk-dropdown-item" type="button">${ic('cog-outline', 16)} Pengaturan</button>
                <hr class="tk-dropdown-divider">
                <button class="tk-dropdown-item tk-dropdown-item-danger" type="button">${ic('arrow-right-to-bracket-outline', 16)} Keluar</button>
            </div>
        </div>
    </aside>
    <div class="dm-main">
        <header class="dm-topbar">
            <button class="tk-action-btn" aria-label="Buka/tutup sidebar" onclick="
                var sb = document.querySelector('.dm-sidebar');
                if (window.matchMedia('(max-width: 960px)').matches) { sb.classList.toggle('dm-sidebar-open'); }
                else { sb.classList.toggle('tk-sidebar-collapsed'); }
            ">${ic('bars-outline', 20)}</button>
            <nav class="tk-breadcrumb dm-crumb">
                <a href="#">Beranda</a>
                <span class="tk-breadcrumb-sep">${ic('chevron-right-outline', 13)}</span>
                <a href="#">Analitik</a>
                <span class="tk-breadcrumb-sep">${ic('chevron-right-outline', 13)}</span>
                <span class="tk-breadcrumb-current">Dashboard</span>
            </nav>
            <div class="dm-topbar-spacer">
                <div class="tk-search">
                    <span class="tk-search-icon">${ic('search-outline', 16)}</span>
                    <input class="tk-input" type="search" placeholder="Cari koleksi...">
                    <kbd class="tk-search-kbd">Ctrl K</kbd>
                </div>
                <button class="tk-action-btn" aria-label="Notifikasi">${ic('bell-outline')}</button>
            </div>
        </header>
        <main class="dm-content">
            <div style="display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; flex-wrap: wrap">
                <div>
                    <p class="tk-caps">Ringkasan Kurasi</p>
                    <h2 class="tk-h2" style="margin: 8px 0 0">Selamat datang, Jane</h2>
                    <p class="tk-body-sm tk-muted" style="margin: 4px 0 0; font-style: italic">Keadaan koleksi dan kunjungan hari ini.</p>
                </div>
                <span class="tk-plaque"><span class="tk-plaque-title">Pameran Berjalan</span><span class="tk-plaque-meta">Galeri Barat &middot; 12 Agu &ndash; 30 Sep</span></span>
            </div>
            <div class="dm-stats">
                <div class="tk-card tk-card-stat"><div class="tk-card-body"><p class="tk-caption">Total Pengunjung</p><p class="tk-stat-value" style="margin: 6px 0">12.540</p><span class="tk-stat-trend-up">+12,5% dari bulan lalu</span></div></div>
                <div class="tk-card tk-card-stat"><div class="tk-card-body"><p class="tk-caption">Pendapatan Tiket</p><p class="tk-stat-value" style="margin: 6px 0">Rp84,2 jt</p><span class="tk-stat-trend-up">+8,1% dari bulan lalu</span></div></div>
                <div class="tk-card tk-card-stat"><div class="tk-card-body"><p class="tk-caption">Karya Dipamerkan</p><p class="tk-stat-value" style="margin: 6px 0">1.203</p><span class="tk-stat-trend-down">-2,4% dari bulan lalu</span></div></div>
                <div class="tk-card tk-card-stat"><div class="tk-card-body"><p class="tk-caption">Keanggotaan Baru</p><p class="tk-stat-value" style="margin: 6px 0">3,6%</p><span class="tk-stat-trend-up">+0,8% dari bulan lalu</span></div></div>
            </div>
            <div class="dm-grid2">
                <div class="tk-card">
                    <div class="tk-card-header" style="display: flex; align-items: center; justify-content: space-between"><h3 class="tk-h4" style="margin: 0">Pendapatan Tiket</h3><span class="tk-caption">6 bulan terakhir</span></div>
                    <div class="tk-card-body"><div class="dm-chart-box"><canvas id="dm-chart-revenue"></canvas></div></div>
                </div>
                <div class="tk-card">
                    <div class="tk-card-header"><h3 class="tk-h4" style="margin: 0">Asal Pengunjung</h3></div>
                    <div class="tk-card-body"><div class="dm-chart-box"><canvas id="dm-chart-traffic"></canvas></div></div>
                </div>
            </div>
            <div class="tk-filter-bar">
                <div class="tk-search">
                    <span class="tk-search-icon">${ic('search-outline', 16)}</span>
                    <input class="tk-input" type="search" placeholder="Cari nama atau email...">
                </div>
                <div class="tk-select">
                    <button class="tk-select-trigger" type="button">Semua status ${ic('chevron-down-outline', 15)}</button>
                    <div class="tk-select-menu">
                        <button class="tk-option tk-option-selected" type="button">Semua status <span class="tk-option-check">${ic('check-outline', 15)}</span></button>
                        <button class="tk-option" type="button">Aktif</button>
                        <button class="tk-option" type="button">Nonaktif</button>
                    </div>
                </div>
                <button class="tk-btn tk-btn-outline">${ic('filter-outline', 16)} Filter</button>
            </div>
            <div class="tk-card">
                <div class="tk-card-header" style="display: flex; align-items: center; justify-content: space-between"><h3 class="tk-h4" style="margin: 0">Staf Terbaru</h3><button class="tk-btn tk-btn-primary tk-btn-sm">${ic('plus-outline', 14)} Tambah</button></div>
                <div class="tk-card-body dm-table-wrap">
                    <table class="tk-table">
                        <thead><tr><th>Nama</th><th>Email</th><th>Peran</th><th>Status</th><th class="tk-table-actions">Aksi</th></tr></thead>
                        <tbody>
                            <tr><td>Jane Smith</td><td>jane@contoh.com</td><td>Kurator</td><td><span class="tk-badge tk-badge-success">Aktif</span></td><td class="tk-table-actions"><button class="tk-action-btn" aria-label="Lihat">${ic('eye-outline', 16)}</button><button class="tk-action-btn" aria-label="Edit">${ic('edit-outline', 16)}</button><button class="tk-action-btn tk-action-btn-danger" aria-label="Hapus">${ic('trash-bin-outline', 16)}</button></td></tr>
                            <tr><td>John Doe</td><td>john@contoh.com</td><td>Konservator</td><td><span class="tk-badge tk-badge-warning">Menunggu</span></td><td class="tk-table-actions"><button class="tk-action-btn" aria-label="Lihat">${ic('eye-outline', 16)}</button><button class="tk-action-btn" aria-label="Edit">${ic('edit-outline', 16)}</button><button class="tk-action-btn tk-action-btn-danger" aria-label="Hapus">${ic('trash-bin-outline', 16)}</button></td></tr>
                            <tr><td>Maya Putri</td><td>maya@contoh.com</td><td>Arsiparis</td><td><span class="tk-badge tk-badge-danger">Nonaktif</span></td><td class="tk-table-actions"><div class="tk-dropdown"><button class="tk-action-btn" aria-label="Menu aksi">${ic('dots-horizontal-outline', 16)}</button><div class="tk-dropdown-menu tk-dropdown-menu-right"><button class="tk-dropdown-item">${ic('eye-outline', 16)} Lihat detail</button><button class="tk-dropdown-item">${ic('edit-outline', 16)} Edit</button><hr class="tk-dropdown-divider"><button class="tk-dropdown-item tk-dropdown-item-danger">${ic('trash-bin-outline', 16)} Hapus</button></div></div></td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="tk-card-footer" style="justify-content: space-between; align-items: center"><span class="tk-caption">Menampilkan 3 dari 128 staf</span><nav class="tk-pagination"><button class="tk-page">&lsaquo;</button><button class="tk-page tk-page-active">1</button><button class="tk-page">2</button><button class="tk-page">3</button><button class="tk-page">&rsaquo;</button></nav></div>
            </div>
            <div class="dm-grid2">
                <div class="tk-card">
                    <div class="tk-card-header"><h3 class="tk-h4" style="margin: 0">Persiapan Pameran</h3></div>
                    <div class="tk-card-body">
                        <div class="dm-progress-row"><span class="tk-caption"><span>Katalog Renaissance</span><span>80%</span></span><div class="tk-progress"><div class="tk-progress-bar" style="width: 80%"></div></div></div>
                        <div class="dm-progress-row"><span class="tk-caption"><span>Restorasi Panel Baroque</span><span>45%</span></span><div class="tk-progress"><div class="tk-progress-bar" style="width: 45%"></div></div></div>
                        <div class="dm-progress-row" style="margin-bottom: 0"><span class="tk-caption"><span>Digitalisasi Arsip</span><span>15%</span></span><div class="tk-progress"><div class="tk-progress-bar" style="width: 15%"></div></div></div>
                    </div>
                </div>
                <div class="tk-card">
                    <div class="tk-card-header"><h3 class="tk-h4" style="margin: 0">Catatan Terakhir</h3></div>
                    <div class="tk-card-body dm-activity">
                        <div class="dm-activity-item">${ic('user-outline', 16)}<span><strong>Jane Smith</strong> bergabung sebagai kurator &middot; <span class="tk-caption" style="text-transform: none; letter-spacing: 0.04em">5 menit lalu</span></span></div>
                        <div class="dm-activity-item">${ic('check-circle-outline', 16)}<span>Katalog Juli disetujui &middot; <span class="tk-caption" style="text-transform: none; letter-spacing: 0.04em">1 jam lalu</span></span></div>
                        <div class="dm-activity-item">${ic('exclamation-circle-outline', 16)}<span>Kelembapan ruang arsip di ambang batas &middot; <span class="tk-caption" style="text-transform: none; letter-spacing: 0.04em">3 jam lalu</span></span></div>
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
            datasets: [{ label: 'Pendapatan (jt)', data: [52, 61, 58, 71, 78, 84], borderColor: t.primary, backgroundColor: t.primary + '1A', fill: true, tension: 0.32, pointRadius: 3, pointBackgroundColor: t.accent, pointBorderColor: t.primary, borderWidth: 1.5 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('dm-chart-traffic', function (t) {
    return {
        type: 'doughnut',
        data: { labels: ['Lokal', 'Domestik', 'Mancanegara', 'Rombongan'], datasets: [{ data: [38, 31, 19, 12], backgroundColor: [t.primary, t.accent, t.secondary, t.muted], borderColor: t.surface2, borderWidth: 2 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '62%', plugins: { legend: { position: 'bottom' } } }
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
    const list = items.map(item => `<li>${ic('check-outline', 15)} ${item}</li>`).join('\n                ');
    return `<div class="tk-card lp-plan${featured ? ' lp-plan-featured' : ''}">
        <div class="tk-card-body">
            ${featured ? '<p class="tk-caps" style="margin: 0 0 10px">Paling dipilih</p>' : ''}
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
    return `<div class="tk-feature"><span class="tk-feature-icon">${ic(iconName, 22)}</span><h4 class="tk-title" style="margin: 4px 0 0">${title}</h4><p class="tk-body-sm tk-muted" style="margin: 0">${text}</p></div>`;
}

/**
 * Kerangka SEO landing page — bagian kontrak kit (§7): judul berpola "Brand — proposisi nilai",
 * meta description, canonical, Open Graph + Twitter card, dan JSON-LD schema.org
 * (Organization/WebSite/WebPage + SoftwareApplication dengan penawaran harga yang sama dengan
 * seksi harga di halaman). Domain `https://contoh.id` dan brand `Logo` adalah placeholder yang
 * WAJIB diganti data proyek saat halaman ini disalin.
 */
const LANDING_SEO_HEAD = `<title>Logo — Arsipkan karya seperti museum menyimpannya</title>
<meta name="description" content="Katalog, kurasi, dan pamerkan koleksi karya Anda dalam satu tempat yang tertata rapi. Mulai gratis, tanpa kartu kredit.">
<link rel="canonical" href="https://contoh.id/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Logo">
<meta property="og:title" content="Logo — Arsipkan karya seperti museum menyimpannya">
<meta property="og:description" content="Katalog, kurasi, dan pamerkan koleksi karya Anda dalam satu tempat yang tertata rapi. Mulai gratis, tanpa kartu kredit.">
<meta property="og:url" content="https://contoh.id/">
<meta property="og:image" content="https://contoh.id/og-image.png">
<meta property="og:locale" content="id_ID">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Logo — Arsipkan karya seperti museum menyimpannya">
<meta name="twitter:description" content="Katalog, kurasi, dan pamerkan koleksi karya Anda dalam satu tempat yang tertata rapi. Mulai gratis, tanpa kartu kredit.">
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
            "name": "Logo — Arsipkan karya seperti museum menyimpannya",
            "description": "Katalog, kurasi, dan pamerkan koleksi karya Anda dalam satu tempat yang tertata rapi. Mulai gratis, tanpa kartu kredit.",
            "inLanguage": "id",
            "isPartOf": { "@id": "https://contoh.id/#website" },
            "about": { "@id": "https://contoh.id/#organization" }
        },
        {
            "@type": "SoftwareApplication",
            "name": "Logo",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "url": "https://contoh.id/",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "bestRating": "5", "ratingCount": "1200" },
            "offers": [
                { "@type": "Offer", "name": "Umum", "price": "0", "priceCurrency": "IDR" },
                { "@type": "Offer", "name": "Anggota", "price": "99000", "priceCurrency": "IDR" },
                { "@type": "Offer", "name": "Patron", "price": "299000", "priceCurrency": "IDR" }
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
    .lp-hero-plaques { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 40px; }
    .lp-proof { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
    .lp-proof-stats { display: flex; gap: 32px; margin-top: 28px; flex-wrap: wrap; }
    .lp-proof-stat .lp-bignum { font-family: var(--tk-font-heading); font-size: 40px; font-weight: 500; line-height: 1; color: var(--tk-color-primary); margin: 0; }
    .lp-proof-stat .tk-caption { display: block; margin-top: 8px; }
    .lp-chart-box { position: relative; height: 280px; }
    .lp-links { display: flex; gap: 2px; align-items: center; }
    .lp-burger { display: none; }
    .lp-section { max-width: var(--tk-container); margin: 0 auto; padding: 96px 24px; width: 100%; box-sizing: border-box; }
    .lp-section-head { text-align: center; margin-bottom: 56px; }
    .lp-section-sub { color: var(--tk-color-text-muted); max-width: 580px; margin: 0 auto; font-style: italic; }
    .lp-features { grid-template-columns: repeat(3, 1fr); }
    .lp-pricing { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: start; }
    .lp-plan-featured { background: var(--tk-color-surface-2); border-color: var(--tk-mc-gold); }
    .lp-price { font-family: var(--tk-font-heading); font-weight: 500; font-size: 38px; margin: 0 0 8px; color: var(--tk-color-text); }
    .lp-price .tk-caption { margin-left: 6px; }
    .lp-plan-list { list-style: none; padding: 0; margin: 16px 0 24px; display: flex; flex-direction: column; gap: 10px; font-size: var(--tk-text-body-sm); }
    .lp-plan-list li { display: flex; align-items: center; gap: 10px; }
    .lp-plan-list iconify-icon { color: var(--tk-mc-gold); flex: none; }
    .lp-footer { background: var(--tk-color-text); color: #D9CFBE; border-top: 3px solid var(--tk-mc-gold); }
    .lp-footer-inner { max-width: var(--tk-container); margin: 0 auto; padding: 32px 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
    .lp-footer .tk-caption { color: rgba(217, 207, 190, 0.7); }
    .lp-footer-links { display: flex; gap: 24px; }
    .lp-footer-links a { color: #D9CFBE; text-decoration: none; font-family: var(--tk-font-heading); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; }
    .lp-footer-links a:hover { color: var(--tk-mc-gold-pale); }
    @media (max-width: 860px) {
        .lp-links { display: none; }
        .lp-burger { display: inline-flex; }
        .lp-features { grid-template-columns: 1fr; }
        .lp-pricing { grid-template-columns: 1fr; }
        .lp-proof { grid-template-columns: 1fr; gap: 32px; }
        .lp-chart-box { height: 220px; }
        .lp-section { padding: 64px 24px; }
        .tk-hero { padding: 72px 24px; }
        .tk-hero .tk-display { font-size: 44px; }
        .tk-cta { flex-direction: column; text-align: center; padding: 40px 24px; }
    }
</style>
</head>
<body>
${EX_EMBED_SCRIPT}
${exNav('Museumcore', 'landing', '../', { device: { base: 'landing', active: 'web' }, themeToggle: false })}
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
    <button class="tk-action-btn lp-burger" aria-label="Menu">${ic('bars-outline', 20)}</button>
</nav>
</header>
<main id="konten-utama">
<section class="tk-hero" id="beranda" aria-labelledby="lp-h-hero">
    <p class="tk-caps">Koleksi Digital Sejak 2026</p>
    <h1 class="tk-display" id="lp-h-hero" style="margin-top: 24px">Arsipkan karya <span class="tk-gild">seabadi</span> museum</h1>
    <p class="tk-hero-sub">Katalog, kurasi, dan pamerkan koleksi Anda dalam satu ruang yang tertata setenang galeri.</p>
    <div class="tk-hero-actions">
        <button class="tk-btn tk-btn-primary tk-btn-lg">Mulai Gratis</button>
        <button class="tk-btn tk-btn-outline tk-btn-lg">Lihat Demo</button>
    </div>
    <div class="lp-hero-plaques">
        <span class="tk-plaque"><span class="tk-plaque-title">36.000</span><span class="tk-plaque-meta">Koleksi terarsip</span></span>
        <span class="tk-plaque"><span class="tk-plaque-title">99,9%</span><span class="tk-plaque-meta">Waktu aktif layanan</span></span>
        <span class="tk-plaque"><span class="tk-plaque-title">4,8 / 5</span><span class="tk-plaque-meta">Penilaian kurator</span></span>
    </div>
</section>
<hr class="tk-ornament" style="max-width: 1132px; margin-left: auto; margin-right: auto">
<section id="fitur" aria-labelledby="lp-h-fitur">
    <div class="lp-section" style="padding-top: 32px">
        <div class="lp-section-head">
            <p class="tk-caps">Fitur</p>
            <h2 class="tk-h1" id="lp-h-fitur" style="margin: 16px 0 12px">Perkakas seorang kurator</h2>
            <p class="lp-section-sub">Yang benar-benar dipakai setiap hari, bukan daftar panjang yang membingungkan.</p>
        </div>
        <div class="tk-feature-grid lp-features">
            ${feature('archive-outline', 'Terkatalog', 'Setiap karya punya nomor inventaris, asal-usul, dan riwayat pameran.')}
            ${feature('shield-check-outline', 'Terjaga', 'Enkripsi menyeluruh dan kontrol akses per peran kurator.')}
            ${feature('chart-outline', 'Terukur', 'Laporan kunjungan dan minat koleksi yang dirangkum otomatis.')}
            ${feature('users-group-outline', 'Kolaboratif', 'Catatan kurasi, mention, dan penugasan dalam satu alur.')}
            ${feature('link-outline', 'Terhubung', 'Menyambung ke alat yang sudah institusi Anda pakai.')}
            ${feature('book-outline', 'Terdokumentasi', 'Katalog cetak dan digital dihasilkan dari data yang sama.')}
        </div>
    </div>
</section>
<section id="bukti" aria-labelledby="lp-h-bukti">
    <div class="lp-section" style="padding-top: 0">
        <div class="lp-proof">
            <div>
                <p class="tk-caps">Perkembangan</p>
                <h2 class="tk-h1" style="margin: 16px 0 12px" id="lp-h-bukti">Dipercaya ribuan institusi</h2>
                <p class="tk-muted" style="margin: 0; max-width: 460px; font-style: italic">Koleksi terarsip naik empat kuartal berturut-turut. Angkanya bicara sendiri &mdash; dan institusi Anda bisa jadi berikutnya.</p>
                <div class="lp-proof-stats">
                    <div class="lp-proof-stat"><p class="lp-bignum">36rb</p><span class="tk-caption">Koleksi</span></div>
                    <div class="lp-proof-stat"><p class="lp-bignum">99,9%</p><span class="tk-caption">Uptime</span></div>
                    <div class="lp-proof-stat"><p class="lp-bignum">4,8/5</p><span class="tk-caption">Penilaian</span></div>
                </div>
            </div>
            <div class="tk-vitrine">
                <p class="tk-caps" style="margin: 0 0 4px">Katalog per kuartal</p>
                <p class="tk-h4" style="margin: 0 0 16px">Koleksi terarsip</p>
                <div class="lp-chart-box"><canvas id="lp-chart-growth"></canvas></div>
            </div>
        </div>
    </div>
</section>
<section id="harga" aria-labelledby="lp-h-harga">
    <div class="lp-section" style="padding-top: 0">
        <div class="lp-section-head">
            <p class="tk-caps">Keanggotaan</p>
            <h2 class="tk-h1" id="lp-h-harga" style="margin: 16px 0 12px">Harga yang sederhana</h2>
            <p class="lp-section-sub">Mulai gratis, naikkan tingkat keanggotaan saat koleksi Anda bertambah.</p>
        </div>
        <div class="lp-pricing">
            ${plan('Umum', 'Rp0', ['3 koleksi aktif', '5 anggota tim', 'Katalog dasar'], false)}
            ${plan('Anggota', 'Rp99rb', ['Koleksi tanpa batas', '25 anggota tim', 'Laporan & automasi', 'Dukungan prioritas'], true)}
            ${plan('Patron', 'Rp299rb', ['Semua fitur Anggota', 'Anggota tanpa batas', 'SSO & audit log', 'SLA 99,9%'], false)}
        </div>
    </div>
</section>
<section id="cta" aria-labelledby="lp-h-cta">
    <div class="lp-section" style="padding-top: 0">
        <div class="tk-cta">
            <div><h2 class="tk-h3" id="lp-h-cta" style="margin: 0">Siap membuka koleksi Anda?</h2><p class="tk-muted" style="margin: 8px 0 0">Gratis 14 hari, tanpa kartu kredit.</p></div>
            <button class="tk-btn tk-btn-primary tk-btn-lg">Mulai Sekarang ${ic('arrow-right-outline', 15)}</button>
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
            datasets: [{ label: 'Koleksi terarsip (ribu)', data: [14, 19, 27, 36], backgroundColor: [t.primary + '33', t.primary + '59', t.primary + '8C', t.primary], borderColor: t.primary, borderWidth: 1, maxBarThickness: 56 }]
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
    .au-wrap { min-height: calc(100vh - 48px); box-sizing: border-box; display: flex; align-items: center; justify-content: center; padding: 48px 16px; background: var(--tk-color-surface-2); }
    .ex-embedded .au-wrap { min-height: 100vh; }
    .au-card { width: 100%; max-width: 420px; }
    .au-brand { font-family: var(--tk-font-heading); font-weight: 600; font-size: 20px; letter-spacing: 0.22em; text-transform: uppercase; text-align: center; margin-bottom: 6px; }
    .au-rule { width: 44px; height: 1px; background: var(--tk-mc-gold); margin: 0 auto 22px; }
    .au-title { text-align: center; margin: 0 0 6px; }
    .au-sub { text-align: center; margin: 0 0 24px; text-transform: none; letter-spacing: 0.04em; font-style: italic; }
    .au-full { width: 100%; box-sizing: border-box; }
    .au-divider { display: flex; align-items: center; gap: 14px; margin: 20px 0; color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; }
    .au-divider::before, .au-divider::after { content: ''; height: 1px; flex: 1; background: var(--tk-color-border); }
    .au-card .tk-field { margin-bottom: 14px; }
    .au-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 6px 0 20px; font-size: var(--tk-text-body-sm); }
    .au-link { color: var(--tk-color-primary); text-decoration: none; border-bottom: 1px solid var(--tk-mc-gold); }
    .au-link:hover { color: var(--tk-color-primary-hover); }
    .au-alt { text-align: center; margin: 20px 0 0; text-transform: none; letter-spacing: 0.04em; }`;

function authPage(base: 'login' | 'register', title: string, body: string): string {
    return `<!DOCTYPE html>
<html lang="id">
<head>
${HEAD_COMMON}
<title>Museumcore — Contoh ${title}</title>
<style>
    ${EX_NAV_CSS}
${AUTH_CSS}
</style>
</head>
<body>
${EX_EMBED_SCRIPT}
${exNav('Museumcore', 'components', '../', { device: { base, active: 'web' }, themeToggle: false })}
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
export const AUTH_LOGIN_FORM = `            <h1 class="tk-h3 au-title">Selamat datang kembali</h1>
            <p class="tk-caption au-sub">Masuk untuk melanjutkan kurasi Anda.</p>
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
                <a class="au-link" href="#">Lupa kata sandi?</a>
            </div>
            <button class="tk-btn tk-btn-primary au-full" type="button">Masuk</button>
            <p class="tk-caption au-alt">Belum punya akun? <a class="au-link" href="register.html">Daftar gratis</a></p>`;

const LOGIN = authPage('login', 'Login', AUTH_LOGIN_FORM);

/** Isi kartu register; dipakai halaman contoh dan seksi Login & Register di showcase. */
export const AUTH_REGISTER_FORM = `            <h1 class="tk-h3 au-title">Buat akun baru</h1>
            <p class="tk-caption au-sub">Gratis 14 hari &mdash; tanpa kartu kredit.</p>
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
<title>Museumcore — ${title} (Ponsel)</title>
<style>
    ${EX_NAV_CSS}
    body { min-height: 100vh; margin: 0; box-sizing: border-box; }
    .ex-stage { display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 20px; }
    .ex-device { width: 412px; max-width: 100%; height: 780px; max-height: calc(100vh - 150px); min-height: 420px; border: 12px solid #2A2018; border-radius: 44px; background: #2A2018; box-shadow: var(--tk-shadow-lg), inset 0 0 0 1px rgba(220, 196, 137, 0.5); overflow: hidden; flex: none; }
    .ex-device iframe { width: 100%; height: 100%; border: none; border-radius: 32px; background: var(--tk-color-background); }
</style>
</head>
<body>
${exNav('Museumcore', view, '../', { device: { base, active: 'mobile' }, themeToggle: false })}
<div class="ex-stage">
    <div class="ex-device"><iframe src="${base}.html?tk-embed" title="${title} versi ponsel"></iframe></div>
    <p class="tk-caption">${title} &mdash; lebar 388px, media query kit aktif seperti di ponsel sungguhan.</p>
</div>
</body>
</html>
`;
}

export const MUSEUMCORE_EXAMPLES: Record<string, string> = {
    'examples/dashboard.html': DASHBOARD,
    'examples/dashboard-mobile.html': deviceFrame('Admin Dashboard', 'dashboard', 'dashboard'),
    'examples/landing.html': LANDING,
    'examples/landing-mobile.html': deviceFrame('Landing Page', 'landing', 'landing'),
    'examples/login.html': LOGIN,
    'examples/login-mobile.html': deviceFrame('Login', 'components', 'login'),
    'examples/register.html': REGISTER,
    'examples/register-mobile.html': deviceFrame('Register', 'components', 'register')
};
