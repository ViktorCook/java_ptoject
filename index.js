

let x1 = 2;
let y1 = 3;

let x2 = 10;
let y2 = 5;

let cathetus1 = Math.abs(x1 - x2);

let cathetus2 = Math.abs(y1 - y2);

console.log(Math.sqrt(
    Math.pow(cathetus1, 2) * Math.pow(cathetus2, 2)
  ));


  let a = 13.890123;
  let b = 2.891564;
  let three = 3;

  let aFloor = Math.floor(a);
  let bFloor = Math.floor(b);

  let aFloorNormalized = Math.round(
    aFloor * Math.pow(10, three)
    );
    let bFloorNormalized = Math.round(
    bFloor * Math.pow(10, three)
    );
    console.log(a, b);
    console.log('a > b', aFloorNormalized > bFloorNormalized);
    console.log('a < b', aFloorNormalized < bFloorNormalized);
    console.log('a >= b', aFloorNormalized >= bFloorNormalized);
    console.log('a <= b', aFloorNormalized <= bFloorNormalized);
    console.log('a === b', aFloorNormalized === bFloorNormalized);
    console.log('a ≠ b', aFloorNormalized !== bFloorNormalized);

let m = -5;
let n = 100;
let range = Math.abs(Math.max(m, n)-(Math.min(m,n)));
let Min = Math.min(m, n);
 
let firstRandomNumber = (Math.round(Math.random() * (range-2))) + Min;
let FinalRandomResult = firstRandomNumber + (firstRandomNumber % 2) + 1;
 
console.log(m, n, FinalRandomResult);
