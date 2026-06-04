// components/loader.js
async function loadComponent(placeholderId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();
    document.getElementById(placeholderId).innerHTML = html;
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error);
  }
}

// Setelah navbar dimuat, aktifkan tombol burger
function initNavbarBurger() {
  const burger = document.getElementById("navBurger");
  const navLinks = document.querySelector(".nav-links");
  if (burger && navLinks) {
    burger.removeEventListener("click", () => navLinks.classList.toggle("open"));
    burger.addEventListener("click", () => navLinks.classList.toggle("open"));
  }
}

// Muat navbar dan footer, lalu inisialisasi burger
async function loadComponents() {
  await loadComponent("navbar-placeholder", "components/navbar.html");
  await loadComponent("footer-placeholder", "components/footer.html");
  initNavbarBurger();
}
