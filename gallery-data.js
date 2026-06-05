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
  {
    src:     "https://i.imgur.com/4ab7aoR.jpeg",
    caption: "Me & Friend",
    type:    "photo"
  },       
  {
    src:     "https://i.imgur.com/w3wQyE7.jpeg",
    caption: "Me & Friend",
    type:    "photo"
  },       
  {
    src:     "https://i.imgur.com/YnfCn4R.jpeg",
    caption: "Me & Friend",
    type:    "photo"
  },       
  {
    src:     "https://i.imgur.com/GbH3T4i.jpeg",
    caption: "Me & Friend",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/14CnA66.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/rNKu9vH.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/u3qUSol.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/DQqY2hr.jpeg",
    caption: "Me",
    type:    "photo"
  },       
  {
    src:     "https://i.imgur.com/wK8yvv1.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/uLNbGO4.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/uhsXCnH.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/0v58dXd.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/ZSgd1dD.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/sauCpvr.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/mMtCusj.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/iS1unT9.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/ncut1ut.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/ghoXauX.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/eulMm3p.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/ojd7pKm.jpeg",
    caption: "Me & Friend",
    type:    "photo"
  },       
  {
    src:     "https://i.imgur.com/ZZXlczu.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/EttMNIo.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/QHSwF1n.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/dQmmYxc.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/zWUE2T6.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/l3kr4tv.jpeg",
    caption: "Me",
    type:    "photo"
  },       
  {
    src:     "https://i.imgur.com/rGIhKT6.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/AFTDDi8.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/g9jTRDk.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/hoAXiSM.jpeg",
    caption: "Me",
    type:    "photo"
  },       
  {
    src:     "https://i.imgur.com/i5b58Xw.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/UHbfqrL.jpeg",
    caption: "Me",
    type:    "photo"
  },               
  {
    src:     "https://i.imgur.com/7nZfici.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/pcKUocW.jpeg",
    caption: "Me & Friend",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/Vd2WBJS.jpeg",
    caption: "Me",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/hHrcVmT.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/ShAFdWt.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/GVaguW0.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/RsAHx5B.jpeg",
    caption: "Me & Sisters",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/dltGS3x.jpeg",
    caption: "Me & Sisters",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/dcajwu4.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/RCsiGlH.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/zzFT6D1.jpeg",
    caption: "Me & Friend",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/Ny0RWs2.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/ktgy6yR.jpeg",
    caption: "Me",
    type:    "photo"
  },       
  {
    src:     "https://i.imgur.com/zLmKFa6.jpeg",
    caption: "Me",
    type:    "photo"
  },   
  {
    src:     "https://i.imgur.com/xQi51Re.jpeg",
    caption: "Me",
    type:    "photo"
  },   
  {
    src:     "https://i.imgur.com/Nv49XEF.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/G2xOPtF.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/XotGpjX.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/Hm6NlQd.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/F15y3iP.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/NPF1LeD.jpeg",
    caption: "Me",
    type:    "photo"
  },       
  {
    src:     "https://i.imgur.com/yRfllhN.jpeg",
    caption: "Me",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/GSaBYW7.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/8SM529m.jpeg",
    caption: "Me",
    type:    "photo"
  },       
  {
    src:     "https://i.imgur.com/EoPU7Mp.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/wpjWds0.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/kMCdeVu.jpeg",
    caption: "Me",
    type:    "photo"
  },           
  {
    src:     "https://i.imgur.com/DnvKDVC.jpeg",
    caption: "Me & Friend",
    type:    "photo"
  },
  {
    src:     "https://i.imgur.com/V0LiqCG.jpeg",
    caption: "Me & Friend",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/4H2BvVC.jpeg",
    caption: "Me & Sisters",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/ruBM6my.jpeg",
    caption: "Me & Sisters",
    type:    "photo"
  },      
  {
    src:     "https://i.imgur.com/MP2GSHL.jpeg",
    caption: "Me",
    type:    "photo"
  },    
  {
    src:     "https://i.imgur.com/uS793v7.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/d4nY946.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/UiIHzd9.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/TY8Rocg.jpeg",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/Za46lIt.png",
    caption: "Me",
    type:    "photo"
  },    
  {
    src:     "https://i.imgur.com/jT0Gsc8.png",
    caption: "Me",
    type:    "photo"
  },     
  {
    src:     "https://i.imgur.com/gomwzBq.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/n8oi5gS.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/lw0MgGK.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/0cXoFsy.jpeg",
    caption: "Me",
    type:    "photo"
  },        
  {
    src:     "https://i.imgur.com/CZ8izJ0.jpeg",
    caption: "Me",
    type:    "photo"
  },       
  {
    src:     "https://i.imgur.com/J1k7AZX.jpeg",
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
  {
    src:     "https://res.cloudinary.com/deqjuasvw/video/upload/v1779176838/VID_20260519101841_ydo691.mp4",
    caption: "My Story",
    type:    "video"
  },     
  {
    src:     "https://res.cloudinary.com/deqjuasvw/video/upload/v1779176838/VID_20260519102356_jwdkva.mp4",
    caption: "My Story",
    type:    "video"
  },        
  {
    src:     "https://res.cloudinary.com/deqjuasvw/video/upload/v1779342298/VID_20260520165119_u4sj4q.mp4",
    caption: "My Story",
    type:    "video"
  },
];

// Preview di index.html (jumlah yang ditampilkan)
const GALLERY_PREVIEW_LIMIT = 6;
