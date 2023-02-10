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

    function display(e) {
        // console.log(JSON.stringify(e.source.data));
    }

    const getDynamicPathClass = ({ source, target }, orientation) => {

        // console.log('every node',target);

        const circle_of_nodes = document.querySelectorAll('.rd3t-node > circle')
        // console.log('circles', circle_of_nodes);
        for (let circle of circle_of_nodes) {
            // console.log('circle', circle)
            circle.setAttribute("fill", "black");
        }

        const circle_of_leaf_nodes = document.querySelectorAll('.rd3t-leaf-node > circle')
        // console.log('circles2', circle_of_leaf_nodes);
        for (let circle of circle_of_leaf_nodes) {
            // console.log('circle', circle)
            circle.setAttribute("fill", "black");
        }

        if (JSON.stringify(target.data.name) === JSON.stringify(goal)) {
            console.log('goal node',target);

            const goalNode = document.getElementById(target.data.__rd3t.id);
            console.log('goalNode', goalNode);
            setTimeout(() => {
                if (goalNode) {
                    goalNode.firstChild.setAttribute("fill", "green");
                }
                
            }, 1000)
        }
      };

    function test() {
        console.log(data);
        return JSON.stringify(data)
    }

    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <div id="treeWrapper" ref={containerRef} style={containerStyles}>
            <Tree data={data} onNodeMouseOver={display} translate={translate}
            pathFunc={"straight"} orientation={"vertical"} collapsible={true} 
            pathClassFunc={getDynamicPathClass}
            rootNodeClassName="node__root"
            branchNodeClassName="node__branch"
            leafNodeClassName="node__leaf"/>
        </div>
    );
}