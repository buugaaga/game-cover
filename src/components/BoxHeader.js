import React from 'react'
import styled from '@emotion/styled'
import header from '../images/header.png'

const BoxContainer = styled.div`
  position: absolute;
  top: -16vh;

  height: 20vh;
  width: 50vw;
  z-index: 2;
  background-color: opacity;
  background-image: url(${header});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
`

function BoxHeader() {
  return (
    <BoxContainer>
      
    </BoxContainer>
  )
}

export default BoxHeader