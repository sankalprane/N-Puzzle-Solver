import React, { useEffect, useState } from 'react'
import Graph from '../Graph/Graph';
import Puzzle from '../Puzzle/Puzzle';
import Options from '../Options/Options';
import ManualClose from '../Tutorial/Tutorial';
import './HomePage.css';
import { Button, Container } from '@chakra-ui/react'

export default function HomePage() {

  const [configuration, setConfiguration] = useState([[1, 2, 3], [4, 5, 6], [7, 8, 0]]);
  const [tree, setTree] = useState({ name: [[1, 2, 3], [4, 5, 6], [7, 8, 0]] });
  const [algorithm, setAlgorithm] = React.useState('astar')

  useEffect(() => {
    console.log('inside useEffect');
  }, [JSON.stringify(configuration)]);

  function deepCopyArray(oldArray) {
    return oldArray.map(row => row.slice()); //slice creates shallow copy of each row
  }

  function getCoordinatesOfBlank(conf) {
    for (let i = 0; i < conf.length; i++) {
      for (let j = 0; j < conf[i].length; j++) {
        if (conf[i][j] === 0) {
          return [i, j];
        }
      }
    }
  }

  function nextMove(conf, move) {
    let [oldX, oldY] = getCoordinatesOfBlank(conf);
    let newX = oldX, newY = oldY;
    if (move === 'D') {
      newX = oldX + 1;
    } else if (move === 'U') {
      newX = oldX - 1;
    } else if (move === 'L') {
      newY = oldY - 1;
    } else {
      newY = oldY + 1;
    }
    return [oldX, oldY, newX, newY];
  }

  function solve(path) {
    for (let i = 0; i < path.length; i++) {
      let move = path[i]
      setTimeout(() => {
        console.log(move);
        setConfiguration((oldConf) => {
          let [oldX, oldY, newX, newY] = nextMove(oldConf, move);
          console.log(oldX, oldY, newX, newY);
          const newConf = deepCopyArray(oldConf);
          [newConf[newX][newY], newConf[oldX][oldY]] = [newConf[oldX][oldY], newConf[newX][newY]];
          return newConf;
        })
      }, 1000 * i);

    }
  }

  function solvePuzzle() {
    console.log('working??');
    postData().then((res) => {
      console.log(res);
      setTree(res.tree);
      // console.log(this.data);
      solve(res.path);
    });
  }

  async function postData(url, data = { start: configuration }) {
    const response = await fetch(`http://localhost:4000/${algorithm}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }



  return (
    <>
      <nav>N-PUZZLE SOLVER</nav>
      <div className='main-div'>
        <Puzzle grid={configuration} updatePuzzle={setConfiguration} />
        <ManualClose></ManualClose>
        <div className='settings-div'>
          <Options algorithm={algorithm} setAlgorithm={setAlgorithm}></Options>
          <Button onClick={solvePuzzle} colorScheme='teal'>Solve Puzzle!</Button>
        </div>
      </div>
      <div>
        <Graph data={tree}></Graph>
      </div>
    </>
  )
}
