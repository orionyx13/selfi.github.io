/* =========================================
   script.js — Shared utilities
   Dipakai di semua halaman
   ========================================= */

/* ─── NAVBAR SCROLL ─── */
window.addEventListener("scroll", () => {
  document.getElementById("navbar")?.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

/* ─── BURGER MENU (mobile) ─── */
document.getElementById("navBurger")?.addEventListener("click", function () {
  const links = document.querySelector(".nav-links");
  if (!links) return;
  const isOpen = links.dataset.open === "1";
  if (isOpen) {
    links.removeAttribute("style");
    links.dataset.open = "0";
  } else {
    Object.assign(links.style, {
      display:        "flex",
      flexDirection:  "column",
      position:       "absolute",
      top:            "68px",
      left:           "0",
      right:          "0",
      background:     "rgba(250,247,242,0.97)",
      backdropFilter: "blur(14px)",
      padding:        "16px 24px 20px",
      gap:            "16px",
      borderBottom:   "1px solid rgba(196,124,115,0.18)",
      zIndex:         "199"
    });
    links.dataset.open = "1";
  }
});

/* ─── SCROLL REVEAL ─── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), i * 80);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(
  ".bio-layout, .bio-card, .bio-desc, .gallery-grid, .player-card, .playlist-wrap, .full-playlist-wrap, .player-sticky-wrap"
).forEach(el => {
  el.classList.add("reveal");
  revealObs.observe(el);
});
