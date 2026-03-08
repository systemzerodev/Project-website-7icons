/* ================================
   DARK MODE TOGGLE
================================ */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  // cek theme yang tersimpan
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.checked = true;
  }

  themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
}

/* ================================
   HAMBURGER MENU
================================ */

const menuToggle = document.getElementById("menuToggle");
const overlay = document.querySelector(".menu-overlay");
const navMenu = document.querySelector("nav");

if (menuToggle && navMenu && overlay) {
  // klik hamburger
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu-open");

    menuToggle.classList.toggle("active");

    overlay.classList.toggle("active");
  });

  // klik overlay menutup menu
  overlay.addEventListener("click", () => {
    navMenu.classList.remove("menu-open");

    menuToggle.classList.remove("active");

    overlay.classList.remove("active");
  });
}

/* ================================
   Click Outside menu to close
================================ */

document.addEventListener("click", (e) => {
  const clickInsideMenu = navMenu.contains(e.target);
  const clickOnButton = menuToggle.contains(e.target);

  if (!clickInsideMenu && !clickOnButton) {
    navMenu.classList.remove("menu-open");
    menuToggle.classList.remove("active");
  }
});

/* =================================
CLOSE MENU WHEN LINK CLICKED
================================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("menu-open");
    menuToggle.classList.remove("active");
  });
});
