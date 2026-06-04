// components/loader.js
async function loadComponent(placeholderId, filePath) {
  const res = await fetch(filePath);
  const html = await res.text();
  document.getElementById(placeholderId).innerHTML = html;
}

function setActiveNav() {
  const path = window.location.pathname;
  if (path.includes("gallery.html")) {
    document.getElementById("nav-gallery")?.classList.add("nav-active");
  } else if (path.includes("music.html")) {
    document.getElementById("nav-music")?.classList.add("nav-active");
  } else {
    document.getElementById("nav-home")?.classList.add("nav-active");
    document.getElementById("nav-biodata")?.classList.add("nav-active");
  }
}

function initBurger() {
  const burger = document.getElementById("navBurger");
  const navLinks = document.querySelector(".nav-links");
  if (burger && navLinks) {
    burger.removeEventListener("click", () => navLinks.classList.toggle("open"));
    burger.addEventListener("click", () => navLinks.classList.toggle("open"));
  }
}

async function loadComponents() {
  await loadComponent("navbar-placeholder", "components/navbar.html");
  await loadComponent("footer-placeholder", "components/footer.html");
  setActiveNav();
  initBurger();
}
