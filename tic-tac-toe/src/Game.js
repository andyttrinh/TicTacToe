import { useState } from 'react';
import './Game.css' 
import Cell from './Cell.js'

function checkWinner(table) {
    // check horizontally
    for (let i = 0; i < 3; ++i) {
        let winner = true;
        for (let j = 1; j < 3; ++j) {
            if (table[i][j] !== table[i][j - 1] || table[i][j] === '') {
                winner = false;
                break;
            }
        }
        if (winner) return true;
    }

    // check vertically
    for (let i = 0; i < 3; ++i) {
        let winner = true;
        for (let j = 1; j < 3; ++j) {
            if (table[j][i] !== table[j - 1][i] || table[j][i] === '') {
                winner = false;
                break;
            }
        }
        if (winner) return true;
    }

    // check diagonal
    if (table[0][0] === table[1][1] && table[1][1] === table[2][2] && table[0][0] !== '') return true;
    if (table[2][0] === table[1][1] && table[1][1] === table[0][2] && table[2][0] !=='') return true;


}


export default function Game() {
    const tempTable = [];
    for (let i = 0; i < 3; ++i) tempTable.push(['','','']);
    const [gameInfo, editGameInfo] = useState({player:'x', table:tempTable});
    const {player, table} = gameInfo;
    const childProps = {table: table, player: player, handler: editGameInfo,};
    
    // check winner
    const finished = checkWinner(table);
    

    return (
        <div>
            <h1>{finished ? 'Winner!' : 'Tic-Tac-Toe'}</h1>
            <div className={"game-board"} >
                <Cell row = {0} col = {0} {...childProps}/>
                <Cell row = {0} col = {1} {...childProps}/>
                <Cell row = {0} col = {2} {...childProps}/>
                <Cell row = {1} col = {0} {...childProps}/>
                <Cell row = {1} col = {1} {...childProps}/>
                <Cell row = {1} col = {2} {...childProps}/>
                <Cell row = {2} col = {0} {...childProps}/>
                <Cell row = {2} col = {1} {...childProps}/>
                <Cell row = {2} col = {2} {...childProps}/>
            </div>
        </div>
    )
}