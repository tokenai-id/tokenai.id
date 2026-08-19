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
 * Halaman contoh (`examples/`) kit Monochrome: admin dashboard dan landing page utuh yang dirakit
 * murni dari komponen kontrak, responsif untuk web dan ponsel. Dua peran sekaligus: bukti visual
 * kit di halaman nyata (dibuka dari showcase) dan kerangka awal yang boleh disalin agen saat
 * pengguna meminta halaman sejenis — lebih murah daripada merakit dari nol.
 *
 * Landing page-nya sengaja bukan SaaS melainkan studio: kit ini menaruh fotografi sebagai salah
 * satu dari empat alat utamanya, dan halaman produk tanpa foto tidak akan pernah membuktikan
 * bagian itu. Strukturnya tetap sama dengan kit lain seksi demi seksi (navbar, hero, fitur,
 * bukti ber-chart, harga, CTA, footer) supaya masih bisa dibandingkan berdampingan.
 *
 * Kit ini dua-mode, jadi saklar tema di bilah pratinjau dibiarkan hidup dan bingkai ponsel
 * meneruskan penggelapan ke dokumen di dalam iframe-nya lewat `FRAME_THEME_EXTRA_JS`.
 *
 * Kelas `dm-*` / `lp-*` / `au-*` / `ex-*` adalah perancah halaman contoh, bukan kontrak kit.
 */

// Perancah pratinjau kit-agnostik, dipakai bersama lintas kit; rumahnya masih di kit pertama.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_EMBED_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

function ic(name: string, size = 17): string {
    return `<iconify-icon icon="jam:${name}" width="${size}" height="${size}"></iconify-icon>`;
}

const FONT_LINK = 'https://fonts.googleapis.com/css2?family=Epilogue:wght@500;600;700;800&family=Instrument+Sans:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap';

const HEAD_COMMON = `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="${FONT_LINK}" rel="stylesheet">
<link rel="stylesheet" href="../styles.css">
<script src="https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"></script>`;

/**
 * Chart kit ini tidak bisa memakai primary/secondary/accent begitu saja: ketiganya nyaris
 * senada. Empat anak tangga yang berjarak jauh dibaca langsung dari token supaya deretnya
 * tetap terbaca sebagai empat nilai berbeda — dan ikut membalik sendiri saat tema berganti.
 */
const TONE_HELPER = `
function moTone(step) { return getComputedStyle(document.documentElement).getPropertyValue('--tk-mo-' + step).trim(); }
function moRamp() { return [moTone(900), moTone(600), moTone(400), moTone(300)]; }
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
<title>Monochrome — Contoh Admin Dashboard</title>
<style>
    /* Perancah halaman contoh (dm-*): bukan bagian kontrak kit. */
    ${EX_NAV_CSS}
    .dm-shell { display: flex; min-height: calc(100vh - 48px); }
    .dm-sidebar { position: sticky; top: 48px; height: calc(100vh - 48px); box-sizing: border-box; }
    .dm-sidebar-brand { font-family: var(--tk-font-heading); font-weight: 800; font-size: 15px; letter-spacing: 0.16em; text-transform: uppercase; padding: 12px 16px 24px; white-space: nowrap; }
    .dm-sidebar-brand-mini { display: none; }
    .tk-sidebar-collapsed .dm-sidebar-brand { text-align: center; padding: 12px 0 24px; }
    .tk-sidebar-collapsed .dm-sidebar-brand-mini { display: inline; }
    .dm-sidebar-foot { margin-top: auto; display: block; padding-top: 8px; border-top: 1px solid var(--tk-color-border); }
    .dm-foot-btn { display: flex; align-items: center; gap: 10px; width: 100%; padding: 8px; border: none; background: transparent; font-family: inherit; color: var(--tk-color-text); text-align: left; cursor: pointer; }
    .dm-foot-btn:hover { background: var(--tk-color-surface-2); }
    .dm-foot-chevron { margin-left: auto; color: var(--tk-color-text-muted); }
    .dm-sidebar-foot .tk-dropdown-menu { left: 0; right: 0; min-width: 0; }
    .tk-sidebar-collapsed .dm-foot-btn { justify-content: center; padding: 8px 0; }
    .dm-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
    .dm-topbar { display: flex; align-items: center; gap: 16px; padding: 12px 24px; background: var(--tk-color-surface); border-bottom: 1px solid var(--tk-color-border); position: sticky; top: 48px; z-index: 10; }
    .ex-embedded .dm-shell { min-height: 100vh; }
    .ex-embedded .dm-sidebar { top: 0; height: 100vh; }
    .ex-embedded .dm-topbar { top: 0; }
    .dm-topbar .tk-search { width: 260px; }
    .dm-topbar-spacer { margin-left: auto; display: flex; align-items: center; gap: 8px; }
    /* Avatar: inisial di dalam kotak tinta — tidak ada bulatan berwarna di kit ini. */
    .dm-avatar { width: 32px; height: 32px; background: var(--tk-color-text); color: var(--tk-color-background); display: inline-flex; align-items: center; justify-content: center; font-family: var(--tk-font-mono); font-size: 11px; font-weight: 500; flex: none; }
    .dm-content { padding: 24px; display: flex; flex-direction: column; gap: 24px; }
    .dm-page-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; padding-bottom: 12px; border-bottom: 2px solid var(--tk-color-text); }
    .dm-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--tk-color-border); border: 1px solid var(--tk-color-border); }
    /* Kartu statistik dirapatkan jadi satu blok bergaris: nadanya sama, yang memisahkan
       hanya hairline — persis cara tabel angka di laporan cetak. */
    .dm-stats .tk-card { border: none; }
    .dm-grid2 { display: grid; grid-template-columns: 3fr 2fr; gap: 24px; align-items: start; }
    .dm-chart-box { position: relative; height: 260px; }
    .dm-table-wrap { overflow-x: auto; }
    .dm-progress-row { margin-bottom: 18px; font-size: var(--tk-text-body-sm); }
    .dm-progress-row .tk-caps { display: flex; justify-content: space-between; margin-bottom: 8px; }
    .dm-activity { display: flex; flex-direction: column; }
    .dm-activity-item { display: flex; gap: 12px; align-items: flex-start; font-size: var(--tk-text-body-sm); padding: 12px 0; border-bottom: 1px solid var(--tk-color-border); }
    .dm-activity-item:last-child { border-bottom: none; padding-bottom: 0; }
    .dm-activity-item iconify-icon { color: var(--tk-color-text); margin-top: 2px; flex: none; }
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
${exNav('Monochrome', 'dashboard', '../', { device: { base: 'dashboard', active: 'web' } })}
<div class="dm-shell">
    <aside class="tk-sidebar dm-sidebar">
        <span class="dm-sidebar-brand"><span class="tk-sidebar-label">Logo</span><span class="dm-sidebar-brand-mini">L</span></span>
        <span class="tk-sidebar-group">Umum</span>
        <a class="tk-sidebar-item tk-sidebar-item-active" href="#">${ic('dashboard')} <span class="tk-sidebar-label">Dashboard</span></a>
        <a class="tk-sidebar-item" href="#">${ic('users')} <span class="tk-sidebar-label">Pengguna</span></a>
        <a class="tk-sidebar-item" href="#">${ic('folder')} <span class="tk-sidebar-label">Proyek</span></a>
        <span class="tk-sidebar-group">Analitik</span>
        <a class="tk-sidebar-item" href="#">${ic('bar-chart')} <span class="tk-sidebar-label">Laporan</span></a>
        <a class="tk-sidebar-item" href="#">${ic('document')} <span class="tk-sidebar-label">Statistik</span></a>
        <span class="tk-sidebar-group">Lainnya</span>
        <a class="tk-sidebar-item" href="#">${ic('cog')} <span class="tk-sidebar-label">Pengaturan</span></a>
        <a class="tk-sidebar-item" href="#">${ic('help')} <span class="tk-sidebar-label">Bantuan</span></a>
        <div class="tk-dropdown dm-sidebar-foot">
            <button class="dm-foot-btn" type="button" aria-label="Menu profil">
                <span class="dm-avatar">JD</span>
                <span class="tk-sidebar-label" style="min-width: 0"><span class="tk-body-sm" style="display: block; font-weight: 600">Jane Doe</span><span class="tk-caption">jane@contoh.com</span></span>
                <span class="dm-foot-chevron tk-sidebar-label">${ic('chevron-down', 14)}</span>
            </button>
            <div class="tk-dropdown-menu tk-dropdown-menu-up">
                <button class="tk-dropdown-item" type="button">${ic('user', 15)} Profil</button>
                <button class="tk-dropdown-item" type="button">${ic('cog', 15)} Pengaturan</button>
                <hr class="tk-dropdown-divider">
                <button class="tk-dropdown-item tk-dropdown-item-danger" type="button">${ic('log-out', 15)} Keluar</button>
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
                <span class="tk-breadcrumb-sep">${ic('chevron-right', 12)}</span>
                <a href="#">Analitik</a>
                <span class="tk-breadcrumb-sep">${ic('chevron-right', 12)}</span>
                <span class="tk-breadcrumb-current">Dashboard</span>
            </nav>
            <div class="dm-topbar-spacer">
                <div class="tk-search">
                    <span class="tk-search-icon">${ic('search', 15)}</span>
                    <input class="tk-input" type="search" placeholder="Cari apa saja...">
                    <kbd class="tk-search-kbd">Ctrl K</kbd>
                </div>
                <button class="tk-action-btn" aria-label="Notifikasi">${ic('bell', 18)}</button>
            </div>
        </header>
        <main class="dm-content">
            <div class="dm-page-head">
                <div>
                    <p class="tk-caps" style="margin: 0 0 6px">Ringkasan</p>
                    <h2 class="tk-h3" style="margin: 0">Dashboard</h2>
                </div>
                <span class="tk-caption">Diperbarui 14 Agustus 2026, 09.20</span>
            </div>
            <div class="dm-stats">
                <div class="tk-card tk-card-stat"><div class="tk-card-body"><p class="tk-caps">Total Pengguna</p><p class="tk-stat-value" style="margin: 6px 0">12.540</p><span class="tk-stat-trend-up">12,5% dari bulan lalu</span></div></div>
                <div class="tk-card tk-card-stat"><div class="tk-card-body"><p class="tk-caps">Pendapatan</p><p class="tk-stat-value" style="margin: 6px 0">Rp84,2 jt</p><span class="tk-stat-trend-up">8,1% dari bulan lalu</span></div></div>
                <div class="tk-card tk-card-stat"><div class="tk-card-body"><p class="tk-caps">Pesanan Baru</p><p class="tk-stat-value" style="margin: 6px 0">1.203</p><span class="tk-stat-trend-down">2,4% dari bulan lalu</span></div></div>
                <div class="tk-card tk-card-stat"><div class="tk-card-body"><p class="tk-caps">Konversi</p><p class="tk-stat-value" style="margin: 6px 0">3,6%</p><span class="tk-stat-trend-up">0,8% dari bulan lalu</span></div></div>
            </div>
            <div class="dm-grid2">
                <div class="tk-card">
                    <div class="tk-card-header" style="display: flex; align-items: center; justify-content: space-between"><h3 class="tk-title" style="margin: 0">Pendapatan</h3><span class="tk-caps">6 bulan terakhir</span></div>
                    <div class="tk-card-body"><div class="dm-chart-box"><canvas id="dm-chart-revenue"></canvas></div></div>
                </div>
                <div class="tk-card">
                    <div class="tk-card-header"><h3 class="tk-title" style="margin: 0">Sumber Trafik</h3></div>
                    <div class="tk-card-body"><div class="dm-chart-box"><canvas id="dm-chart-traffic"></canvas></div></div>
                </div>
            </div>
            <div class="tk-filter-bar">
                <div class="tk-search">
                    <span class="tk-search-icon">${ic('search', 15)}</span>
                    <input class="tk-input" type="search" placeholder="Cari nama atau email...">
                </div>
                <div class="tk-select">
                    <button class="tk-select-trigger" type="button">Semua status ${ic('chevron-down', 14)}</button>
                    <div class="tk-select-menu">
                        <button class="tk-option tk-option-selected" type="button">Semua status <span class="tk-option-check">${ic('check', 15)}</span></button>
                        <button class="tk-option" type="button">Aktif</button>
                        <button class="tk-option" type="button">Nonaktif</button>
                    </div>
                </div>
                <button class="tk-btn tk-btn-outline">${ic('filter', 15)} Filter</button>
            </div>
            <div class="tk-card">
                <div class="tk-card-header" style="display: flex; align-items: center; justify-content: space-between"><h3 class="tk-title" style="margin: 0">Pengguna Terbaru</h3><button class="tk-btn tk-btn-primary tk-btn-sm">${ic('plus', 14)} Tambah</button></div>
                <div class="tk-card-body dm-table-wrap">
                    <table class="tk-table">
                        <thead><tr><th>Nama</th><th>Email</th><th>Peran</th><th>Status</th><th class="tk-table-actions">Aksi</th></tr></thead>
                        <tbody>
                            <tr><td>Jane Smith</td><td>jane@contoh.com</td><td>Designer</td><td><span class="tk-badge tk-badge-success">Aktif</span></td><td class="tk-table-actions"><button class="tk-action-btn" aria-label="Lihat">${ic('eye', 15)}</button><button class="tk-action-btn" aria-label="Edit">${ic('write', 15)}</button><button class="tk-action-btn tk-action-btn-danger" aria-label="Hapus">${ic('trash', 15)}</button></td></tr>
                            <tr><td>John Doe</td><td>john@contoh.com</td><td>Developer</td><td><span class="tk-badge tk-badge-warning">Menunggu</span></td><td class="tk-table-actions"><button class="tk-action-btn" aria-label="Lihat">${ic('eye', 15)}</button><button class="tk-action-btn" aria-label="Edit">${ic('write', 15)}</button><button class="tk-action-btn tk-action-btn-danger" aria-label="Hapus">${ic('trash', 15)}</button></td></tr>
                            <tr><td>Maya Putri</td><td>maya@contoh.com</td><td>Manajer</td><td><span class="tk-badge tk-badge-danger">Nonaktif</span></td><td class="tk-table-actions"><div class="tk-dropdown"><button class="tk-action-btn" aria-label="Menu aksi">${ic('more-horizontal', 15)}</button><div class="tk-dropdown-menu tk-dropdown-menu-right"><button class="tk-dropdown-item">${ic('eye', 15)} Lihat detail</button><button class="tk-dropdown-item">${ic('write', 15)} Edit</button><hr class="tk-dropdown-divider"><button class="tk-dropdown-item tk-dropdown-item-danger">${ic('trash', 15)} Hapus</button></div></div></td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="tk-card-footer" style="justify-content: space-between; align-items: center"><span class="tk-caption">Menampilkan 3 dari 128 pengguna</span><nav class="tk-pagination"><button class="tk-page">&lsaquo;</button><button class="tk-page tk-page-active">1</button><button class="tk-page">2</button><button class="tk-page">3</button><button class="tk-page">&rsaquo;</button></nav></div>
            </div>
            <div class="dm-grid2">
                <div class="tk-card">
                    <div class="tk-card-header"><h3 class="tk-title" style="margin: 0">Progres Proyek</h3></div>
                    <div class="tk-card-body">
                        <div class="dm-progress-row"><span class="tk-caps"><span>Website Perusahaan</span><span>80%</span></span><div class="tk-progress"><div class="tk-progress-bar" style="width: 80%"></div></div></div>
                        <div class="dm-progress-row"><span class="tk-caps"><span>Aplikasi Mobile</span><span>45%</span></span><div class="tk-progress"><div class="tk-progress-bar" style="width: 45%"></div></div></div>
                        <div class="dm-progress-row" style="margin-bottom: 0"><span class="tk-caps"><span>Migrasi Data</span><span>15%</span></span><div class="tk-progress"><div class="tk-progress-bar" style="width: 15%"></div></div></div>
                    </div>
                </div>
                <div class="tk-card">
                    <div class="tk-card-header"><h3 class="tk-title" style="margin: 0">Aktivitas Terakhir</h3></div>
                    <div class="tk-card-body dm-activity">
                        <div class="dm-activity-item">${ic('user', 15)}<span><strong>Jane Smith</strong> bergabung ke tim &middot; <span class="tk-caption">5 menit lalu</span></span></div>
                        <div class="dm-activity-item">${ic('check', 15)}<span>Laporan Juli disetujui &middot; <span class="tk-caption">1 jam lalu</span></span></div>
                        <div class="dm-activity-item">${ic('alert', 15)}<span>Kuota penyimpanan hampir penuh &middot; <span class="tk-caption">3 jam lalu</span></span></div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
${CHART_HELPER_SCRIPT}
<script>
${TONE_HELPER}
tkChart('dm-chart-revenue', function (t) {
    return {
        type: 'line',
        data: {
            labels: ['Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu'],
            datasets: [{ label: 'Pendapatan (jt)', data: [52, 61, 58, 71, 78, 84], borderColor: moTone(900), backgroundColor: moTone(100), fill: true, tension: 0, pointRadius: 3, pointBackgroundColor: moTone(900), pointBorderWidth: 0, borderWidth: 2 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('dm-chart-traffic', function (t) {
    return {
        type: 'doughnut',
        data: { labels: ['Direct', 'Organik', 'Sosial', 'Referral'], datasets: [{ data: [38, 31, 19, 12], backgroundColor: moRamp(), borderColor: t.surface, borderWidth: 2 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '64%', plugins: { legend: { position: 'bottom' } } }
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
    const list = items.map(item => `<li>${ic('check', 14)} ${item}</li>`).join('\n                ');
    return `<div class="lp-plan${featured ? ' tk-negative lp-plan-featured' : ''}">
            <p class="tk-caps">${featured ? 'Paling dipilih' : '&nbsp;'}</p>
            <h3 class="tk-h4" style="margin: 0 0 4px">${title}</h3>
            <p class="lp-price">${price}</p>
            <p class="tk-caption" style="margin: 0 0 20px">${note}</p>
            <ul class="lp-plan-list">
                ${list}
            </ul>
            <button class="tk-btn ${featured ? 'tk-btn-primary' : 'tk-btn-outline'}" style="width: 100%">Ambil paket ini</button>
        </div>`;
}

function feature(iconName: string, title: string, text: string): string {
    return `<div class="tk-feature"><span class="tk-feature-icon">${ic(iconName, 20)}</span><h4 class="tk-title" style="margin: 0">${title}</h4><p class="tk-body-sm tk-muted" style="margin: 0">${text}</p></div>`;
}

function work(src: string, alt: string, title: string, meta: string, halftone = false): string {
    const image = `<img src="${src}" alt="${alt}" data-tk-asset="foto-karya">`;
    return `<figure class="tk-frame lp-work">
            ${halftone ? `<span class="tk-halftone">${image}</span>` : image}
            <figcaption><span>${title}</span><span>${meta}</span></figcaption>
        </figure>`;
}

/**
 * Kerangka SEO landing page — bagian kontrak kit (§7): judul berpola "Brand — proposisi nilai",
 * meta description, canonical, Open Graph + Twitter card, dan JSON-LD schema.org. Karena halaman
 * ini studio dan bukan produk perangkat lunak, tipe kontennya `Service` dengan tiga penawaran
 * yang angkanya sama persis dengan seksi harga di halaman. Domain `https://contoh.id` dan brand
 * `Logo` adalah placeholder yang WAJIB diganti data proyek saat halaman ini disalin.
 */
const LANDING_SEO_HEAD = `<title>Logo — Studio foto dan identitas visual</title>
<meta name="description" content="Studio yang mengerjakan fotografi dan identitas visual untuk merek yang ingin terlihat tenang dan berkarakter. Lihat karya dan paket kerjanya.">
<link rel="canonical" href="https://contoh.id/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Logo">
<meta property="og:title" content="Logo — Studio foto dan identitas visual">
<meta property="og:description" content="Studio yang mengerjakan fotografi dan identitas visual untuk merek yang ingin terlihat tenang dan berkarakter.">
<meta property="og:url" content="https://contoh.id/">
<meta property="og:image" content="https://contoh.id/og-image.png">
<meta property="og:locale" content="id_ID">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Logo — Studio foto dan identitas visual">
<meta name="twitter:description" content="Studio yang mengerjakan fotografi dan identitas visual untuk merek yang ingin terlihat tenang dan berkarakter.">
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
            "name": "Logo — Studio foto dan identitas visual",
            "description": "Studio yang mengerjakan fotografi dan identitas visual untuk merek yang ingin terlihat tenang dan berkarakter.",
            "inLanguage": "id",
            "isPartOf": { "@id": "https://contoh.id/#website" },
            "about": { "@id": "https://contoh.id/#organization" }
        },
        {
            "@type": "Service",
            "name": "Fotografi dan identitas visual",
            "serviceType": "Studio desain dan fotografi",
            "url": "https://contoh.id/",
            "provider": { "@id": "https://contoh.id/#organization" },
            "areaServed": "ID",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "ratingCount": "86" },
            "offers": [
                { "@type": "Offer", "name": "Sesi", "price": "6500000", "priceCurrency": "IDR" },
                { "@type": "Offer", "name": "Kampanye", "price": "24000000", "priceCurrency": "IDR" },
                { "@type": "Offer", "name": "Retainer", "price": "48000000", "priceCurrency": "IDR" }
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
    .lp-skip { position: absolute; left: -9999px; top: 0; z-index: 30; background: var(--tk-color-text); color: var(--tk-color-background); padding: 8px 16px; text-decoration: none; font-size: var(--tk-text-body-sm); }
    .lp-skip:focus { left: 12px; top: 60px; }
    .lp-header { position: sticky; top: 48px; z-index: 10; }
    .ex-embedded .lp-header { top: 0; }
    main [id] { scroll-margin-top: 128px; }
    .lp-links { display: flex; gap: 28px; align-items: center; }
    .lp-burger { display: none; }
    .lp-section { max-width: var(--tk-container); margin: 0 auto; padding: 96px 24px; }
    /* Hero dua kolom: huruf di kiri, foto tegak di kanan. Komposisinya rata kiri —
       tidak ada satu pun blok yang ditengahkan di halaman ini. */
    .lp-hero { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 56px; align-items: end; max-width: var(--tk-container); margin: 0 auto; padding: 72px 24px 88px; }
    .lp-hero h1 { font-size: clamp(46px, 6.2vw, 84px); margin: 18px 0 24px; }
    .lp-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); max-width: 46ch; margin: 0 0 32px; }
    .lp-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
    .lp-hero-meta { display: flex; gap: 40px; margin-top: 48px; padding-top: 16px; border-top: 1px solid var(--tk-color-border); }
    .lp-hero-meta p { margin: 0; }
    .lp-hero-photo img { aspect-ratio: 4 / 5; object-fit: cover; }
    /* Pita foto selebar layar: satu-satunya elemen yang menembus batas kolom. */
    .lp-band { position: relative; }
    .lp-band img { width: 100%; height: 380px; object-fit: cover; display: block; filter: var(--tk-mo-photo); }
    .lp-band-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; gap: 8px; padding: 40px max(24px, calc((100% - var(--tk-container)) / 2 + 24px)); background: linear-gradient(0deg, rgba(19, 19, 22, 0.78) 0%, rgba(19, 19, 22, 0.18) 62%, rgba(19, 19, 22, 0.05) 100%); }
    .lp-band-overlay p, .lp-band-overlay h2 { color: #FFFFFF; margin: 0; }
    .lp-band-overlay .tk-caps { color: rgba(255, 255, 255, 0.72); }
    .lp-works { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
    .lp-work img { aspect-ratio: 3 / 4; object-fit: cover; }
    .lp-proof { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
    .lp-proof-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 32px; }
    .lp-proof-stat { border-top: 2px solid var(--tk-color-text); padding-top: 10px; }
    .lp-proof-stat .tk-h2 { margin: 0; }
    .lp-chart-box { position: relative; height: 300px; }
    .lp-pricing { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--tk-color-border); border: 1px solid var(--tk-color-border); }
    .lp-plan { background: var(--tk-color-surface); padding: 32px 28px; display: flex; flex-direction: column; }
    /* Ditulis ulang di sini karena .lp-plan sekelas dengan .tk-negative dan gaya halaman dimuat
       belakangan, jadi latar terangnya akan menang kalau tidak disebut lagi. */
    .lp-plan-featured { background: var(--tk-mo-900); }
    .lp-price { font-family: var(--tk-font-heading); font-weight: 800; font-size: var(--tk-text-h2); letter-spacing: -0.04em; margin: 0; }
    .lp-plan-list { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 12px; font-size: var(--tk-text-body-sm); flex: 1; }
    .lp-plan-list li { display: flex; align-items: flex-start; gap: 10px; padding-bottom: 12px; border-bottom: 1px solid var(--tk-color-border); }
    .lp-plan-list iconify-icon { flex: none; margin-top: 3px; }
    .lp-plan-featured .lp-plan-list li { border-bottom-color: rgba(255, 255, 255, 0.18); }
    [data-tk-theme="dark"] .lp-plan-featured .lp-plan-list li { border-bottom-color: rgba(0, 0, 0, 0.16); }
    .lp-footer { border-top: 2px solid var(--tk-color-text); background: var(--tk-color-surface); }
    .lp-footer-inner { max-width: var(--tk-container); margin: 0 auto; padding: 32px 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
    .lp-footer-links { display: flex; gap: 24px; }
    .lp-footer-links a { color: var(--tk-color-text-muted); text-decoration: none; font-size: var(--tk-text-body-sm); }
    .lp-footer-links a:hover { color: var(--tk-color-text); text-decoration: underline; text-underline-offset: 4px; }
    @media (max-width: 860px) {
        .lp-links { display: none; }
        .lp-burger { display: inline-flex; }
        .lp-section { padding: 56px 20px; }
        .lp-hero { grid-template-columns: 1fr; gap: 36px; padding: 40px 20px 56px; }
        .lp-hero-meta { gap: 24px; }
        .lp-works { grid-template-columns: 1fr; }
        .lp-proof { grid-template-columns: 1fr; gap: 32px; }
        .lp-pricing { grid-template-columns: 1fr; }
        .lp-chart-box { height: 240px; }
        .lp-band img { height: 260px; }
        .tk-feature-grid { grid-template-columns: 1fr; gap: 24px; }
    }
</style>
</head>
<body>
${EX_EMBED_SCRIPT}
${exNav('Monochrome', 'landing', '../', { device: { base: 'landing', active: 'web' } })}
<a class="lp-skip" href="#konten-utama">Langsung ke konten utama</a>
<header class="lp-header">
<nav class="tk-navbar" aria-label="Navigasi utama">
    <span class="tk-navbar-brand">Logo</span>
    <div class="lp-links">
        <a class="tk-navbar-link tk-navbar-link-active" href="#beranda">Beranda</a>
        <a class="tk-navbar-link" href="#karya">Karya</a>
        <a class="tk-navbar-link" href="#harga">Paket</a>
        <a class="tk-navbar-link" href="#cta">Kontak</a>
    </div>
    <button class="tk-btn tk-btn-primary tk-btn-sm">Mulai Proyek</button>
    <button class="tk-action-btn lp-burger" aria-label="Menu">${ic('menu', 20)}</button>
</nav>
</header>
<main id="konten-utama">
<section class="lp-hero" id="beranda" aria-labelledby="lp-h-hero">
    <div>
        <p class="tk-caps">Studio &middot; Jakarta &middot; Sejak 2014</p>
        <h1 class="tk-display" id="lp-h-hero">Satu warna. Semua nada.</h1>
        <p class="lp-hero-sub">Kami mengerjakan fotografi dan identitas visual untuk merek yang lebih memilih terlihat tenang ketimbang terlihat ramai.</p>
        <div class="lp-hero-actions">
            <button class="tk-btn tk-btn-primary tk-btn-lg">Lihat Karya ${ic('arrow-right', 16)}</button>
            <button class="tk-btn tk-btn-outline tk-btn-lg">Jadwalkan Obrolan</button>
        </div>
        <div class="lp-hero-meta">
            <div><p class="tk-h4" style="margin: 0">180+</p><p class="tk-caps">Proyek selesai</p></div>
            <div><p class="tk-h4" style="margin: 0">12</p><p class="tk-caps">Penghargaan</p></div>
            <div><p class="tk-h4" style="margin: 0">4,9</p><p class="tk-caps">Rata-rata klien</p></div>
        </div>
    </div>
    <figure class="tk-frame lp-hero-photo">
        <img src="https://placehold.co/900x1125/DCDCE0/62626A?text=Potret" alt="Potret hitam putih dari sesi studio terbaru" data-tk-asset="foto-hero">
        <figcaption><span>Seri Potret 04</span><span>35mm &middot; 2026</span></figcaption>
    </figure>
</section>
<section class="lp-band" aria-label="Cuplikan karya">
    <img src="https://placehold.co/2000x760/C2C2C8/43434A?text=Karya" alt="Pemandangan ruang pamer dengan cetakan foto berukuran besar" data-tk-asset="foto-pita">
    <div class="lp-band-overlay">
        <p class="tk-caps">Pameran tahunan</p>
        <h2 class="tk-h2">Cetak besar, satu tinta, tanpa retouch berlebihan.</h2>
    </div>
</section>
<section class="lp-section" id="layanan" aria-labelledby="lp-h-layanan">
    <div class="tk-rule"><span class="tk-rule-num">01</span><h2 class="tk-h3" id="lp-h-layanan" style="margin: 0">Yang kami kerjakan</h2></div>
    <div class="tk-feature-grid">
        ${feature('aperture', 'Fotografi', 'Potret, produk, dan liputan acara dalam satu bahasa visual.')}
        ${feature('quote', 'Identitas', 'Logo, tipografi, dan aturan pakainya dalam satu berkas.')}
        ${feature('document', 'Cetak', 'Katalog, kemasan, dan materi pameran sampai naik mesin.')}
        ${feature('world', 'Web', 'Halaman yang memperlakukan foto sebagai isi, bukan hiasan.')}
        ${feature('users', 'Pendampingan', 'Tim Anda dilatih memakai aturan visualnya sendiri.')}
        ${feature('medal', 'Arsip', 'Seluruh berkas mentah tersimpan rapi dan bisa diminta kapan pun.')}
    </div>
</section>
<section class="lp-section" style="padding-top: 0" id="karya" aria-labelledby="lp-h-karya">
    <div class="tk-rule"><span class="tk-rule-num">02</span><h2 class="tk-h3" id="lp-h-karya" style="margin: 0">Karya terpilih</h2></div>
    <div class="lp-works">
        ${work('https://placehold.co/720x960/DCDCE0/62626A?text=Karya+01', 'Foto produk keramik di atas latar polos', 'Keramik Tanah', 'Katalog &middot; 2026')}
        ${work('https://placehold.co/720x960/C2C2C8/43434A?text=Karya+02', 'Potret pekerja studio dengan cahaya samping', 'Orang Kerja', 'Potret &middot; 2025', true)}
        ${work('https://placehold.co/720x960/EDEDEF/83838B?text=Karya+03', 'Detail arsitektur bangunan beton', 'Beton Pagi', 'Arsitektur &middot; 2025')}
    </div>
    <p class="tk-caption" style="margin-top: 20px">Karya kedua dicetak lewat kisi halftone &mdash; kelas <code class="tk-code">.tk-halftone</code>, titik tinta yang sama seperti cetak koran.</p>
</section>
<section class="lp-section" style="padding-top: 0" id="bukti" aria-labelledby="lp-h-bukti">
    <div class="tk-rule"><span class="tk-rule-num">03</span><h2 class="tk-h3" id="lp-h-bukti" style="margin: 0">Angkanya</h2></div>
    <div class="lp-proof">
        <div>
            <p class="tk-body-lg tk-measure" style="margin: 0">Studio ini kecil dan sengaja tetap kecil. Yang bertambah setiap tahun bukan jumlah orangnya, melainkan jumlah proyek yang selesai tepat waktu.</p>
            <div class="lp-proof-stats">
                <div class="lp-proof-stat"><p class="tk-h2">36</p><span class="tk-caps">Proyek per tahun</span></div>
                <div class="lp-proof-stat"><p class="tk-h2">92%</p><span class="tk-caps">Klien kembali</span></div>
                <div class="lp-proof-stat"><p class="tk-h2">6</p><span class="tk-caps">Orang di tim</span></div>
            </div>
        </div>
        <div class="tk-card"><div class="tk-card-body">
            <p class="tk-caps" style="margin: 0 0 16px">Proyek selesai per kuartal</p>
            <div class="lp-chart-box"><canvas id="lp-chart-growth"></canvas></div>
        </div></div>
    </div>
</section>
<section class="lp-section" style="padding-top: 0" id="harga" aria-labelledby="lp-h-harga">
    <div class="tk-rule"><span class="tk-rule-num">04</span><h2 class="tk-h3" id="lp-h-harga" style="margin: 0">Cara bekerja sama</h2></div>
    <div class="lp-pricing">
        ${plan('Sesi', 'Rp6,5jt', 'Sekali pemotretan, satu hari.', ['Satu hari pemotretan', '40 foto terpilih', 'Retouch dasar', 'Berkas siap cetak'], false)}
        ${plan('Kampanye', 'Rp24jt', 'Satu musim kampanye penuh.', ['Tiga hari pemotretan', '120 foto terpilih', 'Arahan gaya visual', 'Materi cetak &amp; digital', 'Dua kali revisi'], true)}
        ${plan('Retainer', 'Rp48jt', 'Pendampingan setahun penuh.', ['Kuota bulanan', 'Panduan identitas', 'Arsip berkas mentah', 'Pendampingan tim'], false)}
    </div>
</section>
<section class="lp-section" style="padding-top: 0" id="cta" aria-labelledby="lp-h-cta">
    <div class="tk-cta">
        <div><h2 class="tk-h3" id="lp-h-cta">Punya proyek?</h2><p class="tk-muted" style="margin: 6px 0 0">Ceritakan sebentar, kami balas dalam dua hari kerja.</p></div>
        <button class="tk-btn tk-btn-primary tk-btn-lg">Kirim Brief ${ic('arrow-right', 16)}</button>
    </div>
</section>
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
${TONE_HELPER}
tkChart('lp-chart-growth', function (t) {
    return {
        type: 'bar',
        data: {
            labels: ['Q3 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026'],
            datasets: [{ label: 'Proyek selesai', data: [6, 8, 9, 13], backgroundColor: [moTone(200), moTone(400), moTone(600), moTone(900)], maxBarThickness: 64 }]
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
    .au-card { width: 100%; max-width: 404px; }
    .au-brand { font-family: var(--tk-font-heading); font-weight: 800; font-size: 15px; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 28px; padding-bottom: 16px; border-bottom: 2px solid var(--tk-color-text); }
    .au-title { margin: 0 0 4px; }
    .au-sub { margin: 0 0 28px; }
    .au-full { width: 100%; box-sizing: border-box; }
    .au-divider { display: flex; align-items: center; gap: 14px; margin: 20px 0; color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); font-size: 10px; letter-spacing: var(--tk-mo-track); text-transform: uppercase; }
    .au-divider::before, .au-divider::after { content: ''; height: 1px; flex: 1; background: var(--tk-color-border); }
    .au-card .tk-field { margin-bottom: 18px; }
    .au-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 4px 0 24px; font-size: var(--tk-text-body-sm); }
    .au-link { color: var(--tk-color-text); text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 1px; text-decoration-color: var(--tk-mo-300); }
    .au-link:hover { text-decoration-thickness: 3px; text-decoration-color: currentColor; }
    .au-alt { margin: 24px 0 0; }`;

function authPage(base: 'login' | 'register', title: string, body: string): string {
    return `<!DOCTYPE html>
<html lang="id">
<head>
${HEAD_COMMON}
<title>Monochrome — Contoh ${title}</title>
<style>
    ${EX_NAV_CSS}
${AUTH_CSS}
</style>
</head>
<body>
${EX_EMBED_SCRIPT}
${exNav('Monochrome', 'components', '../', { device: { base, active: 'web' } })}
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
export const AUTH_LOGIN_FORM = `            <h1 class="tk-h4 au-title">Masuk ke akun Anda</h1>
            <p class="tk-caption au-sub">Selamat datang kembali. Silakan masuk untuk melanjutkan.</p>
            <button class="tk-btn tk-btn-outline au-full" type="button"><iconify-icon icon="logos:google-icon" width="15" height="15"></iconify-icon> Lanjut dengan Google</button>
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
export const AUTH_REGISTER_FORM = `            <h1 class="tk-h4 au-title">Buat akun baru</h1>
            <p class="tk-caption au-sub">Gratis 14 hari &mdash; tanpa kartu kredit.</p>
            <button class="tk-btn tk-btn-outline au-full" type="button"><iconify-icon icon="logos:google-icon" width="15" height="15"></iconify-icon> Daftar dengan Google</button>
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
<title>Monochrome — ${title} (Ponsel)</title>
<style>
    ${EX_NAV_CSS}
    body { min-height: 100vh; margin: 0; box-sizing: border-box; }
    .ex-stage { display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 20px; }
    .ex-device { width: 412px; max-width: 100%; height: 780px; max-height: calc(100vh - 150px); min-height: 420px; border: 12px solid #131316; background: #131316; box-shadow: var(--tk-shadow-lg); overflow: hidden; flex: none; }
    .ex-device iframe { width: 100%; height: 100%; border: none; background: var(--tk-color-background); }
</style>
</head>
<body>
${exNav('Monochrome', view, '../', { device: { base, active: 'mobile' }, extraThemeJs: FRAME_THEME_EXTRA_JS })}
<div class="ex-stage">
    <div class="ex-device"><iframe src="${base}.html?tk-embed" title="${title} versi ponsel"></iframe></div>
    <p class="tk-caption">${title} &mdash; lebar 388px, media query kit aktif seperti di ponsel sungguhan.</p>
</div>
</body>
</html>
`;
}

export const MONOCHROME_EXAMPLES: Record<string, string> = {
    'examples/dashboard.html': DASHBOARD,
    'examples/dashboard-mobile.html': deviceFrame('Admin Dashboard', 'dashboard', 'dashboard'),
    'examples/landing.html': LANDING,
    'examples/landing-mobile.html': deviceFrame('Landing Page', 'landing', 'landing'),
    'examples/login.html': LOGIN,
    'examples/login-mobile.html': deviceFrame('Login', 'components', 'login'),
    'examples/register.html': REGISTER,
    'examples/register-mobile.html': deviceFrame('Register', 'components', 'register')
};
