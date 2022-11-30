function solution(a, arr) {
  let obj = {};
  for (let ele of arr) {
    if (obj[ele]) {
      obj[ele] += 1;
    } else {
      obj[ele] = 1;
    }
  }

  let element = [];
  let frequency = [];
  for (let ele in obj) {
    element.push(ele);
    frequency.push(obj[ele]);
  }
  // console.log(frequency)
  for (let i = 0; i < frequency.length; i++) {
    let previous = i - 1;
    let next = i + 1;
    if (i == frequency.length - 1) {
      next = 0;
    }
    if (i == 0) {
      previous = frequency.length - 1;
    }
    if (
      frequency[i] != frequency[previous] &&
      frequency[i] != frequency[next]
    ) {
      return element[i];
    }
  }
}


console.log(solution(9,[1, 1, 1, 5, 2, 2,2, 3, 3, 3]));