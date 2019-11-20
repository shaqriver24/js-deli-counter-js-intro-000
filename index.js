function takeANumber(num, name) {
  num.push(name)
  return `Welcome, ${name}. You are number ${num.length} in line.`
}

/*function nowServing(katzDeliLine) {
  for(var i = katzDeliLine.length; i > 0; katzDeliLine.shift()) {
    return `Currently serving ${katzDeliLine[0]}.`
  }
  return "There is nobody waiting to be served!"
}*/

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    katzDeliLine.shift()
    return `Currently serving ${katzDeliLine[0]}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
