import React, { useEffect, useState } from 'react'
import Puzzle from '../Puzzle/Puzzle';
import './HomePage.css';

export default function HomePage() {

  const [configuration, setConfiguration] = useState([[1, 2, 3], [4, 5, 6], [7, 8, 0]]);

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
    for (let i =0; i < path.length; i++) {
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
      solve(res.path);
    });
  }

  async function postData(url, data = { start: configuration }) {
    const response = await fetch('http://localhost:4000/astar/', {
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
      <Puzzle grid={configuration} updatePuzzle={setConfiguration}/>
      <button onClick={solvePuzzle}>Solve Puzzle!</button>
    </>
  )
}
