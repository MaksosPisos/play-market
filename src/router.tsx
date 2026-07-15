import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/HomePage";
import { PlaceholderPage } from "./pages/PlaceholderPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "seller",
        element: <PlaceholderPage title="Стать продавцом" />,
      },
      {
        path: "bonuses",
        element: <PlaceholderPage title="Бонусы" />,
      },
      {
        path: "support",
        element: <PlaceholderPage title="Поддержка" />,
      },
      {
        path: "guarantees",
        element: <PlaceholderPage title="Гарантии" />,
      },
      {
        path: "reviews",
        element: <PlaceholderPage title="Отзывы" />,
      },
      {
        path: "privacy",
        element: <PlaceholderPage title="Политика конфиденциальности" />,
      },
      {
        path: "terms",
        element: <PlaceholderPage title="Соглашение" />,
      },
      {
        path: "offer",
        element: <PlaceholderPage title="Договор-оферта" />,
      },
      {
        path: "*",
        element: <PlaceholderPage title="404" description="Страница не найдена" />,
      },
    ],
  },
]);
