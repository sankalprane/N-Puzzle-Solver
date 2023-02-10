import React from 'react';
import Tree from 'react-d3-tree';
import './Graph.css';
import { useCenteredTree } from "../helper";

const containerStyles = {
    width: "100vw",
    height: "100vh"
};

export default function Graph({data}) {

    const [translate, containerRef] = useCenteredTree();

    function display(e) {
        console.log(e);
    }

    function test() {
        console.log(data);
        return JSON.stringify(data)
    }

    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <div id="treeWrapper" ref={containerRef} style={containerStyles}>
            <Tree data={data} onNodeMouseOver={display} translate={translate}
            pathFunc={"straight"} orientation={"vertical"} collapsible={true} 
            rootNodeClassName="node__root"
            branchNodeClassName="node__branch"
            leafNodeClassName="node__leaf"/>
        </div>
    );
}