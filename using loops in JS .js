/*
//CODE FOR CALCULATING SUM OF ELEMENTS IN AN ARRAY - CALLED ACCUMULATOR PATTERN
const Array = [2, 3, 4];
let sum = 0 ;
for (let i=0; i < Array.length ; i++){
    let num = Array[i];
    
    sum = sum + num;
}
console.log(sum);

const doubleArray = [];

for (let i=0; i < Array.length ; i++){
   
    let number = Array[i];
    const val = 2*number;
    doubleArray.push(val);
}
 console.log(doubleArray);
*/

function doubleArray(nums) {
    const numsDoubled = [];

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
     
      numsDoubled.push(num * 2);
    }
    return numsDoubled;
  }
  console.log(doubleArray([1, 1, 3]));
  console.log(doubleArray([2, 2, 5, 0, 5]));