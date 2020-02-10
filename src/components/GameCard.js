import React from 'react'
import styled from '@emotion/styled'

const CardConteiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  margin: 30px;
  div:first-child {
    flex: 1;
    img {
      display: block;
      height: auto;
    }
  }
  div:nth-child(2) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    flex: 3;
    p { 
      display: block;
    }
    progress {
      width: 220px;
      height: 20px;
      border: 2px solid #fff;
      border-radius: 20px;
      background-color: #fff;
    }
  }
  button {
    display: block;
    flex: 1;
  }
`

export default function GameCard({pathImg, progress, isFull}) {
  return (
    <CardConteiner>
      <div>
        <img src={pathImg} alt="icon-game"></img>
      </div>
      <div>
        <p></p>
        <progress value={progress} max="100" value={progress} >{progress}</progress>
      </div>
      <div>
      { isFull ? <button>поставить рубашку</button> : null }
      </div>
    </CardConteiner>
  )
}
