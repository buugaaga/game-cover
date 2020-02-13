import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import moment from 'moment'

const TimerContainer = styled.div`
  position: absolute;
  top: -25px;
  left: 200px;
  width: auto;
  max-height: 50px; 
  display: flex;
  color: white;
  font-size: 30px;
  overflow: hidden;
  p {
    font-size: 10px;
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
      setDate(moment(endsAt) - moment())
    }, 1000)
    
    return () => clearInterval(timer)
  }, [date])

  

  const day = moment(date).day()
  const hour = moment(date).hour()
  const minute = moment(date).minute()
  const second = moment(date).second()
  
  
  return (
    <TimerContainer>
     
      <div>
        {day} :
        <p>день</p>
      </div>
      <div>
        {hour}:
        <p>hour</p>
      </div>
      <div>
        {minute}:
        <p>minute</p>
      </div>
      <div>
        {second}
        <p>second</p>
      </div>
    </TimerContainer>
  )
}