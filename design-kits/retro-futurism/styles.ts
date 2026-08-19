/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const RETRO_FUTURISM_STYLES = `/* Retrofuturism — kit design TOKENAI.
   Membayangkan masa depan dengan bahasa visual masa lalu: chrome lettering dan pelat
   metalik, tipografi space-age Michroma (keluarga Eurostile ala NASA 60s-70s), grid
   blueprint futuristik, tombol kapsul panel instrumen, ikon porthole bercincin ganda,
   dan pita matahari senja 70s. Mode gelap memindahkan suasananya ke synthwave 80s:
   langit ungu pekat dengan grid neon dan cahaya horizon.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #E8590C;
    --tk-color-primary-hover: #C94B05;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: #1F2D50;
    --tk-color-secondary-hover: #16213C;
    --tk-color-secondary-contrast: #FFFFFF;
    --tk-color-accent: #0B7285;
    --tk-color-background: #F4EFE6;
    --tk-color-surface: #FFFDF7;
    --tk-color-surface-2: #EAE3D4;
    --tk-color-text: #201D17;
    --tk-color-text-muted: #6E6759;
    --tk-color-border: #CFC5AE;
    --tk-color-success: #2B8A3E;
    --tk-color-success-soft: #DBF2DF;
    --tk-color-warning: #9A6700;
    --tk-color-warning-soft: #FBEFC7;
    --tk-color-danger: #C92A2A;
    --tk-color-danger-soft: #FADEDE;
    --tk-color-info: #1971C2;
    --tk-color-info-soft: #D9E9F8;

    --tk-font-heading: 'Michroma', 'Arial Black', sans-serif;
    --tk-font-body: 'Space Grotesk', system-ui, sans-serif;
    --tk-font-mono: 'Share Tech Mono', ui-monospace, monospace;
    --tk-weight-heading: 400;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.2;
    --tk-leading-body: 1.65;

    --tk-text-display: 42px;
    --tk-text-h1: 32px;
    --tk-text-h2: 25px;
    --tk-text-h3: 19px;
    --tk-text-h4: 15px;
    --tk-text-title: 14px;
    --tk-text-body-lg: 18px;
    --tk-text-body: 16px;
    --tk-text-body-sm: 14px;
    --tk-text-caption: 13px;

    --tk-space-xs: 4px;
    --tk-space-sm: 8px;
    --tk-space-md: 16px;
    --tk-space-lg: 24px;
    --tk-space-xl: 32px;
    --tk-space-2xl: 48px;
    --tk-space-3xl: 64px;
    --tk-space-section: 96px;

    --tk-radius-sm: 10px;
    --tk-radius: 16px;
    --tk-radius-lg: 26px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    --tk-shadow-sm: 0 2px 6px rgba(32, 29, 23, 0.10);
    --tk-shadow: 0 6px 18px rgba(32, 29, 23, 0.14);
    --tk-shadow-lg: 0 18px 44px rgba(32, 29, 23, 0.20);

    --tk-transition: 160ms ease;
    --tk-container: 1140px;

    /* Token khas retro-futurism (bukan kontrak): pelat dan huruf chrome, pita matahari
       senja 70s, grid blueprint pada kanvas, dan cincin porthole. */
    --tk-rf-chrome: linear-gradient(180deg, #FCFDFF 0%, #C7D3E4 45%, #8FA1B8 50%, #E6ECF5 100%);
    --tk-rf-chrome-text: linear-gradient(180deg, #EAF4FF 0%, #BFD4EA 38%, #5E7791 49%, #EEF4FB 52%, #93A9C0 100%);
    --tk-rf-chrome-ink: #1C2536;
    --tk-rf-sunset: linear-gradient(180deg, #FFD08A 0% 18%, #FFB25E 18% 36%, #FF8C42 36% 54%, #F0640F 54% 76%, #D9480F 76% 100%);
    --tk-rf-sunset-ink: #FFFFFF;
    --tk-rf-bg:
        linear-gradient(rgba(31, 45, 80, 0.05) 1px, transparent 1px) 0 0 / 100% 32px,
        linear-gradient(90deg, rgba(31, 45, 80, 0.05) 1px, transparent 1px) 0 0 / 32px 100%,
        #F4EFE6;
}

/* Mode gelap: synthwave 80s — langit ungu pekat ber-grid neon magenta-cyan dengan
   cahaya horizon jingga, chrome berubah jadi pelat malam berkilau biru. Aktifkan
   dengan atribut data-tk-theme="dark" pada <html> atau <body>. */
[data-tk-theme="dark"] {
    --tk-color-primary: #FF8C42;
    --tk-color-primary-hover: #FFA35F;
    --tk-color-primary-contrast: #2A1200;
    --tk-color-secondary: #EAE6FF;
    --tk-color-secondary-hover: #FFFFFF;
    --tk-color-secondary-contrast: #170B36;
    --tk-color-accent: #22D3EE;
    --tk-color-background: #170B36;
    --tk-color-surface: #23134D;
    --tk-color-surface-2: #2E1B61;
    --tk-color-text: #F0EAFF;
    --tk-color-text-muted: #A99BD6;
    --tk-color-border: #4A3690;
    --tk-color-success: #51CF66;
    --tk-color-success-soft: #10321A;
    --tk-color-warning: #FCC419;
    --tk-color-warning-soft: #33290A;
    --tk-color-danger: #FF6B6B;
    --tk-color-danger-soft: #3A1220;
    --tk-color-info: #4DABF7;
    --tk-color-info-soft: #122448;
    --tk-shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.45);
    --tk-shadow: 0 6px 18px rgba(255, 140, 66, 0.14);
    --tk-shadow-lg: 0 18px 44px rgba(255, 140, 66, 0.18);
    --tk-rf-chrome: linear-gradient(180deg, #3A2C6E 0%, #241650 46%, #1B0F42 52%, #2C1D61 100%);
    --tk-rf-chrome-text: linear-gradient(180deg, #D8ECFF 0%, #7FB2E8 38%, #3E5E86 49%, #E4F0FF 52%, #6E8FBB 100%);
    --tk-rf-chrome-ink: #E9F1FF;
    --tk-rf-sunset: linear-gradient(180deg, #FFC46B 0% 18%, #FF9E4F 18% 36%, #FF7A3C 36% 54%, #FF5E99 54% 76%, #E8418C 76% 100%);
    --tk-rf-sunset-ink: #FFFFFF;
    --tk-rf-bg:
        radial-gradient(900px 420px at 50% -12%, rgba(255, 122, 26, 0.22) 0%, rgba(255, 122, 26, 0) 60%),
        linear-gradient(rgba(255, 102, 196, 0.08) 1px, transparent 1px) 0 0 / 100% 36px,
        linear-gradient(90deg, rgba(34, 211, 238, 0.08) 1px, transparent 1px) 0 0 / 36px 100%,
        #170B36;
}

/* == tk: base =================================================== */
body {
    margin: 0;
    background: var(--tk-rf-bg);
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
/* Heading Michroma: keluarga Eurostile yang lebar dan mendatar — huruf panel kontrol
   pesawat era space-age. Track sedikit renggang, ukuran ditahan agar tidak meluap. */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    letter-spacing: 0.02em;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); line-height: 1.12; }
.tk-h1 { font-size: var(--tk-text-h1); }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-title); font-weight: 400; letter-spacing: 0.03em; margin: 0 0 var(--tk-space-sm); }
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
.tk-link { color: var(--tk-color-primary); font-weight: 500; text-decoration: none; }
.tk-link:hover { text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; }
.tk-code { font-family: var(--tk-font-mono); font-size: 1em; background: var(--tk-color-surface-2); padding: 2px 6px; border-radius: var(--tk-radius-sm); }

/* == tk: button ================================================= */
/* Tombol kapsul panel instrumen: pil penuh, label Michroma renggang huruf besar,
   cincin ganda tipis saat hover — seperti sakelar kokpit yang menyala. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-heading);
    font-size: 11px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.10em;
    line-height: 1;
    padding: 13px 24px;
    border-radius: var(--tk-radius-full);
    border: 1px solid rgba(32, 29, 23, 0.25);
    box-shadow: var(--tk-shadow-sm);
    cursor: pointer;
    transition: box-shadow var(--tk-transition), transform var(--tk-transition), filter var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 0 0 2px var(--tk-color-surface), 0 0 0 4px currentColor, var(--tk-shadow);
}
.tk-btn:not(:disabled):active { transform: translateY(1px); filter: brightness(0.95); box-shadow: none; }
.tk-btn:disabled { opacity: 0.45; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-btn-primary:hover:not(:disabled) { box-shadow: 0 0 0 2px var(--tk-color-surface), 0 0 0 4px var(--tk-color-primary), var(--tk-shadow); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }
.tk-btn-secondary:hover:not(:disabled) { box-shadow: 0 0 0 2px var(--tk-color-surface), 0 0 0 4px var(--tk-color-secondary), var(--tk-shadow); }
.tk-btn-outline { background: var(--tk-color-surface); color: var(--tk-color-text); border-color: var(--tk-color-border); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); border-color: transparent; box-shadow: none; }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); transform: none; box-shadow: none; }
.tk-btn-danger { background: var(--tk-color-danger); color: #FFFFFF; }
.tk-btn-danger:hover:not(:disabled) { box-shadow: 0 0 0 2px var(--tk-color-surface), 0 0 0 4px var(--tk-color-danger), var(--tk-shadow); }
.tk-btn-text { background: none; color: var(--tk-color-primary); border-color: transparent; box-shadow: none; padding-left: 4px; padding-right: 4px; }
.tk-btn-text:hover:not(:disabled) { text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; transform: none; box-shadow: none; filter: none; }
.tk-btn-sm { font-size: 10px; padding: 9px 16px; }
.tk-btn-lg { font-size: 12px; padding: 16px 32px; }
.tk-btn-icon { padding: 13px; }
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
    border-color: var(--tk-color-text);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
.tk-field { display: flex; flex-direction: column; gap: var(--tk-space-xs); margin-bottom: var(--tk-space-md); }
.tk-label { font-family: var(--tk-font-mono); font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--tk-color-text); }
.tk-help { font-size: 12px; color: var(--tk-color-text-muted); }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    padding: 11px 14px;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-primary);
    box-shadow: 0 0 0 3px rgba(232, 89, 12, 0.20);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: 0 0 0 3px rgba(201, 42, 42, 0.16);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: 0 0 0 3px rgba(43, 138, 62, 0.16); }
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
    box-shadow: 0 0 0 3px rgba(232, 89, 12, 0.20);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
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
.tk-option:hover { background: var(--tk-color-surface-2); }
.tk-option-selected { background: var(--tk-color-info-soft); color: var(--tk-color-info); font-weight: 500; }
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
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-checkbox { border-radius: 6px; }
.tk-checkbox:hover, .tk-radio:hover { border-color: var(--tk-color-primary); }
.tk-checkbox:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); }
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
/* Radio porthole: cincin ganda saat terpilih — titik primer di dalam cincin jendela kapsul. */
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked { border-color: var(--tk-color-primary); box-shadow: inset 0 0 0 2px var(--tk-color-surface); background: var(--tk-color-primary); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(232, 89, 12, 0.28);
}
.tk-toggle { position: relative; width: 44px; height: 24px; flex: none; margin: 0; appearance: none; border: 1px solid var(--tk-color-border); background: var(--tk-color-surface-2); border-radius: var(--tk-radius-full); cursor: pointer; transition: background var(--tk-transition), border-color var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; background: var(--tk-rf-chrome); border: 1px solid rgba(32, 29, 23, 0.2); box-sizing: border-box; border-radius: var(--tk-radius-full); transition: transform var(--tk-transition); }
.tk-toggle:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); }
.tk-toggle:checked::after { transform: translateX(20px); }

/* == tk: search-filter ========================================== */
.tk-search { position: relative; display: flex; align-items: center; min-width: 220px; }
.tk-search .tk-input { width: 100%; padding-left: 38px; padding-right: 60px; }
.tk-search .tk-input::-webkit-search-cancel-button { -webkit-appearance: none; }
.tk-search-icon { position: absolute; left: 12px; display: inline-flex; color: var(--tk-color-text-muted); pointer-events: none; }
.tk-search-kbd {
    position: absolute;
    right: 10px;
    font-family: var(--tk-font-mono);
    font-size: 12px;
    color: var(--tk-rf-chrome-ink);
    background: var(--tk-rf-chrome);
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
    border-radius: var(--tk-radius-lg);
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
    color: #FFFFFF;
    font-family: var(--tk-font-mono);
    font-size: 11px;
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
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg);
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
    font-weight: 500;
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
.tk-dropdown-divider { height: 1px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) 0; }

/* == tk: card =================================================== */
/* Kartu kapsul: sudut besar membulat dengan garis rambut — panel modul stasiun ruang. */
.tk-card {
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-sm);
    overflow: hidden;
}
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-sm); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-family: var(--tk-font-heading); letter-spacing: 0.02em; }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 500; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 500; }

/* == tk: navigation ============================================= */
/* Navbar pelat chrome mengkilap — bumper mobil konsep dan badan roket airstream. */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-rf-chrome);
    border-bottom: 1px solid var(--tk-color-border);
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-size: 16px; letter-spacing: 0.06em; margin-right: auto; color: var(--tk-rf-chrome-ink); }
.tk-navbar-link { color: var(--tk-rf-chrome-ink); opacity: 0.72; text-decoration: none; font-size: 11px; font-family: var(--tk-font-heading); text-transform: uppercase; letter-spacing: 0.08em; }
.tk-navbar-link:hover { opacity: 1; }
.tk-navbar-link-active { opacity: 1; color: var(--tk-color-primary); }
.tk-navbar-dark { background: linear-gradient(180deg, #2A3C66, #16213C); border-bottom-color: #16213C; }
.tk-navbar-dark .tk-navbar-brand { color: #EFF3FA; }
.tk-navbar-dark .tk-navbar-link { color: #EFF3FA; opacity: 0.65; }
.tk-navbar-dark .tk-navbar-link:hover, .tk-navbar-dark .tk-navbar-link-active { opacity: 1; color: #EFF3FA; }
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
    font-weight: 500;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-sidebar-item-active { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }
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
}
.tk-breadcrumb a { color: var(--tk-color-text-muted); text-decoration: none; }
.tk-breadcrumb a:hover { color: var(--tk-color-primary); }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.5; }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 500; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-rf-chrome);
    border-bottom: 1px solid var(--tk-color-border);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: var(--tk-space-lg); border-bottom: 1px solid var(--tk-color-border); }
.tk-tab {
    padding: var(--tk-space-sm) 2px 12px;
    font-size: 11px;
    font-family: var(--tk-font-heading);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 3px solid transparent;
    margin-bottom: -1px;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-primary); border-bottom-color: var(--tk-color-primary); }
.tk-segmented { display: inline-flex; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); padding: 3px; gap: 3px; }
.tk-segment {
    padding: 8px 16px;
    font-family: var(--tk-font-heading);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: var(--tk-radius-full);
    cursor: pointer;
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); box-shadow: var(--tk-shadow-sm); }

/* == tk: badge ================================================== */
/* Badge kapsul misi: mono renggang huruf besar seperti label patch NASA. */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.10em;
    padding: 2px 12px;
    border-radius: var(--tk-radius-full);
    border: 1px solid var(--tk-color-border);
    background: var(--tk-rf-chrome);
    color: var(--tk-rf-chrome-ink);
}
.tk-badge-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); border-color: transparent; }
.tk-badge-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); border-color: transparent; }
.tk-badge-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); border-color: transparent; }
.tk-badge-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); border-color: transparent; }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 12px;
    letter-spacing: 0.06em;
    padding: 3px 12px;
    border-radius: var(--tk-radius-full);
    border: 1px solid var(--tk-color-accent);
    background: var(--tk-color-surface);
    color: var(--tk-color-accent);
}
.tk-chip-remove { border: none; background: none; cursor: pointer; color: var(--tk-color-accent); font-size: 12px; line-height: 1; padding: 0; }
.tk-chip-remove:hover { color: var(--tk-color-danger); }

/* == tk: alert ================================================== */
.tk-alert {
    display: flex;
    gap: var(--tk-space-sm);
    align-items: flex-start;
    padding: var(--tk-space-md);
    border-radius: var(--tk-radius);
    font-size: var(--tk-text-body-sm);
    border: 1px solid currentColor;
}
.tk-alert-title { font-weight: 700; display: block; margin-bottom: 2px; }
.tk-alert-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); }
.tk-alert-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); }
.tk-alert-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-alert-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); }
.tk-table th {
    text-align: left;
    font-family: var(--tk-font-mono);
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--tk-rf-chrome-ink);
    padding: var(--tk-space-sm) var(--tk-space-md);
    background: var(--tk-rf-chrome);
    border-bottom: 1px solid var(--tk-color-border);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: 1px solid var(--tk-color-border); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: var(--tk-color-surface-2); }
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
    font-family: var(--tk-font-heading);
    font-size: 11px;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-page:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-page-active { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); box-shadow: var(--tk-shadow-sm); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(23, 11, 54, 0.5);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
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
    border-left: 1px solid var(--tk-color-border);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 24px;
    height: 24px;
    border: 3px solid var(--tk-color-border);
    border-top-color: var(--tk-color-primary);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.7s linear infinite;
}
.tk-progress { height: 12px; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); overflow: hidden; }
.tk-progress-bar { height: 100%; background: var(--tk-color-primary); border-radius: var(--tk-radius-full); transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, var(--tk-color-surface) 50%, var(--tk-color-surface-2) 75%);
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
    background: var(--tk-color-surface);
}
.tk-empty-icon { color: var(--tk-color-text-muted); }
.tk-empty-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-h4); letter-spacing: 0.03em; }

/* == tk: content-blocks ========================================= */
.tk-hero { text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); max-width: 560px; margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-2xl); }
.tk-feature { display: flex; flex-direction: column; gap: var(--tk-space-sm); }
/* Ikon fitur porthole: lingkaran penuh dengan cincin ganda — jendela kapsul ruang. */
.tk-feature-icon {
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--tk-color-primary);
    border: none;
    border-radius: var(--tk-radius-full);
    color: var(--tk-color-primary-contrast);
    box-shadow: 0 0 0 3px var(--tk-color-surface), 0 0 0 4px var(--tk-color-border), var(--tk-shadow-sm);
    margin: 4px;
}
/* CTA = papan matahari senja: pita jingga bertumpuk khas poster perjalanan antariksa 70s. */
.tk-cta {
    background: var(--tk-rf-sunset);
    color: var(--tk-rf-sunset-ink);
    border: none;
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow);
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
}
.tk-cta .tk-h3 { color: var(--tk-rf-sunset-ink); margin: 0; text-shadow: 0 1px 0 rgba(32, 29, 23, 0.35); }
.tk-cta .tk-muted { color: rgba(255, 255, 255, 0.92); text-shadow: 0 1px 0 rgba(32, 29, 23, 0.3); }
.tk-cta .tk-btn-primary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }
.tk-cta .tk-btn-primary:hover:not(:disabled) { box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.85), 0 0 0 4px var(--tk-color-secondary), var(--tk-shadow); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: retro-futurism flavor ================================== */
/* Penimpa karakter retro-futurism di atas struktur kontrak: menang kaskade karena berada
   di ekor berkas. Tanda tangan kit ini adalah chrome lettering pada headline hero, ikon
   porthole yang bergiliran warna atomic, speed stripes 70s, dan pelat chrome di navbar
   serta header tabel. */
.tk-hero .tk-display {
    font-size: clamp(28px, 4.6vw, var(--tk-text-display));
    background: var(--tk-rf-chrome-text);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    filter: drop-shadow(0 2px 0 rgba(32, 29, 23, 0.45));
    text-transform: uppercase;
}
/* Ikon porthole bergiliran warna atomic: jingga, teal, navy. */
.tk-feature:nth-child(3n+1) .tk-feature-icon { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-feature:nth-child(3n+2) .tk-feature-icon { background: var(--tk-color-accent); color: #FFFFFF; }
.tk-feature:nth-child(3n) .tk-feature-icon { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }
/* Foto: bingkai kapsul membulat dengan garis rambut. */
.tk-card img, .tk-hero img, figure img {
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
}
.tk-hero img, figure img { box-shadow: var(--tk-shadow); }
/* Speed stripes 70s: empat pita menipis ala logo NASA "worm" dan livery roket. */
.tk-hr-stripes {
    height: 22px;
    border: none;
    margin: var(--tk-space-lg) 0;
    background:
        linear-gradient(var(--tk-color-primary) 0 0) 0 0 / 100% 8px,
        linear-gradient(var(--tk-color-accent) 0 0) 0 10px / 100% 5px,
        linear-gradient(var(--tk-color-secondary) 0 0) 0 17px / 100% 3px,
        linear-gradient(var(--tk-color-border) 0 0) 0 21px / 100% 1px;
    background-repeat: no-repeat;
}
/* Readout mono: angka telemetri panel instrumen — pakai untuk metrik dan label teknis. */
.tk-readout {
    display: inline-block;
    font-family: var(--tk-font-mono);
    font-size: 18px;
    letter-spacing: 0.14em;
    background: var(--tk-color-secondary);
    color: var(--tk-color-secondary-contrast);
    border-radius: var(--tk-radius-sm);
    padding: 2px 12px;
}
`;
