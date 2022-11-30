// using regex
function checkint(inp){
    let str = /^-?[0-9]+$/;
    let result = str.test(inp);
    return result;
}
console.log(checkint(123))

// if a no is divisible by 3 print "foo" and if its divisible by 5 print "bar" and if divisible by both then print "foobar"
 function checknum(num) {
      if(num%15==0) return "foobar"
       if(num%3==0) return "foo"
       if(num%5==0) return "bar"
 }
 console.log(checknum(30))
