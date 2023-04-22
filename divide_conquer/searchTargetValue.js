/**
Given a sorted array of integers, write a function called search that accepts a value and return the index where the value passed to the function is located, if the value is not found, return -1;

[1,2,3,4,5,6] 4  // return 3
[1,2,3,4,5,6],11 // return -1
  index   [0,1,2,3,4,5]
          [1,2,3,4,5,6]
O(N) linear search
binary search O(nlogn) -> divide the set up
*/
function search(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        var pivot = Math.floor(left + (right - left) / 2);
        var midVal = nums[pivot];
        if (midVal === target)
            return pivot;
        else if (midVal < target) {
            left = pivot + 1;
        }
        else {
            right = pivot - 1;
        }
    }
    return -1;
}
var result = search([1, 2, 3, 4, 5, 6], 6);
console.log(result);
