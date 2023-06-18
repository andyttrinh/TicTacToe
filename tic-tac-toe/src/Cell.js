// import { useState } from 'react'; 

export default function Cell(props) {
    const {row, col, table, player} = props;
    function clickedCell(row, col) {
        // change player
        let tempPlayer = player === 'x' ? 'o' : 'x';

        // deep copy array
        const temp = []
        for (let i = 0; i < table.length; ++i) {
            const tempArr = []
            for (let j = 0; j < table[0].length; ++j) {
                tempArr.push(table[i][j]);
            }
            temp.push([...tempArr]);
        }
        temp[row][col] = player;
        props.handler({player: tempPlayer, table:temp});
        console.log('clicked');
    }

    return (
        <div className="box" onClick={() => clickedCell(row, col)}>{table[row][col]}</div>
    )
}