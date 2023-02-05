import React, { FC, ReactElement } from "react";


type ScoreBoardProps = {
    currentScore: number;
    highScore: number;
}

const ScoreBoard: FC<ScoreBoardProps> = ({currentScore, highScore}) : ReactElement => {
    return (
        <div className="scoreboard">
            <div>Current Score: {currentScore}</div>
            <div>Highscore: {highScore}</div>
        </div>
    );
}

export default ScoreBoard;