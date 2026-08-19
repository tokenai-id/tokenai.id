/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const DARK_FUTURISTIC_STYLES = `/* Dark Futuristic — kit design TOKENAI.
   Dark mode yang bersih dan tenang untuk produk AI, SaaS, crypto, dan teknologi:
   tipografi geometris rapi (Sora + Inter Tight), grid teknis tipis yang
   menyelimuti latar, garis batas setipis rambut, dan cahaya gradient biru
   elektrik ke violet yang mengambang di kejauhan. Elemen sci-fi-nya sengaja
   sedikit dan disiplin: kurung sudut HUD di panel, titik status berdenyut,
   berkas cahaya pemisah seksi, dan teks bergradasi — tidak ada glitch atau
   neon berlebihan; keterbacaan tetap nomor satu. Kit satu-tema: gelap secara
   bawaan tanpa mode terang. Kontrak: docs/kontrak-kit-design.md. Semua nilai
   design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #4D7CFE;
    --tk-color-primary-hover: #6B93FF;
    --tk-color-primary-contrast: #05070E;
    --tk-color-secondary: #A78BFA;
    --tk-color-secondary-hover: #BCA6FF;
    --tk-color-secondary-contrast: #0A0713;
    --tk-color-accent: #22D3EE;
    --tk-color-background: #07080D;
    --tk-color-surface: #0E1018;
    --tk-color-surface-2: #161A25;
    --tk-color-text: #E8EBF2;
    --tk-color-text-muted: #8A91A6;
    --tk-color-border: #232838;
    --tk-color-success: #34D399;
    --tk-color-success-soft: #0E2620;
    --tk-color-warning: #FBBF24;
    --tk-color-warning-soft: #2A2110;
    --tk-color-danger: #FB7185;
    --tk-color-danger-soft: #2B1219;
    --tk-color-info: #22D3EE;
    --tk-color-info-soft: #0C2530;

    --tk-font-heading: 'Sora', system-ui, sans-serif;
    --tk-font-body: 'Inter Tight', system-ui, sans-serif;
    --tk-font-mono: 'IBM Plex Mono', 'Courier New', monospace;
    --tk-weight-heading: 600;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.12;
    --tk-leading-body: 1.65;

    --tk-text-display: 64px;
    --tk-text-h1: 42px;
    --tk-text-h2: 30px;
    --tk-text-h3: 23px;
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

    --tk-radius-sm: 6px;
    --tk-radius: 10px;
    --tk-radius-lg: 16px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    --tk-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.5);
    --tk-shadow: 0 12px 32px rgba(0, 0, 0, 0.55);
    --tk-shadow-lg: 0 28px 68px rgba(0, 0, 0, 0.7);

    --tk-transition: 240ms cubic-bezier(0.32, 0.72, 0, 1);
    --tk-container: 1200px;

    /* Token khas dark futuristic (bukan kontrak): gradient tanda tangan,
       cahaya lembut di balik permukaan, dan ukuran sel grid teknis. */
    --tk-df-gradient: linear-gradient(120deg, #4D7CFE 0%, #22D3EE 50%, #A78BFA 100%);
    --tk-df-glow: 0 0 0 1px rgba(77, 124, 254, 0.28), 0 0 32px rgba(77, 124, 254, 0.22);
    --tk-df-hairline: rgba(232, 235, 242, 0.08);
    --tk-df-cell: 56px;
}

/* == tk: base =================================================== */
/* Latar adalah ruang teknis: grid tipis tak berujung dengan dua sumber cahaya
   gradient jauh di atasnya — dipasang lewat pseudo-element supaya konten
   halaman tidak perlu markup tambahan apa pun. */
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
        linear-gradient(var(--tk-df-hairline) 1px, transparent 1px) 0 0 / var(--tk-df-cell) var(--tk-df-cell),
        linear-gradient(90deg, var(--tk-df-hairline) 1px, transparent 1px) 0 0 / var(--tk-df-cell) var(--tk-df-cell);
    mask-image: radial-gradient(120% 90% at 50% 0%, #000 0%, transparent 78%);
    -webkit-mask-image: radial-gradient(120% 90% at 50% 0%, #000 0%, transparent 78%);
    opacity: 0.7;
}
body::after {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background:
        radial-gradient(48% 38% at 18% 4%, rgba(77, 124, 254, 0.2) 0%, transparent 100%),
        radial-gradient(42% 34% at 88% 12%, rgba(167, 139, 250, 0.16) 0%, transparent 100%);
}
body > * { position: relative; z-index: 1; }
.tk-container {
    max-width: var(--tk-container);
    margin: 0 auto;
    padding: 0 var(--tk-space-lg);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }
::selection { background: rgba(77, 124, 254, 0.35); color: #FFF; }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    letter-spacing: -0.025em;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); letter-spacing: -0.035em; line-height: 1.04; }
.tk-h1 { font-size: var(--tk-text-h1); }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-title); font-weight: 600; margin: 0 0 var(--tk-space-sm); letter-spacing: -0.01em; }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-family: var(--tk-font-mono); font-size: 11px; color: var(--tk-color-text-muted); letter-spacing: 0.1em; text-transform: uppercase; }
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link {
    color: var(--tk-color-accent);
    font-weight: 500;
    text-decoration: none;
    border-bottom: 1px solid rgba(34, 211, 238, 0.35);
    transition: color var(--tk-transition), border-color var(--tk-transition);
}
.tk-link:hover { color: #67E8F9; border-bottom-color: #67E8F9; }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.82em; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); padding: 2px 7px; border-radius: var(--tk-radius-sm); color: var(--tk-color-accent); }

/* == tk: button ================================================= */
/* Tombol primer memakai gradient tanda tangan dengan cahaya di bawahnya;
   sisanya sunyi dengan garis setipis rambut. */
.tk-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-body);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.005em;
    line-height: 1;
    padding: 13px 22px;
    border: 1px solid transparent;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition), transform var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:not(:disabled):active { transform: translateY(1px); }
.tk-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.tk-btn-primary {
    background: var(--tk-df-gradient);
    background-size: 160% 100%;
    color: var(--tk-color-primary-contrast);
    box-shadow: 0 6px 22px rgba(77, 124, 254, 0.32);
}
.tk-btn-primary:hover:not(:disabled) { background-position: 100% 0; box-shadow: 0 8px 30px rgba(77, 124, 254, 0.45); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); box-shadow: 0 6px 22px rgba(167, 139, 250, 0.3); }
.tk-btn-danger { background: var(--tk-color-danger); color: #2B1219; }
.tk-btn-outline { background: rgba(232, 235, 242, 0.02); border-color: var(--tk-color-border); color: var(--tk-color-text); }
.tk-btn-outline:hover:not(:disabled) { border-color: rgba(77, 124, 254, 0.55); box-shadow: var(--tk-df-glow); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-text { background: none; color: var(--tk-color-accent); padding-left: 6px; padding-right: 6px; }
.tk-btn-text:hover:not(:disabled) { color: #67E8F9; }
.tk-btn-sm { font-size: 13px; padding: 9px 15px; }
.tk-btn-lg { font-size: 15px; padding: 16px 30px; }
.tk-btn-icon { padding: 12px; }
.tk-btn-loading { position: relative; color: transparent !important; pointer-events: none; }
.tk-btn-loading::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    border: 2px solid rgba(5, 7, 14, 0.85);
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
.tk-label { font-family: var(--tk-font-mono); font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--tk-color-text-muted); }
.tk-help { font-size: 13px; color: var(--tk-color-text-muted); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: rgba(232, 235, 242, 0.03);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 12px 14px;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition), background var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); opacity: 0.75; }
.tk-input:focus, .tk-textarea:focus {
    border-color: rgba(77, 124, 254, 0.7);
    background: rgba(77, 124, 254, 0.06);
    box-shadow: 0 0 0 3px rgba(77, 124, 254, 0.16);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: 0 0 0 3px rgba(251, 113, 133, 0.16);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.16); }
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
    border-color: rgba(77, 124, 254, 0.7);
    box-shadow: 0 0 0 3px rgba(77, 124, 254, 0.16);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    background: #0C0E16;
    border: 1px solid var(--tk-color-border);
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
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-option:hover { background: var(--tk-color-surface-2); }
.tk-option-selected { background: rgba(77, 124, 254, 0.12); color: #B9CCFF; font-weight: 600; }
.tk-option-check { margin-left: auto; color: var(--tk-color-accent); display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 12px;
    margin: 2px 2px var(--tk-space-sm);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    background: rgba(232, 235, 242, 0.03);
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
    width: 18px;
    height: 18px;
    flex: none;
    margin: 0;
    position: relative;
    background: rgba(232, 235, 242, 0.04);
    border: 1px solid var(--tk-color-border);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-checkbox { border-radius: 5px; }
.tk-checkbox:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); box-shadow: 0 0 14px rgba(77, 124, 254, 0.45); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 5.5px;
    top: 2px;
    width: 4px;
    height: 9px;
    border-right: 2px solid #05070E;
    border-bottom: 2px solid #05070E;
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); box-shadow: inset 0 0 0 4px var(--tk-color-background), 0 0 14px rgba(77, 124, 254, 0.45); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(77, 124, 254, 0.28);
}
.tk-toggle { position: relative; width: 44px; height: 24px; flex: none; margin: 0; appearance: none; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); cursor: pointer; transition: background var(--tk-transition), box-shadow var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; background: var(--tk-color-text-muted); border-radius: var(--tk-radius-full); transition: transform var(--tk-transition), background var(--tk-transition); }
.tk-toggle:checked { background: rgba(77, 124, 254, 0.25); border-color: rgba(77, 124, 254, 0.6); box-shadow: 0 0 16px rgba(77, 124, 254, 0.3); }
.tk-toggle:checked::after { transform: translateX(20px); background: var(--tk-color-primary); }

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
    color: #05070E;
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
    right: 0;
    background: #0C0E16;
    border: 1px solid var(--tk-color-border);
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
/* Kartu adalah panel instrumen: permukaan gelap dengan garis setipis rambut,
   sorot cahaya tipis di tepi atas, dan cahaya biru yang menyala saat disorot. */
.tk-card {
    position: relative;
    background: linear-gradient(180deg, rgba(232, 235, 242, 0.045) 0%, rgba(232, 235, 242, 0) 42%), var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    overflow: hidden;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition), transform var(--tk-transition);
}
.tk-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 12%;
    right: 12%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(77, 124, 254, 0.55), transparent);
}
.tk-card:hover { transform: translateY(-2px); border-color: rgba(77, 124, 254, 0.4); box-shadow: var(--tk-shadow), 0 0 28px rgba(77, 124, 254, 0.14); }
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-md); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-family: var(--tk-font-heading); font-weight: 600; letter-spacing: -0.03em; color: var(--tk-color-text); }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 600; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 600; }

/* == tk: navigation ============================================= */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: rgba(7, 8, 13, 0.72);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--tk-color-border);
    position: relative;
    z-index: 5;
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 700; font-size: 18px; letter-spacing: -0.02em; margin-right: auto; color: var(--tk-color-text); }
.tk-navbar-link {
    color: var(--tk-color-text-muted);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 14px;
    border-radius: var(--tk-radius-sm);
    transition: color var(--tk-transition), background var(--tk-transition);
}
.tk-navbar-link:hover { color: var(--tk-color-text); background: var(--tk-color-surface-2); }
.tk-navbar-link-active { color: var(--tk-color-text); background: rgba(77, 124, 254, 0.12); box-shadow: inset 0 0 0 1px rgba(77, 124, 254, 0.35); }
.tk-navbar-dark { background: #05060A; border-bottom-color: #1A1E2B; }
.tk-navbar-dark .tk-navbar-brand { color: var(--tk-color-text); }
.tk-sidebar {
    width: 250px;
    background: rgba(14, 16, 24, 0.72);
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
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-radius: var(--tk-radius-sm);
    color: var(--tk-color-text-muted);
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-sidebar-item-active { background: rgba(77, 124, 254, 0.12); color: #C4D4FF; box-shadow: inset 0 0 0 1px rgba(77, 124, 254, 0.3); }
.tk-sidebar-item-active iconify-icon { color: var(--tk-color-accent); }
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
    opacity: 0.75;
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
.tk-breadcrumb a:hover { color: var(--tk-color-accent); }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.5; }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 600; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: rgba(7, 8, 13, 0.72);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--tk-color-border);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: 4px; border-bottom: 1px solid var(--tk-color-border); width: fit-content; max-width: 100%; overflow-x: auto; }
.tk-tab {
    padding: 10px 18px;
    font-size: 14px;
    font-weight: 500;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    transition: color var(--tk-transition), border-color var(--tk-transition);
    white-space: nowrap;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-text); border-image: var(--tk-df-gradient) 1; border-bottom-color: var(--tk-color-primary); }
.tk-segmented { display: inline-flex; border: 1px solid var(--tk-color-border); background: var(--tk-color-surface); border-radius: var(--tk-radius-sm); padding: 3px; gap: 2px; }
.tk-segment {
    padding: 7px 16px;
    font-size: 13px;
    font-weight: 500;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: rgba(77, 124, 254, 0.16); color: #C4D4FF; box-shadow: inset 0 0 0 1px rgba(77, 124, 254, 0.32); }

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
    border-radius: var(--tk-radius-full);
    border: 1px solid var(--tk-color-border);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text-muted);
}
.tk-badge-success { color: var(--tk-color-success); background: var(--tk-color-success-soft); border-color: rgba(52, 211, 153, 0.35); }
.tk-badge-warning { color: var(--tk-color-warning); background: var(--tk-color-warning-soft); border-color: rgba(251, 191, 36, 0.35); }
.tk-badge-danger { color: var(--tk-color-danger); background: var(--tk-color-danger-soft); border-color: rgba(251, 113, 133, 0.35); }
.tk-badge-info { color: var(--tk-color-accent); background: var(--tk-color-info-soft); border-color: rgba(34, 211, 238, 0.35); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 13px;
    font-weight: 500;
    padding: 4px 11px;
    border-radius: var(--tk-radius-full);
    border: 1px solid var(--tk-color-border);
    background: var(--tk-color-surface-2);
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
    border-left-width: 2px;
    border-radius: var(--tk-radius);
    font-size: var(--tk-text-body-sm);
    background: var(--tk-color-surface);
}
.tk-alert-title { font-weight: 700; display: block; margin-bottom: 2px; }
.tk-alert-success { background: var(--tk-color-success-soft); border-color: rgba(52, 211, 153, 0.45); color: #A7F3D0; }
.tk-alert-warning { background: var(--tk-color-warning-soft); border-color: rgba(251, 191, 36, 0.45); color: #FDE68A; }
.tk-alert-danger { background: var(--tk-color-danger-soft); border-color: rgba(251, 113, 133, 0.45); color: #FECDD3; }
.tk-alert-info { background: var(--tk-color-info-soft); border-color: rgba(34, 211, 238, 0.45); color: #A5F3FC; }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); }
.tk-table th {
    text-align: left;
    font-family: var(--tk-font-mono);
    font-weight: 500;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--tk-color-text-muted);
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-bottom: 1px solid var(--tk-color-border);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: 1px solid rgba(35, 40, 56, 0.6); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: rgba(77, 124, 254, 0.06); }
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
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), border-color var(--tk-transition);
}
.tk-page:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-page-active { background: rgba(77, 124, 254, 0.14); border-color: rgba(77, 124, 254, 0.4); color: #C4D4FF; }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(3, 4, 8, 0.72);
    backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg), 0 0 40px rgba(77, 124, 254, 0.12);
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
    border-left: 1px solid var(--tk-color-border);
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
    box-shadow: 0 0 16px rgba(77, 124, 254, 0.22);
}
.tk-progress { height: 6px; background: var(--tk-color-surface-2); border-radius: var(--tk-radius-full); overflow: hidden; }
.tk-progress-bar { height: 100%; background: var(--tk-df-gradient); box-shadow: 0 0 14px rgba(77, 124, 254, 0.5); transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, #1F2534 50%, var(--tk-color-surface-2) 75%);
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
    background: rgba(14, 16, 24, 0.6);
}
.tk-empty-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-accent);
    box-shadow: inset 0 0 24px rgba(34, 211, 238, 0.08);
}
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: 600; font-size: var(--tk-text-h4); }

/* == tk: content-blocks ========================================= */
.tk-hero { position: relative; text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); max-width: var(--tk-container); margin: 0 auto; box-sizing: border-box; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); margin: 0 auto var(--tk-space-xl); max-width: 620px; }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); flex-wrap: wrap; justify-content: center; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-lg); }
.tk-feature {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--tk-space-sm);
    background: linear-gradient(180deg, rgba(232, 235, 242, 0.04) 0%, rgba(232, 235, 242, 0) 45%), var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    padding: var(--tk-space-lg);
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition), transform var(--tk-transition);
}
.tk-feature:hover { transform: translateY(-3px); border-color: rgba(34, 211, 238, 0.35); box-shadow: 0 0 30px rgba(34, 211, 238, 0.12); }
.tk-feature-icon {
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-sm);
    background: rgba(77, 124, 254, 0.1);
    border: 1px solid rgba(77, 124, 254, 0.3);
    color: var(--tk-color-accent);
    box-shadow: inset 0 0 20px rgba(77, 124, 254, 0.14);
}
.tk-cta {
    position: relative;
    background: linear-gradient(140deg, rgba(77, 124, 254, 0.14) 0%, rgba(167, 139, 250, 0.1) 100%), var(--tk-color-surface);
    border: 1px solid rgba(77, 124, 254, 0.28);
    border-radius: var(--tk-radius-lg);
    color: var(--tk-color-text);
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
    overflow: hidden;
    box-shadow: 0 0 48px rgba(77, 124, 254, 0.12);
}
.tk-cta .tk-h3 { margin: 0; }
.tk-cta .tk-muted { color: var(--tk-color-text-muted); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: dark futuristic flavor ================================= */
/* Penimpa karakter kit di atas struktur kontrak: menang kaskade karena berada
   di ekor berkas. Tanda tangannya cahaya gradient, grid teknis, garis setipis
   rambut, dan sedikit perkakas HUD — semuanya menahan diri agar teks tetap
   jadi yang paling terbaca. */
/* Teks bergradasi biru-cyan-violet untuk satu-dua kata kunci di judul. */
.tk-gradient-text {
    background: var(--tk-df-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
/* Kicker mono dengan kurung teknis dan titik status berdenyut. */
.tk-kicker {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--tk-color-accent);
    padding: 6px 14px;
    border: 1px solid rgba(34, 211, 238, 0.25);
    border-radius: var(--tk-radius-full);
    background: rgba(34, 211, 238, 0.06);
}
/* Titik status berdenyut — penanda "sistem hidup" khas dashboard teknis. */
.tk-dot {
    position: relative;
    width: 7px;
    height: 7px;
    flex: none;
    border-radius: var(--tk-radius-full);
    background: var(--tk-color-success);
    box-shadow: 0 0 10px rgba(52, 211, 153, 0.8);
}
.tk-dot::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: inherit;
    border: 1px solid rgba(52, 211, 153, 0.5);
    animation: tk-pulse 2s ease-out infinite;
}
@keyframes tk-pulse {
    from { transform: scale(0.6); opacity: 1; }
    to { transform: scale(1.35); opacity: 0; }
}
/* Panel HUD: kurung sudut tipis di empat penjuru, khas antarmuka sci-fi. */
.tk-hud { position: relative; }
.tk-hud::before, .tk-hud::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    pointer-events: none;
    border-color: rgba(34, 211, 238, 0.65);
    border-style: solid;
}
.tk-hud::before { top: 8px; left: 8px; border-width: 1px 0 0 1px; }
.tk-hud::after { bottom: 8px; right: 8px; border-width: 0 1px 1px 0; }
/* Berkas cahaya: pemisah seksi setipis rambut yang menyala di tengah. */
.tk-beam {
    height: 1px;
    border: none;
    margin: var(--tk-space-2xl) 0;
    background: linear-gradient(90deg, transparent, rgba(77, 124, 254, 0.55), rgba(34, 211, 238, 0.55), transparent);
}
/* Panel kaca gelap dengan garis rambut — pembungkus statistik atau blok kode. */
.tk-panel {
    background: rgba(14, 16, 24, 0.72);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    backdrop-filter: blur(12px);
    padding: var(--tk-space-lg);
}
/* Baris terminal mono untuk memamerkan keluaran teknis di halaman produk. */
.tk-term {
    font-family: var(--tk-font-mono);
    font-size: 13px;
    line-height: 1.9;
    color: var(--tk-color-text-muted);
}
.tk-term b { color: var(--tk-color-accent); font-weight: 500; }
.tk-term span { color: var(--tk-color-success); }
/* Gambar ikut suasana: sedikit diredupkan dan bergaris rambut, terang saat disorot. */
.tk-card img, .tk-hero img, figure img {
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-sizing: border-box;
    filter: brightness(0.88) saturate(0.9);
    transition: filter var(--tk-transition);
}
.tk-card img:hover, .tk-hero img:hover, figure img:hover { filter: brightness(1) saturate(1); }
`;
