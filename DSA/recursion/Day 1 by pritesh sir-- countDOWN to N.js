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