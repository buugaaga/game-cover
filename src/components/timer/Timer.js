import React from 'react'
import styled from '@emotion/styled'
import moment from 'moment'

const TimerContainer = styled.div`
  position: absolute;
  top: -50px;
  left: 50px;
  width: 300px;
  line-height: 40px;
  font-size: 30px;
  text-align: center;
  padding: 5px 20px;
  background-color: opacity;
  color: white;
  p {
    font-weight: 700;
    z-index: 3;
  }
`

export const Timer = ( { endsAt } ) => {
  
  
  console.log(endsAt)

  const day = moment(endsAt).day()
  const hour = moment(endsAt).hour()
  const minute = moment(endsAt).minute()
  const second = moment(endsAt).second()
  
  return (
    <TimerContainer>
      <p>
         { `${day} :${hour}:${minute}:${second}`}
      </p>
    </TimerContainer>
  )
}