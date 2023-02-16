import React from 'react';
import './PageThree.css'

export default function PageThree() {


    return (
        <>
            <div className='tutorial-text-1'>To solve the puzzle using Artificial Intelligence, choose the algorithm and click on <span style={{color: 'brown'}} >Solve Puzzle!</span></div>
            <div className='tutorial-modal-body'>
            <img className='options-image' src={require('../../Static/Images/options.png')} alt="Test" />
            </div>
        </>
    )
}