/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len, @typescript-eslint/quotes */

import { LUXURY_EDITORIAL_COMPONENTS } from './components';
import { AUTH_CSS, AUTH_LOGIN_FORM, AUTH_REGISTER_FORM } from './examples';
// Perancah pratinjau (bilah navigasi sticky, helper chart) kit-agnostik dan sengaja dipakai
// bersama; rumahnya masih di folder kit pertama sampai ada alasan memindahkannya.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

/**
 * `showcase.html` kit Luxury Editorial: lembar peraga 22 seksi sesuai §6 kontrak — termasuk
 * Login & Register, yang merupakan bagian paket Komponen (bukan tampilan tersendiri di navigasi).
 *
 * Seksi komponennya dirakit dari fragmen `components/` yang sama persis dengan yang akan disalin
 * agen — bukan salinan tersendiri — supaya pratinjau tidak pernah menyimpang dari komponen
 * sebenarnya. Kelas `sc-*` hanyalah perancah lembar peraganya dan bukan bagian kontrak kit.
 *
 * Dua hal digarap berbeda dari lembar peraga kit lain, karena keduanya justru inti kit ini:
 * seksi Typography ikut memperagakan drop cap, kutipan serif, dan lebar kolom `.tk-prose` —
 * bukan hanya tangga ukuran — dan seksi Design Language memperagakan gerak lambatnya secara
 * langsung (`.tk-gild` yang tumbuh, `.tk-reveal` yang naik) alih-alih menuliskannya sebagai
 * klaim. Angka jarak dan durasi yang tertulis di sini dibaca dari nilai token yang sama.
 */

const c = LUXURY_EDITORIAL_COMPONENTS;

function icon(name: string, size = 24): string {
    return `<iconify-icon icon="material-symbols-light:${name}" width="${size}" height="${size}"></iconify-icon>`;
}

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
    return `<div class="tk-card au-card" style="margin: 0"><div class="tk-card-body"><p class="au-brand">LOGO</p>${rooted}</div></div>`;
}

const SWATCHES = [
    ['primary', '#6F5B33'], ['primary-hover', '#574726'], ['primary-contrast', '#FDFBF7'],
    ['secondary', '#FFFFFF'], ['accent', '#B08D57'], ['background', '#FAF8F4'],
    ['surface', '#FFFFFF'], ['surface-2', '#F2EDE4'], ['text', '#16130F'],
    ['text-muted', '#6F6656'], ['border', '#E2D9C8'], ['success', '#3F6B4F'],
    ['warning', '#8A6B23'], ['danger', '#8E3B36'], ['info', '#3A5570']
].map(([name, hex]) =>
    `<div class="sc-swatch"><div class="sc-swatch-fill" style="background: var(--tk-color-${name})"></div><span>${name}</span><code>${hex}</code></div>`
).join('');

const TYPE_SCALE = [
    ['Display', 'tk-display', '84px &middot; bobot 300'], ['Heading 1', 'tk-h1', '60px &middot; bobot 300'],
    ['Heading 2', 'tk-h2', '40px'], ['Heading 3', 'tk-h3', '27px'], ['Heading 4', 'tk-h4', '21px'],
    ['Title', 'tk-title', '18px'], ['Body Large', 'tk-body-lg', '19px'], ['Body', 'tk-body', '17px'],
    ['Body Small', 'tk-body-sm', '15px'], ['Caption', 'tk-caption', '12px &middot; jarak 0.26em']
].map(([label, cls, size]) =>
    `<div class="sc-type-row"><span class="sc-type-meta">${label}<br><code>${size}</code></span><p class="${cls}" style="margin: 0">Aa &mdash; Koleksi musim kemarau</p></div>`
).join('');

const SPACES = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'section'].map(step =>
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

const ICONS = ['search', 'person', 'settings', 'notifications', 'favorite', 'star', 'diamond',
    'workspace-premium', 'delete', 'edit', 'check', 'close', 'add', 'arrow-right-alt', 'download',
    'calendar-month', 'mail', 'lock']
    .map(name => `<span class="sc-icon" title="material-symbols-light:${name}">${icon(name)}</span>`)
    .join('');

/** Sama dengan helper di `examples.ts`: isian pucat dihitung dari token, tanpa satu pun heksa. */
const LUX_CHART_MIX = `function lxSoft(color, amount) { return 'color-mix(in srgb, ' + color + ' ' + amount + '%, transparent)'; }`;

export const LUXURY_EDITORIAL_SHOWCASE = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Luxury Editorial — Design Kit Showcase</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&family=IBM+Plex+Mono:wght@300;400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<script src="https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"></script>
<script src="${CHARTJS_SCRIPT}"></script>
<style>
    ${EX_NAV_CSS}
</style>
<style>
    /* Perancah lembar peraga (sc-*): bukan bagian kontrak kit. */
    .sc-wrap { max-width: 1120px; margin: 0 auto; padding: 64px 40px 128px; }
    .sc-kit-title { font-family: var(--tk-font-body); font-size: 10px; font-weight: 500; letter-spacing: 0.32em; text-transform: uppercase; color: var(--tk-color-text-muted); margin: 0 0 16px; }
    .sc-section { margin-top: 88px; }
    .sc-heading { font-family: var(--tk-font-body); font-size: 10px; font-weight: 500; letter-spacing: 0.3em; text-transform: uppercase; color: var(--tk-color-text-muted); border-bottom: 1px solid var(--tk-color-border); padding-bottom: 12px; margin: 0 0 40px; }
    .sc-row { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; }
    .sc-col { display: flex; flex-direction: column; gap: 20px; max-width: 520px; }
    .sc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 20px; }
    .sc-note { font-size: var(--tk-text-body-sm); color: var(--tk-color-text-muted); max-width: 68ch; }
    .sc-swatch { font-size: 11px; display: flex; flex-direction: column; gap: 6px; letter-spacing: 0.04em; }
    .sc-swatch code { color: var(--tk-color-text-muted); font-size: 10px; }
    .sc-swatch-fill { height: 56px; border: 1px solid var(--tk-color-border); }
    .sc-type-row { display: flex; align-items: baseline; gap: 40px; margin-bottom: 28px; }
    .sc-type-meta { width: 150px; flex: none; font-family: var(--tk-font-body); font-size: 10px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: var(--tk-color-text-muted); }
    .sc-type-meta code { font-size: 10px; letter-spacing: 0.04em; text-transform: none; }
    .sc-space-row { display: flex; align-items: center; gap: 24px; margin-bottom: 10px; font-size: 11px; }
    .sc-space-row code { width: 150px; flex: none; color: var(--tk-color-text-muted); }
    .sc-space-bar { height: 12px; max-width: 100%; background: color-mix(in srgb, var(--tk-color-accent) 28%, transparent); border-left: 1px solid var(--tk-color-accent); border-right: 1px solid var(--tk-color-accent); }
    .sc-radius-item { display: flex; flex-direction: column; align-items: center; gap: 10px; font-size: 10px; }
    .sc-radius-item code { color: var(--tk-color-text-muted); }
    .sc-radius-box { width: 140px; height: 76px; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); }
    .sc-radius-box-pill { height: 40px; margin-top: 18px; }
    .sc-shadow-box { width: 148px; height: 96px; background: var(--tk-color-surface); border: 1px solid var(--tk-color-border); display: flex; align-items: flex-end; padding: 10px; font-size: 10px; }
    .sc-shadow-box code { color: var(--tk-color-text-muted); }
    .sc-icon { color: var(--tk-color-text); padding: 10px; }
    .sc-cell { background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); height: 56px; }
    .sc-overlay-demo { position: relative; height: 380px; overflow: hidden; border: 1px solid var(--tk-color-border); }
    .sc-overlay-demo .tk-modal-backdrop, .sc-overlay-demo .tk-drawer { position: absolute; }
    .sc-chart-box { position: relative; height: 220px; }
    .sc-auth-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 424px)); gap: 32px; align-items: start; }
    .sc-motion { display: flex; flex-wrap: wrap; gap: 48px; align-items: flex-start; margin-top: 32px; }
    .sc-plate-demo { max-width: 420px; }
    .sc-plate-demo .tk-plate { aspect-ratio: 4 / 3; }
    @media (max-width: 720px) {
        .sc-wrap { padding: 40px 20px 80px; }
        .sc-type-row { flex-direction: column; gap: 8px; }
        .sc-type-meta { width: auto; }
    }
${AUTH_CSS}
</style>
</head>
<body>
${exNav('Luxury Editorial', 'components', '')}
<div class="sc-wrap">
    <p class="sc-kit-title">TOKENAI Design Kit</p>
    <h1 class="tk-display" style="margin: 0">Luxury Editorial</h1>
    <p class="tk-hero-sub" style="margin: 24px 0 0; max-width: 68ch">Tata letak editorial dengan nuansa barang mewah &mdash; serif kontras tinggi berukuran raksasa, emas champagne yang hanya muncul sebagai garis rambut, whitespace 176px antar seksi, dan seluruh gerak yang berhenti perlahan.</p>
    <p class="sc-note" style="margin-top: 24px">Tersedia mode terang dan gelap; contoh halaman nyata (dashboard, landing, auth) ada di bilah navigasi di atas.</p>

${section('Typography', `<p class="sc-note" style="margin-bottom: 40px">Cormorant Garamond (judul, angka, kutipan) &middot; Jost (isi, label, kontrol) &middot; IBM Plex Mono (pintasan, kode). Yang dikunci kit ini bukan sekadar tangga ukurannya, melainkan tidak adanya ukuran menengah: judul melompat besar-ringan, label mengecil dan diberi jarak lebar.</p>${TYPE_SCALE}
<hr class="tk-rule" style="margin: 48px 0">
<p class="tk-eyebrow">Perkakas editorial</p>
<div class="tk-prose">
    <p class="tk-body tk-drop-cap">Paragraf pembuka memakai <code class="tk-code">.tk-drop-cap</code>: huruf pertama diturunkan tiga baris dan diwarnai perunggu, seperti pembuka artikel cetak. Kolom ini dibatasi <code class="tk-code">.tk-prose</code> selebar 68 karakter &mdash; baris yang lebih panjang adalah tanda paling cepat bahwa sebuah halaman tidak dirancang untuk dibaca.</p>
    <blockquote class="tk-quote">Kutipan memakai <code class="tk-code">.tk-quote</code>: serif miring besar dengan satu garis emas di sisi kiri, tanpa tanda kutip gambar.</blockquote>
    <p class="tk-caption">Label rubrik di atas judul memakai .tk-eyebrow</p>
</div>`)}
${section('Color Palette', `<div class="sc-grid">${SWATCHES}</div><p class="sc-note" style="margin-top: 24px">Kanvas alabaster hangat dengan tinta noir. Perunggu tua dipakai untuk aksi karena cukup gelap untuk memikul teks terang; champagne dipakai untuk garis dan tanda, tidak pernah sebagai bidang besar. Nilai heksa di atas adalah mode terang &mdash; mode gelap menimpanya di blok <code class="tk-code">[data-tk-theme="dark"]</code>.</p>`)}
${section('Spacing System', `${SPACES}<p class="sc-note" style="margin-top: 24px">Tangga jarak biasa, dengan satu pengecualian yang menentukan wajah kit: <code class="tk-code">--tk-space-section</code> bernilai 176px &mdash; jarak antar seksi tertinggi di katalog. Di layar sempit ia turun ke 96px lewat media query, karena whitespace yang tidak diturunkan hanya menghasilkan rangkaian layar kosong.</p>`)}
${section('Border Radius', `<div class="sc-row" style="gap: 32px">${RADII}</div><p class="sc-note" style="margin-top: 24px">Semua radius bernilai nol: tepi tajam seperti potongan kertas. <code class="tk-code">--tk-radius-full</code> tetap didefinisikan karena kontrol bundar (radio, kenop toggle, spinner) membacanya.</p>`)}
${section('Shadow System', `<div class="sc-row" style="gap: 32px">${SHADOWS}</div><p class="sc-note" style="margin-top: 24px">Bayangan kecil sengaja <code class="tk-code">none</code>: kartu datar dipisah garis rambut, bukan diangkat. Dua bayangan sisanya lebar dan sangat pucat, dan hanya dipakai lapisan melayang &mdash; menu select, dropdown, modal, laci.</p>`)}
${section('Iconography', `<div class="sc-row">${ICONS}</div><p class="sc-note" style="margin-top: 16px">Iconify, set <code class="tk-code">material-symbols-light</code> &mdash; Material Symbols pada bobot paling tipis, dipilih supaya garis ikon tidak pernah lebih berat daripada goresan halus serifnya. Tulis <code class="tk-code">&lt;iconify-icon icon="material-symbols-light:nama"&gt;</code>; ratusan ribu ikon lain tetap tersedia dari set berbeda bila subjeknya menuntut.</p>`)}
${section('Design Language', `<div class="sc-row"><span class="tk-badge">Editorial mewah</span><span class="tk-badge">Serif kontras tinggi</span><span class="tk-badge">Emas sebagai garis</span><span class="tk-badge">Gerak lambat</span><span class="tk-badge">Whitespace 176px</span><span class="tk-badge">Fotografi premium</span></div>
<p class="sc-note" style="margin-top: 32px">Lima keputusan yang saling mengunci: <strong>satu</strong>, dua huruf berkontras ekstrem tanpa ukuran menengah &mdash; Cormorant Garamond besar dan ringan berhadapan dengan Jost kecil beruppercase berjarak 0.24em. <strong>Dua</strong>, emas champagne adalah garis, bukan bidang: ia muncul sebagai garis rambut 1px, garis bawah, dan tepi atas menu, karena emas sebagai latar justru membuat halaman terlihat murah. <strong>Tiga</strong>, gerak lambat &mdash; transisi 420ms, foto membesar 1200ms, seksi naik 900ms. <strong>Empat</strong>, whitespace adalah struktur, bukan sisa. <strong>Lima</strong>, tanpa radius dan nyaris tanpa bayangan; kedalaman datang dari tipografi dan garis.</p>
<div class="sc-motion">
    <div>
        <p class="tk-caption" style="margin-bottom: 12px">.tk-gild &mdash; arahkan kursor, garisnya tumbuh 620ms</p>
        <a class="tk-gild tk-body-lg" href="#">Lihat detail karya</a>
    </div>
    <div>
        <p class="tk-caption" style="margin-bottom: 12px">.tk-reveal &mdash; naik 900ms, bertingkat</p>
        <p class="tk-h4 tk-reveal" style="margin: 0">Baris pertama</p>
        <p class="tk-h4 tk-reveal tk-reveal-2" style="margin: 0">Baris kedua</p>
        <p class="tk-h4 tk-reveal tk-reveal-3" style="margin: 0">Baris ketiga</p>
    </div>
    <div class="sc-plate-demo">
        <p class="tk-caption" style="margin-bottom: 12px">.tk-plate &mdash; garis emas di dalam tepi, zoom 1200ms</p>
        <figure class="tk-plate" style="margin: 0"><img src="https://placehold.co/720x540/F2EDE4/6F6656?text=Fotografi" alt="Contoh fotografi di dalam plate"></figure>
        <p class="tk-plate-caption">Keterangan foto berhuruf serif miring.</p>
    </div>
</div>
<p class="sc-note" style="margin-top: 24px">Seluruh gerak di atas dimatikan &mdash; bukan dipercepat &mdash; saat sistem meminta <code class="tk-code">prefers-reduced-motion: reduce</code>.</p>`)}
${section('Buttons', `<div class="sc-row">${c['components/button.html']}</div><p class="sc-note" style="margin-top: 24px">Label tombol beruppercase berjarak 0.24em, dan padding kanannya sengaja lebih kecil daripada kiri: jarak huruf menyisakan celah di ujung kata, dan tanpa koreksi itu label tampak melenceng.</p>`)}
${section('Input & Form', `<div class="sc-col">${c['components/form.html']}</div>
<p class="sc-note" style="margin: 24px 0 0">Field bukan kotak: hanya satu garis rambut di bawahnya, seperti kolom isian pada kartu undangan &mdash; dan garis itu berubah emas saat fokus.</p>
<p class="tk-caption" style="margin: 40px 0 16px">Search bar &mdash; ikon dan pintasan menyatu di dalam field</p><div style="max-width: 480px">${c['components/search.html']}</div>
<p class="tk-caption" style="margin: 40px 0 16px">Select custom (ditampilkan terbuka) &mdash; satu pilihan &middot; dengan pencarian &middot; multi dengan checkbox &amp; aksi</p><div class="sc-row" style="align-items: flex-start; gap: 32px; min-height: 360px">${c['components/select.html'].split('<div class="tk-select">').join('<div class="tk-select tk-select-open" style="width: 260px">')}</div>
<p class="tk-caption" style="margin: 0 0 16px">Dropdown aksi (ditampilkan terbuka; aslinya terbuka saat trigger diklik)</p><div style="min-height: 260px">${c['components/dropdown.html'].replace('class="tk-dropdown"', 'class="tk-dropdown tk-dropdown-open"')}</div>
<p class="sc-note">Semua kontrol digambar sendiri &mdash; select, checkbox, radio, dan toggle tidak memakai tampilan bawaan browser, sehingga semuanya ikut token dan ikut tema.</p>`)}
${section('Login & Register', `<p class="sc-note" style="margin-bottom: 24px">Kartu auth dirakit murni dari komponen form kit &mdash; bagian dari paket Komponen. Halaman penuhnya (web &amp; ponsel lewat saklar perangkat) ada di <a class="tk-link" href="examples/login.html">examples/login.html</a> dan <a class="tk-link" href="examples/register.html">examples/register.html</a>.</p><div class="sc-auth-grid">${authCard(AUTH_LOGIN_FORM)}${authCard(AUTH_REGISTER_FORM)}</div>`)}
${section('Card Components', `<div class="tk-grid tk-grid-2" style="align-items: start">${c['components/card.html']}<div class="tk-card"><div class="tk-card-body" style="text-align: center"><div class="tk-feature-icon" style="margin: 0 auto 20px">${icon('person', 22)}</div><p class="tk-h4" style="margin: 0">Anindita Kusuma</p><p class="tk-caption">Kepala Atelier</p></div></div></div>
<p class="sc-note" style="margin-top: 24px">Empat bentuk kartu: kartu berbingkai, kartu statistik dengan angka serif ringan, kartu telanjang <code class="tk-code">.tk-card-bare</code> yang hanya dibuka garis rambut untuk grid katalog dan daftar artikel, serta kartu profil. Fotografi di dalamnya selalu memakai <code class="tk-code">.tk-plate</code>.</p>`)}
${section('Navigation', `<div class="sc-col" style="max-width: none">${c['components/navigation.html'].replace('<aside', `<nav class="tk-navbar tk-navbar-dark"><span class="tk-navbar-brand">LOGO</span><a class="tk-navbar-link tk-navbar-link-active" href="#">Home</a><a class="tk-navbar-link" href="#">Koleksi</a><a class="tk-navbar-link" href="#">Jurnal</a><button class="tk-btn tk-btn-secondary tk-btn-sm">Masuk</button></nav><aside`)}
<div class="tk-sidebar tk-sidebar-collapsed" style="height: 220px">
    <span class="tk-sidebar-group">Umum</span>
    <a class="tk-sidebar-item tk-sidebar-item-active" href="#">${icon('dashboard', 18)} <span class="tk-sidebar-label">Dashboard</span></a>
    <a class="tk-sidebar-item" href="#">${icon('folder', 18)} <span class="tk-sidebar-label">Proyek</span></a>
    <a class="tk-sidebar-item" href="#">${icon('settings', 18)} <span class="tk-sidebar-label">Pengaturan</span></a>
</div></div>
<p class="sc-note" style="margin-top: 24px">Navbar gelap memakai tinta noir dengan garis bawah champagne redup. Sidebar di kanan digambar dalam keadaan tercuit (<code class="tk-code">.tk-sidebar-collapsed</code>): label dan grup menghilang, menyisakan rel ikon.</p>`)}
${section('Tabs & Segmented', `<div class="sc-col">${c['components/tabs.html']}</div>`)}
${section('Badges & Chips', `<div class="sc-row">${c['components/badge.html']}</div><p class="sc-note" style="margin-top: 24px">Badge dan chip bertepi garis, bukan berisian pekat &mdash; hanya varian semantik yang membawa latar lembutnya sendiri.</p>`)}
${section('Feedback & Alerts', `<div class="sc-col">${c['components/alert.html']}</div>`)}
${section('Layout Options', `<p class="tk-caption" style="margin-bottom: 16px">Grid 12 / 4 / 3 / 2 kolom pada lebar konten --tk-container (1180px)</p><div class="tk-grid tk-grid-12" style="margin-bottom: 20px">${'<div class="sc-cell"></div>'.repeat(12)}</div><div class="tk-grid tk-grid-4" style="margin-bottom: 20px">${'<div class="sc-cell"></div>'.repeat(4)}</div><div class="tk-grid tk-grid-3" style="margin-bottom: 20px">${'<div class="sc-cell"></div>'.repeat(3)}</div><div class="tk-grid tk-grid-2">${'<div class="sc-cell"></div>'.repeat(2)}</div>`)}
${section('Content Blocks', c['components/content-blocks.html'])}
${section('Data Display', `<p class="tk-caption" style="margin-bottom: 16px">Advanced filter &mdash; pencarian, dua select custom, tombol filter berpenanda jumlah, chip filter aktif</p>${c['components/filter.html']}<div style="margin-top: 40px">${c['components/table.html'].replace('<nav class="tk-pagination">', '<nav class="tk-pagination" style="margin-top: 24px">')}</div><p class="sc-note" style="margin-top: 16px">Kolom Aksi rata kanan: ikon langsung (lihat &middot; edit &middot; hapus) untuk aksi sedikit, atau menu &hellip; bila aksinya banyak. Angka di sel tabel memakai lebar tetap (<code class="tk-code">tabular-nums</code>) supaya kolomnya rata.</p>`)}
${section('Charts', `<p class="sc-note" style="margin-bottom: 16px">Chart.js &mdash; pustaka chart tunggal untuk semua kit. Warnanya dibaca dari token kit saat digambar, jadi chart ikut berganti saat tema berganti; isian pucatnya dihitung <code class="tk-code">color-mix()</code> dari token, bukan ditanam heksa.</p><div class="tk-grid tk-grid-3"><div class="tk-card"><div class="tk-card-body"><p class="tk-eyebrow">Musim ini</p><p class="tk-h4" style="margin: 0 0 20px">Kunjungan Salon</p><div class="sc-chart-box"><canvas id="sc-chart-line"></canvas></div></div></div><div class="tk-card"><div class="tk-card-body"><p class="tk-eyebrow">Empat musim</p><p class="tk-h4" style="margin: 0 0 20px">Karya Selesai</p><div class="sc-chart-box"><canvas id="sc-chart-bar"></canvas></div></div></div><div class="tk-card"><div class="tk-card-body"><p class="tk-eyebrow">Komposisi</p><p class="tk-h4" style="margin: 0 0 20px">Jenis Pesanan</p><div class="sc-chart-box"><canvas id="sc-chart-doughnut"></canvas></div></div></div></div>`)}
${section('Modal & Overlay', `<div class="sc-overlay-demo">${c['components/modal.html']}</div>
<div class="sc-overlay-demo" style="margin-top: 32px">
    <div class="tk-drawer">
        <div class="tk-card-header"><p class="tk-eyebrow">Detail</p><h3 class="tk-h3" style="margin: 0">Laci Samping</h3></div>
        <div class="tk-card-body tk-body-sm tk-muted">Laci memakai tepi kiri bergaris rambut dan bayangan lebar yang sama dengan modal, sehingga keduanya terbaca sebagai satu lapisan melayang.</div>
        <div class="tk-card-footer"><button class="tk-btn tk-btn-primary tk-btn-sm">Simpan</button><button class="tk-btn tk-btn-ghost tk-btn-sm">Tutup</button></div>
    </div>
</div>
<p class="sc-note" style="margin-top: 24px">Keduanya digambar terbuka secara statis; di halaman sungguhan buka/tutup dikelola JS lewat kelas state.</p>`)}
${section('Loading States', `<div class="sc-row" style="gap: 48px">${c['components/loading.html'].replace('<div class="tk-progress">', '<div class="tk-progress" style="width: 280px">')}</div><p class="sc-note" style="margin-top: 24px">Pemuat pun bergerak lambat: satu putaran spinner butuh 1,4 detik dan kilau skeleton 2,6 detik &mdash; konsisten dengan seluruh gerak kit, dan keduanya berhenti saat sistem meminta gerak dikurangi.</p>`)}
${section('Empty States', `<div style="max-width: 460px">${c['components/empty.html']}</div>`)}

</div>
${CHART_HELPER_SCRIPT}
<script>
${LUX_CHART_MIX}
var scLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
tkChart('sc-chart-line', function (t) {
    return {
        type: 'line',
        data: { labels: scLabels, datasets: [{ label: 'Kunjungan', data: [42, 51, 48, 63, 71, 84], borderColor: t.primary, backgroundColor: lxSoft(t.accent, 18), fill: true, tension: 0.3, pointRadius: 3, pointBackgroundColor: t.surface, pointBorderColor: t.accent, borderWidth: 1.5 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: lxSoft(t.border, 70) }, border: { display: false } }, x: { grid: { display: false }, border: { color: t.border } } } }
    };
});
tkChart('sc-chart-bar', function (t) {
    return {
        type: 'bar',
        data: { labels: ['2023', '2024', '2025', '2026'], datasets: [{ label: 'Karya', data: [820, 980, 1180, 1400], backgroundColor: [lxSoft(t.accent, 30), lxSoft(t.accent, 50), lxSoft(t.accent, 75), t.accent], borderRadius: 0, maxBarThickness: 44 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: lxSoft(t.border, 70) }, border: { display: false } }, x: { grid: { display: false }, border: { color: t.border } } } }
    };
});
tkChart('sc-chart-doughnut', function (t) {
    return {
        type: 'doughnut',
        data: { labels: ['Couture', 'Siap pakai', 'Perbaikan', 'Arsip'], datasets: [{ data: [46, 28, 17, 9], backgroundColor: [t.primary, t.accent, lxSoft(t.accent, 45), lxSoft(t.text, 22)], borderColor: t.surface, borderWidth: 1 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '72%', plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, boxHeight: 10, padding: 16 } } } }
    };
});
</script>
</body>
</html>
`;
