import type { Review } from "../../types";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="review">
      <header className="review__head">
        <div className="review__user">
          <img src={review.avatar} alt="" />
          <div>
            <strong>{review.user}</strong>
            <div className="stars" aria-label={review.rating.toFixed(1)}>
              <span>★★★★★</span> <b>{review.rating.toFixed(1)}</b>
            </div>
          </div>
        </div>
        <time>{review.date}</time>
      </header>
      <p className="review__text">{review.text}</p>
      <a className="review__product" href="#">
        <img src={review.productImg} alt="" />
        <span>{review.productTitle}</span>
        <span className="price-pill">{review.productPrice}</span>
      </a>
    </article>
  );
}
