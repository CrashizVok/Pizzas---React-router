import { pizzas } from "../data/pizzas.js";
import PizzaCard from "../components/PizzaCard.jsx";
import { useState } from "react";

const filters = ["all", "vegetarian", "spicy"];

export default function Pizzas() {
  const [state, setState] = useState("all");

  const visPizzas =
    state === "all" ? pizzas : pizzas.filter((asd) => asd.tags.includes(state));

  return (
    <>
      <h1>Pick your pizza</h1>
      <div className="filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`chip ${f == state ? "active" : ""}`}
            onClick={() => {
              setState(f);
            }}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid">
        {visPizzas.map((p) => (
          <PizzaCard key={p.id} pizza={p} />
        ))}
      </div>
    </>
  );
}
