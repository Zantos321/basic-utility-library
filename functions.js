// Addition
function add(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 + input2;
}

// Subtraction
function subtract(input1, input2) {
   // A1: any number
   // A2: any number
   // R: the result of subtraction
   return input1 - input2;
}

// Multiplication
function multiplication(input1, input2) {
   // A1: any number
   // A2: any number
   // R: the result of multiplication
   return input1 * input2;
}

// Division
function division(input1, input2) {
   // A1: any number
   // A2: any number
   // R: the result of division
   return input1 / input2;
}

// Increment

function increment(input) {
   // A1: any number
   // R: the input number plus one
   input++;
   return input;
}

// Decrement
function decrement(input) {
   // A1: any number
   // R: the input number plus one
   input--;
   return input;
}

// Multiplication with decimals
function decimalMultiplication(input1, input2) {
   // A1: any number
   // A2: any number
   // R: the result of multiplication
   return input1 * input2;
}

// Division with decimals
function decimalDivision(input1, input2) {
   // A1: any number
   // A2: any number
   // R: the result of division
   return input1 / input2;
}

// Compound Assignment with Augmented Addition
function compoundAdd(input) {
   // A1: any number
   // R: 5 plus the number given
   var compoundAddNumber = 5;
   return (compoundAddNumber += input);
}

// Concatenating string with +
function concatenate(input1, input2) {
   // A1: a string
   // A2: a string
   // R: the two strings put together with a space in between
   return input1 + " " + input2;
}

// Concatenating strings with +=
function concatentatePlusEqual(input1, input2) {
   // A1: a string
   // A2: a string
   // R: the two strings put together
   var firstString = input1;
   return (firstString += input2);
}

// String with variable
function concatentateVariable(input1, input2) {
   // A1: a string
   // A2: a string
   // R: the two strings put into a sentence
   return "My name is " + input1 + " " + input2 + " and don't you forget it!";
}

// Length of a string
function stringLength(input) {
   // A1: a string
   // R: outputs the length of the string
   var stringLength = 0;
   var string = input;
   stringLength = string.length;
   return stringLength;
}

// Bracket notation to find the first letter of a string
function bracketFirstLetter(input) {
   // A1: a string
   // R: the first letter of the string
   var firstLetter = "";
   var string = input;
   firstLetter = string[0];
   return firstLetter;
}

// Bracket notation to find the nth letter of a string
function bracketNthLetter(input1, input2) {
   // A1: a string
   // A2: a number
   // R: the nth letter from the beginning of a string
   var nthLetter = input2;
   nthLetter--;
   var string = input1;
   returnLetter = string[nthLetter];
   return returnLetter;
}

// Bracket notation to find the last letter of a string
function bracketLastLetter(input) {
   // A1: a string
   // R: the las letter of the string
   var lastLetter = "";
   var string = input;
   lastLetter = string[string.length - 1];
   return lastLetter;
}

// Bracket notation to find the nth to the last letter of a string
function bracketNthLastLetter(input1, input2) {
   // A1: a string
   // A2: a number
   // R: the nth letter from the end of a string
   var nthlastLetter = "";
   var nthLetter = input2;
   nthLetter++;
   var string = input1;
   nthlastLetter = string[string.length - nthLetter];
   return nthlastLetter;
}

// Manipulate Arrays with push
function pushArray(input1, input2) {
   // A1: a string or number
   // A2: a string or number
   // R: the array with the two inputs inserted into the end
   var array = [7, 3];
   array.push([input1, input2]);
   return array + " Added " + input1 + " and " + input2 + " to the array.";
}

// Manipulate Arrays with pop
function popArray() {
   // R: the array with the last value removed
   var array = [7, 3, 4];
   removedPart = array.pop();
   return array + " Removed " + removedPart + " from the array.";
}

// Manipulate Arrays with shift
function shiftArray() {
   // R: the array with the first value removed
   var array = [7, 3, 4];
   removedPart = array.shift();
   return array + " Removed " + removedPart + " from the array.";
}

// Manipulate Arrays with unshift
function unShiftArray(input1, input2) {
   // A1: a number
   // A2: a number
   // R: the array with the first array removed and a new array inserted from user input
   var array = [
      [3, 5],
      [8, 7],
   ];
   var removedArray = array.shift();
   array.unshift([input1, input2]);
   return (
      array +
      " Removed " +
      removedArray +
      " and added " +
      input1 +
      " and " +
      input2 +
      " to the array."
   );
}

// Shopping List
function shoppingList(input1, input2) {
   // A1: an input
   // A2: an input
   // R: and array with the last array removed and the first array inserted into it
   var array = [
      ["Beer", 5],
      ["Ice Cream", 7],
   ];
   var removedArray = array.pop();
   array.unshift([input1, input2]);
   return (
      array[0][0] +
      "-" +
      array[0][1] +
      " , " +
      array[1][0] +
      "-" +
      array[1][1] +
      ". " +
      " Removed " +
      removedArray[0] +
      " then added " +
      input1 +
      " and " +
      input2 +
      " to the array."
   );
}

// Stand in line
var arr = [1, 2, 3, 4, 5, 6];
function standInLine(input) {
   // R: removes and states the first number and adds the inputed number to the end
   var removedNumber = 0;
   arr.push(input);
   removedNumber = arr.shift();
   return (
      removedNumber +
      " has gone to the window! The line numbers are now " +
      arr +
      "\n Have a nice day!"
   );
}
