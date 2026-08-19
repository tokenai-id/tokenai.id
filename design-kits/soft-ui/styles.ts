/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len */

/**
 * `styles.css` kit Soft UI.
 *
 * Empat keputusan yang membentuk seluruh kit, dan semuanya saling mengunci:
 *
 * 1. **Kanvas tidak pernah putih.** Latar halaman adalah oat hangat; kartu justru lebih terang
 *    daripada latarnya. Ini kebalikan dari neumorphism, yang membuat permukaan dan latar
 *    berwarna persis sama lalu memahat kedalaman dari sepasang bayangan. Di sini kedalaman
 *    lahir dari selisih nada, dan bayangan hanya menegaskannya.
 * 2. **Bayangan tipis, menyebar, dan diwarnai kanvas.** Tidak ada hitam murni di mana pun —
 *    setiap bayangan memakai cokelat abu yang sama dengan latarnya, sehingga bidang terangkat
 *    tanpa meninggalkan kotoran abu-abu di bawahnya.
 * 3. **Sudut membulat besar dan konsisten.** Kontrol berbentuk pil penuh, kartu 28px, dan tidak
 *    ada satu pun sudut tajam di seluruh kit, termasuk kotak centang.
 * 4. **Jarak dinaikkan satu tingkat.** Seluruh tangga jarak lebih longgar daripada kit lain,
 *    dan itulah yang membuat tampilannya terasa tenang alih-alih penuh.
 *
 * Turunan warna memakai `color-mix()` supaya ubin ikon, cincin fokus, dan pendar tetap
 * mengikuti palet penimpa (§3 kontrak) tanpa satu pun nilai heksa mentah. Setiap deklarasi
 * `color-mix` didahului nilai statis sebagai cadangan untuk mesin render lama.
 *
 * Struktur selektor dan blok `== tk: ... ==` mengikuti `docs/kontrak-kit-design.md`.
 */
export const SOFT_UI_STYLES = `/* Soft UI — kit design TOKENAI.
   Sudut membulat, warna lembut, bayangan tipis, jarak longgar. Kanvas oat hangat dengan kartu
   yang lebih terang daripada latarnya — kedalaman dari selisih nada, bukan dari pahatan bayangan.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #3F7F6E;
    --tk-color-primary-hover: #356B5C;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: #EDEAE2;
    --tk-color-secondary-hover: #E5E1D7;
    --tk-color-secondary-contrast: #3A362E;
    --tk-color-accent: #D98E5F;
    --tk-color-background: #F5F3EE;
    --tk-color-surface: #FFFFFF;
    --tk-color-surface-2: #F1EFE8;
    --tk-color-text: #2E2B26;
    --tk-color-text-muted: #6F6859;
    --tk-color-border: #E7E3D9;
    --tk-color-success: #4C8663;
    --tk-color-success-soft: #E4EFE7;
    --tk-color-warning: #A97C2C;
    --tk-color-warning-soft: #F6EEDC;
    --tk-color-danger: #BE5F55;
    --tk-color-danger-soft: #F8E7E4;
    --tk-color-info: #4B7695;
    --tk-color-info-soft: #E4EEF5;

    --tk-font-heading: 'Gabarito', system-ui, sans-serif;
    --tk-font-body: 'Lexend', system-ui, sans-serif;
    --tk-font-mono: 'Overpass Mono', ui-monospace, monospace;
    --tk-weight-heading: 600;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.22;
    --tk-leading-body: 1.72;

    --tk-text-display: 58px;
    --tk-text-h1: 44px;
    --tk-text-h2: 32px;
    --tk-text-h3: 24px;
    --tk-text-h4: 19px;
    --tk-text-title: 17px;
    --tk-text-body-lg: 18px;
    --tk-text-body: 16px;
    --tk-text-body-sm: 14px;
    --tk-text-caption: 12px;

    /* Tangga jarak dinaikkan satu tingkat dari nilai khas kontrak — inilah "spacing luas"
       yang bikin halaman terasa bernapas, dan karena arketipe juga membacanya, halaman
       produksi ikut longgar tanpa satu baris CSS tambahan. */
    --tk-space-xs: 6px;
    --tk-space-sm: 10px;
    --tk-space-md: 18px;
    --tk-space-lg: 28px;
    --tk-space-xl: 40px;
    --tk-space-2xl: 60px;
    --tk-space-3xl: 88px;
    --tk-space-section: 128px;

    --tk-radius-sm: 12px;
    --tk-radius: 18px;
    --tk-radius-lg: 28px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    /* Bayangan diwarnai kanvas, bukan hitam: dua lapis dangkal — satu sentuhan rapat di bawah
       tepi, satu sebaran lebar yang nyaris tak kelihatan. Alfa dijaga rendah supaya kartu
       terangkat tanpa meninggalkan noda abu. */
    --tk-shadow-sm: 0 1px 2px rgba(58, 50, 38, 0.04), 0 2px 6px -2px rgba(58, 50, 38, 0.05);
    --tk-shadow: 0 2px 4px -1px rgba(58, 50, 38, 0.04), 0 12px 26px -14px rgba(58, 50, 38, 0.14);
    --tk-shadow-lg: 0 4px 8px -2px rgba(58, 50, 38, 0.05), 0 28px 56px -24px rgba(58, 50, 38, 0.20);

    --tk-transition: 220ms cubic-bezier(0.22, 1, 0.36, 1);
    --tk-container: 1160px;

    /* Token khas Soft UI (bukan kontrak), dipakai blok flavor di ekor berkas. */
    --tk-su-ink: 58, 50, 38;
    --tk-su-lift: 0 6px 12px -4px rgba(58, 50, 38, 0.06), 0 22px 44px -20px rgba(58, 50, 38, 0.22);
    --tk-su-ring-width: 4px;
    /* Teks di atas bidang semantik lembut. Nilai soft sengaja pucat supaya terasa tenang,
       jadi teksnya butuh nada sendiri yang lebih pekat agar tetap terbaca nyaman. */
    --tk-su-on-success: #2F5F45;
    --tk-su-on-warning: #74531A;
    --tk-su-on-danger: #8E3F37;
    --tk-su-on-info: #2F5470;
}

/* Mode gelap: arang hangat, bukan hitam. Kanvas tetap satu tingkat lebih gelap daripada
   permukaan supaya aturan "kartu lebih terang daripada latar" tetap berlaku terbalik-benar.
   Aktifkan dengan atribut data-tk-theme="dark" pada <html> atau <body>. */
[data-tk-theme="dark"] {
    --tk-color-primary: #79B79F;
    --tk-color-primary-hover: #8DC7AF;
    --tk-color-primary-contrast: #10221C;
    --tk-color-secondary: #2C2A26;
    --tk-color-secondary-hover: #35322D;
    --tk-color-secondary-contrast: #EDEAE2;
    --tk-color-accent: #E5A87C;
    --tk-color-background: #1A1917;
    --tk-color-surface: #232220;
    --tk-color-surface-2: #2B2926;
    --tk-color-text: #F0EDE6;
    --tk-color-text-muted: #A49D91;
    --tk-color-border: #33312C;
    --tk-color-success: #6FB088;
    --tk-color-success-soft: #22322A;
    --tk-color-warning: #CFA152;
    --tk-color-warning-soft: #332C1D;
    --tk-color-danger: #E08A80;
    --tk-color-danger-soft: #35231F;
    --tk-color-info: #7FADCE;
    --tk-color-info-soft: #1F2C36;

    --tk-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.28), 0 2px 6px -2px rgba(0, 0, 0, 0.30);
    --tk-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.30), 0 12px 26px -14px rgba(0, 0, 0, 0.55);
    --tk-shadow-lg: 0 4px 8px -2px rgba(0, 0, 0, 0.34), 0 28px 56px -24px rgba(0, 0, 0, 0.66);

    --tk-su-ink: 0, 0, 0;
    --tk-su-lift: 0 6px 12px -4px rgba(0, 0, 0, 0.34), 0 22px 44px -20px rgba(0, 0, 0, 0.62);
    --tk-su-on-success: #A8D6BB;
    --tk-su-on-warning: #E8C88A;
    --tk-su-on-danger: #F0AFA6;
    --tk-su-on-info: #ABCFE6;
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
::selection { background: var(--tk-color-success-soft); color: var(--tk-color-text); }

/* == tk: typography ============================================= */
/* Gabarito untuk judul: grotesque bersudut lunak yang tetap ramah di ukuran besar.
   Lexend untuk teks: apertur lebar dan bentuk tenang, dirancang justru untuk mengurangi
   lelah baca — alasan yang sama kenapa ia banyak dipakai produk wellness dan finance. */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    letter-spacing: -0.02em;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
    text-wrap: balance;
}
.tk-display { font-size: var(--tk-text-display); font-weight: 700; letter-spacing: -0.03em; line-height: 1.1; }
.tk-h1 { font-size: var(--tk-text-h1); font-weight: 700; letter-spacing: -0.028em; line-height: 1.14; }
.tk-h2 { font-size: var(--tk-text-h2); font-weight: 700; letter-spacing: -0.024em; }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); letter-spacing: -0.012em; }
.tk-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-title); font-weight: 600; letter-spacing: -0.01em; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); line-height: 1.72; }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); letter-spacing: 0.01em; }
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link {
    color: var(--tk-color-primary);
    font-weight: 500;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color var(--tk-transition), color var(--tk-transition);
}
.tk-link:hover { color: var(--tk-color-primary-hover); border-bottom-color: currentColor; }
.tk-code {
    font-family: var(--tk-font-mono);
    font-size: 0.85em;
    background: var(--tk-color-surface-2);
    border-radius: var(--tk-radius-sm);
    padding: 3px 9px;
}

/* == tk: button ================================================= */
/* Semua tombol berbentuk pil penuh. Fokusnya bukan garis tipis melainkan cincin lebar
   berkabut — isyarat yang jelas terlihat tanpa terasa keras. */
.tk-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-body);
    font-size: 15px;
    font-weight: 500;
    line-height: 1;
    padding: 15px 26px;
    border: 1px solid transparent;
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition), transform var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:focus-visible {
    outline: none;
    box-shadow: 0 0 0 var(--tk-su-ring-width) rgba(63, 127, 110, 0.22);
    box-shadow: 0 0 0 var(--tk-su-ring-width) color-mix(in srgb, var(--tk-color-primary) 24%, transparent);
}
.tk-btn:active:not(:disabled) { transform: translateY(1px); }
.tk-btn:disabled { opacity: 0.45; cursor: not-allowed; }
.tk-btn-primary { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); box-shadow: var(--tk-shadow-sm); }
.tk-btn-primary:hover:not(:disabled) { background: var(--tk-color-primary-hover); box-shadow: var(--tk-shadow); }
.tk-btn-secondary { background: var(--tk-color-secondary); color: var(--tk-color-secondary-contrast); }
.tk-btn-secondary:hover:not(:disabled) { background: var(--tk-color-secondary-hover); }
.tk-btn-danger { background: var(--tk-color-danger); color: #FFFFFF; box-shadow: var(--tk-shadow-sm); }
.tk-btn-danger:hover:not(:disabled) { filter: brightness(0.94); box-shadow: var(--tk-shadow); }
.tk-btn-outline { background: var(--tk-color-surface); border-color: var(--tk-color-border); color: var(--tk-color-text); }
.tk-btn-outline:hover:not(:disabled) { border-color: var(--tk-color-primary); color: var(--tk-color-primary); }
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-color-surface-2); }
.tk-btn-text { background: none; color: var(--tk-color-primary); padding-left: 8px; padding-right: 8px; }
.tk-btn-text:hover:not(:disabled) { color: var(--tk-color-primary-hover); background: var(--tk-color-surface-2); }
.tk-btn-sm { font-size: 13px; padding: 10px 18px; }
.tk-btn-lg { font-size: 17px; padding: 19px 34px; }
.tk-btn-icon { padding: 14px; }
.tk-btn-loading { position: relative; color: transparent !important; pointer-events: none; }
.tk-btn-loading::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border: 2px solid var(--tk-color-primary-contrast);
    border-top-color: transparent;
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.8s linear infinite;
}
.tk-btn-outline.tk-btn-loading::before, .tk-btn-ghost.tk-btn-loading::before, .tk-btn-text.tk-btn-loading::before, .tk-btn-secondary.tk-btn-loading::before {
    border-color: var(--tk-color-text);
    border-top-color: transparent;
}
@keyframes tk-spin { to { transform: rotate(360deg); } }

/* == tk: form =================================================== */
.tk-field { display: flex; flex-direction: column; gap: 8px; margin-bottom: var(--tk-space-md); }
.tk-label { font-size: var(--tk-text-body-sm); font-weight: 500; color: var(--tk-color-text); }
.tk-help { font-size: 13px; color: var(--tk-color-text-muted); }
/* Isian tidak bergaris tepi melainkan berbidang: latar satu tingkat lebih redup daripada
   kartunya, jadi kolom isian terbaca sebagai cekungan lembut, bukan kotak berbingkai. */
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: var(--tk-color-surface-2);
    border: 1px solid transparent;
    border-radius: var(--tk-radius);
    padding: 14px 18px;
    transition: background var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); opacity: 0.75; }
.tk-input:hover, .tk-textarea:hover, .tk-select-trigger:hover { border-color: var(--tk-color-border); }
.tk-input:focus, .tk-textarea:focus {
    background: var(--tk-color-surface);
    border-color: var(--tk-color-primary);
    box-shadow: 0 0 0 var(--tk-su-ring-width) rgba(63, 127, 110, 0.16);
    box-shadow: 0 0 0 var(--tk-su-ring-width) color-mix(in srgb, var(--tk-color-primary) 18%, transparent);
}
.tk-textarea { min-height: 116px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    background: var(--tk-color-danger-soft);
    border-color: var(--tk-color-danger);
}
.tk-field-error .tk-help { color: var(--tk-su-on-danger); }
.tk-field-success .tk-input { background: var(--tk-color-success-soft); border-color: var(--tk-color-success); }
.tk-field-success .tk-help { color: var(--tk-su-on-success); }
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
.tk-select-trigger > iconify-icon { color: var(--tk-color-text-muted); flex: none; transition: transform var(--tk-transition); }
.tk-select-placeholder { color: var(--tk-color-text-muted); font-weight: 400; }
.tk-select:focus-within > .tk-select-trigger, .tk-select-open > .tk-select-trigger {
    background: var(--tk-color-surface);
    border-color: var(--tk-color-primary);
    box-shadow: 0 0 0 var(--tk-su-ring-width) rgba(63, 127, 110, 0.16);
    box-shadow: 0 0 0 var(--tk-su-ring-width) color-mix(in srgb, var(--tk-color-primary) 18%, transparent);
}
.tk-select-open > .tk-select-trigger > iconify-icon { transform: rotate(180deg); }
.tk-select-menu {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg);
    padding: 8px;
    max-height: 288px;
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
    padding: 11px 14px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    text-align: left;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-option:hover { background: var(--tk-color-surface-2); }
.tk-option-selected {
    background: rgba(63, 127, 110, 0.10);
    background: color-mix(in srgb, var(--tk-color-primary) 11%, var(--tk-color-surface));
    color: var(--tk-color-primary);
    font-weight: 500;
}
.tk-option-check { margin-left: auto; display: inline-flex; }
.tk-select-menu-search {
    display: flex;
    align-items: center;
    gap: var(--tk-space-sm);
    padding: 10px 14px;
    margin-bottom: 6px;
    background: var(--tk-color-surface-2);
    border-radius: var(--tk-radius-sm);
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
.tk-select-menu-search input::placeholder { color: var(--tk-color-text-muted); opacity: 0.75; }
.tk-select-menu-footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--tk-space-sm);
    padding: var(--tk-space-sm) 4px 2px;
    margin-top: var(--tk-space-xs);
    border-top: 1px solid var(--tk-color-border);
}
.tk-check { display: inline-flex; align-items: center; gap: 12px; font-size: var(--tk-text-body-sm); cursor: pointer; }
/* Kotak centang pun dibulatkan — di kit ini tidak ada satu pun sudut tajam, termasuk
   pada kontrol sekecil ini. */
.tk-checkbox, .tk-radio {
    appearance: none;
    width: 20px;
    height: 20px;
    flex: none;
    margin: 0;
    position: relative;
    background: var(--tk-color-surface-2);
    border: 1px solid var(--tk-color-border);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-checkbox { border-radius: 7px; }
.tk-checkbox:checked { background: var(--tk-color-primary); border-color: var(--tk-color-primary); }
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 6.5px;
    top: 3px;
    width: 5px;
    height: 9px;
    border-right: 2px solid var(--tk-color-primary-contrast);
    border-bottom: 2px solid var(--tk-color-primary-contrast);
    border-radius: 1px;
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked { border-color: var(--tk-color-primary); background: var(--tk-color-primary); box-shadow: inset 0 0 0 4px var(--tk-color-surface); }
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: 0 0 0 var(--tk-su-ring-width) rgba(63, 127, 110, 0.22);
    box-shadow: 0 0 0 var(--tk-su-ring-width) color-mix(in srgb, var(--tk-color-primary) 24%, transparent);
}
.tk-radio:checked:focus-visible { box-shadow: inset 0 0 0 4px var(--tk-color-surface), 0 0 0 var(--tk-su-ring-width) color-mix(in srgb, var(--tk-color-primary) 24%, transparent); }
.tk-toggle {
    position: relative;
    width: 48px;
    height: 28px;
    flex: none;
    margin: 0;
    appearance: none;
    background: var(--tk-color-secondary);
    border: none;
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    transition: background var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-toggle::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 22px;
    height: 22px;
    background: var(--tk-color-surface);
    border-radius: var(--tk-radius-full);
    box-shadow: 0 1px 3px rgba(var(--tk-su-ink), 0.22);
    transition: transform var(--tk-transition);
}
.tk-toggle:checked { background: var(--tk-color-primary); }
.tk-toggle:checked::after { transform: translateX(20px); }

/* == tk: search-filter ========================================== */
.tk-search { position: relative; display: flex; align-items: center; min-width: 240px; }
.tk-search .tk-input { width: 100%; border-radius: var(--tk-radius-full); padding-left: 46px; padding-right: 68px; }
.tk-search .tk-input::-webkit-search-cancel-button { -webkit-appearance: none; }
.tk-search-icon { position: absolute; left: 18px; display: inline-flex; color: var(--tk-color-text-muted); pointer-events: none; }
.tk-search-kbd {
    position: absolute;
    right: 10px;
    font-family: var(--tk-font-mono);
    font-size: 10px;
    letter-spacing: 0.04em;
    color: var(--tk-color-text-muted);
    background: var(--tk-color-surface);
    border-radius: var(--tk-radius-full);
    padding: 4px 10px;
    pointer-events: none;
}
.tk-filter-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--tk-space-md);
    padding: var(--tk-space-md);
    background: var(--tk-color-surface);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-sm);
}
.tk-filter-bar .tk-search { flex: 1; }
.tk-filter-bar .tk-select { min-width: 176px; }
.tk-filter-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    background: var(--tk-color-primary);
    color: var(--tk-color-primary-contrast);
    border-radius: var(--tk-radius-full);
    font-size: 11px;
    font-weight: 500;
}
.tk-filter-active { display: flex; flex-wrap: wrap; align-items: center; gap: var(--tk-space-sm); margin-top: var(--tk-space-md); }

/* == tk: dropdown =============================================== */
.tk-dropdown { position: relative; display: inline-block; }
/* Menu ikut lebar pemicunya, tetapi tidak pernah lebih sempit dari 200px: pemicu di kit ini
   sering hanya tombol ikon atau kata pendek, dan label sepanjang "Lihat detail" tidak boleh
   patah dua baris di dalam menu yang seharusnya terasa lapang. */
.tk-dropdown-menu {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    min-width: 200px;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg);
    padding: 8px;
    max-height: 288px;
    overflow: auto;
    display: none;
    flex-direction: column;
    z-index: 30;
}
.tk-dropdown-menu-right { left: auto; right: 0; }
.tk-dropdown-menu-up { top: auto; bottom: calc(100% + 8px); }
.tk-dropdown-open > .tk-dropdown-menu, .tk-dropdown:focus-within > .tk-dropdown-menu { display: flex; }
.tk-dropdown-label {
    padding: 8px 14px 6px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
}
.tk-dropdown-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 11px 14px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: none;
    border: none;
    border-radius: var(--tk-radius-sm);
    cursor: pointer;
    text-align: left;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-dropdown-item:hover { background: var(--tk-color-surface-2); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-text-muted); flex: none; }
.tk-dropdown-item-danger { color: var(--tk-color-danger); }
.tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: var(--tk-color-danger-soft); color: var(--tk-su-on-danger); }
.tk-dropdown-divider { height: 1px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) 8px; }

/* == tk: card =================================================== */
/* Kartu selalu lebih terang daripada kanvasnya, tanpa garis tepi. Yang mengangkatnya
   cuma bayangan tipis; saat disorot ia naik dua piksel dan bayangannya melebar. */
.tk-card {
    position: relative;
    background: var(--tk-color-surface);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow);
    transition: box-shadow var(--tk-transition), transform var(--tk-transition);
}
.tk-card:hover { box-shadow: var(--tk-su-lift); transform: translateY(-2px); }
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-md); flex-wrap: wrap; }
.tk-card-stat .tk-stat-value {
    font-family: var(--tk-font-heading);
    font-size: var(--tk-text-h2);
    font-weight: 700;
    letter-spacing: -0.03em;
    color: var(--tk-color-text);
}
.tk-card-stat .tk-stat-trend-up, .tk-card-stat .tk-stat-trend-down {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 13px;
    font-weight: 500;
    padding: 4px 12px;
    border-radius: var(--tk-radius-full);
}
.tk-card-stat .tk-stat-trend-up { background: var(--tk-color-success-soft); color: var(--tk-su-on-success); }
.tk-card-stat .tk-stat-trend-up::before { content: '\\2191'; }
.tk-card-stat .tk-stat-trend-down { background: var(--tk-color-danger-soft); color: var(--tk-su-on-danger); }
.tk-card-stat .tk-stat-trend-down::before { content: '\\2193'; }

/* == tk: navigation ============================================= */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-radius: var(--tk-radius-full);
    box-shadow: var(--tk-shadow-sm);
    position: relative;
    z-index: 5;
}
.tk-navbar-brand {
    font-family: var(--tk-font-heading);
    font-weight: 700;
    font-size: 19px;
    letter-spacing: -0.02em;
    margin-right: auto;
    color: var(--tk-color-text);
}
/* Tautan aktif memakai pil lembut, bukan garis bawah — bentuk yang sama dengan tombolnya. */
.tk-navbar-link {
    color: var(--tk-color-text-muted);
    text-decoration: none;
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    padding: 9px 16px;
    border-radius: var(--tk-radius-full);
    transition: color var(--tk-transition), background var(--tk-transition);
}
.tk-navbar-link:hover { color: var(--tk-color-text); background: var(--tk-color-surface-2); }
.tk-navbar-link-active {
    color: var(--tk-color-primary);
    background: rgba(63, 127, 110, 0.10);
    background: color-mix(in srgb, var(--tk-color-primary) 11%, var(--tk-color-surface));
}
.tk-navbar-dark { background: #24231F; box-shadow: 0 12px 28px -18px rgba(0, 0, 0, 0.6); }
.tk-navbar-dark .tk-navbar-brand { color: #F4F1EA; }
.tk-navbar-dark .tk-navbar-link { color: #A9A296; }
.tk-navbar-dark .tk-navbar-link:hover { color: #F4F1EA; background: rgba(255, 255, 255, 0.07); }
.tk-navbar-dark .tk-navbar-link-active { color: #F4F1EA; background: rgba(255, 255, 255, 0.11); }
.tk-navbar-dark .tk-btn-ghost { color: #F4F1EA; }
.tk-navbar-dark .tk-btn-ghost:hover:not(:disabled) { background: rgba(255, 255, 255, 0.09); }
.tk-navbar-dark .tk-btn-outline { background: transparent; color: #F4F1EA; border-color: rgba(255, 255, 255, 0.24); }
.tk-navbar-dark .tk-btn-outline:hover:not(:disabled) { background: rgba(255, 255, 255, 0.09); color: #F4F1EA; border-color: rgba(255, 255, 255, 0.4); }
.tk-sidebar {
    width: 256px;
    background: var(--tk-color-surface);
    padding: var(--tk-space-md);
    display: flex;
    flex-direction: column;
    gap: 4px;
    transition: width var(--tk-transition);
    position: relative;
    z-index: 4;
}
/* Butir sidebar aktif adalah pil terisi lembut — bidang, bukan rel atau garis. */
.tk-sidebar-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: var(--tk-radius);
    color: var(--tk-color-text-muted);
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-sidebar-item-active {
    color: var(--tk-color-primary);
    background: rgba(63, 127, 110, 0.10);
    background: color-mix(in srgb, var(--tk-color-primary) 11%, var(--tk-color-surface));
}
.tk-sidebar-item iconify-icon { flex: none; }
.tk-sidebar-collapsed { width: 76px; }
.tk-sidebar-collapsed .tk-sidebar-label, .tk-sidebar-collapsed .tk-sidebar-group { display: none; }
.tk-sidebar-collapsed .tk-sidebar-item { justify-content: center; padding: 12px; }
.tk-sidebar-group {
    padding: var(--tk-space-lg) 16px 8px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
}
.tk-sidebar-group:first-child { padding-top: var(--tk-space-xs); }
.tk-breadcrumb { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; font-size: var(--tk-text-body-sm); }
.tk-breadcrumb a { color: var(--tk-color-text-muted); text-decoration: none; }
.tk-breadcrumb a:hover { color: var(--tk-color-primary); }
.tk-breadcrumb-sep { display: inline-flex; color: var(--tk-color-text-muted); opacity: 0.6; }
.tk-breadcrumb-current { color: var(--tk-color-text); font-weight: 500; }
.tk-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--tk-space-md);
    background: var(--tk-color-surface);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-sm);
}

/* == tk: tabs =================================================== */
/* Tab dan segmented dibangun dari bahan yang sama: rel berbidang redup berisi pil
   putih yang bergeser — pola yang sama dipakai dua kali supaya keduanya terasa sekeluarga. */
.tk-tabs {
    display: inline-flex;
    gap: 4px;
    padding: 5px;
    background: var(--tk-color-surface-2);
    border-radius: var(--tk-radius-full);
    max-width: 100%;
    overflow-x: auto;
}
.tk-tab {
    padding: 10px 20px;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    font-weight: 500;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-radius: var(--tk-radius-full);
    transition: color var(--tk-transition), background var(--tk-transition), box-shadow var(--tk-transition);
    white-space: nowrap;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-color-text); background: var(--tk-color-surface); box-shadow: var(--tk-shadow-sm); }
.tk-segmented { display: inline-flex; gap: 4px; padding: 5px; background: var(--tk-color-surface-2); border-radius: var(--tk-radius-full); }
.tk-segment {
    padding: 9px 18px;
    font-family: var(--tk-font-body);
    font-size: 13px;
    font-weight: 500;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: var(--tk-color-surface); color: var(--tk-color-text); box-shadow: var(--tk-shadow-sm); }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 500;
    padding: 5px 13px;
    border-radius: var(--tk-radius-full);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text);
}
.tk-badge-success { background: var(--tk-color-success-soft); color: var(--tk-su-on-success); }
.tk-badge-warning { background: var(--tk-color-warning-soft); color: var(--tk-su-on-warning); }
.tk-badge-danger { background: var(--tk-color-danger-soft); color: var(--tk-su-on-danger); }
.tk-badge-info { background: var(--tk-color-info-soft); color: var(--tk-su-on-info); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    padding: 7px 14px;
    background: var(--tk-color-surface);
    border-radius: var(--tk-radius-full);
    box-shadow: var(--tk-shadow-sm);
    color: var(--tk-color-text);
}
.tk-chip-remove {
    border: none;
    background: none;
    cursor: pointer;
    color: var(--tk-color-text-muted);
    font-size: 15px;
    line-height: 1;
    padding: 0;
    transition: color var(--tk-transition);
}
.tk-chip-remove:hover { color: var(--tk-color-danger); }

/* == tk: alert ================================================== */
.tk-alert {
    display: flex;
    gap: var(--tk-space-md);
    align-items: flex-start;
    padding: var(--tk-space-md) var(--tk-space-lg);
    border-radius: var(--tk-radius-lg);
    font-size: var(--tk-text-body-sm);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text);
}
.tk-alert iconify-icon { flex: none; margin-top: 2px; }
.tk-alert-title { font-weight: 600; display: block; margin-bottom: 2px; }
.tk-alert-success { background: var(--tk-color-success-soft); color: var(--tk-su-on-success); }
.tk-alert-warning { background: var(--tk-color-warning-soft); color: var(--tk-su-on-warning); }
.tk-alert-danger { background: var(--tk-color-danger-soft); color: var(--tk-su-on-danger); }
.tk-alert-info { background: var(--tk-color-info-soft); color: var(--tk-su-on-info); }

/* == tk: table ================================================== */
.tk-table { width: 100%; border-collapse: separate; border-spacing: 0; font-size: var(--tk-text-body-sm); }
.tk-table th {
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--tk-color-text-muted);
    padding: 12px var(--tk-space-md);
    background: var(--tk-color-surface-2);
}
.tk-table th:first-child { border-radius: var(--tk-radius) 0 0 var(--tk-radius); }
.tk-table th:last-child { border-radius: 0 var(--tk-radius) var(--tk-radius) 0; }
.tk-table td { padding: 16px var(--tk-space-md); border-bottom: 1px solid var(--tk-color-border); }
.tk-table tbody tr:last-child td { border-bottom: none; }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover td { background: var(--tk-color-surface-2); }
.tk-table tbody tr:hover td:first-child { border-radius: var(--tk-radius) 0 0 var(--tk-radius); }
.tk-table tbody tr:hover td:last-child { border-radius: 0 var(--tk-radius) var(--tk-radius) 0; }
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
.tk-action-btn:hover { background: var(--tk-color-surface); color: var(--tk-color-primary); box-shadow: var(--tk-shadow-sm); }
.tk-action-btn-danger:hover { background: var(--tk-color-danger-soft); color: var(--tk-su-on-danger); box-shadow: none; }
.tk-pagination { display: flex; gap: 6px; align-items: center; }
.tk-page {
    min-width: 38px;
    height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    border-radius: var(--tk-radius-full);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition);
}
.tk-page:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
.tk-page-active { background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); }
.tk-page-active:hover { background: var(--tk-color-primary-hover); color: var(--tk-color-primary-contrast); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(46, 43, 38, 0.42);
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-color-surface);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg);
    max-width: 480px;
    width: 100%;
}
.tk-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 388px;
    background: var(--tk-color-surface);
    border-radius: var(--tk-radius-lg) 0 0 var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 28px;
    height: 28px;
    border: 3px solid var(--tk-color-surface-2);
    border-top-color: var(--tk-color-primary);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.8s linear infinite;
}
.tk-progress { height: 10px; background: var(--tk-color-surface-2); border-radius: var(--tk-radius-full); overflow: hidden; }
.tk-progress-bar { height: 100%; background: var(--tk-color-primary); border-radius: var(--tk-radius-full); transition: width var(--tk-transition); }
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, var(--tk-color-border) 50%, var(--tk-color-surface-2) 75%);
    background-size: 200% 100%;
    border-radius: var(--tk-radius-sm);
    animation: tk-shimmer 1.6s infinite;
}
@keyframes tk-shimmer { to { background-position: -200% 0; } }

/* == tk: empty ================================================== */
.tk-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: var(--tk-space-3xl) var(--tk-space-lg);
    text-align: center;
    background: var(--tk-color-surface);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-sm);
}
.tk-empty-icon {
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-lg);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text-muted);
    margin-bottom: 4px;
}
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: 600; font-size: var(--tk-text-h4); margin: 0; }

/* == tk: content-blocks ========================================= */
.tk-hero {
    position: relative;
    padding: var(--tk-space-3xl) var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-radius: var(--tk-radius-lg);
    overflow: hidden;
}
.tk-hero > * { max-width: 780px; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); margin: 0 0 var(--tk-space-xl); max-width: 54ch; }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); flex-wrap: wrap; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-lg); }
.tk-feature {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: var(--tk-space-lg);
    background: var(--tk-color-surface);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-sm);
    transition: box-shadow var(--tk-transition), transform var(--tk-transition);
}
.tk-feature:hover { box-shadow: var(--tk-su-lift); transform: translateY(-2px); }
/* Ubin ikon: kotak membulat berbidang redup yang memayungi ikon. Inilah bentuk paling
   khas kit ini, dan ia muncul di mana-mana — fitur, sidebar kosong, kartu profil. */
.tk-feature-icon {
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius);
    background: rgba(63, 127, 110, 0.10);
    background: color-mix(in srgb, var(--tk-color-primary) 12%, var(--tk-color-surface));
    color: var(--tk-color-primary);
    margin-bottom: 6px;
}
.tk-cta {
    background: var(--tk-color-surface);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow);
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
    flex-wrap: wrap;
}
.tk-cta .tk-h2, .tk-cta .tk-h3 { margin: 0; }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: soft-ui flavor ========================================= */
/* Enam perkakas yang menyusun wajah kit ini. Menang kaskade karena berada di ekor berkas.
   Semuanya bekerja dengan bahan yang sama: bidang membulat, nada redup, dan bayangan tipis. */
/* Ubin ikon berdiri sendiri — versi lepas dari .tk-feature-icon supaya bisa dipakai di
   daftar, kartu profil, dan baris statistik tanpa ikut membawa gaya fitur. */
.tk-icon-tile {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    flex: none;
    border-radius: var(--tk-radius-sm);
    background: rgba(63, 127, 110, 0.10);
    background: color-mix(in srgb, var(--tk-color-primary) 12%, var(--tk-color-surface));
    color: var(--tk-color-primary);
}
.tk-icon-tile-lg { width: 56px; height: 56px; border-radius: var(--tk-radius); }
.tk-icon-tile-accent {
    background: rgba(217, 142, 95, 0.14);
    background: color-mix(in srgb, var(--tk-color-accent) 16%, var(--tk-color-surface));
    color: var(--tk-color-accent);
}
.tk-icon-tile-neutral { background: var(--tk-color-surface-2); color: var(--tk-color-text-muted); }
/* Bidang lembut: panel matte tanpa bayangan, dipakai untuk mengelompokkan sesuatu di
   dalam kartu yang sudah melayang — dua bayangan bertumpuk selalu terlihat kotor. */
.tk-soft {
    background: var(--tk-color-surface-2);
    border-radius: var(--tk-radius-lg);
    padding: var(--tk-space-lg);
}
.tk-soft-accent {
    background: rgba(217, 142, 95, 0.12);
    background: color-mix(in srgb, var(--tk-color-accent) 14%, var(--tk-color-surface));
}
/* Cekungan: kebalikan kartu. Bidangnya masuk ke dalam permukaan lewat satu bayangan
   dalam yang sangat dangkal — satu-satunya inset di kit ini, dan sengaja dibatasi
   untuk sumur daftar dan baris angka. */
.tk-inset {
    background: var(--tk-color-surface-2);
    border-radius: var(--tk-radius-lg);
    box-shadow: inset 0 1px 3px rgba(var(--tk-su-ink), 0.06);
    padding: var(--tk-space-md);
}
/* Angkat saat disorot: dipasang ke apa pun yang bisa diklik dan belum berupa kartu. */
.tk-lift { transition: box-shadow var(--tk-transition), transform var(--tk-transition); }
.tk-lift:hover { box-shadow: var(--tk-su-lift); transform: translateY(-2px); }
/* Pendar: satu-satunya "cahaya" di kit ini, dan ia dipasang di belakang objek, bukan
   di atasnya — bloom radial sangat pucat yang menahan foto atau ilustrasi supaya tidak
   terlihat ditempel begitu saja di atas kanvas. */
.tk-halo { position: relative; }
.tk-halo > * { position: relative; z-index: 1; }
.tk-halo::before {
    content: '';
    position: absolute;
    inset: -14%;
    border-radius: var(--tk-radius-full);
    background: radial-gradient(circle at 50% 50%, rgba(217, 142, 95, 0.22), transparent 68%);
    background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--tk-color-accent) 26%, transparent), transparent 68%);
    filter: blur(26px);
    z-index: 0;
    pointer-events: none;
}
/* Cincin capaian: angka tunggal yang digambar sebagai lingkaran, bukan batang. Nilainya
   dipasang lewat --tk-ring-value (0-100) di atribut style elemennya. */
.tk-ring {
    --tk-ring-value: 0;
    position: relative;
    width: 116px;
    height: 116px;
    flex: none;
    border-radius: var(--tk-radius-full);
    background: conic-gradient(var(--tk-color-primary) calc(var(--tk-ring-value) * 1%), var(--tk-color-surface-2) 0);
    display: grid;
    place-items: center;
}
.tk-ring::before {
    content: '';
    position: absolute;
    inset: 13px;
    border-radius: var(--tk-radius-full);
    background: var(--tk-color-surface);
}
.tk-ring-label {
    position: relative;
    font-family: var(--tk-font-heading);
    font-size: var(--tk-text-h3);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1;
    color: var(--tk-color-text);
}
.tk-ring-sm { width: 76px; height: 76px; }
.tk-ring-sm::before { inset: 9px; }
.tk-ring-sm .tk-ring-label { font-size: var(--tk-text-body); }
.tk-ring-accent { background: conic-gradient(var(--tk-color-accent) calc(var(--tk-ring-value) * 1%), var(--tk-color-surface-2) 0); }

@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
    .tk-card:hover, .tk-feature:hover, .tk-lift:hover { transform: none; }
}
`;
