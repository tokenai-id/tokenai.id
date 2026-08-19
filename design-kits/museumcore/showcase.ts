/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len, @typescript-eslint/quotes */

import { MUSEUMCORE_COMPONENTS } from './components';
import { AUTH_CSS, AUTH_LOGIN_FORM, AUTH_REGISTER_FORM } from './examples';
// Perancah pratinjau (bilah navigasi sticky, helper chart) kit-agnostik dan sengaja dipakai
// bersama; rumahnya masih di folder kit pertama sampai ada alasan memindahkannya.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

/**
 * `showcase.html` kit Museumcore: lembar peraga 22 seksi sesuai §6 kontrak — termasuk
 * Login & Register, yang merupakan bagian paket Komponen (bukan tampilan tersendiri di navigasi).
 *
 * Kit ini satu-tema (terang bawaan) sehingga exNav dipanggil dengan `themeToggle: false`.
 *
 * Seksi komponennya dirakit dari fragmen `components/` yang sama persis dengan yang akan disalin
 * agen — bukan salinan tersendiri — supaya pratinjau tidak pernah menyimpang dari komponen
 * sebenarnya. Kelas `sc-*` hanyalah perancah lembar peraganya dan bukan bagian dari kontrak kit.
 */

const c = MUSEUMCORE_COMPONENTS;

// Nomor seksi dihitung otomatis sesuai urutan render, supaya menyisipkan seksi baru tidak
// mengharuskan menomori ulang semua seksi di bawahnya.
let sectionCounter = 0;
function section(title: string, body: string): string {
    sectionCounter += 1;
    return `<section class="sc-section"><h2 class="sc-heading">${String(sectionCounter).padStart(2, '0')} &middot; ${title}</h2>${body}</section>`;
}

function authCard(form: string): string {
    // Formulirnya ditulis untuk halaman di examples/ (taut antarhalaman relatif sesama folder);
    // di showcase yang hidup di akar arsip, taut itu harus menunjuk ke examples/.
    const rooted = form
        .replace('href="register.html"', 'href="examples/register.html"')
        .replace('href="login.html"', 'href="examples/login.html"');
    return `<div class="tk-card au-card" style="margin: 0"><div class="tk-card-body"><div class="au-brand">Logo</div><div class="au-rule"></div>${rooted}</div></div>`;
}

const SWATCHES = [
    ['primary', '#6E1B2E'], ['primary-hover', '#8C2439'], ['secondary', '#2C4438'],
    ['accent', '#B08D3F'], ['background', '#F4EDDD'], ['surface', '#FBF6EA'],
    ['surface-2', '#EBE1CB'], ['text', '#2A2018'], ['text-muted', '#7C6C58'],
    ['border', '#D6C7A8'], ['success', '#4E6E4A'], ['warning', '#A9761C'],
    ['danger', '#8E2323'], ['info', '#37536E']
].map(([name, hex]) =>
    `<div class="sc-swatch"><div class="sc-swatch-fill" style="background: var(--tk-color-${name})"></div><span>${name}</span><code>${hex}</code></div>`
).join('');

const TYPE_SCALE = [
    ['Display', 'tk-display', '76px'], ['Heading 1', 'tk-h1', '52px'], ['Heading 2', 'tk-h2', '36px'],
    ['Heading 3', 'tk-h3', '26px'], ['Heading 4', 'tk-h4', '21px'], ['Title', 'tk-title', '18px'],
    ['Body', 'tk-body', '17px'], ['Body Small', 'tk-body-sm', '15px'], ['Caption', 'tk-caption', '12px']
].map(([label, cls, size]) =>
    `<div class="sc-type-row"><span class="sc-type-meta">${label} &middot; ${size}</span><p class="${cls}" style="margin: 0">Aa &mdash; Ruang Pamer Utama</p></div>`
).join('');

const SPACES = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].map(step =>
    `<div class="sc-space-row"><code>--tk-space-${step}</code><div class="sc-space-bar" style="width: var(--tk-space-${step})"></div></div>`
).join('');

const RADII = ['sm', '', 'lg', 'full'].map(step => {
    const name = step ? `--tk-radius-${step}` : '--tk-radius';
    const pill = step === 'full' ? ' sc-radius-box-pill' : '';
    return `<div class="sc-radius-item"><div class="sc-radius-box${pill}" style="border-radius: var(${name})"></div><code>${name}</code></div>`;
}).join('');

const SHADOWS = ['sm', '', 'lg'].map(step => {
    const name = step ? `--tk-shadow-${step}` : '--tk-shadow';
    return `<div class="sc-shadow-box" style="box-shadow: var(${name})"><code>${name}</code></div>`;
}).join('');

const ICONS = ['home-outline', 'search-outline', 'user-outline', 'cog-outline', 'bell-outline',
    'heart-outline', 'star-outline', 'trash-bin-outline', 'edit-outline', 'check-outline',
    'close-outline', 'plus-outline', 'arrow-right-outline', 'download-outline',
    'calendar-month-outline', 'envelope-outline', 'lock-outline', 'image-outline']
    .map(name => `<span class="sc-icon" title="flowbite:${name}"><iconify-icon icon="flowbite:${name}" width="22" height="22"></iconify-icon></span>`)
    .join('');

export const MUSEUMCORE_SHOWCASE = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Museumcore — Design Kit Showcase</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Anonymous+Pro:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<script src="https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"></script>
<script src="${CHARTJS_SCRIPT}"></script>
<style>
    ${EX_NAV_CSS}
</style>
<style>
    /* Perancah lembar peraga (sc-*): bukan bagian kontrak kit. */
    .sc-wrap { max-width: 1180px; margin: 0 auto; padding: 56px 24px 104px; }
    .sc-kit-title { font-family: var(--tk-font-mono); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--tk-color-text-muted); margin: 0 0 10px; }
    .sc-section { margin-top: 64px; }
    /* Judul seksi digambar sebagai plakat dinding, sama seperti keterangan karya. */
    .sc-heading { display: inline-block; font-family: var(--tk-font-heading); font-size: 12px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: var(--tk-color-text); background: var(--tk-color-surface); border: 1px solid var(--tk-color-border); border-top: 2px solid var(--tk-mc-gold); padding: 9px 20px; margin: 0 0 28px; box-shadow: var(--tk-shadow-sm); }
    .sc-row { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; }
    .sc-col { display: flex; flex-direction: column; gap: 16px; max-width: 480px; }
    .sc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 18px; }
    .sc-swatch { font-size: 12px; display: flex; flex-direction: column; gap: 5px; }
    .sc-swatch code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); font-size: 11px; }
    .sc-swatch-fill { height: 56px; border: 1px solid var(--tk-color-border); box-shadow: inset 0 0 0 3px var(--tk-color-surface), inset 0 0 0 4px rgba(176, 141, 63, 0.45); }
    .sc-type-row { display: flex; align-items: baseline; gap: 28px; margin-bottom: 18px; }
    .sc-type-meta { width: 140px; flex: none; font-family: var(--tk-font-mono); font-size: 11px; letter-spacing: 0.06em; color: var(--tk-color-text-muted); }
    .sc-space-row { display: flex; align-items: center; gap: 16px; margin-bottom: 9px; font-size: 12px; }
    .sc-space-row code { width: 124px; color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); font-size: 11px; }
    .sc-space-bar { height: 12px; background: var(--tk-mc-gilt); }
    .sc-radius-item { display: flex; flex-direction: column; align-items: center; gap: 9px; font-size: 11px; }
    .sc-radius-item code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-radius-box { width: 132px; height: 76px; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); }
    .sc-radius-box-pill { height: 44px; margin-top: 16px; }
    .sc-shadow-box { width: 140px; height: 94px; background: var(--tk-color-surface); border: 1px solid var(--tk-color-border); display: flex; align-items: flex-end; padding: 9px; font-size: 11px; }
    .sc-shadow-box code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-icon { color: var(--tk-color-text); background: var(--tk-color-surface); border: 1px solid var(--tk-color-border); padding: 11px; display: inline-flex; box-shadow: inset 0 0 0 1px rgba(176, 141, 63, 0.3); }
    .sc-cell { background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); height: 52px; }
    .sc-overlay-demo { position: relative; height: 340px; overflow: hidden; border: 1px solid var(--tk-color-border); }
    .sc-overlay-demo .tk-modal-backdrop, .sc-overlay-demo .tk-drawer { position: absolute; }
    .sc-chart-box { position: relative; height: 200px; }
    .sc-auth-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 420px)); gap: 24px; align-items: start; }
    /* Papan bahasa desain: pigura, lengkung, plakat, vitrin, dan inisial berdampingan. */
    .sc-lang { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 24px; align-items: start; }
    .sc-lang-note { display: block; margin-top: 10px; }
    .sc-arch-demo { width: 100%; height: 210px; background: linear-gradient(180deg, var(--tk-color-surface-2) 0%, var(--tk-color-surface) 100%); border: 1px solid var(--tk-color-border); display: flex; align-items: flex-end; justify-content: center; padding-bottom: 18px; box-sizing: border-box; }
</style>
<style>
${AUTH_CSS}
</style>
</head>
<body>
${exNav('Museumcore', 'components', '', { themeToggle: false })}
<div class="sc-wrap">
    <p class="sc-kit-title">TOKENAI Design Kit</p>
    <h1 class="tk-h1" style="margin: 0">Museumcore</h1>
    <p class="tk-body-lg tk-muted" style="margin-top: 12px; max-width: 820px">Ruang pamer museum yang dipindahkan ke layar: dinding krem bertekstur damask samar, burgundy tua sebagai warna utama, dan emas antik untuk setiap garis rambut. Judulnya memakai Cinzel &mdash; huruf pahatan Romawi yang selalu diberi jarak antarhuruf &mdash; sementara isinya dibaca dengan EB Garamond dan keterangannya diketik dengan Anonymous Pro seperti plakat dinding. Kartu adalah karya berbingkai: pigura tipis, garis emas di dalam tepinya, dan lampu sorot yang menguat saat karya didekati. Sudutnya hampir siku karena bingkai klasik memang tidak membulat; lengkung Renaissance disediakan terpisah lewat <code class="tk-code">.tk-arch</code>. Kit satu-tema &mdash; terang secara bawaan, seperti galeri yang memang dirancang untuk cahaya. Lihat juga contoh halaman nyata lewat bilah navigasi di atas.</p>

${section('Typography', `<p class="tk-caption" style="margin-bottom: 28px">Cinzel (judul pahatan) &middot; EB Garamond (teks Renaissance) &middot; Anonymous Pro (plakat &amp; kode) &middot; skala di bawah adalah seluruh tingkat yang tersedia</p>${TYPE_SCALE}`)}
${section('Color Palette', `<div class="sc-grid">${SWATCHES}</div><p class="tk-caption" style="margin-top: 18px">Burgundy dan krem memikul hampir seluruh halaman; emas antik hanya muncul setipis rambut &mdash; di tepi pigura, garis atas plakat, dan ornamen pemisah.</p>`)}
${section('Spacing System', SPACES)}
${section('Border Radius', `<div class="sc-row">${RADII}</div><p class="tk-caption" style="margin-top: 14px">Radius sengaja nyaris nol: bingkai klasik tidak membulat. Lengkung Renaissance disediakan terpisah lewat <code class="tk-code">.tk-arch</code>, bukan lewat token radius.</p>`)}
${section('Shadow System', `<div class="sc-row" style="gap: 28px">${SHADOWS}</div><p class="tk-caption" style="margin-top: 14px">Bayangannya lembut dan rendah &mdash; cahaya lampu sorot galeri, bukan sinar matahari langsung.</p>`)}
${section('Iconography', `<div class="sc-row">${ICONS}</div><p class="tk-caption">Iconify, set <code>flowbite</code> &mdash; tulis <code>&lt;iconify-icon icon="flowbite:nama-outline"&gt;</code>; garis tunggalnya sengaja setipis mungkin supaya tidak melawan huruf pahatan dan pigura. Ratusan ribu ikon lain tersedia dengan set berbeda bila perlu.</p>`)}
${section('Design Language', `<div class="sc-lang">
    <div>
        <span class="tk-frame" style="width: 100%"><img src="https://placehold.co/520x360/EBE1CB/6E1B2E?text=Karya" alt="Contoh karya di dalam pigura bersepuh"></span>
        <span class="tk-caption sc-lang-note"><code class="tk-code">.tk-frame</code> &mdash; pigura bersepuh berpaspartu</span>
    </div>
    <div>
        <div class="sc-arch-demo tk-arch"><span class="tk-caps">Lengkung</span></div>
        <span class="tk-caption sc-lang-note"><code class="tk-code">.tk-arch</code> &mdash; puncak setengah lingkaran Renaissance</span>
    </div>
    <div>
        <span class="tk-plaque"><span class="tk-plaque-title">Judul Karya</span><span class="tk-plaque-meta">Pelukis, 1623 &middot; minyak di atas kanvas</span></span>
        <span class="tk-caption sc-lang-note"><code class="tk-code">.tk-plaque</code> &mdash; plakat keterangan dinding</span>
    </div>
    <div>
        <div class="tk-vitrine"><p class="tk-caps" style="margin: 0 0 6px">Vitrin</p><p class="tk-body-sm tk-muted" style="margin: 0">Panel berkilau seperti kotak kaca pameran.</p></div>
        <span class="tk-caption sc-lang-note"><code class="tk-code">.tk-vitrine</code> &mdash; panel kaca pameran</span>
    </div>
</div>
<hr class="tk-ornament">
<p class="tk-body tk-initial" style="max-width: 660px">Inisial beriluminasi membuka setiap tulisan panjang, persis manuskrip Renaissance yang huruf pertamanya dipahat di kotak bersepuh. Pemisah di atas paragraf ini adalah ornamen fleuron &mdash; dua garis emas dengan belah ketupat di tengahnya.</p>
<p class="tk-body-sm tk-muted" style="margin: 20px 0 0; max-width: 700px">Perkakas khas kit: <code class="tk-code">.tk-frame</code> (pigura bersepuh), <code class="tk-code">.tk-arch</code> (lengkung Renaissance), <code class="tk-code">.tk-plaque</code> dengan <code class="tk-code">.tk-plaque-title</code> + <code class="tk-code">.tk-plaque-meta</code> (plakat dinding), <code class="tk-code">.tk-ornament</code> (pemisah fleuron), <code class="tk-code">.tk-initial</code> (inisial beriluminasi), <code class="tk-code">.tk-gild</code> (<span class="tk-gild">teks bersepuh</span>), <code class="tk-code">.tk-caps</code> (kapital kurator berjarak lebar), dan <code class="tk-code">.tk-vitrine</code> (panel kaca). Gambar di dalam kartu disepia sampai disorot pengunjung.</p>`)}
${section('Buttons', `<div class="sc-row">${c['components/button.html']}</div><p class="tk-caption" style="margin-top: 14px">Tombol adalah papan petunjuk museum: persegi, berhuruf pahatan berjarak lebar, dan bergaris rambut emas di dalam tepinya saat disorot. Tidak ada yang memantul.</p>`)}
${section('Input &amp; Form', `<div class="sc-col">${c['components/form.html']}</div><p class="tk-caption" style="margin: 28px 0 14px">Search bar &mdash; ikon dan pintasan menyatu di dalam field</p><div style="max-width: 480px">${c['components/search.html']}</div><p class="tk-caption" style="margin: 28px 0 14px">Select custom (ditampilkan terbuka) &mdash; satu pilihan &middot; dengan pencarian &middot; multi dengan checkbox &amp; aksi. Listbox digambar kit, bukan popup bawaan browser.</p><div class="sc-row" style="align-items: flex-start; gap: 24px; min-height: 350px">${c['components/select.html'].split('<div class="tk-select">').join('<div class="tk-select tk-select-open" style="width: 250px">')}</div><p class="tk-caption" style="margin: 0 0 14px">Dropdown aksi (ditampilkan terbuka; aslinya terbuka saat trigger diklik)</p><div style="min-height: 250px">${c['components/dropdown.html'].replace('class="tk-dropdown"', 'class="tk-dropdown tk-dropdown-open"')}</div><p class="tk-caption">Semua kontrol digambar sendiri: centang dan kenop toggle memakai sepuhan emas yang sama dengan pigura.</p>`)}
${section('Login &amp; Register', `<p class="tk-caption" style="margin-bottom: 18px">Kartu auth dirakit murni dari komponen form kit &mdash; bagian dari paket Komponen. Halaman penuhnya (web &amp; ponsel lewat saklar perangkat) ada di <a href="examples/login.html">examples/login.html</a> dan <a href="examples/register.html">examples/register.html</a>.</p><div class="sc-auth-grid">${authCard(AUTH_LOGIN_FORM)}${authCard(AUTH_REGISTER_FORM)}</div>`)}
${section('Card Components', `<div class="tk-grid tk-grid-3">${c['components/card.html']}<div class="tk-card"><img src="https://placehold.co/640x400/EBE1CB/2A2018?text=Koleksi" alt="Contoh gambar kartu" style="width: 100%; display: block"><div class="tk-card-body"><p class="tk-caps" style="margin: 0 0 8px">Renaissance</p><h3 class="tk-title" style="margin: 0 0 6px">Kartu Bergambar</h3><p class="tk-body-sm tk-muted" style="margin: 0">Gambar disepia sampai kartunya disorot.</p></div></div><div class="tk-card"><div class="tk-card-body" style="text-align: center"><div class="tk-feature-icon" style="margin: 0 auto 14px"><iconify-icon icon="flowbite:user-outline" width="22" height="22"></iconify-icon></div><p class="tk-h4" style="margin: 0">Jane Doe</p><p class="tk-caption">Kurator Utama</p></div></div></div><p class="tk-caption" style="margin-top: 14px">Kartu naik dua piksel dan piguranya menguning keemasan saat disorot &mdash; sebesar itu saja geraknya.</p>`)}
${section('Navigation', `<div class="sc-col" style="max-width: none">${c['components/navigation.html'].replace('<aside', '<nav class="tk-navbar tk-navbar-dark"><span class="tk-navbar-brand">Logo</span><a class="tk-navbar-link tk-navbar-link-active" href="#">Beranda</a><a class="tk-navbar-link" href="#">Koleksi</a><button class="tk-btn tk-btn-outline tk-btn-sm">Masuk</button></nav><aside')}</div>`)}
${section('Tabs &amp; Segmented', `<div class="sc-col">${c['components/tabs.html']}</div>`)}
${section('Badges &amp; Chips', `<div class="sc-row">${c['components/badge.html']}</div>`)}
${section('Feedback &amp; Alerts', `<div class="sc-col">${c['components/alert.html']}</div>`)}
${section('Layout Options', `<p class="tk-caption" style="margin-bottom: 14px">Grid 12 / 3 / 2 kolom pada lebar konten --tk-container</p><div class="tk-grid tk-grid-12" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(12)}</div><div class="tk-grid tk-grid-3" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(3)}</div><div class="tk-grid tk-grid-2">${'<div class="sc-cell"></div>'.repeat(2)}</div>`)}
${section('Content Blocks', c['components/content-blocks.html'])}
${section('Data Display', `<p class="tk-caption" style="margin-bottom: 14px">Advanced filter &mdash; pencarian, dua select custom, tombol filter berpenanda jumlah, chip filter aktif</p>${c['components/filter.html']}<div style="margin-top: 28px">${c['components/table.html'].replace('<nav class="tk-pagination">', '<nav class="tk-pagination" style="margin-top: 18px">')}</div><p class="tk-caption" style="margin-top: 14px">Kepala tabel adalah katalog koleksi: huruf pahatan berjarak lebar di atas garis emas. Kolom Aksi rata kanan &mdash; ikon langsung untuk aksi sedikit, atau menu &hellip; bila aksinya banyak.</p>`)}
${section('Charts', `<p class="tk-caption" style="margin-bottom: 14px">Chart.js &mdash; pustaka chart tunggal untuk semua kit. Warnanya dibaca dari token kit saat digambar: burgundy, emas antik, dan hijau museum, dengan garis setipis komponen lain.</p><div class="tk-grid tk-grid-3"><div class="tk-card"><div class="tk-card-header"><p class="tk-h4" style="margin: 0">Pengunjung</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-line"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-h4" style="margin: 0">Pendapatan</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-bar"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-h4" style="margin: 0">Asal Pengunjung</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-doughnut"></canvas></div></div></div></div>`)}
${section('Modal &amp; Overlay', `<div class="sc-overlay-demo">${c['components/modal.html']}</div><p class="tk-caption" style="margin-top: 14px">Modal memakai paspartu ganda seperti karya yang dibingkai: krem di dalam, garis emas di luarnya.</p>`)}
${section('Loading States', `<div class="sc-row" style="gap: 36px">${c['components/loading.html'].replace('<div class="tk-progress">', '<div class="tk-progress" style="width: 240px">')}</div><p class="tk-caption" style="margin-top: 14px">Progress bar terisi sepuhan emas &mdash; satu-satunya tempat emas dipakai selebar itu.</p>`)}
${section('Empty States', `<div style="max-width: 460px">${c['components/empty.html']}</div><p class="tk-caption" style="margin-top: 14px">Keadaan kosong digambar sebagai pigura kosong di dinding, persis yang dilihat pengunjung saat karya sedang dipinjamkan.</p>`)}

</div>
${CHART_HELPER_SCRIPT}
<script>
var scLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
tkChart('sc-chart-line', function (t) {
    return {
        type: 'line',
        data: { labels: scLabels, datasets: [{ label: 'Pengunjung', data: [4200, 5100, 4800, 6300, 7100, 8400], borderColor: t.primary, backgroundColor: t.primary + '1A', fill: true, tension: 0.32, pointRadius: 3, pointBackgroundColor: t.accent, pointBorderColor: t.primary, borderWidth: 1.5 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-bar', function (t) {
    return {
        type: 'bar',
        data: { labels: scLabels, datasets: [{ label: 'Pendapatan', data: [12, 19, 14, 22, 26, 31], backgroundColor: t.primary, borderColor: t.accent, borderWidth: 1, maxBarThickness: 30 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-doughnut', function (t) {
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
