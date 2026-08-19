/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const CLAY_STYLES = `/* Clay — kit design TOKENAI.
   Claymorphism: kartu dan objek terlihat seperti tanah liat atau plastik lembut
   yang bisa dipencet — gembur, bulat, 3D, dan playful. Resep reliefnya satu dan
   dipakai di mana-mana: bayangan luar berwarna + inset terang di bibir atas +
   inset gelap di perut bawah. Palet permen: lavender (#6C5CE7), pink (#F97AA6),
   kuning (#FFC75F) di atas lila pucat. Tipografi bulat Baloo 2 + Quicksand.
   Kit satu-tema: terang secara bawaan, tanpa mode gelap — clay dipajang di rak
   yang terang. Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal
   di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #6C5CE7;
    --tk-color-primary-hover: #5A4BD1;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: #F97AA6;
    --tk-color-secondary-hover: #FA8FB4;
    --tk-color-secondary-contrast: #FFFFFF;
    --tk-color-accent: #FFC75F;
    --tk-color-background: #F2EFFB;
    --tk-color-surface: #FBFAFF;
    --tk-color-surface-2: #E9E4F6;
    --tk-color-text: #3A3555;
    --tk-color-text-muted: #7A7593;
    --tk-color-border: #E2DCF2;
    --tk-color-success: #3FB77E;
    --tk-color-success-soft: #DFF5EA;
    --tk-color-warning: #E8A13C;
    --tk-color-warning-soft: #FBEEDA;
    --tk-color-danger: #F06A5D;
    --tk-color-danger-soft: #FDE3E0;
    --tk-color-info: #5AA7E8;
    --tk-color-info-soft: #E1EFFB;

    --tk-font-heading: 'Baloo 2', 'Comic Sans MS', cursive;
    --tk-font-body: 'Quicksand', system-ui, sans-serif;
    --tk-font-mono: 'Red Hat Mono', 'Courier New', monospace;
    --tk-weight-heading: 700;
    --tk-weight-body: 500;
    --tk-leading-heading: 1.15;
    --tk-leading-body: 1.6;

    --tk-text-display: 52px;
    --tk-text-h1: 38px;
    --tk-text-h2: 29px;
    --tk-text-h3: 22px;
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
    --tk-space-section: 96px;

    --tk-radius-sm: 16px;
    --tk-radius: 22px;
    --tk-radius-lg: 30px;
    --tk-radius-full: 999px;

    --tk-border-width: 0px;
    --tk-shadow-sm: 0 6px 14px rgba(108, 92, 231, 0.14), inset 0 -4px 8px rgba(163, 152, 222, 0.14), inset 0 4px 8px rgba(255, 255, 255, 0.85);
    --tk-shadow: 0 14px 30px rgba(108, 92, 231, 0.18), inset 0 -8px 14px rgba(163, 152, 222, 0.18), inset 0 8px 14px rgba(255, 255, 255, 0.9);
    --tk-shadow-lg: 0 24px 52px rgba(108, 92, 231, 0.26), inset 0 -10px 18px rgba(163, 152, 222, 0.2), inset 0 10px 18px rgba(255, 255, 255, 0.95);

    --tk-transition: 180ms cubic-bezier(0.34, 1.56, 0.64, 1);
    --tk-container: 1200px;

    /* Token khas clay (bukan kontrak): relief pencet untuk permukaan yang
       tenggelam (input, track) dan resep relief untuk clay berwarna pekat. */
    --tk-cl-pressed: inset 0 5px 10px rgba(122, 106, 205, 0.22), inset 0 -4px 8px rgba(255, 255, 255, 0.9);
    --tk-cl-pop-primary: 0 10px 20px rgba(108, 92, 231, 0.4), inset 0 -6px 10px rgba(38, 24, 130, 0.3), inset 0 6px 10px rgba(255, 255, 255, 0.38);
    --tk-cl-pop-pink: 0 10px 20px rgba(249, 122, 166, 0.4), inset 0 -6px 10px rgba(170, 40, 86, 0.28), inset 0 6px 10px rgba(255, 255, 255, 0.42);
    --tk-cl-pop-yellow: 0 10px 20px rgba(255, 199, 95, 0.45), inset 0 -6px 10px rgba(176, 116, 12, 0.26), inset 0 6px 10px rgba(255, 255, 255, 0.5);
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
/* Semburat permen sangat lembut di sudut halaman — meja mainan, tanpa
   menghalangi klik. */
body::after {
    content: '';
    position: fixed;
    inset: 0;
    background:
        radial-gradient(40% 34% at -2% -4%, rgba(249, 122, 166, 0.10) 0%, transparent 100%),
        radial-gradient(42% 38% at 102% 104%, rgba(255, 199, 95, 0.12) 0%, transparent 100%);
    pointer-events: none;
    z-index: -1;
}
.tk-container {
    max-width: var(--tk-container);
    margin: 0 auto;
    padding: 0 var(--tk-space-lg);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }
::selection { background: rgba(108, 92, 231, 0.3); }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    letter-spacing: 0;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); line-height: 1.06; font-weight: 800; }
.tk-h1 { font-size: var(--tk-text-h1); }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-title); font-weight: 700; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); font-weight: 600; letter-spacing: 0.02em; }
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link { color: var(--tk-color-primary); font-weight: 700; text-decoration: underline; text-decoration-color: rgba(108, 92, 231, 0.35); text-decoration-thickness: 2.5px; text-underline-offset: 3px; transition: text-decoration-color var(--tk-transition); }
.tk-link:hover { text-decoration-color: var(--tk-color-primary); }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.85em; background: var(--tk-color-surface-2); padding: 2px 9px; border-radius: var(--tk-radius-full); box-shadow: var(--tk-cl-pressed); }

/* == tk: button ================================================= */
/* Tombol clay: gumpalan plastik lembut yang bisa dipencet — relief pop saat
   diam, membal naik saat disentuh, penyok masuk saat ditekan. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-heading);
    font-size: 15px;
    font-weight: 700;
    line-height: 1;
    padding: 14px 26px;
    border: none;
    border-radius: var(--tk-radius);
    cursor: pointer;
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), background var(--tk-transition), color var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:not(:disabled):active { transform: translateY(3px) scale(0.97); box-shadow: var(--tk-cl-pressed) !important; }
.tk-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); box-shadow: var(--tk-cl-pop-primary); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); transform: translateY(-2px) scale(1.02); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); box-shadow: var(--tk-cl-pop-pink); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); transform: translateY(-2px) scale(1.02); }
.tk-btn-danger { background: var(--tk-color-danger); color: #FFF; box-shadow: 0 10px 20px rgba(240, 106, 93, 0.4), inset 0 -6px 10px rgba(150, 40, 30, 0.28), inset 0 6px 10px rgba(255, 255, 255, 0.4); }
.tk-btn-danger:hover:not(:disabled) { transform: translateY(-2px) scale(1.02); }
.tk-btn-outline { background: var(--tk-color-surface); color: var(--tk-color-primary); box-shadow: var(--tk-shadow-sm); }
.tk-btn-outline:hover:not(:disabled) { transform: translateY(-2px) scale(1.02); box-shadow: var(--tk-shadow); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-text { background: none; color: var(--tk-color-primary); padding-left: 6px; padding-right: 6px; }
.tk-btn-text:hover:not(:disabled) { text-decoration: underline; text-decoration-thickness: 2.5px; text-underline-offset: 3px; }
.tk-btn-sm { font-size: 13px; padding: 10px 18px; border-radius: var(--tk-radius-sm); }
.tk-btn-lg { font-size: 17px; padding: 18px 36px; border-radius: var(--tk-radius-lg); }
.tk-btn-icon { padding: 13px; }
.tk-btn-loading { position: relative; color: transparent !important; pointer-events: none; }
.tk-btn-loading::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    border: 2.5px solid var(--tk-color-primary-contrast);
    border-top-color: transparent;
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.8s linear infinite;
}
.tk-btn-secondary.tk-btn-loading::after { border-color: var(--tk-color-secondary-contrast); border-top-color: transparent; }
.tk-btn-outline.tk-btn-loading::after, .tk-btn-ghost.tk-btn-loading::after {
    border-color: var(--tk-color-primary);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
.tk-field { display: flex; flex-direction: column; gap: var(--tk-space-xs); margin-bottom: var(--tk-space-md); }
.tk-label { font-size: 13px; font-weight: 700; color: var(--tk-color-text); }
.tk-help { font-size: 13px; color: var(--tk-color-text-muted); }
/* Input dipencet ke dalam clay: relief inset, bukan garis border. */
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: none;
    border-radius: var(--tk-radius-sm);
    padding: 13px 16px;
    box-shadow: var(--tk-cl-pressed);
    transition: box-shadow var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    box-shadow: var(--tk-cl-pressed), 0 0 0 4px rgba(108, 92, 231, 0.25);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    box-shadow: var(--tk-cl-pressed), 0 0 0 4px rgba(240, 106, 93, 0.3);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { box-shadow: var(--tk-cl-pressed), 0 0 0 4px rgba(63, 183, 126, 0.28); }
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
    box-shadow: var(--tk-cl-pressed), 0 0 0 4px rgba(108, 92, 231, 0.25);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: none;
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
    padding: 10px 14px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    text-align: left;
    transition: background var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-option:hover { background: var(--tk-color-surface-2); }
.tk-option-selected { background: var(--tk-color-primary); color: #FFF; font-weight: 700; box-shadow: var(--tk-cl-pop-primary); }
.tk-option-check { margin-left: auto; color: #FFF; display: inline-flex; }
.tk-option:not(.tk-option-selected) .tk-option-check { color: var(--tk-color-primary); }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 14px;
    margin: calc(-1 * var(--tk-space-sm) + 2px) 2px var(--tk-space-sm);
    border-radius: var(--tk-radius-sm);
    box-shadow: var(--tk-cl-pressed);
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
    font-weight: 600;
    color: var(--tk-color-text);
}
.tk-select-menu-search input::placeholder { color: var(--tk-color-text-muted); }
.tk-select-menu-footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-sm) 6px 2px;
    margin-top: var(--tk-space-xs);
    border-top: 2px solid var(--tk-color-surface-2);
}
.tk-check { display: inline-flex; align-items: center; gap: var(--tk-space-sm); font-size: var(--tk-text-body-sm); font-weight: 600; cursor: pointer; }
/* Checkbox dan radio: bola clay mini — inset saat kosong, pop saat terisi. */
.tk-checkbox, .tk-radio {
    appearance: none;
    width: 22px;
    height: 22px;
    flex: none;
    margin: 0;
    position: relative;
    background: var(--tk-color-surface);
    border: none;
    box-shadow: var(--tk-cl-pressed);
    cursor: pointer;
    transition: background var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-checkbox { border-radius: 8px; }
.tk-checkbox:checked { background: var(--tk-color-primary); box-shadow: var(--tk-cl-pop-primary); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border-right: 2.5px solid #FFF;
    border-bottom: 2.5px solid #FFF;
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked { background: var(--tk-color-primary); box-shadow: var(--tk-cl-pop-primary), inset 0 0 0 5px rgba(255, 255, 255, 0.95); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: var(--tk-cl-pressed), 0 0 0 4px rgba(108, 92, 231, 0.25);
}
.tk-toggle { position: relative; width: 50px; height: 28px; flex: none; margin: 0; appearance: none; background: var(--tk-color-surface-2); border: none; border-radius: var(--tk-radius-full); box-shadow: var(--tk-cl-pressed); cursor: pointer; transition: background var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 3px; left: 3px; width: 22px; height: 22px; background: #FFF; border-radius: var(--tk-radius-full); box-shadow: 0 3px 8px rgba(108, 92, 231, 0.35), inset 0 -3px 5px rgba(163, 152, 222, 0.3), inset 0 3px 5px rgba(255, 255, 255, 1); transition: transform var(--tk-transition); }
.tk-toggle:checked { background: var(--tk-color-primary); }
.tk-toggle:checked::after { transform: translateX(22px); }

/* == tk: search-filter ========================================== */
.tk-search { position: relative; display: flex; align-items: center; min-width: 220px; }
.tk-search .tk-input { width: 100%; padding-left: 42px; padding-right: 64px; border-radius: var(--tk-radius-full); }
.tk-search .tk-input::-webkit-search-cancel-button { -webkit-appearance: none; }
.tk-search-icon { position: absolute; left: 15px; display: inline-flex; color: var(--tk-color-text-muted); pointer-events: none; }
.tk-search-kbd {
    position: absolute;
    right: 12px;
    font-family: var(--tk-font-mono);
    font-size: 11px;
    color: var(--tk-color-text-muted);
    background: var(--tk-color-surface-2);
    border-radius: var(--tk-radius-full);
    padding: 3px 9px;
    pointer-events: none;
}
.tk-filter-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-md);
    background: var(--tk-color-surface);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-sm);
}
.tk-filter-bar .tk-search { flex: 1; }
.tk-filter-bar .tk-select { min-width: 170px; }
.tk-filter-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 21px;
    height: 21px;
    padding: 0 6px;
    border-radius: var(--tk-radius-full);
    background: var(--tk-color-secondary);
    color: #FFF;
    font-size: 11px;
    font-weight: 800;
    box-shadow: var(--tk-cl-pop-pink);
}
.tk-filter-active { display: flex; flex-wrap: wrap; align-items: center; gap: var(--tk-space-sm); margin-top: var(--tk-space-sm); }

/* == tk: dropdown =============================================== */
.tk-dropdown { position: relative; display: inline-block; }
.tk-dropdown-menu {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: none;
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
.tk-dropdown-menu-up { top: auto; bottom: calc(100% + 10px); }
.tk-dropdown-open > .tk-dropdown-menu, .tk-dropdown:focus-within > .tk-dropdown-menu { display: flex; }
.tk-dropdown-label { padding: 6px 14px; font-size: 11px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: var(--tk-color-text-muted); }
.tk-dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 10px 14px;
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
.tk-dropdown-item:hover { background: var(--tk-color-surface-2); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-text-muted); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: var(--tk-color-danger-soft); }
.tk-dropdown-divider { height: 2px; background: var(--tk-color-surface-2); border: none; border-radius: var(--tk-radius-full); margin: var(--tk-space-xs) var(--tk-space-sm); }

/* == tk: card =================================================== */
/* Kartu clay: gumpalan plastik lembut — bayangan luar berwarna lavender, bibir
   atas menangkap cahaya, perut bawah menggelap. Membal naik saat disentuh. */
.tk-card {
    background: var(--tk-color-surface);
    border: none;
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow);
    overflow: hidden;
    transition: box-shadow var(--tk-transition), transform var(--tk-transition);
}
.tk-card:hover { box-shadow: var(--tk-shadow-lg); transform: translateY(-4px); }
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-md); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-family: var(--tk-font-heading); font-weight: 800; color: var(--tk-color-text); }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 700; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 700; }

/* == tk: navigation ============================================= */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: none;
    box-shadow: 0 10px 26px rgba(108, 92, 231, 0.12);
    position: relative;
    z-index: 5;
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 800; font-size: 20px; margin-right: auto; color: var(--tk-color-text); }
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: 14px; font-weight: 700; padding: 7px 16px; border-radius: var(--tk-radius-full); transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition); }
.tk-navbar-link:hover { color: var(--tk-color-text); background: var(--tk-color-surface-2); }
.tk-navbar-link-active { color: #FFF; background: var(--tk-color-primary); box-shadow: var(--tk-cl-pop-primary); }
.tk-navbar-dark { background: var(--tk-color-text); box-shadow: 0 10px 26px rgba(58, 53, 85, 0.3); }
.tk-navbar-dark .tk-navbar-brand { color: #FFF; }
.tk-navbar-dark .tk-navbar-link { color: rgba(255, 255, 255, 0.65); }
.tk-navbar-dark .tk-navbar-link:hover { color: #FFF; background: rgba(255, 255, 255, 0.12); }
.tk-navbar-dark .tk-navbar-link-active { color: #FFF; background: var(--tk-color-primary); }
.tk-sidebar {
    width: 250px;
    background: var(--tk-color-surface);
    border-right: none;
    box-shadow: 10px 0 26px rgba(108, 92, 231, 0.08);
    padding: var(--tk-space-md);
    display: flex;
    flex-direction: column;
    gap: 4px;
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
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition), transform var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-sidebar-item-active { background: var(--tk-color-primary); color: #FFF; box-shadow: var(--tk-cl-pop-primary); }
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 68px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.07em;
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
.tk-breadcrumb a:hover { color: var(--tk-color-primary); }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.6; }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 700; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    box-shadow: 0 10px 26px rgba(108, 92, 231, 0.12);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: var(--tk-space-sm); border-bottom: none; background: var(--tk-color-surface-2); border-radius: var(--tk-radius-full); padding: 5px; box-shadow: var(--tk-cl-pressed); width: fit-content; max-width: 100%; overflow-x: auto; }
.tk-tab {
    padding: 9px 20px;
    font-size: 14px;
    font-weight: 700;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-radius: var(--tk-radius-full);
    transition: color var(--tk-transition), background var(--tk-transition), box-shadow var(--tk-transition);
    white-space: nowrap;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: #FFF; background: var(--tk-color-primary); box-shadow: var(--tk-cl-pop-primary); }
.tk-segmented { display: inline-flex; background: var(--tk-color-surface-2); border-radius: var(--tk-radius-full); padding: 5px; gap: 2px; box-shadow: var(--tk-cl-pressed); }
.tk-segment {
    padding: 8px 18px;
    font-family: var(--tk-font-body);
    font-size: 13px;
    font-weight: 700;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: var(--tk-color-surface); color: var(--tk-color-primary); box-shadow: 0 4px 10px rgba(108, 92, 231, 0.2), inset 0 -3px 5px rgba(163, 152, 222, 0.15), inset 0 3px 5px rgba(255, 255, 255, 0.9); }

/* == tk: badge ================================================== */
/* Badge permen clay: pil gembur mini dengan relief pop lembut. */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 12px;
    font-weight: 800;
    padding: 4px 13px;
    border-radius: var(--tk-radius-full);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text);
    box-shadow: 0 3px 8px rgba(108, 92, 231, 0.14), inset 0 -3px 5px rgba(163, 152, 222, 0.16), inset 0 3px 5px rgba(255, 255, 255, 0.85);
}
.tk-badge-success { color: #1F7A4D; background: var(--tk-color-success-soft); }
.tk-badge-warning { color: #9A6414; background: var(--tk-color-warning-soft); }
.tk-badge-danger { color: #B23A2F; background: var(--tk-color-danger-soft); }
.tk-badge-info { color: #2D6FA8; background: var(--tk-color-info-soft); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 12px;
    font-weight: 700;
    padding: 5px 13px;
    border-radius: var(--tk-radius-full);
    border: none;
    background: var(--tk-color-surface);
    color: var(--tk-color-text);
    box-shadow: var(--tk-shadow-sm);
}
.tk-chip-remove { border: none; background: none; cursor: pointer; color: var(--tk-color-text-muted); font-size: 13px; line-height: 1; padding: 0; }
.tk-chip-remove:hover { color: var(--tk-color-danger); }

/* == tk: alert ================================================== */
.tk-alert {
    display: flex;
    gap: var(--tk-space-sm);
    align-items: flex-start;
    padding: var(--tk-space-md) var(--tk-space-lg);
    border-radius: var(--tk-radius);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    box-shadow: 0 6px 14px rgba(108, 92, 231, 0.1), inset 0 -4px 8px rgba(0, 0, 0, 0.05), inset 0 4px 8px rgba(255, 255, 255, 0.6);
}
.tk-alert-title { font-weight: 800; display: block; margin-bottom: 2px; }
.tk-alert-success { background: var(--tk-color-success-soft); color: #1F7A4D; }
.tk-alert-warning { background: var(--tk-color-warning-soft); color: #9A6414; }
.tk-alert-danger { background: var(--tk-color-danger-soft); color: #B23A2F; }
.tk-alert-info { background: var(--tk-color-info-soft); color: #2D6FA8; }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); font-weight: 600; }
.tk-table th {
    text-align: left;
    font-weight: 800;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--tk-color-text-muted);
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-bottom: 2px solid var(--tk-color-surface-2);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: 2px solid var(--tk-color-surface-2); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: rgba(108, 92, 231, 0.06); }
.tk-table .tk-table-actions { text-align: right; white-space: nowrap; }
.tk-action-btn {
    width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    border-radius: var(--tk-radius-full);
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-action-btn:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); box-shadow: var(--tk-shadow-sm); }
.tk-action-btn-danger:hover { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-pagination { display: flex; gap: var(--tk-space-xs); align-items: center; }
.tk-page {
    min-width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-full);
    border: none;
    background: none;
    font-family: var(--tk-font-body);
    font-size: 13px;
    font-weight: 700;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-page:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-page-active { background: var(--tk-color-primary); color: #FFF; box-shadow: var(--tk-cl-pop-primary); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(58, 53, 85, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border: none;
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
    border-radius: var(--tk-radius-lg) 0 0 var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 26px;
    height: 26px;
    border: 4px solid var(--tk-color-surface-2);
    border-top-color: var(--tk-color-primary);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.8s linear infinite;
}
/* Track dipencet ke dalam, isinya gumpalan clay lavender yang menonjol. */
.tk-progress { height: 14px; background: var(--tk-color-surface-2); border-radius: var(--tk-radius-full); box-shadow: var(--tk-cl-pressed); overflow: hidden; }
.tk-progress-bar { height: 100%; border-radius: var(--tk-radius-full); background: var(--tk-color-primary); box-shadow: var(--tk-cl-pop-primary); transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, rgba(108, 92, 231, 0.12) 50%, var(--tk-color-surface-2) 75%);
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
    border-radius: var(--tk-radius-lg);
    background: var(--tk-color-surface);
    box-shadow: var(--tk-cl-pressed);
}
.tk-empty-icon {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text-muted);
    box-shadow: var(--tk-shadow-sm);
}
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: 700; font-size: var(--tk-text-h4); }

/* == tk: content-blocks ========================================= */
/* Hero meja mainan: latar lila dengan tiga bola clay pastel yang melayang
   pelan naik-turun di tepi. */
.tk-hero { position: relative; text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); overflow: hidden; }
.tk-hero > * { position: relative; max-width: 640px; margin-left: auto; margin-right: auto; }
.tk-hero::before, .tk-hero::after {
    content: '';
    position: absolute;
    z-index: 0;
    border-radius: var(--tk-radius-full);
    animation: tk-bob 6s ease-in-out infinite alternate;
}
.tk-hero::before { width: 150px; height: 150px; right: 6%; top: 12%; background: var(--tk-color-secondary); box-shadow: var(--tk-cl-pop-pink); }
.tk-hero::after { width: 110px; height: 110px; left: 7%; bottom: 14%; background: var(--tk-color-accent); box-shadow: var(--tk-cl-pop-yellow); animation-delay: -3s; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; flex-wrap: wrap; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-xl); }
.tk-feature { display: flex; flex-direction: column; gap: var(--tk-space-sm); background: var(--tk-color-surface); border-radius: var(--tk-radius-lg); box-shadow: var(--tk-shadow); padding: var(--tk-space-lg); transition: transform var(--tk-transition), box-shadow var(--tk-transition); }
.tk-feature:hover { transform: translateY(-4px) rotate(-0.5deg); box-shadow: var(--tk-shadow-lg); }
/* Ikon fitur gumpalan clay berwarna: lavender, pink, kuning bergiliran. */
.tk-feature-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius);
    background: var(--tk-color-primary);
    color: #FFF;
    box-shadow: var(--tk-cl-pop-primary);
}
.tk-cta {
    position: relative;
    background: var(--tk-color-primary);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-cl-pop-primary), 0 24px 52px rgba(108, 92, 231, 0.35);
    color: #FFF;
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
    overflow: hidden;
}
.tk-cta::before {
    content: '';
    position: absolute;
    width: 180px;
    height: 180px;
    right: -40px;
    top: -70px;
    border-radius: var(--tk-radius-full);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: inset 0 -8px 14px rgba(38, 24, 130, 0.2), inset 0 8px 14px rgba(255, 255, 255, 0.25);
    animation: tk-bob 7s ease-in-out infinite alternate;
}
.tk-cta > * { position: relative; }
.tk-cta .tk-h3 { margin: 0; color: #FFF; }
.tk-cta .tk-muted { color: rgba(255, 255, 255, 0.75); }
.tk-cta .tk-btn-primary { background: var(--tk-color-accent); color: #6B4A0D; box-shadow: var(--tk-cl-pop-yellow); }
.tk-cta .tk-btn-primary:hover:not(:disabled) { background: #FFD27E; }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: clay flavor ============================================ */
/* Penimpa karakter clay di atas struktur kontrak: menang kaskade karena berada
   di ekor berkas. Tanda tangan kit ini adalah relief clay tiga-lapis, bola clay
   yang melayang, dan giliran warna permen di ikon fitur. */
@keyframes tk-bob {
    from { transform: translateY(-8px) rotate(-2deg); }
    to { transform: translateY(10px) rotate(2deg); }
}
/* Utilitas relief clay untuk elemen apa pun: pop (menonjol) dan pressed (dipencet). */
.tk-clay { background: var(--tk-color-surface); border-radius: var(--tk-radius); box-shadow: var(--tk-shadow); }
.tk-clay-pressed { background: var(--tk-color-surface); border-radius: var(--tk-radius); box-shadow: var(--tk-cl-pressed); }
/* Bola clay dekoratif berwarna permen. */
.tk-clay-ball { display: inline-block; width: 84px; height: 84px; border-radius: var(--tk-radius-full); background: var(--tk-color-primary); box-shadow: var(--tk-cl-pop-primary); animation: tk-bob 6s ease-in-out infinite alternate; }
.tk-clay-ball-pink { background: var(--tk-color-secondary); box-shadow: var(--tk-cl-pop-pink); animation-delay: -2s; }
.tk-clay-ball-yellow { background: var(--tk-color-accent); box-shadow: var(--tk-cl-pop-yellow); animation-delay: -4s; }
/* Giliran warna permen di ikon fitur: lavender → pink → kuning. */
.tk-feature:nth-child(3n+2) .tk-feature-icon { background: var(--tk-color-secondary); box-shadow: var(--tk-cl-pop-pink); }
.tk-feature:nth-child(3n) .tk-feature-icon { background: var(--tk-color-accent); color: #6B4A0D; box-shadow: var(--tk-cl-pop-yellow); }
/* Foto ikut jadi clay: sudut sangat bulat dengan bayangan lavender lembut. */
.tk-card img, .tk-hero img, figure img {
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow);
}
`;
