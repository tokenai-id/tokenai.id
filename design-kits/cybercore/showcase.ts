/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len, @typescript-eslint/quotes */

import { CYBERCORE_COMPONENTS } from './components';
import { AUTH_CSS, AUTH_LOGIN_FORM, AUTH_REGISTER_FORM } from './examples';
// Perancah pratinjau (bilah navigasi sticky, helper chart) kit-agnostik dan sengaja dipakai
// bersama; rumahnya masih di folder kit pertama sampai ada alasan memindahkannya.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

/**
 * `showcase.html` kit Cybercore: lembar peraga 22 seksi sesuai §6 kontrak — termasuk
 * Login & Register, yang merupakan bagian paket Komponen (bukan tampilan tersendiri di navigasi).
 *
 * Seksi komponennya dirakit dari fragmen `components/` yang sama persis dengan yang akan disalin
 * agen — bukan salinan tersendiri — supaya pratinjau tidak pernah menyimpang dari komponen
 * sebenarnya. Kelas `sc-*` hanyalah perancah lembar peraganya dan bukan bagian dari kontrak kit.
 */

const c = CYBERCORE_COMPONENTS;

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
    ['primary', '#007A3D'], ['primary-hover', '#005C2E'], ['secondary', '#141414'],
    ['accent', '#E85D00'], ['background', '#F7F7F2'], ['surface-2', '#ECECE4'],
    ['text', '#141414'], ['text-muted', '#6B6B62'], ['border', '#141414'],
    ['success', '#007A3D'], ['warning', '#9A6700'], ['danger', '#D22D2D'], ['info', '#0055CC']
].map(([name, hex]) =>
    `<div class="sc-swatch"><div class="sc-swatch-fill" style="background: var(--tk-color-${name})"></div><span>${name}</span><code>${hex}</code></div>`
).join('');

const TYPE_SCALE = [
    ['Display', 'tk-display', '40px'], ['Heading 1', 'tk-h1', '30px'], ['Heading 2', 'tk-h2', '23px'],
    ['Heading 3', 'tk-h3', '18px'], ['Heading 4', 'tk-h4', '15px'], ['Title', 'tk-title', '14px'],
    ['Body', 'tk-body', '15px'], ['Body Small', 'tk-body-sm', '13px'], ['Caption', 'tk-caption', '12px']
].map(([label, cls, size]) =>
    `<div class="sc-type-row"><span class="sc-type-meta">${label} &middot; ${size}</span><p class="${cls}" style="margin: 0">Aa &mdash; Sistem berjalan normal</p></div>`
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

const ICONS = ['home', 'search', 'account', 'settings-gear', 'bell', 'heart', 'star-empty', 'trash', 'edit',
    'check', 'close', 'add', 'arrow-right', 'cloud-download', 'cloud-upload', 'calendar', 'mail', 'lock']
    .map(name => `<span class="sc-icon" title="codicon:${name}"><iconify-icon icon="codicon:${name}" width="24" height="24"></iconify-icon></span>`)
    .join('');

export const CYBERCORE_SHOWCASE = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cybercore — Design Kit Showcase</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<script src="https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"></script>
<script src="${CHARTJS_SCRIPT}"></script>
<style>
    ${EX_NAV_CSS}
</style>
<style>
    /* Perancah lembar peraga (sc-*): bukan bagian kontrak kit. */
    .sc-wrap { max-width: 1200px; margin: 0 auto; padding: 48px 24px 96px; }
    .sc-kit-title { font-family: var(--tk-font-mono); font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--tk-color-primary); margin: 0 0 4px; }
    .sc-section { margin-top: 56px; }
    .sc-heading { font-family: var(--tk-font-mono); font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--tk-color-primary); border-bottom: 1px solid var(--tk-color-border); padding-bottom: 8px; margin: 0 0 24px; }
    .sc-heading::before { content: '## '; color: var(--tk-color-text-muted); }
    .sc-row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    .sc-col { display: flex; flex-direction: column; gap: 16px; max-width: 480px; }
    .sc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
    .sc-swatch { font-size: 12px; display: flex; flex-direction: column; gap: 4px; font-family: var(--tk-font-mono); }
    .sc-swatch code { color: var(--tk-color-text-muted); }
    .sc-swatch-fill { height: 48px; border: 1px solid var(--tk-color-border); }
    .sc-type-row { display: flex; align-items: baseline; gap: 24px; margin-bottom: 16px; }
    .sc-type-meta { width: 140px; flex: none; font-size: 12px; color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-space-row { display: flex; align-items: center; gap: 16px; margin-bottom: 8px; font-size: 12px; }
    .sc-space-row code { width: 120px; color: var(--tk-color-text-muted); }
    .sc-space-bar { height: 16px; background: var(--tk-cc-dither); border: 1px solid var(--tk-color-primary); }
    .sc-radius-item { display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 11px; }
    .sc-radius-item code { color: var(--tk-color-text-muted); }
    .sc-radius-box { width: 132px; height: 72px; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); }
    .sc-radius-box-pill { height: 40px; margin-top: 16px; }
    .sc-shadow-box { width: 132px; height: 88px; background: var(--tk-color-surface); border: 1px solid var(--tk-color-border); display: flex; align-items: flex-end; padding: 8px; font-size: 11px; }
    .sc-shadow-box code { color: var(--tk-color-text-muted); }
    .sc-icon { color: var(--tk-color-text); padding: 8px; }
    .sc-cell { background: var(--tk-color-surface-2); border: 1px dashed var(--tk-color-border); height: 48px; }
    .sc-overlay-demo { position: relative; height: 340px; overflow: hidden; border: 1px solid var(--tk-color-border); }
    .sc-overlay-demo .tk-modal-backdrop, .sc-overlay-demo .tk-drawer { position: absolute; }
    .sc-chart-box { position: relative; height: 200px; }
    .sc-auth-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 420px)); gap: 24px; align-items: start; }
    .sc-boot { max-width: 560px; }
${AUTH_CSS}
</style>
</head>
<body>
${exNav('Cybercore', 'components', '')}
<div class="sc-wrap">
    <p class="sc-kit-title">TOKENAI Design Kit</p>
    <h1 class="tk-h1" style="margin: 0">Cybercore</h1>
    <p class="tk-body-lg tk-muted" style="margin-top: 8px">Antarmuka komputer, bukan kota cyberpunk: seluruh teks monospace, kertas teknik ber-grid milimeter dengan garis rambut tinta 1px, window UI ber-title bar, badge log ber-bracket, progress bar blok, prompt terminal, kursor berkedip, dan dither 1-bit sebagai artefak digital. Mode gelap memindahkan semuanya ke CRT fosfor hijau ber-scanline. Lihat juga contoh halaman nyata lewat bilah navigasi di atas.</p>

${section('Typography', `<p class="tk-caption" style="margin-bottom: 24px">JetBrains Mono untuk semuanya &mdash; heading 800, body 400, caption huruf besar berspasi; satu keluarga monospace adalah pernyataan design kit ini &middot; skala di bawah adalah seluruh tingkat yang tersedia</p>${TYPE_SCALE}`)}
${section('Color Palette', `<div class="sc-grid">${SWATCHES}</div>`)}
${section('Spacing System', SPACES)}
${section('Border Radius', `<div class="sc-row">${RADII}</div><p class="tk-caption" style="margin-top: 12px">Semua sudut siku 0px &mdash; antarmuka komputer tidak membulat; hanya --tk-radius-full yang tersisa untuk kebutuhan pil.</p>`)}
${section('Shadow System', `<div class="sc-row" style="gap: 24px">${SHADOWS}</div><p class="tk-caption" style="margin-top: 12px">Bayangan offset cetak teknis &mdash; blok tinta digeser, tanpa blur.</p>`)}
${section('Iconography', `<div class="sc-row">${ICONS}</div><p class="tk-caption">Iconify, set <code>codicon</code> (ikon antarmuka VS Code) &mdash; tulis <code>&lt;iconify-icon icon="codicon:nama"&gt;</code>; ratusan ribu ikon lain tersedia dengan set berbeda bila perlu.</p>`)}
${section('Design Language', `<div class="sc-row"><span class="tk-badge">Terminal</span><span class="tk-badge">Monospace</span><span class="tk-badge">Window UI</span><span class="tk-badge">Digital artifacts</span></div><p class="tk-h2 tk-cursor" style="margin: 20px 0 0">login: operator</p><div class="tk-terminal sc-boot" style="margin: 16px 0 0"><span class="tk-prompt">boot --cek-sistem</span><span>memori .......... <b>OK</b></span><span>jaringan ........ <b>OK</b></span><span>modul design .... <b>22/22 termuat</b></span><span class="tk-prompt tk-cursor"></span></div><div class="tk-dither sc-boot"></div><p class="tk-body-sm tk-muted" style="margin: 0 0 16px; max-width: 560px">Bahasa visualnya adalah mesin itu sendiri: kertas teknik ber-grid milimeter, garis rambut tinta pada semua panel, judul kartu berprefix <code class="tk-code">//</code>, badge log <code class="tk-code">[OK]</code>, tabel ber-header garis ganda, panel terminal <code class="tk-code">.tk-terminal</code> dengan baris <code class="tk-code">.tk-prompt</code>, kursor blok berkedip <code class="tk-code">.tk-cursor</code>, dan pita dither 1-bit <code class="tk-code">.tk-dither</code>. Hover membalik warna seperti blok seleksi terminal. Mode gelap = CRT fosfor hijau ber-scanline.</p><div class="sc-row" style="align-items: center; gap: 10px"><span class="tk-readout">SYS//ONLINE</span><span class="tk-readout">MEM 42%</span><span class="tk-readout">UPTIME 99,9%</span></div>`)}
${section('Buttons', `<div class="sc-row">${c['components/button.html']}</div>`)}
${section('Input & Form', `<div class="sc-col">${c['components/form.html']}</div><p class="tk-caption" style="margin: 24px 0 12px">Search bar &mdash; ikon dan pintasan menyatu di dalam field</p><div style="max-width: 480px">${c['components/search.html']}</div><p class="tk-caption" style="margin: 24px 0 12px">Select custom (ditampilkan terbuka) &mdash; satu pilihan &middot; dengan pencarian &middot; multi dengan checkbox &amp; aksi. Listbox digambar kit, bukan popup bawaan browser.</p><div class="sc-row" style="align-items: flex-start; gap: 24px; min-height: 340px">${c['components/select.html'].split('<div class="tk-select">').join('<div class="tk-select tk-select-open" style="width: 250px">')}</div><p class="tk-caption" style="margin: 0 0 12px">Dropdown aksi (ditampilkan terbuka; aslinya terbuka saat trigger diklik)</p><div style="min-height: 240px">${c['components/dropdown.html'].replace('class="tk-dropdown"', 'class="tk-dropdown tk-dropdown-open"')}</div><p class="tk-caption">Semua kontrol digambar sendiri &mdash; select, checkbox, radio, dan toggle tidak memakai tampilan bawaan browser.</p>`)}
${section('Login & Register', `<p class="tk-caption" style="margin-bottom: 16px">Kartu auth dirakit murni dari komponen form kit &mdash; bagian dari paket Komponen. Halaman penuhnya (web &amp; ponsel lewat saklar perangkat) ada di <a href="examples/login.html">examples/login.html</a> dan <a href="examples/register.html">examples/register.html</a>.</p><div class="sc-auth-grid">${authCard(AUTH_LOGIN_FORM)}${authCard(AUTH_REGISTER_FORM)}</div>`)}
${section('Card Components', `<div class="tk-grid tk-grid-3">${c['components/card.html']}<div class="tk-card"><div class="tk-card-body" style="text-align: center"><div class="tk-feature-icon" style="margin: 0 auto 12px"><iconify-icon icon="codicon:account" width="22" height="22"></iconify-icon></div><p class="tk-title" style="margin: 0">Jane Doe</p><p class="tk-caption">UI/UX Designer</p></div></div></div><p class="tk-caption" style="margin-top: 12px">Judul di header kartu otomatis berprefix <code>//</code> &mdash; komentar kode sebagai penanda seksi.</p>`)}
${section('Navigation', `<div class="sc-col" style="max-width: none">${c['components/navigation.html'].replace('<aside', '<nav class="tk-navbar tk-navbar-dark"><span class="tk-navbar-brand">LOGO</span><a class="tk-navbar-link tk-navbar-link-active" href="#">Home</a><a class="tk-navbar-link" href="#">Fitur</a><button class="tk-btn tk-btn-secondary tk-btn-sm">Masuk</button></nav><aside')}</div>`)}
${section('Tabs & Segmented', `<div class="sc-col">${c['components/tabs.html']}</div>`)}
${section('Badges & Chips', `<div class="sc-row">${c['components/badge.html']}</div><p class="tk-caption" style="margin-top: 12px">Badge ber-bracket ala tag log terminal: <code>[AKTIF]</code>, <code>[GAGAL]</code> &mdash; hanya warna teks, tanpa isi.</p>`)}
${section('Feedback & Alerts', `<div class="sc-col">${c['components/alert.html']}</div>`)}
${section('Layout Options', `<p class="tk-caption" style="margin-bottom: 12px">Grid 12 / 3 / 2 kolom pada lebar konten --tk-container</p><div class="tk-grid tk-grid-12" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(12)}</div><div class="tk-grid tk-grid-3" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(3)}</div><div class="tk-grid tk-grid-2">${'<div class="sc-cell"></div>'.repeat(2)}</div>`)}
${section('Content Blocks', c['components/content-blocks.html'])}
${section('Data Display', `<p class="tk-caption" style="margin-bottom: 12px">Advanced filter &mdash; pencarian, dua select custom, tombol filter berpenanda jumlah, chip filter aktif</p>${c['components/filter.html']}<div style="margin-top: 24px">${c['components/table.html'].replace('<nav class="tk-pagination">', '<nav class="tk-pagination" style="margin-top: 16px">')}</div><p class="tk-caption" style="margin-top: 12px">Kolom Aksi rata kanan: ikon langsung (lihat &middot; edit &middot; hapus) untuk aksi sedikit, atau menu &hellip; (klik untuk membuka) bila aksinya banyak.</p>`)}
${section('Charts', `<p class="tk-caption" style="margin-bottom: 12px">Chart.js &mdash; pustaka chart tunggal untuk semua kit. Warna dibaca dari token kit saat digambar; garis bertangga (stepped) meniru sinyal digital dan ikut berubah saat tema ditukar.</p><div class="tk-grid tk-grid-3"><div class="tk-card"><div class="tk-card-body"><p class="tk-title" style="margin: 0 0 12px">Pengunjung</p><div class="sc-chart-box"><canvas id="sc-chart-line"></canvas></div></div></div><div class="tk-card"><div class="tk-card-body"><p class="tk-title" style="margin: 0 0 12px">Pendapatan</p><div class="sc-chart-box"><canvas id="sc-chart-bar"></canvas></div></div></div><div class="tk-card"><div class="tk-card-body"><p class="tk-title" style="margin: 0 0 12px">Sumber Trafik</p><div class="sc-chart-box"><canvas id="sc-chart-doughnut"></canvas></div></div></div></div>`)}
${section('Modal & Overlay', `<div class="sc-overlay-demo">${c['components/modal.html']}</div><p class="tk-caption" style="margin-top: 12px">Modal adalah jendela terminal: title bar dengan tiga tombol jendela digambar otomatis lewat ::before.</p>`)}
${section('Loading States', `<div class="sc-row" style="gap: 32px">${c['components/loading.html'].replace('<div class="tk-progress">', '<div class="tk-progress" style="width: 240px">')}</div><p class="tk-caption" style="margin-top: 12px">Loading screen khas komputer lama: spinner kotak patah-patah (steps), progress bar blok tersegmentasi &#9619;&#9619;&#9619;, dan skeleton arsir diagonal.</p>`)}
${section('Empty States', `<div style="max-width: 420px">${c['components/empty.html']}</div>`)}

</div>
${CHART_HELPER_SCRIPT}
<script>
var scLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
tkChart('sc-chart-line', function (t) {
    return {
        type: 'line',
        data: { labels: scLabels, datasets: [{ label: 'Pengunjung', data: [4200, 5100, 4800, 6300, 7100, 8400], borderColor: t.primary, backgroundColor: t.primary + '22', fill: true, stepped: true, pointRadius: 3, pointStyle: 'rect', pointBackgroundColor: t.primary }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-bar', function (t) {
    return {
        type: 'bar',
        data: { labels: scLabels, datasets: [{ label: 'Pendapatan', data: [12, 19, 14, 22, 26, 31], backgroundColor: t.accent, borderRadius: 0 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-doughnut', function (t) {
    return {
        type: 'doughnut',
        data: { labels: ['Direct', 'Organik', 'Sosial', 'Referral'], datasets: [{ data: [38, 31, 19, 12], backgroundColor: [t.primary, t.accent, t.warning, t.muted], borderColor: t.surface2, borderWidth: 2 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '65%', plugins: { legend: { position: 'bottom' } } }
    };
});
</script>
</body>
</html>
`;
