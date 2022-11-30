



// function rotate(nums,k){
// if(k==1)return revArray(nums,k)
// return revArray(nums,k-1)
// }

// function revArray(arr) {
//   let i = 0,
//     j = arr.length - 1;
//   while (i < j) {
//     arr[i] = arr[i] + arr[j];
//     arr[j] = arr[i] - arr[j];
//     arr[i] = arr[i] - arr[j];
//     i++;
//     j--;
//   }
//   return arr;
// }


function rotate(arr,d){
  let left = 0
  let right = arr.length

  while(left<right){
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left++
    right--
  }
  left = 0
  right = d-1
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--
  }
  left = d
  right = d-1
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right++;
  }
  return arr
}

console.log(rotate([1,2,3,4,5,6],3))