import type { Offer } from "../types";

export const offers: Offer[] = [
  {
    id: "1",
    title: "🔑 Elden Ring — Steam Key | РФ+СНГ",
    price: 500,
    old: 1990,
    img: "/assets/wildcat-card.png",
  },
  {
    id: "2",
    title: "🌸 FunTime | Готовый Minecraft-сервер под ключ",
    price: 300,
    old: 1990,
    img: "/assets/funtime.jpg",
  },
  {
    id: "3",
    title: "⚔️ Rogue Company — Prime Status | Global",
    price: 400,
    old: 1990,
    img: "/assets/rogue.png",
  },
  {
    id: "4",
    title: "🧟 Left 4 Dead 2 — Steam Gift | СНГ",
    price: 700,
    old: 1000,
    img: "/assets/zombie.png",
  },
  {
    id: "5",
    title: "🎮 PUBG UC 1800 — Моментальная выдача",
    price: 800,
    old: 1200,
    img: "/assets/fec7c0737fc84d914b4af27d256b9a251f294983.png",
  },
];

export const productChips = [
  "Донат",
  "Подписки",
  "Предметы",
  "Аккаунты",
  "Ключи",
  "Игровая валюта",
  "Другое",
] as const;
