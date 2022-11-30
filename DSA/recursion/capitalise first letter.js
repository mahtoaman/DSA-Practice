//capitalise first char of a given array of string

//without RECURSION

// function capitalise(arr){
//   let res = []
//     for(let i=0;i<arr.length;i++){
//         if(arr[i][i]){
//            let cap =  arr[i][0].toUpperCase() + arr[i].slice(1)
//            res.push(cap)
//         }
//     }
//     return res
// }

function capitalise(arr, i = 0) {
  if (i < arr.length) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    capitalise(arr, i + 1);
  }
  return arr;
}

console.log(capitalise(["hello", "hi", "hola", "cool"]));
