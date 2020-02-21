import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render,  waitForElement, screen, cleanup } from '@testing-library/react'
import axiosMock from 'axios'

import GameCore from '../components/GameCore'


test("test GameCore component after axios fetch event", async () => {

  jest.mock('axios')
  const fakeServerResponse = [
    { endsAt: "2020-05-27T00:00:00.00000",
    },
    { tasks: [
      {
        type: "time",
        progress: 100
      }
    ]}
  ]

  axiosMock.get.mockImplementationOnce( () => {
    return Promise.resolve({
      data: fakeServerResponse
    })
  })

  render(<GameCore />)

  const timeComponent = await waitForElement(() => screen.getByTestId("gameContainer"))
  
  expect(timeComponent).toBeInTheDocument()
  
  cleanup()
})
