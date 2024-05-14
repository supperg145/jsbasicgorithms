//Print numbers from 1 to 135:
//
//For each number starting from 1 up to 135:
//Display the number.

for (let i = 1; i <= 135; i++) {
  console.log(`Number: ${i}`);
}

//Print odd numbers from 1 to 135:

//For each number starting from 1 up to 135:
//Increment numbers starting from 1 by 2,
//Show the number.

for (let j = 1; j <= 135; j += 2) {
  console.log(`Odd numbers: ${j}`);
}

//3 Print numbers and their sum from 1 to 135:

//Start with a sum set to 0.
//For each number starting from 1 up to 135:
//Add the current number to the sum.
//Display the current number and the sum.

let sum = 0;

for (let i = 1; i <= 135; i++) {
  sum += i;
  console.log(`Number: ${i}, Sum: ${sum}`);
}

//4 Print all numbers from an array:

//For each number in the array:
//Show the number.

let x = [1, 4, 2, 12];

for (let i = 0; i < x.length; i++) {
  console.log(x[i]);
}

//5 Find the maximum number in an array:

//Start with a variable called maxNumber set to 0.
//For each number in the array:
//If the current number is greater than maxNumber:
//Set maxNumber to the current number.
//Display the maxNumber.

const y = [2, -3, -1, 5];
let maxNumber = 0;

for (let i = 0; i < y.length; i++) {
  if (maxNumber < y[i]) {
    maxNumber = y[i];
  }
}

console.log(maxNumber);

//6. Calculate the average of numbers in an array:

//Start with a sum set to 0.
//For each number in the array:
//Add the current number to the sum.
//Calculate the average by dividing the sum by the total number of elements in the array.
//Display the average.

const z = [2, -3, -1, 5];

let average = 0;
let numbersAdded = 0;

for (let i = 0; i < z.length; i++) {
  numbersAdded += z[i];
}

average = numbersAdded / z.length;
console.log(average);

//7 Replace negative numbers with 0 in an array:

//For each number in the array:
//If the number is negative:
//Change the number to 0.
//Display the modified array.

const withNegatives = [2, -1, 4, -3];

for (let i = 0; i < withNegatives.length; i++) {
  if (withNegatives[i] < 0) {
    withNegatives[i] = 0;
  }
}
console.log(withNegatives);

//8 Replace negative numbers with a string in an array:

//For each number in the array:
//If the number is negative:
//Change the number to "Turing".
//Display the modified array.

const arrayNegatives = [2, -1, 4, -3];

for (let i = 0; i < arrayNegatives.length; i++) {
  if (arrayNegatives[i] < 0) {
    arrayNegatives[i] = "Turing";
  }
}
console.log(arrayNegatives);
