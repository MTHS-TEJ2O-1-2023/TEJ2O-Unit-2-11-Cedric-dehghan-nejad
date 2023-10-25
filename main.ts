/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variable
let number1: number = randint(0, 99)
let number2: number = randint(0, 99)

// show number1
input.onButtonPressed(Button.A, function () {
  basic.showString('#')
  basic.showNumber(number1)
})
// show number2
input.onButtonPressed(Button.B, function () {
  basic.showString('#')
  basic.showNumber(number2)
})
// on Gesture show number1 < number 2
input.onGesture(Gesture.Shake, function () {
  if (number1 < number2) {
    basic.showNumber(number1)
    basic.showString('<')
    basic.showNumber(number2)
    basic.showIcon(IconNames.Happy)

  // on Gesture show number1 > number 2
  } else {
    basic.showNumber(number1)
    basic.showString('>')
    basic.showNumber(number2)
    basic.showIcon(IconNames.Sad)
  }
})
