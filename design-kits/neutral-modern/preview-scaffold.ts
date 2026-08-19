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
 * Perancah bersama halaman pratinjau kit (`ex-*`): bilah navigasi sticky yang sama di showcase,
 * halaman contoh, dan bingkai ponsel, plus helper chart. Bukan bagian kontrak komponen kit —
 * murni pengalaman melihat-lihat kit.
 */

/**
 * Tiga tampilan utama; versi web/ponsel dipilih di dalam tampilannya lewat saklar perangkat.
 * Login & register bukan tampilan tersendiri — keduanya bagian paket Komponen: kartunya tampil
 * di showcase, dan halaman penuhnya (examples/login.html, examples/register.html) menyorot tab
 * Komponen saat dibuka.
 */
import { TOKENAI_WEBSITE_TYPES, websiteTypeEntry, websiteTypeId } from '../website-types';

export type TokenaiKitPreviewView = 'components' | 'dashboard' | 'landing';

/**
 * Tampilan aktif bilah: tiga tampilan utama, atau `demo` saat halaman contoh jenis website
 * (rakitan arketipe di `demo/`) yang sedang terbuka — tab utama tidak ada yang menyorot,
 * dropdown Jenis Website-lah yang menyala.
 */
export type TokenaiKitPreviewActive = TokenaiKitPreviewView | 'demo';

export const CHARTJS_SCRIPT = 'https://cdn.jsdelivr.net/npm/chart.js@4.5.1/dist/chart.umd.min.js';

/** CSS bilah navigasi sticky. Setinggi 48px tetap, supaya elemen sticky halaman bisa mengambil offset yang pasti. */
export const EX_NAV_CSS = `.ex-nav { position: sticky; top: 0; z-index: 100; display: flex; align-items: center; gap: 2px; height: 48px; box-sizing: border-box; padding: 0 12px; background: var(--tk-color-surface); border-bottom: 1px solid var(--tk-color-border); overflow-x: auto; }
    .ex-nav-title { display: inline-flex; align-items: center; gap: 6px; margin-right: 10px; font-size: var(--tk-text-caption); font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--tk-color-text-muted); white-space: nowrap; flex: none; }
    .ex-nav-tab { display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px; border-radius: var(--tk-radius-sm); font-size: var(--tk-text-caption); font-weight: 500; color: var(--tk-color-text-muted); text-decoration: none; white-space: nowrap; flex: none; }
    .ex-nav-tab:hover { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
    .ex-nav-tab-active { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
    .ex-nav-right { margin-left: auto; display: flex; align-items: center; gap: 8px; flex: none; }
    .ex-nav-seg { display: inline-flex; border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-sm); overflow: hidden; }
    .ex-nav-seg-btn { display: inline-flex; align-items: center; gap: 5px; padding: 5px 10px; font-size: var(--tk-text-caption); font-weight: 500; color: var(--tk-color-text-muted); text-decoration: none; white-space: nowrap; }
    .ex-nav-seg-btn:hover { color: var(--tk-color-text); }
    .ex-nav-seg-btn + .ex-nav-seg-btn { border-left: 1px solid var(--tk-color-border); }
    .ex-nav-seg-active { background: var(--tk-color-surface-2); color: var(--tk-color-text); }
    .ex-nav-dd { position: relative; flex: none; }
    .ex-nav-dd-btn { border: none; background: transparent; cursor: pointer; font-family: inherit; }
    .ex-nav-dd-panel { display: none; position: fixed; top: 52px; width: 260px; max-height: min(420px, calc(100vh - 64px)); box-sizing: border-box; flex-direction: column; background: var(--tk-color-surface); border: 1px solid var(--tk-color-border); border-radius: var(--tk-radius-md); box-shadow: var(--tk-shadow-lg); z-index: 120; overflow: hidden; }
    .ex-nav-dd-panel.ex-open { display: flex; }
    .ex-nav-dd-search { display: flex; align-items: center; gap: 6px; padding: 8px 10px; border-bottom: 1px solid var(--tk-color-border); color: var(--tk-color-text-muted); }
    .ex-nav-dd-search input { flex: 1; min-width: 0; border: none; outline: none; background: transparent; color: var(--tk-color-text); font: inherit; font-size: var(--tk-text-caption); }
    .ex-nav-dd-list { overflow-y: auto; padding: 6px; }
    .ex-nav-dd-item { display: block; padding: 7px 9px; border-radius: var(--tk-radius-sm); font-size: var(--tk-text-caption); color: var(--tk-color-text); text-decoration: none; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .ex-nav-dd-item:hover { background: var(--tk-color-surface-2); }
    .ex-nav-dd-item.ex-active { background: var(--tk-color-surface-2); font-weight: 600; }
    .ex-nav-dd-empty { display: none; padding: 10px; font-size: var(--tk-text-caption); color: var(--tk-color-text-muted); }
    .ex-embedded .ex-nav { display: none; }`;

/**
 * Halaman yang dirender di dalam bingkai ponsel diberi tanda eksplisit lewat query `?tk-embed`
 * pada src iframe-nya; kelas `ex-embedded` lalu menyembunyikan bilah navigasi dan mengembalikan
 * offset sticky ke nol. Sengaja bukan deteksi `window.self !== window.top`: pratinjau di dalam
 * IDE juga dirender lewat iframe, dan bilahnya justru harus tetap ada di sana.
 */
export const EX_EMBED_SCRIPT = '<script>if (location.search.indexOf(\'tk-embed\') !== -1) { document.documentElement.classList.add(\'ex-embedded\'); }</script>';

const VIEWS: { id: TokenaiKitPreviewView; label: string; icon: string; href: string }[] = [
    { id: 'components', label: 'Komponen', icon: 'layout-grid', href: 'showcase.html' },
    { id: 'dashboard', label: 'Admin Dashboard', icon: 'layout-dashboard', href: 'examples/dashboard.html' },
    { id: 'landing', label: 'Landing Page', icon: 'panels-top-left', href: 'examples/landing.html' }
];

/**
 * Skrip dropdown Jenis Website: buka/tutup panel, cari dengan filter teks, tutup saat klik di
 * luar. Panelnya `position: fixed` (bukan absolute) karena `.ex-nav` ber-`overflow-x: auto` —
 * panel absolut akan terpotong bilahnya sendiri; posisi kirinya dihitung dari tombol saat dibuka.
 */
const EX_NAV_DD_SCRIPT = `<script>
function tkExDdToggle(btn) {
    var panel = btn.parentElement.querySelector('.ex-nav-dd-panel');
    var open = panel.classList.toggle('ex-open');
    if (open) {
        var rect = btn.getBoundingClientRect();
        panel.style.left = Math.max(8, Math.min(rect.left, window.innerWidth - 276)) + 'px';
        var search = panel.querySelector('input');
        search.value = '';
        tkExDdFilter(search);
        setTimeout(function () { search.focus(); }, 0);
    }
}
function tkExDdFilter(input) {
    var panel = input.closest('.ex-nav-dd-panel');
    var query = input.value.toLowerCase();
    var any = false;
    panel.querySelectorAll('.ex-nav-dd-item').forEach(function (item) {
        var show = item.textContent.toLowerCase().indexOf(query) !== -1;
        item.style.display = show ? '' : 'none';
        if (show) { any = true; }
    });
    panel.querySelector('.ex-nav-dd-empty').style.display = any ? 'none' : 'block';
}
document.addEventListener('click', function (event) {
    if (event.target.closest && event.target.closest('.ex-nav-dd')) { return; }
    document.querySelectorAll('.ex-nav-dd-panel.ex-open').forEach(function (panel) { panel.classList.remove('ex-open'); });
});
</script>`;

const THEME_TOGGLE_BASE_JS = `
    var root = document.documentElement;
    var dark = root.getAttribute('data-tk-theme') === 'dark';
    if (dark) { root.removeAttribute('data-tk-theme'); } else { root.setAttribute('data-tk-theme', 'dark'); }
    this.querySelector('span').textContent = dark ? 'Gelap' : 'Terang';
    if (window.tkRedrawCharts) { window.tkRedrawCharts(); }
`;

export interface TokenaiExNavOptions {
    /**
     * Saklar Web | Ponsel untuk tampilan yang punya versi ponsel. Dua bentuk:
     * `base` — nama berkas di `examples/` tanpa akhiran (mis. `dashboard` →
     * `dashboard.html` / `dashboard-mobile.html`); atau `webHref`/`mobileHref` eksplisit
     * (dipakai halaman demo yang toggle-nya menunjuk berkas di folder jenisnya sendiri).
     * Tanpa opsi ini saklarnya tidak dirender (mis. di lembar komponen).
     */
    device?: { active: 'web' | 'mobile'; base?: string; webHref?: string; mobileHref?: string };
    /** JS tambahan pada saklar tema; dipakai bingkai ponsel untuk ikut menggelapkan isi iframe-nya. */
    extraThemeJs?: string;
    /** `false` menyembunyikan saklar tema — untuk kit satu-tema (mis. cyberpunk yang gelap bawaan). */
    themeToggle?: boolean;
    /**
     * Jenis website yang sedang dipratinjau (halaman `demo/<id>/…`): label tombol dropdown
     * menampilkan jenisnya dan itemnya ditandai aktif — dipanggang saat build, tanpa JS.
     */
    activeType?: { id: string; label: string };
}

/**
 * Bilah navigasi sticky antar-tampilan kit: nama kit di kiri, tiga tab tampilan, lalu saklar
 * perangkat dan tema di kanan. `prefix` menyesuaikan tautan dari lokasi halaman (kosong di akar
 * kit, `../` dari `examples/`).
 */
export function exNav(kitTitle: string, active: TokenaiKitPreviewActive, prefix: '' | '../' | '../../', options: TokenaiExNavOptions = {}): string {
    const tabs = VIEWS.map(view => {
        const activeClass = view.id === active ? ' ex-nav-tab-active' : '';
        return `<a class="ex-nav-tab${activeClass}" href="${prefix}${view.href}"><iconify-icon icon="lucide:${view.icon}" width="14" height="14"></iconify-icon> ${view.label}</a>`;
    }).join('\n    ');
    const webHref = options.device?.webHref ?? `${prefix}examples/${options.device?.base}.html`;
    const mobileHref = options.device?.mobileHref ?? `${prefix}examples/${options.device?.base}-mobile.html`;
    const device = options.device
        ? `<div class="ex-nav-seg" role="group" aria-label="Versi perangkat">
        <a class="ex-nav-seg-btn${options.device.active === 'web' ? ' ex-nav-seg-active' : ''}" href="${webHref}"><iconify-icon icon="lucide:monitor" width="13" height="13"></iconify-icon> Web</a>
        <a class="ex-nav-seg-btn${options.device.active === 'mobile' ? ' ex-nav-seg-active' : ''}" href="${mobileHref}"><iconify-icon icon="lucide:smartphone" width="13" height="13"></iconify-icon> Ponsel</a>
    </div>`
        : '';
    // Dropdown ber-search jenis website: tiap item membuka beranda demo jenisnya
    // (`demo/<id>/index.html`, situs contoh yang dirakit khusus jenis itu). Jenis aplikasi
    // internal diarahkan ke contoh dashboard. Saat halaman demo yang sedang terbuka,
    // `options.activeType` memanggang label + item aktifnya langsung di markup.
    const typeItems = TOKENAI_WEBSITE_TYPES
        .map(type => {
            const id = websiteTypeId(type);
            const activeClass = id === options.activeType?.id ? ' ex-active' : '';
            return `<a class="ex-nav-dd-item${activeClass}" data-tk-type="${id}" href="${prefix}${websiteTypeEntry(type)}">${type.label}</a>`;
        })
        .join('\n            ');
    const typeDropdown = `<div class="ex-nav-dd">
        <button type="button" class="ex-nav-tab ex-nav-dd-btn${active === 'demo' ? ' ex-nav-tab-active' : ''}" onclick="tkExDdToggle(this)"><iconify-icon icon="lucide:globe" width="14" height="14"></iconify-icon> <span class="ex-nav-dd-label">${options.activeType?.label ?? 'Jenis Website'}</span> <iconify-icon icon="lucide:chevron-down" width="12" height="12"></iconify-icon></button>
        <div class="ex-nav-dd-panel">
            <label class="ex-nav-dd-search"><iconify-icon icon="lucide:search" width="13" height="13"></iconify-icon><input type="text" placeholder="Cari jenis website…" oninput="tkExDdFilter(this)"></label>
            <div class="ex-nav-dd-list">
            ${typeItems}
            <div class="ex-nav-dd-empty">Tidak ada jenis yang cocok.</div>
            </div>
        </div>
    </div>`;
    return `<nav class="ex-nav">
    <span class="ex-nav-title"><iconify-icon icon="lucide:palette" width="14" height="14"></iconify-icon> ${kitTitle}</span>
    ${tabs}
    ${typeDropdown}
    <div class="ex-nav-right">
        ${device}
        ${options.themeToggle === false ? '' : `<button class="tk-btn tk-btn-outline tk-btn-sm" onclick="${THEME_TOGGLE_BASE_JS}${options.extraThemeJs ?? ''}"><iconify-icon icon="lucide:sun-moon" width="14" height="14"></iconify-icon><span>Gelap</span></button>`}
    </div>
</nav>
${EX_NAV_DD_SCRIPT}`;
}

/**
 * Helper chart yang membaca token kit saat menggambar, supaya chart ikut tema. Registrasi lewat
 * `tkChart(idCanvas, build)`; `build` menerima token dan mengembalikan konfigurasi Chart.js.
 * `window.tkRedrawCharts()` menggambar ulang semuanya — dipanggil saklar tema.
 */
export const CHART_HELPER_SCRIPT = `<script>
var tkChartRedraws = [];
function tkTokens() {
    var s = getComputedStyle(document.documentElement);
    function v(name) { return s.getPropertyValue(name).trim(); }
    return {
        text: v('--tk-color-text'), muted: v('--tk-color-text-muted'), border: v('--tk-color-border'),
        primary: v('--tk-color-primary'), secondary: v('--tk-color-secondary'), accent: v('--tk-color-accent'),
        success: v('--tk-color-success'), warning: v('--tk-color-warning'), danger: v('--tk-color-danger'),
        info: v('--tk-color-info'), surface: v('--tk-color-surface'), surface2: v('--tk-color-surface-2'),
        font: v('--tk-font-body')
    };
}
function tkChart(id, build) {
    var chart;
    function render() {
        var el = document.getElementById(id);
        if (!el || typeof Chart === 'undefined') { return; }
        if (chart) { chart.destroy(); }
        var t = tkTokens();
        Chart.defaults.font.family = t.font;
        Chart.defaults.color = t.muted;
        Chart.defaults.borderColor = t.border;
        chart = new Chart(el, build(t));
    }
    tkChartRedraws.push(render);
    render();
}
window.tkRedrawCharts = function () { tkChartRedraws.forEach(function (render) { render(); }); };
</script>`;
