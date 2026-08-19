/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len */

/**
 * `styles.css` kit Luxury Editorial.
 *
 * Tata letak editorial dibawa ke ranah barang mewah. Lima keputusan yang saling mengunci:
 *
 * 1. Dua huruf berkontras ekstrem. Cormorant Garamond — serif kontras tinggi bergaris rambut —
 *    dipakai besar dan berbobot ringan (300–400) untuk semua judul dan angka; Jost hanya muncul
 *    kecil, huruf besar, dan berjarak 0.26em untuk label. Tidak ada ukuran menengah di antara
 *    keduanya, dan justru selisih itulah yang membuat halaman terasa mahal.
 * 2. Emas adalah garis, bukan bidang. Champagne (`--tk-color-accent`) tampil sebagai garis rambut
 *    1px, garis bawah, dan tanda kecil — nyaris tidak pernah sebagai isian. Semua turunannya
 *    (garis redup, isian pucat, cincin fokus) dihitung `color-mix()` dari token, jadi palet
 *    penimpa ikut mengecat semuanya.
 * 3. Gerak lambat. `--tk-transition` 420ms dengan easing yang berhenti perlahan; foto membesar
 *    1200ms, seksi naik 900ms. Semua di balik penjaga `prefers-reduced-motion`.
 * 4. Whitespace adalah struktur, bukan sisa. Jarak antar seksi 176px, `line-height` isi 1.75, dan
 *    kolom teks dibatasi 68ch supaya barisnya tetap enak dibaca seperti halaman cetak.
 * 5. Tanpa radius, nyaris tanpa bayangan. Sudut tajam seperti potongan kertas; bayangan lebar,
 *    sangat pucat, dan hanya milik lapisan melayang.
 *
 * Enam perkakas khas kitnya: `.tk-eyebrow` (label rubrik beremas), `.tk-rule` (garis rambut
 * ganda), `.tk-plate` (bingkai fotografi dengan zoom lambat), `.tk-drop-cap`, `.tk-gild` (garis
 * bawah emas yang tumbuh), dan `.tk-reveal` (kemunculan naik perlahan).
 *
 * Struktur selektor dan blok `== tk: ... ==` mengikuti kontrak `docs/kontrak-kit-design.md`;
 * wajahnya lahir dari nilai token plus blok "flavor" di ekor berkas.
 */
export const LUXURY_EDITORIAL_STYLES = `/* Luxury Editorial — kit design TOKENAI.
   Tata letak editorial dengan nuansa barang mewah: serif kontras tinggi berukuran besar,
   emas champagne hanya sebagai garis rambut, whitespace 176px antar seksi, gerak lambat.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    /* Perunggu tua, bukan emas terang: cukup gelap untuk memikul teks putih di atas tombol. */
    --tk-color-primary: #6F5B33;
    --tk-color-primary-hover: #574726;
    --tk-color-primary-contrast: #FDFBF7;
    --tk-color-secondary: #FFFFFF;
    --tk-color-secondary-hover: #F2EDE4;
    --tk-color-secondary-contrast: #16130F;
    /* Champagne: dipakai sebagai garis, tanda, dan garis bawah — hampir tidak pernah isian. */
    --tk-color-accent: #B08D57;
    --tk-color-background: #FAF8F4;
    --tk-color-surface: #FFFFFF;
    --tk-color-surface-2: #F2EDE4;
    --tk-color-text: #16130F;
    --tk-color-text-muted: #6F6656;
    --tk-color-border: #E2D9C8;
    --tk-color-success: #3F6B4F;
    --tk-color-success-soft: #EAF1EC;
    --tk-color-warning: #8A6B23;
    --tk-color-warning-soft: #F7EFDC;
    --tk-color-danger: #8E3B36;
    --tk-color-danger-soft: #F6E7E4;
    --tk-color-info: #3A5570;
    --tk-color-info-soft: #E9EEF3;

    --tk-font-heading: 'Cormorant Garamond', 'Times New Roman', Georgia, serif;
    --tk-font-body: 'Jost', system-ui, sans-serif;
    --tk-font-mono: 'IBM Plex Mono', ui-monospace, monospace;
    /* Serif kontras tinggi paling anggun di bobot ringan; display malah turun ke 300 di ekor berkas. */
    --tk-weight-heading: 400;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.06;
    /* Isi bernapas seperti kolom majalah, bukan seperti UI padat. */
    --tk-leading-body: 1.75;

    --tk-text-display: 84px;
    --tk-text-h1: 60px;
    --tk-text-h2: 40px;
    --tk-text-h3: 27px;
    --tk-text-h4: 21px;
    --tk-text-title: 18px;
    --tk-text-body-lg: 19px;
    --tk-text-body: 17px;
    --tk-text-body-sm: 15px;
    --tk-text-caption: 12px;

    --tk-space-xs: 4px;
    --tk-space-sm: 8px;
    --tk-space-md: 16px;
    --tk-space-lg: 24px;
    --tk-space-xl: 40px;
    --tk-space-2xl: 64px;
    --tk-space-3xl: 96px;
    /* Whitespace adalah struktur: seksi dipisah jarak yang jauh lebih lega dari kit mana pun. */
    --tk-space-section: 176px;

    /* Tanpa radius: tepi tajam seperti potongan kertas cetak. */
    --tk-radius-sm: 0px;
    --tk-radius: 0px;
    --tk-radius-lg: 0px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    /* Kartu datar dipisah garis rambut; hanya lapisan melayang yang melempar bayangan,
       dan bayangannya lebar serta sangat pucat supaya tidak pernah terlihat berat. */
    --tk-shadow-sm: none;
    --tk-shadow: 0 30px 70px -32px rgba(22, 19, 15, 0.18);
    --tk-shadow-lg: 0 48px 110px -44px rgba(22, 19, 15, 0.26);

    /* Gerak lambat adalah bagian bahasa design: easing yang berhenti perlahan, bukan tergesa. */
    --tk-transition: 420ms cubic-bezier(0.16, 0.84, 0.24, 1);
    --tk-container: 1180px;
}

/* Mode gelap: édition nuit — kertas alabaster menjadi tinta hangat, dan champagne naik jadi
   satu-satunya sumber cahaya. Aktifkan dengan atribut data-tk-theme="dark" pada <html>. */
[data-tk-theme="dark"] {
    --tk-color-primary: #C2A265;
    --tk-color-primary-hover: #D3B67F;
    --tk-color-primary-contrast: #16130F;
    --tk-color-secondary: #171411;
    --tk-color-secondary-hover: #201C17;
    --tk-color-secondary-contrast: #F4EFE6;
    --tk-color-accent: #D9BC80;
    --tk-color-background: #0F0D0B;
    --tk-color-surface: #171411;
    --tk-color-surface-2: #201C17;
    --tk-color-text: #F4EFE6;
    --tk-color-text-muted: #A79C89;
    --tk-color-border: #322C24;
    --tk-color-success: #85B195;
    --tk-color-success-soft: #17221A;
    --tk-color-warning: #CBA75A;
    --tk-color-warning-soft: #2A2214;
    --tk-color-danger: #C97E77;
    --tk-color-danger-soft: #2C1917;
    --tk-color-info: #8AA7C4;
    --tk-color-info-soft: #171F28;
    --tk-shadow-sm: none;
    --tk-shadow: 0 30px 70px -32px rgba(0, 0, 0, 0.72);
    --tk-shadow-lg: 0 48px 110px -44px rgba(0, 0, 0, 0.8);
}

/* == tk: base =================================================== */
body {
    margin: 0;
    background: var(--tk-color-background);
    color: var(--tk-color-text);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body);
    font-weight: var(--tk-weight-body);
    line-height: var(--tk-leading-body);
    -webkit-font-smoothing: antialiased;
}
.tk-container {
    max-width: var(--tk-container);
    margin: 0 auto;
    padding: 0 var(--tk-space-xl);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }
::selection { background: color-mix(in srgb, var(--tk-color-accent) 28%, transparent); }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
    letter-spacing: -0.015em;
}
.tk-display { font-size: var(--tk-text-display); }
.tk-h1 { font-size: var(--tk-text-h1); }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-size: var(--tk-text-title); font-family: var(--tk-font-heading); font-weight: 600; letter-spacing: 0; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
/* Caption bukan huruf mono seperti kit editorial lain: di sini ia label couture —
   Jost kecil, huruf besar, berjarak lebar. */
.tk-caption {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-caption);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.26em;
    color: var(--tk-color-text-muted);
}
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link {
    color: var(--tk-color-text);
    font-weight: 400;
    text-decoration: underline;
    text-decoration-color: var(--tk-color-accent);
    text-decoration-thickness: 1px;
    text-underline-offset: 5px;
    transition: color var(--tk-transition), text-decoration-color var(--tk-transition);
}
.tk-link:hover { color: var(--tk-color-primary); text-decoration-color: var(--tk-color-primary); }
.tk-code {
    font-family: var(--tk-font-mono);
    font-size: 0.86em;
    background: var(--tk-color-surface-2);
    padding: 2px 7px;
    border: 1px solid var(--tk-color-border);
}

/* == tk: button ================================================= */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-body);
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    line-height: 1;
    /* Padding kanan sengaja lebih besar: letter-spacing menyisakan celah di ujung kata,
       tanpa koreksi ini label tampak melenceng ke kanan. */
    padding: 17px 30px 17px 32px;
    border-radius: var(--tk-radius-sm);
    border: var(--tk-border-width) solid transparent;
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), border-color var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:disabled { opacity: 0.45; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); border-color: var(--tk-color-text); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-btn-outline { background: transparent; color: var(--tk-color-text); border-color: var(--tk-color-border); }
.tk-btn-outline:hover:not(:disabled) { border-color: var(--tk-color-accent); color: var(--tk-color-primary); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); }
/* Teks di atas tombol bahaya memakai warna permukaan, bukan putih mati: di mode gelap
   isian merahnya justru terang, dan putih akan kehilangan kontras. */
.tk-btn-danger { background: var(--tk-color-danger); color: var(--tk-color-surface); }
.tk-btn-danger:hover:not(:disabled) { background: color-mix(in srgb, var(--tk-color-danger) 84%, var(--tk-color-text)); }
.tk-btn-text { background: none; color: var(--tk-color-primary); padding-left: 4px; padding-right: 4px; }
.tk-btn-text:hover:not(:disabled) { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 5px; }
.tk-btn-sm { font-size: 10px; letter-spacing: 0.2em; padding: 11px 18px 11px 20px; }
.tk-btn-lg { font-size: 12px; padding: 22px 42px 22px 44px; }
.tk-btn-icon { padding: 16px; letter-spacing: 0; }
.tk-btn-loading { position: relative; color: transparent !important; pointer-events: none; }
.tk-btn-loading::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    border: 1px solid var(--tk-color-primary-contrast);
    border-top-color: transparent;
    border-radius: var(--tk-radius-full);
    animation: tk-spin 1.1s linear infinite;
}
.tk-btn-secondary.tk-btn-loading::after, .tk-btn-outline.tk-btn-loading::after, .tk-btn-ghost.tk-btn-loading::after {
    border-color: var(--tk-color-text);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
.tk-field { display: flex; flex-direction: column; gap: var(--tk-space-sm); margin-bottom: var(--tk-space-lg); }
.tk-label {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-caption);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--tk-color-text);
}
.tk-help { font-size: var(--tk-text-body-sm); color: var(--tk-color-text-muted); }
/* Field bukan kotak: hanya satu garis rambut di bawahnya, seperti kolom isian pada
   kartu undangan. Tepi lain dibiarkan kosong supaya formulir tetap terasa lapang. */
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body);
    font-weight: 400;
    color: var(--tk-color-text);
    background: transparent;
    border: var(--tk-border-width) solid transparent;
    border-bottom-color: var(--tk-color-border);
    border-radius: 0;
    padding: 12px 2px;
    transition: border-color var(--tk-transition), background var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:hover, .tk-textarea:hover { border-bottom-color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus { border-bottom-color: var(--tk-color-accent); }
.tk-textarea { min-height: 112px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea { border-bottom-color: var(--tk-color-danger); }
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-bottom-color: var(--tk-color-success); }
.tk-field-success .tk-help { color: var(--tk-color-success); }
/* Seluruh kontrol pilihan digambar sendiri — tidak ada tampilan bawaan browser sama sekali.
   Select tidak memakai <select> native karena popup daftar opsinya tidak bisa digayakan CSS;
   sebagai gantinya listbox custom: .tk-select > .tk-select-trigger + .tk-select-menu.
   Buka/tutup: kelas .tk-select-open (dikelola JS/framework) atau fallback :focus-within. */
.tk-select { position: relative; display: inline-grid; min-width: 210px; }
.tk-field .tk-select { display: grid; min-width: 0; }
.tk-select-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-sm);
    width: 100%;
    cursor: pointer;
    text-align: left;
}
.tk-select-trigger > iconify-icon { color: var(--tk-color-text-muted); flex: none; transition: transform var(--tk-transition); }
.tk-select-placeholder { color: var(--tk-color-text-muted); }
.tk-select:focus-within > .tk-select-trigger, .tk-select-open > .tk-select-trigger { border-bottom-color: var(--tk-color-accent); }
.tk-select:focus-within > .tk-select-trigger > iconify-icon, .tk-select-open > .tk-select-trigger > iconify-icon { transform: rotate(180deg); }
.tk-select-menu {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-top: 2px solid var(--tk-color-accent);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg);
    padding: var(--tk-space-sm);
    max-height: 288px;
    overflow: auto;
    display: none;
    flex-direction: column;
    z-index: 30;
}
.tk-select:focus-within > .tk-select-menu, .tk-select-open > .tk-select-menu { display: flex; }
.tk-option {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 11px 12px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    text-align: left;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-option:hover { background: var(--tk-color-surface-2); }
.tk-option-selected { background: color-mix(in srgb, var(--tk-color-accent) 12%, transparent); }
.tk-option-check { margin-left: auto; color: var(--tk-color-accent); display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 10px 12px;
    margin: calc(-1 * var(--tk-space-sm)) calc(-1 * var(--tk-space-sm)) var(--tk-space-sm);
    border-bottom: var(--tk-border-width) solid var(--tk-color-border);
    color: var(--tk-color-text-muted);
}
.tk-select-menu-search input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: none;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
}
.tk-select-menu-search input::placeholder { color: var(--tk-color-text-muted); }
.tk-select-menu-footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-sm) 4px 2px;
    margin-top: var(--tk-space-sm);
    border-top: var(--tk-border-width) solid var(--tk-color-border);
}
.tk-check { display: inline-flex; align-items: center; gap: var(--tk-space-sm); font-size: var(--tk-text-body-sm); cursor: pointer; }
.tk-checkbox, .tk-radio {
    appearance: none;
    width: 17px;
    height: 17px;
    flex: none;
    margin: 0;
    position: relative;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition);
}
.tk-checkbox { border-radius: 0; }
.tk-checkbox:hover, .tk-radio:hover { border-color: var(--tk-color-accent); }
.tk-checkbox:checked { background: var(--tk-color-text); border-color: var(--tk-color-text); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 2px;
    width: 4px;
    height: 8px;
    border-right: 1px solid var(--tk-color-surface);
    border-bottom: 1px solid var(--tk-color-surface);
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked { border: 5px solid var(--tk-color-text); background: var(--tk-color-surface); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: 1px solid var(--tk-color-accent);
    outline-offset: 3px;
}
.tk-toggle {
    position: relative;
    width: 44px;
    height: 22px;
    flex: none;
    margin: 0;
    appearance: none;
    border: 1px solid var(--tk-color-text-muted);
    background: var(--tk-color-surface);
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition);
}
.tk-toggle::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 3px;
    width: 14px;
    height: 14px;
    background: var(--tk-color-text-muted);
    border-radius: var(--tk-radius-full);
    transition: transform var(--tk-transition), background var(--tk-transition);
}
.tk-toggle:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); }
.tk-toggle:checked::after { transform: translateX(21px); background: var(--tk-color-primary-contrast); }

/* == tk: search-filter ========================================== */
.tk-search { position: relative; display: flex; align-items: center; min-width: 240px; }
.tk-search .tk-input { width: 100%; padding-left: 30px; padding-right: 62px; }
.tk-search .tk-input::-webkit-search-cancel-button { -webkit-appearance: none; }
.tk-search-icon { position: absolute; left: 2px; display: inline-flex; color: var(--tk-color-text-muted); pointer-events: none; }
.tk-search-kbd {
    position: absolute;
    right: 2px;
    font-family: var(--tk-font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    color: var(--tk-color-text-muted);
    background: transparent;
    border: 1px solid var(--tk-color-border);
    padding: 3px 7px;
    pointer-events: none;
}
.tk-filter-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
}
.tk-filter-bar .tk-search { flex: 1; }
.tk-filter-bar .tk-select { min-width: 172px; }
.tk-filter-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    border-radius: var(--tk-radius-full);
    background: var(--tk-color-accent);
    color: var(--tk-color-secondary-contrast);
    font-family: var(--tk-font-body);
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0;
}
.tk-filter-active { display: flex; flex-wrap: wrap; align-items: center; gap: var(--tk-space-sm); margin-top: var(--tk-space-md); }

/* == tk: dropdown =============================================== */
.tk-dropdown { position: relative; display: inline-block; }
.tk-dropdown-menu {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    min-width: 216px;
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-top: 2px solid var(--tk-color-accent);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg);
    padding: var(--tk-space-sm);
    display: none;
    flex-direction: column;
    z-index: 30;
}
.tk-dropdown-menu-right { left: auto; right: 0; }
.tk-dropdown-menu-up { top: auto; bottom: calc(100% + 10px); border-top-width: var(--tk-border-width); border-bottom: 2px solid var(--tk-color-accent); }
.tk-dropdown-open > .tk-dropdown-menu, .tk-dropdown:focus-within > .tk-dropdown-menu { display: flex; }
.tk-dropdown-label {
    padding: 6px 12px 8px;
    font-family: var(--tk-font-body);
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--tk-color-text-muted);
}
.tk-dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--tk-space-md);
    padding: 11px 12px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 400;
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    text-decoration: none;
    text-align: left;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-dropdown-item:hover { background: var(--tk-color-surface-2); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-text-muted); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: var(--tk-color-danger-soft); }
.tk-dropdown-divider { height: 1px; background: var(--tk-color-border); border: none; margin: var(--tk-space-sm) 0; }

/* == tk: card =================================================== */
.tk-card {
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-sm);
    overflow: hidden;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-card-header { padding: var(--tk-space-xl) var(--tk-space-xl) 0; }
.tk-card-body { padding: var(--tk-space-xl); }
.tk-card-footer { padding: 0 var(--tk-space-xl) var(--tk-space-xl); display: flex; gap: var(--tk-space-md); }
.tk-card-stat .tk-stat-value {
    font-family: var(--tk-font-heading);
    font-size: 46px;
    font-weight: 300;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin: var(--tk-space-sm) 0;
}
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); }

/* == tk: navigation ============================================= */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-xl);
    padding: var(--tk-space-lg) var(--tk-space-xl);
    background: var(--tk-color-surface);
    border-bottom: var(--tk-border-width) solid var(--tk-color-border);
}
.tk-navbar-brand {
    font-family: var(--tk-font-heading);
    font-weight: 400;
    font-size: 26px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-right: auto;
}
.tk-navbar-link {
    color: var(--tk-color-text-muted);
    text-decoration: none;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    transition: color var(--tk-transition);
}
.tk-navbar-link:hover { color: var(--tk-color-text); }
.tk-navbar-link-active { color: var(--tk-color-text); border-bottom: 1px solid var(--tk-color-accent); padding-bottom: 5px; }
.tk-navbar-dark { background: #16130F; border-bottom-color: color-mix(in srgb, #B08D57 34%, transparent); }
.tk-navbar-dark .tk-navbar-brand { color: #F4EFE6; }
.tk-navbar-dark .tk-navbar-link { color: #F4EFE6; opacity: 0.66; }
.tk-navbar-dark .tk-navbar-link:hover, .tk-navbar-dark .tk-navbar-link-active { opacity: 1; color: #F4EFE6; }
.tk-sidebar {
    width: 252px;
    background: var(--tk-color-surface);
    border-right: var(--tk-border-width) solid var(--tk-color-border);
    padding: var(--tk-space-md);
    display: flex;
    flex-direction: column;
    gap: 2px;
    transition: width var(--tk-transition);
}
.tk-sidebar-item {
    display: flex;
    align-items: center;
    gap: var(--tk-space-md);
    padding: 11px var(--tk-space-md);
    border-radius: var(--tk-radius-sm);
    color: var(--tk-color-text-muted);
    font-size: var(--tk-text-body-sm);
    font-weight: 400;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-sidebar-item-active {
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text);
    box-shadow: inset 2px 0 0 var(--tk-color-accent);
}
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 72px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: 11px var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-xl) var(--tk-space-md) var(--tk-space-sm);
    font-family: var(--tk-font-body);
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
}
.tk-sidebar-group:first-child { padding-top: var(--tk-space-sm); }
.tk-breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--tk-space-sm);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.18em;
}
.tk-breadcrumb a { color: var(--tk-color-text-muted); text-decoration: none; transition: color var(--tk-transition); }
.tk-breadcrumb a:hover { color: var(--tk-color-text); }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.5; }
.tk-breadcrumb-current { color: var(--tk-color-text); }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: var(--tk-border-width) solid var(--tk-color-border);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: var(--tk-space-xl); border-bottom: var(--tk-border-width) solid var(--tk-color-border); }
.tk-tab {
    padding: var(--tk-space-sm) 2px 14px;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    margin-bottom: calc(-1 * var(--tk-border-width));
    transition: color var(--tk-transition), border-color var(--tk-transition);
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-text); border-bottom-color: var(--tk-color-accent); }
.tk-segmented { display: inline-flex; background: transparent; border: var(--tk-border-width) solid var(--tk-color-border); border-radius: var(--tk-radius); padding: 0; gap: 0; }
.tk-segment {
    padding: 10px 20px;
    font-family: var(--tk-font-body);
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: 0;
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-segment + .tk-segment { border-left: var(--tk-border-width) solid var(--tk-color-border); }
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: var(--tk-color-text); color: var(--tk-color-background); }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-body);
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    padding: 5px 11px 5px 13px;
    border-radius: 0;
    border: 1px solid currentColor;
    background: transparent;
    color: var(--tk-color-text-muted);
}
.tk-badge-success { color: var(--tk-color-success); background: var(--tk-color-success-soft); }
.tk-badge-warning { color: var(--tk-color-warning); background: var(--tk-color-warning-soft); }
.tk-badge-danger { color: var(--tk-color-danger); background: var(--tk-color-danger-soft); }
.tk-badge-info { color: var(--tk-color-info); background: var(--tk-color-info-soft); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-body);
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    padding: 6px 11px 6px 13px;
    border-radius: 0;
    border: 1px solid var(--tk-color-border);
    background: transparent;
    color: var(--tk-color-text);
}
.tk-chip-remove { border: none; background: none; cursor: pointer; color: var(--tk-color-text-muted); font-size: 13px; line-height: 1; padding: 0; transition: color var(--tk-transition); }
.tk-chip-remove:hover { color: var(--tk-color-danger); }

/* == tk: alert ================================================== */
.tk-alert {
    display: flex;
    gap: var(--tk-space-md);
    align-items: flex-start;
    padding: var(--tk-space-lg);
    border-radius: var(--tk-radius);
    font-size: var(--tk-text-body-sm);
    border: 1px solid color-mix(in srgb, currentColor 26%, transparent);
    border-left-width: 2px;
}
.tk-alert-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-title); font-weight: 600; display: block; margin-bottom: 2px; }
.tk-alert-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); }
.tk-alert-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); }
.tk-alert-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-alert-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); }
.tk-table th {
    text-align: left;
    font-family: var(--tk-font-body);
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: var(--tk-color-text-muted);
    padding: var(--tk-space-md);
    border-bottom: 1px solid var(--tk-color-text);
}
.tk-table td { padding: var(--tk-space-lg) var(--tk-space-md); border-bottom: 1px solid var(--tk-color-border); font-variant-numeric: tabular-nums; }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: var(--tk-color-surface-2); }
.tk-table .tk-table-actions { text-align: right; white-space: nowrap; }
.tk-action-btn {
    width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    border-radius: var(--tk-radius-sm);
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-action-btn:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-action-btn-danger:hover { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-pagination { display: flex; gap: var(--tk-space-xs); align-items: center; }
.tk-page {
    min-width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    border: 1px solid transparent;
    background: none;
    font-family: var(--tk-font-heading);
    font-size: var(--tk-text-body);
    color: var(--tk-color-text);
    cursor: pointer;
    transition: border-color var(--tk-transition), background var(--tk-transition), color var(--tk-transition);
}
.tk-page:hover { border-color: var(--tk-color-accent); }
.tk-page-active { border-color: var(--tk-color-text); background: var(--tk-color-text); color: var(--tk-color-background); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: color-mix(in srgb, #16130F 62%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-top: 2px solid var(--tk-color-accent);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg);
    max-width: 480px;
    width: 100%;
}
.tk-modal .tk-card-header, .tk-drawer .tk-card-header { padding: var(--tk-space-xl) var(--tk-space-xl) 0; }
.tk-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 384px;
    background: var(--tk-color-surface);
    border-left: var(--tk-border-width) solid var(--tk-color-border);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
/* Pemuat pun bergerak lambat: satu putaran penuh butuh lebih dari satu detik. */
.tk-spinner {
    width: 26px;
    height: 26px;
    border: 1px solid var(--tk-color-border);
    border-top-color: var(--tk-color-accent);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 1.4s linear infinite;
}
.tk-progress { height: 1px; background: var(--tk-color-border); border-radius: 0; overflow: hidden; }
.tk-progress-bar { height: 100%; background: var(--tk-color-accent); transition: width 900ms cubic-bezier(0.16, 0.84, 0.24, 1); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 20%, var(--tk-color-background) 50%, var(--tk-color-surface-2) 80%);
    background-size: 220% 100%;
    animation: tk-shimmer 2.6s ease-in-out infinite;
    border-radius: 0;
}
@keyframes tk-shimmer { to { background-position: -220% 0; } }

/* == tk: empty ================================================== */
.tk-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--tk-space-md);
    padding: var(--tk-space-3xl) var(--tk-space-xl);
    text-align: center;
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    background: var(--tk-color-surface);
}
.tk-empty-icon { color: color-mix(in srgb, var(--tk-color-accent) 70%, var(--tk-color-text-muted)); }
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: 600; font-size: var(--tk-text-h3); margin: 0; }

/* == tk: content-blocks ========================================= */
.tk-hero { text-align: center; padding: var(--tk-space-section) var(--tk-space-xl); }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); max-width: 60ch; margin: 0 auto var(--tk-space-2xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-lg); justify-content: center; flex-wrap: wrap; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-2xl); }
.tk-feature { display: flex; flex-direction: column; gap: var(--tk-space-md); }
.tk-feature-icon {
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid var(--tk-color-accent);
    border-radius: var(--tk-radius-full);
    color: var(--tk-color-primary);
}
.tk-cta {
    background: var(--tk-color-text);
    color: var(--tk-color-background);
    border-radius: var(--tk-radius-lg);
    padding: var(--tk-space-3xl) var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-2xl);
}
.tk-cta .tk-h3 { color: var(--tk-color-background); margin: 0 0 var(--tk-space-sm); font-family: var(--tk-font-heading); }
.tk-cta .tk-muted { color: var(--tk-color-background); opacity: 0.7; }
.tk-cta .tk-btn-primary { background: var(--tk-color-background); color: var(--tk-color-text); }
.tk-cta .tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-accent); color: var(--tk-color-secondary-contrast); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-xl); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: luxury-editorial flavor ================================ */
/* Penimpa karakter di atas struktur kontrak: menang kaskade karena berada di ekor berkas.
   Enam perkakas di bawah inilah yang membedakan kit ini dari kit editorial biasa —
   semuanya membaca token, tidak satu pun menanam nilai heksa primer atau aksen. */

/* Display turun ke bobot 300: serif kontras tinggi paling anggun saat besar dan ringan,
   dan goresan tipisnya baru terlihat di ukuran ini. */
.tk-display { font-weight: 300; letter-spacing: -0.025em; }
.tk-h1 { font-weight: 300; }

/* Eyebrow: label rubrik di atas judul seksi — garis emas pendek lalu teks berjarak lebar.
   Ini penanda hierarki utama kit, dipakai di setiap pembuka seksi. */
.tk-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-md);
    font-family: var(--tk-font-body);
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.32em;
    color: var(--tk-color-primary);
    margin: 0 0 var(--tk-space-lg);
}
.tk-eyebrow::before { content: ''; width: 42px; height: 1px; background: var(--tk-color-accent); flex: none; }
.tk-eyebrow-center { justify-content: center; }
.tk-eyebrow-center::after { content: ''; width: 42px; height: 1px; background: var(--tk-color-accent); flex: none; }

/* Garis rambut ganda: satu garis emas pucat di atas satu garis border. Pemisah antar seksi
   yang terasa dijilid, bukan sekadar dibatasi. */
.tk-rule { height: 3px; border: none; margin: 0; background: none; position: relative; }
.tk-rule::before, .tk-rule::after { content: ''; position: absolute; left: 0; right: 0; height: 1px; }
.tk-rule::before { top: 0; background: var(--tk-color-accent); opacity: 0.55; }
.tk-rule::after { bottom: 0; background: var(--tk-color-border); }

/* Plate: bingkai fotografi premium. Gambar dibiarkan bicara — hanya garis emas tipis di
   dalam tepinya — dan membesar sangat lambat saat disentuh, 1200ms, tanpa pernah menggeser
   tata letak karena zoom terjadi di balik overflow. */
.tk-plate { position: relative; overflow: hidden; background: var(--tk-color-surface-2); }
.tk-plate::after {
    content: '';
    position: absolute;
    inset: var(--tk-space-md);
    border: 1px solid color-mix(in srgb, var(--tk-color-accent) 55%, transparent);
    pointer-events: none;
    z-index: 1;
}
.tk-plate img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform 1200ms cubic-bezier(0.16, 0.84, 0.24, 1); }
.tk-plate:hover img { transform: scale(1.045); }
.tk-plate-caption {
    margin: var(--tk-space-md) 0 0;
    font-family: var(--tk-font-heading);
    font-style: italic;
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text-muted);
}

/* Drop cap: pembuka artikel bergaya cetak. Huruf pertama diturunkan tiga baris dan
   diwarnai perunggu. */
.tk-drop-cap::first-letter {
    float: left;
    font-family: var(--tk-font-heading);
    font-weight: 400;
    font-size: 4.6em;
    line-height: 0.82;
    margin: 0.06em var(--tk-space-md) 0 0;
    color: var(--tk-color-primary);
}

/* Gild: garis bawah emas yang tumbuh dari kiri, 620ms. Dipakai pada tautan navigasi dan
   tautan "baca selengkapnya" — gerak yang cukup lambat untuk terasa disengaja. */
.tk-gild { position: relative; text-decoration: none; color: var(--tk-color-text); }
.tk-gild::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 1px;
    background: var(--tk-color-accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 620ms cubic-bezier(0.16, 0.84, 0.24, 1);
}
.tk-gild:hover::after { transform: scaleX(1); }

/* Reveal: kemunculan naik perlahan 900ms. Halaman contoh memasangnya di pembuka seksi;
   animasinya sekali jalan (forwards) supaya isi tidak pernah tertinggal transparan. */
.tk-reveal { animation: tk-rise 900ms cubic-bezier(0.16, 0.84, 0.24, 1) both; }
.tk-reveal-2 { animation-delay: 140ms; }
.tk-reveal-3 { animation-delay: 280ms; }
@keyframes tk-rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }

/* Kolom teks dibatasi seperti kolom cetak: baris terlalu panjang adalah tanda paling cepat
   bahwa sebuah halaman tidak dirancang untuk dibaca. */
.tk-prose { max-width: 68ch; }
.tk-prose p { margin: 0 0 var(--tk-space-lg); }
/* Kutipan blok: serif miring besar tanpa tanda kutip gambar. */
.tk-quote {
    margin: var(--tk-space-2xl) 0;
    padding-left: var(--tk-space-xl);
    border-left: 1px solid var(--tk-color-accent);
    font-family: var(--tk-font-heading);
    font-style: italic;
    font-size: var(--tk-text-h3);
    line-height: 1.4;
    color: var(--tk-color-text);
}

/* Kartu tanpa kotak: di halaman editorial, kartu produk dan artikel cukup dibuka garis
   rambut di atasnya. Varian ini dipakai grid katalog dan daftar artikel. */
.tk-card-bare { border: none; border-top: 1px solid var(--tk-color-text); background: transparent; }
.tk-card-bare .tk-card-body { padding: var(--tk-space-lg) 0 0; }
.tk-card:hover { border-color: color-mix(in srgb, var(--tk-color-accent) 60%, var(--tk-color-border)); }
.tk-card-bare:hover { border-color: var(--tk-color-text); }

/* Kolom fitur dibuka garis rambut seperti rubrik majalah. */
.tk-feature { border-top: 1px solid var(--tk-color-border); padding-top: var(--tk-space-lg); }
/* Deck hero: kalimat pembuka berhuruf serif miring, bukan sans — nada suaranya langsung
   berubah dari antarmuka menjadi terbitan. */
.tk-hero-sub { font-family: var(--tk-font-heading); font-style: italic; font-size: 25px; line-height: 1.5; }
/* Fotografi tanpa hiasan: sudut tetap tajam di mana pun gambar muncul. */
.tk-card img, .tk-hero img, figure img { border-radius: 0; }

/* Hormati preferensi sistem: seluruh gerak lambat kit ini dimatikan, bukan dipercepat. */
@media (prefers-reduced-motion: reduce) {
    .tk-reveal { animation: none; }
    .tk-plate img, .tk-gild::after, .tk-progress-bar { transition: none; }
    .tk-plate:hover img { transform: none; }
    .tk-spinner { animation-duration: 3s; }
    .tk-skeleton { animation: none; }
}

/* Layar sempit: skala display raksasa harus turun, dan whitespace 176px dipotong hampir
   separuh supaya halaman tidak berubah menjadi rangkaian layar kosong. */
@media (max-width: 720px) {
    :root {
        --tk-text-display: 46px;
        --tk-text-h1: 36px;
        --tk-text-h2: 28px;
        --tk-text-h3: 22px;
        --tk-space-section: 96px;
    }
    .tk-hero-sub { font-size: 19px; }
    .tk-feature-grid, .tk-grid-2, .tk-grid-3, .tk-grid-4 { grid-template-columns: 1fr; }
    .tk-cta { flex-direction: column; align-items: flex-start; }
}
`;
