import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <section className="section" style={{ padding: "48px 0", textAlign: "center" }}>
      <h2>{title}</h2>
      <p className="section__note" style={{ marginTop: 12 }}>
        {description ?? "Страница пока в разработке"}
      </p>
      <Link to="/" className="btn btn--ghost" style={{ marginTop: 24, display: "inline-flex" }}>
        На главную
      </Link>
    </section>
  );
}
