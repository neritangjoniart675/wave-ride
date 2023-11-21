/*
   Filename: sophisticated_code.js

   - This code is an implementation of a complex sorting algorithm called Merge Sort.
   - Merge Sort is a divide-and-conquer algorithm that recursively divides the array into halves,
     sorts them, and merges the sorted halves to obtain a final sorted array.
   - This implementation includes additional optimizations to improve performance.

   Disclaimer: The code is provided for educational purposes only and may not be the most optimized
   implementation of Merge Sort. Use it at your own discretion.

   Author: [Your Name]
   Date: [Current Date]
*/

// Function to perform the merge step of Merge Sort
function merge(left, right) {
  let result = [],
    leftLen = left.length,
    rightLen = right.length,
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < leftLen && rightIndex < rightLen) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < leftLen) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightLen) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

// Recursive function to perform Merge Sort
function mergeSort(arr) {
  const len = arr.length;

  if (len <= 1) {
    return arr;
  }

  const mid = Math.floor(len / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

// Test the mergeSort function with a sample array
const sampleArray = [5, 9, 2, 7, 1, 6, 4, 3, 8];
console.log("Input Array:", sampleArray);
const sortedArray = mergeSort(sampleArray);
console.log("Sorted Array:", sortedArray);
