import React from 'react';
import Tree from 'react-d3-tree';
import './Graph.css';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
    name: 'CEO',
    children: [
        {
            name: 'Manager',
            attributes: {
                department: 'Production',
            },
            children: [
                {
                    name: 'Foreman',
                    attributes: {
                        department: 'Fabrication',
                    },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
                {
                    name: 'Foreman',
                    attributes: {
                        department: 'Assembly',
                    },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
            ],
        },
    ],
};


export default function Graph() {

    function display(e) {
        console.log(e);
    }

    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <div id="treeWrapper" style={{ width: '100em', height: '100em' }}>
            <Tree data={orgChart} onNodeMouseOver={display} 
            pathFunc={"straight"} orientation={"vertical"} collapsible={false} 
            rootNodeClassName="node__root"
            branchNodeClassName="node__branch"
            leafNodeClassName="node__leaf"/>
        </div>
    );
}