import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ProgressBar from '../components/ProgressBar'


test("test ProgressBar component without props", () => {
  render(<ProgressBar  />)

  let filling = screen.getByTestId("progressTest")
  
  expect(filling).toBeInTheDocument()
  expect(filling).toHaveStyle('width: 0%')
  cleanup()
})

test("test filling progressBar on 70%", () => {
  render(<ProgressBar progress="70" />)

  let filling = screen.getByTestId("progressTest")
  expect(filling).toHaveStyle('width: 70%')
})