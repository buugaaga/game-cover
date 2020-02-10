import React from 'react'
import styled from '@emotion/styled'

import GameBackground from './components/GameBackground'
import BoxHeader from './components/BoxHeader'

import  sideBg  from './images/side-bg.jpg'
import bgScreen from './images/background-screen.png'


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #333;
  background-image: url(${sideBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  justify-content: center;
  
   & > div {
    height: 100%;
    min-width: 700px;
    background-color: #333;
    background-image: url(${bgScreen});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`


function App() {

  return (
    <Container>
      <div>
        <BoxHeader />
        <GameBackground /> 
      </div>
    </Container>
  );
}

export default App
