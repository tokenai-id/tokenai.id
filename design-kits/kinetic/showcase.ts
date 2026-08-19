/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len, @typescript-eslint/quotes */

import { KINETIC_COMPONENTS } from './components';
import { AUTH_CSS, AUTH_LOGIN_FORM, AUTH_REGISTER_FORM } from './examples';
// Perancah pratinjau (bilah navigasi sticky, helper chart) kit-agnostik dan sengaja dipakai
// bersama; rumahnya masih di kit pertama sampai ada alasan memindahkannya.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

/**
 * `showcase.html` kit Kinetic: lembar peraga 22 seksi sesuai §6 kontrak — termasuk
 * Login & Register, yang merupakan bagian paket Komponen (bukan tampilan tersendiri di navigasi).
 *
 * Kit ini satu-tema (terang bawaan) sehingga exNav dipanggil dengan `themeToggle: false`.
 *
 * Seksi komponennya dirakit dari fragmen `components/` yang sama persis dengan yang akan disalin
 * agen — bukan salinan tersendiri — supaya pratinjau tidak pernah menyimpang dari komponen
 * sebenarnya. Kelas `sc-*` hanyalah perancah lembar peraganya dan bukan bagian dari kontrak kit.
 */

const c = KINETIC_COMPONENTS;

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
    ['primary', '#4B3CFA'], ['primary-hover', '#3527E0'], ['secondary', '#111013'],
    ['accent', '#FF5C33'], ['background', '#F4F2EC'], ['surface', '#FFFFFF'],
    ['surface-2', '#E9E6DC'], ['text', '#111013'], ['text-muted', '#6B6870'],
    ['border', '#C9C5B6'], ['success', '#1F8A4C'], ['warning', '#B4770B'],
    ['danger', '#D2372E'], ['info', '#4B3CFA']
].map(([name, hex]) =>
    `<div class="sc-swatch"><div class="sc-swatch-fill" style="background: var(--tk-color-${name})"></div><span>${name}</span><code>${hex}</code></div>`
).join('');

const TYPE_SCALE = [
    ['Display', 'tk-display', '72px'], ['Heading 1', 'tk-h1', '46px'], ['Heading 2', 'tk-h2', '32px'],
    ['Heading 3', 'tk-h3', '24px'], ['Heading 4', 'tk-h4', '18px'], ['Title', 'tk-title', '15px'],
    ['Body', 'tk-body', '16px'], ['Body Small', 'tk-body-sm', '14px'], ['Caption', 'tk-caption', '12px']
].map(([label, cls, size]) =>
    `<div class="sc-type-row"><span class="sc-type-meta">${label} &middot; ${size}</span><p class="${cls}" style="margin: 0">Aa &mdash; Huruf yang bergerak</p></div>`
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

const ICONS = ['home', 'search', 'user', 'settings', 'notification', 'favorite', 'star', 'trash-can', 'edit',
    'checkmark', 'close', 'add', 'arrow-right', 'download', 'text-font', 'calendar', 'email', 'locked']
    .map(name => `<span class="sc-icon" title="carbon:${name}"><iconify-icon icon="carbon:${name}" width="22" height="22"></iconify-icon></span>`)
    .join('');

// Kata bergoyang untuk seksi Design Language: huruf dibungkus <i> ber-indeks --i.
const WAVE_WORD = 'KINETIC'.split('').map((ch, i) => `<i style="--i: ${i}">${ch}</i>`).join('');

export const KINETIC_SHOWCASE = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Kinetic — Design Kit Showcase</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900&family=Martian+Mono:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<script src="https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"></script>
<script src="${CHARTJS_SCRIPT}"></script>
<style>
    ${EX_NAV_CSS}
</style>
<style>
    /* Perancah lembar peraga (sc-*): bukan bagian kontrak kit. */
    .sc-wrap { max-width: 1200px; margin: 0 auto; padding: 48px 24px 96px; }
    .sc-kit-title { font-family: var(--tk-font-mono); font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--tk-color-primary); margin: 0 0 4px; }
    .sc-section { margin-top: 56px; }
    .sc-heading { font-family: var(--tk-font-mono); font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--tk-color-primary); border-bottom: 1px solid var(--tk-color-text); padding-bottom: 8px; margin: 0 0 24px; }
    .sc-row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    .sc-col { display: flex; flex-direction: column; gap: 16px; max-width: 480px; }
    .sc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
    .sc-swatch { font-size: 12px; display: flex; flex-direction: column; gap: 4px; }
    .sc-swatch code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-swatch-fill { height: 48px; border-radius: var(--tk-radius-sm); border: 1px solid var(--tk-color-border); box-shadow: var(--tk-shadow-sm); }
    .sc-type-row { display: flex; align-items: baseline; gap: 24px; margin-bottom: 16px; }
    .sc-type-meta { width: 140px; flex: none; font-size: 12px; color: var(--tk-color-text-muted); }
    .sc-space-row { display: flex; align-items: center; gap: 16px; margin-bottom: 8px; font-size: 12px; }
    .sc-space-row code { width: 120px; color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-space-bar { height: 14px; background: var(--tk-color-primary); border-radius: 3px; }
    .sc-radius-item { display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 11px; }
    .sc-radius-item code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-radius-box { width: 132px; height: 72px; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-text); box-shadow: var(--tk-shadow-sm); }
    .sc-radius-box-pill { height: 40px; margin-top: 16px; }
    .sc-shadow-box { width: 132px; height: 88px; background: var(--tk-color-surface); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius); display: flex; align-items: flex-end; padding: 8px; font-size: 11px; }
    .sc-shadow-box code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-icon { color: var(--tk-color-text); padding: 8px; }
    .sc-cell { background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-sm); height: 48px; }
    .sc-overlay-demo { position: relative; height: 320px; overflow: hidden; border-radius: var(--tk-radius); border: 1px solid var(--tk-color-border); }
    .sc-overlay-demo .tk-modal-backdrop, .sc-overlay-demo .tk-drawer { position: absolute; }
    .sc-chart-box { position: relative; height: 200px; }
    .sc-auth-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 420px)); gap: 24px; align-items: start; }
    /* Panggung spesimen: lembar putih bergaris tinta untuk memamerkan huruf yang bergerak. */
    .sc-stage { display: flex; flex-direction: column; align-items: flex-start; gap: 20px; padding: 48px 40px; background: var(--tk-color-surface); border: 1px solid var(--tk-color-text); border-radius: var(--tk-radius-lg); overflow: hidden; }
    .sc-stage .tk-display { font-size: clamp(40px, 6vw, 88px); margin: 0; }
    .sc-wave-demo { font-family: var(--tk-font-heading); font-weight: 900; font-variation-settings: 'wght' 900, 'wdth' 118; font-size: 32px; letter-spacing: 0.02em; color: var(--tk-color-primary); }
${AUTH_CSS}
</style>
</head>
<body>
${exNav('Kinetic', 'components', '', { themeToggle: false })}
<div class="sc-wrap">
    <p class="sc-kit-title">TOKENAI Design Kit</p>
    <h1 class="tk-h1" style="margin: 0">Kinetic</h1>
    <p class="tk-body-lg tk-muted" style="margin-top: 8px">Kinetic Typography: tipografi adalah objek utama &mdash; dan ia bergerak. Judul raksasa memakai font variabel Archivo yang melebar dan menebal saat disorot (sumbu wdth &amp; wght dianimasikan), headline marquee berjalan tanpa henti dengan kata outline berselang-seling, baris teks meluncur masuk dari sisi bergantian saat scroll (murni CSS), tautan digarisbawahi garis yang tumbuh, dan huruf bisa menari satu per satu. Kanvasnya kertas hangat dengan tinta hitam pekat seperti lembar type specimen, plus aksen indigo elektrik dan jingga. Kit satu-tema &mdash; terang secara bawaan, karena huruf hitam paling hidup di atas kertas. Lihat juga contoh halaman nyata lewat bilah navigasi di atas &mdash; hero landing-nya mengikuti gerakan mouse Anda.</p>

${section('Typography', `<p class="tk-caption" style="margin-bottom: 24px">Archivo variabel (heading &amp; body &mdash; sumbu wght 100&ndash;900 &amp; wdth 62&ndash;125 ikut dikirim, jadi animasi variabelnya hidup) &middot; Martian Mono (kode, kicker &amp; kbd) &middot; sorot heading di bawah untuk melihat hurufnya melebar</p>${TYPE_SCALE}`)}
${section('Color Palette', `<div class="sc-grid">${SWATCHES}</div><p class="tk-caption" style="margin-top: 12px">Kertas hangat + tinta hitam pekat; indigo elektrik untuk aksi, jingga untuk kata yang disorot.</p>`)}
${section('Spacing System', SPACES)}
${section('Border Radius', `<div class="sc-row">${RADII}</div>`)}
${section('Shadow System', `<div class="sc-row" style="gap: 24px">${SHADOWS}</div><p class="tk-caption" style="margin-top: 12px">Bayangan tinta lembut &mdash; permukaan tetap terasa seperti kertas di atas meja.</p>`)}
${section('Iconography', `<div class="sc-row">${ICONS}</div><p class="tk-caption">Iconify, set <code>carbon</code> (IBM Carbon) &mdash; tulis <code>&lt;iconify-icon icon="carbon:nama"&gt;</code>; ratusan ribu ikon lain tersedia dengan set berbeda bila perlu.</p>`)}
${section('Design Language', `<div class="sc-stage"><p class="tk-kicker">Spesimen &mdash; Sorot judul di bawah</p><h3 class="tk-display">Huruf yang <span class="tk-outline-text tk-outline-text-primary">hidup</span></h3><span class="sc-wave-demo tk-wave-text" aria-label="KINETIC">${WAVE_WORD}</span></div><div class="tk-type-marquee" style="margin-top: 24px" aria-hidden="true"><div class="tk-type-marquee-track"><span>Bergerak</span><em>&#9679;</em><span class="tk-outline-text">Melebar</span><em>&#9679;</em><span>Menebal</span><em>&#9679;</em><span class="tk-outline-text">Menari</span><em>&#9679;</em></div><div class="tk-type-marquee-track" aria-hidden="true"><span>Bergerak</span><em>&#9679;</em><span class="tk-outline-text">Melebar</span><em>&#9679;</em><span>Menebal</span><em>&#9679;</em><span class="tk-outline-text">Menari</span><em>&#9679;</em></div></div><p class="tk-body-sm tk-muted" style="margin: 24px 0 0; max-width: 560px">Kosakata gerak huruf: heading melebar saat disorot (bawaan semua <code class="tk-code">.tk-display</code>/<code class="tk-code">.tk-h1</code>/<code class="tk-code">.tk-h2</code>), teks outline berongga (<code class="tk-code">.tk-outline-text</code>, varian <code class="tk-code">-primary</code>) yang terisi saat disorot, headline marquee (<code class="tk-code">.tk-type-marquee</code> &mdash; jeda saat disorot), baris yang meluncur masuk saat scroll (<code class="tk-code">.tk-kinetic-line</code>, varian <code class="tk-code">-alt</code> dari kanan; browser lama tetap menampilkan konten), kata menari per huruf (<code class="tk-code">.tk-wave-text</code>), dan kicker mono bergaris (<code class="tk-code">.tk-kicker</code>).</p>`)}
${section('Buttons', `<div class="sc-row">${c['components/button.html']}</div><p class="tk-caption" style="margin-top: 12px">Sorot tombol: hurufnya merenggang dan melebar &mdash; teksnya sendiri yang beranimasi.</p>`)}
${section('Input & Form', `<div class="sc-col">${c['components/form.html']}</div><p class="tk-caption" style="margin: 24px 0 12px">Search bar &mdash; ikon dan pintasan menyatu di dalam field</p><div style="max-width: 480px">${c['components/search.html']}</div><p class="tk-caption" style="margin: 24px 0 12px">Select custom (ditampilkan terbuka) &mdash; satu pilihan &middot; dengan pencarian &middot; multi dengan checkbox &amp; aksi. Listbox digambar kit, bukan popup bawaan browser.</p><div class="sc-row" style="align-items: flex-start; gap: 24px; min-height: 340px">${c['components/select.html'].split('<div class="tk-select">').join('<div class="tk-select tk-select-open" style="width: 250px">')}</div><p class="tk-caption" style="margin: 0 0 12px">Dropdown aksi (ditampilkan terbuka; aslinya terbuka saat trigger diklik)</p><div style="min-height: 240px">${c['components/dropdown.html'].replace('class="tk-dropdown"', 'class="tk-dropdown tk-dropdown-open"')}</div><p class="tk-caption">Semua kontrol digambar sendiri; opsi menu ikut bergeser sedikit ke kanan saat disorot &mdash; gerak kecil di mana-mana.</p>`)}
${section('Login & Register', `<p class="tk-caption" style="margin-bottom: 16px">Kartu auth dirakit murni dari komponen form kit &mdash; bagian dari paket Komponen. Halaman penuhnya (web &amp; ponsel lewat saklar perangkat) ada di <a href="examples/login.html">examples/login.html</a> dan <a href="examples/register.html">examples/register.html</a>.</p><div class="sc-auth-grid">${authCard(AUTH_LOGIN_FORM)}${authCard(AUTH_REGISTER_FORM)}</div>`)}
${section('Card Components', `<div class="tk-grid tk-grid-3">${c['components/card.html']}<div class="tk-card"><div class="tk-card-body" style="text-align: center"><div class="tk-feature-icon" style="margin: 0 auto 12px"><iconify-icon icon="carbon:user" width="24" height="24"></iconify-icon></div><p class="tk-title" style="margin: 0">Jane Doe</p><p class="tk-caption">UI/UX Designer</p></div></div></div><p class="tk-caption" style="margin-top: 12px">Sorot kartu: judul di dalamnya ikut melebar &mdash; kartunya diam, hurufnya yang bergerak.</p>`)}
${section('Navigation', `<div class="sc-col" style="max-width: none">${c['components/navigation.html'].replace('<aside', '<nav class="tk-navbar tk-navbar-dark"><span class="tk-navbar-brand">Logo</span><a class="tk-navbar-link tk-navbar-link-active" href="#">Home</a><a class="tk-navbar-link" href="#">Fitur</a><button class="tk-btn tk-btn-primary tk-btn-sm">Masuk</button></nav><aside')}</div><p class="tk-caption" style="margin-top: 12px">Tautan navbar digarisbawahi garis yang tumbuh; item sidebar bergeser ke kanan saat disorot.</p>`)}
${section('Tabs & Segmented', `<div class="sc-col">${c['components/tabs.html']}</div><p class="tk-caption" style="margin-top: 12px">Tab merenggang hurufnya saat disorot; segmented dengan segmen aktif tinta pekat.</p>`)}
${section('Badges & Chips', `<div class="sc-row">${c['components/badge.html']}</div><p class="tk-caption" style="margin-top: 12px">Badge memakai huruf mono uppercase seperti anotasi di lembar spesimen.</p>`)}
${section('Feedback & Alerts', `<div class="sc-col">${c['components/alert.html']}</div>`)}
${section('Layout Options', `<p class="tk-caption" style="margin-bottom: 12px">Grid 12 / 3 / 2 kolom pada lebar konten --tk-container</p><div class="tk-grid tk-grid-12" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(12)}</div><div class="tk-grid tk-grid-3" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(3)}</div><div class="tk-grid tk-grid-2">${'<div class="sc-cell"></div>'.repeat(2)}</div>`)}
${section('Content Blocks', c['components/content-blocks.html'])}
${section('Data Display', `<p class="tk-caption" style="margin-bottom: 12px">Advanced filter &mdash; pencarian, dua select custom, tombol filter berpenanda jumlah, chip filter aktif</p>${c['components/filter.html']}<div style="margin-top: 24px">${c['components/table.html'].replace('<nav class="tk-pagination">', '<nav class="tk-pagination" style="margin-top: 16px">')}</div><p class="tk-caption" style="margin-top: 12px">Kolom Aksi rata kanan: ikon langsung (lihat &middot; edit &middot; hapus) untuk aksi sedikit, atau menu &hellip; (klik untuk membuka) bila aksinya banyak.</p>`)}
${section('Charts', `<p class="tk-caption" style="margin-bottom: 12px">Chart.js &mdash; pustaka chart tunggal untuk semua kit. Warna dibaca dari token kit saat digambar; indigo, tinta, dan jingga di atas kertas.</p><div class="tk-grid tk-grid-3"><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Pengunjung</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-line"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Pendapatan</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-bar"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Sumber Trafik</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-doughnut"></canvas></div></div></div></div>`)}
${section('Modal & Overlay', `<div class="sc-overlay-demo">${c['components/modal.html']}</div>`)}
${section('Loading States', `<div class="sc-row" style="gap: 32px">${c['components/loading.html'].replace('<div class="tk-progress">', '<div class="tk-progress" style="width: 240px">')}</div><p class="tk-caption" style="margin-top: 12px">Progress bar bergaris diagonal indigo &mdash; seperti pita cetak yang sedang berjalan.</p>`)}
${section('Empty States', `<div style="max-width: 420px">${c['components/empty.html']}</div>`)}

</div>
${CHART_HELPER_SCRIPT}
<script>
var scLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
tkChart('sc-chart-line', function (t) {
    return {
        type: 'line',
        data: { labels: scLabels, datasets: [{ label: 'Pengunjung', data: [4200, 5100, 4800, 6300, 7100, 8400], borderColor: t.primary, backgroundColor: t.primary + '1F', fill: true, tension: 0.35, pointRadius: 4, pointBackgroundColor: '#FF5C33', pointBorderColor: t.surface2, pointBorderWidth: 2, borderWidth: 3 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-bar', function (t) {
    return {
        type: 'bar',
        data: { labels: scLabels, datasets: [{ label: 'Pendapatan', data: [12, 19, 14, 22, 26, 31], backgroundColor: '#111013', borderRadius: 4 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-doughnut', function (t) {
    return {
        type: 'doughnut',
        data: { labels: ['Direct', 'Organik', 'Sosial', 'Referral'], datasets: [{ data: [38, 31, 19, 12], backgroundColor: [t.primary, '#111013', '#FF5C33', '#C9C5B6'], borderColor: '#F4F2EC', borderWidth: 3 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '62%', plugins: { legend: { position: 'bottom' } } }
    };
});
</script>
</body>
</html>
`;
