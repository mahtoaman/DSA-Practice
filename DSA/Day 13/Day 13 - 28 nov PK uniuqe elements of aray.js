function uniqueEle(arr) {
  let map = new Map(),
    res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }
  for (ele of map) {
    if (ele[1] == 1) {
      res.push(ele[0]);
    }
  }
  console.log(res);
  return res.length;
}
let result = uniqueEle([
  1, 2, 3, 4, 5, 6, 78, 9, 0, 4, 3, 4, 5, 6, 7, 8, 5, 4, 2, 4, 54, 56, 6, 7, 8,
  98, 67, 5, 43, 23, 23, 23, 4, 5, 6, 78, 8, 78, 65, 54, 43, 23, 23, 3, 4, 54,
  56, 67, 7, 78,
]);
console.log(result);
