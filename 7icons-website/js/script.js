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
const navMenu = document.querySelector("nav");
const overlay = document.querySelector(".menu-overlay");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu-open");

    menuToggle.classList.toggle("active");

    if (overlay) {
      overlay.classList.toggle("active");
    }
  });
}

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
MEMBER DETAIL ACCORDION
================================= */

memberCards.forEach((card) => {
  card.addEventListener("click", () => {
    const isActive = card.classList.contains("active");

    /* tutup semua card */

    memberCards.forEach((c) => {
      c.classList.remove("active");
    });

    /* buka card yang diklik */

    if (!isActive) {
      card.classList.add("active");
    }
  });
});

/* =================================
CLOSE MEMBER DETAIL WHEN CLICK OUTSIDE
================================= */

document.addEventListener("click", (e) => {
  const clickedCard = e.target.closest(".member-card");

  if (!clickedCard) {
    memberCards.forEach((card) => {
      card.classList.remove("active");
    });
  }
});

/* =================================
GALLERY LIGHTBOX
================================= */

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");

/* open lightbox */

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");

    lightboxImg.src = img.src;
  });
});

/* close button */

lightboxClose.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

/* click outside image */

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.remove("active");
  }
});
