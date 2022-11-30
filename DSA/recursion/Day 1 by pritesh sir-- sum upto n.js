function sum(n){
    //base case
    if(n==1) return 1
    else{
        return n+ sum(n-1)
    }
}

console.log(sum(3))