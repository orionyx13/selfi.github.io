/* =========================================
   player.js — Shared music player logic
   FIXED: Google Drive support, autoplay, error handling
   ========================================= */

let _songs      = [];
let _currentIdx = 0;
let _isPlaying  = false;
let _isShuffle  = false;
let _isRepeat   = false;
let _audio      = new Audio();
let _isUserInteracted = false;

/* Enable audio after user click anywhere */
function _enableAudioOnUserInteraction() {
  if (_isUserInteracted) return;
  _isUserInteracted = true;
  if (_audio && _audio.paused && _songs.length > 0) {
    _audio.play().catch(e => console.log("Autoplay still blocked:", e));
  }
}

function initPlayer(songs) {
  if (!songs || songs.length === 0) {
    console.warn("No songs provided to initPlayer");
    return;
  }
  
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
      if (_audio.duration && isFinite(_audio.duration)) {
        _audio.currentTime = pct * _audio.duration;
      }
    });
  }

  /* Audio events */
  _audio.addEventListener("timeupdate", _onTimeUpdate);
  _audio.addEventListener("ended", () => { 
    if (_isRepeat) {
      _audio.currentTime = 0;
      _audio.play();
    } else {
      nextSong();
    }
  });
  _audio.addEventListener("error", (e) => {
    console.error("Audio error:", e);
    _setText("playerSong", "Error loading");
    _setText("playerArtist", "Check file link");
  });

  /* Enable audio on first user click anywhere */
  document.body.addEventListener("click", _enableAudioOnUserInteraction);
  document.body.addEventListener("touchstart", _enableAudioOnUserInteraction);
  
  _buildPlaylist();
}

/* Fix Google Drive URL */
function _fixDriveUrl(url) {
  if (!url) return url;
  // Convert Google Drive share link to direct download
  if (url.includes("drive.google.com") && url.includes("/view")) {
    const match = url.match(/\/d\/(.+?)\//);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=download&id=${match[1]}`;
    }
  }
  // Already direct link? Make sure it has download param
  if (url.includes("drive.google.com") && url.includes("uc?export=download")) {
    return url;
  }
  return url;
}

/* Load song */
function _loadSong(idx, autoplay) {
  if (!_songs || !_songs[idx]) {
    console.error("Song not found at index:", idx);
    return;
  }
  
  _currentIdx = idx;
  const s = _songs[idx];
  let songUrl = _fixDriveUrl(s.src);

  _audio.src = songUrl;
  _audio.volume = (document.getElementById("volSlider")?.value ?? 80) / 100;
  _audio.load();

  _setText("playerSong",   s.title || "Unknown");
  _setText("playerArtist", s.artist || "Unknown");
  _setText("timeTot",      s.dur || "3:30");
  _setText("timeCur",      "0:00");
  _setWidth("playerFill",  "0%");
  _setLeft("playerThumb",  "0%");

  _buildPlaylist();

  if (autoplay && _isUserInteracted) {
    _playAudio();
  } else if (autoplay && !_isUserInteracted) {
    console.log("Autoplay blocked. Waiting for user interaction.");
  }
}

/* Play / Pause internal */
function _playAudio() {
  _audio.play().then(() => {
    _isPlaying = true;
    _setPlayIcon(true);
    _el("playerDisc")?.classList.add("spinning");
    _el("playerWave")?.classList.add("active");
    _buildPlaylist();
  }).catch((e) => {
    console.warn("Playback failed:", e);
    _isPlaying = false;
    _setPlayIcon(false);
  });
}

function _pauseAudio() {
  _audio.pause();
  _isPlaying = false;
  _setPlayIcon(false);
  _el("playerDisc")?.classList.remove("spinning");
  _el("playerWave")?.classList.remove("active");
  _buildPlaylist();
}

/* Public controls */
function togglePlay() {
  _enableAudioOnUserInteraction();
  if (!_audio.src) {
    if (_songs.length) _loadSong(0, true);
    return;
  }
  _isPlaying ? _pauseAudio() : _playAudio();
}

function prevSong() {
  if (!_songs.length) return;
  const idx = (_currentIdx - 1 + _songs.length) % _songs.length;
  _loadSong(idx, _isPlaying);
}

function nextSong() {
  if (!_songs.length) return;
  let idx;
  if (_isShuffle) {
    do { idx = Math.floor(Math.random() * _songs.length); }
    while (_songs.length > 1 && idx === _currentIdx);
  } else {
    idx = (_currentIdx + 1) % _songs.length;
  }
  _loadSong(idx, _isPlaying);
}

/* Shuffle / Repeat */
function toggleShuffle() {
  _isShuffle = !_isShuffle;
  _el("btnShuffle")?.classList.toggle("active", _isShuffle);
}

function toggleRepeat() {
  _isRepeat = !_isRepeat;
  _audio.loop = _isRepeat;
  _el("btnRepeat")?.classList.toggle("active", _isRepeat);
}

/* Time update */
function _onTimeUpdate() {
  if (!_audio.duration || !isFinite(_audio.duration)) return;
  const pct = (_audio.currentTime / _audio.duration) * 100;
  _setWidth("playerFill", pct + "%");
  _setLeft("playerThumb", pct + "%");
  _setText("timeCur", _fmtTime(_audio.currentTime));
}

/* Build playlist UI */
function _buildPlaylist() {
  const container = _el("playlistEl");
  if (!container) return;
  container.innerHTML = "";

  _songs.forEach((s, i) => {
    const div = document.createElement("div");
    div.className = "pl-item" + (i === _currentIdx ? " active" : "");
    let playingIcon = (i === _currentIdx && _isPlaying) ? "♪" : (i + 1);
    div.innerHTML = `
      <div class="pl-num">${playingIcon}</div>
      <div class="pl-info">
        <div class="pl-title">${s.title || "No title"}</div>
        <div class="pl-artist">${s.artist || "No artist"}</div>
      </div>
      <div class="pl-dur">${s.dur || "3:30"}</div>`;
    div.addEventListener("click", () => _loadSong(i, true));
    container.appendChild(div);
  });
}

/* Helpers */
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
  if (isNaN(sec) || !isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ":" + String(s).padStart(2, "0");
  }
