/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const PUNK_STYLES = `/* Punk — kit design TOKENAI.
   Poster gig DIY yang difotokopi hitam-putih lalu ditempel spidol dan stiker:
   kertas hampir putih kontras tinggi, tinta hitam pekat, pink menyolok dan
   kuning stabilo, heading Anton agresif yang miring, huruf tempelan ransom note,
   coretan Permanent Marker, patch/stiker ditempel sembarangan, dan komposisi
   yang sengaja kacau — semuanya sedikit berputar. Kit satu-tema: terang secara
   bawaan, tanpa mode gelap — poster ditempel di tiang listrik, bukan di layar.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #141312;
    --tk-color-primary-hover: #2E2C29;
    --tk-color-primary-contrast: #F6F3EC;
    --tk-color-secondary: #E31577;
    --tk-color-secondary-hover: #F53A92;
    --tk-color-secondary-contrast: #FFFFFF;
    --tk-color-accent: #E8D200;
    --tk-color-background: #F2EFE7;
    --tk-color-surface: #FAF8F2;
    --tk-color-surface-2: #E4E0D4;
    --tk-color-text: #161512;
    --tk-color-text-muted: #5F5B52;
    --tk-color-border: #999486;
    --tk-color-success: #1E9E4B;
    --tk-color-success-soft: #DDF0E0;
    --tk-color-warning: #C98F00;
    --tk-color-warning-soft: #FBEFC9;
    --tk-color-danger: #D6191E;
    --tk-color-danger-soft: #F9D9D7;
    --tk-color-info: #0E7B99;
    --tk-color-info-soft: #D8ECF2;

    --tk-font-heading: 'Anton', Impact, 'Arial Black', sans-serif;
    --tk-font-body: 'Barlow', system-ui, sans-serif;
    --tk-font-mono: 'Courier Prime', 'Courier New', monospace;
    --tk-weight-heading: 400;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.05;
    --tk-leading-body: 1.6;

    --tk-text-display: 52px;
    --tk-text-h1: 38px;
    --tk-text-h2: 28px;
    --tk-text-h3: 21px;
    --tk-text-h4: 17px;
    --tk-text-title: 15px;
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
    --tk-radius: 2px;
    --tk-radius-lg: 4px;
    --tk-radius-full: 999px;

    --tk-border-width: 2px;
    --tk-shadow-sm: 2px 2px 0 #141312;
    --tk-shadow: 4px 4px 0 #141312;
    --tk-shadow-lg: 7px 7px 0 #141312;

    --tk-transition: 110ms ease;
    --tk-container: 1200px;

    /* Token khas punk (bukan kontrak): bintik fotokopi B&W kontras tinggi, titik
       halftone poster, dan bayangan stiker pink. */
    --tk-pk-noise: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0 0 0 0 0 0 0 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    --tk-pk-dots: radial-gradient(circle at 2px 2px, rgba(20, 19, 18, 0.16) 1.2px, transparent 1.6px);
    --tk-pk-shadow-pink: 4px 4px 0 #E31577;
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
/* Bintik fotokopi B&W di atas segalanya — toner yang tidak rata, tanpa
   menghalangi klik. */
body::after {
    content: '';
    position: fixed;
    inset: 0;
    background: var(--tk-pk-noise);
    opacity: 0.05;
    mix-blend-mode: multiply;
    pointer-events: none;
    z-index: 9999;
}
.tk-container {
    max-width: var(--tk-container);
    margin: 0 auto;
    padding: 0 var(--tk-space-lg);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }
::selection { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    letter-spacing: 0.015em;
    text-transform: uppercase;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); line-height: 0.98; }
.tk-h1 { font-size: var(--tk-text-h1); }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-body); font-size: var(--tk-text-title); font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption {
    font-size: var(--tk-text-caption);
    color: var(--tk-color-text-muted);
    font-family: var(--tk-font-mono);
    text-transform: uppercase;
    letter-spacing: 0.08em;
}
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link { color: var(--tk-color-text); font-weight: 700; text-decoration: underline; text-decoration-color: var(--tk-color-secondary); text-decoration-thickness: 3px; text-underline-offset: 3px; }
.tk-link:hover { background: var(--tk-color-accent); }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.9em; background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); padding: 1px 6px; border-radius: var(--tk-radius-sm); }

/* == tk: button ================================================= */
/* Tombol poster gig: blok tinta miring (skew) ber-border 3px dengan bayangan
   stiker pink yang bergeser saat ditekan — dicetak buru-buru, ditempel miring. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-heading);
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    line-height: 1;
    padding: 13px 22px;
    border: 3px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    transform: skew(-4deg);
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), background var(--tk-transition), color var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:not(:disabled):active { transform: skew(-4deg) translate(3px, 3px); box-shadow: none !important; }
.tk-btn:disabled { opacity: 0.45; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); box-shadow: var(--tk-pk-shadow-pink); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); transform: skew(-4deg) translate(-1px, -1px) rotate(-0.6deg); box-shadow: 5px 5px 0 #E31577; }
.tk-btn-secondary { background: var(--tk-color-secondary); border-color: var(--tk-color-primary); color: var(--tk-color-secondary-contrast); box-shadow: var(--tk-shadow); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); transform: skew(-4deg) translate(-1px, -1px) rotate(0.6deg); box-shadow: 5px 5px 0 #141312; }
.tk-btn-danger { background: var(--tk-color-danger); border-color: var(--tk-color-primary); color: #FFF; box-shadow: var(--tk-shadow); }
.tk-btn-danger:hover:not(:disabled) { transform: skew(-4deg) translate(-1px, -1px); }
.tk-btn-outline { background: var(--tk-color-surface); color: var(--tk-color-primary); }
.tk-btn-outline:hover:not(:disabled) { background: var(--tk-color-accent); box-shadow: var(--tk-shadow-sm); }
.tk-btn-ghost { background: transparent; border-color: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-text { background: none; border-color: transparent; color: var(--tk-color-secondary); padding-left: 4px; padding-right: 4px; }
.tk-btn-text:hover:not(:disabled) { text-decoration: underline; text-decoration-thickness: 3px; text-underline-offset: 3px; }
.tk-btn-sm { font-size: 12px; padding: 9px 14px; border-width: 2px; }
.tk-btn-lg { font-size: 17px; padding: 17px 32px; }
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
    animation: tk-spin 0.7s linear infinite;
}
.tk-btn-secondary.tk-btn-loading::after { border-color: var(--tk-color-secondary-contrast); border-top-color: transparent; }
.tk-btn-outline.tk-btn-loading::after, .tk-btn-ghost.tk-btn-loading::after {
    border-color: var(--tk-color-primary);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
.tk-field { display: flex; flex-direction: column; gap: var(--tk-space-xs); margin-bottom: var(--tk-space-md); }
.tk-label { font-family: var(--tk-font-mono); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--tk-color-text); }
.tk-help { font-size: 13px; color: var(--tk-color-text-muted); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    padding: 11px 14px;
    transition: box-shadow var(--tk-transition), border-color var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-secondary);
    box-shadow: 3px 3px 0 rgba(227, 21, 119, 0.45);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: 3px 3px 0 rgba(214, 25, 30, 0.4);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: 3px 3px 0 rgba(30, 158, 75, 0.35); }
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
.tk-select-trigger > iconify-icon { color: var(--tk-color-secondary); flex: none; }
.tk-select-placeholder { color: var(--tk-color-text-muted); }
.tk-select:focus-within > .tk-select-trigger, .tk-select-open > .tk-select-trigger {
    border-color: var(--tk-color-secondary);
    box-shadow: 3px 3px 0 rgba(227, 21, 119, 0.45);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 3px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
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
    padding: 9px 12px;
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
.tk-option:hover { background: var(--tk-color-accent); }
.tk-option-selected { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); font-weight: 700; }
.tk-option-check { margin-left: auto; color: var(--tk-color-secondary); display: inline-flex; }
.tk-option-selected .tk-option-check { color: var(--tk-color-secondary-hover); }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 12px;
    margin: calc(-1 * var(--tk-space-xs)) calc(-1 * var(--tk-space-xs)) var(--tk-space-xs);
    border-bottom: 2px solid var(--tk-color-primary);
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
    border-top: 2px solid var(--tk-color-primary);
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
    border: 2px solid var(--tk-color-primary);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-checkbox { border-radius: var(--tk-radius-sm); transform: rotate(-2deg); }
.tk-checkbox:hover, .tk-radio:hover { box-shadow: 2px 2px 0 rgba(20, 19, 18, 0.35); }
.tk-checkbox:checked { background: var(--tk-color-secondary); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 4px;
    top: 1px;
    width: 4px;
    height: 8px;
    border-right: 2px solid #FFF;
    border-bottom: 2px solid #FFF;
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked { background: var(--tk-color-secondary); box-shadow: inset 0 0 0 3px var(--tk-color-surface); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(227, 21, 119, 0.4);
}
.tk-toggle { position: relative; width: 44px; height: 24px; flex: none; margin: 0; appearance: none; border: 2px solid var(--tk-color-primary); background: var(--tk-color-surface); border-radius: var(--tk-radius-full); cursor: pointer; transition: background var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background: var(--tk-color-primary); border-radius: var(--tk-radius-full); transition: transform var(--tk-transition), background var(--tk-transition); }
.tk-toggle:checked { background: var(--tk-color-secondary); }
.tk-toggle:checked::after { transform: translateX(20px); background: #FFF; }

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
    color: var(--tk-color-primary-contrast);
    background: var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    padding: 1px 6px;
    pointer-events: none;
    transform: rotate(-2deg);
}
.tk-filter-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-md);
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    box-shadow: var(--tk-shadow-sm);
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
    border-radius: var(--tk-radius-sm);
    background: var(--tk-color-secondary);
    color: var(--tk-color-secondary-contrast);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 700;
    transform: rotate(3deg);
}
.tk-filter-active { display: flex; flex-wrap: wrap; align-items: center; gap: var(--tk-space-sm); margin-top: var(--tk-space-sm); }

/* == tk: dropdown =============================================== */
.tk-dropdown { position: relative; display: inline-block; }
.tk-dropdown-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 3px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    box-shadow: var(--tk-shadow-lg);
    padding: var(--tk-space-xs);
    max-height: 280px;
    overflow: auto;
    display: none;
    flex-direction: column;
    z-index: 30;
}
.tk-dropdown-menu-right { left: auto; right: 0; }
.tk-dropdown-menu-up { top: auto; bottom: calc(100% + 6px); }
.tk-dropdown-open > .tk-dropdown-menu, .tk-dropdown:focus-within > .tk-dropdown-menu { display: flex; }
.tk-dropdown-label { padding: 6px 12px; font-family: var(--tk-font-mono); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--tk-color-text-muted); }
.tk-dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 12px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    text-align: left;
    transition: background var(--tk-transition);
}
.tk-dropdown-item:hover { background: var(--tk-color-accent); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-text-muted); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: rgba(214, 25, 30, 0.12); }
.tk-dropdown-divider { height: 2px; background: var(--tk-color-primary); border: none; margin: var(--tk-space-xs) 0; }

/* == tk: card =================================================== */
/* Panel poster DIY: kertas lebih putih ber-border tinta 2px dengan bayangan
   cetak keras — flyer ditumpuk di meja merch. */
.tk-card {
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    box-shadow: var(--tk-shadow-sm);
    overflow: hidden;
    transition: box-shadow var(--tk-transition), transform var(--tk-transition);
}
.tk-card:hover { box-shadow: var(--tk-shadow); transform: rotate(-0.3deg); }
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-md); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-family: var(--tk-font-heading); color: var(--tk-color-text); }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 700; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 700; }

/* == tk: navigation ============================================= */
/* Navbar masthead poster: garis tinta tebal ganda hitam + pink di tepi bawah,
   brand Anton miring — kop yang distensil buru-buru. */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: 3px solid var(--tk-color-primary);
    box-shadow: 0 3px 0 var(--tk-color-secondary);
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-size: 19px; letter-spacing: 0.03em; margin-right: auto; color: var(--tk-color-text); text-transform: uppercase; transform: skew(-4deg); }
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: 13px; font-weight: 700; font-family: var(--tk-font-body); text-transform: uppercase; letter-spacing: 0.08em; }
.tk-navbar-link:hover { color: var(--tk-color-text); background: var(--tk-color-accent); }
.tk-navbar-link-active { color: var(--tk-color-text); text-decoration: underline; text-decoration-color: var(--tk-color-secondary); text-decoration-thickness: 3px; text-underline-offset: 5px; }
.tk-navbar-dark { background: var(--tk-color-primary); border-bottom-color: var(--tk-color-secondary); box-shadow: none; }
.tk-navbar-dark .tk-navbar-brand { color: var(--tk-color-primary-contrast); }
.tk-navbar-dark .tk-navbar-link { color: #A8A398; }
.tk-navbar-dark .tk-navbar-link:hover { color: var(--tk-color-primary-contrast); background: transparent; }
.tk-navbar-dark .tk-navbar-link-active { color: var(--tk-color-secondary-hover); }
.tk-sidebar {
    width: 240px;
    background: var(--tk-color-surface);
    border-right: 2px solid var(--tk-color-primary);
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
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-accent); color: var(--tk-color-text); }
.tk-sidebar-item-active {
    background: var(--tk-color-primary);
    color: var(--tk-color-primary-contrast);
    box-shadow: 3px 3px 0 var(--tk-color-secondary);
    transform: rotate(-0.6deg);
}
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 68px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.10em;
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
    font-weight: 600;
}
.tk-breadcrumb a { color: var(--tk-color-text-muted); text-decoration: none; }
.tk-breadcrumb a:hover { color: var(--tk-color-secondary); }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.6; }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 700; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: 3px solid var(--tk-color-primary);
    box-shadow: 0 3px 0 var(--tk-color-secondary);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: var(--tk-space-lg); border-bottom: 3px solid var(--tk-color-primary); }
.tk-tab {
    padding: var(--tk-space-sm) 2px 12px;
    font-size: 13px;
    font-weight: 700;
    font-family: var(--tk-font-body);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 5px solid transparent;
    margin-bottom: -3px;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-text); border-bottom-color: var(--tk-color-secondary); }
.tk-segmented { display: inline-flex; background: var(--tk-color-surface-2); border: 2px solid var(--tk-color-primary); border-radius: var(--tk-radius-sm); padding: 3px; gap: 3px; }
.tk-segment {
    padding: 8px 16px;
    font-family: var(--tk-font-body);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); transform: rotate(-1deg); }

/* == tk: badge ================================================== */
/* Badge stiker: huruf mesin tik ber-border tinta, ditempel miring bergantian —
   stiker band di sarung gitar. */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 2px 10px;
    border: 2px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    background: var(--tk-color-surface);
    color: var(--tk-color-text);
    box-shadow: 2px 2px 0 rgba(20, 19, 18, 0.6);
    transform: rotate(-2deg);
}
.tk-badge-success { color: var(--tk-color-success); background: var(--tk-color-success-soft); transform: rotate(1.5deg); }
.tk-badge-warning { color: var(--tk-color-warning); background: var(--tk-color-warning-soft); transform: rotate(-1deg); }
.tk-badge-danger { color: var(--tk-color-danger); background: var(--tk-color-danger-soft); transform: rotate(2deg); }
.tk-badge-info { color: var(--tk-color-info); background: var(--tk-color-info-soft); transform: rotate(-1.5deg); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    letter-spacing: 0.04em;
    padding: 3px 10px;
    border-radius: var(--tk-radius-sm);
    border: 2px dashed var(--tk-color-primary);
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
    border-radius: var(--tk-radius-sm);
    font-size: var(--tk-text-body-sm);
    border: 2px solid var(--tk-color-primary);
    box-shadow: 3px 3px 0 rgba(20, 19, 18, 0.55);
}
.tk-alert-title { font-weight: 700; display: block; margin-bottom: 2px; text-transform: uppercase; letter-spacing: 0.06em; font-family: var(--tk-font-mono); }
.tk-alert-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); }
.tk-alert-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); }
.tk-alert-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-alert-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); }
/* Kepala tabel poster: bar tinta hitam dengan huruf mesin tik putih. */
.tk-table th {
    text-align: left;
    font-family: var(--tk-font-mono);
    font-weight: 700;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.10em;
    color: var(--tk-color-primary-contrast);
    padding: var(--tk-space-sm) var(--tk-space-md);
    background: var(--tk-color-primary);
    border-bottom: 3px solid var(--tk-color-secondary);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: 1px solid var(--tk-color-border); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: rgba(232, 210, 0, 0.18); }
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
.tk-action-btn:hover { background: var(--tk-color-accent); color: var(--tk-color-text); }
.tk-action-btn-danger:hover { background: rgba(214, 25, 30, 0.12); color: var(--tk-color-danger); }
.tk-pagination { display: flex; gap: var(--tk-space-xs); align-items: center; }
.tk-page {
    min-width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-sm);
    border: 2px solid transparent;
    background: none;
    font-family: var(--tk-font-mono);
    font-size: 13px;
    font-weight: 700;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-page:hover { background: var(--tk-color-accent); color: var(--tk-color-text); }
.tk-page-active { border-color: var(--tk-color-primary); background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); transform: rotate(-3deg); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(22, 21, 18, 0.66);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
/* Modal flyer: kertas ber-border tinta 3px, ditempel sedikit miring dengan
   bayangan cetak besar. */
.tk-modal {
    background: var(--tk-color-surface);
    border: 3px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    box-shadow: var(--tk-shadow-lg);
    max-width: 440px;
    width: 100%;
    transform: rotate(-0.8deg);
}
.tk-modal .tk-card-header, .tk-drawer .tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 360px;
    background: var(--tk-color-surface);
    border-left: 3px solid var(--tk-color-primary);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 24px;
    height: 24px;
    border: 3px solid var(--tk-color-surface-2);
    border-top-color: var(--tk-color-secondary);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.7s linear infinite;
}
.tk-progress { height: 12px; background: var(--tk-color-surface); border: 2px solid var(--tk-color-primary); border-radius: var(--tk-radius-sm); overflow: hidden; }
/* Bilah progres arsiran spidol pink: garis diagonal seperti dicoret marker. */
.tk-progress-bar { height: 100%; background: repeating-linear-gradient(-45deg, var(--tk-color-secondary) 0 6px, var(--tk-color-primary) 6px 12px); transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, rgba(20, 19, 18, 0.12) 50%, var(--tk-color-surface-2) 75%);
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
    border: 3px dashed var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    background: var(--tk-color-surface);
}
.tk-empty-icon { color: var(--tk-color-text-muted); }
.tk-empty-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-h4); text-transform: uppercase; }

/* == tk: content-blocks ========================================= */
/* Hero poster gig: titik halftone samar di latar, headline Anton raksasa. */
.tk-hero { text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); position: relative; background-image: var(--tk-pk-dots); background-size: 14px 14px; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); max-width: 580px; margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-2xl); }
.tk-feature { display: flex; flex-direction: column; gap: var(--tk-space-sm); }
/* Ikon fitur patch: kotak ber-border tinta 3px ditempel miring. */
.tk-feature-icon {
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--tk-color-surface);
    border: 3px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    color: var(--tk-color-primary);
    box-shadow: 3px 3px 0 rgba(20, 19, 18, 0.7);
    transform: rotate(-3deg);
}
/* CTA poster manggung: panel tinta hitam dengan bayangan pink — headline acara
   di tiang listrik. */
.tk-cta {
    background: var(--tk-color-primary);
    border: 3px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    box-shadow: 7px 7px 0 var(--tk-color-secondary);
    color: var(--tk-color-primary-contrast);
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
    transform: rotate(-0.5deg);
}
.tk-cta .tk-h3 { margin: 0; color: var(--tk-color-primary-contrast); }
.tk-cta .tk-muted { color: #A8A398; }
.tk-cta .tk-btn-primary { background: var(--tk-color-secondary); border-color: var(--tk-color-surface); color: var(--tk-color-secondary-contrast); box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5); }
.tk-cta .tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: punk flavor ============================================ */
/* Penimpa karakter punk di atas struktur kontrak: menang kaskade karena berada
   di ekor berkas. Tanda tangan kit ini adalah huruf tempelan ransom note,
   coretan Permanent Marker, stabilo kuning, patch stiker, dan komposisi yang
   sengaja kacau — semuanya sedikit berputar. */
.tk-hero .tk-display { font-size: clamp(34px, 6vw, var(--tk-text-display)); }
/* Ransom note: bungkus tiap kata dengan <span> di dalam .tk-ransom — kata-kata
   digunting dari koran yang berbeda lalu ditempel: latar, kemiringan, dan
   hurufnya bergantian. */
.tk-ransom span { display: inline-block; padding: 0 10px; margin: 2px; line-height: 1.2; }
.tk-ransom span:nth-child(4n+1) { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); transform: rotate(-2.5deg); }
.tk-ransom span:nth-child(4n+2) { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); transform: rotate(1.8deg); font-family: var(--tk-font-mono); }
.tk-ransom span:nth-child(4n+3) { background: var(--tk-color-surface); color: var(--tk-color-text); border: 3px solid var(--tk-color-primary); transform: rotate(-1.2deg); }
.tk-ransom span:nth-child(4n) { background: var(--tk-color-accent); color: var(--tk-color-text); transform: rotate(2.6deg); font-family: var(--tk-font-mono); }
/* Coretan spidol: Permanent Marker pink, miring — ditulis tangan di atas poster. */
.tk-scrawl { font-family: 'Permanent Marker', cursive; color: var(--tk-color-secondary); display: inline-block; transform: rotate(-2deg); letter-spacing: 0.01em; text-transform: none; }
/* Stabilo kuning: sapuan highlighter di belakang teks. */
.tk-highlight {
    background: linear-gradient(100deg, rgba(232, 210, 0, 0) 1%, rgba(232, 210, 0, 0.85) 4%, rgba(232, 210, 0, 0.75) 96%, rgba(232, 210, 0, 0) 99%);
    padding: 0 6px;
}
/* Patch/stiker: mesin tik huruf besar ber-border tinta 3px dengan bayangan
   keras, ditempel miring — stiker band di casing gitar. */
.tk-patch {
    display: inline-block;
    font-family: var(--tk-font-mono);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: 3px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    padding: 4px 14px;
    box-shadow: 3px 3px 0 var(--tk-color-secondary);
    transform: rotate(-3deg);
}
.tk-patch-pink { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); box-shadow: 3px 3px 0 var(--tk-color-primary); transform: rotate(2deg); }
.tk-patch-yellow { background: var(--tk-color-accent); box-shadow: 3px 3px 0 var(--tk-color-primary); transform: rotate(-1.5deg); }
/* Coretan tebal: teks dicoret spidol pink — harga lama, rencana batal. */
.tk-strike { text-decoration: line-through; text-decoration-color: var(--tk-color-secondary); text-decoration-thickness: 4px; }
/* Komposisi kacau yang disengaja: kartu fitur dan ikonnya berputar bergantian. */
.tk-feature:nth-child(3n+1) { transform: rotate(-0.8deg); }
.tk-feature:nth-child(3n+2) { transform: rotate(0.6deg); }
.tk-feature:nth-child(3n) { transform: rotate(-0.4deg); }
.tk-feature:nth-child(3n+1) .tk-feature-icon { color: var(--tk-color-primary); transform: rotate(-3deg); }
.tk-feature:nth-child(3n+2) .tk-feature-icon { color: var(--tk-color-secondary); border-color: var(--tk-color-secondary); box-shadow: 3px 3px 0 rgba(227, 21, 119, 0.5); transform: rotate(2deg); }
.tk-feature:nth-child(3n) .tk-feature-icon { background: var(--tk-color-accent); transform: rotate(-1.5deg); }
/* Fotokopi B&W: semua foto hitam-putih kontras tinggi ber-border tinta —
   dokumentasi gig yang digandakan di mesin fotokopi. */
.tk-card img, .tk-hero img, figure img {
    border: 2px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    filter: grayscale(1) contrast(1.4) brightness(1.05);
}
.tk-hero img, figure img { box-shadow: var(--tk-shadow); transform: rotate(-0.8deg); }
`;
