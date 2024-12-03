// Menginisialisasi nomor antrean dari Local Storage
let queueCounter = parseInt(localStorage.getItem('queueNumber')) || 1;

// Fungsi untuk menampilkan opsi layanan berdasarkan jenis kendaraan
function showServiceOptions() {
    const vehicleType = document.getElementById('vehicleType').value;
    document.getElementById('motorServices').classList.add('d-none');
    document.getElementById('mobilServices').classList.add('d-none');

    if (vehicleType === 'motor') {
        document.getElementById('motorServices').classList.remove('d-none');
    } else if (vehicleType === 'mobil') {
        document.getElementById('mobilServices').classList.remove('d-none');
    }
}

function toggleServiceLainnya(value) {
    const serviceLainnyaDiv = document.getElementById('service-lainnya');
    if (value === "lainnya") {
        serviceLainnyaDiv.style.display = "block";
    } else {
        serviceLainnyaDiv.style.display = "none";
        document.getElementById('deskripsi-service-lainnya').value = ""; // Clear input if not needed
    }
}

// Event listener untuk pengiriman formulir
document.getElementById('serviceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman direfresh setelah submit

    // Ambil data dari form
    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const vehicleType = document.getElementById('vehicleType').value;
    const selectedService = vehicleType === 'motor' 
        ? document.getElementById('motorService').value 
        : document.getElementById('mobilService').value;
    const serviceDate = document.getElementById('serviceDate').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Memastikan semua pilihan sudah diisi
    if (!customerName || !customerPhone || !vehicleType || !selectedService || !serviceDate || !paymentMethod) {
        alert('Harap lengkapi semua pilihan!');
        return;
    }

    // Menampilkan nomor antrian
    const queueNumber = `ANTRI-${queueCounter}`;
    document.getElementById('queueNumber').textContent = queueNumber;
    document.getElementById('queueDisplay').classList.remove('d-none');

    // Simpan nomor antrian baru ke Local Storage dan tingkatkan antrean
    localStorage.setItem('queueNumber', queueCounter + 1);
    queueCounter++;

    // Menampilkan notifikasi sukses
    alert(`Formulir berhasil dikirim!\nNama: ${customerName}\nNomor HP: ${customerPhone}\nJenis Kendaraan: ${vehicleType}\nLayanan: ${selectedService}\nTanggal Service: ${serviceDate}\nMetode Pembayaran: ${paymentMethod}\nNomor antrian Anda adalah ${queueNumber}`);
});
