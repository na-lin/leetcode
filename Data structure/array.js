// * Create an Array
const array1 = [];
const array2 = new Array(3).fill(0);
console.log("create an array", array1, array2);

// * Add element
array1.push(1); // O(1)
array1.unshift(0); // adds the specified elements to the beginning of an array and returns the new length of the array.
console.log("Add element", array1, array2);

// * insert O(N)T
const array3 = [1, 2, 3, 4];
console.log("insert", array3);
array3.splice(1, 0, 0, 0, 0, 0);
console.log(array3);

// * Access element O(1)
// slice(start,end), but not including end.
// console.log(array1.slice(0, 1));

console.log("Access");
console.log(array1[0]);
console.log(array1.at(-1));
console.log(array1.slice(-1)[0]);

// * Change element O(1)
console.log("change");
array1[0] = 100;
console.log(array1);

// * Delete
const array4 = [1, 2, 3, 4];
array4.pop(); // O(1)
array4.shift(); //  removes the first element from an array and returns that removed element

// * Iterate through O(N)
const nums = [1, 2, 3];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
for (let n of nums) {
  console.log(n);
}

// * Search O(N)
console.log("search");
const array5 = [1, 2, 3, 0, 12, 3, 23];
console.log(
  "find the element: ",
  array5.find((el) => el === 0)
);
//  returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned
console.log(
  "find the index of element: ",
  array5.findIndex((el) => el === 0)
);
console.log("element exist in the array: ", array5.includes(5));
console.log("index of the element", array5.indexOf(0));

// * Length
console.log("\nlength");
console.log(array2.length);

// * sort
console.log("sort");
const random = [3, 2, 1, 0, 12, 3];

// in-place
random.sort((a, b) => a - b); // ascending -> swap when prev > curr
console.log("ascending", random);
random.sort((a, b) => b - a); // descending -> swap when curr is greater then prev
console.log("decreasing", random);

// sort string
console.log("sort string ");
const stringArray = ["Blue", "Humpback", "Beluga"];
let r = stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

console.log("absAD".split("").sort().join(""));

const anagrams = ["a", "v", "c", "w", "d"];
// console.log(anagrams.sort()); // [ 'a', 'c', 'd', 'v', 'w' ]
anagrams.sort((a, b) => a.localeCompare(b));
console.log(anagrams);
