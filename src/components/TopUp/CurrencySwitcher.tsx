import type { Currency } from "../../types";

const currencies: Currency[] = ["$", "₸", "₽"];

interface CurrencySwitcherProps {
  value: Currency;
  onChange: (currency: Currency) => void;
}

export function CurrencySwitcher({ value, onChange }: CurrencySwitcherProps) {
  return (
    <div className="currency">
      {currencies.map((c) => (
        <button
          key={c}
          type="button"
          className={value === c ? "is-active" : undefined}
          onClick={() => onChange(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
