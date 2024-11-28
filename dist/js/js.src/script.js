// Ambil elemen tombol
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Event listener untuk mendeteksi scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // Tampilkan tombol jika scroll lebih dari 300px
    scrollToTopBtn.style.display = 'flex';
  } else { // Sembunyikan tombol
    scrollToTopBtn.style.display = 'none';
}
});

// Event listener untuk scroll ke atas
scrollToTopBtn.addEventListener('click', () => {
window.scrollTo({
    top: 0,
    behavior: 'smooth' // Efek scroll halus
});
});