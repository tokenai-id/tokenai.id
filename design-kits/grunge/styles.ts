/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const GRUNGE_STYLES = `/* Grunge — kit design TOKENAI.
   Fotokopi 90an yang digandakan sampai pecah: kertas kotor bernoda dengan grain
   di seluruh halaman, tinta hitam pekat dan merah karat, heading Rubik Distressed
   yang tergerus, label mesin tik Special Elite, badge stempel karet miring,
   goresan halus, cetakan ganda yang meleset (xerox), dan fotografi desaturated
   kontras tinggi. Kit satu-tema: terang secara bawaan, tanpa mode gelap —
   mesin fotokopi hanya kenal kertas.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #1C1A17;
    --tk-color-primary-hover: #3A362F;
    --tk-color-primary-contrast: #EDE8DB;
    --tk-color-secondary: #9E2B1E;
    --tk-color-secondary-hover: #B8402F;
    --tk-color-secondary-contrast: #F5EFE2;
    --tk-color-accent: #A8821F;
    --tk-color-background: #E4DFD0;
    --tk-color-surface: #EFEADD;
    --tk-color-surface-2: #DCD5C2;
    --tk-color-text: #211E1A;
    --tk-color-text-muted: #6E6659;
    --tk-color-border: #A79D88;
    --tk-color-success: #4A6B3A;
    --tk-color-success-soft: #DCE3CE;
    --tk-color-warning: #A87B1C;
    --tk-color-warning-soft: #EDE2C4;
    --tk-color-danger: #8F2318;
    --tk-color-danger-soft: #EBD5CD;
    --tk-color-info: #3E5E75;
    --tk-color-info-soft: #D7DFE3;

    --tk-font-heading: 'Rubik Distressed', Impact, 'Arial Black', sans-serif;
    --tk-font-body: 'Archivo', system-ui, sans-serif;
    --tk-font-mono: 'Special Elite', 'Courier New', monospace;
    --tk-weight-heading: 400;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.12;
    --tk-leading-body: 1.6;

    --tk-text-display: 46px;
    --tk-text-h1: 34px;
    --tk-text-h2: 26px;
    --tk-text-h3: 20px;
    --tk-text-h4: 16px;
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

    --tk-radius-sm: 2px;
    --tk-radius: 3px;
    --tk-radius-lg: 6px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    --tk-shadow-sm: 2px 2px 0 rgba(28, 26, 23, 0.22);
    --tk-shadow: 3px 3px 0 rgba(28, 26, 23, 0.3);
    --tk-shadow-lg: 5px 5px 0 rgba(28, 26, 23, 0.35);

    --tk-transition: 130ms ease;
    --tk-container: 1200px;

    /* Token khas grunge (bukan kontrak): grain fotokopi (SVG feTurbulence), kertas
       bernoda, goresan diagonal halus, dan bayangan tinta keras. */
    --tk-gr-grain: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    --tk-gr-bg:
        radial-gradient(900px 460px at 12% -8%, rgba(110, 102, 89, 0.14) 0%, rgba(110, 102, 89, 0) 55%),
        radial-gradient(760px 420px at 96% 6%, rgba(158, 43, 30, 0.05) 0%, rgba(158, 43, 30, 0) 55%),
        radial-gradient(640px 520px at 45% 112%, rgba(110, 102, 89, 0.10) 0%, rgba(110, 102, 89, 0) 60%),
        #E4DFD0;
    --tk-gr-scratch: repeating-linear-gradient(64deg, rgba(28, 26, 23, 0.05) 0 1px, transparent 1px 90px, rgba(28, 26, 23, 0.04) 90px 91px, transparent 91px 173px);
    --tk-gr-ink-shadow: 3px 3px 0 #1C1A17;
}

/* == tk: base =================================================== */
body {
    margin: 0;
    background: var(--tk-gr-bg);
    color: var(--tk-color-text);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body);
    font-weight: var(--tk-weight-body);
    line-height: var(--tk-leading-body);
    -webkit-font-smoothing: antialiased;
}
/* Grain fotokopi + goresan halus di atas segalanya — pelapis grunge yang tidak
   menghalangi klik. */
body::after {
    content: '';
    position: fixed;
    inset: 0;
    background: var(--tk-gr-grain), var(--tk-gr-scratch);
    opacity: 0.11;
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
::selection { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    letter-spacing: 0.015em;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); line-height: 1.05; text-transform: uppercase; }
.tk-h1 { font-size: var(--tk-text-h1); }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-body); font-size: var(--tk-text-title); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 var(--tk-space-sm); }
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
.tk-link { color: var(--tk-color-secondary); font-weight: 600; text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; }
.tk-link:hover { color: var(--tk-color-secondary-hover); background: rgba(158, 43, 30, 0.08); }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.9em; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); color: var(--tk-color-secondary); padding: 1px 6px; border-radius: var(--tk-radius-sm); }

/* == tk: button ================================================= */
/* Tombol blok tinta: persegi hampir tanpa radius, border tinta 2px, bayangan
   cetak keras yang bergeser saat ditekan — seperti stempel dihantam ke kertas. */
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
    padding: 13px 22px;
    border: 2px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), background var(--tk-transition), color var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:not(:disabled):active { transform: translate(2px, 2px); box-shadow: none !important; }
.tk-btn:disabled { opacity: 0.45; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); box-shadow: var(--tk-shadow); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); transform: translate(-1px, -1px); box-shadow: 4px 4px 0 rgba(28, 26, 23, 0.32); }
.tk-btn-secondary { background: var(--tk-color-secondary); border-color: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); box-shadow: 3px 3px 0 rgba(158, 43, 30, 0.35); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); transform: translate(-1px, -1px) rotate(-0.5deg); box-shadow: 4px 4px 0 rgba(158, 43, 30, 0.4); }
.tk-btn-danger { background: var(--tk-color-danger); border-color: var(--tk-color-danger); color: #F5EFE2; box-shadow: 3px 3px 0 rgba(143, 35, 24, 0.35); }
.tk-btn-danger:hover:not(:disabled) { transform: translate(-1px, -1px); }
.tk-btn-outline { background: transparent; color: var(--tk-color-primary); }
.tk-btn-outline:hover:not(:disabled) { background: rgba(28, 26, 23, 0.06); box-shadow: var(--tk-shadow-sm); }
.tk-btn-ghost { background: transparent; border-color: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-text { background: none; border-color: transparent; color: var(--tk-color-secondary); padding-left: 4px; padding-right: 4px; }
.tk-btn-text:hover:not(:disabled) { text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; }
.tk-btn-sm { font-size: 11px; padding: 9px 14px; }
.tk-btn-lg { font-size: 15px; padding: 17px 32px; }
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
.tk-label { font-family: var(--tk-font-mono); font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--tk-color-text); }
.tk-help { font-size: 13px; color: var(--tk-color-text-muted); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-bottom: 2px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    padding: 11px 14px;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-primary);
    box-shadow: 2px 2px 0 rgba(28, 26, 23, 0.25);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    border-bottom-color: var(--tk-color-danger);
    box-shadow: 2px 2px 0 rgba(143, 35, 24, 0.3);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); border-bottom-color: var(--tk-color-success); box-shadow: 2px 2px 0 rgba(74, 107, 58, 0.3); }
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
    border-color: var(--tk-color-primary);
    box-shadow: 2px 2px 0 rgba(28, 26, 23, 0.25);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-primary);
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
.tk-option:hover { background: rgba(28, 26, 23, 0.07); }
.tk-option-selected { background: rgba(28, 26, 23, 0.11); color: var(--tk-color-text); font-weight: 700; }
.tk-option-check { margin-left: auto; color: var(--tk-color-secondary); display: inline-flex; }
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
    border: 2px solid var(--tk-color-primary);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-checkbox { border-radius: var(--tk-radius-sm); }
.tk-checkbox:hover, .tk-radio:hover { box-shadow: 2px 2px 0 rgba(28, 26, 23, 0.2); }
.tk-checkbox:checked { background: var(--tk-color-primary); }
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
.tk-radio:checked { background: var(--tk-color-primary); box-shadow: inset 0 0 0 3px var(--tk-color-surface); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(158, 43, 30, 0.45);
}
.tk-toggle { position: relative; width: 44px; height: 24px; flex: none; margin: 0; appearance: none; border: 2px solid var(--tk-color-primary); background: var(--tk-color-surface); border-radius: var(--tk-radius-full); cursor: pointer; transition: background var(--tk-transition), border-color var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background: var(--tk-color-text-muted); border-radius: var(--tk-radius-full); transition: transform var(--tk-transition), background var(--tk-transition); }
.tk-toggle:checked { background: var(--tk-color-surface-2); }
.tk-toggle:checked::after { transform: translateX(20px); background: var(--tk-color-primary); }

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
    padding: 1px 6px;
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
    border-radius: var(--tk-radius);
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
    border: 2px solid var(--tk-color-primary);
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
.tk-dropdown-label { padding: 6px 12px; font-family: var(--tk-font-mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--tk-color-text-muted); }
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
.tk-dropdown-item:hover { background: rgba(28, 26, 23, 0.07); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-text-muted); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: rgba(143, 35, 24, 0.1); }
.tk-dropdown-divider { height: 1px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) 0; }

/* == tk: card =================================================== */
/* Panel kertas fotokopi: selembar kertas lebih terang di atas kertas kotor,
   border tinta tipis dengan bayangan cetak keras — tumpukan flyer di meja. */
.tk-card {
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    box-shadow: var(--tk-shadow-sm);
    overflow: hidden;
    transition: box-shadow var(--tk-transition), transform var(--tk-transition);
}
.tk-card:hover { box-shadow: var(--tk-shadow); }
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-sm); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-family: var(--tk-font-heading); color: var(--tk-color-text); }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 700; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 700; }

/* == tk: navigation ============================================= */
/* Navbar masthead zine: kertas dengan garis tinta tebal di tepi bawah, brand
   Rubik Distressed — kop fotokopian yang dicetak miring. */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: 3px solid var(--tk-color-primary);
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-size: 18px; letter-spacing: 0.02em; margin-right: auto; color: var(--tk-color-text); text-transform: uppercase; }
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: 13px; font-weight: 700; font-family: var(--tk-font-body); text-transform: uppercase; letter-spacing: 0.08em; }
.tk-navbar-link:hover { color: var(--tk-color-text); text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 4px; }
.tk-navbar-link-active { color: var(--tk-color-secondary); text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 4px; }
.tk-navbar-dark { background: var(--tk-color-primary); border-bottom-color: var(--tk-color-secondary); }
.tk-navbar-dark .tk-navbar-brand { color: var(--tk-color-primary-contrast); }
.tk-navbar-dark .tk-navbar-link { color: #B5AC97; }
.tk-navbar-dark .tk-navbar-link:hover { color: var(--tk-color-primary-contrast); }
.tk-navbar-dark .tk-navbar-link-active { color: #E0785F; }
.tk-sidebar {
    width: 240px;
    background: var(--tk-color-surface);
    border-right: 1px solid var(--tk-color-primary);
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
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-sidebar-item:hover { background: rgba(28, 26, 23, 0.06); color: var(--tk-color-text); }
.tk-sidebar-item-active {
    background: var(--tk-color-primary);
    color: var(--tk-color-primary-contrast);
    box-shadow: 2px 2px 0 rgba(28, 26, 23, 0.25);
}
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 68px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 11px;
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
    font-weight: 500;
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
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: var(--tk-space-lg); border-bottom: 2px solid var(--tk-color-primary); }
.tk-tab {
    padding: var(--tk-space-sm) 2px 12px;
    font-size: 13px;
    font-weight: 700;
    font-family: var(--tk-font-body);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 4px solid transparent;
    margin-bottom: -2px;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-secondary); border-bottom-color: var(--tk-color-secondary); }
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
.tk-segment-active { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }

/* == tk: badge ================================================== */
/* Badge stempel karet: mesin tik huruf besar ber-border tebal warna tintanya
   sendiri, ditempel sedikit miring — cap APPROVED di dokumen. */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 2px 10px;
    border: 2px solid currentColor;
    border-radius: var(--tk-radius);
    background: transparent;
    color: var(--tk-color-text);
    transform: rotate(-1.5deg);
}
.tk-badge-success { color: var(--tk-color-success); background: var(--tk-color-success-soft); transform: rotate(1deg); }
.tk-badge-warning { color: var(--tk-color-warning); background: var(--tk-color-warning-soft); transform: rotate(-1deg); }
.tk-badge-danger { color: var(--tk-color-danger); background: var(--tk-color-danger-soft); transform: rotate(1.5deg); }
.tk-badge-info { color: var(--tk-color-info); background: var(--tk-color-info-soft); transform: rotate(-0.8deg); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    letter-spacing: 0.04em;
    padding: 3px 10px;
    border-radius: var(--tk-radius-sm);
    border: 1px dashed var(--tk-color-primary);
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
    border: 2px solid currentColor;
    box-shadow: 3px 3px 0 rgba(28, 26, 23, 0.18);
}
.tk-alert-title { font-weight: 700; display: block; margin-bottom: 2px; text-transform: uppercase; letter-spacing: 0.05em; font-family: var(--tk-font-mono); }
.tk-alert-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); }
.tk-alert-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); }
.tk-alert-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-alert-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); }
.tk-table th {
    text-align: left;
    font-family: var(--tk-font-mono);
    font-weight: 400;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.10em;
    color: var(--tk-color-text);
    padding: var(--tk-space-sm) var(--tk-space-md);
    background: var(--tk-color-surface-2);
    border-top: 2px solid var(--tk-color-primary);
    border-bottom: 2px solid var(--tk-color-primary);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: 1px solid var(--tk-color-border); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: rgba(28, 26, 23, 0.05); }
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
.tk-action-btn:hover { background: rgba(28, 26, 23, 0.08); color: var(--tk-color-text); }
.tk-action-btn-danger:hover { background: rgba(143, 35, 24, 0.1); color: var(--tk-color-danger); }
.tk-pagination { display: flex; gap: var(--tk-space-xs); align-items: center; }
.tk-page {
    min-width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-sm);
    border: 1px solid transparent;
    background: none;
    font-family: var(--tk-font-mono);
    font-size: 13px;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-page:hover { background: rgba(28, 26, 23, 0.07); color: var(--tk-color-text); }
.tk-page-active { border-color: var(--tk-color-primary); background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(33, 30, 26, 0.62);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
/* Modal selebaran: kertas ber-border tinta tebal dengan bayangan cetak besar. */
.tk-modal {
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    box-shadow: var(--tk-shadow-lg);
    max-width: 440px;
    width: 100%;
    transform: rotate(-0.4deg);
}
.tk-modal .tk-card-header, .tk-drawer .tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 360px;
    background: var(--tk-color-surface);
    border-left: 2px solid var(--tk-color-primary);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 24px;
    height: 24px;
    border: 3px solid var(--tk-color-border);
    border-top-color: var(--tk-color-primary);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.7s linear infinite;
}
.tk-progress { height: 10px; background: var(--tk-color-surface); border: 2px solid var(--tk-color-primary); border-radius: var(--tk-radius-sm); overflow: hidden; }
/* Bilah progres arsiran tinta: garis diagonal seperti diarsir spidol. */
.tk-progress-bar { height: 100%; background: repeating-linear-gradient(-45deg, var(--tk-color-primary) 0 6px, var(--tk-color-primary-hover) 6px 12px); transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, rgba(28, 26, 23, 0.1) 50%, var(--tk-color-surface-2) 75%);
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
    border: 2px dashed var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    background: var(--tk-color-surface);
}
.tk-empty-icon { color: var(--tk-color-text-muted); }
.tk-empty-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-h4); text-transform: uppercase; }

/* == tk: content-blocks ========================================= */
.tk-hero { text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); position: relative; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); max-width: 580px; margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-2xl); }
.tk-feature { display: flex; flex-direction: column; gap: var(--tk-space-sm); }
/* Ikon fitur kotak stempel: border tinta 2px, ditempel sedikit miring. */
.tk-feature-icon {
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    color: var(--tk-color-primary);
    box-shadow: 2px 2px 0 rgba(28, 26, 23, 0.25);
    transform: rotate(-2deg);
}
/* CTA selebaran gig: panel tinta hitam dengan teks kertas — poster konser
   ditempel di dinding. */
.tk-cta {
    background: var(--tk-color-primary);
    border: 2px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    box-shadow: 5px 5px 0 rgba(158, 43, 30, 0.55);
    color: var(--tk-color-primary-contrast);
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
}
.tk-cta .tk-h3 { margin: 0; color: var(--tk-color-primary-contrast); }
.tk-cta .tk-muted { color: #B5AC97; }
.tk-cta .tk-btn-primary { background: var(--tk-color-secondary); border-color: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.4); }
.tk-cta .tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: grunge flavor ========================================== */
/* Penimpa karakter grunge di atas struktur kontrak: menang kaskade karena berada
   di ekor berkas. Tanda tangan kit ini adalah cetakan ganda xerox yang meleset,
   stempel karet, sobekan tinta, dan foto desaturated kontras tinggi. */
.tk-hero .tk-display { font-size: clamp(30px, 5vw, var(--tk-text-display)); }
/* Xerox: cetakan ganda yang meleset — bayangan tinta tipis di kanan-bawah,
   seperti kertas bergeser di mesin fotokopi. Pasang di headline mana pun. */
.tk-xerox { text-shadow: 3px 2px 0 rgba(28, 26, 23, 0.22); }
/* Stempel karet besar: border tebal warna tinta sendiri, miring, huruf mesin tik.
   Untuk penanda seksi atau cap dokumen. */
.tk-stamp {
    display: inline-block;
    font-family: var(--tk-font-mono);
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--tk-color-secondary);
    border: 3px solid var(--tk-color-secondary);
    border-radius: var(--tk-radius);
    padding: 3px 14px;
    transform: rotate(-3deg);
    opacity: 0.88;
}
.tk-stamp-ink { color: var(--tk-color-primary); border-color: var(--tk-color-primary); transform: rotate(2deg); }
/* Coretan spidol: sorot teks dengan sapuan tinta karat di belakangnya. */
.tk-marker {
    background: linear-gradient(104deg, rgba(158, 43, 30, 0) 1%, rgba(158, 43, 30, 0.28) 3%, rgba(158, 43, 30, 0.24) 96%, rgba(158, 43, 30, 0) 99%);
    padding: 0 6px;
}
/* Sobekan: tepi bawah kertas dirobek kasar — untuk panel hero atau seksi. */
.tk-torn { clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), 96% 100%, 92% calc(100% - 8px), 87% calc(100% - 2px), 81% calc(100% - 11px), 75% calc(100% - 4px), 69% calc(100% - 9px), 62% calc(100% - 1px), 55% calc(100% - 10px), 48% calc(100% - 3px), 41% calc(100% - 12px), 34% calc(100% - 5px), 27% calc(100% - 9px), 20% calc(100% - 2px), 14% calc(100% - 11px), 8% calc(100% - 4px), 3% calc(100% - 9px), 0 calc(100% - 3px)); }
/* Ikon fitur bergiliran tinta: hitam, karat, mustard — kemiringannya juga bergantian. */
.tk-feature:nth-child(3n+1) .tk-feature-icon { color: var(--tk-color-primary); border-color: var(--tk-color-primary); transform: rotate(-2deg); }
.tk-feature:nth-child(3n+2) .tk-feature-icon { color: var(--tk-color-secondary); border-color: var(--tk-color-secondary); box-shadow: 2px 2px 0 rgba(158, 43, 30, 0.3); transform: rotate(1.5deg); }
.tk-feature:nth-child(3n) .tk-feature-icon { color: var(--tk-color-accent); border-color: var(--tk-color-accent); box-shadow: 2px 2px 0 rgba(168, 130, 31, 0.3); transform: rotate(-1deg); }
/* Fotografi desaturated: nyaris hitam-putih dengan kontras naik — jepretan 35mm
   yang difotokopi. Bingkai tinta tipis. */
.tk-card img, .tk-hero img, figure img {
    border: 1px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    filter: grayscale(0.92) contrast(1.18) brightness(1.02);
}
.tk-hero img, figure img { box-shadow: var(--tk-shadow); }
/* Label arsip: penanda mesin tik untuk metrik dan kode dokumen. */
.tk-archive-tag {
    display: inline-block;
    font-family: var(--tk-font-mono);
    font-size: 16px;
    letter-spacing: 0.08em;
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    padding: 2px 12px;
    box-shadow: 2px 2px 0 rgba(28, 26, 23, 0.2);
}
`;
