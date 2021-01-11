import React, {useEffect, useState} from 'react';
import Card from '../Card/Card'
import './Game.css'

const clearState = [];

function Game(){

    const [gameState, updateGameState] = useState(clearState)
    const [turn, updateTurn] = useState(false)
    const [xUserWon, setXUserWon] = useState(0);
    const [yUserWon, setYUserWon] = useState(0);

    const handleOnClick = (index) => {
        let strings = Array.from(gameState);
        if (strings[index])
            return;
        strings[index] = turn ? "X" : "O";
        updateTurn(!turn)
        updateGameState(strings)
    }

    const clearGame = () => {
        updateGameState(clearState);
    }

     //eslint-disable-next-line
    useEffect(() => {
        let winner = checkWinner();
        if (winner) {
            clearGame();
            winner ==='X'? setXUserWon(xUserWon+1):setYUserWon(yUserWon+1)
            console.log('winner',winner)
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

    return(
        <div className="game">
            <p className="heading-text">
              <span className ="apptext-1">Career</span>
              <span className ="apptext-2">Ninja</span> - Assignment 2
            </p>
            <span className='scorecard'>
                <span className='scorecard__shadow'>
                <span className='score' >X won - <span className='color1'>{xUserWon}</span></span>
                <span className='score'>Y won - <span className='color2'>{yUserWon}</span></span>
                </span>
            </span>
            <Card handleOnClick ={handleOnClick} gameState={gameState}/>
            <button className="clear-button" onClick={clearGame}>Reset</button>
        </div>
    )
}

export default Game;