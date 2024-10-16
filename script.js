const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    if (!card.classList.contains("flipped")) {
      card.classList.add("flipped");
      card.textContent = card.getAttribute("data-prize");
      setTimeout(() => {
        alert("你抽中了：" + card.getAttribute("data-prize"));
      }, 500);
    }
  });
});
