import React from 'react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import './Options.css'

export default function Options({ algorithm, setAlgorithm }) {

    return (
        <div className='options-div'>
            <div className='choose-algo'>Choose Algorithm:</div>
            <RadioGroup onChange={setAlgorithm} value={algorithm}>
                <Stack direction='column'>
                    <Radio value='astar'>A-Star</Radio>
                    <Radio value='bfs'>Breadth First Search</Radio>
                </Stack>
            </RadioGroup>
        </div>
    )
}