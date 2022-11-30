function solution(a, arr) {
  let map = {};
  for (let i = 0; i < a; i++) {
    map[arr[i]] ? map[arr[i]]++ : (map[arr[i]] = 1);
  }
  let count = 0;
  let keys = Object.keys(map);
  for (ele of map) {
    if (ele[1] == 1) {
      count++;
    }
  }
  return count;
}


console.log(solution(4,[1,2,2,3]))