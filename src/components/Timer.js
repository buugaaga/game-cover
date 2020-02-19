import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import moment from 'moment'

const TimerContainer = styled.div`
  position: absolute;
  top: -24px;
  left: 280px;

  width: auto;
  max-height: 50px; 
  display: flex;
  color: white;
  font-size: 1.7rem;
  overflow: hidden;
  z-index: 4;
`

const DateVal = styled.div`
  flex: 1 1;
  p {
    font-size: 0.5rem;
    margin-top: -10px;
    padding-top: 0;
    text-align: center;
  }
`

const Timer = ( { endsAt } ) => {
  
  const endsAtVar = moment(endsAt)
  const diff = moment(endsAtVar) - moment()

  const [ date, setDate ] = useState(diff)

  useEffect( () => {
    let timer = setInterval( () => {
      setDate(moment(endsAtVar) - moment())
    }, 1000)
    
    return () => clearInterval(timer)
  }, [endsAtVar])

  const day = moment(date).date()
  const hour = moment(date).hour()
  const minute = moment(date).minute()
  const second = moment(date).second()
  
  
  return (
    <TimerContainer>
      <DateVal>
        {day}:
        <p>дней</p>
      </DateVal>
      <DateVal>
        {hour}:
        <p>часов</p>
      </DateVal>
      <DateVal>
        {minute}:
        <p>минут</p>
      </DateVal>
      <DateVal>
        {second}
        <p>секунд</p>
      </DateVal>
    </TimerContainer>
  )
}

export default Timer