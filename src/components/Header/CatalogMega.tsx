import type { RefObject } from "react";
import type { CatalogCategory, CatalogColumn } from "../../types";

interface CatalogMegaProps {
  id: string;
  open: boolean;
  megaRef: RefObject<HTMLDivElement | null>;
  categories: CatalogCategory[];
  columns: CatalogColumn[];
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export function CatalogMega({
  id,
  open,
  megaRef,
  categories,
  columns,
  activeCategory,
  onCategoryChange,
}: CatalogMegaProps) {
  return (
    <div
      ref={megaRef}
      className={`mega${open ? " is-open" : ""}`}
      id={id}
      aria-hidden={!open}
    >
      <div className="mega__inner">
        <aside className="mega__side">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`mega__cat${activeCategory === cat.id ? " is-active" : ""}`}
              type="button"
              onClick={() => onCategoryChange(cat.id)}
            >
              <span>{cat.title}</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d="M7 4.5 11.5 9 7 13.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ))}
        </aside>

        <div className="mega__grid">
          {columns.map((col) => (
            <div className="mega__col" key={col.title}>
              <h3>
                {col.icon ? <img src={col.icon} alt="" /> : null}
                {col.title}
              </h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
