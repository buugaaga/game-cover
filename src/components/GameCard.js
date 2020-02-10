import React from 'react'
import styled from '@emotion/styled'

import ProgressBar from './ProgressBar'

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
  div:nth-of-type(3) {
    flex: 1;
    button {
      height: 30px;
      border-radius: 10px;
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
      <div>
      { isFull ? <button>поставить рубашку</button> : null }
      </div>
    </CardConteiner>
  )
}
