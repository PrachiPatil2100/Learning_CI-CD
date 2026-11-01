const poemCards = Array.from(document.querySelectorAll("[data-poem]"));
const surpriseMessage = document.getElementById("surpriseMessage");

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-surprise]").forEach((button) => {
  button.addEventListener("click", () => {
    const currentPick = poemCards.findIndex((card) => card.classList.contains("is-picked"));
    let nextPick = Math.floor(Math.random() * poemCards.length);

    if (poemCards.length > 1 && nextPick === currentPick) {
      nextPick = (nextPick + 1) % poemCards.length;
    }

    poemCards.forEach((card, index) => {
      card.classList.toggle("is-picked", index === nextPick);
    });

    const title = poemCards[nextPick].querySelector("h3").textContent;
    surpriseMessage.textContent = `Your surprise poem is “${title}”!`;
    poemCards[nextPick].scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
