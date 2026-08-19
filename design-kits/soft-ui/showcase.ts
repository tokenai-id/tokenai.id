/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len, @typescript-eslint/quotes */

import { SOFT_UI_COMPONENTS } from './components';
import { AUTH_CSS, AUTH_LOGIN_FORM, AUTH_REGISTER_FORM } from './examples';
// Perancah pratinjau (bilah navigasi sticky, helper chart) kit-agnostik dan sengaja dipakai
// bersama; rumahnya masih di folder kit pertama sampai ada alasan memindahkannya.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

/**
 * `showcase.html` kit Soft UI: lembar peraga 22 seksi sesuai §6 kontrak — termasuk Login &
 * Register, yang merupakan bagian paket Komponen (bukan tampilan tersendiri di navigasi).
 *
 * Kit ini dua-mode, jadi saklar tema di bilah atas dibiarkan hidup. Yang menarik diperhatikan saat
 * ditekan: kanvas berpindah dari oat hangat ke arang hangat, tetapi aturan dasarnya tidak berubah
 * — kartu tetap satu tingkat lebih terang daripada latarnya.
 *
 * Seksi komponennya dirakit dari fragmen `components/` yang sama persis dengan yang akan disalin
 * agen — bukan salinan tersendiri — supaya pratinjau tidak pernah menyimpang dari komponen
 * sebenarnya. Kelas `sc-*` hanyalah perancah lembar peraganya dan bukan bagian dari kontrak kit.
 */

const c = SOFT_UI_COMPONENTS;

// Nomor seksi dihitung otomatis sesuai urutan render, supaya menyisipkan seksi baru tidak
// mengharuskan menomori ulang semua seksi di bawahnya.
let sectionCounter = 0;
function section(title: string, body: string): string {
    sectionCounter += 1;
    return `<section class="sc-section"><h2 class="sc-heading"><span class="sc-heading-num">${String(sectionCounter).padStart(2, '0')}</span> ${title}</h2>${body}</section>`;
}

function authCard(form: string): string {
    // Formulirnya ditulis untuk halaman di examples/ (taut antarhalaman relatif sesama folder);
    // di showcase yang hidup di akar arsip, taut itu harus menunjuk ke examples/.
    const rooted = form
        .replace('href="register.html"', 'href="examples/register.html"')
        .replace('href="login.html"', 'href="examples/login.html"');
    return `<div class="tk-card au-card" style="margin: 0"><div class="tk-card-body" style="padding: 32px"><div class="au-brand"><span class="tk-icon-tile"><iconify-icon icon="mage:stars-a" width="22" height="22"></iconify-icon></span> Logo</div>${rooted}</div></div>`;
}

const SWATCHES = [
    ['primary', '#3F7F6E'], ['primary-hover', '#356B5C'], ['secondary', '#EDEAE2'], ['accent', '#D98E5F'],
    ['background', '#F5F3EE'], ['surface', '#FFFFFF'], ['surface-2', '#F1EFE8'],
    ['text', '#2E2B26'], ['text-muted', '#6F6859'], ['border', '#E7E3D9'],
    ['success', '#4C8663'], ['success-soft', '#E4EFE7'], ['warning', '#A97C2C'], ['warning-soft', '#F6EEDC'],
    ['danger', '#BE5F55'], ['danger-soft', '#F8E7E4'], ['info', '#4B7695'], ['info-soft', '#E4EEF5']
].map(([name, hex]) =>
    `<div class="sc-swatch"><div class="sc-swatch-fill" style="background: var(--tk-color-${name})"></div><span>${name}</span><code>${hex}</code></div>`
).join('');

const TYPE_SCALE = [
    ['Display', 'tk-display', '58px'], ['Heading 1', 'tk-h1', '44px'], ['Heading 2', 'tk-h2', '32px'],
    ['Heading 3', 'tk-h3', '24px'], ['Heading 4', 'tk-h4', '19px'], ['Title', 'tk-title', '17px'],
    ['Body', 'tk-body', '16px'], ['Body Small', 'tk-body-sm', '14px'], ['Caption', 'tk-caption', '12px']
].map(([label, cls, size]) =>
    `<div class="sc-type-row"><span class="sc-type-meta">${label}<br>${size}</span><p class="${cls}" style="margin: 0">Aa &mdash; Tenang, bulat, lapang</p></div>`
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

const ICONS = ['home', 'search', 'user', 'settings', 'notification-bell', 'heart', 'star', 'trash-2',
    'edit', 'check-circle', 'x', 'plus', 'arrow-right', 'water-drop', 'moon', 'email', 'lock', 'goals']
    .map(name => `<span class="sc-icon" title="mage:${name}"><iconify-icon icon="mage:${name}" width="22" height="22"></iconify-icon></span>`)
    .join('');

export const SOFT_UI_SHOWCASE = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Soft UI — Design Kit Showcase</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@500;600;700&family=Lexend:wght@300;400;500;600&family=Overpass+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<script src="https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"></script>
<script src="${CHARTJS_SCRIPT}"></script>
<style>
    ${EX_NAV_CSS}
</style>
<style>
    /* Perancah lembar peraga (sc-*): bukan bagian kontrak kit. */
    .sc-wrap { max-width: 1200px; margin: 0 auto; padding: 56px 24px 128px; }
    .sc-kit-title { font-family: var(--tk-font-mono); font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--tk-color-text-muted); margin: 0 0 10px; }
    .sc-section { margin-top: 80px; }
    .sc-heading { display: flex; align-items: center; gap: 12px; font-size: 12px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--tk-color-text-muted); margin: 0 0 28px; }
    .sc-heading-num { display: inline-flex; align-items: center; justify-content: center; min-width: 26px; height: 26px; border-radius: var(--tk-radius-full); background: var(--tk-color-surface); box-shadow: var(--tk-shadow-sm); color: var(--tk-color-text); font-family: var(--tk-font-mono); font-size: 11px; }
    .sc-row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    .sc-col { display: flex; flex-direction: column; gap: 16px; max-width: 480px; }
    .sc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 18px; }
    .sc-swatch { font-size: 12px; display: flex; flex-direction: column; gap: 4px; }
    .sc-swatch code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); font-size: 11px; }
    .sc-swatch-fill { height: 56px; border-radius: var(--tk-radius); box-shadow: var(--tk-shadow-sm); }
    .sc-type-row { display: flex; align-items: baseline; gap: 28px; margin-bottom: 22px; padding-bottom: 22px; border-bottom: 1px solid var(--tk-color-border); }
    .sc-type-meta { width: 96px; flex: none; font-family: var(--tk-font-mono); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--tk-color-text-muted); line-height: 1.6; }
    .sc-space-row { display: flex; align-items: center; gap: 16px; margin-bottom: 10px; font-size: 12px; }
    .sc-space-row code { width: 140px; color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); font-size: 11px; }
    .sc-space-bar { height: 16px; border-radius: var(--tk-radius-full); background: var(--tk-color-primary); }
    .sc-radius-item { display: flex; flex-direction: column; align-items: center; gap: 10px; font-size: 11px; }
    .sc-radius-item code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-radius-box { width: 136px; height: 80px; background: var(--tk-color-surface); box-shadow: var(--tk-shadow-sm); }
    .sc-radius-box-pill { height: 44px; margin-top: 18px; }
    .sc-shadow-box { width: 148px; height: 96px; background: var(--tk-color-surface); border-radius: var(--tk-radius-lg); display: flex; align-items: flex-end; padding: 14px; font-size: 11px; }
    .sc-shadow-box code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-icon { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: var(--tk-radius-sm); background: var(--tk-color-surface); box-shadow: var(--tk-shadow-sm); color: var(--tk-color-text); }
    .sc-cell { background: var(--tk-color-surface); border-radius: var(--tk-radius-sm); box-shadow: var(--tk-shadow-sm); height: 48px; }
    .sc-overlay-demo { position: relative; height: 340px; overflow: hidden; border-radius: var(--tk-radius-lg); background: var(--tk-color-surface-2); }
    .sc-overlay-demo .tk-modal-backdrop, .sc-overlay-demo .tk-drawer { position: absolute; }
    .sc-chart-box { position: relative; height: 210px; }
    .sc-auth-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 424px)); gap: 24px; align-items: start; }
    /* Panggung bahasa desain: enam perkakas, masing-masing dipakai apa adanya. */
    .sc-tools { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 32px; }
    .sc-tool code { display: inline-block; margin-bottom: 8px; }
    .sc-tool p { margin: 0; }
    .sc-demo { margin-bottom: 14px; min-height: 92px; display: flex; align-items: center; gap: 14px; }
    .sc-measure { max-width: 68ch; }
    @media (max-width: 820px) {
        .sc-type-row { flex-direction: column; gap: 8px; }
        .sc-grid { grid-template-columns: repeat(2, 1fr); }
    }
${AUTH_CSS}
</style>
</head>
<body>
${exNav('Soft UI', 'components', '')}
<div class="sc-wrap">
    <p class="sc-kit-title">TOKENAI Design Kit</p>
    <h1 class="tk-h1" style="margin: 0">Soft UI</h1>
    <p class="tk-body-lg tk-muted sc-measure" style="margin-top: 12px">Antarmuka yang ramah tanpa jadi kekanak-kanakan: kanvas oat hangat yang tidak pernah putih, kartu yang justru lebih terang daripada latarnya, bayangan setipis mungkin dan diwarnai kanvas alih-alih hitam, sudut membulat besar di setiap elemen sampai kotak centang, serta tangga jarak yang dinaikkan satu tingkat supaya semuanya bernapas. Kit dua-mode &mdash; tekan saklar tema di kanan atas dan kanvasnya berpindah ke arang hangat tanpa mengubah satu pun aturan di atas. Lihat juga contoh halaman nyata lewat bilah navigasi di atas.</p>

${section('Typography', `<p class="tk-caption" style="margin-bottom: 28px">Gabarito (heading &mdash; grotesque bersudut lunak) &middot; Lexend (body &mdash; dirancang justru untuk mengurangi lelah baca) &middot; Overpass Mono (angka dan kode) &middot; skala di bawah adalah seluruh tingkat yang tersedia</p>${TYPE_SCALE}<p class="tk-caption sc-measure" style="margin-top: 20px">Tinggi baris teks dipatok longgar di 1,72 &mdash; lebih lega daripada 1,6 yang biasa dipakai, dan itu bagian dari alasan halaman kit ini terasa tenang bahkan sebelum warnanya terlihat.</p>`)}
${section('Color Palette', `<div class="sc-grid">${SWATCHES}</div>
<p class="tk-caption sc-measure" style="margin-top: 20px">Tidak ada satu pun warna jenuh di sini. Sage, apricot, dan keempat warna semantik semuanya diredam ke tingkat yang sama, jadi tidak ada yang berteriak lebih keras daripada yang lain. Perhatikan juga <code class="tk-code">background</code> yang oat, bukan putih: <code class="tk-code">surface</code> yang putih di atasnyalah yang membuat kartu terangkat &mdash; bayangan hanya menegaskan, bukan menciptakan.</p>
<p class="tk-caption sc-measure" style="margin-top: 12px">Turunan seperti ubin ikon dan cincin fokus dihitung dari <code class="tk-code">primary</code> lewat <code class="tk-code">color-mix()</code>, jadi mengganti palet lewat blok penimpa ikut mengecat semuanya tanpa menyentuh satu blok komponen pun.</p>`)}
${section('Spacing System', `${SPACES}<p class="tk-caption sc-measure" style="margin-top: 16px">Seluruh tangga dinaikkan satu tingkat dari nilai khas kontrak (md 18px alih-alih 16, lg 28 alih-alih 24), dan jarak antarseksi <code class="tk-code">--tk-space-section</code> dipatok 128px. Karena halaman arketipe juga membaca token yang sama, halaman produksi ikut longgar tanpa satu baris CSS tambahan.</p>`)}
${section('Border Radius', `<div class="sc-row" style="gap: 28px">${RADII}</div><p class="tk-caption sc-measure" style="margin-top: 16px">12 &middot; 18 &middot; 28 &middot; penuh. Tidak ada satu pun sudut tajam di seluruh kit: kartu memakai 28px, kotak centang 7px, dan semua kontrol &mdash; tombol, input pencarian, badge, chip, tab, pagination &mdash; berbentuk pil.</p>`)}
${section('Shadow System', `<div class="sc-row" style="gap: 28px">${SHADOWS}</div><p class="tk-caption sc-measure" style="margin-top: 16px">Setiap tingkat dua lapis: satu sentuhan rapat di bawah tepi dan satu sebaran lebar yang nyaris tak kelihatan. Warnanya cokelat abu kanvas, bukan hitam &mdash; bayangan hitam di atas latar hangat selalu terbaca sebagai kotoran. Alfa tertingginya cuma 0,20, dan itu pun hanya di <code class="tk-code">--tk-shadow-lg</code> untuk modal dan menu.</p>`)}
${section('Iconography', `<div class="sc-row">${ICONS}</div><p class="tk-caption sc-measure" style="margin-top: 16px">Iconify, set <code class="tk-code">mage</code> &mdash; tulis <code class="tk-code">&lt;iconify-icon icon="mage:nama"&gt;</code>. Garisnya berujung tumpul dan setiap sudutnya dilengkungkan, jadi ikon tidak pernah jadi satu-satunya benda bersudut tajam di layar yang serba membulat ini. Ratusan ribu ikon lain tersedia dengan set berbeda bila subjeknya menuntut.</p>`)}
${section('Design Language', `<div class="sc-tools">
    <div class="sc-tool">
        <div class="sc-demo"><span class="tk-icon-tile"><iconify-icon icon="mage:water-drop" width="22" height="22"></iconify-icon></span><span class="tk-icon-tile tk-icon-tile-accent"><iconify-icon icon="mage:moon" width="22" height="22"></iconify-icon></span><span class="tk-icon-tile tk-icon-tile-neutral"><iconify-icon icon="mage:goals" width="22" height="22"></iconify-icon></span></div>
        <code class="tk-code">.tk-icon-tile</code>
        <p class="tk-body-sm tk-muted">Kotak membulat berbidang redup yang memayungi ikon. Bentuk paling khas kit ini, dan ia muncul di mana-mana.</p>
    </div>
    <div class="sc-tool">
        <div class="sc-demo"><div class="tk-soft" style="width: 100%; padding: 18px"><p class="tk-title" style="margin: 0; font-size: 15px">Bidang lembut</p><p class="tk-caption" style="margin: 2px 0 0">Matte, tanpa bayangan</p></div></div>
        <code class="tk-code">.tk-soft</code>
        <p class="tk-body-sm tk-muted">Panel matte untuk mengelompokkan sesuatu di dalam kartu yang sudah melayang &mdash; dua bayangan bertumpuk selalu terlihat kotor.</p>
    </div>
    <div class="sc-tool">
        <div class="sc-demo"><div class="tk-inset" style="width: 100%"><p class="tk-title" style="margin: 0; font-size: 15px">Cekungan</p><p class="tk-caption" style="margin: 2px 0 0">Satu-satunya inset di kit ini</p></div></div>
        <code class="tk-code">.tk-inset</code>
        <p class="tk-body-sm tk-muted">Kebalikan kartu: masuk ke dalam permukaan lewat bayangan dalam yang sangat dangkal. Sengaja dibatasi untuk sumur daftar dan baris angka.</p>
    </div>
    <div class="sc-tool">
        <div class="sc-demo"><div class="tk-lift" style="width: 100%; background: var(--tk-color-surface); border-radius: var(--tk-radius-lg); box-shadow: var(--tk-shadow); padding: 18px"><p class="tk-title" style="margin: 0; font-size: 15px">Angkat saat disorot</p><p class="tk-caption" style="margin: 2px 0 0">Arahkan kursor ke sini</p></div></div>
        <code class="tk-code">.tk-lift</code>
        <p class="tk-body-sm tk-muted">Naik dua piksel dan bayangannya melebar. Dipasang ke apa pun yang bisa diklik dan belum berupa kartu.</p>
    </div>
    <div class="sc-tool">
        <div class="sc-demo" style="justify-content: center"><div class="tk-halo"><div style="width: 120px; height: 72px; background: var(--tk-color-surface); border-radius: var(--tk-radius-lg); box-shadow: var(--tk-shadow); display: grid; place-items: center"><span class="tk-caption">Pendar</span></div></div></div>
        <code class="tk-code">.tk-halo</code>
        <p class="tk-body-sm tk-muted">Satu-satunya cahaya di kit ini, dan ia dipasang di belakang objek, bukan di atasnya &mdash; supaya foto tidak terlihat ditempel begitu saja.</p>
    </div>
    <div class="sc-tool">
        <div class="sc-demo" style="gap: 20px"><div class="tk-ring tk-ring-sm" style="--tk-ring-value: 72"><span class="tk-ring-label">72</span></div><div class="tk-ring tk-ring-sm tk-ring-accent" style="--tk-ring-value: 45"><span class="tk-ring-label">45</span></div></div>
        <code class="tk-code">.tk-ring</code>
        <p class="tk-body-sm tk-muted">Angka tunggal digambar sebagai lingkaran, bukan batang. Nilainya dipasang lewat <code class="tk-code">--tk-ring-value</code>.</p>
    </div>
</div>
<p class="tk-body-sm tk-muted sc-measure" style="margin-top: 32px">Yang membedakan kit ini dari neumorphism &mdash; yang juga sering disebut soft UI &mdash; ada di satu keputusan: di sana permukaan dan latar sengaja berwarna persis sama sehingga kedalaman harus dipahat dari sepasang bayangan timbul-tenggelam; di sini permukaan selalu lebih terang daripada latarnya, dan bayangan hanya menegaskan selisih yang sudah ada. Akibatnya teks tetap punya kontras penuh di atas bidang putih, sesuatu yang jadi kelemahan bawaan neumorphism.</p>`)}
${section('Buttons', `<div class="sc-row">${c['components/button.html']}</div><p class="tk-caption sc-measure" style="margin-top: 18px">Semua berbentuk pil penuh. Fokusnya bukan garis tipis melainkan cincin lebar berkabut 4px yang warnanya diturunkan dari primary &mdash; jelas terlihat tanpa terasa keras. Menekan tombol menurunkannya satu piksel, satu-satunya gerak yang dipinjam dari tombol fisik.</p>`)}
${section('Input & Form', `<div class="sc-col">${c['components/form.html']}</div><p class="tk-caption" style="margin: 28px 0 12px">Search bar &mdash; ikon dan pintasan menyatu di dalam field</p><div style="max-width: 480px">${c['components/search.html']}</div><p class="tk-caption" style="margin: 28px 0 12px">Select custom (ditampilkan terbuka) &mdash; satu pilihan &middot; dengan pencarian &middot; multi dengan checkbox &amp; aksi. Listbox digambar kit, bukan popup bawaan browser.</p><div class="sc-row" style="align-items: flex-start; gap: 24px; min-height: 380px">${c['components/select.html'].split('<div class="tk-select">').join('<div class="tk-select tk-select-open" style="width: 250px">')}</div><p class="tk-caption" style="margin: 0 0 12px">Dropdown aksi (ditampilkan terbuka; aslinya terbuka saat trigger diklik)</p><div style="min-height: 260px">${c['components/dropdown.html'].replace('class="tk-dropdown"', 'class="tk-dropdown tk-dropdown-open"')}</div><p class="tk-caption sc-measure">Isian tidak bergaris tepi melainkan berbidang: latarnya satu tingkat lebih redup daripada kartunya, jadi kolom isian terbaca sebagai cekungan lembut. Saat fokus ia justru memutih dan mendapat cincin berkabut &mdash; bidangnya naik ke permukaan, bukan sekadar berganti warna garis.</p>`)}
${section('Login & Register', `<p class="tk-caption" style="margin-bottom: 20px">Kartu auth dirakit murni dari komponen form kit &mdash; bagian dari paket Komponen. Halaman penuhnya (web &amp; ponsel lewat saklar perangkat) ada di <a class="tk-link" href="examples/login.html">examples/login.html</a> dan <a class="tk-link" href="examples/register.html">examples/register.html</a>.</p><div class="sc-auth-grid">${authCard(AUTH_LOGIN_FORM)}${authCard(AUTH_REGISTER_FORM)}</div>`)}
${section('Card Components', `<div class="tk-grid tk-grid-3">${c['components/card.html']}<div class="tk-card"><img src="https://placehold.co/640x400/EDEAE2/6F6859?text=Kartu" alt="Contoh gambar kartu" style="width: 100%; display: block; border-radius: var(--tk-radius-lg) var(--tk-radius-lg) 0 0"><div class="tk-card-body"><span class="tk-badge tk-badge-info" style="margin-bottom: 12px">Panduan</span><h3 class="tk-title" style="margin: 0 0 6px">Kartu Bergambar</h3><p class="tk-body-sm tk-muted" style="margin: 0">Gambar ikut membulat di dua sudut atas, sesuai radius kartunya.</p></div></div><div class="tk-card"><div class="tk-card-body" style="text-align: center"><span class="tk-icon-tile tk-icon-tile-lg" style="margin-bottom: 14px"><iconify-icon icon="mage:user" width="26" height="26"></iconify-icon></span><p class="tk-h4" style="margin: 0">Jane Doe</p><p class="tk-body-sm tk-muted" style="margin: 2px 0 14px">Pendamping Program</p><button class="tk-btn tk-btn-outline tk-btn-sm">Lihat Profil</button></div></div></div><p class="tk-caption sc-measure" style="margin-top: 18px">Kartu tidak punya garis tepi sama sekali &mdash; yang memisahkannya dari kanvas cuma selisih nada plus bayangan tipis. Saat disorot ia naik dua piksel dan bayangannya melebar.</p>`)}
${section('Navigation', `<div class="sc-col" style="max-width: none; gap: 24px">${c['components/navigation.html'].replace('<aside', '<nav class="tk-navbar tk-navbar-dark"><span class="tk-navbar-brand">Logo</span><a class="tk-navbar-link tk-navbar-link-active" href="#">Home</a><a class="tk-navbar-link" href="#">Fitur</a><button class="tk-btn tk-btn-primary tk-btn-sm">Masuk</button></nav><aside')}</div><p class="tk-caption sc-measure" style="margin-top: 16px">Navbar adalah pil putih melayang, bukan bilah yang menempel selebar layar &mdash; halaman contoh memakainya begitu, dengan jarak dari tepi atas. Posisi aktif ditandai bidang pil redup, bentuk yang sama dengan tombolnya, baik di navbar maupun di sidebar.</p>`)}
${section('Tabs & Segmented', `<div class="sc-col">${c['components/tabs.html']}</div><p class="tk-caption sc-measure" style="margin-top: 16px">Keduanya dibangun dari bahan yang sama: rel berbidang redup berisi pil putih bertopang bayangan tipis yang bergeser. Satu pola dipakai dua kali supaya keduanya jelas sekeluarga.</p>`)}
${section('Badges & Chips', `<div class="sc-row">${c['components/badge.html']}</div><p class="tk-caption sc-measure" style="margin-top: 16px">Badge memakai bidang semantik lembut dengan teks bernada lebih pekat &mdash; nilai <code class="tk-code">soft</code> sengaja pucat supaya tenang, jadi teksnya butuh nada sendiri agar tetap terbaca nyaman. Chip sedikit berbeda: ia putih bertopang bayangan, karena chip mewakili benda yang bisa dibuang, bukan status.</p>`)}
${section('Feedback & Alerts', `<div class="sc-col" style="max-width: 580px">${c['components/alert.html']}</div><p class="tk-caption sc-measure" style="margin-top: 18px">Tanpa garis tepi dan tanpa rel kiri berwarna: alert di sini hanyalah bidang semantik lembut yang membulat besar, dengan ikon sebagai isyarat kedua. Bentuk terlembut yang masih bisa menyampaikan bahwa ada yang salah.</p>`)}
${section('Layout Options', `<p class="tk-caption" style="margin-bottom: 12px">Grid 12 / 3 / 2 kolom pada lebar konten --tk-container</p><div class="tk-grid tk-grid-12" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(12)}</div><div class="tk-grid tk-grid-3" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(3)}</div><div class="tk-grid tk-grid-2">${'<div class="sc-cell"></div>'.repeat(2)}</div>`)}
${section('Content Blocks', c['components/content-blocks.html'])}
${section('Data Display', `<p class="tk-caption" style="margin-bottom: 12px">Advanced filter &mdash; pencarian, dua select custom, tombol filter berpenanda jumlah, chip filter aktif</p>${c['components/filter.html']}<div class="tk-card" style="margin-top: 28px"><div class="tk-card-body">${c['components/table.html'].replace('<nav class="tk-pagination">', '<nav class="tk-pagination" style="margin-top: 18px">')}</div></div><p class="tk-caption sc-measure" style="margin-top: 14px">Kepala tabel berupa satu bidang redup yang membulat di kedua ujungnya, bukan garis pemisah. Baris yang disorot ikut membulat dengan cara yang sama. Kolom Aksi rata kanan: ikon langsung (lihat &middot; edit &middot; hapus) untuk aksi sedikit, atau menu &hellip; bila aksinya banyak.</p>`)}
${section('Charts', `<p class="tk-caption sc-measure" style="margin-bottom: 16px">Chart.js &mdash; pustaka chart tunggal untuk semua kit. Warnanya dibaca dari token saat digambar, jadi ikut berganti saat saklar tema ditekan. Garis kisi disetel ke <code class="tk-code">--tk-color-border</code> dan sumbunya dihilangkan; batangnya pun ikut dibulatkan 12px supaya sekeluarga dengan sisa kit.</p><div class="tk-grid tk-grid-3"><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Pengunjung</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-line"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Pendapatan</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-bar"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Sumber Trafik</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-doughnut"></canvas></div></div></div></div>`)}
${section('Modal & Overlay', `<div class="sc-overlay-demo">${c['components/modal.html']}</div><p class="tk-caption sc-measure" style="margin-top: 14px">Tirai belakangnya cokelat tembus pandang dengan blur 2px, bukan hitam pekat &mdash; halaman di belakangnya masih terlihat samar, jadi modal terasa menumpuk alih-alih memutus.</p>`)}
${section('Loading States', `<div class="sc-row" style="gap: 36px">${c['components/loading.html'].replace('<div class="tk-progress">', '<div class="tk-progress" style="width: 260px">')}</div><p class="tk-caption sc-measure" style="margin-top: 16px">Bilah progres setinggi 10px dan bulat penuh di kedua ujung, termasuk ujung isiannya &mdash; batang bersudut tajam akan jadi satu-satunya sudut tajam di seluruh kit.</p>`)}
${section('Empty States', `<div style="max-width: 460px">${c['components/empty.html']}</div>`)}

</div>
${CHART_HELPER_SCRIPT}
<script>
function suSoft(color, amount) { return 'color-mix(in srgb, ' + color + ' ' + amount + '%, transparent)'; }
var scLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
var scAxis = function (t) {
    return { y: { beginAtZero: true, grid: { color: t.border }, border: { display: false } }, x: { grid: { display: false }, border: { display: false } } };
};
tkChart('sc-chart-line', function (t) {
    return {
        type: 'line',
        data: { labels: scLabels, datasets: [{ label: 'Pengunjung', data: [4200, 5100, 4800, 6300, 7100, 8400], borderColor: t.primary, backgroundColor: suSoft(t.primary, 14), fill: true, tension: 0.4, pointRadius: 0, pointHoverRadius: 5, borderWidth: 3 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: scAxis(t) }
    };
});
tkChart('sc-chart-bar', function (t) {
    return {
        type: 'bar',
        data: { labels: scLabels, datasets: [{ label: 'Pendapatan', data: [12, 19, 14, 22, 26, 31], backgroundColor: t.primary, borderRadius: 12, maxBarThickness: 34 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: scAxis(t) }
    };
});
tkChart('sc-chart-doughnut', function (t) {
    return {
        type: 'doughnut',
        data: { labels: ['Direct', 'Organik', 'Sosial', 'Referral'], datasets: [{ data: [38, 31, 19, 12], backgroundColor: [t.primary, t.accent, t.info, t.surface2], borderColor: t.surface, borderWidth: 4 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '68%', plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, boxHeight: 10, usePointStyle: true, pointStyle: 'circle', padding: 14 } } } }
    };
});
</script>
</body>
</html>
`;
