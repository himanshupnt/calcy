let displayClickedItem = (input, isResult) => {
  let span = document.createElement("span")
  let content = document.createTextNode(input[input.length-1])
  span.appendChild(content)
  span.className = "display-text"
  // let content = `<span class="display-text">input[input.length-1]</span>`
  if (isResult) {
    document.getElementById("display").innerHTML = ''
  }
  document.getElementById("display").appendChild(span)
}

export { displayClickedItem }
