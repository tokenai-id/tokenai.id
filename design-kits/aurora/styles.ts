/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export const AURORA_STYLES = `/* Aurora — kit design TOKENAI.
   Gradient mesh yang warnanya saling melarut seperti cahaya utara: hijau mint,
   cyan, violet, dan rose berpendar di latar lalu bertemu tanpa satu pun garis
   batas. Di atasnya tirai aurora — berkas cahaya miring yang bergoyang sangat
   pelan. Permukaannya kaca tipis berpinggir rambut gradien, fokus dan tombol
   memancarkan pendar berwarna, dan tidak ada satu pun sudut tajam. Tipografi
   Outfit (heading geometris berujung lembut) + Plus Jakarta Sans (body) +
   IBM Plex Mono (kode).
   Kit dua-mode: terang (aurora fajar di atas kertas dingin) dan gelap (aurora
   malam di atas langit biru tinta) lewat data-tk-theme="dark". Seluruh warna
   mesh, tirai, gradien, dan pendar ikut jadi token supaya blok gelap hanya
   menimpa variabel — bukan menulis ulang komponen.
   Kontrak: docs/kontrak-kit-design.md. Semua nilai design tinggal di :root. */

/* == tk: tokens ================================================= */
:root {
    --tk-color-primary: #0E7C86;
    --tk-color-primary-hover: #0A626B;
    --tk-color-primary-contrast: #FFFFFF;
    --tk-color-secondary: #6F4DEB;
    --tk-color-secondary-hover: #5C39DC;
    --tk-color-secondary-contrast: #FFFFFF;
    --tk-color-accent: #E85FA8;
    --tk-color-background: #F6F7FD;
    --tk-color-surface: #FFFFFF;
    --tk-color-surface-2: #EDF1FA;
    --tk-color-text: #131B33;
    --tk-color-text-muted: #5A6785;
    --tk-color-border: #DFE5F5;
    --tk-color-success: #0B8A61;
    --tk-color-success-soft: #D8F7EC;
    --tk-color-warning: #B26A00;
    --tk-color-warning-soft: #FDEED4;
    --tk-color-danger: #D93A6A;
    --tk-color-danger-soft: #FCE0EA;
    --tk-color-info: #0E7C86;
    --tk-color-info-soft: #D7F1F5;

    --tk-font-heading: 'Outfit', system-ui, sans-serif;
    --tk-font-body: 'Plus Jakarta Sans', system-ui, sans-serif;
    --tk-font-mono: 'IBM Plex Mono', ui-monospace, monospace;
    --tk-weight-heading: 600;
    --tk-weight-body: 400;
    --tk-leading-heading: 1.16;
    --tk-leading-body: 1.68;

    --tk-text-display: 60px;
    --tk-text-h1: 44px;
    --tk-text-h2: 33px;
    --tk-text-h3: 25px;
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
    --tk-radius: 20px;
    --tk-radius-lg: 30px;
    --tk-radius-full: 999px;

    --tk-border-width: 1px;
    /* Bayangan bukan hitam melainkan biru tinta yang sangat menyebar — bayangan
       benda yang berdiri di bawah cahaya lembut, bukan lampu sorot. */
    --tk-shadow-sm: 0 2px 10px rgba(28, 40, 92, 0.06);
    --tk-shadow: 0 14px 38px rgba(28, 40, 92, 0.10), 0 2px 8px rgba(28, 40, 92, 0.05);
    --tk-shadow-lg: 0 34px 80px rgba(28, 40, 92, 0.16), 0 10px 26px rgba(111, 77, 235, 0.10);

    --tk-transition: 280ms cubic-bezier(0.22, 1, 0.36, 1);
    --tk-container: 1200px;

    /* Token khas aurora (bukan kontrak). Seluruh bahan cahaya kit tinggal di
       sini supaya mode gelap cukup menimpa variabelnya. */
    /* Mesh: lima pusat warna yang saling melarut tanpa garis batas. */
    --tk-au-mesh:
        radial-gradient(52% 46% at 12% 8%, rgba(79, 224, 176, 0.55) 0%, transparent 72%),
        radial-gradient(46% 42% at 84% 6%, rgba(124, 92, 245, 0.50) 0%, transparent 70%),
        radial-gradient(58% 50% at 78% 88%, rgba(232, 95, 168, 0.40) 0%, transparent 72%),
        radial-gradient(50% 44% at 24% 92%, rgba(76, 201, 240, 0.48) 0%, transparent 70%),
        radial-gradient(40% 36% at 50% 46%, rgba(160, 232, 255, 0.34) 0%, transparent 74%);
    /* Tirai: berkas cahaya miring yang jadi wujud khas aurora. Jarak antarberkas
       sengaja lebar (216px) supaya masih terbaca sebagai berkas setelah diburamkan;
       kalau lebih rapat dari radius blur, semuanya melebur jadi kabut rata. */
    --tk-au-curtain: repeating-linear-gradient(102deg,
        rgba(79, 224, 176, 0) 0px,
        rgba(79, 224, 176, 0.46) 34px,
        rgba(76, 201, 240, 0.34) 72px,
        rgba(124, 92, 245, 0.44) 122px,
        rgba(232, 95, 168, 0.26) 168px,
        rgba(79, 224, 176, 0) 216px);
    /* Gradien inti: teal → biru → violet. Ketiga hentinya cukup gelap sehingga
       teks putih di atasnya tetap lolos kontras. */
    --tk-au-grad: linear-gradient(120deg, #0E7C86 0%, #4A61C9 52%, #6F4DEB 100%);
    --tk-au-grad-warm: linear-gradient(120deg, #6F4DEB 0%, #C2439A 100%);
    --tk-au-grad-soft: linear-gradient(120deg, rgba(14, 124, 134, 0.14) 0%, rgba(111, 77, 235, 0.14) 52%, rgba(232, 95, 168, 0.14) 100%);
    --tk-au-on-grad: #FFFFFF;
    /* Pinggir rambut: garis 1px yang warnanya berpindah sepanjang tepi. */
    --tk-au-hairline: linear-gradient(130deg, rgba(79, 224, 176, 0.85) 0%, rgba(76, 201, 240, 0.55) 30%, rgba(124, 92, 245, 0.65) 62%, rgba(232, 95, 168, 0.75) 100%);
    --tk-au-veil: rgba(255, 255, 255, 0.74);
    --tk-au-veil-strong: rgba(255, 255, 255, 0.9);
    --tk-au-sheen: inset 0 1px 0 rgba(255, 255, 255, 0.9);
    --tk-au-glow: 0 0 0 4px rgba(14, 124, 134, 0.14), 0 8px 30px rgba(14, 124, 134, 0.22);
    --tk-au-glow-lg: 0 18px 50px rgba(111, 77, 235, 0.28), 0 0 46px rgba(79, 224, 176, 0.24);
    --tk-au-sunken: inset 0 2px 5px rgba(28, 40, 92, 0.06);
    --tk-au-tint: rgba(14, 124, 134, 0.08);
    --tk-au-tint-strong: rgba(14, 124, 134, 0.14);
    /* Warna teks di atas latar lunak semantik — ikut berganti di mode gelap. */
    --tk-au-on-success-soft: #046A48;
    --tk-au-on-warning-soft: #7A4400;
    --tk-au-on-danger-soft: #93123F;
    --tk-au-on-info-soft: #0A5A63;
}

/* Mode gelap — aurora malam: langit biru tinta, warna mesh naik kejenuhannya
   karena cahaya utara memang cuma terbaca di atas gelap.
   Aktifkan dengan atribut data-tk-theme="dark" pada <html> atau <body>. */
[data-tk-theme="dark"] {
    --tk-color-primary: #2FD4C4;
    --tk-color-primary-hover: #57E3D4;
    --tk-color-primary-contrast: #04211F;
    --tk-color-secondary: #A78BFF;
    --tk-color-secondary-hover: #BCA6FF;
    --tk-color-secondary-contrast: #150A33;
    --tk-color-accent: #FF8AD0;
    --tk-color-background: #070B1A;
    --tk-color-surface: #0F1730;
    --tk-color-surface-2: #1A2444;
    --tk-color-text: #E9EFFF;
    --tk-color-text-muted: #93A2C6;
    --tk-color-border: #26314F;
    --tk-color-success: #3DDCA0;
    --tk-color-success-soft: #08372B;
    --tk-color-warning: #FFC46B;
    --tk-color-warning-soft: #3A2A0A;
    --tk-color-danger: #FF7A9E;
    --tk-color-danger-soft: #3C1023;
    --tk-color-info: #5FD8E8;
    --tk-color-info-soft: #082E36;

    --tk-shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.5);
    --tk-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), 0 2px 8px rgba(0, 0, 0, 0.4);
    --tk-shadow-lg: 0 36px 84px rgba(0, 0, 0, 0.7), 0 10px 30px rgba(111, 77, 235, 0.28);

    --tk-au-mesh:
        radial-gradient(54% 48% at 12% 6%, rgba(45, 214, 176, 0.42) 0%, transparent 70%),
        radial-gradient(48% 44% at 86% 4%, rgba(124, 92, 245, 0.50) 0%, transparent 70%),
        radial-gradient(58% 52% at 80% 90%, rgba(232, 95, 168, 0.34) 0%, transparent 72%),
        radial-gradient(52% 46% at 20% 94%, rgba(56, 173, 240, 0.42) 0%, transparent 70%),
        radial-gradient(42% 38% at 52% 44%, rgba(84, 132, 255, 0.30) 0%, transparent 74%);
    --tk-au-curtain: repeating-linear-gradient(102deg,
        rgba(79, 255, 198, 0) 0px,
        rgba(79, 255, 198, 0.55) 34px,
        rgba(88, 214, 255, 0.38) 72px,
        rgba(150, 118, 255, 0.5) 122px,
        rgba(255, 138, 208, 0.3) 168px,
        rgba(79, 255, 198, 0) 216px);
    --tk-au-grad: linear-gradient(120deg, #2FD4C4 0%, #6FA8FF 50%, #A78BFF 100%);
    --tk-au-grad-warm: linear-gradient(120deg, #A78BFF 0%, #FF8AD0 100%);
    --tk-au-grad-soft: linear-gradient(120deg, rgba(47, 212, 196, 0.18) 0%, rgba(167, 139, 255, 0.18) 52%, rgba(255, 138, 208, 0.18) 100%);
    --tk-au-on-grad: #06152B;
    --tk-au-hairline: linear-gradient(130deg, rgba(79, 255, 198, 0.8) 0%, rgba(88, 214, 255, 0.45) 30%, rgba(150, 118, 255, 0.6) 62%, rgba(255, 138, 208, 0.7) 100%);
    --tk-au-veil: rgba(15, 23, 48, 0.7);
    --tk-au-veil-strong: rgba(15, 23, 48, 0.9);
    --tk-au-sheen: inset 0 1px 0 rgba(255, 255, 255, 0.09);
    --tk-au-glow: 0 0 0 4px rgba(47, 212, 196, 0.2), 0 8px 30px rgba(47, 212, 196, 0.3);
    --tk-au-glow-lg: 0 18px 50px rgba(111, 77, 235, 0.45), 0 0 52px rgba(47, 212, 196, 0.28);
    --tk-au-sunken: inset 0 2px 5px rgba(0, 0, 0, 0.35);
    --tk-au-tint: rgba(47, 212, 196, 0.1);
    --tk-au-tint-strong: rgba(47, 212, 196, 0.18);
    --tk-au-on-success-soft: #5FE9B4;
    --tk-au-on-warning-soft: #FFC96F;
    --tk-au-on-danger-soft: #FF93B0;
    --tk-au-on-info-soft: #6FE0EE;
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
/* Mesh menempel di viewport dan bernapas sangat pelan — bukan gambar yang
   digeser saat menggulir, melainkan cahaya yang memang ada di ruangan. */
body::before {
    content: '';
    position: fixed;
    inset: -25%;
    background: var(--tk-au-mesh);
    filter: blur(18px);
    /* Ditahan di bawah satu supaya isi halaman tetap punya bidang tenang; di mode
       gelap mesh boleh penuh karena latar tinta menelan sebagian besar cahayanya. */
    opacity: 0.68;
    animation: tk-au-breathe 34s ease-in-out infinite alternate;
    pointer-events: none;
    z-index: -2;
}
[data-tk-theme="dark"] body::before { opacity: 1; }
/* Tirai cahaya di langit atas: berkas miring yang bergoyang. */
body::after {
    content: '';
    position: fixed;
    top: -20%;
    left: -20%;
    right: -20%;
    height: 78%;
    background: var(--tk-au-curtain);
    filter: blur(20px);
    opacity: 0.55;
    -webkit-mask-image: radial-gradient(72% 100% at 50% 0%, #000 0%, transparent 72%);
    mask-image: radial-gradient(72% 100% at 50% 0%, #000 0%, transparent 72%);
    animation: tk-au-sway 26s ease-in-out infinite alternate;
    pointer-events: none;
    z-index: -1;
}
@keyframes tk-au-breathe {
    from { transform: translate3d(-2%, -1.5%, 0) scale(1); }
    to { transform: translate3d(2%, 1.5%, 0) scale(1.08); }
}
@keyframes tk-au-sway {
    from { transform: translate3d(-5%, 0, 0) skewX(-4deg) scaleY(1); }
    to { transform: translate3d(5%, 0, 0) skewX(4deg) scaleY(1.14); }
}
.tk-container {
    max-width: var(--tk-container);
    margin: 0 auto;
    padding: 0 var(--tk-space-lg);
}
iconify-icon { display: inline-block; vertical-align: -0.125em; }
::selection { background: rgba(111, 77, 235, 0.24); }

/* == tk: typography ============================================= */
.tk-display, .tk-h1, .tk-h2, .tk-h3, .tk-h4 {
    font-family: var(--tk-font-heading);
    font-weight: var(--tk-weight-heading);
    line-height: var(--tk-leading-heading);
    letter-spacing: -0.028em;
    color: var(--tk-color-text);
    margin: 0 0 var(--tk-space-md);
}
.tk-display { font-size: var(--tk-text-display); font-weight: 700; line-height: 1.04; letter-spacing: -0.04em; }
.tk-h1 { font-size: var(--tk-text-h1); font-weight: 700; }
.tk-h2 { font-size: var(--tk-text-h2); }
.tk-h3 { font-size: var(--tk-text-h3); }
.tk-h4 { font-size: var(--tk-text-h4); }
.tk-title { font-family: var(--tk-font-heading); font-size: var(--tk-text-title); font-weight: 600; letter-spacing: -0.015em; margin: 0 0 var(--tk-space-sm); }
.tk-body-lg { font-size: var(--tk-text-body-lg); }
.tk-body { font-size: var(--tk-text-body); }
.tk-body-sm { font-size: var(--tk-text-body-sm); }
.tk-caption { font-family: var(--tk-font-mono); font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); letter-spacing: 0.01em; }
.tk-muted { color: var(--tk-color-text-muted); }
.tk-link { color: var(--tk-color-primary); font-weight: 600; text-decoration: underline; text-decoration-thickness: 1.5px; text-underline-offset: 3px; text-decoration-color: rgba(111, 77, 235, 0.45); transition: color var(--tk-transition), text-decoration-color var(--tk-transition); }
.tk-link:hover { color: var(--tk-color-secondary); text-decoration-color: currentColor; }
.tk-code { font-family: var(--tk-font-mono); font-size: 0.85em; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); padding: 2px 8px; border-radius: var(--tk-radius-sm); }

/* == tk: button ================================================= */
/* Tombol utama adalah sepotong aurora: gradien tiga warna, kilau tipis di
   puncak, dan pendar berwarna yang mekar saat disentuh. */
.tk-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-sm);
    font-family: var(--tk-font-body);
    font-size: 15px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.005em;
    padding: 14px 26px;
    border: 1px solid transparent;
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), background var(--tk-transition), border-color var(--tk-transition), color var(--tk-transition), opacity var(--tk-transition);
    text-decoration: none;
    white-space: nowrap;
}
.tk-btn:not(:disabled):active { transform: translateY(1px); }
.tk-btn:disabled { opacity: 0.45; cursor: not-allowed; }
.tk-btn-primary {
    background: var(--tk-au-grad);
    background-size: 160% 160%;
    background-position: 0% 50%;
    color: var(--tk-au-on-grad);
    box-shadow: var(--tk-shadow-sm), var(--tk-au-sheen);
}
/* Gradiennya bergeser saat disorot — cahayanya berpindah, bukan warnanya berganti. */
.tk-btn-primary:hover:not(:disabled) { background-position: 100% 50%; transform: translateY(-2px); box-shadow: var(--tk-au-glow-lg), var(--tk-au-sheen); }
.tk-btn-secondary {
    background: var(--tk-au-grad-warm);
    background-size: 160% 160%;
    background-position: 0% 50%;
    color: var(--tk-au-on-grad);
    box-shadow: var(--tk-shadow-sm), var(--tk-au-sheen);
}
.tk-btn-secondary:hover:not(:disabled) { background-position: 100% 50%; transform: translateY(-2px); box-shadow: var(--tk-au-glow-lg), var(--tk-au-sheen); }
.tk-btn-danger { background: var(--tk-color-danger); color: #FFFFFF; box-shadow: var(--tk-shadow-sm), var(--tk-au-sheen); }
.tk-btn-danger:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(217, 58, 106, 0.34), var(--tk-au-sheen); }
[data-tk-theme="dark"] .tk-btn-danger { color: #3C1023; }
/* Outline adalah kaca tipis: isinya tembus mesh, tepinya garis rambut gradien. */
.tk-btn-outline {
    position: relative;
    background: var(--tk-au-veil);
    -webkit-backdrop-filter: blur(14px);
    backdrop-filter: blur(14px);
    border-color: var(--tk-color-border);
    color: var(--tk-color-text);
    box-shadow: var(--tk-shadow-sm);
}
.tk-btn-outline:hover:not(:disabled) { transform: translateY(-2px); border-color: transparent; box-shadow: var(--tk-shadow), var(--tk-au-sheen); }
.tk-btn-outline:hover:not(:disabled)::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: var(--tk-au-hairline);
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask-composite: exclude;
    pointer-events: none;
}
.tk-btn-ghost { background: transparent; color: var(--tk-color-text); }
.tk-btn-ghost:hover:not(:disabled) { background: var(--tk-au-tint); }
.tk-btn-text { background: none; color: var(--tk-color-primary); padding-left: 8px; padding-right: 8px; }
.tk-btn-text:hover:not(:disabled) { color: var(--tk-color-secondary); text-decoration: underline; text-underline-offset: 3px; }
.tk-btn-sm { font-size: 13px; padding: 10px 18px; }
.tk-btn-lg { font-size: 17px; padding: 18px 34px; }
.tk-btn-icon { padding: 13px; }
.tk-btn-loading { position: relative; color: transparent !important; pointer-events: none; }
.tk-btn-loading::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border: 2px solid var(--tk-au-on-grad);
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
.tk-label { font-size: 13px; font-weight: 600; color: var(--tk-color-text); }
.tk-help { font-size: 13px; color: var(--tk-color-text-muted); }
/* Kontrol adalah kaca yang sedikit cekung; saat fokus tepinya memancarkan
   pendar teal alih-alih menampilkan cincin biru bawaan browser. */
.tk-input, .tk-textarea, .tk-select-trigger {
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-sm);
    color: var(--tk-color-text);
    background: var(--tk-au-veil);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-sm);
    padding: 13px 16px;
    box-shadow: var(--tk-au-sunken);
    transition: border-color var(--tk-transition), box-shadow var(--tk-transition), background var(--tk-transition);
    outline: none;
}
.tk-input::placeholder, .tk-textarea::placeholder { color: var(--tk-color-text-muted); opacity: 0.8; }
.tk-input:focus, .tk-textarea:focus {
    background: var(--tk-au-veil-strong);
    border-color: var(--tk-color-primary);
    box-shadow: var(--tk-au-glow);
}
.tk-textarea { min-height: 100px; resize: vertical; }
.tk-field-error .tk-input, .tk-field-error .tk-select-trigger, .tk-field-error .tk-textarea {
    border-color: var(--tk-color-danger);
    box-shadow: 0 0 0 4px rgba(217, 58, 106, 0.16);
}
.tk-field-error .tk-help { color: var(--tk-color-danger); }
.tk-field-success .tk-input { border-color: var(--tk-color-success); box-shadow: 0 0 0 4px rgba(11, 138, 97, 0.16); }
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
    box-shadow: var(--tk-au-glow);
}
/* Menu melayang: kaca tebal supaya mesh di belakangnya terbaca sebagai kabut. */
.tk-select-menu {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    background: var(--tk-au-veil-strong);
    -webkit-backdrop-filter: blur(22px);
    backdrop-filter: blur(22px);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg), var(--tk-au-sheen);
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
.tk-option:hover { background: var(--tk-au-tint); }
.tk-option-selected { background: var(--tk-au-grad-soft); font-weight: 700; }
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
    width: 20px;
    height: 20px;
    flex: none;
    margin: 0;
    position: relative;
    background: var(--tk-au-veil);
    border: 1px solid var(--tk-color-border);
    box-shadow: var(--tk-au-sunken);
    cursor: pointer;
    transition: background var(--tk-transition), border-color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-checkbox { border-radius: 7px; }
.tk-checkbox:checked {
    background: var(--tk-au-grad);
    border-color: transparent;
    box-shadow: 0 4px 14px rgba(111, 77, 235, 0.3), var(--tk-au-sheen);
}
.tk-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 6.5px;
    top: 3px;
    width: 4px;
    height: 9px;
    border-right: 2px solid var(--tk-au-on-grad);
    border-bottom: 2px solid var(--tk-au-on-grad);
    transform: rotate(45deg);
}
.tk-radio { border-radius: var(--tk-radius-full); }
.tk-radio:checked {
    background: var(--tk-au-grad);
    border-color: transparent;
    box-shadow: 0 4px 14px rgba(111, 77, 235, 0.3), inset 0 0 0 4px var(--tk-color-surface);
}
.tk-checkbox:focus-visible, .tk-radio:focus-visible, .tk-toggle:focus-visible {
    outline: none;
    box-shadow: var(--tk-au-glow);
}
.tk-toggle { position: relative; width: 48px; height: 26px; flex: none; margin: 0; appearance: none; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); box-shadow: var(--tk-au-sunken); cursor: pointer; transition: background var(--tk-transition), border-color var(--tk-transition); }
.tk-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background: var(--tk-color-surface); border-radius: var(--tk-radius-full); box-shadow: 0 2px 6px rgba(28, 40, 92, 0.28); transition: transform var(--tk-transition); }
.tk-toggle:checked { background: var(--tk-au-grad); border-color: transparent; }
.tk-toggle:checked::after { transform: translateX(22px); }

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
    background: var(--tk-au-veil);
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-sm), var(--tk-au-sheen);
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
    background: var(--tk-au-grad);
    color: var(--tk-au-on-grad);
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
    background: var(--tk-au-veil-strong);
    -webkit-backdrop-filter: blur(22px);
    backdrop-filter: blur(22px);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow-lg), var(--tk-au-sheen);
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
.tk-dropdown-item:hover { background: var(--tk-au-tint); }
.tk-dropdown-item iconify-icon { color: var(--tk-color-primary); }
.tk-dropdown-item-danger, .tk-dropdown-item-danger iconify-icon { color: var(--tk-color-danger); }
.tk-dropdown-item-danger:hover { background: rgba(217, 58, 106, 0.12); }
.tk-dropdown-divider { height: 1px; background: var(--tk-color-border); border: none; margin: var(--tk-space-xs) var(--tk-space-sm); }

/* == tk: card =================================================== */
/* Kartu adalah kaca tipis di atas mesh: isinya membiarkan cahaya lewat, dan
   saat disorot pinggir rambut gradiennya menyala mengelilingi tepi. */
.tk-card {
    position: relative;
    background: var(--tk-au-veil);
    -webkit-backdrop-filter: blur(18px);
    backdrop-filter: blur(18px);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow), var(--tk-au-sheen);
    transition: transform var(--tk-transition), box-shadow var(--tk-transition), border-color var(--tk-transition);
}
.tk-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: var(--tk-au-hairline);
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask-composite: exclude;
    opacity: 0;
    transition: opacity var(--tk-transition);
    pointer-events: none;
}
.tk-card:hover { transform: translateY(-4px); box-shadow: var(--tk-shadow-lg), var(--tk-au-sheen); border-color: transparent; }
.tk-card:hover::before { opacity: 1; }
.tk-card-header { padding: var(--tk-space-lg) var(--tk-space-lg) 0; }
.tk-card-body { padding: var(--tk-space-lg); }
.tk-card-footer { padding: 0 var(--tk-space-lg) var(--tk-space-lg); display: flex; gap: var(--tk-space-md); flex-wrap: wrap; }
.tk-card-stat .tk-stat-value { font-family: var(--tk-font-heading); font-size: var(--tk-text-h2); font-weight: 700; letter-spacing: -0.035em; background: var(--tk-au-grad); -webkit-background-clip: text; background-clip: text; color: transparent; }
.tk-card-stat .tk-stat-trend-up { color: var(--tk-color-success); font-size: var(--tk-text-body-sm); font-weight: 600; }
.tk-card-stat .tk-stat-trend-down { color: var(--tk-color-danger); font-size: var(--tk-text-body-sm); font-weight: 600; }

/* == tk: navigation ============================================= */
.tk-navbar {
    display: flex;
    align-items: center;
    gap: var(--tk-space-lg);
    padding: var(--tk-space-md) var(--tk-space-lg);
    background: var(--tk-au-veil);
    -webkit-backdrop-filter: blur(22px);
    backdrop-filter: blur(22px);
    border-bottom: 1px solid var(--tk-color-border);
    position: relative;
    z-index: 5;
}
.tk-navbar-brand { font-family: var(--tk-font-heading); font-weight: 700; font-size: 19px; letter-spacing: -0.035em; margin-right: auto; color: var(--tk-color-text); }
.tk-navbar-link { color: var(--tk-color-text-muted); text-decoration: none; font-size: 14px; font-weight: 600; padding: 8px 15px; border-radius: var(--tk-radius-full); transition: background var(--tk-transition), color var(--tk-transition); }
.tk-navbar-link:hover { color: var(--tk-color-text); background: var(--tk-au-tint); }
.tk-navbar-link-active { color: var(--tk-au-on-grad); background: var(--tk-au-grad); box-shadow: 0 6px 18px rgba(111, 77, 235, 0.24); }
.tk-navbar-dark { background: rgba(7, 11, 26, 0.82); border-bottom-color: rgba(255, 255, 255, 0.12); }
.tk-navbar-dark .tk-navbar-brand { color: #FFFFFF; }
.tk-navbar-dark .tk-navbar-link { color: rgba(233, 239, 255, 0.7); }
.tk-navbar-dark .tk-navbar-link:hover { color: #FFFFFF; background: rgba(255, 255, 255, 0.1); }
.tk-navbar-dark .tk-navbar-link-active { color: var(--tk-au-on-grad); }
.tk-sidebar {
    width: 252px;
    background: var(--tk-au-veil);
    -webkit-backdrop-filter: blur(18px);
    backdrop-filter: blur(18px);
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
    padding: 10px var(--tk-space-md);
    border-radius: var(--tk-radius-full);
    color: var(--tk-color-text-muted);
    font-size: var(--tk-text-body-sm);
    font-weight: 600;
    text-decoration: none;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-sidebar-item:hover { background: var(--tk-au-tint); color: var(--tk-color-text); }
.tk-sidebar-item-active { background: var(--tk-au-grad); color: var(--tk-au-on-grad); box-shadow: 0 8px 22px rgba(111, 77, 235, 0.26), var(--tk-au-sheen); }
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
    background: var(--tk-au-veil);
    -webkit-backdrop-filter: blur(22px);
    backdrop-filter: blur(22px);
    border-bottom: 1px solid var(--tk-color-border);
}

/* == tk: tabs =================================================== */
.tk-tabs { display: flex; gap: 4px; border: 1px solid var(--tk-color-border); background: var(--tk-au-veil); border-radius: var(--tk-radius-full); padding: 5px; box-shadow: var(--tk-au-sunken); width: fit-content; max-width: 100%; overflow-x: auto; }
.tk-tab {
    padding: 9px 20px;
    font-size: 14px;
    font-weight: 600;
    color: var(--tk-color-text-muted);
    text-decoration: none;
    border-radius: var(--tk-radius-full);
    transition: color var(--tk-transition), background var(--tk-transition), box-shadow var(--tk-transition);
    white-space: nowrap;
}
.tk-tab:hover { color: var(--tk-color-text); }
.tk-tab-active { color: var(--tk-au-on-grad); background: var(--tk-au-grad); box-shadow: 0 6px 16px rgba(111, 77, 235, 0.24), var(--tk-au-sheen); }
.tk-segmented { display: inline-flex; border: 1px solid var(--tk-color-border); background: var(--tk-au-veil); border-radius: var(--tk-radius-full); padding: 5px; gap: 2px; box-shadow: var(--tk-au-sunken); }
.tk-segment {
    padding: 8px 18px;
    font-family: var(--tk-font-body);
    font-size: 13px;
    font-weight: 600;
    color: var(--tk-color-text-muted);
    border: none;
    background: transparent;
    border-radius: var(--tk-radius-full);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-segment:hover { color: var(--tk-color-text); }
.tk-segment-active { background: var(--tk-color-surface); color: var(--tk-color-primary); box-shadow: var(--tk-shadow-sm), var(--tk-au-sheen); }

/* == tk: badge ================================================== */
.tk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 12px;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: var(--tk-radius-full);
    border: 1px solid var(--tk-color-border);
    background: var(--tk-color-surface-2);
    color: var(--tk-color-text);
}
.tk-badge-success { color: var(--tk-au-on-success-soft); background: var(--tk-color-success-soft); border-color: rgba(11, 138, 97, 0.32); }
.tk-badge-warning { color: var(--tk-au-on-warning-soft); background: var(--tk-color-warning-soft); border-color: rgba(178, 106, 0, 0.32); }
.tk-badge-danger { color: var(--tk-au-on-danger-soft); background: var(--tk-color-danger-soft); border-color: rgba(217, 58, 106, 0.32); }
.tk-badge-info { color: var(--tk-au-on-info-soft); background: var(--tk-color-info-soft); border-color: rgba(14, 124, 134, 0.32); }
.tk-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-xs);
    font-size: 12px;
    font-weight: 500;
    padding: 5px 12px;
    border-radius: var(--tk-radius-full);
    border: 1px solid var(--tk-color-border);
    background: var(--tk-au-veil);
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
    box-shadow: var(--tk-shadow-sm);
}
.tk-alert-title { font-weight: 700; display: block; margin-bottom: 2px; }
.tk-alert-success { background: var(--tk-color-success-soft); border-color: rgba(11, 138, 97, 0.32); color: var(--tk-au-on-success-soft); }
.tk-alert-warning { background: var(--tk-color-warning-soft); border-color: rgba(178, 106, 0, 0.32); color: var(--tk-au-on-warning-soft); }
.tk-alert-danger { background: var(--tk-color-danger-soft); border-color: rgba(217, 58, 106, 0.32); color: var(--tk-au-on-danger-soft); }
.tk-alert-info { background: var(--tk-color-info-soft); border-color: rgba(14, 124, 134, 0.32); color: var(--tk-au-on-info-soft); }

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
.tk-table td { padding: var(--tk-space-md); border-bottom: 1px solid var(--tk-color-border); }
.tk-table tbody tr { transition: background var(--tk-transition); }
.tk-table tbody tr:hover { background: var(--tk-au-tint); }
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
.tk-action-btn:hover { background: var(--tk-au-tint-strong); color: var(--tk-color-primary); }
.tk-action-btn-danger:hover { background: rgba(217, 58, 106, 0.14); color: var(--tk-color-danger); }
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
    font-weight: 600;
    color: var(--tk-color-text-muted);
    cursor: pointer;
    transition: background var(--tk-transition), color var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-page:hover { background: var(--tk-au-tint); color: var(--tk-color-text); }
.tk-page-active { background: var(--tk-au-grad); color: var(--tk-au-on-grad); box-shadow: 0 6px 16px rgba(111, 77, 235, 0.26); }

/* == tk: overlay ================================================ */
.tk-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(19, 27, 51, 0.4);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--tk-space-lg);
}
.tk-modal {
    background: var(--tk-au-veil-strong);
    -webkit-backdrop-filter: blur(26px);
    backdrop-filter: blur(26px);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg), var(--tk-au-sheen);
    max-width: 460px;
    width: 100%;
}
.tk-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 372px;
    background: var(--tk-au-veil-strong);
    -webkit-backdrop-filter: blur(26px);
    backdrop-filter: blur(26px);
    border-left: 1px solid var(--tk-color-border);
    box-shadow: var(--tk-shadow-lg);
}

/* == tk: loading ================================================ */
.tk-spinner {
    width: 28px;
    height: 28px;
    border: 3px solid var(--tk-color-surface-2);
    border-top-color: var(--tk-color-primary);
    border-right-color: var(--tk-color-secondary);
    border-radius: var(--tk-radius-full);
    animation: tk-spin 0.8s linear infinite;
}
.tk-progress { height: 12px; background: var(--tk-color-surface-2); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-full); box-shadow: var(--tk-au-sunken); overflow: hidden; }
.tk-progress-bar {
    height: 100%;
    border-radius: var(--tk-radius-full);
    background: var(--tk-au-grad);
    box-shadow: var(--tk-au-sheen);
    transition: width var(--tk-transition);
}
.tk-skeleton {
    background: linear-gradient(90deg, var(--tk-color-surface-2) 25%, var(--tk-au-tint-strong) 50%, var(--tk-color-surface-2) 75%);
    background-size: 200% 100%;
    animation: tk-shimmer 1.6s infinite;
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
    background: var(--tk-au-veil);
}
.tk-empty-icon {
    width: 66px;
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius-full);
    background: var(--tk-au-grad-soft);
    color: var(--tk-color-primary);
    box-shadow: var(--tk-au-sheen);
}
.tk-empty-title { font-family: var(--tk-font-heading); font-weight: 600; font-size: var(--tk-text-h4); letter-spacing: -0.025em; }

/* == tk: content-blocks ========================================= */
/* Hero adalah langit malam kutub: mesh penuh plus tirai cahaya yang bergoyang
   di atasnya, tanpa satu pun garis batas antarwarna. */
.tk-hero { position: relative; text-align: center; padding: var(--tk-space-section) var(--tk-space-lg); overflow: hidden; border-radius: var(--tk-radius-lg); isolation: isolate; }
.tk-hero::before {
    content: '';
    position: absolute;
    inset: -30%;
    background: var(--tk-au-mesh);
    filter: blur(24px);
    opacity: 0.85;
    animation: tk-au-breathe 30s ease-in-out infinite alternate;
    pointer-events: none;
    z-index: -1;
}
.tk-hero::after {
    content: '';
    position: absolute;
    top: -30%;
    left: -20%;
    right: -20%;
    height: 96%;
    background: var(--tk-au-curtain);
    filter: blur(18px);
    opacity: 0.68;
    -webkit-mask-image: radial-gradient(66% 100% at 50% 0%, #000 0%, transparent 74%);
    mask-image: radial-gradient(66% 100% at 50% 0%, #000 0%, transparent 74%);
    animation: tk-au-sway 22s ease-in-out infinite alternate;
    pointer-events: none;
    z-index: -1;
}
.tk-hero > * { position: relative; max-width: 700px; margin-left: auto; margin-right: auto; }
.tk-hero .tk-display { margin-bottom: var(--tk-space-lg); }
.tk-hero-sub { font-size: var(--tk-text-body-lg); color: var(--tk-color-text-muted); margin: 0 auto var(--tk-space-xl); }
.tk-hero-actions { display: flex; gap: var(--tk-space-md); justify-content: center; flex-wrap: wrap; }
.tk-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-lg); }
.tk-feature {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--tk-space-sm);
    background: var(--tk-au-veil);
    -webkit-backdrop-filter: blur(18px);
    backdrop-filter: blur(18px);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow), var(--tk-au-sheen);
    padding: var(--tk-space-lg);
    transition: transform var(--tk-transition), box-shadow var(--tk-transition);
}
.tk-feature:hover { transform: translateY(-4px); box-shadow: var(--tk-shadow-lg), var(--tk-au-sheen); }
.tk-feature-icon {
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--tk-radius);
    background: var(--tk-au-grad);
    color: var(--tk-au-on-grad);
    box-shadow: 0 12px 26px rgba(111, 77, 235, 0.26), var(--tk-au-sheen);
}
.tk-cta {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    background: var(--tk-color-surface);
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow-lg);
    color: var(--tk-color-text);
    padding: var(--tk-space-2xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--tk-space-lg);
}
.tk-cta::before {
    content: '';
    position: absolute;
    inset: -40%;
    background: var(--tk-au-mesh);
    filter: blur(20px);
    animation: tk-au-breathe 28s ease-in-out infinite alternate;
    pointer-events: none;
    z-index: -1;
}
.tk-cta .tk-h3 { margin: 0; }

/* == tk: layout ================================================= */
.tk-grid { display: grid; gap: var(--tk-space-lg); }
.tk-grid-2 { grid-template-columns: repeat(2, 1fr); }
.tk-grid-3 { grid-template-columns: repeat(3, 1fr); }
.tk-grid-4 { grid-template-columns: repeat(4, 1fr); }
.tk-grid-12 { grid-template-columns: repeat(12, 1fr); }

/* == tk: aurora flavor ========================================== */
/* Penimpa karakter aurora di atas struktur kontrak: menang kaskade karena
   berada di ekor berkas. Enam perkakas cahaya — bidang mesh, tirai, pendar,
   halo, kaca berpinggir gradien, dan teks bergradien. Pakai hemat: cahaya
   hanya terbaca sebagai cahaya kalau ada bidang tenang di sebelahnya. */
@keyframes tk-au-float {
    from { transform: translateY(-8px); }
    to { transform: translateY(10px); }
}
/* Bidang mesh: kotak apa pun jadi sepotong langit aurora. */
.tk-mesh {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    border-radius: var(--tk-radius-lg);
    background: var(--tk-color-surface);
}
.tk-mesh::before {
    content: '';
    position: absolute;
    inset: -30%;
    background: var(--tk-au-mesh);
    filter: blur(22px);
    animation: tk-au-breathe 32s ease-in-out infinite alternate;
    pointer-events: none;
    z-index: -1;
}
.tk-mesh > * { position: relative; }
/* Tirai cahaya: berkas miring yang bergoyang — wujud khas aurora. Sengaja memakai
   ::after supaya bisa ditumpuk di atas .tk-mesh yang sudah memakai ::before. */
.tk-aurora {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    border-radius: var(--tk-radius-lg);
}
.tk-aurora::after {
    content: '';
    position: absolute;
    top: -40%;
    left: -20%;
    right: -20%;
    height: 150%;
    background: var(--tk-au-curtain);
    filter: blur(18px);
    opacity: 0.78;
    -webkit-mask-image: radial-gradient(70% 100% at 50% 0%, #000 0%, transparent 76%);
    mask-image: radial-gradient(70% 100% at 50% 0%, #000 0%, transparent 76%);
    animation: tk-au-sway 20s ease-in-out infinite alternate;
    pointer-events: none;
    z-index: -1;
}
/* Pendar: cahaya berwarna yang mekar dari balik elemen. */
.tk-glow { box-shadow: var(--tk-au-glow-lg); }
/* Halo: bulatan cahaya kabur tepat di belakang objek. */
.tk-halo { position: relative; isolation: isolate; }
.tk-halo::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 150%;
    aspect-ratio: 1;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(111, 77, 235, 0.42) 0%, rgba(79, 224, 176, 0.26) 42%, transparent 68%);
    filter: blur(26px);
    pointer-events: none;
    z-index: -1;
}
/* Kaca berpinggir rambut gradien: panel tembus pandang yang tepinya berwarna
   berpindah — dipakai untuk panel yang berdiri langsung di atas mesh. */
.tk-veil {
    position: relative;
    background: var(--tk-au-veil);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-radius: var(--tk-radius-lg);
    box-shadow: var(--tk-shadow), var(--tk-au-sheen);
}
.tk-veil::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: var(--tk-au-hairline);
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask-composite: exclude;
    pointer-events: none;
}
/* Teks bergradien: judul yang warnanya melarut seperti mesh-nya sendiri. */
.tk-gradient-text {
    background: var(--tk-au-grad);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
.tk-float { animation: tk-au-float 6s ease-in-out infinite alternate; }
/* Foto ikut melunak: sudut membulat dan tepi setipis rambut. */
.tk-card img, .tk-hero img, figure img {
    border: 1px solid var(--tk-color-border);
    border-radius: var(--tk-radius);
    box-shadow: var(--tk-shadow);
    box-sizing: border-box;
}
/* Cahaya boleh bergerak, tapi tidak boleh memaksa. */
@media (prefers-reduced-motion: reduce) {
    body::before, body::after, .tk-hero::before, .tk-hero::after, .tk-cta::before,
    .tk-mesh::before, .tk-aurora::after, .tk-float { animation: none; }
}
`;
