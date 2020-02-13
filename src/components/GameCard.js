import React from 'react'
import styled from '@emotion/styled'

import ProgressBar from './ProgressBar'
import Shirt from './shirt'

const CardConteiner = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  height: 70px;
  width: 100%;
  padding: 20px;
 
  > div:nth-of-type(1) {
    flex: 1;
    height: 60px;
    img {
      height: 100%;
      transform: rotate(30deg);
    }
  }
  div:nth-of-type(2) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    flex: 3;
    p { 
      display: block;
      padding-right: 80px;
    }
  }
`

export default function GameCard({ pathImg, progress, isFull, phrasa }) {
  return (
    <CardConteiner>
      <div>
        <img src={pathImg} alt="icon-game"></img>
      </div>
      <div>
        <p><b>{phrasa}</b></p>
        <ProgressBar progress={progress} />
      </div>
      <Shirt isFull={isFull} />
    </CardConteiner>
  )
}
