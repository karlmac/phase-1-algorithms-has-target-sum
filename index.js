
function hasTargetSum(array, target) {
  // Write your algorithm here
  let currVal = 0;
  let arrayObj = {};
  
  for(let i = 0; i < array.length; i++) {
    currVal = array[i];
    const nDifference = target - currVal; //console.log(`currVal: ${currVal} || target: ${target} || nDifference: ${nDifference} || arrayObj[nDifference]: ${arrayObj[nDifference]}`);
    if (arrayObj[nDifference]) {
      return arrayObj[nDifference];
    }
    arrayObj[array[i]] = true;
  }
  
  return false;
}

/* 
Write the Big O time complexity of your function here
Big O notation = 0(n): Time taken to execute function increases in proportion to the number of items in array
*/

/* 
Add your pseudocode here
Initialize an empty [object] to store array values
Iterate through array and calculate the [difference] between each array element and the target
Check if the [difference] exists in the new [object] and return [true]
Otherwise, add the current array element as a key with a value of [true] to the [object]
*/

/*
Add written explanation of your solution here
> The hasTargetSum function accepts two arguments, and array of numbers and a target number
> This function returns true if any pair of numbers in the array sum up to the target number
> We begin by initializing an empty [object] to store each value in the array
> Next, loop through the array of numbers and calculate the [difference] between each array element and the target number
> Then, return [true] if the [difference] exists in the [object] as a key with a value of [true]. Function ends here if found
  (The initial return will always be [false] since the [object] is still empty at this point)
> Lastly, add the current array element as a key with a value of [true] to the [object] and continue the loop
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  
  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
