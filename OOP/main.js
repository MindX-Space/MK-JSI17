// function a() {
//   let num = 100;
//   console.log(num);
// }

// a();

const test = document.getElementById("test");

import cards from "./data/cards";

cards.map(
  (card) =>
    (innerHTML = (
      <div>
        <h1>{card.name}</h1>
        <p>{card.description}</p>
      </div>
    ))
);
