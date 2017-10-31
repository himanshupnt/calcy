let addition = (a, b) => {
  return a + b
}

let subtraction = (a, b) => {
  return a - b
}
let operate = (input) => {
  let operator = input[1]
  let a = input[0]
  let b = input[2]
  console.log(a,b,operator)
  if (operator === "+") {
    console.log(a,b,operator)
    return addition (a, b)
  }
  if (operator === "-") {
    return subtraction (a , b)
  }
}



export { operate, addition, subtraction }
