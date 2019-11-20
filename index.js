function takeANumber(num, name) {
  num.push(name)
  return `Welcome, ${name}. You are number ${num.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
    return "There is nobody waiting to be served!"
}

function currentLine(num) {
  

  const line = []

  for (let i = 0, 1 = num.length; i < 1; i++) {
    line.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${line.join(', ')}`

  if (!num.length) {
    return "The line is currently empty."
  }
}
