/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const IMMERSIVE_STYLES = `/* Immersive — kit design TOKENAI.
   Immersive Web: website sebagai pengalaman, bukan sekadar halaman. Setiap
   seksi adalah adegan film full-screen dengan letterbox bar, konten muncul
   dari kegelapan lewat animasi reveal yang digerakkan scroll, transisi
   panjang dan dramatis (cubic-bezier sinematik), grain film di seluruh
   layar, vignette di tepi, dan elemen suara (equalizer hidup, kontrol
   pemutar). Color grading teal-orange khas film di atas hitam pekat;
   heading Syne yang lebar dan artistik, body Manrope, kode JetBrains Mono.
   Kit satu-tema: gelap secara bawaan tanpa mode terang — pengalaman
   ditonton di ruang gelap. Kontrak: docs/kontrak-kit-design.md. Semua nilai
   design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #FF8A3D;
    --tk-color-primary-hover: #FFA05C;
    --tk-color-primary-contrast: #140A05;
    --tk-color-secondary: #38C8B4;
    --tk-color-secondary-hover: #5CD8C7;
    --tk-color-secondary-contrast: #04201C;
    --tk-color-accent: #FFD9A8;
    --tk-color-background: #0A0A0F;
    --tk-color-surface: #14141C;
    --tk-color-surface-2: #1E1E2A;
    --tk-color-text: #F4F1EA;
    --tk-color-text-muted: #9A96A3;
    --tk-color-border: #2A2A38;
    --tk-color-success: #4ADE95;
    --tk-color-success-soft: #10342A;
    --tk-color-warning: #FFC24B;
    --tk-color-warning-soft: #382C12;
    --tk-color-danger: #FF5D5D;
    --tk-color-danger-soft: #3A1717;
    --tk-color-info: #38C8B4;
    --tk-color-info-soft: #0E2E2A;

    --tk-font-heading: 'Syne', system-ui, sans-serif;
    --tk-font-body: 'Manrope', system-ui, sans-serif;
    --tk-font-mono: 'JetBrains Mono', 'Courier New', monospace;
    --tk-weight-heading: 700;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.08;
    --tk-leading-body: 1.65;

    --tk-text-display: 64px;
    --tk-text-h1: 42px;
    --tk-text-h2: 31px;
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
    --tk-space-section: 112px;

    --tk-radius-sm: 6px;
    --tk-radius: 12px;
    --tk-radius-lg: 20px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    --tk-shadow-sm: 0 4px 14px rgba(0, 0, 0, 0.5);
    --tk-shadow: 0 10px 36px rgba(0, 0, 0, 0.55);
    --tk-shadow-lg: 0 28px 80px rgba(0, 0, 0, 0.65);

    /* Transisi sinematik: lambat masuk, meluncur panjang — seperti kamera dolly. */
    --tk-transition: 450ms cubic-bezier(0.16, 1, 0.3, 1);
    --tk-container: 1200px;

    /* Token khas immersive (bukan kontrak): cahaya proyektor, grade duotone,
       dan pendar oranye untuk elemen yang "disorot kamera". */
    --tk-im-glow: 0 0 32px rgba(255, 138, 61, 0.35);
    --tk-im-glow-teal: 0 0 32px rgba(56, 200, 180, 0.3);
    --tk-im-grade: linear-gradient(140deg, rgba(255, 138, 61, 0.14) 0%, transparent 40%, transparent 60%, rgba(56, 200, 180, 0.12) 100%);
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
/* Grain film di seluruh layar — tekstur proyeksi yang membuat halaman terasa
   seperti gambar bergerak, bukan dokumen. */
body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
    opacity: 0.05;
    pointer-events: none;
    z-index: 2147483646;
}
/* Vignette bioskop: tepi layar menggelap, mata tertarik ke tengah. */
body::after {
    content: '';
    position: fixed;
    inset: 0;
    background: radial-gradient(120% 90% at 50% 45%, transparent 55%, rgba(0, 0, 0, 0.5) 100%);
    pointer-events: none;
    z-index: -1;
}
.tk-container {
    max-width: var(--tk-container);
    margin: 0 auto;
    padding: 0 var(--tk-space-lg);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }
::selection { background: rgba(255, 138, 61, 0.45); }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    letter-spacing: -0.015em;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); font-weight: 800; line-height: 1.02; letter-spacing: -0.02em; }
.tk-h1 { font-size: var(--tk-text-h1); font-weight: 800; }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-title); font-weight: 700; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-family: var(--tk-font-mono); font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); letter-spacing: 0.08em; text-transform: uppercase; }
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link { color: var(--tk-color-primary); font-weight: 700; text-decoration: none; background-image: linear-gradient(90deg, var(--tk-color-primary), var(--tk-color-primary)); background-repeat: no-repeat; background-size: 100% 1px; background-position: 0 100%; transition: color var(--tk-transition); }
.tk-link:hover { color: var(--tk-color-primary-hover); }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.85em; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); padding: 2px 8px; border-radius: var(--tk-radius-sm); }

/* == tk: button ================================================= */
/* Tombol adalah undangan masuk ke adegan berikutnya: kapsul dengan huruf
   heading, meluncur naik pelan saat disorot, yang utama menyala oranye
   seperti lampu proyektor. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-heading);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    padding: 14px 26px;
    border: 1px solid transparent;
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), background var(--tk-transition), border-color var(--tk-transition), color var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:not(:disabled):active { transform: scale(0.97); }
.tk-btn:disabled { opacity: 0.45; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); box-shadow: var(--tk-im-glow); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); transform: translateY(-3px); box-shadow: var(--tk-shadow), var(--tk-im-glow); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); box-shadow: var(--tk-im-glow-teal); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); transform: translateY(-3px); box-shadow: var(--tk-shadow), var(--tk-im-glow-teal); }
.tk-btn-danger { background: var(--tk-color-danger); color: #2B0909; }
.tk-btn-danger:hover:not(:disabled) { transform: translateY(-3px); }
.tk-btn-outline { background: transparent; border-color: rgba(244, 241, 234, 0.35); color: var(--tk-color-text); }
.tk-btn-outline:hover:not(:disabled) { border-color: var(--tk-color-primary); color: var(--tk-color-primary); transform: translateY(-3px); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: rgba(244, 241, 234, 0.08); }
.tk-btn-text { background: none; color: var(--tk-color-primary); padding-left: 6px; padding-right: 6px; }
.tk-btn-text:hover:not(:disabled) { color: var(--tk-color-primary-hover); }
.tk-btn-sm { font-size: 13px; padding: 10px 18px; }
.tk-btn-lg { font-size: 16px; padding: 18px 36px; }
.tk-btn-icon { padding: 13px; }
.tk-btn-loading { position: relative; color: transparent !important; pointer-events: none; }
.tk-btn-loading::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    border: 2px solid rgba(20, 10, 5, 0.9);
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
.tk-label { font-size: 13px; font-weight: 700; color: var(--tk-color-text); }
.tk-help { font-size: 13px; color: var(--tk-color-text-muted); }
/* Input adalah bidang gelap di antara adegan; saat fokus, tepinya disorot
   lampu oranye seperti subjek yang masuk frame. */
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: rgba(20, 20, 28, 0.85);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 12px 14px;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); opacity: 0.7; }
.tk-input:focus, .tk-textarea:focus {
    border-color: var(--tk-color-primary);
    box-shadow: 0 0 0 3px rgba(255, 138, 61, 0.2), var(--tk-im-glow);
}
.tk-textarea { min-height: 96px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: 0 0 0 3px rgba(255, 93, 93, 0.18);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: 0 0 0 3px rgba(74, 222, 149, 0.18); }
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
    box-shadow: 0 0 0 3px rgba(255, 138, 61, 0.2);
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
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
    transition: background var(--tk-transition);
}
.tk-option:hover { background: rgba(244, 241, 234, 0.07); }
.tk-option-selected { background: rgba(255, 138, 61, 0.16); color: var(--tk-color-accent); font-weight: 700; }
.tk-option-check { margin-left: auto; color: var(--tk-color-primary); display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 12px;
    margin: 2px 2px var(--tk-space-sm);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    background: rgba(10, 10, 15, 0.7);
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
    background: rgba(20, 20, 28, 0.85);
    border: 1px solid var(--tk-color-border);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-checkbox { border-radius: 5px; }
.tk-checkbox:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); box-shadow: var(--tk-im-glow); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 2px;
    width: 4px;
    height: 9px;
    border-right: 2px solid var(--tk-color-primary-contrast);
    border-bottom: 2px solid var(--tk-color-primary-contrast);
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); box-shadow: var(--tk-im-glow), inset 0 0 0 4px var(--tk-color-background); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 138, 61, 0.25);
}
.tk-toggle { position: relative; width: 46px; height: 25px; flex: none; margin: 0; appearance: none; background: rgba(20, 20, 28, 0.9); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); cursor: pointer; transition: background var(--tk-transition), border-color var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 19px; height: 19px; background: var(--tk-color-text-muted); border-radius: var(--tk-radius-full); transition: transform var(--tk-transition), background var(--tk-transition); }
.tk-toggle:checked { background: rgba(255, 138, 61, 0.25); border-color: var(--tk-color-primary); }
.tk-toggle:checked::after { transform: translateX(21px); background: var(--tk-color-primary); box-shadow: var(--tk-im-glow); }

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
    min-width: 19px;
    height: 19px;
    padding: 0 5px;
    border-radius: var(--tk-radius-full);
    background: var(--tk-color-primary);
    color: var(--tk-color-primary-contrast);
    font-size: 11px;
    font-weight: 800;
}
.tk-filter-active { display: flex; flex-wrap: wrap; align-items: center; gap: var(--tk-space-sm); margin-top: var(--tk-space-sm); }

/* == tk: dropdown =============================================== */
.tk-dropdown { position: relative; display: inline-block; }
.tk-dropdown-menu {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
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
.tk-dropdown-label { padding: 6px 12px; font-family: var(--tk-font-mono); font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--tk-color-text-muted); }
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
.tk-dropdown-item:hover { background: rgba(244, 241, 234, 0.07); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-text-muted); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: rgba(255, 93, 93, 0.12); }
.tk-dropdown-divider { height: 1px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) var(--tk-space-sm); }

/* == tk: card =================================================== */
/* Kartu adalah frame film: permukaan gelap dengan grade teal-orange tipis
   yang menyapu diagonal, membesar pelan saat disorot seperti kamera zoom-in. */
.tk-card {
    position: relative;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow);
    overflow: hidden;
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), border-color var(--tk-transition);
}
.tk-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--tk-im-grade);
    opacity: 0.6;
    pointer-events: none;
}
.tk-card > * { position: relative; }
.tk-card:hover { transform: scale(1.015); box-shadow: var(--tk-shadow-lg); border-color: rgba(255, 138, 61, 0.35); }
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-md); }
.tk-card-stat .tk-stat-value { font-size: var(--tk-text-h2); font-family: var(--tk-font-heading); font-weight: 800; color: var(--tk-color-text); }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 700; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 700; }

/* == tk: navigation ============================================= */
/* Navbar adalah bar judul film: hitam pekat nyaris menyatu dengan latar,
   memisah dari adegan hanya lewat garis tipis. */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: rgba(10, 10, 15, 0.85);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--tk-color-border);
    position: relative;
    z-index: 5;
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 800; font-size: 19px; margin-right: auto; color: var(--tk-color-text); letter-spacing: 0.01em; }
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: 14px; font-weight: 700; padding: 7px 14px; border-radius: var(--tk-radius-full); transition: background var(--tk-transition), color var(--tk-transition); }
.tk-navbar-link:hover { color: var(--tk-color-text); background: rgba(244, 241, 234, 0.07); }
.tk-navbar-link-active { color: var(--tk-color-primary-contrast); background: var(--tk-color-primary); box-shadow: var(--tk-im-glow); }
.tk-navbar-dark { background: #050508; }
.tk-navbar-dark .tk-navbar-brand { color: #FFF; }
.tk-navbar-dark .tk-navbar-link { color: rgba(244, 241, 234, 0.6); }
.tk-navbar-dark .tk-navbar-link:hover { color: #FFF; background: rgba(255, 255, 255, 0.08); }
.tk-navbar-dark .tk-navbar-link-active { color: var(--tk-color-primary-contrast); }
.tk-sidebar {
    width: 250px;
    background: rgba(14, 14, 20, 0.92);
    border-right: 1px solid var(--tk-color-border);
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
    font-weight: 700;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-sidebar-item:hover { background: rgba(244, 241, 234, 0.06); color: var(--tk-color-text); }
.tk-sidebar-item-active { background: rgba(255, 138, 61, 0.16); color: var(--tk-color-primary); box-shadow: inset 2px 0 0 var(--tk-color-primary); }
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 66px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: var(--tk-space-sm); }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 700;
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
}
.tk-breadcrumb a { color: var(--tk-color-text-muted); text-decoration: none; }
.tk-breadcrumb a:hover { color: var(--tk-color-primary); }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.6; }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 700; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: rgba(10, 10, 15, 0.85);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--tk-color-border);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: 4px; border-bottom: 1px solid var(--tk-color-border); width: fit-content; max-width: 100%; overflow-x: auto; }
.tk-tab {
    padding: 10px 18px;
    font-family: var(--tk-font-heading);
    font-size: 14px;
    font-weight: 700;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    transition: color var(--tk-transition), border-color var(--tk-transition);
    white-space: nowrap;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-primary); border-bottom-color: var(--tk-color-primary); }
.tk-segmented { display: inline-flex; border: 1px solid var(--tk-color-border); background: rgba(20, 20, 28, 0.85); border-radius: var(--tk-radius-full); padding: 4px; gap: 2px; }
.tk-segment {
    padding: 7px 16px;
    font-family: var(--tk-font-heading);
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
.tk-segment-active { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); box-shadow: var(--tk-im-glow); }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: var(--tk-radius-full);
    border: 1px solid var(--tk-color-border);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text);
}
.tk-badge-success { color: var(--tk-color-success); background: var(--tk-color-success-soft); border-color: rgba(74, 222, 149, 0.35); }
.tk-badge-warning { color: var(--tk-color-warning); background: var(--tk-color-warning-soft); border-color: rgba(255, 194, 75, 0.35); }
.tk-badge-danger { color: var(--tk-color-danger); background: var(--tk-color-danger-soft); border-color: rgba(255, 93, 93, 0.35); }
.tk-badge-info { color: var(--tk-color-secondary); background: var(--tk-color-info-soft); border-color: rgba(56, 200, 180, 0.35); }
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
    border-left-width: 3px;
    border-radius: var(--tk-radius);
    font-size: var(--tk-text-body-sm);
}
.tk-alert-title { font-weight: 800; display: block; margin-bottom: 2px; }
.tk-alert-success { background: var(--tk-color-success-soft); border-color: rgba(74, 222, 149, 0.4); color: #A5EFCB; }
.tk-alert-warning { background: var(--tk-color-warning-soft); border-color: rgba(255, 194, 75, 0.4); color: #FFE0A6; }
.tk-alert-danger { background: var(--tk-color-danger-soft); border-color: rgba(255, 93, 93, 0.4); color: #FFB6B6; }
.tk-alert-info { background: var(--tk-color-info-soft); border-color: rgba(56, 200, 180, 0.4); color: #A9E8DF; }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); }
.tk-table th {
    text-align: left;
    font-family: var(--tk-font-mono);
    font-weight: 700;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--tk-color-text-muted);
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-bottom: 1px solid var(--tk-color-border);
}
.tk-table td { padding: var(--tk-space-md); border-bottom: 1px solid rgba(42, 42, 56, 0.6); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: rgba(255, 138, 61, 0.05); }
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
.tk-action-btn:hover { background: rgba(244, 241, 234, 0.08); color: var(--tk-color-text); }
.tk-action-btn-danger:hover { background: rgba(255, 93, 93, 0.14); color: var(--tk-color-danger); }
.tk-pagination { display: flex; gap: var(--tk-space-xs); align-items: center; }
.tk-page {
    min-width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-full);
    border: 1px solid transparent;
    background: none;
    font-family: var(--tk-font-mono);
    font-size: 13px;
    font-weight: 700;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-page:hover { background: rgba(244, 241, 234, 0.08); color: var(--tk-color-text); }
.tk-page-active { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); box-shadow: var(--tk-im-glow); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(3, 3, 6, 0.78);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
/* Modal adalah close-up: satu-satunya yang tajam saat seluruh adegan lain
   diburamkan dan digelapkan. */
.tk-modal {
    background: var(--tk-color-surface);
    border: 1px solid rgba(255, 138, 61, 0.3);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg), var(--tk-im-glow);
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
    border: 3px solid var(--tk-color-surface-2);
    border-top-color: var(--tk-color-primary);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.8s linear infinite;
}
.tk-progress { height: 8px; background: rgba(20, 20, 28, 0.9); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); overflow: hidden; }
.tk-progress-bar {
    height: 100%;
    border-radius: var(--tk-radius-full);
    background: linear-gradient(90deg, var(--tk-color-primary) 0%, var(--tk-color-secondary) 100%);
    box-shadow: var(--tk-im-glow);
    transition: width var(--tk-transition);
}
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, rgba(255, 138, 61, 0.12) 50%, var(--tk-color-surface-2) 75%);
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
    background: rgba(14, 14, 20, 0.6);
}
.tk-empty-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-full);
    background: var(--tk-color-surface);
    color: var(--tk-color-text-muted);
}
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: 800; font-size: var(--tk-text-h4); }

/* == tk: content-blocks ========================================= */
/* Hero adalah adegan pembuka: satu layar penuh, letterbox bar atas-bawah,
   cahaya proyektor teal-orange dari dua sudut, judul raksasa muncul dari
   kegelapan, dan isyarat scroll yang berdenyut di bawah. */
.tk-hero {
    position: relative;
    min-height: 92vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--tk-space-section) var(--tk-space-lg);
    background:
        radial-gradient(55% 60% at 18% 8%, rgba(255, 138, 61, 0.16) 0%, transparent 100%),
        radial-gradient(55% 60% at 85% 92%, rgba(56, 200, 180, 0.13) 0%, transparent 100%);
    overflow: hidden;
    box-sizing: border-box;
}
/* Letterbox: dua bar hitam sinematik di tepi atas dan bawah adegan. */
.tk-hero::before, .tk-hero::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 42px;
    background: #050508;
    pointer-events: none;
}
.tk-hero::before { top: 0; border-bottom: 1px solid rgba(244, 241, 234, 0.08); }
.tk-hero::after { bottom: 0; border-top: 1px solid rgba(244, 241, 234, 0.08); }
.tk-hero > * { position: relative; max-width: 720px; margin-left: auto; margin-right: auto; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); animation: tk-scene-in 1.4s cubic-bezier(0.16, 1, 0.3, 1) both; }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); margin: 0 auto var(--tk-space-xl); animation: tk-scene-in 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both; }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; flex-wrap: wrap; animation: tk-scene-in 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both; }
@keyframes tk-scene-in {
    from { opacity: 0; transform: translateY(36px); }
    to { opacity: 1; transform: translateY(0); }
}
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-lg); }
.tk-feature {
    display: flex;
    flex-direction: column;
    gap: var(--tk-space-sm);
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-sm);
    padding: var(--tk-space-lg);
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), border-color var(--tk-transition);
}
.tk-feature:hover { transform: translateY(-6px); box-shadow: var(--tk-shadow), var(--tk-im-glow); border-color: rgba(255, 138, 61, 0.35); }
.tk-feature-icon {
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-full);
    background: rgba(255, 138, 61, 0.14);
    border: 1px solid rgba(255, 138, 61, 0.4);
    color: var(--tk-color-primary);
    box-shadow: var(--tk-im-glow);
}
.tk-cta {
    position: relative;
    background:
        radial-gradient(85% 130% at 88% 8%, rgba(56, 200, 180, 0.2) 0%, transparent 55%),
        radial-gradient(85% 130% at 8% 95%, rgba(255, 138, 61, 0.24) 0%, transparent 55%),
        var(--tk-color-surface);
    border: 1px solid rgba(255, 138, 61, 0.35);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg);
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

/* == tk: immersive flavor ======================================= */
/* Penimpa karakter immersive di atas struktur kontrak: menang kaskade karena
   berada di ekor berkas. Tanda tangan kit ini adalah adegan full-screen,
   kicker "SCENE", reveal yang digerakkan scroll, isyarat scroll, dan
   elemen suara (equalizer). */
/* Kicker adegan: label mono "SCENE 01" dengan garis panjang — penanda bab
   seperti slate film. */
.tk-kicker {
    display: flex;
    align-items: center;
    gap: var(--tk-space-md);
    font-family: var(--tk-font-mono);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--tk-color-primary);
}
.tk-kicker::after { content: ''; height: 1px; width: 72px; background: linear-gradient(90deg, var(--tk-color-primary), transparent); }
/* Adegan: seksi setinggi layar penuh yang memusatkan kontennya. */
.tk-scene {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--tk-space-section) var(--tk-space-lg);
    box-sizing: border-box;
}
/* Reveal digerakkan scroll: konten muncul dari kegelapan saat masuk viewport.
   Murni CSS (animation-timeline) sehingga tetap bekerja tanpa JS; browser
   yang belum mendukung menampilkan konten seperti biasa. */
@supports (animation-timeline: view()) {
    .tk-reveal {
        animation: tk-scene-in 1s cubic-bezier(0.16, 1, 0.3, 1) both;
        animation-timeline: view();
        animation-range: entry 0% entry 42%;
    }
}
/* Isyarat scroll: mouse kecil dengan roda yang berdenyut turun. */
.tk-scroll-cue {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: var(--tk-color-text-muted);
    font-family: var(--tk-font-mono);
    font-size: 10px;
    letter-spacing: 0.24em;
    text-transform: uppercase;
}
.tk-scroll-cue::before {
    content: '';
    width: 22px;
    height: 34px;
    border: 1.5px solid rgba(244, 241, 234, 0.4);
    border-radius: 12px;
    background:
        radial-gradient(circle 2.5px at 50% 10px, var(--tk-color-primary) 97%, transparent) no-repeat;
    animation: tk-cue 1.8s ease-in-out infinite;
}
@keyframes tk-cue {
    0%, 100% { background-position: 0 0; opacity: 1; }
    55% { background-position: 0 12px; opacity: 0.5; }
    56% { background-position: 0 0; opacity: 0; }
}
/* Equalizer suara: lima bilah yang menari — pengalaman ini bersuara. */
.tk-eq { display: inline-flex; align-items: flex-end; gap: 3px; height: 18px; }
.tk-eq i {
    width: 3px;
    background: var(--tk-color-primary);
    border-radius: 2px;
    animation: tk-eq-bounce 1s ease-in-out infinite alternate;
}
.tk-eq i:nth-child(1) { height: 40%; animation-delay: -0.9s; }
.tk-eq i:nth-child(2) { height: 90%; animation-delay: -0.6s; }
.tk-eq i:nth-child(3) { height: 60%; animation-delay: -0.3s; }
.tk-eq i:nth-child(4) { height: 100%; animation-delay: -0.75s; }
.tk-eq i:nth-child(5) { height: 50%; animation-delay: -0.15s; }
@keyframes tk-eq-bounce { from { transform: scaleY(0.3); } to { transform: scaleY(1); } }
.tk-eq-muted i { animation-play-state: paused; transform: scaleY(0.2); background: var(--tk-color-text-muted); }
/* Chip suara: saklar "pengalaman bersuara" seperti situs immersive sungguhan. */
.tk-sound-chip {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 16px;
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-full);
    background: rgba(20, 20, 28, 0.85);
    color: var(--tk-color-text);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-sound-chip:hover { border-color: var(--tk-color-primary); box-shadow: var(--tk-im-glow); }
/* Marquee sinematik: baris teks berjalan seperti kredit penutup horizontal. */
.tk-marquee {
    display: flex;
    overflow: hidden;
    border-top: 1px solid var(--tk-color-border);
    border-bottom: 1px solid var(--tk-color-border);
    background: rgba(14, 14, 20, 0.8);
    -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
    mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
}
.tk-marquee-track {
    display: flex;
    flex: none;
    gap: var(--tk-space-2xl);
    padding: var(--tk-space-md) var(--tk-space-lg);
    font-family: var(--tk-font-heading);
    font-size: var(--tk-text-h4);
    font-weight: 700;
    color: var(--tk-color-text-muted);
    white-space: nowrap;
    animation: tk-marquee 24s linear infinite;
}
.tk-marquee-track em { font-style: normal; color: var(--tk-color-primary); }
@keyframes tk-marquee { to { transform: translateX(-100%); } }
/* Foto adalah footage: grade teal-orange menimpa gambar, bingkai frame film. */
.tk-card img, .tk-hero img, figure img {
    border: 1px solid rgba(255, 138, 61, 0.3);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow);
    filter: saturate(0.9) contrast(1.06);
    box-sizing: border-box;
}
figure { position: relative; }
`;
