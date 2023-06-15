function binarySort(arr, num) {
  let found = false;
  let start = 0;
  let end = arr.length;
  
  while (!found) {
    let mid = Math.floor((start + end) / 2);
    if (num === arr[mid]) {
      found = true;
      return `found at position ${mid + 1}`
    } else if (num < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false
}

let ans = binarySort(a, 7);
console.log(ans);