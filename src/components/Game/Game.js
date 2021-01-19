import React, {useEffect, useState} from 'react';
import Card from '../Card/Card'
import Select from '../TestGame/Select'
import GameSetting from '../TestGame/GameSetting'
import './Game.css'

const clearState = [];

function Game(){

    const [gameState, updateGameState] = useState(clearState)
    const [turn, updateTurn] = useState(false)
    const [xUserScore, setXUserScore] = useState(0);
    const [yUserScore, setYUserScore] = useState(0);

    const player1 = 'Alex';
    const player2 = 'AI';

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
            winner ==='X'? setXUserScore(xUserScore+1):setYUserScore(yUserScore+1)
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
            <Select/>
            {/* <p className="heading-text">
              <span className ="apptext-1">Career</span>
              <span className ="apptext-2">Ninja</span> - Assignment 2
            </p> */}
            <span className='scorecard'>
                <span className='score' >{player1? player1 :'X won'}  </span>
                <span className='scorecard__shadow'>
                <span className='color1'>{xUserScore}</span> - <span className='color2'>{yUserScore}</span>
                </span>
                <span className='score'>{player2? player2 :'Y won'}</span>
            </span>
            <Card handleOnClick ={handleOnClick} gameState={gameState}/>
            <span className="setting__icon" onClick={clearGame}> <GameSetting/></span>
           
            {/* <button className="clear-button" onClick={clearGame}><Setting/></button> */}
        </div>
    )
}

export default Game;