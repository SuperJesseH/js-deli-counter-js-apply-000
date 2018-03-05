var katzDeli = [];
var customersToday = 0;

function takeANumber(katzDeliLine){
  customersToday++;
  katzDeliLine.push(customersToday);
  return customersToday;
}

// when does the highest rate of customers 

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
  //return "Currently serving " + katzDeliLine[0] + "."
  return "Currently serving " + katzDeliLine.shift() + "."
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  var theLine = []
  if (katzDeliLine.length > 0){
  for (var i = 0; i < katzDeliLine.length; i++){
    theLine.push(i+1 + ". " + katzDeliLine[i])
  }
  theLine = ("The line is currently: " + theLine.join(', '))
  }else{
    theLine = "The line is currently empty."
  }
  return theLine
  //switching this variable from an array to a string is weird
  //could have used the text formating abilites in javascript
  //could have commented!
  //probobly could have done something more elegant if I had abetter sense for the scope of an array
}