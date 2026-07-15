import { useEffect, useId, useRef, useState } from "react";
import { catalogCategories, catalogColumns } from "../../data/catalog";
import { CatalogMega } from "./CatalogMega";
import { SearchBar } from "./SearchBar";

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(catalogCategories[0].id);
  const catalogId = useId();
  const btnRef = useRef<HTMLButtonElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        megaRef.current?.contains(target) ||
        btnRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="header">
      <div className="header__inner">
        <button
          ref={btnRef}
          className="btn btn--catalog"
          type="button"
          aria-expanded={open}
          aria-controls={catalogId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="catalog-icon" aria-hidden="true">
            <i /><i /><i /><i />
          </span>
          Каталог
        </button>

        <SearchBar />

        <div className="header__actions">
          <button className="cart-btn" type="button" aria-label="Корзина">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M3.5 5h1.4l1.2 11.2a2 2 0 0 0 2 1.8h8.6a2 2 0 0 0 2-1.7L20 8.5H7.2"
                stroke="#1F2937"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="20" r="1.4" fill="#1F2937" />
              <circle cx="17" cy="20" r="1.4" fill="#1F2937" />
            </svg>
          </button>

          <button className="profile" type="button" aria-label="Профиль">
            <img src="/assets/profile.png" alt="" width={44} height={44} />
          </button>
        </div>
      </div>

      <CatalogMega
        id={catalogId}
        open={open}
        megaRef={megaRef}
        categories={catalogCategories}
        columns={catalogColumns}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
    </header>
  );
}
