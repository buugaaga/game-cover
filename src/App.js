import React from 'react'
import styled from '@emotion/styled'

import GameCore from './components/GameCore'

import  sideBg  from './images/side-bg.jpg'
import bgScreen from './images/background-screen.png'


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #333;
  background-image: url(${sideBg});
  background-size: 150% 100%;
  background-repeat: no-repeat;
  background-position: center center; 
  display: flex;
  justify-content: center;

   & > div {
    margin: 0 0;
    height: 100%;
    flex: 1 1 ;
    height: 100%;
    max-width: 70vw;
    background-color: #333;
    background-image: url(${bgScreen});
    background-size: 100% 100%;
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
        <GameCore /> 
      </div>
    </Container>
  );
}

export default App
