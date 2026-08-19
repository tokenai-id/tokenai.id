/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const ORGANIC_STYLES = `/* Organic — kit design TOKENAI.
   Design organik/fluid yang mengalir seperti alam: tidak ada sudut kaku, blob
   dengan border-radius tak beraturan yang bermorf pelan, kurva lembut, gradasi
   mesh pastel (persik-mint-lila) di atas krem hangat, hijau lumut dan koral
   terakota sebagai warna kerja, layout asimetris dengan stagger vertikal, dan
   tipografi Fraunces yang hangat. Kit satu-tema: terang secara bawaan, tanpa
   mode gelap — cahaya matahari, bukan layar. Kontrak: docs/kontrak-kit-design.md.
   Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #3F7253;
    --tk-color-primary-hover: #356247;
    --tk-color-primary-contrast: #FDFBF6;
    --tk-color-secondary: #DD7A50;
    --tk-color-secondary-hover: #E88C63;
    --tk-color-secondary-contrast: #FFFFFF;
    --tk-color-accent: #A78BD4;
    --tk-color-background: #FBF8F2;
    --tk-color-surface: #FFFFFF;
    --tk-color-surface-2: #F1ECE1;
    --tk-color-text: #2E3B33;
    --tk-color-text-muted: #6E7D72;
    --tk-color-border: #E4DDCE;
    --tk-color-success: #4C9A63;
    --tk-color-success-soft: #E3F1E6;
    --tk-color-warning: #C98A2D;
    --tk-color-warning-soft: #F8EDD8;
    --tk-color-danger: #C75A4A;
    --tk-color-danger-soft: #F8E3DE;
    --tk-color-info: #4E88B8;
    --tk-color-info-soft: #E1EDF6;

    --tk-font-heading: 'Fraunces', Georgia, serif;
    --tk-font-body: 'Nunito', system-ui, sans-serif;
    --tk-font-mono: 'Sono', 'Courier New', monospace;
    --tk-weight-heading: 600;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.15;
    --tk-leading-body: 1.65;

    --tk-text-display: 54px;
    --tk-text-h1: 40px;
    --tk-text-h2: 30px;
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

    --tk-radius-sm: 14px;
    --tk-radius: 22px;
    --tk-radius-lg: 32px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    --tk-shadow-sm: 0 6px 16px rgba(62, 84, 68, 0.08);
    --tk-shadow: 0 14px 34px rgba(62, 84, 68, 0.12);
    --tk-shadow-lg: 0 26px 60px rgba(62, 84, 68, 0.16);

    --tk-transition: 200ms cubic-bezier(0.4, 0, 0.2, 1);
    --tk-container: 1200px;

    /* Token khas organic (bukan kontrak): dua bentuk blob tak beraturan yang
       dipakai bergantian, dan gradasi mesh pastel persik-mint-lila. */
    --tk-og-blob-1: 58% 42% 55% 45% / 52% 58% 42% 48%;
    --tk-og-blob-2: 42% 58% 46% 54% / 58% 44% 56% 42%;
    --tk-og-mesh:
        radial-gradient(52% 44% at 12% 18%, rgba(233, 200, 176, 0.55) 0%, transparent 100%),
        radial-gradient(46% 42% at 88% 22%, rgba(196, 222, 200, 0.6) 0%, transparent 100%),
        radial-gradient(50% 46% at 62% 88%, rgba(211, 199, 233, 0.5) 0%, transparent 100%);
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
/* Semburat pastel sangat lembut di sudut halaman — ambience alami, tanpa
   menghalangi klik. */
body::after {
    content: '';
    position: fixed;
    inset: 0;
    background:
        radial-gradient(42% 36% at -4% -6%, rgba(196, 222, 200, 0.35) 0%, transparent 100%),
        radial-gradient(44% 40% at 104% 106%, rgba(233, 200, 176, 0.3) 0%, transparent 100%);
    pointer-events: none;
    z-index: -1;
}
.tk-container {
    max-width: var(--tk-container);
    margin: 0 auto;
    padding: 0 var(--tk-space-lg);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }
::selection { background: rgba(63, 114, 83, 0.25); }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    letter-spacing: -0.01em;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); line-height: 1.08; }
.tk-h1 { font-size: var(--tk-text-h1); }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-body); font-size: var(--tk-text-title); font-weight: 800; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); font-family: var(--tk-font-mono); letter-spacing: 0.02em; }
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link { color: var(--tk-color-primary); font-weight: 700; text-decoration: underline; text-decoration-color: rgba(63, 114, 83, 0.35); text-decoration-thickness: 2px; text-underline-offset: 3px; transition: text-decoration-color var(--tk-transition); }
.tk-link:hover { text-decoration-color: var(--tk-color-primary); }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.88em; background: var(--tk-color-surface-2); padding: 2px 8px; border-radius: var(--tk-radius-full); }

/* == tk: button ================================================= */
/* Tombol kerikil sungai: pil penuh tanpa sudut, bayangan berwarna yang lembut,
   dan mengapung naik pelan saat disentuh. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-body);
    font-size: 14px;
    font-weight: 800;
    line-height: 1;
    padding: 13px 26px;
    border: 1px solid transparent;
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), background var(--tk-transition), color var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:not(:disabled):active { transform: translateY(1px) scale(0.98); box-shadow: none !important; }
.tk-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); box-shadow: 0 10px 24px rgba(63, 114, 83, 0.3); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); transform: translateY(-2px); box-shadow: 0 14px 30px rgba(63, 114, 83, 0.35); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); box-shadow: 0 10px 24px rgba(221, 122, 80, 0.3); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); transform: translateY(-2px); box-shadow: 0 14px 30px rgba(221, 122, 80, 0.35); }
.tk-btn-danger { background: var(--tk-color-danger); color: #FFF; box-shadow: 0 10px 24px rgba(199, 90, 74, 0.3); }
.tk-btn-danger:hover:not(:disabled) { transform: translateY(-2px); }
.tk-btn-outline { background: var(--tk-color-surface); border-color: var(--tk-color-primary); color: var(--tk-color-primary); }
.tk-btn-outline:hover:not(:disabled) { background: rgba(63, 114, 83, 0.08); transform: translateY(-2px); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-text { background: none; color: var(--tk-color-primary); padding-left: 6px; padding-right: 6px; }
.tk-btn-text:hover:not(:disabled) { text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; }
.tk-btn-sm { font-size: 13px; padding: 9px 18px; }
.tk-btn-lg { font-size: 16px; padding: 17px 36px; }
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
.tk-label { font-size: 13px; font-weight: 800; color: var(--tk-color-text); }
.tk-help { font-size: 13px; color: var(--tk-color-text-muted); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 12px 16px;
    transition: box-shadow var(--tk-transition), border-color var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-primary);
    box-shadow: 0 0 0 4px rgba(63, 114, 83, 0.15);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: 0 0 0 4px rgba(199, 90, 74, 0.15);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: 0 0 0 4px rgba(76, 154, 99, 0.15); }
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
.tk-select-trigger > iconify-icon { color: var(--tk-color-text-muted); flex: none; transition: transform var(--tk-transition); }
.tk-select-placeholder { color: var(--tk-color-text-muted); }
.tk-select:focus-within > .tk-select-trigger, .tk-select-open > .tk-select-trigger {
    border-color: var(--tk-color-primary);
    box-shadow: 0 0 0 4px rgba(63, 114, 83, 0.15);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    box-shadow: var(--tk-shadow);
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
    padding: 9px 14px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    text-align: left;
    transition: background var(--tk-transition);
}
.tk-option:hover { background: var(--tk-color-surface-2); }
.tk-option-selected { background: rgba(63, 114, 83, 0.12); color: var(--tk-color-primary); font-weight: 800; }
.tk-option-check { margin-left: auto; color: var(--tk-color-primary); display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 14px;
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
    width: 20px;
    height: 20px;
    flex: none;
    margin: 0;
    position: relative;
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-border);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition), border-radius var(--tk-transition);
}
/* Checkbox kerikil: blob kecil yang membulat sempurna saat tercentang. */
.tk-checkbox { border-radius: 42% 58% 46% 54% / 58% 44% 56% 42%; }
.tk-checkbox:hover, .tk-radio:hover { border-color: var(--tk-color-primary); }
.tk-checkbox:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); border-radius: var(--tk-radius-full); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 5px;
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
    box-shadow: 0 0 0 4px rgba(63, 114, 83, 0.2);
}
.tk-toggle { position: relative; width: 46px; height: 26px; flex: none; margin: 0; appearance: none; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); cursor: pointer; transition: background var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; background: #FFF; border-radius: var(--tk-radius-full); box-shadow: 0 2px 6px rgba(46, 59, 51, 0.25); transition: transform var(--tk-transition); }
.tk-toggle:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); }
.tk-toggle:checked::after { transform: translateX(20px); }

/* == tk: search-filter ========================================== */
.tk-search { position: relative; display: flex; align-items: center; min-width: 220px; }
.tk-search .tk-input { width: 100%; padding-left: 40px; padding-right: 62px; border-radius: var(--tk-radius-full); }
.tk-search .tk-input::-webkit-search-cancel-button { -webkit-appearance: none; }
.tk-search-icon { position: absolute; left: 14px; display: inline-flex; color: var(--tk-color-text-muted); pointer-events: none; }
.tk-search-kbd {
    position: absolute;
    right: 12px;
    font-family: var(--tk-font-mono);
    font-size: 11px;
    color: var(--tk-color-text-muted);
    background: var(--tk-color-surface-2);
    border-radius: var(--tk-radius-full);
    padding: 2px 8px;
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
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    border-radius: var(--tk-radius-full);
    background: var(--tk-color-primary);
    color: var(--tk-color-primary-contrast);
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
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    box-shadow: var(--tk-shadow);
    padding: var(--tk-space-xs);
    max-height: 280px;
    overflow: auto;
    display: none;
    flex-direction: column;
    z-index: 30;
}
.tk-dropdown-menu-right { left: auto; right: 0; }
.tk-dropdown-menu-up { top: auto; bottom: calc(100% + 8px); }
.tk-dropdown-open > .tk-dropdown-menu, .tk-dropdown:focus-within > .tk-dropdown-menu { display: flex; }
.tk-dropdown-label { padding: 6px 14px; font-family: var(--tk-font-mono); font-size: 11px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: var(--tk-color-text-muted); }
.tk-dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 14px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: var(--tk-radius-full);
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
/* Kartu daun: radius besar dengan satu sudut yang lebih kecil — bentuk daun
   yang tidak pernah simetris sempurna — dan mengapung naik saat disentuh. */
.tk-card {
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg) var(--tk-radius-lg) var(--tk-radius-lg) var(--tk-radius-sm);
    box-shadow: var(--tk-shadow-sm);
    overflow: hidden;
    transition: box-shadow var(--tk-transition), transform var(--tk-transition);
}
.tk-card:hover { box-shadow: var(--tk-shadow); transform: translateY(-3px); }
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-md); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-family: var(--tk-font-heading); font-weight: var(--tk-weight-heading); color: var(--tk-color-text); }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 700; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 700; }

/* == tk: navigation ============================================= */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: rgba(251, 248, 242, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--tk-color-border);
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 700; font-style: italic; font-size: 20px; margin-right: auto; color: var(--tk-color-text); }
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: 14px; font-weight: 700; padding: 6px 14px; border-radius: var(--tk-radius-full); transition: background var(--tk-transition), color var(--tk-transition); }
.tk-navbar-link:hover { color: var(--tk-color-text); background: var(--tk-color-surface-2); }
.tk-navbar-link-active { color: var(--tk-color-primary); background: rgba(63, 114, 83, 0.1); }
.tk-navbar-dark { background: var(--tk-color-text); border-bottom-color: transparent; }
.tk-navbar-dark .tk-navbar-brand { color: var(--tk-color-background); }
.tk-navbar-dark .tk-navbar-link { color: rgba(251, 248, 242, 0.7); }
.tk-navbar-dark .tk-navbar-link:hover { color: var(--tk-color-background); background: rgba(255, 255, 255, 0.1); }
.tk-navbar-dark .tk-navbar-link-active { color: var(--tk-color-background); background: rgba(255, 255, 255, 0.16); }
.tk-sidebar {
    width: 250px;
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
    font-weight: 700;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-sidebar-item-active { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); box-shadow: 0 8px 20px rgba(63, 114, 83, 0.3); }
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 68px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
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
    background: rgba(251, 248, 242, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--tk-color-border);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: var(--tk-space-lg); border-bottom: 1px solid var(--tk-color-border); }
.tk-tab {
    padding: var(--tk-space-sm) 2px 12px;
    font-size: 14px;
    font-weight: 700;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 3px solid transparent;
    margin-bottom: -1px;
    transition: color var(--tk-transition), border-color var(--tk-transition);
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-primary); border-bottom-color: var(--tk-color-primary); }
.tk-segmented { display: inline-flex; background: var(--tk-color-surface-2); border-radius: var(--tk-radius-full); padding: 4px; gap: 2px; }
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
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: var(--tk-color-surface); color: var(--tk-color-primary); box-shadow: var(--tk-shadow-sm); }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 12px;
    font-weight: 800;
    padding: 3px 12px;
    border-radius: var(--tk-radius-full);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text);
}
.tk-badge-success { color: var(--tk-color-success); background: var(--tk-color-success-soft); }
.tk-badge-warning { color: var(--tk-color-warning); background: var(--tk-color-warning-soft); }
.tk-badge-danger { color: var(--tk-color-danger); background: var(--tk-color-danger-soft); }
.tk-badge-info { color: var(--tk-color-info); background: var(--tk-color-info-soft); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 12px;
    font-weight: 700;
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
    padding: var(--tk-space-md) var(--tk-space-lg);
    border-radius: var(--tk-radius);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
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
    font-weight: 600;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--tk-color-text-muted);
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-bottom: 1px solid var(--tk-color-border);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: 1px solid var(--tk-color-surface-2); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: rgba(63, 114, 83, 0.05); }
.tk-table .tk-table-actions { text-align: right; white-space: nowrap; }
.tk-action-btn {
    width: 32px;
    height: 32px;
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
    font-family: var(--tk-font-body);
    font-size: 13px;
    font-weight: 700;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-page:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-page-active { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); box-shadow: 0 6px 16px rgba(63, 114, 83, 0.3); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(46, 59, 51, 0.45);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border-radius: var(--tk-radius-lg) var(--tk-radius-lg) var(--tk-radius-lg) var(--tk-radius-sm);
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
    border: 3px solid var(--tk-color-surface-2);
    border-top-color: var(--tk-color-primary);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.8s linear infinite;
}
.tk-progress { height: 10px; background: var(--tk-color-surface-2); border-radius: var(--tk-radius-full); overflow: hidden; }
/* Bilah progres aliran air: gradasi lumut → terakota yang mengalir. */
.tk-progress-bar { height: 100%; border-radius: var(--tk-radius-full); background: linear-gradient(90deg, var(--tk-color-primary), var(--tk-color-secondary)); transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, rgba(63, 114, 83, 0.08) 50%, var(--tk-color-surface-2) 75%);
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
    border: 2px dashed var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    background: var(--tk-color-surface);
}
.tk-empty-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-og-blob-1);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text-muted);
}
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: var(--tk-weight-heading); font-size: var(--tk-text-h4); }

/* == tk: content-blocks ========================================= */
/* Hero taman pagi: gradasi mesh pastel persik-mint-lila, komposisi asimetris
   rata kiri, dan dua blob dekoratif yang bermorf pelan di tepi. */
.tk-hero { position: relative; padding: var(--tk-space-section) var(--tk-space-lg); background: var(--tk-og-mesh), var(--tk-color-background); overflow: hidden; }
.tk-hero > * { position: relative; max-width: 640px; margin-left: auto; margin-right: auto; }
.tk-hero::before, .tk-hero::after {
    content: '';
    position: absolute;
    z-index: 0;
    border-radius: var(--tk-og-blob-1);
    animation: tk-morph 14s ease-in-out infinite alternate;
}
.tk-hero::before { width: 260px; height: 260px; right: -60px; top: -40px; background: linear-gradient(135deg, rgba(221, 122, 80, 0.28), rgba(167, 139, 212, 0.24)); }
.tk-hero::after { width: 200px; height: 200px; left: -50px; bottom: -60px; background: linear-gradient(135deg, rgba(63, 114, 83, 0.22), rgba(196, 222, 200, 0.4)); animation-delay: -7s; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; flex-wrap: wrap; }
.tk-hero { text-align: center; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-2xl); }
.tk-feature { display: flex; flex-direction: column; gap: var(--tk-space-sm); }
/* Ikon fitur blob: bentuk tak beraturan dengan gradasi pastel — tiap anak
   memakai blob dan warna yang berbeda supaya barisnya terasa tumbuh alami. */
.tk-feature-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-og-blob-1);
    background: linear-gradient(135deg, rgba(63, 114, 83, 0.16), rgba(196, 222, 200, 0.5));
    color: var(--tk-color-primary);
}
.tk-cta {
    position: relative;
    background: var(--tk-color-primary);
    border-radius: var(--tk-radius-lg) var(--tk-radius-lg) var(--tk-radius-lg) var(--tk-radius-sm);
    box-shadow: 0 20px 48px rgba(63, 114, 83, 0.35);
    color: var(--tk-color-primary-contrast);
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
    width: 220px;
    height: 220px;
    right: -50px;
    top: -80px;
    border-radius: var(--tk-og-blob-2);
    background: rgba(255, 255, 255, 0.08);
    animation: tk-morph 12s ease-in-out infinite alternate;
}
.tk-cta > * { position: relative; }
.tk-cta .tk-h3 { margin: 0; color: var(--tk-color-primary-contrast); }
.tk-cta .tk-muted { color: rgba(253, 251, 246, 0.75); }
.tk-cta .tk-btn-primary { background: var(--tk-color-background); color: var(--tk-color-primary); box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2); }
.tk-cta .tk-btn-primary:hover:not(:disabled) { background: #FFF; }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: organic flavor ========================================= */
/* Penimpa karakter organic di atas struktur kontrak: menang kaskade karena
   berada di ekor berkas. Tanda tangan kit ini adalah blob yang bermorf,
   layout asimetris dengan stagger vertikal, dan garis bawah bergelombang. */
@keyframes tk-morph {
    0% { border-radius: 58% 42% 55% 45% / 52% 58% 42% 48%; }
    50% { border-radius: 45% 55% 42% 58% / 58% 44% 56% 42%; }
    100% { border-radius: 52% 48% 58% 42% / 44% 52% 48% 58%; }
}
/* Blob dekoratif berdiri sendiri: gradasi pastel yang bermorf pelan. */
.tk-blob {
    display: inline-block;
    width: 140px;
    height: 140px;
    border-radius: var(--tk-og-blob-1);
    background: linear-gradient(135deg, rgba(63, 114, 83, 0.24), rgba(196, 222, 200, 0.6));
    animation: tk-morph 12s ease-in-out infinite alternate;
}
.tk-blob-peach { background: linear-gradient(135deg, rgba(221, 122, 80, 0.3), rgba(233, 200, 176, 0.65)); animation-delay: -4s; }
.tk-blob-lilac { background: linear-gradient(135deg, rgba(167, 139, 212, 0.3), rgba(211, 199, 233, 0.65)); animation-delay: -8s; }
/* Garis bawah bergelombang: kurva air di bawah kata penting. */
.tk-underline-wave {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='8' viewBox='0 0 40 8'%3E%3Cpath d='M0 5 Q 10 0 20 5 T 40 5' fill='none' stroke='%23DD7A50' stroke-width='2.5' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
    background-position: 0 100%;
    background-size: 40px 8px;
    padding-bottom: 10px;
}
/* Stagger asimetris: baris fitur tidak pernah rata — anak tengah turun,
   anak ketiga naik sedikit, seperti batu pijakan di sungai. */
@media (min-width: 861px) {
    .tk-feature:nth-child(3n+2) { transform: translateY(22px); }
    .tk-feature:nth-child(3n) { transform: translateY(-8px); }
}
.tk-feature:nth-child(3n+2) .tk-feature-icon { border-radius: var(--tk-og-blob-2); background: linear-gradient(135deg, rgba(221, 122, 80, 0.16), rgba(233, 200, 176, 0.55)); color: var(--tk-color-secondary); }
.tk-feature:nth-child(3n) .tk-feature-icon { border-radius: 52% 48% 58% 42% / 44% 52% 48% 58%; background: linear-gradient(135deg, rgba(167, 139, 212, 0.18), rgba(211, 199, 233, 0.55)); color: var(--tk-color-accent); }
/* Foto organik: hero dan figure dipangkas jadi blob; foto kartu cukup radius
   besar dengan satu sudut kecil. */
.tk-hero img, figure img {
    border-radius: var(--tk-og-blob-2);
    box-shadow: var(--tk-shadow);
}
.tk-card img { border-radius: var(--tk-radius) var(--tk-radius) var(--tk-radius) var(--tk-radius-sm); }
`;
