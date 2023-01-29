import React, { useEffect, useState } from 'react'
import Cell from '../Cell/Cell'
import './HomePage.css';

export default function HomePage() {

  const [configuration, setConfiguration] = useState([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]]);
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

  function swapNumbers() {
    console.log('working??');
    setConfiguration((oldConf) => {
      const newConf = deepCopyArray(oldConf)
      newConf[3][3] = Math.floor(Math.random() * 100) + 1;
      return newConf;
    })
    console.log(configuration.toString());
  }

  return (
    <>
      {Grid}
      <button onClick={swapNumbers}>Click ME!</button>
    </>
  )
}
