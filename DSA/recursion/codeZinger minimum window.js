function solution(a) {
  let n = 0,
    count = 0;
  //create map
  let map = new Map();
  for (let i = 0; i < a.length; i++) {
    if (!map.get(a[i])) {
      map.set(a[i], 1);
    } else {
      map.set(a[i], map.get(a[i]) + 1);
    }
  }
  n = map.size;
  let i = 0,
    j = 1;
  map.set(a[0], 1);
  count++;
  let mi = Infinity,
    end = a.length;
  while (i <= j && j<end) {
    if (count < n) {
      if (map.get(a[j]) == 0) count++;
      map.set(a[j], map.get(a[j])) + 1;
      j++;
    } else if (count == n) {
      mi = Math.min(mi, j - i);
      if (map.get(a[i]) == 1) count--;
      map.set(a[i], map.get(a[i])) - 1;
      i++;
    }
  }
  while (count == n) {
    mi = Math.min(mi, j - i);
    if (map.get(a[i]) == 1) count--;
    map.set(a[i], map.get(a[i])) - 1;
    i++;
  }
  return mi
}

console.log(solution("aabbcc"));
