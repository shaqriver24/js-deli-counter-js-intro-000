function takeANumber(num, name) {
  num.push(name)
  return `Welcome, ${name}. You are number ${num.length} in line.`
}

function nowServing(katzDeliLine) {
  do {
    return `Currently serving ${katzDeliLine[0]}.`
  } while(katzDeliLine.shift() > 0)

  return "There is nobody waiting to be served!"
}
