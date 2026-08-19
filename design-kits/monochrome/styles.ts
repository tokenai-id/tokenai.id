/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const MONOCHROME_STYLES = `/* Monochrome — kit design TOKENAI.
   Satu keluarga warna saja: tangga nada dari kertas ke tinta, tanpa satu pun rona.
   Karena warna tidak tersedia sebagai alat, yang bekerja tinggal tipografi, komposisi,
   jarak, dan foto — termasuk untuk membedakan status, yang di sini dibedakan lewat nada,
   bentuk, dan ikon, bukan hijau-kuning-merah.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    /* Tangga nada — satu-satunya sumber warna kit ini. Angkanya berarti "jarak dari
       latar": 0 sama dengan warna kertas, 900 sama dengan tinta paling pekat. Di mode
       gelap seluruh tangga dibalik nilainya tetapi artinya tidak berubah, sehingga
       komponen yang menyebut nada tertentu ikut membalik sendiri tanpa ditulis ulang.
       Nadanya sedikit dingin (rona biru di bawah 4%) seperti cetak perak-gelatin;
       abu-abu yang benar-benar netral cenderung terlihat mati di layar. */
    --tk-mo-0: #FFFFFF;
    --tk-mo-50: #F4F4F5;
    --tk-mo-100: #EDEDEF;
    --tk-mo-200: #DCDCE0;
    --tk-mo-300: #C2C2C8;
    --tk-mo-400: #A0A0A8;
    --tk-mo-500: #83838B;
    --tk-mo-600: #62626A;
    --tk-mo-700: #43434A;
    --tk-mo-800: #29292E;
    --tk-mo-900: #131316;
    /* Dua nada yang sengaja TIDAK ikut membalik, untuk elemen yang memang diminta
       gelap apa pun temanya (bilah gelap, hamparan di atas foto). */
    --tk-mo-ink-fixed: #131316;
    --tk-mo-paper-fixed: #FFFFFF;

    --tk-color-primary: #131316;
    --tk-color-primary-hover: #000000;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: #62626A;
    --tk-color-secondary-hover: #43434A;
    --tk-color-secondary-contrast: #FFFFFF;
    --tk-color-accent: #A0A0A8;
    --tk-color-background: #F4F4F5;
    --tk-color-surface: #FFFFFF;
    --tk-color-surface-2: #EDEDEF;
    --tk-color-text: #131316;
    --tk-color-text-muted: #62626A;
    --tk-color-border: #DCDCE0;
    /* Warna semantik pun tidak berona. Yang membedakan keempatnya adalah nada latar,
       tebal garis penanda, dan ikonnya — cara yang justru lebih aman daripada rona,
       karena tetap terbaca oleh mata yang tidak membedakan warna. */
    --tk-color-success: #131316;
    --tk-color-success-soft: #FFFFFF;
    --tk-color-warning: #131316;
    --tk-color-warning-soft: #DCDCE0;
    --tk-color-danger: #131316;
    --tk-color-danger-soft: #131316;
    --tk-color-info: #62626A;
    --tk-color-info-soft: #EDEDEF;

    --tk-font-heading: 'Epilogue', system-ui, sans-serif;
    --tk-font-body: 'Instrument Sans', system-ui, sans-serif;
    --tk-font-mono: 'Roboto Mono', ui-monospace, monospace;
    --tk-weight-heading: 700;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.04;
    --tk-leading-body: 1.65;

    --tk-text-display: 76px;
    --tk-text-h1: 54px;
    --tk-text-h2: 38px;
    --tk-text-h3: 27px;
    --tk-text-h4: 20px;
    --tk-text-title: 17px;
    --tk-text-body-lg: 19px;
    --tk-text-body: 16px;
    --tk-text-body-sm: 14px;
    --tk-text-caption: 12px;

    --tk-space-xs: 4px;
    --tk-space-sm: 8px;
    --tk-space-md: 16px;
    --tk-space-lg: 24px;
    --tk-space-xl: 32px;
    --tk-space-2xl: 48px;
    --tk-space-3xl: 80px;
    /* Jarak antarseksi sengaja jauh: ruang kosong adalah satu-satunya "warna kedua"
       yang dimiliki kit ini. */
    --tk-space-section: 120px;

    /* Nol di semua tingkat — tidak ada sudut yang dilunakkan. Radius bulat penuh tetap
       didefinisikan karena radio dan spinner memang menuntut lingkaran, dan komponen
       kit lain yang ditimpakan akan membacanya. */
    --tk-radius-sm: 0;
    --tk-radius: 0;
    --tk-radius-lg: 0;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    /* Kedalaman datang dari nada, bukan dari kabur. Hanya lapisan yang benar-benar
       melayang (modal, menu) yang punya bayangan, dan bayangannya pun abu netral. */
    --tk-shadow-sm: none;
    --tk-shadow: 0 1px 2px rgba(19, 19, 22, 0.05);
    --tk-shadow-lg: 0 28px 64px rgba(19, 19, 22, 0.16);

    --tk-transition: 200ms cubic-bezier(0.2, 0, 0, 1);
    --tk-container: 1180px;

    /* Token khas monochrome (bukan kontrak). */
    /* Arsir: satu-satunya "tekstur" kit. Dipakai untuk status paling berat (danger)
       supaya bidang tinta itu tetap bisa dibedakan dari bidang tinta biasa — persis
       cara ukiran dan cetak satu tinta membedakan bidang tanpa bantuan warna. */
    --tk-mo-hatch: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 0 5px, rgba(255, 255, 255, 0.16) 5px 6px);
    /* Garis struktur: hairline 1px untuk pemisah biasa, 2px untuk penanda seksi. */
    --tk-mo-rule: 2px;
    /* Jarak huruf label kapital — lebar, supaya kapital kecil tetap terbaca. */
    --tk-mo-track: 0.18em;
    /* Perlakuan foto: seluruh imagery dipaksa tak berona lalu kontrasnya dinaikkan
       sedikit, karena foto berwarna akan langsung membatalkan premis kit ini. */
    --tk-mo-photo: grayscale(1) contrast(1.06);
    --tk-mo-photo-hover: grayscale(1) contrast(1.16);
    /* Teks di atas latar lunak semantik — ikut berganti di mode gelap. */
    --tk-mo-on-success-soft: #131316;
    --tk-mo-on-warning-soft: #131316;
    --tk-mo-on-danger-soft: #FFFFFF;
    --tk-mo-on-info-soft: #43434A;
}

/* Mode gelap — negatif dari cetakannya: tangga nada dibalik nilainya, arti tiap anak
   tangga tetap sama, sehingga tidak ada satu pun komponen yang perlu ditulis ulang.
   Aktifkan dengan atribut data-tk-theme="dark" pada <html> atau <body>. */
[data-tk-theme="dark"] {
    --tk-mo-0: #0B0B0D;
    --tk-mo-50: #131316;
    --tk-mo-100: #1C1C20;
    --tk-mo-200: #2C2C32;
    --tk-mo-300: #43434A;
    --tk-mo-400: #62626A;
    --tk-mo-500: #83838B;
    --tk-mo-600: #A6A6AE;
    --tk-mo-700: #C7C7CD;
    --tk-mo-800: #E4E4E8;
    --tk-mo-900: #FAFAFA;

    --tk-color-primary: #FAFAFA;
    --tk-color-primary-hover: #FFFFFF;
    --tk-color-primary-contrast: #0B0B0D;
    --tk-color-secondary: #A6A6AE;
    --tk-color-secondary-hover: #C7C7CD;
    --tk-color-secondary-contrast: #0B0B0D;
    --tk-color-accent: #62626A;
    --tk-color-background: #0B0B0D;
    --tk-color-surface: #131316;
    --tk-color-surface-2: #1C1C20;
    --tk-color-text: #F4F4F5;
    --tk-color-text-muted: #A6A6AE;
    --tk-color-border: #2C2C32;
    --tk-color-success: #FAFAFA;
    --tk-color-success-soft: #0B0B0D;
    --tk-color-warning: #FAFAFA;
    --tk-color-warning-soft: #2C2C32;
    --tk-color-danger: #FAFAFA;
    --tk-color-danger-soft: #FAFAFA;
    --tk-color-info: #A6A6AE;
    --tk-color-info-soft: #1C1C20;

    --tk-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    --tk-shadow-lg: 0 28px 64px rgba(0, 0, 0, 0.7);

    /* Arsirnya ikut membalik: garis gelap di atas bidang terang. */
    --tk-mo-hatch: repeating-linear-gradient(45deg, rgba(0, 0, 0, 0) 0 5px, rgba(0, 0, 0, 0.2) 5px 6px);
    /* Foto di atas latar tinta dibuat sedikit lebih redup supaya putihnya tidak menyilaukan. */
    --tk-mo-photo: grayscale(1) contrast(1.02) brightness(0.9);
    --tk-mo-photo-hover: grayscale(1) contrast(1.12) brightness(0.98);
    --tk-mo-on-success-soft: #FAFAFA;
    --tk-mo-on-warning-soft: #FAFAFA;
    --tk-mo-on-danger-soft: #0B0B0D;
    --tk-mo-on-info-soft: #C7C7CD;
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
.tk-container {
    max-width: var(--tk-container);
    margin: 0 auto;
    padding: 0 var(--tk-space-lg);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }
::selection { background: var(--tk-color-text); color: var(--tk-color-background); }

/* == tk: typography ============================================= */
/* Hurufnya yang memikul seluruh identitas: Epilogue dirapatkan jauh di ukuran besar
   sampai kata terbaca sebagai satu bidang gelap, bukan deretan huruf. */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    letter-spacing: -0.03em;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
    text-wrap: balance;
}
.tk-display { font-size: var(--tk-text-display); font-weight: 800; letter-spacing: -0.045em; }
.tk-h1 { font-size: var(--tk-text-h1); font-weight: 800; letter-spacing: -0.04em; }
.tk-h2 { font-size: var(--tk-text-h2); letter-spacing: -0.035em; }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); letter-spacing: -0.02em; }
.tk-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-title); font-weight: 600; letter-spacing: -0.015em; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); line-height: 1.6; }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-family: var(--tk-font-mono); font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); letter-spacing: 0.02em; }
.tk-muted { color: var(--tk-color-text-muted); }
/* Tautan bergaris bawah tipis yang menebal saat disorot — tanpa warna, tebal garis
   itulah satu-satunya cara memberi tahu bahwa sesuatu bisa diklik. */
.tk-link {
    color: var(--tk-color-text);
    font-weight: 500;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
    text-decoration-color: var(--tk-mo-300);
    transition: text-decoration-thickness var(--tk-transition), text-decoration-color var(--tk-transition);
}
.tk-link:hover { text-decoration-thickness: 3px; text-decoration-color: currentColor; }
.tk-code {
    font-family: var(--tk-font-mono);
    font-size: 0.85em;
    background: var(--tk-color-surface-2);
    border: 1px solid var(--tk-color-border);
    padding: 2px 7px;
}

/* == tk: button ================================================= */
/* Tombol tidak punya sudut, tidak punya bayangan, dan tidak punya warna: yang
   membedakan tingkatannya cuma bobot nada — tinta penuh, grafit, garis, lalu tanpa
   bidang sama sekali. */
.tk-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-body);
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.01em;
    padding: 15px 26px;
    border: 1px solid transparent;
    border-radius: var(--tk-radius);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), border-color var(--tk-transition), opacity var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:disabled { opacity: 0.35; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); }
/* Danger memakai arsir: bidang tintanya sama pekat dengan tombol utama, tetapi
   permukaannya bergaris sehingga tetap terbaca sebagai tindakan yang lain. */
.tk-btn-danger { background-color: var(--tk-color-danger); background-image: var(--tk-mo-hatch); color: var(--tk-mo-on-danger-soft); }
.tk-btn-danger:hover:not(:disabled) { background-color: var(--tk-mo-800); }
.tk-btn-outline { background: transparent; border-color: var(--tk-color-text); color: var(--tk-color-text); }
.tk-btn-outline:hover:not(:disabled) { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-text { background: none; color: var(--tk-color-text); padding-left: 4px; padding-right: 4px; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 4px; text-decoration-color: var(--tk-mo-300); }
.tk-btn-text:hover:not(:disabled) { text-decoration-thickness: 3px; text-decoration-color: currentColor; }
.tk-btn-sm { font-size: 12px; padding: 10px 18px; }
.tk-btn-lg { font-size: 16px; padding: 19px 34px; }
.tk-btn-icon { padding: 14px; }
.tk-btn-loading { position: relative; color: transparent !important; pointer-events: none; }
.tk-btn-loading::before {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    border: 2px solid var(--tk-color-primary-contrast);
    border-top-color: transparent;
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.8s linear infinite;
    z-index: 1;
}
.tk-btn-outline.tk-btn-loading::before, .tk-btn-ghost.tk-btn-loading::before, .tk-btn-text.tk-btn-loading::before {
    border-color: var(--tk-color-text);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
.tk-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: var(--tk-space-md); }
/* Label ditulis kapital kecil berjarak lebar — sekaligus penanda hierarki tanpa warna. */
.tk-label {
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: var(--tk-mo-track);
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
}
.tk-help { font-size: 13px; color: var(--tk-color-text-muted); }
/* Field adalah garis, bukan kotak: tiga sisinya sengaja dibiarkan hilang sampai
   fokus, meninggalkan satu garis dasar seperti isian formulir cetak. */
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: transparent;
    border: 1px solid transparent;
    border-bottom-color: var(--tk-color-border);
    border-radius: var(--tk-radius);
    padding: 12px 2px;
    transition: border-color var(--tk-transition), background var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-mo-400); }
.tk-input:hover, .tk-textarea:hover, .tk-select-trigger:hover { border-bottom-color: var(--tk-mo-400); }
.tk-input:focus, .tk-textarea:focus {
    border-bottom-color: var(--tk-color-text);
    border-bottom-width: var(--tk-mo-rule);
    padding-bottom: 11px;
}
.tk-textarea { min-height: 104px; resize: vertical; }
/* Error dan success juga tanpa rona: yang berubah adalah tebal garis dan tanda di
   depan teks bantuannya. */
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-bottom: var(--tk-mo-rule) solid var(--tk-color-text);
    background: var(--tk-color-surface-2);
    padding-bottom: 11px;
}
.tk-field-error .tk-help { color: var(--tk-color-text); font-weight: 600; }
.tk-field-error .tk-help::before { content: '\\2715\\00a0\\00a0'; font-family: var(--tk-font-mono); }
.tk-field-success .tk-input { border-bottom: var(--tk-mo-rule) solid var(--tk-color-text); padding-bottom: 11px; }
.tk-field-success .tk-help { color: var(--tk-color-text); font-weight: 600; }
.tk-field-success .tk-help::before { content: '\\2713\\00a0\\00a0'; font-family: var(--tk-font-mono); }
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
    font-weight: 500;
}
.tk-select-trigger > iconify-icon { color: var(--tk-color-text-muted); flex: none; }
.tk-select-placeholder { color: var(--tk-mo-400); font-weight: 400; }
.tk-select:focus-within > .tk-select-trigger, .tk-select-open > .tk-select-trigger {
    border-bottom: var(--tk-mo-rule) solid var(--tk-color-text);
    padding-bottom: 11px;
}
.tk-select-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-text);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg);
    padding: 5px;
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
    padding: 10px 12px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: var(--tk-radius);
    cursor: pointer;
    text-align: left;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-option:hover { background: var(--tk-color-surface-2); }
.tk-option-selected { background: var(--tk-color-text); color: var(--tk-color-background); font-weight: 600; }
.tk-option-selected:hover { background: var(--tk-color-text); }
.tk-option-check { margin-left: auto; display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 9px 12px;
    margin-bottom: 5px;
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
.tk-select-menu-search input::placeholder { color: var(--tk-mo-400); }
.tk-select-menu-footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-sm) 4px 2px;
    margin-top: var(--tk-space-xs);
    border-top: 1px solid var(--tk-color-border);
}
.tk-check { display: inline-flex; align-items: center; gap: 10px; font-size: var(--tk-text-body-sm); cursor: pointer; }
.tk-checkbox, .tk-radio {
    appearance: none;
    width: 18px;
    height: 18px;
    flex: none;
    margin: 0;
    position: relative;
    background: transparent;
    border: 1px solid var(--tk-mo-400);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition);
}
.tk-checkbox { border-radius: var(--tk-radius); }
.tk-checkbox:checked { background: var(--tk-color-text); border-color: var(--tk-color-text); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 5.5px;
    top: 2px;
    width: 4px;
    height: 9px;
    border-right: 2px solid var(--tk-color-background);
    border-bottom: 2px solid var(--tk-color-background);
    transform: rotate(45deg);
}
/* Radio tetap bulat — satu-satunya lengkung di kit ini, dan itu karena bentuk bulat
   adalah bagian dari arti radio, bukan hiasan. */
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked { border-color: var(--tk-color-text); background: var(--tk-color-text); box-shadow: inset 0 0 0 3px var(--tk-color-surface); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: 2px solid var(--tk-color-text);
    outline-offset: 2px;
}
/* Toggle pun persegi: kenopnya blok tinta yang bergeser di dalam rel bergaris. */
.tk-toggle {
    position: relative;
    width: 46px;
    height: 24px;
    flex: none;
    margin: 0;
    appearance: none;
    background: transparent;
    border: 1px solid var(--tk-mo-400);
    border-radius: var(--tk-radius);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition);
}
.tk-toggle::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 16px;
    height: 16px;
    background: var(--tk-mo-400);
    transition: transform var(--tk-transition), background var(--tk-transition);
}
.tk-toggle:checked { border-color: var(--tk-color-text); background: var(--tk-color-text); }
.tk-toggle:checked::after { transform: translateX(22px); background: var(--tk-color-background); }

/* == tk: search-filter ========================================== */
.tk-search { position: relative; display: flex; align-items: center; min-width: 220px; }
.tk-search .tk-input { width: 100%; padding-left: 26px; padding-right: 64px; }
.tk-search .tk-input::-webkit-search-cancel-button { -webkit-appearance: none; }
.tk-search-icon { position: absolute; left: 0; display: inline-flex; color: var(--tk-color-text-muted); pointer-events: none; }
.tk-search-kbd {
    position: absolute;
    right: 0;
    font-family: var(--tk-font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    color: var(--tk-color-text-muted);
    border: 1px solid var(--tk-color-border);
    padding: 3px 7px;
    pointer-events: none;
}
.tk-filter-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--tk-space-md);
    padding: var(--tk-space-sm) var(--tk-space-md) var(--tk-space-md);
    border-top: var(--tk-mo-rule) solid var(--tk-color-text);
    border-bottom: 1px solid var(--tk-color-border);
}
.tk-filter-bar .tk-search { flex: 1; }
.tk-filter-bar .tk-select { min-width: 160px; }
.tk-filter-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    background: var(--tk-color-text);
    color: var(--tk-color-background);
    font-family: var(--tk-font-mono);
    font-size: 10px;
    font-weight: 500;
}
.tk-filter-active { display: flex; flex-wrap: wrap; align-items: center; gap: var(--tk-space-sm); margin-top: var(--tk-space-md); }

/* == tk: dropdown =============================================== */
.tk-dropdown { position: relative; display: inline-block; }
.tk-dropdown-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-text);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg);
    padding: 5px;
    max-height: 280px;
    overflow: auto;
    display: none;
    flex-direction: column;
    z-index: 30;
}
.tk-dropdown-menu-right { left: auto; right: 0; }
.tk-dropdown-menu-up { top: auto; bottom: calc(100% + 6px); }
.tk-dropdown-open > .tk-dropdown-menu, .tk-dropdown:focus-within > .tk-dropdown-menu { display: flex; }
.tk-dropdown-label {
    padding: 8px 12px 6px;
    font-family: var(--tk-font-mono);
    font-size: 10px;
    letter-spacing: var(--tk-mo-track);
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
}
.tk-dropdown-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: var(--tk-radius);
    cursor: pointer;
    text-align: left;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-dropdown-item:hover { background: var(--tk-color-text); color: var(--tk-color-background); }
.tk-dropdown-item iconify-icon { color: currentColor; flex: none; }
/* Aksi merusak dibedakan dengan arsir tipis, bukan dengan merah. */
.tk-dropdown-item-danger { font-weight: 600; }
.tk-dropdown-item-danger:hover { background: var(--tk-color-text); color: var(--tk-color-background); background-image: var(--tk-mo-hatch); }
.tk-dropdown-divider { height: 1px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) 0; }

/* == tk: card =================================================== */
/* Kartu adalah bidang kertas berpinggir hairline. Tidak melayang, tidak naik saat
   disorot — yang berubah cuma pinggirnya menghitam. */
.tk-card {
    position: relative;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    transition: border-color var(--tk-transition);
}
.tk-card:hover { border-color: var(--tk-color-text); }
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-md); flex-wrap: wrap; }
.tk-card-stat .tk-stat-value {
    font-family: var(--tk-font-heading);
    font-size: var(--tk-text-h2);
    font-weight: 800;
    letter-spacing: -0.04em;
    color: var(--tk-color-text);
}
/* Tren naik dan turun tidak bisa dibedakan dengan hijau-merah di sini, jadi
   dibedakan dengan segitiga arah dan bobot nada. */
.tk-card-stat .tk-stat-trend-up, .tk-card-stat .tk-stat-trend-down {
    font-family: var(--tk-font-mono);
    font-size: 11px;
    letter-spacing: 0.02em;
}
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-text); font-weight: 500; }
.tk-card-stat .tk-stat-trend-up::before { content: '\\25B2\\00a0\\00a0'; font-size: 8px; vertical-align: 1px; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-text-muted); }
.tk-card-stat .tk-stat-trend-down::before { content: '\\25BC\\00a0\\00a0'; font-size: 8px; vertical-align: 1px; }

/* == tk: navigation ============================================= */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: 1px solid var(--tk-color-border);
    position: relative;
    z-index: 5;
}
.tk-navbar-brand {
    font-family: var(--tk-font-heading);
    font-weight: 800;
    font-size: 17px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-right: auto;
    color: var(--tk-color-text);
}
/* Tautan aktif ditandai garis bawah tebal, bukan bidang berwarna. */
.tk-navbar-link {
    color: var(--tk-color-text-muted);
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.04em;
    padding: 6px 0;
    border-bottom: var(--tk-mo-rule) solid transparent;
    transition: color var(--tk-transition), border-color var(--tk-transition);
}
.tk-navbar-link:hover { color: var(--tk-color-text); border-bottom-color: var(--tk-mo-300); }
.tk-navbar-link-active { color: var(--tk-color-text); border-bottom-color: var(--tk-color-text); font-weight: 600; }
/* Navbar gelap dipatok ke tinta sungguhan, bukan ke anak tangga yang membalik: ia
   dipakai orang yang memang meminta bilah gelap, jadi ia tetap gelap di kedua mode. */
.tk-navbar-dark { background: var(--tk-mo-ink-fixed); border-bottom-color: #35353B; }
.tk-navbar-dark .tk-navbar-brand { color: var(--tk-mo-paper-fixed); }
.tk-navbar-dark .tk-navbar-link { color: #A0A0A8; }
.tk-navbar-dark .tk-navbar-link:hover { color: var(--tk-mo-paper-fixed); border-bottom-color: #62626A; }
.tk-navbar-dark .tk-navbar-link-active { color: var(--tk-mo-paper-fixed); border-bottom-color: var(--tk-mo-paper-fixed); }
.tk-navbar-dark .tk-btn-primary { background: var(--tk-mo-paper-fixed); color: var(--tk-mo-ink-fixed); }
.tk-navbar-dark .tk-btn-ghost { color: var(--tk-mo-paper-fixed); }
.tk-navbar-dark .tk-btn-ghost:hover:not(:disabled) { background: #29292E; }
.tk-navbar-dark .tk-btn-outline { color: var(--tk-mo-paper-fixed); border-color: #62626A; }
.tk-navbar-dark .tk-btn-outline:hover:not(:disabled) { background: var(--tk-mo-paper-fixed); color: var(--tk-mo-ink-fixed); }
.tk-sidebar {
    width: 244px;
    background: var(--tk-color-surface);
    border-right: 1px solid var(--tk-color-border);
    padding: var(--tk-space-md);
    display: flex;
    flex-direction: column;
    gap: 1px;
    transition: width var(--tk-transition);
    position: relative;
    z-index: 4;
}
/* Butir sidebar aktif memakai rel tinta di sisi kiri — penanda posisi yang tidak
   membutuhkan warna sama sekali. */
.tk-sidebar-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px var(--tk-space-md);
    border-left: var(--tk-mo-rule) solid transparent;
    color: var(--tk-color-text-muted);
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition), border-color var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-sidebar-item-active { color: var(--tk-color-text); border-left-color: var(--tk-color-text); font-weight: 600; background: var(--tk-color-surface-2); }
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 68px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: 10px; }
.tk-sidebar-group {
    padding: var(--tk-space-lg) var(--tk-space-md) 6px;
    font-family: var(--tk-font-mono);
    font-size: 10px;
    letter-spacing: var(--tk-mo-track);
    text-transform: uppercase;
    color: var(--tk-mo-400);
}
.tk-sidebar-group:first-child { padding-top: var(--tk-space-xs); }
.tk-breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    font-family: var(--tk-font-mono);
    font-size: 11px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}
.tk-breadcrumb a { color: var(--tk-color-text-muted); text-decoration: none; }
.tk-breadcrumb a:hover { color: var(--tk-color-text); text-decoration: underline; text-underline-offset: 3px; }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-mo-300); }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 500; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-bottom: 1px solid var(--tk-color-border);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: var(--tk-space-xl); border-bottom: 1px solid var(--tk-color-border); max-width: 100%; overflow-x: auto; }
.tk-tab {
    padding: 12px 0;
    font-family: var(--tk-font-mono);
    font-size: 11px;
    letter-spacing: var(--tk-mo-track);
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-bottom: var(--tk-mo-rule) solid transparent;
    margin-bottom: -1px;
    transition: color var(--tk-transition), border-color var(--tk-transition);
    white-space: nowrap;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-text); border-bottom-color: var(--tk-color-text); }
.tk-segmented { display: inline-flex; border: 1px solid var(--tk-color-text); }
.tk-segment {
    padding: 9px 18px;
    font-family: var(--tk-font-body);
    font-size: 13px;
    font-weight: 500;
    color: var(--tk-color-text);
    border: none;
    background: transparent;
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-segment + .tk-segment { border-left: 1px solid var(--tk-color-text); }
.tk-segment:hover { background: var(--tk-color-surface-2); }
.tk-segment-active { background: var(--tk-color-text); color: var(--tk-color-background); font-weight: 600; }
.tk-segment-active:hover { background: var(--tk-color-text); }

/* == tk: badge ================================================== */
/* Empat status, empat perlakuan bidang yang berbeda: bergaris tinta (success),
   blok abu (warning), tinta berarsir (danger), dan abu paling pucat (info).
   Bisa dibedakan sekilas tanpa satu pun rona. */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--tk-font-mono);
    font-size: 10px;
    font-weight: 500;
    letter-spacing: var(--tk-mo-track);
    text-transform: uppercase;
    padding: 5px 10px;
    border: 1px solid var(--tk-color-border);
    background: var(--tk-color-surface);
    color: var(--tk-color-text);
}
.tk-badge-success { background: var(--tk-color-success-soft); color: var(--tk-mo-on-success-soft); border-color: var(--tk-color-text); }
.tk-badge-warning { background: var(--tk-color-warning-soft); color: var(--tk-mo-on-warning-soft); border-color: transparent; }
.tk-badge-danger { background: var(--tk-color-danger-soft); background-image: var(--tk-mo-hatch); color: var(--tk-mo-on-danger-soft); border-color: transparent; }
.tk-badge-info { background: var(--tk-color-info-soft); color: var(--tk-mo-on-info-soft); border-color: transparent; }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    padding: 5px 10px;
    border: 1px solid var(--tk-color-border);
    background: var(--tk-color-surface);
    color: var(--tk-color-text);
}
.tk-chip-remove { border: none; background: none; cursor: pointer; color: var(--tk-color-text-muted); font-size: 14px; line-height: 1; padding: 0; }
.tk-chip-remove:hover { color: var(--tk-color-text); }

/* == tk: alert ================================================== */
/* Pola yang sama seperti badge, ditambah rel kiri yang tebalnya berbeda per tingkat
   dan ikon yang selalu ikut — status tidak pernah bergantung pada satu isyarat saja. */
.tk-alert {
    display: flex;
    gap: var(--tk-space-md);
    align-items: flex-start;
    padding: var(--tk-space-md) var(--tk-space-lg);
    border: 1px solid var(--tk-color-border);
    border-left-width: 4px;
    border-left-color: var(--tk-color-text);
    border-radius: var(--tk-radius);
    font-size: var(--tk-text-body-sm);
    background: var(--tk-color-surface);
}
.tk-alert iconify-icon { flex: none; margin-top: 2px; }
.tk-alert-title { font-weight: 700; display: block; margin-bottom: 2px; }
.tk-alert-success { background: var(--tk-color-success-soft); color: var(--tk-mo-on-success-soft); border-color: var(--tk-color-text); }
.tk-alert-warning { background: var(--tk-color-warning-soft); color: var(--tk-mo-on-warning-soft); border-color: transparent; border-left-color: var(--tk-color-text); }
.tk-alert-danger { background: var(--tk-color-danger-soft); background-image: var(--tk-mo-hatch); color: var(--tk-mo-on-danger-soft); border-color: transparent; border-left-color: var(--tk-mo-on-danger-soft); }
.tk-alert-info { background: var(--tk-color-info-soft); color: var(--tk-mo-on-info-soft); border-color: transparent; border-left-width: 1px; border-left-color: var(--tk-mo-400); }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: collapse; font-size: var(--tk-text-body-sm); }
.tk-table th {
    text-align: left;
    font-family: var(--tk-font-mono);
    font-weight: 500;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: var(--tk-mo-track);
    color: var(--tk-color-text-muted);
    padding: var(--tk-space-sm) var(--tk-space-md);
    border-bottom: var(--tk-mo-rule) solid var(--tk-color-text);
}
.tk-table td { padding: 14px var(--tk-space-md); border-bottom: 1px solid var(--tk-color-border); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: var(--tk-color-surface-2); }
.tk-table .tk-table-actions { text-align: right; white-space: nowrap; }
.tk-action-btn {
    width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    background: none;
    border-radius: var(--tk-radius);
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), border-color var(--tk-transition);
}
.tk-action-btn:hover { border-color: var(--tk-color-text); color: var(--tk-color-text); }
.tk-action-btn-danger:hover { background: var(--tk-color-text); background-image: var(--tk-mo-hatch); color: var(--tk-color-background); border-color: var(--tk-color-text); }
.tk-pagination { display: flex; gap: 4px; align-items: center; }
.tk-page {
    min-width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    background: none;
    font-family: var(--tk-font-mono);
    font-size: 12px;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), border-color var(--tk-transition);
}
.tk-page:hover { border-color: var(--tk-color-border); color: var(--tk-color-text); }
.tk-page-active { background: var(--tk-color-text); color: var(--tk-color-background); border-color: var(--tk-color-text); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(19, 19, 22, 0.62);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-text);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg);
    max-width: 460px;
    width: 100%;
}
.tk-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 372px;
    background: var(--tk-color-surface);
    border-left: 1px solid var(--tk-color-text);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 26px;
    height: 26px;
    border: 2px solid var(--tk-color-border);
    border-top-color: var(--tk-color-text);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.8s linear infinite;
}
.tk-progress { height: 6px; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); overflow: hidden; }
.tk-progress-bar { height: 100%; background: var(--tk-color-text); transition: width var(--tk-transition); }
/* Skeleton menyapu satu nada lebih gelap — tanpa kilau, tanpa gradien berwarna. */
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-mo-100) 25%, var(--tk-mo-200) 50%, var(--tk-mo-100) 75%);
    background-size: 200% 100%;
    animation: tk-shimmer 1.6s infinite;
}
@keyframes tk-shimmer { to { background-position: -200% 0; } }

/* == tk: empty ================================================== */
.tk-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: var(--tk-space-3xl) var(--tk-space-lg);
    text-align: center;
    border: 1px solid var(--tk-color-border);
    background: var(--tk-color-surface);
}
.tk-empty-icon {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--tk-color-text);
    color: var(--tk-color-text);
}
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: 700; font-size: var(--tk-text-h4); letter-spacing: -0.02em; margin: 0; }

/* == tk: content-blocks ========================================= */
/* Hero adalah komposisi, bukan bidang berwarna: satu garis tebal di puncak, label
   kapital kecil, lalu judul sebesar mungkin yang dirapatkan. */
.tk-hero {
    position: relative;
    padding: var(--tk-space-3xl) var(--tk-space-lg) var(--tk-space-3xl);
    border-top: var(--tk-mo-rule) solid var(--tk-color-text);
    background: var(--tk-color-background);
}
.tk-hero > * { max-width: 940px; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); margin: 0 0 var(--tk-space-xl); max-width: 56ch; }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); flex-wrap: wrap; }
/* Fitur bukan kartu melainkan kolom teks di bawah garis — cara koran menyusun
   beberapa hal setara tanpa perlu satu pun kotak berwarna. Garis di atas dipilih
   ketimbang garis di antara kolom karena ia tetap benar berapa pun jumlah kolomnya. */
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-xl); }
.tk-feature {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: var(--tk-space-md);
    border-top: var(--tk-mo-rule) solid var(--tk-color-text);
}
.tk-feature-icon {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--tk-color-text);
    color: var(--tk-color-text);
    margin-bottom: 6px;
}
.tk-cta {
    background: var(--tk-mo-900);
    color: var(--tk-mo-0);
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
    flex-wrap: wrap;
}
.tk-cta .tk-h3, .tk-cta .tk-h2 { margin: 0; color: var(--tk-mo-0); }
.tk-cta .tk-muted { color: var(--tk-mo-400); }
.tk-cta .tk-btn-primary { background: var(--tk-mo-0); color: var(--tk-mo-900); }
.tk-cta .tk-btn-primary:hover:not(:disabled) { background: var(--tk-mo-200); }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: monochrome flavor ====================================== */
/* Enam perkakas yang menggantikan peran warna. Menang kaskade karena berada di ekor
   berkas. Semuanya bekerja dengan bahan yang sama: nada, garis, huruf, dan foto. */
/* Label kapital kecil berjarak lebar — penanda hierarki paling murah di kit tanpa warna. */
.tk-caps {
    font-family: var(--tk-font-mono);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: var(--tk-mo-track);
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
}
/* Garis seksi bernomor: perkakas komposisi utama halaman panjang. */
.tk-rule {
    display: flex;
    align-items: baseline;
    gap: var(--tk-space-md);
    padding-top: var(--tk-space-sm);
    border-top: var(--tk-mo-rule) solid var(--tk-color-text);
    margin-bottom: var(--tk-space-xl);
}
.tk-rule-num {
    font-family: var(--tk-font-mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    color: var(--tk-color-text-muted);
    flex: none;
}
/* Lebar baca dikunci: 62 karakter, batas nyaman mata untuk teks panjang. */
.tk-measure { max-width: 62ch; }
/* Negatif: sepotong halaman yang nadanya dibalik, cara kit ini "menyorot" tanpa warna. */
.tk-negative {
    background: var(--tk-mo-900);
    color: var(--tk-mo-0);
}
.tk-negative .tk-display, .tk-negative .tk-h1, .tk-negative .tk-h2, .tk-negative .tk-h3, .tk-negative .tk-h4, .tk-negative .tk-title { color: var(--tk-mo-0); }
.tk-negative .tk-muted, .tk-negative .tk-caption, .tk-negative .tk-caps { color: var(--tk-mo-400); }
.tk-negative .tk-btn-outline { border-color: var(--tk-mo-0); color: var(--tk-mo-0); }
.tk-negative .tk-btn-outline:hover:not(:disabled) { background: var(--tk-mo-0); color: var(--tk-mo-900); }
.tk-negative .tk-btn-primary { background: var(--tk-mo-0); color: var(--tk-mo-900); }
.tk-negative .tk-btn-primary:hover:not(:disabled) { background: var(--tk-mo-200); }
/* Arsir sebagai bidang mandiri — dipakai untuk menandai area tanpa memberinya warna. */
.tk-hatch { background-color: var(--tk-mo-900); background-image: var(--tk-mo-hatch); color: var(--tk-mo-0); }
/* Pigura foto: hairline, caption mono di bawahnya, dan gambar yang selalu tak berona. */
.tk-frame { display: block; margin: 0; }
.tk-frame img { display: block; width: 100%; height: auto; filter: var(--tk-mo-photo); transition: filter var(--tk-transition); }
.tk-frame:hover img { filter: var(--tk-mo-photo-hover); }
.tk-frame figcaption, .tk-frame-caption {
    display: flex;
    justify-content: space-between;
    gap: var(--tk-space-md);
    margin-top: 10px;
    padding-top: 8px;
    border-top: 1px solid var(--tk-color-border);
    font-family: var(--tk-font-mono);
    font-size: 11px;
    letter-spacing: 0.02em;
    color: var(--tk-color-text-muted);
}
/* Halftone: foto dilewatkan kisi titik seperti cetak koran. Titiknya bukan mode
   pencampuran melainkan bidang tinta ber-mask, supaya ia ikut membalik sendiri di
   mode gelap — di sana yang menimpa foto adalah titik-titik kertas, bukan tinta. */
.tk-halftone { position: relative; display: block; overflow: hidden; }
.tk-halftone img { display: block; width: 100%; height: auto; filter: grayscale(1) contrast(1.35); }
.tk-halftone::after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--tk-mo-900);
    -webkit-mask-image: radial-gradient(circle, #000 32%, transparent 34%);
    -webkit-mask-size: 4px 4px;
    mask-image: radial-gradient(circle, #000 32%, transparent 34%);
    mask-size: 4px 4px;
    opacity: 0.34;
    pointer-events: none;
}
/* Seluruh imagery di mana pun ikut aturan yang sama: foto berwarna akan langsung
   membatalkan premis kit ini, jadi tidak dibiarkan lewat. */
.tk-card img, .tk-hero img, figure img { filter: var(--tk-mo-photo); }
/* Gerak seperlunya saja. */
@media (prefers-reduced-motion: reduce) {
    .tk-skeleton, .tk-spinner, .tk-btn-loading::before { animation: none; }
}
`;
