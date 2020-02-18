import React from 'react'
import styled from '@emotion/styled'

import ProgressBar from './ProgressBar'
import Shirt from './shirt'

const CardConteiner = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: start;
  box-sizing: border-box;
  margin: 0;
  height: 140px;
  width: 100%;
  padding: 10px 20px;
`

const Img = styled.img`
  height: 80px;
  width: 65px;
  margin: 0 20px;
  transform: rotate(15deg);
`

const TextAndProgressContainer = styled.div`
  flex: 1 1 70%;
  p {
    font-size: 1.2rem;
    width: 300px;
  }
`

function GameCard({ pathImg, progress, isFull, setClosed, phrasa }) {
  return (
    <CardConteiner>
      <Img src={pathImg} alt="icon-game" />
      <TextAndProgressContainer>
        <p><b>{phrasa}</b></p>
        <ProgressBar progress={progress} />
      </TextAndProgressContainer>
      <Shirt isFull={isFull} setClosed={setClosed} />
    </CardConteiner>
  )
}

export default GameCard
