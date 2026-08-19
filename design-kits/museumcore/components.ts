/********************************************************************************
 * Copyright (C) 2026 TOKENAI.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

/**
 * Fragmen `components/` kit Museumcore: markup murni dengan kelas kontrak, teks placeholder
 * netral, ikon Iconify (set flowbite — garis tunggal setipis rambut yang tidak melawan pigura
 * dan huruf pahatan kit ini). Gayanya seluruhnya di `styles.css` — fragmen inilah yang disalin
 * agen saat merakit halaman, jadi jangan menaruh style atribut di sini.
 *
 * Halaman yang memakai fragmen ber-ikon wajib memuat skrip web component Iconify (URL-nya ada di
 * `kit.json` bidang `icons.script`); showcase kit sudah mencontohkannya.
 */

function icon(name: string, size = 18): string {
    return `<iconify-icon icon="flowbite:${name}" width="${size}" height="${size}"></iconify-icon>`;
}

export const MUSEUMCORE_COMPONENTS: Record<string, string> = {
    'components/typography.html': `<h1 class="tk-h1">Judul Halaman</h1>
<h2 class="tk-h2">Judul Seksi</h2>
<h3 class="tk-h3">Judul Kartu</h3>
<h4 class="tk-h4">Subjudul</h4>
<p class="tk-title">Title / Subtitle</p>
<p class="tk-body">Teks isi biasa dengan <a href="#" class="tk-link">tautan</a> dan <code class="tk-code">kode inline</code>.</p>
<p class="tk-body-sm tk-muted">Teks kecil sekunder.</p>
<p class="tk-caption">Caption 12px.</p>
`,
    'components/button.html': `<button class="tk-btn tk-btn-primary">Primary</button>
<button class="tk-btn tk-btn-secondary">Secondary</button>
<button class="tk-btn tk-btn-outline">Outline</button>
<button class="tk-btn tk-btn-ghost">Ghost</button>
<button class="tk-btn tk-btn-danger">Danger</button>
<button class="tk-btn tk-btn-text">Text</button>
<button class="tk-btn tk-btn-primary tk-btn-sm">Small</button>
<button class="tk-btn tk-btn-primary tk-btn-lg">Large</button>
<button class="tk-btn tk-btn-primary" disabled>Disabled</button>
<button class="tk-btn tk-btn-primary tk-btn-loading">Loading</button>
<button class="tk-btn tk-btn-outline tk-btn-icon" aria-label="Tambah">${icon('plus-outline')}</button>
`,
    'components/form.html': `<div class="tk-field">
    <label class="tk-label">Nama</label>
    <input class="tk-input" type="text" placeholder="Placeholder text">
    <span class="tk-help">Teks bantuan di bawah field.</span>
</div>
<div class="tk-field tk-field-error">
    <label class="tk-label">Email</label>
    <input class="tk-input" type="email" value="bukan-email">
    <span class="tk-help">Alamat email tidak valid.</span>
</div>
<div class="tk-field">
    <label class="tk-label">Pilihan</label>
    <div class="tk-select">
        <button class="tk-select-trigger" type="button"><span class="tk-select-placeholder">Pilih satu opsi</span> ${icon('chevron-down-outline', 15)}</button>
        <div class="tk-select-menu">
            <button class="tk-option" type="button">Opsi pertama</button>
            <button class="tk-option" type="button">Opsi kedua</button>
        </div>
    </div>
</div>
<div class="tk-field">
    <label class="tk-label">Pesan</label>
    <textarea class="tk-textarea" placeholder="Tulis pesan di sini..."></textarea>
</div>
<label class="tk-check"><input class="tk-checkbox" type="checkbox" checked> Setuju dengan ketentuan</label>
<label class="tk-check"><input class="tk-radio" type="radio" name="r" checked> Opsi pertama</label>
<label class="tk-check"><input class="tk-toggle" type="checkbox" checked> Notifikasi aktif</label>
`,
    'components/search.html': `<div class="tk-search">
    <span class="tk-search-icon">${icon('search-outline', 16)}</span>
    <input class="tk-input" type="search" placeholder="Cari koleksi...">
    <kbd class="tk-search-kbd">Ctrl K</kbd>
</div>
`,
    'components/select.html': `<div class="tk-select">
    <button class="tk-select-trigger" type="button">Opsi pertama ${icon('chevron-down-outline', 15)}</button>
    <div class="tk-select-menu">
        <button class="tk-option tk-option-selected" type="button">Opsi pertama <span class="tk-option-check">${icon('check-outline', 15)}</span></button>
        <button class="tk-option" type="button">Opsi kedua</button>
        <button class="tk-option" type="button">Opsi ketiga</button>
    </div>
</div>
<div class="tk-select">
    <button class="tk-select-trigger" type="button"><span class="tk-select-placeholder">Pilih kurator</span> ${icon('chevron-down-outline', 15)}</button>
    <div class="tk-select-menu">
        <div class="tk-select-menu-search">${icon('search-outline', 14)}<input type="text" placeholder="Cari kurator..."></div>
        <button class="tk-option" type="button">Jane Smith</button>
        <button class="tk-option tk-option-selected" type="button">John Doe <span class="tk-option-check">${icon('check-outline', 15)}</span></button>
        <button class="tk-option" type="button">Maya Putri</button>
    </div>
</div>
<div class="tk-select">
    <button class="tk-select-trigger" type="button">Peran &middot; 2 dipilih ${icon('chevron-down-outline', 15)}</button>
    <div class="tk-select-menu">
        <label class="tk-option"><input class="tk-checkbox" type="checkbox" checked> Kurator</label>
        <label class="tk-option"><input class="tk-checkbox" type="checkbox" checked> Konservator</label>
        <label class="tk-option"><input class="tk-checkbox" type="checkbox"> Arsiparis</label>
        <label class="tk-option"><input class="tk-checkbox" type="checkbox"> Pemandu</label>
        <div class="tk-select-menu-footer">
            <button class="tk-btn tk-btn-text tk-btn-sm" type="button">Bersihkan</button>
            <button class="tk-btn tk-btn-primary tk-btn-sm" type="button">Terapkan</button>
        </div>
    </div>
</div>
`,
    'components/dropdown.html': `<div class="tk-dropdown">
    <button class="tk-btn tk-btn-outline">Aksi ${icon('chevron-down-outline', 15)}</button>
    <div class="tk-dropdown-menu">
        <span class="tk-dropdown-label">Aksi baris</span>
        <button class="tk-dropdown-item">${icon('eye-outline', 16)} Lihat detail</button>
        <button class="tk-dropdown-item">${icon('edit-outline', 16)} Edit</button>
        <button class="tk-dropdown-item">${icon('file-copy-outline', 16)} Duplikat</button>
        <hr class="tk-dropdown-divider">
        <button class="tk-dropdown-item tk-dropdown-item-danger">${icon('trash-bin-outline', 16)} Hapus</button>
    </div>
</div>
`,
    'components/filter.html': `<div class="tk-filter-bar">
    <div class="tk-search">
        <span class="tk-search-icon">${icon('search-outline', 16)}</span>
        <input class="tk-input" type="search" placeholder="Cari nama atau email...">
    </div>
    <div class="tk-select">
        <button class="tk-select-trigger" type="button">Semua status ${icon('chevron-down-outline', 15)}</button>
        <div class="tk-select-menu">
            <button class="tk-option tk-option-selected" type="button">Semua status <span class="tk-option-check">${icon('check-outline', 15)}</span></button>
            <button class="tk-option" type="button">Dipamerkan</button>
            <button class="tk-option" type="button">Disimpan</button>
        </div>
    </div>
    <div class="tk-select">
        <button class="tk-select-trigger" type="button">Semua peran ${icon('chevron-down-outline', 15)}</button>
        <div class="tk-select-menu">
            <label class="tk-option"><input class="tk-checkbox" type="checkbox" checked> Kurator</label>
            <label class="tk-option"><input class="tk-checkbox" type="checkbox"> Konservator</label>
        </div>
    </div>
    <button class="tk-btn tk-btn-outline">${icon('filter-outline', 16)} Filter <span class="tk-filter-count">2</span></button>
</div>
<div class="tk-filter-active">
    <span class="tk-caption">Filter aktif:</span>
    <span class="tk-chip">Status: Dipamerkan <button class="tk-chip-remove" aria-label="Hapus filter">&times;</button></span>
    <span class="tk-chip">Peran: Kurator <button class="tk-chip-remove" aria-label="Hapus filter">&times;</button></span>
    <button class="tk-btn tk-btn-text tk-btn-sm">Bersihkan semua</button>
</div>
`,
    'components/card.html': `<div class="tk-card">
    <div class="tk-card-header"><h3 class="tk-title">Judul Kartu</h3></div>
    <div class="tk-card-body tk-body-sm tk-muted">Deskripsi singkat isi kartu ini.</div>
    <div class="tk-card-footer"><button class="tk-btn tk-btn-primary tk-btn-sm">Aksi</button></div>
</div>
<div class="tk-card tk-card-stat">
    <div class="tk-card-body">
        <p class="tk-caption">Total Pengunjung</p>
        <p class="tk-stat-value">12.540</p>
        <span class="tk-stat-trend-up">+12,5% dari bulan lalu</span>
    </div>
</div>
`,
    'components/navigation.html': `<nav class="tk-navbar">
    <span class="tk-navbar-brand">Logo</span>
    <a class="tk-navbar-link tk-navbar-link-active" href="#">Beranda</a>
    <a class="tk-navbar-link" href="#">Koleksi</a>
    <a class="tk-navbar-link" href="#">Pameran</a>
    <button class="tk-btn tk-btn-primary tk-btn-sm">Masuk</button>
</nav>
<nav class="tk-breadcrumb">
    <a href="#">Beranda</a>
    <span class="tk-breadcrumb-sep">${icon('chevron-right-outline', 13)}</span>
    <a href="#">Koleksi</a>
    <span class="tk-breadcrumb-sep">${icon('chevron-right-outline', 13)}</span>
    <span class="tk-breadcrumb-current">Galeri Barat</span>
</nav>
<aside class="tk-sidebar">
    <span class="tk-sidebar-group">Umum</span>
    <a class="tk-sidebar-item tk-sidebar-item-active" href="#">${icon('home-outline')} <span class="tk-sidebar-label">Dashboard</span></a>
    <a class="tk-sidebar-item" href="#">${icon('image-outline')} <span class="tk-sidebar-label">Koleksi</span></a>
    <span class="tk-sidebar-group">Analitik</span>
    <a class="tk-sidebar-item" href="#">${icon('chart-outline')} <span class="tk-sidebar-label">Laporan</span></a>
    <span class="tk-sidebar-group">Lainnya</span>
    <a class="tk-sidebar-item" href="#">${icon('cog-outline')} <span class="tk-sidebar-label">Pengaturan</span></a>
</aside>
`,
    'components/tabs.html': `<nav class="tk-tabs">
    <a class="tk-tab tk-tab-active" href="#">Tab Satu</a>
    <a class="tk-tab" href="#">Tab Dua</a>
    <a class="tk-tab" href="#">Tab Tiga</a>
</nav>
<div class="tk-segmented">
    <button class="tk-segment tk-segment-active">Bulanan</button>
    <button class="tk-segment">Kuartalan</button>
    <button class="tk-segment">Tahunan</button>
</div>
`,
    'components/badge.html': `<span class="tk-badge">Default</span>
<span class="tk-badge tk-badge-success">Dipamerkan</span>
<span class="tk-badge tk-badge-warning">Konservasi</span>
<span class="tk-badge tk-badge-danger">Dipinjamkan</span>
<span class="tk-badge tk-badge-info">Baru</span>
<span class="tk-chip">Renaissance <button class="tk-chip-remove" aria-label="Hapus">&times;</button></span>
`,
    'components/alert.html': `<div class="tk-alert tk-alert-success">${icon('check-circle-outline', 18)}<span><span class="tk-alert-title">Berhasil</span> Perubahan Anda sudah tersimpan.</span></div>
<div class="tk-alert tk-alert-warning">${icon('exclamation-circle-outline', 18)}<span><span class="tk-alert-title">Perhatian</span> Periksa kembali informasi Anda.</span></div>
<div class="tk-alert tk-alert-danger">${icon('close-outline', 18)}<span><span class="tk-alert-title">Gagal</span> Terjadi kesalahan, silakan coba lagi.</span></div>
<div class="tk-alert tk-alert-info">${icon('info-circle-outline', 18)}<span><span class="tk-alert-title">Informasi</span> Ada pembaruan penting untuk Anda.</span></div>
`,
    'components/table.html': `<table class="tk-table">
    <thead><tr><th>Nama</th><th>Email</th><th>Peran</th><th>Status</th><th class="tk-table-actions">Aksi</th></tr></thead>
    <tbody>
        <tr>
            <td>Jane Smith</td><td>jane@contoh.com</td><td>Kurator</td><td><span class="tk-badge tk-badge-success">Aktif</span></td>
            <td class="tk-table-actions">
                <button class="tk-action-btn" aria-label="Lihat">${icon('eye-outline', 16)}</button>
                <button class="tk-action-btn" aria-label="Edit">${icon('edit-outline', 16)}</button>
                <button class="tk-action-btn tk-action-btn-danger" aria-label="Hapus">${icon('trash-bin-outline', 16)}</button>
            </td>
        </tr>
        <tr>
            <td>John Doe</td><td>john@contoh.com</td><td>Konservator</td><td><span class="tk-badge tk-badge-danger">Nonaktif</span></td>
            <td class="tk-table-actions">
                <div class="tk-dropdown">
                    <button class="tk-action-btn" aria-label="Menu aksi">${icon('dots-horizontal-outline', 16)}</button>
                    <div class="tk-dropdown-menu tk-dropdown-menu-right">
                        <button class="tk-dropdown-item">${icon('eye-outline', 16)} Lihat detail</button>
                        <button class="tk-dropdown-item">${icon('edit-outline', 16)} Edit</button>
                        <hr class="tk-dropdown-divider">
                        <button class="tk-dropdown-item tk-dropdown-item-danger">${icon('trash-bin-outline', 16)} Hapus</button>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
<nav class="tk-pagination">
    <button class="tk-page">&lsaquo;</button>
    <button class="tk-page tk-page-active">1</button>
    <button class="tk-page">2</button>
    <button class="tk-page">3</button>
    <button class="tk-page">&rsaquo;</button>
</nav>
`,
    'components/modal.html': `<div class="tk-modal-backdrop">
    <div class="tk-modal">
        <div class="tk-card-header"><h3 class="tk-title">Judul Modal</h3></div>
        <div class="tk-card-body tk-body-sm tk-muted">Ini modal dialog. Konfirmasi tindakan atau tampilkan informasi di sini.</div>
        <div class="tk-card-footer"><button class="tk-btn tk-btn-primary">Konfirmasi</button><button class="tk-btn tk-btn-ghost">Batal</button></div>
    </div>
</div>
`,
    'components/loading.html': `<div class="tk-spinner" role="status" aria-label="Memuat"></div>
<div class="tk-progress"><div class="tk-progress-bar" style="width: 60%"></div></div>
<div class="tk-skeleton" style="width: 240px; height: 16px"></div>
`,
    'components/empty.html': `<div class="tk-empty">
    <span class="tk-empty-icon">${icon('image-outline', 30)}</span>
    <p class="tk-empty-title">Belum ada karya</p>
    <p class="tk-body-sm tk-muted">Pigura ini menunggu koleksi pertama Anda.</p>
    <button class="tk-btn tk-btn-primary tk-btn-sm">Tambah Karya</button>
</div>
`,
    'components/content-blocks.html': `<section class="tk-hero">
    <p class="tk-caps">Pameran Utama</p>
    <h1 class="tk-display">Ruang bagi karya <span class="tk-gild">abadi</span></h1>
    <p class="tk-hero-sub">Satu kalimat pendukung yang menjelaskan nilai koleksi ini bagi pengunjungnya.</p>
    <div class="tk-hero-actions">
        <button class="tk-btn tk-btn-primary tk-btn-lg">Jelajahi Koleksi</button>
        <button class="tk-btn tk-btn-outline tk-btn-lg">Rencanakan Kunjungan</button>
    </div>
</section>
<div class="tk-feature-grid">
    <div class="tk-feature">
        <span class="tk-feature-icon">${icon('star-outline', 22)}</span>
        <h4 class="tk-title">Koleksi Pilihan</h4>
        <p class="tk-body-sm tk-muted">Penjelasan singkat manfaat bagian ini.</p>
    </div>
</div>
<section class="tk-cta">
    <div><h3 class="tk-h3">Siap berkunjung?</h3><p class="tk-muted">Bergabung dengan ribuan pengunjung lain.</p></div>
    <button class="tk-btn tk-btn-primary">Pesan Tiket</button>
</section>
`
};
