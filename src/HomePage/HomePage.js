import React, { useEffect, useState } from 'react'
import Cell from '../Cell/Cell'
import './HomePage.css';

export default function HomePage() {

  const [configuration, setConfiguration] = useState([[5, 1, 2, 3], [9, 6, 7, 4], [13, 10, 11, 8], [0, 14, 15, 12]]);
  const Grid = [];
  const dir_row = [1, -1, 0, 0];
  const dir_col = [0, 0, 1, -1];

  useEffect(() => {
    console.log('inside useEffect');
  }, [JSON.stringify(configuration)]);

  function moveTile(oldX, oldY) {
    console.log('inside moveTile old values', oldX, oldY);
    for (let i = 0; i < 4; i++) {
      let newX = oldX + dir_row[i];
      let newY = oldY + dir_col[i];
      if ( newX >= 0 && newY >= 0 && newX < 4 && newY < 4 ) {
        if ( configuration[newX][newY] === 0 ) {
          console.log('inside moveTile old values', newX, newY);
          setConfiguration((oldConf) => {
            const newConf = deepCopyArray(oldConf);
            let temp = newConf[newX][newY];
            newConf[newX][newY] = newConf[oldX][oldY];
            newConf[oldX][oldY] = temp;
            return newConf;
          })
        }
      }
    }
  }

  for (let i = 0; i < 4; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
      row.push(<div onClick={() => moveTile(i, j)} key={configuration[i][j].toString()} className='cell'>
        <Cell list = {configuration[i][j]}/>
      </div>)
    }
    Grid.push(<div key={i} className="row">{row}</div>);
  }

  function deepCopyArray(oldArray) {
    const newArray = [];
    for ( let row of oldArray ) {
      const newRow = [...row];
      newArray.push(newRow);
    }
    return newArray;
  }

  function getCoordinatesOfBlank(conf) {
    let x, y;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (conf[i][j] === 0) {
          x = i;
          y = j;
        }
      }
    }
    return [x, y];
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
        let temp = newConf[newX][newY];
        newConf[newX][newY] = newConf[oldX][oldY];
        newConf[oldX][oldY] = temp;
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
    const response = await fetch('http://localhost:4000/bfs/', {
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
      {Grid}
      <button onClick={solvePuzzle}>Click ME!</button>
    </>
  )
}
