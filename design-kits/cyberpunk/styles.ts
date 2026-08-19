/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const CYBERPUNK_STYLES = `/* Cyberpunk — kit design TOKENAI.
   High-tech dystopian: latar malam biru-hitam ber-grid dengan cahaya kota neon,
   aksen cyan/magenta/kuning menyala, tombol chamfer (sudut terpangkas) ala HUD,
   headline glitch beraberasi kromatik, garis holografik, ikon heksagon, scanline
   CRT tipis, dan tipografi Orbitron/Rajdhani. Kit satu-tema: gelap secara bawaan,
   tanpa mode terang — dystopia tidak mengenal siang.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #00F0FF;
    --tk-color-primary-hover: #6BF8FF;
    --tk-color-primary-contrast: #051018;
    --tk-color-secondary: #FF2EC8;
    --tk-color-secondary-hover: #FF63D8;
    --tk-color-secondary-contrast: #1C0114;
    --tk-color-accent: #F9F002;
    --tk-color-background: #060913;
    --tk-color-surface: #0C1222;
    --tk-color-surface-2: #141C36;
    --tk-color-text: #E6F1FF;
    --tk-color-text-muted: #7E8DB3;
    --tk-color-border: #24315E;
    --tk-color-success: #00FFA3;
    --tk-color-success-soft: #06301F;
    --tk-color-warning: #FFB300;
    --tk-color-warning-soft: #2E2405;
    --tk-color-danger: #FF3D5E;
    --tk-color-danger-soft: #33101A;
    --tk-color-info: #4DA6FF;
    --tk-color-info-soft: #0D2440;

    --tk-font-heading: 'Orbitron', 'Arial Black', sans-serif;
    --tk-font-body: 'Rajdhani', system-ui, sans-serif;
    --tk-font-mono: 'IBM Plex Mono', ui-monospace, monospace;
    --tk-weight-heading: 700;
    --tk-weight-body: 500;
    --tk-leading-heading: 1.2;
    --tk-leading-body: 1.6;

    --tk-text-display: 46px;
    --tk-text-h1: 34px;
    --tk-text-h2: 26px;
    --tk-text-h3: 20px;
    --tk-text-h4: 16px;
    --tk-text-title: 15px;
    --tk-text-body-lg: 19px;
    --tk-text-body: 17px;
    --tk-text-body-sm: 15px;
    --tk-text-caption: 13px;

    --tk-space-xs: 4px;
    --tk-space-sm: 8px;
    --tk-space-md: 16px;
    --tk-space-lg: 24px;
    --tk-space-xl: 32px;
    --tk-space-2xl: 48px;
    --tk-space-3xl: 64px;
    --tk-space-section: 96px;

    --tk-radius-sm: 2px;
    --tk-radius: 4px;
    --tk-radius-lg: 10px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    --tk-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.55);
    --tk-shadow: 0 6px 20px rgba(0, 0, 0, 0.6), 0 0 14px rgba(0, 240, 255, 0.07);
    --tk-shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.7), 0 0 28px rgba(0, 240, 255, 0.10);

    --tk-transition: 140ms ease;
    --tk-container: 1200px;

    /* Token khas cyberpunk (bukan kontrak): gradien holografik, glow neon cyan/magenta,
       chamfer sudut terpangkas ala HUD, latar kota malam ber-grid dengan cahaya neon,
       dan scanline CRT tipis. */
    --tk-cy-holo: linear-gradient(115deg, #00F0FF, #7B2EFF 38%, #FF2EC8 66%, #F9F002);
    --tk-cy-glow-cyan: drop-shadow(0 0 7px rgba(0, 240, 255, 0.55));
    --tk-cy-glow-magenta: drop-shadow(0 0 7px rgba(255, 46, 200, 0.55));
    --tk-cy-chamfer: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
    --tk-cy-chamfer-sm: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);
    --tk-cy-bg:
        radial-gradient(1000px 520px at 10% -10%, rgba(0, 240, 255, 0.10) 0%, rgba(0, 240, 255, 0) 55%),
        radial-gradient(900px 480px at 95% 10%, rgba(255, 46, 200, 0.08) 0%, rgba(255, 46, 200, 0) 55%),
        linear-gradient(rgba(0, 240, 255, 0.035) 1px, transparent 1px) 0 0 / 100% 44px,
        linear-gradient(90deg, rgba(0, 240, 255, 0.035) 1px, transparent 1px) 0 0 / 44px 100%,
        #060913;
    --tk-cy-scanline: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.14) 0 1px, transparent 1px 4px);
}

/* == tk: base =================================================== */
body {
    margin: 0;
    background: var(--tk-cy-bg);
    color: var(--tk-color-text);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body);
    font-weight: var(--tk-weight-body);
    line-height: var(--tk-leading-body);
    -webkit-font-smoothing: antialiased;
}
/* Scanline CRT tipis di atas segalanya — pelapis dystopia yang tidak menghalangi klik. */
body::after {
    content: '';
    position: fixed;
    inset: 0;
    background: var(--tk-cy-scanline);
    pointer-events: none;
    z-index: 9999;
}
.tk-container {
    max-width: var(--tk-container);
    margin: 0 auto;
    padding: 0 var(--tk-space-lg);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }
::selection { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    letter-spacing: 0.03em;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); line-height: 1.1; font-weight: 900; }
.tk-h1 { font-size: var(--tk-text-h1); }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-title); font-weight: 700; letter-spacing: 0.04em; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption {
    font-size: var(--tk-text-caption);
    color: var(--tk-color-text-muted);
    font-family: var(--tk-font-mono);
    text-transform: uppercase;
    letter-spacing: 0.12em;
}
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link { color: var(--tk-color-primary); font-weight: 600; text-decoration: none; }
.tk-link:hover { text-shadow: 0 0 10px rgba(0, 240, 255, 0.6); text-decoration: underline; text-underline-offset: 3px; }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.9em; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); color: var(--tk-color-accent); padding: 1px 6px; border-radius: var(--tk-radius-sm); }

/* == tk: button ================================================= */
/* Tombol HUD: sudut chamfer terpangkas (clip-path), label Rajdhani tebal renggang huruf
   besar, glow neon lewat filter drop-shadow (box-shadow ikut terpotong clip-path).
   Varian outline/ghost sengaja persegi ber-border tipis — panel sekunder pada HUD. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-body);
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    line-height: 1;
    padding: 13px 24px;
    border: none;
    border-radius: 0;
    clip-path: var(--tk-cy-chamfer);
    cursor: pointer;
    transition: filter var(--tk-transition), transform var(--tk-transition), background var(--tk-transition), color var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:not(:disabled):active { transform: translateY(1px); }
.tk-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); filter: var(--tk-cy-glow-cyan); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); filter: drop-shadow(0 0 12px rgba(0, 240, 255, 0.8)); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); filter: var(--tk-cy-glow-magenta); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); filter: drop-shadow(0 0 12px rgba(255, 46, 200, 0.8)); }
.tk-btn-danger { background: var(--tk-color-danger); color: #14030A; filter: drop-shadow(0 0 7px rgba(255, 61, 94, 0.5)); }
.tk-btn-danger:hover:not(:disabled) { filter: drop-shadow(0 0 12px rgba(255, 61, 94, 0.8)); }
.tk-btn-outline {
    background: rgba(0, 240, 255, 0.04);
    color: var(--tk-color-primary);
    border: 1px solid var(--tk-color-primary);
    clip-path: none;
    border-radius: var(--tk-radius-sm);
    padding: 12px 23px;
}
.tk-btn-outline:hover:not(:disabled) { background: rgba(0, 240, 255, 0.12); box-shadow: 0 0 12px rgba(0, 240, 255, 0.35), inset 0 0 8px rgba(0, 240, 255, 0.12); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); clip-path: none; border-radius: var(--tk-radius-sm); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-text { background: none; color: var(--tk-color-primary); clip-path: none; padding-left: 4px; padding-right: 4px; }
.tk-btn-text:hover:not(:disabled) { text-shadow: 0 0 10px rgba(0, 240, 255, 0.6); text-decoration: underline; text-underline-offset: 3px; }
.tk-btn-sm { font-size: 11px; padding: 9px 16px; clip-path: var(--tk-cy-chamfer-sm); }
.tk-btn-sm.tk-btn-outline, .tk-btn-sm.tk-btn-ghost, .tk-btn-sm.tk-btn-text { clip-path: none; padding: 8px 15px; }
.tk-btn-sm.tk-btn-text { padding-left: 4px; padding-right: 4px; }
.tk-btn-lg { font-size: 15px; padding: 17px 34px; }
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
.tk-label { font-family: var(--tk-font-mono); font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--tk-color-primary); }
.tk-help { font-size: 13px; color: var(--tk-color-text-muted); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    color: var(--tk-color-text);
    background: rgba(6, 9, 19, 0.6);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 11px 14px;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-primary);
    box-shadow: 0 0 0 1px var(--tk-color-primary), 0 0 14px rgba(0, 240, 255, 0.3);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: 0 0 0 1px var(--tk-color-danger), 0 0 14px rgba(255, 61, 94, 0.3);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: 0 0 0 1px var(--tk-color-success), 0 0 14px rgba(0, 255, 163, 0.25); }
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
    box-shadow: 0 0 0 1px var(--tk-color-primary), 0 0 14px rgba(0, 240, 255, 0.3);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    box-shadow: var(--tk-shadow-lg), 0 0 18px rgba(0, 240, 255, 0.15);
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
.tk-option:hover { background: rgba(0, 240, 255, 0.08); }
.tk-option-selected { background: rgba(0, 240, 255, 0.12); color: var(--tk-color-primary); font-weight: 600; }
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
    background: rgba(6, 9, 19, 0.6);
    border: 1px solid var(--tk-color-border);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-checkbox { border-radius: var(--tk-radius-sm); }
.tk-checkbox:hover, .tk-radio:hover { border-color: var(--tk-color-primary); }
.tk-checkbox:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); box-shadow: 0 0 10px rgba(0, 240, 255, 0.45); }
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
.tk-radio:checked { border-color: var(--tk-color-primary); box-shadow: inset 0 0 0 3px var(--tk-color-surface), 0 0 10px rgba(0, 240, 255, 0.45); background: var(--tk-color-primary); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 240, 255, 0.45);
}
.tk-toggle { position: relative; width: 44px; height: 24px; flex: none; margin: 0; appearance: none; border: 1px solid var(--tk-color-border); background: rgba(6, 9, 19, 0.6); border-radius: var(--tk-radius-full); cursor: pointer; transition: background var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 3px; left: 3px; width: 16px; height: 16px; background: var(--tk-color-text-muted); border-radius: var(--tk-radius-full); transition: transform var(--tk-transition), background var(--tk-transition); }
.tk-toggle:checked { background: rgba(0, 240, 255, 0.15); border-color: var(--tk-color-primary); box-shadow: 0 0 10px rgba(0, 240, 255, 0.35); }
.tk-toggle:checked::after { transform: translateX(20px); background: var(--tk-color-primary); box-shadow: 0 0 8px rgba(0, 240, 255, 0.7); }

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
    background: rgba(0, 240, 255, 0.08);
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
    border-radius: var(--tk-radius-sm);
    background: var(--tk-color-accent);
    color: #14130A;
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 500;
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
    box-shadow: var(--tk-shadow-lg), 0 0 18px rgba(0, 240, 255, 0.15);
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
.tk-dropdown-label { padding: 6px 12px; font-family: var(--tk-font-mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--tk-color-text-muted); }
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
.tk-dropdown-item:hover { background: rgba(0, 240, 255, 0.08); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-primary); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: rgba(255, 61, 94, 0.12); }
.tk-dropdown-divider { height: 1px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) 0; }

/* == tk: card =================================================== */
/* Panel HUD: permukaan gelap ber-border tipis dengan garis holografik 2px di tepi atas —
   tanda tangan hologram kit ini. */
.tk-card {
    background: linear-gradient(var(--tk-cy-holo)) top / 100% 2px no-repeat, var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-sm);
    overflow: hidden;
}
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-sm); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-family: var(--tk-font-heading); font-weight: 700; letter-spacing: 0.02em; color: var(--tk-color-primary); text-shadow: 0 0 16px rgba(0, 240, 255, 0.4); }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 600; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 600; }

/* == tk: navigation ============================================= */
/* Navbar konsol malam: permukaan gelap semi-transparan ber-blur dengan garis neon cyan
   di tepi bawah. */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: rgba(12, 18, 34, 0.82);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--tk-color-primary);
    box-shadow: 0 1px 18px rgba(0, 240, 255, 0.18);
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 900; font-size: 16px; letter-spacing: 0.08em; margin-right: auto; color: var(--tk-color-text); }
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: 13px; font-weight: 700; font-family: var(--tk-font-body); text-transform: uppercase; letter-spacing: 0.12em; }
.tk-navbar-link:hover { color: var(--tk-color-text); text-shadow: 0 0 10px rgba(0, 240, 255, 0.5); }
.tk-navbar-link-active { color: var(--tk-color-primary); text-shadow: 0 0 10px rgba(0, 240, 255, 0.5); }
.tk-navbar-dark { background: rgba(3, 5, 11, 0.92); border-bottom-color: var(--tk-color-secondary); box-shadow: 0 1px 18px rgba(255, 46, 200, 0.18); }
.tk-navbar-dark .tk-navbar-link-active { color: var(--tk-color-secondary); text-shadow: 0 0 10px rgba(255, 46, 200, 0.5); }
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
    border-radius: var(--tk-radius-sm);
    color: var(--tk-color-text-muted);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-sidebar-item:hover { background: rgba(0, 240, 255, 0.06); color: var(--tk-color-text); }
.tk-sidebar-item-active {
    background: rgba(0, 240, 255, 0.10);
    color: var(--tk-color-primary);
    box-shadow: inset 2px 0 0 var(--tk-color-primary), 0 0 14px rgba(0, 240, 255, 0.12);
}
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 68px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    letter-spacing: 0.16em;
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
    background: rgba(12, 18, 34, 0.82);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--tk-color-primary);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: var(--tk-space-lg); border-bottom: 1px solid var(--tk-color-border); }
.tk-tab {
    padding: var(--tk-space-sm) 2px 12px;
    font-size: 13px;
    font-weight: 700;
    font-family: var(--tk-font-body);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-primary); border-bottom-color: var(--tk-color-primary); text-shadow: 0 0 10px rgba(0, 240, 255, 0.5); box-shadow: 0 8px 12px -8px rgba(0, 240, 255, 0.6); }
.tk-segmented { display: inline-flex; background: rgba(6, 9, 19, 0.6); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-sm); padding: 3px; gap: 3px; }
.tk-segment {
    padding: 8px 16px;
    font-family: var(--tk-font-body);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.10em;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: rgba(0, 240, 255, 0.14); color: var(--tk-color-primary); box-shadow: 0 0 10px rgba(0, 240, 255, 0.25); }

/* == tk: badge ================================================== */
/* Badge tag data HUD: mono huruf besar, chamfer kecil, isi neon translusen. */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.10em;
    padding: 3px 12px;
    clip-path: var(--tk-cy-chamfer-sm);
    background: rgba(0, 240, 255, 0.12);
    color: var(--tk-color-primary);
}
.tk-badge-success { background: rgba(0, 255, 163, 0.12); color: var(--tk-color-success); }
.tk-badge-warning { background: rgba(255, 179, 0, 0.14); color: var(--tk-color-warning); }
.tk-badge-danger { background: rgba(255, 61, 94, 0.14); color: var(--tk-color-danger); }
.tk-badge-info { background: rgba(77, 166, 255, 0.14); color: var(--tk-color-info); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    letter-spacing: 0.06em;
    padding: 3px 12px;
    border-radius: var(--tk-radius-sm);
    border: 1px solid var(--tk-color-secondary);
    background: rgba(255, 46, 200, 0.08);
    color: var(--tk-color-secondary);
}
.tk-chip-remove { border: none; background: none; cursor: pointer; color: var(--tk-color-secondary); font-size: 12px; line-height: 1; padding: 0; }
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
    box-shadow: inset 3px 0 0 currentColor;
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
    font-weight: 500;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--tk-color-primary);
    padding: var(--tk-space-sm) var(--tk-space-md);
    background: var(--tk-color-surface-2);
    border-top: 1px solid var(--tk-color-primary);
    border-bottom: 1px solid var(--tk-color-border);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: 1px solid var(--tk-color-border); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: rgba(0, 240, 255, 0.05); }
.tk-table .tk-table-actions { text-align: right; white-space: nowrap; }
.tk-action-btn {
    width: 30px;
    height: 30px;
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
.tk-action-btn:hover { background: rgba(0, 240, 255, 0.10); color: var(--tk-color-primary); }
.tk-action-btn-danger:hover { background: rgba(255, 61, 94, 0.12); color: var(--tk-color-danger); }
.tk-pagination { display: flex; gap: var(--tk-space-xs); align-items: center; }
.tk-page {
    min-width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-sm);
    border: 1px solid transparent;
    background: none;
    font-family: var(--tk-font-mono);
    font-size: 13px;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-page:hover { background: rgba(0, 240, 255, 0.08); color: var(--tk-color-text); }
.tk-page-active { border-color: var(--tk-color-primary); color: var(--tk-color-primary); box-shadow: 0 0 10px rgba(0, 240, 255, 0.3); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(3, 5, 11, 0.75);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: linear-gradient(var(--tk-cy-holo)) top / 100% 2px no-repeat, var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg), 0 0 32px rgba(0, 240, 255, 0.12);
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
    border-left: 1px solid var(--tk-color-primary);
    box-shadow: var(--tk-shadow-lg), 0 0 24px rgba(0, 240, 255, 0.15);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 24px;
    height: 24px;
    border: 2px solid var(--tk-color-border);
    border-top-color: var(--tk-color-primary);
    border-radius: var(--tk-radius-full);
    filter: var(--tk-cy-glow-cyan);
    animation: tk-spin 0.7s linear infinite;
}
.tk-progress { height: 8px; background: rgba(6, 9, 19, 0.8); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-sm); overflow: hidden; }
.tk-progress-bar { height: 100%; background: var(--tk-cy-holo); box-shadow: 0 0 12px rgba(0, 240, 255, 0.5); transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, rgba(0, 240, 255, 0.10) 50%, var(--tk-color-surface-2) 75%);
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
    border-radius: var(--tk-radius);
    background: rgba(12, 18, 34, 0.5);
}
.tk-empty-icon { color: var(--tk-color-primary); filter: var(--tk-cy-glow-cyan); }
.tk-empty-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-h4); letter-spacing: 0.04em; }

/* == tk: content-blocks ========================================= */
.tk-hero { text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); position: relative; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); max-width: 580px; margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-2xl); }
.tk-feature { display: flex; flex-direction: column; gap: var(--tk-space-sm); }
/* Ikon fitur heksagon HUD: sel sarang data dengan neon translusen dan glow. */
.tk-feature-icon {
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 240, 255, 0.14);
    border: none;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    color: var(--tk-color-primary);
    filter: var(--tk-cy-glow-cyan);
}
/* CTA panel holografik: border gradien holo mengelilingi permukaan gelap. */
.tk-cta {
    background: linear-gradient(var(--tk-color-surface), var(--tk-color-surface)) padding-box, var(--tk-cy-holo) border-box;
    border: 1px solid transparent;
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow), 0 0 30px rgba(123, 46, 255, 0.15);
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

/* == tk: cyberpunk flavor ======================================= */
/* Penimpa karakter cyberpunk di atas struktur kontrak: menang kaskade karena berada di
   ekor berkas. Tanda tangan kit ini adalah headline glitch beraberasi kromatik, teks
   holografik, readout terminal neon, dan ikon heksagon. */
.tk-hero .tk-display {
    font-size: clamp(30px, 5vw, var(--tk-text-display));
    text-transform: uppercase;
    text-shadow: 2px 0 rgba(255, 46, 200, 0.55), -2px 0 rgba(0, 240, 255, 0.55);
}
/* Glitch animasi: aberasi kromatik yang sesekali tergelincir — pasang di headline mana pun. */
.tk-glitch { animation: tk-glitch 3.2s infinite steps(1); }
@keyframes tk-glitch {
    0%, 92% { text-shadow: 2px 0 rgba(255, 46, 200, 0.55), -2px 0 rgba(0, 240, 255, 0.55); transform: none; }
    93% { text-shadow: -4px 0 rgba(255, 46, 200, 0.8), 4px 0 rgba(0, 240, 255, 0.8); transform: translateX(2px); }
    95% { text-shadow: 4px 2px rgba(255, 46, 200, 0.8), -4px -2px rgba(0, 240, 255, 0.8); transform: translateX(-2px) skewX(-2deg); }
    97% { text-shadow: -3px 0 rgba(249, 240, 2, 0.7), 3px 0 rgba(0, 240, 255, 0.8); transform: none; }
}
/* Teks holografik: gradien holo yang dipotong ke huruf. */
.tk-holo-text {
    background: var(--tk-cy-holo);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
/* Ikon heksagon bergiliran warna neon: cyan, magenta, kuning. */
.tk-feature:nth-child(3n+1) .tk-feature-icon { background: rgba(0, 240, 255, 0.14); color: var(--tk-color-primary); filter: var(--tk-cy-glow-cyan); }
.tk-feature:nth-child(3n+2) .tk-feature-icon { background: rgba(255, 46, 200, 0.14); color: var(--tk-color-secondary); filter: var(--tk-cy-glow-magenta); }
.tk-feature:nth-child(3n) .tk-feature-icon { background: rgba(249, 240, 2, 0.12); color: var(--tk-color-accent); filter: drop-shadow(0 0 7px rgba(249, 240, 2, 0.45)); }
/* Foto: bingkai gelap ber-border tipis dengan nada dingin. */
.tk-card img, .tk-hero img, figure img {
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    filter: saturate(1.1) contrast(1.05);
}
.tk-hero img, figure img { box-shadow: var(--tk-shadow); }
/* Readout terminal: angka telemetri neon berkedip pelan — untuk metrik dan label teknis. */
.tk-readout {
    display: inline-block;
    font-family: var(--tk-font-mono);
    font-size: 18px;
    letter-spacing: 0.12em;
    color: var(--tk-color-primary);
    background: rgba(0, 240, 255, 0.06);
    border: 1px solid var(--tk-color-primary);
    border-radius: var(--tk-radius-sm);
    padding: 2px 12px;
    text-shadow: 0 0 12px rgba(0, 240, 255, 0.6);
}
`;
