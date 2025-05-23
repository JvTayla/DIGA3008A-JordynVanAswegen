const burstContainer = document.getElementById("burst-container");

const burstImages = [
  "main-image/diamond.png",
  "main-image/lightning.png",
  "main-image/wings.png",
  "main-image/dice.png"
];

const popSequence = [
  "main-image/star-pop (1).png",
  "main-image/star-pop (2).png",
  "main-image/star-pop (3).png"
];

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = `${Math.random() * window.innerWidth}px`;
  star.style.bottom = `0px`; // Start at bottom
  star.style.backgroundImage = `url(${popFrames[0]})`;

  star.addEventListener("click", () => {
    playPopAnimation(star);
  });

  burstContainer.appendChild(star);

  // Remove star after float
  setTimeout(() => {
    if (burstContainer.contains(star)) {
      star.remove();
      createStar();
    }
  }, 8000);
}

function playPopAnimation(star) {
  let frame = 0;
  const interval = setInterval(() => {
    if (frame < popFrames.length) {
      star.style.backgroundImage = `url(${popFrames[frame]})`;
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
  burst.style.top = star.getBoundingClientRect().top + "px";
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
