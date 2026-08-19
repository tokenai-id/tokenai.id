/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
/* eslint-disable max-len */

import { TokenaiDesignKitManifest } from './design-kit';

/**
 * Halaman arketipe (`pages/` + `partials/`) — ditulis SEKALI untuk semua kit.
 *
 * Kontrak kit mengunci nama kelas `tk-*` dan token `--tk-*`; karena semua kit
 * mengimplementasikan kelas yang sama, satu set markup arketipe otomatis tampil
 * dengan wajah kit mana pun lewat `styles.css`-nya sendiri. Yang berbeda per kit
 * hanya kepala halaman (import font, skrip ikon) — dibaca dari manifest saat
 * berkas kit dibangkitkan, bukan dirawat per kit.
 *
 * Halaman arketipe adalah HALAMAN PRODUKSI, bukan pratinjau: tanpa bilah `ex-nav`,
 * tanpa `?tk-embed`. Scaffolder wizard menyalinnya ke proyek, menyatukan partial,
 * membangun navigasi dari daftar halaman terpilih, dan mengganti placeholder —
 * semuanya deterministik, nol token. AI hanya mengganti teks contoh dengan
 * copywriting nyata (dan aset `data-tk-asset` bila pengguna memilih generate).
 *
 * Placeholder (diganti scaffolder, bukan AI):
 *   {{TK_BRAND}}        nama brand
 *   {{TK_TAGLINE}}      tagline pendek (scaffolder mengisi generik; AI memoles)
 *   {{TK_DESCRIPTION}}  deskripsi meta 1-2 kalimat
 *   {{TK_URL}}          asal kanonis, mis. https://contoh.id (tanpa garis miring akhir)
 *   {{TK_YEAR}}         tahun berjalan
 *   {{TK_LOGO}}         HTML logo di header (img bila ada logo, teks bila tidak)
 *   {{TK_NAV_ITEMS}}    butir navigasi header (dari template tk:nav-item)
 *   {{TK_FOOTER_ITEMS}} butir tautan footer (dari template tk:footer-item)
 *   {{TK_SITEMAP_ITEMS}} butir peta situs (dari template tk:sitemap-item)
 *
 * Marker baris (dikonsumsi scaffolder):
 *   <!-- tk:include partials/header.html -->  sisipkan partial
 *   <!-- tk:nav-item --> ... <!-- /tk:nav-item -->  template satu butir nav
 *   (varian footer-item dan sitemap-item serupa)
 */

export const TOKENAI_KIT_ARCHETYPES = [
    'home', 'about', 'contact', 'services', 'faq',
    'privacy', 'terms', 'cookies', 'sitemap',
    'catalog', 'product-detail', 'cart', 'menu',
    'pricing', 'features', 'blog-list', 'article',
    'gallery', 'booking', 'generic'
] as const;
export type TokenaiKitArchetype = typeof TOKENAI_KIT_ARCHETYPES[number];

/**
 * Markup arketipe memakai kosakata nama ikon Lucide. Set ikon lain punya penamaan
 * berbeda (mis. `ri` butuh sufiks `-line`, `tabler` memakai awalan `brand-` untuk
 * logo medsos), sehingga tanpa penerjemahan sebagian ikon — termasuk ikon media
 * sosial di footer — tidak dirender sama sekali. Tabel ini memetakan nama kanonis
 * (Lucide) ke padanannya di tiap set non-Lucide; nama yang tidak terdaftar berarti
 * sudah sama persis dengan Lucide. Semua padanan diverifikasi lewat API Iconify.
 */
const ICON_ALIASES: Record<string, Record<string, string>> = {
    // solar dipakai kit Anti-Design lewat gaya `-broken`: garis ikonnya sengaja terputus.
    // Penamaannya jauh dari Lucide (search → magnifier, mail → letter, menu → hamburger-menu)
    // sehingga seluruh nama diterjemahkan. Solar tidak punya logo brand sama sekali, jadi dua
    // ikon media sosial mengambil logo sungguhan dari simple-icons — bukan piktogram terdekat.
    // Empat nama diarahkan ke padanan terdekat: check → check-read (tanda centang tunggal tidak
    // ada), trophy → cup-star, truck → delivery, sparkles → stars.
    solar: {
        'arrow-right': 'arrow-right-broken',
        'badge-check': 'verified-check-broken',
        'bar-chart-3': 'chart-2-broken',
        'calendar': 'calendar-broken',
        'calendar-check': 'calendar-mark-broken',
        'check': 'check-read-broken',
        'check-circle-2': 'check-circle-broken',
        'chevron-down': 'alt-arrow-down-broken',
        'chevron-left': 'alt-arrow-left-broken',
        'chevron-right': 'alt-arrow-right-broken',
        'clock': 'clock-circle-broken',
        'credit-card': 'card-broken',
        'facebook': 'simple-icons:facebook',
        'headphones': 'headphones-round-broken',
        'heart-handshake': 'hand-heart-broken',
        'info': 'info-circle-broken',
        'instagram': 'simple-icons:instagram',
        'leaf': 'leaf-broken',
        'mail': 'letter-broken',
        'map-pin': 'map-point-broken',
        'menu': 'hamburger-menu-broken',
        'message-circle': 'chat-round-broken',
        'moon': 'moon-broken',
        'phone': 'phone-broken',
        'plug': 'plug-circle-broken',
        'rotate-ccw': 'refresh-broken',
        'search': 'magnifier-broken',
        'send': 'send-square-broken',
        'shield-check': 'shield-check-broken',
        'shopping-cart': 'cart-large-minimalistic-broken',
        'sparkles': 'stars-broken',
        'star': 'star-broken',
        'sun': 'sun-broken',
        'trash-2': 'trash-bin-trash-broken',
        'trending-up': 'graph-up-broken',
        'trophy': 'cup-star-broken',
        'truck': 'delivery-broken',
        'user': 'user-broken',
        'users': 'users-group-rounded-broken',
        'zap': 'bolt-broken'
    },
    // fluent dipakai kit Hyperreality lewat gaya `-24-filled`: bentuk pejal membulat yang
    // terbaca sebagai objek padat, bukan gambar garis. Ukuran ikut nama (`-24-`) dan seluruh
    // penamaannya berbeda dari Lucide (user → person, trash-2 → delete, zap → flash, moon →
    // weather-moon), jadi semuanya diterjemahkan. Fluent tidak memuat logo brand sehingga dua
    // ikon media sosial mengambil logo sungguhan dari simple-icons. Tiga nama diarahkan ke
    // padanan terdekat: badge-check → checkmark-starburst, heart-handshake → handshake,
    // leaf → leaf-one.
    fluent: {
        'arrow-right': 'arrow-right-24-filled',
        'badge-check': 'checkmark-starburst-24-filled',
        'bar-chart-3': 'data-bar-vertical-24-filled',
        'calendar': 'calendar-ltr-24-filled',
        'calendar-check': 'calendar-checkmark-24-filled',
        'check': 'checkmark-24-filled',
        'check-circle-2': 'checkmark-circle-24-filled',
        'chevron-down': 'chevron-down-24-filled',
        'chevron-left': 'chevron-left-24-filled',
        'chevron-right': 'chevron-right-24-filled',
        'clock': 'clock-24-filled',
        'credit-card': 'payment-24-filled',
        'facebook': 'simple-icons:facebook',
        'headphones': 'headphones-24-filled',
        'heart-handshake': 'handshake-24-filled',
        'info': 'info-24-filled',
        'instagram': 'simple-icons:instagram',
        'leaf': 'leaf-one-24-filled',
        'mail': 'mail-24-filled',
        'map-pin': 'location-24-filled',
        'menu': 'line-horizontal-3-24-filled',
        'message-circle': 'chat-24-filled',
        'moon': 'weather-moon-24-filled',
        'phone': 'call-24-filled',
        'plug': 'plug-connected-24-filled',
        'rotate-ccw': 'arrow-counterclockwise-24-filled',
        'search': 'search-24-filled',
        'send': 'send-24-filled',
        'shield-check': 'shield-checkmark-24-filled',
        'shopping-cart': 'cart-24-filled',
        'sparkles': 'sparkle-24-filled',
        'star': 'star-24-filled',
        'sun': 'weather-sunny-24-filled',
        'trash-2': 'delete-24-filled',
        'trending-up': 'data-trending-24-filled',
        'trophy': 'trophy-24-filled',
        'truck': 'vehicle-truck-24-filled',
        'user': 'person-24-filled',
        'users': 'people-24-filled',
        'zap': 'flash-24-filled'
    },
    // heroicons dipakai kit Aurora lewat gaya bawaannya (garis 24px, ujung membulat, sapuan
    // lapang) — senada dengan permukaan kit yang serba lembut. Penamaannya deskriptif dan
    // panjang (search → magnifying-glass, mail → envelope, zap → bolt, menu → bars-3) sehingga
    // yang berbeda diterjemahkan; sisanya sudah sama persis dengan Lucide. Heroicons tidak
    // memuat logo brand jadi dua ikon media sosial mengambil logo sungguhan dari simple-icons.
    // Empat nama diarahkan ke padanan terdekat yang justru lebih tepat maknanya di konteks
    // pemakaiannya: headphones → lifebuoy (blok dukungan pelanggan), plug → puzzle-piece (blok
    // integrasi), heart-handshake → heart (blok nilai brand), leaf → globe-alt (blok ramah
    // lingkungan); dan calendar-check → calendar-days karena set ini tidak punya kalender
    // bertanda centang.
    heroicons: {
        'badge-check': 'check-badge',
        'bar-chart-3': 'chart-bar',
        'calendar-check': 'calendar-days',
        'check-circle-2': 'check-circle',
        'facebook': 'simple-icons:facebook',
        'headphones': 'lifebuoy',
        'heart-handshake': 'heart',
        'info': 'information-circle',
        'instagram': 'simple-icons:instagram',
        'leaf': 'globe-alt',
        'mail': 'envelope',
        'menu': 'bars-3',
        'message-circle': 'chat-bubble-oval-left',
        'plug': 'puzzle-piece',
        'rotate-ccw': 'arrow-path',
        'search': 'magnifying-glass',
        'send': 'paper-airplane',
        'trash-2': 'trash',
        'trending-up': 'arrow-trending-up',
        'zap': 'bolt'
    },
    // flowbite memisahkan gaya lewat sufiks (`-outline` untuk garis, `-solid` untuk isian)
    // sehingga seluruh nama harus diterjemahkan; logo medsosnya hanya tersedia versi solid.
    // Lima nama tidak punya padanan di set ini dan diarahkan ke yang paling dekat maknanya:
    // leaf → seedling, plug → link, zap → rocket, heart-handshake → heart,
    // calendar-check → calendar-plus.
    flowbite: {
        'arrow-right': 'arrow-right-outline',
        'badge-check': 'badge-check-outline',
        'bar-chart-3': 'chart-outline',
        'calendar': 'calendar-month-outline',
        'calendar-check': 'calendar-plus-outline',
        'check': 'check-outline',
        'check-circle-2': 'check-circle-outline',
        'chevron-down': 'chevron-down-outline',
        'chevron-left': 'chevron-left-outline',
        'chevron-right': 'chevron-right-outline',
        'clock': 'clock-outline',
        'credit-card': 'credit-card-outline',
        'facebook': 'facebook-solid',
        'headphones': 'headphones-outline',
        'heart-handshake': 'heart-outline',
        'info': 'info-circle-outline',
        'instagram': 'instagram-solid',
        'leaf': 'seedling-outline',
        'mail': 'envelope-outline',
        'map-pin': 'map-pin-outline',
        'menu': 'bars-outline',
        'message-circle': 'message-dots-outline',
        'moon': 'moon-outline',
        'phone': 'phone-outline',
        'plug': 'link-outline',
        'rotate-ccw': 'refresh-outline',
        'search': 'search-outline',
        'send': 'paper-plane-outline',
        'shield-check': 'shield-check-outline',
        'shopping-cart': 'cart-outline',
        'sparkles': 'wand-magic-sparkles-outline',
        'star': 'star-outline',
        'sun': 'sun-outline',
        'trash-2': 'trash-bin-outline',
        'trending-up': 'chart-line-up-outline',
        'trophy': 'award-outline',
        'truck': 'truck-outline',
        'user': 'user-outline',
        'users': 'users-group-outline',
        'zap': 'rocket-outline'
    },
    tabler: {
        'badge-check': 'rosette-discount-check',
        'bar-chart-3': 'chart-bar',
        'check-circle-2': 'circle-check',
        'facebook': 'brand-facebook',
        'info': 'info-circle',
        'instagram': 'brand-instagram',
        'rotate-ccw': 'rotate',
        'trash-2': 'trash',
        'zap': 'bolt'
    },
    ph: {
        'badge-check': 'seal-check',
        'bar-chart-3': 'chart-bar',
        'check-circle-2': 'check-circle',
        'chevron-down': 'caret-down',
        'chevron-left': 'caret-left',
        'chevron-right': 'caret-right',
        'facebook': 'facebook-logo',
        'heart-handshake': 'handshake',
        'instagram': 'instagram-logo',
        'mail': 'envelope-simple',
        'menu': 'list',
        'message-circle': 'chat-circle',
        'rotate-ccw': 'arrow-counter-clockwise',
        'search': 'magnifying-glass',
        'send': 'paper-plane-tilt',
        'sparkles': 'sparkle',
        'trash-2': 'trash',
        'trending-up': 'trend-up',
        'zap': 'lightning'
    },
    // pixelarticons tidak punya logo brand; medsos memakai padanan piktogram terdekat.
    pixelarticons: {
        'badge-check': 'check-double',
        'bar-chart-3': 'chart-bar',
        'check-circle-2': 'checkbox',
        'facebook': 'external-link',
        'headphones': 'headset',
        'heart-handshake': 'heart',
        'info': 'info-box',
        'instagram': 'camera',
        'message-circle': 'message',
        'plug': 'power',
        'rotate-ccw': 'undo',
        'shield-check': 'shield',
        'trash-2': 'trash'
    },
    // codicon (ikon VS Code) juga tanpa logo brand; dipilih padanan semantik terdekat.
    codicon: {
        'badge-check': 'verified',
        'bar-chart-3': 'graph',
        'calendar-check': 'calendar',
        'check-circle-2': 'pass',
        'clock': 'watch',
        'facebook': 'globe',
        'headphones': 'broadcast',
        'heart-handshake': 'heart',
        'instagram': 'device-camera',
        'leaf': 'sparkle',
        'map-pin': 'location',
        'message-circle': 'comment-discussion',
        'moon': 'color-mode',
        'phone': 'device-mobile',
        'rotate-ccw': 'discard',
        'shield-check': 'shield',
        'shopping-cart': 'package',
        'sparkles': 'sparkle-filled',
        'star': 'star-full',
        'sun': 'color-mode',
        'trash-2': 'trash',
        'trending-up': 'graph-line',
        'trophy': 'star-empty',
        'truck': 'rocket',
        'user': 'account',
        'users': 'organization',
        'zap': 'pulse'
    },
    ri: {
        'arrow-right': 'arrow-right-line',
        'badge-check': 'verified-badge-line',
        'bar-chart-3': 'bar-chart-2-line',
        'calendar': 'calendar-line',
        'calendar-check': 'calendar-check-line',
        'check': 'check-line',
        'check-circle-2': 'checkbox-circle-line',
        'chevron-down': 'arrow-down-s-line',
        'chevron-left': 'arrow-left-s-line',
        'chevron-right': 'arrow-right-s-line',
        'clock': 'time-line',
        'credit-card': 'bank-card-line',
        'facebook': 'facebook-circle-line',
        'headphones': 'headphone-line',
        'heart-handshake': 'hand-heart-line',
        'info': 'information-line',
        'instagram': 'instagram-line',
        'leaf': 'leaf-line',
        'mail': 'mail-line',
        'map-pin': 'map-pin-line',
        'menu': 'menu-line',
        'message-circle': 'chat-3-line',
        'moon': 'moon-line',
        'phone': 'phone-line',
        'plug': 'plug-line',
        'rotate-ccw': 'arrow-go-back-line',
        'search': 'search-line',
        'send': 'send-plane-line',
        'shield-check': 'shield-check-line',
        'shopping-cart': 'shopping-cart-line',
        'sparkles': 'sparkling-2-line',
        'star': 'star-line',
        'sun': 'sun-line',
        'trash-2': 'delete-bin-line',
        'trending-up': 'line-chart-line',
        'trophy': 'trophy-line',
        'truck': 'truck-line',
        'user': 'user-line',
        'users': 'team-line',
        'zap': 'flashlight-line'
    },
    // feather adalah leluhur lucide: mayoritas nama sama, hanya sebagian kecil yang absen.
    feather: {
        'badge-check': 'award',
        'bar-chart-3': 'bar-chart-2',
        'calendar-check': 'calendar',
        'check-circle-2': 'check-circle',
        'heart-handshake': 'heart',
        'leaf': 'feather',
        'plug': 'power',
        'shield-check': 'shield',
        'sparkles': 'star',
        'trophy': 'award'
    },
    // la (Line Awesome) memakai kosakata Font Awesome 5, jadi hampir semua nama berbeda.
    la: {
        'badge-check': 'award',
        'bar-chart-3': 'chart-bar',
        'check-circle-2': 'check-circle',
        'chevron-down': 'angle-down',
        'chevron-left': 'angle-left',
        'chevron-right': 'angle-right',
        'facebook': 'facebook-f',
        'heart-handshake': 'handshake',
        'info': 'info-circle',
        'mail': 'envelope',
        'map-pin': 'map-marker',
        'menu': 'bars',
        'message-circle': 'comment',
        'rotate-ccw': 'undo',
        'send': 'paper-plane',
        'shield-check': 'shield-alt',
        'sparkles': 'magic',
        'trash-2': 'trash-alt',
        'trending-up': 'chart-line',
        'zap': 'bolt'
    },
    // mingcute memakai sufiks -line di semua ikon, jadi seluruh nama kanonis dipetakan.
    mingcute: {
        'arrow-right': 'arrow-right-line',
        'badge-check': 'award-line',
        'bar-chart-3': 'chart-bar-line',
        'calendar': 'calendar-line',
        'calendar-check': 'calendar-2-line',
        'check': 'check-line',
        'check-circle-2': 'check-circle-line',
        'chevron-down': 'down-line',
        'chevron-left': 'left-line',
        'chevron-right': 'right-line',
        'clock': 'time-line',
        'credit-card': 'bank-card-line',
        'facebook': 'facebook-line',
        'headphones': 'headphone-line',
        'heart-handshake': 'hand-heart-line',
        'heart': 'heart-line',
        'info': 'information-line',
        'instagram': 'instagram-line',
        'leaf': 'leaf-line',
        'mail': 'mail-line',
        'map-pin': 'location-line',
        'menu': 'menu-line',
        'message-circle': 'chat-1-line',
        'moon': 'moon-line',
        'phone': 'phone-line',
        'plug': 'plugin-2-line',
        'rotate-ccw': 'back-line',
        'search': 'search-line',
        'send': 'send-plane-line',
        'shield-check': 'safety-certificate-line',
        'shopping-cart': 'shopping-cart-1-line',
        'sparkles': 'sparkles-line',
        'star': 'star-line',
        'sun': 'sun-line',
        'trash-2': 'delete-2-line',
        'trending-up': 'trending-up-line',
        'trophy': 'trophy-line',
        'truck': 'truck-line',
        'user': 'user-3-line',
        'users': 'group-2-line',
        'zap': 'lightning-line'
    },
    // uil (Unicons) memakai kosakata ala Font Awesome; sebagian nama berbeda dari Lucide.
    uil: {
        'badge-check': 'award',
        'bar-chart-3': 'chart-bar',
        'calendar': 'calendar-alt',
        'calendar-check': 'schedule',
        'check-circle-2': 'check-circle',
        'chevron-down': 'angle-down',
        'chevron-left': 'angle-left',
        'chevron-right': 'angle-right',
        'facebook': 'facebook-f',
        'heart-handshake': 'heart-sign',
        'info': 'info-circle',
        'leaf': 'flower',
        'mail': 'envelope',
        'map-pin': 'map-marker',
        'menu': 'bars',
        'message-circle': 'comment',
        'rotate-ccw': 'history',
        'send': 'message',
        'sparkles': 'star',
        'trash-2': 'trash-alt',
        'trending-up': 'arrow-growth',
        'users': 'users-alt',
        'zap': 'bolt'
    },
    // bi (Bootstrap Icons) punya kosakata sendiri; sebagian nama berbeda dari Lucide.
    bi: {
        'badge-check': 'patch-check',
        'bar-chart-3': 'bar-chart',
        'check-circle-2': 'check-circle',
        'heart-handshake': 'hand-thumbs-up',
        'info': 'info-circle',
        'leaf': 'tree',
        'mail': 'envelope',
        'map-pin': 'geo-alt',
        'menu': 'list',
        'message-circle': 'chat',
        'phone': 'telephone',
        'rotate-ccw': 'arrow-counterclockwise',
        'shopping-cart': 'cart',
        'sparkles': 'stars',
        'trash-2': 'trash',
        'trending-up': 'graph-up-arrow',
        'user': 'person',
        'users': 'people',
        'zap': 'lightning'
    },
    // akar-icons punya kosakata sendiri yang ringkas; sebagian nama berbeda dari Lucide.
    'akar-icons': {
        'badge-check': 'ribbon',
        'bar-chart-3': 'statistic-up',
        'calendar-check': 'calendar',
        'check-circle-2': 'circle-check',
        'facebook': 'facebook-fill',
        'headphones': 'headphone',
        'heart-handshake': 'people-multiple',
        'instagram': 'instagram-fill',
        'leaf': 'plant',
        'mail': 'envelope',
        'map-pin': 'location',
        'menu': 'three-line-horizontal',
        'message-circle': 'comment',
        'plug': 'link-chain',
        'rotate-ccw': 'arrow-counter-clockwise',
        'shield-check': 'shield',
        'shopping-cart': 'cart',
        'trash-2': 'trash-can',
        'trending-up': 'statistic-up',
        'user': 'person',
        'users': 'people-group',
        'zap': 'thunder'
    },
    // ion (Ionicons) memakai kosakata sendiri; brand memakai awalan logo- dan
    // chevron-left/right lama sudah deprecated (diganti chevron-back/forward).
    ion: {
        'arrow-right': 'arrow-forward',
        'badge-check': 'ribbon',
        'bar-chart-3': 'bar-chart',
        'calendar-check': 'calendar',
        'check': 'checkmark',
        'check-circle-2': 'checkmark-circle',
        'chevron-left': 'chevron-back',
        'chevron-right': 'chevron-forward',
        'clock': 'time',
        'credit-card': 'card',
        'facebook': 'logo-facebook',
        'headphones': 'headset',
        'heart-handshake': 'heart-circle',
        'info': 'information-circle',
        'instagram': 'logo-instagram',
        'map-pin': 'location',
        'message-circle': 'chatbubble',
        'phone': 'call',
        'plug': 'extension-puzzle',
        'rotate-ccw': 'refresh',
        'shield-check': 'shield-checkmark',
        'shopping-cart': 'cart',
        'sun': 'sunny',
        'trash-2': 'trash',
        'truck': 'cube',
        'user': 'person',
        'users': 'people',
        'zap': 'flash'
    },
    // carbon (IBM Carbon) memakai kosakata sendiri; brand memakai awalan logo-.
    carbon: {
        'badge-check': 'certificate',
        'bar-chart-3': 'chart-bar',
        'calendar-check': 'calendar',
        'check': 'checkmark',
        'check-circle-2': 'checkmark-outline',
        'clock': 'time',
        'credit-card': 'purchase',
        'facebook': 'logo-facebook',
        'heart': 'favorite',
        'heart-handshake': 'partnership',
        'info': 'information',
        'instagram': 'logo-instagram',
        'leaf': 'tree',
        'mail': 'email',
        'map-pin': 'location',
        'message-circle': 'chat',
        'rotate-ccw': 'reset',
        'shield-check': 'security',
        'sparkles': 'magic-wand',
        'trash-2': 'trash-can',
        'trending-up': 'growth',
        'truck': 'delivery-truck',
        'users': 'user-multiple',
        'zap': 'lightning'
    },
    // teenyicons memberi sufiks -outline/-solid pada SEMUA ikonnya, jadi setiap
    // nama kanonis butuh alias; sebagian kosakatanya juga berbeda dari Lucide.
    teenyicons: {
        'arrow-right': 'arrow-right-outline',
        'badge-check': 'certificate-outline',
        'bar-chart-3': 'bar-chart-outline',
        'calendar': 'calendar-outline',
        'calendar-check': 'calendar-tick-outline',
        'check': 'tick-outline',
        'check-circle-2': 'tick-circle-outline',
        'chevron-down': 'down-outline',
        'chevron-left': 'left-outline',
        'chevron-right': 'right-outline',
        'clock': 'clock-outline',
        'credit-card': 'credit-card-outline',
        'facebook': 'facebook-outline',
        'headphones': 'headphones-outline',
        'heart-handshake': 'heart-circle-outline',
        'info': 'info-outline',
        'instagram': 'instagram-outline',
        'leaf': 'plant-outline',
        'mail': 'envelope-outline',
        'map-pin': 'pin-outline',
        'menu': 'menu-outline',
        'message-circle': 'message-outline',
        'moon': 'moon-outline',
        'phone': 'phone-outline',
        'plug': 'plug-outline',
        'rotate-ccw': 'refresh-outline',
        'search': 'search-outline',
        'send': 'send-outline',
        'shield-check': 'shield-tick-outline',
        'shopping-cart': 'cart-outline',
        'sparkles': 'wand-outline',
        'star': 'star-outline',
        'sun': 'sun-outline',
        'trash-2': 'bin-outline',
        'trending-up': 'trend-up-outline',
        'trophy': 'trophy-outline',
        'truck': 'box-outline',
        'user': 'user-outline',
        'users': 'users-outline',
        'zap': 'stopwatch-outline'
    },
    // mynaui memakai kosakata pendek (cart, trash, telephone) dan tidak punya trophy,
    // plug, maupun handshake — ketiganya dipetakan ke padanan terdekat yang tersedia.
    mynaui: {
        'badge-check': 'check-circle-solid',
        'bar-chart-3': 'chart-bar',
        'check-circle-2': 'check-circle',
        'clock': 'clock-circle',
        'heart-handshake': 'heart-circle',
        'info': 'info-circle',
        'message-circle': 'message',
        'phone': 'telephone',
        'plug': 'power',
        'rotate-ccw': 'refresh',
        'shopping-cart': 'cart',
        'trash-2': 'trash',
        'trophy': 'badge',
        'zap': 'lightning'
    },
    // hugeicons memakai sufiks angka pada banyak ikonnya (-01, -02) dan sebagian
    // kosakatanya berbeda dari Lucide; brand memakai sufiks angka juga.
    hugeicons: {
        'arrow-right': 'arrow-right-01',
        'badge-check': 'checkmark-badge-01',
        'bar-chart-3': 'chart-line-data-01',
        'calendar': 'calendar-01',
        'calendar-check': 'calendar-check-in-01',
        'check': 'tick-01',
        'check-circle-2': 'checkmark-circle-01',
        'chevron-down': 'arrow-down-01',
        'chevron-left': 'arrow-left-01',
        'chevron-right': 'arrow-right-01',
        'clock': 'clock-01',
        'facebook': 'facebook-01',
        'heart-handshake': 'agreement-01',
        'info': 'information-circle',
        'leaf': 'leaf-01',
        'mail': 'mail-01',
        'map-pin': 'location-01',
        'menu': 'menu-01',
        'message-circle': 'message-01',
        'moon': 'moon-01',
        'phone': 'call',
        'plug': 'plug-socket',
        'rotate-ccw': 'refresh',
        'search': 'search-01',
        'send': 'sent',
        'shield-check': 'shield-01',
        'shopping-cart': 'shopping-cart-01',
        'sun': 'sun-01',
        'trash-2': 'delete-02',
        'trending-up': 'chart-increase',
        'trophy': 'champion',
        'users': 'user-multiple',
        'zap': 'flash'
    },
    iconoir: {
        'bar-chart-3': 'stats-report',
        'check-circle-2': 'check-circle',
        'chevron-down': 'nav-arrow-down',
        'chevron-left': 'nav-arrow-left',
        'chevron-right': 'nav-arrow-right',
        'headphones': 'headset',
        'heart-handshake': 'community',
        'info': 'info-circle',
        'message-circle': 'chat-bubble-empty',
        'moon': 'half-moon',
        'plug': 'ev-plug',
        'rotate-ccw': 'undo',
        'shopping-cart': 'cart',
        'sparkles': 'sparks',
        'sun': 'sun-light',
        'trash-2': 'trash',
        'trending-up': 'graph-up',
        'users': 'group',
        'zap': 'flash'
    },
    // jam dipakai kit Monochrome: garis setipis hairline dengan sudut geometris dan satu bobot
    // untuk semua, sehingga ikon duduk setara dengan garis 1px yang memisahkan hampir semua hal
    // di kit itu. Penamaannya dekat dengan Lucide sehingga sebagian besar sudah cocok apa adanya;
    // jam juga memuat logo brand sungguhan, jadi ikon media sosial tidak perlu meminjam set lain.
    // Enam nama diarahkan ke padanan terdekat karena jam tidak memuat aslinya: badge-check →
    // medal (klaim bersertifikat), check-circle-2 → check (set ini tidak punya centang berlingkar,
    // dan centang telanjang justru lebih tenang di sini), sparkles → magic (tongkat berkilau),
    // trending-up → arrow-up-right, truck → box (paket kiriman), zap → rocket (isyarat cepat).
    jam: {
        'badge-check': 'medal',
        'bar-chart-3': 'bar-chart',
        'calendar-check': 'calendar-alt',
        'check-circle-2': 'check',
        'headphones': 'headset',
        'heart-handshake': 'heart',
        'mail': 'envelope',
        'map-pin': 'map-marker',
        'message-circle': 'message',
        'rotate-ccw': 'refresh-reverse',
        'send': 'paper-plane',
        'sparkles': 'magic',
        'trash-2': 'trash',
        'trending-up': 'arrow-up-right',
        'truck': 'box',
        'zap': 'rocket'
    },
    // mage dipakai kit Soft UI: garis membulat dengan ujung tumpul dan sudut yang selalu
    // dilengkungkan, senada dengan radius besar kitnya. Penamaannya sebagian mengikuti Lucide,
    // sisanya diterjemahkan di sini. Logo media sosial diambil dari mage sendiri supaya sebaris
    // di footer sama-sama bergaris tipis: instagram memakai varian -square (versi -circle jadi
    // cincin ganda di dalam tombol bundar), dan message-circle diarahkan ke logo whatsapp karena
    // di seluruh arketipe nama itu hanya dipakai untuk tautan dan tombol WhatsApp — gelembung
    // obrolan biasa tetap tersedia lewat `mage:message` yang dipanggil langsung oleh kitnya.
    // Empat nama diarahkan ke padanan terdekat karena mage tidak memuat aslinya: leaf → earth
    // (nilai keberlanjutan), plug → link (integrasi antaralat), send → aeroplane (metafora kirim
    // yang sama dengan pesawat kertas), dan headphones → heaphone, nama yang memang salah eja di
    // dalam set itu sendiri.
    mage: {
        'badge-check': 'verified-check',
        'bar-chart-3': 'chart',
        'check-circle-2': 'check-circle',
        'headphones': 'heaphone',
        'heart-handshake': 'heart',
        'info': 'information-circle',
        'instagram': 'instagram-square',
        'leaf': 'earth',
        'mail': 'email',
        'map-pin': 'location-pin',
        'menu': 'dash-menu',
        'message-circle': 'whatsapp',
        'plug': 'link',
        'rotate-ccw': 'refresh-reverse',
        'send': 'aeroplane',
        'sparkles': 'stars-a',
        'trending-up': 'chart-up',
        'truck': 'delivery-truck'
    },
    // material-symbols-light dipakai kit Luxury Editorial: Material Symbols pada bobot paling
    // tipis yang tersedia, sehingga garis ikonnya tidak pernah lebih berat daripada goresan halus
    // serif kontras tinggi kitnya. Cakupannya nyaris lengkap, tetapi kosakatanya ikut penamaan
    // Material (user → person, users → group, trash-2 → delete, clock → schedule, sun/moon →
    // light-mode/dark-mode) sehingga hampir semuanya diterjemahkan. Set ini tidak memuat logo
    // brand sama sekali, jadi ketiga ikon media sosial mengambil logo sungguhan dari simple-icons —
    // termasuk `message-circle`, yang di seluruh arketipe hanya dipakai untuk tautan dan tombol
    // WhatsApp; gelembung obrolan biasa tetap tersedia lewat `chat-bubble` yang dipanggil langsung
    // oleh kitnya. Tiga nama diarahkan ke padanan terdekat: sparkles → diamond (kilau yang paling
    // pas untuk kit barang mewah, sekaligus satu-satunya ikon "berkilau" di set ini), plug →
    // electrical-services (Material tidak punya steker tunggal), dan heart-handshake → handshake.
    'material-symbols-light': {
        'arrow-right': 'arrow-right-alt',
        'badge-check': 'verified',
        'bar-chart-3': 'bar-chart-4-bars',
        'calendar': 'calendar-month',
        'calendar-check': 'event-available',
        'check-circle-2': 'check-circle-outline',
        'chevron-down': 'keyboard-arrow-down',
        'chevron-left': 'keyboard-arrow-left',
        'chevron-right': 'keyboard-arrow-right',
        'clock': 'schedule',
        'facebook': 'simple-icons:facebook',
        'heart-handshake': 'handshake',
        'instagram': 'simple-icons:instagram',
        'leaf': 'eco',
        'map-pin': 'location-on',
        'message-circle': 'simple-icons:whatsapp',
        'moon': 'dark-mode',
        'phone': 'call',
        'plug': 'electrical-services',
        'rotate-ccw': 'refresh',
        'shield-check': 'verified-user',
        'sparkles': 'diamond',
        'sun': 'light-mode',
        'trash-2': 'delete',
        'truck': 'local-shipping',
        'user': 'person',
        'users': 'group',
        'zap': 'bolt'
    }
};

function ic(set: string): (name: string, size?: number) => string {
    const aliases = ICON_ALIASES[set] ?? {};
    return (name, size = 18) => {
        // Alias yang sudah memuat prefix (`set-lain:nama`) dipakai apa adanya. Ini jalan keluar
        // untuk set tanpa logo brand: ikon media sosial tetap logo sungguhan dari set lain
        // ketimbang piktogram terdekat yang tidak dikenali pengunjung.
        const alias = aliases[name] ?? name;
        const icon = alias.includes(':') ? alias : `${set}:${alias}`;
        return `<iconify-icon icon="${icon}" width="${size}" height="${size}"></iconify-icon>`;
    };
}

function img(w: number, h: number, label: string, asset: string): string {
    const text = encodeURIComponent(label);
    return `<img src="https://placehold.co/${w}x${h}?text=${text}" alt="${label}" width="${w}" height="${h}" data-tk-asset="${asset}" loading="lazy" style="width:100%;height:auto;border-radius:var(--tk-radius)">`;
}

/**
 * Perancah tata letak arketipe (`ap-*`) — bukan bagian kontrak kit; hanya lem tata letak
 * yang membaca token `--tk-*` sehingga ikut wajah kit. Ditanam di tiap halaman supaya
 * halaman hasil scaffold berdiri sendiri (tanpa berkas CSS kedua).
 */
const AP_CSS = `    /* Perancah halaman (ap-*): lem tata letak, membaca token kit. */
    * { box-sizing: border-box; }
    body { margin: 0; }
    .ap-skip { position: absolute; left: -9999px; top: 0; z-index: 30; background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); padding: 8px 16px; border-radius: var(--tk-radius); text-decoration: none; font-size: var(--tk-text-body-sm); }
    .ap-skip:focus { left: 12px; top: 12px; }
    .ap-header { position: sticky; top: 0; z-index: 20; }
    .ap-header .tk-navbar { position: relative; }
    .ap-logo { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; color: var(--tk-color-text); font-family: var(--tk-font-heading); font-weight: var(--tk-weight-heading); font-size: var(--tk-text-title); }
    .ap-logo img { height: 36px; width: auto; display: block; }
    /* Logo mendorong tautan ke kanan — pola yang sama dengan .tk-navbar-brand milik kit. */
    .ap-header .ap-logo { margin-right: auto; }
    .ap-links { display: flex; gap: var(--tk-space-lg); align-items: center; }
    .ap-links .tk-navbar-link { white-space: nowrap; }
    .ap-burger { display: none; }
    /* Sakelar tema terang/gelap: ikon bulan di mode terang, matahari di mode gelap. */
    .ap-theme { padding: 8px; line-height: 1; }
    .ap-theme span { display: inline-flex; }
    .ap-theme .ap-theme-sun { display: none; }
    [data-tk-theme="dark"] .ap-theme .ap-theme-sun { display: inline-flex; }
    [data-tk-theme="dark"] .ap-theme .ap-theme-moon { display: none; }
    .ap-section { max-width: var(--tk-container); margin: 0 auto; padding: var(--tk-space-2xl) var(--tk-space-lg); }
    .ap-section-title { text-align: center; margin: 0 0 var(--tk-space-sm); }
    .ap-section-sub { text-align: center; color: var(--tk-color-text-muted); max-width: 560px; margin: 0 auto var(--tk-space-xl); }
    .ap-page-head { max-width: var(--tk-container); margin: 0 auto; padding: var(--tk-space-2xl) var(--tk-space-lg) 0; }
    .ap-page-head h1 { margin: 0 0 var(--tk-space-sm); }
    .ap-page-head p { color: var(--tk-color-text-muted); margin: 0; max-width: 640px; }
    .ap-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: var(--tk-space-xl); align-items: start; }
    .ap-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-lg); }
    .ap-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--tk-space-lg); }
    .ap-prose { max-width: 720px; margin: 0 auto; line-height: var(--tk-leading-body); }
    .ap-prose h2 { margin: var(--tk-space-xl) 0 var(--tk-space-sm); }
    .ap-prose p, .ap-prose li { color: var(--tk-color-text); }
    .ap-card-img { margin: calc(var(--tk-space-md) * -1) calc(var(--tk-space-md) * -1) var(--tk-space-md); }
    .ap-card-img img { border-radius: var(--tk-radius) var(--tk-radius) 0 0; display: block; }
    .ap-price-row { display: flex; align-items: baseline; justify-content: space-between; gap: var(--tk-space-sm); }
    .ap-meta { display: flex; gap: var(--tk-space-md); flex-wrap: wrap; color: var(--tk-color-text-muted); font-size: var(--tk-text-body-sm); align-items: center; }
    .ap-footer { border-top: var(--tk-border-width) solid var(--tk-color-border); margin-top: var(--tk-space-2xl); background: var(--tk-color-surface); }
    .ap-footer-inner { max-width: var(--tk-container); margin: 0 auto; padding: var(--tk-space-2xl) var(--tk-space-lg); display: grid; grid-template-columns: 1.6fr 1fr 1.1fr 1fr; gap: var(--tk-space-xl); }
    .ap-footer-links { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: var(--tk-space-xs); }
    .ap-footer-links a { color: var(--tk-color-text-muted); text-decoration: none; font-size: var(--tk-text-body-sm); }
    .ap-footer-links a:hover { color: var(--tk-color-text); }
    .ap-footer-bottom { border-top: var(--tk-border-width) solid var(--tk-color-border); }
    .ap-footer-bottom-inner { max-width: var(--tk-container); margin: 0 auto; padding: var(--tk-space-md) var(--tk-space-lg); font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); }
    .ap-faq { max-width: 720px; margin: 0 auto; display: flex; flex-direction: column; gap: var(--tk-space-sm); }
    .ap-faq details { background: var(--tk-color-surface); border: var(--tk-border-width) solid var(--tk-color-border); border-radius: var(--tk-radius); padding: var(--tk-space-md); }
    .ap-faq summary { cursor: pointer; font-weight: 600; }
    .ap-faq details p { margin: var(--tk-space-sm) 0 0; color: var(--tk-color-text-muted); }
    .ap-menu-item { display: flex; justify-content: space-between; gap: var(--tk-space-md); padding: var(--tk-space-md) 0; border-bottom: var(--tk-border-width) dashed var(--tk-color-border); }
    .ap-menu-item strong { display: block; }
    .ap-menu-item small { color: var(--tk-color-text-muted); }
    .ap-menu-price { white-space: nowrap; font-weight: 600; }
    .ap-gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-md); }
    .ap-steps { counter-reset: ap-step; display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--tk-space-lg); }
    .ap-step { counter-increment: ap-step; }
    .ap-step::before { content: counter(ap-step); display: inline-flex; width: 32px; height: 32px; align-items: center; justify-content: center; border-radius: var(--tk-radius-full); background: var(--tk-color-primary); color: var(--tk-color-primary-contrast); font-weight: 600; margin-bottom: var(--tk-space-sm); }
    .ap-summary { position: sticky; top: 80px; }
    .ap-qty { display: inline-flex; align-items: center; gap: var(--tk-space-sm); }
    /* Hero belah: teks kiri, media kanan — komposisi pembuka yang tidak generik. */
    .ap-hero { max-width: var(--tk-container); margin: 0 auto; padding: var(--tk-space-3xl) var(--tk-space-lg); display: grid; grid-template-columns: 1.05fr 0.95fr; gap: var(--tk-space-2xl); align-items: center; }
    .ap-hero h1 { margin: 0 0 var(--tk-space-md); }
    .ap-hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; border: var(--tk-border-width) solid var(--tk-color-border); border-radius: var(--tk-radius-full); background: var(--tk-color-surface); color: var(--tk-color-text-muted); font-size: var(--tk-text-caption); font-weight: 500; margin-bottom: var(--tk-space-md); }
    .ap-hero-sub { color: var(--tk-color-text-muted); font-size: var(--tk-text-body-lg); line-height: var(--tk-leading-body); margin: 0 0 var(--tk-space-lg); max-width: 520px; }
    .ap-hero-actions { display: flex; gap: var(--tk-space-sm); flex-wrap: wrap; margin-bottom: var(--tk-space-lg); }
    .ap-hero-trust { display: flex; align-items: center; gap: 10px; color: var(--tk-color-text-muted); font-size: var(--tk-text-body-sm); flex-wrap: wrap; }
    .ap-stars { color: var(--tk-color-warning); display: inline-flex; align-items: center; gap: 1px; }
    .ap-hero-media { position: relative; min-width: 0; }
    .ap-hero-media img { width: 100%; height: auto; border-radius: var(--tk-radius-lg); display: block; box-shadow: var(--tk-shadow-lg); }
    .ap-hero-card { position: absolute; left: -16px; bottom: 20px; display: flex; gap: 10px; align-items: center; background: var(--tk-color-surface); border: var(--tk-border-width) solid var(--tk-color-border); border-radius: var(--tk-radius); padding: 10px 16px; box-shadow: var(--tk-shadow-lg); font-size: var(--tk-text-body-sm); }
    .ap-hero-card strong { display: block; }
    .ap-hero-card small { color: var(--tk-color-text-muted); }
    /* Pita seksi: latar selang-seling supaya halaman punya ritme, bukan hamparan putih. */
    .ap-band { background: var(--tk-color-surface); border-top: var(--tk-border-width) solid var(--tk-color-border); border-bottom: var(--tk-border-width) solid var(--tk-color-border); }
    .ap-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--tk-space-lg); text-align: center; }
    .ap-stat strong { display: block; font-family: var(--tk-font-heading); font-weight: var(--tk-weight-heading); font-size: var(--tk-text-h2); color: var(--tk-color-text); }
    .ap-stat span { color: var(--tk-color-text-muted); font-size: var(--tk-text-body-sm); }
    /* Testimoni: kartu kutipan dengan bintang dan identitas — bukti sosial standar situs profesional. */
    .ap-quote { display: flex; flex-direction: column; height: 100%; }
    .ap-quote blockquote { margin: var(--tk-space-sm) 0 var(--tk-space-md); color: var(--tk-color-text); line-height: var(--tk-leading-body); }
    .ap-quote-person { display: flex; align-items: center; gap: 10px; margin-top: auto; }
    .ap-avatar { width: 38px; height: 38px; border-radius: var(--tk-radius-full); background: var(--tk-color-surface-2); border: var(--tk-border-width) solid var(--tk-color-border); display: inline-flex; align-items: center; justify-content: center; color: var(--tk-color-text-muted); font-weight: 600; font-size: var(--tk-text-body-sm); flex: none; }
    .ap-quote-person strong { display: block; font-size: var(--tk-text-body-sm); }
    .ap-quote-person small { color: var(--tk-color-text-muted); }
    .ap-check { display: flex; gap: 10px; align-items: flex-start; margin: 10px 0; color: var(--tk-color-text); }
    .ap-check iconify-icon { color: var(--tk-color-success); flex: none; margin-top: 2px; }
    .ap-trust-row { display: flex; gap: var(--tk-space-lg); flex-wrap: wrap; margin-top: var(--tk-space-md); color: var(--tk-color-text-muted); font-size: var(--tk-text-body-sm); }
    .ap-trust-row span { display: inline-flex; align-items: center; gap: 6px; }
    .ap-thumbs { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--tk-space-sm); margin-top: var(--tk-space-sm); }
    .ap-thumbs img { border-radius: var(--tk-radius-sm); border: var(--tk-border-width) solid var(--tk-color-border); cursor: pointer; transition: var(--tk-transition); }
    .ap-thumbs img:hover { border-color: var(--tk-color-primary); }
    select.tk-input { cursor: pointer; }
    [hidden] { display: none !important; }
    /* Tab sebagai <button>: aturan .tk-tab kit ditulis untuk <a>, jadi kulit bawaan
       browser (border/background/font tombol) di-reset di sini agar tampil identik. */
    .tk-tabs button.tk-tab { background: none; border: 0; border-bottom: 2px solid transparent; padding: var(--tk-space-sm) 2px 12px; margin-bottom: -1px; font-family: inherit; font-size: var(--tk-text-body-sm); font-weight: 500; color: var(--tk-color-text-muted); cursor: pointer; }
    .tk-tabs button.tk-tab:hover { color: var(--tk-color-text); }
    .tk-tabs button.tk-tab-active { color: var(--tk-color-text); border-bottom-color: var(--tk-color-primary); }
    /* Dropdown custom (ap-select): popup <select> native tidak bisa terbuka di webview
       pratinjau IDE, jadi arketipe memakai listbox sendiri yang digerakkan site.js. */
    .ap-select { position: relative; }
    .ap-select-btn { display: flex; align-items: center; justify-content: space-between; gap: 8px; width: 100%; font-family: inherit; text-align: left; cursor: pointer; }
    .ap-select-btn .ap-select-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .ap-select-btn iconify-icon { color: var(--tk-color-text-muted); flex: none; transition: var(--tk-transition); }
    .ap-select[data-ap-open] .ap-select-btn iconify-icon { transform: rotate(180deg); }
    .ap-select-menu { position: absolute; top: calc(100% + 4px); left: 0; right: 0; z-index: 15; display: flex; flex-direction: column; gap: 2px; background: var(--tk-color-surface); border: var(--tk-border-width) solid var(--tk-color-border); border-radius: var(--tk-radius); box-shadow: var(--tk-shadow-lg); padding: 4px; max-height: 280px; overflow: auto; }
    .ap-select-opt { background: none; border: 0; font-family: inherit; font-size: var(--tk-text-body-sm); text-align: left; padding: 8px 10px; border-radius: var(--tk-radius-sm); cursor: pointer; color: var(--tk-color-text); }
    .ap-select-opt:hover { background: var(--tk-color-surface-2); }
    .ap-select-opt[aria-selected="true"] { color: var(--tk-color-primary); font-weight: 600; }
    .tk-filter-bar .ap-select { flex: none; width: 200px; }
    .ap-footer-title { font-size: var(--tk-text-body-sm); font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: var(--tk-color-text); margin: 0 0 var(--tk-space-sm); }
    .ap-footer-contact { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: var(--tk-space-sm); color: var(--tk-color-text-muted); font-size: var(--tk-text-body-sm); }
    .ap-footer-contact li { display: flex; gap: 8px; align-items: flex-start; }
    .ap-footer-contact iconify-icon { flex: none; margin-top: 2px; }
    .ap-social { display: flex; gap: 8px; margin-top: var(--tk-space-md); }
    .ap-social a { display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border: var(--tk-border-width) solid var(--tk-color-border); border-radius: var(--tk-radius-full); color: var(--tk-color-text-muted); transition: var(--tk-transition); }
    .ap-social a:hover { color: var(--tk-color-primary); border-color: var(--tk-color-primary); }
    .ap-footer-bottom-inner { display: flex; justify-content: space-between; gap: var(--tk-space-md); flex-wrap: wrap; }
    /* Varian hero per resep jenis website — komposisi pembuka yang berbeda per jenis. */
    .ap-kicker { letter-spacing: 0.14em; text-transform: uppercase; font-size: var(--tk-text-caption); color: var(--tk-color-primary); font-weight: 600; margin: 0 0 var(--tk-space-sm); }
    .ap-hero-c { max-width: var(--tk-container); margin: 0 auto; padding: var(--tk-space-3xl) var(--tk-space-lg) var(--tk-space-2xl); text-align: center; }
    .ap-hero-c h1 { margin: 0 0 var(--tk-space-md); }
    .ap-hero-c .ap-hero-sub { margin-left: auto; margin-right: auto; max-width: 620px; }
    .ap-hero-c .ap-hero-actions, .ap-hero-c .ap-hero-trust { justify-content: center; }
    .ap-hero-shot { margin-top: var(--tk-space-xl); }
    .ap-hero-shot img { width: 100%; height: auto; display: block; border-radius: var(--tk-radius-lg); box-shadow: var(--tk-shadow-lg); border: var(--tk-border-width) solid var(--tk-color-border); }
    .ap-hero-v { position: relative; }
    .ap-hero-v > img { width: 100%; height: 520px; object-fit: cover; display: block; border-radius: 0; }
    .ap-hero-v-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; padding: var(--tk-space-2xl) max(var(--tk-space-lg), calc((100% - var(--tk-container)) / 2 + var(--tk-space-lg))); background: linear-gradient(90deg, rgba(12, 12, 14, 0.72) 0%, rgba(12, 12, 14, 0.35) 60%, rgba(12, 12, 14, 0.08) 100%); }
    .ap-hero-v-overlay h1 { color: #fff; margin: 0 0 var(--tk-space-md); max-width: 640px; }
    .ap-hero-v-overlay .ap-hero-sub { color: rgba(255, 255, 255, 0.88); max-width: 480px; }
    .ap-hero-v-overlay .ap-hero-badge { background: rgba(255, 255, 255, 0.14); border-color: rgba(255, 255, 255, 0.34); color: #fff; }
    .ap-hero-v-overlay .tk-btn-outline { border-color: rgba(255, 255, 255, 0.65); color: #fff; background: transparent; }
    .ap-hero-m { max-width: var(--tk-container); margin: 0 auto; padding: calc(var(--tk-space-3xl) * 1.25) var(--tk-space-lg) var(--tk-space-xl); }
    .ap-hero-m h1 { font-size: clamp(2.6rem, 7vw, 4.4rem); line-height: 1.05; margin: 0 0 var(--tk-space-md); max-width: 900px; }
    .ap-hero-m .ap-hero-sub { max-width: 560px; }
    .ap-hero-e { max-width: var(--tk-container); margin: 0 auto; padding: var(--tk-space-2xl) var(--tk-space-lg); display: grid; grid-template-columns: 1.25fr 0.75fr; gap: var(--tk-space-2xl); align-items: start; }
    .ap-hero-e h1 { margin: 0 0 var(--tk-space-md); }
    .ap-hero-e h1 a { color: inherit; text-decoration: none; }
    .ap-ed-list { display: flex; flex-direction: column; border-top: var(--tk-border-width) solid var(--tk-color-border); }
    .ap-ed-item { display: block; padding: var(--tk-space-md) 0; border-bottom: var(--tk-border-width) solid var(--tk-color-border); text-decoration: none; color: var(--tk-color-text); }
    .ap-ed-item small { display: block; color: var(--tk-color-text-muted); margin-bottom: 4px; }
    .ap-ed-item strong { font-family: var(--tk-font-heading); font-weight: var(--tk-weight-heading); line-height: 1.35; }
    .ap-ed-item:hover strong { color: var(--tk-color-primary); }
    /* Blok tengah per resep: logo band, kutipan tunggal, menu, paket harga ringkas. */
    .ap-logos { display: flex; flex-direction: column; gap: var(--tk-space-md); align-items: center; padding-top: var(--tk-space-xl); padding-bottom: var(--tk-space-xl); }
    .ap-logos-t { font-size: var(--tk-text-caption); letter-spacing: 0.08em; text-transform: uppercase; color: var(--tk-color-text-muted); }
    .ap-logos-row { display: flex; gap: var(--tk-space-2xl); flex-wrap: wrap; justify-content: center; }
    .ap-logos-row span { font-family: var(--tk-font-heading); font-weight: var(--tk-weight-heading); font-size: var(--tk-text-title); color: var(--tk-color-text-muted); opacity: 0.75; white-space: nowrap; }
    .ap-quote-big { text-align: center; max-width: 820px; }
    .ap-quote-big blockquote { font-family: var(--tk-font-heading); font-weight: var(--tk-weight-heading); font-size: var(--tk-text-h3); line-height: 1.45; margin: var(--tk-space-md) auto; color: var(--tk-color-text); }
    .ap-quote-big .ap-quote-person { justify-content: center; }
    .ap-menu-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 0 var(--tk-space-2xl); }
    .ap-plan-price { font-family: var(--tk-font-heading); font-weight: var(--tk-weight-heading); font-size: var(--tk-text-h2); margin: var(--tk-space-xs) 0 var(--tk-space-sm); }
    .ap-plan-price small { font-size: var(--tk-text-body-sm); font-weight: 400; color: var(--tk-color-text-muted); }
    @media (max-width: 860px) {
        .ap-links { display: none; }
        .ap-links.ap-nav-open { display: flex; position: absolute; top: 100%; left: 0; right: 0; flex-direction: column; align-items: stretch; gap: 0; background: var(--tk-color-surface); border-bottom: var(--tk-border-width) solid var(--tk-color-border); padding: var(--tk-space-sm) var(--tk-space-lg) var(--tk-space-md); box-shadow: var(--tk-shadow-lg); }
        .ap-links.ap-nav-open .tk-navbar-link { padding: 12px 0; border-bottom: var(--tk-border-width) solid var(--tk-color-border); }
        .ap-links.ap-nav-open .tk-navbar-link:last-child { border-bottom: none; }
        .ap-links.ap-nav-open .ap-nav-cta { margin: var(--tk-space-sm) 0 0; justify-content: center; }
        .ap-burger { display: inline-flex; }
        .ap-grid-2, .ap-grid-3, .ap-grid-4, .ap-steps { grid-template-columns: 1fr; }
        .ap-gallery { grid-template-columns: repeat(2, 1fr); }
        .ap-footer-inner { grid-template-columns: 1fr 1fr; }
        .ap-section { padding: var(--tk-space-xl) var(--tk-space-md); }
        .ap-page-head { padding: var(--tk-space-xl) var(--tk-space-md) 0; }
        .ap-summary { position: static; }
        .ap-hero { grid-template-columns: 1fr; padding: var(--tk-space-xl) var(--tk-space-md); gap: var(--tk-space-xl); }
        .ap-hero-card { left: 12px; }
        .ap-stats { grid-template-columns: repeat(2, 1fr); }
        .tk-hero .tk-display { font-size: var(--tk-text-h1); }
        .ap-hero-c { padding: var(--tk-space-2xl) var(--tk-space-md); }
        .ap-hero-v > img { height: 460px; }
        .ap-hero-v-overlay { padding: var(--tk-space-xl) var(--tk-space-md); background: linear-gradient(180deg, rgba(12, 12, 14, 0.35) 0%, rgba(12, 12, 14, 0.72) 100%); justify-content: flex-end; }
        .ap-hero-e { grid-template-columns: 1fr; padding: var(--tk-space-xl) var(--tk-space-md); gap: var(--tk-space-lg); }
        .ap-hero-m { padding: var(--tk-space-2xl) var(--tk-space-md) var(--tk-space-lg); }
        .ap-menu-cols { grid-template-columns: 1fr; }
        .ap-logos-row { gap: var(--tk-space-lg); }
        /* CTA (banner ajakan di atas footer): kit menatanya sebagai flex baris tanpa aturan
           mobile, jadi teksnya tergencet di samping tombol — di sini ditumpuk jadi kolom,
           mengikuti konvensi halaman contoh kit sendiri. */
        .tk-cta { flex-direction: column; align-items: center; text-align: center; gap: var(--tk-space-md); padding: var(--tk-space-xl) var(--tk-space-lg); }
        .tk-cta > div { max-width: 100%; }
    }
    @media (max-width: 520px) {
        .ap-gallery { grid-template-columns: 1fr; }
        .ap-footer-inner { grid-template-columns: 1fr; }
    }
`;

/**
 * Perilaku dasar situs hasil rakitan — satu berkas, event delegation, tanpa handler inline.
 * Inline onclick sengaja dihindari karena konversi Next.js membuangnya (htmlToJsx); dengan
 * addEventListener di sini, perilaku yang sama hidup di HTML statis, Next.js, dan Astro.
 */
export const ARCHETYPE_SITE_JS = `/* Perilaku bawaan situs: dropdown, tab, galeri produk, stepper jumlah, cari & sortir katalog. */
(function () {
    'use strict';

    /* Menutup semua menu dropdown custom yang terbuka. */
    function closeMenus() {
        var open = document.querySelectorAll('.ap-select-menu:not([hidden])');
        for (var i = 0; i < open.length; i++) {
            open[i].hidden = true;
            var box = open[i].closest('.ap-select');
            if (box) {
                box.removeAttribute('data-ap-open');
                var btn = box.querySelector('.ap-select-btn');
                if (btn) { btn.setAttribute('aria-expanded', 'false'); }
            }
        }
    }

    /* Menjalankan efek kontrol filter/sortir pada grid kartu di section yang sama. */
    function applyControl(control, value) {
        var scope = control.closest('section') || document;
        if (control.hasAttribute('data-ap-filter')) {
            var cards = scope.querySelectorAll('.ap-grid-3 > *');
            for (var i = 0; i < cards.length; i++) {
                cards[i].style.display = !value || cards[i].getAttribute('data-kategori') === value ? '' : 'none';
            }
        }
        if (control.hasAttribute('data-ap-sort')) {
            var grid = scope.querySelector('.ap-grid-3');
            if (!grid) { return; }
            var items = Array.prototype.slice.call(grid.children);
            var price = function (card) {
                var el = card.querySelector('.ap-price-row .tk-title');
                return el ? parseInt(el.textContent.replace(/[^0-9]/g, ''), 10) || 0 : 0;
            };
            var name = function (card) {
                var el = card.querySelector('h2, h3');
                return el ? el.textContent.trim() : card.textContent.trim();
            };
            items.sort(function (a, b) {
                if (value === 'harga-terendah') { return price(a) - price(b); }
                if (value === 'harga-tertinggi') { return price(b) - price(a); }
                if (value === 'nama') { return name(a).localeCompare(name(b), 'id'); }
                return 0;
            });
            for (var j = 0; j < items.length; j++) { grid.appendChild(items[j]); }
        }
    }

    document.addEventListener('click', function (event) {
        var target = event.target instanceof Element ? event.target : null;
        if (!target) { return; }

        /* Dropdown custom: pilih opsi — label, nilai, dan efek filter/sortirnya diperbarui. */
        var opt = target.closest('.ap-select-opt');
        if (opt) {
            var optBox = opt.closest('.ap-select');
            var optValue = opt.getAttribute('data-value') || '';
            var optLabel = optBox.querySelector('.ap-select-label');
            if (optLabel) { optLabel.textContent = opt.textContent.trim(); }
            var siblings = optBox.querySelectorAll('.ap-select-opt');
            for (var s = 0; s < siblings.length; s++) {
                siblings[s].setAttribute('aria-selected', siblings[s] === opt ? 'true' : 'false');
            }
            var hiddenInput = optBox.querySelector('input[type="hidden"]');
            if (hiddenInput) { hiddenInput.value = optValue; }
            optBox.setAttribute('data-ap-value', optValue);
            closeMenus();
            applyControl(optBox, optValue);
            return;
        }

        /* Dropdown custom: tombol pemicu membuka/menutup menunya. */
        var trigger = target.closest('.ap-select-btn');
        if (trigger) {
            var triggerBox = trigger.closest('.ap-select');
            var menu = triggerBox ? triggerBox.querySelector('.ap-select-menu') : null;
            var willOpen = !!menu && menu.hidden;
            closeMenus();
            if (menu && willOpen) {
                menu.hidden = false;
                triggerBox.setAttribute('data-ap-open', '');
                trigger.setAttribute('aria-expanded', 'true');
            }
            return;
        }

        /* Klik di luar dropdown menutup menu yang terbuka. */
        closeMenus();

        /* Tab: tombol .tk-tab[data-ap-tab] menampilkan panel ber-id itu, menyembunyikan saudaranya. */
        var tab = target.closest('.tk-tab[data-ap-tab]');
        if (tab) {
            var bar = tab.closest('.tk-tabs');
            var tabs = bar ? bar.querySelectorAll('.tk-tab[data-ap-tab]') : [];
            for (var i = 0; i < tabs.length; i++) {
                var active = tabs[i] === tab;
                tabs[i].classList.toggle('tk-tab-active', active);
                tabs[i].setAttribute('aria-selected', active ? 'true' : 'false');
                var pane = document.getElementById(tabs[i].getAttribute('data-ap-tab'));
                if (pane) { pane.hidden = !active; }
            }
            return;
        }

        /* Galeri: klik thumbnail menukar tempat dengan gambar utama. */
        var thumb = target.closest('.ap-thumbs img');
        if (thumb) {
            var main = thumb.closest('.ap-thumbs').previousElementSibling;
            if (main && main.tagName === 'IMG') {
                var src = main.src, alt = main.alt;
                main.src = thumb.src; main.alt = thumb.alt;
                thumb.src = src; thumb.alt = alt;
            }
            return;
        }

        /* Stepper jumlah: −/+ mengubah input angka atau teks di antaranya. */
        var step = target.closest('.ap-qty button');
        if (step) {
            var delta = step.getAttribute('aria-label') === 'Kurangi' ? -1 : 1;
            var box = step.closest('.ap-qty');
            var input = box.querySelector('input');
            if (input) {
                var min = parseInt(input.min, 10) || 1;
                input.value = String(Math.max(min, (parseInt(input.value, 10) || min) + delta));
            } else {
                var span = box.querySelector('span');
                if (span) { span.textContent = String(Math.max(1, (parseInt(span.textContent, 10) || 1) + delta)); }
            }
            return;
        }

        /* Hapus baris keranjang. */
        var remove = target.closest('.tk-action-btn-danger');
        if (remove && remove.closest('tr')) {
            remove.closest('tr').remove();
        }
    });

    /* Cari katalog: menyaring kartu grid di section yang sama, langsung saat mengetik. */
    document.addEventListener('input', function (event) {
        var field = event.target instanceof Element ? event.target : null;
        if (!field || !field.matches('.tk-search input')) { return; }
        var section = field.closest('section') || document;
        var query = field.value.trim().toLowerCase();
        var cards = section.querySelectorAll('.ap-grid-3 > *');
        for (var i = 0; i < cards.length; i++) {
            cards[i].style.display = !query || cards[i].textContent.toLowerCase().indexOf(query) !== -1 ? '' : 'none';
        }
    });

    /* Select native (bila masih ada di halaman buatan model) memakai efek yang sama. */
    document.addEventListener('change', function (event) {
        var field = event.target instanceof Element ? event.target : null;
        if (!field) { return; }
        if (field.matches('select[data-ap-filter], select[data-ap-sort]')) {
            applyControl(field, field.value);
        }
    });
})();
`;

/** JSON-LD dasar halaman; beranda memakai @graph penuh, halaman lain cukup WebPage. */
function jsonLd(kind: 'home' | 'page' | 'faq', title: string, path: string): string {
    if (kind === 'home') {
        return `<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@graph": [
        { "@type": "Organization", "@id": "{{TK_URL}}/#organization", "name": "{{TK_BRAND}}", "url": "{{TK_URL}}/", "logo": "{{TK_URL}}/assets/logo.png" },
        { "@type": "WebSite", "@id": "{{TK_URL}}/#website", "url": "{{TK_URL}}/", "name": "{{TK_BRAND}}", "inLanguage": "id", "publisher": { "@id": "{{TK_URL}}/#organization" } },
        { "@type": "WebPage", "@id": "{{TK_URL}}/#webpage", "url": "{{TK_URL}}/", "name": "{{TK_BRAND}} — {{TK_TAGLINE}}", "description": "{{TK_DESCRIPTION}}", "inLanguage": "id", "isPartOf": { "@id": "{{TK_URL}}/#website" }, "about": { "@id": "{{TK_URL}}/#organization" } }
    ]
}
</script>`;
    }
    if (kind === 'faq') {
        return `<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        { "@type": "Question", "name": "Bagaimana cara memesan?", "acceptedAnswer": { "@type": "Answer", "text": "Hubungi kami lewat halaman kontak atau tombol pesan di halaman produk." } },
        { "@type": "Question", "name": "Metode pembayaran apa yang tersedia?", "acceptedAnswer": { "@type": "Answer", "text": "Transfer bank, e-wallet, dan pembayaran di tempat." } },
        { "@type": "Question", "name": "Berapa lama pengirimannya?", "acceptedAnswer": { "@type": "Answer", "text": "1-3 hari kerja untuk area dalam kota." } }
    ]
}
</script>`;
    }
    return `<script type="application/ld+json">
{ "@context": "https://schema.org", "@type": "WebPage", "url": "{{TK_URL}}/${path}", "name": "${title} — {{TK_BRAND}}", "inLanguage": "id", "isPartOf": { "@id": "{{TK_URL}}/#website" } }
</script>`;
}

interface PageSpec {
    /** Nama arketipe = nama berkas `pages/<archetype>.html`. */
    archetype: TokenaiKitArchetype;
    /** Judul halaman untuk <title> dan h1 bawaan. */
    title: string;
    /** Deskripsi meta bawaan. */
    description: string;
    /** Path kanonis relatif (tanpa {{TK_URL}}), mis. `tentang-kami.html`; beranda ``. */
    path: string;
    /** Isi <main>. */
    body: string;
    /** Jenis JSON-LD. */
    ld: 'home' | 'page' | 'faq';
}

function renderPage(manifest: TokenaiDesignKitManifest, spec: PageSpec): string {
    const fontLinks = manifest.fonts
        .filter(font => font.import)
        .map(font => `<link href="${font.import}" rel="stylesheet">`)
        .join('\n');
    const title = spec.archetype === 'home'
        ? '{{TK_BRAND}} — {{TK_TAGLINE}}'
        : `${spec.title} — {{TK_BRAND}}`;
    const description = spec.archetype === 'home' ? '{{TK_DESCRIPTION}}' : spec.description;
    const canonical = `{{TK_URL}}/${spec.path}`;
    return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script>try{if(localStorage.getItem('tk-theme')==='dark'){document.documentElement.setAttribute('data-tk-theme','dark')}}catch(e){}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
${fontLinks}
<link rel="stylesheet" href="styles.css">
<script src="${manifest.icons.script}"></script>
<script src="site.js" defer></script>
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="{{TK_BRAND}}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="{{TK_URL}}/assets/og-image.png">
<meta property="og:locale" content="id_ID">
<meta name="twitter:card" content="summary_large_image">
${jsonLd(spec.ld, spec.title, spec.path)}
<style>
${AP_CSS}</style>
</head>
<body>
<!-- CATATAN COPYWRITING: ganti hanya TEKS contoh dan penanda AI. JANGAN mengubah/menghapus
     elemen, class, atribut data-* (data-ap-tab, data-tk-asset, data-kategori, data-value),
     struktur dropdown .ap-select (hanya teks labelnya yang boleh diganti), id panel,
     atribut hidden, maupun tag <script> — dipakai styles.css dan site.js agar dropdown,
     tab, galeri, filter, dan pencarian tetap berfungsi. -->
<a class="ap-skip" href="#konten-utama">Langsung ke konten utama</a>
<!-- tk:include partials/header.html -->
<main id="konten-utama">
${spec.body}
</main>
<!-- tk:include partials/footer.html -->
</body>
</html>
`;
}

/* ================================================================ */
/* Partial header & footer                                           */
/* ================================================================ */

function headerPartial(i: (name: string, size?: number) => string): string {
    return `<header class="ap-header">
<nav class="tk-navbar" aria-label="Navigasi utama">
    <a class="ap-logo" href="index.html">{{TK_LOGO}}</a>
    <div class="ap-links" id="ap-nav">
        <!-- tk:nav-item --><a class="tk-navbar-link{{TK_ACTIVE}}" href="{{TK_HREF}}">{{TK_LABEL}}</a><!-- /tk:nav-item -->
        {{TK_NAV_ITEMS}}
        <a class="tk-btn tk-btn-primary tk-btn-sm ap-nav-cta" href="hubungi-kami.html">Hubungi Kami ${i('arrow-right', 14)}</a>
    </div>
    <button class="tk-btn tk-btn-ghost ap-theme" type="button" aria-label="Ganti tema terang/gelap" title="Ganti tema terang/gelap" onclick="var r=document.documentElement;var d=r.getAttribute('data-tk-theme')==='dark';if(d){r.removeAttribute('data-tk-theme')}else{r.setAttribute('data-tk-theme','dark')}try{localStorage.setItem('tk-theme',d?'light':'dark')}catch(e){}"><span class="ap-theme-moon">${i('moon', 18)}</span><span class="ap-theme-sun">${i('sun', 18)}</span></button>
    <button class="tk-btn tk-btn-ghost ap-burger" aria-label="Buka menu" aria-expanded="false" aria-controls="ap-nav" onclick="var n=document.getElementById('ap-nav');var open=n.classList.toggle('ap-nav-open');this.setAttribute('aria-expanded',open)">${i('menu', 20)}</button>
</nav>
</header>
`;
}

/**
 * Footer empat kolom — anatomi footer situs profesional: identitas + sosial, navigasi,
 * kontak, dan jam operasional. Kolom kontak/jam berisi teks contoh yang diganti model
 * dengan data nyata pengguna (ditandai komentar AI).
 */
function footerPartial(i: (name: string, size?: number) => string): string {
    return `<footer class="ap-footer">
    <div class="ap-footer-inner">
        <div>
            <a class="ap-logo" href="index.html">{{TK_LOGO}}</a>
            <p class="tk-muted" style="max-width: 320px; font-size: var(--tk-text-body-sm)">{{TK_DESCRIPTION}}</p>
            <div class="ap-social">
                <a href="#" aria-label="Instagram">${i('instagram', 16)}</a>
                <a href="#" aria-label="Facebook">${i('facebook', 16)}</a>
                <a href="#" aria-label="WhatsApp">${i('message-circle', 16)}</a>
            </div>
        </div>
        <nav aria-label="Tautan footer">
            <p class="ap-footer-title">Menu</p>
            <ul class="ap-footer-links">
                <!-- tk:footer-item --><li><a href="{{TK_HREF}}">{{TK_LABEL}}</a></li><!-- /tk:footer-item -->
                {{TK_FOOTER_ITEMS}}
            </ul>
        </nav>
        <div>
            <p class="ap-footer-title">Kontak</p>
            <ul class="ap-footer-contact">
                <li>${i('map-pin', 15)} Jl. Contoh No. 1, Kota <!-- AI: alamat nyata --></li>
                <li>${i('phone', 15)} +62 812-0000-0000</li>
                <li>${i('mail', 15)} halo@{{TK_BRAND_SLUG}}.id</li>
            </ul>
        </div>
        <div>
            <p class="ap-footer-title">Jam Buka</p>
            <ul class="ap-footer-contact">
                <li>${i('clock', 15)} Senin–Jumat<br>09.00–21.00</li>
                <li>${i('clock', 15)} Sabtu–Minggu<br>10.00–22.00</li>
            </ul>
        </div>
    </div>
    <div class="ap-footer-bottom">
        <div class="ap-footer-bottom-inner"><span>&copy; {{TK_YEAR}} {{TK_BRAND}}. Seluruh hak cipta.</span><span>{{TK_TAGLINE}}</span></div>
    </div>
</footer>
`;
}

/* ================================================================ */
/* Isi per arketipe                                                  */
/* ================================================================ */

/**
 * Resep beranda bawaan — dipakai `pages/home.html` (jalur lama tanpa resep) dan sebagai
 * jatuh-balik `typePackFor` untuk jenis yang tidak dikenal.
 */
export const TOKENAI_DEFAULT_HOME_RECIPE = ['hero-split', 'stats', 'features', 'about-checks', 'quotes-trio', 'cta'];

/**
 * Pustaka blok seksi beranda (`partials/home/<nama>.html`) — bahan `recipe` type pack.
 * SATU template beranda untuk semua jenis website membuat semuanya tampak kembar; di sini
 * beranda dirakit dari blok: 5 varian hero + blok tengah khas jenis (menu restoran, strip
 * produk, masonry karya, paket harga SaaS, dst). Scaffolder menyusunnya sesuai resep type
 * pack — tetap deterministik dan nol token.
 */
export function buildHomeBlocks(i: (name: string, size?: number) => string): Record<string, string> {
    const stars = `<span class="ap-stars" aria-hidden="true">${i('star', 14)}${i('star', 14)}${i('star', 14)}${i('star', 14)}${i('star', 14)}</span>`;
    const quote = (text: string, initials: string, name: string, role: string) => `<div class="tk-card"><div class="tk-card-body ap-quote">
            ${stars}
            <blockquote>“${text}”</blockquote>
            <div class="ap-quote-person"><span class="ap-avatar">${initials}</span><div><strong>${name}</strong><small>${role}</small></div></div>
        </div></div>`;
    const heroActions = `<div class="ap-hero-actions">
            <a class="tk-btn tk-btn-primary tk-btn-lg" href="hubungi-kami.html">{{TK_HERO_CTA}} ${i('arrow-right', 16)}</a>
            <a class="tk-btn tk-btn-outline tk-btn-lg" href="tentang-kami.html">Kenali Kami</a>
        </div>`;
    const stripCard = (n: number) => `<div class="tk-card"><div class="tk-card-body">
            <div class="ap-card-img">${img(600, 450, `{{TK_CARD_WORD}} ${n}`, `unggulan-${n}`)}</div>
            <h3 class="tk-h4" style="margin: 0 0 4px">Nama {{TK_CARD_WORD}} ${n}</h3>
            <div class="ap-meta" style="margin: 0 0 6px">${i('star', 13)} {{TK_CARD_META}}</div>
            <p class="tk-muted" style="margin: 0 0 12px; font-size: var(--tk-text-body-sm)">{{TK_CARD_DESC}}</p>
            <div class="ap-price-row"><span class="tk-title">{{TK_CARD_PRICE}}</span><a class="tk-btn tk-btn-primary tk-btn-sm" href="detail-produk.html">{{TK_CARD_CTA}} ${i('arrow-right', 14)}</a></div>
        </div></div>`;
    const menuItem = (n: number) => `<div class="ap-menu-item"><div><strong>{{TK_MENU${n}_N}}</strong><small>{{TK_MENU${n}_D}}</small></div><span class="ap-menu-price">{{TK_MENU${n}_P}}</span></div>`;
    const plan = (n: number, featured: boolean) => `<div class="tk-card"${featured ? ' style="border-color: var(--tk-color-primary)"' : ''}><div class="tk-card-body">
            ${featured ? '<span class="tk-badge tk-badge-info" style="margin-bottom: 8px">Terpopuler</span>' : ''}
            <h3 class="tk-h4" style="margin: ${featured ? 'var(--tk-space-sm)' : '0'} 0 0">{{TK_PLAN${n}_N}}</h3>
            <p class="ap-plan-price">{{TK_PLAN${n}_P}}<small>/bulan</small></p>
            <p class="tk-muted" style="margin: 0 0 var(--tk-space-md); font-size: var(--tk-text-body-sm)">{{TK_PLAN${n}_D}}</p>
            <a class="tk-btn ${featured ? 'tk-btn-primary' : 'tk-btn-outline'}" style="width: 100%" href="harga.html">Lihat Detail</a>
        </div></div>`;
    const edItem = (n: number) => `<a class="ap-ed-item" href="detail-artikel.html"><small>{{TK_ED_KICKER}}</small><strong>{{TK_ED${n}_T}}</strong></a>`;
    return {
        'hero-split': `<section class="ap-hero" aria-labelledby="ap-h-hero">
    <div>
        <span class="ap-hero-badge">${i('badge-check', 14)} {{TK_HERO_BADGE}} <!-- AI: klaim nyata --></span>
        <h1 class="tk-display" id="ap-h-hero">{{TK_TAGLINE}}</h1>
        <p class="ap-hero-sub">{{TK_DESCRIPTION}}</p>
        ${heroActions}
        <div class="ap-hero-trust">${stars}<span><strong>4,9/5</strong> dari 200+ ulasan pelanggan <!-- AI: angka nyata --></span></div>
    </div>
    <div class="ap-hero-media">
        ${img(760, 560, '{{TK_HERO_IMG}}', 'beranda-hero')}
        <div class="ap-hero-card">${i('trophy', 22)}<div><strong>{{TK_HERO_CARD_T}}</strong><small>{{TK_HERO_CARD_S}}</small></div></div>
    </div>
</section>`,
        'hero-centered': `<section class="ap-hero-c" aria-labelledby="ap-h-hero">
    <span class="ap-hero-badge">${i('badge-check', 14)} {{TK_HERO_BADGE}} <!-- AI: klaim nyata --></span>
    <h1 class="tk-display" id="ap-h-hero">{{TK_TAGLINE}}</h1>
    <p class="ap-hero-sub">{{TK_DESCRIPTION}}</p>
    ${heroActions}
    <div class="ap-hero-shot">${img(1080, 560, '{{TK_HERO_IMG}}', 'beranda-hero')}</div>
</section>`,
        'hero-visual': `<section class="ap-hero-v" aria-labelledby="ap-h-hero">
    ${img(1600, 700, '{{TK_HERO_IMG}}', 'beranda-hero')}
    <div class="ap-hero-v-overlay">
        <span class="ap-hero-badge">${i('badge-check', 14)} {{TK_HERO_BADGE}} <!-- AI: klaim nyata --></span>
        <h1 class="tk-display" id="ap-h-hero">{{TK_TAGLINE}}</h1>
        <p class="ap-hero-sub">{{TK_DESCRIPTION}}</p>
        ${heroActions}
    </div>
</section>`,
        'hero-minimal': `<section class="ap-hero-m" aria-labelledby="ap-h-hero">
    <p class="ap-kicker">{{TK_HERO_BADGE}}</p>
    <h1 id="ap-h-hero">{{TK_TAGLINE}}</h1>
    <p class="ap-hero-sub">{{TK_DESCRIPTION}}</p>
    ${heroActions}
</section>`,
        'hero-editorial': `<section class="ap-hero-e" aria-labelledby="ap-h-hero">
    <div>
        <p class="ap-kicker">{{TK_ED_KICKER}}</p>
        <h1 class="tk-h1" id="ap-h-hero"><a href="detail-artikel.html">{{TK_ED1_T}}</a></h1>
        <p class="ap-hero-sub">{{TK_DESCRIPTION}}</p>
        <a class="tk-btn tk-btn-primary" href="detail-artikel.html">Baca Sekarang ${i('arrow-right', 16)}</a>
    </div>
    <div class="ap-ed-list" aria-label="Tulisan terbaru">
        ${edItem(2)}
        ${edItem(3)}
        ${edItem(4)}
    </div>
</section>`,
        'stats': `<div class="ap-band">
<section class="ap-section" aria-label="Pencapaian" style="padding-top: var(--tk-space-xl); padding-bottom: var(--tk-space-xl)">
    <div class="ap-stats">
        <div class="ap-stat"><strong>{{TK_STAT1_V}}</strong><span>{{TK_STAT1_L}}</span></div>
        <div class="ap-stat"><strong>{{TK_STAT2_V}}</strong><span>{{TK_STAT2_L}}</span></div>
        <div class="ap-stat"><strong>{{TK_STAT3_V}}</strong><span>{{TK_STAT3_L}}</span></div>
        <div class="ap-stat"><strong>{{TK_STAT4_V}}</strong><span>{{TK_STAT4_L}}</span></div>
    </div>
</section>
</div>`,
        'logo-band': `<div class="ap-band">
<section class="ap-section ap-logos" aria-label="Dipercaya oleh">
    <span class="ap-logos-t">{{TK_LOGOS_T}}</span>
    <div class="ap-logos-row"><span>{{TK_LOGO1}}</span><span>{{TK_LOGO2}}</span><span>{{TK_LOGO3}}</span><span>{{TK_LOGO4}}</span><span>{{TK_LOGO5}}</span></div>
</section>
</div>`,
        'features': `<section class="ap-section" aria-labelledby="ap-h-unggulan">
    <h2 class="tk-h2 ap-section-title" id="ap-h-unggulan">Kenapa memilih {{TK_BRAND}}</h2>
    <p class="ap-section-sub">Tiga alasan pelanggan kembali lagi. <!-- AI: sesuaikan dengan usaha pengguna. --></p>
    <div class="tk-feature-grid ap-grid-3">
        <div class="tk-feature"><span class="tk-feature-icon">${i('sparkles', 20)}</span><h3 class="tk-h4">{{TK_FEAT1_T}}</h3><p class="tk-muted">{{TK_FEAT1_D}}</p></div>
        <div class="tk-feature"><span class="tk-feature-icon">${i('clock', 20)}</span><h3 class="tk-h4">{{TK_FEAT2_T}}</h3><p class="tk-muted">{{TK_FEAT2_D}}</p></div>
        <div class="tk-feature"><span class="tk-feature-icon">${i('heart-handshake', 20)}</span><h3 class="tk-h4">{{TK_FEAT3_T}}</h3><p class="tk-muted">{{TK_FEAT3_D}}</p></div>
    </div>
</section>`,
        'about-checks': `<div class="ap-band">
<section class="ap-section" aria-labelledby="ap-h-tentang">
    <div class="ap-grid-2" style="align-items: center">
        <div>${img(800, 560, '{{TK_ABOUT_IMG}}', 'beranda-tentang')}</div>
        <div>
            <h2 class="tk-h2" id="ap-h-tentang" style="margin-top: 0">Cerita singkat kami</h2>
            <p class="tk-muted">{{TK_HOME_ABOUT}} <!-- AI: isi dari deskripsi pengguna. --></p>
            <div class="ap-check">${i('check-circle-2', 18)} {{TK_CHECK1}}</div>
            <div class="ap-check">${i('check-circle-2', 18)} {{TK_CHECK2}}</div>
            <div class="ap-check">${i('check-circle-2', 18)} {{TK_CHECK3}}</div>
            <a class="tk-btn tk-btn-secondary" style="margin-top: var(--tk-space-sm)" href="tentang-kami.html">Selengkapnya ${i('arrow-right', 16)}</a>
        </div>
    </div>
</section>
</div>`,
        'steps': `<div class="ap-band">
<section class="ap-section" aria-labelledby="ap-h-langkah">
    <h2 class="tk-h2 ap-section-title" id="ap-h-langkah">{{TK_STEPS_T}}</h2>
    <p class="ap-section-sub">Prosesnya sederhana dan jelas dari awal.</p>
    <div class="ap-steps">
        <div class="ap-step"><h3 class="tk-h4">{{TK_STEP1_T}}</h3><p class="tk-muted">{{TK_STEP1_D}}</p></div>
        <div class="ap-step"><h3 class="tk-h4">{{TK_STEP2_T}}</h3><p class="tk-muted">{{TK_STEP2_D}}</p></div>
        <div class="ap-step"><h3 class="tk-h4">{{TK_STEP3_T}}</h3><p class="tk-muted">{{TK_STEP3_D}}</p></div>
    </div>
</section>
</div>`,
        'product-strip': `<section class="ap-section" aria-labelledby="ap-h-strip">
    <h2 class="tk-h2 ap-section-title" id="ap-h-strip">{{TK_STRIP_T}}</h2>
    <p class="ap-section-sub">{{TK_STRIP_S}}</p>
    <div class="ap-grid-3">
        ${stripCard(1)}
        ${stripCard(2)}
        ${stripCard(3)}
    </div>
    <p style="text-align: center; margin: var(--tk-space-xl) 0 0"><a class="tk-btn tk-btn-outline" href="katalog-produk.html">Lihat Semua ${i('arrow-right', 16)}</a></p>
</section>`,
        'menu-highlight': `<section class="ap-section" aria-labelledby="ap-h-menu" style="max-width: 920px">
    <h2 class="tk-h2 ap-section-title" id="ap-h-menu">{{TK_MENU_T}}</h2>
    <p class="ap-section-sub">Sebagian kecil dari yang tersedia setiap hari.</p>
    <div class="ap-menu-cols">
        <div>${menuItem(1)}${menuItem(2)}</div>
        <div>${menuItem(3)}${menuItem(4)}</div>
    </div>
    <p style="text-align: center; margin: var(--tk-space-xl) 0 0"><a class="tk-btn tk-btn-primary" href="menu.html">Lihat Menu Lengkap ${i('arrow-right', 16)}</a></p>
</section>`,
        'work-masonry': `<section class="ap-section" aria-labelledby="ap-h-karya">
    <h2 class="tk-h2 ap-section-title" id="ap-h-karya">{{TK_STRIP_T}}</h2>
    <p class="ap-section-sub">{{TK_STRIP_S}}</p>
    <div class="ap-gallery">
        ${img(640, 480, '{{TK_CARD_WORD}} 1', 'karya-1')}
        ${img(640, 480, '{{TK_CARD_WORD}} 2', 'karya-2')}
        ${img(640, 480, '{{TK_CARD_WORD}} 3', 'karya-3')}
        ${img(640, 480, '{{TK_CARD_WORD}} 4', 'karya-4')}
        ${img(640, 480, '{{TK_CARD_WORD}} 5', 'karya-5')}
        ${img(640, 480, '{{TK_CARD_WORD}} 6', 'karya-6')}
    </div>
    <p style="text-align: center; margin: var(--tk-space-xl) 0 0"><a class="tk-btn tk-btn-outline" href="katalog-produk.html">Lihat Semua ${i('arrow-right', 16)}</a></p>
</section>`,
        'pricing-preview': `<section class="ap-section" aria-labelledby="ap-h-paket">
    <h2 class="tk-h2 ap-section-title" id="ap-h-paket">Paket harga</h2>
    <p class="ap-section-sub">{{TK_PLAN_S}}</p>
    <div class="ap-grid-3">
        ${plan(1, false)}
        ${plan(2, true)}
        ${plan(3, false)}
    </div>
</section>`,
        'quotes-trio': `<section class="ap-section" aria-labelledby="ap-h-testimoni">
    <h2 class="tk-h2 ap-section-title" id="ap-h-testimoni">Kata mereka</h2>
    <p class="ap-section-sub">Pengalaman nyata pelanggan {{TK_BRAND}}. <!-- AI: ganti dengan testimoni nyata bila ada. --></p>
    <div class="ap-grid-3">
        ${quote('{{TK_QUOTE1}}', 'AR', 'Andi R.', 'Pelanggan setia')}
        ${quote('{{TK_QUOTE2}}', 'SM', 'Sari M.', 'Pemilik usaha')}
        ${quote('{{TK_QUOTE3}}', 'BP', 'Budi P.', 'Pelanggan baru')}
    </div>
</section>`,
        'quote-single': `<div class="ap-band">
<section class="ap-section ap-quote-big" aria-label="Testimoni">
    ${stars}
    <blockquote>“{{TK_QUOTE1}}”</blockquote>
    <div class="ap-quote-person"><span class="ap-avatar">AR</span><div><strong>Andi R.</strong><small>Pelanggan setia</small></div></div>
</section>
</div>`,
        'cta': `<section class="ap-section" aria-labelledby="ap-h-cta">
    <div class="tk-cta">
        <div><h2 class="tk-h3" id="ap-h-cta" style="margin: 0">{{TK_CTA_T}}</h2><p class="tk-muted" style="margin: 4px 0 0">{{TK_CTA_S}}</p></div>
        <a class="tk-btn tk-btn-primary" href="hubungi-kami.html">{{TK_HERO_CTA}} ${i('arrow-right', 16)}</a>
    </div>
</section>`
    };
}

function homeBody(i: (name: string, size?: number) => string): string {
    const blocks = buildHomeBlocks(i);
    return TOKENAI_DEFAULT_HOME_RECIPE.map(name => blocks[name]).join('\n');
}

function aboutBody(i: (name: string, size?: number) => string): string {
    return `<div class="ap-page-head"><h1 class="tk-h1">Tentang Kami</h1><p>Siapa kami, apa yang kami kerjakan, dan nilai yang kami pegang.</p></div>
<section class="ap-section" aria-labelledby="ap-h-cerita">
    <div class="ap-grid-2">
        <div>${img(800, 600, 'Tim kami', 'tentang-tim')}</div>
        <div>
            <h2 class="tk-h2" id="ap-h-cerita" style="margin-top: 0">Cerita kami</h2>
            <p class="tk-muted">{{TK_ABOUT_STORY1}} <!-- AI: isi dari deskripsi pengguna. --></p>
            <p class="tk-muted">{{TK_ABOUT_STORY2}}</p>
        </div>
    </div>
</section>
<section class="ap-section" style="padding-top: 0" aria-labelledby="ap-h-nilai">
    <h2 class="tk-h2 ap-section-title" id="ap-h-nilai">Nilai yang kami pegang</h2>
    <div class="tk-feature-grid ap-grid-3">
        <div class="tk-feature"><span class="tk-feature-icon">${i('badge-check', 20)}</span><h3 class="tk-h4">{{TK_VAL1_T}}</h3><p class="tk-muted">{{TK_VAL1_D}}</p></div>
        <div class="tk-feature"><span class="tk-feature-icon">${i('leaf', 20)}</span><h3 class="tk-h4">{{TK_VAL2_T}}</h3><p class="tk-muted">{{TK_VAL2_D}}</p></div>
        <div class="tk-feature"><span class="tk-feature-icon">${i('trending-up', 20)}</span><h3 class="tk-h4">{{TK_VAL3_T}}</h3><p class="tk-muted">{{TK_VAL3_D}}</p></div>
    </div>
</section>`;
}

function contactBody(i: (name: string, size?: number) => string): string {
    return `<div class="ap-page-head"><h1 class="tk-h1">Hubungi Kami</h1><p>{{TK_CONTACT_SUB}}</p></div>
<section class="ap-section" aria-label="Kontak">
    <div class="ap-grid-2">
        <div class="tk-card"><div class="tk-card-body">
            <h2 class="tk-h3" style="margin-top: 0">Kirim pesan</h2>
            <form action="#" method="post">
                <div class="tk-field"><label class="tk-label" for="ct-nama">Nama</label><input class="tk-input" id="ct-nama" name="nama" type="text" placeholder="Nama Anda" required></div>
                <div class="tk-field"><label class="tk-label" for="ct-email">Email</label><input class="tk-input" id="ct-email" name="email" type="email" placeholder="nama@email.com" required></div>
                <div class="tk-field"><label class="tk-label" for="ct-pesan">Pesan</label><textarea class="tk-textarea" id="ct-pesan" name="pesan" rows="5" placeholder="Tulis pesan Anda…" required></textarea></div>
                <button class="tk-btn tk-btn-primary" type="submit">Kirim Pesan ${i('send', 16)}</button>
            </form>
        </div></div>
        <div>
            <div class="tk-card" style="margin-bottom: var(--tk-space-md)"><div class="tk-card-body">
                <p class="tk-title" style="margin: 0 0 12px">Info kontak</p>
                <p class="tk-muted" style="display: flex; gap: 8px; align-items: center; margin: 8px 0">${i('map-pin')} Jl. Contoh No. 1, Kota, Provinsi <!-- AI: alamat nyata --></p>
                <p class="tk-muted" style="display: flex; gap: 8px; align-items: center; margin: 8px 0">${i('phone')} +62 812-0000-0000</p>
                <p class="tk-muted" style="display: flex; gap: 8px; align-items: center; margin: 8px 0">${i('mail')} halo@{{TK_BRAND_SLUG}}.id</p>
                <p class="tk-muted" style="display: flex; gap: 8px; align-items: center; margin: 8px 0">${i('clock')} Senin–Sabtu, 09.00–21.00</p>
                <a class="tk-btn tk-btn-primary" style="width: 100%; margin-top: var(--tk-space-sm)" href="https://wa.me/6281200000000">${i('message-circle', 16)} Chat WhatsApp</a>
            </div></div>
            ${img(800, 420, 'Peta lokasi', 'kontak-peta')}
        </div>
    </div>
</section>`;
}

function servicesBody(i: (name: string, size?: number) => string): string {
    return `<div class="ap-page-head"><h1 class="tk-h1">Layanan</h1><p>Apa saja yang bisa kami kerjakan untuk Anda.</p></div>
<section class="ap-section" aria-label="Daftar layanan">
    <div class="ap-grid-3">
        <div class="tk-card"><div class="tk-card-body">${i('star', 26)}<h2 class="tk-h4">{{TK_SVC1_T}}</h2><p class="tk-muted">{{TK_SVC1_D}}</p><a class="tk-btn tk-btn-text" href="hubungi-kami.html">Tanya layanan ini ${i('arrow-right', 14)}</a></div></div>
        <div class="tk-card"><div class="tk-card-body">${i('star', 26)}<h2 class="tk-h4">{{TK_SVC2_T}}</h2><p class="tk-muted">{{TK_SVC2_D}}</p><a class="tk-btn tk-btn-text" href="hubungi-kami.html">Tanya layanan ini ${i('arrow-right', 14)}</a></div></div>
        <div class="tk-card"><div class="tk-card-body">${i('star', 26)}<h2 class="tk-h4">{{TK_SVC3_T}}</h2><p class="tk-muted">{{TK_SVC3_D}}</p><a class="tk-btn tk-btn-text" href="hubungi-kami.html">Tanya layanan ini ${i('arrow-right', 14)}</a></div></div>
    </div>
</section>
<div class="ap-band">
<section class="ap-section" aria-labelledby="ap-h-proses">
    <h2 class="tk-h2 ap-section-title" id="ap-h-proses">Cara kerjanya</h2>
    <p class="ap-section-sub">Prosesnya sederhana dan transparan dari awal sampai selesai.</p>
    <div class="ap-steps">
        <div class="ap-step"><h3 class="tk-h4">Konsultasi</h3><p class="tk-muted">Ceritakan kebutuhan Anda, kami dengarkan.</p></div>
        <div class="ap-step"><h3 class="tk-h4">Pengerjaan</h3><p class="tk-muted">Kami kerjakan sesuai kesepakatan, transparan.</p></div>
        <div class="ap-step"><h3 class="tk-h4">Serah terima</h3><p class="tk-muted">Hasil diserahkan; revisi kecil kami bantu.</p></div>
    </div>
</section>
</div>
<section class="ap-section" aria-labelledby="ap-h-svc-cta">
    <div class="tk-cta">
        <div><h2 class="tk-h3" id="ap-h-svc-cta" style="margin: 0">Butuh yang mana?</h2><p class="tk-muted" style="margin: 4px 0 0">Ceritakan kebutuhan Anda — konsultasi awal gratis.</p></div>
        <a class="tk-btn tk-btn-primary" href="hubungi-kami.html">Konsultasi Gratis ${i('arrow-right', 16)}</a>
    </div>
</section>`;
}

const FAQ_BODY = `<div class="ap-page-head"><h1 class="tk-h1">Pertanyaan Umum</h1><p>Jawaban untuk hal-hal yang paling sering ditanyakan.</p></div>
<section class="ap-section" aria-label="FAQ">
    <div class="ap-faq">
        <details open><summary>{{TK_FAQ1_Q}}</summary><p>{{TK_FAQ1_A}} <!-- AI: sesuaikan dengan alur nyata. --></p></details>
        <details><summary>{{TK_FAQ2_Q}}</summary><p>{{TK_FAQ2_A}}</p></details>
        <details><summary>{{TK_FAQ3_Q}}</summary><p>{{TK_FAQ3_A}}</p></details>
        <details><summary>{{TK_FAQ4_Q}}</summary><p>{{TK_FAQ4_A}}</p></details>
        <details><summary>Bagaimana menghubungi dukungan?</summary><p>Lewat email atau telepon di halaman <a href="hubungi-kami.html">Hubungi Kami</a>.</p></details>
    </div>
    <div class="tk-cta" style="max-width: 720px; margin: var(--tk-space-xl) auto 0">
        <div><h2 class="tk-h4" style="margin: 0">Tidak menemukan jawabannya?</h2><p class="tk-muted" style="margin: 4px 0 0">Tim kami siap membantu langsung.</p></div>
        <a class="tk-btn tk-btn-primary" href="hubungi-kami.html">Tanya Kami</a>
    </div>
</section>`;

/** Halaman legal: kerangka standar Indonesia; AI menyesuaikan detail usaha. */
function legalBody(kind: 'privacy' | 'terms' | 'cookies'): string {
    if (kind === 'privacy') {
        return `<div class="ap-page-head"><h1 class="tk-h1">Kebijakan Privasi</h1><p>Terakhir diperbarui: 1 Januari {{TK_YEAR}}.</p></div>
<section class="ap-section"><div class="ap-prose">
    <p>{{TK_BRAND}} ("kami") menghargai privasi Anda. Kebijakan ini menjelaskan data apa yang kami kumpulkan di {{TK_URL}}, bagaimana kami memakainya, dan hak Anda atasnya.</p>
    <h2 class="tk-h3">Data yang kami kumpulkan</h2>
    <ul><li>Data yang Anda berikan langsung: nama, email, nomor telepon saat mengisi formulir.</li><li>Data teknis: alamat IP, jenis peramban, dan halaman yang dikunjungi.</li></ul>
    <h2 class="tk-h3">Bagaimana data dipakai</h2>
    <ul><li>Merespons pertanyaan dan memproses pesanan Anda.</li><li>Meningkatkan layanan dan pengalaman situs.</li><li>Mengirim informasi yang Anda minta; tidak pernah spam.</li></ul>
    <h2 class="tk-h3">Berbagi data</h2>
    <p>Kami tidak menjual data pribadi Anda. Data hanya dibagikan ke pihak ketiga yang membantu operasional (mis. pembayaran, pengiriman) sebatas yang diperlukan.</p>
    <h2 class="tk-h3">Hak Anda</h2>
    <p>Anda berhak meminta salinan, koreksi, atau penghapusan data pribadi Anda dengan menghubungi kami lewat halaman <a href="hubungi-kami.html">Hubungi Kami</a>.</p>
</div></section>`;
    }
    if (kind === 'terms') {
        return `<div class="ap-page-head"><h1 class="tk-h1">Syarat dan Ketentuan</h1><p>Terakhir diperbarui: 1 Januari {{TK_YEAR}}.</p></div>
<section class="ap-section"><div class="ap-prose">
    <p>Dengan mengakses {{TK_URL}}, Anda menyetujui syarat dan ketentuan berikut. Bacalah dengan saksama sebelum menggunakan layanan {{TK_BRAND}}.</p>
    <h2 class="tk-h3">Penggunaan layanan</h2>
    <ul><li>Layanan hanya boleh dipakai untuk tujuan yang sah.</li><li>Informasi yang Anda berikan harus benar dan terkini.</li></ul>
    <h2 class="tk-h3">Pemesanan dan pembayaran</h2>
    <ul><li>Harga dapat berubah sewaktu-waktu sebelum pesanan dikonfirmasi.</li><li>Pesanan dianggap sah setelah pembayaran diterima.</li></ul>
    <h2 class="tk-h3">Pembatalan dan pengembalian</h2>
    <p>Ketentuan pembatalan dan pengembalian dana mengikuti kebijakan yang berlaku saat transaksi. <!-- AI: rinci sesuai kebijakan usaha. --></p>
    <h2 class="tk-h3">Batasan tanggung jawab</h2>
    <p>{{TK_BRAND}} tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari pemakaian situs di luar kendali wajar kami.</p>
    <h2 class="tk-h3">Perubahan ketentuan</h2>
    <p>Kami dapat memperbarui ketentuan ini; versi terbaru selalu tersedia di halaman ini.</p>
</div></section>`;
    }
    return `<div class="ap-page-head"><h1 class="tk-h1">Kebijakan Cookie</h1><p>Terakhir diperbarui: 1 Januari {{TK_YEAR}}.</p></div>
<section class="ap-section"><div class="ap-prose">
    <p>Situs {{TK_URL}} memakai cookie — berkas kecil yang disimpan di perangkat Anda — untuk membuat situs berfungsi baik dan memahami bagaimana ia dipakai.</p>
    <h2 class="tk-h3">Cookie yang kami pakai</h2>
    <ul><li><strong>Esensial</strong> — dibutuhkan agar situs berfungsi (mis. sesi, keranjang belanja).</li><li><strong>Analitik</strong> — membantu kami memahami halaman mana yang paling berguna.</li><li><strong>Preferensi</strong> — mengingat pilihan Anda seperti tema tampilan.</li></ul>
    <h2 class="tk-h3">Mengelola cookie</h2>
    <p>Anda dapat menghapus atau memblokir cookie lewat pengaturan peramban. Sebagian fitur situs mungkin tidak berfungsi tanpa cookie esensial.</p>
    <h2 class="tk-h3">Pertanyaan</h2>
    <p>Hubungi kami lewat halaman <a href="hubungi-kami.html">Hubungi Kami</a> bila ada pertanyaan tentang kebijakan ini.</p>
</div></section>`;
}

const SITEMAP_BODY = `<div class="ap-page-head"><h1 class="tk-h1">Peta Situs</h1><p>Semua halaman di situs ini.</p></div>
<section class="ap-section"><div class="ap-prose">
    <ul style="line-height: 2">
        <!-- tk:sitemap-item --><li><a href="{{TK_HREF}}">{{TK_LABEL}}</a></li><!-- /tk:sitemap-item -->
        {{TK_SITEMAP_ITEMS}}
    </ul>
</div></section>`;

function catalogBody(i: (name: string, size?: number) => string): string {
    // Kartu 1-6 bergilir di tiga kategori (kategori-1/2/3) yang label opsinya {{TK_CATn}} —
    // filter dan sortir BERFUNGSI sejak lahir tanpa menunggu AI mengisi data apa pun.
    const card = (n: number) => `<div class="tk-card" data-kategori="kategori-${((n - 1) % 3) + 1}"><div class="tk-card-body">
            <div class="ap-card-img">${img(600, 450, `{{TK_ITEM_WORD}} ${n}`, `produk-${n}`)}</div>
            <h2 class="tk-h4" style="margin: 0 0 4px">Nama {{TK_ITEM_WORD}} ${n}</h2>
            <div class="ap-meta" style="margin: 0 0 6px">${i('star', 13)} {{TK_CARD_META}}</div>
            <p class="tk-muted" style="margin: 0 0 12px; font-size: var(--tk-text-body-sm)">{{TK_CARD_DESC}}</p>
            <div class="ap-price-row"><span class="tk-title">{{TK_CARD${n}_PRICE}}</span><a class="tk-btn tk-btn-primary tk-btn-sm" href="detail-produk.html">{{TK_CARD_CTA}} ${i('arrow-right', 14)}</a></div>
        </div></div>`;
    return `<div class="ap-page-head"><h1 class="tk-h1">{{TK_PAGE_TITLE}}</h1><p>{{TK_CATALOG_SUB}}</p></div>
<section class="ap-section" aria-label="Katalog">
    <div class="tk-filter-bar" style="margin-bottom: var(--tk-space-lg)">
        <div class="tk-search"><span class="tk-search-icon">${i('search', 16)}</span><input class="tk-input" type="search" placeholder="Cari {{TK_ITEM_WORD_LC}}…" aria-label="Cari {{TK_ITEM_WORD_LC}}"></div>
        <div class="ap-select" data-ap-filter="kategori">
            <button class="tk-input ap-select-btn" type="button" aria-haspopup="listbox" aria-expanded="false" aria-label="Kategori"><span class="ap-select-label">Semua kategori</span>${i('chevron-down', 14)}</button>
            <div class="ap-select-menu" role="listbox" hidden>
                <button class="ap-select-opt" type="button" role="option" data-value="" aria-selected="true">Semua kategori</button>
                <button class="ap-select-opt" type="button" role="option" data-value="kategori-1" aria-selected="false">{{TK_CAT1}}</button>
                <button class="ap-select-opt" type="button" role="option" data-value="kategori-2" aria-selected="false">{{TK_CAT2}}</button>
                <button class="ap-select-opt" type="button" role="option" data-value="kategori-3" aria-selected="false">{{TK_CAT3}}</button>
                <!-- AI: ganti hanya TEKS label kategori sesuai bisnisnya; biarkan data-value di sini dan data-kategori pada kartu. -->
            </div>
        </div>
        <div class="ap-select" data-ap-sort>
            <button class="tk-input ap-select-btn" type="button" aria-haspopup="listbox" aria-expanded="false" aria-label="Urutkan"><span class="ap-select-label">Urutkan</span>${i('chevron-down', 14)}</button>
            <div class="ap-select-menu" role="listbox" hidden>
                <button class="ap-select-opt" type="button" role="option" data-value="" aria-selected="true">Urutan bawaan</button>
                <button class="ap-select-opt" type="button" role="option" data-value="nama" aria-selected="false">Nama A–Z</button>
                <button class="ap-select-opt" type="button" role="option" data-value="harga-terendah" aria-selected="false">Harga terendah</button>
                <button class="ap-select-opt" type="button" role="option" data-value="harga-tertinggi" aria-selected="false">Harga tertinggi</button>
            </div>
        </div>
    </div>
    <div class="ap-grid-3">
        ${card(1)}
        ${card(2)}
        ${card(3)}
        ${card(4)}
        ${card(5)}
        ${card(6)}
    </div>
    <!-- AI: bila itemnya banyak, tambahkan pagination nyata di sini (komponen tk-pagination) — jangan pasang tombol halaman yang tidak berfungsi. -->
</section>`;
}

function productDetailBody(i: (name: string, size?: number) => string): string {
    return `<section class="ap-section" aria-label="Detail produk">
    <nav class="tk-breadcrumb" aria-label="Breadcrumb" style="margin-bottom: var(--tk-space-lg)">
        <a href="index.html">Beranda</a><span class="tk-breadcrumb-sep">/</span><a href="katalog-produk.html">Katalog</a><span class="tk-breadcrumb-sep">/</span><span class="tk-breadcrumb-current">Nama Produk</span>
    </nav>
    <div class="ap-grid-2">
        <div>
            ${img(800, 800, 'Foto Produk', 'produk-detail')}
            <div class="ap-thumbs">
                ${img(200, 200, 'Sudut 1', 'produk-thumb-1')}
                ${img(200, 200, 'Sudut 2', 'produk-thumb-2')}
                ${img(200, 200, 'Sudut 3', 'produk-thumb-3')}
                ${img(200, 200, 'Sudut 4', 'produk-thumb-4')}
            </div>
        </div>
        <div>
            <h1 class="tk-h2" style="margin: 0 0 8px">Nama Produk</h1>
            <div class="ap-meta" style="margin-bottom: var(--tk-space-md)"><span class="tk-badge tk-badge-success">Tersedia</span><span>${i('star', 14)} 4,8 (120 ulasan)</span></div>
            <p class="tk-h3" style="margin: 0 0 16px">Rp99.000</p>
            <p class="tk-muted">Deskripsi produk yang menjual: apa manfaatnya, terbuat dari apa, dan kenapa layak dibeli. <!-- AI: isi detail nyata. --></p>
            <div class="tk-field"><span class="tk-label" id="pd-varian-label">Varian</span>
                <div class="ap-select" style="max-width: 320px">
                    <button class="tk-input ap-select-btn" type="button" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="pd-varian-label"><span class="ap-select-label">Standar</span>${i('chevron-down', 14)}</button>
                    <div class="ap-select-menu" role="listbox" hidden>
                        <button class="ap-select-opt" type="button" role="option" data-value="standar" aria-selected="true">Standar</button>
                        <button class="ap-select-opt" type="button" role="option" data-value="varian-2" aria-selected="false">Varian kedua</button>
                        <!-- AI: ganti hanya TEKS opsi dengan varian nyata (ukuran/rasa/paket); biarkan struktur tombol dan atributnya. -->
                    </div>
                </div>
            </div>
            <div class="tk-field"><label class="tk-label" for="pd-qty">Jumlah</label>
                <div class="ap-qty"><button class="tk-btn tk-btn-outline tk-btn-sm" type="button" aria-label="Kurangi">−</button><input class="tk-input" id="pd-qty" type="number" value="1" min="1" style="width: 72px; text-align: center"><button class="tk-btn tk-btn-outline tk-btn-sm" type="button" aria-label="Tambah">+</button></div>
            </div>
            <div style="display: flex; gap: var(--tk-space-sm); flex-wrap: wrap; margin-top: var(--tk-space-md)">
                <a class="tk-btn tk-btn-primary tk-btn-lg" href="keranjang.html">${i('shopping-cart', 16)} Tambah ke Keranjang</a>
                <a class="tk-btn tk-btn-outline tk-btn-lg" href="hubungi-kami.html">Tanya Dulu</a>
            </div>
            <div class="ap-trust-row">
                <span>${i('truck', 16)} Dikirim 1–3 hari kerja</span>
                <span>${i('shield-check', 16)} Garansi produk original</span>
                <span>${i('rotate-ccw', 16)} 7 hari tukar barang</span>
            </div>
        </div>
    </div>
    <div class="tk-tabs" style="margin-top: var(--tk-space-2xl)" role="tablist">
        <button class="tk-tab tk-tab-active" type="button" role="tab" aria-selected="true" data-ap-tab="pd-pane-deskripsi">Deskripsi</button>
        <button class="tk-tab" type="button" role="tab" aria-selected="false" data-ap-tab="pd-pane-spesifikasi">Spesifikasi</button>
        <button class="tk-tab" type="button" role="tab" aria-selected="false" data-ap-tab="pd-pane-ulasan">Ulasan</button>
    </div>
    <div class="ap-prose" id="pd-pane-deskripsi" role="tabpanel" style="margin: var(--tk-space-lg) 0 0; max-width: none">
        <p class="tk-muted">Uraian panjang produk: bahan, ukuran, cara pakai, dan perawatan. <!-- AI: isi detail nyata. --></p>
    </div>
    <div id="pd-pane-spesifikasi" role="tabpanel" hidden style="margin: var(--tk-space-lg) 0 0">
        <table class="tk-table" style="max-width: 560px">
            <tbody>
                <tr><th style="text-align: left; width: 40%">Berat</th><td>250 g</td></tr>
                <tr><th style="text-align: left">Dimensi</th><td>10 × 10 × 20 cm</td></tr>
                <tr><th style="text-align: left">Bahan</th><td>Sesuai produk</td></tr>
                <!-- AI: ganti dengan spesifikasi nyata produk ini. -->
            </tbody>
        </table>
    </div>
    <div id="pd-pane-ulasan" role="tabpanel" hidden style="margin: var(--tk-space-lg) 0 0">
        <div class="ap-grid-3">
            <div class="tk-card"><div class="tk-card-body">
                <div class="ap-meta">${i('star', 13)} 5/5</div>
                <p class="tk-muted" style="margin: 8px 0">“Kualitasnya melebihi ekspektasi, pengirimannya juga cepat.”</p>
                <strong>Rina</strong>
            </div></div>
            <div class="tk-card"><div class="tk-card-body">
                <div class="ap-meta">${i('star', 13)} 4/5</div>
                <p class="tk-muted" style="margin: 8px 0">“Sesuai deskripsi. Pasti pesan lagi.”</p>
                <strong>Budi</strong>
            </div></div>
            <!-- AI: ganti dengan ulasan bergaya nyata untuk produk ini. -->
        </div>
    </div>
</section>`;
}

function cartBody(i: (name: string, size?: number) => string): string {
    const row = (n: number) => `<tr>
                <td style="display: flex; gap: 12px; align-items: center">${img(64, 64, `P${n}`, `keranjang-${n}`)}<div><strong>Nama Produk ${n}</strong><br><small class="tk-muted">Varian: Standar</small></div></td>
                <td>Rp99.000</td>
                <td><div class="ap-qty"><button class="tk-btn tk-btn-outline tk-btn-sm" type="button" aria-label="Kurangi">−</button><span>1</span><button class="tk-btn tk-btn-outline tk-btn-sm" type="button" aria-label="Tambah">+</button></div></td>
                <td>Rp99.000</td>
                <td class="tk-table-actions"><button class="tk-action-btn tk-action-btn-danger" type="button" aria-label="Hapus">${i('trash-2', 16)}</button></td>
            </tr>`;
    return `<div class="ap-page-head"><h1 class="tk-h1">Keranjang</h1><p>Periksa pesanan Anda sebelum lanjut ke pembayaran.</p></div>
<section class="ap-section" aria-label="Keranjang belanja">
    <div class="ap-grid-2" style="grid-template-columns: 2fr 1fr">
        <div class="tk-card"><div class="tk-card-body" style="overflow-x: auto">
            <table class="tk-table">
                <thead><tr><th>Produk</th><th>Harga</th><th>Jumlah</th><th>Subtotal</th><th></th></tr></thead>
                <tbody>
                ${row(1)}
                ${row(2)}
                </tbody>
            </table>
        </div></div>
        <div class="tk-card ap-summary"><div class="tk-card-body">
            <p class="tk-title" style="margin: 0 0 12px">Ringkasan</p>
            <p style="display: flex; justify-content: space-between" class="tk-muted"><span>Subtotal</span><span>Rp198.000</span></p>
            <p style="display: flex; justify-content: space-between" class="tk-muted"><span>Ongkos kirim</span><span>Rp15.000</span></p>
            <hr style="border: none; border-top: var(--tk-border-width) solid var(--tk-color-border)">
            <p style="display: flex; justify-content: space-between; font-weight: 600"><span>Total</span><span>Rp213.000</span></p>
            <a class="tk-btn tk-btn-primary" style="width: 100%; justify-content: center" href="hubungi-kami.html">Lanjut ke Pemesanan ${i('arrow-right', 16)}</a><!-- AI: arahkan ke halaman checkout/WhatsApp pemesanan yang nyata. -->
            <a class="tk-btn tk-btn-text" style="width: 100%; margin-top: 8px" href="katalog-produk.html">Lanjut belanja</a>
        </div></div>
    </div>
</section>`;
}

function menuBody(): string {
    const item = (name: string, desc: string, price: string) => `<div class="ap-menu-item"><div><strong>${name}</strong><small>${desc}</small></div><span class="ap-menu-price">${price}</span></div>`;
    return `<div class="ap-page-head"><h1 class="tk-h1">Menu</h1><p>Pilihan terbaik kami — semua dibuat segar setiap hari.</p></div>
<section class="ap-section" aria-label="Menu">
    <div class="ap-grid-2">
        <div>
            <h2 class="tk-h3">Andalan</h2>
            ${item('Menu Andalan Satu', 'Deskripsi singkat yang menggugah selera.', 'Rp25.000')}
            ${item('Menu Andalan Dua', 'Deskripsi singkat yang menggugah selera.', 'Rp28.000')}
            ${item('Menu Andalan Tiga', 'Deskripsi singkat yang menggugah selera.', 'Rp30.000')}
            <h2 class="tk-h3" style="margin-top: var(--tk-space-xl)">Minuman</h2>
            ${item('Minuman Satu', 'Disajikan panas atau dingin.', 'Rp18.000')}
            ${item('Minuman Dua', 'Disajikan panas atau dingin.', 'Rp22.000')}
        </div>
        <div>
            ${img(700, 500, 'Foto menu', 'menu-1')}
            <div style="height: var(--tk-space-md)"></div>
            ${img(700, 500, 'Suasana tempat', 'menu-2')}
        </div>
    </div>
</section>`;
}

function pricingBody(i: (name: string, size?: number) => string): string {
    const plan = (name: string, price: string, items: string[], featured: boolean) => `<div class="tk-card${featured ? '' : ''}"${featured ? ' style="border-color: var(--tk-color-primary); box-shadow: var(--tk-shadow-lg)"' : ''}><div class="tk-card-body">
            ${featured ? '<span class="tk-badge tk-badge-info" style="margin-bottom: 8px">Paling populer</span>' : ''}
            <h2 class="tk-h4" style="margin: 0">${name}</h2>
            <p class="tk-h2" style="margin: 8px 0">${price}<span class="tk-caption" style="font-weight: 400">/bulan</span></p>
            <ul style="list-style: none; padding: 0; margin: 12px 0 20px; display: flex; flex-direction: column; gap: 10px; font-size: var(--tk-text-body-sm)">
                ${items.map(item => `<li style="display: flex; align-items: center; gap: 8px">${i('check', 16)} ${item}</li>`).join('\n                ')}
            </ul>
            <a class="tk-btn ${featured ? 'tk-btn-primary' : 'tk-btn-outline'}" style="width: 100%" href="hubungi-kami.html">Pilih ${name}</a>
        </div></div>`;
    return `<div class="ap-page-head"><h1 class="tk-h1">Harga</h1><p>Pilih paket yang pas — naik kelas kapan saja.</p></div>
<section class="ap-section" aria-label="Paket harga">
    <div class="ap-grid-3">
        ${plan('Dasar', 'Rp0', ['Fitur inti', 'Untuk mulai coba', 'Dukungan komunitas'], false)}
        ${plan('Pro', 'Rp99rb', ['Semua fitur Dasar', 'Fitur lanjutan', 'Dukungan prioritas'], true)}
        ${plan('Bisnis', 'Rp299rb', ['Semua fitur Pro', 'Tanpa batas pemakaian', 'Pendampingan khusus'], false)}
    </div>
    <div class="ap-trust-row" style="justify-content: center; margin-top: var(--tk-space-xl)">
        <span>${i('shield-check', 16)} Garansi 30 hari uang kembali</span>
        <span>${i('credit-card', 16)} Tanpa kartu kredit untuk mulai</span>
        <span>${i('headphones', 16)} Dukungan dalam Bahasa Indonesia</span>
    </div>
</section>
<section class="ap-section" style="padding-top: 0" aria-labelledby="ap-h-harga-cta">
    <div class="tk-cta">
        <div><h2 class="tk-h3" id="ap-h-harga-cta" style="margin: 0">Butuh paket khusus?</h2><p class="tk-muted" style="margin: 4px 0 0">Untuk tim besar atau kebutuhan spesifik, kami siapkan penawaran sendiri.</p></div>
        <a class="tk-btn tk-btn-outline" href="hubungi-kami.html">Hubungi Penjualan ${i('arrow-right', 16)}</a>
    </div>
</section>`;
}

function featuresBody(i: (name: string, size?: number) => string): string {
    return `<div class="ap-page-head"><h1 class="tk-h1">Fitur</h1><p>Semua kemampuan yang membuat pekerjaan Anda lebih mudah.</p></div>
<section class="ap-section" aria-label="Fitur utama">
    <div class="tk-feature-grid ap-grid-3">
        <div class="tk-feature"><span class="tk-feature-icon">${i('zap', 20)}</span><h2 class="tk-h4">Cepat</h2><p class="tk-muted">Respons dalam hitungan milidetik.</p></div>
        <div class="tk-feature"><span class="tk-feature-icon">${i('shield-check', 20)}</span><h2 class="tk-h4">Aman</h2><p class="tk-muted">Data terenkripsi menyeluruh.</p></div>
        <div class="tk-feature"><span class="tk-feature-icon">${i('bar-chart-3', 20)}</span><h2 class="tk-h4">Terukur</h2><p class="tk-muted">Laporan otomatis yang mudah dibaca.</p></div>
        <div class="tk-feature"><span class="tk-feature-icon">${i('users', 20)}</span><h2 class="tk-h4">Kolaboratif</h2><p class="tk-muted">Kerja tim dalam satu alur.</p></div>
        <div class="tk-feature"><span class="tk-feature-icon">${i('plug', 20)}</span><h2 class="tk-h4">Terintegrasi</h2><p class="tk-muted">Terhubung dengan alat favorit Anda.</p></div>
        <div class="tk-feature"><span class="tk-feature-icon">${i('sparkles', 20)}</span><h2 class="tk-h4">Otomatis</h2><p class="tk-muted">Rutinitas dikerjakan automasi.</p></div>
    </div>
</section>
<section class="ap-section" style="padding-top: 0" aria-labelledby="ap-h-sorot">
    <div class="ap-grid-2">
        <div>${img(800, 560, 'Cuplikan fitur', 'fitur-sorot')}</div>
        <div>
            <h2 class="tk-h2" id="ap-h-sorot" style="margin-top: 0">Sorotan utama</h2>
            <p class="tk-muted">Jelaskan fitur paling bernilai dengan bahasa manfaat, bukan bahasa teknis. <!-- AI: isi sesuai produk. --></p>
            <a class="tk-btn tk-btn-primary" href="harga.html">Lihat Harga ${i('arrow-right', 16)}</a>
        </div>
    </div>
</section>`;
}

function blogListBody(i: (name: string, size?: number) => string): string {
    const card = (n: number) => `<article class="tk-card"><div class="tk-card-body">
            <div class="ap-card-img">${img(600, 340, `Artikel ${n}`, `artikel-${n}`)}</div>
            <div class="ap-meta" style="margin-bottom: 8px"><span>1 Januari {{TK_YEAR}}</span><span class="tk-badge">Kategori</span></div>
            <h2 class="tk-h4" style="margin: 0 0 6px"><a href="detail-artikel.html" style="color: inherit; text-decoration: none">Judul artikel yang menarik perhatian ${n}</a></h2>
            <p class="tk-muted" style="margin: 0; font-size: var(--tk-text-body-sm)">Ringkasan artikel dalam satu-dua kalimat yang membuat orang ingin membaca.</p>
        </div></article>`;
    return `<div class="ap-page-head"><h1 class="tk-h1">{{TK_PAGE_TITLE}}</h1><p>Tulisan, kabar, dan wawasan terbaru dari kami.</p></div>
<section class="ap-section" aria-label="Daftar artikel">
    <div class="ap-grid-3">
        ${card(1)}
        ${card(2)}
        ${card(3)}
        ${card(4)}
        ${card(5)}
        ${card(6)}
    </div>
    <nav class="tk-pagination" style="margin-top: var(--tk-space-xl); justify-content: center" aria-label="Halaman artikel">
        <button class="tk-page" aria-label="Sebelumnya">${i('chevron-left', 14)}</button>
        <button class="tk-page tk-page-active">1</button><button class="tk-page">2</button>
        <button class="tk-page" aria-label="Berikutnya">${i('chevron-right', 14)}</button>
    </nav>
</section>`;
}

function articleBody(i: (name: string, size?: number) => string): string {
    return `<article>
<div class="ap-page-head">
    <nav class="tk-breadcrumb" aria-label="Breadcrumb" style="margin-bottom: var(--tk-space-md)">
        <a href="index.html">Beranda</a><span class="tk-breadcrumb-sep">/</span><a href="artikel.html">Artikel</a><span class="tk-breadcrumb-sep">/</span><span class="tk-breadcrumb-current">Judul artikel</span>
    </nav>
    <h1 class="tk-h1">Judul artikel yang menarik perhatian</h1>
    <div class="ap-meta" style="margin-top: var(--tk-space-sm)"><span>${i('calendar', 14)} 1 Januari {{TK_YEAR}}</span><span>${i('user', 14)} Penulis</span><span>${i('clock', 14)} 5 menit baca</span></div>
</div>
<section class="ap-section" aria-label="Isi artikel">
    <div class="ap-prose">
        ${img(800, 450, 'Gambar artikel', 'artikel-hero')}
        <p>Paragraf pembuka yang merangkum inti artikel dan membuat pembaca ingin lanjut. <!-- AI: tulis artikel nyata. --></p>
        <h2 class="tk-h3">Subjudul pertama</h2>
        <p>Isi bagian pertama. Tulis kalimat pendek yang mudah dicerna, satu gagasan per paragraf.</p>
        <h2 class="tk-h3">Subjudul kedua</h2>
        <p>Isi bagian kedua, ditutup dengan simpulan atau ajakan.</p>
        <div class="tk-cta" style="margin-top: var(--tk-space-xl)">
            <div><h2 class="tk-h4" style="margin: 0">Suka artikel ini?</h2><p class="tk-muted" style="margin: 4px 0 0">Baca artikel lain atau hubungi kami.</p></div>
            <a class="tk-btn tk-btn-primary" href="artikel.html">Artikel Lainnya</a>
        </div>
    </div>
</section>
</article>`;
}

const GALLERY_BODY = `<div class="ap-page-head"><h1 class="tk-h1">Galeri</h1><p>Dokumentasi karya dan momen kami.</p></div>
<section class="ap-section" aria-label="Galeri">
    <div class="ap-gallery">
        ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<figure style="margin: 0">${img(600, 450, `Galeri ${n}`, `galeri-${n}`)}<figcaption class="tk-caption" style="margin-top: 6px; color: var(--tk-color-text-muted)">Keterangan foto ${n}</figcaption></figure>`).join('\n        ')}
    </div>
</section>`;

function bookingBody(i: (name: string, size?: number) => string): string {
    return `<div class="ap-page-head"><h1 class="tk-h1">Booking</h1><p>Pilih jadwal yang pas — kami konfirmasi secepatnya.</p></div>
<section class="ap-section" aria-label="Formulir booking">
    <div class="ap-grid-2">
        <div class="tk-card"><div class="tk-card-body">
            <form action="#" method="post">
                <div class="tk-field"><label class="tk-label" for="bk-nama">Nama</label><input class="tk-input" id="bk-nama" name="nama" type="text" placeholder="Nama Anda" required></div>
                <div class="tk-field"><label class="tk-label" for="bk-kontak">No. WhatsApp</label><input class="tk-input" id="bk-kontak" name="kontak" type="tel" placeholder="0812…" required></div>
                <div class="tk-field"><span class="tk-label" id="bk-layanan-label">Layanan</span>
                    <div class="ap-select">
                        <input type="hidden" name="layanan" value="">
                        <button class="tk-input ap-select-btn" type="button" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="bk-layanan-label"><span class="ap-select-label">Pilih layanan</span>${i('chevron-down', 14)}</button>
                        <div class="ap-select-menu" role="listbox" hidden>
                            <button class="ap-select-opt" type="button" role="option" data-value="" aria-selected="true">Pilih layanan</button>
                            <button class="ap-select-opt" type="button" role="option" data-value="layanan-utama" aria-selected="false">Layanan utama</button>
                            <button class="ap-select-opt" type="button" role="option" data-value="layanan-lainnya" aria-selected="false">Layanan lainnya</button>
                            <!-- AI: ganti hanya TEKS opsi dengan daftar layanan nyata; biarkan struktur tombol dan atributnya. -->
                        </div>
                    </div>
                </div>
                <div class="ap-grid-2" style="gap: var(--tk-space-md)">
                    <div class="tk-field"><label class="tk-label" for="bk-tanggal">Tanggal</label><input class="tk-input" id="bk-tanggal" name="tanggal" type="date" required></div>
                    <div class="tk-field"><label class="tk-label" for="bk-jam">Jam</label><input class="tk-input" id="bk-jam" name="jam" type="time" required></div>
                </div>
                <div class="tk-field"><label class="tk-label" for="bk-catatan">Catatan</label><textarea class="tk-textarea" id="bk-catatan" name="catatan" rows="3" placeholder="Permintaan khusus…"></textarea></div>
                <button class="tk-btn tk-btn-primary" type="submit">Kirim Booking ${i('calendar-check', 16)}</button>
            </form>
        </div></div>
        <div>
            <div class="tk-alert tk-alert-info" style="margin-bottom: var(--tk-space-md)">${i('info', 18)}<div><p class="tk-alert-title">Cara kerjanya</p>Isi formulir, kami konfirmasi lewat WhatsApp dalam 1×24 jam.</div></div>
            ${img(700, 460, 'Foto layanan', 'booking-foto')}
        </div>
    </div>
</section>`;
}

function genericBody(i: (name: string, size?: number) => string): string {
    return `<div class="ap-page-head"><h1 class="tk-h1">{{TK_PAGE_TITLE}}</h1><p>Deskripsi singkat halaman ini. <!-- AI: isi sesuai tujuan halaman. --></p></div>
<section class="ap-section" aria-label="Isi halaman">
    <div class="ap-prose">
        <p>Isi halaman ditulis di sini. Kerangka ini dipakai untuk halaman di luar arketipe bawaan — AI mengisinya berdasarkan nama halaman dan deskripsi proyek.</p>
        <div class="tk-cta" style="margin-top: var(--tk-space-xl)">
            <div><h2 class="tk-h4" style="margin: 0">Butuh bantuan?</h2><p class="tk-muted" style="margin: 4px 0 0">Kami siap menjawab pertanyaan Anda.</p></div>
            <a class="tk-btn tk-btn-primary" href="hubungi-kami.html">Hubungi Kami ${i('arrow-right', 16)}</a>
        </div>
    </div>
</section>`;
}

/* ================================================================ */
/* Perakit                                                           */
/* ================================================================ */

/**
 * Bangkitkan seluruh berkas arketipe (`pages/*.html` + `partials/*.html`) untuk satu kit.
 * Dipanggil `index.ts` tiap kit; markup-nya sama, kepala halamannya dibaca dari manifest.
 */
export function buildArchetypeFiles(manifest: TokenaiDesignKitManifest): Record<string, string> {
    const i = ic(manifest.icons.set);
    const specs: PageSpec[] = [
        // Badan beranda diapit marker supaya scaffolder bisa menggantinya dengan rangkaian
        // blok `partials/home/` sesuai resep type pack; tanpa resep, isi bawaan yang dipakai.
        { archetype: 'home', title: 'Beranda', description: '{{TK_DESCRIPTION}}', path: '', body: `<!-- tk:home-body -->\n${homeBody(i)}\n<!-- /tk:home-body -->`, ld: 'home' },
        { archetype: 'about', title: 'Tentang Kami', description: 'Kenali {{TK_BRAND}}: cerita, tim, dan nilai yang kami pegang.', path: 'tentang-kami.html', body: aboutBody(i), ld: 'page' },
        { archetype: 'contact', title: 'Hubungi Kami', description: 'Hubungi {{TK_BRAND}} — alamat, telepon, email, dan formulir pesan.', path: 'hubungi-kami.html', body: contactBody(i), ld: 'page' },
        { archetype: 'services', title: 'Layanan', description: 'Layanan yang ditawarkan {{TK_BRAND}} dan cara kerjanya.', path: 'layanan.html', body: servicesBody(i), ld: 'page' },
        { archetype: 'faq', title: 'Pertanyaan Umum', description: 'Jawaban untuk pertanyaan yang paling sering diajukan ke {{TK_BRAND}}.', path: 'faq.html', body: FAQ_BODY, ld: 'faq' },
        { archetype: 'privacy', title: 'Kebijakan Privasi', description: 'Bagaimana {{TK_BRAND}} mengumpulkan dan melindungi data Anda.', path: 'kebijakan-privasi.html', body: legalBody('privacy'), ld: 'page' },
        { archetype: 'terms', title: 'Syarat dan Ketentuan', description: 'Syarat dan ketentuan penggunaan layanan {{TK_BRAND}}.', path: 'syarat-dan-ketentuan.html', body: legalBody('terms'), ld: 'page' },
        { archetype: 'cookies', title: 'Kebijakan Cookie', description: 'Cookie yang dipakai situs {{TK_BRAND}} dan cara mengelolanya.', path: 'kebijakan-cookie.html', body: legalBody('cookies'), ld: 'page' },
        { archetype: 'sitemap', title: 'Peta Situs', description: 'Daftar semua halaman di situs {{TK_BRAND}}.', path: 'peta-situs.html', body: SITEMAP_BODY, ld: 'page' },
        { archetype: 'catalog', title: '{{TK_PAGE_TITLE}}', description: 'Jelajahi katalog {{TK_BRAND}}.', path: '{{TK_PAGE_SLUG}}.html', body: catalogBody(i), ld: 'page' },
        { archetype: 'product-detail', title: 'Detail Produk', description: 'Detail produk {{TK_BRAND}}: harga, varian, dan ulasan.', path: 'detail-produk.html', body: productDetailBody(i), ld: 'page' },
        { archetype: 'cart', title: 'Keranjang', description: 'Keranjang belanja Anda di {{TK_BRAND}}.', path: 'keranjang.html', body: cartBody(i), ld: 'page' },
        { archetype: 'menu', title: 'Menu', description: 'Menu lengkap {{TK_BRAND}} beserta harganya.', path: 'menu.html', body: menuBody(), ld: 'page' },
        { archetype: 'pricing', title: 'Harga', description: 'Paket harga {{TK_BRAND}} — pilih yang pas untuk Anda.', path: 'harga.html', body: pricingBody(i), ld: 'page' },
        { archetype: 'features', title: 'Fitur', description: 'Fitur-fitur unggulan {{TK_BRAND}}.', path: 'fitur.html', body: featuresBody(i), ld: 'page' },
        { archetype: 'blog-list', title: '{{TK_PAGE_TITLE}}', description: 'Artikel dan kabar terbaru dari {{TK_BRAND}}.', path: '{{TK_PAGE_SLUG}}.html', body: blogListBody(i), ld: 'page' },
        { archetype: 'article', title: 'Detail Artikel', description: 'Artikel dari {{TK_BRAND}}.', path: 'detail-artikel.html', body: articleBody(i), ld: 'page' },
        { archetype: 'gallery', title: 'Galeri', description: 'Galeri foto {{TK_BRAND}}.', path: 'galeri.html', body: GALLERY_BODY, ld: 'page' },
        { archetype: 'booking', title: 'Booking', description: 'Booking layanan {{TK_BRAND}} secara online.', path: 'booking.html', body: bookingBody(i), ld: 'page' },
        { archetype: 'generic', title: '{{TK_PAGE_TITLE}}', description: 'Halaman {{TK_PAGE_TITLE}} di situs {{TK_BRAND}}.', path: '{{TK_PAGE_SLUG}}.html', body: genericBody(i), ld: 'page' }
    ];
    const files: Record<string, string> = {
        'partials/header.html': headerPartial(i),
        'partials/footer.html': footerPartial(i)
    };
    for (const spec of specs) {
        files[`pages/${spec.archetype}.html`] = renderPage(manifest, spec);
    }
    for (const [name, html] of Object.entries(buildHomeBlocks(i))) {
        files[`partials/home/${name}.html`] = `${html}\n`;
    }
    return files;
}
