// Inisialisasi canvas dan gambar
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var image = document.getElementById("image");
var x = 0;
var y = 0;
var dx = 5;
var dy = 5;

// Fungsi untuk menggambar gambar
function draw() {
	// Bersihkan canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Gambar gambar
	ctx.drawImage(image, x, y);

	// Perbarui posisi
	x += dx;
	y += dy;

	// Cek apakah gambar mencapai batas kanan atau kiri
	if (x + image.width > canvas.width || x < 0) {
		dx = -dx;
	}

	// Cek apakah gambar mencapai batas atas atau bawah
	if (y + image.height > canvas.height || y < 0) {
		dy = -dy;
	}
}

// Fungsi untuk memperbarui permainan
function update() {
	// Gambar ulang
	draw();
}

// Fungsi untuk mengatur interval permainan
var intervalId = setInterval(update, 30);

//
