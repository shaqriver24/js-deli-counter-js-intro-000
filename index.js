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

function currentLine(n) {
  var line = []
  line.push(`${n.length}. ${n}`)
  return line
}
