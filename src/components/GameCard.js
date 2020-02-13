import React from 'react'
import styled from '@emotion/styled'

import ProgressBar from './ProgressBar'
import Shirt from './shirt'

const CardConteiner = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  margin: 0;
  height: 70px;
  width: 100%;
  padding: 12px 30px;
  > div:nth-of-type(1) {
    flex: 1;
    height: 100%;
    img {
      height: 100%;
      width: 100%;
      transform: rotate(20deg);
    }
  }
  div:nth-of-type(2) {
    padding-left: 20px;
    padding-top: 0px;
    flex-flow: column nowrap;
    flex: 3;
    p { 
      display: inline;
      padding-right: 20px;
      padding-bottom: 20px;
    }
  }
`

export default function GameCard({ pathImg, progress, isFull, setClosed, phrasa }) {
  return (
    <CardConteiner>
      <div>
        <img src={pathImg} alt="icon-game"></img>
      </div>
      <div>
        <p><b>{phrasa}</b></p>
        <ProgressBar progress={progress} />
      </div>
      <Shirt isFull={isFull} setClosed={setClosed} />
    </CardConteiner>
  )
}
