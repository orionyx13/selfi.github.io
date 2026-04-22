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
    src:     "https://i.imgur.com/1UrF77M.jpeg",
    caption: "Me",
    cat:     "foto"
  },
  {
    src:     "https://i.imgur.com/jUNk6Hz.jpeg",
    caption: "Me",
    cat:     "daily"
  },
  {
    src:     "https://i.imgur.com/AhW9fJ9.jpeg",
    caption: "Me & Friend",
    cat:     "travel"
  },
  {
    src:     "https://i.imgur.com/45U6DUw.jpeg",
    caption: "Me",
    cat:     "foto"
  },
  {
    src:     "https://i.imgur.com/tivxTrH.jpeg",
    caption: "Me & Friend",
    cat:     "travel"
  },
  {
    src:     "https://i.imgur.com/HrNBrev.jpeg",
    caption: "Me",
    cat:     "daily"
  },
  {
    src:     "https://i.imgur.com/42Ugv17.jpeg",
    caption: "Me",
    cat:     "daily"
  },
  {
    src:     "https://i.imgur.com/TAnxnxA.jpeg",
    caption: "Me",
    cat:     "travel"
  },
  {
    src:     "https://i.imgur.com/J6M3NFf.jpeg",
    caption: "Me",
    cat:     "foto"
  },
  {
    src:     "https://i.imgur.com/RowshPg.jpeg",
    caption: "Me",
    cat:     "daily"
  },
  /* ── Foto berikutnya (hanya tampil di gallery.html) ── */
  {
    src:     "https://i.imgur.com/0pjMz0K.jpeg",
    caption: "Me",
    cat:     "travel"
  },
  {
    src:     "https://i.imgur.com/vHGrkYc.jpeg",
    caption: "Me",
    cat:     "daily"
  },
  {
    src:     "https://i.imgur.com/VIA2Q9W.jpeg",
    caption: "Me",
    cat:     "foto"
  },
   
  {
    src:     "https://i.imgur.com/H7rSOXQ.jpeg",
    caption: "Me",
    cat:     "travel"
  },
  {
    src:     "https://i.imgur.com/I0hKQQQ.jpeg",
    caption: "Me",
    cat:     "daily"
  },
  {
    src:     "https://i.imgur.com/iVJLxAV.jpeg",
    caption: "Me",
    cat:     "foto"
  },
   
  {
    src:     "https://i.imgur.com/5AsZX7j.jpeg",
    caption: "Me",
    cat:     "travel"
  },
  {
    src:     "https://i.imgur.com/3sQo0fE.jpeg",
    caption: "Me",
    cat:     "daily"
  },
  {
    src:     "https://i.imgur.com/DPjk6WO.jpeg",
    caption: "Me",
    cat:     "foto"
  },
   
  {
    src:     "https://i.imgur.com/3ft28MZ.jpeg",
    caption: "Me & Moms",
    cat:     "travel"
  },
  {
    src:     "https://i.imgur.com/tlq4glO.jpeg",
    caption: "Me",
    cat:     "daily"
  },
  {
    src:     "https://i.imgur.com/F8GnnVC.jpeg",
    caption: "Me & Cats",
    cat:     "foto"
  },
   
  {
    src:     "https://i.imgur.com/EQve6lp.jpeg",
    caption: "Me",
    cat:     "travel"
  },
  {
    src:     "https://i.imgur.com/kxnRNEV.jpeg",
    caption: "Me",
    cat:     "daily"
  },
  {
    src:     "https://i.imgur.com/qOCcDmo.jpeg",
    caption: "Me",
    cat:     "foto"
  },
   
  {
    src:     "https://i.imgur.com/fxl89rW.jpeg",
    caption: "Me & Friend",
    cat:     "travel"
  },
  {
    src:     "https://i.imgur.com/eubBTHi.jpeg",
    caption: "Me",
    cat:     "daily"
  },
  {
    src:     "https://i.imgur.com/CKap8KN.jpeg",
    caption: "Me",
    cat:     "foto"
  },
   
  {
    src:     "https://i.imgur.com/o0YSxGr.jpeg",
    caption: "Me",
    cat:     "travel"
  },
  {
    src:     "https://i.imgur.com/pzMs926.jpeg",
    caption: "Me",
    cat:     "daily"
  },
  {
    src:     "https://i.imgur.com/8s5OOJE.jpeg",
    caption: "Me",
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
