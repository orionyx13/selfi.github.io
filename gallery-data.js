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
  {
    src:     "https://i.imgur.com/IcMpeF2.png",
    caption: "Me",
    type:    "photo"
  },   
  {
    src:     "https://i.imgur.com/8RDY0g1.jpeg",
    caption: "Me",
    type:    "photo"
  },   
  {
    src:     "https://i.imgur.com/LnxsM7N.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/h2oYR8a.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/bvODJVp.jpeg",
    caption: "Me",
    type:    "photo"
  },    
  {
    src:     "https://i.imgur.com/Nz3bDxn.jpeg",
    caption: "Me",
    type:    "photo"
  },       
  {
    src:     "https://i.imgur.com/4C7jbwS.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/ACCMVSC.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/3gImz5m.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/a8PoFB9.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/jFsz612.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/bo0dkzI.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/MszQaM7.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/3o43nAw.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/nslm6sY.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/qTLitnM.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/F3NbjNA.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/CTDSYzg.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/8lA1l5s.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  // VIDEO — Contoh (ganti dengan link video kamu)
  {
    src:     "https://raw.githubusercontent.com/orionyx13/selfi.github.io/main/video/AllVideo_01769641128658.mp4",
    caption: "My Story",
    type:    "video"
  },
  {
    src:     "https://i.imgur.com/hjPyPlG.mp4",
    caption: "My Story",
    type:    "video"
  }
];

// Preview di index.html (jumlah yang ditampilkan)
const GALLERY_PREVIEW_LIMIT = 6;
