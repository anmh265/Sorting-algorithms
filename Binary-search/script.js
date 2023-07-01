function binarySearch(arr, num) {
  let found = false;
  let start = 0;
  let end = arr.length;

  console.log('Input array: ', arr)
  sortedArr = sort(arr)
  console.log('Sorted array: ', sortedArr)

  while (!found) {
    let mid = Math.floor((start + end) / 2);
    if (num === sortedArr[mid]) {
      found = true;
      return `Found at position ${mid + 1}`;
    } else if (num < sortedArr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minValue = arr[i];
    let temp = 0;
    let foundSmallest = false;
    let position = 0;
    
    for (let j = i + 1; j < arr.length; j++) {
      if (minValue > arr[j]) {
        minValue = arr[j];
        foundSmallest = true;
        position = j;
      }
    }
    if (foundSmallest) {
      temp = arr[i];
      arr[i] = arr[position];
      arr[position] = temp;
    }
  }
  return arr
}


let inputArr = [10,4,9,1,3]
let numToFind = 4
let ans = binarySearch(inputArr, numToFind);
console.log(ans);