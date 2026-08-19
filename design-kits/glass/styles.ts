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
 * `styles.css` kit Glass.
 *
 * Estetika glassmorphism: panel semi-transparan dengan blur frosted glass di atas latar
 * gradasi cahaya ungu-biru, tepi seputih embun, bayangan lembut berpendar, dan lapisan
 * bertumpuk — antarmuka terasa seperti lembaran kaca. Struktur selektor dan blok
 * `== tk: ... ==` mengikuti kontrak `docs/kontrak-kit-design.md`; wajah glass lahir dari
 * nilai token plus blok "flavor" di ekor berkas.
 */
export const GLASS_STYLES = `/* Glass — kit design TOKENAI.
   Estetika glassmorphism: kaca buram bertumpuk, blur lembut, cahaya ungu-biru, ringan.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #6C5CE7;
    --tk-color-primary-hover: #5A49D8;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: rgba(255, 255, 255, 0.55);
    --tk-color-secondary-hover: rgba(255, 255, 255, 0.78);
    --tk-color-secondary-contrast: #1E2233;
    --tk-color-accent: #2563EB;
    --tk-color-background: #EAEEF9;
    --tk-color-surface: rgba(255, 255, 255, 0.55);
    --tk-color-surface-2: rgba(124, 134, 190, 0.14);
    --tk-color-text: #1E2233;
    --tk-color-text-muted: #5A6178;
    --tk-color-border: rgba(139, 148, 190, 0.34);
    --tk-color-success: #0E9F6E;
    --tk-color-success-soft: rgba(14, 159, 110, 0.14);
    --tk-color-warning: #B45309;
    --tk-color-warning-soft: rgba(217, 119, 6, 0.16);
    --tk-color-danger: #DC2626;
    --tk-color-danger-soft: rgba(220, 38, 38, 0.13);
    --tk-color-info: #2563EB;
    --tk-color-info-soft: rgba(37, 99, 235, 0.13);

    --tk-font-heading: 'Sora', system-ui, sans-serif;
    --tk-font-body: 'Inter', system-ui, sans-serif;
    --tk-font-mono: 'JetBrains Mono', ui-monospace, monospace;
    --tk-weight-heading: 700;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.14;
    --tk-leading-body: 1.65;

    --tk-text-display: 52px;
    --tk-text-h1: 40px;
    --tk-text-h2: 30px;
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

    --tk-radius-sm: 10px;
    --tk-radius: 14px;
    --tk-radius-lg: 20px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    --tk-shadow-sm: 0 2px 8px rgba(76, 87, 158, 0.10);
    --tk-shadow: 0 8px 24px rgba(76, 87, 158, 0.14);
    --tk-shadow-lg: 0 18px 48px rgba(76, 87, 158, 0.22);

    --tk-transition: 160ms ease;
    --tk-container: 1200px;

    /* Token khas glass (bukan kontrak): tepi kaca + intensitas blur, dipakai blok flavor. */
    --tk-glass-edge: rgba(255, 255, 255, 0.65);
    --tk-glass-highlight: rgba(255, 255, 255, 0.5);
    --tk-glass-blur: 18px;
}

/* Mode gelap: kaca malam — lembaran kaca yang sama, kini memantulkan cahaya neon
   ungu-sian di kegelapan. Aktifkan dengan atribut data-tk-theme="dark" pada <html>/<body>. */
[data-tk-theme="dark"] {
    --tk-color-primary: #8B7CFF;
    --tk-color-primary-hover: #A093FF;
    --tk-color-primary-contrast: #0E1128;
    --tk-color-secondary: rgba(148, 163, 255, 0.12);
    --tk-color-secondary-hover: rgba(148, 163, 255, 0.22);
    --tk-color-secondary-contrast: #EAECFF;
    --tk-color-accent: #67E8F9;
    --tk-color-background: #0B1020;
    --tk-color-surface: rgba(24, 31, 60, 0.58);
    --tk-color-surface-2: rgba(148, 163, 255, 0.10);
    --tk-color-text: #EAECFF;
    --tk-color-text-muted: #9AA3C7;
    --tk-color-border: rgba(148, 163, 255, 0.24);
    --tk-color-success: #34D399;
    --tk-color-success-soft: rgba(52, 211, 153, 0.14);
    --tk-color-warning: #FBBF24;
    --tk-color-warning-soft: rgba(251, 191, 36, 0.14);
    --tk-color-danger: #F87171;
    --tk-color-danger-soft: rgba(248, 113, 113, 0.14);
    --tk-color-info: #7C9EF8;
    --tk-color-info-soft: rgba(124, 158, 248, 0.14);
    --tk-shadow-sm: 0 2px 8px rgba(2, 6, 23, 0.45);
    --tk-shadow: 0 8px 24px rgba(2, 6, 23, 0.55);
    --tk-shadow-lg: 0 18px 48px rgba(2, 6, 23, 0.65);
    --tk-glass-edge: rgba(255, 255, 255, 0.14);
    --tk-glass-highlight: rgba(255, 255, 255, 0.10);
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
    letter-spacing: -0.02em;
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
.tk-caption { font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); }
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link { color: var(--tk-color-accent); text-decoration: none; }
.tk-link:hover { text-decoration: underline; text-underline-offset: 3px; }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.9em; background: var(--tk-color-surface-2); padding: 2px 6px; border-radius: var(--tk-radius-sm); }

/* == tk: button ================================================= */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    line-height: 1;
    padding: 10px 18px;
    border-radius: var(--tk-radius-full);
    border: var(--tk-border-width) solid transparent;
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition), transform var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); }
.tk-btn-primary:active:not(:disabled) { background: var(--tk-color-primary); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); border-color: var(--tk-glass-edge); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); }
.tk-btn-outline { background: transparent; color: var(--tk-color-text); border-color: var(--tk-color-border); }
.tk-btn-outline:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-danger { background: var(--tk-color-danger); color: #FFFFFF; }
.tk-btn-danger:hover:not(:disabled) { filter: brightness(0.92); }
.tk-btn-text { background: none; color: var(--tk-color-accent); padding-left: 4px; padding-right: 4px; }
.tk-btn-text:hover:not(:disabled) { text-decoration: underline; text-underline-offset: 3px; }
.tk-btn-sm { font-size: var(--tk-text-caption); padding: 6px 12px; }
.tk-btn-lg { font-size: var(--tk-text-body); padding: 14px 26px; }
.tk-btn-icon { padding: 10px; }
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
.tk-label { font-size: var(--tk-text-body-sm); font-weight: 500; color: var(--tk-color-text); }
.tk-help { font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    padding: 10px 14px;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition), background var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-primary);
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--tk-color-primary) 16%, transparent);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.12);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: 0 0 0 4px rgba(14, 159, 110, 0.12); }
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
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--tk-color-primary) 16%, transparent);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-glass-edge);
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
    padding: 8px 12px;
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
.tk-option-selected { background: var(--tk-color-surface-2); font-weight: 500; }
.tk-option-check { margin-left: auto; color: var(--tk-color-primary); display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 8px 12px;
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
    width: 16px;
    height: 16px;
    flex: none;
    margin: 0;
    position: relative;
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition);
}
.tk-checkbox { border-radius: 5px; }
.tk-checkbox:hover, .tk-radio:hover { border-color: var(--tk-color-primary); }
.tk-checkbox:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); }
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
.tk-radio:checked { border: 5px solid var(--tk-color-primary); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--tk-color-primary) 16%, transparent);
}
.tk-toggle { position: relative; width: 36px; height: 20px; flex: none; margin: 0; appearance: none; border: none; background: var(--tk-color-border); border-radius: var(--tk-radius-full); cursor: pointer; transition: background var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background: #FFFFFF; border-radius: var(--tk-radius-full); transition: transform var(--tk-transition); box-shadow: var(--tk-shadow-sm); }
.tk-toggle:checked { background: var(--tk-color-primary); }
.tk-toggle:checked::after { transform: translateX(16px); }

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
    border: var(--tk-border-width) solid var(--tk-color-border);
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
    border: var(--tk-border-width) solid var(--tk-glass-edge);
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
    border: var(--tk-border-width) solid var(--tk-glass-edge);
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
.tk-dropdown-label { padding: 6px 12px; font-size: var(--tk-text-caption); font-weight: 500; color: var(--tk-color-text-muted); }
.tk-dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 8px 12px;
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
    border: var(--tk-border-width) solid var(--tk-glass-edge);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-sm);
    overflow: hidden;
}
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-sm); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-weight: var(--tk-weight-heading); font-family: var(--tk-font-heading); letter-spacing: -0.02em; }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); }

/* == tk: navigation ============================================= */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: var(--tk-border-width) solid var(--tk-glass-edge);
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: var(--tk-weight-heading); font-size: var(--tk-text-title); margin-right: auto; }
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: var(--tk-text-body-sm); font-weight: 500; }
.tk-navbar-link:hover, .tk-navbar-link-active { color: var(--tk-color-text); }
.tk-navbar-dark { background: rgba(14, 17, 40, 0.72); border-bottom: none; }
.tk-navbar-dark .tk-navbar-brand { color: #FFFFFF; }
.tk-navbar-dark .tk-navbar-link { color: #FFFFFF; opacity: 0.72; }
.tk-navbar-dark .tk-navbar-link:hover, .tk-navbar-dark .tk-navbar-link-active { color: #FFFFFF; opacity: 1; }
.tk-sidebar {
    width: 240px;
    background: var(--tk-color-surface);
    border-right: var(--tk-border-width) solid var(--tk-glass-edge);
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
.tk-sidebar-item-active { background: color-mix(in srgb, var(--tk-color-primary) 14%, transparent); color: var(--tk-color-primary); }
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 68px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-size: 11px;
    font-weight: 600;
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
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 500; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: var(--tk-border-width) solid var(--tk-glass-edge);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: var(--tk-space-lg); border-bottom: var(--tk-border-width) solid var(--tk-color-border); }
.tk-tab {
    padding: var(--tk-space-sm) 2px 12px;
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-text); border-bottom-color: var(--tk-color-primary); }
.tk-segmented { display: inline-flex; background: var(--tk-color-surface-2); border-radius: var(--tk-radius-full); padding: 3px; gap: 2px; }
.tk-segment {
    padding: 6px 16px;
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: var(--tk-radius-full);
    cursor: pointer;
}
.tk-segment-active { background: var(--tk-color-surface); color: var(--tk-color-text); box-shadow: var(--tk-shadow-sm); }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: var(--tk-text-caption);
    font-weight: 500;
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
    font-weight: 500;
    padding: 4px 12px;
    border-radius: var(--tk-radius-full);
    border: var(--tk-border-width) solid var(--tk-glass-edge);
    background: var(--tk-color-surface);
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
.tk-alert-title { font-weight: 600; display: block; margin-bottom: 2px; }
.tk-alert-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); border-color: color-mix(in srgb, var(--tk-color-success) 24%, transparent); }
.tk-alert-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); border-color: color-mix(in srgb, var(--tk-color-warning) 24%, transparent); }
.tk-alert-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); border-color: color-mix(in srgb, var(--tk-color-danger) 24%, transparent); }
.tk-alert-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); border-color: color-mix(in srgb, var(--tk-color-info) 24%, transparent); }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); }
.tk-table th {
    text-align: left;
    font-weight: 600;
    color: var(--tk-color-text-muted);
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-bottom: var(--tk-border-width) solid var(--tk-color-border);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: var(--tk-border-width) solid var(--tk-color-border); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: var(--tk-color-surface-2); }
.tk-table .tk-table-actions { text-align: right; white-space: nowrap; }
.tk-action-btn {
    width: 28px;
    height: 28px;
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
    min-width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-full);
    border: var(--tk-border-width) solid transparent;
    background: none;
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    cursor: pointer;
}
.tk-page:hover { background: var(--tk-color-surface-2); }
.tk-page-active { border-color: var(--tk-glass-edge); background: var(--tk-color-surface); box-shadow: var(--tk-shadow-sm); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(11, 16, 32, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-glass-edge);
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
    border-left: var(--tk-border-width) solid var(--tk-glass-edge);
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
.tk-progress { height: 8px; background: var(--tk-color-surface-2); border-radius: var(--tk-radius-full); overflow: hidden; }
.tk-progress-bar { height: 100%; background: linear-gradient(90deg, var(--tk-color-primary), var(--tk-color-accent)); border-radius: var(--tk-radius-full); transition: width var(--tk-transition); }
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
    border: var(--tk-border-width) dashed var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
}
.tk-empty-icon { color: var(--tk-color-text-muted); }
.tk-empty-title { font-weight: 600; font-size: var(--tk-text-body); }

/* == tk: content-blocks ========================================= */
.tk-hero { text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); }
.tk-hero .tk-display { margin-bottom: var(--tk-space-md); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); max-width: 560px; margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-sm); justify-content: center; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-lg); }
.tk-feature { display: flex; flex-direction: column; gap: var(--tk-space-sm); }
.tk-feature-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: color-mix(in srgb, var(--tk-color-primary) 14%, transparent);
    border-radius: var(--tk-radius);
    color: var(--tk-color-primary);
}
.tk-cta {
    background: linear-gradient(135deg, var(--tk-color-primary), color-mix(in srgb, var(--tk-color-primary) 55%, var(--tk-color-accent)));
    color: var(--tk-color-primary-contrast);
    border-radius: var(--tk-radius-lg);
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
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

/* == tk: glass flavor =========================================== */
/* Penimpa karakter glass di atas struktur kontrak: menang kaskade karena berada di ekor
   berkas. Di sinilah "kaca"-nya lahir — latar bercahaya, blur frosted glass, tepi embun,
   dan kilau lembut di bibir atas tiap panel. */
body {
    background-image:
        radial-gradient(680px 460px at 12% -6%, rgba(124, 92, 231, 0.20), transparent 64%),
        radial-gradient(560px 420px at 88% 4%, rgba(34, 211, 238, 0.16), transparent 62%),
        radial-gradient(720px 560px at 50% 108%, rgba(99, 102, 241, 0.14), transparent 66%);
    background-attachment: fixed;
    background-color: var(--tk-color-background);
}
[data-tk-theme="dark"] body, body[data-tk-theme="dark"] {
    background-image:
        radial-gradient(680px 460px at 12% -6%, rgba(139, 124, 255, 0.22), transparent 64%),
        radial-gradient(560px 420px at 88% 4%, rgba(103, 232, 249, 0.12), transparent 62%),
        radial-gradient(720px 560px at 50% 108%, rgba(76, 29, 149, 0.28), transparent 66%);
}
/* Lembaran kaca: panel-panel permukaan mendapat blur frosted glass + kilau bibir atas.
   Semua tetap membaca token; kit lain tinggal mengganti nilai tanpa menyentuh struktur. */
.tk-card, .tk-navbar, .tk-mobile-nav, .tk-sidebar, .tk-filter-bar,
.tk-modal, .tk-drawer, .tk-dropdown-menu, .tk-select-menu, .tk-segmented {
    backdrop-filter: blur(var(--tk-glass-blur)) saturate(160%);
    -webkit-backdrop-filter: blur(var(--tk-glass-blur)) saturate(160%);
}
.tk-card, .tk-modal, .tk-drawer, .tk-filter-bar {
    box-shadow: var(--tk-shadow), inset 0 1px 0 var(--tk-glass-highlight);
}
.tk-dropdown-menu, .tk-select-menu {
    box-shadow: var(--tk-shadow-lg), inset 0 1px 0 var(--tk-glass-highlight);
}
.tk-input, .tk-textarea, .tk-select-trigger {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}
.tk-btn-secondary {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: inset 0 1px 0 var(--tk-glass-highlight);
}
.tk-btn-primary { box-shadow: 0 8px 22px color-mix(in srgb, var(--tk-color-primary) 38%, transparent); }
.tk-btn-primary:hover:not(:disabled) { box-shadow: 0 10px 26px color-mix(in srgb, var(--tk-color-primary) 46%, transparent); transform: translateY(-1px); }
.tk-btn-primary:active:not(:disabled) { transform: translateY(0); }
.tk-cta { box-shadow: 0 18px 48px color-mix(in srgb, var(--tk-color-primary) 34%, transparent), inset 0 1px 0 rgba(255, 255, 255, 0.28); }
.tk-navbar-dark {
    backdrop-filter: blur(var(--tk-glass-blur)) saturate(160%);
    -webkit-backdrop-filter: blur(var(--tk-glass-blur)) saturate(160%);
    border-bottom: var(--tk-border-width) solid rgba(255, 255, 255, 0.10);
}
/* Judul hero berpendar lembut — gradien ungu-biru pada teks display. */
.tk-hero .tk-display {
    background: linear-gradient(100deg, var(--tk-color-text) 24%, var(--tk-color-primary) 58%, var(--tk-color-accent) 96%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
`;
