function longestSubstring(str) {
  let map = {};
  let j = 0,
    i = 0;
  let min = Infinity;
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1;
    } else if (map[str[i]]) {
      map[str[i]]++;
    }
  }

  let k = Object.keys(map).length;
  console.log(map);
  map = {};
  while (j < str.length) {
    if (!map[str[j]]) {
      map[str[j]] = 1;
    } else if (map[str[j]]) {
      map[str[j]]++;
    }
    if (Object.keys(map).length < k) {
      j++;
    } else if (Object.keys(map).length == k) {
      while (Object.keys(map).length == k) {
        map[str[i]]--;
        if (map[str[i]] == 1) {
          min = Math.min(min, j - i + 1);
        }
        i++;
      }
    }
    j++
  }
  return min;
}

console.log(longestSubstring("aaab"));
