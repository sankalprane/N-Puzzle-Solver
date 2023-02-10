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

    function onNodeMouseOver(e) {
        console.log(e);
        tooltip.style.display = "block";
        // tooltip.textContent = 'node'
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
            <div id="tooltip">
                <div>[1,2,3]</div>
                <div>[4,5,6]</div>
                <div>[7,8,9]</div>
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