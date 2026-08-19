/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const SPATIAL_STYLES = `/* Spatial — kit design TOKENAI.
   Spatial / 3D Design: UI dengan depth yang kuat — panel kaca melayang di
   ruang tiga dimensi, objek 3D (kubus isometrik, bola cahaya), perspective,
   pencahayaan dramatis, dan lapisan-lapisan kedalaman sehingga website terasa
   seperti sebuah ruang, bukan selembar kertas. Setiap permukaan punya jarak:
   bayangan dekat yang tajam + bayangan jauh yang lebar, kaca tembus pandang
   dengan blur, dan cahaya azure-violet yang menyapu dari sudut ruang.
   Tipografi Space Grotesk (heading) + Inter (body) + Space Mono (kode).
   Kit satu-tema: gelap secara bawaan tanpa mode terang — ruang hanya terasa
   dalam gelap. Kontrak: docs/kontrak-kit-design.md. Semua nilai design
   tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #5B8CFF;
    --tk-color-primary-hover: #7AA2FF;
    --tk-color-primary-contrast: #0D1120;
    --tk-color-secondary: #9D7BFF;
    --tk-color-secondary-hover: #B197FF;
    --tk-color-secondary-contrast: #0D1120;
    --tk-color-accent: #4FE0D2;
    --tk-color-background: #0D1120;
    --tk-color-surface: #1A2138;
    --tk-color-surface-2: #242D4A;
    --tk-color-text: #EDF1FF;
    --tk-color-text-muted: #9AA5C7;
    --tk-color-border: #333F63;
    --tk-color-success: #4ADE95;
    --tk-color-success-soft: #12352A;
    --tk-color-warning: #FFC24B;
    --tk-color-warning-soft: #3A2F14;
    --tk-color-danger: #FF6B7A;
    --tk-color-danger-soft: #3D1B22;
    --tk-color-info: #5B8CFF;
    --tk-color-info-soft: #16233F;

    --tk-font-heading: 'Space Grotesk', system-ui, sans-serif;
    --tk-font-body: 'Inter', system-ui, sans-serif;
    --tk-font-mono: 'Space Mono', 'Courier New', monospace;
    --tk-weight-heading: 700;
    --tk-weight-body: 400;
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

    --tk-radius-sm: 10px;
    --tk-radius: 16px;
    --tk-radius-lg: 24px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    --tk-shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.45), 0 8px 24px rgba(0, 0, 0, 0.35);
    --tk-shadow: 0 3px 10px rgba(0, 0, 0, 0.5), 0 20px 56px rgba(0, 0, 0, 0.45);
    --tk-shadow-lg: 0 6px 16px rgba(0, 0, 0, 0.55), 0 36px 96px rgba(0, 0, 0, 0.55);

    --tk-transition: 200ms cubic-bezier(0.2, 0.8, 0.3, 1);
    --tk-container: 1200px;

    /* Token khas spatial (bukan kontrak): material ruang — kaca panel tembus
       pandang, garis tepi yang menangkap cahaya dari atas, dan glow objek. */
    --tk-sp-glass: linear-gradient(160deg, rgba(48, 60, 98, 0.55) 0%, rgba(26, 33, 56, 0.75) 100%);
    --tk-sp-edge: inset 0 1px 0 rgba(237, 241, 255, 0.12);
    --tk-sp-glow-azure: 0 0 28px rgba(91, 140, 255, 0.45);
    --tk-sp-glow-violet: 0 0 28px rgba(157, 123, 255, 0.4);
    --tk-sp-glow-cyan: 0 0 28px rgba(79, 224, 210, 0.4);
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
/* Pencahayaan ruang: dua sorot lampu warna dari sudut berlawanan, tetap di
   tempat saat halaman digulir — kita bergerak di dalam ruangnya. */
body::after {
    content: '';
    position: fixed;
    inset: 0;
    background:
        radial-gradient(46% 38% at 12% -6%, rgba(91, 140, 255, 0.16) 0%, transparent 100%),
        radial-gradient(44% 40% at 94% 104%, rgba(157, 123, 255, 0.14) 0%, transparent 100%),
        radial-gradient(30% 26% at 78% 12%, rgba(79, 224, 210, 0.07) 0%, transparent 100%);
    pointer-events: none;
    z-index: -1;
}
.tk-container {
    max-width: var(--tk-container);
    margin: 0 auto;
    padding: 0 var(--tk-space-lg);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }
::selection { background: rgba(91, 140, 255, 0.4); }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    letter-spacing: -0.02em;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); line-height: 1.06; }
.tk-h1 { font-size: var(--tk-text-h1); }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-title); font-weight: 600; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); letter-spacing: 0.04em; text-transform: uppercase; }
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link { color: var(--tk-color-primary); font-weight: 600; text-decoration: underline; text-decoration-color: rgba(91, 140, 255, 0.4); text-underline-offset: 3px; transition: text-decoration-color var(--tk-transition); }
.tk-link:hover { text-decoration-color: var(--tk-color-primary); }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.85em; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); padding: 2px 8px; border-radius: var(--tk-radius-sm); }

/* == tk: button ================================================= */
/* Tombol adalah objek di ruang: melayang sedikit di atas permukaan dengan
   bayangan ganda, naik mendekat saat disentuh, dan yang utama memancarkan
   cahaya azure. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-heading);
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    padding: 13px 24px;
    border: 1px solid transparent;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), background var(--tk-transition), border-color var(--tk-transition), color var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:not(:disabled):active { transform: translateY(1px) scale(0.98); }
.tk-btn:disabled { opacity: 0.45; cursor: not-allowed; }
.tk-btn-primary {
    background: linear-gradient(180deg, #7AA2FF 0%, #5B8CFF 100%);
    color: var(--tk-color-primary-contrast);
    box-shadow: var(--tk-shadow-sm), var(--tk-sp-glow-azure);
}
.tk-btn-primary:hover:not(:disabled) { transform: translateY(-2px); box-shadow: var(--tk-shadow), 0 0 36px rgba(91, 140, 255, 0.6); }
.tk-btn-secondary {
    background: linear-gradient(180deg, #B197FF 0%, #9D7BFF 100%);
    color: var(--tk-color-secondary-contrast);
    box-shadow: var(--tk-shadow-sm), var(--tk-sp-glow-violet);
}
.tk-btn-secondary:hover:not(:disabled) { transform: translateY(-2px); box-shadow: var(--tk-shadow), 0 0 36px rgba(157, 123, 255, 0.55); }
.tk-btn-danger { background: linear-gradient(180deg, #FF8894 0%, #FF6B7A 100%); color: #2B0D12; box-shadow: var(--tk-shadow-sm), 0 0 24px rgba(255, 107, 122, 0.4); }
.tk-btn-danger:hover:not(:disabled) { transform: translateY(-2px); }
.tk-btn-outline {
    background: var(--tk-sp-glass);
    border-color: var(--tk-color-border);
    color: var(--tk-color-text);
    box-shadow: var(--tk-shadow-sm), var(--tk-sp-edge);
    backdrop-filter: blur(10px);
}
.tk-btn-outline:hover:not(:disabled) { transform: translateY(-2px); border-color: var(--tk-color-primary); box-shadow: var(--tk-shadow), var(--tk-sp-edge); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: rgba(237, 241, 255, 0.07); }
.tk-btn-text { background: none; color: var(--tk-color-primary); padding-left: 6px; padding-right: 6px; }
.tk-btn-text:hover:not(:disabled) { text-decoration: underline; text-underline-offset: 3px; }
.tk-btn-sm { font-size: 13px; padding: 9px 16px; }
.tk-btn-lg { font-size: 16px; padding: 17px 32px; border-radius: var(--tk-radius); }
.tk-btn-icon { padding: 12px; }
.tk-btn-loading { position: relative; color: transparent !important; pointer-events: none; }
.tk-btn-loading::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    border: 2px solid rgba(13, 17, 32, 0.9);
    border-top-color: transparent;
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.8s linear infinite;
}
.tk-btn-outline.tk-btn-loading::after, .tk-btn-ghost.tk-btn-loading::after, .tk-btn-text.tk-btn-loading::after {
    border-color: var(--tk-color-primary);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
.tk-field { display: flex; flex-direction: column; gap: var(--tk-space-xs); margin-bottom: var(--tk-space-md); }
.tk-label { font-size: 13px; font-weight: 600; color: var(--tk-color-text); }
.tk-help { font-size: 13px; color: var(--tk-color-text-muted); }
/* Input tenggelam ke lapisan di belakang kaca: lebih gelap dari permukaan,
   dan menyala di tepinya saat fokus. */
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: rgba(13, 17, 32, 0.6);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 12px 14px;
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.4);
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); opacity: 0.7; }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-primary);
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.4), 0 0 0 3px rgba(91, 140, 255, 0.25), var(--tk-sp-glow-azure);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.4), 0 0 0 3px rgba(255, 107, 122, 0.22);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.4), 0 0 0 3px rgba(74, 222, 149, 0.22); }
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
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.4), 0 0 0 3px rgba(91, 140, 255, 0.25);
}
/* Menu melayang di lapisan paling depan: kaca blur + bayangan jauh. */
.tk-select-menu {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    background: var(--tk-sp-glass);
    backdrop-filter: blur(18px);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg), var(--tk-sp-edge);
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
    transition: background var(--tk-transition);
}
.tk-option:hover { background: rgba(237, 241, 255, 0.08); }
.tk-option-selected { background: rgba(91, 140, 255, 0.22); color: #CFDCFF; font-weight: 600; }
.tk-option-check { margin-left: auto; color: var(--tk-color-primary); display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 12px;
    margin: 2px 2px var(--tk-space-sm);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    background: rgba(13, 17, 32, 0.6);
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
    width: 19px;
    height: 19px;
    flex: none;
    margin: 0;
    position: relative;
    background: rgba(13, 17, 32, 0.6);
    border: 1px solid var(--tk-color-border);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-checkbox { border-radius: 6px; }
.tk-checkbox:checked {
    background: linear-gradient(180deg, #7AA2FF 0%, #5B8CFF 100%);
    border-color: #7AA2FF;
    box-shadow: var(--tk-sp-glow-azure);
}
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 2px;
    width: 4px;
    height: 9px;
    border-right: 2px solid #0D1120;
    border-bottom: 2px solid #0D1120;
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked {
    background: linear-gradient(180deg, #7AA2FF 0%, #5B8CFF 100%);
    border-color: #7AA2FF;
    box-shadow: var(--tk-sp-glow-azure), inset 0 0 0 4px #0D1120;
}
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(91, 140, 255, 0.3);
}
.tk-toggle { position: relative; width: 46px; height: 25px; flex: none; margin: 0; appearance: none; background: rgba(13, 17, 32, 0.7); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.4); cursor: pointer; transition: background var(--tk-transition), border-color var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 19px; height: 19px; background: #EDF1FF; border-radius: var(--tk-radius-full); box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); transition: transform var(--tk-transition), background var(--tk-transition); }
.tk-toggle:checked { background: rgba(91, 140, 255, 0.35); border-color: var(--tk-color-primary); }
.tk-toggle:checked::after { transform: translateX(21px); background: var(--tk-color-primary); box-shadow: var(--tk-sp-glow-azure); }

/* == tk: search-filter ========================================== */
.tk-search { position: relative; display: flex; align-items: center; min-width: 220px; }
.tk-search .tk-input { width: 100%; padding-left: 40px; padding-right: 62px; border-radius: var(--tk-radius-full); }
.tk-search .tk-input::-webkit-search-cancel-button { -webkit-appearance: none; }
.tk-search-icon { position: absolute; left: 14px; display: inline-flex; color: var(--tk-color-text-muted); pointer-events: none; }
.tk-search-kbd {
    position: absolute;
    right: 11px;
    font-family: var(--tk-font-mono);
    font-size: 11px;
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
    background: var(--tk-sp-glass);
    backdrop-filter: blur(14px);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-sm), var(--tk-sp-edge);
}
.tk-filter-bar .tk-search { flex: 1; }
.tk-filter-bar .tk-select { min-width: 170px; }
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
    font-size: 11px;
    font-weight: 700;
    box-shadow: var(--tk-sp-glow-azure);
}
.tk-filter-active { display: flex; flex-wrap: wrap; align-items: center; gap: var(--tk-space-sm); margin-top: var(--tk-space-sm); }

/* == tk: dropdown =============================================== */
.tk-dropdown { position: relative; display: inline-block; }
.tk-dropdown-menu {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    background: var(--tk-sp-glass);
    backdrop-filter: blur(18px);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg), var(--tk-sp-edge);
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
.tk-dropdown-label { padding: 6px 12px; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--tk-color-text-muted); }
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
.tk-dropdown-item:hover { background: rgba(237, 241, 255, 0.08); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-text-muted); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: rgba(255, 107, 122, 0.12); }
.tk-dropdown-divider { height: 1px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) var(--tk-space-sm); }

/* == tk: card =================================================== */
/* Kartu adalah panel kaca yang melayang di ruang: tembus pandang dengan blur,
   tepi atas menangkap cahaya, bayangan dekat + jauh memberi jarak dari lantai.
   Saat disentuh, panel mendekat ke mata (naik + membesar sedikit). */
.tk-card {
    background: var(--tk-sp-glass);
    backdrop-filter: blur(14px);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow), var(--tk-sp-edge);
    overflow: hidden;
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), border-color var(--tk-transition);
}
.tk-card:hover { transform: translateY(-4px) scale(1.005); box-shadow: var(--tk-shadow-lg), var(--tk-sp-edge); border-color: rgba(91, 140, 255, 0.4); }
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-md); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-family: var(--tk-font-heading); font-weight: 700; color: var(--tk-color-text); }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 600; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 600; }

/* == tk: navigation ============================================= */
/* Navbar adalah lapisan kaca terdepan yang menggantung di langit-langit ruang. */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: rgba(20, 26, 45, 0.75);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid var(--tk-color-border);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    position: relative;
    z-index: 5;
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 700; font-size: 19px; margin-right: auto; color: var(--tk-color-text); }
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: 14px; font-weight: 600; padding: 7px 14px; border-radius: var(--tk-radius-sm); transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition); }
.tk-navbar-link:hover { color: var(--tk-color-text); background: rgba(237, 241, 255, 0.07); }
.tk-navbar-link-active { color: #FFFFFF; background: rgba(91, 140, 255, 0.25); box-shadow: inset 0 0 0 1px rgba(91, 140, 255, 0.5), var(--tk-sp-glow-azure); }
.tk-navbar-dark { background: rgba(8, 11, 22, 0.85); }
.tk-navbar-dark .tk-navbar-brand { color: #FFF; }
.tk-navbar-dark .tk-navbar-link { color: rgba(237, 241, 255, 0.6); }
.tk-navbar-dark .tk-navbar-link:hover { color: #FFF; background: rgba(255, 255, 255, 0.08); }
.tk-navbar-dark .tk-navbar-link-active { color: #FFF; }
.tk-sidebar {
    width: 250px;
    background: rgba(20, 26, 45, 0.7);
    backdrop-filter: blur(14px);
    border-right: 1px solid var(--tk-color-border);
    box-shadow: 8px 0 24px rgba(0, 0, 0, 0.3);
    padding: var(--tk-space-md);
    display: flex;
    flex-direction: column;
    gap: 3px;
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
    font-weight: 600;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-sidebar-item:hover { background: rgba(237, 241, 255, 0.07); color: var(--tk-color-text); }
.tk-sidebar-item-active { background: rgba(91, 140, 255, 0.22); color: #CFDCFF; box-shadow: inset 0 0 0 1px rgba(91, 140, 255, 0.45), var(--tk-sp-glow-azure); }
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 66px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-size: 11px;
    font-weight: 700;
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
.tk-breadcrumb a { color: var(--tk-color-text-muted); text-decoration: none; }
.tk-breadcrumb a:hover { color: var(--tk-color-primary); }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.6; }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 600; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: rgba(20, 26, 45, 0.75);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid var(--tk-color-border);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: 4px; border: 1px solid var(--tk-color-border); background: rgba(13, 17, 32, 0.6); border-radius: var(--tk-radius); padding: 4px; box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.35); width: fit-content; max-width: 100%; overflow-x: auto; }
.tk-tab {
    padding: 8px 18px;
    font-size: 14px;
    font-weight: 600;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-radius: var(--tk-radius-sm);
    transition: color var(--tk-transition), background var(--tk-transition), box-shadow var(--tk-transition);
    white-space: nowrap;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: #CFDCFF; background: rgba(91, 140, 255, 0.22); box-shadow: inset 0 0 0 1px rgba(91, 140, 255, 0.45), var(--tk-sp-glow-azure); }
.tk-segmented { display: inline-flex; border: 1px solid var(--tk-color-border); background: rgba(13, 17, 32, 0.6); border-radius: var(--tk-radius); padding: 4px; gap: 2px; box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.35); }
.tk-segment {
    padding: 7px 16px;
    font-family: var(--tk-font-body);
    font-size: 13px;
    font-weight: 600;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: var(--tk-color-surface-2); color: var(--tk-color-text); box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4), var(--tk-sp-edge); }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 12px;
    font-weight: 700;
    padding: 3px 11px;
    border-radius: var(--tk-radius-full);
    border: 1px solid var(--tk-color-border);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text);
}
.tk-badge-success { color: var(--tk-color-success); background: var(--tk-color-success-soft); border-color: rgba(74, 222, 149, 0.35); box-shadow: 0 0 12px rgba(74, 222, 149, 0.15); }
.tk-badge-warning { color: var(--tk-color-warning); background: var(--tk-color-warning-soft); border-color: rgba(255, 194, 75, 0.35); box-shadow: 0 0 12px rgba(255, 194, 75, 0.15); }
.tk-badge-danger { color: var(--tk-color-danger); background: var(--tk-color-danger-soft); border-color: rgba(255, 107, 122, 0.35); box-shadow: 0 0 12px rgba(255, 107, 122, 0.15); }
.tk-badge-info { color: #8FB0FF; background: var(--tk-color-info-soft); border-color: rgba(91, 140, 255, 0.35); box-shadow: 0 0 12px rgba(91, 140, 255, 0.15); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 12px;
    font-weight: 600;
    padding: 4px 11px;
    border-radius: var(--tk-radius-full);
    border: 1px solid var(--tk-color-border);
    background: var(--tk-sp-glass);
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
    border-radius: var(--tk-radius);
    font-size: var(--tk-text-body-sm);
    backdrop-filter: blur(10px);
}
.tk-alert-title { font-weight: 700; display: block; margin-bottom: 2px; }
.tk-alert-success { background: rgba(18, 53, 42, 0.7); border-color: rgba(74, 222, 149, 0.4); color: #9FF0C8; }
.tk-alert-warning { background: rgba(58, 47, 20, 0.7); border-color: rgba(255, 194, 75, 0.4); color: #FFE0A3; }
.tk-alert-danger { background: rgba(61, 27, 34, 0.7); border-color: rgba(255, 107, 122, 0.4); color: #FFB3BC; }
.tk-alert-info { background: rgba(22, 35, 63, 0.7); border-color: rgba(91, 140, 255, 0.4); color: #BFD2FF; }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); }
.tk-table th {
    text-align: left;
    font-weight: 700;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: var(--tk-color-text-muted);
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-bottom: 1px solid var(--tk-color-border);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: 1px solid rgba(51, 63, 99, 0.5); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: rgba(91, 140, 255, 0.07); }
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
.tk-action-btn:hover { background: rgba(237, 241, 255, 0.08); color: var(--tk-color-text); }
.tk-action-btn-danger:hover { background: rgba(255, 107, 122, 0.14); color: var(--tk-color-danger); }
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
    font-family: var(--tk-font-body);
    font-size: 13px;
    font-weight: 600;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-page:hover { background: rgba(237, 241, 255, 0.08); color: var(--tk-color-text); }
.tk-page-active { background: rgba(91, 140, 255, 0.22); border-color: rgba(91, 140, 255, 0.45); color: #CFDCFF; box-shadow: var(--tk-sp-glow-azure); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(5, 7, 14, 0.65);
    backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
/* Modal adalah panel yang paling dekat ke mata: kaca paling terang, bayangan
   paling jauh. */
.tk-modal {
    background: linear-gradient(160deg, rgba(58, 71, 112, 0.7) 0%, rgba(30, 38, 64, 0.85) 100%);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(91, 140, 255, 0.35);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg), var(--tk-sp-edge);
    max-width: 440px;
    width: 100%;
}
.tk-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 360px;
    background: rgba(20, 26, 45, 0.85);
    backdrop-filter: blur(24px);
    border-left: 1px solid var(--tk-color-border);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 26px;
    height: 26px;
    border: 3px solid var(--tk-color-surface-2);
    border-top-color: var(--tk-color-primary);
    border-radius: var(--tk-radius-full);
    box-shadow: var(--tk-sp-glow-azure);
    animation: tk-spin 0.8s linear infinite;
}
.tk-progress { height: 12px; background: rgba(13, 17, 32, 0.7); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.45); overflow: hidden; }
.tk-progress-bar {
    height: 100%;
    border-radius: var(--tk-radius-full);
    background: linear-gradient(90deg, #5B8CFF 0%, #9D7BFF 100%);
    box-shadow: var(--tk-sp-glow-azure);
    transition: width var(--tk-transition);
}
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, rgba(91, 140, 255, 0.14) 50%, var(--tk-color-surface-2) 75%);
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
    background: rgba(20, 26, 45, 0.45);
}
.tk-empty-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    background: var(--tk-sp-glass);
    color: var(--tk-color-text-muted);
    box-shadow: var(--tk-shadow-sm), var(--tk-sp-edge);
}
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: 700; font-size: var(--tk-text-h4); }

/* == tk: content-blocks ========================================= */
/* Hero adalah pintu masuk ruang: lantai grid perspektif memanjang ke titik
   hilang, dengan objek 3D melayang di kedua sisi. */
.tk-hero { position: relative; text-align: center; padding: var(--tk-space-section) var(--tk-space-lg) 120px; overflow: hidden; }
.tk-hero::before {
    content: '';
    position: absolute;
    left: -20%;
    right: -20%;
    bottom: -46%;
    height: 74%;
    background:
        linear-gradient(rgba(91, 140, 255, 0.16) 1px, transparent 1px),
        linear-gradient(90deg, rgba(91, 140, 255, 0.16) 1px, transparent 1px);
    background-size: 56px 56px;
    transform: perspective(420px) rotateX(62deg);
    transform-origin: 50% 0;
    -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 32%, #000 78%, transparent 100%);
    mask-image: linear-gradient(180deg, transparent 0%, #000 32%, #000 78%, transparent 100%);
    pointer-events: none;
}
.tk-hero > * { position: relative; max-width: 640px; margin-left: auto; margin-right: auto; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; flex-wrap: wrap; }
/* Grid fitur hidup di ruang 3D: kartunya menoleh ke arah kursor saat hover. */
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-lg); perspective: 1200px; }
.tk-feature {
    display: flex;
    flex-direction: column;
    gap: var(--tk-space-sm);
    background: var(--tk-sp-glass);
    backdrop-filter: blur(14px);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow), var(--tk-sp-edge);
    padding: var(--tk-space-lg);
    transform-style: preserve-3d;
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), border-color var(--tk-transition);
}
.tk-feature:hover { transform: rotateX(4deg) rotateY(-4deg) translateY(-6px); box-shadow: var(--tk-shadow-lg), var(--tk-sp-edge); border-color: rgba(91, 140, 255, 0.4); }
.tk-feature-icon {
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius);
    background: linear-gradient(160deg, rgba(91, 140, 255, 0.35) 0%, rgba(91, 140, 255, 0.15) 100%);
    border: 1px solid rgba(91, 140, 255, 0.5);
    color: #AFC6FF;
    box-shadow: var(--tk-sp-glow-azure), var(--tk-sp-edge);
    transform: translateZ(28px);
}
.tk-cta {
    position: relative;
    background:
        radial-gradient(90% 140% at 85% 10%, rgba(157, 123, 255, 0.3) 0%, transparent 60%),
        radial-gradient(80% 130% at 10% 90%, rgba(91, 140, 255, 0.28) 0%, transparent 60%),
        var(--tk-color-surface);
    border: 1px solid rgba(91, 140, 255, 0.4);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg), var(--tk-sp-edge), 0 0 60px rgba(91, 140, 255, 0.15);
    color: var(--tk-color-text);
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
    overflow: hidden;
}
.tk-cta > * { position: relative; }
.tk-cta .tk-h3 { margin: 0; }
.tk-cta .tk-muted { color: var(--tk-color-text-muted); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: spatial flavor ========================================= */
/* Penimpa karakter spatial di atas struktur kontrak: menang kaskade karena
   berada di ekor berkas. Tanda tangan kit ini adalah objek 3D (kubus
   isometrik, bola cahaya), lantai perspektif, dan tumpukan lapisan kaca. */
@keyframes tk-drift {
    from { transform: translateY(-10px); }
    to { transform: translateY(12px); }
}
/* Kubus isometrik murni CSS: elemen = sisi depan, ::before = sisi atas,
   ::after = sisi kanan. Melayang pelan di ruang. */
.tk-cube {
    position: relative;
    display: inline-block;
    width: 56px;
    height: 56px;
    background: linear-gradient(160deg, rgba(91, 140, 255, 0.5) 0%, rgba(91, 140, 255, 0.25) 100%);
    border: 1px solid rgba(145, 178, 255, 0.7);
    box-shadow: var(--tk-sp-glow-azure);
    animation: tk-drift 5s ease-in-out infinite alternate;
}
.tk-cube::before {
    content: '';
    position: absolute;
    left: 0;
    top: -19px;
    width: 100%;
    height: 19px;
    background: linear-gradient(180deg, rgba(175, 198, 255, 0.55) 0%, rgba(145, 178, 255, 0.35) 100%);
    border: 1px solid rgba(175, 198, 255, 0.7);
    box-sizing: border-box;
    transform: skewX(-45deg);
    transform-origin: 0 100%;
}
.tk-cube::after {
    content: '';
    position: absolute;
    right: -19px;
    top: 0;
    width: 19px;
    height: 100%;
    background: linear-gradient(90deg, rgba(46, 66, 118, 0.85) 0%, rgba(32, 45, 82, 0.9) 100%);
    border: 1px solid rgba(145, 178, 255, 0.4);
    box-sizing: border-box;
    transform: skewY(-45deg);
    transform-origin: 0 0;
}
.tk-cube-violet { background: linear-gradient(160deg, rgba(157, 123, 255, 0.5) 0%, rgba(157, 123, 255, 0.25) 100%); border-color: rgba(190, 165, 255, 0.7); box-shadow: var(--tk-sp-glow-violet); animation-delay: -2.5s; }
.tk-cube-violet::before { background: linear-gradient(180deg, rgba(205, 185, 255, 0.55) 0%, rgba(190, 165, 255, 0.35) 100%); border-color: rgba(205, 185, 255, 0.7); }
/* Bola cahaya: sphere dengan sorot dari kiri-atas dan pendar warna. */
.tk-orb {
    display: inline-block;
    width: 72px;
    height: 72px;
    border-radius: var(--tk-radius-full);
    background: radial-gradient(circle at 32% 28%, rgba(237, 241, 255, 0.9) 0%, #5B8CFF 34%, #1B3070 100%);
    box-shadow: var(--tk-sp-glow-azure), inset 0 -6px 14px rgba(0, 0, 0, 0.35);
    animation: tk-drift 6s ease-in-out infinite alternate;
}
.tk-orb-violet { background: radial-gradient(circle at 32% 28%, rgba(240, 232, 255, 0.9) 0%, #9D7BFF 34%, #3A2478 100%); box-shadow: var(--tk-sp-glow-violet), inset 0 -6px 14px rgba(0, 0, 0, 0.35); animation-delay: -3s; }
.tk-orb-cyan { background: radial-gradient(circle at 32% 28%, rgba(232, 255, 252, 0.9) 0%, #4FE0D2 34%, #14544C 100%); box-shadow: var(--tk-sp-glow-cyan), inset 0 -6px 14px rgba(0, 0, 0, 0.35); animation-delay: -1.5s; }
/* Objek melayang di hero: dua bola di sisi kiri-bawah dan kanan-atas. */
.tk-hero::after {
    content: '';
    position: absolute;
    width: 108px;
    height: 108px;
    right: 7%;
    top: 14%;
    border-radius: var(--tk-radius-full);
    background: radial-gradient(circle at 32% 28%, rgba(240, 232, 255, 0.9) 0%, #9D7BFF 34%, #3A2478 100%);
    box-shadow: var(--tk-sp-glow-violet), inset 0 -8px 18px rgba(0, 0, 0, 0.35);
    animation: tk-drift 6s ease-in-out infinite alternate;
    pointer-events: none;
}
/* Utilitas kedalaman: panel di lapisan belakang / tengah / depan. */
.tk-depth-back { box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4); transform: scale(0.98); opacity: 0.75; }
.tk-depth-front { box-shadow: var(--tk-shadow-lg), var(--tk-sp-edge); }
.tk-float { animation: tk-drift 5s ease-in-out infinite alternate; }
/* Foto adalah jendela ke ruang lain: bingkai kaca dengan tepi bercahaya. */
.tk-card img, .tk-hero img, figure img {
    border: 1px solid rgba(91, 140, 255, 0.4);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow), 0 0 24px rgba(91, 140, 255, 0.18);
    box-sizing: border-box;
}
`;
