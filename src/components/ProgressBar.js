import React from 'react'
import styled from '@emotion/styled'

// прогресс бар сделал с помощью двух div и удобным методом emotion/styled
const BarContainer = styled.div`
  width: 320px;
  height: 2vh;
  margin-top: 10px;
  border: 2px solid #FFFED1;
  border-radius: 50px;
  background-color: #3B3B38;
`

const Filling = styled.div`
    height: 100%;
    width: ${ props => props.progress || 0 }%;
    background-color: #909B5A;
    border-radius: inherit;
`

export default function ProgressBar({progress}) {
  return (
    <BarContainer>
      <Filling progress={progress} data-testid='progressTest'/>
    </ BarContainer>
  )
}
