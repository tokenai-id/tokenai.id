/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len, @typescript-eslint/quotes */

import { DOPAMINE_COMPONENTS } from './components';
import { AUTH_CSS, AUTH_LOGIN_FORM, AUTH_REGISTER_FORM } from './examples';
// Perancah pratinjau (bilah navigasi sticky, helper chart) kit-agnostik dan sengaja dipakai
// bersama; rumahnya masih di folder kit pertama sampai ada alasan memindahkannya.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

/**
 * `showcase.html` kit Dopamine Design: lembar peraga 22 seksi sesuai §6 kontrak — termasuk
 * Login & Register, yang merupakan bagian paket Komponen (bukan tampilan tersendiri di navigasi).
 *
 * Kit ini satu-tema (terang bawaan) sehingga exNav dipanggil dengan `themeToggle: false`.
 *
 * Seksi komponennya dirakit dari fragmen `components/` yang sama persis dengan yang akan disalin
 * agen — bukan salinan tersendiri — supaya pratinjau tidak pernah menyimpang dari komponen
 * sebenarnya. Kelas `sc-*` hanyalah perancah lembar peraganya dan bukan bagian dari kontrak kit.
 */

const c = DOPAMINE_COMPONENTS;

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
    ['primary', '#FF2D87'], ['primary-hover', '#FF5CA3'], ['secondary', '#2D5BFF'],
    ['accent', '#C6FF1F'], ['background', '#FFF3E4'], ['surface', '#FFFFFF'],
    ['surface-2', '#FFE7F1'], ['text', '#241436'], ['text-muted', '#7A6A8A'],
    ['border', '#241436'], ['success', '#12B76A'], ['warning', '#FF8A00'],
    ['danger', '#F4293C'], ['info', '#2D5BFF']
].map(([name, hex]) =>
    `<div class="sc-swatch"><div class="sc-swatch-fill" style="background: var(--tk-color-${name})"></div><span>${name}</span><code>${hex}</code></div>`
).join('');

const TYPE_SCALE = [
    ['Display', 'tk-display', '72px'], ['Heading 1', 'tk-h1', '46px'], ['Heading 2', 'tk-h2', '32px'],
    ['Heading 3', 'tk-h3', '24px'], ['Heading 4', 'tk-h4', '19px'], ['Title', 'tk-title', '16px'],
    ['Body', 'tk-body', '16px'], ['Body Small', 'tk-body-sm', '14px'], ['Caption', 'tk-caption', '12px']
].map(([label, cls, size]) =>
    `<div class="sc-type-row"><span class="sc-type-meta">${label} &middot; ${size}</span><p class="${cls}" style="margin: 0">Aa &mdash; Hari ini seru sekali</p></div>`
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

const ICONS = ['home', 'search', 'user', 'cog', 'bell', 'heart', 'star', 'trash', 'edit-one',
    'check', 'x', 'plus', 'arrow-right', 'download', 'calendar', 'mail', 'lock', 'confetti']
    .map(name => `<span class="sc-icon" title="mynaui:${name}"><iconify-icon icon="mynaui:${name}" width="24" height="24"></iconify-icon></span>`)
    .join('');

export const DOPAMINE_SHOWCASE = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dopamine — Design Kit Showcase</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Azeret+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<script src="https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"></script>
<script src="${CHARTJS_SCRIPT}"></script>
<style>
    ${EX_NAV_CSS}
</style>
<style>
    /* Perancah lembar peraga (sc-*): bukan bagian kontrak kit. */
    .sc-wrap { max-width: 1200px; margin: 0 auto; padding: 48px 24px 96px; }
    .sc-kit-title { font-family: var(--tk-font-mono); font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--tk-color-primary); margin: 0 0 6px; }
    .sc-section { margin-top: 56px; }
    .sc-heading { display: inline-block; font-family: var(--tk-font-heading); font-size: 14px; font-weight: 600; color: var(--tk-color-text); background: var(--tk-color-accent); border: 2px solid var(--tk-color-text); border-radius: var(--tk-radius-full); box-shadow: 0 3px 0 var(--tk-color-text); padding: 6px 18px; margin: 0 0 24px; }
    .sc-row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    .sc-col { display: flex; flex-direction: column; gap: 16px; max-width: 480px; }
    .sc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
    .sc-swatch { font-size: 12px; font-weight: 600; display: flex; flex-direction: column; gap: 4px; }
    .sc-swatch code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); font-weight: 400; }
    .sc-swatch-fill { height: 52px; border-radius: var(--tk-radius-sm); border: 2px solid var(--tk-color-text); box-shadow: 0 3px 0 var(--tk-color-text); }
    .sc-type-row { display: flex; align-items: baseline; gap: 24px; margin-bottom: 16px; }
    .sc-type-meta { width: 140px; flex: none; font-family: var(--tk-font-mono); font-size: 11px; color: var(--tk-color-text-muted); }
    .sc-space-row { display: flex; align-items: center; gap: 16px; margin-bottom: 8px; font-size: 12px; }
    .sc-space-row code { width: 120px; color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-space-bar { height: 16px; background: var(--tk-dp-rainbow); border: 2px solid var(--tk-color-text); border-radius: var(--tk-radius-full); }
    .sc-radius-item { display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 11px; }
    .sc-radius-item code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-radius-box { width: 132px; height: 76px; background: var(--tk-color-surface-2); border: 2px solid var(--tk-color-text); box-shadow: 0 4px 0 var(--tk-color-text); }
    .sc-radius-box-pill { height: 44px; margin-top: 16px; }
    .sc-shadow-box { width: 138px; height: 92px; background: var(--tk-color-surface); border: 2px solid var(--tk-color-text); border-radius: var(--tk-radius); display: flex; align-items: flex-end; padding: 8px; font-size: 11px; }
    .sc-shadow-box code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-icon { color: var(--tk-color-text); background: var(--tk-color-surface); border: 2px solid var(--tk-color-text); border-radius: var(--tk-radius-sm); padding: 10px; display: inline-flex; }
    .sc-icon:nth-child(4n+2) { background: var(--tk-dp-lime); }
    .sc-icon:nth-child(4n+3) { background: var(--tk-color-surface-2); }
    .sc-cell { background: var(--tk-color-surface-2); border: 2px solid var(--tk-color-text); border-radius: var(--tk-radius-sm); height: 52px; }
    .sc-overlay-demo { position: relative; height: 340px; overflow: hidden; border-radius: var(--tk-radius); border: 2px solid var(--tk-color-text); }
    .sc-overlay-demo .tk-modal-backdrop, .sc-overlay-demo .tk-drawer { position: absolute; }
    .sc-chart-box { position: relative; height: 200px; }
    .sc-auth-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 420px)); gap: 24px; align-items: start; }
    /* Papan bahasa desain: blok warna, stiker, stabilo, dan angka besar berdampingan. */
    .sc-lang { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; }
    .sc-lang-tile { min-height: 132px; padding: 18px; border: 2px solid var(--tk-color-text); border-radius: var(--tk-radius-lg); box-shadow: 0 5px 0 var(--tk-color-text); display: flex; flex-direction: column; justify-content: flex-end; gap: 6px; }
</style>
<style>
${AUTH_CSS}
</style>
</head>
<body>
${exNav('Dopamine', 'components', '', { themeToggle: false })}
<div class="sc-wrap">
    <p class="sc-kit-title">TOKENAI Design Kit</p>
    <h1 class="tk-h1" style="margin: 0">Dopamine Design</h1>
    <p class="tk-body-lg tk-muted" style="margin-top: 8px">Warna sangat cerah dan playful untuk pengalaman yang benar-benar energetic: neon pink, orange, electric blue, dan lime dipakai penuh tanpa diredam sedikit pun. Bentuknya gemuk dan membulat &mdash; radius besar, tombol pil berhuruf Fredoka yang tebal, garis tegas dua piksel, dan bayangan padat berwarna yang membuat setiap elemen terasa memantul saat disorot. Kartu statistik diblok warna bergantian, ikon fitur duduk di kotak cerah yang miring bergantian, stiker miring bertebaran sebagai label, kata kunci ditandai stabilo lime, dan latar krem hangatnya dinodai gradient pink-biru-lime yang mengambang. Kit satu-tema &mdash; terang secara bawaan, karena kegembiraan seperti ini tidak punya mode gelap. Lihat juga contoh halaman nyata lewat bilah navigasi di atas.</p>

${section('Typography', `<p class="tk-caption" style="margin-bottom: 24px">Fredoka (heading gemuk membulat) &middot; Plus Jakarta Sans (body ramah) &middot; Azeret Mono (caption &amp; kode) &middot; skala di bawah adalah seluruh tingkat yang tersedia</p>${TYPE_SCALE}`)}
${section('Color Palette', `<div class="sc-grid">${SWATCHES}</div><p class="tk-caption" style="margin-top: 16px">Kuartet cerahnya &mdash; pink, orange, biru, lime &mdash; dipakai bergantian lewat <code class="tk-code">.tk-pop-*</code>; teks dan garis memakai plum gelap yang sama agar semuanya tetap terbaca.</p>`)}
${section('Spacing System', SPACES)}
${section('Border Radius', `<div class="sc-row">${RADII}</div><p class="tk-caption" style="margin-top: 12px">Radius sengaja besar di semua tingkat &mdash; tidak ada sudut tajam, semuanya gemuk dan ramah.</p>`)}
${section('Shadow System', `<div class="sc-row" style="gap: 24px">${SHADOWS}</div><p class="tk-caption" style="margin-top: 12px">Bayangannya padat dan berwarna, bukan kabur &mdash; itulah yang membuat kartu dan tombol terasa bisa ditekan.</p>`)}
${section('Iconography', `<div class="sc-row">${ICONS}</div><p class="tk-caption">Iconify, set <code>mynaui</code> &mdash; tulis <code>&lt;iconify-icon icon="mynaui:nama"&gt;</code>; ratusan ribu ikon lain tersedia dengan set berbeda bila perlu.</p>`)}
${section('Design Language', `<div class="sc-lang"><div class="sc-lang-tile tk-pop-pink"><span class="tk-h4" style="margin: 0; color: #FFFFFF">Neon pink</span><span class="tk-caption"><code class="tk-code">.tk-pop-pink</code></span></div><div class="sc-lang-tile tk-pop-blue"><span class="tk-h4" style="margin: 0; color: #FFFFFF">Electric blue</span><span class="tk-caption"><code class="tk-code">.tk-pop-blue</code></span></div><div class="sc-lang-tile tk-pop-lime"><span class="tk-h4" style="margin: 0">Lime</span><span class="tk-caption"><code class="tk-code">.tk-pop-lime</code></span></div><div class="sc-lang-tile tk-pop-orange"><span class="tk-h4" style="margin: 0; color: #FFFFFF">Orange</span><span class="tk-caption"><code class="tk-code">.tk-pop-orange</code></span></div></div><div class="sc-row" style="gap: 20px; margin-top: 28px"><span class="tk-sticker">${'<iconify-icon icon="mynaui:sparkles" width="15" height="15"></iconify-icon>'} Stiker lime</span><span class="tk-sticker tk-sticker-pink">Stiker pink</span><span class="tk-sticker tk-sticker-blue">Stiker biru</span><span class="tk-bignum">42</span><span class="tk-h3" style="margin: 0">Kata <span class="tk-highlight">distabilo</span></span><span class="tk-badge tk-wiggle" style="cursor: pointer">Arahkan &mdash; saya goyang</span></div><hr class="tk-squiggle" style="margin: 28px 0"><p class="tk-body-sm tk-muted" style="margin: 0; max-width: 640px">Perkakas khas kit: <code class="tk-code">.tk-pop-pink/-blue/-lime/-orange/-violet</code> (blok warna penuh untuk kartu), <code class="tk-code">.tk-sticker</code> (label pil miring, varian <code class="tk-code">-pink</code>/<code class="tk-code">-blue</code>), <code class="tk-code">.tk-highlight</code> (tanda stabilo lime), <code class="tk-code">.tk-bignum</code> (angka besar berwarna), <code class="tk-code">.tk-squiggle</code> (pemisah pelangi), <code class="tk-code">.tk-wiggle</code> (goyang saat disorot), dan <code class="tk-code">.tk-bounce</code> (memantul pelan). Dua animasi terakhir otomatis mati bila pengguna meminta <code class="tk-code">prefers-reduced-motion</code>.</p>`)}
${section('Buttons', `<div class="sc-row">${c['components/button.html']}</div><p class="tk-caption" style="margin-top: 12px">Tombol pil dengan bayangan padat di bawahnya: melompat naik saat disorot, lalu turun dan mengempis saat ditekan &mdash; seperti tombol mainan.</p>`)}
${section('Input & Form', `<div class="sc-col">${c['components/form.html']}</div><p class="tk-caption" style="margin: 24px 0 12px">Search bar &mdash; ikon dan pintasan menyatu di dalam field</p><div style="max-width: 480px">${c['components/search.html']}</div><p class="tk-caption" style="margin: 24px 0 12px">Select custom (ditampilkan terbuka) &mdash; satu pilihan &middot; dengan pencarian &middot; multi dengan checkbox &amp; aksi. Listbox digambar kit, bukan popup bawaan browser.</p><div class="sc-row" style="align-items: flex-start; gap: 24px; min-height: 350px">${c['components/select.html'].split('<div class="tk-select">').join('<div class="tk-select tk-select-open" style="width: 250px">')}</div><p class="tk-caption" style="margin: 0 0 12px">Dropdown aksi (ditampilkan terbuka; aslinya terbuka saat trigger diklik)</p><div style="min-height: 250px">${c['components/dropdown.html'].replace('class="tk-dropdown"', 'class="tk-dropdown tk-dropdown-open"')}</div><p class="tk-caption">Semua kontrol digambar sendiri &mdash; field terangkat naik saat fokus dan checkbox-nya memiring gembira saat dicentang.</p>`)}
${section('Login & Register', `<p class="tk-caption" style="margin-bottom: 16px">Kartu auth dirakit murni dari komponen form kit &mdash; bagian dari paket Komponen. Halaman penuhnya (web &amp; ponsel lewat saklar perangkat) ada di <a href="examples/login.html">examples/login.html</a> dan <a href="examples/register.html">examples/register.html</a>.</p><div class="sc-auth-grid">${authCard(AUTH_LOGIN_FORM)}${authCard(AUTH_REGISTER_FORM)}</div>`)}
${section('Card Components', `<div class="tk-grid tk-grid-3">${c['components/card.html']}<div class="tk-card tk-pop-blue"><div class="tk-card-body" style="text-align: center"><div class="tk-feature-icon" style="margin: 0 auto 12px; background: var(--tk-color-accent); color: var(--tk-color-text)"><iconify-icon icon="mynaui:user" width="26" height="26"></iconify-icon></div><p class="tk-h4" style="margin: 0; color: #FFFFFF">Jane Doe</p><p class="tk-caption">UI/UX Designer</p></div></div></div><p class="tk-caption" style="margin-top: 12px">Kartu melompat naik dan memiring sedikit saat disorot; blok warna dipasang dengan menambahkan kelas <code class="tk-code">.tk-pop-*</code>.</p>`)}
${section('Navigation', `<div class="sc-col" style="max-width: none">${c['components/navigation.html'].replace('<aside', '<nav class="tk-navbar tk-navbar-dark"><span class="tk-navbar-brand">Logo</span><a class="tk-navbar-link tk-navbar-link-active" href="#">Home</a><a class="tk-navbar-link" href="#">Fitur</a><button class="tk-btn tk-btn-secondary tk-btn-sm">Masuk</button></nav><aside')}</div>`)}
${section('Tabs & Segmented', `<div class="sc-col">${c['components/tabs.html']}</div>`)}
${section('Badges & Chips', `<div class="sc-row">${c['components/badge.html']}</div>`)}
${section('Feedback & Alerts', `<div class="sc-col">${c['components/alert.html']}</div>`)}
${section('Layout Options', `<p class="tk-caption" style="margin-bottom: 12px">Grid 12 / 3 / 2 kolom pada lebar konten --tk-container</p><div class="tk-grid tk-grid-12" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(12)}</div><div class="tk-grid tk-grid-3" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(3)}</div><div class="tk-grid tk-grid-2">${'<div class="sc-cell"></div>'.repeat(2)}</div>`)}
${section('Content Blocks', c['components/content-blocks.html'])}
${section('Data Display', `<p class="tk-caption" style="margin-bottom: 12px">Advanced filter &mdash; pencarian, dua select custom, tombol filter berpenanda jumlah, chip filter aktif</p>${c['components/filter.html']}<div style="margin-top: 24px">${c['components/table.html'].replace('<nav class="tk-pagination">', '<nav class="tk-pagination" style="margin-top: 16px">')}</div><p class="tk-caption" style="margin-top: 12px">Kolom Aksi rata kanan: ikon langsung (lihat &middot; edit &middot; hapus) untuk aksi sedikit, atau menu &hellip; (klik untuk membuka) bila aksinya banyak.</p>`)}
${section('Charts', `<p class="tk-caption" style="margin-bottom: 12px">Chart.js &mdash; pustaka chart tunggal untuk semua kit. Warna dibaca dari token kit saat digambar; batang dan irisannya memakai kuartet cerah dengan garis tegas seperti komponen lain.</p><div class="tk-grid tk-grid-3"><div class="tk-card"><div class="tk-card-header"><p class="tk-h4" style="margin: 0">Pengunjung</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-line"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-h4" style="margin: 0">Pendapatan</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-bar"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-h4" style="margin: 0">Sumber Trafik</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-doughnut"></canvas></div></div></div></div>`)}
${section('Modal & Overlay', `<div class="sc-overlay-demo">${c['components/modal.html']}</div>`)}
${section('Loading States', `<div class="sc-row" style="gap: 32px">${c['components/loading.html'].replace('<div class="tk-progress">', '<div class="tk-progress" style="width: 240px">')}</div><p class="tk-caption" style="margin-top: 12px">Progress bar memakai gradient pelangi penuh &mdash; pink, orange, lime, biru.</p>`)}
${section('Empty States', `<div style="max-width: 440px">${c['components/empty.html']}</div>`)}

</div>
${CHART_HELPER_SCRIPT}
<script>
var scLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
tkChart('sc-chart-line', function (t) {
    return {
        type: 'line',
        data: { labels: scLabels, datasets: [{ label: 'Pengunjung', data: [4200, 5100, 4800, 6300, 7100, 8400], borderColor: t.primary, backgroundColor: t.primary + '26', fill: true, tension: 0.45, pointRadius: 5, pointBackgroundColor: '#C6FF1F', pointBorderColor: t.text, pointBorderWidth: 2, borderWidth: 4 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-bar', function (t) {
    return {
        type: 'bar',
        data: { labels: scLabels, datasets: [{ label: 'Pendapatan', data: [12, 19, 14, 22, 26, 31], backgroundColor: ['#FF2D87', '#FF8A00', '#C6FF1F', '#2D5BFF', '#8B5CF6', '#FF2D87'], borderColor: t.text, borderWidth: 2, borderRadius: 10, maxBarThickness: 34 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-doughnut', function (t) {
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
