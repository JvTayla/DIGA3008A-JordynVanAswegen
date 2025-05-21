document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".jordyn-image");
  let currentIndex = 0;
  const duration = 600; 

  images.forEach(img => {
    img.addEventListener("click", () => {
      // Prevent clicks during animation
      if (img.classList.contains("flip-out") || img.classList.contains("flip-in")) {
        return;
      }

      const current = images[currentIndex];
      const nextIndex = (currentIndex + 1) % images.length;
      const next = images[nextIndex];

      // Phase 1: flip out current image
      current.classList.remove("showing");
      current.classList.add("flip-out");

      setTimeout(() => {
        current.classList.remove("flip-out");

        // Phase 2: flip in next image
        next.classList.add("flip-in");

        setTimeout(() => {
          next.classList.remove("flip-in");
          next.classList.add("showing");
          currentIndex = nextIndex;
        }, duration);

      }, duration);
    });
  });
});