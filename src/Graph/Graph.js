import React from 'react';
import Tree from 'react-d3-tree';
import './Graph.css';
import { useCenteredTree } from "../helper";

const containerStyles = {
    width: "100vw",
    height: "100vh"
};

const goal = [[1,2,3],[4,5,6],[7,8,0]]

export default function Graph({data}) {

    const [translate, containerRef] = useCenteredTree();

    const tooltip = document.querySelector("#tooltip");

    const square = document.querySelectorAll(".small-puzzle-square");

    function onNodeMouseOver(e) {
        console.log(e.data.name);
        let array = e.data.name;
        tooltip.style.display = "block";
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (array[i][j] !== 0) {
                    square[i*3+j] = array[i][j];
                    if (square[i*3+j].classList.contains('small-blank-tile'))
                    square[i*3+j].classList.remove('small-blank-tile')
                } else {
                    square[i*3+j] = ''
                    square[i*3+j].classList.add('small-blank-tile')
                }
            }
        }
    }

    function onNodeMouseOut() {
        tooltip.style.display = "none";
    }

    window.onmousemove = function (e) {
        let x = e.clientX;
        let y = e.clientY;
        tooltip.style.top = (y + 20) + 'px';
        tooltip.style.left = (x + 20) + 'px';
    };

    const colorNodes = ({ source, target }, orientation) => {

        const circle_of_nodes = document.querySelectorAll('.rd3t-node > circle')
        for (let circle of circle_of_nodes) {
            circle.setAttribute("fill", "black");
        }

        const circle_of_leaf_nodes = document.querySelectorAll('.rd3t-leaf-node > circle')
        for (let circle of circle_of_leaf_nodes) {
            circle.setAttribute("fill", "black");
        }

        if (JSON.stringify(target.data.name) === JSON.stringify(goal)) {
            const goalNode = document.getElementById(target.data.__rd3t.id);
            setTimeout(() => {
                if (goalNode) {
                    goalNode.firstChild.setAttribute("fill", "green");
                }
            }, 1000)
        }
      };

    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <div id="tree-wrapper" ref={containerRef} style={containerStyles}>
            <div id="tooltip" className='small-puzzle-container'>
                <div className='small-puzzle-row'>
                    <div className='small-puzzle-square'>1</div>
                    <div className='small-puzzle-square'>2</div>
                    <div className='small-puzzle-square'>3</div>
                </div>
                <div className='small-puzzle-row'>
                    <div className='small-puzzle-square'>4</div>
                    <div className='small-puzzle-square'>5</div>
                    <div className='small-puzzle-square'>6</div>
                </div>
                <div className='small-puzzle-row'>
                    <div className='small-puzzle-square'>7</div>
                    <div className='small-puzzle-square'>8</div>
                    <div className='small-puzzle-square'>0</div>
                </div>
            </div>
            <Tree data={data} translate={translate}
            pathFunc={"straight"} orientation={"vertical"} collapsible={false} 
            pathClassFunc={colorNodes}
            onNodeMouseOver={onNodeMouseOver} onNodeMouseOut = {onNodeMouseOut}
            rootNodeClassName="node__root"
            branchNodeClassName="node__branch"
            leafNodeClassName="node__leaf"/>
        </div>
    );
}