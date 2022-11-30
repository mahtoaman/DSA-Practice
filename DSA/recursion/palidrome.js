// function isPalidrome(str) {
//   if (str.length == 0) return true;
//   else {
//     return str[0] == str.slice(-1) && isPalidrome(str.slice(1,-1));
//   }
// }

function isPalidrome(str) {
  if (str.length == 0) return true;
  else if (str[0] == str.slice(-1)) {
    return isPalidrome(str.slice(1, -1));
  }
}

console.log(isPalidrome("aabbaa"));
