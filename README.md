# SilverQueen — Good Chocolate, Good Mood

Konsep landing page React + Vite dengan gaya playful colorful, terinspirasi dari mockup visual yang dibuat untuk portfolio.

## Jalankan lokal
```bash
npm install
npm run dev
```

## Build untuk produksi
```bash
npm run build
npm run preview
```

## Deploy ke GitHub Pages
1. Push seluruh isi project ke repository.
2. Di GitHub, buka **Settings → Pages**.
3. Pilih **GitHub Actions** atau deploy folder `dist` melalui workflow Pages.
4. Jika memakai repository project pages, Vite perlu `base` sesuai nama repository. Untuk contoh repo `SILVERQUEEN`, tambahkan `base: '/SILVERQUEEN/'` pada `vite.config.js`.

## Fitur
- Responsive navbar dengan menu mobile.
- Selector varian yang mengubah panel produk.
- Galeri dengan tombol navigasi.
- Modal cerita.
- Newsletter demo dengan validasi email.
- Animasi CSS dan dukungan reduced motion.

Catatan: ini konsep portfolio tidak resmi, bukan situs resmi SilverQueen. Ilustrasi kemasan dibuat dengan CSS; foto galeri dimuat dari Unsplash.
