import React, { useState } from "react";

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function DiceRoller() {
  const [dice, setDice] = useState([0, 0]);
  const [rolling, setRolling] = useState(false);

  function rollDice() {
    if (rolling) return;

    setRolling(true);
    window.setTimeout(() => {
      const firstDie = Math.floor(Math.random() * 6);
      const secondDie = Math.floor(Math.random() * 6);
      setDice([firstDie, secondDie]);
      setRolling(false);
    }, 700);
  }

  const total = dice[0] + dice[1] + 2;

  return (
    <main className="page">
      <section className="dice-card" aria-labelledby="page-title">
        <span className="card-icon" aria-hidden="true">✦</span>
        <p className="eyebrow">A SIMPLE DICE GAME</p>
        <h1 id="page-title">Dice Roller</h1>
        <p className="description">Click the button and roll your dice!</p>

        <div className="dice" aria-live="polite" aria-label={`Dice total: ${total}`}>
          {dice.map((value, index) => (
            <span
              className={`die${rolling ? " die--rolling" : ""}`}
              aria-hidden="true"
              key={index}
            >
              {diceFaces[value]}
            </span>
          ))}
        </div>

        <p className="total" aria-live="polite">
          Total <strong>{rolling ? "..." : total}</strong>
        </p>

        <button
          className="roll-button"
          onClick={rollDice}
          disabled={rolling}
          type="button"
        >
          {rolling ? "Rolling..." : "Roll the dice"}
          <span aria-hidden="true">↗</span>
        </button>
        <p className="hint">Good luck!</p>
      </section>
    </main>
  );
}

export default DiceRoller;
