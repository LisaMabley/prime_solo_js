var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

// Task 1
// Iterate through the stringList and produce the following output: "Months listed are March, April, May".
var stringListOutput = 'Months listed are ';

for (var i = 0; i < stringList.length; i ++) {
  stringListOutput += stringList[i];

  if ((i + 1) < stringList.length) {
    stringListOutput += ', ';
  }
}

console.log(stringListOutput);

// Task 2
// Console log the last element in numList using .length to get the index.
var lastItemIndex = numList.length - 1;

console.log(numList[lastItemIndex]);

// Task 3
// Iterate through numList, output all numbers as single String
function stringify(listOfNums) {
  var output = '';
  for (var x = 0; x < listOfNums.length; x ++) {
    output += listOfNums[x];
  }
  return output;
}

console.log(stringify(numList));

// Task 4
// Iterate through numList and add all of the elements together and console log the total.
function getSum(listOfNumbers) {
  var total = 0;
  for (var x = 0; x < listOfNumbers.length; x ++) {
    total += listOfNumbers[x];
  }
  return total;
}

console.log(getSum(numList));

// Task 5
// If the second element in boolList is true, add the first and last elements in numList.
// Otherwise multiply the second element in numList by itself. Console log the output.
var solution = 0;

if (boolList[1]) {
  solution = numList[0] + numList[numList.length - 1];

} else {
  // Found pow method on w3schools.com
  solution = numList[1].pow(2);
}

console.log(solution);

// Task 6
// Iterate through boolList, if the value is true console log the equivelent index in numList.
for (var n = 0; n < boolList.length; n++) {
  if (boolList[n]) {
    console.log(numList[n] + '\n');
  }
}
