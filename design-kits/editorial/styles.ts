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
 * `styles.css` kit Editorial.
 *
 * Estetika majalah premium: headline serif Playfair Display raksasa, garis rambut
 * (hairline rules) sebagai pemisah, whitespace luas, grid kuat, dan fotografi tanpa bingkai
 * berlebih. Warna nyaris hanya tinta di atas kertas — satu aksen oxblood merah anggur
 * dipakai hemat untuk penekanan. Tanpa radius, nyaris tanpa bayangan; kedalaman datang dari
 * tipografi dan aturan garis, seperti spread majalah cetak. Label kecil (tombol, badge,
 * link navbar) beruppercase berjarak renggang seperti masthead. Struktur selektor dan blok
 * `== tk: ... ==` mengikuti kontrak `docs/kontrak-kit-design.md`; wajahnya lahir dari
 * nilai token plus blok "flavor" di ekor berkas.
 */
export const EDITORIAL_STYLES = `/* Editorial — kit design TOKENAI.
   Estetika majalah premium: headline serif besar, hairline rules, whitespace luas,
   satu aksen oxblood dipakai hemat.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #8E1F2C;
    --tk-color-primary-hover: #741823;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: #FFFFFF;
    --tk-color-secondary-hover: #F5F3EF;
    --tk-color-secondary-contrast: #121212;
    --tk-color-accent: #121212;
    --tk-color-background: #FFFFFF;
    --tk-color-surface: #FFFFFF;
    --tk-color-surface-2: #F5F3EF;
    --tk-color-text: #121212;
    --tk-color-text-muted: #6B6B6B;
    --tk-color-border: #E0DDD6;
    --tk-color-success: #2F6B47;
    --tk-color-success-soft: #E8F1EB;
    --tk-color-warning: #8A6A1F;
    --tk-color-warning-soft: #F5EEDC;
    --tk-color-danger: #A31621;
    --tk-color-danger-soft: #F7E4E4;
    --tk-color-info: #2B4C7E;
    --tk-color-info-soft: #E6ECF4;

    --tk-font-heading: 'Playfair Display', Georgia, serif;
    --tk-font-body: 'Libre Franklin', system-ui, sans-serif;
    --tk-font-mono: 'Spline Sans Mono', ui-monospace, monospace;
    --tk-weight-heading: 700;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.05;
    --tk-leading-body: 1.65;

    --tk-text-display: 64px;
    --tk-text-h1: 48px;
    --tk-text-h2: 34px;
    --tk-text-h3: 24px;
    --tk-text-h4: 19px;
    --tk-text-title: 17px;
    --tk-text-body-lg: 18px;
    --tk-text-body: 16px;
    --tk-text-body-sm: 14px;
    --tk-text-caption: 12px;

    --tk-space-xs: 4px;
    --tk-space-sm: 8px;
    --tk-space-md: 16px;
    --tk-space-lg: 24px;
    --tk-space-xl: 32px;
    --tk-space-2xl: 48px;
    --tk-space-3xl: 64px;
    /* Whitespace luas adalah bagian dari bahasa design: section lebih lega dari kit lain. */
    --tk-space-section: 112px;

    /* Tanpa radius: sudut tajam seperti potongan halaman cetak. */
    --tk-radius-sm: 0px;
    --tk-radius: 0px;
    --tk-radius-lg: 0px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    /* Nyaris tanpa bayangan: kartu datar dipisah hairline; hanya lapisan melayang
       (menu, modal) yang boleh melempar bayangan lembut. */
    --tk-shadow-sm: none;
    --tk-shadow: 0 12px 32px rgba(18, 18, 18, 0.08);
    --tk-shadow-lg: 0 24px 56px rgba(18, 18, 18, 0.14);

    --tk-transition: 150ms ease;
    --tk-container: 1200px;
}

/* Mode gelap: edisi malam — kertas menjadi tinta, tinta menjadi gading, dan oxblood
   memerah muda seperti tinta pudar. Aktifkan dengan atribut data-tk-theme="dark" pada
   <html> atau <body>. */
[data-tk-theme="dark"] {
    --tk-color-primary: #C4525D;
    --tk-color-primary-hover: #D2707A;
    --tk-color-primary-contrast: #121212;
    --tk-color-secondary: #1A1A1A;
    --tk-color-secondary-hover: #242220;
    --tk-color-secondary-contrast: #F5F3EF;
    --tk-color-accent: #F5F3EF;
    --tk-color-background: #121212;
    --tk-color-surface: #1A1A1A;
    --tk-color-surface-2: #242220;
    --tk-color-text: #F5F3EF;
    --tk-color-text-muted: #A8A49C;
    --tk-color-border: #383632;
    --tk-color-success: #7FB598;
    --tk-color-success-soft: #1C2A22;
    --tk-color-warning: #CDAC55;
    --tk-color-warning-soft: #2C2515;
    --tk-color-danger: #D96A73;
    --tk-color-danger-soft: #301719;
    --tk-color-info: #7E9CC8;
    --tk-color-info-soft: #1A222E;
    --tk-shadow-sm: none;
    --tk-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
    --tk-shadow-lg: 0 24px 56px rgba(0, 0, 0, 0.6);
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
    padding: 0 var(--tk-space-lg);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
    letter-spacing: -0.01em;
}
.tk-display { font-size: var(--tk-text-display); }
.tk-h1 { font-size: var(--tk-text-h1); }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-size: var(--tk-text-title); font-weight: 600; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); text-transform: uppercase; letter-spacing: 0.08em; }
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link { color: var(--tk-color-text); font-weight: 500; text-decoration: underline; text-decoration-color: var(--tk-color-primary); text-decoration-thickness: 1.5px; text-underline-offset: 3px; }
.tk-link:hover { color: var(--tk-color-primary); }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.9em; background: var(--tk-color-surface-2); padding: 2px 6px; border: 1px solid var(--tk-color-border); }

/* == tk: button ================================================= */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-caption);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    line-height: 1;
    padding: 13px 22px;
    border-radius: var(--tk-radius-sm);
    border: var(--tk-border-width) solid transparent;
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), border-color var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); border-color: var(--tk-color-text); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-btn-outline { background: transparent; color: var(--tk-color-text); border-color: var(--tk-color-border); }
.tk-btn-outline:hover:not(:disabled) { border-color: var(--tk-color-text); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-danger { background: var(--tk-color-danger); color: #FFFFFF; }
.tk-btn-danger:hover:not(:disabled) { filter: brightness(0.9); }
.tk-btn-text { background: none; color: var(--tk-color-primary); padding-left: 4px; padding-right: 4px; }
.tk-btn-text:hover:not(:disabled) { text-decoration: underline; text-underline-offset: 4px; }
.tk-btn-sm { font-size: 11px; padding: 9px 14px; }
.tk-btn-lg { font-size: var(--tk-text-body-sm); padding: 17px 30px; }
.tk-btn-icon { padding: 13px; }
.tk-btn-loading { position: relative; color: transparent !important; pointer-events: none; }
.tk-btn-loading::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    border: 2px solid var(--tk-color-primary-contrast);
    border-top-color: transparent;
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.6s linear infinite;
}
.tk-btn-secondary.tk-btn-loading::after, .tk-btn-outline.tk-btn-loading::after, .tk-btn-ghost.tk-btn-loading::after {
    border-color: var(--tk-color-text);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
.tk-field { display: flex; flex-direction: column; gap: var(--tk-space-xs); margin-bottom: var(--tk-space-md); }
.tk-label { font-size: var(--tk-text-caption); font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--tk-color-text); }
.tk-help { font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 12px 14px;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-text);
    box-shadow: 0 1px 0 var(--tk-color-text);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: 0 1px 0 var(--tk-color-danger);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: 0 1px 0 var(--tk-color-success); }
.tk-field-success .tk-help { color: var(--tk-color-success); }
/* Seluruh kontrol pilihan digambar sendiri — tidak ada tampilan bawaan browser sama sekali.
   Select tidak memakai <select> native karena popup daftar opsinya tidak bisa digayakan CSS;
   sebagai gantinya listbox custom: .tk-select > .tk-select-trigger + .tk-select-menu.
   Buka/tutup: kelas .tk-select-open (dikelola JS/framework) atau fallback :focus-within. */
.tk-select { position: relative; display: inline-grid; min-width: 200px; }
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
.tk-select-trigger > iconify-icon { color: var(--tk-color-text-muted); flex: none; }
.tk-select-placeholder { color: var(--tk-color-text-muted); }
.tk-select:focus-within > .tk-select-trigger, .tk-select-open > .tk-select-trigger {
    border-color: var(--tk-color-text);
    box-shadow: 0 1px 0 var(--tk-color-text);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-text);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg);
    padding: var(--tk-space-xs);
    max-height: 280px;
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
    padding: 10px 12px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    text-align: left;
    transition: background var(--tk-transition);
}
.tk-option:hover { background: var(--tk-color-surface-2); }
.tk-option-selected { background: var(--tk-color-surface-2); font-weight: 600; }
.tk-option-check { margin-left: auto; color: var(--tk-color-primary); display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 10px 12px;
    margin: calc(-1 * var(--tk-space-xs)) calc(-1 * var(--tk-space-xs)) var(--tk-space-xs);
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
    padding: var(--tk-space-sm) 6px 2px;
    margin-top: var(--tk-space-xs);
    border-top: var(--tk-border-width) solid var(--tk-color-border);
}
.tk-check { display: inline-flex; align-items: center; gap: var(--tk-space-sm); font-size: var(--tk-text-body-sm); cursor: pointer; }
.tk-checkbox, .tk-radio {
    appearance: none;
    width: 18px;
    height: 18px;
    flex: none;
    margin: 0;
    position: relative;
    background: var(--tk-color-surface);
    border: 1.5px solid var(--tk-color-text);
    cursor: pointer;
    transition: background var(--tk-transition);
}
.tk-checkbox { border-radius: 0; }
.tk-checkbox:hover, .tk-radio:hover { background: var(--tk-color-surface-2); }
.tk-checkbox:checked { background: var(--tk-color-text); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 2px;
    width: 4px;
    height: 8px;
    border-right: 2px solid var(--tk-color-background);
    border-bottom: 2px solid var(--tk-color-background);
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked { border: 5px solid var(--tk-color-text); background: var(--tk-color-surface); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: 1.5px solid var(--tk-color-primary);
    outline-offset: 2px;
}
.tk-toggle { position: relative; width: 42px; height: 24px; flex: none; margin: 0; appearance: none; border: 1.5px solid var(--tk-color-text); background: var(--tk-color-surface); border-radius: var(--tk-radius-full); cursor: pointer; transition: background var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 2.5px; left: 3px; width: 15px; height: 15px; background: var(--tk-color-text); border-radius: var(--tk-radius-full); transition: transform var(--tk-transition), background var(--tk-transition); }
.tk-toggle:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); }
.tk-toggle:checked::after { transform: translateX(17px); background: var(--tk-color-primary-contrast); }

/* == tk: search-filter ========================================== */
.tk-search { position: relative; display: flex; align-items: center; min-width: 220px; }
.tk-search .tk-input { width: 100%; padding-left: 38px; padding-right: 60px; }
.tk-search .tk-input::-webkit-search-cancel-button { -webkit-appearance: none; }
.tk-search-icon { position: absolute; left: 12px; display: inline-flex; color: var(--tk-color-text-muted); pointer-events: none; }
.tk-search-kbd {
    position: absolute;
    right: 10px;
    font-family: var(--tk-font-mono);
    font-size: 11px;
    color: var(--tk-color-text-muted);
    background: var(--tk-color-surface-2);
    border: 1px solid var(--tk-color-border);
    padding: 2px 6px;
    pointer-events: none;
}
.tk-filter-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-md);
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
}
.tk-filter-bar .tk-search { flex: 1; }
.tk-filter-bar .tk-select { min-width: 170px; }
.tk-filter-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 19px;
    height: 19px;
    padding: 0 5px;
    border-radius: var(--tk-radius-full);
    background: var(--tk-color-primary);
    color: var(--tk-color-primary-contrast);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 600;
}
.tk-filter-active { display: flex; flex-wrap: wrap; align-items: center; gap: var(--tk-space-sm); margin-top: var(--tk-space-sm); }

/* == tk: dropdown =============================================== */
.tk-dropdown { position: relative; display: inline-block; }
.tk-dropdown-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    min-width: 200px;
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-text);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg);
    padding: var(--tk-space-xs);
    display: none;
    flex-direction: column;
    z-index: 30;
}
.tk-dropdown-menu-right { left: auto; right: 0; }
.tk-dropdown-menu-up { top: auto; bottom: calc(100% + 6px); }
.tk-dropdown-open > .tk-dropdown-menu, .tk-dropdown:focus-within > .tk-dropdown-menu { display: flex; }
.tk-dropdown-label { padding: 6px 12px; font-family: var(--tk-font-mono); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--tk-color-text-muted); }
.tk-dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 10px 12px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    text-decoration: none;
    text-align: left;
    transition: background var(--tk-transition);
}
.tk-dropdown-item:hover { background: var(--tk-color-surface-2); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-text-muted); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: var(--tk-color-danger-soft); }
.tk-dropdown-divider { height: 1px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) 0; }

/* == tk: card =================================================== */
.tk-card {
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-sm);
    overflow: hidden;
}
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-sm); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-weight: var(--tk-weight-heading); font-family: var(--tk-font-heading); }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 600; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 600; }

/* == tk: navigation ============================================= */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: var(--tk-border-width) solid var(--tk-color-text);
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: var(--tk-weight-heading); font-size: 22px; margin-right: auto; }
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: var(--tk-text-caption); font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; }
.tk-navbar-link:hover { color: var(--tk-color-text); }
.tk-navbar-link-active { color: var(--tk-color-text); border-bottom: 2px solid var(--tk-color-primary); padding-bottom: 4px; }
.tk-navbar-dark { background: #121212; border-bottom-color: #121212; }
.tk-navbar-dark .tk-navbar-brand { color: #F5F3EF; }
.tk-navbar-dark .tk-navbar-link { color: #F5F3EF; opacity: 0.72; }
.tk-navbar-dark .tk-navbar-link:hover, .tk-navbar-dark .tk-navbar-link-active { opacity: 1; color: #F5F3EF; }
.tk-sidebar {
    width: 240px;
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
    gap: var(--tk-space-sm);
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-radius: var(--tk-radius-sm);
    color: var(--tk-color-text-muted);
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-sidebar-item-active { background: var(--tk-color-surface-2); color: var(--tk-color-text); box-shadow: inset 2px 0 0 var(--tk-color-primary); font-weight: 600; }
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 68px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
}
.tk-sidebar-group:first-child { padding-top: var(--tk-space-xs); }
.tk-breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--tk-space-sm);
    font-size: var(--tk-text-caption);
    text-transform: uppercase;
    letter-spacing: 0.08em;
}
.tk-breadcrumb a { color: var(--tk-color-text-muted); text-decoration: none; }
.tk-breadcrumb a:hover { color: var(--tk-color-text); text-decoration: underline; }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.55; }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 600; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: var(--tk-border-width) solid var(--tk-color-text);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: var(--tk-space-lg); border-bottom: var(--tk-border-width) solid var(--tk-color-border); }
.tk-tab {
    padding: var(--tk-space-sm) 2px 12px;
    font-size: var(--tk-text-caption);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 2px solid transparent;
    margin-bottom: calc(-1 * var(--tk-border-width));
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-text); border-bottom-color: var(--tk-color-primary); }
.tk-segmented { display: inline-flex; background: var(--tk-color-surface); border: var(--tk-border-width) solid var(--tk-color-text); border-radius: var(--tk-radius); padding: 0; gap: 0; }
.tk-segment {
    padding: 8px 16px;
    font-size: var(--tk-text-caption);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: 0;
    cursor: pointer;
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: var(--tk-color-text); color: var(--tk-color-background); }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 4px 10px;
    border-radius: 0;
    border: 1px solid currentColor;
    background: var(--tk-color-surface);
    color: var(--tk-color-text);
}
.tk-badge-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); }
.tk-badge-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); }
.tk-badge-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-badge-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 5px 10px;
    border-radius: 0;
    border: 1px solid var(--tk-color-border);
    background: var(--tk-color-surface);
    color: var(--tk-color-text);
}
.tk-chip-remove { border: none; background: none; cursor: pointer; color: var(--tk-color-text-muted); font-size: 12px; line-height: 1; padding: 0; }
.tk-chip-remove:hover { color: var(--tk-color-danger); }

/* == tk: alert ================================================== */
.tk-alert {
    display: flex;
    gap: var(--tk-space-sm);
    align-items: flex-start;
    padding: var(--tk-space-md);
    border-radius: var(--tk-radius);
    font-size: var(--tk-text-body-sm);
    border: 1px solid currentColor;
    border-left-width: 3px;
}
.tk-alert-title { font-weight: 700; display: block; margin-bottom: 2px; }
.tk-alert-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); }
.tk-alert-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); }
.tk-alert-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-alert-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); }
.tk-table th {
    text-align: left;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--tk-color-text);
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-bottom: 2px solid var(--tk-color-text);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: 1px solid var(--tk-color-border); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: var(--tk-color-surface-2); }
.tk-table .tk-table-actions { text-align: right; white-space: nowrap; }
.tk-action-btn {
    width: 30px;
    height: 30px;
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
    min-width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    border: 1px solid transparent;
    background: none;
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    cursor: pointer;
    transition: border-color var(--tk-transition);
}
.tk-page:hover { border-color: var(--tk-color-border); }
.tk-page-active { border-color: var(--tk-color-text); background: var(--tk-color-text); color: var(--tk-color-background); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(18, 18, 18, 0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-text);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg);
    max-width: 440px;
    width: 100%;
}
.tk-modal .tk-card-header, .tk-drawer .tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 360px;
    background: var(--tk-color-surface);
    border-left: var(--tk-border-width) solid var(--tk-color-text);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 24px;
    height: 24px;
    border: 2px solid var(--tk-color-border);
    border-top-color: var(--tk-color-text);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.7s linear infinite;
}
.tk-progress { height: 4px; background: var(--tk-color-surface-2); border-radius: 0; overflow: hidden; }
.tk-progress-bar { height: 100%; background: var(--tk-color-primary); transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, var(--tk-color-background) 50%, var(--tk-color-surface-2) 75%);
    background-size: 200% 100%;
    animation: tk-shimmer 1.5s infinite;
    border-radius: 0;
}
@keyframes tk-shimmer { to { background-position: -200% 0; } }

/* == tk: empty ================================================== */
.tk-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-2xl) var(--tk-space-lg);
    text-align: center;
    border: var(--tk-border-width) dashed var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    background: var(--tk-color-surface);
}
.tk-empty-icon { color: var(--tk-color-text-muted); }
.tk-empty-title { font-weight: 700; font-size: var(--tk-text-body); font-family: var(--tk-font-heading); }

/* == tk: content-blocks ========================================= */
.tk-hero { text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); }
.tk-hero .tk-display { margin-bottom: var(--tk-space-md); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); max-width: 560px; margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-xl); }
.tk-feature { display: flex; flex-direction: column; gap: var(--tk-space-sm); }
.tk-feature-icon {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid var(--tk-color-text);
    border-radius: var(--tk-radius-full);
    color: var(--tk-color-text);
}
.tk-cta {
    background: var(--tk-color-text);
    color: var(--tk-color-background);
    border-radius: var(--tk-radius-lg);
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
}
.tk-cta .tk-h3 { color: var(--tk-color-background); margin: 0; font-family: var(--tk-font-heading); }
.tk-cta .tk-muted { color: var(--tk-color-background); opacity: 0.75; }
.tk-cta .tk-btn-primary { background: var(--tk-color-background); color: var(--tk-color-text); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: editorial flavor ======================================= */
/* Penimpa karakter editorial di atas struktur kontrak: menang kaskade karena berada di
   ekor berkas. Bahasa majalah cetak — kolom fitur dibuka aturan garis rambut seperti rubrik,
   deck hero berhuruf serif miring, dan fotografi dibiarkan polos tanpa bingkai. */
.tk-feature {
    border-top: 1px solid var(--tk-color-text);
    padding-top: var(--tk-space-md);
}
/* Deck (subjudul hero) seperti kalimat pembuka artikel: serif miring, sedikit lebih besar. */
.tk-hero-sub {
    font-family: var(--tk-font-heading);
    font-style: italic;
    font-size: 21px;
}
/* Fotografi besar tanpa hiasan: sudut tajam, biarkan gambarnya yang bicara. */
.tk-card img, .tk-hero img, figure img { border-radius: 0; }
`;
