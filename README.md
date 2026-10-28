Praktikum Pemrograman Web - Manipulasi DOM & Event Handling

Proyek ini merupakan implementasi dari latihan dan Mini Project: Form Pendaftaran Workshop pada mata kuliah Pemrograman Web. Aplikasi berbasis web interaktif ini dirancang menggunakan HTML5, CSS3, dan JavaScript (DOM Manipulation & Event Handling).

🛠️ Fitur Utama

Aplikasi ini mencakup fungsi-fungsi interaktif utama sesuai dengan modul praktikum:

Penghitung Karakter Real-Time:
Menggunakan event input untuk menghitung dan menampilkan jumlah karakter pada kolom Nama Lengkap secara langsung.

Live Preview (Ringkasan Langsung):
Informasi Nama, Email, dan Pilihan Sesi Workshop yang diinputkan pengguna akan langsung ditampilkan pada kartu ringkasan secara real-time.

Pilihan Sesi Dinamis:
Menggunakan event change pada elemen <select> untuk menangkap pilihan sesi pengguna dan menampilkan teks konfirmasi secara langsung.

Validasi Form & Feedback:

Validasi nama wajib diisi dan minimal 3 karakter.

Validasi format email menggunakan Regular Expression (Regex).

Validasi penentuan pilihan sesi workshop.

Menggunakan event.preventDefault() pada event submit untuk mencegah pemuatan ulang (reload) halaman.

Menampilkan pesan status sukses (hijau) atau pesan kesalahan/error (merah) yang jelas pada antarmuka.

Tombol Reset / Hapus Data:
Menggunakan event click untuk mengosongkan seluruh isi form, mereset indikator karakter, serta mengosongkan kartu ringkasan input.

📂 Struktur Berkas

Proyek ini menggunakan pemisahan struktur berkas modular agar rapi dan mudah dikembangkan:

├── index.html   # Struktur antarmuka web dan form pendaftaran
├── style.css    # Penataan tampilan (responsive layout & styling)
└── script.js    # Logika JavaScript untuk manipulasi DOM dan penanganan event


🚀 Cara Menjalankan Proyek

Unduh atau Clone berkas proyek ini ke komputer Anda.

Pastikan semua berkas (index.html, style.css, dan script.js) berada dalam satu folder yang sama.

Buka berkas index.html dengan cara:

Klik ganda pada berkas index.html, atau

Klik kanan pada index.html -> pilih Open With -> pilih peramban (browser) favorit Anda (Chrome, Edge, Firefox, dll.), atau

Gunakan ekstensi Live Server di Visual Studio Code.

💡 Konsep DOM & Event yang Digunakan

Seleksi Elemen: document.getElementById()

Manipulasi Konten & Gaya: .textContent, .classList.add(), .className

Penanganan Event: addEventListener() (input, change, submit, click)

Mencegah Default Behavior: event.preventDefault()

Pembersihan String: .trim()
