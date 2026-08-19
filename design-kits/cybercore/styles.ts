/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const CYBERCORE_STYLES = `/* Cybercore — kit design TOKENAI.
   Antarmuka komputer, bukan kota neon: seluruhnya monospace (JetBrains Mono), kertas
   teknik ber-grid milimeter, garis rambut tinta 1px, window UI dengan title bar
   terminal, badge ber-bracket [OK], progress bar blok ▓▓▓, kursor berkedip, prompt
   $, dan dither 1-bit sebagai artefak digital. Mode gelap memindahkan semuanya ke
   CRT fosfor: teks hijau di atas hitam dengan scanline tipis.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #007A3D;
    --tk-color-primary-hover: #005C2E;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: #141414;
    --tk-color-secondary-hover: #000000;
    --tk-color-secondary-contrast: #FFFFFF;
    --tk-color-accent: #E85D00;
    --tk-color-background: #F7F7F2;
    --tk-color-surface: #FFFFFF;
    --tk-color-surface-2: #ECECE4;
    --tk-color-text: #141414;
    --tk-color-text-muted: #6B6B62;
    --tk-color-border: #141414;
    --tk-color-success: #007A3D;
    --tk-color-success-soft: #DFF2E4;
    --tk-color-warning: #9A6700;
    --tk-color-warning-soft: #F5EDCE;
    --tk-color-danger: #D22D2D;
    --tk-color-danger-soft: #F8DEDE;
    --tk-color-info: #0055CC;
    --tk-color-info-soft: #DFE9F8;

    --tk-font-heading: 'JetBrains Mono', ui-monospace, monospace;
    --tk-font-body: 'JetBrains Mono', ui-monospace, monospace;
    --tk-font-mono: 'JetBrains Mono', ui-monospace, monospace;
    --tk-weight-heading: 800;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.25;
    --tk-leading-body: 1.65;

    --tk-text-display: 40px;
    --tk-text-h1: 30px;
    --tk-text-h2: 23px;
    --tk-text-h3: 18px;
    --tk-text-h4: 15px;
    --tk-text-title: 14px;
    --tk-text-body-lg: 17px;
    --tk-text-body: 15px;
    --tk-text-body-sm: 13px;
    --tk-text-caption: 12px;

    --tk-space-xs: 4px;
    --tk-space-sm: 8px;
    --tk-space-md: 16px;
    --tk-space-lg: 24px;
    --tk-space-xl: 32px;
    --tk-space-2xl: 48px;
    --tk-space-3xl: 64px;
    --tk-space-section: 88px;

    --tk-radius-sm: 0;
    --tk-radius: 0;
    --tk-radius-lg: 0;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    --tk-shadow-sm: 1px 1px 0 rgba(20, 20, 20, 0.10);
    --tk-shadow: 3px 3px 0 rgba(20, 20, 20, 0.12);
    --tk-shadow-lg: 5px 5px 0 rgba(20, 20, 20, 0.16);

    --tk-transition: 60ms linear;
    --tk-container: 1080px;

    /* Token khas cybercore (bukan kontrak): kertas teknik ber-grid milimeter (minor 8px,
       mayor 40px), scanline CRT (mati di mode terang), dan dither 1-bit untuk artefak
       digital. */
    --tk-cc-bg:
        linear-gradient(rgba(20, 20, 20, 0.05) 1px, transparent 1px) 0 0 / 100% 40px,
        linear-gradient(90deg, rgba(20, 20, 20, 0.05) 1px, transparent 1px) 0 0 / 40px 100%,
        linear-gradient(rgba(20, 20, 20, 0.022) 1px, transparent 1px) 0 0 / 100% 8px,
        linear-gradient(90deg, rgba(20, 20, 20, 0.022) 1px, transparent 1px) 0 0 / 8px 100%,
        #F7F7F2;
    --tk-cc-scan: none;
    --tk-cc-dither: repeating-conic-gradient(rgba(20, 20, 20, 0.16) 0% 25%, transparent 0% 50%) 0 0 / 4px 4px;
    --tk-cc-terminal-bg: #0A120C;
    --tk-cc-terminal-ink: #3DF56E;
}

/* Mode gelap: CRT fosfor hijau — teks hijau pucat di atas hitam kehijauan, grid dan
   garis rambut ikut fosfor, plus scanline tipis. Aktifkan dengan atribut
   data-tk-theme="dark" pada <html> atau <body>. */
[data-tk-theme="dark"] {
    --tk-color-primary: #3DF56E;
    --tk-color-primary-hover: #7CFF9E;
    --tk-color-primary-contrast: #03140A;
    --tk-color-secondary: #A8F0B8;
    --tk-color-secondary-hover: #D8FFE2;
    --tk-color-secondary-contrast: #05140B;
    --tk-color-accent: #FFB000;
    --tk-color-background: #050A06;
    --tk-color-surface: #0A120C;
    --tk-color-surface-2: #122015;
    --tk-color-text: #A8F0B8;
    --tk-color-text-muted: #5E9B72;
    --tk-color-border: #35704A;
    --tk-color-success: #3DF56E;
    --tk-color-success-soft: #0A2C16;
    --tk-color-warning: #FFB000;
    --tk-color-warning-soft: #2A2206;
    --tk-color-danger: #FF5A5A;
    --tk-color-danger-soft: #2E0E0E;
    --tk-color-info: #46C8FF;
    --tk-color-info-soft: #0A2430;
    --tk-shadow-sm: 1px 1px 0 rgba(0, 0, 0, 0.5);
    --tk-shadow: 3px 3px 0 rgba(0, 0, 0, 0.55);
    --tk-shadow-lg: 5px 5px 0 rgba(0, 0, 0, 0.6);
    --tk-cc-bg:
        linear-gradient(rgba(61, 245, 110, 0.05) 1px, transparent 1px) 0 0 / 100% 40px,
        linear-gradient(90deg, rgba(61, 245, 110, 0.05) 1px, transparent 1px) 0 0 / 40px 100%,
        #050A06;
    --tk-cc-scan: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0 1px, transparent 1px 3px);
    --tk-cc-dither: repeating-conic-gradient(rgba(168, 240, 184, 0.18) 0% 25%, transparent 0% 50%) 0 0 / 4px 4px;
    --tk-cc-terminal-bg: #030805;
    --tk-cc-terminal-ink: #3DF56E;
}

/* == tk: base =================================================== */
body {
    margin: 0;
    background: var(--tk-cc-bg);
    color: var(--tk-color-text);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body);
    font-weight: var(--tk-weight-body);
    line-height: var(--tk-leading-body);
    -webkit-font-smoothing: antialiased;
}
/* Scanline CRT: hanya menyala di mode gelap (token --tk-cc-scan berisi none di terang). */
body::after {
    content: '';
    position: fixed;
    inset: 0;
    background: var(--tk-cc-scan);
    pointer-events: none;
    z-index: 9999;
}
.tk-container {
    max-width: var(--tk-container);
    margin: 0 auto;
    padding: 0 var(--tk-space-lg);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }
/* Seleksi teks ala terminal: balik warna. */
::selection { background: var(--tk-color-text); color: var(--tk-color-background); }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    letter-spacing: -0.01em;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); line-height: 1.15; }
.tk-h1 { font-size: var(--tk-text-h1); }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-title); font-weight: 700; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption {
    font-size: var(--tk-text-caption);
    color: var(--tk-color-text-muted);
    font-family: var(--tk-font-mono);
    text-transform: uppercase;
    letter-spacing: 0.08em;
}
.tk-muted { color: var(--tk-color-text-muted); }
/* Tautan terminal: garis bawah; hover membalik warna seperti blok seleksi. */
.tk-link { color: var(--tk-color-primary); font-weight: 500; text-decoration: underline; text-underline-offset: 3px; }
.tk-link:hover { background: var(--tk-color-text); color: var(--tk-color-background); text-decoration: none; }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.95em; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); color: var(--tk-color-accent); padding: 1px 6px; }

/* == tk: button ================================================= */
/* Tombol blok terminal: persegi tajam ber-border tinta 1px, label mono huruf besar.
   Outline/ghost membalik warna saat hover — efek seleksi terminal. Focus: outline
   putus-putus retro. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-mono);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    line-height: 1;
    padding: 12px 22px;
    border: 1px solid var(--tk-color-border);
    border-radius: 0;
    box-shadow: var(--tk-shadow-sm);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), transform var(--tk-transition), box-shadow var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:focus-visible { outline: 1px dotted var(--tk-color-text); outline-offset: 3px; }
.tk-btn:not(:disabled):active { transform: translate(1px, 1px); box-shadow: none; }
.tk-btn:disabled { opacity: 0.45; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); border-color: var(--tk-color-primary); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); border-color: var(--tk-color-primary-hover); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); border-color: var(--tk-color-secondary); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); border-color: var(--tk-color-secondary-hover); }
.tk-btn-outline { background: var(--tk-color-surface); color: var(--tk-color-text); }
.tk-btn-outline:hover:not(:disabled) { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); border-color: transparent; box-shadow: none; }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-btn-danger { background: var(--tk-color-danger); color: #FFFFFF; border-color: var(--tk-color-danger); }
.tk-btn-danger:hover:not(:disabled) { filter: brightness(0.85); }
.tk-btn-text { background: none; color: var(--tk-color-primary); border-color: transparent; box-shadow: none; padding-left: 4px; padding-right: 4px; text-decoration: underline; text-underline-offset: 3px; }
.tk-btn-text:hover:not(:disabled) { background: var(--tk-color-text); color: var(--tk-color-background); text-decoration: none; }
.tk-btn-sm { font-size: 11px; padding: 8px 14px; }
.tk-btn-lg { font-size: 14px; padding: 16px 30px; }
.tk-btn-icon { padding: 12px; }
.tk-btn-loading { position: relative; color: transparent !important; pointer-events: none; }
.tk-btn-loading::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border: 2px solid var(--tk-color-primary-contrast);
    border-top-color: transparent;
    animation: tk-spin 0.8s steps(8) infinite;
}
.tk-btn-secondary.tk-btn-loading::after { border-color: var(--tk-color-secondary-contrast); border-top-color: transparent; }
.tk-btn-outline.tk-btn-loading::after, .tk-btn-ghost.tk-btn-loading::after {
    border-color: var(--tk-color-text);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }
@keyframes tk-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }

/* == tk: form =================================================== */
.tk-field { display: flex; flex-direction: column; gap: var(--tk-space-xs); margin-bottom: var(--tk-space-md); }
.tk-label { font-family: var(--tk-font-mono); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--tk-color-text); }
.tk-help { font-size: 12px; color: var(--tk-color-text-muted); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: 0;
    padding: 11px 14px;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-primary);
    box-shadow: inset 0 0 0 1px var(--tk-color-primary);
    outline: 1px dotted var(--tk-color-primary);
    outline-offset: 3px;
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: inset 0 0 0 1px var(--tk-color-danger);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-error .tk-help::before { content: '[!] '; }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: inset 0 0 0 1px var(--tk-color-success); }
.tk-field-success .tk-help { color: var(--tk-color-success); }
.tk-field-success .tk-help::before { content: '[OK] '; }
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
    box-shadow: inset 0 0 0 1px var(--tk-color-primary);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: 0;
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
    padding: 8px 12px;
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: 0;
    cursor: pointer;
    text-align: left;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-option:hover { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-option:hover .tk-option-check { color: var(--tk-color-background); }
.tk-option-selected { background: var(--tk-color-surface-2); font-weight: 700; }
.tk-option-check { margin-left: auto; color: var(--tk-color-primary); display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 8px 12px;
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
    font-family: var(--tk-font-mono);
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
    width: 16px;
    height: 16px;
    flex: none;
    margin: 0;
    position: relative;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition);
}
.tk-checkbox { border-radius: 0; }
.tk-checkbox:hover, .tk-radio:hover { border-color: var(--tk-color-primary); }
.tk-checkbox:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); }
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
/* Radio kotak isi blok — indikator persegi penuh ala kursor terminal. */
.tk-radio { border-radius: 0; }
.tk-radio:checked { border-color: var(--tk-color-primary); }
.tk-radio:checked::after {
    content: '';
    position: absolute;
    inset: 3px;
    background: var(--tk-color-primary);
}
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: 1px dotted var(--tk-color-text);
    outline-offset: 3px;
}
.tk-toggle { position: relative; width: 42px; height: 22px; flex: none; margin: 0; appearance: none; border: 1px solid var(--tk-color-border); background: var(--tk-color-surface); border-radius: 0; cursor: pointer; transition: background var(--tk-transition), border-color var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background: var(--tk-color-text-muted); transition: transform var(--tk-transition), background var(--tk-transition); }
.tk-toggle:checked { border-color: var(--tk-color-primary); background: var(--tk-color-surface); }
.tk-toggle:checked::after { transform: translateX(20px); background: var(--tk-color-primary); }

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
    border: 1px solid var(--tk-color-border);
    border-bottom-width: 2px;
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
    background: var(--tk-color-accent);
    color: #FFFFFF;
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 700;
}
.tk-filter-active { display: flex; flex-wrap: wrap; align-items: center; gap: var(--tk-space-sm); margin-top: var(--tk-space-sm); }

/* == tk: dropdown =============================================== */
.tk-dropdown { position: relative; display: inline-block; }
.tk-dropdown-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: 0;
    box-shadow: var(--tk-shadow);
    padding: var(--tk-space-xs);
    max-height: 280px;
    overflow: auto;
    display: none;
    flex-direction: column;
    z-index: 30;
}
.tk-dropdown-menu-right { left: auto; right: 0; }
.tk-dropdown-menu-up { top: auto; bottom: calc(100% + 4px); }
.tk-dropdown-open > .tk-dropdown-menu, .tk-dropdown:focus-within > .tk-dropdown-menu { display: flex; }
.tk-dropdown-label { padding: 6px 12px; font-family: var(--tk-font-mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--tk-color-text-muted); }
.tk-dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 8px 12px;
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: 0;
    cursor: pointer;
    text-align: left;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-dropdown-item:hover { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-text-muted); }
.tk-dropdown-item:hover iconify-icon { color: var(--tk-color-background); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: var(--tk-color-danger); color: #FFFFFF; }
.tk-dropdown-item-danger:hover iconify-icon { color: #FFFFFF; }
.tk-dropdown-divider { height: 1px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) 0; }

/* == tk: card =================================================== */
/* Panel dokumen teknik: border tinta 1px, bayangan offset cetak. Judul di header kartu
   diberi prefix komentar kode "// " lewat ::before. */
.tk-card {
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: 0;
    box-shadow: var(--tk-shadow-sm);
    overflow: hidden;
}
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-header .tk-title::before { content: '// '; color: var(--tk-color-text-muted); font-weight: 400; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-sm); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-family: var(--tk-font-heading); font-weight: 800; color: var(--tk-color-primary); }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-caption); font-weight: 500; }
.tk-card-stat .tk-stat-trend-up::before { content: '▲ '; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-caption); font-weight: 500; }
.tk-card-stat .tk-stat-trend-down::before { content: '▼ '; }

/* == tk: navigation ============================================= */
/* Navbar bar sistem: garis rambut bawah; brand diberi prefix path "~/" ala prompt. */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: 1px solid var(--tk-color-border);
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 800; font-size: 15px; margin-right: auto; color: var(--tk-color-text); }
.tk-navbar-brand::before { content: '~/'; color: var(--tk-color-primary); }
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: 12px; font-weight: 700; font-family: var(--tk-font-mono); text-transform: uppercase; letter-spacing: 0.08em; padding: 2px 4px; }
.tk-navbar-link:hover { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-navbar-link-active { color: var(--tk-color-primary); text-decoration: underline; text-underline-offset: 4px; }
.tk-navbar-dark { background: var(--tk-cc-terminal-bg); border-bottom-color: var(--tk-cc-terminal-ink); }
.tk-navbar-dark .tk-navbar-brand { color: var(--tk-cc-terminal-ink); }
.tk-navbar-dark .tk-navbar-link { color: var(--tk-cc-terminal-ink); opacity: 0.6; }
.tk-navbar-dark .tk-navbar-link:hover { opacity: 1; background: var(--tk-cc-terminal-ink); color: var(--tk-cc-terminal-bg); }
.tk-navbar-dark .tk-navbar-link-active { opacity: 1; color: var(--tk-cc-terminal-ink); }
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
    border-radius: 0;
    color: var(--tk-color-text-muted);
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
/* Item aktif: blok seleksi terminal (balik warna). */
.tk-sidebar-item-active { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 68px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    letter-spacing: 0.10em;
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
}
.tk-sidebar-group::before { content: '# '; }
.tk-sidebar-group:first-child { padding-top: var(--tk-space-xs); }
.tk-breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--tk-space-sm);
    font-size: var(--tk-text-body-sm);
    font-family: var(--tk-font-mono);
}
.tk-breadcrumb a { color: var(--tk-color-text-muted); text-decoration: none; }
.tk-breadcrumb a:hover { color: var(--tk-color-primary); text-decoration: underline; }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.6; }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 700; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: 1px solid var(--tk-color-border);
}

/* == tk: tabs =================================================== */
/* Tab file editor: tab aktif menyatu dengan panel (border tanpa bawah). */
.tk-tabs { display: flex; gap: 0; border-bottom: 1px solid var(--tk-color-border); }
.tk-tab {
    padding: var(--tk-space-sm) var(--tk-space-md) 10px;
    font-size: 12px;
    font-weight: 700;
    font-family: var(--tk-font-mono);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border: 1px solid transparent;
    border-bottom: none;
    margin-bottom: 0;
    position: relative;
    top: 1px;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-text); background: var(--tk-color-surface); border-color: var(--tk-color-border); }
.tk-segmented { display: inline-flex; background: var(--tk-color-surface); border: 1px solid var(--tk-color-border); padding: 0; gap: 0; }
.tk-segment {
    padding: 8px 16px;
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--tk-color-text-muted);
    border: none;
    border-right: 1px solid var(--tk-color-border);
    background: transparent;
    cursor: pointer;
}
.tk-segment:last-child { border-right: none; }
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: var(--tk-color-text); color: var(--tk-color-background); }

/* == tk: badge ================================================== */
/* Badge tag log ber-bracket: [AKTIF] [GAGAL] — tanpa isi, hanya warna teks. */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    padding: 0 2px;
    border-radius: 0;
    background: transparent;
    color: var(--tk-color-text);
}
.tk-badge::before { content: '['; color: var(--tk-color-text-muted); font-weight: 400; }
.tk-badge::after { content: ']'; color: var(--tk-color-text-muted); font-weight: 400; }
.tk-badge-success { color: var(--tk-color-success); }
.tk-badge-warning { color: var(--tk-color-warning); }
.tk-badge-danger { color: var(--tk-color-danger); }
.tk-badge-info { color: var(--tk-color-info); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 12px;
    padding: 2px 10px;
    border-radius: 0;
    border: 1px dashed var(--tk-color-border);
    background: var(--tk-color-surface);
    color: var(--tk-color-text);
}
.tk-chip-remove { border: none; background: none; cursor: pointer; color: var(--tk-color-text-muted); font-size: 12px; line-height: 1; padding: 0; }
.tk-chip-remove:hover { color: var(--tk-color-danger); }

/* == tk: alert ================================================== */
/* Alert baris log sistem: panel soft ber-border penuh dengan judul huruf besar. */
.tk-alert {
    display: flex;
    gap: var(--tk-space-sm);
    align-items: flex-start;
    padding: var(--tk-space-md);
    border-radius: 0;
    font-size: var(--tk-text-body-sm);
    font-family: var(--tk-font-mono);
    border: 1px solid currentColor;
}
.tk-alert-title { font-weight: 700; display: block; margin-bottom: 2px; text-transform: uppercase; letter-spacing: 0.04em; }
.tk-alert-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); }
.tk-alert-success .tk-alert-title::before { content: '[OK] '; }
.tk-alert-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); }
.tk-alert-warning .tk-alert-title::before { content: '[??] '; }
.tk-alert-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-alert-danger .tk-alert-title::before { content: '[!!] '; }
.tk-alert-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); }
.tk-alert-info .tk-alert-title::before { content: '[i] '; }

/* == tk: table ================================================== */
/* Tabel data teknis: header ber-border ganda (double) seperti garis ═══ ASCII,
   baris ber-garis putus-putus. */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); font-family: var(--tk-font-mono); }
.tk-table th {
    text-align: left;
    font-family: var(--tk-font-mono);
    font-weight: 700;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.10em;
    color: var(--tk-color-text);
    padding: var(--tk-space-sm) var(--tk-space-md);
    background: var(--tk-color-surface-2);
    border-bottom: 3px double var(--tk-color-border);
}
.tk-table td { padding: 12px var(--tk-space-md); border-bottom: 1px dashed var(--tk-color-border); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: var(--tk-color-surface-2); }
.tk-table .tk-table-actions { text-align: right; white-space: nowrap; }
.tk-action-btn {
    width: 28px;
    height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    border-radius: 0;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-action-btn:hover { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-action-btn-danger:hover { background: var(--tk-color-danger); color: #FFFFFF; }
.tk-pagination { display: flex; gap: var(--tk-space-xs); align-items: center; }
.tk-page {
    min-width: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    border: 1px solid transparent;
    background: none;
    font-family: var(--tk-font-mono);
    font-size: 13px;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-page:hover { border-color: var(--tk-color-border); color: var(--tk-color-text); }
.tk-page-active { background: var(--tk-color-text); color: var(--tk-color-background); }

/* == tk: overlay ================================================ */
/* Modal = jendela terminal: strip title bar dengan tiga tombol jendela dilukis ::before. */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(20, 20, 20, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: 0;
    box-shadow: var(--tk-shadow-lg);
    max-width: 440px;
    width: 100%;
}
.tk-modal::before {
    content: '\\25CF \\25CF \\25CF';
    display: block;
    font-size: 9px;
    letter-spacing: 4px;
    color: var(--tk-color-text-muted);
    padding: 8px 14px;
    border-bottom: 1px solid var(--tk-color-border);
    background: var(--tk-color-surface-2);
}
.tk-modal .tk-card-header, .tk-drawer .tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
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
/* Loading screen: spinner kotak patah-patah dan progress bar blok ▓▓▓ tersegmentasi. */
.tk-spinner {
    width: 22px;
    height: 22px;
    border: 3px solid var(--tk-color-border);
    border-top-color: var(--tk-color-primary);
    border-radius: 0;
    animation: tk-spin 1s steps(8) infinite;
}
.tk-progress { height: 14px; background: var(--tk-color-surface); border: 1px solid var(--tk-color-border); border-radius: 0; overflow: hidden; padding: 2px; box-sizing: border-box; }
.tk-progress-bar {
    height: 100%;
    background: repeating-linear-gradient(90deg, var(--tk-color-primary) 0 8px, transparent 8px 11px);
    border-radius: 0;
    transition: width var(--tk-transition);
}
.tk-skeleton {
    background: repeating-linear-gradient(-45deg, var(--tk-color-surface-2) 0 6px, transparent 6px 12px);
    animation: tk-shimmer 1.2s steps(6) infinite;
    border: 1px dashed var(--tk-color-border);
    border-radius: 0;
    background-size: 200% 100%;
}
@keyframes tk-shimmer { to { background-position: -34px 0; } }

/* == tk: empty ================================================== */
.tk-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-2xl) var(--tk-space-lg);
    text-align: center;
    border: 1px dashed var(--tk-color-border);
    border-radius: 0;
    background: var(--tk-color-surface);
}
.tk-empty-icon { color: var(--tk-color-text-muted); }
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: 800; font-size: var(--tk-text-h4); }
.tk-empty-title::before { content: '[ '; color: var(--tk-color-text-muted); font-weight: 400; }
.tk-empty-title::after { content: ' ]'; color: var(--tk-color-text-muted); font-weight: 400; }

/* == tk: content-blocks ========================================= */
.tk-hero { text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); max-width: 560px; margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-2xl); }
.tk-feature { display: flex; flex-direction: column; gap: var(--tk-space-sm); }
/* Ikon fitur sel modul: kotak ber-border tinta dengan warna sistem bergiliran. */
.tk-feature-icon {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: 0;
    color: var(--tk-color-primary);
    box-shadow: var(--tk-shadow-sm);
}
/* CTA pesan sistem: panel tinta dibalik dengan bingkai garis ganda (border + outline). */
.tk-cta {
    background: var(--tk-color-text);
    color: var(--tk-color-background);
    border: 1px solid var(--tk-color-text);
    outline: 1px solid var(--tk-color-text);
    outline-offset: 4px;
    border-radius: 0;
    padding: var(--tk-space-2xl);
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
}
.tk-cta .tk-h3 { color: var(--tk-color-background); margin: 0; }
.tk-cta .tk-h3::before { content: '> '; color: var(--tk-color-accent); }
.tk-cta .tk-muted { color: var(--tk-color-background); opacity: 0.7; }
.tk-cta .tk-btn-primary { background: var(--tk-color-background); color: var(--tk-color-text); border-color: var(--tk-color-background); }
.tk-cta .tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-accent); border-color: var(--tk-color-accent); color: #FFFFFF; }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: cybercore flavor ======================================= */
/* Penimpa karakter cybercore di atas struktur kontrak: menang kaskade karena berada di
   ekor berkas. Tanda tangan kit ini adalah kursor blok berkedip, prompt terminal,
   dan dither 1-bit. */
.tk-hero .tk-display { font-size: clamp(26px, 4.4vw, var(--tk-text-display)); }
/* Kursor blok berkedip — sambungkan di ujung headline atau readout. */
.tk-cursor::after {
    content: '\\2590';
    color: var(--tk-color-accent);
    animation: tk-blink 1.1s steps(2) infinite;
}
/* Panel terminal: selalu gelap di kedua tema, teks fosfor, baris ber-prompt. */
.tk-terminal {
    background: var(--tk-cc-terminal-bg);
    color: var(--tk-cc-terminal-ink);
    border: 1px solid var(--tk-color-border);
    box-shadow: var(--tk-shadow-sm);
    font-family: var(--tk-font-mono);
    font-size: var(--tk-text-body-sm);
    line-height: 1.7;
    padding: var(--tk-space-md) var(--tk-space-lg);
    overflow-x: auto;
}
.tk-prompt { display: block; white-space: pre-wrap; }
.tk-prompt::before { content: '$ '; opacity: 0.6; }
/* Blok dither 1-bit: tekstur artefak digital untuk pemisah atau latar aksen. */
.tk-dither { height: 20px; background: var(--tk-cc-dither); border: none; margin: var(--tk-space-lg) 0; }
/* Readout angka telemetri: blok mono ber-border dengan label sistem. */
.tk-readout {
    display: inline-block;
    font-family: var(--tk-font-mono);
    font-size: 17px;
    font-weight: 700;
    color: var(--tk-color-primary);
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    padding: 2px 12px;
    box-shadow: var(--tk-shadow-sm);
}
/* Foto: hitam-putih teknis dengan bingkai tinta — gambar dokumen sistem. */
.tk-card img, .tk-hero img, figure img {
    border: 1px solid var(--tk-color-border);
    border-radius: 0;
    filter: grayscale(1) contrast(1.08);
}
.tk-hero img, figure img { box-shadow: var(--tk-shadow); }
`;
