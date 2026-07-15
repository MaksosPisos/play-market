import type { CatalogCategory, CatalogColumn } from "../types";

export const catalogCategories: CatalogCategory[] = [
  { id: "games", title: "Игры и игровые сервисы" },
  { id: "values", title: "Игровые ценности" },
  { id: "mobile", title: "Мобильные игры" },
  { id: "social", title: "Сервисы и соцсети" },
  { id: "apps", title: "Программы" },
];

export const catalogColumns: CatalogColumn[] = [
  {
    title: "Steam",
    icon: "/assets/steam.png",
    links: [
      "Игры и DLC",
      "Пополнение баланса",
      "Подарочные карты",
      "Коллекционные карточки",
      "Смена региона",
    ],
  },
  {
    title: "PlayStation",
    icon: "/assets/ps.png",
    links: [
      "Игры и DLC",
      "Пополнение баланса",
      "Новые аккаунты",
      "PS Plus",
      "EA Play",
    ],
  },
  {
    title: "Xbox",
    links: [
      "Игры и DLC",
      "Пополнение баланса",
      "Новые аккаунты",
      "Xbox Game Pass",
      "Услуги",
    ],
  },
  {
    title: "Nintendo",
    links: [
      "Игры и DLC",
      "Пополнение баланса",
      "Новые аккаунты",
      "NS Online",
    ],
  },
  {
    title: "Battle.net",
    links: [
      "World of Warcraft",
      "Игры и DLC",
      "Прямое пополнение",
      "Подарочные карты",
      "Новые аккаунты",
    ],
  },
  {
    title: "Подборки",
    links: [
      "Скидки 90%",
      "Популярные издатели",
      "Лучшие серии игр",
      "Steam Deck",
      "Bundle-наборы",
    ],
  },
];
