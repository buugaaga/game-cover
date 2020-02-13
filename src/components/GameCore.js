import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'

import GameCard from './GameCard'
import Loading from './Loading'
import Timer from './timer'

import bgImage from '../images/background.png'
import kings from '../images/task-kings.png'
import time from '../images/task-time.png'
import tournaments from '../images/task-tournaments.png'
import { phrases } from '../datas/phrases'

const GameBox = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: start;
  height: 350px;
  width: 550px;
  background-color: opacity;
  background-image: url(${bgImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 20px;
`

function GameCore() {

  const [ isLoading, setLoading ] = useState(false)
  const [ { endsAt, tasks}, setObjData ] = useState({endsAt: "0", tasks: []})

  const url = "http://sol-tst.herokuapp.com/api/v1/tasks/"
  useEffect( () => {
    let fetchData = async (url) => {
      try {
        setLoading(true)
        let result = await axios(url)
        setObjData(result.data)
        setLoading(false)
      } catch(err) {
        console.log(err)
      }
    }
    fetchData(url)
  }, [])

  console.log(endsAt)


  return (
    <GameBox>{
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
              task.type === 'time' ? phrases[0] :
              task.type === 'kings' ? phrases[1] :
              task.type === 'tournaments' ? phrases[2] : null 
            }
            progress={task.progress} 
            isFull={ task.progress === 100 } 
            key={id} 
            />
          ))
        }
      </>
      }
    </GameBox>
  )
}

export default GameCore