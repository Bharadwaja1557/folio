const menuBtn = document.querySelector(".menu-toggle");
const overlay = document.querySelector(".menu-overlay");
const closeBtn = document.querySelector(".menu-close");

if (menuBtn && overlay && closeBtn) {
  menuBtn.addEventListener("click", () => {
    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      overlay.classList.remove("active");
      overlay.setAttribute("aria-hidden", "true");
    }
  });
}
