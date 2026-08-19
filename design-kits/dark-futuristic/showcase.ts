/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len, @typescript-eslint/quotes */

import { DARK_FUTURISTIC_COMPONENTS } from './components';
import { AUTH_CSS, AUTH_LOGIN_FORM, AUTH_REGISTER_FORM } from './examples';
// Perancah pratinjau (bilah navigasi sticky, helper chart) kit-agnostik dan sengaja dipakai
// bersama; rumahnya masih di folder kit pertama sampai ada alasan memindahkannya.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

/**
 * `showcase.html` kit Dark Futuristic: lembar peraga 22 seksi sesuai §6 kontrak — termasuk
 * Login & Register, yang merupakan bagian paket Komponen (bukan tampilan tersendiri di navigasi).
 *
 * Kit ini satu-tema (gelap bawaan) sehingga exNav dipanggil dengan `themeToggle: false`.
 *
 * Seksi komponennya dirakit dari fragmen `components/` yang sama persis dengan yang akan disalin
 * agen — bukan salinan tersendiri — supaya pratinjau tidak pernah menyimpang dari komponen
 * sebenarnya. Kelas `sc-*` hanyalah perancah lembar peraganya dan bukan bagian dari kontrak kit.
 */

const c = DARK_FUTURISTIC_COMPONENTS;

// Nomor seksi dihitung otomatis sesuai urutan render, supaya menyisipkan seksi baru tidak
// mengharuskan menomori ulang semua seksi di bawahnya.
let sectionCounter = 0;
function section(title: string, body: string): string {
    sectionCounter += 1;
    return `<section class="sc-section"><h2 class="sc-heading">${String(sectionCounter).padStart(2, '0')}. ${title}</h2>${body}</section>`;
}

function authCard(form: string): string {
    // Formulirnya ditulis untuk halaman di examples/ (taut antarhalaman relatif sesama folder);
    // di showcase yang hidup di akar arsip, taut itu harus menunjuk ke examples/.
    const rooted = form
        .replace('href="register.html"', 'href="examples/register.html"')
        .replace('href="login.html"', 'href="examples/login.html"');
    return `<div class="tk-card au-card" style="margin: 0"><div class="tk-card-body"><div class="au-brand">Logo</div>${rooted}</div></div>`;
}

const SWATCHES = [
    ['primary', '#4D7CFE'], ['primary-hover', '#6B93FF'], ['secondary', '#A78BFA'],
    ['accent', '#22D3EE'], ['background', '#07080D'], ['surface', '#0E1018'],
    ['surface-2', '#161A25'], ['text', '#E8EBF2'], ['text-muted', '#8A91A6'],
    ['border', '#232838'], ['success', '#34D399'], ['warning', '#FBBF24'],
    ['danger', '#FB7185'], ['info', '#22D3EE']
].map(([name, hex]) =>
    `<div class="sc-swatch"><div class="sc-swatch-fill" style="background: var(--tk-color-${name})"></div><span>${name}</span><code>${hex}</code></div>`
).join('');

const TYPE_SCALE = [
    ['Display', 'tk-display', '64px'], ['Heading 1', 'tk-h1', '42px'], ['Heading 2', 'tk-h2', '30px'],
    ['Heading 3', 'tk-h3', '23px'], ['Heading 4', 'tk-h4', '18px'], ['Title', 'tk-title', '15px'],
    ['Body', 'tk-body', '16px'], ['Body Small', 'tk-body-sm', '14px'], ['Caption', 'tk-caption', '12px']
].map(([label, cls, size]) =>
    `<div class="sc-type-row"><span class="sc-type-meta">${label} &middot; ${size}</span><p class="${cls}" style="margin: 0">Aa &mdash; Sinyal dari masa depan</p></div>`
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

const ICONS = ['home-01', 'search-01', 'user', 'settings-02', 'notification-03', 'favourite', 'star',
    'delete-02', 'edit-02', 'tick-01', 'cancel-01', 'add-01', 'arrow-right-01', 'download-01',
    'calendar-01', 'mail-01', 'square-lock-01', 'cpu']
    .map(name => `<span class="sc-icon" title="hugeicons:${name}"><iconify-icon icon="hugeicons:${name}" width="22" height="22"></iconify-icon></span>`)
    .join('');

export const DARK_FUTURISTIC_SHOWCASE = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dark Futuristic — Design Kit Showcase</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Inter+Tight:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<script src="https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"></script>
<script src="${CHARTJS_SCRIPT}"></script>
<style>
    ${EX_NAV_CSS}
</style>
<style>
    /* Perancah lembar peraga (sc-*): bukan bagian kontrak kit. */
    .sc-wrap { max-width: 1200px; margin: 0 auto; padding: 48px 24px 96px; }
    .sc-kit-title { font-family: var(--tk-font-mono); font-size: 11px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; color: var(--tk-color-accent); margin: 0 0 6px; }
    .sc-section { margin-top: 56px; }
    .sc-heading { font-family: var(--tk-font-mono); font-size: 11px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; color: var(--tk-color-accent); border-bottom: 1px solid var(--tk-color-border); padding-bottom: 8px; margin: 0 0 24px; }
    .sc-row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    .sc-col { display: flex; flex-direction: column; gap: 16px; max-width: 480px; }
    .sc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
    .sc-swatch { font-size: 12px; display: flex; flex-direction: column; gap: 4px; }
    .sc-swatch code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-swatch-fill { height: 48px; border-radius: var(--tk-radius-sm); border: 1px solid var(--tk-color-border); }
    .sc-type-row { display: flex; align-items: baseline; gap: 24px; margin-bottom: 16px; }
    .sc-type-meta { width: 140px; flex: none; font-family: var(--tk-font-mono); font-size: 11px; color: var(--tk-color-text-muted); }
    .sc-space-row { display: flex; align-items: center; gap: 16px; margin-bottom: 8px; font-size: 12px; }
    .sc-space-row code { width: 120px; color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-space-bar { height: 12px; background: var(--tk-df-gradient); border-radius: 2px; box-shadow: 0 0 12px rgba(77, 124, 254, 0.4); }
    .sc-radius-item { display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 11px; }
    .sc-radius-item code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-radius-box { width: 132px; height: 72px; background: var(--tk-color-surface); border: 1px solid rgba(77, 124, 254, 0.45); box-shadow: inset 0 0 24px rgba(77, 124, 254, 0.1); }
    .sc-radius-box-pill { height: 40px; margin-top: 16px; }
    .sc-shadow-box { width: 132px; height: 88px; background: var(--tk-color-surface); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius); display: flex; align-items: flex-end; padding: 8px; font-size: 11px; }
    .sc-shadow-box code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-icon { color: var(--tk-color-text); padding: 8px; }
    .sc-cell { background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-sm); height: 48px; }
    .sc-overlay-demo { position: relative; height: 320px; overflow: hidden; border-radius: var(--tk-radius); border: 1px solid var(--tk-color-border); }
    .sc-overlay-demo .tk-modal-backdrop, .sc-overlay-demo .tk-drawer { position: absolute; }
    .sc-chart-box { position: relative; height: 200px; }
    .sc-auth-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 420px)); gap: 24px; align-items: start; }
    /* Papan bahasa desain: contoh grid teknis, cahaya gradient, dan perkakas HUD berdampingan. */
    .sc-lang { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
    .sc-lang-tile { position: relative; min-height: 130px; padding: 16px; border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-lg); background: var(--tk-color-surface); overflow: hidden; display: flex; flex-direction: column; justify-content: flex-end; gap: 4px; }
    .sc-lang-grid { background-image: linear-gradient(rgba(232, 235, 242, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 235, 242, 0.09) 1px, transparent 1px); background-size: 22px 22px; }
    .sc-lang-glow::before { content: ''; position: absolute; inset: -40% -10% auto -10%; height: 120%; background: radial-gradient(50% 50% at 30% 20%, rgba(77, 124, 254, 0.45) 0%, transparent 100%), radial-gradient(45% 45% at 80% 10%, rgba(167, 139, 250, 0.35) 0%, transparent 100%); }
    .sc-lang-tile span { position: relative; }
</style>
<style>
${AUTH_CSS}
</style>
</head>
<body>
${exNav('Dark Futuristic', 'components', '', { themeToggle: false })}
<div class="sc-wrap">
    <p class="sc-kit-title">TOKENAI Design Kit</p>
    <h1 class="tk-h1" style="margin: 0">Dark Futuristic</h1>
    <p class="tk-body-lg tk-muted" style="margin-top: 8px">Dark mode yang bersih dan tenang untuk produk AI, SaaS, crypto, dan teknologi. Tipografi geometris rapi (Sora + Inter Tight) di atas latar hitam kebiruan, grid teknis tipis yang menyelimuti seluruh halaman, garis batas setipis rambut, dan cahaya gradient biru elektrik ke violet yang mengambang jauh di kejauhan. Elemen sci-fi-nya sengaja sedikit dan disiplin: kurung sudut HUD di panel, titik status berdenyut, berkas cahaya pemisah seksi, dan satu-dua kata bergradasi di judul &mdash; tanpa glitch atau neon berlebihan, karena keterbacaan tetap nomor satu. Kit satu-tema &mdash; gelap secara bawaan. Lihat juga contoh halaman nyata lewat bilah navigasi di atas.</p>

${section('Typography', `<p class="tk-caption" style="margin-bottom: 24px">Sora (heading geometris) &middot; Inter Tight (body rapat &amp; bersih) &middot; IBM Plex Mono (label, kode &amp; kbd) &middot; skala di bawah adalah seluruh tingkat yang tersedia</p>${TYPE_SCALE}`)}
${section('Color Palette', `<div class="sc-grid">${SWATCHES}</div><p class="tk-caption" style="margin-top: 12px">Dasarnya hitam kebiruan berlapis tiga (background &rarr; surface &rarr; surface-2); warna hanya muncul sebagai cahaya: biru elektrik, cyan, dan violet.</p>`)}
${section('Spacing System', SPACES)}
${section('Border Radius', `<div class="sc-row">${RADII}</div><p class="tk-caption" style="margin-top: 12px">Radius sedang dan konsisten &mdash; cukup lembut untuk terasa modern, cukup tegas untuk terasa teknis.</p>`)}
${section('Shadow System', `<div class="sc-row" style="gap: 24px">${SHADOWS}</div><p class="tk-caption" style="margin-top: 12px">Di ruang gelap bayangan bekerja sebagai kedalaman, bukan kontras; cahaya biru dipakai terpisah untuk menandai elemen aktif.</p>`)}
${section('Iconography', `<div class="sc-row">${ICONS}</div><p class="tk-caption">Iconify, set <code>hugeicons</code> &mdash; tulis <code>&lt;iconify-icon icon="hugeicons:nama"&gt;</code>; ratusan ribu ikon lain tersedia dengan set berbeda bila perlu.</p>`)}
${section('Design Language', `<div class="sc-lang"><div class="sc-lang-tile sc-lang-grid"><span class="tk-title" style="margin: 0">Grid teknis</span><span class="tk-caption">Menyelimuti latar seluruh halaman</span></div><div class="sc-lang-tile sc-lang-glow"><span class="tk-title" style="margin: 0">Gradient glow</span><span class="tk-caption">Dua sumber cahaya jauh di puncak halaman</span></div><div class="sc-lang-tile tk-hud"><span class="tk-title" style="margin: 0">Kurung HUD</span><span class="tk-caption"><code class="tk-code">.tk-hud</code> &mdash; sudut instrumen</span></div><div class="sc-lang-tile"><span class="tk-h3" style="margin: 0">Teks <span class="tk-gradient-text">bergradasi</span></span><span class="tk-caption"><code class="tk-code">.tk-gradient-text</code> &mdash; untuk satu-dua kata kunci</span></div></div><div style="margin-top: 24px"><p class="tk-kicker"><span class="tk-dot"></span> Sistem aktif</p></div><hr class="tk-beam" style="margin: 24px 0"><div class="tk-panel tk-hud" style="max-width: 560px"><p class="tk-term" style="margin: 0"><b>$</b> logo deploy --env production<br><span>&#10003;</span> membangun 128 modul dalam 4,2 detik<br><b>&rarr;</b> live di <span>contoh.id</span></p></div><p class="tk-body-sm tk-muted" style="margin: 24px 0 0; max-width: 620px">Perkakas khas kit: <code class="tk-code">.tk-kicker</code> (label mono dengan <code class="tk-code">.tk-dot</code> berdenyut), <code class="tk-code">.tk-hud</code> (kurung sudut sci-fi di panel mana pun), <code class="tk-code">.tk-beam</code> (pemisah seksi setipis rambut yang menyala di tengah), <code class="tk-code">.tk-panel</code> (kaca gelap berpalang rambut), <code class="tk-code">.tk-term</code> (baris keluaran terminal), dan <code class="tk-code">.tk-gradient-text</code>. Semuanya ditahan agar teks tetap jadi yang paling terbaca.</p>`)}
${section('Buttons', `<div class="sc-row">${c['components/button.html']}</div><p class="tk-caption" style="margin-top: 12px">Tombol primer memakai gradient tanda tangan yang bergeser saat disorot; sisanya sunyi dengan garis rambut yang menyala biru.</p>`)}
${section('Input & Form', `<div class="sc-col">${c['components/form.html']}</div><p class="tk-caption" style="margin: 24px 0 12px">Search bar &mdash; ikon dan pintasan menyatu di dalam field</p><div style="max-width: 480px">${c['components/search.html']}</div><p class="tk-caption" style="margin: 24px 0 12px">Select custom (ditampilkan terbuka) &mdash; satu pilihan &middot; dengan pencarian &middot; multi dengan checkbox &amp; aksi. Listbox digambar kit, bukan popup bawaan browser.</p><div class="sc-row" style="align-items: flex-start; gap: 24px; min-height: 340px">${c['components/select.html'].split('<div class="tk-select">').join('<div class="tk-select tk-select-open" style="width: 250px">')}</div><p class="tk-caption" style="margin: 0 0 12px">Dropdown aksi (ditampilkan terbuka; aslinya terbuka saat trigger diklik)</p><div style="min-height: 240px">${c['components/dropdown.html'].replace('class="tk-dropdown"', 'class="tk-dropdown tk-dropdown-open"')}</div><p class="tk-caption">Semua kontrol digambar sendiri &mdash; field nyaris menyatu dengan latar dan baru menyala biru saat fokus.</p>`)}
${section('Login & Register', `<p class="tk-caption" style="margin-bottom: 16px">Kartu auth dirakit murni dari komponen form kit &mdash; bagian dari paket Komponen. Halaman penuhnya (web &amp; ponsel lewat saklar perangkat) ada di <a href="examples/login.html">examples/login.html</a> dan <a href="examples/register.html">examples/register.html</a>.</p><div class="sc-auth-grid">${authCard(AUTH_LOGIN_FORM)}${authCard(AUTH_REGISTER_FORM)}</div>`)}
${section('Card Components', `<div class="tk-grid tk-grid-3">${c['components/card.html']}<div class="tk-card"><div class="tk-card-body" style="text-align: center"><div class="tk-feature-icon" style="margin: 0 auto 12px"><iconify-icon icon="hugeicons:user" width="24" height="24"></iconify-icon></div><p class="tk-title" style="margin: 0">Jane Doe</p><p class="tk-caption">UI/UX Designer</p></div></div></div><p class="tk-caption" style="margin-top: 12px">Tiap kartu punya sorot cahaya setipis rambut di tepi atasnya dan menyala biru saat disorot.</p>`)}
${section('Navigation', `<div class="sc-col" style="max-width: none">${c['components/navigation.html'].replace('<aside', '<nav class="tk-navbar tk-navbar-dark"><span class="tk-navbar-brand">Logo</span><a class="tk-navbar-link tk-navbar-link-active" href="#">Home</a><a class="tk-navbar-link" href="#">Fitur</a><button class="tk-btn tk-btn-secondary tk-btn-sm">Masuk</button></nav><aside')}</div>`)}
${section('Tabs & Segmented', `<div class="sc-col">${c['components/tabs.html']}</div>`)}
${section('Badges & Chips', `<div class="sc-row">${c['components/badge.html']}</div><p class="tk-caption" style="margin-top: 12px">Badge memakai huruf mono kapital kecil &mdash; membacanya seperti membaca status pada panel instrumen.</p>`)}
${section('Feedback & Alerts', `<div class="sc-col">${c['components/alert.html']}</div>`)}
${section('Layout Options', `<p class="tk-caption" style="margin-bottom: 12px">Grid 12 / 3 / 2 kolom pada lebar konten --tk-container</p><div class="tk-grid tk-grid-12" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(12)}</div><div class="tk-grid tk-grid-3" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(3)}</div><div class="tk-grid tk-grid-2">${'<div class="sc-cell"></div>'.repeat(2)}</div>`)}
${section('Content Blocks', c['components/content-blocks.html'])}
${section('Data Display', `<p class="tk-caption" style="margin-bottom: 12px">Advanced filter &mdash; pencarian, dua select custom, tombol filter berpenanda jumlah, chip filter aktif</p>${c['components/filter.html']}<div style="margin-top: 24px">${c['components/table.html'].replace('<nav class="tk-pagination">', '<nav class="tk-pagination" style="margin-top: 16px">')}</div><p class="tk-caption" style="margin-top: 12px">Kolom Aksi rata kanan: ikon langsung (lihat &middot; edit &middot; hapus) untuk aksi sedikit, atau menu &hellip; (klik untuk membuka) bila aksinya banyak.</p>`)}
${section('Charts', `<p class="tk-caption" style="margin-bottom: 12px">Chart.js &mdash; pustaka chart tunggal untuk semua kit. Warna dibaca dari token kit saat digambar; garis biru-cyan-violet yang menyala di atas latar gelap.</p><div class="tk-grid tk-grid-3"><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Pengunjung</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-line"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Pendapatan</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-bar"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Sumber Trafik</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-doughnut"></canvas></div></div></div></div>`)}
${section('Modal & Overlay', `<div class="sc-overlay-demo">${c['components/modal.html']}</div>`)}
${section('Loading States', `<div class="sc-row" style="gap: 32px">${c['components/loading.html'].replace('<div class="tk-progress">', '<div class="tk-progress" style="width: 240px">')}</div><p class="tk-caption" style="margin-top: 12px">Progress bar memakai gradient tanda tangan yang menyala di dalam rel gelap.</p>`)}
${section('Empty States', `<div style="max-width: 420px">${c['components/empty.html']}</div>`)}

</div>
${CHART_HELPER_SCRIPT}
<script>
var scLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
tkChart('sc-chart-line', function (t) {
    return {
        type: 'line',
        data: { labels: scLabels, datasets: [{ label: 'Pengunjung', data: [4200, 5100, 4800, 6300, 7100, 8400], borderColor: t.primary, backgroundColor: t.primary + '24', fill: true, tension: 0.4, pointRadius: 3.5, pointBackgroundColor: '#22D3EE', pointBorderColor: t.surface2, pointBorderWidth: 2, borderWidth: 2.5 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-bar', function (t) {
    return {
        type: 'bar',
        data: { labels: scLabels, datasets: [{ label: 'Pendapatan', data: [12, 19, 14, 22, 26, 31], backgroundColor: '#A78BFA', borderRadius: 6, maxBarThickness: 34 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-doughnut', function (t) {
    return {
        type: 'doughnut',
        data: { labels: ['Direct', 'Organik', 'Sosial', 'Referral'], datasets: [{ data: [38, 31, 19, 12], backgroundColor: [t.primary, '#22D3EE', '#A78BFA', '#232838'], borderColor: '#0E1018', borderWidth: 3 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '66%', plugins: { legend: { position: 'bottom' } } }
    };
});
</script>
</body>
</html>
`;
