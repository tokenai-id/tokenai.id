/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const HYPERREALITY_STYLES = `/* Hyperreality — kit design TOKENAI.
   Visual yang sengaja dibuat melampaui kenyataan: langit mustahil dengan dua
   matahari berbeda warna, lantai grid yang melengkung ke cakrawala, objek krom
   dan blob yang bentuknya terus berubah, permukaan sekilap plastik hasil render,
   serta bayangan berwarna — di dunia ini cahaya tidak pernah netral. Warnanya
   lebih jenuh daripada yang mungkin ada di alam (violet ultra, cyan mustahil,
   pink iridesen) dan setiap permukaan punya sorot spekular seperti benda yang
   baru keluar dari mesin render. Tipografi Unbounded (heading, huruf display
   yang lebarnya tidak wajar) + Figtree (body) + DM Mono (kode).
   Kit satu-tema: terang secara bawaan — dunia hiperreal ini bermandikan cahaya,
   bukan gelap. Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal
   di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #6B2BFF;
    --tk-color-primary-hover: #8149FF;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: #00BCD8;
    --tk-color-secondary-hover: #12D4F0;
    --tk-color-secondary-contrast: #04121A;
    --tk-color-accent: #FF57C7;
    --tk-color-background: #F4F0FF;
    --tk-color-surface: #FFFFFF;
    --tk-color-surface-2: #ECE5FF;
    --tk-color-text: #190C36;
    --tk-color-text-muted: #6A5B95;
    --tk-color-border: #DACCFF;
    --tk-color-success: #00A87A;
    --tk-color-success-soft: #D4FBEE;
    --tk-color-warning: #E07B00;
    --tk-color-warning-soft: #FFEDD1;
    --tk-color-danger: #F32C63;
    --tk-color-danger-soft: #FFDFE8;
    --tk-color-info: #6B2BFF;
    --tk-color-info-soft: #E8DEFF;

    --tk-font-heading: 'Unbounded', system-ui, sans-serif;
    --tk-font-body: 'Figtree', system-ui, sans-serif;
    --tk-font-mono: 'DM Mono', 'Courier New', monospace;
    --tk-weight-heading: 700;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.12;
    --tk-leading-body: 1.65;

    --tk-text-display: 58px;
    --tk-text-h1: 42px;
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

    --tk-radius-sm: 14px;
    --tk-radius: 22px;
    --tk-radius-lg: 34px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    /* Bayangan berwarna, bukan hitam: cahaya di dunia ini datang dari sumber
       yang tidak pernah ada di alam, jadi bayangannya ikut berwarna. */
    --tk-shadow-sm: 0 2px 8px rgba(107, 43, 255, 0.14), 0 1px 2px rgba(25, 12, 54, 0.05);
    --tk-shadow: 0 12px 30px rgba(107, 43, 255, 0.18), 0 3px 8px rgba(25, 12, 54, 0.06);
    --tk-shadow-lg: 0 28px 68px rgba(107, 43, 255, 0.26), 0 8px 20px rgba(255, 87, 199, 0.16);

    --tk-transition: 260ms cubic-bezier(0.22, 1, 0.36, 1);
    --tk-container: 1200px;

    /* Token khas hyperreality (bukan kontrak): material dunia render — sorot
       spekular di puncak permukaan, krom yang memantulkan lingkungan, dan
       gradien iridesen yang warnanya berputar. */
    --tk-hr-gloss: inset 0 1px 0 rgba(255, 255, 255, 0.95), inset 0 -14px 26px rgba(107, 43, 255, 0.06);
    /* Krom disusun seperti pantulan lingkungan sungguhan: langit terang di puncak,
       pita gelap di garis cakrawala, pantulan lantai yang menyala di bawah, plus
       satu titik sorot di kiri-atas. */
    --tk-hr-chrome: radial-gradient(circle at 33% 24%, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.35) 13%, rgba(255, 255, 255, 0) 31%), radial-gradient(140% 70% at 50% 118%, rgba(255, 87, 199, 0.85) 0%, rgba(255, 87, 199, 0) 58%), linear-gradient(178deg, #F3ECFF 0%, #B9A0FF 20%, #6B2BFF 40%, #24095E 54%, #7C4CFF 66%, #D9C9FF 84%, #FFFFFF 100%);
    --tk-hr-iris: conic-gradient(from 140deg, #FF57C7 0%, #6B2BFF 22%, #00BCD8 44%, #7CFFCB 62%, #FFD166 80%, #FF57C7 100%);
    --tk-hr-sky: linear-gradient(180deg, #FFE3F6 0%, #EDE2FF 42%, #DDF3FF 100%);
    --tk-hr-glow: 0 0 34px rgba(255, 87, 199, 0.45);
}

/* == tk: base =================================================== */
body {
    margin: 0;
    /* Lingkungan mustahil: dua matahari berbeda warna di sudut berlawanan dan
       pendar cyan yang naik dari bawah cakrawala. Tetap di tempat saat digulir
       — kita berpindah di dalam dunianya, bukan menggeser gambarnya. */
    background:
        radial-gradient(112% 74% at 50% 118%, rgba(0, 188, 216, 0.26) 0%, transparent 62%),
        radial-gradient(84% 58% at 10% -12%, rgba(255, 87, 199, 0.30) 0%, transparent 64%),
        radial-gradient(76% 56% at 94% 2%, rgba(107, 43, 255, 0.24) 0%, transparent 62%),
        var(--tk-color-background);
    background-attachment: fixed;
    color: var(--tk-color-text);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body);
    font-weight: var(--tk-weight-body);
    line-height: var(--tk-leading-body);
    -webkit-font-smoothing: antialiased;
}
/* Lantai grid yang melengkung ke cakrawala — garis vertikalnya menyempit ke
   satu titik hilang yang jaraknya tidak masuk akal. */
body::before {
    content: '';
    position: fixed;
    left: -30%;
    right: -30%;
    bottom: -34%;
    height: 66%;
    background:
        linear-gradient(rgba(107, 43, 255, 0.16) 1px, transparent 1px),
        linear-gradient(90deg, rgba(107, 43, 255, 0.16) 1px, transparent 1px);
    background-size: 62px 62px;
    transform: perspective(340px) rotateX(66deg);
    transform-origin: 50% 0;
    -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 34%, transparent 92%);
    mask-image: linear-gradient(180deg, transparent 0%, #000 34%, transparent 92%);
    pointer-events: none;
    z-index: -1;
}
.tk-container {
    max-width: var(--tk-container);
    margin: 0 auto;
    padding: 0 var(--tk-space-lg);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }
::selection { background: rgba(255, 87, 199, 0.35); }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    letter-spacing: -0.03em;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); line-height: 1.02; letter-spacing: -0.045em; }
.tk-h1 { font-size: var(--tk-text-h1); }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-title); font-weight: 600; letter-spacing: -0.02em; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-family: var(--tk-font-mono); font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); letter-spacing: 0.02em; }
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link { color: var(--tk-color-primary); font-weight: 600; text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; text-decoration-color: rgba(255, 87, 199, 0.6); transition: text-decoration-color var(--tk-transition), color var(--tk-transition); }
.tk-link:hover { color: var(--tk-color-accent); text-decoration-color: var(--tk-color-accent); }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.85em; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); padding: 2px 8px; border-radius: var(--tk-radius-sm); }

/* == tk: button ================================================= */
/* Tombol adalah objek padat hasil render: gradien dua warna, sorot spekular di
   puncaknya, bayangan berwarna, dan kilau yang menyapu melintas saat disentuh. */
.tk-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-body);
    font-size: 15px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.01em;
    padding: 14px 26px;
    border: 1px solid transparent;
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    overflow: hidden;
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), background var(--tk-transition), border-color var(--tk-transition), color var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
/* Kilau spekular yang menyapu dari kiri ke kanan saat kursor mendekat. */
.tk-btn::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: -60%;
    width: 45%;
    background: linear-gradient(100deg, transparent 0%, rgba(255, 255, 255, 0.55) 50%, transparent 100%);
    transform: skewX(-18deg);
    transition: left 520ms cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
}
.tk-btn:hover:not(:disabled)::after { left: 120%; }
.tk-btn:not(:disabled):active { transform: translateY(1px) scale(0.985); }
.tk-btn:disabled { opacity: 0.45; cursor: not-allowed; }
.tk-btn-primary {
    background: linear-gradient(150deg, #9A63FF 0%, #6B2BFF 52%, #4A12D6 100%);
    color: var(--tk-color-primary-contrast);
    box-shadow: var(--tk-shadow), var(--tk-hr-gloss);
}
.tk-btn-primary:hover:not(:disabled) { transform: translateY(-3px); box-shadow: var(--tk-shadow-lg), var(--tk-hr-gloss); }
.tk-btn-secondary {
    background: linear-gradient(150deg, #4BE3F7 0%, #00BCD8 52%, #0092AB 100%);
    color: var(--tk-color-secondary-contrast);
    box-shadow: var(--tk-shadow), var(--tk-hr-gloss);
}
.tk-btn-secondary:hover:not(:disabled) { transform: translateY(-3px); box-shadow: var(--tk-shadow-lg), var(--tk-hr-gloss); }
.tk-btn-danger { background: linear-gradient(150deg, #FF7093 0%, #F32C63 52%, #C80B41 100%); color: #FFFFFF; box-shadow: 0 12px 30px rgba(243, 44, 99, 0.28), var(--tk-hr-gloss); }
.tk-btn-danger:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 22px 52px rgba(243, 44, 99, 0.34), var(--tk-hr-gloss); }
.tk-btn-outline {
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(10px);
    border-color: var(--tk-color-border);
    color: var(--tk-color-text);
    box-shadow: var(--tk-shadow-sm), var(--tk-hr-gloss);
}
.tk-btn-outline:hover:not(:disabled) { transform: translateY(-3px); border-color: var(--tk-color-primary); box-shadow: var(--tk-shadow), var(--tk-hr-gloss); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: rgba(107, 43, 255, 0.09); }
.tk-btn-text { background: none; color: var(--tk-color-primary); padding-left: 8px; padding-right: 8px; }
.tk-btn-text:hover:not(:disabled) { color: var(--tk-color-accent); text-decoration: underline; text-underline-offset: 3px; }
.tk-btn-ghost::after, .tk-btn-text::after { display: none; }
.tk-btn-sm { font-size: 13px; padding: 10px 18px; }
.tk-btn-lg { font-size: 17px; padding: 18px 34px; }
.tk-btn-icon { padding: 13px; }
.tk-btn-loading { position: relative; color: transparent !important; pointer-events: none; }
.tk-btn-loading::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border: 2px solid rgba(255, 255, 255, 0.85);
    border-top-color: transparent;
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.8s linear infinite;
}
.tk-btn-outline.tk-btn-loading::before, .tk-btn-ghost.tk-btn-loading::before, .tk-btn-text.tk-btn-loading::before {
    border-color: var(--tk-color-primary);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
.tk-field { display: flex; flex-direction: column; gap: var(--tk-space-xs); margin-bottom: var(--tk-space-md); }
.tk-label { font-size: 13px; font-weight: 700; color: var(--tk-color-text); }
.tk-help { font-size: 13px; color: var(--tk-color-text-muted); }
/* Kontrol adalah cekungan di permukaan yang mengkilap: sedikit tenggelam, dan
   tepinya memancarkan cahaya berwarna saat fokus. */
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: rgba(255, 255, 255, 0.86);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 13px 16px;
    box-shadow: inset 0 2px 5px rgba(107, 43, 255, 0.08);
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition), background var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); opacity: 0.75; }
.tk-input:focus, .tk-textarea:focus {
    background: #FFFFFF;
    border-color: var(--tk-color-primary);
    box-shadow: inset 0 2px 5px rgba(107, 43, 255, 0.06), 0 0 0 4px rgba(107, 43, 255, 0.18), var(--tk-hr-glow);
}
.tk-textarea { min-height: 100px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: inset 0 2px 5px rgba(243, 44, 99, 0.1), 0 0 0 4px rgba(243, 44, 99, 0.18);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: inset 0 2px 5px rgba(0, 168, 122, 0.1), 0 0 0 4px rgba(0, 168, 122, 0.18); }
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
    box-shadow: 0 0 0 4px rgba(107, 43, 255, 0.18);
}
/* Menu melayang di atas dunia: permukaan sekilap dengan bayangan berwarna. */
.tk-select-menu {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(18px);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg), var(--tk-hr-gloss);
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
    padding: 10px 13px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    text-align: left;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-option:hover { background: rgba(107, 43, 255, 0.09); }
.tk-option-selected { background: linear-gradient(120deg, rgba(107, 43, 255, 0.16) 0%, rgba(255, 87, 199, 0.16) 100%); font-weight: 700; }
.tk-option-check { margin-left: auto; color: var(--tk-color-primary); display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 10px 13px;
    margin: 2px 2px var(--tk-space-sm);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    background: var(--tk-color-surface-2);
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
    width: 21px;
    height: 21px;
    flex: none;
    margin: 0;
    position: relative;
    background: #FFFFFF;
    border: 1px solid var(--tk-color-border);
    box-shadow: inset 0 2px 4px rgba(107, 43, 255, 0.1);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-checkbox { border-radius: 8px; }
.tk-checkbox:checked {
    background: linear-gradient(150deg, #9A63FF 0%, #6B2BFF 100%);
    border-color: #6B2BFF;
    box-shadow: 0 4px 12px rgba(107, 43, 255, 0.35), var(--tk-hr-gloss);
}
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 7px;
    top: 3px;
    width: 4px;
    height: 10px;
    border-right: 2.5px solid #FFFFFF;
    border-bottom: 2.5px solid #FFFFFF;
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked {
    background: linear-gradient(150deg, #9A63FF 0%, #6B2BFF 100%);
    border-color: #6B2BFF;
    box-shadow: 0 4px 12px rgba(107, 43, 255, 0.35), inset 0 0 0 4px #FFFFFF;
}
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(107, 43, 255, 0.25);
}
.tk-toggle { position: relative; width: 50px; height: 27px; flex: none; margin: 0; appearance: none; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); box-shadow: inset 0 2px 5px rgba(107, 43, 255, 0.12); cursor: pointer; transition: background var(--tk-transition), border-color var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 21px; height: 21px; background: var(--tk-hr-chrome); border-radius: var(--tk-radius-full); box-shadow: 0 2px 6px rgba(25, 12, 54, 0.25); transition: transform var(--tk-transition); }
.tk-toggle:checked { background: linear-gradient(120deg, #6B2BFF 0%, #FF57C7 100%); border-color: transparent; }
.tk-toggle:checked::after { transform: translateX(23px); }

/* == tk: search-filter ========================================== */
.tk-search { position: relative; display: flex; align-items: center; min-width: 220px; }
.tk-search .tk-input { width: 100%; padding-left: 44px; padding-right: 66px; border-radius: var(--tk-radius-full); }
.tk-search .tk-input::-webkit-search-cancel-button { -webkit-appearance: none; }
.tk-search-icon { position: absolute; left: 16px; display: inline-flex; color: var(--tk-color-primary); pointer-events: none; }
.tk-search-kbd {
    position: absolute;
    right: 12px;
    font-family: var(--tk-font-mono);
    font-size: 11px;
    color: var(--tk-color-text-muted);
    background: var(--tk-color-surface-2);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 3px 8px;
    pointer-events: none;
}
.tk-filter-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-md);
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(14px);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-sm), var(--tk-hr-gloss);
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
    background: linear-gradient(120deg, #6B2BFF 0%, #FF57C7 100%);
    color: #FFFFFF;
    font-size: 11px;
    font-weight: 700;
}
.tk-filter-active { display: flex; flex-wrap: wrap; align-items: center; gap: var(--tk-space-sm); margin-top: var(--tk-space-sm); }

/* == tk: dropdown =============================================== */
.tk-dropdown { position: relative; display: inline-block; }
.tk-dropdown-menu {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(18px);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg), var(--tk-hr-gloss);
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
.tk-dropdown-label { padding: 6px 13px; font-family: var(--tk-font-mono); font-size: 11px; letter-spacing: 0.04em; text-transform: uppercase; color: var(--tk-color-text-muted); }
.tk-dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 10px 13px;
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
.tk-dropdown-item:hover { background: rgba(107, 43, 255, 0.09); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-primary); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: rgba(243, 44, 99, 0.1); }
.tk-dropdown-divider { height: 1px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) var(--tk-space-sm); }

/* == tk: card =================================================== */
/* Kartu adalah benda padat hasil render: permukaan putih sekilap dengan sorot
   spekular di puncaknya dan bayangan violet di bawahnya. Saat disentuh ia
   menoleh sedikit dalam perspektif — objek di dunia ini punya sisi belakang. */
.tk-card {
    position: relative;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(12px);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow), var(--tk-hr-gloss);
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), border-color var(--tk-transition);
}
.tk-card:hover { transform: translateY(-5px) rotateX(2deg); box-shadow: var(--tk-shadow-lg), var(--tk-hr-gloss); border-color: rgba(107, 43, 255, 0.42); }
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-md); flex-wrap: wrap; }
.tk-card-stat .tk-stat-value { font-family: var(--tk-font-heading); font-size: var(--tk-text-h2); font-weight: 700; letter-spacing: -0.04em; background: linear-gradient(120deg, #6B2BFF 0%, #FF57C7 60%, #00BCD8 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 700; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 700; }

/* == tk: navigation ============================================= */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: rgba(255, 255, 255, 0.78);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--tk-color-border);
    box-shadow: 0 10px 30px rgba(107, 43, 255, 0.1);
    position: relative;
    z-index: 5;
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 700; font-size: 19px; letter-spacing: -0.04em; margin-right: auto; color: var(--tk-color-text); }
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: 14px; font-weight: 600; padding: 8px 15px; border-radius: var(--tk-radius-full); transition: background var(--tk-transition), color var(--tk-transition); }
.tk-navbar-link:hover { color: var(--tk-color-text); background: rgba(107, 43, 255, 0.09); }
.tk-navbar-link-active { color: #FFFFFF; background: linear-gradient(120deg, #6B2BFF 0%, #FF57C7 100%); box-shadow: 0 6px 18px rgba(107, 43, 255, 0.3); }
.tk-navbar-dark { background: rgba(25, 12, 54, 0.88); border-bottom-color: rgba(218, 204, 255, 0.25); }
.tk-navbar-dark .tk-navbar-brand { color: #FFFFFF; }
.tk-navbar-dark .tk-navbar-link { color: rgba(255, 255, 255, 0.66); }
.tk-navbar-dark .tk-navbar-link:hover { color: #FFFFFF; background: rgba(255, 255, 255, 0.12); }
.tk-navbar-dark .tk-navbar-link-active { color: #FFFFFF; }
.tk-sidebar {
    width: 252px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(16px);
    border-right: 1px solid var(--tk-color-border);
    box-shadow: 10px 0 30px rgba(107, 43, 255, 0.08);
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
    padding: 10px var(--tk-space-md);
    border-radius: var(--tk-radius-full);
    color: var(--tk-color-text-muted);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-sidebar-item:hover { background: rgba(107, 43, 255, 0.09); color: var(--tk-color-text); }
.tk-sidebar-item-active { background: linear-gradient(120deg, #6B2BFF 0%, #FF57C7 100%); color: #FFFFFF; box-shadow: 0 8px 20px rgba(107, 43, 255, 0.28), var(--tk-hr-gloss); }
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 70px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: 10px; }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 11px;
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
}
.tk-breadcrumb a { color: var(--tk-color-text-muted); text-decoration: none; font-weight: 600; }
.tk-breadcrumb a:hover { color: var(--tk-color-primary); }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-border); }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 700; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--tk-color-border);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: 4px; border: 1px solid var(--tk-color-border); background: rgba(255, 255, 255, 0.7); border-radius: var(--tk-radius-full); padding: 5px; box-shadow: inset 0 2px 6px rgba(107, 43, 255, 0.08); width: fit-content; max-width: 100%; overflow-x: auto; }
.tk-tab {
    padding: 9px 20px;
    font-size: 14px;
    font-weight: 700;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-radius: var(--tk-radius-full);
    transition: color var(--tk-transition), background var(--tk-transition), box-shadow var(--tk-transition);
    white-space: nowrap;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: #FFFFFF; background: linear-gradient(120deg, #6B2BFF 0%, #FF57C7 100%); box-shadow: 0 6px 16px rgba(107, 43, 255, 0.28), var(--tk-hr-gloss); }
.tk-segmented { display: inline-flex; border: 1px solid var(--tk-color-border); background: rgba(255, 255, 255, 0.7); border-radius: var(--tk-radius-full); padding: 5px; gap: 2px; box-shadow: inset 0 2px 6px rgba(107, 43, 255, 0.08); }
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
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: #FFFFFF; color: var(--tk-color-primary); box-shadow: var(--tk-shadow-sm), var(--tk-hr-gloss); }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 12px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: var(--tk-radius-full);
    border: 1px solid var(--tk-color-border);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text);
    box-shadow: var(--tk-hr-gloss);
}
.tk-badge-success { color: #00674B; background: var(--tk-color-success-soft); border-color: rgba(0, 168, 122, 0.4); }
.tk-badge-warning { color: #8A4B00; background: var(--tk-color-warning-soft); border-color: rgba(224, 123, 0, 0.4); }
.tk-badge-danger { color: #A50637; background: var(--tk-color-danger-soft); border-color: rgba(243, 44, 99, 0.4); }
.tk-badge-info { color: #3B0DAF; background: var(--tk-color-info-soft); border-color: rgba(107, 43, 255, 0.4); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 12px;
    font-weight: 600;
    padding: 5px 12px;
    border-radius: var(--tk-radius-full);
    border: 1px solid var(--tk-color-border);
    background: rgba(255, 255, 255, 0.86);
    color: var(--tk-color-text);
    box-shadow: var(--tk-shadow-sm);
}
.tk-chip-remove { border: none; background: none; cursor: pointer; color: var(--tk-color-text-muted); font-size: 14px; line-height: 1; padding: 0; }
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
    box-shadow: var(--tk-shadow-sm), var(--tk-hr-gloss);
}
.tk-alert-title { font-weight: 700; display: block; margin-bottom: 2px; }
.tk-alert-success { background: var(--tk-color-success-soft); border-color: rgba(0, 168, 122, 0.4); color: #00553E; }
.tk-alert-warning { background: var(--tk-color-warning-soft); border-color: rgba(224, 123, 0, 0.4); color: #7A4200; }
.tk-alert-danger { background: var(--tk-color-danger-soft); border-color: rgba(243, 44, 99, 0.4); color: #93052F; }
.tk-alert-info { background: var(--tk-color-info-soft); border-color: rgba(107, 43, 255, 0.4); color: #33099C; }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); }
.tk-table th {
    text-align: left;
    font-family: var(--tk-font-mono);
    font-weight: 500;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--tk-color-text-muted);
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-bottom: 1px solid var(--tk-color-border);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: 1px solid rgba(218, 204, 255, 0.6); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: rgba(107, 43, 255, 0.06); }
.tk-table .tk-table-actions { text-align: right; white-space: nowrap; }
.tk-action-btn {
    width: 34px;
    height: 34px;
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
.tk-action-btn:hover { background: rgba(107, 43, 255, 0.12); color: var(--tk-color-primary); }
.tk-action-btn-danger:hover { background: rgba(243, 44, 99, 0.12); color: var(--tk-color-danger); }
.tk-pagination { display: flex; gap: var(--tk-space-xs); align-items: center; }
.tk-page {
    min-width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-full);
    border: 1px solid transparent;
    background: none;
    font-family: var(--tk-font-body);
    font-size: 13px;
    font-weight: 700;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-page:hover { background: rgba(107, 43, 255, 0.1); color: var(--tk-color-text); }
.tk-page-active { background: linear-gradient(120deg, #6B2BFF 0%, #FF57C7 100%); color: #FFFFFF; box-shadow: 0 6px 16px rgba(107, 43, 255, 0.3); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(25, 12, 54, 0.42);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: rgba(255, 255, 255, 0.97);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg), var(--tk-hr-gloss);
    max-width: 460px;
    width: 100%;
}
.tk-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 372px;
    background: rgba(255, 255, 255, 0.97);
    backdrop-filter: blur(20px);
    border-left: 1px solid var(--tk-color-border);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 28px;
    height: 28px;
    border: 3px solid var(--tk-color-surface-2);
    border-top-color: var(--tk-color-primary);
    border-right-color: var(--tk-color-accent);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.8s linear infinite;
}
.tk-progress { height: 14px; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); box-shadow: inset 0 2px 5px rgba(107, 43, 255, 0.12); overflow: hidden; }
.tk-progress-bar {
    height: 100%;
    border-radius: var(--tk-radius-full);
    background: linear-gradient(90deg, #6B2BFF 0%, #FF57C7 55%, #00BCD8 100%);
    box-shadow: var(--tk-hr-gloss);
    transition: width var(--tk-transition);
}
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, rgba(255, 87, 199, 0.22) 50%, var(--tk-color-surface-2) 75%);
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
    background: rgba(255, 255, 255, 0.6);
}
.tk-empty-icon {
    width: 68px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-full);
    background: var(--tk-hr-chrome);
    color: #FFFFFF;
    box-shadow: var(--tk-shadow), var(--tk-hr-gloss);
}
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: 700; font-size: var(--tk-text-h4); letter-spacing: -0.03em; }

/* == tk: content-blocks ========================================= */
/* Hero adalah cakrawala mustahil: langit bergradasi tiga warna, lantai grid
   yang melengkung menjauh, dan matahari kedua yang menggantung di sisi kanan. */
.tk-hero { position: relative; text-align: center; padding: var(--tk-space-section) var(--tk-space-lg) 128px; overflow: hidden; border-radius: var(--tk-radius-lg); }
.tk-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--tk-hr-sky);
    -webkit-mask-image: linear-gradient(180deg, #000 0%, #000 62%, transparent 100%);
    mask-image: linear-gradient(180deg, #000 0%, #000 62%, transparent 100%);
    pointer-events: none;
}
.tk-hero::after {
    content: '';
    position: absolute;
    left: -24%;
    right: -24%;
    bottom: -40%;
    height: 72%;
    background:
        linear-gradient(rgba(107, 43, 255, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(107, 43, 255, 0.2) 1px, transparent 1px);
    background-size: 58px 58px;
    transform: perspective(400px) rotateX(64deg);
    transform-origin: 50% 0;
    -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 30%, #000 76%, transparent 100%);
    mask-image: linear-gradient(180deg, transparent 0%, #000 30%, #000 76%, transparent 100%);
    pointer-events: none;
}
.tk-hero > * { position: relative; z-index: 1; max-width: 680px; margin-left: auto; margin-right: auto; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; flex-wrap: wrap; }
/* Grid fitur: tiap kartu menoleh dalam perspektif saat disentuh, dan ikonnya
   melayang di depan permukaan kartu. */
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-lg); perspective: 1400px; }
.tk-feature {
    display: flex;
    flex-direction: column;
    gap: var(--tk-space-sm);
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(12px);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow), var(--tk-hr-gloss);
    padding: var(--tk-space-lg);
    transform-style: preserve-3d;
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), border-color var(--tk-transition);
}
.tk-feature:hover { transform: rotateX(6deg) rotateY(-6deg) translateY(-6px); box-shadow: var(--tk-shadow-lg), var(--tk-hr-gloss); border-color: rgba(255, 87, 199, 0.5); }
.tk-feature-icon {
    width: 58px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius);
    background: linear-gradient(150deg, #9A63FF 0%, #6B2BFF 48%, #FF57C7 100%);
    color: #FFFFFF;
    box-shadow: 0 12px 26px rgba(107, 43, 255, 0.32), var(--tk-hr-gloss);
    transform: translateZ(34px);
}
.tk-cta {
    position: relative;
    background:
        radial-gradient(88% 140% at 88% 8%, rgba(255, 87, 199, 0.55) 0%, transparent 58%),
        radial-gradient(80% 130% at 8% 92%, rgba(0, 188, 216, 0.45) 0%, transparent 58%),
        linear-gradient(120deg, #4A12D6 0%, #6B2BFF 100%);
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg), var(--tk-hr-gloss);
    color: #FFFFFF;
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
    overflow: hidden;
}
.tk-cta > * { position: relative; }
.tk-cta .tk-h3 { margin: 0; color: #FFFFFF; }
.tk-cta .tk-muted { color: rgba(255, 255, 255, 0.82); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: hyperreality flavor ==================================== */
/* Penimpa karakter hyperreality di atas struktur kontrak: menang kaskade karena
   berada di ekor berkas. Tujuh perkakas dunia mustahil — bola krom, blob yang
   bentuknya terus berubah, permukaan iridesen, gerak melengkung, benda
   melayang, pantulan lantai, dan panggung bercakrawala. Pakai hemat: satu
   halaman cukup dua sampai tiga di antaranya, selebihnya biarkan permukaan
   kit yang bekerja. */
@keyframes tk-morph {
    0%, 100% { border-radius: 70% 30% 42% 58% / 60% 40% 60% 40%; }
    33% { border-radius: 30% 70% 68% 32% / 36% 66% 34% 64%; }
    66% { border-radius: 56% 44% 28% 72% / 68% 32% 68% 32%; }
}
@keyframes tk-warp {
    0%, 100% { transform: skewX(0deg) scaleY(1); }
    25% { transform: skewX(1.8deg) scaleY(1.025); }
    75% { transform: skewX(-1.8deg) scaleY(0.982); }
}
@keyframes tk-drift {
    from { transform: translateY(-9px); }
    to { transform: translateY(11px); }
}
@keyframes tk-spin-slow { to { transform: rotate(360deg); } }
/* Bola krom: memantulkan lingkungan yang tidak pernah ada, lengkap dengan
   sorot spekular di kiri-atas. Varian mengubah arah putaran pantulannya. */
.tk-chrome {
    display: inline-block;
    width: 88px;
    height: 88px;
    border-radius: var(--tk-radius-full);
    background: var(--tk-hr-chrome);
    box-shadow: var(--tk-shadow-lg), inset 0 -10px 22px rgba(25, 12, 54, 0.35);
    animation: tk-drift 6s ease-in-out infinite alternate;
}
.tk-chrome-pink { background: radial-gradient(circle at 33% 24%, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.35) 13%, rgba(255, 255, 255, 0) 31%), radial-gradient(140% 70% at 50% 118%, rgba(255, 209, 102, 0.8) 0%, rgba(255, 209, 102, 0) 58%), linear-gradient(178deg, #FFF0FA 0%, #FFA8DF 20%, #FF57C7 40%, #5C0A3C 54%, #FF7AD3 66%, #FFD6EF 84%, #FFFFFF 100%); animation-delay: -2s; }
.tk-chrome-cyan { background: radial-gradient(circle at 33% 24%, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.35) 13%, rgba(255, 255, 255, 0) 31%), radial-gradient(140% 70% at 50% 118%, rgba(124, 255, 203, 0.8) 0%, rgba(124, 255, 203, 0) 58%), linear-gradient(178deg, #EEFEFF 0%, #8AE9F6 20%, #00BCD8 40%, #05323A 54%, #35D8EE 66%, #C7F5FB 84%, #FFFFFF 100%); animation-delay: -4s; }
/* Blob: bentuk cair yang tidak pernah berhenti berubah — tidak ada benda
   sekaku ini di dunia nyata, dan tidak ada yang seluwes ini juga. */
.tk-blob {
    display: inline-block;
    width: 104px;
    height: 104px;
    background: var(--tk-hr-iris);
    box-shadow: var(--tk-shadow-lg), var(--tk-hr-gloss);
    animation: tk-morph 9s ease-in-out infinite, tk-drift 7s ease-in-out infinite alternate;
}
/* Permukaan iridesen: gradien conic yang warnanya berputar pelan. */
.tk-iridescent {
    background: var(--tk-hr-iris);
    background-size: 180% 180%;
    color: #190C36;
    border-color: transparent;
    box-shadow: var(--tk-shadow), var(--tk-hr-gloss);
}
/* Gerak melengkung: elemen apa pun dibuat bergoyang seperti dilihat lewat
   lensa yang tidak stabil. */
.tk-warp { animation: tk-warp 5.5s ease-in-out infinite; }
.tk-float { animation: tk-drift 5s ease-in-out infinite alternate; }
/* Lantai pemantul: bayangan berwarna berbentuk elips di bawah objek, seperti
   benda yang berdiri di atas permukaan basah dalam sebuah render. */
.tk-mirror { position: relative; }
.tk-mirror::after {
    content: '';
    position: absolute;
    left: 8%;
    right: 8%;
    bottom: -22px;
    height: 26px;
    background: radial-gradient(50% 50% at 50% 50%, rgba(107, 43, 255, 0.42) 0%, transparent 72%);
    filter: blur(6px);
    pointer-events: none;
}
/* Panggung bercakrawala: kotak dengan langit mustahil dan lantai grid melengkung
   di dalamnya — dipakai untuk memajang objek. */
.tk-horizon {
    position: relative;
    overflow: hidden;
    border-radius: var(--tk-radius-lg);
    border: 1px solid var(--tk-color-border);
    background: var(--tk-hr-sky);
    box-shadow: var(--tk-shadow), var(--tk-hr-gloss);
}
.tk-horizon::after {
    content: '';
    position: absolute;
    left: -25%;
    right: -25%;
    bottom: -42%;
    height: 76%;
    background:
        linear-gradient(rgba(107, 43, 255, 0.22) 1px, transparent 1px),
        linear-gradient(90deg, rgba(107, 43, 255, 0.22) 1px, transparent 1px);
    background-size: 46px 46px;
    transform: perspective(320px) rotateX(66deg);
    transform-origin: 50% 0;
    -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 32%, transparent 96%);
    mask-image: linear-gradient(180deg, transparent 0%, #000 32%, transparent 96%);
    pointer-events: none;
}
.tk-horizon > * { position: relative; z-index: 1; }
/* Foto adalah jendela ke dunia lain: bingkai membulat dengan tepi bercahaya. */
.tk-card img, .tk-hero img, figure img {
    border: 1px solid rgba(255, 87, 199, 0.4);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow), 0 0 30px rgba(255, 87, 199, 0.18);
    box-sizing: border-box;
}
/* Gerak dimatikan untuk pengguna yang memintanya: dunia boleh mustahil, tapi
   tidak boleh memaksa. */
@media (prefers-reduced-motion: reduce) {
    .tk-chrome, .tk-blob, .tk-warp, .tk-float { animation: none; }
}
`;
