import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Bubble from '@/components/components/atoms/Bubble'

let container: HTMLDivElement | null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container!)
  container!.remove()
  container = null
})

it('renders with or without a name', () => {
  act(() => {
    render(<Bubble label="test" />, container)
  })
  expect(container!.textContent).toBe('Hey, stranger')
})
