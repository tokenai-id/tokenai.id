/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const DOPAMINE_STYLES = `/* Dopamine Design — kit design TOKENAI.
   Warna sangat cerah dan playful untuk pengalaman yang energetic: neon pink,
   orange, electric blue, dan lime dipakai penuh tanpa diredam. Bentuknya gemuk
   dan membulat (radius besar, tombol pil, huruf Fredoka yang tebal), kartu
   diblok warna bergantian, bayangannya berwarna dan padat sehingga elemen
   terasa memantul, stiker miring bertebaran, dan aksen ditandai stabilo lime.
   Latar krem hangat dengan noda gradient pink-biru-lime yang mengambang di
   belakang seluruh halaman. Kit satu-tema: terang secara bawaan — kegembiraan
   ini tidak punya mode gelap. Kontrak: docs/kontrak-kit-design.md. Semua nilai
   design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #FF2D87;
    --tk-color-primary-hover: #FF5CA3;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: #2D5BFF;
    --tk-color-secondary-hover: #547BFF;
    --tk-color-secondary-contrast: #FFFFFF;
    --tk-color-accent: #C6FF1F;
    --tk-color-background: #FFF3E4;
    --tk-color-surface: #FFFFFF;
    --tk-color-surface-2: #FFE7F1;
    --tk-color-text: #241436;
    --tk-color-text-muted: #7A6A8A;
    --tk-color-border: #241436;
    --tk-color-success: #12B76A;
    --tk-color-success-soft: #D6FBE8;
    --tk-color-warning: #FF8A00;
    --tk-color-warning-soft: #FFEBD2;
    --tk-color-danger: #F4293C;
    --tk-color-danger-soft: #FFE0E3;
    --tk-color-info: #2D5BFF;
    --tk-color-info-soft: #DEE6FF;

    --tk-font-heading: 'Fredoka', system-ui, sans-serif;
    --tk-font-body: 'Plus Jakarta Sans', system-ui, sans-serif;
    --tk-font-mono: 'Azeret Mono', 'Courier New', monospace;
    --tk-weight-heading: 600;
    --tk-weight-body: 500;
    --tk-leading-heading: 1.06;
    --tk-leading-body: 1.65;

    --tk-text-display: 72px;
    --tk-text-h1: 46px;
    --tk-text-h2: 32px;
    --tk-text-h3: 24px;
    --tk-text-h4: 19px;
    --tk-text-title: 16px;
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
    --tk-radius: 18px;
    --tk-radius-lg: 28px;
    --tk-radius-full: 999px;

    --tk-border-width: 2px;
    --tk-shadow-sm: 0 3px 0 rgba(36, 20, 54, 0.14);
    --tk-shadow: 0 6px 0 rgba(36, 20, 54, 0.14), 0 16px 32px rgba(255, 45, 135, 0.16);
    --tk-shadow-lg: 0 10px 0 rgba(36, 20, 54, 0.16), 0 30px 56px rgba(45, 91, 255, 0.2);

    --tk-transition: 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
    --tk-container: 1200px;

    /* Token khas dopamine (bukan kontrak): kuartet warna cerah yang dipakai
       bergantian untuk memblok kartu, ikon, dan chart. */
    --tk-dp-pink: #FF2D87;
    --tk-dp-orange: #FF8A00;
    --tk-dp-blue: #2D5BFF;
    --tk-dp-lime: #C6FF1F;
    --tk-dp-violet: #8B5CF6;
    --tk-dp-rainbow: linear-gradient(90deg, #FF2D87 0%, #FF8A00 33%, #C6FF1F 66%, #2D5BFF 100%);
}

/* == tk: base =================================================== */
/* Latar krem hangat dengan empat noda gradient cerah yang mengambang di
   belakang seluruh halaman — dipasang lewat pseudo-element supaya konten tidak
   perlu markup tambahan apa pun. */
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
    background:
        radial-gradient(38% 30% at 12% 8%, rgba(255, 45, 135, 0.28) 0%, transparent 100%),
        radial-gradient(34% 28% at 88% 4%, rgba(45, 91, 255, 0.22) 0%, transparent 100%),
        radial-gradient(30% 26% at 78% 62%, rgba(198, 255, 31, 0.32) 0%, transparent 100%),
        radial-gradient(32% 26% at 6% 74%, rgba(255, 138, 0, 0.22) 0%, transparent 100%);
}
body > * { position: relative; z-index: 1; }
.tk-container {
    max-width: var(--tk-container);
    margin: 0 auto;
    padding: 0 var(--tk-space-lg);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }
::selection { background: var(--tk-color-accent); color: var(--tk-color-text); }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: 600;
    line-height: var(--tk-leading-heading);
    letter-spacing: -0.02em;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); font-weight: 700; letter-spacing: -0.035em; }
.tk-h1 { font-size: var(--tk-text-h1); font-weight: 700; letter-spacing: -0.03em; }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-title); font-weight: 600; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-family: var(--tk-font-mono); font-size: 11px; font-weight: 500; color: var(--tk-color-text-muted); letter-spacing: 0.04em; text-transform: uppercase; }
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link {
    color: var(--tk-color-primary);
    font-weight: 700;
    text-decoration: none;
    box-shadow: inset 0 -0.35em 0 rgba(198, 255, 31, 0.85);
    transition: box-shadow var(--tk-transition), color var(--tk-transition);
}
.tk-link:hover { color: var(--tk-color-text); box-shadow: inset 0 -1em 0 rgba(198, 255, 31, 0.85); }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.82em; background: var(--tk-color-surface-2); border: 2px solid var(--tk-color-text); padding: 1px 8px; border-radius: var(--tk-radius-full); }

/* == tk: button ================================================= */
/* Tombol pil gemuk dengan bayangan padat di bawahnya; saat ditekan tombolnya
   turun dan bayangannya mengempis — terasa seperti tombol mainan. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-heading);
    font-size: 15px;
    font-weight: 600;
    line-height: 1;
    padding: 14px 26px;
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    box-shadow: 0 4px 0 var(--tk-color-text);
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), background var(--tk-transition), color var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 7px 0 var(--tk-color-text); }
.tk-btn:not(:disabled):active { transform: translateY(2px); box-shadow: 0 1px 0 var(--tk-color-text); }
.tk-btn:disabled { opacity: 0.45; cursor: not-allowed; box-shadow: 0 4px 0 rgba(36, 20, 54, 0.3); }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); }
.tk-btn-danger { background: var(--tk-color-danger); color: #FFFFFF; }
.tk-btn-outline { background: var(--tk-color-surface); color: var(--tk-color-text); }
.tk-btn-outline:hover:not(:disabled) { background: var(--tk-color-accent); }
.tk-btn-ghost { background: transparent; border-color: transparent; box-shadow: none; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); transform: none; box-shadow: none; }
.tk-btn-text { background: none; border-color: transparent; box-shadow: none; color: var(--tk-color-primary); padding-left: 8px; padding-right: 8px; }
.tk-btn-text:hover:not(:disabled) { color: var(--tk-color-text); transform: none; box-shadow: none; }
.tk-btn-sm { font-size: 13px; padding: 9px 18px; box-shadow: 0 3px 0 var(--tk-color-text); }
.tk-btn-sm:hover:not(:disabled) { box-shadow: 0 5px 0 var(--tk-color-text); }
.tk-btn-lg { font-size: 18px; padding: 18px 36px; box-shadow: 0 6px 0 var(--tk-color-text); }
.tk-btn-lg:hover:not(:disabled) { box-shadow: 0 9px 0 var(--tk-color-text); }
.tk-btn-icon { padding: 12px; }
.tk-btn-loading { position: relative; color: transparent !important; pointer-events: none; }
.tk-btn-loading::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border: 3px solid rgba(255, 255, 255, 0.9);
    border-top-color: transparent;
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.7s linear infinite;
}
.tk-btn-outline.tk-btn-loading::after, .tk-btn-ghost.tk-btn-loading::after, .tk-btn-text.tk-btn-loading::after {
    border-color: var(--tk-color-text);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
.tk-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: var(--tk-space-md); }
.tk-label { font-family: var(--tk-font-heading); font-size: 14px; font-weight: 600; color: var(--tk-color-text); }
.tk-help { font-size: 13px; color: var(--tk-color-text-muted); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius-sm);
    padding: 12px 16px;
    transition: box-shadow var(--tk-transition), transform var(--tk-transition), border-color var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-primary);
    box-shadow: 0 4px 0 var(--tk-color-primary);
    transform: translateY(-2px);
}
.tk-textarea { min-height: 100px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: 0 4px 0 var(--tk-color-danger);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); font-weight: 600; }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: 0 4px 0 var(--tk-color-success); }
.tk-field-success .tk-help { color: var(--tk-color-success); font-weight: 600; }
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
    font-weight: 600;
}
.tk-select-trigger > iconify-icon { color: var(--tk-color-primary); flex: none; }
.tk-select-placeholder { color: var(--tk-color-text-muted); font-weight: 500; }
.tk-select:focus-within > .tk-select-trigger, .tk-select-open > .tk-select-trigger {
    border-color: var(--tk-color-primary);
    box-shadow: 0 4px 0 var(--tk-color-primary);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius);
    box-shadow: 0 6px 0 var(--tk-color-text);
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
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    text-align: left;
    transition: background var(--tk-transition), transform var(--tk-transition);
}
.tk-option:hover { background: var(--tk-color-accent); transform: translateX(3px); }
.tk-option-selected { background: var(--tk-color-surface-2); }
.tk-option-check { margin-left: auto; color: var(--tk-color-primary); display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 14px;
    margin: 2px 2px var(--tk-space-sm);
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius-full);
    background: var(--tk-color-background);
}
.tk-select-menu-search input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: none;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    color: var(--tk-color-text);
}
.tk-select-menu-search input::placeholder { color: var(--tk-color-text-muted); }
.tk-select-menu-footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-sm) 6px 4px;
    margin-top: var(--tk-space-xs);
    border-top: 2px dashed var(--tk-color-surface-2);
}
.tk-check { display: inline-flex; align-items: center; gap: var(--tk-space-sm); font-size: var(--tk-text-body-sm); font-weight: 600; cursor: pointer; }
.tk-checkbox, .tk-radio {
    appearance: none;
    width: 22px;
    height: 22px;
    flex: none;
    margin: 0;
    position: relative;
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-text);
    cursor: pointer;
    transition: background var(--tk-transition), transform var(--tk-transition);
}
.tk-checkbox { border-radius: 8px; }
.tk-checkbox:checked { background: var(--tk-color-primary); transform: rotate(-6deg) scale(1.05); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 11px;
    border-right: 3px solid #FFFFFF;
    border-bottom: 3px solid #FFFFFF;
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked { background: var(--tk-color-secondary); box-shadow: inset 0 0 0 4px var(--tk-color-surface); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: 3px solid var(--tk-color-accent);
    outline-offset: 2px;
}
.tk-toggle { position: relative; width: 52px; height: 28px; flex: none; margin: 0; appearance: none; background: var(--tk-color-surface); border: 2px solid var(--tk-color-text); border-radius: var(--tk-radius-full); cursor: pointer; transition: background var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background: var(--tk-color-text); border-radius: var(--tk-radius-full); transition: transform var(--tk-transition), background var(--tk-transition); }
.tk-toggle:checked { background: var(--tk-color-accent); }
.tk-toggle:checked::after { transform: translateX(24px); background: var(--tk-color-primary); }

/* == tk: search-filter ========================================== */
.tk-search { position: relative; display: flex; align-items: center; min-width: 220px; }
.tk-search .tk-input { width: 100%; padding-left: 44px; padding-right: 66px; border-radius: var(--tk-radius-full); }
.tk-search .tk-input::-webkit-search-cancel-button { -webkit-appearance: none; }
.tk-search-icon { position: absolute; left: 16px; display: inline-flex; color: var(--tk-color-primary); pointer-events: none; }
.tk-search-kbd {
    position: absolute;
    right: 12px;
    font-family: var(--tk-font-mono);
    font-size: 10px;
    font-weight: 500;
    color: var(--tk-color-text);
    background: var(--tk-color-accent);
    border: 2px solid var(--tk-color-text);
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
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius-lg);
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
    color: #FFFFFF;
    font-size: 11px;
    font-weight: 800;
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
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius);
    box-shadow: 0 6px 0 var(--tk-color-text);
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
.tk-dropdown-label { padding: 6px 14px; font-family: var(--tk-font-mono); font-size: 10px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--tk-color-text-muted); }
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
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    text-align: left;
    transition: background var(--tk-transition), transform var(--tk-transition);
}
.tk-dropdown-item:hover { background: var(--tk-color-accent); transform: translateX(3px); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-primary); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: var(--tk-color-danger-soft); }
.tk-dropdown-divider { height: 2px; background: var(--tk-color-surface-2); border: none; margin: var(--tk-space-xs) var(--tk-space-sm); border-radius: var(--tk-radius-full); }

/* == tk: card =================================================== */
/* Kartu gemuk bergaris tegas dengan bayangan padat; saat disorot ia melompat
   naik dan memiringkan diri sedikit — sumber utama rasa "hidup" kit ini. */
.tk-card {
    position: relative;
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-sm);
    overflow: hidden;
    transition: transform var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-card:hover { transform: translateY(-6px) rotate(-0.8deg); box-shadow: 0 12px 0 rgba(36, 20, 54, 0.16); }
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-md); }
.tk-card-stat .tk-stat-value { font-size: 40px; font-family: var(--tk-font-heading); font-weight: 700; letter-spacing: -0.03em; color: var(--tk-color-text); }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 700; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 700; }

/* == tk: navigation ============================================= */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-md);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: 2px solid var(--tk-color-text);
    position: relative;
    z-index: 5;
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 700; font-size: 21px; letter-spacing: -0.02em; margin-right: auto; color: var(--tk-color-text); }
.tk-navbar-link {
    color: var(--tk-color-text);
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    padding: 9px 16px;
    border: 2px solid transparent;
    border-radius: var(--tk-radius-full);
    transition: background var(--tk-transition), border-color var(--tk-transition), transform var(--tk-transition);
}
.tk-navbar-link:hover { background: var(--tk-color-accent); transform: translateY(-2px); }
.tk-navbar-link-active { background: var(--tk-color-primary); color: #FFFFFF; border-color: var(--tk-color-text); }
.tk-navbar-dark { background: var(--tk-color-text); border-bottom-color: var(--tk-color-text); }
.tk-navbar-dark .tk-navbar-brand { color: #FFFFFF; }
.tk-navbar-dark .tk-navbar-link { color: #FFF3E4; }
.tk-navbar-dark .tk-navbar-link:hover { color: var(--tk-color-text); }
.tk-sidebar {
    width: 254px;
    background: var(--tk-color-surface);
    border-right: 2px solid var(--tk-color-text);
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
    padding: 10px var(--tk-space-md);
    border: 2px solid transparent;
    border-radius: var(--tk-radius-full);
    color: var(--tk-color-text);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    text-decoration: none;
    transition: background var(--tk-transition), transform var(--tk-transition), border-color var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-accent); transform: translateX(3px); }
.tk-sidebar-item-active { background: var(--tk-color-primary); color: #FFFFFF; border-color: var(--tk-color-text); box-shadow: 0 3px 0 var(--tk-color-text); }
.tk-sidebar-item-active iconify-icon { color: #FFFFFF; }
.tk-sidebar-item iconify-icon { flex: none; color: var(--tk-color-primary); }
.tk-sidebar-collapsed { width: 74px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: 10px; }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.1em;
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
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-primary); }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 700; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: 2px solid var(--tk-color-text);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: var(--tk-space-sm); border-bottom: 2px solid var(--tk-color-text); width: fit-content; max-width: 100%; overflow-x: auto; padding-bottom: 0; }
.tk-tab {
    padding: 10px 20px;
    font-family: var(--tk-font-heading);
    font-size: 15px;
    font-weight: 600;
    color: var(--tk-color-text);
    text-decoration: none;
    border: 2px solid transparent;
    border-bottom: none;
    border-radius: var(--tk-radius) var(--tk-radius) 0 0;
    margin-bottom: -2px;
    transition: background var(--tk-transition), color var(--tk-transition);
    white-space: nowrap;
}
.tk-tab:hover { background: var(--tk-color-surface-2); }
.tk-tab-active { background: var(--tk-color-primary); color: #FFFFFF; border-color: var(--tk-color-text); }
.tk-segmented { display: inline-flex; border: 2px solid var(--tk-color-text); background: var(--tk-color-surface); border-radius: var(--tk-radius-full); padding: 4px; gap: 4px; box-shadow: var(--tk-shadow-sm); }
.tk-segment {
    padding: 8px 18px;
    font-family: var(--tk-font-heading);
    font-size: 14px;
    font-weight: 600;
    color: var(--tk-color-text);
    border: none;
    background: transparent;
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-segment:hover { background: var(--tk-color-surface-2); }
.tk-segment-active { background: var(--tk-color-secondary); color: #FFFFFF; }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-heading);
    font-size: 12px;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: var(--tk-radius-full);
    border: 2px solid var(--tk-color-text);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text);
}
.tk-badge-success { background: var(--tk-color-success-soft); }
.tk-badge-warning { background: var(--tk-color-warning-soft); }
.tk-badge-danger { background: var(--tk-color-danger-soft); }
.tk-badge-info { background: var(--tk-color-info-soft); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 13px;
    font-weight: 600;
    padding: 5px 13px;
    border-radius: var(--tk-radius-full);
    border: 2px solid var(--tk-color-text);
    background: var(--tk-color-accent);
    color: var(--tk-color-text);
}
.tk-chip-remove { border: none; background: none; cursor: pointer; color: var(--tk-color-text); font-size: 15px; line-height: 1; padding: 0; font-weight: 700; }
.tk-chip-remove:hover { color: var(--tk-color-danger); }

/* == tk: alert ================================================== */
.tk-alert {
    display: flex;
    gap: var(--tk-space-sm);
    align-items: flex-start;
    padding: var(--tk-space-md) var(--tk-space-lg);
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-sm);
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    background: var(--tk-color-surface);
    color: var(--tk-color-text);
}
.tk-alert-title { font-family: var(--tk-font-heading); font-weight: 600; display: block; margin-bottom: 2px; }
.tk-alert-success { background: var(--tk-color-success-soft); }
.tk-alert-warning { background: var(--tk-color-warning-soft); }
.tk-alert-danger { background: var(--tk-color-danger-soft); }
.tk-alert-info { background: var(--tk-color-info-soft); }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); }
.tk-table th {
    text-align: left;
    font-family: var(--tk-font-heading);
    font-weight: 600;
    font-size: 13px;
    color: var(--tk-color-text);
    padding: var(--tk-space-sm) var(--tk-space-md);
    background: var(--tk-color-surface-2);
    border-bottom: 2px solid var(--tk-color-text);
}
.tk-table th:first-child { border-top-left-radius: var(--tk-radius-sm); border-bottom-left-radius: var(--tk-radius-sm); }
.tk-table th:last-child { border-top-right-radius: var(--tk-radius-sm); border-bottom-right-radius: var(--tk-radius-sm); }
.tk-table td { padding: var(--tk-space-md); border-bottom: 2px dashed var(--tk-color-surface-2); font-weight: 500; }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: rgba(198, 255, 31, 0.3); }
.tk-table .tk-table-actions { text-align: right; white-space: nowrap; }
.tk-action-btn {
    width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    background: none;
    border-radius: var(--tk-radius-full);
    color: var(--tk-color-text);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), transform var(--tk-transition);
}
.tk-action-btn:hover { background: var(--tk-color-accent); border-color: var(--tk-color-text); transform: translateY(-2px); }
.tk-action-btn-danger:hover { background: var(--tk-color-danger); color: #FFFFFF; }
.tk-pagination { display: flex; gap: var(--tk-space-xs); align-items: center; }
.tk-page {
    min-width: 38px;
    height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-full);
    border: 2px solid transparent;
    background: none;
    font-family: var(--tk-font-heading);
    font-size: 14px;
    font-weight: 600;
    color: var(--tk-color-text);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), transform var(--tk-transition);
}
.tk-page:hover { background: var(--tk-color-surface-2); border-color: var(--tk-color-text); }
.tk-page-active { background: var(--tk-color-primary); color: #FFFFFF; border-color: var(--tk-color-text); box-shadow: 0 3px 0 var(--tk-color-text); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(36, 20, 54, 0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius-lg);
    box-shadow: 0 10px 0 var(--tk-color-text);
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
    border-left: 2px solid var(--tk-color-text);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 30px;
    height: 30px;
    border: 4px solid var(--tk-color-surface-2);
    border-top-color: var(--tk-color-primary);
    border-right-color: var(--tk-color-secondary);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.7s linear infinite;
}
.tk-progress { height: 14px; background: var(--tk-color-surface); border: 2px solid var(--tk-color-text); border-radius: var(--tk-radius-full); overflow: hidden; }
.tk-progress-bar { height: 100%; background: var(--tk-dp-rainbow); transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, #FFF6DA 50%, var(--tk-color-surface-2) 75%);
    background-size: 200% 100%;
    animation: tk-shimmer 1.3s infinite;
    border-radius: var(--tk-radius-full);
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
    border: 3px dashed var(--tk-color-text);
    border-radius: var(--tk-radius-lg);
    background: var(--tk-color-surface);
}
.tk-empty-icon {
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius-lg);
    background: var(--tk-color-accent);
    color: var(--tk-color-text);
    transform: rotate(-6deg);
    box-shadow: 0 5px 0 var(--tk-color-text);
}
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: 600; font-size: var(--tk-text-h3); margin-top: var(--tk-space-sm); }

/* == tk: content-blocks ========================================= */
.tk-hero { position: relative; text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); max-width: var(--tk-container); margin: 0 auto; box-sizing: border-box; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); margin: 0 auto var(--tk-space-xl); max-width: 600px; font-weight: 500; }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); flex-wrap: wrap; justify-content: center; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-lg); }
.tk-feature {
    display: flex;
    flex-direction: column;
    gap: var(--tk-space-sm);
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius-lg);
    padding: var(--tk-space-lg);
    box-shadow: var(--tk-shadow-sm);
    transition: transform var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-feature:hover { transform: translateY(-6px) rotate(0.8deg); box-shadow: 0 12px 0 rgba(36, 20, 54, 0.16); }
.tk-feature-icon {
    width: 58px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius);
    background: var(--tk-color-primary);
    color: #FFFFFF;
    transform: rotate(-5deg);
    box-shadow: 0 4px 0 var(--tk-color-text);
}
/* Setiap kartu fitur mendapat warna ikon berbeda dan miring bergantian — ini
   yang membuat grid fitur terasa riang alih-alih berbaris kaku. */
.tk-feature-grid > .tk-feature:nth-child(4n+2) .tk-feature-icon { background: var(--tk-dp-blue); transform: rotate(5deg); }
.tk-feature-grid > .tk-feature:nth-child(4n+3) .tk-feature-icon { background: var(--tk-dp-lime); color: var(--tk-color-text); transform: rotate(-3deg); }
.tk-feature-grid > .tk-feature:nth-child(4n+4) .tk-feature-icon { background: var(--tk-dp-orange); transform: rotate(4deg); }
.tk-cta {
    position: relative;
    background: var(--tk-color-primary);
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius-lg);
    box-shadow: 0 8px 0 var(--tk-color-text);
    color: #FFFFFF;
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
    overflow: hidden;
}
.tk-cta .tk-h3 { margin: 0; color: #FFFFFF; }
.tk-cta .tk-muted { color: rgba(255, 255, 255, 0.85); }
.tk-cta .tk-btn-primary { background: var(--tk-color-accent); color: var(--tk-color-text); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: dopamine flavor ======================================== */
/* Penimpa karakter kit di atas struktur kontrak: menang kaskade karena berada
   di ekor berkas. Tanda tangannya warna penuh tanpa diredam, bentuk gemuk yang
   memantul, stiker miring, dan tanda stabilo lime. */
/* Blok warna: pasang di kartu mana pun untuk mengecatnya penuh. */
.tk-pop-pink { background: var(--tk-dp-pink); color: #FFFFFF; }
.tk-pop-blue { background: var(--tk-dp-blue); color: #FFFFFF; }
.tk-pop-lime { background: var(--tk-dp-lime); color: var(--tk-color-text); }
.tk-pop-orange { background: var(--tk-dp-orange); color: #FFFFFF; }
.tk-pop-violet { background: var(--tk-dp-violet); color: #FFFFFF; }
.tk-pop-pink .tk-caption, .tk-pop-blue .tk-caption, .tk-pop-orange .tk-caption, .tk-pop-violet .tk-caption,
.tk-pop-pink .tk-muted, .tk-pop-blue .tk-muted, .tk-pop-orange .tk-muted, .tk-pop-violet .tk-muted { color: rgba(255, 255, 255, 0.86); }
.tk-pop-pink .tk-stat-value, .tk-pop-blue .tk-stat-value, .tk-pop-orange .tk-stat-value, .tk-pop-violet .tk-stat-value { color: #FFFFFF; }
.tk-pop-lime .tk-caption, .tk-pop-lime .tk-muted { color: rgba(36, 20, 54, 0.7); }
/* Stabilo: menandai satu-dua kata di judul seperti dicoret spidol lime. */
.tk-highlight {
    background: var(--tk-color-accent);
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    padding: 0 0.14em;
    border-radius: 6px;
}
/* Stiker: pil miring bergaris tegas — tempelkan di sudut kartu atau di atas judul. */
.tk-sticker {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-heading);
    font-size: 13px;
    font-weight: 600;
    padding: 7px 16px;
    color: var(--tk-color-text);
    background: var(--tk-color-accent);
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius-full);
    box-shadow: 0 3px 0 var(--tk-color-text);
    transform: rotate(-2.5deg);
}
.tk-sticker-pink { background: var(--tk-dp-pink); color: #FFFFFF; transform: rotate(2.5deg); }
.tk-sticker-blue { background: var(--tk-dp-blue); color: #FFFFFF; transform: rotate(-1.5deg); }
/* Goyang: hover playful untuk elemen yang ingin menarik perhatian. */
.tk-wiggle:hover { animation: tk-wiggle 0.45s ease-in-out; }
@keyframes tk-wiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-4deg) scale(1.04); }
    75% { transform: rotate(4deg) scale(1.04); }
}
/* Memantul pelan: untuk emoji, ikon besar, atau lencana angka. */
.tk-bounce { animation: tk-bounce 1.8s ease-in-out infinite; }
@keyframes tk-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
/* Pemisah bergelombang menggantikan garis lurus yang kaku. */
.tk-squiggle {
    height: 12px;
    border: none;
    margin: var(--tk-space-2xl) 0;
    background: repeating-linear-gradient(135deg, var(--tk-dp-pink) 0 14px, var(--tk-dp-orange) 14px 28px, var(--tk-dp-lime) 28px 42px, var(--tk-dp-blue) 42px 56px);
    border-radius: var(--tk-radius-full);
}
/* Angka besar berwarna untuk statistik dan langkah bernomor. */
.tk-bignum {
    font-family: var(--tk-font-heading);
    font-size: 56px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.04em;
    color: var(--tk-color-primary);
}
/* Gambar ikut bergaris tegas dan sedikit miring supaya menyatu dengan kartunya. */
.tk-card img, .tk-hero img, figure img {
    border: 2px solid var(--tk-color-text);
    border-radius: var(--tk-radius);
    box-sizing: border-box;
    transition: transform var(--tk-transition);
}
.tk-card img:hover, .tk-hero img:hover, figure img:hover { transform: rotate(-1.5deg) scale(1.02); }
@media (prefers-reduced-motion: reduce) {
    .tk-bounce, .tk-wiggle:hover { animation: none; }
}
`;
