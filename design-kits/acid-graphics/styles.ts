/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const ACID_GRAPHICS_STYLES = `/* Acid Graphics — kit design TOKENAI.
   Rave/underground: latar hitam pekat dengan pendar fluorescent, hijau acid dan
   ungu psychedelic menyala, gradien asam yang berputar, bentuk blob organik yang
   aneh, tipografi Unbounded terdistorsi (miring, meregang), stiker miring, dan
   garis bawah bergelombang. Kit satu-tema: gelap secara bawaan, tanpa mode
   terang — pesta baru mulai setelah matahari terbenam.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #C6FF00;
    --tk-color-primary-hover: #DBFF4D;
    --tk-color-primary-contrast: #0A0F00;
    --tk-color-secondary: #B026FF;
    --tk-color-secondary-hover: #C55EFF;
    --tk-color-secondary-contrast: #FDF7FF;
    --tk-color-accent: #FF9E00;
    --tk-color-background: #0B0B0D;
    --tk-color-surface: #141416;
    --tk-color-surface-2: #1E1E23;
    --tk-color-text: #F2F2EE;
    --tk-color-text-muted: #9C9CA6;
    --tk-color-border: #2F2F38;
    --tk-color-success: #4DFF7C;
    --tk-color-success-soft: #07290F;
    --tk-color-warning: #FFD500;
    --tk-color-warning-soft: #2B2400;
    --tk-color-danger: #FF3355;
    --tk-color-danger-soft: #33060F;
    --tk-color-info: #4DB8FF;
    --tk-color-info-soft: #0A2436;

    --tk-font-heading: 'Unbounded', 'Arial Black', sans-serif;
    --tk-font-body: 'Space Grotesk', system-ui, sans-serif;
    --tk-font-mono: 'Space Mono', ui-monospace, monospace;
    --tk-weight-heading: 800;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.15;
    --tk-leading-body: 1.6;

    --tk-text-display: 44px;
    --tk-text-h1: 32px;
    --tk-text-h2: 25px;
    --tk-text-h3: 19px;
    --tk-text-h4: 16px;
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

    --tk-radius-sm: 10px;
    --tk-radius: 18px;
    --tk-radius-lg: 28px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    --tk-shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.5);
    --tk-shadow: 0 8px 26px rgba(0, 0, 0, 0.55), 0 0 18px rgba(198, 255, 0, 0.05);
    --tk-shadow-lg: 0 18px 52px rgba(0, 0, 0, 0.65), 0 0 34px rgba(176, 38, 255, 0.10);

    --tk-transition: 150ms ease;
    --tk-container: 1200px;

    /* Token khas acid (bukan kontrak): gradien psychedelic asam, radius blob organik
       yang tidak simetris, latar rave berpendar fluorescent, glow acid/ungu, dan
       bayangan stiker keras berwarna ungu. */
    --tk-ac-grad: linear-gradient(112deg, #C6FF00, #4DFF7C 30%, #B026FF 62%, #FF9E00 100%);
    --tk-ac-blob: 62% 38% 55% 45% / 48% 62% 38% 52%;
    --tk-ac-blob-2: 40% 60% 45% 55% / 58% 42% 58% 42%;
    --tk-ac-glow-green: drop-shadow(0 0 8px rgba(198, 255, 0, 0.5));
    --tk-ac-glow-violet: drop-shadow(0 0 8px rgba(176, 38, 255, 0.55));
    --tk-ac-sticker: 4px 4px 0 #B026FF;
    --tk-ac-bg:
        radial-gradient(760px 480px at 8% -6%, rgba(198, 255, 0, 0.10) 0%, rgba(198, 255, 0, 0) 55%),
        radial-gradient(720px 460px at 100% 4%, rgba(176, 38, 255, 0.12) 0%, rgba(176, 38, 255, 0) 55%),
        radial-gradient(680px 520px at 50% 110%, rgba(255, 158, 0, 0.07) 0%, rgba(255, 158, 0, 0) 60%),
        #0B0B0D;
}

/* == tk: base =================================================== */
body {
    margin: 0;
    background: var(--tk-ac-bg);
    background-attachment: fixed;
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
::selection { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    letter-spacing: -0.01em;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); line-height: 1.05; font-weight: 900; text-transform: uppercase; }
.tk-h1 { font-size: var(--tk-text-h1); }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-title); font-weight: 600; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption {
    font-size: var(--tk-text-caption);
    color: var(--tk-color-text-muted);
    font-family: var(--tk-font-mono);
    text-transform: uppercase;
    letter-spacing: 0.14em;
}
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link { color: var(--tk-color-primary); font-weight: 600; text-decoration: underline wavy; text-decoration-color: var(--tk-color-secondary); text-underline-offset: 4px; }
.tk-link:hover { color: var(--tk-color-primary-hover); text-shadow: 0 0 12px rgba(198, 255, 0, 0.55); }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.88em; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); color: var(--tk-color-accent); padding: 1px 7px; border-radius: var(--tk-radius-sm); }

/* == tk: button ================================================= */
/* Tombol stiker rave: kapsul fluoro dengan bayangan keras ungu yang bergeser saat
   ditekan — seperti stiker menyala ditempel miring di poster pesta. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-heading);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    line-height: 1;
    padding: 14px 24px;
    border: 1px solid transparent;
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), background var(--tk-transition), color var(--tk-transition), filter var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:not(:disabled):active { transform: translate(2px, 2px); box-shadow: none; }
.tk-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); box-shadow: var(--tk-ac-sticker); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); transform: rotate(-1.5deg); filter: var(--tk-ac-glow-green); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); box-shadow: 4px 4px 0 #C6FF00; }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); transform: rotate(1.5deg); filter: var(--tk-ac-glow-violet); }
.tk-btn-danger { background: var(--tk-color-danger); color: #FFF3F5; box-shadow: 4px 4px 0 #7A0E22; }
.tk-btn-danger:hover:not(:disabled) { transform: rotate(-1.5deg); filter: drop-shadow(0 0 8px rgba(255, 51, 85, 0.55)); }
.tk-btn-outline { background: rgba(198, 255, 0, 0.04); color: var(--tk-color-primary); border-color: var(--tk-color-primary); }
.tk-btn-outline:hover:not(:disabled) { background: rgba(198, 255, 0, 0.12); box-shadow: 0 0 14px rgba(198, 255, 0, 0.35); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-text { background: none; color: var(--tk-color-primary); padding-left: 4px; padding-right: 4px; }
.tk-btn-text:hover:not(:disabled) { text-decoration: underline wavy; text-decoration-color: var(--tk-color-secondary); text-underline-offset: 4px; }
.tk-btn-sm { font-size: 10px; padding: 10px 16px; }
.tk-btn-lg { font-size: 14px; padding: 18px 34px; }
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
    animation: tk-spin 0.7s linear infinite;
}
.tk-btn-secondary.tk-btn-loading::after { border-color: var(--tk-color-secondary-contrast); border-top-color: transparent; }
.tk-btn-outline.tk-btn-loading::after, .tk-btn-ghost.tk-btn-loading::after {
    border-color: var(--tk-color-primary);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
.tk-field { display: flex; flex-direction: column; gap: var(--tk-space-xs); margin-bottom: var(--tk-space-md); }
.tk-label { font-family: var(--tk-font-mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: var(--tk-color-primary); }
.tk-help { font-size: 13px; color: var(--tk-color-text-muted); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    color: var(--tk-color-text);
    background: rgba(11, 11, 13, 0.65);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 11px 14px;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-primary);
    box-shadow: 0 0 0 1px var(--tk-color-primary), 0 0 14px rgba(198, 255, 0, 0.3);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: 0 0 0 1px var(--tk-color-danger), 0 0 14px rgba(255, 51, 85, 0.3);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: 0 0 0 1px var(--tk-color-success), 0 0 14px rgba(77, 255, 124, 0.25); }
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
.tk-select-trigger > iconify-icon { color: var(--tk-color-primary); flex: none; }
.tk-select-placeholder { color: var(--tk-color-text-muted); }
.tk-select:focus-within > .tk-select-trigger, .tk-select-open > .tk-select-trigger {
    border-color: var(--tk-color-primary);
    box-shadow: 0 0 0 1px var(--tk-color-primary), 0 0 14px rgba(198, 255, 0, 0.3);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    box-shadow: var(--tk-shadow-lg), 0 0 18px rgba(198, 255, 0, 0.14);
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
    font-weight: 500;
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    text-align: left;
    transition: background var(--tk-transition);
}
.tk-option:hover { background: rgba(198, 255, 0, 0.08); }
.tk-option-selected { background: rgba(198, 255, 0, 0.12); color: var(--tk-color-primary); font-weight: 600; }
.tk-option-check { margin-left: auto; color: var(--tk-color-primary); display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 12px;
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
    width: 18px;
    height: 18px;
    flex: none;
    margin: 0;
    position: relative;
    background: rgba(11, 11, 13, 0.65);
    border: 1px solid var(--tk-color-border);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition);
}
/* Checkbox blob: kotak centang pun ikut meleleh. */
.tk-checkbox { border-radius: 40% 60% 55% 45% / 55% 45% 60% 40%; }
.tk-checkbox:hover, .tk-radio:hover { border-color: var(--tk-color-primary); }
.tk-checkbox:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); box-shadow: 0 0 10px rgba(198, 255, 0, 0.45); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 2px;
    width: 4px;
    height: 8px;
    border-right: 2px solid var(--tk-color-primary-contrast);
    border-bottom: 2px solid var(--tk-color-primary-contrast);
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked { border-color: var(--tk-color-primary); box-shadow: inset 0 0 0 3px var(--tk-color-surface), 0 0 10px rgba(198, 255, 0, 0.45); background: var(--tk-color-primary); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(198, 255, 0, 0.45);
}
.tk-toggle { position: relative; width: 44px; height: 24px; flex: none; margin: 0; appearance: none; border: 1px solid var(--tk-color-border); background: rgba(11, 11, 13, 0.65); border-radius: var(--tk-radius-full); cursor: pointer; transition: background var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 3px; left: 3px; width: 16px; height: 16px; background: var(--tk-color-text-muted); border-radius: var(--tk-radius-full); transition: transform var(--tk-transition), background var(--tk-transition); }
.tk-toggle:checked { background: rgba(198, 255, 0, 0.15); border-color: var(--tk-color-primary); box-shadow: 0 0 10px rgba(198, 255, 0, 0.35); }
.tk-toggle:checked::after { transform: translateX(20px); background: var(--tk-color-primary); box-shadow: 0 0 8px rgba(198, 255, 0, 0.7); }

/* == tk: search-filter ========================================== */
.tk-search { position: relative; display: flex; align-items: center; min-width: 220px; }
.tk-search .tk-input { width: 100%; padding-left: 38px; padding-right: 60px; }
.tk-search .tk-input::-webkit-search-cancel-button { -webkit-appearance: none; }
.tk-search-icon { position: absolute; left: 12px; display: inline-flex; color: var(--tk-color-primary); pointer-events: none; }
.tk-search-kbd {
    position: absolute;
    right: 10px;
    font-family: var(--tk-font-mono);
    font-size: 11px;
    color: var(--tk-color-primary);
    background: rgba(198, 255, 0, 0.08);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 1px 6px;
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
    background: var(--tk-color-accent);
    color: #241400;
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 700;
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
    border: 1px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    box-shadow: var(--tk-shadow-lg), 0 0 18px rgba(198, 255, 0, 0.14);
    padding: var(--tk-space-xs);
    max-height: 280px;
    overflow: auto;
    display: none;
    flex-direction: column;
    z-index: 30;
}
.tk-dropdown-menu-right { left: auto; right: 0; }
.tk-dropdown-menu-up { top: auto; bottom: calc(100% + 6px); }
.tk-dropdown-open > .tk-dropdown-menu, .tk-dropdown:focus-within > .tk-dropdown-menu { display: flex; }
.tk-dropdown-label { padding: 6px 12px; font-family: var(--tk-font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.14em; color: var(--tk-color-text-muted); }
.tk-dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 12px;
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
.tk-dropdown-item:hover { background: rgba(198, 255, 0, 0.08); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-primary); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: rgba(255, 51, 85, 0.12); }
.tk-dropdown-divider { height: 1px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) 0; }

/* == tk: card =================================================== */
/* Panel rave: permukaan gelap dengan sudut membulat besar yang tidak simetris —
   satu sudut sengaja meleleh lebih jauh (blob) — plus border tipis yang menyala
   gradien acid saat disorot. */
.tk-card {
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius) var(--tk-radius-lg) var(--tk-radius) var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-sm);
    overflow: hidden;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-card:hover { border-color: rgba(198, 255, 0, 0.5); box-shadow: var(--tk-shadow-sm), 0 0 18px rgba(198, 255, 0, 0.10); }
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-sm); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-family: var(--tk-font-heading); font-weight: 800; color: var(--tk-color-primary); text-shadow: 0 0 16px rgba(198, 255, 0, 0.4); }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 600; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 600; }

/* == tk: navigation ============================================= */
/* Navbar klub bawah tanah: hitam semi-transparan ber-blur dengan garis gradien
   acid di tepi bawah — pita cahaya laser di pintu masuk. */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: rgba(11, 11, 13, 0.85);
    backdrop-filter: blur(10px);
    border-bottom: 2px solid transparent;
    border-image: var(--tk-ac-grad) 1;
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 900; font-size: 15px; letter-spacing: 0.02em; margin-right: auto; color: var(--tk-color-text); }
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: 12px; font-weight: 700; font-family: var(--tk-font-heading); text-transform: uppercase; letter-spacing: 0.06em; }
.tk-navbar-link:hover { color: var(--tk-color-text); text-shadow: 0 0 10px rgba(198, 255, 0, 0.5); }
.tk-navbar-link-active { color: var(--tk-color-primary); text-shadow: 0 0 10px rgba(198, 255, 0, 0.5); }
.tk-navbar-dark { background: rgba(4, 4, 5, 0.94); }
.tk-navbar-dark .tk-navbar-link-active { color: var(--tk-color-secondary-hover); text-shadow: 0 0 10px rgba(176, 38, 255, 0.55); }
.tk-sidebar {
    width: 240px;
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
    font-weight: 600;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-sidebar-item:hover { background: rgba(198, 255, 0, 0.06); color: var(--tk-color-text); }
.tk-sidebar-item-active {
    background: rgba(198, 255, 0, 0.12);
    color: var(--tk-color-primary);
    box-shadow: 0 0 14px rgba(198, 255, 0, 0.12);
}
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 68px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 10px;
    letter-spacing: 0.18em;
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
    font-weight: 500;
}
.tk-breadcrumb a { color: var(--tk-color-text-muted); text-decoration: none; }
.tk-breadcrumb a:hover { color: var(--tk-color-primary); }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.5; }
.tk-breadcrumb-current { color: var(--tk-color-primary); font-weight: 600; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: rgba(11, 11, 13, 0.85);
    backdrop-filter: blur(10px);
    border-bottom: 2px solid transparent;
    border-image: var(--tk-ac-grad) 1;
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: var(--tk-space-lg); border-bottom: 1px solid var(--tk-color-border); }
.tk-tab {
    padding: var(--tk-space-sm) 2px 12px;
    font-size: 12px;
    font-weight: 700;
    font-family: var(--tk-font-heading);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 3px solid transparent;
    margin-bottom: -1px;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-primary); border-image: var(--tk-ac-grad) 1; text-shadow: 0 0 10px rgba(198, 255, 0, 0.5); }
.tk-segmented { display: inline-flex; background: rgba(11, 11, 13, 0.65); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); padding: 3px; gap: 3px; }
.tk-segment {
    padding: 8px 16px;
    font-family: var(--tk-font-heading);
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: var(--tk-radius-full);
    cursor: pointer;
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); box-shadow: 0 0 10px rgba(198, 255, 0, 0.35); }

/* == tk: badge ================================================== */
/* Badge stiker rave: kapsul mono huruf besar dengan isi fluoro translusen; chip
   dipasang miring sedikit seperti stiker yang ditempel buru-buru. */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    padding: 3px 12px;
    border-radius: var(--tk-radius-full);
    background: rgba(198, 255, 0, 0.14);
    color: var(--tk-color-primary);
}
.tk-badge-success { background: rgba(77, 255, 124, 0.13); color: var(--tk-color-success); }
.tk-badge-warning { background: rgba(255, 213, 0, 0.14); color: var(--tk-color-warning); }
.tk-badge-danger { background: rgba(255, 51, 85, 0.14); color: var(--tk-color-danger); }
.tk-badge-info { background: rgba(77, 184, 255, 0.14); color: var(--tk-color-info); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 10px;
    letter-spacing: 0.06em;
    padding: 3px 12px;
    border-radius: var(--tk-radius-full);
    border: 1px solid var(--tk-color-secondary);
    background: rgba(176, 38, 255, 0.10);
    color: var(--tk-color-secondary-hover);
    transform: rotate(-1deg);
}
.tk-chip-remove { border: none; background: none; cursor: pointer; color: var(--tk-color-secondary-hover); font-size: 12px; line-height: 1; padding: 0; }
.tk-chip-remove:hover { color: var(--tk-color-danger); }

/* == tk: alert ================================================== */
.tk-alert {
    display: flex;
    gap: var(--tk-space-sm);
    align-items: flex-start;
    padding: var(--tk-space-md);
    border-radius: var(--tk-radius-sm);
    font-size: var(--tk-text-body-sm);
    border: 1px solid currentColor;
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.4);
}
.tk-alert-title { font-weight: 700; display: block; margin-bottom: 2px; text-transform: uppercase; letter-spacing: 0.06em; }
.tk-alert-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); }
.tk-alert-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); }
.tk-alert-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-alert-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); }
.tk-table th {
    text-align: left;
    font-family: var(--tk-font-mono);
    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--tk-color-primary);
    padding: var(--tk-space-sm) var(--tk-space-md);
    background: var(--tk-color-surface-2);
    border-bottom: 1px solid var(--tk-color-border);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: 1px solid var(--tk-color-border); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: rgba(198, 255, 0, 0.05); }
.tk-table .tk-table-actions { text-align: right; white-space: nowrap; }
.tk-action-btn {
    width: 30px;
    height: 30px;
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
.tk-action-btn:hover { background: rgba(198, 255, 0, 0.10); color: var(--tk-color-primary); }
.tk-action-btn-danger:hover { background: rgba(255, 51, 85, 0.12); color: var(--tk-color-danger); }
.tk-pagination { display: flex; gap: var(--tk-space-xs); align-items: center; }
.tk-page {
    min-width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-full);
    border: 1px solid transparent;
    background: none;
    font-family: var(--tk-font-mono);
    font-size: 13px;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-page:hover { background: rgba(198, 255, 0, 0.08); color: var(--tk-color-text); }
.tk-page-active { border-color: var(--tk-color-primary); color: var(--tk-color-primary); box-shadow: 0 0 10px rgba(198, 255, 0, 0.3); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(4, 4, 5, 0.78);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
/* Modal poster rave: border gradien acid mengelilingi panel gelap. */
.tk-modal {
    background: linear-gradient(var(--tk-color-surface), var(--tk-color-surface)) padding-box, var(--tk-ac-grad) border-box;
    border: 2px solid transparent;
    border-radius: var(--tk-radius) var(--tk-radius-lg) var(--tk-radius) var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg), 0 0 32px rgba(198, 255, 0, 0.12);
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
    border-left: 2px solid transparent;
    border-image: var(--tk-ac-grad) 1;
    box-shadow: var(--tk-shadow-lg), 0 0 24px rgba(176, 38, 255, 0.15);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 24px;
    height: 24px;
    border: 2px solid var(--tk-color-border);
    border-top-color: var(--tk-color-primary);
    border-radius: var(--tk-radius-full);
    filter: var(--tk-ac-glow-green);
    animation: tk-spin 0.7s linear infinite;
}
.tk-progress { height: 10px; background: rgba(11, 11, 13, 0.8); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); overflow: hidden; }
.tk-progress-bar { height: 100%; background: var(--tk-ac-grad); border-radius: var(--tk-radius-full); box-shadow: 0 0 12px rgba(198, 255, 0, 0.5); transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, rgba(198, 255, 0, 0.10) 50%, var(--tk-color-surface-2) 75%);
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
    background: rgba(20, 20, 22, 0.5);
}
.tk-empty-icon { color: var(--tk-color-primary); filter: var(--tk-ac-glow-green); }
.tk-empty-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-h4); }

/* == tk: content-blocks ========================================= */
.tk-hero { text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); position: relative; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); max-width: 580px; margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-2xl); }
.tk-feature { display: flex; flex-direction: column; gap: var(--tk-space-sm); }
/* Ikon fitur blob: gumpalan organik fluoro yang bentuknya tidak simetris. */
.tk-feature-icon {
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(198, 255, 0, 0.14);
    border: none;
    border-radius: var(--tk-ac-blob);
    color: var(--tk-color-primary);
    filter: var(--tk-ac-glow-green);
}
/* CTA poster rave: border gradien acid mengelilingi panel gelap. */
.tk-cta {
    background: linear-gradient(var(--tk-color-surface), var(--tk-color-surface)) padding-box, var(--tk-ac-grad) border-box;
    border: 2px solid transparent;
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow), 0 0 30px rgba(176, 38, 255, 0.14);
    color: var(--tk-color-text);
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
}
.tk-cta .tk-h3 { margin: 0; }
.tk-cta .tk-muted { color: var(--tk-color-text-muted); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: acid flavor ============================================ */
/* Penimpa karakter acid di atas struktur kontrak: menang kaskade karena berada di
   ekor berkas. Tanda tangan kit ini adalah headline terdistorsi (miring meregang),
   teks gradien psychedelic, blob organik, stiker miring, dan smiley rave. */
.tk-hero .tk-display { font-size: clamp(30px, 5vw, var(--tk-text-display)); }
/* Teks acid: gradien psychedelic yang dipotong ke huruf. */
.tk-acid-text {
    background: var(--tk-ac-grad);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
/* Distorsi: huruf dimiringkan dan diregangkan vertikal — tipografi yang meleleh
   oleh bass. Pasang di headline mana pun. */
.tk-warp { display: inline-block; transform: skewX(-8deg) scaleY(1.12); transform-origin: left bottom; }
/* Wobble animasi: distorsi yang bernapas pelan mengikuti beat. */
.tk-wobble { animation: tk-wobble 4s ease-in-out infinite; display: inline-block; }
@keyframes tk-wobble {
    0%, 100% { transform: skewX(-8deg) scaleY(1.12); }
    50% { transform: skewX(-3deg) scaleY(1.04) rotate(-0.6deg); }
}
/* Blob: bentuk organik aneh untuk foto, dekorasi, atau panel kecil. */
.tk-blob { border-radius: var(--tk-ac-blob); }
.tk-blob-2 { border-radius: var(--tk-ac-blob-2); }
/* Stiker: elemen ditempel miring seperti flyer di tiang listrik. */
.tk-sticker { display: inline-block; transform: rotate(-2.5deg); }
.tk-sticker-alt { display: inline-block; transform: rotate(1.8deg); }
/* Ikon fitur bergiliran fluoro: hijau acid, ungu, oranye — tiap blob beda bentuk. */
.tk-feature:nth-child(3n+1) .tk-feature-icon { background: rgba(198, 255, 0, 0.14); color: var(--tk-color-primary); filter: var(--tk-ac-glow-green); border-radius: var(--tk-ac-blob); }
.tk-feature:nth-child(3n+2) .tk-feature-icon { background: rgba(176, 38, 255, 0.16); color: var(--tk-color-secondary-hover); filter: var(--tk-ac-glow-violet); border-radius: var(--tk-ac-blob-2); }
.tk-feature:nth-child(3n) .tk-feature-icon { background: rgba(255, 158, 0, 0.13); color: var(--tk-color-accent); filter: drop-shadow(0 0 8px rgba(255, 158, 0, 0.45)); border-radius: 55% 45% 38% 62% / 42% 55% 45% 58%; }
/* Foto: saturasi dinaikkan ke arah fluoro dengan bingkai blob halus. */
.tk-card img, .tk-hero img, figure img {
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    filter: saturate(1.35) contrast(1.06);
}
.tk-hero img, figure img { box-shadow: var(--tk-shadow); }
/* Marka rave: label mono berkedip fluoro untuk metrik dan penanda teknis. */
.tk-rave-tag {
    display: inline-block;
    font-family: var(--tk-font-mono);
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.10em;
    color: var(--tk-color-primary);
    background: rgba(198, 255, 0, 0.07);
    border: 1px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-full);
    padding: 2px 14px;
    text-shadow: 0 0 12px rgba(198, 255, 0, 0.6);
}
`;
