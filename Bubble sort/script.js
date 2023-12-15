function bubbleSort(arr) {
  let x = 0;
  let smallest = 0;
  let pos = 0;

  for (let i = 0; i < arr.length; i++) {
    smallest = arr[i];
    sorted = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (smallest > arr[j]) {
        smallest = arr[j];
        pos = j;
        sorted = true;
      }
    }
    //console.log(smallest)
    if (sorted) {
      x = arr[i];
      arr[i] = arr[pos];
      arr[pos] = x;
    }
  }
  return arr;
}

console.log(bubbleSort([3, 6, 5, 10, 7, 2]));
