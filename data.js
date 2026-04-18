/* =========================================
   data.js — Pusat data foto & lagu
   
   Cara tambah foto:
   1. Upload ke Imgur → kanan klik → Copy image address
   2. Tambah objek baru di array PHOTOS di bawah
   
   Cara tambah lagu:
   1. Upload .mp3 ke GitHub repo → buka → klik Raw → copy URL
   2. Tambah objek baru di array SONGS di bawah
   ========================================= */

const PHOTOS = [
  {
    src:     "https://i.imgur.com/GANTI1.jpg",
    caption: "Golden Hour Portrait",
    cat:     "foto"
  },
  {
    src:     "https://i.imgur.com/GANTI2.jpg",
    caption: "Morning Ritual",
    cat:     "daily"
  },
  {
    src:     "https://i.imgur.com/GANTI3.jpg",
    caption: "Yogyakarta Sundown",
    cat:     "travel"
  },
  {
    src:     "https://i.imgur.com/GANTI4.jpg",
    caption: "Film Analog",
    cat:     "foto"
  },
  {
    src:     "https://i.imgur.com/GANTI5.jpg",
    caption: "Bali Pagi Hari",
    cat:     "travel"
  },
  {
    src:     "https://i.imgur.com/GANTI6.jpg",
    caption: "With Love",
    cat:     "daily"
  },
  {
    src:     "https://i.imgur.com/GANTI7.jpg",
    caption: "Café Corner",
    cat:     "daily"
  },
  {
    src:     "https://i.imgur.com/GANTI8.jpg",
    caption: "Prambanan Senja",
    cat:     "travel"
  },
  {
    src:     "https://i.imgur.com/GANTI9.jpg",
    caption: "Street Style",
    cat:     "foto"
  },
  {
    src:     "https://i.imgur.com/GANTI10.jpg",
    caption: "Bunga di Taman",
    cat:     "daily"
  },
  /* ── Foto berikutnya (hanya tampil di gallery.html) ── */
  {
    src:     "https://i.imgur.com/GANTI11.jpg",
    caption: "Pantai Sore",
    cat:     "travel"
  },
  {
    src:     "https://i.imgur.com/GANTI12.jpg",
    caption: "Matcha Latte",
    cat:     "daily"
  },
  {
    src:     "https://i.imgur.com/GANTI13.jpg",
    caption: "Analog #2",
    cat:     "foto"
  },
];

const SONGS = [
  {
    title:  "Satu Dalam Sejuta",
    artist: "Aurelie Hermansyah",
    dur:    "3:42",
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/satu-dalam-sejuta.mp3"
  },
  {
    title:  "Rasa Yang Tertinggal",
    artist: "Yura Yunita",
    dur:    "4:01",
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/rasa-yang-tertinggal.mp3"
  },
  {
    title:  "Diam-Diam Suka",
    artist: "RAN",
    dur:    "3:55",
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/diam-diam-suka.mp3"
  },
  {
    title:  "Yellow",
    artist: "Coldplay",
    dur:    "4:26",
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/yellow.mp3"
  },
  {
    title:  "Lover",
    artist: "Taylor Swift",
    dur:    "3:41",
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/lover.mp3"
  },
  {
    title:  "Aesthetic",
    artist: "Tollan Kim",
    dur:    "3:30",
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/aesthetic.mp3"
  },
  {
    title:  "Kangen",
    artist: "Dewa 19",
    dur:    "4:12",
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/kangen.mp3"
  },
  {
    title:  "Hati-Hati di Jalan",
    artist: "Tulus",
    dur:    "3:58",
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/hati-hati-di-jalan.mp3"
  },
  {
    title:  "Pesan Terakhir",
    artist: "Yura Yunita",
    dur:    "4:10",
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/pesan-terakhir.mp3"
  },
  {
    title:  "Bunga",
    artist: "Raisa",
    dur:    "3:45",
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/bunga.mp3"
  },
  /* ── Lagu berikutnya (hanya tampil di music.html) ── */
  {
    title:  "Superhero",
    artist: "Isyana Sarasvati",
    dur:    "3:33",
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/superhero.mp3"
  },
  {
    title:  "Grow As We Go",
    artist: "Ben Platt",
    dur:    "3:36",
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/grow-as-we-go.mp3"
  },
  {
    title:  "Someone Like You",
    artist: "Adele",
    dur:    "4:45",
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/someone-like-you.mp3"
  },
];

/* Jumlah preview di index.html */
const PREVIEW_LIMIT = 10;
