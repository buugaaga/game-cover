import React from 'react'
import styled from '@emotion/styled'

const BarContainer = styled.div`
  width: 280px;
  height: 10px;
  border: 2px solid #fff;
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
