import React from 'react';
import './PageFive.css'

export default function PageFive() {


    return (
        <>
            <div className='tutorial-text-1'> You can <span style={{color: 'brown'}} >ZOOM IN </span>or <span style={{color: 'brown'}} >ZOOM OUT</span> on the graph</div>
            <div className='tutorial-text-1'>The <span style={{color: 'red'}} >Red Node</span> is the start of the Puzzle</div>
            <div className='tutorial-text-1'>The <span style={{color: 'green'}} >Green Node </span>is the goal of the Puzzle</div>

            <div className='tutorial-modal-body'>
                <img className='red-node' src={require('../../Static/Images/redNode.png')} alt="Test" />
                <img className='green-node' src={require('../../Static/Images/greenNode.png')} alt="Test" />

            </div>
        </>
    )
}