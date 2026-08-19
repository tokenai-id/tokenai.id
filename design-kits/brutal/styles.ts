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
 * `styles.css` kit Brutal.
 *
 * Estetika web-brutalism murni: putih dan hitam berhadapan tanpa kompromi, border 3px di
 * mana-mana, tanpa radius dan nyaris tanpa bayangan — kedalaman cukup dari garis dan blok
 * warna. Tipografi Anton raksasa serba kapital memimpin halaman; biru elektrik dan stabilo
 * kuning dipakai sebagai pukulan aksen. Berbeda dari kit Zine (zine fotokopian: kertas
 * pucat, bayangan offset, mono di mana-mana), Brutal sengaja tampil seperti dokumen mentah.
 * Struktur selektor dan blok `== tk: ... ==` mengikuti kontrak `docs/kontrak-kit-design.md`;
 * wajah brutal lahir dari nilai token plus blok "flavor" di ekor berkas.
 */
export const BRUTAL_STYLES = `/* Brutal — kit design TOKENAI.
   Estetika web-brutalism: mentah dan keras — tipografi raksasa, kontras hitam-putih tajam,
   border tebal, aksen elektrik, tanpa polesan.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #2400FF;
    --tk-color-primary-hover: #1B00BF;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: #FFFFFF;
    --tk-color-secondary-hover: #E5FF00;
    --tk-color-secondary-contrast: #000000;
    --tk-color-accent: #FF0080;
    --tk-color-background: #FFFFFF;
    --tk-color-surface: #FFFFFF;
    --tk-color-surface-2: #F0F0F0;
    --tk-color-text: #000000;
    --tk-color-text-muted: #4D4D4D;
    --tk-color-border: #000000;
    --tk-color-success: #008A22;
    --tk-color-success-soft: #D8F5DE;
    --tk-color-warning: #9A6A00;
    --tk-color-warning-soft: #FFF3B8;
    --tk-color-danger: #E60000;
    --tk-color-danger-soft: #FFD9D9;
    --tk-color-info: #2400FF;
    --tk-color-info-soft: #DCE0FF;

    --tk-font-heading: 'Anton', Impact, system-ui, sans-serif;
    --tk-font-body: 'Inter Tight', system-ui, sans-serif;
    --tk-font-mono: 'Courier Prime', ui-monospace, monospace;
    --tk-weight-heading: 400;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.0;
    --tk-leading-body: 1.55;

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
    --tk-space-section: 96px;

    --tk-radius-sm: 0px;
    --tk-radius: 0px;
    --tk-radius-lg: 0px;
    --tk-radius-full: 0px;

    --tk-border-width: 3px;
    --tk-shadow-sm: none;
    --tk-shadow: none;
    --tk-shadow-lg: 8px 8px 0 var(--tk-color-border);

    --tk-transition: 80ms linear;
    --tk-container: 1200px;

    /* Token khas brutal (bukan kontrak): blok stabilo di belakang judul hero. */
    --tk-brut-marker: #E5FF00;
}

/* Mode gelap: negatif — putih dan hitam bertukar tempat, biru elektrik berganti kuning
   asam yang menyala di kegelapan. Aktifkan dengan atribut data-tk-theme="dark" pada
   <html> atau <body>. */
[data-tk-theme="dark"] {
    --tk-color-primary: #CCFF00;
    --tk-color-primary-hover: #E0FF4D;
    --tk-color-primary-contrast: #000000;
    --tk-color-secondary: #000000;
    --tk-color-secondary-hover: #1F1F1F;
    --tk-color-secondary-contrast: #FFFFFF;
    --tk-color-accent: #FF4DA6;
    --tk-color-background: #000000;
    --tk-color-surface: #000000;
    --tk-color-surface-2: #1A1A1A;
    --tk-color-text: #FFFFFF;
    --tk-color-text-muted: #B3B3B3;
    --tk-color-border: #FFFFFF;
    --tk-color-success: #4DFF88;
    --tk-color-success-soft: #0E2E18;
    --tk-color-warning: #FFD84D;
    --tk-color-warning-soft: #33290A;
    --tk-color-danger: #FF4D4D;
    --tk-color-danger-soft: #330E0E;
    --tk-color-info: #CCFF00;
    --tk-color-info-soft: #262E0A;
    --tk-shadow-lg: 8px 8px 0 var(--tk-color-border);
    --tk-brut-marker: #CCFF00;
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
    letter-spacing: 0.005em;
}
.tk-display { font-size: var(--tk-text-display); }
.tk-h1 { font-size: var(--tk-text-h1); }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-size: var(--tk-text-title); font-weight: 700; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); }
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link { color: var(--tk-color-accent); text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; }
.tk-link:hover { background: var(--tk-color-accent); color: var(--tk-color-background); text-decoration: none; }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.9em; background: var(--tk-color-surface-2); padding: 2px 6px; border: 1px solid var(--tk-color-border); }

/* == tk: button ================================================= */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-body-sm);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    line-height: 1;
    padding: 12px 18px;
    border-radius: var(--tk-radius-sm);
    border: var(--tk-border-width) solid var(--tk-color-border);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), transform var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.tk-btn:not(:disabled):active { transform: translate(3px, 3px); }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); }
.tk-btn-primary:active:not(:disabled) { background: var(--tk-color-primary); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); color: #000000; }
.tk-btn-outline { background: transparent; color: var(--tk-color-text); border-color: var(--tk-color-border); }
.tk-btn-outline:hover:not(:disabled) { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); border-color: transparent; }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-danger { background: var(--tk-color-danger); color: #FFFFFF; }
.tk-btn-danger:hover:not(:disabled) { filter: brightness(0.85); }
.tk-btn-text { background: none; color: var(--tk-color-accent); border-color: transparent; padding-left: 4px; padding-right: 4px; }
.tk-btn-text:hover:not(:disabled) { text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; }
.tk-btn-sm { font-size: var(--tk-text-caption); padding: 8px 12px; border-width: 2px; }
.tk-btn-lg { font-size: var(--tk-text-body); padding: 16px 26px; }
.tk-btn-icon { padding: 12px; }
.tk-btn-loading { position: relative; color: transparent !important; pointer-events: none; }
.tk-btn-loading::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    border: 2px solid var(--tk-color-primary-contrast);
    border-top-color: transparent;
    border-radius: 999px;
    animation: tk-spin 0.6s linear infinite;
}
.tk-btn-secondary.tk-btn-loading::after, .tk-btn-outline.tk-btn-loading::after, .tk-btn-ghost.tk-btn-loading::after {
    border-color: var(--tk-color-text);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
.tk-field { display: flex; flex-direction: column; gap: var(--tk-space-xs); margin-bottom: var(--tk-space-md); }
.tk-label { font-size: var(--tk-text-body-sm); font-weight: 700; text-transform: uppercase; letter-spacing: 0.03em; color: var(--tk-color-text); }
.tk-help { font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 11px 12px;
    transition: outline-color var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    outline: var(--tk-border-width) solid var(--tk-color-accent);
    outline-offset: 2px;
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); }
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
    outline: var(--tk-border-width) solid var(--tk-color-accent);
    outline-offset: 2px;
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
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
    padding: 9px 10px;
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
.tk-option:hover { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-option-selected { background: var(--tk-color-surface-2); font-weight: 700; }
.tk-option-check { margin-left: auto; color: var(--tk-color-primary); display: inline-flex; }
.tk-option:hover .tk-option-check { color: var(--tk-color-background); }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 10px;
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
    width: 20px;
    height: 20px;
    flex: none;
    margin: 0;
    position: relative;
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition);
}
.tk-checkbox { border-radius: 0; }
.tk-checkbox:hover, .tk-radio:hover { background: var(--tk-color-surface-2); }
.tk-checkbox:checked { background: var(--tk-color-text); border-color: var(--tk-color-text); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 1px;
    width: 4px;
    height: 9px;
    border-right: 3px solid var(--tk-color-background);
    border-bottom: 3px solid var(--tk-color-background);
    transform: rotate(45deg);
}
.tk-radio { border-radius: 999px; }
.tk-radio:checked { border: 7px solid var(--tk-color-text); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: var(--tk-border-width) solid var(--tk-color-accent);
    outline-offset: 2px;
}
.tk-toggle { position: relative; width: 44px; height: 24px; flex: none; margin: 0; appearance: none; border: var(--tk-border-width) solid var(--tk-color-border); background: var(--tk-color-surface); cursor: pointer; transition: background var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 14px; height: 14px; background: var(--tk-color-text); transition: transform var(--tk-transition); }
.tk-toggle:checked { background: var(--tk-color-primary); }
.tk-toggle:checked::after { transform: translateX(20px); background: var(--tk-color-primary-contrast); }

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
    color: var(--tk-color-text);
    background: var(--tk-color-surface-2);
    border: 2px solid var(--tk-color-border);
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
    min-width: 20px;
    height: 20px;
    padding: 0 5px;
    background: var(--tk-color-primary);
    color: var(--tk-color-primary-contrast);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 700;
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
    border: var(--tk-border-width) solid var(--tk-color-border);
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
.tk-dropdown-label { padding: 6px 10px; font-family: var(--tk-font-mono); font-size: var(--tk-text-caption); font-weight: 700; text-transform: uppercase; color: var(--tk-color-text-muted); }
.tk-dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 10px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    text-decoration: none;
    text-align: left;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-dropdown-item:hover { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-text-muted); }
.tk-dropdown-item:hover iconify-icon { color: var(--tk-color-background); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: var(--tk-color-danger); color: #FFFFFF; }
.tk-dropdown-item-danger:hover iconify-icon { color: #FFFFFF; }
.tk-dropdown-divider { height: 2px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) 0; }

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
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-family: var(--tk-font-mono); }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-family: var(--tk-font-mono); }

/* == tk: navigation ============================================= */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: var(--tk-border-width) solid var(--tk-color-border);
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: var(--tk-weight-heading); font-size: var(--tk-text-h4); text-transform: uppercase; margin-right: auto; }
.tk-navbar-link { color: var(--tk-color-text); text-decoration: none; font-family: var(--tk-font-mono); font-size: var(--tk-text-body-sm); font-weight: 700; text-transform: uppercase; }
.tk-navbar-link:hover { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-navbar-link-active { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); padding: 2px 6px; }
.tk-navbar-dark { background: var(--tk-color-text); border-bottom-color: var(--tk-color-text); }
.tk-navbar-dark .tk-navbar-brand { color: var(--tk-color-background); }
.tk-navbar-dark .tk-navbar-link { color: var(--tk-color-background); opacity: 0.8; }
.tk-navbar-dark .tk-navbar-link:hover, .tk-navbar-dark .tk-navbar-link-active { opacity: 1; }
.tk-navbar-dark .tk-navbar-link:hover { background: var(--tk-color-background); color: var(--tk-color-text); }
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
    color: var(--tk-color-text);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-sidebar-item-active { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 68px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
}
.tk-sidebar-group:first-child { padding-top: var(--tk-space-xs); }
.tk-breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-body-sm);
}
.tk-breadcrumb a { color: var(--tk-color-text-muted); text-decoration: none; }
.tk-breadcrumb a:hover { color: var(--tk-color-text); text-decoration: underline; }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.55; }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 700; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: var(--tk-border-width) solid var(--tk-color-border);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: var(--tk-space-lg); border-bottom: var(--tk-border-width) solid var(--tk-color-border); }
.tk-tab {
    padding: var(--tk-space-sm) 2px 12px;
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-body-sm);
    font-weight: 700;
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 4px solid transparent;
    margin-bottom: calc(-1 * var(--tk-border-width));
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-text); border-bottom-color: var(--tk-color-primary); }
.tk-segmented { display: inline-flex; background: transparent; border: var(--tk-border-width) solid var(--tk-color-border); padding: 0; gap: 0; }
.tk-segment {
    padding: 8px 16px;
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-body-sm);
    font-weight: 700;
    text-transform: uppercase;
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
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-caption);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 3px 10px;
    border: 2px solid currentColor;
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
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-caption);
    font-weight: 700;
    padding: 4px 10px;
    border: 2px solid var(--tk-color-border);
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
    border: var(--tk-border-width) solid currentColor;
}
.tk-alert-title { font-weight: 700; text-transform: uppercase; display: block; margin-bottom: 2px; }
.tk-alert-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); }
.tk-alert-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); }
.tk-alert-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-alert-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); border: var(--tk-border-width) solid var(--tk-color-border); }
.tk-table th {
    text-align: left;
    font-family: var(--tk-font-mono);
    font-weight: 700;
    text-transform: uppercase;
    color: var(--tk-color-background);
    background: var(--tk-color-text);
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-bottom: var(--tk-border-width) solid var(--tk-color-border);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: 2px solid var(--tk-color-border); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: var(--tk-color-surface-2); }
.tk-table .tk-table-actions { text-align: right; white-space: nowrap; }
.tk-action-btn {
    width: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    background: none;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-action-btn:hover { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-action-btn-danger:hover { background: var(--tk-color-danger); color: #FFFFFF; }
.tk-pagination { display: flex; gap: var(--tk-space-xs); align-items: center; }
.tk-page {
    min-width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    background: none;
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-body-sm);
    font-weight: 700;
    color: var(--tk-color-text);
    cursor: pointer;
}
.tk-page:hover { border-color: var(--tk-color-border); }
.tk-page-active { background: var(--tk-color-text); color: var(--tk-color-background); border-color: var(--tk-color-border); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
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
    border-left: var(--tk-border-width) solid var(--tk-color-border);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 24px;
    height: 24px;
    border: 4px solid var(--tk-color-surface-2);
    border-top-color: var(--tk-color-text);
    border-radius: 999px;
    animation: tk-spin 0.6s linear infinite;
}
.tk-progress { height: 14px; background: var(--tk-color-surface); border: 2px solid var(--tk-color-border); overflow: hidden; }
.tk-progress-bar { height: 100%; background: var(--tk-color-primary); transition: width var(--tk-transition); }
.tk-skeleton {
    background: repeating-linear-gradient(45deg, var(--tk-color-surface-2) 0 8px, var(--tk-color-surface) 8px 16px);
    border: 1px solid var(--tk-color-border);
    animation: none;
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
}
.tk-empty-icon { color: var(--tk-color-text-muted); }
.tk-empty-title { font-weight: 700; text-transform: uppercase; font-size: var(--tk-text-body); }

/* == tk: content-blocks ========================================= */
.tk-hero { text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); }
.tk-hero .tk-display { margin-bottom: var(--tk-space-md); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); max-width: 560px; margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-lg); }
.tk-feature { display: flex; flex-direction: column; gap: var(--tk-space-sm); }
.tk-feature-icon {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    color: var(--tk-color-text);
}
.tk-cta {
    background: var(--tk-color-primary);
    color: var(--tk-color-primary-contrast);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
}
.tk-cta .tk-h3 { color: var(--tk-color-primary-contrast); margin: 0; text-transform: uppercase; }
.tk-cta .tk-muted { color: var(--tk-color-primary-contrast); opacity: 0.8; }
.tk-cta .tk-btn-primary { background: var(--tk-color-primary-contrast); color: var(--tk-color-primary); border-color: var(--tk-color-border); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: brutal flavor ========================================== */
/* Penimpa karakter brutal di atas struktur kontrak: menang kaskade karena berada di ekor
   berkas. Yang keras dipertegas — judul serba kapital, blok stabilo di hero, seleksi teks
   membalik warna. Semuanya tetap hanya membaca token --tk-*. */
::selection { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-display, .tk-h1, .tk-h2 { text-transform: uppercase; }
.tk-hero .tk-display {
    display: inline-block;
    background: var(--tk-brut-marker);
    color: #000000;
    padding: 4px 20px 0;
}
.tk-hero-sub { font-family: var(--tk-font-mono); }
.tk-caption, .tk-overline { font-family: var(--tk-font-mono); }
`;
