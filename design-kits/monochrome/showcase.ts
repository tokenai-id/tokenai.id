/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len, @typescript-eslint/quotes */

import { MONOCHROME_COMPONENTS } from './components';
import { AUTH_CSS, AUTH_LOGIN_FORM, AUTH_REGISTER_FORM } from './examples';
// Perancah pratinjau (bilah navigasi sticky, helper chart) kit-agnostik dan sengaja dipakai
// bersama; rumahnya masih di folder kit pertama sampai ada alasan memindahkannya.
import { CHARTJS_SCRIPT, CHART_HELPER_SCRIPT, EX_NAV_CSS, exNav } from '../neutral-modern/preview-scaffold';

/**
 * `showcase.html` kit Monochrome: lembar peraga 22 seksi sesuai §6 kontrak — termasuk Login &
 * Register, yang merupakan bagian paket Komponen (bukan tampilan tersendiri di navigasi).
 *
 * Kit ini dua-mode, jadi saklar tema di bilah atas dibiarkan hidup. Perhatikan seksi Color
 * Palette saat ditekan: tangga nadanya membalik utuh, karena anak tangga di kit ini berarti
 * "jarak dari latar", bukan nilai abu yang tetap.
 *
 * Seksi komponennya dirakit dari fragmen `components/` yang sama persis dengan yang akan disalin
 * agen — bukan salinan tersendiri — supaya pratinjau tidak pernah menyimpang dari komponen
 * sebenarnya. Kelas `sc-*` hanyalah perancah lembar peraganya dan bukan bagian dari kontrak kit.
 */

const c = MONOCHROME_COMPONENTS;

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
    return `<div class="tk-card au-card" style="margin: 0"><div class="tk-card-body"><div class="au-brand">Logo</div>${rooted}</div></div>`;
}

// Tangga nada: inilah palet sesungguhnya kit ini. Angka di bawah tiap anak tangga adalah nilai
// mode terang; saat saklar tema ditekan seluruh tangganya membalik di layar.
const TONES = ['0', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const TONE_HEX: Record<string, string> = {
    '0': '#FFFFFF', '50': '#F4F4F5', '100': '#EDEDEF', '200': '#DCDCE0', '300': '#C2C2C8',
    '400': '#A0A0A8', '500': '#83838B', '600': '#62626A', '700': '#43434A', '800': '#29292E',
    '900': '#131316'
};
const WEDGE = TONES.map(step =>
    `<div class="sc-wedge-step"><div class="sc-wedge-fill" style="background: var(--tk-mo-${step})"></div><code>${step}</code><code class="sc-wedge-hex">${TONE_HEX[step]}</code></div>`
).join('');

const SWATCHES = [
    ['primary', '#131316'], ['secondary', '#62626A'], ['accent', '#A0A0A8'],
    ['background', '#F4F4F5'], ['surface', '#FFFFFF'], ['surface-2', '#EDEDEF'],
    ['text', '#131316'], ['text-muted', '#62626A'], ['border', '#DCDCE0'],
    ['success', '#131316'], ['warning', '#131316'], ['danger', '#131316'], ['info', '#62626A']
].map(([name, hex]) =>
    `<div class="sc-swatch"><div class="sc-swatch-fill" style="background: var(--tk-color-${name})"></div><span>${name}</span><code>${hex}</code></div>`
).join('');

const TYPE_SCALE = [
    ['Display', 'tk-display', '76px'], ['Heading 1', 'tk-h1', '54px'], ['Heading 2', 'tk-h2', '38px'],
    ['Heading 3', 'tk-h3', '27px'], ['Heading 4', 'tk-h4', '20px'], ['Title', 'tk-title', '17px'],
    ['Body', 'tk-body', '16px'], ['Body Small', 'tk-body-sm', '14px'], ['Caption', 'tk-caption', '12px']
].map(([label, cls, size]) =>
    `<div class="sc-type-row"><span class="sc-type-meta">${label}<br>${size}</span><p class="${cls}" style="margin: 0">Aa &mdash; Satu warna, semua nada</p></div>`
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

const ICONS = ['home', 'search', 'user', 'cog', 'bell', 'heart', 'star', 'trash', 'write', 'check',
    'close', 'plus', 'arrow-right', 'aperture', 'camera', 'envelope', 'padlock', 'quote']
    .map(name => `<span class="sc-icon" title="jam:${name}"><iconify-icon icon="jam:${name}" width="22" height="22"></iconify-icon></span>`)
    .join('');

export const MONOCHROME_SHOWCASE = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Monochrome — Design Kit Showcase</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@500;600;700;800&family=Instrument+Sans:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<script src="https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"></script>
<script src="${CHARTJS_SCRIPT}"></script>
<style>
    ${EX_NAV_CSS}
</style>
<style>
    /* Perancah lembar peraga (sc-*): bukan bagian kontrak kit. */
    .sc-wrap { max-width: 1200px; margin: 0 auto; padding: 56px 24px 112px; }
    .sc-kit-title { font-family: var(--tk-font-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--tk-color-text-muted); margin: 0 0 10px; }
    .sc-section { margin-top: 72px; }
    .sc-heading { display: flex; align-items: baseline; gap: 14px; font-family: var(--tk-font-mono); font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--tk-color-text); border-top: 2px solid var(--tk-color-text); padding-top: 10px; margin: 0 0 28px; }
    .sc-heading-num { color: var(--tk-color-text-muted); }
    .sc-row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    .sc-col { display: flex; flex-direction: column; gap: 16px; max-width: 480px; }
    .sc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 16px; }
    /* Tangga nada digambar sebagai satu bidang menyambung, seperti step wedge yang
       dipakai juru cetak untuk mengukur rentang nada sebelum naik mesin. */
    .sc-wedge { display: grid; grid-template-columns: repeat(11, 1fr); border: 1px solid var(--tk-color-border); }
    .sc-wedge-step { display: flex; flex-direction: column; }
    .sc-wedge-fill { height: 88px; }
    .sc-wedge-step code { font-family: var(--tk-font-mono); font-size: 10px; padding: 6px 6px 0; color: var(--tk-color-text); }
    .sc-wedge-step code.sc-wedge-hex { padding-bottom: 8px; color: var(--tk-color-text-muted); }
    .sc-swatch { font-size: 12px; display: flex; flex-direction: column; gap: 4px; }
    .sc-swatch code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); font-size: 11px; }
    .sc-swatch-fill { height: 48px; border: 1px solid var(--tk-color-border); }
    .sc-type-row { display: flex; align-items: baseline; gap: 28px; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid var(--tk-color-border); }
    .sc-type-meta { width: 92px; flex: none; font-family: var(--tk-font-mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--tk-color-text-muted); line-height: 1.6; }
    .sc-space-row { display: flex; align-items: center; gap: 16px; margin-bottom: 10px; font-size: 12px; }
    .sc-space-row code { width: 130px; color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); font-size: 11px; }
    .sc-space-bar { height: 14px; background: var(--tk-color-text); }
    .sc-radius-item { display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 11px; }
    .sc-radius-item code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-radius-box { width: 132px; height: 74px; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-text); }
    .sc-radius-box-pill { height: 40px; margin-top: 17px; }
    .sc-shadow-box { width: 132px; height: 90px; background: var(--tk-color-surface); border: 1px solid var(--tk-color-border); display: flex; align-items: flex-end; padding: 10px; font-size: 11px; }
    .sc-shadow-box code { color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
    .sc-icon { color: var(--tk-color-text); padding: 8px; }
    .sc-cell { background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); height: 44px; }
    .sc-overlay-demo { position: relative; height: 330px; overflow: hidden; border: 1px solid var(--tk-color-border); }
    .sc-overlay-demo .tk-modal-backdrop, .sc-overlay-demo .tk-drawer { position: absolute; }
    .sc-chart-box { position: relative; height: 200px; }
    .sc-auth-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 420px)); gap: 24px; align-items: start; }
    /* Panggung bahasa desain: dua kolom perkakas, masing-masing dipakai apa adanya. */
    .sc-tools { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 28px; }
    .sc-tool code { display: inline-block; margin-bottom: 8px; }
    .sc-tool p { margin: 0; }
    .sc-demo { margin-bottom: 12px; }
    .sc-photo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 28px; }
    .sc-photo-grid img { aspect-ratio: 4 / 3; object-fit: cover; }
    .sc-semantic { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 24px; }
    .sc-semantic-item { border-top: 1px solid var(--tk-color-border); padding-top: 10px; }
    @media (max-width: 820px) {
        .sc-wedge { grid-template-columns: repeat(6, 1fr); }
        .sc-photo-grid { grid-template-columns: 1fr; }
        .sc-semantic { grid-template-columns: repeat(2, 1fr); }
        .sc-type-row { flex-direction: column; gap: 8px; }
    }
${AUTH_CSS}
</style>
</head>
<body>
${exNav('Monochrome', 'components', '')}
<div class="sc-wrap">
    <p class="sc-kit-title">TOKENAI Design Kit</p>
    <h1 class="tk-h1" style="margin: 0">Monochrome</h1>
    <p class="tk-body-lg tk-muted tk-measure" style="margin-top: 12px">Satu keluarga warna saja &mdash; sebelas anak tangga dari kertas ke tinta, tanpa satu pun rona. Karena warna tidak tersedia sebagai alat, yang bekerja tinggal tipografi rapat, komposisi bergaris, jarak yang lapang, dan fotografi yang selalu tak berona. Status pun dibedakan tanpa hijau-kuning-merah: nada bidang, tebal rel, dan bentuk ikon. Kit dua-mode &mdash; tekan saklar tema di kanan atas dan seluruh tangga nadanya membalik seperti negatif film. Lihat juga contoh halaman nyata lewat bilah navigasi di atas.</p>

${section('Typography', `<p class="tk-caption" style="margin-bottom: 28px">Epilogue (heading, dirapatkan sampai -0,045em di ukuran display) &middot; Instrument Sans (body) &middot; Roboto Mono (label kapital, caption, angka) &middot; skala di bawah adalah seluruh tingkat yang tersedia</p>${TYPE_SCALE}<p class="tk-caption" style="margin-top: 20px">Jarak antartingkat sengaja lebar: tanpa warna, lompatan ukuranlah yang memberi tahu mana yang penting.</p>`)}
${section('Color Palette', `<p class="tk-caps" style="margin: 0 0 12px">Tangga nada &mdash; palet sesungguhnya kit ini</p><div class="sc-wedge">${WEDGE}</div>
<p class="tk-caption tk-measure" style="margin: 14px 0 32px">Angka anak tangga berarti <em>jarak dari latar</em>, bukan nilai abu yang tetap: 0 selalu warna kertas dan 900 selalu tinta paling pekat. Tekan saklar tema dan seluruh tangga di atas membalik &mdash; komponen tidak perlu ditulis ulang satu baris pun, karena semuanya menyebut anak tangga, bukan nilai heksa.</p>
<p class="tk-caps" style="margin: 0 0 12px">Token kontrak</p><div class="sc-grid">${SWATCHES}</div>
<p class="tk-caption tk-measure" style="margin-top: 16px">Empat warna semantik pun tak berona: <code class="tk-code">success</code>, <code class="tk-code">warning</code>, dan <code class="tk-code">danger</code> sama-sama tinta. Yang membedakan keempatnya ada di seksi Feedback &mdash; nada latar, tebal rel kiri, dan ikon, dipakai bersamaan.</p>`)}
${section('Spacing System', `${SPACES}<p class="tk-caption" style="margin-top: 16px">Jarak antarseksi <code class="tk-code">--tk-space-section</code> dipatok 120px: ruang kosong adalah warna kedua kit ini.</p>`)}
${section('Border Radius', `<div class="sc-row" style="gap: 24px">${RADII}</div><p class="tk-caption" style="margin-top: 14px">Nol di semua tingkat. Radius bulat penuh tetap didefinisikan karena radio dan spinner memang menuntut lingkaran &mdash; dan karena komponen kit lain yang ditimpakan akan membacanya.</p>`)}
${section('Shadow System', `<div class="sc-row" style="gap: 24px">${SHADOWS}</div><p class="tk-caption" style="margin-top: 14px">Nyaris tidak ada: <code class="tk-code">--tk-shadow-sm</code> sengaja <code class="tk-code">none</code>. Kedalaman di sini datang dari beda nada dan garis hairline, bukan dari kabur &mdash; hanya lapisan yang benar-benar melayang (modal, menu) yang diberi bayangan.</p>`)}
${section('Iconography', `<div class="sc-row">${ICONS}</div><p class="tk-caption tk-measure">Iconify, set <code class="tk-code">jam</code> &mdash; tulis <code class="tk-code">&lt;iconify-icon icon="jam:nama"&gt;</code>. Garisnya setipis hairline dengan sudut geometris dan satu bobot untuk semua, jadi ikon duduk setara dengan garis 1px yang memisahkan hampir semua hal di kit ini alih-alih menonjol sendiri. Ratusan ribu ikon lain tersedia dengan set berbeda bila subjeknya menuntut.</p>`)}
${section('Design Language', `<div class="sc-tools">
    <div class="sc-tool">
        <div class="sc-demo"><p class="tk-caps">Label kapital kecil</p></div>
        <code class="tk-code">.tk-caps</code>
        <p class="tk-body-sm tk-muted">Kapital kecil berjarak 0,18em. Penanda hierarki paling murah di kit tanpa warna.</p>
    </div>
    <div class="sc-tool">
        <div class="sc-demo tk-rule"><span class="tk-rule-num">07</span><span class="tk-title" style="margin: 0">Garis seksi bernomor</span></div>
        <code class="tk-code">.tk-rule</code>
        <p class="tk-body-sm tk-muted">Garis 2px plus nomor mono &mdash; perkakas komposisi utama halaman panjang.</p>
    </div>
    <div class="sc-tool">
        <div class="sc-demo tk-negative" style="padding: 20px"><p class="tk-title" style="margin: 0">Bidang negatif</p><p class="tk-caption" style="margin: 4px 0 0">Nadanya dibalik</p></div>
        <code class="tk-code">.tk-negative</code>
        <p class="tk-body-sm tk-muted">Sepotong halaman yang nadanya dibalik &mdash; cara kit ini menyorot tanpa warna.</p>
    </div>
    <div class="sc-tool">
        <div class="sc-demo tk-hatch" style="padding: 20px"><p class="tk-title" style="margin: 0">Bidang arsir</p><p class="tk-caption" style="margin: 4px 0 0; color: inherit; opacity: 0.72">Tinta bergaris 45&deg;</p></div>
        <code class="tk-code">.tk-hatch</code>
        <p class="tk-body-sm tk-muted">Satu-satunya tekstur kit. Dipakai menandai status terberat, seperti ukiran membedakan bidang tanpa warna.</p>
    </div>
    <div class="sc-tool">
        <div class="sc-demo"><p class="tk-body-sm tk-measure" style="margin: 0">Lebar baca dikunci 62 karakter &mdash; batas nyaman mata sebelum baris terasa terlalu panjang untuk dilompati.</p></div>
        <code class="tk-code">.tk-measure</code>
        <p class="tk-body-sm tk-muted">Kunci lebar kolom teks panjang.</p>
    </div>
    <div class="sc-tool">
        <div class="sc-demo"><div class="tk-progress"><div class="tk-progress-bar" style="width: 62%"></div></div></div>
        <code class="tk-code">--tk-mo-0 &hellip; 900</code>
        <p class="tk-body-sm tk-muted">Sebelas anak tangga yang dipakai semua komponen. Menyebut nada, bukan warna.</p>
    </div>
</div>
<p class="tk-caps" style="margin: 40px 0 12px">Fotografi</p>
<div class="sc-photo-grid">
    <figure class="tk-frame"><img src="https://placehold.co/640x480/DCDCE0/62626A?text=Foto" alt="Contoh foto di dalam pigura hairline"><figcaption><span>Pigura biasa</span><span>.tk-frame</span></figcaption></figure>
    <figure class="tk-frame"><span class="tk-halftone"><img src="https://placehold.co/640x480/C2C2C8/43434A?text=Halftone" alt="Foto yang sama dilewatkan kisi titik halftone"></span><figcaption><span>Kisi titik</span><span>.tk-halftone</span></figcaption></figure>
    <figure class="tk-frame"><img src="https://placehold.co/640x480/EDEDEF/83838B?text=Otomatis" alt="Foto berwarna yang otomatis dijadikan tak berona"><figcaption><span>Selalu tak berona</span><span>filter bawaan</span></figcaption></figure>
</div>
<p class="tk-body-sm tk-muted tk-measure">Seluruh imagery dipaksa <code class="tk-code">grayscale(1)</code> di mana pun ia muncul &mdash; foto berwarna akan membatalkan premis kit ini dalam sekali lihat, jadi ia tidak dibiarkan lewat. <code class="tk-code">.tk-frame</code> menambahkan caption mono di bawah garis, dan <code class="tk-code">.tk-halftone</code> melewatkan foto pada kisi titik seperti cetak koran. Di mode gelap titiknya ikut membalik jadi titik kertas, bukan titik tinta.</p>`)}
${section('Buttons', `<div class="sc-row">${c['components/button.html']}</div><p class="tk-caption tk-measure" style="margin-top: 18px">Tingkatan tombol dibedakan bobot nada, bukan warna: tinta penuh, grafit, garis, lalu tanpa bidang sama sekali. Tombol danger memakai arsir supaya bidang tintanya tetap bisa dibedakan dari tombol utama.</p>`)}
${section('Input & Form', `<div class="sc-col">${c['components/form.html']}</div><p class="tk-caption" style="margin: 28px 0 12px">Search bar &mdash; ikon dan pintasan menyatu di dalam field</p><div style="max-width: 480px">${c['components/search.html']}</div><p class="tk-caption" style="margin: 28px 0 12px">Select custom (ditampilkan terbuka) &mdash; satu pilihan &middot; dengan pencarian &middot; multi dengan checkbox &amp; aksi. Listbox digambar kit, bukan popup bawaan browser.</p><div class="sc-row" style="align-items: flex-start; gap: 24px; min-height: 350px">${c['components/select.html'].split('<div class="tk-select">').join('<div class="tk-select tk-select-open" style="width: 250px">')}</div><p class="tk-caption" style="margin: 0 0 12px">Dropdown aksi (ditampilkan terbuka; aslinya terbuka saat trigger diklik)</p><div style="min-height: 250px">${c['components/dropdown.html'].replace('class="tk-dropdown"', 'class="tk-dropdown tk-dropdown-open"')}</div><p class="tk-caption tk-measure">Field adalah garis, bukan kotak: tiga sisinya sengaja dibiarkan hilang, dan saat fokus garis dasarnya menebal jadi 2px. Error dan success juga tanpa rona &mdash; yang berubah tebal garis plus tanda &times; atau &check; di depan teks bantuannya.</p>`)}
${section('Login & Register', `<p class="tk-caption" style="margin-bottom: 20px">Kartu auth dirakit murni dari komponen form kit &mdash; bagian dari paket Komponen. Halaman penuhnya (web &amp; ponsel lewat saklar perangkat) ada di <a class="tk-link" href="examples/login.html">examples/login.html</a> dan <a class="tk-link" href="examples/register.html">examples/register.html</a>.</p><div class="sc-auth-grid">${authCard(AUTH_LOGIN_FORM)}${authCard(AUTH_REGISTER_FORM)}</div>`)}
${section('Card Components', `<div class="tk-grid tk-grid-3">${c['components/card.html']}<div class="tk-card"><img src="https://placehold.co/640x400/DCDCE0/62626A?text=Kartu" alt="Contoh gambar kartu" style="width: 100%; display: block"><div class="tk-card-body"><p class="tk-caps" style="margin: 0 0 8px">Seri 04</p><h3 class="tk-title" style="margin: 0 0 6px">Kartu Bergambar</h3><p class="tk-body-sm tk-muted" style="margin: 0">Gambar di dalam kartu ikut aturan yang sama: selalu tak berona.</p></div></div><div class="tk-card"><div class="tk-card-body"><div class="tk-feature-icon" style="margin-bottom: 14px"><iconify-icon icon="jam:user" width="20" height="20"></iconify-icon></div><p class="tk-h4" style="margin: 0">Jane Doe</p><p class="tk-caps">Direktur Kreatif</p></div></div></div><p class="tk-caption" style="margin-top: 16px">Kartu tidak melayang dan tidak naik saat disorot &mdash; yang berubah hanya pinggirnya menghitam. Sebesar itu saja geraknya.</p>`)}
${section('Navigation', `<div class="sc-col" style="max-width: none">${c['components/navigation.html'].replace('<aside', '<nav class="tk-navbar tk-navbar-dark"><span class="tk-navbar-brand">Logo</span><a class="tk-navbar-link tk-navbar-link-active" href="#">Home</a><a class="tk-navbar-link" href="#">Fitur</a><button class="tk-btn tk-btn-primary tk-btn-sm">Masuk</button></nav><aside')}</div><p class="tk-caption tk-measure" style="margin-top: 14px">Posisi ditandai garis: bawah untuk navbar, rel kiri untuk sidebar. Navbar gelap dipatok ke tinta sungguhan &mdash; ia tetap gelap di kedua mode, karena yang memakainya memang sedang meminta bilah gelap.</p>`)}
${section('Tabs & Segmented', `<div class="sc-col">${c['components/tabs.html']}</div>`)}
${section('Badges & Chips', `<div class="sc-row">${c['components/badge.html']}</div>`)}
${section('Feedback & Alerts', `<div class="sc-col" style="max-width: 560px">${c['components/alert.html']}</div>
<div class="sc-semantic">
    <div class="sc-semantic-item"><p class="tk-caps">Success</p><p class="tk-body-sm tk-muted" style="margin: 4px 0 0">Bidang kertas, pinggir tinta penuh, ikon centang.</p></div>
    <div class="sc-semantic-item"><p class="tk-caps">Warning</p><p class="tk-body-sm tk-muted" style="margin: 4px 0 0">Blok abu, rel kiri tebal, ikon seru.</p></div>
    <div class="sc-semantic-item"><p class="tk-caps">Danger</p><p class="tk-body-sm tk-muted" style="margin: 4px 0 0">Tinta berarsir, teks kertas, ikon segitiga.</p></div>
    <div class="sc-semantic-item"><p class="tk-caps">Info</p><p class="tk-body-sm tk-muted" style="margin: 4px 0 0">Abu paling pucat, rel kiri hairline, ikon lingkaran.</p></div>
</div>
<p class="tk-body-sm tk-muted tk-measure" style="margin-top: 20px">Tiga isyarat dipakai bersamaan &mdash; nada bidang, tebal rel kiri, dan bentuk ikon &mdash; sehingga statusnya tetap terbaca tanpa satu pun rona. Kebetulan inilah juga cara yang benar untuk mata yang tidak membedakan warna: warna tidak pernah jadi satu-satunya pembawa arti.</p>`)}
${section('Layout Options', `<p class="tk-caption" style="margin-bottom: 12px">Grid 12 / 3 / 2 kolom pada lebar konten --tk-container</p><div class="tk-grid tk-grid-12" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(12)}</div><div class="tk-grid tk-grid-3" style="margin-bottom: 16px">${'<div class="sc-cell"></div>'.repeat(3)}</div><div class="tk-grid tk-grid-2">${'<div class="sc-cell"></div>'.repeat(2)}</div>`)}
${section('Content Blocks', c['components/content-blocks.html'])}
${section('Data Display', `<p class="tk-caption" style="margin-bottom: 12px">Advanced filter &mdash; pencarian, dua select custom, tombol filter berpenanda jumlah, chip filter aktif</p>${c['components/filter.html']}<div style="margin-top: 28px">${c['components/table.html'].replace('<nav class="tk-pagination">', '<nav class="tk-pagination" style="margin-top: 16px">')}</div><p class="tk-caption tk-measure" style="margin-top: 12px">Kepala tabel memakai kapital kecil di bawah garis 2px; barisnya dipisah hairline. Kolom Aksi rata kanan: ikon langsung (lihat &middot; edit &middot; hapus) untuk aksi sedikit, atau menu &hellip; bila aksinya banyak.</p>`)}
${section('Charts', `<p class="tk-caption tk-measure" style="margin-bottom: 16px">Chart.js &mdash; pustaka chart tunggal untuk semua kit. Deretnya tidak memakai primary/secondary/accent yang di sini nyaris senada, melainkan empat anak tangga yang berjarak jauh (900 &middot; 600 &middot; 400 &middot; 300), dibaca dari token saat digambar sehingga ikut membalik sendiri saat saklar tema ditekan.</p><div class="tk-grid tk-grid-3"><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Pengunjung</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-line"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Pendapatan</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-bar"></canvas></div></div></div><div class="tk-card"><div class="tk-card-header"><p class="tk-title" style="margin: 0">Sumber Trafik</p></div><div class="tk-card-body"><div class="sc-chart-box"><canvas id="sc-chart-doughnut"></canvas></div></div></div></div>`)}
${section('Modal & Overlay', `<div class="sc-overlay-demo">${c['components/modal.html']}</div>`)}
${section('Loading States', `<div class="sc-row" style="gap: 32px">${c['components/loading.html'].replace('<div class="tk-progress">', '<div class="tk-progress" style="width: 240px">')}</div>`)}
${section('Empty States', `<div style="max-width: 430px">${c['components/empty.html']}</div>`)}

</div>
${CHART_HELPER_SCRIPT}
<script>
function moTone(step) { return getComputedStyle(document.documentElement).getPropertyValue('--tk-mo-' + step).trim(); }
function moRamp() { return [moTone(900), moTone(600), moTone(400), moTone(300)]; }
var scLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
tkChart('sc-chart-line', function (t) {
    return {
        type: 'line',
        data: { labels: scLabels, datasets: [{ label: 'Pengunjung', data: [4200, 5100, 4800, 6300, 7100, 8400], borderColor: moTone(900), backgroundColor: moTone(100), fill: true, tension: 0, pointRadius: 3, pointBackgroundColor: moTone(900), pointBorderWidth: 0, borderWidth: 2 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-bar', function (t) {
    return {
        type: 'bar',
        data: { labels: scLabels, datasets: [{ label: 'Pendapatan', data: [12, 19, 14, 22, 26, 31], backgroundColor: moTone(900) }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    };
});
tkChart('sc-chart-doughnut', function (t) {
    return {
        type: 'doughnut',
        data: { labels: ['Direct', 'Organik', 'Sosial', 'Referral'], datasets: [{ data: [38, 31, 19, 12], backgroundColor: moRamp(), borderColor: t.surface, borderWidth: 2 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '62%', plugins: { legend: { position: 'bottom' } } }
    };
});
</script>
</body>
</html>
`;
