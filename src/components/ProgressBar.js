import React from 'react'
import styled from '@emotion/styled'

const BarContainer = styled.div`
  width: 20vw;
  height: 2vh;
  margin-top: 10px;
  border: 2px solid #ff9;
  border-radius: 50px;
  background-color: grey;
  > div {
    height: 100%;
    width: ${ props => props.progress }%;
    background-color: #99bb99;
    border-radius: inherit;
  }
`

export default function ProgressBar({progress}) {
  return (
    <BarContainer progress={progress}>
      <div></div>
    </ BarContainer>
  )
}
