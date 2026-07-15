import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { NotificationsList } from "@/components/Notifications/NotificationsList";

export function Layout() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <NotificationsList />
    </div>
  );
}
