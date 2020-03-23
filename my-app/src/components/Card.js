import React from "react";

export default function Card(props) {
    return (
        <div 
            className="card" 
            onClick={() => {
                props.flipCard(props.card.id);
            }}
        >
            <div 
                className="card-inner"
                style={{transform:props.card.flipped? "rotateY(180deg)" : null}}
            >
                <div className="card-back">
                    {props.card.value}
                </div>
                <div className="card-front">
                    💚 
                </div>
            </div>
        </div>
    );
}