const posterGames = [
  {
    title: "Wildcat Gun Machine",
    price: "5.99",
    sale: "-50%",
    img: "assets/wildcat.png",
  },
  {
    title: "Rogue Company",
    price: "Free",
    img: "assets/rogue.png",
  },
  {
    title: "Zombie Army 4: Dead War",
    price: "24",
    sale: "-40%",
    img: "assets/zombie.png",
  },
];

const offers = [
  {
    title: "💥 DOOM 2016 💀 STEAM KEY 🔑 РФ+СНГ",
    price: "990 ₽",
    old: "1 990 ₽",
    img: "assets/wildcat-card.png",
  },
  {
    title: "💥 DOOM 2016 💀 STEAM KEY 🔑 РФ+СНГ",
    price: "990 ₽",
    old: "1 990 ₽",
    img: "assets/funtime.jpg",
  },
  {
    title: "💥 DOOM 2016 💀 STEAM KEY 🔑 РФ+СНГ",
    price: "990 ₽",
    old: "1 990 ₽",
    img: "assets/rogue.png",
  },
  {
    title: "💥 DOOM 2016 💀 STEAM KEY 🔑 РФ+СНГ",
    price: "990 ₽",
    old: "1 990 ₽",
    img: "assets/zombie.png",
  },
  {
    title: "💥 DOOM 2016 💀 STEAM KEY 🔑 РФ+СНГ",
    price: "990 ₽",
    old: "1 990 ₽",
    img: "assets/wildcat.png",
  },
];

function posterCard(game) {
  return `
    <article class="card-poster">
      <div class="card-poster__img"><img src="${game.img}" alt="${game.title}" /></div>
      <h3 class="card-poster__title">${game.title}</h3>
      <div class="card-poster__price">
        ${game.sale ? `<span class="sale">${game.sale}</span>` : ""}
        <span>${game.price}</span>
      </div>
    </article>
  `;
}

function offerCard(offer) {
  return `
    <article class="card-offer">
      <div class="card-offer__img"><img src="${offer.img}" alt="" /></div>
      <div class="card-offer__body">
        <h3 class="card-offer__title">${offer.title}</h3>
        <div class="card-offer__price">
          <strong>${offer.price}</strong>
          <s>${offer.old}</s>
        </div>
        <button class="card-offer__buy" type="button">Купить</button>
      </div>
    </article>
  `;
}

function renderProducts(root) {
  const posters = posterGames.map(posterCard).join("");
  const cards = offers.slice(0, 3).map(offerCard).join("");
  root.innerHTML = posters + cards;
}

document.querySelectorAll("[data-products]").forEach(renderProducts);

const catalogBtn = document.getElementById("catalogBtn");
const catalogMega = document.getElementById("catalogMega");

catalogBtn?.addEventListener("click", () => {
  const open = catalogMega.hasAttribute("hidden");
  if (open) catalogMega.removeAttribute("hidden");
  else catalogMega.setAttribute("hidden", "");
  catalogBtn.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".mega__cat").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".mega__cat")
      .forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
  });
});

document.querySelectorAll(".chips").forEach((group) => {
  group.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    group.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
    chip.classList.add("is-active");
  });
});

document.querySelectorAll(".services").forEach((group) => {
  group.addEventListener("click", (e) => {
    const item = e.target.closest(".service");
    if (!item) return;
    group.querySelectorAll(".service").forEach((s) => s.classList.remove("is-active"));
    item.classList.add("is-active");
  });
});

document.querySelectorAll(".currency").forEach((group) => {
  group.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    group.querySelectorAll("button").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
  });
});
