function frequency(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else map.set(arr[i], map.get(arr[i]) + 1);
  }
  let max = -9999;
  let key;
  for (let pairs of map) {
    console.log(max + "   " + pairs[1]);
    if (pairs[1] > max) {
      key = pairs[0];
      max = pairs[1];
    }
  }
  return key;
}

console.log(frequency([23, 56, 678, 12, 2, 34, 23, 98, 12, 3, 12, 2, 12]));
