import React from 'react'
import styled from '@emotion/styled'

import GameCore from './components/GameCore'

import  sideBg  from './images/side-bg.jpg'
import bgScreen from './images/background-screen.png'


const Container = styled.div`
  height: 800px;
  width: 1920px;
  background-color: #333;
  background-image: url(${sideBg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center; 
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    width: 1200px;
    background-size: 150% 100%;
  }
`

const InnerContainer = styled.div`
  height: 800px;
  width: 894px;
  background-color: #333;
  background-image: url(${bgScreen});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {

  return (
    <Container>
      <InnerContainer>
        <GameCore /> 
      </InnerContainer>
    </Container>
  );
}

export default App
