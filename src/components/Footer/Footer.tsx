import { Link } from "react-router-dom";

const navLinks = [
  { label: "Стать продавцом", to: "/seller" },
  { label: "Бонусы", to: "/bonuses" },
  { label: "Поддержка", to: "/support" },
  { label: "Гарантии", to: "/guarantees" },
  { label: "Отзывы", to: "/reviews" },
];

const legalLinks = [
  { label: "Политика конфиденциальности", to: "/privacy" },
  { label: "Соглашение", to: "/terms" },
  { label: "Договор-оферта", to: "/offer" },
];

const socials = [
  { label: "VK", src: "/assets/social-vk.png", w: 18, h: 10 },
  { label: "Telegram", src: "/assets/social-telegram.png", w: 18, h: 16 },
  { label: "TikTok", src: "/assets/social-tiktok.png", w: 14, h: 17 },
  { label: "YouTube", src: "/assets/social-youtube.png", w: 18, h: 18 },
];

export function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="footer__media">
        <div className="footer__social">
          {socials.map((s) => (
            <a key={s.label} href="#" aria-label={s.label}>
              <img src={s.src} alt="" width={s.w} height={s.h} />
            </a>
          ))}
        </div>
        <div className="payments">
          <span className="pay visa">VISA</span>
          <span className="pay mir">мир</span>
          <span className="pay mc" aria-label="Mastercard" />
        </div>
      </div>

      <div className="footer__bottom">
        {legalLinks.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
