/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const VAPORWAVE_STYLES = `/* Vaporwave — kit design TOKENAI.
   Nostalgia surreal 80s-90s: neon pink-ungu, gradien sunset, grid perspektif menuju
   horizon, matahari bergaris, tipografi serif klasikal (patung Romawi) dipadu huruf
   CRT pixel, window UI ber-title bar gradien, dan teks gradien vapor. Mode terang =
   pastel dream (lavender pucat); mode gelap = neon sunset (indigo dalam, hot pink,
   cyan menyala).
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #D935B8;
    --tk-color-primary-hover: #B7269A;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: #0FB5C9;
    --tk-color-secondary-hover: #0B93A4;
    --tk-color-secondary-contrast: #FFFFFF;
    --tk-color-accent: #FF8A5C;
    --tk-color-background: #F5F0FC;
    --tk-color-surface: #FFFFFF;
    --tk-color-surface-2: #F0E9FA;
    --tk-color-text: #372A54;
    --tk-color-text-muted: #8B7DA9;
    --tk-color-border: #DFD3F2;
    --tk-color-success: #2FB380;
    --tk-color-success-soft: #DDF5EB;
    --tk-color-warning: #DB9A00;
    --tk-color-warning-soft: #FBF0D3;
    --tk-color-danger: #E24B78;
    --tk-color-danger-soft: #FBDFE8;
    --tk-color-info: #5B7CFA;
    --tk-color-info-soft: #E4E9FE;

    --tk-font-heading: 'Playfair Display', 'Times New Roman', serif;
    --tk-font-body: 'Outfit', system-ui, sans-serif;
    --tk-font-mono: 'VT323', ui-monospace, monospace;
    --tk-weight-heading: 800;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.15;
    --tk-leading-body: 1.65;

    --tk-text-display: 46px;
    --tk-text-h1: 34px;
    --tk-text-h2: 26px;
    --tk-text-h3: 20px;
    --tk-text-h4: 17px;
    --tk-text-title: 15px;
    --tk-text-body-lg: 18px;
    --tk-text-body: 16px;
    --tk-text-body-sm: 14px;
    --tk-text-caption: 15px;

    --tk-space-xs: 4px;
    --tk-space-sm: 8px;
    --tk-space-md: 16px;
    --tk-space-lg: 24px;
    --tk-space-xl: 32px;
    --tk-space-2xl: 48px;
    --tk-space-3xl: 64px;
    --tk-space-section: 96px;

    --tk-radius-sm: 8px;
    --tk-radius: 14px;
    --tk-radius-lg: 22px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    --tk-shadow-sm: 0 2px 8px rgba(120, 80, 200, 0.10);
    --tk-shadow: -6px -6px 18px rgba(34, 205, 238, 0.07), 8px 10px 26px rgba(217, 53, 184, 0.13);
    --tk-shadow-lg: -8px -8px 24px rgba(34, 205, 238, 0.09), 12px 16px 44px rgba(217, 53, 184, 0.18);

    --tk-transition: 180ms ease;
    --tk-container: 1120px;

    /* Token khas vaporwave (bukan kontrak): gradien vapor pink→ungu→cyan, langit
       pastel/sunset untuk latar body, gradien matahari, dan warna garis grid
       perspektif. */
    --tk-vw-grad: linear-gradient(120deg, #FF3EA5 0%, #B44CF0 52%, #22CDEE 100%);
    --tk-vw-bg: linear-gradient(180deg, #FDF3FA 0%, #F3EFFC 45%, #EEF4FE 100%);
    --tk-vw-sun: linear-gradient(180deg, #FFD76F 0%, #FF7AA8 55%, #C86AF0 100%);
    --tk-vw-gridline: rgba(199, 88, 205, 0.28);
    --tk-vw-chroma-a: rgba(34, 205, 238, 0.35);
    --tk-vw-chroma-b: rgba(255, 62, 165, 0.30);
}

/* Mode gelap: neon sunset — indigo dalam dengan hot pink dan cyan menyala; grid dan
   bayangan ikut ber-glow. Aktifkan dengan atribut data-tk-theme="dark" pada <html>
   atau <body>. */
[data-tk-theme="dark"] {
    --tk-color-primary: #FF3EA5;
    --tk-color-primary-hover: #FF6FBE;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: #26D6F0;
    --tk-color-secondary-hover: #6FE5F7;
    --tk-color-secondary-contrast: #0A2530;
    --tk-color-accent: #FFB86B;
    --tk-color-background: #150A32;
    --tk-color-surface: #1F1244;
    --tk-color-surface-2: #2B1A5C;
    --tk-color-text: #F1E8FF;
    --tk-color-text-muted: #A995D6;
    --tk-color-border: #463180;
    --tk-color-success: #3BE8A0;
    --tk-color-success-soft: #123A2E;
    --tk-color-warning: #FFC94D;
    --tk-color-warning-soft: #3A2E10;
    --tk-color-danger: #FF5C8A;
    --tk-color-danger-soft: #40142A;
    --tk-color-info: #7CA1FF;
    --tk-color-info-soft: #16224A;
    --tk-shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.35);
    --tk-shadow: 0 10px 30px rgba(0, 0, 0, 0.45), 0 0 24px rgba(255, 62, 165, 0.12);
    --tk-shadow-lg: 0 18px 48px rgba(0, 0, 0, 0.55), 0 0 40px rgba(255, 62, 165, 0.16);
    --tk-vw-grad: linear-gradient(120deg, #FF3EA5 0%, #8A5CFF 52%, #26D6F0 100%);
    --tk-vw-bg: linear-gradient(180deg, #1D0C45 0%, #150A32 55%, #2A0F52 100%);
    --tk-vw-sun: linear-gradient(180deg, #FFD76F 0%, #FF5C8A 55%, #B44CF0 100%);
    --tk-vw-gridline: rgba(255, 62, 165, 0.4);
    --tk-vw-chroma-a: rgba(38, 214, 240, 0.5);
    --tk-vw-chroma-b: rgba(255, 62, 165, 0.45);
}

/* == tk: base =================================================== */
body {
    margin: 0;
    background: var(--tk-vw-bg) fixed;
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
::selection { background: #FF3EA5; color: #FFFFFF; }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    letter-spacing: 0.005em;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
/* Display serif miring — patung klasik bertemu kaset VHS. */
.tk-display { font-size: var(--tk-text-display); font-style: italic; line-height: 1.08; }
.tk-h1 { font-size: var(--tk-text-h1); }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-body); font-size: var(--tk-text-title); font-weight: 600; margin: 0 0 var(--tk-space-sm); }
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
/* Tautan mimpi: garis bawah bergelombang seperti air kolam renang. */
.tk-link { color: var(--tk-color-primary); font-weight: 600; text-decoration: underline wavy; text-decoration-thickness: 1px; text-underline-offset: 4px; }
.tk-link:hover { color: var(--tk-color-secondary); }
.tk-code { font-family: var(--tk-font-mono); font-size: 1.05em; background: var(--tk-color-surface-2); border-radius: var(--tk-radius-sm); color: var(--tk-color-primary); padding: 1px 8px; }

/* == tk: button ================================================= */
/* Tombol kapsul: primary memakai gradien vapor penuh dengan glow pink; hover
   mengambang naik. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-body);
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    line-height: 1;
    padding: 13px 26px;
    border: 1px solid transparent;
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), background var(--tk-transition), color var(--tk-transition), filter var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:focus-visible { outline: 2px solid var(--tk-color-secondary); outline-offset: 2px; }
.tk-btn:not(:disabled):active { transform: translateY(1px); }
.tk-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-vw-grad); color: #FFFFFF; box-shadow: 0 6px 18px rgba(217, 53, 184, 0.35); }
.tk-btn-primary:hover:not(:disabled) { filter: brightness(1.08) saturate(1.05); transform: translateY(-1px); box-shadow: 0 10px 26px rgba(217, 53, 184, 0.45); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); box-shadow: 0 6px 18px rgba(15, 181, 201, 0.3); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); transform: translateY(-1px); }
.tk-btn-outline { background: transparent; color: var(--tk-color-primary); border-color: var(--tk-color-primary); }
.tk-btn-outline:hover:not(:disabled) { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-danger { background: var(--tk-color-danger); color: #FFFFFF; }
.tk-btn-danger:hover:not(:disabled) { filter: brightness(0.92); }
.tk-btn-text { background: none; color: var(--tk-color-primary); padding-left: 6px; padding-right: 6px; }
.tk-btn-text:hover:not(:disabled) { color: var(--tk-color-secondary); text-decoration: underline wavy; text-underline-offset: 4px; }
.tk-btn-sm { font-size: 11px; padding: 9px 18px; }
.tk-btn-lg { font-size: 15px; padding: 17px 36px; }
.tk-btn-icon { padding: 13px; }
.tk-btn-loading { position: relative; color: transparent !important; pointer-events: none; }
.tk-btn-loading::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    border: 2px solid rgba(255, 255, 255, 0.95);
    border-top-color: transparent;
    border-radius: 50%;
    animation: tk-spin 0.8s linear infinite;
}
.tk-btn-outline.tk-btn-loading::after, .tk-btn-ghost.tk-btn-loading::after, .tk-btn-text.tk-btn-loading::after {
    border-color: var(--tk-color-primary);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
.tk-field { display: flex; flex-direction: column; gap: var(--tk-space-xs); margin-bottom: var(--tk-space-md); }
.tk-label { font-size: 13px; font-weight: 600; letter-spacing: 0.02em; color: var(--tk-color-text); }
.tk-help { font-size: 13px; color: var(--tk-color-text-muted); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    padding: 12px 16px;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-primary);
    box-shadow: 0 0 0 3px rgba(217, 53, 184, 0.18), 0 0 14px rgba(34, 205, 238, 0.12);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: 0 0 0 3px rgba(226, 75, 120, 0.16);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: 0 0 0 3px rgba(47, 179, 128, 0.16); }
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
    box-shadow: 0 0 0 3px rgba(217, 53, 184, 0.18);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
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
    padding: 9px 12px;
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
.tk-option-selected { background: var(--tk-color-surface-2); font-weight: 600; color: var(--tk-color-primary); }
.tk-option-check { margin-left: auto; color: var(--tk-color-primary); display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 12px;
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
    border: 1px solid var(--tk-color-border);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-checkbox { border-radius: 6px; }
.tk-checkbox:hover, .tk-radio:hover { border-color: var(--tk-color-primary); }
.tk-checkbox:checked { background: var(--tk-vw-grad); border-color: transparent; }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 2px;
    width: 4px;
    height: 9px;
    border-right: 2px solid #FFFFFF;
    border-bottom: 2px solid #FFFFFF;
    transform: rotate(45deg);
}
.tk-radio { border-radius: 50%; }
.tk-radio:checked { border-color: var(--tk-color-primary); }
.tk-radio:checked::after {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: var(--tk-vw-grad);
}
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: 2px solid var(--tk-color-secondary);
    outline-offset: 2px;
}
.tk-toggle { position: relative; width: 46px; height: 26px; flex: none; margin: 0; appearance: none; border: 1px solid var(--tk-color-border); background: var(--tk-color-surface-2); border-radius: var(--tk-radius-full); cursor: pointer; transition: background var(--tk-transition), border-color var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; border-radius: 50%; background: #FFFFFF; box-shadow: 0 1px 4px rgba(55, 42, 84, 0.3); transition: transform var(--tk-transition); }
.tk-toggle:checked { background: var(--tk-vw-grad); border-color: transparent; }
.tk-toggle:checked::after { transform: translateX(20px); }

/* == tk: search-filter ========================================== */
.tk-search { position: relative; display: flex; align-items: center; min-width: 220px; }
.tk-search .tk-input { width: 100%; padding-left: 40px; padding-right: 64px; }
.tk-search .tk-input::-webkit-search-cancel-button { -webkit-appearance: none; }
.tk-search-icon { position: absolute; left: 14px; display: inline-flex; color: var(--tk-color-text-muted); pointer-events: none; }
.tk-search-kbd {
    position: absolute;
    right: 12px;
    font-family: var(--tk-font-mono);
    font-size: 13px;
    color: var(--tk-color-text-muted);
    background: var(--tk-color-surface-2);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 1px 7px;
    pointer-events: none;
}
.tk-filter-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-md);
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-sm);
}
.tk-filter-bar .tk-search { flex: 1; }
.tk-filter-bar .tk-select { min-width: 170px; }
.tk-filter-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    background: var(--tk-vw-grad);
    color: #FFFFFF;
    border-radius: var(--tk-radius-full);
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
    right: 0;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
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
.tk-dropdown-menu-up { top: auto; bottom: calc(100% + 6px); }
.tk-dropdown-open > .tk-dropdown-menu, .tk-dropdown:focus-within > .tk-dropdown-menu { display: flex; }
.tk-dropdown-label { padding: 6px 12px; font-family: var(--tk-font-mono); font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--tk-color-text-muted); }
.tk-dropdown-item {
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
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-dropdown-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-primary); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-text-muted); }
.tk-dropdown-item:hover iconify-icon { color: var(--tk-color-primary); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-divider { height: 1px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) 0; }

/* == tk: card =================================================== */
/* Kartu mimpi: bayangan dwiwarna (cyan kiri-atas, pink kanan-bawah) memberi kesan
   melayang di senja. */
.tk-card {
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow);
    overflow: hidden;
}
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-sm); }
.tk-card-stat .tk-stat-value {
    font-size: var(--tk-text-h2);
    font-family: var(--tk-font-heading);
    font-weight: 800;
    background: var(--tk-vw-grad);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: 13px; font-weight: 600; }
.tk-card-stat .tk-stat-trend-up::before { content: '▲ '; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: 13px; font-weight: 600; }
.tk-card-stat .tk-stat-trend-down::before { content: '▼ '; }

/* == tk: navigation ============================================= */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: 1px solid var(--tk-color-border);
}
.tk-navbar-brand {
    font-family: var(--tk-font-heading);
    font-weight: 800;
    font-style: italic;
    font-size: 19px;
    margin-right: auto;
    background: var(--tk-vw-grad);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; }
.tk-navbar-link:hover { color: var(--tk-color-primary); }
.tk-navbar-link-active { color: var(--tk-color-primary); text-decoration: underline wavy; text-decoration-thickness: 1px; text-underline-offset: 5px; }
.tk-navbar-dark { background: #150A32; border-bottom-color: #463180; }
.tk-navbar-dark .tk-navbar-link { color: #A995D6; }
.tk-navbar-dark .tk-navbar-link:hover, .tk-navbar-dark .tk-navbar-link-active { color: #FF3EA5; }
.tk-sidebar {
    width: 244px;
    background: var(--tk-color-surface);
    border-right: 1px solid var(--tk-color-border);
    padding: var(--tk-space-md);
    display: flex;
    flex-direction: column;
    gap: 4px;
    transition: width var(--tk-transition);
}
.tk-sidebar-item {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 10px var(--tk-space-md);
    border-radius: var(--tk-radius-full);
    color: var(--tk-color-text-muted);
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
/* Item aktif: pil gradien vapor. */
.tk-sidebar-item-active { background: var(--tk-vw-grad); color: #FFFFFF; box-shadow: 0 4px 14px rgba(217, 53, 184, 0.3); }
.tk-sidebar-item-active:hover { background: var(--tk-vw-grad); color: #FFFFFF; }
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 72px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: 10px; }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 13px;
    letter-spacing: 0.12em;
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
.tk-breadcrumb a:hover { color: var(--tk-color-primary); text-decoration: underline wavy; text-underline-offset: 3px; }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.6; }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 600; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: 1px solid var(--tk-color-border);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: var(--tk-space-lg); border-bottom: 1px solid var(--tk-color-border); }
.tk-tab {
    padding: var(--tk-space-sm) 2px 12px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 3px solid transparent;
    margin-bottom: -1px;
}
.tk-tab:hover { color: var(--tk-color-text); }
/* Tab aktif digarisbawahi gradien vapor. */
.tk-tab-active { color: var(--tk-color-primary); border-image: var(--tk-vw-grad) 1; border-bottom: 3px solid; }
.tk-segmented { display: inline-flex; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); padding: 4px; gap: 2px; }
.tk-segment {
    padding: 8px 18px;
    font-family: var(--tk-font-body);
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--tk-color-text-muted);
    border: none;
    border-radius: var(--tk-radius-full);
    background: transparent;
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: var(--tk-vw-grad); color: #FFFFFF; box-shadow: 0 2px 10px rgba(217, 53, 184, 0.3); }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 4px 12px;
    border-radius: var(--tk-radius-full);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text-muted);
}
.tk-badge-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); }
.tk-badge-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); }
.tk-badge-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-badge-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 12px;
    font-weight: 500;
    padding: 4px 12px;
    border-radius: var(--tk-radius-full);
    border: 1px solid var(--tk-color-border);
    background: var(--tk-color-surface);
    color: var(--tk-color-text);
}
.tk-chip-remove { border: none; background: none; cursor: pointer; color: var(--tk-color-text-muted); font-size: 13px; line-height: 1; padding: 0; }
.tk-chip-remove:hover { color: var(--tk-color-danger); }

/* == tk: alert ================================================== */
.tk-alert {
    display: flex;
    gap: var(--tk-space-sm);
    align-items: flex-start;
    padding: var(--tk-space-md);
    border-radius: var(--tk-radius);
    font-size: var(--tk-text-body-sm);
    border: 1px solid transparent;
}
.tk-alert-title { font-weight: 700; display: block; margin-bottom: 2px; }
.tk-alert-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); border-color: rgba(47, 179, 128, 0.35); }
.tk-alert-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); border-color: rgba(219, 154, 0, 0.35); }
.tk-alert-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); border-color: rgba(226, 75, 120, 0.35); }
.tk-alert-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); border-color: rgba(91, 124, 250, 0.35); }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); }
.tk-table th {
    text-align: left;
    font-family: var(--tk-font-mono);
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.10em;
    color: var(--tk-color-text-muted);
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-bottom: 1px solid var(--tk-color-border);
}
.tk-table td { padding: 13px var(--tk-space-md); border-bottom: 1px solid var(--tk-color-border); }
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
    border-radius: var(--tk-radius-full);
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-action-btn:hover { background: var(--tk-color-surface-2); color: var(--tk-color-primary); }
.tk-action-btn-danger:hover { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-pagination { display: flex; gap: var(--tk-space-xs); align-items: center; }
.tk-page {
    min-width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-full);
    border: 1px solid transparent;
    background: none;
    font-size: 13px;
    font-weight: 600;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-page:hover { border-color: var(--tk-color-border); color: var(--tk-color-text); }
.tk-page-active { background: var(--tk-vw-grad); color: #FFFFFF; }

/* == tk: overlay ================================================ */
/* Modal = jendela retro: title bar gradien vapor ala window manager 90s dengan
   tombol jendela di kanan, dilukis ::before. */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(21, 10, 50, 0.55);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg);
    max-width: 440px;
    width: 100%;
    overflow: hidden;
}
.tk-modal::before {
    content: '\\2014\\2003\\25A1\\2003\\2715';
    display: block;
    text-align: right;
    font-family: var(--tk-font-mono);
    font-size: 14px;
    line-height: 1;
    color: rgba(255, 255, 255, 0.95);
    padding: 7px 14px 6px;
    background: var(--tk-vw-grad);
}
.tk-modal .tk-card-header, .tk-drawer .tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 360px;
    background: var(--tk-color-surface);
    border-left: 1px solid var(--tk-color-border);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 26px;
    height: 26px;
    border: 3px solid rgba(34, 205, 238, 0.3);
    border-top-color: var(--tk-color-primary);
    border-radius: 50%;
    animation: tk-spin 0.9s linear infinite;
}
.tk-progress { height: 10px; background: var(--tk-color-surface-2); border-radius: var(--tk-radius-full); overflow: hidden; }
.tk-progress-bar { height: 100%; background: var(--tk-vw-grad); border-radius: var(--tk-radius-full); transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, rgba(255, 62, 165, 0.10) 50%, var(--tk-color-surface-2) 75%);
    background-size: 200% 100%;
    animation: tk-shimmer 1.4s ease-in-out infinite;
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
    border: 1px dashed var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    background: var(--tk-color-surface);
}
.tk-empty-icon { color: var(--tk-color-primary); opacity: 0.7; }
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: 800; font-size: var(--tk-text-h4); }

/* == tk: content-blocks ========================================= */
/* Hero vaporwave: matahari sunset bergaris terbit di belakang judul dan lantai grid
   perspektif menuju horizon di kaki seksi — keduanya dilukis pseudo-element, konten
   tetap markup kontrak murni. */
.tk-hero { text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); position: relative; overflow: hidden; }
.tk-hero > * { position: relative; z-index: 1; }
.tk-hero::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 28px;
    width: 300px;
    height: 300px;
    transform: translateX(-50%);
    border-radius: 50%;
    background: var(--tk-vw-sun);
    -webkit-mask-image: repeating-linear-gradient(180deg, #000 0 24px, transparent 24px 30px);
    mask-image: repeating-linear-gradient(180deg, #000 0 24px, transparent 24px 30px);
    opacity: 0.5;
    z-index: 0;
    pointer-events: none;
}
.tk-hero::after {
    content: '';
    position: absolute;
    left: -30%;
    right: -30%;
    bottom: -2px;
    height: 42%;
    background:
        repeating-linear-gradient(90deg, var(--tk-vw-gridline) 0 1px, transparent 1px 64px),
        repeating-linear-gradient(180deg, var(--tk-vw-gridline) 0 1px, transparent 1px 36px);
    transform: perspective(340px) rotateX(58deg);
    transform-origin: 50% 0;
    z-index: 0;
    pointer-events: none;
}
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); max-width: 560px; margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-2xl); }
.tk-feature { display: flex; flex-direction: column; gap: var(--tk-space-sm); }
.tk-feature-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-full);
    color: var(--tk-color-primary);
    box-shadow: var(--tk-shadow-sm);
}
/* CTA kartu senja: gradien vapor penuh dengan teks putih. */
.tk-cta {
    background: var(--tk-vw-grad);
    color: #FFFFFF;
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg);
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
}
.tk-cta .tk-h3 { color: #FFFFFF; margin: 0; }
.tk-cta .tk-muted { color: rgba(255, 255, 255, 0.85); }
.tk-cta .tk-btn-primary { background: #FFFFFF; color: #B7269A; box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2); }
.tk-cta .tk-btn-primary:hover:not(:disabled) { filter: none; background: #FFE9F7; transform: translateY(-1px); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: vaporwave flavor ======================================= */
/* Penimpa karakter vaporwave di atas struktur kontrak: menang kaskade karena berada
   di ekor berkas. Tanda tangannya teks gradien vapor, aberasi kromatik VHS, dan
   readout CRT. */
.tk-hero .tk-display { font-size: clamp(30px, 4.8vw, var(--tk-text-display)); }
/* Teks gradien vapor — pink → ungu → cyan. */
.tk-vw-text {
    background: var(--tk-vw-grad);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
/* Aberasi kromatik VHS statis: bayangan cyan-pink tergeser, tanpa animasi — mimpinya
   tenang, bukan rusak. */
.tk-vhs { text-shadow: 2px 0 var(--tk-vw-chroma-a), -2px 0 var(--tk-vw-chroma-b); }
/* Readout CRT: angka VT323 di panel ungu malam, selalu gelap di kedua tema. */
.tk-readout {
    display: inline-block;
    font-family: var(--tk-font-mono);
    font-size: 22px;
    line-height: 1.2;
    color: #26D6F0;
    background: #1A0D3E;
    border: 1px solid #463180;
    border-radius: var(--tk-radius-sm);
    padding: 2px 14px;
    text-shadow: 0 0 8px rgba(38, 214, 240, 0.6);
}
/* Foto: senja dipaksa — saturasi naik, rona digeser ke pink-ungu. */
.tk-card img, .tk-hero img, figure img {
    border-radius: var(--tk-radius);
    filter: saturate(1.35) hue-rotate(-12deg) contrast(1.04);
}
.tk-hero img, figure img { box-shadow: var(--tk-shadow); }
`;
