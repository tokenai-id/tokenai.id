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
 * `styles.css` kit Neumorph.
 *
 * Estetika neumorphism (soft UI): permukaan dan latar berbagi warna yang sama — kedalaman
 * lahir dari sepasang bayangan (highlight dari kiri-atas, soft shadow jatuh ke kanan-bawah)
 * sehingga panel terasa timbul dari latar dan input tenggelam ke dalamnya, seperti objek
 * fisik yang bisa diraba. Tanpa garis tepi, sudut membulat besar. Struktur selektor dan blok
 * `== tk: ... ==` mengikuti kontrak `docs/kontrak-kit-design.md`; wajah neumorph lahir dari
 * nilai token plus blok "flavor" di ekor berkas.
 */
export const NEUMORPH_STYLES = `/* Neumorph — kit design TOKENAI.
   Estetika neumorphism: elemen menyatu dengan latar, timbul/tenggelam lewat highlight dan
   soft shadow ganda, lembut seperti objek fisik.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #5B6EE1;
    --tk-color-primary-hover: #4A5DD3;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: #E3E9F1;
    --tk-color-secondary-hover: #EBF0F7;
    --tk-color-secondary-contrast: #3B4258;
    --tk-color-accent: #4C5FD5;
    --tk-color-background: #E3E9F1;
    --tk-color-surface: #E3E9F1;
    --tk-color-surface-2: rgba(146, 161, 196, 0.16);
    --tk-color-text: #3B4258;
    --tk-color-text-muted: #7C849E;
    --tk-color-border: rgba(151, 165, 197, 0.35);
    --tk-color-success: #2E9E6B;
    --tk-color-success-soft: rgba(46, 158, 107, 0.14);
    --tk-color-warning: #B3760A;
    --tk-color-warning-soft: rgba(202, 138, 4, 0.16);
    --tk-color-danger: #D6455D;
    --tk-color-danger-soft: rgba(214, 69, 93, 0.13);
    --tk-color-info: #4C5FD5;
    --tk-color-info-soft: rgba(76, 95, 213, 0.13);

    --tk-font-heading: 'Poppins', system-ui, sans-serif;
    --tk-font-body: 'Nunito Sans', system-ui, sans-serif;
    --tk-font-mono: 'IBM Plex Mono', ui-monospace, monospace;
    --tk-weight-heading: 600;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.18;
    --tk-leading-body: 1.65;

    --tk-text-display: 50px;
    --tk-text-h1: 38px;
    --tk-text-h2: 29px;
    --tk-text-h3: 22px;
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

    --tk-radius-sm: 12px;
    --tk-radius: 16px;
    --tk-radius-lg: 24px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    --tk-shadow-sm: 3px 3px 7px rgba(151, 165, 197, 0.42), -3px -3px 7px rgba(255, 255, 255, 0.85);
    --tk-shadow: 6px 6px 14px rgba(151, 165, 197, 0.48), -6px -6px 14px rgba(255, 255, 255, 0.9);
    --tk-shadow-lg: 12px 12px 28px rgba(151, 165, 197, 0.55), -10px -10px 24px rgba(255, 255, 255, 0.9);

    --tk-transition: 160ms ease;
    --tk-container: 1200px;

    /* Token khas neumorph (bukan kontrak): bayangan tenggelam untuk input/track/sumur,
       dipakai blok flavor. */
    --tk-neu-inset: inset 3px 3px 7px rgba(151, 165, 197, 0.45), inset -3px -3px 7px rgba(255, 255, 255, 0.9);
    --tk-neu-inset-sm: inset 2px 2px 5px rgba(151, 165, 197, 0.4), inset -2px -2px 5px rgba(255, 255, 255, 0.85);
}

/* Mode gelap: lempung malam — permukaan gelap yang sama lembutnya; highlight memucat
   jadi pendar abu kebiruan, bayang jatuh makin pekat. Aktifkan dengan atribut
   data-tk-theme="dark" pada <html> atau <body>. */
[data-tk-theme="dark"] {
    --tk-color-primary: #7D8BFF;
    --tk-color-primary-hover: #939FFF;
    --tk-color-primary-contrast: #14172A;
    --tk-color-secondary: #262A36;
    --tk-color-secondary-hover: #2C3140;
    --tk-color-secondary-contrast: #E4E7F2;
    --tk-color-accent: #93A2FF;
    --tk-color-background: #262A36;
    --tk-color-surface: #262A36;
    --tk-color-surface-2: rgba(255, 255, 255, 0.055);
    --tk-color-text: #E4E7F2;
    --tk-color-text-muted: #98A0B8;
    --tk-color-border: rgba(255, 255, 255, 0.09);
    --tk-color-success: #3DD68C;
    --tk-color-success-soft: rgba(61, 214, 140, 0.13);
    --tk-color-warning: #F0B429;
    --tk-color-warning-soft: rgba(240, 180, 41, 0.13);
    --tk-color-danger: #F2708A;
    --tk-color-danger-soft: rgba(242, 112, 138, 0.13);
    --tk-color-info: #93A2FF;
    --tk-color-info-soft: rgba(147, 162, 255, 0.13);
    --tk-shadow-sm: 3px 3px 7px rgba(10, 12, 19, 0.5), -3px -3px 7px rgba(66, 73, 94, 0.4);
    --tk-shadow: 6px 6px 14px rgba(10, 12, 19, 0.55), -6px -6px 14px rgba(66, 73, 94, 0.42);
    --tk-shadow-lg: 12px 12px 28px rgba(10, 12, 19, 0.6), -10px -10px 24px rgba(66, 73, 94, 0.42);
    --tk-neu-inset: inset 3px 3px 7px rgba(10, 12, 19, 0.55), inset -3px -3px 7px rgba(66, 73, 94, 0.42);
    --tk-neu-inset-sm: inset 2px 2px 5px rgba(10, 12, 19, 0.5), inset -2px -2px 5px rgba(66, 73, 94, 0.4);
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
    letter-spacing: -0.015em;
}
.tk-display { font-size: var(--tk-text-display); font-weight: 700; }
.tk-h1 { font-size: var(--tk-text-h1); font-weight: 700; }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-size: var(--tk-text-title); font-weight: 600; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); }
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link { color: var(--tk-color-accent); text-decoration: none; font-weight: 600; }
.tk-link:hover { text-decoration: underline; text-underline-offset: 3px; }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.9em; background: var(--tk-color-surface-2); padding: 2px 6px; border-radius: 6px; }

/* == tk: button ================================================= */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 700;
    line-height: 1;
    padding: 11px 18px;
    border-radius: var(--tk-radius);
    border: var(--tk-border-width) solid transparent;
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); }
.tk-btn-primary:active:not(:disabled) { background: var(--tk-color-primary); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); }
.tk-btn-outline { background: transparent; color: var(--tk-color-text); border-color: var(--tk-color-border); }
.tk-btn-outline:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-danger { background: var(--tk-color-danger); color: #FFFFFF; }
.tk-btn-danger:hover:not(:disabled) { filter: brightness(0.92); }
.tk-btn-text { background: none; color: var(--tk-color-accent); padding-left: 4px; padding-right: 4px; }
.tk-btn-text:hover:not(:disabled) { text-decoration: underline; text-underline-offset: 3px; }
.tk-btn-sm { font-size: var(--tk-text-caption); padding: 7px 12px; border-radius: var(--tk-radius-sm); }
.tk-btn-lg { font-size: var(--tk-text-body); padding: 15px 26px; border-radius: var(--tk-radius-lg); }
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
.tk-help { font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid transparent;
    border-radius: var(--tk-radius);
    padding: 11px 14px;
    transition: box-shadow var(--tk-transition), background var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    box-shadow: var(--tk-neu-inset), 0 0 0 3px color-mix(in srgb, var(--tk-color-primary) 22%, transparent);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    box-shadow: var(--tk-neu-inset), 0 0 0 3px rgba(214, 69, 93, 0.18);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { box-shadow: var(--tk-neu-inset), 0 0 0 3px rgba(46, 158, 107, 0.18); }
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
    box-shadow: var(--tk-neu-inset), 0 0 0 3px color-mix(in srgb, var(--tk-color-primary) 22%, transparent);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 8px);
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
    padding: 9px 12px;
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
    padding: 9px 12px;
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
    border: var(--tk-border-width) solid transparent;
    box-shadow: var(--tk-neu-inset-sm);
    cursor: pointer;
    transition: background var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-checkbox { border-radius: 6px; }
.tk-checkbox:hover, .tk-radio:hover { box-shadow: var(--tk-neu-inset-sm), 0 0 0 2px color-mix(in srgb, var(--tk-color-primary) 18%, transparent); }
.tk-checkbox:checked { background: var(--tk-color-primary); box-shadow: none; }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 2px;
    width: 4px;
    height: 9px;
    border-right: 2px solid var(--tk-color-primary-contrast);
    border-bottom: 2px solid var(--tk-color-primary-contrast);
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked { border: 5px solid var(--tk-color-primary); box-shadow: none; background: var(--tk-color-background); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: var(--tk-neu-inset-sm), 0 0 0 3px color-mix(in srgb, var(--tk-color-primary) 22%, transparent);
}
.tk-toggle { position: relative; width: 40px; height: 22px; flex: none; margin: 0; appearance: none; border: none; background: var(--tk-color-surface); box-shadow: var(--tk-neu-inset-sm); border-radius: var(--tk-radius-full); cursor: pointer; transition: background var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 3px; left: 3px; width: 16px; height: 16px; background: #FFFFFF; border-radius: var(--tk-radius-full); transition: transform var(--tk-transition); box-shadow: 2px 2px 5px rgba(151, 165, 197, 0.5); }
.tk-toggle:checked { background: var(--tk-color-primary); box-shadow: none; }
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
    font-size: 11px;
    color: var(--tk-color-text-muted);
    background: var(--tk-color-surface-2);
    border: none;
    border-radius: 6px;
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
    border: var(--tk-border-width) solid transparent;
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
    background: var(--tk-color-primary);
    color: var(--tk-color-primary-contrast);
    font-size: 11px;
    font-weight: 700;
}
.tk-filter-active { display: flex; flex-wrap: wrap; align-items: center; gap: var(--tk-space-sm); margin-top: var(--tk-space-sm); }

/* == tk: dropdown =============================================== */
.tk-dropdown { position: relative; display: inline-block; }
.tk-dropdown-menu {
    position: absolute;
    top: calc(100% + 8px);
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
.tk-dropdown-menu-up { top: auto; bottom: calc(100% + 8px); }
.tk-dropdown-open > .tk-dropdown-menu, .tk-dropdown:focus-within > .tk-dropdown-menu { display: flex; }
.tk-dropdown-label { padding: 6px 12px; font-size: var(--tk-text-caption); font-weight: 600; color: var(--tk-color-text-muted); }
.tk-dropdown-item {
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
    border: var(--tk-border-width) solid transparent;
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow);
    overflow: hidden;
}
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-sm); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-weight: 700; font-family: var(--tk-font-heading); letter-spacing: -0.015em; }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); }

/* == tk: navigation ============================================= */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: var(--tk-border-width) solid transparent;
    box-shadow: var(--tk-shadow-sm);
    position: relative;
    z-index: 10;
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 700; font-size: var(--tk-text-title); margin-right: auto; }
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: var(--tk-text-body-sm); font-weight: 600; }
.tk-navbar-link:hover, .tk-navbar-link-active { color: var(--tk-color-primary); }
.tk-navbar-dark { background: #262A36; box-shadow: 0 4px 14px rgba(10, 12, 19, 0.35); }
.tk-navbar-dark .tk-navbar-brand { color: #E4E7F2; }
.tk-navbar-dark .tk-navbar-link { color: #E4E7F2; opacity: 0.72; }
.tk-navbar-dark .tk-navbar-link:hover, .tk-navbar-dark .tk-navbar-link-active { color: #E4E7F2; opacity: 1; }
.tk-sidebar {
    width: 240px;
    background: var(--tk-color-surface);
    border-right: var(--tk-border-width) solid transparent;
    box-shadow: var(--tk-shadow-sm);
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
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-radius: var(--tk-radius-sm);
    color: var(--tk-color-text-muted);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-sidebar-item-active { background: var(--tk-color-surface); color: var(--tk-color-primary); box-shadow: var(--tk-neu-inset-sm); }
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 68px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
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
    font-size: var(--tk-text-body-sm);
}
.tk-breadcrumb a { color: var(--tk-color-text-muted); text-decoration: none; }
.tk-breadcrumb a:hover { color: var(--tk-color-text); }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.55; }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 600; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: var(--tk-border-width) solid transparent;
    box-shadow: var(--tk-shadow-sm);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: var(--tk-space-lg); border-bottom: var(--tk-border-width) solid var(--tk-color-border); }
.tk-tab {
    padding: var(--tk-space-sm) 2px 12px;
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-primary); border-bottom-color: var(--tk-color-primary); }
.tk-segmented { display: inline-flex; background: var(--tk-color-surface); box-shadow: var(--tk-neu-inset-sm); border-radius: var(--tk-radius-full); padding: 4px; gap: 2px; }
.tk-segment {
    padding: 7px 16px;
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: var(--tk-radius-full);
    cursor: pointer;
}
.tk-segment-active { background: var(--tk-color-surface); color: var(--tk-color-primary); box-shadow: var(--tk-shadow-sm); }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: var(--tk-text-caption);
    font-weight: 600;
    padding: 3px 10px;
    border-radius: var(--tk-radius-full);
    background: var(--tk-color-surface-2);
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
    font-size: var(--tk-text-caption);
    font-weight: 600;
    padding: 5px 12px;
    border-radius: var(--tk-radius-full);
    border: var(--tk-border-width) solid transparent;
    background: var(--tk-color-surface);
    box-shadow: var(--tk-shadow-sm);
    color: var(--tk-color-text);
}
.tk-chip-remove { border: none; background: none; cursor: pointer; color: var(--tk-color-text-muted); font-size: 12px; line-height: 1; padding: 0; }
.tk-chip-remove:hover { color: var(--tk-color-text); }

/* == tk: alert ================================================== */
.tk-alert {
    display: flex;
    gap: var(--tk-space-sm);
    align-items: flex-start;
    padding: var(--tk-space-md);
    border-radius: var(--tk-radius);
    font-size: var(--tk-text-body-sm);
    border: var(--tk-border-width) solid transparent;
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
    font-weight: 700;
    color: var(--tk-color-text-muted);
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-bottom: var(--tk-border-width) solid var(--tk-color-border);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: var(--tk-border-width) solid var(--tk-color-border); }
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
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-action-btn:hover { background: var(--tk-color-surface); box-shadow: var(--tk-shadow-sm); color: var(--tk-color-text); }
.tk-action-btn-danger:hover { background: var(--tk-color-danger-soft); box-shadow: none; color: var(--tk-color-danger); }
.tk-pagination { display: flex; gap: var(--tk-space-sm); align-items: center; }
.tk-page {
    min-width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-full);
    border: var(--tk-border-width) solid transparent;
    background: none;
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    color: var(--tk-color-text);
    cursor: pointer;
    transition: box-shadow var(--tk-transition), color var(--tk-transition);
}
.tk-page:hover { background: var(--tk-color-surface-2); }
.tk-page-active { background: var(--tk-color-surface); box-shadow: var(--tk-neu-inset-sm); color: var(--tk-color-primary); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(38, 42, 54, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid transparent;
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
    border-left: var(--tk-border-width) solid transparent;
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
.tk-progress { height: 10px; background: var(--tk-color-surface); box-shadow: var(--tk-neu-inset-sm); border-radius: var(--tk-radius-full); overflow: hidden; }
.tk-progress-bar { height: 100%; background: var(--tk-color-primary); border-radius: var(--tk-radius-full); transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, var(--tk-color-border) 50%, var(--tk-color-surface-2) 75%);
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
    border: none;
    background: var(--tk-color-surface);
    box-shadow: var(--tk-neu-inset-sm);
    border-radius: var(--tk-radius-lg);
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
    background: var(--tk-color-surface);
    box-shadow: var(--tk-shadow-sm);
    border-radius: var(--tk-radius);
    color: var(--tk-color-primary);
}
.tk-cta {
    background: var(--tk-color-primary);
    color: var(--tk-color-primary-contrast);
    border-radius: var(--tk-radius-lg);
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
    box-shadow: 10px 10px 24px color-mix(in srgb, var(--tk-color-primary) 32%, transparent), -8px -8px 20px rgba(255, 255, 255, 0.55);
}
.tk-cta .tk-h3 { color: var(--tk-color-primary-contrast); margin: 0; }
.tk-cta .tk-muted { color: var(--tk-color-primary-contrast); opacity: 0.78; }
.tk-cta .tk-btn-primary { background: var(--tk-color-primary-contrast); color: var(--tk-color-primary); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: neumorph flavor ======================================== */
/* Penimpa karakter neumorph di atas struktur kontrak: menang kaskade karena berada di ekor
   berkas. Di sinilah "soft UI"-nya dipertegas — yang timbul makin terasa timbul, yang
   ditekan benar-benar tenggelam, dan mode gelap kehilangan highlight putihnya. */
.tk-input, .tk-textarea, .tk-select-trigger { box-shadow: var(--tk-neu-inset); }
.tk-search .tk-input { box-shadow: var(--tk-neu-inset); }
.tk-btn-secondary { box-shadow: var(--tk-shadow-sm); }
.tk-btn-secondary:not(:disabled):active { box-shadow: var(--tk-neu-inset-sm); }
.tk-btn-outline { border-color: transparent; box-shadow: var(--tk-shadow-sm); background: var(--tk-color-surface); }
.tk-btn-outline:hover:not(:disabled) { background: var(--tk-color-secondary-hover); }
.tk-btn-outline:not(:disabled):active { box-shadow: var(--tk-neu-inset-sm); }
.tk-btn-primary { box-shadow: 6px 6px 14px color-mix(in srgb, var(--tk-color-primary) 36%, transparent), -4px -4px 10px rgba(255, 255, 255, 0.5); }
.tk-btn-primary:not(:disabled):active { box-shadow: var(--tk-neu-inset-sm); }
.tk-btn-danger { box-shadow: 6px 6px 14px color-mix(in srgb, var(--tk-color-danger) 32%, transparent), -4px -4px 10px rgba(255, 255, 255, 0.5); }
[data-tk-theme="dark"] .tk-btn-primary { box-shadow: 6px 6px 14px rgba(10, 12, 19, 0.5); }
[data-tk-theme="dark"] .tk-btn-danger { box-shadow: 6px 6px 14px rgba(10, 12, 19, 0.5); }
[data-tk-theme="dark"] .tk-cta { box-shadow: 10px 10px 24px rgba(10, 12, 19, 0.55); }
[data-tk-theme="dark"] .tk-toggle::after { background: #C7CCE0; box-shadow: 2px 2px 5px rgba(10, 12, 19, 0.5); }
/* Kartu statistik dan panel showcase tidak boleh kehilangan diri saat bersarang: panel yang
   bersarang di panel lain memakai bayangan lebih dangkal supaya tumpukannya tetap terbaca. */
.tk-card .tk-card { box-shadow: var(--tk-shadow-sm); }
/* Judul display timbul lembut dari latar — emboss tipis khas soft UI (hanya mode terang;
   di mode gelap highlight putih justru mengotori huruf). */
.tk-hero .tk-display { text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.7); }
[data-tk-theme="dark"] .tk-hero .tk-display { text-shadow: none; }
`;
