import type { Offer } from "../../types";
import { ChipFilter } from "./ChipFilter";
import { ProductCard } from "./ProductCard";

interface ProductSectionProps {
  title: string;
  offers: Offer[];
  chips?: readonly string[];
  showAllButton?: boolean;
}

export function ProductSection({
  title,
  offers,
  chips,
  showAllButton = false,
}: ProductSectionProps) {
  return (
    <section className="section">
      <div className={`section__head${showAllButton ? " section__head--between" : ""}`}>
        <h2>{title}</h2>
        {chips ? <ChipFilter chips={chips} /> : null}
        {showAllButton ? (
          <button className="btn btn--ghost" type="button">
            Показать все
          </button>
        ) : null}
      </div>
      <div className="products">
        {offers.map((offer) => (
          <ProductCard key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  );
}
