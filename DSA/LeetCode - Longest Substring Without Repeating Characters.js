// var lengthOfLongestSubstring = function (s) {
//   let start = 0;
//   let end = 0;
//   let maxlength = 0;
//   let unique = {};
//   while (end < s.length) {
//     if (!unique[s[end]]) {
//       unique[s[end]] = 1;
//       end++;
//       maxlength = Math.max(maxlength, Object.keys(unique).length);
//     } else {
//       delete unique[s[start]];
//       start++;
//     }
//   }
//   return maxlength;
// };


// var lengthOfLongestSubstring = function (s) {
//   let start = 0;
//   let end = 0;
//   let maxlength = 0;
//   let unique = new Set();
//   while (end < s.length) {
//     if (!unique.has(s[end])) {
//       unique.add(s[end]);
//       end++;
//       maxlength = Math.max(maxlength, unique.size);
//     } else {
//       unique.delete(s[start]);
//       start++;
//     }
//   }
//   return maxlength;
// };