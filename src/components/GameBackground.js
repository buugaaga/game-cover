import React, { useState } from 'react'
import styled from '@emotion/styled'

import GameCard from './GameCard'

import bgImage from '../images/background.png'
import taskKings from '../images/task-kings.png'

const GameBox = styled.div`
  height: 350px;
  width: 550px;
  background-color: opacity;
  background-image: url(${bgImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex: column no-wrap;
`


function GameBackground() {

  const [ progress, setProgress ] = useState(10)
  const [ isFull, setIsFull ] = useState(false)

  return (
    <GameBox>
      <GameCard pathImg={taskKings} progress={progress} isFull={isFull} />
    </GameBox>
  )
}

export default GameBackground