/* =========================================
   player.js — Shared music player logic
   Dipanggil di index.html & music.html
   
   Cara pakai:
     initPlayer(arrayOfSongs)
   
   arrayOfSongs diambil dari data.js (SONGS)
   ========================================= */

let _songs      = [];
let _currentIdx = 0;
let _isPlaying  = false;
let _isShuffle  = false;
let _isRepeat   = false;
let _audio      = new Audio();

function initPlayer(songs) {
  _songs = songs;
  _loadSong(0, false);

  /* Volume slider */
  const vol = document.getElementById("volSlider");
  if (vol) {
    _audio.volume = vol.value / 100;
    vol.addEventListener("input", () => { _audio.volume = vol.value / 100; });
  }

  /* Progress bar seek */
  const bar = document.getElementById("playerProgress");
  if (bar) {
    bar.addEventListener("click", (e) => {
      const rect = bar.getBoundingClientRect();
      const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      if (_audio.duration) {
        _audio.currentTime = pct * _audio.duration;
      }
    });
  }

  /* Audio events */
  _audio.addEventListener("timeupdate", _onTimeUpdate);
  _audio.addEventListener("ended", () => { if (!_isRepeat) nextSong(); });
}

/* ─── LOAD ─── */
function _loadSong(idx, autoplay) {
  _currentIdx = idx;
  const s = _songs[idx];

  _audio.src = s.src;
  _audio.volume = (document.getElementById("volSlider")?.value ?? 80) / 100;
  _audio.load();

  _setText("playerSong",   s.title);
  _setText("playerArtist", s.artist);
  _setText("timeTot",      s.dur);
  _setText("timeCur",      "0:00");
  _setWidth("playerFill",  "0%");
  _setLeft("playerThumb",  "0%");

  _buildPlaylist();

  if (autoplay) _playAudio();
}

/* ─── PLAY / PAUSE ─── */
function _playAudio() {
  _audio.play().then(() => {
    _isPlaying = true;
    _setPlayIcon(true);
    _el("playerDisc")?.classList.add("spinning");
    _el("playerWave")?.classList.add("active");
    _buildPlaylist();
  }).catch(() => { _isPlaying = false; });
}

function _pauseAudio() {
  _audio.pause();
  _isPlaying = false;
  _setPlayIcon(false);
  _el("playerDisc")?.classList.remove("spinning");
  _el("playerWave")?.classList.remove("active");
  _buildPlaylist();
}

/* Public toggle — called from HTML onclick */
function togglePlay() {
  _isPlaying ? _pauseAudio() : _playAudio();
}

/* ─── PREV / NEXT ─── */
function prevSong() {
  const idx = (_currentIdx - 1 + _songs.length) % _songs.length;
  _loadSong(idx, _isPlaying);
}

function nextSong() {
  let idx;
  if (_isShuffle) {
    do { idx = Math.floor(Math.random() * _songs.length); }
    while (_songs.length > 1 && idx === _currentIdx);
  } else {
    idx = (_currentIdx + 1) % _songs.length;
  }
  _loadSong(idx, _isPlaying);
}

/* ─── SHUFFLE / REPEAT ─── */
function toggleShuffle() {
  _isShuffle = !_isShuffle;
  _el("btnShuffle")?.classList.toggle("active", _isShuffle);
}

function toggleRepeat() {
  _isRepeat = !_isRepeat;
  _audio.loop = _isRepeat;
  _el("btnRepeat")?.classList.toggle("active", _isRepeat);
}

/* ─── TIME UPDATE ─── */
function _onTimeUpdate() {
  if (!_audio.duration) return;
  const pct = (_audio.currentTime / _audio.duration) * 100;
  _setWidth("playerFill", pct + "%");
  _setLeft("playerThumb", pct + "%");
  _setText("timeCur", _fmtTime(_audio.currentTime));
}

/* ─── BUILD PLAYLIST ─── */
function _buildPlaylist() {
  const container = _el("playlistEl");
  if (!container) return;
  container.innerHTML = "";

  _songs.forEach((s, i) => {
    const div = document.createElement("div");
    div.className = "pl-item" + (i === _currentIdx ? " active" : "");
    div.innerHTML = `
      <div class="pl-num">${i === _currentIdx && _isPlaying ? "♪" : i + 1}</div>
      <div class="pl-info">
        <div class="pl-title">${s.title}</div>
        <div class="pl-artist">${s.artist}</div>
      </div>
      <div class="pl-dur">${s.dur}</div>`;
    div.addEventListener("click", () => _loadSong(i, true));
    container.appendChild(div);
  });
}

/* ─── HELPERS ─── */
function _el(id)             { return document.getElementById(id); }
function _setText(id, val)   { const e = _el(id); if (e) e.textContent = val; }
function _setWidth(id, val)  { const e = _el(id); if (e) e.style.width = val; }
function _setLeft(id, val)   { const e = _el(id); if (e) e.style.left = val; }

function _setPlayIcon(playing) {
  const icon = _el("playIcon");
  if (!icon) return;
  icon.innerHTML = playing
    ? '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'
    : '<path d="M8 5v14l11-7z"/>';
}

function _fmtTime(sec) {
  if (isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ":" + String(s).padStart(2, "0");
}
