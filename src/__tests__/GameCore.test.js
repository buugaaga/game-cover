import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import axiosMock from 'axios'

import GameCore from '../components/GameCore'



test("hides GameCore component when the Shir is clicked", async () => {

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

  const { getByText } = render(<GameCore />)

  const button = await waitForElement(() => getByText(/поставить рубашку/i))
  
  expect(button).toBeDefined()
  
})