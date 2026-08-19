/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len, @typescript-eslint/quotes */

import { AURORA_COMPONENTS } from './components';
import { AUTH_CSS, AUTH_LOGIN_FORM, AUTH_REGISTER_FORM } from './examples';
// Perancah pratinjau (bilah navigasi sticky, helper chart) kit-agnostik dan sengaja dipakai
// bersama; rumahnya masih di folder kit pertama sampai ada alasan memindahkannya.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

/**
 * `showcase.html` kit Aurora: lembar peraga 22 seksi sesuai §6 kontrak — termasuk Login &
 * Register, yang merupakan bagian paket Komponen (bukan tampilan tersendiri di navigasi).
 *
 * Kit ini dua-mode, jadi saklar tema di bilah atas dibiarkan hidup: seluruh seksi di bawah ini
 * ikut berpindah ke aurora malam saat ditekan, chart digambar ulang mengikuti token barunya.
 *
 * Seksi komponennya dirakit dari fragmen `components/` yang sama persis dengan yang akan disalin
 * agen — bukan salinan tersendiri — supaya pratinjau tidak pernah menyimpang dari komponen
 * sebenarnya. Kelas `sc-*` hanyalah perancah lembar peraganya dan bukan bagian dari kontrak kit.
 */

const c = AURORA_COMPONENTS;

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

// Nilai heksa yang tertulis adalah palet mode terang; saat saklar tema dinyalakan kotak warnanya
// ikut berganti karena mengambil dari token, sedangkan kodenya tetap menampilkan nilai terang.
const SWATCHES = [
    ['primary', '#0E7C86'], ['primary-hover', '#0A626B'], ['secondary', '#6F4DEB'],
    ['accent', '#E85FA8'], ['background', '#F6F7FD'], ['surface', '#FFFFFF'],
    ['surface-2', '#EDF1FA'], ['text', '#131B33'], ['text-muted', '#5A6785'],
    ['border', '#DFE5F5'], ['success', '#0B8A61'], ['warning', '#B26A00'],
    ['danger', '#D93A6A'], ['info', '#0E7C86']
].map(([name, hex]) =>
    `<div class="sc-swatch"><div class="sc-swatch-fill" style="background: var(--tk-color-${name})"></div><span>${name}</span><code>${hex}</code></div>`
).join('');

const TYPE_SCALE = [
    ['Display', 'tk-display', '60px'], ['Heading 1', 'tk-h1', '44px'], ['Heading 2', 'tk-h2', '33px'],
    ['Heading 3', 'tk-h3', '25px'], ['Heading 4', 'tk-h4', '19px'], ['Title', 'tk-title', '16px'],
    ['Body', 'tk-body', '16px'], ['Body Small', 'tk-body-sm', '14px'], ['Caption', 'tk-caption', '12px']
].map(([label, cls, size]) =>
    `<div class="sc-type-row"><span class="sc-type-meta">${label} &middot; ${size}</span><p class="${cls}" style="margin: 0">Aa &mdash; Cahaya yang saling melarut</p></div>`
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

const ICONS = ['home', 'magnifying-glass', 'user', 'cog-6-tooth', 'bell', 'heart', 'star', 'trash',
    'pencil-square', 'check', 'x-mark', 'plus', 'arrow-right', 'bolt', 'calendar-days', 'envelope',
    'lock-closed', 'sparkles']
    .map(name => `<span class="sc-icon" title="heroicons:${name}"><iconify-icon icon="heroicons:${name}" width="22" height="22"></iconify-icon></span>`)
    .join('');

export const AURORA_SHOWCASE = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Aurora — Design Kit Showcase</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Outfit:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<script src="https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"></script>
<script src="${CHARTJS_SCRIPT}"></script>
<style>
    ${EX_NAV_CSS}
</style>
<style>
    /* Perancah lembar peraga (sc-*): bukan bagian kontrak kit. */
    .sc-wrap { max-width: 1200px; margin: 0 auto; padding: 48px 24px 96px; }
    .sc-kit-title { font-family: var(--tk-font-mono); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--tk-color-primary); margin: 0 0 6px; }
    .sc-section { margin-top: 60px; }
    .sc-heading { font-family: var(--tk-font-mono); font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--tk-color-primary); border-bottom: 1px solid var(--tk-color-border); padding-bottom: 10px; margin: 0 0 24px; }
    .sc-row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    .sc-col { display: flex; flex-direction: column; gap: 16px; max-width: 480px; }
    .sc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
    .sc-swatch { font-size: 12px; display: flex; flex-direction: column; gap: 4px; }
    .sc-swatch code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-swatch-fill { height: 52px; border-radius: var(--tk-radius-sm); border: 1px solid var(--tk-color-border); box-shadow: var(--tk-shadow-sm), var(--tk-au-sheen); }
    .sc-type-row { display: flex; align-items: baseline; gap: 24px; margin-bottom: 16px; }
    .sc-type-meta { width: 150px; flex: none; font-family: var(--tk-font-mono); font-size: 12px; color: var(--tk-color-text-muted); }
    .sc-space-row { display: flex; align-items: center; gap: 16px; margin-bottom: 8px; font-size: 12px; }
    .sc-space-row code { width: 130px; color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-space-bar { height: 16px; background: var(--tk-au-grad); border-radius: 999px; }
    .sc-radius-item { display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 11px; }
    .sc-radius-item code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-radius-box { width: 136px; height: 76px; background: var(--tk-au-veil); border: 1px solid var(--tk-color-border); box-shadow: var(--tk-shadow-sm), var(--tk-au-sheen); }
    .sc-radius-box-pill { height: 42px; margin-top: 17px; }
    .sc-shadow-box { width: 136px; height: 92px; background: var(--tk-color-surface); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius); display: flex; align-items: flex-end; padding: 10px; font-size: 11px; }
    .sc-shadow-box code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-icon { color: var(--tk-color-primary); padding: 8px; }
    .sc-cell { background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-sm); height: 48px; }
    .sc-overlay-demo { position: relative; height: 330px; overflow: hidden; border-radius: var(--tk-radius); border: 1px solid var(--tk-color-border); }
    .sc-overlay-demo .tk-modal-backdrop, .sc-overlay-demo .tk-drawer { position: absolute; }
    .sc-chart-box { position: relative; height: 200px; }
    .sc-auth-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 420px)); gap: 24px; align-items: start; }
    /* Panggung cahaya: dua bidang langit berdampingan — mesh saja, lalu mesh dengan tirai. */
    .sc-sky-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
    .sc-sky { min-height: 240px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; text-align: center; padding: 32px 24px; }
    .sc-orb { width: 92px; height: 92px; border-radius: 50%; background: radial-gradient(circle at 34% 30%, rgba(255, 255, 255, 0.92) 0%, rgba(79, 224, 176, 0.75) 34%, rgba(111, 77, 235, 0.45) 100%); }
    .sc-tools { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 16px; margin-top: 24px; }
    .sc-tool { background: var(--tk-au-veil); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius); box-shadow: var(--tk-shadow-sm), var(--tk-au-sheen); padding: 18px; }
    .sc-tool code { display: inline-block; margin-bottom: 6px; }
    @media (max-width: 720px) { .sc-sky-grid { grid-template-columns: 1fr; } }
${AUTH_CSS}
</style>
</head>
<body>
${exNav('Aurora', 'components', '')}
<div class="sc-wrap">
    <p class="sc-kit-title">TOKENAI Design Kit</p>
    <h1 class="tk-h1" style="margin: 0">Aurora</h1>
    <p class="tk-body-lg tk-muted" style="margin-top: 8px">Gradient mesh yang warnanya saling melarut seperti cahaya utara: hijau mint, cyan, violet, dan rose berpendar di latar lalu bertemu tanpa satu pun garis batas. Di atasnya tirai aurora &mdash; berkas cahaya miring yang bergoyang sangat pelan. Permukaannya kaca tipis berpinggir rambut gradien, fokus dan tombol memancarkan pendar berwarna, dan tidak ada satu pun sudut tajam. Kit dua-mode: coba saklar tema di kanan atas untuk berpindah ke aurora malam. Lihat juga contoh halaman nyata lewat bilah navigasi di atas.</p>

${section('Typography', `<p class="tk-caption" style="margin-bottom: 24px">Outfit (heading geometris berujung lembut) &middot; Plus Jakarta Sans (body) &middot; IBM Plex Mono (caption, label, kode) &middot; skala di bawah adalah seluruh tingkat yang tersedia</p>${TYPE_SCALE}`)}
${section('Color Palette', `<div class="sc-grid">${SWATCHES}</div><p class="tk-caption" style="margin-top: 16px">Teal laut, violet, dan rose &mdash; tiga warna aurora yang sengaja dipilih cukup dalam supaya tetap terbaca sebagai teks, sementara terangnya disimpan untuk mesh dan pendar. Kode di atas adalah nilai mode terang; nyalakan saklar tema dan kotaknya berpindah ke palet malam (primary jadi <code class="tk-code">#2FD4C4</code>, latar <code class="tk-code">#070B1A</code>).</p>`)}
${section('Spacing System', SPACES)}
${section('Border Radius', `<div class="sc-row">${RADII}</div><p class="tk-caption" style="margin-top: 12px">Radius besar di semua tingkat &mdash; cahaya tidak punya sudut, jadi kit ini pun tidak.</p>`)}
${section('Shadow System', `<div class="sc-row" style="gap: 24px">${SHADOWS}</div><p class="tk-caption" style="margin-top: 12px">Bayangannya biru tinta dan sangat menyebar, bukan hitam pekat: benda di sini berdiri di bawah cahaya lembut, bukan lampu sorot.</p>`)}
${section('Iconography', `<div class="sc-row">${ICONS}</div><p class="tk-caption">Iconify, set <code class="tk-code">heroicons</code> gaya bawaannya &mdash; tulis <code class="tk-code">&lt;iconify-icon icon="heroicons:nama"&gt;</code>. Garis 24px berujung membulat dengan sapuan lapang, senada dengan permukaan kit yang serba lembut. Ratusan ribu ikon lain tersedia dengan set berbeda bila perlu; logo brand diambil dari <code class="tk-code">simple-icons</code> karena heroicons tidak memuatnya.</p>`)}
${section('Design Language', `<div class="sc-sky-grid">
    <div class="tk-mesh sc-sky"><span class="sc-orb tk-float"></span><p class="tk-title" style="margin: 0">Bidang mesh</p><span class="tk-caption">Lima pusat warna yang melarut, bernapas 32 detik sekali</span></div>
    <div class="tk-mesh tk-aurora sc-sky"><p class="tk-h3 tk-gradient-text" style="margin: 0">Tirai cahaya</p><span class="tk-caption">Berkas miring yang bergoyang di atas mesh</span></div>
</div>
<div class="sc-tools">
    <div class="sc-tool"><code class="tk-code">.tk-mesh</code><p class="tk-body-sm tk-muted" style="margin: 0">Mengubah kotak apa pun jadi sepotong langit aurora yang bernapas pelan.</p></div>
    <div class="sc-tool"><code class="tk-code">.tk-aurora</code><p class="tk-body-sm tk-muted" style="margin: 0">Tirai berkas cahaya miring &mdash; wujud khas aurora; tumpuk di atas mesh.</p></div>
    <div class="sc-tool"><code class="tk-code">.tk-veil</code><p class="tk-body-sm tk-muted" style="margin: 0">Kaca tembus pandang berpinggir rambut gradien untuk panel di atas mesh.</p></div>
    <div class="sc-tool"><code class="tk-code">.tk-glow</code><p class="tk-body-sm tk-muted" style="margin: 0">Pendar berwarna yang mekar dari balik elemen.</p></div>
    <div class="sc-tool"><code class="tk-code">.tk-halo</code><p class="tk-body-sm tk-muted" style="margin: 0">Bulatan cahaya kabur tepat di belakang objek.</p></div>
    <div class="sc-tool"><code class="tk-code">.tk-gradient-text</code><p class="tk-body-sm tk-muted" style="margin: 0">Teks yang warnanya melarut mengikuti gradien inti kit.</p></div>
    <div class="sc-tool"><code class="tk-code">.tk-float</code><p class="tk-body-sm tk-muted" style="margin: 0">Membuat elemen apa pun mengambang naik-turun tanpa henti.</p></div>
</div>
<div class="sc-row" style="gap: 24px; margin-top: 24px; align-items: center"><div class="tk-veil" style="padding: 16px 22px"><span class="tk-body-sm">Panel <code class="tk-code">.tk-veil</code></span></div><button class="tk-btn tk-btn-primary tk-glow">Tombol berpendar</button><span class="tk-halo" style="display: inline-flex"><span class="tk-badge tk-badge-info">Badge berhalo</span></span></div>
<p class="tk-body-sm tk-muted" style="margin: 28px 0 0; max-width: 620px">Tujuh perkakas ini dipakai hemat: cahaya baru terbaca sebagai cahaya kalau ada bidang tenang di sebelahnya. Mesh dan tirai tinggal di halaman pemasaran &mdash; dashboard tetap alat kerja, jadi di sana yang tersisa hanya permukaan kaca dan pendar pada elemen aktif. Seluruh animasi berhenti otomatis untuk pengguna yang menyalakan <code class="tk-code">prefers-reduced-motion</code>.</p>`)}
${section('Buttons', `<div class="sc-row">${c['components/button.html']}</div><p class="tk-caption" style="margin-top: 16px">Gradien tombol utama bergeser saat disorot &mdash; cahayanya berpindah, warnanya tidak berganti. Tombol outline memunculkan pinggir rambut gradien di tepinya.</p>`)}
${section('Input & Form', `<div class="sc-col">${c['components/form.html']}</div><p class="tk-caption" style="margin: 24px 0 12px">Search bar &mdash; ikon dan pintasan menyatu di dalam field</p><div style="max-width: 480px">${c['components/search.html']}</div><p class="tk-caption" style="margin: 24px 0 12px">Select custom (ditampilkan terbuka) &mdash; satu pilihan &middot; dengan pencarian &middot; multi dengan checkbox &amp; aksi. Listbox digambar kit, bukan popup bawaan browser.</p><div class="sc-row" style="align-items: flex-start; gap: 24px; min-height: 350px">${c['components/select.html'].split('<div class="tk-select">').join('<div class="tk-select tk-select-open" style="width: 250px">')}</div><p class="tk-caption" style="margin: 0 0 12px">Dropdown aksi (ditampilkan terbuka; aslinya terbuka saat trigger diklik)</p><div style="min-height: 250px">${c['components/dropdown.html'].replace('class="tk-dropdown"', 'class="tk-dropdown tk-dropdown-open"')}</div><p class="tk-caption">Kontrol digambar sendiri: field sedikit cekung, dan saat fokus tepinya memancarkan pendar teal alih-alih cincin biru bawaan browser.</p>`)}
${section('Login & Register', `<p class="tk-caption" style="margin-bottom: 16px">Kartu auth dirakit murni dari komponen form kit &mdash; bagian dari paket Komponen. Halaman penuhnya (web &amp; ponsel lewat saklar perangkat) ada di <a class="tk-link" href="examples/login.html">examples/login.html</a> dan <a class="tk-link" href="examples/register.html">examples/register.html</a>.</p><div class="sc-auth-grid">${authCard(AUTH_LOGIN_FORM)}${authCard(AUTH_REGISTER_FORM)}</div>`)}
${section('Card Components', `<div class="tk-grid tk-grid-3">${c['components/card.html']}<div class="tk-card"><div class="tk-card-body" style="text-align: center"><div class="tk-feature-icon" style="margin: 0 auto 14px"><iconify-icon icon="heroicons:user" width="24" height="24"></iconify-icon></div><p class="tk-title" style="margin: 0">Jane Doe</p><p class="tk-caption">UI/UX Designer</p></div></div></div><p class="tk-caption" style="margin-top: 16px">Kartu adalah kaca tipis di atas mesh; saat disorot pinggir rambut gradiennya menyala mengelilingi tepi.</p>`)}
${section('Navigation', `<div class="sc-col" style="max-width: none">${c['components/navigation.html'].replace('<aside', '<nav class="tk-navbar tk-navbar-dark"><span class="tk-navbar-brand">Logo</span><a class="tk-navbar-link tk-navbar-link-active" href="#">Home</a><a class="tk-navbar-link" href="#">Fitur</a><button class="tk-btn tk-btn-secondary tk-btn-sm">Masuk</button></nav><aside')}</div>`)}
${section('Tabs & Segmented', `<div class="sc-col">${c['components/tabs.html']}</div><p class="tk-caption" style="margin-top: 12px">Rel sedikit cekung; tab aktif adalah kapsul bergradien teal-violet.</p>`)}
${section('Badges & Chips', `<div class="sc-row">${c['components/badge.html']}</div>`)}
${section('Feedback & Alerts', `<div class="sc-col">${c['components/alert.html']}</div>`)}
${section('Layout Options', `<p class="tk-caption" style="margin-bottom: 12px">Grid 12 / 3 / 2 kolom pada lebar konten --tk-container</p><div class="tk-grid tk-grid-12" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(12)}</div><div class="tk-grid tk-grid-3" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(3)}</div><div class="tk-grid tk-grid-2">${'<div class="sc-cell"></div>'.repeat(2)}</div>`)}
${section('Content Blocks', c['components/content-blocks.html'])}
${section('Data Display', `<p class="tk-caption" style="margin-bottom: 12px">Advanced filter &mdash; pencarian, dua select custom, tombol filter berpenanda jumlah, chip filter aktif</p>${c['components/filter.html']}<div style="margin-top: 24px">${c['components/table.html'].replace('<nav class="tk-pagination">', '<nav class="tk-pagination" style="margin-top: 16px">')}</div><p class="tk-caption" style="margin-top: 12px">Kolom Aksi rata kanan: ikon langsung (lihat &middot; edit &middot; hapus) untuk aksi sedikit, atau menu &hellip; (klik untuk membuka) bila aksinya banyak.</p>`)}
${section('Charts', `<p class="tk-caption" style="margin-bottom: 12px">Chart.js &mdash; pustaka chart tunggal untuk semua kit. Warna dibaca dari token kit saat digambar, jadi chartnya ikut berpindah sendiri saat saklar tema ditekan.</p><div class="tk-grid tk-grid-3"><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Pengunjung</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-line"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Pendapatan</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-bar"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Sumber Trafik</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-doughnut"></canvas></div></div></div></div>`)}
${section('Modal & Overlay', `<div class="sc-overlay-demo">${c['components/modal.html']}</div>`)}
${section('Loading States', `<div class="sc-row" style="gap: 32px">${c['components/loading.html'].replace('<div class="tk-progress">', '<div class="tk-progress" style="width: 240px">')}</div><p class="tk-caption" style="margin-top: 12px">Progress bar memakai gradien inti kit: teal, biru, lalu violet.</p>`)}
${section('Empty States', `<div style="max-width: 430px">${c['components/empty.html']}</div>`)}

</div>
${CHART_HELPER_SCRIPT}
<script>
var scLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
tkChart('sc-chart-line', function (t) {
    return {
        type: 'line',
        data: { labels: scLabels, datasets: [{ label: 'Pengunjung', data: [4200, 5100, 4800, 6300, 7100, 8400], borderColor: t.primary, backgroundColor: t.secondary + '26', fill: true, tension: 0.45, pointRadius: 4, pointBackgroundColor: t.secondary, pointBorderColor: t.surface, pointBorderWidth: 2, borderWidth: 3 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-bar', function (t) {
    return {
        type: 'bar',
        data: { labels: scLabels, datasets: [{ label: 'Pendapatan', data: [12, 19, 14, 22, 26, 31], backgroundColor: t.primary, borderRadius: 10 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-doughnut', function (t) {
    return {
        type: 'doughnut',
        data: { labels: ['Direct', 'Organik', 'Sosial', 'Referral'], datasets: [{ data: [38, 31, 19, 12], backgroundColor: [t.primary, t.secondary, t.accent, t.muted], borderColor: t.surface, borderWidth: 3 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '62%', plugins: { legend: { position: 'bottom' } } }
    };
});
</script>
</body>
</html>
`;
