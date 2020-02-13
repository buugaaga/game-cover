import React from 'react'
import styled from '@emotion/styled'

const ShirtContainer = styled.div`
  flex: 1 1 20%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 20px 0 0;
  margin: 0;

  button {
    border: 2px solid #333;
    border-radius: 4px;
    background-color: #eecc55;
    height: 25px;
    width: 110px;
    padding: 0;
    margin: 0;
    font-size: .7rem;
    letter-spacing: -1px;
  }
`

export const Shirt = ({ isFull, setClosed }) => (
  <ShirtContainer> 
    { isFull ? <button onClick={() => setClosed(true)}>Поставить рубашку</button>  :  null }
    
  </ShirtContainer>
)