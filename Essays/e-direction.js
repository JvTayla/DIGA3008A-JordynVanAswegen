function getCurrentEssayNumber() {
  const match = window.location.href.match(/essay-(\d+)\.html/);
  return match ? parseInt(match[1]) : null;
}

function goToNextEssay() {
  const currentEssay = getCurrentEssayNumber();
  const maxEssayNumber = 10; // Change this if you have more or fewer essays
  if (currentEssay !== null && currentEssay < maxEssayNumber) {
    window.location.href = `../Essays/essay-${currentEssay + 1}.html`;
  }
}

function goToPreviousEssay() {
  const currentEssay = getCurrentEssayNumber();
  if (currentEssay !== null && currentEssay > 1) {
    window.location.href = `../Essays/essay-${currentEssay - 1}.html`;
  }
}