import React, { useEffect } from 'react';
import './PageOne.css'
import Puzzle from '../../Puzzle/Puzzle';


export default function PageOne() {
    const conf_one = [[1, 2, 3], [4, 5, 6], [7, 0, 8]];
    const conf_two = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];

    return (
        <>
            <div className='tutorial-text-1'>Click on the Tile next to the empty square to move it into the empty space</div>
            <div className='tutorial-modal-body'>
                <Puzzle grid={conf_one} />
                <div className='mouse-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 4.702z" /></svg>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="brown" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
                <Puzzle grid={conf_two} />
            </div>
        </>
    )
}