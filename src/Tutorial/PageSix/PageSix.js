import React from 'react';
import './PageSix.css'

export default function PageSix() {


    return (
        <>
            <div className='tutorial-text-1'> You can <span style={{color: 'brown'}} >HOVER </span> on any node to check the state of the Puzzle at that node</div>

            <div className='tutorial-modal-body'>
                <img className='hover-node' src={require('../../Static/Images/hoverNode.png')} alt="Test" />
                <div className='mouse-pointer-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="black" fill="white" viewBox="0 0 24 24"><path d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 4.702z" /></svg>
                </div>
            </div>
        </>
    )
}