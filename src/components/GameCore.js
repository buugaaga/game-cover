import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'

import GameCard from './GameCard'
import Loading from './Loading'

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
  const [ progress, setProgress ] = useState(10)
  const [ tasksData, setTasks ] = useState([])

  const url = "http://sol-tst.herokuapp.com/api/v1/tasks/"
  useEffect( () => {
    let fetchData = async (url) => {
      try {
        setLoading(true)
        let result = await axios(url)
        setLoading(false)
        setTasks(result.data.tasks)
        console.log(result.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchData(url)
  }, [])
  return (
    <GameBox>{
      isLoading ? <Loading /> :

      
      tasksData.map( (task, id) => (
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
      ))}
      
    </GameBox>
  )
}

export default GameCore