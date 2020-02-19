import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'

import GameCard from './GameCard'
import Loading from './Loading'
import Timer from './Timer'
import BoxHeader from './BoxHeader'

import bgImage from '../images/background.png'
import kings from '../images/task-kings.png'
import time from '../images/task-time.png'
import tournaments from '../images/task-tournaments.png'
import { phrases } from '../datas/phrases'

const GameContainer = styled.div`
  position: relative;
  height: 437px;
  width: 647px;
  padding: 25px 20px 50px 20px;
  background-color: opacity;
  background-image: url(${bgImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`

function GameCore() {

  const [ isClosed, setClosed ] = useState(false)
  const [ isLoading, setLoading ] = useState(false)
  const [ { endsAt, tasks}, setObjData ] = useState({endsAt: "0", tasks: []})

  const url = "https://cors-anywhere.herokuapp.com/http://sol-tst.herokuapp.com/api/v1/tasks/"
  useEffect( () => {
    let fetchData = async (url) => {
      try {
        setLoading(true)
        let result = await axios(url)
        console.log(result)  
        setObjData(result.data)
        setLoading(false)
      } catch(err) {
        console.log(err)
      }
    }
    fetchData(url)
  }, [])

  
  if (isClosed) return null 
  return (
    <GameContainer>
      <BoxHeader />
      {
      isLoading ? <Loading /> :
      <>
        <Timer endsAt={endsAt} />
        {
          tasks.map( (task, id) => (
            <GameCard 
              pathImg={
                task.type === 'time' ? time :
                task.type === 'kings' ? kings :
                task.type === 'tournaments' ? tournaments : null
              } 
              phrasa={
                task.type === 'time' ? phrases.time :
                task.type === 'kings' ? phrases.kings :
                task.type === 'tournaments' ? phrases.tournaments : null 
              }
              progress={task.progress} 
              isFull={ task.progress === 100 } 
              setClosed={setClosed}
              key={id} 
            />
          ))
        }
      </>
      }
    </GameContainer>
  )
}

export default GameCore