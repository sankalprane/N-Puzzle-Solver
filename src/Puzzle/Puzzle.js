import React from 'react';
import './Puzzle.css'

const dir_row = [1, -1, 0, 0];
const dir_col = [0, 0, 1, -1];

export default function Puzzle({ grid, updatePuzzle }) {

    function deepCopyArray(oldArray) {
        return oldArray.map(row => row.slice()); //slice creates shallow copy of each row
    }

    function moveTile(oldX, oldY) {
        console.log('inside moveTile old values', oldX, oldY);
        for (let i = 0; i < 4; i++) {
            let newX = oldX + dir_row[i];
            let newY = oldY + dir_col[i];
            if (newX >= 0 && newY >= 0 && newX < 4 && newY < 4) {
                if (grid[newX][newY] === 0) {
                    console.log('inside moveTile old values', newX, newY);
                    updatePuzzle((oldConf) => {
                        const newConf = deepCopyArray(oldConf);
                        [newConf[newX][newY], newConf[oldX][oldY]] = [newConf[oldX][oldY], newConf[newX][newY]];
                        return newConf;
                    })
                }
            }
        }
    }

    return (
        <div className="puzzle-container">
            {grid.map((row, i) => (
                <div key={i} className="puzzle-row">
                    {row.map((col, j) => (
                        <span key={j} onClick={() => moveTile(i, j)} className="puzzle-square">{col}</span>
                    ))}
                </div>
            ))}
        </div>
    );

}