// recursion

function GCD(a, b) {
  if (a < 0 || b < 0 || isNaN(a) || isNaN(b)) {
    console.log(" error numbers");
    return;
  }
  if (!b) {return a;}
  return GCD(b, a % b);  
}

console.log(GCD(-462, 1071));


// binary
function GCD2 (c,d) {
  if(a == 0) {
    return b;
  }
  while (b != 0 ) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}
console.log(GCD(100 , 20));