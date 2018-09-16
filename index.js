function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let place = katzDeliLine.indexOf(name) + 1;
    return `Welcome, ${name}. You are number ${place} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
   return "There is nobody waiting to be served!";
  } else {
    let name = katzDeliLine.shift();
  return `Currently serving ${name}.`;
  }
}

function currentLine(katzDeliLine, name) {
  let currentLine = []
  if (katzDeliLine.length === 0) {
  return "The line is currently empty.";
  } else {
  return `The line is currently: ${katzDeliLine}.`;
  }
}

function iLoveTheBeatles(num) {
  var array = [];
  
  do {
        array.push('I love the Beatles!');
        num++;
  }
    while (num < 15);
    return array;
}