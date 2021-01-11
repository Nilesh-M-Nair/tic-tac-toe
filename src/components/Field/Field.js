import React from 'react';
import Square from "../Square";
import './Field.css';

function Field({handleOnClick,gameState}){
    return(
        <div>
            <div className="app-header">
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
        </div>
        </div>
    )
}

export default Field;