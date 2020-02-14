import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import moment from 'moment'

const TimerContainer = styled.div`
  position: absolute;
  top: -3vh;
  left: 16vw;

  width: auto;
  max-height: 50px; 
  display: flex;
  color: white;
  font-size: 1.7rem;
  overflow: hidden;
  z-index: 4;
  p {
    font-size: 0.5rem;
    margin-top: -10px;
    padding-top: 0;
  }
  > div {
    flex: 1 1 auto;
  }
`

export const Timer = ( { endsAt } ) => {

  const endsAtVar = moment(endsAt)
  const clone = moment(endsAtVar).clone()
  const diff = moment(clone) - moment()

  const [ date, setDate ] = useState(diff)

  useEffect( () => {
    let timer = setInterval( () => {
      setDate(moment(clone) - moment())
    }, 1000)
    
    return () => clearInterval(timer)
  }, [clone])

  const day = moment(date).day()
  const hour = moment(date).hour()
  const minute = moment(date).minute()
  const second = moment(date).second()
  
  
  return (
    <TimerContainer>
      <div>
        {day} :
        <p>дней</p>
      </div>
      <div>
        {hour}:
        <p>часов</p>
      </div>
      <div>
        {minute}:
        <p>минут</p>
      </div>
      <div>
        {second}
        <p>секунд</p>
      </div>
    </TimerContainer>
  )
}