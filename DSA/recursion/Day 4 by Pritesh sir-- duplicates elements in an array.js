function dublicate(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.get(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i],map.get(arr[i])+1);
    }
  }
  console.log(map);
  let res =[]
  for(let pair of map){
    if(pair[1]>1) res.push(pair[0])
  }
  return res
}

console.log(dublicate([1, 2, 3, 3, 2, 1, 1,0,0]))