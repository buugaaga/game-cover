import React from 'react'
import styled from '@emotion/styled'
import header from '../images/header.png'

const BoxContainer = styled.div`
  position: absolute;
  top: -120px;

  height: 150px;
  width: 550px;
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