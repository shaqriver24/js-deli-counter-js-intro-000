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

/*function currentLine(n) {
  if (!n.length) {
    return "The line is currently empty."
  }

  const line = []

  for (let i = 0, 1 = n.length; i < 1; i++) {
    line.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${line.join(', ')}`
}
*/
