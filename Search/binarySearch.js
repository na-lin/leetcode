/**
 704. Binary Search
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
 */

/**
 *
 * @param {number[]} nums
 * @param {number} target
 */
function search(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1;
}
