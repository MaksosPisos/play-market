import { useState, type CSSProperties } from "react";
import { observer } from "mobx-react-lite";
import { services } from "../../data/services";
import type { Currency } from "../../types";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { ServiceList } from "./ServiceList";
import { cartStore } from "../../store/cart";

export const TopUpCard = observer(function TopUpCard(){
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);
  const [currency, setCurrency] = useState<Currency>("$");
  const thumbStyle = { "--ring": "#1482b3" } as CSSProperties;

  return (
    <section className="topup-card">
      <ServiceList
        items={services}
        activeId={activeServiceId}
        onSelect={setActiveServiceId}
      />

      <div className="topup">
        <div className="topup__app">
          <span className="service__icon topup__thumb" style={thumbStyle}>
            <img src="/assets/steam.png" alt="" />
          </span>
          <div className="topup__meta">
            <div className="topup__title-row">
              <strong>Пополнение Steam</strong>
              <span className="badge-green">5%</span>
            </div>
            <button className="promo-link" type="button">
              Ввести промокод
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M3 4.5 6 8l3-3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <label className="field">
          <span className="field__icon">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="5.8" r="3.2" fill="#8A94A6" />
              <rect x="3.5" y="12.2" width="13" height="5.6" rx="2.8" fill="#8A94A6" />
            </svg>
          </span>
          <input type="text" placeholder="Логин Steam" />
          <span className="field__hint" title="Подсказка" aria-label="Подсказка">
            <img src="/assets/hint.png" alt="" width={20} height={20} />
          </span>
        </label>

        <div className="field field--amount">
          <div className="field--amount__left">
            <span className="field__icon">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="7.25" stroke="#8A94A6" strokeWidth="1.5" />
                <path
                  d="M10 5.5v9M7.5 8.2c.6-.7 1.5-1 2.5-1 1.4 0 2.5.7 2.5 2s-1.1 2-2.5 2c-1.4 0-2.5.7-2.5 2 .1.9.9 1.5 2.2 1.6"
                  stroke="#8A94A6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div>
              <span className="field__label">Сумма</span>
              <strong>{cartStore.totalPrice}</strong>
            </div>
          </div>
          <CurrencySwitcher value={currency} onChange={setCurrency} />
        </div>

        <button className="btn btn--pay" type="button">
          Оплатить {cartStore.totalPrice}
        </button>
      </div>
    </section>
  );
})
