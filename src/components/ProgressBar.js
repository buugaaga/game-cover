import React from 'react'
import styled from '@emotion/styled'

const Filling = styled.div`
    height: 100%;
    width: ${ props => props.progress }%;
    background-color: #909B5A;
    border-radius: inherit;
`

const BarContainer = styled.div`
  width: 340px;
  height: 2vh;
  margin-top: 10px;
  border: 2px solid #FFFED1;
  border-radius: 50px;
  background-color: #3B3B38;
`



export default function ProgressBar({progress}) {
  return (
    <BarContainer >
      <Filling progress={progress} />
    </ BarContainer>
  )
}
