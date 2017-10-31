import * as functions from "./functions.js"
import * as view from "./view.js"

// let numbers = [0,1,2,3,4,5,6,7,8,9]
let operators = ['add', 'subtract', 'multiply', 'divide', 'equal']
let input = []

let getElem = function (id) {
  return document.getElementById(id)
}
for (let i = 0; i <= 9; i++) {
  getElem("" + i).onclick = () =>  {
    input.push(i)
    view.displayClickedItem(input)
  }
}
for (let i = 0; i < operators.length; i++) {
  getElem(operators[i]).onclick = () => {
    if (operators[i] === 'equal') {
      let result = functions.operate(input)
      input = [result]
      view.displayClickedItem(input, true)
    } else {
      if (operators[i] === 'add') {
        input.push('+')
      }
      if (operators[i] === 'subtract') {
        input.push('-')
      }
      if (operators[i] === 'multiply') {
        input.push('x')
      }
      if (operators[i] === 'divide') {
        input.push('\\')
      }
      view.displayClickedItem(input, false)
    }
  }
}
