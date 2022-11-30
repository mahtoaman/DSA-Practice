// function divBy7(nums) {
//   if (nums.length == 0) return;
//   else {
//     let ele = nums.pop();
//     // console.log(ele)
//     if (ele % 7 == 0) {
//       console.log("Yes");
//     } else {
//       console.log("No");
//     }
//     divBy7(nums);
//   }
// }

// divBy7([77, 8, 9, 10, 27, 25, 21]);



// function sum(n) {
//   //base case
//   if (n == 1) return 1;
//   else {
//     return n + sum(n - 1);
//   }
// }

// console.log(sum(3));

// function countDown(n){
//     let temp=0
//     if(temp==n) return
//     else{
//         countDown(n-1)
//         temp++
//         console.log(temp)
//     }
// }

// countDown(10)



function countDown(n){
    if(n==0) return
    else{
        console.log(n)
        countDown(n-1)
    }
}

console.log(countDown(10))