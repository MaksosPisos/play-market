import type { CSSProperties } from "react";
import type { ServiceItem } from "../../types";

interface ServiceListProps {
  items: ServiceItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function ServiceList({ items, activeId, onSelect }: ServiceListProps) {
  return (
    <div className="services">
      {items.map((item) => {
        const ringStyle = { "--ring": item.ring } as CSSProperties;

        return (
          <button
            key={item.id}
            className={`service${item.more ? " service--more" : ""}${
              activeId === item.id ? " is-active" : ""
            }`}
            type="button"
            onClick={() => onSelect(item.id)}
          >
            {item.more ? (
              <span
                className="service__icon service__icon--more"
                style={ringStyle}
                aria-hidden="true"
              >
                <span className="service__more-glyph" />
              </span>
            ) : (
              <span className="service__icon" style={ringStyle}>
                <img src={item.icon} alt="" />
              </span>
            )}
            <span>{item.name}</span>
          </button>
        );
      })}
    </div>
  );
}
