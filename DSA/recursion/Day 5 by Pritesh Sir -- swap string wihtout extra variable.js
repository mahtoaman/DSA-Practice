
let str1 = 'hellooo'
let str2 = 'World'

str1 = str1 + str2;
str2 = str1.slice(0, -str2.length);
str1 = str1.slice(str2.length);

console.log(str1)
console.log(str2)
