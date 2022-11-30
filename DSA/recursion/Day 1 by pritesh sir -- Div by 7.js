function divBy7(nums){
    if(nums.length==0) return
    else{
        let ele = nums.pop()
        // console.log(ele)
        if(ele%7==0){
            console.log('Yes')
        }else{
            console.log('No')
        }
        divBy7(nums)
    }
}

divBy7([77,8,9,10,27,25,21])