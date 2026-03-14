/* =================================
DARK MODE TOGGLE
================================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
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

/* =================================
HAMBURGER MENU
================================= */

const menuToggle = document.getElementById("menuToggle");
const overlay = document.querySelector(".menu-overlay");
const navMenu = document.querySelector("nav");

if (menuToggle && navMenu && overlay) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu-open");

    menuToggle.classList.toggle("active");

    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    navMenu.classList.remove("menu-open");

    menuToggle.classList.remove("active");

    overlay.classList.remove("active");
  });
}

/* =================================
CLICK OUTSIDE MENU
================================= */

document.addEventListener("click", (e) => {
  const clickInsideMenu = navMenu && navMenu.contains(e.target);

  const clickOnButton = menuToggle && menuToggle.contains(e.target);

  if (navMenu && menuToggle) {
    if (!clickInsideMenu && !clickOnButton) {
      navMenu.classList.remove("menu-open");

      menuToggle.classList.remove("active");
    }
  }
});

/* =================================
CLOSE MENU WHEN LINK CLICKED
================================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu && menuToggle) {
      navMenu.classList.remove("menu-open");

      menuToggle.classList.remove("active");
    }
  });
});

/* =================================
MEMBER SCROLL ANIMATION
================================= */

const memberCards = document.querySelectorAll(".member-card");

if (memberCards.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  memberCards.forEach((card) => {
    observer.observe(card);
  });
}

/* =================================
MEMBER DETAIL TOGGLE
================================= */

memberCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
