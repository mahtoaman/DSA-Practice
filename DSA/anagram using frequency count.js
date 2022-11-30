function isAnagram(s, t) {
  let objS = {};
  let objT = {};
  
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (!objS[s[i]]) objS[s[i]] = 1;
    else objS[s[i]] += 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!objT[t[i]]) objT[t[i]] = 1;
    else objT[t[i]] += 1;
  }
  const keyOfS = Object.keys(objT);
  for (let i of keyOfS) {
    if (objT[i] != objS[i]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("abc", "cba"));
