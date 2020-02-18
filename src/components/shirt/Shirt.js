import React from 'react'
import styled from '@emotion/styled'

const ShirtContainer = styled.div`
  flex: 1 1 20%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 20px 0 20px;
  margin: 0;

  button {
    border: 2px solid #171407;
    border-radius: 4px;
    
    background: radial-gradient(#EDDA79, #EDDA79, #EDDA79, #8E834A);
    height: 30px;
    width: 130px;
    padding: 0 ;
    margin: 0;
    font-size: .7rem;
    letter-spacing: -0.5px;
  }
`

export const Shirt = ({ isFull, setClosed }) => (
  <ShirtContainer> 
    { isFull ? <button onClick={() => setClosed(true)}>Поставить рубашку</button>  :  null }
    
  </ShirtContainer>
)