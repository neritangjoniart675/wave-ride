/* fibonacci_sequence.js */

// This code generates a Fibonacci sequence up to a specified number
// The sequence starts with 0 and 1, and each subsequent number is the sum of the two previous numbers

// Function to generate Fibonacci sequence up to a specified number
function generateFibonacciSequence(upTo) {
  var sequence = [0, 1]; // Initialize sequence with the first two numbers
  var i = 2;
  
  // Loop until the specified number
  while (sequence[i-1] + sequence[i-2] <= upTo) {
    sequence[i] = sequence[i-1] + sequence[i-2];
    i++;
  }
  
  return sequence;
}

// Function to display the Fibonacci sequence
function displayFibonacciSequence(sequence) {
  console.log("Fibonacci Sequence:");
  
  for (var i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
  }
}

// Define the maximum number for Fibonacci sequence
var maxNumber = 10000;

// Generate Fibonacci sequence
var fibonacciSequence = generateFibonacciSequence(maxNumber);

// Display Fibonacci sequence
displayFibonacciSequence(fibonacciSequence);

// Additional functions can be added here

// ...

// End of code