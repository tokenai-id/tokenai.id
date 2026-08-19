/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const Y2K_STYLES = `/* Y2K — kit design TOKENAI.
   Estetika nostalgia internet awal 2000-an: chrome dan metallic, UI glossy dengan kilau
   kaca, bubble text bergradasi iridescent biru-ungu-pink, dan grafis pixel — nuansa
   cyber-pop era dial-up. Permukaan serba licin: navbar chrome, tombol pil aqua-glossy,
   dan kanvas perak sedingin es.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #2D7FF9;
    --tk-color-primary-hover: #1668E3;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: #1B1F3A;
    --tk-color-secondary-hover: #12142A;
    --tk-color-secondary-contrast: #FFFFFF;
    --tk-color-accent: #F02DB9;
    --tk-color-background: #EAF1F9;
    --tk-color-surface: #FFFFFF;
    --tk-color-surface-2: #DEE7F2;
    --tk-color-text: #171A33;
    --tk-color-text-muted: #5D6582;
    --tk-color-border: #C7D2E4;
    --tk-color-success: #1E9E56;
    --tk-color-success-soft: #DFF5E7;
    --tk-color-warning: #99690A;
    --tk-color-warning-soft: #FFF0C7;
    --tk-color-danger: #E02D5B;
    --tk-color-danger-soft: #FDE2E9;
    --tk-color-info: #2D7FF9;
    --tk-color-info-soft: #E1EDFC;

    --tk-font-heading: 'Baloo 2', system-ui, sans-serif;
    --tk-font-body: 'Exo 2', system-ui, sans-serif;
    --tk-font-mono: 'VT323', ui-monospace, monospace;
    --tk-weight-heading: 700;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.1;
    --tk-leading-body: 1.65;

    --tk-text-display: 60px;
    --tk-text-h1: 43px;
    --tk-text-h2: 32px;
    --tk-text-h3: 24px;
    --tk-text-h4: 18px;
    --tk-text-title: 16px;
    --tk-text-body-lg: 18px;
    --tk-text-body: 16px;
    --tk-text-body-sm: 14px;
    --tk-text-caption: 14px;

    --tk-space-xs: 4px;
    --tk-space-sm: 8px;
    --tk-space-md: 16px;
    --tk-space-lg: 24px;
    --tk-space-xl: 32px;
    --tk-space-2xl: 48px;
    --tk-space-3xl: 64px;
    --tk-space-section: 96px;

    --tk-radius-sm: 12px;
    --tk-radius: 18px;
    --tk-radius-lg: 26px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    --tk-shadow-sm: 0 2px 6px rgba(23, 26, 51, 0.10);
    --tk-shadow: 0 6px 18px rgba(23, 26, 51, 0.14);
    --tk-shadow-lg: 0 18px 44px rgba(23, 26, 51, 0.20);

    --tk-transition: 160ms ease;
    --tk-container: 1160px;

    /* Token khas y2k (bukan kontrak): pink & lime cyber-pop, pelat chrome metalik,
       kilau kaca glossy, gradasi iridescent, dan kanvas perak dingin. */
    --tk-y2k-pink: #F02DB9;
    --tk-y2k-purple: #8A5CF6;
    --tk-y2k-lime: #9BE31C;
    --tk-y2k-lime-ink: #1E2A05;
    --tk-y2k-chrome: linear-gradient(180deg, #FDFEFF 0%, #E5EBF5 46%, #CBD6E6 52%, #EEF3FA 100%);
    --tk-y2k-gloss: linear-gradient(180deg, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.10) 52%, rgba(255, 255, 255, 0) 58%);
    --tk-y2k-iridescent: linear-gradient(100deg, #2D7FF9 5%, #8A5CF6 48%, #F02DB9 95%);
    --tk-y2k-bg:
        radial-gradient(1100px 560px at 12% -8%, #D8EAFF 0%, rgba(216, 234, 255, 0) 60%),
        radial-gradient(950px 500px at 108% 6%, #FBDFF3 0%, rgba(251, 223, 243, 0) 55%),
        #EAF1F9;
}

/* Mode gelap: malam cyber biru-ungu pekat — permukaan kaca gelap, gradasi iridescent
   dibuat lebih neon, dan bayangan berpendar kebiruan. Aktifkan dengan atribut
   data-tk-theme="dark" pada <html> atau <body>. */
[data-tk-theme="dark"] {
    --tk-color-primary: #5C9DFF;
    --tk-color-primary-hover: #7FB1FF;
    --tk-color-primary-contrast: #0C0F2B;
    --tk-color-secondary: #EAEDFF;
    --tk-color-secondary-hover: #FFFFFF;
    --tk-color-secondary-contrast: #0C0F2B;
    --tk-color-accent: #FF5CD0;
    --tk-color-background: #0E1030;
    --tk-color-surface: #191C42;
    --tk-color-surface-2: #232860;
    --tk-color-text: #EAEDFF;
    --tk-color-text-muted: #9AA1CE;
    --tk-color-border: #343B6E;
    --tk-color-success: #4FCB84;
    --tk-color-success-soft: #12301D;
    --tk-color-warning: #F0C24E;
    --tk-color-warning-soft: #322808;
    --tk-color-danger: #FF6B95;
    --tk-color-danger-soft: #3A1220;
    --tk-color-info: #5C9DFF;
    --tk-color-info-soft: #14224A;
    --tk-shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.4);
    --tk-shadow: 0 6px 18px rgba(92, 157, 255, 0.18);
    --tk-shadow-lg: 0 18px 44px rgba(92, 157, 255, 0.24);
    --tk-y2k-pink: #FF5CD0;
    --tk-y2k-purple: #A78BFA;
    --tk-y2k-lime: #B7F53C;
    --tk-y2k-lime-ink: #1E2A05;
    --tk-y2k-chrome: linear-gradient(180deg, #2C3160 0%, #1D2150 46%, #161A42 52%, #232860 100%);
    --tk-y2k-gloss: linear-gradient(180deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.06) 52%, rgba(255, 255, 255, 0) 58%);
    --tk-y2k-iridescent: linear-gradient(100deg, #5C9DFF 5%, #A78BFA 48%, #FF5CD0 95%);
    --tk-y2k-bg:
        radial-gradient(1100px 560px at 12% -8%, #1B2458 0%, rgba(27, 36, 88, 0) 60%),
        radial-gradient(950px 500px at 108% 6%, #3A1650 0%, rgba(58, 22, 80, 0) 55%),
        #0E1030;
}

/* == tk: base =================================================== */
body {
    margin: 0;
    background: var(--tk-y2k-bg);
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
::selection { background: var(--tk-y2k-pink); color: #FFFFFF; }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); font-weight: 800; letter-spacing: -0.01em; line-height: 1.05; }
.tk-h1 { font-size: var(--tk-text-h1); font-weight: 800; letter-spacing: -0.01em; }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-size: var(--tk-text-title); font-weight: 700; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption {
    font-size: var(--tk-text-caption);
    color: var(--tk-color-text-muted);
    font-family: var(--tk-font-mono);
    text-transform: uppercase;
    letter-spacing: 0.04em;
}
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link { color: var(--tk-color-primary); font-weight: 600; text-decoration: none; }
.tk-link:hover { text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; }
.tk-code { font-family: var(--tk-font-mono); font-size: 1em; background: var(--tk-color-surface-2); padding: 2px 6px; border-radius: var(--tk-radius-sm); }

/* == tk: button ================================================= */
/* Tombol pil aqua-glossy: kilau kaca di paruh atas, seperti tombol OS awal 2000-an. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-heading);
    font-size: var(--tk-text-body-sm);
    font-weight: 700;
    line-height: 1;
    padding: 13px 24px;
    border-radius: var(--tk-radius-full);
    border: 1px solid rgba(23, 26, 51, 0.22);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55), var(--tk-shadow-sm);
    cursor: pointer;
    transition: filter var(--tk-transition), transform var(--tk-transition), box-shadow var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:hover:not(:disabled) { filter: brightness(1.05); transform: translateY(-1px); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55), var(--tk-shadow); }
.tk-btn:not(:disabled):active { transform: translateY(1px); filter: brightness(0.96); }
.tk-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-y2k-gloss), var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-btn-secondary { background: var(--tk-y2k-gloss), var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }
.tk-btn-outline { background: var(--tk-y2k-gloss), var(--tk-color-surface); color: var(--tk-color-text); border-color: var(--tk-color-border); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); border-color: transparent; box-shadow: none; }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); transform: none; box-shadow: none; }
.tk-btn-danger { background: var(--tk-y2k-gloss), var(--tk-color-danger); color: #FFFFFF; }
.tk-btn-text { background: none; color: var(--tk-color-primary); border-color: transparent; box-shadow: none; padding-left: 4px; padding-right: 4px; }
.tk-btn-text:hover:not(:disabled) { text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; transform: none; filter: none; box-shadow: none; }
.tk-btn-sm { font-size: 13px; padding: 9px 16px; }
.tk-btn-lg { font-size: var(--tk-text-body); padding: 16px 32px; }
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
.tk-label { font-size: var(--tk-text-body-sm); font-weight: 600; color: var(--tk-color-text); }
.tk-help { font-size: 12px; color: var(--tk-color-text-muted); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    padding: 11px 14px;
    box-shadow: inset 0 2px 4px rgba(23, 26, 51, 0.06);
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-primary);
    box-shadow: 0 0 0 3px rgba(45, 127, 249, 0.22);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: 0 0 0 3px rgba(224, 45, 91, 0.18);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: 0 0 0 3px rgba(30, 158, 86, 0.18); }
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
    box-shadow: 0 0 0 3px rgba(45, 127, 249, 0.22);
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
.tk-option-selected { background: var(--tk-color-info-soft); color: var(--tk-color-primary); font-weight: 600; }
.tk-option-check { margin-left: auto; color: var(--tk-color-primary); display: inline-flex; }
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
    border: 1px solid var(--tk-color-border);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition);
}
.tk-checkbox { border-radius: 6px; }
.tk-checkbox:hover, .tk-radio:hover { border-color: var(--tk-color-primary); }
.tk-checkbox:checked { background: var(--tk-y2k-gloss), var(--tk-color-primary); border-color: var(--tk-color-primary); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 2px;
    width: 4px;
    height: 8px;
    border-right: 2px solid #FFFFFF;
    border-bottom: 2px solid #FFFFFF;
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked { border: 5px solid var(--tk-color-primary); background: var(--tk-color-surface); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(45, 127, 249, 0.30);
}
.tk-toggle { position: relative; width: 42px; height: 24px; flex: none; margin: 0; appearance: none; border: 1px solid var(--tk-color-border); background: var(--tk-color-surface-2); border-radius: var(--tk-radius-full); cursor: pointer; transition: background var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; background: linear-gradient(180deg, #FFFFFF, #DDE5F0); border: 1px solid rgba(23, 26, 51, 0.15); box-sizing: border-box; border-radius: var(--tk-radius-full); transition: transform var(--tk-transition); }
.tk-toggle:checked { background: var(--tk-y2k-gloss), var(--tk-color-primary); border-color: var(--tk-color-primary); }
.tk-toggle:checked::after { transform: translateX(18px); }

/* == tk: search-filter ========================================== */
.tk-search { position: relative; display: flex; align-items: center; min-width: 220px; }
.tk-search .tk-input { width: 100%; padding-left: 38px; padding-right: 60px; }
.tk-search .tk-input::-webkit-search-cancel-button { -webkit-appearance: none; }
.tk-search-icon { position: absolute; left: 12px; display: inline-flex; color: var(--tk-color-text-muted); pointer-events: none; }
.tk-search-kbd {
    position: absolute;
    right: 10px;
    font-family: var(--tk-font-mono);
    font-size: 13px;
    color: var(--tk-color-text-muted);
    background: var(--tk-y2k-chrome);
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
    border-radius: var(--tk-radius-lg);
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
    border-radius: var(--tk-radius-full);
    background: var(--tk-y2k-gloss), var(--tk-color-accent);
    color: #FFFFFF;
    font-family: var(--tk-font-body);
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
.tk-dropdown-label { padding: 6px 10px; font-family: var(--tk-font-mono); font-size: 13px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--tk-color-text-muted); }
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
/* Kartu kaca licin dengan garis rambut perak dan kilau tipis di tepi atas. */
.tk-card {
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8), var(--tk-shadow-sm);
    overflow: hidden;
}
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-sm); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-family: var(--tk-font-heading); font-weight: 800; }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 600; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 600; }

/* == tk: navigation ============================================= */
/* Navbar pelat chrome metalik — highlight putih di atas, bayangan perak di bawah. */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-y2k-chrome);
    border-bottom: 1px solid var(--tk-color-border);
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 800; font-size: 19px; margin-right: auto; }
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: var(--tk-text-body-sm); font-weight: 600; font-family: var(--tk-font-heading); }
.tk-navbar-link:hover { color: var(--tk-color-text); }
.tk-navbar-link-active { color: var(--tk-color-primary); }
.tk-navbar-dark { background: linear-gradient(180deg, #23284F, #12142A); border-bottom-color: #343B6E; }
.tk-navbar-dark .tk-navbar-brand { color: #EAEDFF; }
.tk-navbar-dark .tk-navbar-link { color: #EAEDFF; opacity: 0.65; }
.tk-navbar-dark .tk-navbar-link:hover, .tk-navbar-dark .tk-navbar-link-active { opacity: 1; color: #EAEDFF; }
.tk-sidebar {
    width: 240px;
    background: var(--tk-color-surface);
    border-right: 1px solid var(--tk-color-border);
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
    border-radius: var(--tk-radius-full);
    color: var(--tk-color-text-muted);
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-sidebar-item-active { background: var(--tk-y2k-gloss), var(--tk-color-primary); color: var(--tk-color-primary-contrast); font-weight: 600; box-shadow: var(--tk-shadow-sm); }
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 68px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 13px;
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
    font-size: var(--tk-text-body-sm);
}
.tk-breadcrumb a { color: var(--tk-color-text-muted); text-decoration: none; }
.tk-breadcrumb a:hover { color: var(--tk-color-primary); }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.5; }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 600; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-y2k-chrome);
    border-bottom: 1px solid var(--tk-color-border);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: var(--tk-space-lg); border-bottom: 1px solid var(--tk-color-border); }
.tk-tab {
    padding: var(--tk-space-sm) 2px 12px;
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    font-family: var(--tk-font-heading);
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 3px solid transparent;
    margin-bottom: -1px;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-primary); border-bottom-color: var(--tk-color-primary); }
.tk-segmented { display: inline-flex; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); padding: 3px; gap: 3px; }
.tk-segment {
    padding: 7px 16px;
    font-family: var(--tk-font-heading);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: var(--tk-radius-full);
    cursor: pointer;
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: var(--tk-y2k-gloss), var(--tk-color-primary); color: var(--tk-color-primary-contrast); box-shadow: var(--tk-shadow-sm); }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    padding: 2px 12px;
    border-radius: var(--tk-radius-full);
    border: 1px solid var(--tk-color-border);
    background: var(--tk-y2k-chrome);
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
    font-size: 12px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: var(--tk-radius-full);
    border: 1px solid var(--tk-color-primary);
    background: var(--tk-color-info-soft);
    color: var(--tk-color-primary);
}
.tk-chip-remove { border: none; background: none; cursor: pointer; color: var(--tk-color-primary); font-size: 12px; line-height: 1; padding: 0; }
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
    font-weight: 400;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--tk-color-text-muted);
    padding: var(--tk-space-sm) var(--tk-space-md);
    background: var(--tk-y2k-chrome);
    border-bottom: 1px solid var(--tk-color-border);
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
    border-radius: var(--tk-radius-full);
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
.tk-page-active { background: var(--tk-y2k-gloss), var(--tk-color-primary); color: var(--tk-color-primary-contrast); box-shadow: var(--tk-shadow-sm); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(23, 26, 51, 0.5);
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
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8), var(--tk-shadow-lg);
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
    border-left: 1px solid var(--tk-color-border);
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
.tk-progress { height: 12px; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); overflow: hidden; box-shadow: inset 0 2px 4px rgba(23, 26, 51, 0.08); }
.tk-progress-bar { height: 100%; background: var(--tk-y2k-gloss), var(--tk-y2k-iridescent); border-radius: var(--tk-radius-full); transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, var(--tk-color-surface) 50%, var(--tk-color-surface-2) 75%);
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
    border: 1px dashed var(--tk-color-border);
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
    background: var(--tk-y2k-gloss), var(--tk-color-primary);
    border: 1px solid rgba(23, 26, 51, 0.18);
    border-radius: var(--tk-radius-full);
    color: var(--tk-color-primary-contrast);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5), var(--tk-shadow-sm);
}
/* CTA = pelat iridescent glossy: biru-ungu-pink dengan kilau kaca. */
.tk-cta {
    background: var(--tk-y2k-gloss), var(--tk-y2k-iridescent);
    color: #FFFFFF;
    border: 1px solid rgba(23, 26, 51, 0.18);
    border-radius: var(--tk-radius-lg);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45), var(--tk-shadow);
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
}
.tk-cta .tk-h3 { color: #FFFFFF; margin: 0; }
.tk-cta .tk-muted { color: rgba(255, 255, 255, 0.85); }
.tk-cta .tk-btn-primary { background: var(--tk-y2k-gloss), #12142A; color: #FFFFFF; }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: y2k flavor ============================================= */
/* Penimpa karakter y2k di atas struktur kontrak: menang kaskade karena berada di ekor
   berkas. Tanda tangan kit ini adalah bubble text iridescent pada headline hero, ikon
   fitur aqua-glossy yang bergiliran warna, dan pelat chrome di navbar serta header tabel. */
.tk-hero .tk-display {
    font-size: clamp(40px, 6.2vw, var(--tk-text-display));
    background: var(--tk-y2k-iridescent);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
/* Ikon fitur bergiliran warna cyber-pop: biru, pink, lime — semuanya glossy. */
.tk-feature:nth-child(3n+1) .tk-feature-icon { background: var(--tk-y2k-gloss), var(--tk-color-primary); color: #FFFFFF; }
.tk-feature:nth-child(3n+2) .tk-feature-icon { background: var(--tk-y2k-gloss), var(--tk-y2k-pink); color: #FFFFFF; }
.tk-feature:nth-child(3n) .tk-feature-icon { background: var(--tk-y2k-gloss), var(--tk-y2k-lime); color: var(--tk-y2k-lime-ink); }
/* Foto: bingkai membulat dengan garis rambut perak dan kilau lembut. */
.tk-card img, .tk-hero img, figure img {
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
}
.tk-hero img, figure img { box-shadow: var(--tk-shadow); }
`;
