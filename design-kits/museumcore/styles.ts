/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const MUSEUMCORE_STYLES = `/* Museumcore — kit design TOKENAI.
   Ruang pamer museum yang dipindahkan ke layar: dinding krem, burgundy tua,
   dan emas antik; huruf Cinzel bergaya pahatan Romawi untuk judul, EB Garamond
   Renaissance untuk teks, dan Anonymous Pro untuk label plakat. Kartu adalah
   lukisan berbingkai — garis rambut emas di dalam pigura, bayangan lampu
   sorot yang lembut, dan gambar yang disepia sampai disorot. Sudutnya hampir
   siku karena bingkai klasik memang tidak membulat; lengkung Renaissance
   disediakan terpisah lewat .tk-arch. Ornamen fleuron memisahkan seksi,
   inisial beriluminasi membuka artikel, dan setiap keterangan ditulis di
   plakat dinding. Kit satu-tema: terang secara bawaan, seperti galeri yang
   memang dirancang untuk cahaya. Kontrak: docs/kontrak-kit-design.md. Semua
   nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #6E1B2E;
    --tk-color-primary-hover: #8C2439;
    --tk-color-primary-contrast: #FBF6EA;
    --tk-color-secondary: #2C4438;
    --tk-color-secondary-hover: #3B5A4A;
    --tk-color-secondary-contrast: #FBF6EA;
    --tk-color-accent: #B08D3F;
    --tk-color-background: #F4EDDD;
    --tk-color-surface: #FBF6EA;
    --tk-color-surface-2: #EBE1CB;
    --tk-color-text: #2A2018;
    --tk-color-text-muted: #7C6C58;
    --tk-color-border: #D6C7A8;
    --tk-color-success: #4E6E4A;
    --tk-color-success-soft: #E3EBDD;
    --tk-color-warning: #A9761C;
    --tk-color-warning-soft: #F5E9CE;
    --tk-color-danger: #8E2323;
    --tk-color-danger-soft: #F2DFDA;
    --tk-color-info: #37536E;
    --tk-color-info-soft: #DFE6EE;

    --tk-font-heading: 'Cinzel', 'Times New Roman', serif;
    --tk-font-body: 'EB Garamond', Georgia, serif;
    --tk-font-mono: 'Anonymous Pro', 'Courier New', monospace;
    --tk-weight-heading: 600;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.18;
    --tk-leading-body: 1.72;

    --tk-text-display: 76px;
    --tk-text-h1: 52px;
    --tk-text-h2: 36px;
    --tk-text-h3: 26px;
    --tk-text-h4: 21px;
    --tk-text-title: 18px;
    --tk-text-body-lg: 19px;
    --tk-text-body: 17px;
    --tk-text-body-sm: 15px;
    --tk-text-caption: 12px;

    --tk-space-xs: 4px;
    --tk-space-sm: 8px;
    --tk-space-md: 16px;
    --tk-space-lg: 24px;
    --tk-space-xl: 32px;
    --tk-space-2xl: 48px;
    --tk-space-3xl: 64px;
    --tk-space-section: 104px;

    --tk-radius-sm: 2px;
    --tk-radius: 3px;
    --tk-radius-lg: 4px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    --tk-shadow-sm: 0 1px 2px rgba(42, 32, 24, 0.07);
    --tk-shadow: 0 2px 4px rgba(42, 32, 24, 0.07), 0 14px 30px rgba(42, 32, 24, 0.1);
    --tk-shadow-lg: 0 4px 10px rgba(42, 32, 24, 0.09), 0 30px 68px rgba(42, 32, 24, 0.17);

    --tk-transition: 260ms cubic-bezier(0.22, 0.68, 0.28, 1);
    --tk-container: 1180px;

    /* Token khas museumcore (bukan kontrak): tingkatan emas antik untuk garis
       rambut pigura, plus gradient sepuhan yang meniru pantulan logam pada
       bingkai berukir. Sengaja terpisah dari --tk-color-accent supaya palet
       penimpa boleh mengecat aksen tanpa mengubah warna emas piguranya. */
    --tk-mc-gold: #B08D3F;
    --tk-mc-gold-pale: #DCC489;
    --tk-mc-gold-deep: #7E611F;
    --tk-mc-gilt: linear-gradient(140deg, #7E611F 0%, #C9A757 22%, #F1E1B0 42%, #B08D3F 58%, #7E611F 78%, #C9A757 100%);
    --tk-mc-hairline: inset 0 0 0 1px rgba(176, 141, 63, 0.42);
}

/* == tk: base =================================================== */
/* Dinding galeri: krem bertekstur damask samar dengan vignette lembut di tepi,
   seolah ruang pamer disinari dari tengah. Keduanya dipasang lewat
   pseudo-element supaya konten tidak perlu markup tambahan. */
body {
    position: relative;
    margin: 0;
    background: var(--tk-color-background);
    color: var(--tk-color-text);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body);
    font-weight: var(--tk-weight-body);
    line-height: var(--tk-leading-body);
    -webkit-font-smoothing: antialiased;
}
body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: 0.5;
    background-image:
        radial-gradient(circle at 50% 50%, rgba(176, 141, 63, 0.15) 0 1.5px, transparent 2px),
        radial-gradient(circle at 50% 50%, rgba(110, 27, 46, 0.08) 0 1px, transparent 1.5px);
    background-size: 46px 46px, 46px 46px;
    background-position: 0 0, 23px 23px;
}
body::after {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background: radial-gradient(120% 90% at 50% 30%, transparent 40%, rgba(42, 32, 24, 0.13) 100%);
}
body > * { position: relative; z-index: 1; }
.tk-container {
    max-width: var(--tk-container);
    margin: 0 auto;
    padding: 0 var(--tk-space-lg);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }
::selection { background: rgba(176, 141, 63, 0.32); color: var(--tk-color-text); }

/* == tk: typography ============================================= */
/* Cinzel adalah huruf pahatan: dia paling benar saat diberi jarak antarhuruf
   dan tidak pernah dipadatkan. Angka display sengaja besar karena judul
   ruang pamer memang dibaca dari seberang ruangan. */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    letter-spacing: 0.015em;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); font-weight: 500; letter-spacing: 0.005em; }
.tk-h1 { font-size: var(--tk-text-h1); font-weight: 500; }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-title); font-weight: 600; letter-spacing: 0.02em; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-family: var(--tk-font-mono); font-size: 11px; color: var(--tk-color-text-muted); letter-spacing: 0.14em; text-transform: uppercase; }
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link {
    color: var(--tk-color-primary);
    text-decoration: none;
    border-bottom: 1px solid var(--tk-mc-gold);
    padding-bottom: 1px;
    transition: color var(--tk-transition), border-color var(--tk-transition);
}
.tk-link:hover { color: var(--tk-color-primary-hover); border-bottom-color: var(--tk-color-primary-hover); }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.84em; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); padding: 1px 6px; border-radius: var(--tk-radius-sm); }

/* == tk: button ================================================= */
/* Tombol adalah papan petunjuk museum: persegi, berhuruf pahatan berjarak
   lebar, dengan garis rambut emas di dalam tepinya. Tidak ada yang memantul —
   perubahan state disampaikan lewat kedalaman warna dan garis emas. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-heading);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    line-height: 1;
    padding: 15px 28px;
    border: 1px solid transparent;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    transition: background var(--tk-transition), color var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); border-color: var(--tk-color-primary); box-shadow: var(--tk-mc-hairline); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); border-color: var(--tk-color-primary-hover); box-shadow: inset 0 0 0 1px var(--tk-mc-gold-pale); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); border-color: var(--tk-color-secondary); box-shadow: var(--tk-mc-hairline); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); border-color: var(--tk-color-secondary-hover); }
.tk-btn-danger { background: var(--tk-color-danger); color: #FBF6EA; border-color: var(--tk-color-danger); box-shadow: var(--tk-mc-hairline); }
.tk-btn-outline { background: transparent; color: var(--tk-color-text); border-color: var(--tk-color-border); }
.tk-btn-outline:hover:not(:disabled) { border-color: var(--tk-mc-gold); color: var(--tk-color-primary); box-shadow: var(--tk-mc-hairline); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-text { background: none; color: var(--tk-color-primary); padding-left: 6px; padding-right: 6px; }
.tk-btn-text:hover:not(:disabled) { color: var(--tk-color-primary-hover); text-decoration: underline; text-underline-offset: 4px; }
.tk-btn:not(:disabled):active { transform: translateY(1px); }
.tk-btn:disabled { opacity: 0.42; cursor: not-allowed; }
.tk-btn-sm { font-size: 11px; letter-spacing: 0.12em; padding: 10px 18px; }
.tk-btn-lg { font-size: 14px; padding: 19px 40px; }
.tk-btn-icon { padding: 13px; }
.tk-btn-sm.tk-btn-icon { padding: 9px; }
.tk-btn-loading { position: relative; color: transparent !important; pointer-events: none; }
.tk-btn-loading::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    border: 1.5px solid currentColor;
    border-color: var(--tk-mc-gold-pale);
    border-top-color: transparent;
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.9s linear infinite;
}
.tk-btn-outline.tk-btn-loading::after, .tk-btn-ghost.tk-btn-loading::after, .tk-btn-text.tk-btn-loading::after {
    border-color: var(--tk-color-primary);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
.tk-field { display: flex; flex-direction: column; gap: 7px; margin-bottom: var(--tk-space-md); }
.tk-label { font-family: var(--tk-font-heading); font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--tk-color-text); }
.tk-help { font-size: var(--tk-text-body-sm); color: var(--tk-color-text-muted); font-style: italic; }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body);
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 11px 14px;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); font-style: italic; }
.tk-input:focus, .tk-textarea:focus { border-color: var(--tk-mc-gold); box-shadow: var(--tk-mc-hairline); }
.tk-textarea { min-height: 104px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-textarea, .tk-field-error .tk-select-trigger { border-color: var(--tk-color-danger); box-shadow: inset 0 0 0 1px rgba(142, 35, 35, 0.35); }
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: inset 0 0 0 1px rgba(78, 110, 74, 0.35); }
.tk-field-success .tk-help { color: var(--tk-color-success); }
/* Seluruh kontrol pilihan digambar sendiri — tidak ada tampilan bawaan browser sama sekali.
   Select tidak memakai <select> native karena popup daftar opsinya tidak bisa digayakan CSS;
   sebagai gantinya listbox custom: .tk-select > .tk-select-trigger + .tk-select-menu.
   Buka/tutup: kelas .tk-select-open (dikelola JS/framework) atau fallback :focus-within. */
.tk-select { position: relative; display: inline-grid; min-width: 210px; }
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
.tk-select-trigger > iconify-icon { color: var(--tk-mc-gold); flex: none; }
.tk-select-placeholder { color: var(--tk-color-text-muted); font-style: italic; }
.tk-select:focus-within > .tk-select-trigger, .tk-select-open > .tk-select-trigger { border-color: var(--tk-mc-gold); box-shadow: var(--tk-mc-hairline); }
.tk-select-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-top: 2px solid var(--tk-mc-gold);
    border-radius: var(--tk-radius-sm);
    box-shadow: var(--tk-shadow);
    padding: 6px;
    max-height: 290px;
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
.tk-option:hover { background: var(--tk-color-surface-2); color: var(--tk-color-primary); }
.tk-option-selected { background: var(--tk-color-surface-2); }
.tk-option-check { margin-left: auto; color: var(--tk-mc-gold); display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 8px 12px;
    margin: 0 0 6px;
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
.tk-select-menu-search input::placeholder { color: var(--tk-color-text-muted); font-style: italic; }
.tk-select-menu-footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-sm) 4px 2px;
    margin-top: var(--tk-space-xs);
    border-top: 1px solid var(--tk-color-border);
}
.tk-check { display: inline-flex; align-items: center; gap: var(--tk-space-sm); font-size: var(--tk-text-body-sm); cursor: pointer; }
.tk-checkbox, .tk-radio {
    appearance: none;
    width: 17px;
    height: 17px;
    flex: none;
    margin: 0;
    position: relative;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition);
}
.tk-checkbox { border-radius: var(--tk-radius-sm); }
.tk-checkbox:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); box-shadow: var(--tk-mc-hairline); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 1px;
    width: 4px;
    height: 9px;
    border-right: 1.5px solid var(--tk-mc-gold-pale);
    border-bottom: 1.5px solid var(--tk-mc-gold-pale);
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked { border-color: var(--tk-color-primary); background: var(--tk-color-primary); box-shadow: inset 0 0 0 3px var(--tk-color-surface); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible { outline: 1px solid var(--tk-mc-gold); outline-offset: 2px; }
.tk-toggle {
    position: relative;
    width: 46px;
    height: 22px;
    flex: none;
    margin: 0;
    appearance: none;
    background: var(--tk-color-surface-2);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition);
}
.tk-toggle::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background: var(--tk-mc-gilt);
    border-radius: var(--tk-radius-full);
    box-shadow: 0 1px 2px rgba(42, 32, 24, 0.3);
    transition: transform var(--tk-transition);
}
.tk-toggle:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); }
.tk-toggle:checked::after { transform: translateX(24px); }

/* == tk: search-filter ========================================== */
.tk-search { position: relative; display: flex; align-items: center; min-width: 230px; }
.tk-search .tk-input { width: 100%; padding-left: 40px; padding-right: 62px; }
.tk-search .tk-input::-webkit-search-cancel-button { -webkit-appearance: none; }
.tk-search-icon { position: absolute; left: 14px; display: inline-flex; color: var(--tk-mc-gold); pointer-events: none; }
.tk-search-kbd {
    position: absolute;
    right: 10px;
    font-family: var(--tk-font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
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
.tk-filter-bar .tk-select { min-width: 172px; }
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
    font-family: var(--tk-font-mono);
    font-size: 10px;
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
    border-top: 2px solid var(--tk-mc-gold);
    border-radius: var(--tk-radius-sm);
    box-shadow: var(--tk-shadow);
    padding: 6px;
    max-height: 290px;
    overflow: auto;
    display: none;
    flex-direction: column;
    z-index: 30;
}
.tk-dropdown-menu-right { left: auto; right: 0; }
.tk-dropdown-menu-up { top: auto; bottom: calc(100% + 6px); }
.tk-dropdown-open > .tk-dropdown-menu, .tk-dropdown:focus-within > .tk-dropdown-menu { display: flex; }
.tk-dropdown-label { padding: 7px 12px 4px; font-family: var(--tk-font-mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--tk-color-text-muted); }
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
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-dropdown-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-primary); }
.tk-dropdown-item iconify-icon { color: var(--tk-mc-gold); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-dropdown-divider { height: 1px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) var(--tk-space-sm); }

/* == tk: card =================================================== */
/* Kartu adalah karya berbingkai: pigura tipis, garis rambut emas di dalam
   tepinya, dan lampu sorot yang menguat saat karya didekati. */
.tk-card {
    position: relative;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-sm), var(--tk-mc-hairline);
    overflow: hidden;
    transition: box-shadow var(--tk-transition), border-color var(--tk-transition), transform var(--tk-transition);
}
.tk-card:hover { transform: translateY(-2px); border-color: var(--tk-mc-gold); box-shadow: var(--tk-shadow), inset 0 0 0 1px rgba(176, 141, 63, 0.6); }
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-md); }
.tk-card-stat .tk-stat-value { font-family: var(--tk-font-heading); font-size: 40px; font-weight: 500; letter-spacing: 0.01em; color: var(--tk-color-primary); }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); }

/* == tk: navigation ============================================= */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-md);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: 1px solid var(--tk-color-border);
    box-shadow: 0 1px 0 rgba(176, 141, 63, 0.3);
    position: relative;
    z-index: 5;
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 600; font-size: 20px; letter-spacing: 0.18em; text-transform: uppercase; margin-right: auto; color: var(--tk-color-text); }
.tk-navbar-link {
    color: var(--tk-color-text);
    text-decoration: none;
    font-family: var(--tk-font-heading);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 9px 14px;
    border-bottom: 1px solid transparent;
    transition: color var(--tk-transition), border-color var(--tk-transition);
}
.tk-navbar-link:hover { color: var(--tk-color-primary); border-bottom-color: var(--tk-mc-gold); }
.tk-navbar-link-active { color: var(--tk-color-primary); border-bottom-color: var(--tk-color-primary); }
.tk-navbar-dark { background: var(--tk-color-text); border-bottom-color: var(--tk-mc-gold-deep); }
.tk-navbar-dark .tk-navbar-brand { color: var(--tk-color-surface); }
.tk-navbar-dark .tk-navbar-link { color: #D9CFBE; }
.tk-navbar-dark .tk-navbar-link:hover, .tk-navbar-dark .tk-navbar-link-active { color: var(--tk-mc-gold-pale); border-bottom-color: var(--tk-mc-gold-pale); }
.tk-sidebar {
    width: 250px;
    background: var(--tk-color-surface);
    border-right: 1px solid var(--tk-color-border);
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
    padding: 10px var(--tk-space-md);
    border-left: 2px solid transparent;
    color: var(--tk-color-text);
    font-size: var(--tk-text-body-sm);
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition), border-color var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-surface-2); border-left-color: var(--tk-mc-gold); }
.tk-sidebar-item-active { background: var(--tk-color-surface-2); border-left-color: var(--tk-color-primary); color: var(--tk-color-primary); }
.tk-sidebar-item-active iconify-icon { color: var(--tk-color-primary); }
.tk-sidebar-item iconify-icon { flex: none; color: var(--tk-color-text-muted); }
.tk-sidebar-collapsed { width: 68px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: 10px; }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
}
.tk-sidebar-group:first-child { padding-top: var(--tk-space-xs); }
.tk-breadcrumb { display: flex; align-items: center; flex-wrap: wrap; gap: var(--tk-space-sm); font-size: var(--tk-text-body-sm); }
.tk-breadcrumb a { color: var(--tk-color-text-muted); text-decoration: none; }
.tk-breadcrumb a:hover { color: var(--tk-color-primary); }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-mc-gold); }
.tk-breadcrumb-current { color: var(--tk-color-text); }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: 1px solid var(--tk-color-border);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: var(--tk-space-lg); border-bottom: 1px solid var(--tk-color-border); width: fit-content; max-width: 100%; overflow-x: auto; }
.tk-tab {
    padding: 12px 2px;
    font-family: var(--tk-font-heading);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    transition: color var(--tk-transition), border-color var(--tk-transition);
    white-space: nowrap;
}
.tk-tab:hover { color: var(--tk-color-text); border-bottom-color: var(--tk-mc-gold); }
.tk-tab-active { color: var(--tk-color-primary); border-bottom-color: var(--tk-color-primary); }
.tk-segmented { display: inline-flex; border: 1px solid var(--tk-color-border); background: var(--tk-color-surface); border-radius: var(--tk-radius-sm); overflow: hidden; }
.tk-segment {
    padding: 9px 18px;
    font-family: var(--tk-font-heading);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-segment + .tk-segment { border-left: 1px solid var(--tk-color-border); }
.tk-segment:hover { color: var(--tk-color-text); background: var(--tk-color-surface-2); }
.tk-segment-active { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: var(--tk-radius-sm);
    border: 1px solid var(--tk-color-border);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text);
}
.tk-badge-success { background: var(--tk-color-success-soft); border-color: var(--tk-color-success); color: var(--tk-color-success); }
.tk-badge-warning { background: var(--tk-color-warning-soft); border-color: var(--tk-color-warning); color: var(--tk-color-warning); }
.tk-badge-danger { background: var(--tk-color-danger-soft); border-color: var(--tk-color-danger); color: var(--tk-color-danger); }
.tk-badge-info { background: var(--tk-color-info-soft); border-color: var(--tk-color-info); color: var(--tk-color-info); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: var(--tk-text-body-sm);
    padding: 5px 12px;
    border-radius: var(--tk-radius-full);
    border: 1px solid var(--tk-mc-gold);
    background: var(--tk-color-surface);
    color: var(--tk-color-text);
}
.tk-chip-remove { border: none; background: none; cursor: pointer; color: var(--tk-color-text-muted); font-size: 15px; line-height: 1; padding: 0; }
.tk-chip-remove:hover { color: var(--tk-color-danger); }

/* == tk: alert ================================================== */
.tk-alert {
    display: flex;
    gap: var(--tk-space-md);
    align-items: flex-start;
    padding: var(--tk-space-md) var(--tk-space-lg);
    border: 1px solid var(--tk-color-border);
    border-left: 3px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    font-size: var(--tk-text-body-sm);
    background: var(--tk-color-surface);
    color: var(--tk-color-text);
}
.tk-alert-title { font-family: var(--tk-font-heading); font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; display: block; margin-bottom: 3px; }
.tk-alert-success { background: var(--tk-color-success-soft); border-color: rgba(78, 110, 74, 0.35); border-left-color: var(--tk-color-success); }
.tk-alert-success iconify-icon { color: var(--tk-color-success); }
.tk-alert-warning { background: var(--tk-color-warning-soft); border-color: rgba(169, 118, 28, 0.35); border-left-color: var(--tk-color-warning); }
.tk-alert-warning iconify-icon { color: var(--tk-color-warning); }
.tk-alert-danger { background: var(--tk-color-danger-soft); border-color: rgba(142, 35, 35, 0.35); border-left-color: var(--tk-color-danger); }
.tk-alert-danger iconify-icon { color: var(--tk-color-danger); }
.tk-alert-info { background: var(--tk-color-info-soft); border-color: rgba(55, 83, 110, 0.35); border-left-color: var(--tk-color-info); }
.tk-alert-info iconify-icon { color: var(--tk-color-info); }

/* == tk: table ================================================== */
/* Tabel adalah katalog koleksi: kepala berhuruf pahatan di atas garis ganda
   emas, badan berjarak lega seperti daftar inventaris yang ditulis rapi. */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); }
.tk-table th {
    text-align: left;
    font-family: var(--tk-font-heading);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
    padding: var(--tk-space-sm) var(--tk-space-md);
    background: transparent;
    border-bottom: 1px solid var(--tk-mc-gold);
    box-shadow: 0 3px 0 -2px var(--tk-color-border);
}
.tk-table td { padding: 14px var(--tk-space-md); border-bottom: 1px solid var(--tk-color-border); }
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
.tk-action-btn:hover { background: var(--tk-color-surface-2); border-color: var(--tk-mc-gold); color: var(--tk-color-primary); }
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
    font-family: var(--tk-font-heading);
    font-size: 13px;
    color: var(--tk-color-text);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), color var(--tk-transition);
}
.tk-page:hover { background: var(--tk-color-surface-2); border-color: var(--tk-color-border); }
.tk-page-active { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); border-color: var(--tk-color-primary); box-shadow: var(--tk-mc-hairline); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(42, 32, 24, 0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-mc-gold);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg), inset 0 0 0 5px var(--tk-color-surface), inset 0 0 0 6px rgba(176, 141, 63, 0.45);
    max-width: 460px;
    width: 100%;
}
.tk-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 370px;
    background: var(--tk-color-surface);
    border-left: 1px solid var(--tk-mc-gold);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 26px;
    height: 26px;
    border: 1.5px solid var(--tk-color-border);
    border-top-color: var(--tk-mc-gold);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.9s linear infinite;
}
.tk-progress { height: 6px; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); overflow: hidden; }
.tk-progress-bar { height: 100%; background: var(--tk-mc-gilt); transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, #F3EADA 50%, var(--tk-color-surface-2) 75%);
    background-size: 200% 100%;
    animation: tk-shimmer 1.6s infinite;
    border-radius: var(--tk-radius-sm);
}
@keyframes tk-shimmer { to { background-position: -200% 0; } }

/* == tk: empty ================================================== */
/* Keadaan kosong adalah pigura kosong di dinding — persis yang dilihat
   pengunjung saat karya sedang dipinjamkan. */
.tk-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-3xl) var(--tk-space-lg);
    text-align: center;
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    background: var(--tk-color-surface);
    box-shadow: var(--tk-mc-hairline);
}
.tk-empty-icon {
    width: 76px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 6px solid transparent;
    border-image: var(--tk-mc-gilt) 1;
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text-muted);
}
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: 500; font-size: var(--tk-text-h3); margin-top: var(--tk-space-sm); }

/* == tk: content-blocks ========================================= */
.tk-hero { position: relative; text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); max-width: var(--tk-container); margin: 0 auto; box-sizing: border-box; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); margin: 0 auto var(--tk-space-xl); max-width: 620px; font-style: italic; }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); flex-wrap: wrap; justify-content: center; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-lg); }
.tk-feature {
    display: flex;
    flex-direction: column;
    gap: var(--tk-space-sm);
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    padding: var(--tk-space-xl) var(--tk-space-lg);
    box-shadow: var(--tk-mc-hairline);
    transition: box-shadow var(--tk-transition), border-color var(--tk-transition);
}
.tk-feature:hover { border-color: var(--tk-mc-gold); box-shadow: var(--tk-shadow), inset 0 0 0 1px rgba(176, 141, 63, 0.6); }
/* Ikon fitur duduk di medali emas — lingkaran bersepuh dengan cakram krem di
   dalamnya, meniru cap segel pada katalog pameran. */
.tk-feature-icon {
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-full);
    background: var(--tk-mc-gilt);
    box-shadow: inset 0 0 0 5px var(--tk-color-surface);
    color: var(--tk-color-primary);
}
.tk-cta {
    position: relative;
    background: var(--tk-color-primary);
    border: 1px solid var(--tk-color-primary);
    border-radius: var(--tk-radius);
    box-shadow: inset 0 0 0 1px var(--tk-color-primary), inset 0 0 0 7px var(--tk-color-primary), inset 0 0 0 8px rgba(220, 196, 137, 0.55);
    color: var(--tk-color-primary-contrast);
    padding: var(--tk-space-3xl) var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
}
.tk-cta .tk-h3, .tk-cta .tk-h2 { margin: 0; color: var(--tk-color-primary-contrast); }
.tk-cta .tk-muted { color: rgba(251, 246, 234, 0.78); }
.tk-cta .tk-btn-primary { background: var(--tk-mc-gilt); color: var(--tk-color-text); border-color: transparent; }
.tk-cta .tk-btn-primary:hover:not(:disabled) { background: var(--tk-mc-gold-pale); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: museumcore flavor ====================================== */
/* Penimpa karakter kit di atas struktur kontrak: menang kaskade karena berada
   di ekor berkas. Tanda tangannya pigura bersepuh, plakat dinding, lengkung
   Renaissance, ornamen fleuron, dan inisial beriluminasi. */
/* Pigura bersepuh: bungkus gambar atau kartu apa pun untuk memasangnya di
   dinding galeri. Paspartu krem di dalam bingkai adalah bagian dari bentuknya. */
.tk-frame {
    display: inline-block;
    padding: 12px;
    background: var(--tk-mc-gilt);
    border-radius: var(--tk-radius-sm);
    box-shadow: var(--tk-shadow), inset 0 0 0 1px rgba(42, 32, 24, 0.32);
}
.tk-frame > * {
    display: block;
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    background: var(--tk-color-surface);
    padding: 10px;
    box-shadow: inset 0 0 0 1px rgba(42, 32, 24, 0.22);
}
.tk-frame img { display: block; width: 100%; height: auto; }
/* Lengkung Renaissance: puncak setengah lingkaran untuk gambar, kartu, atau
   panel — satu-satunya tempat kit ini membiarkan sudut tidak siku. */
.tk-arch { border-radius: 50% 50% var(--tk-radius) var(--tk-radius) / 30% 30% var(--tk-radius) var(--tk-radius); overflow: hidden; }
/* Plakat dinding: keterangan karya. Judul dipahat, detailnya diketik. */
.tk-plaque {
    display: inline-block;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-top: 2px solid var(--tk-mc-gold);
    border-radius: var(--tk-radius-sm);
    box-shadow: var(--tk-shadow-sm);
}
.tk-plaque-title { display: block; font-family: var(--tk-font-heading); font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--tk-color-text); }
.tk-plaque-meta { display: block; margin-top: 4px; font-family: var(--tk-font-mono); font-size: 11px; letter-spacing: 0.08em; color: var(--tk-color-text-muted); }
/* Ornamen fleuron: pemisah seksi bergaris emas dengan belah ketupat di tengah. */
.tk-ornament {
    position: relative;
    height: 1px;
    border: none;
    margin: var(--tk-space-3xl) 0;
    overflow: visible;
    background: linear-gradient(90deg, transparent 0%, var(--tk-mc-gold) 18%, var(--tk-mc-gold) 82%, transparent 100%);
}
.tk-ornament::after {
    content: '\\2726';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0 16px;
    background: var(--tk-color-background);
    color: var(--tk-mc-gold);
    font-size: 14px;
    line-height: 1;
}
/* Inisial beriluminasi: huruf pertama artikel dipahat di kotak bersepuh,
   persis manuskrip Renaissance. */
.tk-initial::first-letter {
    float: left;
    margin: 6px var(--tk-space-md) 0 0;
    padding: 12px 16px;
    font-family: var(--tk-font-heading);
    font-size: 58px;
    font-weight: 600;
    line-height: 0.86;
    color: var(--tk-color-primary);
    background: var(--tk-color-surface-2);
    border: 1px solid var(--tk-mc-gold);
}
/* Sepuhan emas pada teks: hemat, untuk satu-dua kata di judul saja. */
.tk-gild {
    background: var(--tk-mc-gilt);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
/* Kapital berjarak: label kurator di atas judul seksi. */
.tk-caps { font-family: var(--tk-font-heading); font-size: 11px; font-weight: 600; letter-spacing: 0.32em; text-transform: uppercase; color: var(--tk-color-text-muted); }
/* Vitrin: panel berpendar seperti kotak kaca pameran, dengan kilau di puncaknya. */
.tk-vitrine {
    position: relative;
    background: linear-gradient(180deg, rgba(251, 246, 234, 0.95) 0%, var(--tk-color-surface-2) 100%);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow), inset 0 1px 0 rgba(255, 255, 255, 0.9);
    padding: var(--tk-space-xl);
    overflow: hidden;
}
.tk-vitrine::before {
    content: '';
    position: absolute;
    inset: 0 0 auto;
    height: 42%;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 60%);
    pointer-events: none;
}
/* Gambar disepia sampai disorot — cara galeri memisahkan arsip dari karya
   yang sedang diperhatikan pengunjung. */
.tk-card img, .tk-hero img, .tk-vitrine img, figure img {
    filter: sepia(0.34) saturate(0.82) contrast(1.03);
    transition: filter var(--tk-transition);
}
.tk-card:hover img, .tk-hero img:hover, .tk-vitrine:hover img, figure img:hover { filter: none; }
@media (prefers-reduced-motion: reduce) {
    .tk-card, .tk-card:hover { transform: none; }
}
`;
