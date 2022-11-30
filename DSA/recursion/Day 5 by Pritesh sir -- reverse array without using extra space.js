//Reverse array wihtout using extra space

let arr = [2,4,67,2,4]

function revArray(arr){
    let i=0,j=arr.length-1
    while(i<j){
        arr[i] = arr[i]+ arr[j]
        arr[j] = arr[i]- arr[j]
        arr[i] = arr[i]- arr[j]
         i++
         j--
    }
    return arr
}

console.log(revArray(arr))