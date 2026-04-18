/* =========================================
   PORTFOLIO — script.js
   ========================================= */

/* ─── PLAYLIST DATA
   Cara isi musik dari GitHub:
   1. Upload file .mp3 ke repo GitHub kamu
   2. Buka file di GitHub → klik tombol "Raw" → copy URL-nya
   3. Tempel di bagian "src" tiap lagu di bawah
   
   Contoh src:
   "https://raw.githubusercontent.com/username/repo/main/music/namalagu.mp3"
   ─────────────────────────────────────────────────── */
const SONGS = [
  {
    title:  "Satu Dalam Sejuta",
    artist: "Aurelie Hermansyah",
    dur:    "3:42",
    total:  222,
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/satu-dalam-sejuta.mp3"
  },
  {
    title:  "Rasa Yang Tertinggal",
    artist: "Yura Yunita",
    dur:    "4:01",
    total:  241,
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/rasa-yang-tertinggal.mp3"
  },
  {
    title:  "Diam-Diam Suka",
    artist: "RAN",
    dur:    "3:55",
    total:  235,
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/diam-diam-suka.mp3"
  },
  {
    title:  "Yellow",
    artist: "Coldplay",
    dur:    "4:26",
    total:  266,
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/yellow.mp3"
  },
  {
    title:  "Lover",
    artist: "Taylor Swift",
    dur:    "3:41",
    total:  221,
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/lover.mp3"
  },
  {
    title:  "Aesthetic",
    artist: "Tollan Kim",
    dur:    "3:30",
    total:  210,
    src:    "https://raw.githubusercontent.com/USERNAME/REPO/main/music/aesthetic.mp3"
  },
];

/* ─── PLAYER STATE ─── */
let currentIdx  = 0;
let isPlaying   = false;
let isShuffle   = false;
let isRepeat    = false;
let audio       = new Audio();
let tickTimer   = null;

/* ─── DOM REFS ─── */
const playerSong  = document.getElementById("playerSong");
const playerArtist= document.getElementById("playerArtist");
const playerFill  = document.getElementById("playerFill");
const playerThumb = document.getElementById("playerThumb");
const timeCur     = document.getElementById("timeCur");
const timeTot     = document.getElementById("timeTot");
const playIcon    = document.getElementById("playIcon");
const playerDisc  = document.getElementById("playerDisc");
const playerWave  = document.getElementById("playerWave");
const playlistEl  = document.getElementById("playlistEl");
const progressBar = document.getElementById("playerProgress");
const volSlider   = document.getElementById("volSlider");

/* ─── LOAD SONG ─── */
function loadSong(idx, autoplay) {
  const s = SONGS[idx];
  currentIdx = idx;

  // update audio
  audio.src = s.src;
  audio.volume = volSlider.value / 100;
  audio.load();

  // update UI
  playerSong.textContent   = s.title;
  playerArtist.textContent = s.artist;
  timeTot.textContent      = s.dur;
  timeCur.textContent      = "0:00";
  playerFill.style.width   = "0%";
  playerThumb.style.left   = "0%";

  buildPlaylist();

  if (autoplay) {
    playAudio();
  }
}

/* ─── PLAY / PAUSE ─── */
function playAudio() {
  audio.play().then(() => {
    isPlaying = true;
    playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    playerDisc.classList.add("spinning");
    playerWave.classList.add("active");
    buildPlaylist();
    startTick();
  }).catch(() => {
    // autoplay blocked or src not found — still update UI state
    isPlaying = false;
  });
}

function pauseAudio() {
  audio.pause();
  isPlaying = false;
  playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
  playerDisc.classList.remove("spinning");
  playerWave.classList.remove("active");
  buildPlaylist();
  clearInterval(tickTimer);
}

function togglePlay() {
  if (isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
}

/* ─── PREV / NEXT ─── */
function prevSong() {
  let idx = currentIdx - 1;
  if (idx < 0) idx = SONGS.length - 1;
  loadSong(idx, isPlaying);
}

function nextSong() {
  let idx;
  if (isShuffle) {
    do { idx = Math.floor(Math.random() * SONGS.length); }
    while (SONGS.length > 1 && idx === currentIdx);
  } else {
    idx = (currentIdx + 1) % SONGS.length;
  }
  loadSong(idx, isPlaying);
}

/* ─── SHUFFLE / REPEAT ─── */
function toggleShuffle() {
  isShuffle = !isShuffle;
  document.getElementById("btnShuffle").classList.toggle("active", isShuffle);
}

function toggleRepeat() {
  isRepeat = !isRepeat;
  document.getElementById("btnRepeat").classList.toggle("active", isRepeat);
  audio.loop = isRepeat;
}

/* ─── PROGRESS TICK ─── */
function startTick() {
  clearInterval(tickTimer);
  tickTimer = setInterval(() => {
    if (!audio.duration) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    playerFill.style.width  = pct + "%";
    playerThumb.style.left  = pct + "%";
    timeCur.textContent     = fmtTime(audio.currentTime);
  }, 500);
}

/* ─── SEEK ─── */
progressBar.addEventListener("click", (e) => {
  const rect = progressBar.getBoundingClientRect();
  const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  if (audio.duration) {
    audio.currentTime = pct * audio.duration;
    playerFill.style.width = (pct * 100) + "%";
    playerThumb.style.left = (pct * 100) + "%";
    timeCur.textContent    = fmtTime(audio.currentTime);
  }
});

/* ─── VOLUME ─── */
volSlider.addEventListener("input", () => {
  audio.volume = volSlider.value / 100;
});

/* ─── AUDIO EVENTS ─── */
audio.addEventListener("ended", () => {
  if (!isRepeat) nextSong();
});

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  playerFill.style.width = pct + "%";
  playerThumb.style.left = pct + "%";
  timeCur.textContent    = fmtTime(audio.currentTime);
});

/* ─── BUILD PLAYLIST ─── */
function buildPlaylist() {
  playlistEl.innerHTML = "";
  SONGS.forEach((s, i) => {
    const div = document.createElement("div");
    div.className = "pl-item" + (i === currentIdx ? " active" : "");
    div.innerHTML = `
      <div class="pl-num">${i === currentIdx && isPlaying ? "♪" : i + 1}</div>
      <div class="pl-info">
        <div class="pl-title">${s.title}</div>
        <div class="pl-artist">${s.artist}</div>
      </div>
      <div class="pl-dur">${s.dur}</div>
    `;
    div.addEventListener("click", () => loadSong(i, true));
    playlistEl.appendChild(div);
  });
}

/* ─── FORMAT TIME ─── */
function fmtTime(sec) {
  if (isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ":" + String(s).padStart(2, "0");
}

/* ─── GALLERY FILTER ─── */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const cat = btn.dataset.filter;
    document.querySelectorAll(".g-item").forEach((item, i) => {
      const match = cat === "all" || item.dataset.cat === cat;
      item.classList.toggle("hidden", !match);
    });
  });
});

/* ─── SCROLL REVEAL ─── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), i * 90);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(".bio-layout, .bio-card, .bio-desc, .gallery-grid, .player-card, .playlist-wrap").forEach(el => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

/* ─── NAVBAR SCROLL ─── */
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

/* ─── BURGER MENU (mobile) ─── */
document.getElementById("navBurger").addEventListener("click", () => {
  const links = document.querySelector(".nav-links");
  const isOpen = links.style.display === "flex";
  if (isOpen) {
    links.style.display = "";
  } else {
    links.style.display = "flex";
    links.style.flexDirection = "column";
    links.style.position = "absolute";
    links.style.top = "68px";
    links.style.left = "0";
    links.style.right = "0";
    links.style.background = "rgba(250,247,242,0.97)";
    links.style.backdropFilter = "blur(14px)";
    links.style.padding = "16px 24px 20px";
    links.style.gap = "16px";
    links.style.borderBottom = "1px solid rgba(196,124,115,0.18)";
    links.style.zIndex = "199";
  }
});

/* ─── INIT ─── */
loadSong(0, false);
