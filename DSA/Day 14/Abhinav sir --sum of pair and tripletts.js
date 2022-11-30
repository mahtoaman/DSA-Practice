function maxSumPair(arr) {
  let max = 0;
  let sMax = 0;
  let tMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      tMax = sMax;
      sMax = max;
      max = arr[i];
    } else if (arr[i] > sMax) {
      tMax = sMax;
      sMax = arr[i];
    } else if (arr[i] > tMax) {
      tMax = arr[i];
    }
  }
  console.log(max, sMax, tMax);
  return max + sMax + tMax;
}

let res = maxSumPair([1, 2, 3, 4]);
console.log(res);
