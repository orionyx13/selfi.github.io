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
        
  {
    src:     "https://i.imgur.com/ArPVJVE.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/kGb00Oo.jpeg",
    caption: "Me & Friend",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/6cfYsYJ.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/4mp2HbV.jpeg",
    caption: "Me",
    type:    "photo"
  },    
  {
    src:     "https://i.imgur.com/XD6uBaQ.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/Kr8rl6O.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/GzfpNMd.jpeg",
    caption: "Me",
    type:    "photo"
  },    
  {
    src:     "https://i.imgur.com/3nAfoL0.jpeg",
    caption: "Me",
    type:    "photo"
  },  
  {
    src:     "https://i.imgur.com/GJIMdZ0.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/9DslG47.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/TvdqA6g.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/5GllTHz.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/KaaYDdh.jpeg",
    caption: "Me",
    type:    "photo"
  },   
  {
    src:     "https://i.imgur.com/Zapoy9e.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/MHGjkr6.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/SraPOH6.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/hmxJhJX.png",
    caption: "Me",
    type:    "photo"
  },    
  {
    src:     "https://i.imgur.com/ZF8RI9o.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/xHkHF3s.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/fkWfzMy.jpeg",
    caption: "Me",
    type:    "photo"
  },       
  {
    src:     "https://i.imgur.com/R0Yh7iQ.png",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/RFMYuGu.png",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/Oao5OdW.png",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/WiM88cL.png",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/6r1mN3u.jpeg",
    caption: "Me",
    type:    "photo"
  },
  // VIDEO — Contoh (ganti dengan link video kamu)
  {
    src:     "https://res.cloudinary.com/deqjuasvw/video/upload/v1777374520/AllVideo_01772723176184_s01ucs.mp4",
    caption: "My Story",
    type:    "video"
  },
  {
    src:     "https://res.cloudinary.com/deqjuasvw/video/upload/v1777374898/AllVideo_01769641128658_pfelwy.mp4",
    caption: "My Story",
    type:    "video"
  },
   {
    src:     "https://res.cloudinary.com/deqjuasvw/video/upload/v1777708048/AllVideo_01777707690045_qr0qn7.mp4",
    caption: "My Story",
    type:    "video"
  },      
  {
    src:     "https://res.cloudinary.com/deqjuasvw/video/upload/v1778388266/VID_20260504154518_rvsjyx.mp4",
    caption: "My Story",
    type:    "video"
  },        
  {
    src:     "https://res.cloudinary.com/deqjuasvw/video/upload/v1778388399/VID_20260508201955_uahhl0.mp4",
    caption: "My Story",
    type:    "video"
  },
];

// Preview di index.html (jumlah yang ditampilkan)
const GALLERY_PREVIEW_LIMIT = 6;
