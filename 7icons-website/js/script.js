const toggle = document.getElementById("themeToggle");

if (toggle) {
  const updateIcon = () => {
    toggle.textContent = document.body.classList.contains("light-mode")
      ? "☀"
      : "🌙";
  };

  toggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
    updateIcon();
  });

  updateIcon();
}
