// flat the array [1,2,3,[[[5,4],3]],6]

function flatArray(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray(arr[i]);
    } else {
      res.push(arr[i])
    }
  }
  return res;
}

console.log([1, 2, 3, [[[5, 4], 3]], 6]);
