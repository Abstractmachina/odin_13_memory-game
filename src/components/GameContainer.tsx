import React, {FC, ReactElement, useState} from 'react';
import Board from './Board';
import ScoreBoard from './ScoreBoard';



const GameContainer: FC = (): ReactElement => {


    const [score, setScore] = useState(0);
    const [highscore, setHighscore] = useState(0);


    function handleAddScore() {
        let newScore = score;
        newScore++;
        setScore(newScore);
        if (newScore > highscore) {
            let newHighscore = highscore;
            newHighscore++;
            setHighscore(newHighscore);
        }
    }

    function resetScore() {
        setScore(0);
    }

    return (
        <div className='gameContainer'>
            <ScoreBoard currentScore={score} highScore={highscore}/>
            <Board addPointHandler={handleAddScore} resetScoreHandler ={resetScore}/>
        </div>
    );
}

export default GameContainer;