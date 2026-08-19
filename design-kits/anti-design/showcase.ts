/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len, @typescript-eslint/quotes */

import { ANTI_DESIGN_COMPONENTS } from './components';
import { AUTH_CSS, AUTH_LOGIN_FORM, AUTH_REGISTER_FORM } from './examples';
// Perancah pratinjau (bilah navigasi sticky, helper chart) kit-agnostik dan sengaja dipakai
// bersama; rumahnya masih di folder kit pertama sampai ada alasan memindahkannya.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

/**
 * `showcase.html` kit Anti-Design: lembar peraga 22 seksi sesuai §6 kontrak — termasuk
 * Login & Register, yang merupakan bagian paket Komponen (bukan tampilan tersendiri di navigasi).
 *
 * Kit ini satu-tema (terang bawaan) sehingga exNav dipanggil dengan `themeToggle: false`.
 *
 * Seksi komponennya dirakit dari fragmen `components/` yang sama persis dengan yang akan disalin
 * agen — bukan salinan tersendiri — supaya pratinjau tidak pernah menyimpang dari komponen
 * sebenarnya. Kelas `sc-*` hanyalah perancah lembar peraganya dan bukan bagian dari kontrak kit.
 */

const c = ANTI_DESIGN_COMPONENTS;

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
    ['primary', '#EE0055'], ['primary-hover', '#7A00C4'], ['primary-contrast', '#E6FF00'],
    ['secondary', '#0000EE'], ['accent', '#00E1B4'], ['background', '#D8DC2E'],
    ['surface', '#FFFFFF'], ['surface-2', '#C0C0C0'], ['text', '#12100A'],
    ['text-muted', '#6B2A5E'], ['success', '#007A3D'], ['warning', '#A34D00'],
    ['danger', '#C4001B'], ['info', '#0000EE']
].map(([name, hex]) =>
    `<div class="sc-swatch"><div class="sc-swatch-fill" style="background: var(--tk-color-${name})"></div><span>${name}</span><code>${hex}</code></div>`
).join('');

const TYPE_SCALE = [
    ['Display', 'tk-display', '112px'], ['Heading 1', 'tk-h1', '40px'], ['Heading 2', 'tk-h2', '62px'],
    ['Heading 3', 'tk-h3', '19px'], ['Heading 4', 'tk-h4', '29px'], ['Title', 'tk-title', '15px'],
    ['Body', 'tk-body', '16px'], ['Body Small', 'tk-body-sm', '14px'], ['Caption', 'tk-caption', '13px']
].map(([label, cls, size]) =>
    `<div class="sc-type-row"><span class="sc-type-meta">${label} &middot; ${size}</span><p class="${cls}" style="margin: 0">Aa &mdash; Salah Itu Benar</p></div>`
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

const ICONS = ['home-broken', 'magnifier-broken', 'user-broken', 'settings-broken', 'bell-broken',
    'heart-broken', 'star-broken', 'trash-bin-trash-broken', 'pen-broken', 'check-read-broken',
    'close-circle-broken', 'add-circle-broken', 'arrow-right-broken', 'bolt-broken',
    'calendar-broken', 'letter-broken', 'lock-broken', 'ghost-broken']
    .map(name => `<span class="sc-icon" title="solar:${name}"><iconify-icon icon="solar:${name}" width="24" height="24"></iconify-icon></span>`)
    .join('');

export const ANTI_DESIGN_SHOWCASE = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Anti-Design — Design Kit Showcase</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,700;1,400&family=Comic+Neue:wght@400;700&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Tinos:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<script src="https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"></script>
<script src="${CHARTJS_SCRIPT}"></script>
<style>
    ${EX_NAV_CSS}
</style>
<style>
    /* Perancah lembar peraga (sc-*): bukan bagian kontrak kit. */
    .sc-wrap { max-width: 1137px; margin: 0 auto; padding: 53px 26px 96px; }
    .sc-kit-title { font-family: var(--tk-font-mono); font-size: 13px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--tk-color-text-muted); margin: 0 0 9px; }
    .sc-section { margin-top: 71px; }
    /* Judul seksi ditempel serong seperti stiker, bukan diletakkan rapi. */
    .sc-heading { display: inline-block; font-family: var(--tk-ad-wrong); font-size: 19px; font-weight: 700; color: var(--tk-color-text); background: var(--tk-color-primary-contrast); border: 3px solid var(--tk-color-border); border-bottom-width: 7px; border-radius: var(--tk-radius-sm); padding: 6px 21px 8px 13px; margin: 0 0 29px; transform: rotate(-1.9deg); }
    .sc-row { display: flex; flex-wrap: wrap; gap: 17px; align-items: center; }
    .sc-col { display: flex; flex-direction: column; gap: 15px; max-width: 480px; }
    .sc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 19px; }
    .sc-swatch { font-size: 13px; display: flex; flex-direction: column; gap: 4px; }
    .sc-swatch code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); font-size: 12px; }
    .sc-swatch-fill { height: 58px; border: 3px solid var(--tk-color-border); border-radius: var(--tk-radius-sm); }
    .sc-swatch:nth-child(odd) .sc-swatch-fill { transform: rotate(-1.6deg); }
    .sc-swatch:nth-child(even) .sc-swatch-fill { transform: rotate(1.3deg); }
    .sc-type-row { display: flex; align-items: baseline; gap: 27px; margin-bottom: 19px; }
    .sc-type-meta { width: 140px; flex: none; font-family: var(--tk-font-mono); font-size: 12px; color: var(--tk-color-text-muted); }
    .sc-space-row { display: flex; align-items: center; gap: 15px; margin-bottom: 9px; font-size: 13px; }
    .sc-space-row code { width: 124px; color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); font-size: 12px; }
    .sc-space-bar { height: 15px; background: var(--tk-color-primary); border: 2px solid var(--tk-color-border); }
    .sc-radius-item { display: flex; flex-direction: column; align-items: center; gap: 9px; font-size: 12px; }
    .sc-radius-item code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-radius-box { width: 132px; height: 78px; background: var(--tk-color-accent); border: 3px solid var(--tk-color-border); }
    .sc-radius-box-pill { height: 44px; margin-top: 17px; }
    .sc-shadow-box { width: 144px; height: 96px; background: var(--tk-color-surface); border: 3px solid var(--tk-color-border); border-radius: var(--tk-radius-sm); display: flex; align-items: flex-end; padding: 9px; font-size: 12px; }
    .sc-shadow-box code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-icon { color: var(--tk-color-text); background: var(--tk-color-surface); border: 3px solid var(--tk-color-border); border-radius: var(--tk-radius-sm); padding: 11px; display: inline-flex; }
    .sc-icon:nth-child(3n) { transform: rotate(-7deg); background: var(--tk-color-warning-soft); }
    .sc-icon:nth-child(4n) { transform: rotate(5deg); }
    .sc-cell { background: var(--tk-color-secondary); border: 2px solid var(--tk-color-border); height: 53px; }
    .sc-overlay-demo { position: relative; height: 340px; overflow: hidden; border: 3px solid var(--tk-color-border); }
    .sc-overlay-demo .tk-modal-backdrop, .sc-overlay-demo .tk-drawer { position: absolute; }
    .sc-chart-box { position: relative; height: 200px; }
    .sc-auth-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 424px)); gap: 38px; align-items: start; }
    /* Papan bahasa desain: delapan perkakas perusak berdampingan. */
    .sc-lang { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 38px 26px; align-items: start; }
    .sc-lang-note { display: block; margin-top: 11px; }
    .sc-lang-box { position: relative; background: var(--tk-color-surface); border: 3px solid var(--tk-color-border); border-radius: var(--tk-radius); padding: 21px 15px; text-align: center; font-weight: 700; }
    .sc-lang-stack { position: relative; }
    .sc-lang-stack .sc-lang-box:last-child { background: var(--tk-color-accent); }
    /* Kartu di showcase tidak dijinakkan seperti di dashboard — di sini justru
       kemiringannya yang sedang dipamerkan. */
    .sc-plain-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
    @media (max-width: 860px) {
        .sc-plain-grid { grid-template-columns: 1fr; }
        .sc-type-row { flex-direction: column; gap: 4px; }
        .sc-type-meta { width: auto; }
    }
</style>
<style>
${AUTH_CSS}
</style>
</head>
<body>
${exNav('Anti-Design', 'components', '', { themeToggle: false })}
<div class="sc-wrap">
    <p class="sc-kit-title">TOKENAI Design Kit</p>
    <h1 class="tk-h2" style="margin: 0">Anti-Design</h1>
    <p class="tk-body-lg" style="margin-top: 15px; max-width: 820px">Kit yang melanggar aturannya sendiri dengan sengaja. Tangga ukuran judulnya tidak menaik &mdash; <code class="tk-code">.tk-h2</code> lebih besar daripada <code class="tk-code">.tk-h1</code>, <code class="tk-code">.tk-h4</code> lebih besar daripada <code class="tk-code">.tk-h3</code>. Sudut tiap kotak berbeda di keempat penjurunya karena token radiusnya bernilai empat sekaligus. Garis berbeda tebal di tiap sisi, dan bayangannya jatuh ke arah yang saling menyangkal seperti ada dua matahari di ruangan. Warnanya sepasang-sepasang bertabrakan: merah muda menyala di atas kuning mustard, biru tautan bawaan browser, dan latar alert yang justru melawan artinya. Hurufnya tiga klon paling default di web &mdash; Tinos, Arimo, Courier Prime &mdash; plus Comic Neue yang memang sengaja salah tempat; tiap varian tombol memakai keluarga huruf yang berbeda. Yang <em>tidak</em> dilanggar: kontrasnya tetap terbaca, target kliknya tetap besar, dan seluruh nilai tetap tinggal di <code class="tk-code">:root</code>. Kekacauan ini dirancang, bukan kecelakaan.</p>

${section('Typography', `<p class="tk-caption" style="margin-bottom: 29px">Tinos (judul, klon Times) &middot; Arimo (teks, klon Arial) &middot; Courier Prime (mono) &middot; Comic Neue (yang sengaja salah) &mdash; perhatikan tangganya tidak menaik</p>${TYPE_SCALE}<p class="tk-body-sm tk-muted" style="margin-top: 21px">Tiap tingkat judul diperlakukan berbeda: display dijejalkan rapat, h1 direnggangkan lebar-lebar, h3 memakai mono, h4 miring. Tidak ada satu aturan yang berlaku untuk semuanya &mdash; itulah aturannya.</p>`)}
${section('Color Palette', `<div class="sc-grid">${SWATCHES}</div><p class="tk-caption" style="margin-top: 19px">Pasangannya sengaja bergetar: merah muda di atas mustard, kuning limau di atas merah muda, biru tautan bawaan browser tanpa dipermak. Latar lembut warna semantik malah melawan artinya &mdash; sukses berlatar merah muda, bahaya berlatar hijau &mdash; tetapi teksnya tetap kontras dan terbaca.</p>`)}
${section('Spacing System', `${SPACES}<p class="tk-caption" style="margin-top: 15px">Angkanya lepas dari kelipatan 4 dan 8 (3, 9, 15, 26, 38, 53, 79) supaya tidak ada satu pun elemen yang benar-benar duduk di kisi.</p>`)}
${section('Border Radius', `<div class="sc-row" style="gap: 29px">${RADII}</div><p class="tk-caption" style="margin-top: 15px">Token radiusnya bernilai empat penjuru sekaligus &mdash; <code class="tk-code">19px 2px 24px 4px</code> &mdash; jadi tiap sudut kotak berbeda dan tidak ada bentuk yang benar-benar simetris.</p>`)}
${section('Shadow System', `<div class="sc-row" style="gap: 38px">${SHADOWS}</div><p class="tk-caption" style="margin-top: 15px">Tiga bayangan, tiga arah cahaya berbeda: yang kecil jatuh ke kanan atas, yang sedang ke kiri bawah, yang besar ke dua arah sekaligus dengan dua warna berbeda.</p>`)}
${section('Iconography', `<div class="sc-row">${ICONS}</div><p class="tk-caption">Iconify, set <code>solar</code> gaya <code>-broken</code> &mdash; tulis <code>&lt;iconify-icon icon="solar:nama-broken"&gt;</code>. Garis ikonnya memang terputus-putus di beberapa titik: satu-satunya set yang secara harfiah sudah rusak sejak digambar. Ratusan ribu ikon lain tersedia dengan set berbeda bila perlu.</p>`)}
${section('Design Language', `<div class="sc-lang">
    <div>
        <div class="sc-lang-box tk-tilt">Miring</div>
        <span class="tk-caption sc-lang-note"><code class="tk-code">.tk-tilt</code> &mdash; miringkan apa saja</span>
    </div>
    <div>
        <div class="sc-lang-box tk-offgrid">Lepas sumbu</div>
        <span class="tk-caption sc-lang-note"><code class="tk-code">.tk-offgrid</code> &mdash; geser keluar tempatnya</span>
    </div>
    <div class="sc-lang-stack">
        <div class="sc-lang-box">Di bawah</div>
        <div class="sc-lang-box tk-overlap">Menabrak</div>
        <span class="tk-caption sc-lang-note"><code class="tk-code">.tk-overlap</code> &mdash; tabrakkan dengan tetangganya</span>
    </div>
    <div>
        <div class="sc-lang-box" style="text-align: left">Harga <span class="tk-oversize">99</span> ribu</div>
        <span class="tk-caption sc-lang-note"><code class="tk-code">.tk-oversize</code> &mdash; ukuran yang tidak proporsional</span>
    </div>
    <div>
        <div class="tk-clash">Warna yang bergetar</div>
        <span class="tk-caption sc-lang-note"><code class="tk-code">.tk-clash</code> &mdash; sepasang warna yang bertabrakan</span>
    </div>
    <div>
        <div class="sc-lang-box tk-wrong">Huruf yang salah tempat</div>
        <span class="tk-caption sc-lang-note"><code class="tk-code">.tk-wrong</code> &mdash; Comic Neue, sengaja</span>
    </div>
    <div>
        <div class="sc-lang-box"><span class="tk-squish">Dipenyet mendatar</span></div>
        <span class="tk-caption sc-lang-note"><code class="tk-code">.tk-squish</code> &mdash; proporsi huruf dirusak</span>
    </div>
    <div>
        <div class="sc-lang-box"><span class="tk-sticker">tempel</span>Ada stiker di pojok</div>
        <span class="tk-caption sc-lang-note"><code class="tk-code">.tk-sticker</code> &mdash; label yang menutupi tetangganya</span>
    </div>
</div>
<p class="tk-body-sm tk-muted" style="margin: 38px 0 0; max-width: 720px">Delapan perkakas ini dipakai hemat: kalau semuanya miring, tidak ada lagi yang terasa miring. Aturan praktisnya &mdash; satu halaman cukup dua sampai tiga di antaranya, dan jangan pernah dipasang di tabel atau formulir panjang yang harus dibaca berurutan.</p>`)}
${section('Buttons', `<div class="sc-row" style="gap: 21px">${c['components/button.html']}</div><p class="tk-caption" style="margin-top: 21px">Tiap varian memakai keluarga huruf berbeda: primary bertulisan Tinos kapital, secondary bertulisan Courier, outline bertulisan Comic Neue. Kemiringannya berbalik arah saat disorot, bukan hilang.</p>`)}
${section('Input &amp; Form', `<div class="sc-col">${c['components/form.html']}</div><p class="tk-caption" style="margin: 29px 0 15px">Search bar &mdash; ikon dan pintasan menyatu di dalam field</p><div style="max-width: 480px">${c['components/search.html']}</div><p class="tk-caption" style="margin: 29px 0 15px">Select custom (ditampilkan terbuka) &mdash; satu pilihan &middot; dengan pencarian &middot; multi dengan checkbox &amp; aksi. Listbox digambar kit, bukan popup bawaan browser.</p><div class="sc-row" style="align-items: flex-start; gap: 26px; min-height: 350px">${c['components/select.html'].split('<div class="tk-select">').join('<div class="tk-select tk-select-open" style="width: 250px">')}</div><p class="tk-caption" style="margin: 0 0 15px">Dropdown aksi (ditampilkan terbuka; aslinya terbuka saat trigger diklik)</p><div style="min-height: 250px">${c['components/dropdown.html'].replace('class="tk-dropdown"', 'class="tk-dropdown tk-dropdown-open"')}</div><p class="tk-caption">Label rata kanan, isian rata kiri, teks bantuan rata tengah: tiga perataan dalam satu field. Kenop toggle sengaja lebih tinggi daripada relnya sehingga menyembul keluar.</p>`)}
${section('Login &amp; Register', `<p class="tk-caption" style="margin-bottom: 19px">Kartu auth dirakit murni dari komponen form kit &mdash; bagian dari paket Komponen. Halaman penuhnya (web &amp; ponsel lewat saklar perangkat) ada di <a class="tk-link" href="examples/login.html">examples/login.html</a> dan <a class="tk-link" href="examples/register.html">examples/register.html</a>.</p><div class="sc-auth-grid">${authCard(AUTH_LOGIN_FORM)}${authCard(AUTH_REGISTER_FORM)}</div>`)}
${section('Card Components', `<div class="sc-plain-grid">${c['components/card.html']}<div class="tk-card"><img src="https://placehold.co/640x400/EE0055/E6FF00?text=GAMBAR" alt="Contoh gambar kartu"><div class="tk-card-body"><p class="tk-caption tk-wrong" style="margin: 0 0 6px">kategori</p><h3 class="tk-title" style="margin: 0 0 5px">Kartu Bergambar</h3><p class="tk-body-sm tk-muted" style="margin: 0">Kepala kartu rata kanan, badannya rata kiri.</p></div></div><div class="tk-card"><span class="tk-sticker">baru</span><div class="tk-card-body" style="text-align: center"><div class="tk-feature-icon" style="margin: 0 auto 15px"><iconify-icon icon="solar:user-broken" width="24" height="24"></iconify-icon></div><p class="tk-h4" style="margin: 0">Jane Doe</p><p class="tk-caption">Perusak Utama</p></div></div></div><p class="tk-caption" style="margin-top: 21px">Kartu miring sejak diam, dan saat disorot ia justru miring ke arah sebaliknya &mdash; bukan naik dengan sopan.</p>`)}
${section('Navigation', `<div class="sc-col" style="max-width: none">${c['components/navigation.html'].replace('<aside', '<nav class="tk-navbar tk-navbar-dark"><span class="tk-navbar-brand">Logo</span><a class="tk-navbar-link tk-navbar-link-active" href="#">Beranda</a><a class="tk-navbar-link" href="#">Produk</a><button class="tk-btn tk-btn-outline tk-btn-sm">Masuk</button></nav><aside')}</div><p class="tk-caption" style="margin-top: 15px">Butir navigasi tidak duduk di satu garis: yang genap terangkat, yang ganjil turun. Butir sidebar yang genap menjorok masuk sendiri.</p>`)}
${section('Tabs &amp; Segmented', `<div class="sc-col">${c['components/tabs.html']}</div><p class="tk-caption" style="margin-top: 15px">Tab aktif ditandai bukan oleh garis bawah, tapi oleh kemiringan paling besar di antara saudaranya.</p>`)}
${section('Badges &amp; Chips', `<div class="sc-row">${c['components/badge.html']}</div><p class="tk-caption" style="margin-top: 15px">Tiap badge miring ke derajat yang berbeda &mdash; tidak ada dua yang sama.</p>`)}
${section('Feedback &amp; Alerts', `<div class="sc-col">${c['components/alert.html']}</div><p class="tk-caption" style="margin-top: 15px">Latar tiap alert memakai warna yang melawan artinya; ikon, judul, dan garis kirinya yang memegang makna sebenarnya.</p>`)}
${section('Layout Options', `<p class="tk-caption" style="margin-bottom: 15px">Grid 12 / 3 / 2 kolom pada lebar konten --tk-container (1137px, sengaja bukan angka bulat)</p><div class="tk-grid tk-grid-12" style="margin-bottom: 15px">${'<div class="sc-cell"></div>'.repeat(12)}</div><div class="tk-grid tk-grid-3" style="margin-bottom: 15px">${'<div class="sc-cell"></div>'.repeat(3)}</div><div class="tk-grid tk-grid-2">${'<div class="sc-cell"></div>'.repeat(2)}</div>`)}
${section('Content Blocks', c['components/content-blocks.html'])}
${section('Data Display', `<p class="tk-caption" style="margin-bottom: 15px">Advanced filter &mdash; pencarian, dua select custom, tombol filter berpenanda jumlah, chip filter aktif</p>${c['components/filter.html']}<div style="margin-top: 29px">${c['components/table.html'].replace('<nav class="tk-pagination">', '<nav class="tk-pagination" style="margin-top: 19px">')}</div><p class="tk-caption" style="margin-top: 15px">Kepala tabel memakai Comic Neue huruf kecil, isinya Courier: satu tabel, dua dunia huruf yang tidak pernah dipasangkan orang waras. Barisnya tetap lurus &mdash; data harus tetap bisa dibaca.</p>`)}
${section('Charts', `<p class="tk-caption" style="margin-bottom: 15px">Chart.js &mdash; pustaka chart tunggal untuk semua kit. Warnanya dibaca dari token kit saat digambar, dan sengaja dipilih yang paling bertabrakan satu sama lain. Garis tren memakai mode stepped: naik patah-patah, bukan melengkung halus.</p><div class="sc-plain-grid"><div class="tk-card"><div class="tk-card-header"><p class="tk-h4" style="margin: 0">Pengunjung</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-line"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-h4" style="margin: 0">Pendapatan</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-bar"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-h4" style="margin: 0">Sumber Trafik</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-doughnut"></canvas></div></div></div></div>`)}
${section('Modal &amp; Overlay', `<div class="sc-overlay-demo">${c['components/modal.html']}</div><p class="tk-caption" style="margin-top: 15px">Modal tidak duduk di tengah: ia melenceng ke kiri atas dan miring, seolah baru saja digeser orang.</p>`)}
${section('Loading States', `<div class="sc-row" style="gap: 38px">${c['components/loading.html'].replace('<div class="tk-progress">', '<div class="tk-progress" style="width: 240px">')}</div><p class="tk-caption" style="margin-top: 15px">Spinner berputar patah-patah lewat <code class="tk-code">steps()</code>, dan bilah progres menyembul sedikit keluar dari petaknya sendiri.</p>`)}
${section('Empty States', `<div style="max-width: 460px">${c['components/empty.html']}</div><p class="tk-caption" style="margin-top: 15px">Keadaan kosong memakai garis putus-putus dan ikon yang miring tujuh derajat.</p>`)}

</div>
${CHART_HELPER_SCRIPT}
<script>
var scLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
tkChart('sc-chart-line', function (t) {
    return {
        type: 'line',
        data: { labels: scLabels, datasets: [{ label: 'Pengunjung', data: [4200, 5100, 4800, 6300, 7100, 8400], borderColor: t.primary, backgroundColor: t.accent + '55', fill: true, tension: 0, stepped: true, pointRadius: 5, pointStyle: 'rectRot', pointBackgroundColor: t.secondary, pointBorderColor: t.text, borderWidth: 4 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-bar', function (t) {
    return {
        type: 'bar',
        data: { labels: scLabels, datasets: [{ label: 'Pendapatan', data: [12, 19, 14, 22, 26, 31], backgroundColor: [t.primary, t.secondary, t.accent, t.warning, t.primary, t.secondary], borderColor: t.text, borderWidth: 3, maxBarThickness: 32 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-doughnut', function (t) {
    return {
        type: 'doughnut',
        data: { labels: ['Organik', 'Langsung', 'Sosial', 'Iklan'], datasets: [{ data: [42, 27, 19, 12], backgroundColor: [t.primary, t.accent, t.secondary, t.warning], borderColor: t.text, borderWidth: 3 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '46%', plugins: { legend: { position: 'bottom' } } }
    };
});
</script>
</body>
</html>
`;
