/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const BAUHAUS_STYLES = `/* Bauhaus — kit design TOKENAI.
   Estetika sekolah Bauhaus: bentuk geometris dasar (lingkaran, persegi, belah ketupat),
   tipografi geometris tegas, dan warna kuat merah-kuning-biru di atas kertas krem hangat.
   Komposisinya artistik tetapi selalu fungsional — form follows function: sudut siku,
   garis tinta tegas, tanpa dekorasi yang tidak bekerja.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #D93025;
    --tk-color-primary-hover: #B7271D;
    --tk-color-primary-contrast: #FFFDF6;
    --tk-color-secondary: #1A1A1A;
    --tk-color-secondary-hover: #000000;
    --tk-color-secondary-contrast: #FFFDF6;
    --tk-color-accent: #1E56A0;
    --tk-color-background: #F6F1E5;
    --tk-color-surface: #FFFDF6;
    --tk-color-surface-2: #EFE8D8;
    --tk-color-text: #1A1A1A;
    --tk-color-text-muted: #6F6A5E;
    --tk-color-border: #D8D0BC;
    --tk-color-success: #2C7A3F;
    --tk-color-success-soft: #E4F0E4;
    --tk-color-warning: #97690B;
    --tk-color-warning-soft: #FAEEC8;
    --tk-color-danger: #B7271D;
    --tk-color-danger-soft: #F8E2DE;
    --tk-color-info: #1E56A0;
    --tk-color-info-soft: #E1EAF6;

    --tk-font-heading: 'Jost', 'Futura', system-ui, sans-serif;
    --tk-font-body: 'DM Sans', system-ui, sans-serif;
    --tk-font-mono: 'DM Mono', ui-monospace, monospace;
    --tk-weight-heading: 700;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.08;
    --tk-leading-body: 1.6;

    --tk-text-display: 62px;
    --tk-text-h1: 44px;
    --tk-text-h2: 32px;
    --tk-text-h3: 24px;
    --tk-text-h4: 18px;
    --tk-text-title: 16px;
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
    --tk-space-section: 104px;

    /* Geometri dasar: siku untuk bidang, bundar penuh untuk lingkaran sejati
       (toggle, avatar, ikon lingkaran). */
    --tk-radius-sm: 0px;
    --tk-radius: 0px;
    --tk-radius-lg: 0px;
    --tk-radius-full: 999px;

    /* Flat: kedalaman dari garis tinta 2px dan komposisi warna, bukan bayangan;
       menu diberi bayangan tipis agar terpisah dari kanvas. */
    --tk-border-width: 2px;
    --tk-shadow-sm: 0 0 0 rgba(0, 0, 0, 0);
    --tk-shadow: 0 1px 2px rgba(26, 26, 26, 0.06);
    --tk-shadow-lg: 0 10px 28px rgba(26, 26, 26, 0.14);

    --tk-transition: 140ms ease;
    --tk-container: 1160px;

    /* Token khas bauhaus (bukan kontrak): kuning primer untuk bentuk dan sorotan,
       serta bilah tiga warna yang menandai headline. */
    --tk-bh-yellow: #F2B70A;
    --tk-bh-yellow-ink: #1A1A1A;
    --tk-bh-blue: #1E56A0;
    --tk-bh-tricolor: linear-gradient(90deg, #D93025 0 33.4%, #F2B70A 33.4% 66.7%, #1E56A0 66.7% 100%);
}

/* Mode gelap: kanvas arang seperti papan tulis studio — teks krem, trio warna dibuat
   lebih menyala agar tetap kuat di kegelapan. Aktifkan dengan atribut
   data-tk-theme="dark" pada <html> atau <body>. */
[data-tk-theme="dark"] {
    --tk-color-primary: #F0564A;
    --tk-color-primary-hover: #F4756B;
    --tk-color-primary-contrast: #141414;
    --tk-color-secondary: #F4EFE2;
    --tk-color-secondary-hover: #FFFDF6;
    --tk-color-secondary-contrast: #141414;
    --tk-color-accent: #6B9BD8;
    --tk-color-background: #141414;
    --tk-color-surface: #1D1D1B;
    --tk-color-surface-2: #282825;
    --tk-color-text: #F4EFE2;
    --tk-color-text-muted: #A29B8B;
    --tk-color-border: #3A3A35;
    --tk-color-success: #5FBF77;
    --tk-color-success-soft: #14291A;
    --tk-color-warning: #E8B54D;
    --tk-color-warning-soft: #2C230C;
    --tk-color-danger: #F0564A;
    --tk-color-danger-soft: #33130F;
    --tk-color-info: #6B9BD8;
    --tk-color-info-soft: #142133;
    --tk-shadow-sm: 0 0 0 rgba(0, 0, 0, 0);
    --tk-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    --tk-shadow-lg: 0 10px 28px rgba(0, 0, 0, 0.6);
    --tk-bh-yellow: #F5C33B;
    --tk-bh-yellow-ink: #141414;
    --tk-bh-blue: #6B9BD8;
    --tk-bh-tricolor: linear-gradient(90deg, #F0564A 0 33.4%, #F5C33B 33.4% 66.7%, #6B9BD8 66.7% 100%);
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
::selection { background: var(--tk-bh-yellow); color: var(--tk-bh-yellow-ink); }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); letter-spacing: -0.01em; line-height: 1.04; }
.tk-h1 { font-size: var(--tk-text-h1); letter-spacing: -0.01em; }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); font-weight: 600; }
.tk-title { font-size: var(--tk-text-title); font-weight: 700; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption {
    font-size: var(--tk-text-caption);
    color: var(--tk-color-text-muted);
    font-family: var(--tk-font-mono);
    text-transform: uppercase;
    letter-spacing: 0.07em;
}
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link { color: var(--tk-bh-blue); font-weight: 600; text-decoration: none; }
.tk-link:hover { text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.9em; background: var(--tk-color-surface-2); padding: 2px 6px; border-radius: var(--tk-radius-sm); }

/* == tk: button ================================================= */
/* Tombol bidang warna tegas: merah untuk aksi utama, tinta untuk sekunder — persegi
   dengan garis tinta, seperti blok cetak. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-heading);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    line-height: 1;
    padding: 13px 22px;
    border-radius: var(--tk-radius);
    border: 2px solid transparent;
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), border-color var(--tk-transition), opacity var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.tk-btn:not(:disabled):active { opacity: 0.85; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); }
.tk-btn-outline { background: transparent; color: var(--tk-color-text); border-color: var(--tk-color-text); }
.tk-btn-outline:hover:not(:disabled) { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-danger { background: var(--tk-color-danger); color: #FFFDF6; }
.tk-btn-danger:hover:not(:disabled) { filter: brightness(0.9); }
.tk-btn-text { background: none; color: var(--tk-bh-blue); padding-left: 4px; padding-right: 4px; }
.tk-btn-text:hover:not(:disabled) { text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; }
.tk-btn-sm { font-size: var(--tk-text-caption); padding: 9px 14px; }
.tk-btn-lg { font-size: var(--tk-text-body); padding: 16px 30px; }
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
.tk-btn-secondary.tk-btn-loading::after { border-color: var(--tk-color-secondary-contrast); border-top-color: transparent; }
.tk-btn-outline.tk-btn-loading::after, .tk-btn-ghost.tk-btn-loading::after {
    border-color: var(--tk-color-text);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
.tk-field { display: flex; flex-direction: column; gap: var(--tk-space-xs); margin-bottom: var(--tk-space-md); }
.tk-label { font-size: var(--tk-text-body-sm); font-weight: 700; color: var(--tk-color-text); }
.tk-help { font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius);
    padding: 11px 14px;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-bh-blue);
    box-shadow: 0 0 0 1px var(--tk-bh-blue);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: 0 0 0 1px var(--tk-color-danger);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: 0 0 0 1px var(--tk-color-success); }
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
    border-color: var(--tk-bh-blue);
    box-shadow: 0 0 0 1px var(--tk-bh-blue);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-text);
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
.tk-option-selected { background: var(--tk-color-info-soft); color: var(--tk-bh-blue); font-weight: 700; }
.tk-option-check { margin-left: auto; color: var(--tk-bh-blue); display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 10px;
    margin: calc(-1 * var(--tk-space-xs)) calc(-1 * var(--tk-space-xs)) var(--tk-space-xs);
    border-bottom: 1px solid var(--tk-color-border);
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
    border-top: 1px solid var(--tk-color-border);
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
    border: 2px solid var(--tk-color-text);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition);
}
.tk-checkbox { border-radius: 0; }
.tk-checkbox:hover, .tk-radio:hover { border-color: var(--tk-bh-blue); }
.tk-checkbox:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 3px;
    top: 0px;
    width: 4px;
    height: 8px;
    border-right: 2px solid var(--tk-color-primary-contrast);
    border-bottom: 2px solid var(--tk-color-primary-contrast);
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked { border: 5px solid var(--tk-color-primary); background: var(--tk-color-surface); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--tk-color-background), 0 0 0 4px var(--tk-bh-blue);
}
.tk-toggle { position: relative; width: 42px; height: 24px; flex: none; margin: 0; appearance: none; border: 2px solid var(--tk-color-text); background: var(--tk-color-surface); border-radius: var(--tk-radius-full); cursor: pointer; transition: background var(--tk-transition), border-color var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 14px; height: 14px; background: var(--tk-color-text); border-radius: var(--tk-radius-full); transition: transform var(--tk-transition), background var(--tk-transition); }
.tk-toggle:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); }
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
    color: var(--tk-color-text-muted);
    background: var(--tk-color-surface-2);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
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
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius-lg);
}
.tk-filter-bar .tk-search { flex: 1; }
.tk-filter-bar .tk-select { min-width: 170px; }
.tk-filter-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    border-radius: var(--tk-radius-full);
    background: var(--tk-color-primary);
    color: var(--tk-color-primary-contrast);
    font-family: var(--tk-font-body);
    font-size: 11px;
    font-weight: 700;
}
.tk-filter-active { display: flex; flex-wrap: wrap; align-items: center; gap: var(--tk-space-sm); margin-top: var(--tk-space-sm); }

/* == tk: dropdown =============================================== */
.tk-dropdown { position: relative; display: inline-block; }
.tk-dropdown-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg);
    padding: var(--tk-space-xs);
    max-height: 280px;
    overflow: auto;
    display: none;
    flex-direction: column;
    z-index: 30;
}
.tk-dropdown-menu-right { left: auto; right: 0; }
.tk-dropdown-menu-up { top: auto; bottom: calc(100% + 4px); }
.tk-dropdown-open > .tk-dropdown-menu, .tk-dropdown:focus-within > .tk-dropdown-menu { display: flex; }
.tk-dropdown-label { padding: 6px 10px; font-family: var(--tk-font-mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--tk-color-text-muted); }
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
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius-lg);
    overflow: hidden;
}
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-sm); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-family: var(--tk-font-heading); font-weight: 700; }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); }

/* == tk: navigation ============================================= */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: 3px solid var(--tk-color-text);
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 700; font-size: 19px; margin-right: auto; }
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: var(--tk-text-body-sm); font-weight: 600; font-family: var(--tk-font-heading); }
.tk-navbar-link:hover { color: var(--tk-color-text); }
.tk-navbar-link-active { color: var(--tk-color-primary); }
.tk-navbar-dark { background: #141414; border-bottom-color: #F4EFE2; }
.tk-navbar-dark .tk-navbar-brand { color: #F4EFE2; }
.tk-navbar-dark .tk-navbar-link { color: #F4EFE2; opacity: 0.65; }
.tk-navbar-dark .tk-navbar-link:hover, .tk-navbar-dark .tk-navbar-link-active { opacity: 1; color: #F4EFE2; }
.tk-sidebar {
    width: 240px;
    background: var(--tk-color-surface);
    border-right: 2px solid var(--tk-color-text);
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
.tk-sidebar-item-active { background: var(--tk-bh-yellow); color: var(--tk-bh-yellow-ink); font-weight: 700; }
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 68px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 11px;
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
    font-size: var(--tk-text-body-sm);
}
.tk-breadcrumb a { color: var(--tk-color-text-muted); text-decoration: none; }
.tk-breadcrumb a:hover { color: var(--tk-bh-blue); }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.5; }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 700; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: 3px solid var(--tk-color-text);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: var(--tk-space-lg); border-bottom: 2px solid var(--tk-color-text); }
.tk-tab {
    padding: var(--tk-space-sm) 2px 12px;
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    font-family: var(--tk-font-heading);
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 3px solid transparent;
    margin-bottom: -2px;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-text); border-bottom-color: var(--tk-color-primary); }
.tk-segmented { display: inline-flex; background: var(--tk-color-surface); border: 2px solid var(--tk-color-text); border-radius: var(--tk-radius); padding: 0; gap: 0; }
.tk-segment {
    padding: 8px 16px;
    font-family: var(--tk-font-heading);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    color: var(--tk-color-text-muted);
    border: none;
    border-right: 2px solid var(--tk-color-text);
    background: transparent;
    border-radius: 0;
    cursor: pointer;
}
.tk-segment:last-child { border-right: none; }
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 3px 10px;
    border-radius: 0;
    border: 2px solid var(--tk-color-text);
    background: var(--tk-color-surface);
    color: var(--tk-color-text);
}
.tk-badge-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); border-color: transparent; }
.tk-badge-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); border-color: transparent; }
.tk-badge-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); border-color: transparent; }
.tk-badge-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); border-color: transparent; }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-caption);
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 0;
    border: 2px solid var(--tk-bh-blue);
    background: var(--tk-color-info-soft);
    color: var(--tk-bh-blue);
}
.tk-chip-remove { border: none; background: none; cursor: pointer; color: var(--tk-bh-blue); font-size: 12px; line-height: 1; padding: 0; }
.tk-chip-remove:hover { color: var(--tk-color-danger); }

/* == tk: alert ================================================== */
.tk-alert {
    display: flex;
    gap: var(--tk-space-sm);
    align-items: flex-start;
    padding: var(--tk-space-md);
    border-radius: var(--tk-radius);
    font-size: var(--tk-text-body-sm);
    border: 2px solid currentColor;
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
    font-weight: 500;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--tk-color-text-muted);
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-bottom: 3px solid var(--tk-color-text);
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
    border-radius: var(--tk-radius-full);
    border: none;
    background: none;
    font-family: var(--tk-font-heading);
    font-weight: 600;
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-page:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-page-active { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(26, 26, 26, 0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-text);
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
    border-left: 2px solid var(--tk-color-text);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 24px;
    height: 24px;
    border: 3px solid var(--tk-color-border);
    border-top-color: var(--tk-color-primary);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.6s linear infinite;
}
.tk-progress { height: 8px; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-text); border-radius: 0; overflow: hidden; }
.tk-progress-bar { height: 100%; background: var(--tk-color-primary); border-radius: 0; transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, var(--tk-color-background) 50%, var(--tk-color-surface-2) 75%);
    background-size: 200% 100%;
    animation: tk-shimmer 1.5s infinite;
    border-radius: var(--tk-radius-sm);
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
    border: 2px dashed var(--tk-color-text);
    border-radius: var(--tk-radius-lg);
    background: var(--tk-color-surface);
}
.tk-empty-icon { color: var(--tk-color-text-muted); }
.tk-empty-title { font-weight: 700; font-size: var(--tk-text-body); }

/* == tk: content-blocks ========================================= */
.tk-hero { text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); max-width: 560px; margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-2xl); }
.tk-feature { display: flex; flex-direction: column; gap: var(--tk-space-sm); }
.tk-feature-icon {
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--tk-color-primary);
    border-radius: 0;
    color: var(--tk-color-primary-contrast);
}
/* CTA = bidang kuning primer dengan garis tinta: poster Bauhaus yang mengajak bekerja. */
.tk-cta {
    background: var(--tk-bh-yellow);
    color: var(--tk-bh-yellow-ink);
    border: 2px solid var(--tk-color-text);
    border-radius: 0;
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
}
.tk-cta .tk-h3 { color: var(--tk-bh-yellow-ink); margin: 0; }
.tk-cta .tk-muted { color: var(--tk-bh-yellow-ink); opacity: 0.7; }
.tk-cta .tk-btn-primary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: bauhaus flavor ========================================= */
/* Penimpa karakter bauhaus di atas struktur kontrak: menang kaskade karena berada di ekor
   berkas. Tanda tangan kit ini adalah geometri dasar yang bergiliran: ikon fitur menjadi
   lingkaran merah, persegi biru, dan belah ketupat kuning; headline hero ditandai bilah
   tiga warna — komposisi artistik yang tetap fungsional. */
.tk-hero .tk-display { font-size: clamp(40px, 6.5vw, var(--tk-text-display)); }
/* Bilah tiga warna di bawah headline hero — merah, kuning, biru. */
.tk-hero .tk-display::after {
    content: '';
    display: block;
    width: 168px;
    height: 10px;
    margin: var(--tk-space-lg) auto 0;
    background: var(--tk-bh-tricolor);
}
/* Ikon fitur bergiliran bentuk dan warna: lingkaran merah, persegi biru, belah ketupat
   kuning (ikonnya ikut diputar balik supaya tetap tegak). */
.tk-feature:nth-child(3n+1) .tk-feature-icon { background: var(--tk-color-primary); border-radius: var(--tk-radius-full); color: var(--tk-color-primary-contrast); }
.tk-feature:nth-child(3n+2) .tk-feature-icon { background: var(--tk-bh-blue); border-radius: 0; color: #FFFDF6; }
.tk-feature:nth-child(3n) .tk-feature-icon { background: var(--tk-bh-yellow); border-radius: 0; color: var(--tk-bh-yellow-ink); transform: rotate(45deg) scale(0.85); }
.tk-feature:nth-child(3n) .tk-feature-icon iconify-icon { transform: rotate(-45deg) scale(1.15); }
/* Foto: siku dan polos dengan garis tinta — bidang, bukan dekorasi. */
.tk-card img, .tk-hero img, figure img {
    border: 2px solid var(--tk-color-text);
    border-radius: 0;
}
`;
