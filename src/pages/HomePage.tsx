import { Hero } from "../components/Hero/Hero";
import { ProductSection } from "../components/Products/ProductSection";
import { ReviewsSection } from "../components/Reviews/ReviewsSection";
import { TopUpCard } from "../components/TopUp/TopUpCard";
import { offers, productChips } from "../data/offers";
import { reviews } from "../data/reviews";

export function HomePage() {
  return (
    <>
      <Hero />
      <TopUpCard />
      <ProductSection title="Популярные товары" offers={offers} chips={productChips} />
      <ProductSection title="Рекомендованные товары" offers={offers} showAllButton />
      <ProductSection title="Другие товары" offers={offers} showAllButton />
      <ReviewsSection reviews={reviews} />
    </>
  );
}
