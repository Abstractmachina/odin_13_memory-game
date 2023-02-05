import React, { FC, ReactElement, useState } from "react";
import { cloneArray, loadImageSet, shuffle } from "../util";

type BoardProps = {
    addPointHandler: () =>void,
    resetScoreHandler: () => void,
}


const Board: FC<BoardProps> = ({addPointHandler, resetScoreHandler}):ReactElement => {

    const [tiles, setTiles] = useState(loadImageSet());


    function onTileClick(e:any) {
        const selected = tiles.find(t => t.id === e.target.parentNode.id);
        if (selected.isSelected) _endRound();
        else {
            selected.isSelected = true;
            _addPoint();
            _shuffleTiles();
        }
        
    }

    function _addPoint() {
        addPointHandler();
    }

    function _endRound() {
        resetScoreHandler();
        _shuffleTiles();
        _resetAllTiles();
    }

    function _shuffleTiles() {
        const shuffled = shuffle(tiles);
        setTiles(shuffled);
    }

    function _resetAllTiles() {
        const result = cloneArray(tiles);
        result.forEach(element => element.isSelected = false);
        setTiles(result);
    }

    return (
        <div className="board">
            {tiles.map((t) => {
                return (
                    <div 
                    className="tile" 
                    key={t.id} 
                    id={t.id} 
                    onClick={onTileClick}>
                        <img src={t.src} alt={t.alt}/>
                    </div>
                )
            })}
        </div>
    )
} 

export default Board;