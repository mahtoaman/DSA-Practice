let arr = [1, 2, 3, 4, 5, 6, 10];

function keyPair(arr) {
    arr.sort(function(a,b){return a-b})
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] == 11) {
      return `${arr[i]}  ${arr[j]}`;
    } else if (arr[i] + arr[j] > 11) {
      j--;
    } else {
      i++;
    }
  }
  return `No such element found`;
}

console.log(keyPair(arr));
