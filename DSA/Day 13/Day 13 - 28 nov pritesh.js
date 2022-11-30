// var uniqueElement = (arr) => {
//   let map = {};
//   for (let i of arr) {
//     if (!map[i]) {
//       map[i] = 1;
//     } else {
//       map[i] += 1;
//     }
//   }
// // console.log(map)
//   let res = [];
//   for (let val in map) {
//     if (map[val] === 1) {
//       res.push(val);
//     }
//   }
//   return res;
// };

// console.log(uniqueElement([1, 1, 2, 22, 3, 5, 11, 2]));



// return the elements fron an array which are repeted 1 times or more using map

function duplicates(arr){
    let frequesncies = new Map()
    for(let i=0;i<arr.length;i++){
        if(frequesncies.get(arr[i]) == undefined )  frequesncies.set(arr[i] ,1)
        else frequesncies.set(arr[i]  , frequesncies.get(arr[i])+1)
    }

    let res = [];
    for(let pairs of frequesncies) {
        if(pairs[1] > 1) res.push(pairs[0])
    }
    return res;
}

 console.log(duplicates([10,20,30,20,40,50,10]))

// filter out duplicate elements from an array

function duplicates(arr){
        let frequesncies = new Map()
        for(let i=0;i<arr.length;i++){
            if(frequesncies.get(arr[i]) == undefined )  frequesncies.set(arr[i] ,1)
            else frequesncies.set(arr[i]  , frequesncies.get(arr[i])+1)
        }
        let res = [];
        for(let pairs of frequesncies) {
            if(pairs[1] == 1) res.push(pairs[0])
        }
        return res;
    }
    
     console.log(duplicates([1,2,3,1,1,5,2,2]))