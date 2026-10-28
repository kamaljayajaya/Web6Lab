// Mengambil elemen-elemen DOM
const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const pilihanSesi = document.getElementById("pilihanSesi");

const sisaKarakter = document.getElementById("sisaKarakter");
const infoSesi = document.getElementById("infoSesi");
const pesanFeedback = document.getElementById("pesanFeedback");
const btnReset = document.getElementById("btnReset");

// Elemen Preview / Ringkasan Langsung
const previewNama = document.getElementById("previewNama");
const previewEmail = document.getElementById("previewEmail");
const previewSesi = document.getElementById("previewSesi");

// 1. Event Input: Penghitung Karakter & Live Preview Nama
namaWorkshop.addEventListener("input", function () {
  const panjang = namaWorkshop.value.length;
  sisaKarakter.textContent = panjang;
  previewNama.textContent = namaWorkshop.value.trim() === "" ? "-" : namaWorkshop.value;
});

// Live Preview Email
emailWorkshop.addEventListener("input", function () {
  previewEmail.textContent = emailWorkshop.value.trim() === "" ? "-" : emailWorkshop.value;
});

// 2. Event Change: Menampilkan info pilihan sesi workshop secara dinamis & Live Preview Sesi
pilihanSesi.addEventListener("change", function () {
  const sesiTerpilih = pilihanSesi.value;
  if (sesiTerpilih !== "") {
    infoSesi.textContent = "Anda memilih: " + sesiTerpilih;
    previewSesi.textContent = sesiTerpilih;
  } else {
    infoSesi.textContent = "";
    previewSesi.textContent = "-";
  }
});

// 3. Event Submit: Validasi Form Pendaftaran Lengkap
formWorkshop.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = namaWorkshop.value.trim();
  const email = emailWorkshop.value.trim();
  const sesi = pilihanSesi.value;

  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Logika Pemeriksaan Kondisi Form
  if (nama === "") {
    tampilkanPesan("Nama lengkap wajib diisi!", "error");
  } else if (nama.length < 3) {
    tampilkanPesan("Nama lengkap minimal harus terdiri dari 3 karakter.", "error");
  } else if (!polaEmail.test(email)) {
    tampilkanPesan("Format email tidak valid (contoh: nama@email.com).", "error");
  } else if (sesi === "") {
    tampilkanPesan("Silakan pilih salah satu sesi workshop terlebih dahulu.", "error");
  } else {
    tampilkanPesan("Pendaftaran berhasil! Data workshop Anda telah tercatat.", "sukses");
    // Opsional: reset form setelah berhasil
    // formWorkshop.reset();
    // resetPreview();
  }
});

// 4. Event Click: Tombol Reset / Hapus Input Manual
btnReset.addEventListener("click", function () {
  formWorkshop.reset();
  sisaKarakter.textContent = "0";
  infoSesi.textContent = "";
  pesanFeedback.textContent = "";
  pesanFeedback.className = "";
  resetPreview();
});

// Fungsi bantu untuk menampilkan pesan feedback
function tampilkanPesan(pesan, tipe) {
  pesanFeedback.textContent = pesan;
  pesanFeedback.className = ""; // Bersihkan class sebelumnya
  pesanFeedback.classList.add(tipe);
}

// Fungsi bantu untuk mengosongkan teks preview
function resetPreview() {
  previewNama.textContent = "-";
  previewEmail.textContent = "-";
  previewSesi.textContent = "-";
}