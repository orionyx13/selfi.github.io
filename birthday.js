/* =========================================
   HAPPY BIRTHDAY AUTO — 12 Juli
   Keren dengan confetti + animasi
   ========================================= */

function cekUlangTahun() {
  const today = new Date();
  const bulan = today.getMonth();      // Januari = 0
  const tanggal = today.getDate();
  
  // 12 Juli = bulan 6, tanggal 12
  if (bulan === 6 && tanggal === 12) {
    
    // 1. Ubah teks di Hero
    const heroName = document.querySelector(".hero-name em");
    if (heroName) heroName.innerHTML = 'Selfi Anggreani 🎂';
    
    const heroRole = document.querySelector(".hero-role");
    if (heroRole) heroRole.innerHTML = '🎉 Happy Birthday to Me! 🎉';
    
    const heroBadgeNum = document.querySelector(".hero-badge-num");
    if (heroBadgeNum) heroBadgeNum.innerHTML = "🎂";
    
    const heroBadgeTxt = document.querySelector(".hero-badge-txt");
    if (heroBadgeTxt) heroBadgeTxt.innerHTML = "HAPPY BDAY!";
    
    // 2. Tambah balon atau dekorasi di background
    const hero = document.getElementById("hero");
    if (hero) {
      hero.style.overflow = "hidden";
      hero.style.position = "relative";
    }
    
    // 3. Confetti! (pakai canvas confetti)
    if (typeof confetti === 'function') {
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
      setTimeout(() => {
        confetti({ particleCount: 100, spread: 100, origin: { y: 0.7 }, startVelocity: 25 });
      }, 300);
      setTimeout(() => {
        confetti({ particleCount: 200, spread: 80, origin: { y: 0.5 } });
      }, 600);
    } else {
      // Fallback: manual confetti pake emoji
      for(let i = 0; i < 80; i++) {
        setTimeout(() => {
          const conf = document.createElement("div");
          const emojis = ["🎉","🎂","🎈","✨","🎁","🥳","🎊","💖"];
          conf.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
          conf.style.position = "fixed";
          conf.style.left = Math.random() * 100 + "%";
          conf.style.top = "-50px";
          conf.style.fontSize = (Math.random() * 20 + 20) + "px";
          conf.style.pointerEvents = "none";
          conf.style.zIndex = "9999";
          conf.style.opacity = "0.9";
          conf.style.animation = `birthdayFall ${Math.random() * 3 + 2}s ease-out forwards`;
          document.body.appendChild(conf);
          setTimeout(() => conf.remove(), 5000);
        }, i * 50);
      }
    }
    
    // 4. Tambah CSS animasi (kalau belum ada)
    if (!document.getElementById("birthday-style")) {
      const style = document.createElement("style");
      style.id = "birthday-style";
      style.textContent = `
        @keyframes birthdayFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          70% { opacity: 0.8; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; display: none; }
        }
        
        /* Efek glow di badge */
        .hero-badge {
          animation: birthdayGlow 0.8s ease-in-out infinite alternate !important;
        }
        
        @keyframes birthdayGlow {
          from { box-shadow: 0 0 10px var(--rose-light); }
          to { box-shadow: 0 0 30px #ffd700, 0 0 40px var(--rose); }
        }
        
        /* Efek teks berkedip di role */
        .hero-role {
          animation: birthdayTextPop 0.5s ease-out;
        }
        
        @keyframes birthdayTextPop {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); color: #ffd700; }
          100% { transform: scale(1); }
        }
      `;
      document.head.appendChild(style);
    }
    
    console.log("🎂 SELAMAT ULANG TAHUN! 🎂");
  }
}

// Load confetti library dari CDN (biar lebih keren)
function loadConfetti() {
  if (typeof confetti === 'undefined') {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1";
    script.onload = () => {
      console.log("Confetti loaded!");
      cekUlangTahun(); // Panggil ulang setelah confetti siap
    };
    document.head.appendChild(script);
  } else {
    cekUlangTahun();
  }
}

// Jalanin saat halaman siap
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadConfetti);
} else {
  loadConfetti();
}
