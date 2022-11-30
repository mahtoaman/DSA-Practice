function cap(arr) {
  let res = [];
  //pull out arr[0] and capitalise 1st cha of arr[0]
  if (arr.length == 0) return [];
  let s = arr[0][0].toUpperCase() + arr[0].slice(1);
  res.push(s);
  return res.concat(cap(arr.slice(1)));
}
cap(["hi", "cool"]);
