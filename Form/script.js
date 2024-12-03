// Variabel global untuk menyimpan nomor antrian
let nomorAntrian = 1;

// Fungsi untuk menampilkan atau menyembunyikan input tambahan
function toggleServiceLainnya(value) {
    const serviceLainnyaDiv = document.getElementById('service-lainnya');
    if (value === "lainnya") {
        serviceLainnyaDiv.style.display = "block";
    } else {
        serviceLainnyaDiv.style.display = "none";
        document.getElementById('deskripsi-service-lainnya').value = ""; // Kosongkan input
    }
}

// Fungsi untuk menangani pengiriman formulir
function submitForm() {
    // Ambil nilai dari form
    const nama = document.getElementById("nama").value;
    const jenisKendaraan = document.getElementById("jenis").value;
    const tanggal = document.getElementById("tanggal").value;
    const jam = document.getElementById("jam").value;
    const metodePembayaran = document.getElementById("metode-pembayaran").value;

    // Validasi data
    if (!nama || !jenisKendaraan || !tanggal || !jam || !metodePembayaran) {
        alert("Harap lengkapi semua field!");
        return;
    }

    // Tampilkan kupon
    document.getElementById("nomor-antrian").innerText = nomorAntrian;
    document.getElementById("kupon-nama").innerText = nama;
    document.getElementById("kupon-jenis-kendaraan").innerText = jenisKendaraan;
    document.getElementById("kupon-tanggal").innerText = tanggal;
    document.getElementById("kupon-jam").innerText = jam;
    document.getElementById("kupon-pembayaran").innerText = metodePembayaran;

    document.getElementById("kupon").style.display = "block";

    // Tingkatkan nomor antrian
    nomorAntrian++;

    // Reset form
    document.getElementById("serviceForm").reset();
    document.getElementById('service-lainnya').style.display = 'none';
}