import React from "react";

import PlayingCard from "./PlayingCard";
import useAxios from "./hooks/useAxios";

import "./PlayingCardList.css";


const API_BASE_URL = 'https://deckofcardsapi.com'

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard] = useAxios()

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => { addCard(API_BASE_URL, '/api/deck/new/draw/') }}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
