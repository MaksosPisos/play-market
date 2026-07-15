import { useState } from "react";

interface ChipFilterProps {
  chips: readonly string[];
  defaultChip?: string;
}

export function ChipFilter({ chips, defaultChip }: ChipFilterProps) {
  const [active, setActive] = useState(defaultChip ?? chips[0]);

  return (
    <div className="chips">
      {chips.map((chip) => (
        <button
          key={chip}
          className={`chip${active === chip ? " is-active" : ""}`}
          type="button"
          onClick={() => setActive(chip)}
        >
          {chip}
        </button>
      ))}
    </div>
  );
}
