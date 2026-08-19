# Kontrak Kit Design

Kontrak ini mengunci bentuk setiap kit design yang ditawarkan IDE — bawaan, sulingan dari proyek
open source, dari katalog server nanti, maupun buatan pengguna di `.tokenai/design/templates/`.
Semua kit memakai nama CSS variable, nama kelas, dan susunan folder yang sama, karena keseragaman
itulah yang membuat dua hal bisa terjadi: elemen dari kit lain bisa ditimpakan ke kit dasar tanpa
tambal sulam, dan agen bisa merakit halaman dari kit mana pun tanpa mempelajari ulang strukturnya.

Prinsip yang tidak boleh dilanggar:

- **Kit adalah berkas nyata, bukan deskripsi.** Tombol tidak dijelaskan kepada model untuk
  dirancang ulang; HTML dan CSS-nya sudah ada dan tinggal disalin. Agen merakit, bukan mendesain.
- **Token adalah kontraknya, komponen adalah isinya.** Semua komponen hanya boleh memakai warna,
  ukuran, dan jarak lewat CSS variables `--tk-*`. Komponen yang menanam nilai heksa langsung
  melanggar kontrak, karena ia tidak bisa dicat ulang saat dipindah ke kit lain.
- **Showcase dirender dari CSS yang sama yang akan dipakai.** Pratinjau tidak pernah berbohong,
  dan tidak pernah menghabiskan satu token pun untuk dibuat.

## 1. Susunan folder kit

```
<nama-kit>/
  kit.json           manifest (lihat §2)
  LICENSE            teks lisensi sumber, wajib bila kit hasil sulingan
  styles.css         :root variables + seluruh kelas komponen, per seksi (lihat §5)
  showcase.html      lembar peraga 21 seksi, menaut styles.css (lihat §6)
  components/        satu fragmen HTML per elemen, hanya markup (lihat §4)
    typography.html
    button.html
    form.html
    select.html
    search.html
    filter.html
    dropdown.html
    card.html
    navigation.html
    tabs.html
    badge.html
    alert.html
    table.html
    modal.html
    loading.html
    empty.html
    content-blocks.html
  examples/          halaman contoh utuh, responsif web + ponsel (lihat §7)
    dashboard.html
    dashboard-mobile.html
    landing.html
    landing-mobile.html
    login.html
    login-mobile.html
    register.html
    register-mobile.html
  partials/          header + footer produksi ber-placeholder (lihat §8)
    header.html
    footer.html
  pages/             halaman arketipe produksi, satu per arketipe (lihat §8)
    home.html  about.html  contact.html  services.html  faq.html
    privacy.html  terms.html  cookies.html  sitemap.html
    catalog.html  product-detail.html  cart.html  menu.html
    pricing.html  features.html  blog-list.html  article.html
    gallery.html  booking.html  generic.html
```

Nama folder kebab-case dan deskriptif (`neutral-modern`, `soft-playful`) — bukan nama proyek
sumbernya. Atribusi sumber tinggal di `kit.json` dan `LICENSE`, bukan di nama.

## 2. Manifest `kit.json`

```json
{
    "name": "neutral-modern",
    "title": "Neutral Modern",
    "version": "1.0.0",
    "vibe": "bersih, netral, profesional, kontras lembut",
    "style": "Modern",
    "tags": ["Business", "SaaS", "Landing Page", "Dashboard"],
    "dark": false,
    "themes": ["light", "dark"],
    "icons": {
        "set": "lucide",
        "script": "https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"
    },
    "charts": {
        "library": "chart.js",
        "script": "https://cdn.jsdelivr.net/npm/chart.js@4.5.1/dist/chart.umd.min.js"
    },
    "fonts": [
        { "family": "Inter", "role": "heading dan body", "import": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap", "fallback": "system-ui, sans-serif" }
    ],
    "archetypes": ["home", "about", "contact", "services", "faq", "privacy", "terms", "cookies", "sitemap", "catalog", "product-detail", "cart", "menu", "pricing", "features", "blog-list", "article", "gallery", "booking", "generic"],
    "source": {
        "title": "shadcn/ui",
        "url": "https://github.com/shadcn-ui/ui",
        "license": "MIT"
    }
}
```

- `name` sama persis dengan nama folder; ini id yang dipakai kartu pilihan dan `DESIGN.md`.
- `version` semver, naik setiap isi kit berubah — dasar pembaruan katalog tokenai.id (lihat
  `docs/distribusi-kit-design.md`).
- `style` adalah kategori gaya visual, **tepat satu** dari kosakata bersama di
  `design-kit.ts` (`TOKENAI_KIT_STYLES`): Minimalist, Modern, Corporate, Editorial, Luxury,
  Brutalist, Retro, Futuristic, Dark Mode, Colorful, Playful, atau Experimental.
- `tags` adalah tag peruntukan, **satu atau lebih** dari kosakata bersama (`TOKENAI_KIT_TAGS`):
  Business, E-commerce, Portfolio, Landing Page, Blog, SaaS, Education, Health, Restaurant,
  Real Estate, Travel, Event, Nonprofit, Dashboard, Personal. Nilai `style` dan `tags` ditulis
  harfiah (case-sensitive) karena menjadi filter di IDE dan di katalog tokenai.id.
- `vibe` adalah bahan pencocokan dengan permintaan pengguna — tulis kata sifat yang jujur.
- `dark: true` berarti kit ini gelap secara bawaan. Kit dua-mode tetap `false`, mencantumkan
  keduanya di `themes`, dan menyediakan blok `[data-tk-theme="dark"]` (lihat §3 bagian akhir).
- `icons` menetapkan sistem ikon kit: semua kit memakai Iconify, yang berbeda hanya `set`
  bawaannya (prefix Iconify, mis. `lucide`, `tabler`, `ph`) — pilih yang senada dengan karakter
  kit (lihat §4 bagian ikon).
- `charts` menetapkan sistem chart kit: **semua kit memakai Chart.js dengan versi yang dipatok
  sama** — bukan pilihan per kit — supaya konfigurasi chart bisa dibawa antar kit apa adanya
  (lihat §4 bagian chart).
- `source` wajib ada pada kit sulingan dan boleh dihilangkan pada kit orisinal. Bila ada,
  `LICENSE` di folder yang sama wajib berisi teks lisensi aslinya. MIT dan Apache-2.0 boleh
  disuling; lisensi yang melarang redistribusi tidak boleh masuk katalog. Atribusi ini urusan
  berkas, bukan antarmuka: kartu katalog dan showcase tidak menampilkan nama proyek sumbernya.

## 3. Kontrak CSS variables

Semua di `:root`, semua berawalan `--tk-`. Kit wajib mendefinisikan **semuanya** — kit yang tidak
memakai bayangan tetap mendefinisikan `--tk-shadow-*: none`, karena komponen kit lain yang
ditimpakan akan membacanya.

### Warna

```css
--tk-color-primary            /* aksi utama */
--tk-color-primary-hover
--tk-color-primary-contrast   /* teks di atas primary */
--tk-color-secondary
--tk-color-secondary-hover
--tk-color-secondary-contrast
--tk-color-accent             /* sorotan hemat: badge, penanda harga */
--tk-color-background         /* latar halaman */
--tk-color-surface            /* kartu, panel */
--tk-color-surface-2          /* permukaan bertumpuk: hover baris, latar input */
--tk-color-text
--tk-color-text-muted
--tk-color-border
--tk-color-success   --tk-color-success-soft   /* soft = latar alert/badge */
--tk-color-warning   --tk-color-warning-soft
--tk-color-danger    --tk-color-danger-soft
--tk-color-info      --tk-color-info-soft
```

### Tipografi

```css
--tk-font-heading   --tk-font-body   --tk-font-mono
--tk-weight-heading --tk-weight-body
--tk-leading-heading  /* mis. 1.2 */
--tk-leading-body     /* mis. 1.6 */

--tk-text-display   /* mis. 64px */
--tk-text-h1        /* 48px */
--tk-text-h2        /* 32px */
--tk-text-h3        /* 24px */
--tk-text-h4        /* 22px */
--tk-text-title     /* 18px */
--tk-text-body-lg   /* 18px */
--tk-text-body      /* 16px */
--tk-text-body-sm   /* 14px */
--tk-text-caption   /* 12px */
```

### Jarak, bentuk, kedalaman, gerak

```css
--tk-space-xs  /* 4px */   --tk-space-sm  /* 8px */    --tk-space-md /* 16px */
--tk-space-lg  /* 24px */  --tk-space-xl  /* 32px */   --tk-space-2xl /* 48px */
--tk-space-3xl /* 64px */  --tk-space-section /* jarak antar seksi halaman */

--tk-radius-sm   --tk-radius   --tk-radius-lg   --tk-radius-full

--tk-border-width
--tk-shadow-sm   --tk-shadow   --tk-shadow-lg

--tk-transition   /* mis. 150ms ease */
--tk-container    /* lebar konten maksimum, mis. 1200px */
```

Angka contoh di komentar adalah nilai khas, bukan keharusan — kit editorial boleh memakai skala
lain sama sekali. Yang dikunci kontrak hanyalah **nama**.

### Mode gelap opsional

Kit dua-mode menimpa variabel warna di satu blok:

```css
[data-tk-theme="dark"] {
    --tk-color-background: #0B1120;
    /* ... hanya warna yang berubah ... */
}
```

### Palet penimpa

Warna primer dan aksen kit boleh dicat ulang tanpa menyentuh satu pun blok komponen: IDE (atau
alat `apply_design_kit` lewat parameter `palette`) menambahkan satu blok
`/* == tk: palette == */` di **akhir** `styles.css` yang menimpa `--tk-color-primary`,
`--tk-color-primary-hover`, `--tk-color-primary-contrast`, dan `--tk-color-accent` — untuk
terang dan gelap sekaligus. Karena komponen dan chart hanya membaca token, satu blok ini
mengecat ulang seluruh kit.

Sumber paletnya dua: preset bawaan IDE (biru, hijau, ungu, mawar, jingga, teal) atau dua warna
isian pengguna — hover, warna teks kontras, dan varian gelap diturunkan otomatis dari keduanya.
Konsekuensinya untuk penulis kit: primer dan aksen tidak boleh dipakai sebagai nilai heksa
mentah di mana pun; begitu ada satu nilai mentah, palet penimpa berhenti bekerja di titik itu.

## 4. Kontrak kelas komponen

Semua kelas berawalan `tk-`. Fragmen di `components/` hanya berisi markup dengan kelas-kelas ini
dan teks placeholder netral; seluruh gayanya tinggal di `styles.css`. Daftar di bawah adalah
**cakupan minimum** — kit boleh menambah varian, tidak boleh mengurangi.

| Elemen | Kelas dan state wajib |
|---|---|
| Tombol | `.tk-btn` + varian `-primary -secondary -outline -ghost -danger -text`; ukuran `-sm -lg`; `:hover :active :disabled`; `.tk-btn-loading`; `.tk-btn-icon` |
| Form | `.tk-field` berisi `.tk-label`, kontrol, `.tk-help`; kontrol: `.tk-input .tk-textarea .tk-checkbox .tk-radio .tk-toggle`; state `:focus`, `.tk-field-error`, `.tk-field-success` |
| Select | `.tk-select` berisi `.tk-select-trigger` (+ `.tk-select-placeholder`) dan `.tk-select-menu` berisi `.tk-option(-selected)` + `.tk-option-check`; varian: `.tk-select-menu-search` (pencarian di dalam menu), opsi ber-`.tk-checkbox` (multi-pilih), `.tk-select-menu-footer` (aksi di dalam menu); terbuka via `.tk-select-open` atau `:focus-within` |
| Pencarian & filter | `.tk-search` berisi `.tk-search-icon`, `.tk-input`, opsional `.tk-search-kbd`; `.tk-filter-bar` (pencarian + select + tombol filter dengan `.tk-filter-count`) + `.tk-filter-active` berisi `.tk-chip` |
| Dropdown | `.tk-dropdown` + `.tk-dropdown-menu(-right)(-up)` berisi `.tk-dropdown-label .tk-dropdown-item(-danger) .tk-dropdown-divider`; terbuka via `.tk-dropdown-open` atau `:focus-within`; varian `-up` membuka ke atas (menu profil di kaki sidebar) |
| Kartu | `.tk-card` + `.tk-card-header .tk-card-body .tk-card-footer`; varian `.tk-card-stat` (angka besar + tren) |
| Navigasi | `.tk-navbar` (+ `.tk-navbar-dark`), `.tk-sidebar` dengan `.tk-sidebar-group` (label grup menu) dan `.tk-sidebar-item(-active)` yang teksnya dibungkus `.tk-sidebar-label`; state `.tk-sidebar-collapsed` menciutkan ke rel ikon (label dan grup tersembunyi); `.tk-breadcrumb` berisi tautan + `.tk-breadcrumb-sep` + `.tk-breadcrumb-current`; `.tk-mobile-nav` |
| Tab | `.tk-tabs` berisi `.tk-tab(-active)`; `.tk-segmented` berisi `.tk-segment(-active)` |
| Badge | `.tk-badge` + varian semantik `-success -warning -danger -info`; `.tk-chip` (+ `.tk-chip-remove`) |
| Umpan balik | `.tk-alert` + `-success -warning -danger -info`, ikon inline + `.tk-alert-title` |
| Tabel | `.tk-table` (header, baris hover, sel status memakai `.tk-badge`); kolom aksi `.tk-table-actions` berisi `.tk-action-btn(-danger)` atau `.tk-dropdown`; `.tk-pagination` dengan `.tk-page(-active)` |
| Overlay | `.tk-modal-backdrop`, `.tk-modal` + header/body/footer; `.tk-drawer` |
| Memuat | `.tk-spinner`, `.tk-progress` + `.tk-progress-bar`, `.tk-skeleton` |
| Kosong | `.tk-empty` berisi ikon, `.tk-empty-title`, teks redup, satu `.tk-btn` |
| Blok konten | `.tk-hero` (judul + subjudul + dua tombol), `.tk-feature-grid` berisi `.tk-feature`, `.tk-cta` |

Kontrol form wajib bergaya custom penuh: checkbox/radio/toggle menggambar tanda dan kenopnya
sendiri (`appearance: none`) dari token kit. Select **tidak memakai elemen `<select>` native**
karena popup daftar opsinya tidak bisa digayakan CSS — pakai listbox custom `.tk-select`.
Tampilan bawaan browser (termasuk `accent-color`) tidak diterima, karena tidak ikut token dan
tema. Buka/tutup menu dikelola JS/framework lewat kelas `-open`; `:focus-within` adalah fallback
tanpa JS.

Ikon: [Iconify](https://iconify.design/) lewat web component — `<iconify-icon icon="lucide:nama">`
— dengan satu set bawaan per kit yang dicatat di `kit.json` (`icons.set`), dipilih yang senada
dengan karakter kitnya. Halaman yang memakai ikon wajib memuat skrip `icons.script`; showcase
mencontohkannya. Set bawaan menjaga konsistensi, tetapi seluruh koleksi Iconify (ratusan ribu
ikon, dimuat sesuai kebutuhan) tetap terbuka bila subjeknya menuntut ikon di luar set. Jangan
menanam SVG panjang secara inline untuk ikon yang Iconify punya.

Chart: [Chart.js](https://www.chartjs.org/) (UMD, versi dipatok di `kit.json` `charts.script`)
adalah satu-satunya pustaka chart untuk semua kit — jangan memakai pustaka lain. Warna chart
**tidak boleh ditanam heksa**: baca token `--tk-*` lewat `getComputedStyle` saat menggambar,
seperti dicontohkan showcase dan halaman `examples/`, supaya chart ikut palet kit dan ikut
berganti saat tema berubah (gambar ulang chart saat `data-tk-theme` berganti).

## 5. Susunan `styles.css`

Satu berkas, dibuka blok `:root` berisi seluruh variabel §3, lalu satu blok per elemen dengan
penanda seksi yang seragam:

```css
/* == tk: button ================================================= */
```

Penanda ini bukan hiasan — inilah yang membuat "timpa per elemen" mekanis: mengambil tombol dari
kit lain berarti menyalin fragmen `components/button.html` beserta satu blok `== tk: button ==`
dari `styles.css`-nya. Karena blok itu hanya memakai variabel `--tk-*`, ia otomatis tercat ulang
oleh token kit dasar.

Aturan campur yang dijanjikan kartu pilihan: **satu kit dasar memegang seluruh token; elemen dari
kit lain boleh ditimpakan per blok; dua palet tidak pernah dicampur.**

## 6. Kontrak showcase

`showcase.html` adalah satu halaman statis yang menaut `styles.css` dan menampilkan **22 seksi
dengan urutan tetap** (penomoran dihitung otomatis dari urutan) — sama untuk semua kit, supaya
dua showcase bisa dibandingkan berdampingan seksi demi seksi:

1. Typography — seluruh skala dengan nama dan ukurannya
2. Color Palette — semua variabel warna dengan nilai heksanya tertulis
3. Spacing System — visualisasi skala jarak
4. Border Radius — semua radius pada kotak contoh
5. Shadow System — semua bayangan pada kartu contoh
6. Iconography — gaya ikon + contoh state
7. Design Language — kata kunci `vibe` + ringkasan karakter
8. Buttons — semua varian × semua state, semua ukuran
9. Input & Form — semua kontrol termasuk state fokus/error/success
10. Login & Register — kartu auth (login + register) dirakit dari komponen form kit;
    menaut halaman penuhnya di `examples/`
11. Card Components — kartu dasar, kartu gambar, kartu produk, kartu statistik, kartu profil
12. Navigation — navbar terang, navbar gelap, sidebar, navigasi mobile
13. Tabs & Segmented
14. Badges & Chips
15. Feedback & Alerts — keempat varian semantik
16. Layout Options — grid 12/2/3/4 kolom pada `--tk-container`
17. Content Blocks — hero, baris fitur, seksi CTA
18. Data Display — tabel + pagination
19. Charts — line, bar, doughnut dari Chart.js, warnanya dibaca dari token kit
20. Modal & Overlay — digambar terbuka secara statis
21. Loading States — spinner, progress, skeleton
22. Empty States

State interaktif (hover, fokus, modal terbuka) digambar statis dengan kelas state-nya supaya
semuanya terlihat sekaligus, seperti lembar peraga design system pada umumnya. JavaScript di
showcase dibatasi pada saklar tema dan inisialisasi chart; komponen tidak boleh bergantung
padanya.

Semua halaman pratinjau kit — showcase dan halaman `examples/` (lihat §7) — memasang **bilah
navigasi sticky** yang sama di puncak halaman (perancah `ex-nav`, tinggi tetap 48px): nama kit,
tiga tab tampilan (Komponen / Admin Dashboard / Landing Page — login & register bagian paket
Komponen, bukan tab tersendiri), lalu di kanan saklar perangkat **Web | Ponsel** (hanya pada
tampilan yang punya versi ponsel) dan saklar tema.
Tab aktif ditandai; berpindah tampilan tidak menimpa halaman — bilahnya selalu ada. Elemen sticky
milik halaman (topbar dashboard, navbar landing) mengambil offset `top: 48px`.

Halaman yang dirender di dalam bingkai ponsel ditandai **eksplisit** lewat query `?tk-embed` pada
src iframe-nya; skrip kecil lalu memasang kelas `ex-embedded` yang menyembunyikan bilah navigasi
dan mengembalikan offset sticky ke nol. Jangan mendeteksi lewat `window.self !== window.top`:
pratinjau di dalam IDE juga dirender lewat iframe, dan bilahnya justru harus tetap ada di sana.

## 7. Kontrak halaman contoh (`examples/`)

Setiap kit menyertakan halaman utuh yang dirakit murni dari komponen §4 — bukti bagaimana kit
terlihat pada halaman sungguhan, sekaligus kerangka awal yang boleh disalin agen saat pengguna
meminta halaman sejenis:

1. **`dashboard.html`** — admin dashboard: sidebar **bergrup menu** (`.tk-sidebar-group`) yang
   **bisa diciutkan** ke rel ikon lewat tombol di topbar (toggle `.tk-sidebar-collapsed`; di
   layar sempit tombol yang sama membuka sidebar sebagai laci); kaki sidebar berisi **menu
   profil dropdown** (avatar + nama membuka `.tk-dropdown-menu-up`: Profil, Pengaturan, Keluar)
   — dan karena profil tinggal di sidebar, **topbar tidak memuat avatar lagi**; topbar
   **ber-breadcrumb** (`.tk-breadcrumb`) + search; kartu statistik, **kartu chart** (Chart.js:
   tren + komposisi), filter bar, tabel berkolom aksi, panel progres/aktivitas.
2. **`landing.html`** — landing page: navbar, hero, grid fitur, **seksi bukti angka ber-chart**,
   harga tiga paket, CTA, footer. Halaman ini juga **kerangka SEO** yang wajib disalin utuh:
   - **Struktur semantik**: skip link ke `<main id="konten-utama">`, `<header>` berisi `<nav>`
     ber-`aria-label`, seksi-seksi di dalam `<main>` dengan `id` + `aria-labelledby`, satu
     `<h1>` di hero lalu `<h2>` per seksi, dan `<footer>` di luar `<main>`. Tautan navbar
     berupa anchor nyata ke `id` seksi (bukan `href="#"`).
   - **Meta head**: `<title>` berpola "Brand — proposisi nilai", `meta description`,
     `link rel="canonical"`, `meta robots`, Open Graph lengkap (`og:type/site_name/title/`
     `description/url/image/locale`), dan Twitter card (`summary_large_image`).
   - **Schema.org**: satu blok JSON-LD `@graph` berisi `Organization`, `WebSite`, `WebPage`,
     plus tipe konten yang cocok (contoh Neutral Modern memakai `SoftwareApplication` dengan
     `AggregateRating` dan `offers` yang angkanya **sama dengan seksi harga di halaman**).
   - Domain (`https://contoh.id`), brand (`LOGO`), dan angka di dalamnya adalah placeholder —
     saat halaman disalin ke proyek, agen **wajib** menggantinya dengan data proyek nyata dan
     menjaga JSON-LD tetap konsisten dengan isi halaman. Bingkai `landing-mobile.html` hanyalah
     perancah pratinjau dan tidak perlu kerangka SEO ini.
3. **`login.html` dan `register.html`** — halaman auth: kartu terpusat di atas
   `--tk-color-surface-2` berisi brand, tombol OAuth, pemisah "atau", field email/kata sandi
   (register menambah nama + syarat), dan tautan silang login ↔ register. Keduanya bagian
   **paket Komponen**: kartunya juga tampil sebagai seksi di showcase, dan saat dibuka penuh
   bilah navigasinya menyorot tab Komponen.

Semuanya **responsif** dengan media query (sidebar/menu menyusut, grid runtuh ke satu kolom), dan
masing-masing punya pendamping **`*-mobile.html`**: bingkai ponsel ±390px yang merender halaman
yang sama lewat iframe ber-query `?tk-embed`, sehingga versi mobile yang terlihat adalah media
query yang benar-benar berjalan — bukan tangkapan layar. Kelas perancah halaman contoh (`dm-*`,
`lp-*`, `au-*`, `ex-*`) tinggal di `<style>` halamannya sendiri dan bukan bagian kontrak kit.

## 8. Kontrak halaman arketipe (`pages/` + `partials/`)

Halaman arketipe adalah **halaman produksi** — inilah yang membedakannya dari `examples/` yang
merupakan pratinjau: tanpa bilah `ex-nav`, tanpa `?tk-embed`. Scaffolder wizard menyalinnya ke
proyek pengguna, menyatukan partial, membangun navigasi dari daftar halaman terpilih, dan
mengganti placeholder — semuanya deterministik, nol token. Model hanya kebagian copywriting.

Sumber markup-nya SATU untuk semua kit (`archetypes.ts` — kelas `tk-*` adalah kontraknya, jadi
markup yang sama otomatis tampil dengan wajah kit mana pun); setiap kit membangkitkannya lewat
`buildArchetypeFiles(manifest)` sehingga import font dan set ikonnya mengikuti manifest.
Jenis usaha TIDAK dienumerasi per kit: coffee shop = `home + menu + catalog + legal`,
klinik = `home + services + booking + legal` — pemetaan label halaman → arketipe hidup di
scaffolder (`site-scaffolder.ts`), bukan di kit.

Kosakata arketipe (`TOKENAI_KIT_ARCHETYPES`): `home about contact services faq privacy terms
cookies sitemap catalog product-detail cart menu pricing features blog-list article gallery
booking generic`. Manifest mencantumkan yang disediakan di field `archetypes`; validator ekspor
menolak kit yang menjanjikan arketipe tanpa berkasnya.

Placeholder (diganti scaffolder, bukan model): `{{TK_BRAND}}`, `{{TK_BRAND_SLUG}}`,
`{{TK_TAGLINE}}`, `{{TK_DESCRIPTION}}`, `{{TK_URL}}`, `{{TK_YEAR}}`, `{{TK_LOGO}}`,
`{{TK_PAGE_TITLE}}`, `{{TK_PAGE_SLUG}}`, `{{TK_NAV_ITEMS}}`, `{{TK_FOOTER_ITEMS}}`,
`{{TK_SITEMAP_ITEMS}}`. Marker baris: `<!-- tk:include partials/header.html -->` menyisipkan
partial; `<!-- tk:nav-item -->…<!-- /tk:nav-item -->` (juga `footer-item`, `sitemap-item`)
adalah template satu butir yang digandakan scaffolder per halaman terpilih.

Aturan yang menjaga kualitas hasil rakitan:

- **Logo tidak pernah diukur model.** `{{TK_LOGO}}` diganti `<img>` (bila ada logo) di dalam
  `.ap-logo` yang CSS-nya mengunci tinggi; hasil generate AI yang rasionya aneh tetap tampil
  proporsional.
- **Navigasi satu sumber.** Header/footer hanya ada di partial; semua halaman memakai salinan
  yang sama, jadi tidak ada lagi nav yang berbeda antar halaman.
- **Responsif selesai di level kit.** Perancah `ap-*` di tiap halaman membawa media query-nya
  sendiri dan hanya membaca token `--tk-*`; kit yang lolos ekspor berarti halamannya sudah
  responsif — model tidak pernah menulis ulang media query.
- **SEO bawaan.** Tiap halaman membawa meta lengkap + JSON-LD (beranda `@graph` penuh, FAQ
  `FAQPage`); scaffolder menambah `robots.txt` + `sitemap.xml`. Aset gambar memakai
  placehold.co dan ditandai `data-tk-asset` supaya model tahu persis mana yang diganti bila
  pengguna memilih generate gambar.

## 9. Cara kit dipakai (ringkasan untuk yang menulis alat dan prompt)

1. Katalog menawarkan kit lewat kartu pilihan. Sebelum membuka pratinjau, kartu menawarkan
   palet: bawaan kit, preset, atau custom dua-warna — pilihan itu ikut terpasang di semua
   pratinjau (komponen, dashboard, landing) dan tile hidup di kartunya sendiri.
2. Kit terpilih **disalin utuh** ke `.tokenai/design/kit/` di workspace — proyek memilikinya,
   dan `.tokenai/design/DESIGN.md` mencatat kit aktif, paletnya (bila ada), plus elemen yang
   ditimpa dari kit lain.
3. Agen merakit halaman dari fragmen `components/` dan kelas di `styles.css` — dan untuk admin
   dashboard atau landing page, mulai dari halaman `examples/` yang sudah jadi. Untuk proyek
   ber-framework, agen menerjemahkan fragmen ke komponen framework saat merakit, dengan
   `styles.css` tetap sebagai sumber token; untuk proyek React + Tailwind yang lebih cocok
   memakai ekosistem aslinya (shadcn/ui, DaisyUI), katalog boleh merujuk ke sana alih-alih
   menyalin kit — keputusannya berdasarkan stack yang terbaca di proyek.
4. `generate_image` tidak pernah dipakai untuk mempratinjau maupun merakit kit. Ia tinggal untuk
   citra yang memang bukan UI (foto produk, ilustrasi).

## 10. Yang belum dikunci di sini

- Bentuk katalog server (`download.tokenai.id/design-kits/`) — menyusul setelah kit bawaan
  terbukti dipakai; bentuk folder §1 sudah dirancang agar bisa diunduh apa adanya.
- Daftar kit sulingan pertama dan sumbernya — kandidat: estetika shadcn/ui (netral modern),
  tema-tema DaisyUI (MIT, banyak selera siap suling), Bootstrap (korporat klasik), Pico.css
  (minimal semantik). Semua MIT.
- Varian komponen framework-native per kit (React/Vue) — sengaja tidak dikurasi; penerjemahan
  saat merakit adalah kerja murah untuk model, kurasi multi-format mahal untuk manusia.
