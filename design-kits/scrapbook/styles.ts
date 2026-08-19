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
 * `styles.css` kit Scrapbook.
 *
 * Estetika buku tempel handmade — melangkah lebih jauh dari Collage: heading benar-benar
 * ditulis tangan (Kalam), tombol dan kartu "digunting tangan" dengan sudut tidak rata
 * (radius asimetris khas gambar tangan), judul hero berupa sobekan kertas bergerigi
 * (clip-path), washi tape belang menandai elemen aktif, badge seperti perangko berlubang,
 * caption diketik mesin tik (Cutive Mono), dan foto dihangatkan sepia tipis. Kertas kraft
 * bergaris buku tulis samar, aksen mawar dan hijau daun. Struktur selektor dan blok
 * `== tk: ... ==` mengikuti kontrak `docs/kontrak-kit-design.md`; wajahnya lahir dari
 * nilai token plus blok "flavor" di ekor berkas.
 */
export const SCRAPBOOK_STYLES = `/* Scrapbook — kit design TOKENAI.
   Estetika buku tempel handmade: washi tape, stiker, polaroid, torn paper, tulisan tangan,
   perangko, dan potongan kertas gunting tangan.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #C94F6D;
    --tk-color-primary-hover: #B03D5A;
    --tk-color-primary-contrast: #FBF6EA;
    --tk-color-secondary: #FBF6EA;
    --tk-color-secondary-hover: #F1E7D2;
    --tk-color-secondary-contrast: #3B2F23;
    --tk-color-accent: #4E7A4E;
    --tk-color-background: #EFE3CD;
    --tk-color-surface: #FBF6EA;
    --tk-color-surface-2: #E9DCC3;
    --tk-color-text: #3B2F23;
    --tk-color-text-muted: #83715C;
    --tk-color-border: #3B2F23;
    --tk-color-success: #4E7A4E;
    --tk-color-success-soft: #E2ECDD;
    --tk-color-warning: #96690C;
    --tk-color-warning-soft: #F4E8C8;
    --tk-color-danger: #B3402E;
    --tk-color-danger-soft: #F5DFD8;
    --tk-color-info: #4A6B8A;
    --tk-color-info-soft: #E0E9F0;

    --tk-font-heading: 'Kalam', 'Comic Sans MS', cursive;
    --tk-font-body: 'Nunito', system-ui, sans-serif;
    --tk-font-mono: 'Cutive Mono', ui-monospace, monospace;
    --tk-weight-heading: 700;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.15;
    --tk-leading-body: 1.65;

    --tk-text-display: 58px;
    --tk-text-h1: 44px;
    --tk-text-h2: 32px;
    --tk-text-h3: 24px;
    --tk-text-h4: 19px;
    --tk-text-title: 17px;
    --tk-text-body-lg: 18px;
    --tk-text-body: 16px;
    --tk-text-body-sm: 14px;
    --tk-text-caption: 13px;

    --tk-space-xs: 4px;
    --tk-space-sm: 8px;
    --tk-space-md: 16px;
    --tk-space-lg: 24px;
    --tk-space-xl: 32px;
    --tk-space-2xl: 48px;
    --tk-space-3xl: 64px;
    --tk-space-section: 96px;

    --tk-radius-sm: 6px;
    --tk-radius: 10px;
    --tk-radius-lg: 14px;
    --tk-radius-full: 999px;

    --tk-border-width: 2px;
    /* Potongan kertas terangkat: offset lembut semi-transparan sewarna tinta sepia. */
    --tk-shadow-sm: 2px 3px 0 rgba(59, 47, 35, 0.15);
    --tk-shadow: 4px 5px 0 rgba(59, 47, 35, 0.15);
    --tk-shadow-lg: 7px 9px 0 rgba(59, 47, 35, 0.18);

    --tk-transition: 140ms ease;
    --tk-container: 1200px;

    /* Token khas scrapbook (bukan kontrak), dipakai blok flavor: sudut "digunting tangan"
       (radius asimetris), washi tape belang, garis buku tulis, dan garis tabel pudar. */
    --tk-scrap-cut: 255px 15px 225px 15px / 15px 225px 15px 255px;
    --tk-scrap-cut-soft: 16px 10px 18px 8px / 10px 18px 8px 16px;
    --tk-scrap-tape: repeating-linear-gradient(45deg, rgba(201, 79, 109, 0.4) 0 8px, rgba(251, 246, 234, 0.5) 8px 16px);
    --tk-scrap-line: rgba(59, 47, 35, 0.10);
    --tk-scrap-rule: rgba(59, 47, 35, 0.25);
}

/* Mode gelap: buku tempel tengah malam — kraft menjadi cokelat tua, tinta menjadi krem,
   mawar dan daun menyala lembut. Aktifkan dengan atribut data-tk-theme="dark" pada <html>
   atau <body>. */
[data-tk-theme="dark"] {
    --tk-color-primary: #E07A93;
    --tk-color-primary-hover: #EB96AB;
    --tk-color-primary-contrast: #221B12;
    --tk-color-secondary: #2E251A;
    --tk-color-secondary-hover: #3A2F21;
    --tk-color-secondary-contrast: #F3EAD7;
    --tk-color-accent: #85B385;
    --tk-color-background: #221B12;
    --tk-color-surface: #2E251A;
    --tk-color-surface-2: #3A2F21;
    --tk-color-text: #F3EAD7;
    --tk-color-text-muted: #B3A48B;
    --tk-color-border: #F3EAD7;
    --tk-color-success: #9CC49C;
    --tk-color-success-soft: #223122;
    --tk-color-warning: #E0B94C;
    --tk-color-warning-soft: #33290F;
    --tk-color-danger: #E58873;
    --tk-color-danger-soft: #38180F;
    --tk-color-info: #8FB0CC;
    --tk-color-info-soft: #1B2733;
    --tk-shadow-sm: 2px 3px 0 rgba(0, 0, 0, 0.4);
    --tk-shadow: 4px 5px 0 rgba(0, 0, 0, 0.4);
    --tk-shadow-lg: 7px 9px 0 rgba(0, 0, 0, 0.45);
    --tk-scrap-tape: repeating-linear-gradient(45deg, rgba(224, 122, 147, 0.35) 0 8px, rgba(46, 37, 26, 0.55) 8px 16px);
    --tk-scrap-line: rgba(243, 234, 215, 0.07);
    --tk-scrap-rule: rgba(243, 234, 215, 0.25);
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
}
.tk-display { font-size: var(--tk-text-display); }
.tk-h1 { font-size: var(--tk-text-h1); }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-size: var(--tk-text-title); font-weight: 800; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link { color: var(--tk-color-accent); font-weight: 700; text-decoration: underline; text-decoration-style: wavy; text-decoration-thickness: 1.5px; text-underline-offset: 4px; }
.tk-link:hover { color: var(--tk-color-primary); }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.95em; background: var(--tk-color-surface-2); padding: 2px 6px; border-radius: var(--tk-radius-sm); border: 1px solid var(--tk-scrap-rule); }

/* == tk: button ================================================= */
/* Tombol = potongan kertas yang digunting tangan: sudutnya sengaja tidak rata. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-body-sm);
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    line-height: 1;
    padding: 12px 18px;
    border-radius: var(--tk-scrap-cut);
    border: var(--tk-border-width) solid var(--tk-color-border);
    box-shadow: var(--tk-shadow-sm);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition), transform var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.tk-btn:hover:not(:disabled) { transform: rotate(-1.2deg) translateY(-1px); }
.tk-btn:not(:disabled):active { transform: translate(2px, 3px); box-shadow: none; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); }
.tk-btn-outline { background: transparent; color: var(--tk-color-text); border-color: var(--tk-color-border); box-shadow: none; }
.tk-btn-outline:hover:not(:disabled) { background: var(--tk-color-surface); box-shadow: var(--tk-shadow-sm); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); border-color: transparent; box-shadow: none; }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); transform: none; }
.tk-btn-danger { background: var(--tk-color-danger); color: #FBF6EA; }
.tk-btn-danger:hover:not(:disabled) { filter: brightness(0.94); }
.tk-btn-text { background: none; color: var(--tk-color-accent); border-color: transparent; box-shadow: none; padding-left: 4px; padding-right: 4px; }
.tk-btn-text:hover:not(:disabled) { transform: none; text-decoration: underline; text-decoration-style: wavy; text-underline-offset: 4px; }
.tk-btn-sm { font-size: var(--tk-text-caption); padding: 8px 12px; }
.tk-btn-lg { font-size: var(--tk-text-body); padding: 15px 26px; }
.tk-btn-icon { padding: 12px; }
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
.tk-label { font-size: var(--tk-text-body-sm); font-weight: 800; color: var(--tk-color-text); }
.tk-help { font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-scrap-cut-soft);
    padding: 11px 12px;
    transition: box-shadow var(--tk-transition), border-color var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-primary);
    box-shadow: 2px 3px 0 var(--tk-color-primary);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: 2px 3px 0 var(--tk-color-danger);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: 2px 3px 0 var(--tk-color-success); }
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
    box-shadow: 2px 3px 0 var(--tk-color-primary);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-scrap-cut-soft);
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
.tk-option-selected { background: var(--tk-scrap-tape); font-weight: 800; }
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
    transition: background var(--tk-transition);
}
.tk-checkbox { border-radius: 5px 3px 6px 3px; }
.tk-checkbox:hover, .tk-radio:hover { background: var(--tk-color-surface-2); }
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
.tk-radio:checked { border: 5px solid var(--tk-color-border); background: var(--tk-color-primary); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: 2px 3px 0 var(--tk-color-primary);
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
    border: 1px solid var(--tk-scrap-rule);
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
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-scrap-cut-soft);
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
    font-family: var(--tk-font-body);
    font-size: 11px;
    font-weight: 800;
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
    border-radius: var(--tk-scrap-cut-soft);
    box-shadow: var(--tk-shadow-lg);
    padding: var(--tk-space-xs);
    display: none;
    flex-direction: column;
    z-index: 30;
}
.tk-dropdown-menu-right { left: auto; right: 0; }
.tk-dropdown-menu-up { top: auto; bottom: calc(100% + 6px); }
.tk-dropdown-open > .tk-dropdown-menu, .tk-dropdown:focus-within > .tk-dropdown-menu { display: flex; }
.tk-dropdown-label { padding: 6px 10px; font-family: var(--tk-font-mono); font-size: var(--tk-text-caption); text-transform: uppercase; letter-spacing: 0.05em; color: var(--tk-color-text-muted); }
.tk-dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 10px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
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
.tk-dropdown-divider { height: 1px; background: var(--tk-scrap-rule); border: none; margin: var(--tk-space-xs) 0; }

/* == tk: card =================================================== */
/* Kartu = potongan kertas gunting tangan dengan sudut sedikit tidak rata. */
.tk-card {
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-scrap-cut-soft);
    box-shadow: var(--tk-shadow-sm);
    overflow: hidden;
}
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-sm); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-family: var(--tk-font-heading); font-weight: 700; }
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
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 700; font-size: 22px; margin-right: auto; }
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: var(--tk-text-body-sm); font-weight: 700; }
.tk-navbar-link:hover { color: var(--tk-color-text); }
.tk-navbar-link-active { color: var(--tk-color-text); background: var(--tk-scrap-tape); padding: 4px 10px; transform: rotate(-1.2deg); display: inline-block; border-radius: 2px; }
.tk-navbar-dark { background: #221B12; border-bottom-color: #221B12; }
.tk-navbar-dark .tk-navbar-brand { color: #F3EAD7; }
.tk-navbar-dark .tk-navbar-link { color: #F3EAD7; opacity: 0.75; }
.tk-navbar-dark .tk-navbar-link:hover, .tk-navbar-dark .tk-navbar-link-active { opacity: 1; color: #F3EAD7; }
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
    font-weight: 700;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-sidebar-item-active { background: var(--tk-scrap-tape); color: var(--tk-color-text); }
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 68px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 12px;
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
    font-weight: 700;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 3px solid transparent;
    margin-bottom: calc(-1 * var(--tk-border-width));
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-text); border-bottom-color: var(--tk-color-primary); }
.tk-segmented { display: inline-flex; background: var(--tk-color-surface); border: var(--tk-border-width) solid var(--tk-color-border); border-radius: var(--tk-scrap-cut-soft); padding: 3px; gap: 3px; }
.tk-segment {
    padding: 6px 14px;
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: var(--tk-scrap-tape); color: var(--tk-color-text); }

/* == tk: badge ================================================== */
/* Badge = perangko kecil: tepi berlubang lewat garis putus-putus dan sedikit miring. */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-caption);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    padding: 3px 10px;
    border-radius: 2px;
    border: 1.5px dashed currentColor;
    background: var(--tk-color-surface);
    color: var(--tk-color-text);
    transform: rotate(1.2deg);
}
.tk-badge-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); }
.tk-badge-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); }
.tk-badge-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-badge-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); }
/* Chip = potongan washi tape belang. */
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-caption);
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 2px;
    border: none;
    background: var(--tk-scrap-tape);
    color: var(--tk-color-text);
    transform: rotate(-1deg);
}
.tk-chip-remove { border: none; background: none; cursor: pointer; color: var(--tk-color-text-muted); font-size: 12px; line-height: 1; padding: 0; }
.tk-chip-remove:hover { color: var(--tk-color-danger); }

/* == tk: alert ================================================== */
.tk-alert {
    display: flex;
    gap: var(--tk-space-sm);
    align-items: flex-start;
    padding: var(--tk-space-md);
    border-radius: var(--tk-scrap-cut-soft);
    font-size: var(--tk-text-body-sm);
    border: var(--tk-border-width) solid currentColor;
    box-shadow: 2px 3px 0 rgba(59, 47, 35, 0.12);
}
.tk-alert-title { font-weight: 800; display: block; margin-bottom: 2px; }
.tk-alert-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); }
.tk-alert-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); }
.tk-alert-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-alert-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); }
.tk-table th {
    text-align: left;
    font-family: var(--tk-font-mono);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--tk-color-text-muted);
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-bottom: var(--tk-border-width) solid var(--tk-color-border);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: 1px dashed var(--tk-scrap-rule); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: var(--tk-color-surface-2); }
.tk-table .tk-table-actions { text-align: right; white-space: nowrap; }
.tk-action-btn {
    width: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
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
    border: 1px solid transparent;
    background: none;
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    cursor: pointer;
    transition: border-color var(--tk-transition), background var(--tk-transition);
}
.tk-page:hover { border-color: var(--tk-color-border); }
.tk-page-active { background: var(--tk-scrap-tape); border-color: var(--tk-color-border); transform: rotate(-2deg); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(59, 47, 35, 0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-scrap-cut-soft);
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
.tk-progress-bar { height: 100%; background: var(--tk-scrap-tape), var(--tk-color-primary); background-blend-mode: overlay; background-color: var(--tk-color-primary); transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, var(--tk-color-background) 50%, var(--tk-color-surface-2) 75%);
    background-size: 200% 100%;
    animation: tk-shimmer 1.5s infinite;
    border-radius: var(--tk-radius-sm);
    border: 1px dashed var(--tk-scrap-rule);
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
    border-radius: var(--tk-scrap-cut-soft);
    background: var(--tk-color-surface);
}
.tk-empty-icon { color: var(--tk-color-text-muted); }
.tk-empty-title { font-weight: 800; font-size: var(--tk-text-body); }

/* == tk: content-blocks ========================================= */
.tk-hero { text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); }
.tk-hero .tk-display { margin-bottom: var(--tk-space-md); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); max-width: 560px; margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-xl); }
.tk-feature { display: flex; flex-direction: column; gap: var(--tk-space-sm); }
/* Ikon fitur = stempel karet: lingkaran garis putus-putus miring dengan tinta mawar. */
.tk-feature-icon {
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 2px dashed var(--tk-color-primary);
    border-radius: var(--tk-radius-full);
    color: var(--tk-color-primary);
    transform: rotate(-6deg);
}
.tk-cta {
    background: var(--tk-color-accent);
    color: #FBF6EA;
    border: none;
    border-radius: 0;
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
    /* Sobekan kertas: tepi atas dan bawah bergerigi lewat clip-path, tanpa border. */
    clip-path: polygon(0% 4%, 3% 0%, 8% 5%, 14% 1%, 21% 6%, 28% 2%, 36% 6%, 44% 1%, 52% 5%, 60% 2%, 68% 6%, 76% 1%, 84% 5%, 91% 2%, 96% 6%, 100% 3%, 100% 96%, 97% 100%, 92% 95%, 86% 99%, 79% 94%, 71% 99%, 63% 95%, 55% 100%, 47% 95%, 39% 99%, 31% 94%, 23% 99%, 15% 95%, 9% 100%, 4% 96%, 0% 99%);
}
.tk-cta .tk-h3 { color: #FBF6EA; margin: 0; }
.tk-cta .tk-muted { color: #FBF6EA; opacity: 0.85; }
.tk-cta .tk-btn-primary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: scrapbook flavor ======================================= */
/* Penimpa karakter scrapbook di atas struktur kontrak: menang kaskade karena berada di
   ekor berkas. Di sinilah rasa handmade-nya lahir — kertas kraft bergaris buku tulis,
   tile fitur ditempel washi tape belang, judul hero berupa sobekan kertas bergerigi,
   dan foto dihangatkan sepia seperti cetakan lama. */
body {
    background-image: repeating-linear-gradient(0deg, transparent 0 27px, var(--tk-scrap-line) 27px 28px);
    background-color: var(--tk-color-background);
}
/* Tile fitur = kertas catatan yang ditempel miring dengan washi tape belang di atasnya;
   menegak saat disentuh kursor. */
.tk-feature {
    position: relative;
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-scrap-cut-soft);
    padding: var(--tk-space-lg);
    box-shadow: var(--tk-shadow-sm);
    transition: transform var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-feature:nth-child(odd) { transform: rotate(-1deg); }
.tk-feature:nth-child(even) { transform: rotate(0.8deg); }
.tk-feature:hover { transform: rotate(0deg) translateY(-2px); box-shadow: var(--tk-shadow); }
.tk-feature::before {
    content: '';
    position: absolute;
    top: -12px;
    left: 50%;
    width: 92px;
    height: 24px;
    background: var(--tk-scrap-tape);
    transform: translateX(-50%) rotate(2deg);
    pointer-events: none;
}
/* Judul hero: sobekan kertas bergerigi (clip-path) dengan tulisan tangan di atasnya. */
.tk-hero .tk-display {
    display: inline-block;
    background: var(--tk-color-surface);
    padding: 14px 36px 18px;
    transform: rotate(-1deg);
    clip-path: polygon(0% 12%, 4% 2%, 11% 10%, 19% 0%, 27% 9%, 35% 2%, 44% 10%, 53% 1%, 62% 9%, 70% 3%, 79% 11%, 87% 2%, 94% 9%, 100% 4%, 99% 88%, 95% 98%, 88% 90%, 80% 100%, 72% 91%, 64% 99%, 55% 92%, 46% 100%, 37% 91%, 29% 98%, 21% 90%, 13% 99%, 6% 92%, 0% 97%);
}
/* Foto lama: dihangatkan sepia tipis, tepi kertas, dan sedikit miring. */
.tk-card img, .tk-hero img, figure img {
    border: 6px solid var(--tk-color-surface);
    outline: 1px solid var(--tk-scrap-rule);
    border-radius: 2px;
    box-shadow: var(--tk-shadow-sm);
    filter: sepia(0.18);
}
`;
