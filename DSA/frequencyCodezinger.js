function occuranceArr(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  let val = Object.keys(obj);
  for (let i = 0; i < val.length; i++) {
    if (obj[val[i]] != obj[val[i + 1]]) {
      if (obj[val[i + 1]] != obj[val[i + 2]]) {
        return val[i + 1];
      }
      return val[i];
    }
  }
}

console.log(occuranceArr([1, 1, 1, 5, 2, 2, 2, 3, 3, 3]));
