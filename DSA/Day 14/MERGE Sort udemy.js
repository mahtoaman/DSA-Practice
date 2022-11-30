function merge(arr1, arr2) {
  let index1 = 0;
  let index2 = 0;
  let len1 = arr1.length;
  let len2 = arr2.length;
  let res = [];

  while (index1 < len1 && index2 < len2) {
    if (arr1[index1] < arr2[index2]) {
      res.push(arr1[index1]);
      index1++;
    } else {
      res.push(arr2[index2]);
      index2++;
    }
  }
  while (index1 < len1) {
    res.push(arr1[index1]);
    index1++;
  }
  while (index2 < len2) {
    res.push(arr2[index2]);
    index2++;
  }
  return res;
}

function sort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = sort(arr.slice(0, mid));
  let right = sort(arr.slice(mid));
  return merge(left, right);
}

let result =sort([5, 15, 1, 81,45]);
console.log(result);
