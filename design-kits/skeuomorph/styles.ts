/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const SKEUOMORPH_STYLES = `/* Skeuomorph — kit design TOKENAI.
   Skeuomorphism: antarmuka menyerupai benda fisik nyata — tombol glossy dengan
   gradien dan bevel yang benar-benar "ditekan", panel logam bersikat dengan
   sekrup di keempat sudut, input yang tenggelam ke dalam permukaan, saklar
   fisik, lampu LED status yang menyala, kulit berjahit, dan kenop putar.
   Cahaya selalu datang dari atas: bibir atas terang, bibir bawah gelap, teks
   ter-emboss. Palet bengkel klasik: linen hangat, aluminium, biru glossy,
   kulit cokelat, dan LED amber. Tipografi Bitter (pelat label terukir) +
   PT Sans. Kit satu-tema: terang secara bawaan tanpa mode gelap — benda fisik
   dilihat di bawah lampu kerja. Kontrak: docs/kontrak-kit-design.md. Semua
   nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #3E6FA6;
    --tk-color-primary-hover: #35608F;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: #9A6A38;
    --tk-color-secondary-hover: #8A5D2F;
    --tk-color-secondary-contrast: #FFFFFF;
    --tk-color-accent: #E8A33D;
    --tk-color-background: #E9E5DC;
    --tk-color-surface: #F6F4EF;
    --tk-color-surface-2: #E0DBCE;
    --tk-color-text: #3B372F;
    --tk-color-text-muted: #6E6858;
    --tk-color-border: #B8B09C;
    --tk-color-success: #4E9A52;
    --tk-color-success-soft: #E2EFE0;
    --tk-color-warning: #C98A2E;
    --tk-color-warning-soft: #F5EAD3;
    --tk-color-danger: #C0442F;
    --tk-color-danger-soft: #F4DFD9;
    --tk-color-info: #3E6FA6;
    --tk-color-info-soft: #DFE9F3;

    --tk-font-heading: 'Bitter', Georgia, serif;
    --tk-font-body: 'PT Sans', 'Lucida Grande', system-ui, sans-serif;
    --tk-font-mono: 'IBM Plex Mono', 'Courier New', monospace;
    --tk-weight-heading: 700;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.2;
    --tk-leading-body: 1.6;

    --tk-text-display: 46px;
    --tk-text-h1: 34px;
    --tk-text-h2: 27px;
    --tk-text-h3: 21px;
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
    --tk-space-section: 88px;

    --tk-radius-sm: 5px;
    --tk-radius: 8px;
    --tk-radius-lg: 12px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    --tk-shadow-sm: 0 1px 2px rgba(59, 55, 47, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.65);
    --tk-shadow: 0 2px 6px rgba(59, 55, 47, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.65);
    --tk-shadow-lg: 0 10px 26px rgba(59, 55, 47, 0.38), inset 0 1px 0 rgba(255, 255, 255, 0.65);

    --tk-transition: 130ms ease-out;
    --tk-container: 1200px;

    /* Token khas skeuomorph (bukan kontrak): material fisik yang dipakai
       berulang — pelat logam bersikat, sumur tenggelam untuk input/track,
       bevel bibir atas-bawah, dan emboss teks (cahaya dari atas). */
    --tk-sk-metal: linear-gradient(180deg, #FBF9F4 0%, #EAE6DB 47%, #DFD9CA 53%, #EFEBE1 100%);
    --tk-sk-metal-dark: linear-gradient(180deg, #57534A 0%, #44403A 47%, #3B3731 53%, #4A463F 100%);
    --tk-sk-leather: linear-gradient(180deg, #A575442E 0%, #8B5E3226 100%), #96683A;
    --tk-sk-well: inset 0 2px 4px rgba(59, 55, 47, 0.3), inset 0 -1px 0 rgba(255, 255, 255, 0.7);
    --tk-sk-bevel: inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(59, 55, 47, 0.12);
    --tk-sk-emboss: 0 1px 0 rgba(255, 255, 255, 0.65);
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
/* Tekstur linen halus di seluruh halaman — kain meja kerja, tanpa menghalangi klik. */
body::after {
    content: '';
    position: fixed;
    inset: 0;
    background:
        repeating-linear-gradient(0deg, rgba(59, 55, 47, 0.022) 0 1px, transparent 1px 3px),
        repeating-linear-gradient(90deg, rgba(59, 55, 47, 0.022) 0 1px, transparent 1px 3px);
    pointer-events: none;
    z-index: -1;
}
.tk-container {
    max-width: var(--tk-container);
    margin: 0 auto;
    padding: 0 var(--tk-space-lg);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }
::selection { background: rgba(62, 111, 166, 0.3); }

/* == tk: typography ============================================= */
/* Judul ter-emboss seperti tulisan yang dicetak-tekan ke pelat. */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    letter-spacing: -0.01em;
    color: var(--tk-color-text);
    text-shadow: var(--tk-sk-emboss);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); line-height: 1.1; }
.tk-h1 { font-size: var(--tk-text-h1); }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-title); font-weight: 700; text-shadow: var(--tk-sk-emboss); margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); text-transform: uppercase; letter-spacing: 0.06em; text-shadow: var(--tk-sk-emboss); }
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link { color: var(--tk-color-primary); font-weight: 700; text-decoration: underline; text-underline-offset: 2px; }
.tk-link:hover { color: var(--tk-color-primary-hover); }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.85em; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); padding: 1px 7px; border-radius: var(--tk-radius-sm); box-shadow: var(--tk-sk-well); }

/* == tk: button ================================================= */
/* Tombol fisik: gradien glossy atas-terang bawah-gelap, bevel bibir, dan
   benar-benar tenggelam saat ditekan (gradien terbalik + bayangan masuk). */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-body);
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    padding: 12px 22px;
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    cursor: pointer;
    transition: filter var(--tk-transition), box-shadow var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
    background: var(--tk-sk-metal);
    color: var(--tk-color-text);
    text-shadow: var(--tk-sk-emboss);
    box-shadow: 0 2px 4px rgba(59, 55, 47, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.75), inset 0 -1px 0 rgba(59, 55, 47, 0.15);
}
.tk-btn:not(:disabled):active {
    box-shadow: inset 0 2px 5px rgba(59, 55, 47, 0.4) !important;
    filter: brightness(0.94);
    transform: translateY(1px);
}
.tk-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.tk-btn-primary {
    background: linear-gradient(180deg, #6B95C4 0%, #4A7AB0 47%, #3E6FA6 53%, #4A7AB0 100%);
    border-color: #2C5480;
    color: var(--tk-color-primary-contrast);
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0 2px 4px rgba(59, 55, 47, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.2);
}
.tk-btn-primary:hover:not(:disabled) { filter: brightness(1.06); }
.tk-btn-secondary {
    background: linear-gradient(180deg, #B98A50 0%, #A47540 47%, #96683A 53%, #A47540 100%);
    border-color: #6E4B26;
    color: var(--tk-color-secondary-contrast);
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0 2px 4px rgba(59, 55, 47, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.35), inset 0 -1px 0 rgba(0, 0, 0, 0.2);
}
.tk-btn-secondary:hover:not(:disabled) { filter: brightness(1.06); }
.tk-btn-danger {
    background: linear-gradient(180deg, #D5705C 0%, #C6503B 47%, #C0442F 53%, #C6503B 100%);
    border-color: #8C2F1F;
    color: #FFF;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0 2px 4px rgba(59, 55, 47, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.35), inset 0 -1px 0 rgba(0, 0, 0, 0.2);
}
.tk-btn-danger:hover:not(:disabled) { filter: brightness(1.06); }
.tk-btn-outline { background: var(--tk-color-surface); }
.tk-btn-outline:hover:not(:disabled) { filter: brightness(0.98); }
.tk-btn-ghost { background: transparent; border-color: transparent; box-shadow: none; }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); box-shadow: var(--tk-sk-bevel); }
.tk-btn-text { background: none; border-color: transparent; box-shadow: none; color: var(--tk-color-primary); padding-left: 6px; padding-right: 6px; }
.tk-btn-text:hover:not(:disabled) { text-decoration: underline; }
.tk-btn-sm { font-size: 13px; padding: 8px 15px; border-radius: var(--tk-radius-sm); }
.tk-btn-lg { font-size: 16px; padding: 15px 30px; }
.tk-btn-icon { padding: 11px; }
.tk-btn-loading { position: relative; color: transparent !important; text-shadow: none !important; pointer-events: none; }
.tk-btn-loading::after {
    content: '';
    position: absolute;
    width: 13px;
    height: 13px;
    border: 2px solid rgba(255, 255, 255, 0.9);
    border-top-color: transparent;
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.8s linear infinite;
}
.tk-btn-outline.tk-btn-loading::after, .tk-btn-ghost.tk-btn-loading::after, .tk-btn.tk-btn-loading:not(.tk-btn-primary):not(.tk-btn-secondary):not(.tk-btn-danger)::after {
    border-color: var(--tk-color-text);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
.tk-field { display: flex; flex-direction: column; gap: var(--tk-space-xs); margin-bottom: var(--tk-space-md); }
.tk-label { font-size: 13px; font-weight: 700; color: var(--tk-color-text); text-shadow: var(--tk-sk-emboss); }
.tk-help { font-size: 13px; color: var(--tk-color-text-muted); }
/* Input adalah sumur yang benar-benar tenggelam ke permukaan panel. */
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: #FDFCF9;
    border: 1px solid var(--tk-color-border);
    border-top-color: #9A927E;
    border-top-color: rgba(110, 104, 88, 0.75);
    border-radius: var(--tk-radius-sm);
    padding: 11px 13px;
    box-shadow: var(--tk-sk-well);
    transition: box-shadow var(--tk-transition), border-color var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); opacity: 0.8; }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-primary);
    box-shadow: var(--tk-sk-well), 0 0 0 3px rgba(62, 111, 166, 0.28);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: var(--tk-sk-well), 0 0 0 3px rgba(192, 68, 47, 0.25);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: var(--tk-sk-well), 0 0 0 3px rgba(78, 154, 82, 0.25); }
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
    background: var(--tk-sk-metal);
    box-shadow: 0 1px 3px rgba(59, 55, 47, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.7);
}
.tk-select-trigger > iconify-icon { color: var(--tk-color-text-muted); flex: none; }
.tk-select-placeholder { color: var(--tk-color-text-muted); }
.tk-select:focus-within > .tk-select-trigger, .tk-select-open > .tk-select-trigger {
    border-color: var(--tk-color-primary);
    box-shadow: 0 1px 3px rgba(59, 55, 47, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 0 0 3px rgba(62, 111, 166, 0.28);
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
.tk-option-selected {
    background: linear-gradient(180deg, #6B95C4 0%, #3E6FA6 100%);
    color: #FFF;
    font-weight: 700;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.tk-option-check { margin-left: auto; color: #FFF; display: inline-flex; }
.tk-option:not(.tk-option-selected) .tk-option-check { color: var(--tk-color-primary); }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 8px 12px;
    margin: 2px 2px var(--tk-space-xs);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    background: #FDFCF9;
    box-shadow: var(--tk-sk-well);
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
/* Checkbox dan radio: sumur logam mini; saat terisi, permukaannya jadi glossy biru. */
.tk-checkbox, .tk-radio {
    appearance: none;
    width: 19px;
    height: 19px;
    flex: none;
    margin: 0;
    position: relative;
    background: #FDFCF9;
    border: 1px solid var(--tk-color-border);
    box-shadow: var(--tk-sk-well);
    cursor: pointer;
    transition: background var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-checkbox { border-radius: var(--tk-radius-sm); }
.tk-checkbox:checked {
    background: linear-gradient(180deg, #6B95C4 0%, #3E6FA6 100%);
    border-color: #2C5480;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 2px rgba(59, 55, 47, 0.25);
}
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 2px;
    width: 4px;
    height: 9px;
    border-right: 2px solid #FFF;
    border-bottom: 2px solid #FFF;
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked {
    background: linear-gradient(180deg, #6B95C4 0%, #3E6FA6 100%);
    border-color: #2C5480;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 0 0 4px #FDFCF9, 0 1px 2px rgba(59, 55, 47, 0.25);
}
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: var(--tk-sk-well), 0 0 0 3px rgba(62, 111, 166, 0.28);
}
/* Saklar fisik: rel tenggelam, knob logam dengan gradien; ON menyalakan rel biru. */
.tk-toggle { position: relative; width: 48px; height: 26px; flex: none; margin: 0; appearance: none; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); box-shadow: var(--tk-sk-well); cursor: pointer; transition: background var(--tk-transition); }
.tk-toggle::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background: var(--tk-sk-metal);
    border: 1px solid var(--tk-color-border);
    box-sizing: border-box;
    border-radius: var(--tk-radius-full);
    box-shadow: 0 1px 3px rgba(59, 55, 47, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.8);
    transition: transform var(--tk-transition);
}
.tk-toggle:checked { background: linear-gradient(180deg, #35608F 0%, #4A7AB0 100%); border-color: #2C5480; }
.tk-toggle:checked::after { transform: translateX(22px); }

/* == tk: search-filter ========================================== */
.tk-search { position: relative; display: flex; align-items: center; min-width: 220px; }
.tk-search .tk-input { width: 100%; padding-left: 38px; padding-right: 62px; border-radius: var(--tk-radius-full); }
.tk-search .tk-input::-webkit-search-cancel-button { -webkit-appearance: none; }
.tk-search-icon { position: absolute; left: 13px; display: inline-flex; color: var(--tk-color-text-muted); pointer-events: none; }
.tk-search-kbd {
    position: absolute;
    right: 10px;
    font-family: var(--tk-font-mono);
    font-size: 11px;
    color: var(--tk-color-text-muted);
    background: var(--tk-sk-metal);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 2px 7px;
    box-shadow: 0 1px 2px rgba(59, 55, 47, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.7);
    pointer-events: none;
}
.tk-filter-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-md);
    background: var(--tk-sk-metal);
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
    min-width: 19px;
    height: 19px;
    padding: 0 5px;
    border-radius: var(--tk-radius-full);
    background: linear-gradient(180deg, #D5705C 0%, #C0442F 100%);
    border: 1px solid #8C2F1F;
    color: #FFF;
    font-size: 11px;
    font-weight: 700;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0 1px 2px rgba(59, 55, 47, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.35);
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
.tk-dropdown-label { padding: 6px 12px; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--tk-color-text-muted); text-shadow: var(--tk-sk-emboss); }
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
.tk-dropdown-divider { height: 1px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) var(--tk-space-sm); box-shadow: 0 1px 0 rgba(255, 255, 255, 0.6); }

/* == tk: card =================================================== */
/* Kartu adalah panel fisik: permukaan bergradien tipis, tepi bevel, dan
   bayangan jatuh yang nyata — benda yang menempel di meja. */
.tk-card {
    background: linear-gradient(180deg, #FBF9F4 0%, var(--tk-color-surface) 100%);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: 0 3px 8px rgba(59, 55, 47, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.75);
    overflow: hidden;
    transition: box-shadow var(--tk-transition);
}
.tk-card:hover { box-shadow: 0 6px 16px rgba(59, 55, 47, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.75); }
.tk-card-header {
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-sk-metal);
    border-bottom: 1px solid var(--tk-color-border);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
}
.tk-card-header .tk-title { margin: 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: var(--tk-space-md) var(--tk-space-lg); display: flex; gap: var(--tk-space-md); border-top: 1px solid var(--tk-color-border); background: var(--tk-color-surface-2); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-family: var(--tk-font-heading); font-weight: 700; color: var(--tk-color-text); text-shadow: var(--tk-sk-emboss); }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 700; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 700; }

/* == tk: navigation ============================================= */
/* Bilah navigasi: pelat aluminium bersikat dengan garis sikat halus. */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background:
        repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0 1px, transparent 1px 2px),
        var(--tk-sk-metal);
    border-bottom: 1px solid var(--tk-color-border);
    box-shadow: 0 2px 5px rgba(59, 55, 47, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.8);
    position: relative;
    z-index: 5;
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 700; font-size: 19px; margin-right: auto; color: var(--tk-color-text); text-shadow: var(--tk-sk-emboss); }
.tk-navbar-link {
    color: var(--tk-color-text-muted);
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    padding: 7px 14px;
    border: 1px solid transparent;
    border-radius: var(--tk-radius);
    text-shadow: var(--tk-sk-emboss);
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-navbar-link:hover { color: var(--tk-color-text); background: rgba(59, 55, 47, 0.06); box-shadow: var(--tk-sk-bevel); }
.tk-navbar-link-active {
    color: #FFF;
    background: linear-gradient(180deg, #35608F 0%, #4A7AB0 100%);
    border-color: #2C5480;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
    box-shadow: var(--tk-sk-well);
}
.tk-navbar-dark {
    background:
        repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.04) 0 1px, transparent 1px 2px),
        var(--tk-sk-metal-dark);
    border-bottom-color: #2C2925;
}
.tk-navbar-dark .tk-navbar-brand { color: #F0EDE5; text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.5); }
.tk-navbar-dark .tk-navbar-link { color: rgba(240, 237, 229, 0.65); text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.5); }
.tk-navbar-dark .tk-navbar-link:hover { color: #F0EDE5; background: rgba(255, 255, 255, 0.08); }
.tk-navbar-dark .tk-navbar-link-active { color: #FFF; }
.tk-sidebar {
    width: 250px;
    background: linear-gradient(180deg, #FBF9F4 0%, var(--tk-color-surface) 100%);
    border-right: 1px solid var(--tk-color-border);
    box-shadow: 2px 0 6px rgba(59, 55, 47, 0.12);
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
    border: 1px solid transparent;
    border-radius: var(--tk-radius);
    color: var(--tk-color-text-muted);
    font-size: var(--tk-text-body-sm);
    font-weight: 700;
    text-decoration: none;
    text-shadow: var(--tk-sk-emboss);
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); box-shadow: var(--tk-sk-bevel); }
.tk-sidebar-item-active {
    background: linear-gradient(180deg, #35608F 0%, #4A7AB0 100%);
    border-color: #2C5480;
    color: #FFF;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
    box-shadow: var(--tk-sk-well);
}
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
    text-shadow: var(--tk-sk-emboss);
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
.tk-breadcrumb a:hover { color: var(--tk-color-primary); text-decoration: underline; }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.6; }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 700; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-sk-metal);
    border-bottom: 1px solid var(--tk-color-border);
    box-shadow: 0 2px 5px rgba(59, 55, 47, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

/* == tk: tabs =================================================== */
/* Tab seperti deretan tombol preset di panel radio: rel tenggelam, tab aktif
   menonjol keluar sebagai tombol logam. */
.tk-tabs {
    display: flex;
    gap: 4px;
    border: 1px solid var(--tk-color-border);
    background: var(--tk-color-surface-2);
    border-radius: var(--tk-radius);
    padding: 4px;
    box-shadow: var(--tk-sk-well);
    width: fit-content;
    max-width: 100%;
    overflow-x: auto;
}
.tk-tab {
    padding: 8px 18px;
    font-size: 14px;
    font-weight: 700;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: var(--tk-radius-sm);
    text-shadow: var(--tk-sk-emboss);
    transition: color var(--tk-transition), background var(--tk-transition), box-shadow var(--tk-transition);
    white-space: nowrap;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active {
    color: var(--tk-color-text);
    background: var(--tk-sk-metal);
    border-color: var(--tk-color-border);
    box-shadow: 0 1px 3px rgba(59, 55, 47, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.8);
}
.tk-segmented { display: inline-flex; border: 1px solid var(--tk-color-border); background: var(--tk-color-surface-2); border-radius: var(--tk-radius); padding: 4px; gap: 2px; box-shadow: var(--tk-sk-well); }
.tk-segment {
    padding: 7px 16px;
    font-family: var(--tk-font-body);
    font-size: 13px;
    font-weight: 700;
    color: var(--tk-color-text-muted);
    border: 1px solid transparent;
    background: transparent;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    text-shadow: var(--tk-sk-emboss);
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active {
    background: var(--tk-sk-metal);
    color: var(--tk-color-text);
    border-color: var(--tk-color-border);
    box-shadow: 0 1px 3px rgba(59, 55, 47, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

/* == tk: badge ================================================== */
/* Badge status memakai lampu LED yang menyala (titik dengan glow). */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 700;
    padding: 3px 11px;
    border-radius: var(--tk-radius-full);
    border: 1px solid var(--tk-color-border);
    background: var(--tk-sk-metal);
    color: var(--tk-color-text);
    text-shadow: var(--tk-sk-emboss);
    box-shadow: 0 1px 2px rgba(59, 55, 47, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.7);
}
.tk-badge::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: var(--tk-radius-full);
    background: radial-gradient(circle at 35% 30%, #C8C2B2, #8F8873);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.3);
    flex: none;
}
.tk-badge-success::before { background: radial-gradient(circle at 35% 30%, #9FE0A2, var(--tk-color-success)); box-shadow: 0 0 5px rgba(78, 154, 82, 0.8), inset 0 1px 1px rgba(0, 0, 0, 0.2); }
.tk-badge-warning::before { background: radial-gradient(circle at 35% 30%, #F5CE8C, var(--tk-color-warning)); box-shadow: 0 0 5px rgba(201, 138, 46, 0.8), inset 0 1px 1px rgba(0, 0, 0, 0.2); }
.tk-badge-danger::before { background: radial-gradient(circle at 35% 30%, #F0A08F, var(--tk-color-danger)); box-shadow: 0 0 5px rgba(192, 68, 47, 0.8), inset 0 1px 1px rgba(0, 0, 0, 0.2); }
.tk-badge-info::before { background: radial-gradient(circle at 35% 30%, #9FC0E8, var(--tk-color-info)); box-shadow: 0 0 5px rgba(62, 111, 166, 0.8), inset 0 1px 1px rgba(0, 0, 0, 0.2); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 12px;
    font-weight: 700;
    padding: 4px 11px;
    border-radius: var(--tk-radius-full);
    border: 1px solid var(--tk-color-border);
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
    border: 1px solid;
    border-radius: var(--tk-radius);
    font-size: var(--tk-text-body-sm);
    box-shadow: 0 1px 3px rgba(59, 55, 47, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.5);
}
.tk-alert-title { font-weight: 700; display: block; margin-bottom: 2px; }
.tk-alert-success { background: linear-gradient(180deg, #EAF4E8 0%, var(--tk-color-success-soft) 100%); border-color: #A8CBA6; color: #2F5E32; }
.tk-alert-warning { background: linear-gradient(180deg, #F9F0DE 0%, var(--tk-color-warning-soft) 100%); border-color: #D9BC85; color: #7A5418; }
.tk-alert-danger { background: linear-gradient(180deg, #F8E7E1 0%, var(--tk-color-danger-soft) 100%); border-color: #DBA294; color: #7E2C1D; }
.tk-alert-info { background: linear-gradient(180deg, #E8F0F8 0%, var(--tk-color-info-soft) 100%); border-color: #A3BCD8; color: #27476B; }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); }
.tk-table th {
    text-align: left;
    font-weight: 700;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: var(--tk-color-text-muted);
    text-shadow: var(--tk-sk-emboss);
    padding: var(--tk-space-sm) var(--tk-space-md);
    background: var(--tk-sk-metal);
    border-bottom: 1px solid var(--tk-color-border);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: 1px solid var(--tk-color-surface-2); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:nth-child(even) { background: rgba(59, 55, 47, 0.03); }
.tk-table tbody tr:hover { background: rgba(62, 111, 166, 0.08); }
.tk-table .tk-table-actions { text-align: right; white-space: nowrap; }
.tk-action-btn {
    width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    background: none;
    border-radius: var(--tk-radius-sm);
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-action-btn:hover { background: var(--tk-sk-metal); border-color: var(--tk-color-border); color: var(--tk-color-text); box-shadow: 0 1px 2px rgba(59, 55, 47, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.7); }
.tk-action-btn-danger:hover { background: var(--tk-color-danger-soft); border-color: #DBA294; color: var(--tk-color-danger); }
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
    font-weight: 700;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-page:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-page-active {
    background: linear-gradient(180deg, #35608F 0%, #4A7AB0 100%);
    border-color: #2C5480;
    color: #FFF;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
    box-shadow: var(--tk-sk-well);
}

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(59, 55, 47, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: linear-gradient(180deg, #FBF9F4 0%, var(--tk-color-surface) 100%);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg);
    max-width: 440px;
    width: 100%;
    overflow: hidden;
}
.tk-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 360px;
    background: linear-gradient(180deg, #FBF9F4 0%, var(--tk-color-surface) 100%);
    border-left: 1px solid var(--tk-color-border);
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
/* Progress bar: rel tenggelam dengan isi glossy bergaris — pengukur analog. */
.tk-progress { height: 16px; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); box-shadow: var(--tk-sk-well); overflow: hidden; }
.tk-progress-bar {
    height: 100%;
    border-radius: var(--tk-radius-full);
    background:
        repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.14) 0 8px, transparent 8px 16px),
        linear-gradient(180deg, #6B95C4 0%, #3E6FA6 100%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.2);
    transition: width var(--tk-transition);
}
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, rgba(59, 55, 47, 0.1) 50%, var(--tk-color-surface-2) 75%);
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
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    background: var(--tk-color-surface-2);
    box-shadow: var(--tk-sk-well);
}
.tk-empty-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    background: var(--tk-sk-metal);
    color: var(--tk-color-text-muted);
    box-shadow: 0 2px 4px rgba(59, 55, 47, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.75);
}
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: 700; font-size: var(--tk-text-h4); text-shadow: var(--tk-sk-emboss); }

/* == tk: content-blocks ========================================= */
.tk-hero { position: relative; text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); }
.tk-hero > * { position: relative; max-width: 640px; margin-left: auto; margin-right: auto; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; flex-wrap: wrap; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-lg); }
/* Kartu fitur adalah pelat logam bersekrup (lihat .tk-plate di seksi flavor). */
.tk-feature {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--tk-space-sm);
    background: linear-gradient(180deg, #FBF9F4 0%, var(--tk-color-surface) 100%);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: 0 3px 8px rgba(59, 55, 47, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.75);
    padding: var(--tk-space-lg);
}
.tk-feature-icon {
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #2C5480;
    border-radius: var(--tk-radius);
    background: linear-gradient(180deg, #6B95C4 0%, #3E6FA6 100%);
    color: #FFF;
    box-shadow: 0 2px 4px rgba(59, 55, 47, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4);
}
/* CTA: panel kulit berjahit — benang putus-putus mengelilingi tepi dalam. */
.tk-cta {
    position: relative;
    background:
        radial-gradient(120% 100% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 60%),
        var(--tk-sk-leather);
    border: 1px solid #6E4B26;
    border-radius: var(--tk-radius-lg);
    box-shadow: 0 6px 16px rgba(59, 55, 47, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25);
    color: #FDF9F2;
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
    inset: 10px;
    border: 2px dashed rgba(253, 249, 242, 0.45);
    border-radius: calc(var(--tk-radius-lg) - 5px);
    pointer-events: none;
}
.tk-cta > * { position: relative; }
.tk-cta .tk-h3 { margin: 0; color: #FDF9F2; text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.35); }
.tk-cta .tk-muted { color: rgba(253, 249, 242, 0.75); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: skeuomorph flavor ====================================== */
/* Penimpa karakter skeuomorph di atas struktur kontrak: menang kaskade karena
   berada di ekor berkas. Tanda tangan kit ini adalah pelat bersekrup, lampu
   LED, kenop putar, dan panel kulit berjahit. */
/* Pelat logam bersekrup: dua pseudo-element menggambar sekrup di sudut
   kiri-atas dan kanan-atas — seperti pelat nama yang dibaut ke panel. */
.tk-plate { position: relative; }
.tk-plate::before, .tk-plate::after {
    content: '';
    position: absolute;
    top: 9px;
    width: 8px;
    height: 8px;
    border-radius: var(--tk-radius-full);
    background:
        linear-gradient(45deg, transparent 44%, rgba(59, 55, 47, 0.55) 44% 56%, transparent 56%),
        radial-gradient(circle at 35% 30%, #D6D0C0, #948C76 70%, #6E6858);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.35), 0 1px 0 rgba(255, 255, 255, 0.6);
    pointer-events: none;
}
.tk-plate::before { left: 9px; }
.tk-plate::after { right: 9px; }
/* Lampu LED status berdiri sendiri (di luar badge). */
.tk-led {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: var(--tk-radius-full);
    background: radial-gradient(circle at 35% 30%, #9FE0A2, var(--tk-color-success));
    box-shadow: 0 0 6px rgba(78, 154, 82, 0.9), inset 0 1px 1px rgba(0, 0, 0, 0.25);
}
.tk-led-amber { background: radial-gradient(circle at 35% 30%, #F5CE8C, var(--tk-color-accent)); box-shadow: 0 0 6px rgba(232, 163, 61, 0.9), inset 0 1px 1px rgba(0, 0, 0, 0.25); }
.tk-led-red { background: radial-gradient(circle at 35% 30%, #F0A08F, var(--tk-color-danger)); box-shadow: 0 0 6px rgba(192, 68, 47, 0.9), inset 0 1px 1px rgba(0, 0, 0, 0.25); }
.tk-led-off { background: radial-gradient(circle at 35% 30%, #C8C2B2, #8F8873); box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.3); }
/* Kenop putar dekoratif: piringan logam dengan penunjuk dan tanda tik. */
.tk-knob {
    position: relative;
    display: inline-block;
    width: 64px;
    height: 64px;
    border-radius: var(--tk-radius-full);
    background:
        radial-gradient(circle at 50% 35%, #FBF9F4 0%, #DFD9CA 55%, #B8B09C 100%);
    border: 1px solid var(--tk-color-border);
    box-shadow: 0 3px 7px rgba(59, 55, 47, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -2px 4px rgba(59, 55, 47, 0.2);
}
.tk-knob::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 50%;
    width: 3px;
    height: 16px;
    margin-left: -1.5px;
    border-radius: 2px;
    background: var(--tk-color-danger);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
}
.tk-knob-45 { transform: rotate(45deg); }
.tk-knob-90 { transform: rotate(90deg); }
/* Panel kulit berjahit sebagai utilitas untuk seksi apa pun. */
.tk-leather {
    background:
        radial-gradient(120% 100% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 60%),
        var(--tk-sk-leather);
    border: 1px solid #6E4B26;
    border-radius: var(--tk-radius-lg);
    box-shadow: 0 4px 10px rgba(59, 55, 47, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25);
    color: #FDF9F2;
}
/* Foto dicetak seperti dalam bingkai fisik: tepi putih + bayangan jatuh. */
.tk-card img, .tk-hero img, figure img {
    border: 4px solid #FDFCF9;
    border-radius: var(--tk-radius-sm);
    box-shadow: 0 3px 8px rgba(59, 55, 47, 0.35);
    box-sizing: border-box;
}
`;
