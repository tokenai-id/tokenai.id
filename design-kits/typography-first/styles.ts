/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const TYPOGRAPHY_FIRST_STYLES = `/* Typography First — kit design TOKENAI.
   Typography-First: hampir seluruh identitas visual dibangun dari huruf —
   pilihan font, skala ukuran, spacing, dan komposisi; imagery hanya pendukung
   (kecil, grayscale, baru berwarna saat disorot). Pasangan serif: Fraunces
   (display berkarakter dengan sumbu optical size — makin besar makin tajam)
   dan Source Serif 4 (body yang nyaman dibaca panjang), ditemani DM Mono
   untuk label, kicker, dan angka. Kanvas putih kertas hangat, tinta hampir
   hitam, aksen oxblood (merah anggur tua) dan ochre. Ornamen satu-satunya
   adalah perangkat tipografi klasik: drop cap, pull quote, angka seksi
   raksasa yang pudar, fleuron (❦), hairline rules, small caps, dan angka
   oldstyle di teks berjalan. Kit satu-tema: terang bawaan tanpa mode gelap —
   huruf paling nyaman dibaca di atas kertas. Kontrak: docs/kontrak-kit-design.md.
   Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #8C2F39;
    --tk-color-primary-hover: #71222B;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: #1A1815;
    --tk-color-secondary-hover: #33302B;
    --tk-color-secondary-contrast: #FAF9F6;
    --tk-color-accent: #B08D3E;
    --tk-color-background: #FAF9F6;
    --tk-color-surface: #FFFFFF;
    --tk-color-surface-2: #F2EFE9;
    --tk-color-text: #1A1815;
    --tk-color-text-muted: #6E6A61;
    --tk-color-border: #E3DFD6;
    --tk-color-success: #2E7D4F;
    --tk-color-success-soft: #E4F1E8;
    --tk-color-warning: #A16E14;
    --tk-color-warning-soft: #F6EDD8;
    --tk-color-danger: #B3362C;
    --tk-color-danger-soft: #F8E5E2;
    --tk-color-info: #33597F;
    --tk-color-info-soft: #E4EBF3;

    --tk-font-heading: 'Fraunces', Georgia, serif;
    --tk-font-body: 'Source Serif 4', Georgia, serif;
    --tk-font-mono: 'DM Mono', 'Courier New', monospace;
    --tk-weight-heading: 600;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.05;
    --tk-leading-body: 1.7;

    --tk-text-display: 84px;
    --tk-text-h1: 54px;
    --tk-text-h2: 36px;
    --tk-text-h3: 26px;
    --tk-text-h4: 19px;
    --tk-text-title: 15px;
    --tk-text-body-lg: 20px;
    --tk-text-body: 17px;
    --tk-text-body-sm: 14px;
    --tk-text-caption: 12px;

    --tk-space-xs: 4px;
    --tk-space-sm: 8px;
    --tk-space-md: 16px;
    --tk-space-lg: 24px;
    --tk-space-xl: 32px;
    --tk-space-2xl: 48px;
    --tk-space-3xl: 64px;
    --tk-space-section: 112px;

    --tk-radius-sm: 2px;
    --tk-radius: 3px;
    --tk-radius-lg: 6px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    --tk-shadow-sm: 0 1px 2px rgba(26, 24, 21, 0.06);
    --tk-shadow: 0 6px 18px rgba(26, 24, 21, 0.08);
    --tk-shadow-lg: 0 16px 40px rgba(26, 24, 21, 0.12);

    --tk-transition: 220ms ease;
    --tk-container: 1160px;

    /* Token khas typography-first (bukan kontrak): tinta pudar untuk angka
       seksi raksasa dan hairline ganda ala buku. */
    --tk-tf-ghost: #ECE8DD;
    --tk-tf-hairline: 1px solid var(--tk-color-border);
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
    /* Angka oldstyle di teks berjalan — detail khas penataan huruf buku. */
    font-variant-numeric: oldstyle-nums;
    -webkit-font-smoothing: antialiased;
}
.tk-container {
    max-width: var(--tk-container);
    margin: 0 auto;
    padding: 0 var(--tk-space-lg);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }
::selection { background: var(--tk-color-primary); color: #FFF; }

/* == tk: typography ============================================= */
/* Heading Fraunces dengan sumbu optical size mengikuti ukuran (font-optical-sizing:
   auto) — display besar tampil tajam berkontras, ukuran kecil tetap ramah. */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    font-optical-sizing: auto;
    line-height: var(--tk-leading-heading);
    letter-spacing: -0.015em;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); font-weight: 500; line-height: 1.0; letter-spacing: -0.02em; }
.tk-h1 { font-size: var(--tk-text-h1); font-weight: 500; }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-title); font-weight: 600; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-family: var(--tk-font-mono); font-size: 11px; color: var(--tk-color-text-muted); letter-spacing: 0.12em; text-transform: uppercase; font-variant-numeric: lining-nums; }
.tk-muted { color: var(--tk-color-text-muted); }
/* Tautan bergaris bawah klasik dengan offset — hormat pada baris teks. */
.tk-link {
    color: var(--tk-color-text);
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: var(--tk-color-primary);
    text-decoration-thickness: 1.5px;
    text-underline-offset: 3px;
    transition: color var(--tk-transition);
}
.tk-link:hover { color: var(--tk-color-primary); }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.78em; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); padding: 2px 7px; border-radius: var(--tk-radius-sm); font-variant-numeric: lining-nums; }

/* == tk: button ================================================= */
/* Tombol adalah label huruf: DM Mono uppercase berjarak renggang di kotak
   bersudut hampir siku — sunyi, biarkan hurufnya yang berbicara. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-mono);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    line-height: 1;
    padding: 14px 24px;
    border: 1px solid transparent;
    border-radius: var(--tk-radius);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
    font-variant-numeric: lining-nums;
}
.tk-btn:not(:disabled):active { transform: translateY(1px); }
.tk-btn:disabled { opacity: 0.45; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); box-shadow: var(--tk-shadow-sm); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); }
.tk-btn-danger { background: var(--tk-color-danger); color: #FFF; }
.tk-btn-outline { background: transparent; border-color: var(--tk-color-text); color: var(--tk-color-text); }
.tk-btn-outline:hover:not(:disabled) { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-text { background: none; color: var(--tk-color-primary); padding-left: 6px; padding-right: 6px; text-decoration: underline; text-underline-offset: 3px; }
.tk-btn-sm { font-size: 11px; padding: 10px 16px; }
.tk-btn-lg { font-size: 13px; padding: 17px 32px; }
.tk-btn-icon { padding: 13px; }
.tk-btn-loading { position: relative; color: transparent !important; pointer-events: none; }
.tk-btn-loading::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    border: 2px solid rgba(255, 255, 255, 0.9);
    border-top-color: transparent;
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.8s linear infinite;
}
.tk-btn-outline.tk-btn-loading::after, .tk-btn-ghost.tk-btn-loading::after, .tk-btn-text.tk-btn-loading::after {
    border-color: var(--tk-color-text);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
.tk-field { display: flex; flex-direction: column; gap: var(--tk-space-xs); margin-bottom: var(--tk-space-md); }
.tk-label { font-family: var(--tk-font-mono); font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--tk-color-text); }
.tk-help { font-size: 13px; color: var(--tk-color-text-muted); font-style: italic; }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-bottom-color: #C9C4B8;
    border-radius: var(--tk-radius-sm);
    padding: 12px 14px;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); opacity: 0.7; font-style: italic; }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-primary);
    box-shadow: 0 0 0 3px rgba(140, 47, 57, 0.12);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: 0 0 0 3px rgba(179, 54, 44, 0.12);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: 0 0 0 3px rgba(46, 125, 79, 0.12); }
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
.tk-select-placeholder { color: var(--tk-color-text-muted); font-style: italic; }
.tk-select:focus-within > .tk-select-trigger, .tk-select-open > .tk-select-trigger {
    border-color: var(--tk-color-primary);
    box-shadow: 0 0 0 3px rgba(140, 47, 57, 0.12);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-text);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg);
    padding: var(--tk-space-sm);
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
.tk-option-selected { background: var(--tk-color-surface-2); color: var(--tk-color-primary); font-weight: 600; }
.tk-option-check { margin-left: auto; color: var(--tk-color-primary); display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 12px;
    margin: 2px 2px var(--tk-space-sm);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    background: var(--tk-color-background);
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
.tk-select-menu-search input::placeholder { color: var(--tk-color-text-muted); font-style: italic; }
.tk-select-menu-footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-sm) 6px 4px;
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
    border: 1px solid var(--tk-color-text);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-checkbox { border-radius: var(--tk-radius-sm); }
.tk-checkbox:checked { background: var(--tk-color-text); border-color: var(--tk-color-text); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 2px;
    width: 4px;
    height: 9px;
    border-right: 2px solid #FFF;
    border-bottom: 2px solid #FFF;
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked { background: var(--tk-color-text); border-color: var(--tk-color-text); box-shadow: inset 0 0 0 4px var(--tk-color-surface); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(140, 47, 57, 0.2);
}
.tk-toggle { position: relative; width: 44px; height: 24px; flex: none; margin: 0; appearance: none; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-text); border-radius: var(--tk-radius-full); cursor: pointer; transition: background var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; background: var(--tk-color-text); border-radius: var(--tk-radius-full); transition: transform var(--tk-transition), background var(--tk-transition); }
.tk-toggle:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); }
.tk-toggle:checked::after { transform: translateX(20px); background: #FFF; }

/* == tk: search-filter ========================================== */
.tk-search { position: relative; display: flex; align-items: center; min-width: 220px; }
.tk-search .tk-input { width: 100%; padding-left: 40px; padding-right: 62px; }
.tk-search .tk-input::-webkit-search-cancel-button { -webkit-appearance: none; }
.tk-search-icon { position: absolute; left: 14px; display: inline-flex; color: var(--tk-color-text-muted); pointer-events: none; }
.tk-search-kbd {
    position: absolute;
    right: 11px;
    font-family: var(--tk-font-mono);
    font-size: 10px;
    color: var(--tk-color-text-muted);
    background: var(--tk-color-surface-2);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 2px 7px;
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
    border-radius: var(--tk-radius-full);
    background: var(--tk-color-primary);
    color: #FFF;
    font-size: 11px;
    font-weight: 600;
    font-variant-numeric: lining-nums;
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
    border: 1px solid var(--tk-color-text);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg);
    padding: var(--tk-space-sm);
    max-height: 280px;
    overflow: auto;
    display: none;
    flex-direction: column;
    z-index: 30;
}
.tk-dropdown-menu-right { left: auto; right: 0; }
.tk-dropdown-menu-up { top: auto; bottom: calc(100% + 6px); }
.tk-dropdown-open > .tk-dropdown-menu, .tk-dropdown:focus-within > .tk-dropdown-menu { display: flex; }
.tk-dropdown-label { padding: 6px 12px; font-family: var(--tk-font-mono); font-size: 10px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--tk-color-text-muted); }
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
    text-align: left;
    transition: background var(--tk-transition);
}
.tk-dropdown-item:hover { background: var(--tk-color-surface-2); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-text-muted); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: var(--tk-color-danger-soft); }
.tk-dropdown-divider { height: 1px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) var(--tk-space-sm); }

/* == tk: card =================================================== */
/* Kartu adalah kolom cetak: putih dengan hairline dan bayangan setipis kertas.
   Foto di dalamnya grayscale — imagery hanya pendukung, berwarna saat disorot. */
.tk-card {
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-sm);
    overflow: hidden;
    transition: box-shadow var(--tk-transition), border-color var(--tk-transition);
}
.tk-card:hover { box-shadow: var(--tk-shadow); border-color: #C9C4B8; }
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-md); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-family: var(--tk-font-heading); font-weight: 500; font-variant-numeric: lining-nums; color: var(--tk-color-text); }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 600; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 600; }

/* == tk: navigation ============================================= */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: rgba(250, 249, 246, 0.92);
    backdrop-filter: blur(10px);
    border-bottom: var(--tk-tf-hairline);
    position: relative;
    z-index: 5;
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 600; font-size: 20px; letter-spacing: -0.01em; margin-right: auto; color: var(--tk-color-text); }
.tk-navbar-link {
    color: var(--tk-color-text-muted);
    text-decoration: none;
    font-family: var(--tk-font-mono);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 7px 12px;
    border-radius: var(--tk-radius-sm);
    transition: color var(--tk-transition);
}
.tk-navbar-link:hover { color: var(--tk-color-text); text-decoration: underline; text-underline-offset: 4px; text-decoration-color: var(--tk-color-primary); }
.tk-navbar-link-active { color: var(--tk-color-primary); text-decoration: underline; text-underline-offset: 4px; }
.tk-navbar-dark { background: var(--tk-color-secondary); border-bottom-color: var(--tk-color-secondary); }
.tk-navbar-dark .tk-navbar-brand { color: var(--tk-color-secondary-contrast); }
.tk-navbar-dark .tk-navbar-link { color: rgba(250, 249, 246, 0.65); }
.tk-navbar-dark .tk-navbar-link:hover { color: #FFF; text-decoration-color: var(--tk-color-accent); }
.tk-navbar-dark .tk-navbar-link-active { color: #FFF; text-decoration-color: var(--tk-color-accent); }
.tk-sidebar {
    width: 250px;
    background: var(--tk-color-surface);
    border-right: var(--tk-tf-hairline);
    padding: var(--tk-space-md);
    display: flex;
    flex-direction: column;
    gap: 2px;
    transition: width var(--tk-transition);
    position: relative;
    z-index: 4;
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
.tk-sidebar-item-active { background: transparent; color: var(--tk-color-primary); box-shadow: inset 2px 0 0 var(--tk-color-primary); border-radius: 0; }
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 66px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
    border-bottom: var(--tk-tf-hairline);
    margin-bottom: var(--tk-space-xs);
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
.tk-breadcrumb a:hover { color: var(--tk-color-primary); text-decoration: underline; text-underline-offset: 3px; }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.6; }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 600; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: rgba(250, 249, 246, 0.92);
    backdrop-filter: blur(10px);
    border-bottom: var(--tk-tf-hairline);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: 4px; border-bottom: var(--tk-tf-hairline); width: fit-content; max-width: 100%; overflow-x: auto; }
.tk-tab {
    padding: 10px 18px;
    font-family: var(--tk-font-mono);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    transition: color var(--tk-transition), border-color var(--tk-transition);
    white-space: nowrap;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-primary); border-bottom-color: var(--tk-color-primary); }
.tk-segmented { display: inline-flex; border: 1px solid var(--tk-color-text); background: var(--tk-color-surface); border-radius: var(--tk-radius); padding: 3px; gap: 2px; }
.tk-segment {
    padding: 7px 16px;
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: var(--tk-color-text); color: var(--tk-color-background); }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: var(--tk-radius-sm);
    border: 1px solid var(--tk-color-border);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text);
    font-variant-numeric: lining-nums;
}
.tk-badge-success { color: var(--tk-color-success); background: var(--tk-color-success-soft); border-color: rgba(46, 125, 79, 0.3); }
.tk-badge-warning { color: var(--tk-color-warning); background: var(--tk-color-warning-soft); border-color: rgba(161, 110, 20, 0.3); }
.tk-badge-danger { color: var(--tk-color-danger); background: var(--tk-color-danger-soft); border-color: rgba(179, 54, 44, 0.3); }
.tk-badge-info { color: var(--tk-color-info); background: var(--tk-color-info-soft); border-color: rgba(51, 89, 127, 0.3); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 13px;
    font-weight: 600;
    padding: 4px 11px;
    border-radius: var(--tk-radius-sm);
    border: 1px solid var(--tk-color-text);
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
    padding: var(--tk-space-md) var(--tk-space-lg);
    border: 1px solid;
    border-left-width: 3px;
    border-radius: var(--tk-radius);
    font-size: var(--tk-text-body-sm);
    background: var(--tk-color-surface);
}
.tk-alert-title { font-weight: 700; display: block; margin-bottom: 2px; }
.tk-alert-success { background: var(--tk-color-success-soft); border-color: var(--tk-color-success); color: #1D4F32; }
.tk-alert-warning { background: var(--tk-color-warning-soft); border-color: var(--tk-color-warning); color: #6B4A0E; }
.tk-alert-danger { background: var(--tk-color-danger-soft); border-color: var(--tk-color-danger); color: #762720; }
.tk-alert-info { background: var(--tk-color-info-soft); border-color: var(--tk-color-info); color: #24405A; }

/* == tk: table ================================================== */
/* Tabel buku klasik: kepala bergaris tebal-tipis, isi ber-hairline, dan angka
   lining tabular agar kolom angka rapi lurus. */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); font-variant-numeric: lining-nums tabular-nums; }
.tk-table th {
    text-align: left;
    font-family: var(--tk-font-mono);
    font-weight: 500;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--tk-color-text-muted);
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-top: 2px solid var(--tk-color-text);
    border-bottom: 1px solid var(--tk-color-text);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: var(--tk-tf-hairline); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: var(--tk-color-surface-2); }
.tk-table .tk-table-actions { text-align: right; white-space: nowrap; }
.tk-action-btn {
    width: 32px;
    height: 32px;
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
    border-radius: var(--tk-radius-sm);
    border: 1px solid transparent;
    background: none;
    font-family: var(--tk-font-mono);
    font-size: 12px;
    font-weight: 500;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
    font-variant-numeric: lining-nums;
}
.tk-page:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-page-active { background: var(--tk-color-text); color: var(--tk-color-background); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(26, 24, 21, 0.45);
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-text);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg);
    max-width: 440px;
    width: 100%;
}
.tk-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 360px;
    background: var(--tk-color-surface);
    border-left: 1px solid var(--tk-color-text);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 26px;
    height: 26px;
    border: 2px solid var(--tk-color-surface-2);
    border-top-color: var(--tk-color-primary);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.8s linear infinite;
}
.tk-progress { height: 8px; background: var(--tk-color-surface-2); border: var(--tk-tf-hairline); border-radius: var(--tk-radius-sm); overflow: hidden; }
.tk-progress-bar { height: 100%; background: var(--tk-color-primary); transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, #E9E5DC 50%, var(--tk-color-surface-2) 75%);
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
    border: 1px dashed #C9C4B8;
    border-radius: var(--tk-radius-lg);
    background: var(--tk-color-surface);
}
.tk-empty-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: var(--tk-tf-hairline);
    border-radius: var(--tk-radius);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text);
}
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: 600; font-size: var(--tk-text-h4); }

/* == tk: content-blocks ========================================= */
/* Hero adalah halaman judul buku: kicker small caps di atas hairline, display
   serif raksasa dengan kata beritalik oxblood, dan subjudul selebar kolom baca. */
.tk-hero { position: relative; text-align: left; padding: var(--tk-space-section) var(--tk-space-lg); max-width: var(--tk-container); margin: 0 auto; box-sizing: border-box; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); max-width: 14ch; }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); margin: 0 0 var(--tk-space-xl); max-width: 34em; }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); flex-wrap: wrap; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-lg); }
/* Fitur tanpa kartu: kolom teks dengan hairline atas dan angka seksi pudar —
   komposisi tipografis, bukan kotak-kotak. */
.tk-feature {
    display: flex;
    flex-direction: column;
    gap: var(--tk-space-sm);
    background: transparent;
    border-top: 2px solid var(--tk-color-text);
    padding: var(--tk-space-lg) 0 var(--tk-space-md);
    transition: border-color var(--tk-transition);
}
.tk-feature:hover { border-top-color: var(--tk-color-primary); }
.tk-feature:hover .tk-title { color: var(--tk-color-primary); }
.tk-feature .tk-title { font-size: var(--tk-text-h4); transition: color var(--tk-transition); }
.tk-feature-icon {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-sm);
    background: transparent;
    border: 1px solid var(--tk-color-text);
    color: var(--tk-color-text);
}
.tk-cta {
    position: relative;
    background: var(--tk-color-secondary);
    border-radius: var(--tk-radius-lg);
    color: var(--tk-color-secondary-contrast);
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
    overflow: hidden;
}
.tk-cta .tk-h3 { margin: 0; color: var(--tk-color-secondary-contrast); font-weight: 500; }
.tk-cta .tk-muted { color: rgba(250, 249, 246, 0.65); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: typography-first flavor ================================ */
/* Penimpa karakter typography-first di atas struktur kontrak: menang kaskade
   karena berada di ekor berkas. Tanda tangan kit ini adalah perangkat
   tipografi klasik — drop cap, pull quote, angka seksi raksasa, fleuron,
   small caps — dan imagery yang sengaja ditundukkan (grayscale). */
/* Kicker small caps bergaris — pembuka seksi ala halaman buku. */
.tk-kicker {
    display: flex;
    align-items: center;
    gap: var(--tk-space-md);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--tk-color-primary);
    font-variant-numeric: lining-nums;
}
.tk-kicker::after { content: ''; height: 1px; width: 72px; background: var(--tk-color-text); }
/* Small caps berjarak renggang untuk label dan meta. */
.tk-smallcaps { font-size: 0.82em; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 600; }
/* Kata beritalik Fraunces di dalam heading — aksen khas halaman judul. */
.tk-ital { font-style: italic; font-weight: 400; color: var(--tk-color-primary); }
/* Drop cap: huruf pertama paragraf turun tiga baris, gaya novel klasik. */
.tk-dropcap::first-letter {
    font-family: var(--tk-font-heading);
    font-weight: 600;
    font-size: 3.35em;
    float: left;
    line-height: 0.82;
    padding: 4px 10px 0 0;
    color: var(--tk-color-primary);
}
/* Pull quote: kutipan besar beritalik dengan tanda kutip raksasa yang pudar. */
.tk-pullquote {
    position: relative;
    font-family: var(--tk-font-heading);
    font-style: italic;
    font-weight: 400;
    font-size: clamp(22px, 2.6vw, 30px);
    line-height: 1.35;
    color: var(--tk-color-text);
    border-top: 2px solid var(--tk-color-text);
    border-bottom: var(--tk-tf-hairline);
    margin: var(--tk-space-xl) 0;
    padding: var(--tk-space-xl) var(--tk-space-lg) var(--tk-space-xl) 84px;
}
.tk-pullquote::before {
    content: '\\201C';
    position: absolute;
    left: 8px;
    top: 2px;
    font-size: 120px;
    line-height: 1;
    font-style: normal;
    color: var(--tk-tf-ghost);
}
.tk-pullquote cite { display: block; margin-top: var(--tk-space-md); font-style: normal; font-family: var(--tk-font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--tk-color-text-muted); }
/* Angka seksi raksasa yang pudar — penanda komposisi, bukan dekorasi gambar. */
.tk-num {
    font-family: var(--tk-font-heading);
    font-weight: 500;
    font-size: clamp(64px, 8vw, 112px);
    line-height: 1;
    color: var(--tk-tf-ghost);
    font-variant-numeric: lining-nums;
    user-select: none;
}
/* Fleuron: pemisah seksi klasik — ornamen dari huruf itu sendiri. */
.tk-fleuron {
    display: flex;
    align-items: center;
    gap: var(--tk-space-md);
    color: var(--tk-color-text-muted);
    margin: var(--tk-space-2xl) 0;
}
.tk-fleuron::before, .tk-fleuron::after { content: ''; height: 1px; flex: 1; background: var(--tk-color-border); }
.tk-fleuron span { font-family: var(--tk-font-heading); font-size: 20px; line-height: 1; }
/* Imagery ditundukkan: grayscale dan bergaris tinta; warnanya kembali saat
   disorot — foto adalah catatan kaki, bukan judul. */
.tk-card img, .tk-hero img, figure img {
    filter: grayscale(1);
    border: var(--tk-tf-hairline);
    border-radius: var(--tk-radius-sm);
    box-sizing: border-box;
    transition: filter var(--tk-transition);
}
.tk-card img:hover, .tk-hero img:hover, figure img:hover { filter: grayscale(0); }
figure figcaption { font-family: var(--tk-font-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--tk-color-text-muted); margin-top: var(--tk-space-sm); }
`;
