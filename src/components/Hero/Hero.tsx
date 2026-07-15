import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [1, 2, 3, 4, 5, 6];

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__frame">
        <Swiper
          className="hero-swiper"
          modules={[Autoplay, Navigation, Pagination]}
          loop
          speed={600}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            el: ".hero-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
          }}
        >
          {slides.map((n) => (
            <SwiperSlide key={n} className={`hero-slide hero-slide--${n}`} />
          ))}
        </Swiper>

        <div className="hero__notch" aria-hidden="true" />

        <div className="hero__nav">
          <button type="button" className="hero-prev" aria-label="Предыдущий слайд">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path
                d="M13.5 5.5 8 11l5.5 5.5"
                stroke="#1F2937"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button type="button" className="hero-next" aria-label="Следующий слайд">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path
                d="M8.5 5.5 14 11l-5.5 5.5"
                stroke="#1F2937"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="swiper-pagination hero-pagination" />
      </div>
    </section>
  );
}
