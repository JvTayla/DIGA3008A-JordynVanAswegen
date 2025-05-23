document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backtotopbtn");

  if (backToTopBtn) {
    // Apply your CSS styles directly via JS
    backToTopBtn.style.display = "none";
    backToTopBtn.style.position = "fixed";
    backToTopBtn.style.bottom = "40px";
    backToTopBtn.style.right = "30px";
    backToTopBtn.style.zIndex = "99";
    backToTopBtn.style.background = "transparent";
    backToTopBtn.style.border = "none";
    backToTopBtn.style.padding = "0";
    backToTopBtn.style.cursor = "pointer";

    const backToTopImg = backToTopBtn.querySelector("img");
    if (backToTopImg) {
      backToTopImg.style.width = "60px";
      backToTopImg.style.height = "60px";
      backToTopImg.style.transition = "transform 0.3s ease";

      // Add hover effect via JS
      backToTopBtn.addEventListener("mouseenter", () => {
        backToTopImg.style.transform = "scale(1.1)";
      });

      backToTopBtn.addEventListener("mouseleave", () => {
        backToTopImg.style.transform = "scale(1)";
      });
    }

    // Scroll to top on click
    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    // Show/hide the button on scroll
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
  } else {
    console.warn("Back to top button not found.");
  }
});