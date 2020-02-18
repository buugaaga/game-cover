import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'


import Timer from './' 

jest.useFakeTimers()
let container = null 

beforeEach( () => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach( () => {
  unmountComponentAtNode(container) 
  container.remove()
  container = null
})


describe("testing timer", () => {
  
  test("renders timer with 2020-03-1T00:00:00.000 date", () => {
    act(() => {
      render(<Timer endsAt="2020-04-27T17:24:40.685945" />, container)
    })
    expect(container.querySelector("div").querySelector("div").textContent).toBe("6 :дней")
  })
})


