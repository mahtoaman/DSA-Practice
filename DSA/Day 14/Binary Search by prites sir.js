function binarySearch(arr, start, end, num) {
  if (start <= end) {
    let mid = (start + end) / 2;
    if (num == mid) return mid;
    else if (num > arr[mid]) {
      return binarySearch(arr, mid + 1, end, num);
    } else {
      binarySearch(arr, start, mid - 1, num);
    }
  }
  return false;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 0, 5, 2));
