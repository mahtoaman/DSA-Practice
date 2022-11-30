function uniquePair(arr, k) {
  let map = new Map();
  for (let i of arr) {
    if (!map[i]) {
      map[i] = 1;
    } else {
      map[i] += 1;
    }
  }

  let mapOfPair = {};
  // console.log(map)
  let keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    let ele = k - keys[i];
    if (map[ele] && !mapOfPair[ele]) {
      mapOfPair[keys[i]] = ele;
    }
  }
  return mapOfPair;
}
let result = uniquePair([1, 8, 2, 6, 4, 5], 9);
console.log(result);

////////////////////////////////================
//find the pairs whose sum is equals to target

// function wholesumarray(arr,x){
//           arr.sort((a,b)=>a-b);
//         console.log(arr) //o(nlogn)
//         let j = arr.length-1;
//         let i = 0;
//         while(i<j){
//           if(arr[i]+arr[j]==x)  return (`${arr[i]} , ${arr[j]}`);
//           else if(arr[i]+arr[j]<x) i++;
//           else if(arr[i]+arr[j]>x) j--;
//         }
//         return false;
//       }
//     var result = wholesumarray([1,4,45,6,10,8],16);
//     console.log(result);

//===============================


//codezinger 29th nov

function solution(a, arr) {
  let map = {};
  for (let i of arr) {
    if (!map[i]) {
      map[i] = 1;
    } else {
      map[i]++;
    }
  }

  let count = 0;
  let keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    if (map[keys[i]] == 1) {
      count++;
    }
  }
  return count;
}
