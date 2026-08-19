/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const RETRO_WEB_STYLES = `/* Retro Web — kit design TOKENAI.
   Estetika website internet lama era dial-up: bitmap font Silkscreen, WordArt pelangi,
   tombol bevel gaya Win95, warna web-safe mencolok, kursor pixel custom, tabel ber-border,
   dan latar ubin — aesthetic GeoCities 1997. Mode gelap memindahkan suasana ke starfield
   hitam dengan teks neon.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #0000EE;
    --tk-color-primary-hover: #0000B0;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: #008080;
    --tk-color-secondary-hover: #006A6A;
    --tk-color-secondary-contrast: #FFFFFF;
    --tk-color-accent: #FF00CC;
    --tk-color-background: #C3C7CB;
    --tk-color-surface: #FFFFFF;
    --tk-color-surface-2: #E6E6E6;
    --tk-color-text: #000000;
    --tk-color-text-muted: #4A4A4A;
    --tk-color-border: #808080;
    --tk-color-success: #007A1F;
    --tk-color-success-soft: #C9F5C9;
    --tk-color-warning: #8A5A00;
    --tk-color-warning-soft: #FFF3B0;
    --tk-color-danger: #CC0000;
    --tk-color-danger-soft: #FFCFCF;
    --tk-color-info: #0000EE;
    --tk-color-info-soft: #CFE0FF;

    --tk-font-heading: 'Silkscreen', ui-monospace, monospace;
    --tk-font-body: 'Comic Neue', 'Comic Sans MS', cursive, sans-serif;
    --tk-font-mono: 'VT323', ui-monospace, monospace;
    --tk-weight-heading: 700;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.15;
    --tk-leading-body: 1.6;

    --tk-text-display: 44px;
    --tk-text-h1: 32px;
    --tk-text-h2: 24px;
    --tk-text-h3: 19px;
    --tk-text-h4: 15px;
    --tk-text-title: 14px;
    --tk-text-body-lg: 18px;
    --tk-text-body: 16px;
    --tk-text-body-sm: 14px;
    --tk-text-caption: 15px;

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

    --tk-border-width: 2px;
    --tk-shadow-sm: 2px 2px 0 rgba(0, 0, 0, 0.35);
    --tk-shadow: 3px 3px 0 rgba(0, 0, 0, 0.40);
    --tk-shadow-lg: 6px 6px 0 rgba(0, 0, 0, 0.45);

    --tk-transition: 80ms linear;
    --tk-container: 1080px;

    /* Token khas retro-web (bukan kontrak): pelat bevel Win95, gradien titlebar navy,
       WordArt pelangi, garis "under construction", latar ubin kotak-kotak, dan kursor
       pixel custom (panah putih untuk halaman, panah magenta untuk elemen interaktif). */
    --tk-rw-face: #C0C0C0;
    --tk-rw-face-ink: #000000;
    --tk-rw-bevel-light: rgba(255, 255, 255, 0.85);
    --tk-rw-bevel-dark: rgba(0, 0, 0, 0.45);
    --tk-rw-titlebar: linear-gradient(90deg, #000080, #1084D0);
    --tk-rw-titlebar-ink: #FFFFFF;
    --tk-rw-visited: #551A8B;
    --tk-rw-rainbow: linear-gradient(90deg, #FF0000, #FF8800 18%, #FFD500 36%, #00B41E 54%, #0066FF 72%, #8A2BE2 88%, #FF00CC);
    --tk-rw-construction: repeating-linear-gradient(-45deg, #FFD500 0 14px, #111111 14px 28px);
    --tk-rw-terminal-bg: #000000;
    --tk-rw-terminal-ink: #33FF33;
    --tk-rw-bg: repeating-conic-gradient(#CBCFD3 0% 25%, #C0C4C8 0% 50%) 0 0 / 28px 28px;
    --tk-rw-cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M3 1v15l4-4 3 7 3-1-3-7h5z' fill='%23FFFFFF' stroke='%23000000' stroke-width='1.5'/%3E%3C/svg%3E") 3 1, default;
    --tk-rw-cursor-hand: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M3 1v15l4-4 3 7 3-1-3-7h5z' fill='%23FF00CC' stroke='%23000000' stroke-width='1.5'/%3E%3C/svg%3E") 3 1, pointer;
}

/* Mode gelap: malam starfield — langit hitam kebiruan bertabur bintang, teks neon hijau
   dan cyan, bevel meredup jadi ungu gelap. Aktifkan dengan atribut
   data-tk-theme="dark" pada <html> atau <body>. */
[data-tk-theme="dark"] {
    --tk-color-primary: #2EE86B;
    --tk-color-primary-hover: #6CFF9C;
    --tk-color-primary-contrast: #001406;
    --tk-color-secondary: #00E5E5;
    --tk-color-secondary-hover: #66FFFF;
    --tk-color-secondary-contrast: #002424;
    --tk-color-accent: #FF66FF;
    --tk-color-background: #05051E;
    --tk-color-surface: #10103A;
    --tk-color-surface-2: #1A1A52;
    --tk-color-text: #E6E6FF;
    --tk-color-text-muted: #9C9CD6;
    --tk-color-border: #4A4AA0;
    --tk-color-success: #54E884;
    --tk-color-success-soft: #0E3A1E;
    --tk-color-warning: #FFD966;
    --tk-color-warning-soft: #3A3208;
    --tk-color-danger: #FF6666;
    --tk-color-danger-soft: #3A0E0E;
    --tk-color-info: #66B2FF;
    --tk-color-info-soft: #101C4A;
    --tk-shadow-sm: 2px 2px 0 rgba(0, 0, 0, 0.75);
    --tk-shadow: 3px 3px 0 rgba(0, 0, 0, 0.8);
    --tk-shadow-lg: 6px 6px 0 rgba(0, 0, 0, 0.85);
    --tk-rw-face: #26266A;
    --tk-rw-face-ink: #E6E6FF;
    --tk-rw-bevel-light: rgba(255, 255, 255, 0.35);
    --tk-rw-bevel-dark: rgba(0, 0, 0, 0.6);
    --tk-rw-titlebar: linear-gradient(90deg, #12124E, #3A3AC8);
    --tk-rw-titlebar-ink: #FFFFFF;
    --tk-rw-visited: #CC99FF;
    --tk-rw-rainbow: linear-gradient(90deg, #FF5555, #FFAA33 18%, #FFEE55 36%, #55FF77 54%, #55AAFF 72%, #BB77FF 88%, #FF66FF);
    --tk-rw-construction: repeating-linear-gradient(-45deg, #FFD500 0 14px, #111111 14px 28px);
    --tk-rw-terminal-bg: #000000;
    --tk-rw-terminal-ink: #33FF33;
    --tk-rw-bg:
        radial-gradient(circle, rgba(255, 255, 255, 0.85) 1px, transparent 1.6px) 0 0 / 110px 110px,
        radial-gradient(circle, rgba(153, 153, 255, 0.55) 1px, transparent 1.6px) 55px 70px / 150px 150px,
        #05051E;
}

/* == tk: base =================================================== */
body {
    margin: 0;
    background: var(--tk-rw-bg);
    color: var(--tk-color-text);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body);
    font-weight: var(--tk-weight-body);
    line-height: var(--tk-leading-body);
    cursor: var(--tk-rw-cursor);
}
.tk-container {
    max-width: var(--tk-container);
    margin: 0 auto;
    padding: 0 var(--tk-space-lg);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }
::selection { background: var(--tk-color-accent); color: #FFFFFF; }
a, button, label, select, summary { cursor: var(--tk-rw-cursor-hand); }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); line-height: 1.08; }
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
    letter-spacing: 0.05em;
}
.tk-muted { color: var(--tk-color-text-muted); }
/* Tautan gaya 1997: selalu bergaris bawah, ungu setelah dikunjungi, dan hover membalik
   warna seperti baris tersorot — bukan sekadar berubah warna. */
.tk-link { color: var(--tk-color-primary); font-weight: 700; text-decoration: underline; }
.tk-link:visited { color: var(--tk-rw-visited); }
.tk-link:hover { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); text-decoration: none; }
.tk-code { font-family: var(--tk-font-mono); font-size: 1em; background: var(--tk-rw-terminal-bg); color: var(--tk-rw-terminal-ink); padding: 1px 6px; }

/* == tk: button ================================================= */
/* Tombol bevel Win95: muka rata, tepi terang di kiri-atas dan gelap di kanan-bawah;
   saat ditekan bevel-nya membalik dan tombolnya bergeser — persis tombol OS jadul. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-heading);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    line-height: 1;
    padding: 11px 18px;
    border-radius: 0;
    border: 2px solid;
    border-color: var(--tk-rw-bevel-light) var(--tk-rw-bevel-dark) var(--tk-rw-bevel-dark) var(--tk-rw-bevel-light);
    box-shadow: var(--tk-shadow-sm);
    cursor: var(--tk-rw-cursor-hand);
    transition: filter var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:hover:not(:disabled) { filter: brightness(1.08); }
.tk-btn:not(:disabled):active {
    border-color: var(--tk-rw-bevel-dark) var(--tk-rw-bevel-light) var(--tk-rw-bevel-light) var(--tk-rw-bevel-dark);
    transform: translate(2px, 2px);
    box-shadow: none;
    filter: brightness(0.94);
}
.tk-btn:disabled { opacity: 0.45; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }
.tk-btn-outline { background: var(--tk-rw-face); color: var(--tk-rw-face-ink); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); border-color: transparent; box-shadow: none; }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); filter: none; }
.tk-btn-ghost:not(:disabled):active { border-color: transparent; }
.tk-btn-danger { background: var(--tk-color-danger); color: #FFFFFF; }
.tk-btn-text { background: none; color: var(--tk-color-primary); border-color: transparent; box-shadow: none; padding-left: 4px; padding-right: 4px; text-decoration: underline; }
.tk-btn-text:hover:not(:disabled) { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); text-decoration: none; filter: none; }
.tk-btn-text:not(:disabled):active { border-color: transparent; transform: none; }
.tk-btn-sm { font-size: 10px; padding: 8px 12px; }
.tk-btn-lg { font-size: 14px; padding: 14px 26px; }
.tk-btn-icon { padding: 11px; }
.tk-btn-loading { position: relative; color: transparent !important; pointer-events: none; }
.tk-btn-loading::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border: 3px solid var(--tk-color-primary-contrast);
    border-top-color: transparent;
    animation: tk-spin 0.9s steps(8) infinite;
}
.tk-btn-secondary.tk-btn-loading::after { border-color: var(--tk-color-secondary-contrast); border-top-color: transparent; }
.tk-btn-outline.tk-btn-loading::after, .tk-btn-ghost.tk-btn-loading::after {
    border-color: var(--tk-color-text);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
/* Field tenggelam (sunken): bevel terbalik seperti kotak isian dialog Win95, fokus memakai
   outline titik-titik klasik — bukan ring glow modern. */
.tk-field { display: flex; flex-direction: column; gap: var(--tk-space-xs); margin-bottom: var(--tk-space-md); }
.tk-label { font-family: var(--tk-font-heading); font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--tk-color-text); }
.tk-help { font-size: 12px; color: var(--tk-color-text-muted); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: 2px solid;
    border-color: var(--tk-rw-bevel-dark) var(--tk-rw-bevel-light) var(--tk-rw-bevel-light) var(--tk-rw-bevel-dark);
    border-radius: 0;
    padding: 10px 12px;
    transition: border-color var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    outline: 2px dotted var(--tk-color-primary);
    outline-offset: 1px;
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    background: var(--tk-color-danger-soft);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); font-weight: 700; }
.tk-field-success .tk-input { border-color: var(--tk-color-success); background: var(--tk-color-success-soft); }
.tk-field-success .tk-help { color: var(--tk-color-success); font-weight: 700; }
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
    cursor: var(--tk-rw-cursor-hand);
    text-align: left;
}
.tk-select-trigger > iconify-icon { color: var(--tk-color-text-muted); flex: none; }
.tk-select-placeholder { color: var(--tk-color-text-muted); }
.tk-select:focus-within > .tk-select-trigger, .tk-select-open > .tk-select-trigger {
    outline: 2px dotted var(--tk-color-primary);
    outline-offset: 1px;
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-border);
    border-radius: 0;
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
    padding: 8px 10px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: 0;
    cursor: var(--tk-rw-cursor-hand);
    text-align: left;
    transition: background var(--tk-transition), color var(--tk-transition);
}
/* Hover opsi = baris tersorot navy klasik, teks jadi putih. */
.tk-option:hover { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-option:hover iconify-icon, .tk-option:hover .tk-option-check { color: var(--tk-color-primary-contrast); }
.tk-option-selected { background: var(--tk-color-info-soft); color: var(--tk-color-text); font-weight: 700; }
.tk-option-check { margin-left: auto; color: var(--tk-color-primary); display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 8px 10px;
    margin: calc(-1 * var(--tk-space-xs)) calc(-1 * var(--tk-space-xs)) var(--tk-space-xs);
    border-bottom: 2px solid var(--tk-color-border);
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
    border-top: 2px solid var(--tk-color-border);
}
.tk-check { display: inline-flex; align-items: center; gap: var(--tk-space-sm); font-size: var(--tk-text-body-sm); cursor: var(--tk-rw-cursor-hand); }
.tk-checkbox, .tk-radio {
    appearance: none;
    width: 18px;
    height: 18px;
    flex: none;
    margin: 0;
    position: relative;
    background: var(--tk-color-surface);
    border: 2px solid;
    border-color: var(--tk-rw-bevel-dark) var(--tk-rw-bevel-light) var(--tk-rw-bevel-light) var(--tk-rw-bevel-dark);
    cursor: var(--tk-rw-cursor-hand);
    transition: background var(--tk-transition);
}
.tk-checkbox { border-radius: 0; }
.tk-checkbox:hover, .tk-radio:hover { background: var(--tk-color-surface-2); }
.tk-checkbox:checked { background: var(--tk-color-surface); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 4px;
    top: 0;
    width: 4px;
    height: 8px;
    border-right: 3px solid var(--tk-color-primary);
    border-bottom: 3px solid var(--tk-color-primary);
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked::after {
    content: '';
    position: absolute;
    inset: 3px;
    background: var(--tk-color-primary);
    border-radius: var(--tk-radius-full);
}
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: 2px dotted var(--tk-color-primary);
    outline-offset: 1px;
}
/* Toggle kotak: rel tenggelam, kenop pelat bevel persegi yang menggeser. */
.tk-toggle { position: relative; width: 44px; height: 24px; flex: none; margin: 0; appearance: none; border: 2px solid; border-color: var(--tk-rw-bevel-dark) var(--tk-rw-bevel-light) var(--tk-rw-bevel-light) var(--tk-rw-bevel-dark); background: var(--tk-color-surface-2); border-radius: 0; cursor: var(--tk-rw-cursor-hand); transition: background var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 1px; left: 1px; width: 18px; height: 18px; background: var(--tk-rw-face); border: 2px solid; border-color: var(--tk-rw-bevel-light) var(--tk-rw-bevel-dark) var(--tk-rw-bevel-dark) var(--tk-rw-bevel-light); box-sizing: border-box; transition: transform var(--tk-transition); }
.tk-toggle:checked { background: var(--tk-color-primary); }
.tk-toggle:checked::after { transform: translateX(20px); }

/* == tk: search-filter ========================================== */
.tk-search { position: relative; display: flex; align-items: center; min-width: 220px; }
.tk-search .tk-input { width: 100%; padding-left: 38px; padding-right: 64px; }
.tk-search .tk-input::-webkit-search-cancel-button { -webkit-appearance: none; }
.tk-search-icon { position: absolute; left: 12px; display: inline-flex; color: var(--tk-color-text-muted); pointer-events: none; }
.tk-search-kbd {
    position: absolute;
    right: 8px;
    font-family: var(--tk-font-mono);
    font-size: 14px;
    color: var(--tk-rw-face-ink);
    background: var(--tk-rw-face);
    border: 2px solid;
    border-color: var(--tk-rw-bevel-light) var(--tk-rw-bevel-dark) var(--tk-rw-bevel-dark) var(--tk-rw-bevel-light);
    padding: 0 5px;
    pointer-events: none;
}
.tk-filter-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-md);
    background: var(--tk-color-surface);
    border: 2px solid var(--tk-color-border);
    border-radius: 0;
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
    border-radius: 0;
    background: var(--tk-color-accent);
    color: #FFFFFF;
    font-family: var(--tk-font-mono);
    font-size: 14px;
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
    border: 2px solid var(--tk-color-border);
    border-radius: 0;
    box-shadow: var(--tk-shadow-lg);
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
.tk-dropdown-label { padding: 6px 10px; font-family: var(--tk-font-mono); font-size: 14px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--tk-color-text-muted); }
.tk-dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 8px 10px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 700;
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: 0;
    cursor: var(--tk-rw-cursor-hand);
    text-align: left;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-dropdown-item:hover { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-text-muted); }
.tk-dropdown-item:hover iconify-icon { color: var(--tk-color-primary-contrast); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: var(--tk-color-danger); color: #FFFFFF; }
.tk-dropdown-item-danger:hover iconify-icon { color: #FFFFFF; }
.tk-dropdown-divider { height: 2px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) 0; }

/* == tk: card =================================================== */
/* Kartu = panel bevel timbul dengan bayangan keras — seperti kotak dialog di atas desktop. */
.tk-card {
    background: var(--tk-color-surface);
    border: 2px solid;
    border-color: var(--tk-rw-bevel-light) var(--tk-rw-bevel-dark) var(--tk-rw-bevel-dark) var(--tk-rw-bevel-light);
    outline: 1px solid var(--tk-color-border);
    border-radius: 0;
    box-shadow: var(--tk-shadow);
    overflow: hidden;
}
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-sm); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-family: var(--tk-font-heading); font-weight: 700; }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 700; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 700; }

/* == tk: navigation ============================================= */
/* Navbar pelat perak bevel; varian gelapnya gradien titlebar navy Win95. */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-rw-face);
    border-bottom: 2px solid var(--tk-rw-bevel-dark);
    box-shadow: inset 0 2px 0 var(--tk-rw-bevel-light);
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 700; font-size: 16px; margin-right: auto; color: var(--tk-rw-face-ink); }
.tk-navbar-link { color: var(--tk-rw-face-ink); text-decoration: underline; font-size: 11px; font-weight: 700; font-family: var(--tk-font-heading); text-transform: uppercase; }
.tk-navbar-link:hover { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); text-decoration: none; }
.tk-navbar-link-active { color: var(--tk-color-primary); }
.tk-navbar-dark { background: var(--tk-rw-titlebar); border-bottom-color: rgba(0, 0, 0, 0.5); box-shadow: none; }
.tk-navbar-dark .tk-navbar-brand { color: var(--tk-rw-titlebar-ink); }
.tk-navbar-dark .tk-navbar-link { color: var(--tk-rw-titlebar-ink); opacity: 0.8; }
.tk-navbar-dark .tk-navbar-link:hover, .tk-navbar-dark .tk-navbar-link-active { opacity: 1; color: var(--tk-rw-titlebar-ink); }
.tk-sidebar {
    width: 240px;
    background: var(--tk-color-surface);
    border-right: 2px solid var(--tk-color-border);
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
    font-weight: 700;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-sidebar-item-active { background: var(--tk-rw-titlebar); color: var(--tk-rw-titlebar-ink); }
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 68px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 15px;
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
    font-size: var(--tk-text-body-sm);
}
.tk-breadcrumb a { color: var(--tk-color-primary); text-decoration: underline; }
.tk-breadcrumb a:hover { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); text-decoration: none; }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.6; }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 700; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-rw-face);
    border-bottom: 2px solid var(--tk-rw-bevel-dark);
    box-shadow: inset 0 2px 0 var(--tk-rw-bevel-light);
}

/* == tk: tabs =================================================== */
/* Tab map folder jadul: tab aktif menonjol seperti lidah map di atas garis. */
.tk-tabs { display: flex; gap: 4px; border-bottom: 2px solid var(--tk-color-border); }
.tk-tab {
    padding: var(--tk-space-sm) 14px 10px;
    font-size: 11px;
    font-weight: 700;
    font-family: var(--tk-font-heading);
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border: 2px solid transparent;
    border-bottom: none;
    margin-bottom: 0;
}
.tk-tab:hover { color: var(--tk-color-text); background: var(--tk-color-surface-2); }
.tk-tab-active {
    color: var(--tk-color-primary);
    background: var(--tk-color-surface);
    border-color: var(--tk-rw-bevel-light) var(--tk-rw-bevel-dark) transparent var(--tk-rw-bevel-light);
}
.tk-segmented { display: inline-flex; background: var(--tk-color-surface-2); border: 2px solid var(--tk-color-border); border-radius: 0; padding: 2px; gap: 2px; }
.tk-segment {
    padding: 7px 14px;
    font-family: var(--tk-font-heading);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: 0;
    cursor: var(--tk-rw-cursor-hand);
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 1px 10px;
    border-radius: 0;
    border: 1px solid var(--tk-color-border);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text);
}
.tk-badge-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); border-color: var(--tk-color-success); }
.tk-badge-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); border-color: var(--tk-color-warning); }
.tk-badge-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); border-color: var(--tk-color-danger); }
.tk-badge-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); border-color: var(--tk-color-info); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 15px;
    padding: 1px 10px;
    border-radius: 0;
    border: 1px solid var(--tk-color-primary);
    background: var(--tk-color-info-soft);
    color: var(--tk-color-primary);
}
.tk-chip-remove { border: none; background: none; cursor: var(--tk-rw-cursor-hand); color: var(--tk-color-primary); font-size: 14px; line-height: 1; padding: 0; font-family: var(--tk-font-body); }
.tk-chip-remove:hover { color: var(--tk-color-danger); }

/* == tk: alert ================================================== */
.tk-alert {
    display: flex;
    gap: var(--tk-space-sm);
    align-items: flex-start;
    padding: var(--tk-space-md);
    border-radius: 0;
    font-size: var(--tk-text-body-sm);
    border: 2px solid currentColor;
    box-shadow: var(--tk-shadow-sm);
}
.tk-alert-title { font-weight: 700; display: block; margin-bottom: 2px; text-transform: uppercase; }
.tk-alert-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); }
.tk-alert-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); }
.tk-alert-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-alert-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); }

/* == tk: table ================================================== */
/* Tabel HTML jadul: semua sel ber-border seperti border="1", header pelat titlebar navy. */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); border: 2px solid var(--tk-color-border); }
.tk-table th {
    text-align: left;
    font-family: var(--tk-font-mono);
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--tk-rw-titlebar-ink);
    padding: var(--tk-space-sm) var(--tk-space-md);
    background: var(--tk-rw-titlebar);
    border: 1px solid var(--tk-color-border);
}
.tk-table td { padding: 10px var(--tk-space-md); border: 1px solid var(--tk-color-border); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:nth-child(even) { background: var(--tk-color-surface-2); }
.tk-table tbody tr:hover { background: var(--tk-color-info-soft); }
.tk-table .tk-table-actions { text-align: right; white-space: nowrap; }
.tk-action-btn {
    width: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    background: none;
    border-radius: 0;
    color: var(--tk-color-text-muted);
    cursor: var(--tk-rw-cursor-hand);
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-action-btn:hover { background: var(--tk-rw-face); color: var(--tk-rw-face-ink); border-color: var(--tk-rw-bevel-light) var(--tk-rw-bevel-dark) var(--tk-rw-bevel-dark) var(--tk-rw-bevel-light); }
.tk-action-btn-danger:hover { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-pagination { display: flex; gap: var(--tk-space-xs); align-items: center; }
.tk-page {
    min-width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    border: 2px solid;
    border-color: var(--tk-rw-bevel-light) var(--tk-rw-bevel-dark) var(--tk-rw-bevel-dark) var(--tk-rw-bevel-light);
    background: var(--tk-rw-face);
    font-family: var(--tk-font-heading);
    font-weight: 700;
    font-size: 11px;
    color: var(--tk-rw-face-ink);
    cursor: var(--tk-rw-cursor-hand);
    transition: filter var(--tk-transition);
}
.tk-page:hover { filter: brightness(1.08); }
.tk-page-active {
    background: var(--tk-color-primary);
    color: var(--tk-color-primary-contrast);
    border-color: var(--tk-rw-bevel-dark) var(--tk-rw-bevel-light) var(--tk-rw-bevel-light) var(--tk-rw-bevel-dark);
}

/* == tk: overlay ================================================ */
/* Modal = jendela OS jadul: bevel timbul dan header bergradien titlebar navy. */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 32, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border: 2px solid;
    border-color: var(--tk-rw-bevel-light) var(--tk-rw-bevel-dark) var(--tk-rw-bevel-dark) var(--tk-rw-bevel-light);
    outline: 1px solid var(--tk-color-border);
    border-radius: 0;
    box-shadow: var(--tk-shadow-lg);
    max-width: 440px;
    width: 100%;
}
.tk-modal .tk-card-header, .tk-drawer .tk-card-header {
    background: var(--tk-rw-titlebar);
    padding: 8px var(--tk-space-md);
    margin: 4px;
}
.tk-modal .tk-card-header .tk-title, .tk-drawer .tk-card-header .tk-title {
    color: var(--tk-rw-titlebar-ink);
    font-size: 12px;
    margin: 0;
    text-transform: uppercase;
}
.tk-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 360px;
    background: var(--tk-color-surface);
    border-left: 2px solid var(--tk-color-border);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 24px;
    height: 24px;
    border: 4px solid var(--tk-color-border);
    border-top-color: var(--tk-color-primary);
    animation: tk-spin 0.9s steps(8) infinite;
}
/* Progress balok-balok terpisah seperti dialog penyalinan berkas jadul. */
.tk-progress { height: 16px; background: var(--tk-color-surface); border: 2px solid; border-color: var(--tk-rw-bevel-dark) var(--tk-rw-bevel-light) var(--tk-rw-bevel-light) var(--tk-rw-bevel-dark); border-radius: 0; overflow: hidden; }
.tk-progress-bar { height: 100%; background: repeating-linear-gradient(90deg, var(--tk-color-primary) 0 10px, var(--tk-color-surface) 10px 13px); border-radius: 0; transition: width var(--tk-transition); }
.tk-skeleton {
    background: repeating-linear-gradient(90deg, var(--tk-color-surface-2) 0 8px, var(--tk-color-surface) 8px 16px);
    background-size: 200% 100%;
    animation: tk-shimmer 1.6s steps(12) infinite;
    border-radius: 0;
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
    border-radius: 0;
    background: var(--tk-color-surface);
}
.tk-empty-icon { color: var(--tk-color-text-muted); }
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: 700; font-size: var(--tk-text-h4); text-transform: uppercase; }

/* == tk: content-blocks ========================================= */
.tk-hero { text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); max-width: 560px; margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-2xl); }
.tk-feature { display: flex; flex-direction: column; gap: var(--tk-space-sm); }
.tk-feature-icon {
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--tk-color-primary);
    border: 2px solid;
    border-color: var(--tk-rw-bevel-light) var(--tk-rw-bevel-dark) var(--tk-rw-bevel-dark) var(--tk-rw-bevel-light);
    border-radius: 0;
    color: var(--tk-color-primary-contrast);
    box-shadow: var(--tk-shadow-sm);
}
/* CTA = papan pengumuman berbingkai strip "under construction" kuning-hitam. */
.tk-cta {
    border: 8px solid transparent;
    background: linear-gradient(var(--tk-color-surface), var(--tk-color-surface)) padding-box, var(--tk-rw-construction) border-box;
    color: var(--tk-color-text);
    border-radius: 0;
    box-shadow: var(--tk-shadow);
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
}
.tk-cta .tk-h3 { color: var(--tk-color-text); margin: 0; }
.tk-cta .tk-muted { color: var(--tk-color-text-muted); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: retro-web flavor ======================================= */
/* Penimpa karakter retro-web di atas struktur kontrak: menang kaskade karena berada di
   ekor berkas. Tanda tangan kit ini adalah WordArt pelangi pada headline hero, grafis
   yang dipaksa low-res lewat image-rendering: pixelated, badge berkedip, teks marquee,
   dan hit counter hijau-terminal ala GeoCities. */
.tk-hero .tk-display {
    font-size: clamp(30px, 5.2vw, var(--tk-text-display));
    background: var(--tk-rw-rainbow);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    filter: drop-shadow(3px 3px 0 rgba(0, 0, 0, 0.85));
}
/* Ikon fitur bergiliran warna web-safe mencolok: biru, magenta, teal — semuanya pelat bevel. */
.tk-feature:nth-child(3n+1) .tk-feature-icon { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-feature:nth-child(3n+2) .tk-feature-icon { background: var(--tk-color-accent); color: #FFFFFF; }
.tk-feature:nth-child(3n) .tk-feature-icon { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }
/* Grafis low-res: semua citra dirender pixelated dengan bingkai bevel persegi. */
.tk-card img, .tk-hero img, figure img {
    image-rendering: pixelated;
    border: 2px solid;
    border-color: var(--tk-rw-bevel-dark) var(--tk-rw-bevel-light) var(--tk-rw-bevel-light) var(--tk-rw-bevel-dark);
    border-radius: 0;
}
.tk-hero img, figure img { box-shadow: var(--tk-shadow); }
/* Badge berkedip "NEW!" — pakai hemat, satu-dua per halaman sudah sangat 1997. */
.tk-blink { animation: tk-blink 1.1s steps(2, start) infinite; }
@keyframes tk-blink { 50% { opacity: 0; } }
/* Teks berjalan ala <marquee>: bungkus isinya dengan satu <span>. */
.tk-marquee { overflow: hidden; white-space: nowrap; background: var(--tk-rw-terminal-bg); color: var(--tk-rw-terminal-ink); font-family: var(--tk-font-mono); font-size: 18px; padding: 4px 0; }
.tk-marquee > span { display: inline-block; padding-left: 100%; animation: tk-marquee 16s linear infinite; }
@keyframes tk-marquee { to { transform: translateX(-100%); } }
/* Hit counter pengunjung: digit hijau menyala pada panel hitam tenggelam. */
.tk-hit-counter {
    display: inline-block;
    font-family: var(--tk-font-mono);
    font-size: 20px;
    letter-spacing: 5px;
    background: var(--tk-rw-terminal-bg);
    color: var(--tk-rw-terminal-ink);
    border: 2px solid;
    border-color: var(--tk-rw-bevel-dark) var(--tk-rw-bevel-light) var(--tk-rw-bevel-light) var(--tk-rw-bevel-dark);
    padding: 1px 10px 0;
}
/* Garis pemisah "horizontal rule" pelangi — pengganti <hr> polos. */
.tk-hr-rainbow { height: 4px; border: none; background: var(--tk-rw-rainbow); margin: var(--tk-space-lg) 0; }
`;
