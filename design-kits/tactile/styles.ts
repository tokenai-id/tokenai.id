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
 * `styles.css` kit Tactile.
 *
 * Estetika tactile/elevated brutalism: brutalism yang naik kelas — garis tinta tebal dan
 * bayangan offset tetap ada, tetapi kini berlapis bayangan lembut sehingga kartu terasa
 * seperti karton yang benar-benar terangkat dari kertas bertekstur (noise SVG di latar).
 * Palet hangat material (krem, tinta cokelat, terracotta) dengan judul serif Fraunces yang
 * terasa dicetak. Pelengkap keluarga brutalist: Zine (fotokopian), Brutal (mentah B/W),
 * Neo Brutal (playful cerah) — Tactile adalah yang paling "berbahan". Struktur selektor dan
 * blok `== tk: ... ==` mengikuti kontrak `docs/kontrak-kit-design.md`; wajahnya lahir dari
 * nilai token plus blok "flavor" di ekor berkas.
 */
export const TACTILE_STYLES = `/* Tactile — kit design TOKENAI.
   Estetika elevated brutalism: tekstur kertas, kedalaman berlapis, material fisik hangat —
   kartu seperti karton terangkat dari halaman.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #E4572E;
    --tk-color-primary-hover: #C74620;
    --tk-color-primary-contrast: #FFF8EF;
    --tk-color-secondary: #FFFDF8;
    --tk-color-secondary-hover: #F1E9D9;
    --tk-color-secondary-contrast: #1A1713;
    --tk-color-accent: #274690;
    --tk-color-background: #F3EFE7;
    --tk-color-surface: #FFFDF8;
    --tk-color-surface-2: #ECE5D6;
    --tk-color-text: #1A1713;
    --tk-color-text-muted: #6E6759;
    --tk-color-border: #1A1713;
    --tk-color-success: #3F6C51;
    --tk-color-success-soft: #DFEAE2;
    --tk-color-warning: #96690C;
    --tk-color-warning-soft: #F4E7C3;
    --tk-color-danger: #B3261E;
    --tk-color-danger-soft: #F6DCD9;
    --tk-color-info: #274690;
    --tk-color-info-soft: #DDE4F2;

    --tk-font-heading: 'Fraunces', Georgia, serif;
    --tk-font-body: 'Work Sans', system-ui, sans-serif;
    --tk-font-mono: 'Chivo Mono', ui-monospace, monospace;
    --tk-weight-heading: 700;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.05;
    --tk-leading-body: 1.62;

    --tk-text-display: 56px;
    --tk-text-h1: 42px;
    --tk-text-h2: 30px;
    --tk-text-h3: 23px;
    --tk-text-h4: 18px;
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

    --tk-radius-sm: 6px;
    --tk-radius: 8px;
    --tk-radius-lg: 12px;
    --tk-radius-full: 999px;

    --tk-border-width: 2px;
    /* Kedalaman berlapis khas tactile: offset tinta yang keras DITAMBAH bayangan lembut,
       sehingga elemen terasa seperti karton yang benar-benar terangkat dari kertas. */
    --tk-shadow-sm: 3px 3px 0 var(--tk-color-border), 0 6px 14px rgba(26, 23, 19, 0.10);
    --tk-shadow: 5px 5px 0 var(--tk-color-border), 0 14px 26px rgba(26, 23, 19, 0.14);
    --tk-shadow-lg: 8px 8px 0 var(--tk-color-border), 0 22px 40px rgba(26, 23, 19, 0.18);

    --tk-transition: 130ms ease;
    --tk-container: 1200px;
}

/* Mode gelap: karton kopi — kertas menjadi kayu gelap hangat, tinta menjadi krem, dan
   terracotta menyala jadi oranye bara. Aktifkan dengan atribut data-tk-theme="dark" pada
   <html> atau <body>. */
[data-tk-theme="dark"] {
    --tk-color-primary: #FF6B35;
    --tk-color-primary-hover: #FF8557;
    --tk-color-primary-contrast: #17130E;
    --tk-color-secondary: #221C14;
    --tk-color-secondary-hover: #2E261B;
    --tk-color-secondary-contrast: #EFE7D8;
    --tk-color-accent: #8FA8E8;
    --tk-color-background: #17130E;
    --tk-color-surface: #221C14;
    --tk-color-surface-2: #2E261B;
    --tk-color-text: #EFE7D8;
    --tk-color-text-muted: #A69B87;
    --tk-color-border: #EFE7D8;
    --tk-color-success: #8FBF9F;
    --tk-color-success-soft: #1E2E24;
    --tk-color-warning: #E0B94C;
    --tk-color-warning-soft: #332A12;
    --tk-color-danger: #E8766C;
    --tk-color-danger-soft: #351511;
    --tk-color-info: #8FA8E8;
    --tk-color-info-soft: #1B2337;
    --tk-shadow-sm: 3px 3px 0 var(--tk-color-border), 0 6px 14px rgba(0, 0, 0, 0.45);
    --tk-shadow: 5px 5px 0 var(--tk-color-border), 0 14px 26px rgba(0, 0, 0, 0.5);
    --tk-shadow-lg: 8px 8px 0 var(--tk-color-border), 0 22px 40px rgba(0, 0, 0, 0.55);
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
.tk-display { font-size: var(--tk-text-display); font-weight: 800; }
.tk-h1 { font-size: var(--tk-text-h1); }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-size: var(--tk-text-title); font-weight: 600; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link { color: var(--tk-color-accent); font-weight: 600; text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; }
.tk-link:hover { color: var(--tk-color-primary); }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.9em; background: var(--tk-color-surface-2); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--tk-color-border); }

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
    letter-spacing: 0.02em;
    line-height: 1;
    padding: 11px 18px;
    border-radius: var(--tk-radius-sm);
    border: var(--tk-border-width) solid var(--tk-color-border);
    box-shadow: 3px 3px 0 var(--tk-color-border);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition), transform var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.tk-btn:hover:not(:disabled) { transform: translate(-1px, -1px); box-shadow: 4px 4px 0 var(--tk-color-border), 0 10px 18px rgba(26, 23, 19, 0.14); }
.tk-btn:not(:disabled):active { transform: translate(3px, 3px); box-shadow: none; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); }
.tk-btn-primary:active:not(:disabled) { background: var(--tk-color-primary); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); }
.tk-btn-outline { background: transparent; color: var(--tk-color-text); border-color: var(--tk-color-border); box-shadow: none; }
.tk-btn-outline:hover:not(:disabled) { background: var(--tk-color-surface); box-shadow: 3px 3px 0 var(--tk-color-border); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); border-color: transparent; box-shadow: none; }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); transform: none; box-shadow: none; }
.tk-btn-danger { background: var(--tk-color-danger); color: #FFF8EF; }
.tk-btn-danger:hover:not(:disabled) { filter: brightness(0.94); }
.tk-btn-text { background: none; color: var(--tk-color-accent); border-color: transparent; box-shadow: none; padding-left: 4px; padding-right: 4px; }
.tk-btn-text:hover:not(:disabled) { transform: none; box-shadow: none; text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; }
.tk-btn-sm { font-size: var(--tk-text-caption); padding: 7px 12px; }
.tk-btn-lg { font-size: var(--tk-text-body); padding: 15px 26px; border-radius: var(--tk-radius); }
.tk-btn-icon { padding: 11px; }
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
.tk-label { font-size: var(--tk-text-body-sm); font-weight: 600; color: var(--tk-color-text); }
.tk-help { font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 11px 12px;
    box-shadow: inset 2px 2px 0 rgba(26, 23, 19, 0.06);
    transition: box-shadow var(--tk-transition), border-color var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-primary);
    box-shadow: inset 2px 2px 0 rgba(26, 23, 19, 0.06), 3px 3px 0 var(--tk-color-primary);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: 3px 3px 0 var(--tk-color-danger);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: 3px 3px 0 var(--tk-color-success); }
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
    border-color: var(--tk-color-primary);
    box-shadow: inset 2px 2px 0 rgba(26, 23, 19, 0.06), 3px 3px 0 var(--tk-color-primary);
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
    transition: background var(--tk-transition);
}
.tk-option:hover { background: var(--tk-color-surface-2); }
.tk-option-selected { background: var(--tk-color-warning-soft); font-weight: 600; }
.tk-option-check { margin-left: auto; color: var(--tk-color-primary); display: inline-flex; }
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
    width: 18px;
    height: 18px;
    flex: none;
    margin: 0;
    position: relative;
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition);
}
.tk-checkbox { border-radius: 4px; }
.tk-checkbox:hover, .tk-radio:hover { background: var(--tk-color-surface-2); }
.tk-checkbox:checked { background: var(--tk-color-primary); border-color: var(--tk-color-border); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 4px;
    top: 1px;
    width: 4px;
    height: 8px;
    border-right: 2px solid var(--tk-color-primary-contrast);
    border-bottom: 2px solid var(--tk-color-primary-contrast);
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked { border: 5px solid var(--tk-color-border); background: var(--tk-color-primary); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: 3px 3px 0 var(--tk-color-primary);
}
.tk-toggle { position: relative; width: 42px; height: 24px; flex: none; margin: 0; appearance: none; border: var(--tk-border-width) solid var(--tk-color-border); background: var(--tk-color-surface); border-radius: var(--tk-radius-full); cursor: pointer; transition: background var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background: var(--tk-color-border); border-radius: var(--tk-radius-full); transition: transform var(--tk-transition); }
.tk-toggle:checked { background: var(--tk-color-primary); }
.tk-toggle:checked::after { transform: translateX(18px); background: var(--tk-color-primary-contrast); }

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
    border: 1px solid var(--tk-color-border);
    border-radius: 4px;
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
    box-shadow: var(--tk-shadow-sm);
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
    border: 1px solid var(--tk-color-border);
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
.tk-dropdown-label { padding: 6px 10px; font-family: var(--tk-font-mono); font-size: var(--tk-text-caption); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--tk-color-text-muted); }
.tk-dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 10px;
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
.tk-dropdown-divider { height: var(--tk-border-width); background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) 0; }

/* == tk: card =================================================== */
.tk-card {
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow);
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
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: var(--tk-weight-heading); font-size: var(--tk-text-h4); margin-right: auto; }
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: var(--tk-text-body-sm); font-weight: 600; }
.tk-navbar-link:hover { color: var(--tk-color-text); }
.tk-navbar-link-active { color: var(--tk-color-primary); text-decoration: underline; text-decoration-thickness: 3px; text-underline-offset: 6px; }
.tk-navbar-dark { background: #17130E; border-bottom-color: #17130E; }
.tk-navbar-dark .tk-navbar-brand { color: #EFE7D8; }
.tk-navbar-dark .tk-navbar-link { color: #EFE7D8; opacity: 0.75; }
.tk-navbar-dark .tk-navbar-link:hover, .tk-navbar-dark .tk-navbar-link-active { opacity: 1; color: #EFE7D8; }
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
    font-weight: 600;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-sidebar-item-active { background: var(--tk-color-warning-soft); color: var(--tk-color-text); box-shadow: inset 3px 0 0 var(--tk-color-primary); }
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
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 3px solid transparent;
    margin-bottom: calc(-1 * var(--tk-border-width));
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-text); border-bottom-color: var(--tk-color-primary); }
.tk-segmented { display: inline-flex; background: var(--tk-color-surface-2); border: var(--tk-border-width) solid var(--tk-color-border); border-radius: var(--tk-radius); padding: 3px; gap: 3px; }
.tk-segment {
    padding: 6px 14px;
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-body-sm);
    font-weight: 700;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: var(--tk-color-surface); color: var(--tk-color-text); box-shadow: 2px 2px 0 var(--tk-color-border); }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-caption);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    padding: 3px 10px;
    border-radius: 4px;
    border: 1.5px solid currentColor;
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
    border-radius: 4px;
    border: 1.5px dashed var(--tk-color-border);
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
    box-shadow: 3px 3px 0 currentColor;
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
    font-family: var(--tk-font-mono);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--tk-color-text-muted);
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-bottom: var(--tk-border-width) solid var(--tk-color-border);
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
    border: 1.5px solid transparent;
    background: none;
    border-radius: var(--tk-radius-sm);
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), border-color var(--tk-transition);
}
.tk-action-btn:hover { border-color: var(--tk-color-border); background: var(--tk-color-surface); color: var(--tk-color-text); }
.tk-action-btn-danger:hover { background: var(--tk-color-danger-soft); border-color: var(--tk-color-danger); color: var(--tk-color-danger); }
.tk-pagination { display: flex; gap: var(--tk-space-xs); align-items: center; }
.tk-page {
    min-width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-sm);
    border: 1.5px solid transparent;
    background: none;
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-body-sm);
    font-weight: 700;
    color: var(--tk-color-text);
    cursor: pointer;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-page:hover { border-color: var(--tk-color-border); }
.tk-page-active { background: var(--tk-color-surface); border-color: var(--tk-color-border); box-shadow: 2px 2px 0 var(--tk-color-border); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(26, 23, 19, 0.55);
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
    border: 3px solid var(--tk-color-surface-2);
    border-top-color: var(--tk-color-primary);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.6s linear infinite;
}
.tk-progress { height: 12px; background: var(--tk-color-surface); border: var(--tk-border-width) solid var(--tk-color-border); border-radius: var(--tk-radius-full); overflow: hidden; }
.tk-progress-bar { height: 100%; background: repeating-linear-gradient(-45deg, var(--tk-color-primary) 0 10px, var(--tk-color-primary-hover) 10px 20px); transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, var(--tk-color-background) 50%, var(--tk-color-surface-2) 75%);
    background-size: 200% 100%;
    animation: tk-shimmer 1.5s infinite;
    border-radius: var(--tk-radius-sm);
    border: 1px solid var(--tk-color-border);
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
.tk-empty-title { font-weight: 700; font-size: var(--tk-text-body); }

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
    background: var(--tk-color-warning-soft);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-shadow: 3px 3px 0 var(--tk-color-border);
    color: var(--tk-color-text);
    transform: rotate(-3deg);
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
    box-shadow: var(--tk-shadow-lg);
}
.tk-cta .tk-h3 { color: var(--tk-color-primary-contrast); margin: 0; }
.tk-cta .tk-muted { color: var(--tk-color-primary-contrast); opacity: 0.8; }
.tk-cta .tk-btn-primary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: tactile flavor ========================================= */
/* Penimpa karakter tactile di atas struktur kontrak: menang kaskade karena berada di ekor
   berkas. Di sinilah materialnya lahir — butiran kertas di latar (noise SVG murni CSS,
   tanpa berkas aset), foto diberi bingkai cetak, dan judul hero digarisbawahi tangan. */
body {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/><feColorMatrix type='matrix' values='0 0 0 0 0.10 0 0 0 0 0.09 0 0 0 0 0.07 0 0 0 0.06 0'/></filter><rect width='160' height='160' filter='url(%23n)'/></svg>");
    background-color: var(--tk-color-background);
}
[data-tk-theme="dark"] body, body[data-tk-theme="dark"] {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/><feColorMatrix type='matrix' values='0 0 0 0 0.94 0 0 0 0 0.91 0 0 0 0 0.85 0 0 0 0.045 0'/></filter><rect width='160' height='160' filter='url(%23n)'/></svg>");
}
/* Fotografi sebagai material: gambar konten diberi bingkai tinta dan bayangan cetak,
   seperti foto yang ditempel di atas karton. */
.tk-card img, .tk-hero img, figure img {
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
}
/* Judul hero: serif raksasa dengan garis bawah bergelombang seperti coretan tangan. */
.tk-hero .tk-display {
    text-decoration: underline;
    text-decoration-style: wavy;
    text-decoration-color: var(--tk-color-primary);
    text-decoration-thickness: 4px;
    text-underline-offset: 10px;
}
`;
