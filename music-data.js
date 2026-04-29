/* =========================================
   music-data.js — Data lagu untuk Music Player
   Cara tambah lagu:
   1. Upload .mp3 ke GitHub repo / hosting
   2. Klik Raw → copy URL
   3. Tambah objek baru di array SONGS di bawah
   ========================================= */

const SONGS = [
  {
    title:  "Jangan Paksakan Rindu",
    artist: "Ifan Seventeen",
    dur:    "4:05",
    src:    "https://res.cloudinary.com/deqjuasvw/video/upload/v1777468936/Ifan_Seventeen_-_Jangan_Paksa_Rindu_Beda___Official_Lyric_Video_h4j8un.mp4"
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
  }
];

// Untuk preview di index.html (jumlah lagu yang ditampilkan)
const MUSIC_PREVIEW_LIMIT = 10;
