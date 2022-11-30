// //bUBBLE SORT
// //checks the elments adjacent to each other and swaps them if leftElement > rightElement
// function bubble(nums) {
//   for (let i = 0; i < nums.length ; i++) {
//     let swap= false;
//     for (let j = 0; j < nums.length - 1; j++) {
//       if (nums[j] > nums[j + 1]) {
//         let temp = nums[j];
//         nums[j] = nums[j + 1];
//         nums[j + 1] = temp;
//       }
//     }
//     if(swap ==false) break
//   }
//   return nums;
// }

function bubble(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let flag = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }
    if (!flag) return arr;
  }
  return arr
}
// console.log(sort([2, 12, 3, 5, 4, 8]));

console.log(bubble([12, 13, 14,1]));
