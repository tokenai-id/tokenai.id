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
 * Halaman contoh (`examples/`) kit Dopamine Design: admin dashboard dan landing page utuh yang
 * dirakit murni dari komponen kontrak, responsif untuk web dan ponsel. Dua peran sekaligus:
 * bukti visual kit di halaman nyata (dibuka dari showcase) dan kerangka awal yang boleh disalin
 * agen saat pengguna meminta halaman sejenis — lebih murah daripada merakit dari nol.
 *
 * Kit ini satu-tema (terang bawaan — kegembiraannya tidak punya mode gelap), jadi semua halaman
 * memanggil exNav dengan `themeToggle: false`.
 *
 * Kelas `dm-*` / `lp-*` / `ex-*` adalah perancah halaman contoh, bukan bagian kontrak kit.
 */

// Perancah pratinjau kit-agnostik, dipakai bersama lintas kit; rumahnya masih di kit pertama.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_EMBED_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

function ic(name: string, size = 18): string {
    return `<iconify-icon icon="mynaui:${name}" width="${size}" height="${size}"></iconify-icon>`;
}

const HEAD_COMMON = `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Azeret+Mono:wght@400;500&display=swap" rel="stylesheet">
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
<title>Dopamine — Contoh Admin Dashboard</title>
<style>
    /* Perancah halaman contoh (dm-*): bukan bagian kontrak kit. */
    ${EX_NAV_CSS}
    .dm-shell { display: flex; min-height: calc(100vh - 48px); }
    .dm-sidebar { position: sticky; top: 48px; height: calc(100vh - 48px); box-sizing: border-box; }
    .dm-sidebar-brand { display: flex; align-items: center; gap: 8px; font-family: var(--tk-font-heading); font-weight: 700; font-size: var(--tk-text-h3); padding: 8px 16px 20px; white-space: nowrap; }
    .dm-sidebar-brand-mini { display: none; }
    .tk-sidebar-collapsed .dm-sidebar-brand { justify-content: center; padding: 8px 0 20px; }
    .tk-sidebar-collapsed .dm-sidebar-brand-mini { display: inline; }
    .dm-sidebar-foot { margin-top: auto; display: block; padding-top: 8px; border-top: 2px dashed var(--tk-color-surface-2); }
    .dm-foot-btn { display: flex; align-items: center; gap: 10px; width: 100%; padding: 8px; border: 2px solid transparent; border-radius: var(--tk-radius-full); background: transparent; font-family: inherit; color: var(--tk-color-text); text-align: left; cursor: pointer; }
    .dm-foot-btn:hover { background: var(--tk-color-accent); border-color: var(--tk-color-text); }
    .dm-foot-chevron { margin-left: auto; color: var(--tk-color-primary); }
    .dm-sidebar-foot .tk-dropdown-menu { left: 0; right: 0; min-width: 0; }
    .tk-sidebar-collapsed .dm-foot-btn { justify-content: center; padding: 8px 0; }
    .dm-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
    .dm-topbar { display: flex; align-items: center; gap: 12px; padding: 12px 24px; background: var(--tk-color-surface); border-bottom: 2px solid var(--tk-color-text); position: sticky; top: 48px; z-index: 10; }
    .ex-embedded .dm-shell { min-height: 100vh; }
    .ex-embedded .dm-sidebar { top: 0; height: 100vh; }
    .ex-embedded .dm-topbar { top: 0; }
    .dm-topbar .tk-search { width: 280px; }
    .dm-topbar-spacer { margin-left: auto; display: flex; align-items: center; gap: 8px; }
    .dm-avatar { width: 38px; height: 38px; border-radius: var(--tk-radius-full); background: var(--tk-dp-blue); border: 2px solid var(--tk-color-text); color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-family: var(--tk-font-heading); font-size: 13px; font-weight: 700; flex: none; }
    .dm-content { padding: 24px; display: flex; flex-direction: column; gap: 24px; }
    .dm-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
    .dm-grid2 { display: grid; grid-template-columns: 3fr 2fr; gap: 24px; align-items: start; }
    .dm-chart-box { position: relative; height: 260px; }
    .dm-table-wrap { overflow-x: auto; }
    .dm-progress-row { margin-bottom: 18px; font-size: var(--tk-text-body-sm); }
    .dm-progress-row .tk-caption { display: flex; justify-content: space-between; margin-bottom: 6px; }
    .dm-activity { display: flex; flex-direction: column; gap: 14px; }
    .dm-activity-item { display: flex; gap: 10px; align-items: flex-start; font-size: var(--tk-text-body-sm); }
    .dm-activity-item iconify-icon { color: var(--tk-color-primary); margin-top: 2px; flex: none; }
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
        .dm-content { padding: 16px; gap: 16px; }
        .dm-topbar { padding: 10px 16px; }
        .dm-stats { grid-template-columns: 1fr; }
        .dm-chart-box { height: 220px; }
    }
</style>
</head>
<body>
${EX_EMBED_SCRIPT}
${exNav('Dopamine', 'dashboard', '../', { device: { base: 'dashboard', active: 'web' }, themeToggle: false })}
<div class="dm-shell">
    <aside class="tk-sidebar dm-sidebar">
        <span class="dm-sidebar-brand">${ic('confetti', 24)}<span class="tk-sidebar-label">Logo</span><span class="dm-sidebar-brand-mini"></span></span>
        <span class="tk-sidebar-group">Umum</span>
        <a class="tk-sidebar-item tk-sidebar-item-active" href="#">${ic('home')} <span class="tk-sidebar-label">Dashboard</span></a>
        <a class="tk-sidebar-item" href="#">${ic('users')} <span class="tk-sidebar-label">Pengguna</span></a>
        <a class="tk-sidebar-item" href="#">${ic('folder')} <span class="tk-sidebar-label">Proyek</span></a>
        <span class="tk-sidebar-group">Analitik</span>
        <a class="tk-sidebar-item" href="#">${ic('chart-bar')} <span class="tk-sidebar-label">Laporan</span></a>
        <a class="tk-sidebar-item" href="#">${ic('gift')} <span class="tk-sidebar-label">Hadiah</span></a>
        <span class="tk-sidebar-group">Lainnya</span>
        <a class="tk-sidebar-item" href="#">${ic('cog')} <span class="tk-sidebar-label">Pengaturan</span></a>
        <a class="tk-sidebar-item" href="#">${ic('question-circle')} <span class="tk-sidebar-label">Bantuan</span></a>
        <div class="tk-dropdown dm-sidebar-foot">
            <button class="dm-foot-btn" type="button" aria-label="Menu profil">
                <span class="dm-avatar">JD</span>
                <span class="tk-sidebar-label" style="min-width: 0"><span class="tk-body-sm" style="display: block; font-weight: 700">Jane Doe</span><span class="tk-caption" style="text-transform: none">jane@contoh.com</span></span>
                <span class="dm-foot-chevron tk-sidebar-label">${ic('chevron-down', 15)}</span>
            </button>
            <div class="tk-dropdown-menu tk-dropdown-menu-up">
                <button class="tk-dropdown-item" type="button">${ic('user', 16)} Profil</button>
                <button class="tk-dropdown-item" type="button">${ic('cog', 16)} Pengaturan</button>
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
            ">${ic('menu', 20)}</button>
            <nav class="tk-breadcrumb dm-crumb">
                <a href="#">Beranda</a>
                <span class="tk-breadcrumb-sep">${ic('chevron-right', 13)}</span>
                <a href="#">Analitik</a>
                <span class="tk-breadcrumb-sep">${ic('chevron-right', 13)}</span>
                <span class="tk-breadcrumb-current">Dashboard</span>
            </nav>
            <div class="dm-topbar-spacer">
                <div class="tk-search">
                    <span class="tk-search-icon">${ic('search', 16)}</span>
                    <input class="tk-input" type="search" placeholder="Cari apa saja...">
                    <kbd class="tk-search-kbd">Ctrl K</kbd>
                </div>
                <button class="tk-action-btn" aria-label="Notifikasi">${ic('bell')}</button>
            </div>
        </header>
        <main class="dm-content">
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap">
                <div>
                    <h2 class="tk-h2" style="margin: 0">Halo, Jane! ${ic('smile', 26)}</h2>
                    <p class="tk-body-sm tk-muted" style="margin: 4px 0 0">Ringkasan aktivitas proyek Anda hari ini.</p>
                </div>
                <span class="tk-sticker">${ic('rocket', 15)} Rekor baru minggu ini</span>
            </div>
            <div class="dm-stats">
                <div class="tk-card tk-card-stat tk-pop-pink"><div class="tk-card-body"><p class="tk-caption">Total Pengguna</p><p class="tk-stat-value" style="margin: 4px 0">12.540</p><span class="tk-stat-trend-up" style="color: #FFFFFF">+12,5% dari bulan lalu</span></div></div>
                <div class="tk-card tk-card-stat tk-pop-blue"><div class="tk-card-body"><p class="tk-caption">Pendapatan</p><p class="tk-stat-value" style="margin: 4px 0">Rp84,2 jt</p><span class="tk-stat-trend-up" style="color: #FFFFFF">+8,1% dari bulan lalu</span></div></div>
                <div class="tk-card tk-card-stat tk-pop-lime"><div class="tk-card-body"><p class="tk-caption">Pesanan Baru</p><p class="tk-stat-value" style="margin: 4px 0">1.203</p><span class="tk-stat-trend-down">-2,4% dari bulan lalu</span></div></div>
                <div class="tk-card tk-card-stat tk-pop-orange"><div class="tk-card-body"><p class="tk-caption">Konversi</p><p class="tk-stat-value" style="margin: 4px 0">3,6%</p><span class="tk-stat-trend-up" style="color: #FFFFFF">+0,8% dari bulan lalu</span></div></div>
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
                    <span class="tk-search-icon">${ic('search', 16)}</span>
                    <input class="tk-input" type="search" placeholder="Cari nama atau email...">
                </div>
                <div class="tk-select">
                    <button class="tk-select-trigger" type="button">Semua status ${ic('chevron-down', 15)}</button>
                    <div class="tk-select-menu">
                        <button class="tk-option tk-option-selected" type="button">Semua status <span class="tk-option-check">${ic('check', 15)}</span></button>
                        <button class="tk-option" type="button">Aktif</button>
                        <button class="tk-option" type="button">Nonaktif</button>
                    </div>
                </div>
                <button class="tk-btn tk-btn-outline">${ic('filter', 16)} Filter</button>
            </div>
            <div class="tk-card">
                <div class="tk-card-header" style="display: flex; align-items: center; justify-content: space-between"><h3 class="tk-h4" style="margin: 0">Pengguna Terbaru</h3><button class="tk-btn tk-btn-primary tk-btn-sm">${ic('plus', 14)} Tambah</button></div>
                <div class="tk-card-body dm-table-wrap">
                    <table class="tk-table">
                        <thead><tr><th>Nama</th><th>Email</th><th>Peran</th><th>Status</th><th class="tk-table-actions">Aksi</th></tr></thead>
                        <tbody>
                            <tr><td>Jane Smith</td><td>jane@contoh.com</td><td>Designer</td><td><span class="tk-badge tk-badge-success">Aktif</span></td><td class="tk-table-actions"><button class="tk-action-btn" aria-label="Lihat">${ic('eye', 16)}</button><button class="tk-action-btn" aria-label="Edit">${ic('edit-one', 16)}</button><button class="tk-action-btn tk-action-btn-danger" aria-label="Hapus">${ic('trash', 16)}</button></td></tr>
                            <tr><td>John Doe</td><td>john@contoh.com</td><td>Developer</td><td><span class="tk-badge tk-badge-warning">Menunggu</span></td><td class="tk-table-actions"><button class="tk-action-btn" aria-label="Lihat">${ic('eye', 16)}</button><button class="tk-action-btn" aria-label="Edit">${ic('edit-one', 16)}</button><button class="tk-action-btn tk-action-btn-danger" aria-label="Hapus">${ic('trash', 16)}</button></td></tr>
                            <tr><td>Maya Putri</td><td>maya@contoh.com</td><td>Manajer</td><td><span class="tk-badge tk-badge-danger">Nonaktif</span></td><td class="tk-table-actions"><div class="tk-dropdown"><button class="tk-action-btn" aria-label="Menu aksi">${ic('dots', 16)}</button><div class="tk-dropdown-menu tk-dropdown-menu-right"><button class="tk-dropdown-item">${ic('eye', 16)} Lihat detail</button><button class="tk-dropdown-item">${ic('edit-one', 16)} Edit</button><hr class="tk-dropdown-divider"><button class="tk-dropdown-item tk-dropdown-item-danger">${ic('trash', 16)} Hapus</button></div></div></td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="tk-card-footer" style="justify-content: space-between; align-items: center"><span class="tk-caption">Menampilkan 3 dari 128 pengguna</span><nav class="tk-pagination"><button class="tk-page">&lsaquo;</button><button class="tk-page tk-page-active">1</button><button class="tk-page">2</button><button class="tk-page">3</button><button class="tk-page">&rsaquo;</button></nav></div>
            </div>
            <div class="dm-grid2">
                <div class="tk-card">
                    <div class="tk-card-header"><h3 class="tk-h4" style="margin: 0">Progres Proyek</h3></div>
                    <div class="tk-card-body">
                        <div class="dm-progress-row"><span class="tk-caption"><span>Website Perusahaan</span><span>80%</span></span><div class="tk-progress"><div class="tk-progress-bar" style="width: 80%"></div></div></div>
                        <div class="dm-progress-row"><span class="tk-caption"><span>Aplikasi Mobile</span><span>45%</span></span><div class="tk-progress"><div class="tk-progress-bar" style="width: 45%"></div></div></div>
                        <div class="dm-progress-row" style="margin-bottom: 0"><span class="tk-caption"><span>Migrasi Data</span><span>15%</span></span><div class="tk-progress"><div class="tk-progress-bar" style="width: 15%"></div></div></div>
                    </div>
                </div>
                <div class="tk-card">
                    <div class="tk-card-header"><h3 class="tk-h4" style="margin: 0">Aktivitas Terakhir</h3></div>
                    <div class="tk-card-body dm-activity">
                        <div class="dm-activity-item">${ic('user', 16)}<span><strong>Jane Smith</strong> bergabung ke tim &middot; <span class="tk-caption" style="text-transform: none">5 menit lalu</span></span></div>
                        <div class="dm-activity-item">${ic('check-circle', 16)}<span>Laporan Juli disetujui &middot; <span class="tk-caption" style="text-transform: none">1 jam lalu</span></span></div>
                        <div class="dm-activity-item">${ic('danger-triangle', 16)}<span>Kuota penyimpanan hampir penuh &middot; <span class="tk-caption" style="text-transform: none">3 jam lalu</span></span></div>
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
            datasets: [{ label: 'Pendapatan (jt)', data: [52, 61, 58, 71, 78, 84], borderColor: t.primary, backgroundColor: t.primary + '26', fill: true, tension: 0.45, pointRadius: 5, pointBackgroundColor: '#C6FF1F', pointBorderColor: t.text, pointBorderWidth: 2, borderWidth: 4 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('dm-chart-traffic', function (t) {
    return {
        type: 'doughnut',
        data: { labels: ['Direct', 'Organik', 'Sosial', 'Referral'], datasets: [{ data: [38, 31, 19, 12], backgroundColor: ['#FF2D87', '#2D5BFF', '#C6FF1F', '#FF8A00'], borderColor: t.text, borderWidth: 2 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '58%', plugins: { legend: { position: 'bottom' } } }
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
    const list = items.map(item => `<li>${ic('check-circle', 16)} ${item}</li>`).join('\n                ');
    return `<div class="tk-card lp-plan${featured ? ' lp-plan-featured' : ''}">
        <div class="tk-card-body">
            ${featured ? '<span class="tk-sticker tk-sticker-pink">Paling populer</span>' : ''}
            <h3 class="tk-h3" style="margin: ${featured ? '14px' : '0'} 0 4px">${title}</h3>
            <p class="lp-price">${price}<span class="tk-caption">/bulan</span></p>
            <ul class="lp-plan-list">
                ${list}
            </ul>
            <button class="tk-btn ${featured ? 'tk-btn-primary' : 'tk-btn-outline'}" style="width: 100%">Pilih ${title}</button>
        </div>
    </div>`;
}

function feature(iconName: string, title: string, text: string): string {
    return `<div class="tk-feature"><span class="tk-feature-icon">${ic(iconName, 26)}</span><h4 class="tk-h4" style="margin: 0">${title}</h4><p class="tk-body-sm tk-muted" style="margin: 0">${text}</p></div>`;
}

/**
 * Kerangka SEO landing page — bagian kontrak kit (§7): judul berpola "Brand — proposisi nilai",
 * meta description, canonical, Open Graph + Twitter card, dan JSON-LD schema.org
 * (Organization/WebSite/WebPage + SoftwareApplication dengan penawaran harga yang sama dengan
 * seksi harga di halaman). Domain `https://contoh.id` dan brand `Logo` adalah placeholder yang
 * WAJIB diganti data proyek saat halaman ini disalin.
 */
const LANDING_SEO_HEAD = `<title>Logo — Kelola proyek tanpa drama</title>
<meta name="description" content="Satu tempat untuk merencanakan, melacak, dan menyelesaikan pekerjaan tim Anda. Mulai gratis, tanpa kartu kredit.">
<link rel="canonical" href="https://contoh.id/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Logo">
<meta property="og:title" content="Logo — Kelola proyek tanpa drama">
<meta property="og:description" content="Satu tempat untuk merencanakan, melacak, dan menyelesaikan pekerjaan tim Anda. Mulai gratis, tanpa kartu kredit.">
<meta property="og:url" content="https://contoh.id/">
<meta property="og:image" content="https://contoh.id/og-image.png">
<meta property="og:locale" content="id_ID">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Logo — Kelola proyek tanpa drama">
<meta name="twitter:description" content="Satu tempat untuk merencanakan, melacak, dan menyelesaikan pekerjaan tim Anda. Mulai gratis, tanpa kartu kredit.">
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
            "name": "Logo — Kelola proyek tanpa drama",
            "description": "Satu tempat untuk merencanakan, melacak, dan menyelesaikan pekerjaan tim Anda. Mulai gratis, tanpa kartu kredit.",
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
                { "@type": "Offer", "name": "Gratis", "price": "0", "priceCurrency": "IDR" },
                { "@type": "Offer", "name": "Pro", "price": "99000", "priceCurrency": "IDR" },
                { "@type": "Offer", "name": "Bisnis", "price": "299000", "priceCurrency": "IDR" }
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
    .lp-skip { position: absolute; left: -9999px; top: 0; z-index: 30; background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); padding: 8px 16px; border-radius: var(--tk-radius-full); text-decoration: none; font-size: var(--tk-text-body-sm); }
    .lp-skip:focus { left: 12px; top: 60px; }
    .lp-header { position: sticky; top: 48px; z-index: 10; }
    .ex-embedded .lp-header { top: 0; }
    main [id] { scroll-margin-top: 128px; }
    .lp-hero-stickers { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 32px; }
    .lp-proof { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
    .lp-proof-stats { display: flex; gap: 16px; margin-top: 24px; flex-wrap: wrap; }
    .lp-proof-stat { background: var(--tk-color-surface); border: 2px solid var(--tk-color-text); border-radius: var(--tk-radius); padding: 14px 22px; box-shadow: var(--tk-shadow-sm); }
    .lp-proof-stat .tk-bignum { font-size: 38px; }
    .lp-proof-stat:nth-child(2) .tk-bignum { color: var(--tk-dp-blue); }
    .lp-proof-stat:nth-child(3) .tk-bignum { color: var(--tk-dp-orange); }
    .lp-proof-stat .tk-caption { display: block; margin-top: 2px; }
    .lp-chart-box { position: relative; height: 280px; }
    .lp-links { display: flex; gap: 4px; align-items: center; }
    .lp-burger { display: none; }
    .lp-section { max-width: var(--tk-container); margin: 0 auto; padding: 88px 24px; width: 100%; box-sizing: border-box; }
    .lp-section-head { text-align: center; margin-bottom: 48px; }
    .lp-section-sub { color: var(--tk-color-text-muted); max-width: 560px; margin: 0 auto; font-weight: 500; }
    .lp-features { grid-template-columns: repeat(3, 1fr); }
    .lp-pricing { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: start; }
    .lp-plan-featured { background: var(--tk-color-surface-2); box-shadow: 0 8px 0 var(--tk-color-text); }
    .lp-price { font-family: var(--tk-font-heading); font-weight: 700; font-size: 40px; margin: 0 0 8px; letter-spacing: -0.03em; }
    .lp-plan-list { list-style: none; padding: 0; margin: 12px 0 20px; display: flex; flex-direction: column; gap: 10px; font-size: var(--tk-text-body-sm); font-weight: 500; }
    .lp-plan-list li { display: flex; align-items: center; gap: 8px; }
    .lp-plan-list iconify-icon { color: var(--tk-color-primary); flex: none; }
    .lp-footer { background: var(--tk-color-text); color: #FFF3E4; }
    .lp-footer-inner { max-width: var(--tk-container); margin: 0 auto; padding: 28px 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
    .lp-footer .tk-caption { color: rgba(255, 243, 228, 0.75); }
    .lp-footer-links { display: flex; gap: 20px; }
    .lp-footer-links a { color: #FFF3E4; text-decoration: none; font-size: var(--tk-text-body-sm); font-weight: 600; }
    .lp-footer-links a:hover { color: var(--tk-color-accent); }
    @media (max-width: 860px) {
        .lp-links { display: none; }
        .lp-burger { display: inline-flex; }
        .lp-features { grid-template-columns: 1fr; }
        .lp-pricing { grid-template-columns: 1fr; }
        .lp-proof { grid-template-columns: 1fr; gap: 24px; }
        .lp-chart-box { height: 220px; }
        .lp-section { padding: 56px 24px; }
        .tk-hero { padding: 64px 24px; }
        .tk-hero .tk-display { font-size: 42px; }
        .tk-cta { flex-direction: column; text-align: center; }
    }
</style>
</head>
<body>
${EX_EMBED_SCRIPT}
${exNav('Dopamine', 'landing', '../', { device: { base: 'landing', active: 'web' }, themeToggle: false })}
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
    <button class="tk-action-btn lp-burger" aria-label="Menu">${ic('menu', 20)}</button>
</nav>
</header>
<main id="konten-utama">
<section class="tk-hero" id="beranda" aria-labelledby="lp-h-hero">
    <p class="tk-sticker">${ic('sparkles', 15)} Gratis 14 hari &mdash; tanpa kartu kredit</p>
    <h1 class="tk-display" id="lp-h-hero" style="margin-top: 28px">Kelola proyek <span class="tk-highlight">tanpa drama</span></h1>
    <p class="tk-hero-sub">Satu tempat untuk merencanakan, melacak, dan menyelesaikan pekerjaan tim Anda &mdash; seru dipakai setiap hari.</p>
    <div class="tk-hero-actions">
        <button class="tk-btn tk-btn-primary tk-btn-lg">Mulai Gratis</button>
        <button class="tk-btn tk-btn-outline tk-btn-lg">Lihat Demo</button>
    </div>
    <div class="lp-hero-stickers">
        <span class="tk-sticker tk-sticker-blue">${ic('rocket', 15)} Setup 2 menit</span>
        <span class="tk-sticker">${ic('users', 15)} 36rb tim</span>
        <span class="tk-sticker tk-sticker-pink">${ic('star', 15)} Rating 4,8/5</span>
    </div>
</section>
<hr class="tk-squiggle" style="max-width: 1152px; margin-left: auto; margin-right: auto">
<section id="fitur" aria-labelledby="lp-h-fitur">
    <div class="lp-section" style="padding-top: 40px">
        <div class="lp-section-head">
            <span class="tk-sticker tk-sticker-blue">Fitur</span>
            <h2 class="tk-h1" id="lp-h-fitur" style="margin: 20px 0 8px">Semua yang tim Anda butuhkan</h2>
            <p class="lp-section-sub">Fitur yang benar-benar dipakai, bukan daftar panjang yang membingungkan.</p>
        </div>
        <div class="tk-feature-grid lp-features">
            ${feature('lightning', 'Cepat', 'Halaman dan pencarian merespons dalam hitungan milidetik.')}
            ${feature('shield-check', 'Aman', 'Enkripsi menyeluruh dan kontrol akses per peran.')}
            ${feature('chart-bar', 'Terukur', 'Laporan kemajuan otomatis untuk setiap proyek.')}
            ${feature('users', 'Kolaboratif', 'Komentar, mention, dan tugas dalam satu alur.')}
            ${feature('power', 'Terintegrasi', 'Terhubung dengan alat yang sudah tim Anda pakai.')}
            ${feature('gift', 'Menyenangkan', 'Rayakan setiap tugas selesai dengan konfeti.')}
        </div>
    </div>
</section>
<section id="bukti" aria-labelledby="lp-h-bukti">
    <div class="lp-section" style="padding-top: 0">
        <div class="lp-proof">
            <div>
                <span class="tk-sticker">Traksi</span>
                <h2 class="tk-h1" style="margin: 20px 0 8px" id="lp-h-bukti">Tumbuh bersama ribuan tim</h2>
                <p class="tk-muted" style="margin: 0; max-width: 440px">Pengguna aktif naik empat kuartal berturut-turut. Angkanya bicara sendiri &mdash; dan tim Anda bisa jadi bagian berikutnya.</p>
                <div class="lp-proof-stats">
                    <div class="lp-proof-stat"><p class="tk-bignum">36rb</p><span class="tk-caption">Pengguna aktif</span></div>
                    <div class="lp-proof-stat"><p class="tk-bignum">99,9%</p><span class="tk-caption">Uptime</span></div>
                    <div class="lp-proof-stat"><p class="tk-bignum">4,8/5</p><span class="tk-caption">Rating pengguna</span></div>
                </div>
            </div>
            <div class="tk-card"><div class="tk-card-body">
                <p class="tk-h4" style="margin: 0 0 12px">Pengguna aktif per kuartal</p>
                <div class="lp-chart-box"><canvas id="lp-chart-growth"></canvas></div>
            </div></div>
        </div>
    </div>
</section>
<section id="harga" aria-labelledby="lp-h-harga">
    <div class="lp-section" style="padding-top: 0">
        <div class="lp-section-head">
            <span class="tk-sticker tk-sticker-pink">Harga</span>
            <h2 class="tk-h1" id="lp-h-harga" style="margin: 20px 0 8px">Harga yang sederhana</h2>
            <p class="lp-section-sub">Mulai gratis, naikkan paket saat tim Anda tumbuh.</p>
        </div>
        <div class="lp-pricing">
            ${plan('Gratis', 'Rp0', ['3 proyek aktif', '5 anggota tim', 'Papan tugas dasar'], false)}
            ${plan('Pro', 'Rp99rb', ['Proyek tanpa batas', '25 anggota tim', 'Laporan & automasi', 'Dukungan prioritas'], true)}
            ${plan('Bisnis', 'Rp299rb', ['Semua fitur Pro', 'Anggota tanpa batas', 'SSO & audit log', 'SLA 99,9%'], false)}
        </div>
    </div>
</section>
<section id="cta" aria-labelledby="lp-h-cta">
    <div class="lp-section" style="padding-top: 0">
        <div class="tk-cta">
            <div><h2 class="tk-h3" id="lp-h-cta" style="margin: 0">Siap memulai?</h2><p class="tk-muted" style="margin: 4px 0 0">Gratis 14 hari, tanpa kartu kredit.</p></div>
            <button class="tk-btn tk-btn-primary tk-btn-lg">Coba Sekarang ${ic('arrow-right', 16)}</button>
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
            datasets: [{ label: 'Pengguna aktif (ribu)', data: [14, 19, 27, 36], backgroundColor: ['#FF8A00', '#2D5BFF', '#C6FF1F', '#FF2D87'], borderColor: t.text, borderWidth: 2, borderRadius: 12, maxBarThickness: 60 }]
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
    .au-wrap { min-height: calc(100vh - 48px); box-sizing: border-box; display: flex; align-items: center; justify-content: center; padding: 40px 16px; }
    .ex-embedded .au-wrap { min-height: 100vh; }
    .au-card { width: 100%; max-width: 410px; }
    .au-brand { font-family: var(--tk-font-heading); font-weight: 700; font-size: var(--tk-text-h3); text-align: center; margin-bottom: 18px; }
    .au-title { text-align: center; margin: 0 0 4px; }
    .au-sub { text-align: center; margin: 0 0 20px; text-transform: none; }
    .au-full { width: 100%; box-sizing: border-box; }
    .au-divider { display: flex; align-items: center; gap: 12px; margin: 18px 0; color: var(--tk-color-text-muted); font-size: var(--tk-text-caption); font-weight: 600; }
    .au-divider::before, .au-divider::after { content: ''; height: 2px; flex: 1; background: var(--tk-color-surface-2); border-radius: 999px; }
    .au-card .tk-field { margin-bottom: 14px; }
    .au-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 4px 0 18px; font-size: var(--tk-text-body-sm); }
    .au-link { color: var(--tk-color-primary); text-decoration: none; font-weight: 700; }
    .au-link:hover { text-decoration: underline; }
    .au-alt { text-align: center; margin: 18px 0 0; text-transform: none; }`;

function authPage(base: 'login' | 'register', title: string, body: string): string {
    return `<!DOCTYPE html>
<html lang="id">
<head>
${HEAD_COMMON}
<title>Dopamine — Contoh ${title}</title>
<style>
    ${EX_NAV_CSS}
${AUTH_CSS}
</style>
</head>
<body>
${EX_EMBED_SCRIPT}
${exNav('Dopamine', 'components', '../', { device: { base, active: 'web' }, themeToggle: false })}
<div class="au-wrap">
    <div class="tk-card au-card">
        <div class="tk-card-body">
            <div class="au-brand">Logo</div>
${body}
        </div>
    </div>
</div>
</body>
</html>
`;
}

/** Isi kartu login; dipakai halaman contoh dan seksi Login & Register di showcase. */
export const AUTH_LOGIN_FORM = `            <h1 class="tk-h3 au-title">Selamat datang kembali!</h1>
            <p class="tk-caption au-sub">Masuk untuk melanjutkan pekerjaan Anda.</p>
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
<title>Dopamine — ${title} (Ponsel)</title>
<style>
    ${EX_NAV_CSS}
    body { min-height: 100vh; margin: 0; box-sizing: border-box; }
    .ex-stage { display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 20px; }
    .ex-device { width: 412px; max-width: 100%; height: 780px; max-height: calc(100vh - 150px); min-height: 420px; border: 12px solid #241436; border-radius: 48px; background: #241436; box-shadow: 0 10px 0 rgba(36, 20, 54, 0.2), 0 30px 56px rgba(255, 45, 135, 0.28); overflow: hidden; flex: none; }
    .ex-device iframe { width: 100%; height: 100%; border: none; border-radius: 36px; background: var(--tk-color-background); }
</style>
</head>
<body>
${exNav('Dopamine', view, '../', { device: { base, active: 'mobile' }, themeToggle: false })}
<div class="ex-stage">
    <div class="ex-device"><iframe src="${base}.html?tk-embed" title="${title} versi ponsel"></iframe></div>
    <p class="tk-caption">${title} &mdash; lebar 388px, media query kit aktif seperti di ponsel sungguhan.</p>
</div>
</body>
</html>
`;
}

export const DOPAMINE_EXAMPLES: Record<string, string> = {
    'examples/dashboard.html': DASHBOARD,
    'examples/dashboard-mobile.html': deviceFrame('Admin Dashboard', 'dashboard', 'dashboard'),
    'examples/landing.html': LANDING,
    'examples/landing-mobile.html': deviceFrame('Landing Page', 'landing', 'landing'),
    'examples/login.html': LOGIN,
    'examples/login-mobile.html': deviceFrame('Login', 'components', 'login'),
    'examples/register.html': REGISTER,
    'examples/register-mobile.html': deviceFrame('Register', 'components', 'register')
};
