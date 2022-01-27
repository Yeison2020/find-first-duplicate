function findFirstDuplicate(arr) {
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

// 1. I need to find a Number in the array that It's equal to next number

// 2. Test Cases (always Array: Key word Given an Array )

// 3. Pseudocode
// Need to loop over the array and Check Current Number with Next number Meaning current Number at x index and y Number at x + 1

const find_first_Number = (arr) => {
  const elementsSet = new set();

  for (let i = 0; i < arr.length; i++) {
    if (elementsSet.has(arr[i])) return arr[i];
    elementsSet.add(arr[i]);
  }

  return -1;
};
