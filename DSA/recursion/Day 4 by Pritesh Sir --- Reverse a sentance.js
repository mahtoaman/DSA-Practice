// function reverseSentence(str) {
//   str = str.split(" ");
//   for (let i = 0; i < str.length; i++) {
//     str[i] = rev(str[i]);
//   }
//   return str.join(" ");
// }

//without for loop
function reverseSentence(str) {
  str = str.split(" ");
  if (str.length == 1) return rev(str[0]);
  return rev(str[0]) + " " + reverseSentence(str.slice(1).join(" "));
}

//fucntion to reverse any word
function rev(word) {
  // if(word.length==0)return ""
  if (word.length == 1) return word;
  return rev(word.slice(1)) + word[0];
}

console.log(reverseSentence("hello how are you"));

