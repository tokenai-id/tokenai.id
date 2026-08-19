/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len, @typescript-eslint/quotes */

import { PUNK_COMPONENTS } from './components';
import { AUTH_CSS, AUTH_LOGIN_FORM, AUTH_REGISTER_FORM } from './examples';
// Perancah pratinjau (bilah navigasi sticky, helper chart) kit-agnostik dan sengaja dipakai
// bersama; rumahnya masih di folder kit pertama sampai ada alasan memindahkannya.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

/**
 * `showcase.html` kit Punk: lembar peraga 22 seksi sesuai §6 kontrak — termasuk
 * Login & Register, yang merupakan bagian paket Komponen (bukan tampilan tersendiri di navigasi).
 *
 * Kit ini satu-tema (terang bawaan) sehingga exNav dipanggil dengan `themeToggle: false`.
 *
 * Seksi komponennya dirakit dari fragmen `components/` yang sama persis dengan yang akan disalin
 * agen — bukan salinan tersendiri — supaya pratinjau tidak pernah menyimpang dari komponen
 * sebenarnya. Kelas `sc-*` hanyalah perancah lembar peraganya dan bukan bagian dari kontrak kit.
 */

const c = PUNK_COMPONENTS;

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
    return `<div class="tk-card au-card" style="margin: 0"><div class="tk-card-body"><div class="au-brand">LOGO</div>${rooted}</div></div>`;
}

const SWATCHES = [
    ['primary', '#141312'], ['primary-hover', '#2E2C29'], ['secondary', '#E31577'],
    ['accent', '#E8D200'], ['background', '#F2EFE7'], ['surface-2', '#E4E0D4'],
    ['text', '#161512'], ['text-muted', '#5F5B52'], ['border', '#999486'],
    ['success', '#1E9E4B'], ['warning', '#C98F00'], ['danger', '#D6191E'], ['info', '#0E7B99']
].map(([name, hex]) =>
    `<div class="sc-swatch"><div class="sc-swatch-fill" style="background: var(--tk-color-${name})"></div><span>${name}</span><code>${hex}</code></div>`
).join('');

const TYPE_SCALE = [
    ['Display', 'tk-display', '52px'], ['Heading 1', 'tk-h1', '38px'], ['Heading 2', 'tk-h2', '28px'],
    ['Heading 3', 'tk-h3', '21px'], ['Heading 4', 'tk-h4', '17px'], ['Title', 'tk-title', '15px'],
    ['Body', 'tk-body', '16px'], ['Body Small', 'tk-body-sm', '14px'], ['Caption', 'tk-caption', '12px']
].map(([label, cls, size]) =>
    `<div class="sc-type-row"><span class="sc-type-meta">${label} &middot; ${size}</span><p class="${cls}" style="margin: 0">Aa &mdash; Tiga chord dan kebenaran</p></div>`
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

const ICONS = ['home', 'search', 'user', 'cog', 'bell', 'heart', 'star', 'trash-alt', 'edit',
    'check', 'times', 'plus', 'arrow-right', 'download', 'upload', 'calendar', 'envelope', 'lock']
    .map(name => `<span class="sc-icon" title="la:${name}"><iconify-icon icon="la:${name}" width="24" height="24"></iconify-icon></span>`)
    .join('');

export const PUNK_SHOWCASE = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Punk — Design Kit Showcase</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Barlow:wght@400;500;600;700&family=Courier+Prime:wght@400;700&family=Permanent+Marker&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<script src="https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"></script>
<script src="${CHARTJS_SCRIPT}"></script>
<style>
    ${EX_NAV_CSS}
</style>
<style>
    /* Perancah lembar peraga (sc-*): bukan bagian kontrak kit. */
    .sc-wrap { max-width: 1200px; margin: 0 auto; padding: 48px 24px 96px; }
    .sc-kit-title { font-family: var(--tk-font-mono); font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--tk-color-secondary); margin: 0 0 4px; }
    .sc-section { margin-top: 56px; }
    .sc-heading { font-family: var(--tk-font-mono); font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--tk-color-secondary); border-bottom: 3px solid var(--tk-color-primary); padding-bottom: 8px; margin: 0 0 24px; }
    .sc-row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    .sc-col { display: flex; flex-direction: column; gap: 16px; max-width: 480px; }
    .sc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
    .sc-swatch { font-size: 12px; display: flex; flex-direction: column; gap: 4px; }
    .sc-swatch code { color: var(--tk-color-text-muted); }
    .sc-swatch-fill { height: 48px; border-radius: var(--tk-radius-sm); border: 2px solid var(--tk-color-primary); }
    .sc-type-row { display: flex; align-items: baseline; gap: 24px; margin-bottom: 16px; }
    .sc-type-meta { width: 140px; flex: none; font-size: 12px; color: var(--tk-color-text-muted); }
    .sc-space-row { display: flex; align-items: center; gap: 16px; margin-bottom: 8px; font-size: 12px; }
    .sc-space-row code { width: 120px; color: var(--tk-color-text-muted); }
    .sc-space-bar { height: 16px; background: rgba(227, 21, 119, 0.2); border: 2px solid var(--tk-color-secondary); }
    .sc-radius-item { display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 11px; }
    .sc-radius-item code { color: var(--tk-color-text-muted); }
    .sc-radius-box { width: 132px; height: 72px; background: var(--tk-color-surface-2); border: 2px solid var(--tk-color-primary); }
    .sc-radius-box-pill { height: 40px; margin-top: 16px; }
    .sc-shadow-box { width: 132px; height: 88px; background: var(--tk-color-surface); border: 2px solid var(--tk-color-primary); border-radius: var(--tk-radius); display: flex; align-items: flex-end; padding: 8px; font-size: 11px; }
    .sc-shadow-box code { color: var(--tk-color-text-muted); }
    .sc-icon { color: var(--tk-color-text); padding: 8px; }
    .sc-cell { background: var(--tk-color-surface-2); border: 2px dashed var(--tk-color-primary); border-radius: var(--tk-radius-sm); height: 48px; }
    .sc-overlay-demo { position: relative; height: 320px; overflow: hidden; border-radius: var(--tk-radius); }
    .sc-overlay-demo .tk-modal-backdrop, .sc-overlay-demo .tk-drawer { position: absolute; }
    .sc-chart-box { position: relative; height: 200px; }
    .sc-auth-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 420px)); gap: 24px; align-items: start; }
    .sc-ransom-demo { font-family: var(--tk-font-heading); font-size: 40px; text-transform: uppercase; margin: 0; line-height: 1.3; }
    .sc-photo-row { display: flex; gap: 20px; align-items: flex-end; flex-wrap: wrap; }
    .sc-photo { width: 150px; height: 100px; border: 2px solid var(--tk-color-primary); background: linear-gradient(135deg, #C05A3A 0%, #4A7A9E 45%, #6B9E4A 100%); }
    .sc-photo-mono { filter: grayscale(1) contrast(1.4) brightness(1.05); box-shadow: var(--tk-shadow-sm); transform: rotate(-1.5deg); }
${AUTH_CSS}
</style>
</head>
<body>
${exNav('Punk', 'components', '', { themeToggle: false })}
<div class="sc-wrap">
    <p class="sc-kit-title">TOKENAI Design Kit</p>
    <h1 class="tk-h1" style="margin: 0">Punk</h1>
    <p class="tk-body-lg tk-muted" style="margin-top: 8px">Poster gig DIY yang difotokopi hitam-putih: kertas kontras tinggi dengan bintik toner, tinta hitam pekat, pink menyolok dan kuning stabilo, heading Anton agresif yang miring, huruf tempelan ransom note, coretan Permanent Marker, patch/stiker ditempel sembarangan, dan komposisi yang sengaja kacau. Kit satu-tema &mdash; terang secara bawaan, tanpa mode gelap. Lihat juga contoh halaman nyata lewat bilah navigasi di atas.</p>

${section('Typography', `<p class="tk-caption" style="margin-bottom: 24px">Anton (heading agresif) &middot; Barlow (body) &middot; Courier Prime (caption &amp; label mesin tik) &middot; Permanent Marker (coretan) &middot; skala di bawah adalah seluruh tingkat yang tersedia</p>${TYPE_SCALE}`)}
${section('Color Palette', `<div class="sc-grid">${SWATCHES}</div>`)}
${section('Spacing System', SPACES)}
${section('Border Radius', `<div class="sc-row">${RADII}</div><p class="tk-caption" style="margin-top: 12px">Sudut siku tanpa kompromi &mdash; kertas dipotong gunting, bukan dibulatkan.</p>`)}
${section('Shadow System', `<div class="sc-row" style="gap: 24px">${SHADOWS}</div><p class="tk-caption" style="margin-top: 12px">Bayangan cetak keras <code>4px 4px 0</code> tinta; tombol utama memakai bayangan pink menyolok.</p>`)}
${section('Iconography', `<div class="sc-row">${ICONS}</div><p class="tk-caption">Iconify, set <code>la</code> (Line Awesome) &mdash; tulis <code>&lt;iconify-icon icon="la:nama"&gt;</code>; ratusan ribu ikon lain tersedia dengan set berbeda bila perlu.</p>`)}
${section('Design Language', `<div class="sc-row"><span class="tk-patch">DIY or Die</span><span class="tk-patch tk-patch-pink">Sold Out</span><span class="tk-patch tk-patch-yellow">All Ages</span></div><p class="sc-ransom-demo tk-ransom" style="margin: 24px 0 0"><span>Tiga</span> <span>chord</span> <span>dan</span> <span>kebenaran</span></p><p class="tk-h3" style="margin: 16px 0 0">Sorot dengan <span class="tk-highlight">stabilo kuning</span>, tulis dengan <span class="tk-scrawl">Permanent Marker!</span> &mdash; harga lama <span class="tk-strike">Rp199rb</span></p><div class="sc-photo-row" style="margin: 24px 0"><div><div class="sc-photo"></div><p class="tk-caption" style="margin: 6px 0 0">Sumber berwarna</p></div><div><div class="sc-photo sc-photo-mono"></div><p class="tk-caption" style="margin: 6px 0 0">Perlakuan kit: fotokopi B&amp;W kontras tinggi</p></div></div><p class="tk-body-sm tk-muted" style="margin: 16px 0 0; max-width: 560px">Estetika poster gig yang dirakit gunting-dan-lem: huruf tempelan ransom note (<code class="tk-code">.tk-ransom</code> &mdash; bungkus tiap kata dengan <code class="tk-code">&lt;span&gt;</code>), coretan tangan (<code class="tk-code">.tk-scrawl</code>), stabilo kuning (<code class="tk-code">.tk-highlight</code>), patch/stiker miring (<code class="tk-code">.tk-patch</code>), coretan pembatalan (<code class="tk-code">.tk-strike</code>), bintik toner di seluruh halaman (otomatis lewat <code class="tk-code">body::after</code>), foto otomatis jadi fotokopi B&amp;W, dan komposisi kacau yang disengaja &mdash; kartu fitur, badge, dan tombol semuanya sedikit berputar atau miring. Tidak ada mode gelap &mdash; poster ditempel di tiang listrik, bukan di layar.</p>`)}
${section('Buttons', `<div class="sc-row">${c['components/button.html']}</div>`)}
${section('Input & Form', `<div class="sc-col">${c['components/form.html']}</div><p class="tk-caption" style="margin: 24px 0 12px">Search bar &mdash; ikon dan pintasan menyatu di dalam field</p><div style="max-width: 480px">${c['components/search.html']}</div><p class="tk-caption" style="margin: 24px 0 12px">Select custom (ditampilkan terbuka) &mdash; satu pilihan &middot; dengan pencarian &middot; multi dengan checkbox &amp; aksi. Listbox digambar kit, bukan popup bawaan browser.</p><div class="sc-row" style="align-items: flex-start; gap: 24px; min-height: 340px">${c['components/select.html'].split('<div class="tk-select">').join('<div class="tk-select tk-select-open" style="width: 250px">')}</div><p class="tk-caption" style="margin: 0 0 12px">Dropdown aksi (ditampilkan terbuka; aslinya terbuka saat trigger diklik)</p><div style="min-height: 240px">${c['components/dropdown.html'].replace('class="tk-dropdown"', 'class="tk-dropdown tk-dropdown-open"')}</div><p class="tk-caption">Semua kontrol digambar sendiri &mdash; select, checkbox miring, radio, dan toggle tidak memakai tampilan bawaan browser.</p>`)}
${section('Login & Register', `<p class="tk-caption" style="margin-bottom: 16px">Kartu auth dirakit murni dari komponen form kit &mdash; bagian dari paket Komponen. Halaman penuhnya (web &amp; ponsel lewat saklar perangkat) ada di <a href="examples/login.html">examples/login.html</a> dan <a href="examples/register.html">examples/register.html</a>.</p><div class="sc-auth-grid">${authCard(AUTH_LOGIN_FORM)}${authCard(AUTH_REGISTER_FORM)}</div>`)}
${section('Card Components', `<div class="tk-grid tk-grid-3">${c['components/card.html']}<div class="tk-card"><div class="tk-card-body" style="text-align: center"><div class="tk-feature-icon" style="margin: 0 auto 12px"><iconify-icon icon="la:user" width="24" height="24"></iconify-icon></div><p class="tk-title" style="margin: 0">Jane Doe</p><p class="tk-caption">UI/UX Designer</p></div></div></div>`)}
${section('Navigation', `<div class="sc-col" style="max-width: none">${c['components/navigation.html'].replace('<aside', '<nav class="tk-navbar tk-navbar-dark"><span class="tk-navbar-brand">LOGO</span><a class="tk-navbar-link tk-navbar-link-active" href="#">Home</a><a class="tk-navbar-link" href="#">Fitur</a><button class="tk-btn tk-btn-secondary tk-btn-sm">Masuk</button></nav><aside')}</div>`)}
${section('Tabs & Segmented', `<div class="sc-col">${c['components/tabs.html']}</div>`)}
${section('Badges & Chips', `<div class="sc-row">${c['components/badge.html']}</div>`)}
${section('Feedback & Alerts', `<div class="sc-col">${c['components/alert.html']}</div>`)}
${section('Layout Options', `<p class="tk-caption" style="margin-bottom: 12px">Grid 12 / 3 / 2 kolom pada lebar konten --tk-container</p><div class="tk-grid tk-grid-12" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(12)}</div><div class="tk-grid tk-grid-3" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(3)}</div><div class="tk-grid tk-grid-2">${'<div class="sc-cell"></div>'.repeat(2)}</div>`)}
${section('Content Blocks', c['components/content-blocks.html'])}
${section('Data Display', `<p class="tk-caption" style="margin-bottom: 12px">Advanced filter &mdash; pencarian, dua select custom, tombol filter berpenanda jumlah, chip filter aktif</p>${c['components/filter.html']}<div style="margin-top: 24px">${c['components/table.html'].replace('<nav class="tk-pagination">', '<nav class="tk-pagination" style="margin-top: 16px">')}</div><p class="tk-caption" style="margin-top: 12px">Kolom Aksi rata kanan: ikon langsung (lihat &middot; edit &middot; hapus) untuk aksi sedikit, atau menu &hellip; (klik untuk membuka) bila aksinya banyak.</p>`)}
${section('Charts', `<p class="tk-caption" style="margin-bottom: 12px">Chart.js &mdash; pustaka chart tunggal untuk semua kit. Warna dibaca dari token kit saat digambar &mdash; tinta hitam, pink menyolok, dan kuning stabilo di atas kertas fotokopi.</p><div class="tk-grid tk-grid-3"><div class="tk-card"><div class="tk-card-body"><p class="tk-title" style="margin: 0 0 12px">Pengunjung</p><div class="sc-chart-box"><canvas id="sc-chart-line"></canvas></div></div></div><div class="tk-card"><div class="tk-card-body"><p class="tk-title" style="margin: 0 0 12px">Pendapatan</p><div class="sc-chart-box"><canvas id="sc-chart-bar"></canvas></div></div></div><div class="tk-card"><div class="tk-card-body"><p class="tk-title" style="margin: 0 0 12px">Sumber Trafik</p><div class="sc-chart-box"><canvas id="sc-chart-doughnut"></canvas></div></div></div></div>`)}
${section('Modal & Overlay', `<div class="sc-overlay-demo">${c['components/modal.html']}</div>`)}
${section('Loading States', `<div class="sc-row" style="gap: 32px">${c['components/loading.html'].replace('<div class="tk-progress">', '<div class="tk-progress" style="width: 240px">')}</div>`)}
${section('Empty States', `<div style="max-width: 420px">${c['components/empty.html']}</div>`)}

</div>
${CHART_HELPER_SCRIPT}
<script>
var scLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
tkChart('sc-chart-line', function (t) {
    return {
        type: 'line',
        data: { labels: scLabels, datasets: [{ label: 'Pengunjung', data: [4200, 5100, 4800, 6300, 7100, 8400], borderColor: t.primary, backgroundColor: t.primary + '14', fill: true, tension: 0, pointRadius: 5, pointBackgroundColor: '#E31577', borderWidth: 3 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-bar', function (t) {
    return {
        type: 'bar',
        data: { labels: scLabels, datasets: [{ label: 'Pendapatan', data: [12, 19, 14, 22, 26, 31], backgroundColor: '#E31577', borderRadius: 0 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-doughnut', function (t) {
    return {
        type: 'doughnut',
        data: { labels: ['Direct', 'Organik', 'Sosial', 'Referral'], datasets: [{ data: [38, 31, 19, 12], backgroundColor: [t.primary, '#E31577', t.accent, '#5F5B52'], borderColor: t.surface2, borderWidth: 3 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '65%', plugins: { legend: { position: 'bottom' } } }
    };
});
</script>
</body>
</html>
`;
