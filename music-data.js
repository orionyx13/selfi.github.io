/* =========================================
   music-data.js — Data lagu untuk Music Player
   Cara tambah lagu:
   1. Upload .mp3 ke GitHub repo / hosting
   2. Klik Raw → copy URL
   3. Tambah objek baru di array SONGS di bawah
   ========================================= */

const SONGS = [
  {
    title:  "Jangan Paksakan Rindu - Beda",
    artist: "Ifan Seventeen",
    dur:    "4:05",
    src:    "https://res.cloudinary.com/deqjuasvw/video/upload/v1777468936/Ifan_Seventeen_-_Jangan_Paksa_Rindu_Beda___Official_Lyric_Video_h4j8un.mp4"
  },
  {
    title:  "Ada Titik-Titik Di Ujung Doa",
    artist: "Sal Priadi",
    dur:    "5:07",
    src:    "https://res.cloudinary.com/deqjuasvw/video/upload/v1777469808/Ada_Titik-Titik_Di_Ujung_Doa_s0dje3.mp4"
  },
  {
    title:  "Bahagia Lagi",
    artist: "Piche Kota",
    dur:    "3:48",
    src:    "https://res.cloudinary.com/deqjuasvw/video/upload/v1777470218/Bahagia_Lagi_k8cath.mp4"
  },
  {
    title:  "Sedia Aku Sebelum Hujan",
    artist: "idgitaf",
    dur:    "3:50",
    src:    "https://res.cloudinary.com/deqjuasvw/video/upload/v1777471152/Sedia_Aku_Sebelum_Hujan_b5s6xa.mp3"
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
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/maisic/kangen.mp3"
  },
  {
    title:  "Hati-Hati di Jalan",
    artist: "Tulus",
    dur:    "3:58",
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/hati-hati-di-jalan.mp3"
  },
];

// Untuk preview di index.html (jumlah lagu yang ditampilkan)
const MUSIC_PREVIEW_LIMIT = 10;
