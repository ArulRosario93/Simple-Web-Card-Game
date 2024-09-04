
const deckOfCards = [
    {
      value: "A",
      count: 1,
      color: "black",
      type: "♠",
    },
    {
      value: "2",
      count: 2,
      color: "black",
      type: "♠",
    },
    {
      value: "3",
      count: 3,
      type: "♠",
      color: "black",
    },
    {
      value: "4",
      count: 4,
      color: "black",
      type: "♠",
    },
    {
      value: "5",
      count: 5,
      type: "♠",
      color: "black",
    },
    {
      value: "6",
      count: 6,
      color: "black",
      type: "♠",
    },
    {
      value: "7",
      count: 7,
      color: "black",
      type: "♠",
    },
    {
      value: "8",
      count: 8,
      color: "black",
      type: "♠",
    },
    {
      value: "9",
      color: "black",
      count: 9,
      type: "♠",
    },
    {
      value: "10",
      count: 10,
      color: "black",
      type: "♠",
    },
    {
      value: "J",
      count: 10,
      color: "black",
      type: "♠",
    },
    {
      value: "Q",
      count: 10,
      color: "black",
      type: "♠",
    },
    {
      value: "K",
      count: 10,
      color: "black",
      type: "♠",
    },
    {
      value: "A",
      count: 1,
      color: "red",
      type: "♥",
    },
    {
      value: "2",
      count: 2,
      color: "red",
      type: "♥",
    },{
      value: "3",
      count: 3,
      type: "♥",
      color: "red",
    },
    {
      value: "4",
      count: 4,
      color: "red",
      type: "♥",
    },
    {
      value: "5",
      count: 5,
      type: "♥",
      color: "red",
    },
    {
      value: "6",
      count: 6,
      color: "red",
      type: "♥",
    },
    {
      value: "7",
      count: 7,
      color: "red",
      type: "♥",
    },
    {
      value: "8",
      count: 8,
      color: "red",
      type: "♥",
    },
    {
      value: "9",
      color: "red",
      count: 9,
      type: "♥",
    },
    {
      value: "10",
      count: 10,
      color: "red",
      type: "♥",
    },
    {
      value: "J",
      count: 10,
      color: "red",
      type: "♥",
    },
    {
      value: "Q",
      count: 10,
      color: "red",
      type: "♥",
    },
    {
      value: "K",
      count: 10,
      color: "red",
      type: "♥",
    },
    {
      value: "A",
      count: 1,
      color: "black",
      type: "♣",
    },
    {
      value: "2",
      count: 2,
      color: "black",
      type: "♣",
    },{
      value: "3",
      count: 3,
      type: "♣",
      color: "black",
    },
    {
      value: "4",
      count: 4,
      color: "black",
      type: "♣",
    },
    {
      value: "5",
      count: 5,
      type: "♣",
      color: "black",
    },
    {
      value: "6",
      count: 6,
      color: "black",
      type: "♣",
    },
    {
      value: "7",
      count: 7,
      color: "black",
      type: "♣",
    },
    {
      value: "8",
      count: 8,
      color: "black",
      type: "♣",
    },
    {
      value: "9",
      color: "black",
      count: 9,
      type: "♣",
    },
    {
      value: "10",
      count: 10,
      color: "black",
      type: "♣",
    },
    {
      value: "J",
      count: 10,
      color: "black",
      type: "♣",
    },
    {
      value: "Q",
      count: 10,
      color: "black",
      type: "♣",
    },
    {
      value: "K",
      count: 10,
      color: "black",
      type: "♣",
    },
    {
      value: "A",
      count: 1,
      color: "red",
      type: "♦",
    },
    {
      value: "2",
      count: 2,
      color: "red",
      type: "♦",
    },{
      value: "3",
      count: 3,
      type: "♦",
      color: "red",
    },
    {
      value: "4",
      count: 4,
      color: "red",
      type: "♦",
    },
    {
      value: "5",
      count: 5,
      type: "♦",
      color: "red",
    },
    {
      value: "6",
      count: 6,
      color: "red",
      type: "♦",
    },
    {
      value: "7",
      count: 7,
      color: "red",
      type: "♦",
    },
    {
      value: "8",
      count: 8,
      color: "red",
      type: "♦",
    },
    {
      value: "9",
      color: "red",
      count: 9,
      type: "♦",
    },
    {
      value: "10",
      count: 10,
      color: "red",
      type: "♦",
    },
    {
      value: "J",
      count: 10,
      color: "red",
      type: "♦",
    },
    {
      value: "Q",
      count: 10,
      color: "red",
      type: "♦",
    },
    {
      value: "K",
      count: 10,
      color: "red",
      type: "♦",
    },
  ];

    const CreateElementCardInnerP = (item, fontSize, className) => {

        const cardInnerP = document.createElement("p");
        cardInnerP.className = "CardInnerP";
        cardInnerP.classList.add(className);
        cardInnerP.innerHTML = item.type;
        cardInnerP.style.fontSize = fontSize;

        console.log(cardInnerP.style.fontSize);

        return cardInnerP;
    }


  const createCardElement = (item) => {

    const fontSize = item.count == 1? "8rem": item.count == 2? "6rem" : item.count < 5? "4rem" : item.count == 5? "3.5rem": item.count == 6? "3rem": item.count == 7? "2.7rem": item.count == 8? "2rem": item.count ==9? "2rem": "1.5rem";

    const display = item.count <= 3 ? "flex" : "grid";

    const gridTemplateAreas = item.count < 4? null : item.count ==4? `"first second" "third fourth"` : item.count == 5? `"first second" "third third" "fourth fifth"`: item.count == 6? `"first second" "third fourth" "fifth sixth"`: item.count == 7? `"first second" "third third" "fourth fifth" "sixth seventh"`: item.count == 8? `"first second" "third third" "fourth fifth" "sixth sixth" "seventh eighth"`: item.count == 9? `"first second" "third fourth" "fifth fifth" "sixth seventh" "eighth ninth"`: `"first second" "third third" "fourth fifth" "sixth seventh" "eighth eighth" "ninth tenth"`;

    // const gridTemplateRows = count < 4? null : count ==4? "auto auto" : count == 5? "auto auto auto" : count == 6? "auto auto auto" : count == 7? "auto auto auto auto" : count == 8? "auto auto auto auto auto" : "auto auto auto auto auto auto";

    const gridTemplateColumns = item.count < 4? null : item.count ==4? "auto auto" : item.count == 5? "auto auto" : item.count == 6? "auto auto" : item.count == 7? "auto auto" : item.count == 8? "auto auto" : "auto auto";

    // Card Container
    const card = document.createElement('div');
    card.className = "Card";
    card.style.color = item.color;

    // Top Number
    const top = document.createElement('h1');
    top.className = "top";
    top.innerHTML = item.value;
    card.appendChild(top);

    // For Covering Space
    const forCoveringSpace = document.createElement('div');
    forCoveringSpace.className = "forCoveringSpace";
    card.appendChild(forCoveringSpace);

    // Card Inner
    const cardInner = document.createElement('div');
    cardInner.className = "CardInner";
    cardInner.style.display = display;
    cardInner.style.gridTemplateAreas = gridTemplateAreas;
    cardInner.style.gridTemplateColumns = gridTemplateColumns;
    cardInner.style.gridTemplateRows = "auto auto";
    Array.from({ length: item.count }).forEach((_, i) => {
        const p = CreateElementCardInnerP(deckOfCards[i], fontSize, `item${i+1}`);
        cardInner.appendChild(p);  // Append each created element
    });
    card.appendChild(cardInner);

    // Bottom
    const bottom = document.createElement('h1');
    bottom.className = "bottom";
    bottom.innerHTML = item.value;
    card.appendChild(bottom);

    return card;
}  

const GridContainer = () => {
    const gridContainer = document.createElement('div');
    gridContainer.className = "grid";
    deckOfCards.forEach((item, index) => {
        if (index > 29) return; // Skip cards beyond index 29
        const cardElement = createCardElement(item);
        gridContainer.appendChild(cardElement);
    });

    const body = document.getElementById("bodyy");
    body.appendChild(gridContainer);
}

document.addEventListener('DOMContentLoaded', GridContainer);