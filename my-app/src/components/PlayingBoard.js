import React from "react";
import Card from "./Card";

export default function PlayingBoard(props) {
    return (
        <div className="board">
            {props.cards.map(card => {
                return <Card card={card} flipCard={props.flipCard} key={card.id}/>
            })}
        </div>
    );
}