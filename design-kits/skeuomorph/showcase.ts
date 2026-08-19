/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len, @typescript-eslint/quotes */

import { SKEUOMORPH_COMPONENTS } from './components';
import { AUTH_CSS, AUTH_LOGIN_FORM, AUTH_REGISTER_FORM } from './examples';
// Perancah pratinjau (bilah navigasi sticky, helper chart) kit-agnostik dan sengaja dipakai
// bersama; rumahnya masih di folder kit pertama sampai ada alasan memindahkannya.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

/**
 * `showcase.html` kit Skeuomorph: lembar peraga 22 seksi sesuai §6 kontrak — termasuk
 * Login & Register, yang merupakan bagian paket Komponen (bukan tampilan tersendiri di navigasi).
 *
 * Kit ini satu-tema (terang bawaan) sehingga exNav dipanggil dengan `themeToggle: false`.
 *
 * Seksi komponennya dirakit dari fragmen `components/` yang sama persis dengan yang akan disalin
 * agen — bukan salinan tersendiri — supaya pratinjau tidak pernah menyimpang dari komponen
 * sebenarnya. Kelas `sc-*` hanyalah perancah lembar peraganya dan bukan bagian dari kontrak kit.
 */

const c = SKEUOMORPH_COMPONENTS;

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
    ['primary', '#3E6FA6'], ['primary-hover', '#35608F'], ['secondary', '#9A6A38'],
    ['accent', '#E8A33D'], ['background', '#E9E5DC'], ['surface-2', '#E0DBCE'],
    ['text', '#3B372F'], ['text-muted', '#6E6858'], ['border', '#B8B09C'],
    ['success', '#4E9A52'], ['warning', '#C98A2E'], ['danger', '#C0442F'], ['info', '#3E6FA6']
].map(([name, hex]) =>
    `<div class="sc-swatch"><div class="sc-swatch-fill" style="background: var(--tk-color-${name})"></div><span>${name}</span><code>${hex}</code></div>`
).join('');

const TYPE_SCALE = [
    ['Display', 'tk-display', '46px'], ['Heading 1', 'tk-h1', '34px'], ['Heading 2', 'tk-h2', '27px'],
    ['Heading 3', 'tk-h3', '21px'], ['Heading 4', 'tk-h4', '18px'], ['Title', 'tk-title', '15px'],
    ['Body', 'tk-body', '16px'], ['Body Small', 'tk-body-sm', '14px'], ['Caption', 'tk-caption', '12px']
].map(([label, cls, size]) =>
    `<div class="sc-type-row"><span class="sc-type-meta">${label} &middot; ${size}</span><p class="${cls}" style="margin: 0">Aa &mdash; Terukir di pelat logam</p></div>`
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

const ICONS = ['house', 'search', 'person', 'gear', 'bell', 'heart', 'star', 'trash', 'pencil-square',
    'check-lg', 'x-lg', 'plus-lg', 'arrow-right', 'download', 'upload', 'calendar', 'envelope', 'lock']
    .map(name => `<span class="sc-icon" title="bi:${name}"><iconify-icon icon="bi:${name}" width="22" height="22"></iconify-icon></span>`)
    .join('');

export const SKEUOMORPH_SHOWCASE = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Skeuomorph — Design Kit Showcase</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bitter:wght@600;700&family=PT+Sans:wght@400;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<script src="https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"></script>
<script src="${CHARTJS_SCRIPT}"></script>
<style>
    ${EX_NAV_CSS}
</style>
<style>
    /* Perancah lembar peraga (sc-*): bukan bagian kontrak kit. */
    .sc-wrap { max-width: 1200px; margin: 0 auto; padding: 48px 24px 96px; }
    .sc-kit-title { font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--tk-color-primary); margin: 0 0 4px; text-shadow: var(--tk-sk-emboss); }
    .sc-section { margin-top: 56px; }
    .sc-heading { font-family: var(--tk-font-body); font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--tk-color-primary); border-bottom: 1px solid var(--tk-color-border); padding-bottom: 8px; margin: 0 0 24px; text-shadow: var(--tk-sk-emboss); }
    .sc-row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    .sc-col { display: flex; flex-direction: column; gap: 16px; max-width: 480px; }
    .sc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
    .sc-swatch { font-size: 12px; display: flex; flex-direction: column; gap: 4px; }
    .sc-swatch code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-swatch-fill { height: 48px; border-radius: var(--tk-radius-sm); border: 1px solid var(--tk-color-border); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(59, 55, 47, 0.2); }
    .sc-type-row { display: flex; align-items: baseline; gap: 24px; margin-bottom: 16px; }
    .sc-type-meta { width: 140px; flex: none; font-size: 12px; color: var(--tk-color-text-muted); }
    .sc-space-row { display: flex; align-items: center; gap: 16px; margin-bottom: 8px; font-size: 12px; }
    .sc-space-row code { width: 120px; color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-space-bar { height: 14px; background: linear-gradient(180deg, #6B95C4 0%, #3E6FA6 100%); border: 1px solid #2C5480; border-radius: 3px; box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35); }
    .sc-radius-item { display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 11px; }
    .sc-radius-item code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-radius-box { width: 132px; height: 72px; background: var(--tk-sk-metal); border: 1px solid var(--tk-color-border); box-shadow: var(--tk-shadow-sm); }
    .sc-radius-box-pill { height: 40px; margin-top: 16px; }
    .sc-shadow-box { width: 132px; height: 88px; background: var(--tk-color-surface); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius); display: flex; align-items: flex-end; padding: 8px; font-size: 11px; }
    .sc-shadow-box code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-icon { color: var(--tk-color-text); padding: 8px; }
    .sc-cell { background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-sm); height: 48px; box-shadow: var(--tk-sk-well); }
    .sc-overlay-demo { position: relative; height: 320px; overflow: hidden; border-radius: var(--tk-radius); border: 1px solid var(--tk-color-border); }
    .sc-overlay-demo .tk-modal-backdrop, .sc-overlay-demo .tk-drawer { position: absolute; }
    .sc-chart-box { position: relative; height: 200px; }
    .sc-auth-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 420px)); gap: 24px; align-items: start; }
    .sc-machine { display: flex; gap: 40px; align-items: center; flex-wrap: wrap; padding: 24px 32px; background: var(--tk-sk-metal); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-lg); box-shadow: 0 4px 10px rgba(59, 55, 47, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.85); }
    .sc-machine-item { display: flex; flex-direction: column; align-items: center; gap: 10px; }
    .sc-led-row { display: flex; gap: 14px; align-items: center; }
    .sc-leather-demo { padding: 24px 32px; margin-top: 24px; position: relative; }
    .sc-leather-demo::before { content: ''; position: absolute; inset: 8px; border: 2px dashed rgba(253, 249, 242, 0.45); border-radius: calc(var(--tk-radius-lg) - 4px); pointer-events: none; }
${AUTH_CSS}
</style>
</head>
<body>
${exNav('Skeuomorph', 'components', '', { themeToggle: false })}
<div class="sc-wrap">
    <p class="sc-kit-title">TOKENAI Design Kit</p>
    <h1 class="tk-h1" style="margin: 0">Skeuomorph</h1>
    <p class="tk-body-lg tk-muted" style="margin-top: 8px">Skeuomorphism: antarmuka menyerupai benda fisik nyata &mdash; tombol glossy yang benar-benar tenggelam saat ditekan, panel logam bersikat dengan sekrup di sudut, input yang dipahat masuk ke permukaan, saklar fisik, lampu LED status yang menyala, kulit berjahit, dan kenop putar. Cahaya selalu datang dari atas: bibir atas terang, bibir bawah gelap, teks ter-emboss. Palet bengkel: linen, aluminium, biru glossy, kulit cokelat, LED amber. Kit satu-tema &mdash; terang secara bawaan, tanpa mode gelap. Lihat juga contoh halaman nyata lewat bilah navigasi di atas.</p>

${section('Typography', `<p class="tk-caption" style="margin-bottom: 24px">Bitter (heading slab terukir) &middot; PT Sans (body humanis) &middot; IBM Plex Mono (kode &amp; kbd) &middot; skala di bawah adalah seluruh tingkat yang tersedia</p>${TYPE_SCALE}`)}
${section('Color Palette', `<div class="sc-grid">${SWATCHES}</div>`)}
${section('Spacing System', SPACES)}
${section('Border Radius', `<div class="sc-row">${RADII}</div><p class="tk-caption" style="margin-top: 12px">Radius moderat seperti perangkat fisik &mdash; cukup bulat untuk digenggam, cukup tegas untuk dibaut.</p>`)}
${section('Shadow System', `<div class="sc-row" style="gap: 24px">${SHADOWS}</div><p class="tk-caption" style="margin-top: 12px">Cahaya dari atas: bayangan jatuh ke bawah + garis highlight 1px di bibir atas setiap permukaan.</p>`)}
${section('Iconography', `<div class="sc-row">${ICONS}</div><p class="tk-caption">Iconify, set <code>bi</code> (Bootstrap Icons) &mdash; tulis <code>&lt;iconify-icon icon="bi:nama"&gt;</code>; ratusan ribu ikon lain tersedia dengan set berbeda bila perlu.</p>`)}
${section('Design Language', `<div class="sc-machine tk-plate"><div class="sc-machine-item"><span class="tk-knob"></span><span class="tk-caption">Kenop</span></div><div class="sc-machine-item"><span class="tk-knob tk-knob-45"></span><span class="tk-caption">Kenop 45&deg;</span></div><div class="sc-machine-item"><div class="sc-led-row"><span class="tk-led"></span><span class="tk-led tk-led-amber"></span><span class="tk-led tk-led-red"></span><span class="tk-led tk-led-off"></span></div><span class="tk-caption">LED Status</span></div><div class="sc-machine-item"><label class="tk-check"><input class="tk-toggle" type="checkbox" checked aria-label="Saklar"></label><span class="tk-caption">Saklar</span></div></div><div class="tk-leather sc-leather-demo"><p class="tk-title" style="margin: 0 0 4px; color: #FDF9F2; text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.35)">Panel kulit berjahit</p><p class="tk-body-sm" style="margin: 0; color: rgba(253, 249, 242, 0.8)">Utilitas <code class="tk-code" style="color: var(--tk-color-text)">.tk-leather</code> membungkus seksi apa pun dengan kulit cokelat dan jahitan benang.</p></div><p class="tk-body-sm tk-muted" style="margin: 24px 0 0; max-width: 560px">Semua permukaan adalah material: pelat logam bersekrup (<code class="tk-code">.tk-plate</code>), lampu LED yang benar-benar menyala (<code class="tk-code">.tk-led</code>, varian <code class="tk-code">-amber</code>/<code class="tk-code">-red</code>/<code class="tk-code">-off</code>), kenop putar dengan penunjuk (<code class="tk-code">.tk-knob</code>, varian rotasi <code class="tk-code">-45</code>/<code class="tk-code">-90</code>), dan kulit berjahit (<code class="tk-code">.tk-leather</code>). Tombol tenggelam saat ditekan, tab aktif menonjol dari relnya, dan foto dicetak dalam bingkai putih. Tidak ada mode gelap &mdash; benda fisik dilihat di bawah lampu kerja.</p>`)}
${section('Buttons', `<div class="sc-row">${c['components/button.html']}</div>`)}
${section('Input & Form', `<div class="sc-col">${c['components/form.html']}</div><p class="tk-caption" style="margin: 24px 0 12px">Search bar &mdash; ikon dan pintasan menyatu di dalam field</p><div style="max-width: 480px">${c['components/search.html']}</div><p class="tk-caption" style="margin: 24px 0 12px">Select custom (ditampilkan terbuka) &mdash; satu pilihan &middot; dengan pencarian &middot; multi dengan checkbox &amp; aksi. Listbox digambar kit, bukan popup bawaan browser.</p><div class="sc-row" style="align-items: flex-start; gap: 24px; min-height: 340px">${c['components/select.html'].split('<div class="tk-select">').join('<div class="tk-select tk-select-open" style="width: 250px">')}</div><p class="tk-caption" style="margin: 0 0 12px">Dropdown aksi (ditampilkan terbuka; aslinya terbuka saat trigger diklik)</p><div style="min-height: 240px">${c['components/dropdown.html'].replace('class="tk-dropdown"', 'class="tk-dropdown tk-dropdown-open"')}</div><p class="tk-caption">Semua kontrol digambar sendiri &mdash; select, checkbox sumur logam, radio, dan saklar fisik tidak memakai tampilan bawaan browser.</p>`)}
${section('Login & Register', `<p class="tk-caption" style="margin-bottom: 16px">Kartu auth dirakit murni dari komponen form kit &mdash; bagian dari paket Komponen. Halaman penuhnya (web &amp; ponsel lewat saklar perangkat) ada di <a href="examples/login.html">examples/login.html</a> dan <a href="examples/register.html">examples/register.html</a>.</p><div class="sc-auth-grid">${authCard(AUTH_LOGIN_FORM)}${authCard(AUTH_REGISTER_FORM)}</div>`)}
${section('Card Components', `<div class="tk-grid tk-grid-3">${c['components/card.html']}<div class="tk-card"><div class="tk-card-body" style="text-align: center"><div class="tk-feature-icon" style="margin: 0 auto 12px"><iconify-icon icon="bi:person" width="24" height="24"></iconify-icon></div><p class="tk-title" style="margin: 0">Jane Doe</p><p class="tk-caption">UI/UX Designer</p></div></div></div>`)}
${section('Navigation', `<div class="sc-col" style="max-width: none">${c['components/navigation.html'].replace('<aside', '<nav class="tk-navbar tk-navbar-dark"><span class="tk-navbar-brand">Logo</span><a class="tk-navbar-link tk-navbar-link-active" href="#">Home</a><a class="tk-navbar-link" href="#">Fitur</a><button class="tk-btn tk-btn-secondary tk-btn-sm">Masuk</button></nav><aside')}</div>`)}
${section('Tabs & Segmented', `<div class="sc-col">${c['components/tabs.html']}</div><p class="tk-caption" style="margin-top: 12px">Rel tenggelam dengan tombol preset: tab aktif menonjol keluar sebagai tombol logam.</p>`)}
${section('Badges & Chips', `<div class="sc-row">${c['components/badge.html']}</div><p class="tk-caption" style="margin-top: 12px">Setiap badge membawa lampu LED yang menyala sesuai statusnya.</p>`)}
${section('Feedback & Alerts', `<div class="sc-col">${c['components/alert.html']}</div>`)}
${section('Layout Options', `<p class="tk-caption" style="margin-bottom: 12px">Grid 12 / 3 / 2 kolom pada lebar konten --tk-container</p><div class="tk-grid tk-grid-12" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(12)}</div><div class="tk-grid tk-grid-3" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(3)}</div><div class="tk-grid tk-grid-2">${'<div class="sc-cell"></div>'.repeat(2)}</div>`)}
${section('Content Blocks', c['components/content-blocks.html'])}
${section('Data Display', `<p class="tk-caption" style="margin-bottom: 12px">Advanced filter &mdash; pencarian, dua select custom, tombol filter berpenanda jumlah, chip filter aktif</p>${c['components/filter.html']}<div style="margin-top: 24px">${c['components/table.html'].replace('<nav class="tk-pagination">', '<nav class="tk-pagination" style="margin-top: 16px">')}</div><p class="tk-caption" style="margin-top: 12px">Kolom Aksi rata kanan: ikon langsung (lihat &middot; edit &middot; hapus) untuk aksi sedikit, atau menu &hellip; (klik untuk membuka) bila aksinya banyak.</p>`)}
${section('Charts', `<p class="tk-caption" style="margin-bottom: 12px">Chart.js &mdash; pustaka chart tunggal untuk semua kit. Warna dibaca dari token kit saat digambar; palet bengkel biru-kulit-amber dengan garis tepi tegas seperti tinta di kertas grafik.</p><div class="tk-grid tk-grid-3"><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Pengunjung</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-line"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Pendapatan</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-bar"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Sumber Trafik</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-doughnut"></canvas></div></div></div></div>`)}
${section('Modal & Overlay', `<div class="sc-overlay-demo">${c['components/modal.html']}</div>`)}
${section('Loading States', `<div class="sc-row" style="gap: 32px">${c['components/loading.html'].replace('<div class="tk-progress">', '<div class="tk-progress" style="width: 240px">')}</div><p class="tk-caption" style="margin-top: 12px">Progress bar adalah pengukur analog: rel tenggelam, isi glossy bergaris diagonal.</p>`)}
${section('Empty States', `<div style="max-width: 420px">${c['components/empty.html']}</div>`)}

</div>
${CHART_HELPER_SCRIPT}
<script>
var scLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
tkChart('sc-chart-line', function (t) {
    return {
        type: 'line',
        data: { labels: scLabels, datasets: [{ label: 'Pengunjung', data: [4200, 5100, 4800, 6300, 7100, 8400], borderColor: t.primary, backgroundColor: t.primary + '22', fill: true, tension: 0.3, pointRadius: 4, pointBackgroundColor: t.primary, pointBorderColor: '#FFF', pointBorderWidth: 2, borderWidth: 3 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-bar', function (t) {
    return {
        type: 'bar',
        data: { labels: scLabels, datasets: [{ label: 'Pendapatan', data: [12, 19, 14, 22, 26, 31], backgroundColor: '#96683A', borderColor: '#6E4B26', borderWidth: 1, borderRadius: 4 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-doughnut', function (t) {
    return {
        type: 'doughnut',
        data: { labels: ['Direct', 'Organik', 'Sosial', 'Referral'], datasets: [{ data: [38, 31, 19, 12], backgroundColor: [t.primary, '#96683A', '#E8A33D', '#8F8873'], borderColor: t.surface2, borderWidth: 3 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '62%', plugins: { legend: { position: 'bottom' } } }
    };
});
</script>
</body>
</html>
`;
