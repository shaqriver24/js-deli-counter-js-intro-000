/*function takeANumber(num, name) {
  num.push(name)
  return `Welcome, ${name}. You are number ${num.length} in line.`
}*/
function takeANumber(line, name){
  var position = line.length+1;
  line.push(name);
  return `Welcome, ${name}. You are number ${position} in line.`;
}
