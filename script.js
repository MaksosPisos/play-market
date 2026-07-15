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
    img: "assets/fec7c0737fc84d914b4af27d256b9a251f294983.png",
  },
];

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
  root.innerHTML = offers.map(offerCard).join("");
}

document.querySelectorAll("[data-products]").forEach(renderProducts);

new Swiper(".hero-swiper", {
  loop: true,
  speed: 600,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".hero-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".hero-next",
    prevEl: ".hero-prev",
  },
});

const catalogBtn = document.getElementById("catalogBtn");
const catalogMega = document.getElementById("catalogMega");

function setCatalogOpen(open) {
  catalogMega.classList.toggle("is-open", open);
  catalogMega.setAttribute("aria-hidden", String(!open));
  catalogBtn.setAttribute("aria-expanded", String(open));
}

function toggleCatalog() {
  setCatalogOpen(!catalogMega.classList.contains("is-open"));
}

catalogBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleCatalog();
});

catalogMega?.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click", () => {
  if (catalogMega?.classList.contains("is-open")) setCatalogOpen(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && catalogMega?.classList.contains("is-open")) {
    setCatalogOpen(false);
    catalogBtn?.focus();
  }
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
