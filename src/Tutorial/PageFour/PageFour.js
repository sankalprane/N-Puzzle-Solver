import React from 'react';
import './PageFour.css'

export default function PageFour() {


    return (
        <>
            <div className='tutorial-text-1'> After clicking <span style={{color: 'brown'}} >Solve Puzzle!</span> watch the puzzle solve itself! And a graph will be generated displaying the search tree</div>
            <div className='tutorial-modal-body'>
            <img className='search-tree-image' src={require('../../Static/Images/searchTree.png')} alt="Test" />
            </div>
        </>
    )
}