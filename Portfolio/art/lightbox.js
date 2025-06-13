document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxDescription = document.getElementById("lightbox-description");
  const lightboxClose = document.getElementById("lightbox-close");
  const nextBtn = document.getElementById("lightbox-next");
  const prevBtn = document.getElementById("lightbox-prev");

  const images = Array.from(
    document.querySelectorAll(
      ".dig-art-image, .trad-art-image, .trad-art-image-square"
    )
  );
  let currentIndex = -1;

  function disableScroll() {
    document.body.style.overflow = "hidden";
  }

  function enableScroll() {
    document.body.style.overflow = "";
  }

  function openLightbox(index) {
    const img = images[index];
    if (!img) return;
    currentIndex = index;
    lightboxImg.src = img.src;
    lightboxTitle.textContent = img.getAttribute("data-title") || img.alt || "";
    lightboxDescription.textContent =
      img.getAttribute("data-description") || "";
    lightbox.style.display = "flex";
    disableScroll();
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentIndex < images.length - 1) {
      openLightbox(currentIndex + 1);
    }
  });

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      openLightbox(currentIndex - 1);
    }
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.style.display = "none";
    enableScroll();
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      enableScroll();
    }
  });

  // KEYBOARD CONTROLS
  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
      switch (e.key) {
        case "ArrowLeft":
        case "a":
        case "A":
          if (currentIndex > 0) {
            openLightbox(currentIndex - 1);
          }
          break;
        case "ArrowRight":
        case "d":
        case "D":
          if (currentIndex < images.length - 1) {
            openLightbox(currentIndex + 1);
          }
          break;
        case "Escape":
          lightbox.style.display = "none";
          enableScroll();
          break;
      }
    }
  });
});
