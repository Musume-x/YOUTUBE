(function () {
  const chips = document.querySelector(".chips");
  const next = document.querySelector("[data-chips-next]");
  const prev = document.querySelector("[data-chips-prev]");

  function scrollChips(dir) {
    if (!chips) return;
    chips.scrollBy({ left: dir * 240, behavior: "smooth" });
  }

  next?.addEventListener("click", () => scrollChips(1));
  prev?.addEventListener("click", () => scrollChips(-1));

  document.querySelectorAll(".thumb").forEach((thumb) => {
    const img = thumb.querySelector("img");
    if (!img) return;
    img.addEventListener("error", () => img.remove());
  });
})();
