document.addEventListener("DOMContentLoaded", () => {
    const burstContainer = document.getElementById("burst-container");

const burstImages = [
  "main-image/diamond.png",
  "main-image/lightning.png",
  "main-image/wings.png",
  "main-image/dice.png"
];

const popSequence = [
  "main-image/star-pop1.png",
  "main-image/star-pop2.png",
  "main-image/star-pop3.png"
];

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  star.style.left = `${Math.random() * window.innerWidth}px`;
  star.style.bottom = `0px`;
  star.style.backgroundImage = `url(${popSequence[0]})`;

  // Start floating up and rotating
  let bottom = 0;
  let rotation = 0;
  const floatInterval = setInterval(() => {
    bottom += 1; // speed of floating up
    rotation += 2; // degrees per tick
    star.style.bottom = bottom + "px";
    star.style.transform = `rotate(${rotation}deg)`;
    if (bottom > window.innerHeight + 50) { // remove when out of view
      clearInterval(floatInterval);
      if (burstContainer.contains(star)) {
        star.remove();
        createStar();
      }
    }
  }, 20);

  star.addEventListener("click", () => {
    clearInterval(floatInterval);
    playPopAnimation(star);
  });

  burstContainer.appendChild(star);
}

function playPopAnimation(star) {
  let frame = 0;
  const interval = setInterval(() => {
    if (frame < popSequence.length) {
      star.style.backgroundImage = `url(${popSequence[frame]})`;
      frame++;
    } else {
      clearInterval(interval);
      showBurst(star);
    }
  }, 100);
}

function showBurst(star) {
  const burst = document.createElement("div");
  burst.classList.add("burst");
  burst.style.left = star.style.left;
  // Position at star’s current bottom position converted to top relative to viewport
  const rect = star.getBoundingClientRect();
  burst.style.top = rect.top + "px";
  burst.style.backgroundImage = `url(${burstImages[Math.floor(Math.random() * burstImages.length)]})`;

  burstContainer.appendChild(burst);
  star.remove();

  setTimeout(() => {
    burst.remove();
    createStar();
  }, 800);
}

// Create multiple stars
for (let i = 0; i < 15; i++) {
  setTimeout(createStar, Math.random() * 5000);
}
});
