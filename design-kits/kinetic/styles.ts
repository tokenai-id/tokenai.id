/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const KINETIC_STYLES = `/* Kinetic — kit design TOKENAI.
   Kinetic Typography: tipografi adalah objek utama, dan ia bergerak. Judul
   raksasa memakai font variabel Archivo yang melebar saat disorot
   (animasi sumbu wdth/wght), baris teks meluncur masuk dari sisi bergantian
   saat scroll, headline marquee berjalan tanpa henti dengan kata outline
   berselang-seling, dan tautan digarisbawahi oleh garis yang tumbuh.
   Kanvasnya kertas hangat dengan tinta hitam pekat — seperti lembar type
   specimen — plus aksen indigo elektrik dan jingga untuk kata yang disorot.
   Kit satu-tema: terang secara bawaan tanpa mode gelap — huruf hitam paling
   hidup di atas kertas. Kontrak: docs/kontrak-kit-design.md. Semua nilai
   design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #4B3CFA;
    --tk-color-primary-hover: #3527E0;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: #111013;
    --tk-color-secondary-hover: #2A2830;
    --tk-color-secondary-contrast: #F4F2EC;
    --tk-color-accent: #FF5C33;
    --tk-color-background: #F4F2EC;
    --tk-color-surface: #FFFFFF;
    --tk-color-surface-2: #E9E6DC;
    --tk-color-text: #111013;
    --tk-color-text-muted: #6B6870;
    --tk-color-border: #C9C5B6;
    --tk-color-success: #1F8A4C;
    --tk-color-success-soft: #DFF2E5;
    --tk-color-warning: #B4770B;
    --tk-color-warning-soft: #F7ECD2;
    --tk-color-danger: #D2372E;
    --tk-color-danger-soft: #F9E0DD;
    --tk-color-info: #4B3CFA;
    --tk-color-info-soft: #E4E1FD;

    --tk-font-heading: 'Archivo', system-ui, sans-serif;
    --tk-font-body: 'Archivo', system-ui, sans-serif;
    --tk-font-mono: 'Martian Mono', 'Courier New', monospace;
    --tk-weight-heading: 800;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.02;
    --tk-leading-body: 1.6;

    --tk-text-display: 72px;
    --tk-text-h1: 46px;
    --tk-text-h2: 32px;
    --tk-text-h3: 24px;
    --tk-text-h4: 18px;
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
    --tk-space-section: 104px;

    --tk-radius-sm: 4px;
    --tk-radius: 8px;
    --tk-radius-lg: 16px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    --tk-shadow-sm: 0 2px 6px rgba(17, 16, 19, 0.08);
    --tk-shadow: 0 8px 24px rgba(17, 16, 19, 0.12);
    --tk-shadow-lg: 0 20px 56px rgba(17, 16, 19, 0.18);

    /* Transisi kenyal khas motion type: cepat berangkat, memantul halus tiba. */
    --tk-transition: 350ms cubic-bezier(0.22, 1, 0.36, 1);
    --tk-container: 1200px;

    /* Token khas kinetic (bukan kontrak): pengaturan sumbu font variabel untuk
       keadaan diam dan melebar — dipakai heading, tombol, dan efek hover. */
    --tk-kn-vf-rest: 'wght' 800, 'wdth' 100;
    --tk-kn-vf-wide: 'wght' 900, 'wdth' 125;
    --tk-kn-stroke: 1.5px;
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
::selection { background: var(--tk-color-primary); color: #FFF; }

/* == tk: typography ============================================= */
/* Heading adalah aktor utama: Archivo variabel yang MELEBAR saat disorot —
   sumbu lebar (wdth) dan bobot (wght) dianimasikan, bukan sekadar warna. */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    font-variation-settings: var(--tk-kn-vf-rest);
    line-height: var(--tk-leading-heading);
    letter-spacing: -0.02em;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
    transition: font-variation-settings var(--tk-transition), letter-spacing var(--tk-transition);
}
.tk-display:hover, .tk-h1:hover, .tk-h2:hover {
    font-variation-settings: var(--tk-kn-vf-wide);
    letter-spacing: -0.01em;
}
.tk-display { font-size: var(--tk-text-display); text-transform: uppercase; line-height: 0.96; }
.tk-h1 { font-size: var(--tk-text-h1); text-transform: uppercase; }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-title); font-weight: 700; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-family: var(--tk-font-mono); font-size: 11px; color: var(--tk-color-text-muted); letter-spacing: 0.1em; text-transform: uppercase; }
.tk-muted { color: var(--tk-color-text-muted); }
/* Tautan digarisbawahi garis yang tumbuh dari kiri saat disorot. */
.tk-link {
    color: var(--tk-color-primary);
    font-weight: 700;
    text-decoration: none;
    background-image: linear-gradient(90deg, currentColor, currentColor);
    background-repeat: no-repeat;
    background-size: 0% 2px;
    background-position: 0 100%;
    transition: background-size var(--tk-transition);
}
.tk-link:hover { background-size: 100% 2px; }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.8em; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); padding: 2px 8px; border-radius: var(--tk-radius-sm); }

/* == tk: button ================================================= */
/* Tombol adalah kata yang bergerak: uppercase Archivo, huruf merenggang dan
   font melebar saat disorot — teksnya sendiri yang beranimasi. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-heading);
    font-size: 13px;
    font-weight: 800;
    font-variation-settings: 'wght' 800, 'wdth' 100;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    line-height: 1;
    padding: 14px 24px;
    border: 1px solid transparent;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    transition: letter-spacing var(--tk-transition), font-variation-settings var(--tk-transition), background var(--tk-transition), color var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition), transform var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:hover:not(:disabled) { letter-spacing: 0.12em; font-variation-settings: 'wght' 900, 'wdth' 116; }
.tk-btn:not(:disabled):active { transform: scale(0.97); }
.tk-btn:disabled { opacity: 0.45; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); box-shadow: var(--tk-shadow); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); box-shadow: var(--tk-shadow); }
.tk-btn-danger { background: var(--tk-color-danger); color: #FFF; }
.tk-btn-outline { background: transparent; border-color: var(--tk-color-text); color: var(--tk-color-text); }
.tk-btn-outline:hover:not(:disabled) { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: rgba(17, 16, 19, 0.07); }
.tk-btn-text { background: none; color: var(--tk-color-primary); padding-left: 6px; padding-right: 6px; }
.tk-btn-sm { font-size: 12px; padding: 10px 16px; }
.tk-btn-lg { font-size: 15px; padding: 18px 34px; }
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
.tk-label { font-family: var(--tk-font-mono); font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--tk-color-text); }
.tk-help { font-size: 13px; color: var(--tk-color-text-muted); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 12px 14px;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); opacity: 0.7; }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-primary);
    box-shadow: 0 0 0 3px rgba(75, 60, 250, 0.18);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: 0 0 0 3px rgba(210, 55, 46, 0.15);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: 0 0 0 3px rgba(31, 138, 76, 0.15); }
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
    box-shadow: 0 0 0 3px rgba(75, 60, 250, 0.18);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 8px);
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
    transition: background var(--tk-transition), padding-left var(--tk-transition);
}
.tk-option:hover { background: var(--tk-color-surface-2); padding-left: 16px; }
.tk-option-selected { background: var(--tk-color-info-soft); color: var(--tk-color-primary); font-weight: 700; }
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
.tk-select-menu-search input::placeholder { color: var(--tk-color-text-muted); }
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
    width: 19px;
    height: 19px;
    flex: none;
    margin: 0;
    position: relative;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-text);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-checkbox { border-radius: var(--tk-radius-sm); }
.tk-checkbox:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); }
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
.tk-radio:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); box-shadow: inset 0 0 0 4px var(--tk-color-surface); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(75, 60, 250, 0.25);
}
.tk-toggle { position: relative; width: 46px; height: 25px; flex: none; margin: 0; appearance: none; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-text); border-radius: var(--tk-radius-full); cursor: pointer; transition: background var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 19px; height: 19px; background: var(--tk-color-text); border-radius: var(--tk-radius-full); transition: transform var(--tk-transition), background var(--tk-transition); }
.tk-toggle:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); }
.tk-toggle:checked::after { transform: translateX(21px); background: #FFF; }

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
    min-width: 19px;
    height: 19px;
    padding: 0 5px;
    border-radius: var(--tk-radius-full);
    background: var(--tk-color-primary);
    color: #FFF;
    font-size: 11px;
    font-weight: 800;
}
.tk-filter-active { display: flex; flex-wrap: wrap; align-items: center; gap: var(--tk-space-sm); margin-top: var(--tk-space-sm); }

/* == tk: dropdown =============================================== */
.tk-dropdown { position: relative; display: inline-block; }
.tk-dropdown-menu {
    position: absolute;
    top: calc(100% + 8px);
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
.tk-dropdown-menu-up { top: auto; bottom: calc(100% + 8px); }
.tk-dropdown-open > .tk-dropdown-menu, .tk-dropdown:focus-within > .tk-dropdown-menu { display: flex; }
.tk-dropdown-label { padding: 6px 12px; font-family: var(--tk-font-mono); font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--tk-color-text-muted); }
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
    transition: background var(--tk-transition), padding-left var(--tk-transition);
}
.tk-dropdown-item:hover { background: var(--tk-color-surface-2); padding-left: 16px; }
.tk-dropdown-item iconify-icon { color: var(--tk-color-text-muted); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: var(--tk-color-danger-soft); }
.tk-dropdown-divider { height: 1px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) var(--tk-space-sm); }

/* == tk: card =================================================== */
/* Kartu adalah kolom teks: putih bersih bergaris tinta; saat disorot, judul di
   dalamnya ikut melebar — kartunya diam, hurufnya yang bergerak. */
.tk-card {
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-sm);
    overflow: hidden;
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), border-color var(--tk-transition);
}
.tk-card:hover { transform: translateY(-3px); box-shadow: var(--tk-shadow); border-color: var(--tk-color-text); }
.tk-card:hover .tk-title { font-variation-settings: 'wght' 900, 'wdth' 120; }
.tk-card .tk-title { transition: font-variation-settings var(--tk-transition); font-variation-settings: 'wght' 700, 'wdth' 100; }
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-md); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-family: var(--tk-font-heading); font-weight: 800; font-variation-settings: 'wght' 800, 'wdth' 110; color: var(--tk-color-text); }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 700; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 700; }

/* == tk: navigation ============================================= */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: rgba(244, 242, 236, 0.9);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--tk-color-text);
    position: relative;
    z-index: 5;
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 900; font-variation-settings: 'wght' 900, 'wdth' 118; font-size: 19px; text-transform: uppercase; margin-right: auto; color: var(--tk-color-text); }
.tk-navbar-link {
    color: var(--tk-color-text);
    text-decoration: none;
    font-family: var(--tk-font-heading);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding: 7px 12px;
    border-radius: var(--tk-radius-sm);
    background-image: linear-gradient(90deg, currentColor, currentColor);
    background-repeat: no-repeat;
    background-size: 0% 2px;
    background-position: 12px calc(100% - 4px);
    transition: background-size var(--tk-transition), color var(--tk-transition);
}
.tk-navbar-link:hover { background-size: calc(100% - 24px) 2px; }
.tk-navbar-link-active { color: #FFF; background-color: var(--tk-color-text); background-size: 0 0; }
.tk-navbar-dark { background: var(--tk-color-secondary); border-bottom-color: var(--tk-color-secondary); }
.tk-navbar-dark .tk-navbar-brand { color: var(--tk-color-secondary-contrast); }
.tk-navbar-dark .tk-navbar-link { color: rgba(244, 242, 236, 0.7); }
.tk-navbar-dark .tk-navbar-link:hover { color: #FFF; }
.tk-navbar-dark .tk-navbar-link-active { color: var(--tk-color-secondary); background-color: var(--tk-color-secondary-contrast); }
.tk-sidebar {
    width: 250px;
    background: var(--tk-color-surface);
    border-right: 1px solid var(--tk-color-border);
    padding: var(--tk-space-md);
    display: flex;
    flex-direction: column;
    gap: 3px;
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
    font-weight: 700;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition), padding-left var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); padding-left: 20px; }
.tk-sidebar-item-active { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-sidebar-item-active:hover { padding-left: var(--tk-space-md); color: var(--tk-color-background); background: var(--tk-color-text); }
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 66px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.14em;
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
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.6; }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 700; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: rgba(244, 242, 236, 0.9);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--tk-color-text);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: 4px; border-bottom: 1px solid var(--tk-color-text); width: fit-content; max-width: 100%; overflow-x: auto; }
.tk-tab {
    padding: 10px 18px;
    font-family: var(--tk-font-heading);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 3px solid transparent;
    margin-bottom: -1px;
    transition: color var(--tk-transition), border-color var(--tk-transition), letter-spacing var(--tk-transition);
    white-space: nowrap;
}
.tk-tab:hover { color: var(--tk-color-text); letter-spacing: 0.09em; }
.tk-tab-active { color: var(--tk-color-primary); border-bottom-color: var(--tk-color-primary); }
.tk-segmented { display: inline-flex; border: 1px solid var(--tk-color-text); background: var(--tk-color-surface); border-radius: var(--tk-radius-sm); padding: 3px; gap: 2px; }
.tk-segment {
    padding: 7px 16px;
    font-family: var(--tk-font-heading);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: 2px;
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
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: var(--tk-radius-sm);
    border: 1px solid var(--tk-color-border);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text);
}
.tk-badge-success { color: var(--tk-color-success); background: var(--tk-color-success-soft); border-color: rgba(31, 138, 76, 0.35); }
.tk-badge-warning { color: var(--tk-color-warning); background: var(--tk-color-warning-soft); border-color: rgba(180, 119, 11, 0.35); }
.tk-badge-danger { color: var(--tk-color-danger); background: var(--tk-color-danger-soft); border-color: rgba(210, 55, 46, 0.35); }
.tk-badge-info { color: var(--tk-color-primary); background: var(--tk-color-info-soft); border-color: rgba(75, 60, 250, 0.35); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 12px;
    font-weight: 700;
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
    border-left-width: 4px;
    border-radius: var(--tk-radius);
    font-size: var(--tk-text-body-sm);
    background: var(--tk-color-surface);
}
.tk-alert-title { font-weight: 800; display: block; margin-bottom: 2px; }
.tk-alert-success { background: var(--tk-color-success-soft); border-color: var(--tk-color-success); color: #14532D; }
.tk-alert-warning { background: var(--tk-color-warning-soft); border-color: var(--tk-color-warning); color: #713F12; }
.tk-alert-danger { background: var(--tk-color-danger-soft); border-color: var(--tk-color-danger); color: #7F1D1D; }
.tk-alert-info { background: var(--tk-color-info-soft); border-color: var(--tk-color-info); color: #2A1FA8; }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); }
.tk-table th {
    text-align: left;
    font-family: var(--tk-font-mono);
    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--tk-color-text-muted);
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-bottom: 1px solid var(--tk-color-text);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: 1px solid var(--tk-color-border); }
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
    font-weight: 700;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-page:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-page-active { background: var(--tk-color-text); color: var(--tk-color-background); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(17, 16, 19, 0.55);
    backdrop-filter: blur(4px);
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
    border: 3px solid var(--tk-color-surface-2);
    border-top-color: var(--tk-color-primary);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.8s linear infinite;
}
.tk-progress { height: 10px; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-text); border-radius: var(--tk-radius-sm); overflow: hidden; }
.tk-progress-bar {
    height: 100%;
    background: repeating-linear-gradient(-45deg, var(--tk-color-primary) 0 10px, #6E62FB 10px 20px);
    transition: width var(--tk-transition);
}
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, #DDD9CC 50%, var(--tk-color-surface-2) 75%);
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
    border: 1px dashed var(--tk-color-text);
    border-radius: var(--tk-radius-lg);
    background: var(--tk-color-surface);
}
.tk-empty-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--tk-color-text);
    border-radius: var(--tk-radius);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text);
}
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: 800; font-size: var(--tk-text-h4); text-transform: uppercase; }

/* == tk: content-blocks ========================================= */
/* Hero adalah panggung huruf: judul raksasa uppercase yang berbaris masuk
   baris demi baris, dengan garis kicker mono di atasnya. Elemen dekoratifnya
   adalah tipografi itu sendiri — tidak ada ilustrasi. */
.tk-hero { position: relative; text-align: left; padding: var(--tk-space-section) var(--tk-space-lg); max-width: var(--tk-container); margin: 0 auto; box-sizing: border-box; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); animation: tk-line-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); margin: 0 0 var(--tk-space-xl); max-width: 560px; animation: tk-line-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.12s both; }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); flex-wrap: wrap; animation: tk-line-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.24s both; }
@keyframes tk-line-up {
    from { opacity: 0; transform: translateY(32px) skewY(1.5deg); }
    to { opacity: 1; transform: translateY(0) skewY(0); }
}
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-lg); }
.tk-feature {
    display: flex;
    flex-direction: column;
    gap: var(--tk-space-sm);
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-sm);
    padding: var(--tk-space-lg);
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), border-color var(--tk-transition);
}
.tk-feature:hover { transform: translateY(-4px); box-shadow: var(--tk-shadow); border-color: var(--tk-color-text); }
.tk-feature:hover .tk-title { font-variation-settings: 'wght' 900, 'wdth' 120; }
.tk-feature .tk-title { transition: font-variation-settings var(--tk-transition); font-variation-settings: 'wght' 700, 'wdth' 100; text-transform: uppercase; }
.tk-feature-icon {
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-sm);
    background: var(--tk-color-info-soft);
    border: 1px solid var(--tk-color-primary);
    color: var(--tk-color-primary);
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
.tk-cta .tk-h3 { margin: 0; color: var(--tk-color-secondary-contrast); text-transform: uppercase; }
.tk-cta .tk-muted { color: rgba(244, 242, 236, 0.65); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: kinetic flavor ========================================= */
/* Penimpa karakter kinetic di atas struktur kontrak: menang kaskade karena
   berada di ekor berkas. Tanda tangan kit ini adalah huruf yang bergerak —
   marquee headline, teks outline, baris yang meluncur saat scroll, dan
   heading yang melebar mengikuti sorotan. */
/* Teks outline: huruf berongga bergaris tinta — isi muncul saat disorot. */
.tk-outline-text {
    color: transparent;
    -webkit-text-stroke: var(--tk-kn-stroke) var(--tk-color-text);
    transition: color var(--tk-transition);
}
.tk-outline-text:hover { color: var(--tk-color-text); }
.tk-outline-text-primary { -webkit-text-stroke-color: var(--tk-color-primary); }
.tk-outline-text-primary:hover { color: var(--tk-color-primary); }
/* Marquee headline: baris display raksasa yang berjalan tanpa henti;
   pasangkan dua .tk-type-marquee-track identik di dalamnya. */
.tk-type-marquee {
    display: flex;
    overflow: hidden;
    border-top: 1px solid var(--tk-color-text);
    border-bottom: 1px solid var(--tk-color-text);
    background: var(--tk-color-surface);
    user-select: none;
}
.tk-type-marquee-track {
    display: flex;
    flex: none;
    align-items: baseline;
    gap: 0.6em;
    padding: 12px 0.3em;
    font-family: var(--tk-font-heading);
    font-size: clamp(40px, 7vw, 88px);
    font-weight: 900;
    font-variation-settings: 'wght' 900, 'wdth' 112;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: -0.01em;
    color: var(--tk-color-text);
    white-space: nowrap;
    animation: tk-type-marquee 22s linear infinite;
}
.tk-type-marquee:hover .tk-type-marquee-track { animation-play-state: paused; }
.tk-type-marquee-track em { font-style: normal; color: var(--tk-color-accent); }
.tk-type-marquee-track .tk-outline-text { -webkit-text-stroke-color: var(--tk-color-primary); }
@keyframes tk-type-marquee { to { transform: translateX(-100%); } }
/* Baris kinetik: teks meluncur masuk dari sisi saat digulir ke viewport —
   murni CSS (animation-timeline), browser lama menampilkan normal. */
@supports (animation-timeline: view()) {
    .tk-kinetic-line {
        animation: tk-slide-l 1s cubic-bezier(0.22, 1, 0.36, 1) both;
        animation-timeline: view();
        animation-range: entry 0% entry 50%;
    }
    .tk-kinetic-line-alt {
        animation-name: tk-slide-r;
    }
}
@keyframes tk-slide-l {
    from { opacity: 0; transform: translateX(-64px); }
    to { opacity: 1; transform: translateX(0); }
}
@keyframes tk-slide-r {
    from { opacity: 0; transform: translateX(64px); }
    to { opacity: 1; transform: translateX(0); }
}
/* Kata bergoyang: setiap huruf dibungkus <i> dengan --i berurutan
   (0,1,2,...) lalu menari naik-turun bergantian — untuk logo/aksen kecil. */
.tk-wave-text { display: inline-flex; }
.tk-wave-text i {
    font-style: normal;
    animation: tk-wave 1.6s ease-in-out calc(var(--i, 0) * -0.12s) infinite alternate;
}
@keyframes tk-wave { from { transform: translateY(0.06em); } to { transform: translateY(-0.06em); } }
/* Kicker mono dengan garis tumbuh — penanda seksi type-specimen. */
.tk-kicker {
    display: flex;
    align-items: center;
    gap: var(--tk-space-md);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--tk-color-primary);
}
.tk-kicker::after { content: ''; height: 1px; width: 64px; background: var(--tk-color-text); }
/* Foto dicetak seperti spesimen: bingkai tinta dan caption menempel. */
.tk-card img, .tk-hero img, figure img {
    border: 1px solid var(--tk-color-text);
    border-radius: var(--tk-radius);
    box-sizing: border-box;
}
`;
