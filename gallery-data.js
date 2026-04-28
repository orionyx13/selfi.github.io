/* =========================================
   gallery-data.js — Data foto & video untuk Gallery
   
   Cara tambah:
   - type: "photo" untuk gambar, "video" untuk video
   - video pakai embed YouTube atau file .mp4
   ========================================= */

const PHOTOS = [
  // FOTO
  {
    src:     "https://i.imgur.com/1UrF77M.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/jUNk6Hz.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/AhW9fJ9.jpeg",
    caption: "Me & Friend",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/45U6DUw.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/tivxTrH.jpeg",
    caption: "Me & Friend",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/HrNBrev.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/42Ugv17.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/TAnxnxA.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/J6M3NFf.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/RowshPg.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/0pjMz0K.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/vHGrkYc.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/VIA2Q9W.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/H7rSOXQ.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/I0hKQQQ.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/iVJLxAV.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/5AsZX7j.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/3sQo0fE.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/DPjk6WO.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/3ft28MZ.jpeg",
    caption: "Me & Moms",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/tlq4glO.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/F8GnnVC.jpeg",
    caption: "Me & Cats",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/EQve6lp.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/kxnRNEV.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/qOCcDmo.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/fxl89rW.jpeg",
    caption: "Me & Friend",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/eubBTHi.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/CKap8KN.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/o0YSxGr.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/pzMs926.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/8s5OOJE.jpeg",
    caption: "Me",
    type:    "photo"
  },

  // VIDEO — Contoh (ganti dengan link video kamu)
  {
    src:     "https://www.youtube.com/embed/dQw4w9WgXcQ",
    caption: "Video Liburan",
    type:    "video"
  },
  {
    src:     "https://www.youtube.com/embed/VIDEO_ID_2",
    caption: "Behind The Scene",
    type:    "video"
  }
];

// Preview di index.html (jumlah yang ditampilkan)
const GALLERY_PREVIEW_LIMIT = 6;
