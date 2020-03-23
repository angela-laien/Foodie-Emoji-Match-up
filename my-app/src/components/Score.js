import React from 'react';

export default function Score(props) {
    return(
        <div className="score">
            {props.gameWon ? (
                <h2 className="score-board-score winner">
                    🥳 YOU WIN!
                </h2>
                ) : (
                    <h2 className="score-board-score">
                        SCORE: {props.score}
                    </h2>
            )}
        </div>
    );
}