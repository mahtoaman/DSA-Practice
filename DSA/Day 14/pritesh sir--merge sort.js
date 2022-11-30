function mergeSort(arr, s, e) {
  //base case
  if (arr.length < 2 ) {
    return;
  }
  let mid = Math.floor(s + (s - e) / 2);
  //left part sort
  mergeSort(arr, s, mid);

  //right prat sort
  mergeSort(arr, mid + 1, e);

  mergeSort(arr, s, e);
}

function merge(arr, s, e) {
  let mid = Math.floor(s + (s - e) / 2);

  let len1 = mid - s + 1;
  let len2 = e - mid;

  let first = new Array(len1);
  let second = new Array(len1);

  let k = s;
  for (let i = 0; i < len1; i++) {
    first[i] = arr[k++];
  }
  k = mid + 1;
  for (let i = 0; i < len1; i++) {
    second[i] = arr[k++];
  }

  //merge 2 sorted array
  let index1 = 0;
  let index2 = 0;

  k = s; //k = main array index

  while (index1 < len1 && index2 < len2) {
    if (first[index1] > second[index2]) {
      arr[k] = first[index1++];
    } else {
      arr[k] = second[index2++];
    }
  }
  while (index1 < len1) {
    arr[k++] = first[index1++];
  }
  while (index2 < len2) {
    arr[k] = second[index2++];
  }
}

let arr = [2, 5, 1, 6, 9];
let n = 5;
console.log(mergeSort([0,1], 0, n - 1));
