import React, { useEffect } from 'react';
import Puzzle from '../../Puzzle/Puzzle';

export default function PageOne({ previousPage }) {

    const conf = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];

    return (
        <>
            <div className='tutorial-text-1'>The goal of the puzzle is to arrange the numbers in ascending order as shown below</div>
            <div className='tutorial-modal-body'>
                <Puzzle grid={conf} />
            </div>
        </>
    )
}