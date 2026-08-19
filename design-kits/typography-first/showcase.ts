/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len, @typescript-eslint/quotes */

import { TYPOGRAPHY_FIRST_COMPONENTS } from './components';
import { AUTH_CSS, AUTH_LOGIN_FORM, AUTH_REGISTER_FORM } from './examples';
// Perancah pratinjau (bilah navigasi sticky, helper chart) kit-agnostik dan sengaja dipakai
// bersama; rumahnya masih di kit pertama sampai ada alasan memindahkannya.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

/**
 * `showcase.html` kit Typography First: lembar peraga 22 seksi sesuai §6 kontrak — termasuk
 * Login & Register, yang merupakan bagian paket Komponen (bukan tampilan tersendiri di navigasi).
 *
 * Kit ini satu-tema (terang bawaan) sehingga exNav dipanggil dengan `themeToggle: false`.
 *
 * Seksi komponennya dirakit dari fragmen `components/` yang sama persis dengan yang akan disalin
 * agen — bukan salinan tersendiri — supaya pratinjau tidak pernah menyimpang dari komponen
 * sebenarnya. Kelas `sc-*` hanyalah perancah lembar peraganya dan bukan bagian dari kontrak kit.
 */

const c = TYPOGRAPHY_FIRST_COMPONENTS;

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
    ['primary', '#8C2F39'], ['primary-hover', '#71222B'], ['secondary', '#1A1815'],
    ['accent', '#B08D3E'], ['background', '#FAF9F6'], ['surface', '#FFFFFF'],
    ['surface-2', '#F2EFE9'], ['text', '#1A1815'], ['text-muted', '#6E6A61'],
    ['border', '#E3DFD6'], ['success', '#2E7D4F'], ['warning', '#A16E14'],
    ['danger', '#B3362C'], ['info', '#33597F']
].map(([name, hex]) =>
    `<div class="sc-swatch"><div class="sc-swatch-fill" style="background: var(--tk-color-${name})"></div><span>${name}</span><code>${hex}</code></div>`
).join('');

const TYPE_SCALE = [
    ['Display', 'tk-display', '84px'], ['Heading 1', 'tk-h1', '54px'], ['Heading 2', 'tk-h2', '36px'],
    ['Heading 3', 'tk-h3', '26px'], ['Heading 4', 'tk-h4', '19px'], ['Title', 'tk-title', '15px'],
    ['Body', 'tk-body', '17px'], ['Body Small', 'tk-body-sm', '14px'], ['Caption', 'tk-caption', '12px']
].map(([label, cls, size]) =>
    `<div class="sc-type-row"><span class="sc-type-meta">${label} &middot; ${size}</span><p class="${cls}" style="margin: 0">Aa &mdash; Huruf memikul segalanya</p></div>`
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

const ICONS = ['home-outline', 'search-outline', 'user-outline', 'cog-outline', 'bell-outline', 'heart-outline', 'star-outline', 'bin-outline', 'edit-outline',
    'tick-outline', 'x-outline', 'add-outline', 'arrow-right-outline', 'download-outline', 'text-outline', 'calendar-outline', 'envelope-outline', 'lock-outline']
    .map(name => `<span class="sc-icon" title="teenyicons:${name}"><iconify-icon icon="teenyicons:${name}" width="20" height="20"></iconify-icon></span>`)
    .join('');

export const TYPOGRAPHY_FIRST_SHOWCASE = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Typography First — Design Kit Showcase</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..700;1,8..60,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<script src="https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"></script>
<script src="${CHARTJS_SCRIPT}"></script>
<style>
    ${EX_NAV_CSS}
</style>
<style>
    /* Perancah lembar peraga (sc-*): bukan bagian kontrak kit. */
    .sc-wrap { max-width: 1160px; margin: 0 auto; padding: 48px 24px 96px; }
    .sc-kit-title { font-family: var(--tk-font-mono); font-size: 13px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--tk-color-primary); margin: 0 0 4px; }
    .sc-section { margin-top: 56px; }
    .sc-heading { font-family: var(--tk-font-mono); font-size: 12px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--tk-color-primary); border-bottom: 1px solid var(--tk-color-border); padding-bottom: 8px; margin: 0 0 24px; }
    .sc-row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    .sc-col { display: flex; flex-direction: column; gap: 16px; max-width: 480px; }
    .sc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
    .sc-swatch { font-size: 12px; display: flex; flex-direction: column; gap: 4px; }
    .sc-swatch code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-swatch-fill { height: 48px; border-radius: var(--tk-radius-sm); border: 1px solid var(--tk-color-border); box-shadow: var(--tk-shadow-sm); }
    .sc-type-row { display: flex; align-items: baseline; gap: 24px; margin-bottom: 16px; }
    .sc-type-meta { width: 140px; flex: none; font-size: 12px; color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-space-row { display: flex; align-items: center; gap: 16px; margin-bottom: 8px; font-size: 12px; }
    .sc-space-row code { width: 120px; color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-space-bar { height: 14px; background: var(--tk-color-primary); border-radius: 2px; }
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
    /* Panggung spesimen: halaman buku dengan dua kolom — display + perangkat klasik. */
    .sc-stage { padding: 48px 40px; background: var(--tk-color-surface); border: 1px solid var(--tk-color-text); border-radius: var(--tk-radius-lg); }
    .sc-stage .tk-display { font-size: clamp(44px, 6vw, 80px); margin: 0 0 8px; }
    .sc-stage-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 24px; align-items: start; }
    @media (max-width: 800px) { .sc-stage-cols { grid-template-columns: 1fr; } }
${AUTH_CSS}
</style>
</head>
<body>
${exNav('Typography First', 'components', '', { themeToggle: false })}
<div class="sc-wrap">
    <p class="sc-kit-title">TOKENAI Design Kit</p>
    <h1 class="tk-h1" style="margin: 0">Typography First</h1>
    <p class="tk-body-lg tk-muted" style="margin-top: 8px">Typography-First: hampir seluruh identitas visual dibangun dari huruf &mdash; pilihan font, skala ukuran, spacing, dan komposisi; imagery hanya pendukung (grayscale, baru berwarna saat disorot). Pasangan serif Fraunces (display berkarakter dengan sumbu optical size) dan Source Serif 4 (body yang nyaman dibaca panjang), ditemani DM Mono untuk label dan kicker. Ornamennya perangkat tipografi klasik: drop cap, pull quote, angka seksi raksasa yang pudar, fleuron (&#10086;), hairline rules, small caps, dan angka oldstyle di teks berjalan. Kanvas kertas hangat, tinta hampir hitam, aksen oxblood dan ochre. Kit satu-tema &mdash; terang secara bawaan, karena huruf paling nyaman dibaca di atas kertas. Lihat juga contoh halaman nyata lewat bilah navigasi di atas.</p>

${section('Typography', `<p class="tk-caption" style="margin-bottom: 24px">Fraunces (display &amp; heading serif berkarakter, optical size otomatis) &middot; Source Serif 4 (body) &middot; DM Mono (label, kicker &amp; kbd) &middot; angka oldstyle di teks, lining di tabel &amp; statistik</p>${TYPE_SCALE}`)}
${section('Color Palette', `<div class="sc-grid">${SWATCHES}</div><p class="tk-caption" style="margin-top: 12px">Kertas hangat + tinta hampir hitam; oxblood untuk aksi dan aksen, ochre untuk sorotan sekunder.</p>`)}
${section('Spacing System', SPACES)}
${section('Border Radius', `<div class="sc-row">${RADII}</div><p class="tk-caption" style="margin-top: 12px">Sudut hampir siku &mdash; kolom cetak tidak pernah membulat.</p>`)}
${section('Shadow System', `<div class="sc-row" style="gap: 24px">${SHADOWS}</div><p class="tk-caption" style="margin-top: 12px">Bayangan setipis kertas &mdash; komposisi memisahkan konten, bukan bayangan.</p>`)}
${section('Iconography', `<div class="sc-row">${ICONS}</div><p class="tk-caption">Iconify, set <code>teenyicons</code> &mdash; garis ultra-tipis 1px yang tunduk pada huruf; tulis <code>&lt;iconify-icon icon="teenyicons:nama-outline"&gt;</code>. Ratusan ribu ikon lain tersedia dengan set berbeda bila perlu.</p>`)}
${section('Design Language', `<div class="sc-stage"><p class="tk-kicker">Bab &mdash; Design Language</p><h3 class="tk-display">Huruf <span class="tk-ital">memikul</span> segalanya</h3><p class="tk-caption" style="margin: 0">Fraunces &middot; Source Serif 4 &middot; DM Mono &mdash; tanpa gambar satu pun</p><div class="sc-stage-cols"><p class="tk-dropcap" style="margin: 0">Kit ini percaya bahwa halaman yang baik dimulai dari huruf yang baik. Drop cap di awal paragraf ini, angka oldstyle seperti 1234567890 di teks berjalan, dan small caps <span class="tk-smallcaps">seperti ini</span> adalah perangkat yang sudah teruji lima abad penataan huruf &mdash; bukan tren tahun ini.</p><blockquote class="tk-pullquote" style="margin: 0">Perhatikan hurufnya, maka halamannya akan mengurus dirinya sendiri.<cite>Pepatah juru cetak</cite></blockquote></div><div class="tk-fleuron" aria-hidden="true"><span>&#10086;</span></div><div class="sc-row" style="justify-content: space-between"><span class="tk-num">01</span><span class="tk-num">02</span><span class="tk-num">03</span><span class="tk-num">04</span></div></div><p class="tk-body-sm tk-muted" style="margin: 24px 0 0; max-width: 640px">Kosakata tipografis: kicker small caps bergaris (<code class="tk-code">.tk-kicker</code>), kata beritalik oxblood di heading (<code class="tk-code">.tk-ital</code>), drop cap (<code class="tk-code">.tk-dropcap</code>), pull quote dengan tanda kutip raksasa (<code class="tk-code">.tk-pullquote</code>), angka seksi pudar (<code class="tk-code">.tk-num</code>), fleuron pemisah (<code class="tk-code">.tk-fleuron</code>), dan label small caps (<code class="tk-code">.tk-smallcaps</code>). Foto otomatis grayscale dan baru berwarna saat disorot &mdash; imagery hanya pendukung.</p>`)}
${section('Buttons', `<div class="sc-row">${c['components/button.html']}</div><p class="tk-caption" style="margin-top: 12px">Tombol adalah label huruf: DM Mono uppercase berjarak renggang &mdash; sunyi, biarkan hurufnya yang bicara.</p>`)}
${section('Input & Form', `<div class="sc-col">${c['components/form.html']}</div><p class="tk-caption" style="margin: 24px 0 12px">Search bar &mdash; ikon dan pintasan menyatu di dalam field</p><div style="max-width: 480px">${c['components/search.html']}</div><p class="tk-caption" style="margin: 24px 0 12px">Select custom (ditampilkan terbuka) &mdash; satu pilihan &middot; dengan pencarian &middot; multi dengan checkbox &amp; aksi. Listbox digambar kit, bukan popup bawaan browser.</p><div class="sc-row" style="align-items: flex-start; gap: 24px; min-height: 340px">${c['components/select.html'].split('<div class="tk-select">').join('<div class="tk-select tk-select-open" style="width: 250px">')}</div><p class="tk-caption" style="margin: 0 0 12px">Dropdown aksi (ditampilkan terbuka; aslinya terbuka saat trigger diklik)</p><div style="min-height: 240px">${c['components/dropdown.html'].replace('class="tk-dropdown"', 'class="tk-dropdown tk-dropdown-open"')}</div><p class="tk-caption">Placeholder beritalik seperti anotasi naskah; fokus disorot cincin oxblood tipis.</p>`)}
${section('Login & Register', `<p class="tk-caption" style="margin-bottom: 16px">Kartu auth dirakit murni dari komponen form kit &mdash; bagian dari paket Komponen. Halaman penuhnya (web &amp; ponsel lewat saklar perangkat) ada di <a href="examples/login.html">examples/login.html</a> dan <a href="examples/register.html">examples/register.html</a>.</p><div class="sc-auth-grid">${authCard(AUTH_LOGIN_FORM)}${authCard(AUTH_REGISTER_FORM)}</div>`)}
${section('Card Components', `<div class="tk-grid tk-grid-3">${c['components/card.html']}<div class="tk-card"><div class="tk-card-body" style="text-align: center"><div class="tk-feature-icon" style="margin: 0 auto 12px"><iconify-icon icon="teenyicons:user-outline" width="20" height="20"></iconify-icon></div><p class="tk-title" style="margin: 0">Jane Doe</p><p class="tk-caption">UI/UX Designer</p></div></div></div><p class="tk-caption" style="margin-top: 12px">Statistik memakai angka lining Fraunces &mdash; angka teks dan angka data dibedakan seperti di buku.</p>`)}
${section('Navigation', `<div class="sc-col" style="max-width: none">${c['components/navigation.html'].replace('<aside', '<nav class="tk-navbar tk-navbar-dark"><span class="tk-navbar-brand">Logo</span><a class="tk-navbar-link tk-navbar-link-active" href="#">Home</a><a class="tk-navbar-link" href="#">Fitur</a><button class="tk-btn tk-btn-primary tk-btn-sm">Masuk</button></nav><aside')}</div><p class="tk-caption" style="margin-top: 12px">Tautan navbar mono uppercase; yang aktif digarisbawahi &mdash; konvensi tertua di web.</p>`)}
${section('Tabs & Segmented', `<div class="sc-col">${c['components/tabs.html']}</div>`)}
${section('Badges & Chips', `<div class="sc-row">${c['components/badge.html']}</div><p class="tk-caption" style="margin-top: 12px">Badge mono uppercase seperti anotasi margin naskah.</p>`)}
${section('Feedback & Alerts', `<div class="sc-col">${c['components/alert.html']}</div>`)}
${section('Layout Options', `<p class="tk-caption" style="margin-bottom: 12px">Grid 12 / 3 / 2 kolom pada lebar konten --tk-container</p><div class="tk-grid tk-grid-12" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(12)}</div><div class="tk-grid tk-grid-3" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(3)}</div><div class="tk-grid tk-grid-2">${'<div class="sc-cell"></div>'.repeat(2)}</div>`)}
${section('Content Blocks', c['components/content-blocks.html'])}
${section('Data Display', `<p class="tk-caption" style="margin-bottom: 12px">Advanced filter &mdash; pencarian, dua select custom, tombol filter berpenanda jumlah, chip filter aktif</p>${c['components/filter.html']}<div style="margin-top: 24px">${c['components/table.html'].replace('<nav class="tk-pagination">', '<nav class="tk-pagination" style="margin-top: 16px">')}</div><p class="tk-caption" style="margin-top: 12px">Tabel buku klasik: kepala bergaris tebal-tipis, isi ber-hairline, angka lining tabular lurus per kolom. Kolom Aksi rata kanan: ikon langsung untuk aksi sedikit, menu &hellip; bila banyak.</p>`)}
${section('Charts', `<p class="tk-caption" style="margin-bottom: 12px">Chart.js &mdash; pustaka chart tunggal untuk semua kit. Warna dibaca dari token kit saat digambar; oxblood, tinta, dan ochre di atas kertas.</p><div class="tk-grid tk-grid-3"><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Pengunjung</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-line"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Pendapatan</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-bar"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Sumber Trafik</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-doughnut"></canvas></div></div></div></div>`)}
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
        data: { labels: scLabels, datasets: [{ label: 'Pengunjung', data: [4200, 5100, 4800, 6300, 7100, 8400], borderColor: t.primary, backgroundColor: t.primary + '14', fill: true, tension: 0.3, pointRadius: 3.5, pointBackgroundColor: t.text, pointBorderColor: t.surface2, pointBorderWidth: 2, borderWidth: 2.5 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-bar', function (t) {
    return {
        type: 'bar',
        data: { labels: scLabels, datasets: [{ label: 'Pendapatan', data: [12, 19, 14, 22, 26, 31], backgroundColor: '#1A1815', borderRadius: 2 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-doughnut', function (t) {
    return {
        type: 'doughnut',
        data: { labels: ['Direct', 'Organik', 'Sosial', 'Referral'], datasets: [{ data: [38, 31, 19, 12], backgroundColor: [t.primary, '#1A1815', '#B08D3E', '#E3DFD6'], borderColor: '#FAF9F6', borderWidth: 3 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '62%', plugins: { legend: { position: 'bottom' } } }
    };
});
</script>
</body>
</html>
`;
