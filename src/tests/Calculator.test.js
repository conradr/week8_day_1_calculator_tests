import React from 'react'
import Calculator from '../containers/Calculator'
import { render, fireEvent } from '@testing-library/react'

describe('Calculator', () => {
  let container
  let number0
  let number1
  let number2
  let number3
  let number4
  let number5
  let number6
  let number7
  let number8
  let number9
  let decimal
  let multiply
  let subtract
  let divide
  let add
  let equals
  let clear
  let total

  beforeEach(() => {
    container = render(<Calculator />)
    number0 = container.getByTestId('number0')
    number1 = container.getByTestId('number1')
    number2 = container.getByTestId('number2')
    number3 = container.getByTestId('number3')
    number4 = container.getByTestId('number4')
    number5 = container.getByTestId('number5')
    number6 = container.getByTestId('number6')
    number7 = container.getByTestId('number7')
    number8 = container.getByTestId('number8')
    number9 = container.getByTestId('number9')
    decimal = container.getByTestId('decimal')
    add = container.getByTestId('operator-add')
    subtract = container.getByTestId('operator-subtract')
    multiply = container.getByTestId('operator-multiply')
    divide = container.getByTestId('operator-divide')
    equals = container.getByTestId('operator-equals')
    total = container.getByTestId('running-total')
    clear = container.getByTestId('clear')
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button4)
    expect(runningTotal.textContent).toEqual('4')
  })

  it('should add', () => {
    fireEvent.click(number4)
    fireEvent.click(add)
    fireEvent.click(number1)
    fireEvent.click(equals)
    expect(total.textContent).toEqual('5')
  })
  it('should subtract', () => {
    fireEvent.click(number7)
    fireEvent.click(subtract)
    fireEvent.click(number4)
    fireEvent.click(equals)
    expect(total.textContent).toEqual('3')
  })
  it('should multiply', () => {
    fireEvent.click(number3)
    fireEvent.click(multiply)
    fireEvent.click(number5)
    fireEvent.click(equals)
    expect(total.textContent).toEqual('15')
  })
  it('should divide', () => {
    fireEvent.click(number2)
    fireEvent.click(number1)
    fireEvent.click(divide)
    fireEvent.click(number7)
    fireEvent.click(equals)
    expect(total.textContent).toEqual('3')
  })
  it('concatenate numbers', () => {
    fireEvent.click(number2)
    fireEvent.click(number1)
    fireEvent.click(number1)
    fireEvent.click(number7)
    expect(total.textContent).toEqual('2117')
  })
  it('chain multiple operations together', () => {
    fireEvent.click(number3)
    fireEvent.click(multiply)
    fireEvent.click(number5)
    fireEvent.click(equals)
    fireEvent.click(subtract)
    fireEvent.click(number5)
    fireEvent.click(equals)
    expect(total.textContent).toEqual('10')
  })
  it('clears and continues', () => {
    fireEvent.click(number3)
    fireEvent.click(add)
    fireEvent.click(number5)
    fireEvent.click(equals)
    fireEvent.click(subtract)
    fireEvent.click(number5)
    fireEvent.click(clear)
    fireEvent.click(add)
    fireEvent.click(number5)
    fireEvent.click(equals)
    expect(total.textContent).toEqual('13')
  })
})
