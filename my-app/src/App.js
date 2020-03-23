import React, {useState, useEffect} from "react";
import "./App.css";

import cardData from "./data";

import PlayingBoard from "./components/PlayingBoard";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [cards, setCards] = useState(cardData);
  const [currentSelected, setCurrentSelected] =useState([]);
  const [gameWon,setGameWon] = useState(false);
  const [score, setScore] = useState(0);

  /* Using useEffect, we wait until two cards have 
     been flipped over. Then we check to see if they match */
  useEffect(() => { 
    if (currentSelected.length === 2) {
      setTimeout(checkCards, 500);
    }
  },[currentSelected]);

  // This method will flip the cards over
  const flipCard = id => {
    const newCardData = cards.map(card => {
      if (card.id === id && !card.flipped) {
        const newCard = {...card, flipped: true};
        setCurrentSelected([...currentSelected, newCard]);
        return newCard;
      } else {
        return card;
      }
    });
    setCards(newCardData);
  }

  const checkCards = () => {
    const [firstCard, secondCard] = currentSelected;
    if (firstCard.value === secondCard.value) {
      /* If they are a match, the score is incremented and 
            we will check to see if the player has won. */
      setScore(score + 20);
      checkScore();
    } else {
      /* If the cards do not match, we flip them both back over */
      const newCard = cards.map(card => {
        if (card.id === firstCard.id || card.id === secondCard.id)
        {
          const newCard = {...card, flipped: false};
          return newCard;
        } else {
          return card;
        }
      });
      setCards(newCard);
    }
    setCurrentSelected([]);
  }
  /* Checks to see if all cards have been flipped over, 
      if they have, the player has won! */
  const checkScore = () => {
    let hasGameBeenWon = true;
    cards.forEach(card => {
      if (!card.flipped) {
        hasGameBeenWon = false;
      }
    });
    setGameWon(hasGameBeenWon);
  };

  return (
    <div className="App">
      <h1>Foodie Emoji Match Up!</h1>
      <ScoreBoard gameWon={gameWon} score={score} />
      <PlayingBoard cards={cards} flipCard={flipCard} />
    </div>
  );
}

export default App;
