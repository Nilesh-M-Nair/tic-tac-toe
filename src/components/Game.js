import React, {useEffect, useState} from 'react';
import Square from "./Square";
import './style.css'

const clearState = [];

function Game() {
    const [gameState, updateGameState] = useState(clearState)
    const [turn, updateTurn] = useState(false)

    const handleOnClick = (index) => {
        let strings = Array.from(gameState);
        if (strings[index])
            return;
        strings[index] = turn ? "X" : "0";
        updateTurn(!turn)
        updateGameState(strings)
    }

    const clearGame = () => {
        updateGameState(clearState)
    }
     //eslint-disable-next-line
    useEffect(() => {
        let winner = checkWinner();
        if (winner) {
            clearGame();
            console.log(winner)
            alert(`Player ${winner} won this round`)
        }
    }, [gameState])

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }

    return (
        <div className="app-header">
          {/* <img src ="https://careerninja.in/wp-content/uploads/2019/02/Logo-unit-_-white-BG-copy-1.png" height="80px" width="120px" /> */}
            <p className="heading-text">
              <span className ="apptext-1">Career</span>
              <span className ="apptext-2">Ninja</span> - Assignment 2</p>
            <div className="row jc-center">
                <Square className="b-bottom-right" onClick={() => handleOnClick(0)} state={gameState[0]}/>
                <Square className="b-bottom-right" onClick={() => handleOnClick(1)} state={gameState[1]}/>
                <Square className="b-bottom" onClick={() => handleOnClick(2)} state={gameState[2]}/>
            </div>
            <div className="row jc-center">
                <Square className="b-bottom-right" onClick={() => handleOnClick(3)} state={gameState[3]}/>
                <Square className="b-bottom-right" onClick={() => handleOnClick(4)} state={gameState[4]}/>
                <Square className="b-bottom" onClick={() => handleOnClick(5)} state={gameState[5]}/>
            </div>
            <div className="row jc-center">
                <Square className="b-right" onClick={() => handleOnClick(6)} state={gameState[6]}/>
                <Square className="b-right" onClick={() => handleOnClick(7)} state={gameState[7]}/>
                <Square onClick={() => handleOnClick(8)} state={gameState[8]}/>
            </div>
            <button className="clear-button" onClick={clearGame}>Reset</button>
        </div>
    );
}

export default Game;
