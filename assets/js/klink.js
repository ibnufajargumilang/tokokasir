document.addEventListener('click', function (event) {
  if (event.target && event.target.id == 'halamanMenu') {
    window.location.href = './menu.html';
  }
  if ((event.target && event.target.id == 'transaksiProgram') || event.target.alt == 'transaksi') {
    window.location.href = 'transaksi.html';
  }
  if ((event.target && event.target.id == 'keranjangProgram') || event.target.alt == 'keranjang') {
    window.location.href = 'keranjang.html';
  }
  if ((event.target && event.target.id == 'riwayatProgram') || event.target.alt == 'riwayat') {
    window.location.href = 'riwayat.html';
  }
  if ((event.target && event.target.id == 'inventoryProgram') || event.target.alt == 'inventory') {
    window.location.href = 'inventory.html';
  }
  if ((event.target && event.target.id == 'penggunaProgram') || event.target.alt == 'pengguna') {
    window.location.href = 'pengguna.html';
  }
  if ((event.target && event.target.id == 'laporanProgram') || event.target.alt == 'laporan') {
    window.location.href = 'laporan.html';
  }
  if ((event.target && event.target.id == 'pengaturanProgram') || event.target.alt == 'pengaturan') {
    window.location.href = 'pengaturan.html';
  }
  if ((event.target && event.target.id == 'informasiProgram') || event.target.alt == 'informasi') {
    window.location.href = 'informasi.html';
  }
  if ((event.target && event.target.id == 'panduanProgram') || event.target.alt == 'panduan') {
    window.location.href = 'panduan.html';
  }
  if ((event.target && event.target.id == 'keluarProgram') || event.target.alt == 'keluar') {
    window.location.href = './';
  }
});
