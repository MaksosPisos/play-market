import type { Review } from "../../types";
import { ReviewCard } from "./ReviewCard";

interface ReviewsSectionProps {
  reviews: Review[];
}

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section className="section reviews-section">
      <div className="section__head section__head--between">
        <div>
          <h2>Последние отзывы</h2>
          <p className="section__note">Все отзывы взяты с независимой площадки</p>
        </div>
        <button className="btn btn--ghost" type="button">
          Показать все
        </button>
      </div>
      <div className="reviews">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
