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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; 
  display: flex;
  justify-content: center;

   & > div {
    margin: 0 0;
    height: 100%;
    flex: 1 1 ;
    max-width: 700px;
    min-width: 400px;
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
        <GameCore /> 
      </div>
    </Container>
  );
}

export default App
