/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const ANTI_DESIGN_STYLES = `/* Anti-Design — kit design TOKENAI.
   Kit yang melanggar aturannya sendiri dengan sengaja. Tangga ukuran judul
   tidak menaik (h2 lebih besar daripada h1, h4 lebih besar daripada h3),
   sudut tiap kotak berbeda di keempat penjurunya, tebal garis berbeda di tiap
   sisi, dan bayangan jatuh ke arah yang saling bertentangan seperti ada dua
   matahari. Warnanya sepasang-sepasang bertabrakan: merah muda menyala di
   atas kuning mustard, biru tautan bawaan browser, dan latar alert yang
   warnanya justru melawan artinya. Hurufnya tiga klon paling default di web
   — Tinos (Times), Arimo (Arial), Courier Prime (Courier) — plus Comic Neue
   sebagai huruf yang memang sengaja salah tempat. Tiap varian tombol memakai
   huruf berbeda. Elemen dimiringkan beberapa derajat, digeser keluar sumbu,
   dan saling menumpuk. Yang TIDAK dilanggar: kontrasnya tetap terbaca, target
   kliknya tetap besar, dan seluruh nilai tetap tinggal di :root — kekacauan
   ini dirancang, bukan kecelakaan. Kontrak: docs/kontrak-kit-design.md. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #EE0055;
    /* Hover tidak menggelapkan primer, tapi pindah ke ungu yang tidak ada
       hubungannya — perubahan state pun menolak jadi logis. */
    --tk-color-primary-hover: #7A00C4;
    --tk-color-primary-contrast: #E6FF00;
    --tk-color-secondary: #0000EE;
    --tk-color-secondary-hover: #C4001B;
    --tk-color-secondary-contrast: #FFE500;
    --tk-color-accent: #00E1B4;
    --tk-color-background: #D8DC2E;
    --tk-color-surface: #FFFFFF;
    --tk-color-surface-2: #C0C0C0;
    --tk-color-text: #12100A;
    /* Teks redup bukan abu-abu, tapi ungu tua: redup secara ukuran, sama
       sekali tidak redup secara warna. */
    --tk-color-text-muted: #6B2A5E;
    --tk-color-border: #12100A;
    /* Warna semantiknya benar, tapi latar lembutnya sengaja melawan artinya:
       sukses berlatar merah muda, bahaya berlatar hijau. Tetap terbaca,
       tetap salah. */
    --tk-color-success: #007A3D;
    --tk-color-success-soft: #FF9EC4;
    --tk-color-warning: #A34D00;
    --tk-color-warning-soft: #9CE5FF;
    --tk-color-danger: #C4001B;
    --tk-color-danger-soft: #B6FF7A;
    --tk-color-info: #0000EE;
    --tk-color-info-soft: #FFD400;

    --tk-font-heading: 'Tinos', 'Times New Roman', Times, serif;
    --tk-font-body: 'Arimo', Arial, Helvetica, sans-serif;
    --tk-font-mono: 'Courier Prime', 'Courier New', Courier, monospace;
    --tk-weight-heading: 700;
    --tk-weight-body: 400;
    /* Judul terlalu rapat sampai barisnya hampir bersentuhan; teks isi
       terlalu longgar sampai paragrafnya renggang. Keduanya salah arah. */
    --tk-leading-heading: 0.94;
    --tk-leading-body: 1.82;

    /* Tangga ukuran yang sengaja tidak menaik: display melompat jauh, h2
       lebih besar daripada h1, h4 lebih besar daripada h3, dan title malah
       lebih kecil daripada body. */
    --tk-text-display: 112px;
    --tk-text-h1: 40px;
    --tk-text-h2: 62px;
    --tk-text-h3: 19px;
    --tk-text-h4: 29px;
    --tk-text-title: 15px;
    --tk-text-body-lg: 21px;
    --tk-text-body: 16px;
    --tk-text-body-sm: 14px;
    --tk-text-caption: 13px;

    /* Jarak sengaja lepas dari kelipatan 4/8 supaya tidak ada satu pun
       elemen yang benar-benar duduk di kisi. */
    --tk-space-xs: 3px;
    --tk-space-sm: 9px;
    --tk-space-md: 15px;
    --tk-space-lg: 26px;
    --tk-space-xl: 38px;
    --tk-space-2xl: 53px;
    --tk-space-3xl: 79px;
    --tk-space-section: 96px;

    /* Radius bernilai empat penjuru sekaligus: tiap sudut kotak berbeda. */
    --tk-radius-sm: 7px 1px 5px 2px;
    --tk-radius: 19px 2px 24px 4px;
    --tk-radius-lg: 36px 3px 44px 6px;
    --tk-radius-full: 999px;

    --tk-border-width: 3px;
    /* Tiga bayangan, tiga arah cahaya yang saling menyangkal. */
    --tk-shadow-sm: 4px -3px 0 var(--tk-color-text);
    --tk-shadow: -8px 8px 0 var(--tk-color-secondary);
    --tk-shadow-lg: 13px -11px 0 var(--tk-color-primary), -11px 13px 0 var(--tk-color-accent);

    /* Kurva yang melewati target lalu mundur — gerak yang tidak pernah tenang. */
    --tk-transition: 380ms cubic-bezier(0.86, -0.62, 0.14, 1.64);
    --tk-container: 1137px;

    /* Token khas anti-design (bukan kontrak): huruf yang memang sengaja
       salah tempat, plus sudut miring baku yang dipakai berulang. */
    --tk-ad-wrong: 'Comic Neue', 'Comic Sans MS', cursive;
    --tk-ad-tilt: -2.4deg;
    --tk-ad-tilt-alt: 1.7deg;
}

/* == tk: base =================================================== */
/* Dua kisi yang tidak sejajar satu sama lain: kesalahan registrasi cetak
   yang dibiarkan begitu saja. */
body {
    position: relative;
    margin: 0;
    background: var(--tk-color-background);
    color: var(--tk-color-text);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body);
    font-weight: var(--tk-weight-body);
    line-height: var(--tk-leading-body);
}
body::before {
    content: '';
    position: fixed;
    inset: -20%;
    pointer-events: none;
    z-index: 0;
    background-image:
        repeating-linear-gradient(91.4deg, rgba(18, 16, 10, 0.09) 0 1px, transparent 1px 37px),
        repeating-linear-gradient(1.7deg, rgba(0, 0, 238, 0.1) 0 1px, transparent 1px 43px);
}
body > * { position: relative; z-index: 1; }
.tk-container {
    max-width: var(--tk-container);
    margin: 0 auto;
    padding: 0 var(--tk-space-lg);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }
::selection { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }

/* == tk: typography ============================================= */
/* Tiap tingkat judul memakai perlakuan berbeda: ada yang kapital, ada yang
   miring, ada yang dijejalkan rapat. Tidak ada satu aturan yang berlaku
   untuk semuanya — itulah aturannya. */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); letter-spacing: -0.05em; text-transform: uppercase; }
.tk-h1 { font-size: var(--tk-text-h1); letter-spacing: 0.22em; text-transform: uppercase; font-weight: 400; }
.tk-h2 { font-size: var(--tk-text-h2); letter-spacing: -0.035em; }
.tk-h3 { font-size: var(--tk-text-h3); font-family: var(--tk-font-mono); letter-spacing: 0.14em; text-transform: uppercase; }
.tk-h4 { font-size: var(--tk-text-h4); font-style: italic; }
.tk-title { font-family: var(--tk-ad-wrong); font-size: var(--tk-text-title); font-weight: 700; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-family: var(--tk-font-mono); font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); letter-spacing: 0.04em; }
.tk-muted { color: var(--tk-color-text-muted); }
/* Tautan dikembalikan ke bentuk paling default yang pernah ada di web:
   biru, bergaris bawah, dan berubah ungu setelah dikunjungi. */
.tk-link {
    color: var(--tk-color-secondary);
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
}
.tk-link:hover { color: var(--tk-color-primary); background: var(--tk-color-primary-contrast); }
.tk-link:visited { color: var(--tk-color-text-muted); }
.tk-code {
    font-family: var(--tk-font-mono);
    font-size: 0.9em;
    background: var(--tk-color-info-soft);
    border: 2px solid var(--tk-color-border);
    border-right-width: 5px;
    padding: 1px 6px;
    border-radius: var(--tk-radius-sm);
}

/* == tk: button ================================================= */
/* Tiap varian tombol memakai keluarga huruf yang berbeda dan miring ke arah
   yang berbeda. Padding-nya tidak simetris; saat disorot, kemiringannya
   berbalik alih-alih menghilang. */
.tk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-body);
    font-size: 15px;
    font-weight: 700;
    line-height: 1;
    padding: 14px 29px 16px 21px;
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    background: var(--tk-color-surface);
    color: var(--tk-color-text);
    transition: transform var(--tk-transition), background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-btn-primary {
    background: var(--tk-color-primary);
    color: var(--tk-color-primary-contrast);
    font-family: var(--tk-font-heading);
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border-width: 3px 6px 4px 2px;
    transform: rotate(var(--tk-ad-tilt));
    box-shadow: var(--tk-shadow-sm);
}
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); transform: rotate(var(--tk-ad-tilt-alt)); box-shadow: var(--tk-shadow); }
.tk-btn-secondary {
    background: var(--tk-color-secondary);
    color: var(--tk-color-secondary-contrast);
    font-family: var(--tk-font-mono);
    letter-spacing: 0.1em;
    border-width: 5px 2px 3px 4px;
    transform: rotate(var(--tk-ad-tilt-alt));
}
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); transform: rotate(-1.1deg); }
.tk-btn-danger { background: var(--tk-color-danger); color: var(--tk-color-danger-soft); border-width: 2px 4px 6px 3px; }
.tk-btn-outline { background: transparent; font-family: var(--tk-ad-wrong); font-size: 17px; border-style: dashed; border-width: 3px; }
.tk-btn-outline:hover:not(:disabled) { background: var(--tk-color-accent); transform: rotate(-1.4deg); }
.tk-btn-ghost { background: transparent; border-color: transparent; text-decoration: underline; text-underline-offset: 5px; }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); border-color: var(--tk-color-border); }
.tk-btn-text { background: none; border-color: transparent; color: var(--tk-color-secondary); text-decoration: underline; padding-left: 5px; padding-right: 5px; }
.tk-btn-text:hover:not(:disabled) { color: var(--tk-color-primary); }
.tk-btn:not(:disabled):active { transform: translate(3px, 4px) rotate(0deg); }
.tk-btn:disabled { opacity: 0.45; cursor: not-allowed; filter: grayscale(1); }
.tk-btn-sm { font-size: 13px; padding: 9px 19px 11px 13px; }
.tk-btn-primary.tk-btn-sm { font-size: 14px; }
.tk-btn-lg { font-size: 19px; padding: 20px 41px 23px 29px; }
.tk-btn-primary.tk-btn-lg { font-size: 22px; }
.tk-btn-icon { padding: 13px 14px 14px 13px; }
.tk-btn-sm.tk-btn-icon { padding: 9px 10px 10px 9px; }
.tk-btn-loading { position: relative; color: transparent !important; pointer-events: none; }
.tk-btn-loading::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border: 3px solid var(--tk-color-accent);
    border-top-color: transparent;
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.7s steps(6) infinite;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
/* Label rata kanan sementara isinya rata kiri; teks bantuan malah rata
   tengah. Tiga perataan berbeda dalam satu field. */
.tk-field { display: flex; flex-direction: column; gap: var(--tk-space-xs); margin-bottom: var(--tk-space-md); }
.tk-label { font-family: var(--tk-font-mono); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.16em; text-align: right; color: var(--tk-color-text); }
.tk-help { font-family: var(--tk-ad-wrong); font-size: var(--tk-text-body-sm); color: var(--tk-color-text-muted); text-align: center; }
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body);
    color: var(--tk-color-text);
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-left-width: 7px;
    border-bottom-width: 1px;
    border-radius: var(--tk-radius-sm);
    padding: 11px 13px 13px 17px;
    outline: none;
    transition: box-shadow var(--tk-transition), background var(--tk-transition);
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); font-family: var(--tk-ad-wrong); }
.tk-input:focus, .tk-textarea:focus { background: var(--tk-color-info-soft); box-shadow: var(--tk-shadow-sm); }
.tk-textarea { min-height: 104px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-textarea, .tk-field-error .tk-select-trigger { background: var(--tk-color-danger-soft); border-color: var(--tk-color-danger); }
.tk-field-error .tk-help { color: var(--tk-color-danger); font-weight: 700; }
.tk-field-success .tk-input { background: var(--tk-color-success-soft); border-color: var(--tk-color-success); }
.tk-field-success .tk-help { color: var(--tk-color-success); font-weight: 700; }
/* Seluruh kontrol pilihan digambar sendiri — tidak ada tampilan bawaan browser sama sekali.
   Select tidak memakai <select> native karena popup daftar opsinya tidak bisa digayakan CSS;
   sebagai gantinya listbox custom: .tk-select > .tk-select-trigger + .tk-select-menu.
   Buka/tutup: kelas .tk-select-open (dikelola JS/framework) atau fallback :focus-within. */
.tk-select { position: relative; display: inline-grid; min-width: 210px; }
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
.tk-select-placeholder { color: var(--tk-color-text-muted); font-family: var(--tk-ad-wrong); }
.tk-select:focus-within > .tk-select-trigger, .tk-select-open > .tk-select-trigger { background: var(--tk-color-info-soft); box-shadow: var(--tk-shadow-sm); }
/* Menu tidak muncul lurus di bawah pemicunya — ia melenceng ke kiri dan miring. */
.tk-select-menu {
    position: absolute;
    top: calc(100% + 7px);
    left: -9px;
    right: -3px;
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    box-shadow: var(--tk-shadow);
    padding: 5px;
    max-height: 290px;
    overflow: auto;
    display: none;
    flex-direction: column;
    transform: rotate(-0.7deg);
    z-index: 30;
}
.tk-select:focus-within > .tk-select-menu, .tk-select-open > .tk-select-menu { display: flex; }
.tk-option {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 8px 11px 9px 15px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    text-align: left;
    transition: background var(--tk-transition), transform var(--tk-transition);
}
.tk-option:hover { background: var(--tk-color-accent); transform: translateX(5px); }
.tk-option-selected { background: var(--tk-color-primary-contrast); }
.tk-option-check { margin-left: auto; color: var(--tk-color-primary); display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 7px 11px;
    margin: 0 0 5px;
    border-bottom: 3px dashed var(--tk-color-border);
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
.tk-select-menu-search input::placeholder { color: var(--tk-color-text-muted); font-family: var(--tk-ad-wrong); }
.tk-select-menu-footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-sm) 3px 2px;
    margin-top: var(--tk-space-xs);
    border-top: 3px dashed var(--tk-color-border);
}
.tk-check { display: inline-flex; align-items: center; gap: var(--tk-space-sm); font-size: var(--tk-text-body-sm); cursor: pointer; }
.tk-checkbox, .tk-radio {
    appearance: none;
    width: 21px;
    height: 19px;
    flex: none;
    margin: 0;
    position: relative;
    background: var(--tk-color-surface);
    border: 3px solid var(--tk-color-border);
    cursor: pointer;
    transition: background var(--tk-transition), transform var(--tk-transition);
}
.tk-checkbox { border-radius: var(--tk-radius-sm); transform: rotate(-3deg); }
.tk-checkbox:checked { background: var(--tk-color-primary); transform: rotate(2.5deg); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 0;
    width: 4px;
    height: 10px;
    border-right: 3px solid var(--tk-color-primary-contrast);
    border-bottom: 3px solid var(--tk-color-primary-contrast);
    transform: rotate(38deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked { background: var(--tk-color-accent); box-shadow: inset 0 0 0 4px var(--tk-color-surface); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible { outline: 3px dashed var(--tk-color-secondary); outline-offset: 3px; }
.tk-toggle {
    position: relative;
    width: 54px;
    height: 24px;
    flex: none;
    margin: 0;
    appearance: none;
    background: var(--tk-color-surface-2);
    border: 3px solid var(--tk-color-border);
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    transition: background var(--tk-transition);
}
/* Kenopnya lebih tinggi daripada relnya, jadi ia menyembul keluar. */
.tk-toggle::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -2px;
    width: 22px;
    height: 22px;
    background: var(--tk-color-primary);
    border: 3px solid var(--tk-color-border);
    border-radius: var(--tk-radius-full);
    transition: transform var(--tk-transition);
}
.tk-toggle:checked { background: var(--tk-color-primary-contrast); }
.tk-toggle:checked::after { transform: translateX(32px); background: var(--tk-color-secondary); }

/* == tk: search-filter ========================================== */
.tk-search { position: relative; display: flex; align-items: center; min-width: 230px; }
.tk-search .tk-input { width: 100%; padding-left: 43px; padding-right: 66px; }
.tk-search .tk-input::-webkit-search-cancel-button { -webkit-appearance: none; }
.tk-search-icon { position: absolute; left: 15px; display: inline-flex; color: var(--tk-color-primary); pointer-events: none; transform: rotate(-13deg); }
.tk-search-kbd {
    position: absolute;
    right: 8px;
    font-family: var(--tk-font-mono);
    font-size: 11px;
    color: var(--tk-color-text);
    background: var(--tk-color-warning-soft);
    border: 2px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 2px 7px;
    transform: rotate(4deg);
    pointer-events: none;
}
.tk-filter-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-md) var(--tk-space-lg) var(--tk-space-md) var(--tk-space-sm);
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-top-width: 7px;
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-sm);
}
.tk-filter-bar .tk-search { flex: 1; }
.tk-filter-bar .tk-select { min-width: 172px; }
.tk-filter-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 22px;
    height: 22px;
    padding: 0 5px;
    border: 2px solid var(--tk-color-border);
    border-radius: var(--tk-radius-full);
    background: var(--tk-color-accent);
    color: var(--tk-color-text);
    font-family: var(--tk-font-mono);
    font-size: 12px;
    transform: rotate(-8deg);
}
.tk-filter-active { display: flex; flex-wrap: wrap; align-items: center; gap: var(--tk-space-sm); margin-top: var(--tk-space-sm); }

/* == tk: dropdown =============================================== */
.tk-dropdown { position: relative; display: inline-block; }
.tk-dropdown-menu {
    position: absolute;
    top: calc(100% + 7px);
    left: -11px;
    right: -3px;
    min-width: 190px;
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    box-shadow: var(--tk-shadow);
    padding: 5px;
    max-height: 290px;
    overflow: auto;
    display: none;
    flex-direction: column;
    transform: rotate(0.9deg);
    z-index: 30;
}
.tk-dropdown-menu-right { left: auto; right: -7px; }
.tk-dropdown-menu-up { top: auto; bottom: calc(100% + 7px); }
.tk-dropdown-open > .tk-dropdown-menu, .tk-dropdown:focus-within > .tk-dropdown-menu { display: flex; }
.tk-dropdown-label { padding: 6px 11px 3px; font-family: var(--tk-font-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--tk-color-text-muted); text-align: right; }
.tk-dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 8px 11px 9px 15px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    text-align: left;
    transition: background var(--tk-transition), transform var(--tk-transition);
}
.tk-dropdown-item:hover { background: var(--tk-color-accent); transform: translateX(5px); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-secondary); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: var(--tk-color-danger-soft); }
.tk-dropdown-divider { height: 3px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) var(--tk-space-sm) var(--tk-space-xs) var(--tk-space-lg); }

/* == tk: card =================================================== */
/* Kartu miring, garisnya berbeda tebal di tiap sisi, dan kepalanya rata
   kanan sementara badannya rata kiri. Saat disorot ia justru miring ke arah
   sebaliknya — bukan naik dengan sopan. */
.tk-card {
    position: relative;
    background: var(--tk-color-surface);
    border: var(--tk-border-width) solid var(--tk-color-border);
    border-width: 3px 7px 2px 4px;
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-sm);
    transform: rotate(0.6deg);
    transition: transform var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-card:hover { transform: rotate(-0.9deg) translate(-3px, 2px); box-shadow: var(--tk-shadow); z-index: 2; }
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0 var(--tk-space-xl); text-align: right; }
.tk-card-body { padding: var(--tk-space-md) var(--tk-space-lg) var(--tk-space-lg) var(--tk-space-xl); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg) var(--tk-space-xl); display: flex; gap: var(--tk-space-md); flex-wrap: wrap; }
.tk-card-stat .tk-stat-value { font-family: var(--tk-font-heading); font-size: 54px; font-weight: 700; line-height: 0.9; letter-spacing: -0.04em; color: var(--tk-color-primary); }
.tk-card-stat .tk-stat-trend-up { font-family: var(--tk-ad-wrong); font-weight: 700; color: var(--tk-color-success); font-size: var(--tk-text-body-sm); }
.tk-card-stat .tk-stat-trend-down { font-family: var(--tk-ad-wrong); font-weight: 700; color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); }

/* == tk: navigation ============================================= */
/* Butir navigasi tidak duduk di satu garis: yang genap terangkat, yang
   ganjil turun. Kelihatan seperti gagal rata, memang begitu maksudnya. */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-md) var(--tk-space-lg) var(--tk-space-md) var(--tk-space-sm);
    background: var(--tk-color-surface);
    border-bottom: 5px solid var(--tk-color-border);
    position: relative;
    z-index: 5;
}
.tk-navbar-brand {
    font-family: var(--tk-font-heading);
    font-weight: 700;
    font-size: 27px;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    margin-right: auto;
    color: var(--tk-color-text);
    transform: rotate(-1.8deg);
}
.tk-navbar-link {
    color: var(--tk-color-text);
    text-decoration: none;
    font-family: var(--tk-font-body);
    font-size: 15px;
    font-weight: 700;
    padding: 7px 11px 9px;
    border: 3px solid transparent;
    border-radius: var(--tk-radius-sm);
    transition: background var(--tk-transition), transform var(--tk-transition);
}
.tk-navbar-link:nth-of-type(even) { transform: translateY(-7px) rotate(1.4deg); }
.tk-navbar-link:nth-of-type(odd) { transform: translateY(5px) rotate(-1.2deg); }
.tk-navbar-link:hover { background: var(--tk-color-accent); border-color: var(--tk-color-border); }
.tk-navbar-link-active { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); border-color: var(--tk-color-border); }
.tk-navbar-dark { background: var(--tk-color-text); border-bottom-color: var(--tk-color-primary); }
.tk-navbar-dark .tk-navbar-brand { color: var(--tk-color-primary-contrast); }
.tk-navbar-dark .tk-navbar-link { color: var(--tk-color-background); }
.tk-navbar-dark .tk-navbar-link:hover { color: var(--tk-color-text); }
.tk-navbar-dark .tk-navbar-link-active { background: var(--tk-color-primary-contrast); color: var(--tk-color-text); }
.tk-sidebar {
    width: 253px;
    background: var(--tk-color-surface);
    border-right: 5px solid var(--tk-color-border);
    padding: var(--tk-space-md) var(--tk-space-sm) var(--tk-space-md) var(--tk-space-md);
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
    padding: 9px var(--tk-space-md) 11px var(--tk-space-sm);
    border: 3px solid transparent;
    border-radius: var(--tk-radius-sm);
    color: var(--tk-color-text);
    font-size: var(--tk-text-body-sm);
    text-decoration: none;
    transition: background var(--tk-transition), transform var(--tk-transition);
}
.tk-sidebar-item:nth-of-type(even) { margin-left: 13px; }
.tk-sidebar-item:hover { background: var(--tk-color-accent); border-color: var(--tk-color-border); transform: translateX(4px); }
.tk-sidebar-item-active { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); border-color: var(--tk-color-border); transform: rotate(-1.3deg); }
.tk-sidebar-item-active iconify-icon { color: var(--tk-color-primary-contrast); }
.tk-sidebar-item iconify-icon { flex: none; color: var(--tk-color-secondary); }
.tk-sidebar-collapsed { width: 74px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: 9px 0 11px; margin-left: 0; }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-sm) var(--tk-space-xs);
    font-family: var(--tk-ad-wrong);
    font-size: 13px;
    font-weight: 700;
    text-transform: lowercase;
    color: var(--tk-color-text-muted);
    text-align: right;
}
.tk-sidebar-group:first-child { padding-top: var(--tk-space-xs); }
.tk-breadcrumb { display: flex; align-items: center; flex-wrap: wrap; gap: var(--tk-space-sm); font-size: var(--tk-text-body-sm); font-family: var(--tk-font-mono); }
.tk-breadcrumb a { color: var(--tk-color-secondary); text-decoration: underline; }
.tk-breadcrumb a:hover { color: var(--tk-color-primary); }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-primary); transform: rotate(17deg); }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 700; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: 5px solid var(--tk-color-border);
}

/* == tk: tabs =================================================== */
/* Tab aktif bukan yang paling menonjol garisnya, tapi yang paling miring. */
.tk-tabs { display: flex; gap: var(--tk-space-md); border-bottom: 3px solid var(--tk-color-border); width: fit-content; max-width: 100%; overflow-x: auto; padding-bottom: 5px; }
.tk-tab {
    padding: 9px 13px 11px;
    font-family: var(--tk-font-body);
    font-size: 15px;
    font-weight: 700;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border: 3px solid transparent;
    border-radius: var(--tk-radius-sm);
    transition: background var(--tk-transition), transform var(--tk-transition);
    white-space: nowrap;
}
.tk-tab:hover { color: var(--tk-color-text); background: var(--tk-color-accent); }
.tk-tab-active { color: var(--tk-color-primary-contrast); background: var(--tk-color-primary); border-color: var(--tk-color-border); transform: rotate(-2.6deg) translateY(-3px); }
.tk-segmented { display: inline-flex; border: 3px solid var(--tk-color-border); background: var(--tk-color-surface); border-radius: var(--tk-radius-sm); transform: rotate(0.8deg); }
.tk-segment {
    padding: 9px 19px 11px;
    font-family: var(--tk-font-mono);
    font-size: 13px;
    font-weight: 700;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-segment + .tk-segment { border-left: 3px solid var(--tk-color-border); }
.tk-segment:hover { color: var(--tk-color-text); background: var(--tk-color-accent); }
.tk-segment-active { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-family: var(--tk-font-mono);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 3px 11px 5px 7px;
    border-radius: var(--tk-radius-sm);
    border: 3px solid var(--tk-color-border);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text);
    transform: rotate(-2.2deg);
}
.tk-badge-success { background: var(--tk-color-success-soft); color: var(--tk-color-success); transform: rotate(1.9deg); }
.tk-badge-warning { background: var(--tk-color-warning-soft); color: var(--tk-color-warning); transform: rotate(-1.4deg); }
.tk-badge-danger { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); transform: rotate(2.7deg); }
.tk-badge-info { background: var(--tk-color-info-soft); color: var(--tk-color-info); transform: rotate(-3.1deg); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: var(--tk-text-body-sm);
    font-family: var(--tk-ad-wrong);
    font-weight: 700;
    padding: 4px 13px 6px 11px;
    border-radius: var(--tk-radius-full);
    border: 3px solid var(--tk-color-border);
    background: var(--tk-color-accent);
    color: var(--tk-color-text);
    transform: rotate(1.3deg);
}
.tk-chip-remove { border: none; background: none; cursor: pointer; color: var(--tk-color-text); font-size: 18px; line-height: 1; padding: 0; }
.tk-chip-remove:hover { color: var(--tk-color-danger); }

/* == tk: alert ================================================== */
/* Latar tiap alert memakai warna yang melawan artinya; ikon dan teksnya
   yang memegang makna sebenarnya. */
.tk-alert {
    display: flex;
    gap: var(--tk-space-md);
    align-items: flex-start;
    padding: var(--tk-space-md) var(--tk-space-lg) var(--tk-space-md) var(--tk-space-sm);
    border: 3px solid var(--tk-color-border);
    border-left-width: 11px;
    border-radius: var(--tk-radius-sm);
    font-size: var(--tk-text-body-sm);
    background: var(--tk-color-surface);
    color: var(--tk-color-text);
}
.tk-alert iconify-icon { flex: none; margin-top: 2px; transform: rotate(-9deg); }
.tk-alert-title { font-family: var(--tk-font-heading); font-size: 19px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; display: block; margin-bottom: 2px; }
.tk-alert-success { background: var(--tk-color-success-soft); border-left-color: var(--tk-color-success); }
.tk-alert-success iconify-icon { color: var(--tk-color-success); }
.tk-alert-warning { background: var(--tk-color-warning-soft); border-left-color: var(--tk-color-warning); }
.tk-alert-warning iconify-icon { color: var(--tk-color-warning); }
.tk-alert-danger { background: var(--tk-color-danger-soft); border-left-color: var(--tk-color-danger); }
.tk-alert-danger iconify-icon { color: var(--tk-color-danger); }
.tk-alert-info { background: var(--tk-color-info-soft); border-left-color: var(--tk-color-info); }
.tk-alert-info iconify-icon { color: var(--tk-color-info); }

/* == tk: table ================================================== */
/* Kepala tabel memakai Comic Neue huruf kecil; isinya Courier. Satu tabel,
   dua dunia huruf yang tidak pernah dipasangkan orang waras. */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); font-family: var(--tk-font-mono); }
.tk-table th {
    text-align: left;
    font-family: var(--tk-ad-wrong);
    font-size: 16px;
    font-weight: 700;
    text-transform: lowercase;
    color: var(--tk-color-text);
    padding: var(--tk-space-sm) var(--tk-space-md) var(--tk-space-sm) var(--tk-space-sm);
    background: var(--tk-color-primary-contrast);
    border-bottom: 5px solid var(--tk-color-border);
}
.tk-table td { padding: 13px var(--tk-space-md) 13px var(--tk-space-sm); border-bottom: 2px dashed var(--tk-color-border); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:nth-child(even) { background: rgba(0, 0, 238, 0.06); }
.tk-table tbody tr:hover { background: var(--tk-color-accent); }
.tk-table .tk-table-actions { text-align: right; white-space: nowrap; }
.tk-action-btn {
    width: 34px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 3px solid transparent;
    background: none;
    border-radius: var(--tk-radius-sm);
    color: var(--tk-color-text);
    cursor: pointer;
    transition: background var(--tk-transition), transform var(--tk-transition);
}
.tk-action-btn:hover { background: var(--tk-color-accent); border-color: var(--tk-color-border); transform: rotate(-6deg); }
.tk-action-btn-danger:hover { background: var(--tk-color-danger-soft); color: var(--tk-color-danger); }
.tk-pagination { display: flex; gap: var(--tk-space-xs); align-items: center; }
.tk-page {
    min-width: 38px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-sm);
    border: 3px solid var(--tk-color-border);
    background: var(--tk-color-surface);
    font-family: var(--tk-font-mono);
    font-size: 15px;
    color: var(--tk-color-text);
    cursor: pointer;
    transition: background var(--tk-transition), transform var(--tk-transition);
}
.tk-page:nth-child(even) { transform: translateY(-5px); }
.tk-page:hover { background: var(--tk-color-accent); }
.tk-page-active { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); transform: rotate(-7deg) scale(1.12); }

/* == tk: overlay ================================================ */
/* Modal tidak terpusat: ia melenceng ke kiri atas dan miring. */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(18, 16, 10, 0.62);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border: 5px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg);
    max-width: 460px;
    width: 100%;
    transform: rotate(-1.6deg) translate(-13px, -9px);
}
.tk-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 370px;
    background: var(--tk-color-surface);
    border-left: 7px solid var(--tk-color-border);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
/* Spinner berputar patah-patah lewat steps(); progress bar melewati
   petaknya sendiri sedikit di sebelah kanan. */
.tk-spinner {
    width: 30px;
    height: 30px;
    border: 5px solid var(--tk-color-surface-2);
    border-top-color: var(--tk-color-primary);
    border-right-color: var(--tk-color-secondary);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.8s steps(7) infinite;
}
.tk-progress { position: relative; height: 15px; background: var(--tk-color-surface); border: 3px solid var(--tk-color-border); border-radius: var(--tk-radius-full); }
.tk-progress-bar { height: 15px; margin: -1px 0 0 -1px; background: var(--tk-color-primary); border: 2px solid var(--tk-color-border); border-radius: var(--tk-radius-full); transition: width var(--tk-transition); }
.tk-skeleton {
    background: repeating-linear-gradient(101deg, var(--tk-color-surface-2) 0 13px, var(--tk-color-surface) 13px 21px);
    border: 3px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    animation: tk-shimmer 1.4s steps(5) infinite;
}
@keyframes tk-shimmer { to { background-position: 84px 0; } }

/* == tk: empty ================================================== */
.tk-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-3xl) var(--tk-space-lg);
    text-align: center;
    border: 5px dashed var(--tk-color-border);
    border-radius: var(--tk-radius);
    background: var(--tk-color-surface);
}
.tk-empty-icon {
    width: 84px;
    height: 84px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    background: var(--tk-color-warning-soft);
    color: var(--tk-color-text);
    transform: rotate(-7deg);
}
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: 700; font-size: 34px; text-transform: uppercase; letter-spacing: -0.03em; margin-top: var(--tk-space-md); }

/* == tk: content-blocks ========================================= */
/* Hero memakai tiga perataan sekaligus: judul rata kiri, subjudul rata
   tengah, tombol rata kanan. Tidak ada satu sumbu yang dipatuhi. */
.tk-hero { position: relative; text-align: left; padding: var(--tk-space-section) var(--tk-space-lg) var(--tk-space-3xl) var(--tk-space-2xl); max-width: var(--tk-container); margin: 0 auto; box-sizing: border-box; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); font-family: var(--tk-ad-wrong); color: var(--tk-color-text-muted); margin: 0 auto var(--tk-space-xl); max-width: 560px; text-align: center; }
.tk-hero-actions { display: flex; gap: var(--tk-space-lg); flex-wrap: wrap; justify-content: flex-end; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-lg); }
/* Fitur tidak sejajar: yang kedua turun jauh, yang ketiga naik dan
   menabrak tetangganya. */
.tk-feature {
    display: flex;
    flex-direction: column;
    gap: var(--tk-space-sm);
    background: var(--tk-color-surface);
    border: 3px solid var(--tk-color-border);
    border-bottom-width: 8px;
    border-radius: var(--tk-radius);
    padding: var(--tk-space-xl) var(--tk-space-md) var(--tk-space-lg) var(--tk-space-xl);
    transition: transform var(--tk-transition), background var(--tk-transition);
}
.tk-feature:nth-child(3n+2) { transform: translateY(29px) rotate(1.2deg); }
.tk-feature:nth-child(3n) { transform: translateY(-17px) rotate(-1.6deg); }
.tk-feature:hover { background: var(--tk-color-primary-contrast); transform: translateY(0) rotate(0deg) scale(1.03); z-index: 2; }
.tk-feature-icon {
    width: 60px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    background: var(--tk-color-accent);
    color: var(--tk-color-text);
    transform: rotate(-6deg);
}
.tk-cta {
    position: relative;
    background: var(--tk-color-primary);
    border: 5px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow);
    color: var(--tk-color-primary-contrast);
    padding: var(--tk-space-3xl) var(--tk-space-2xl) var(--tk-space-3xl) var(--tk-space-3xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
    transform: rotate(-1.1deg);
}
.tk-cta .tk-h3, .tk-cta .tk-h2 { margin: 0; color: var(--tk-color-primary-contrast); }
.tk-cta .tk-muted { color: var(--tk-color-primary-contrast); }
.tk-cta .tk-btn-primary { background: var(--tk-color-primary-contrast); color: var(--tk-color-primary); }
.tk-cta .tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-accent); color: var(--tk-color-text); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: anti-design flavor ===================================== */
/* Penimpa karakter kit di atas struktur kontrak: menang kaskade karena
   berada di ekor berkas. Delapan perkakas untuk merusak halaman dengan
   sengaja — dipakai hemat, karena kalau semuanya miring tidak ada lagi
   yang terasa miring. */
/* Miringkan apa saja beberapa derajat. */
.tk-tilt { transform: rotate(var(--tk-ad-tilt)); }
.tk-tilt-alt { transform: rotate(var(--tk-ad-tilt-alt)); }
/* Geser keluar sumbu tempat elemen seharusnya duduk. */
.tk-offgrid { transform: translate(-17px, 11px); }
/* Tabrakkan elemen dengan tetangga di atasnya, lalu naikkan ke depan. */
.tk-overlap { position: relative; margin-top: -37px; margin-left: -23px; z-index: 3; }
/* Ukuran yang tidak proporsional terhadap apa pun di sekitarnya. */
.tk-oversize { font-family: var(--tk-font-heading); font-size: 3.4em; font-weight: 700; line-height: 0.78; letter-spacing: -0.05em; display: inline-block; vertical-align: -0.14em; }
/* Sepasang warna yang bergetar saat bersebelahan. */
.tk-clash { background: var(--tk-color-primary); color: var(--tk-color-accent); border: 4px solid var(--tk-color-border); border-radius: var(--tk-radius); padding: var(--tk-space-md) var(--tk-space-lg); }
/* Huruf yang memang sengaja salah tempat. */
.tk-wrong { font-family: var(--tk-ad-wrong); font-weight: 700; }
/* Huruf dipenyet mendatar sampai proporsinya rusak. */
.tk-squish { display: inline-block; transform: scaleX(0.58); transform-origin: left center; letter-spacing: 0.04em; }
/* Label yang ditempel begitu saja di pojok, menutupi apa pun di bawahnya. */
.tk-sticker {
    position: absolute;
    top: -15px;
    right: -21px;
    z-index: 4;
    font-family: var(--tk-ad-wrong);
    font-size: 15px;
    font-weight: 700;
    background: var(--tk-color-warning-soft);
    color: var(--tk-color-text);
    border: 3px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 4px 13px 6px 9px;
    transform: rotate(9deg);
}
/* Gambar tidak pernah rata di dalam kotaknya. */
.tk-card img, .tk-feature img { display: block; width: 100%; }
img { image-rendering: auto; }
@media (max-width: 860px) {
    /* Di layar sempit kemiringan fitur dilepas supaya kolom tunggalnya tidak
       saling menimpa — kekacauan tetap dirancang, bukan dibiarkan. */
    .tk-feature:nth-child(3n+2), .tk-feature:nth-child(3n) { transform: none; }
    .tk-hero { padding-left: var(--tk-space-lg); }
}
@media (prefers-reduced-motion: reduce) {
    .tk-btn, .tk-card, .tk-feature, .tk-option, .tk-dropdown-item, .tk-action-btn, .tk-sidebar-item { transition: none; }
    .tk-spinner, .tk-skeleton, .tk-btn-loading::after { animation: none; }
}
`;
