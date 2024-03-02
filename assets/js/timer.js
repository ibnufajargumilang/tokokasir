function formatTanggal() {
    var sekarang = new Date();

    var bulanNames = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

    var tanggal = sekarang.getDate();
    var bulanIndex = sekarang.getMonth(); // Mengambil indeks bulan
    var tahun = sekarang.getFullYear();

    tanggal = (tanggal < 10) ? '0' + tanggal : tanggal;

    return tanggal + '-' + bulanNames[bulanIndex] + '-' + tahun;
}

function formatWaktu() {
    var sekarang = new Date();

    var jam = sekarang.getHours();
    var menit = sekarang.getMinutes();
    var detik = sekarang.getSeconds();

    // Menambahkan nol di depan jika jam, menit, atau detik kurang dari 10
    jam = (jam < 10) ? '0' + jam : jam;
    menit = (menit < 10) ? '0' + menit : menit;
    detik = (detik < 10) ? '0' + detik : detik;

    return jam + ':' + menit + ':' + detik;
}

function updateWaktu() {
    var tanggalSekarang = formatTanggal();
    var waktuSekarang = formatWaktu();

    var tanggalWaktuElement = document.getElementById("tanggalWaktu");
    tanggalWaktuElement.textContent = tanggalSekarang + ' ' + waktuSekarang;
}

updateWaktu();
setInterval(updateWaktu, 1000);