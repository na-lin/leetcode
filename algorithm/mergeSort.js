/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  const res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      res.push(arr1[i++]);
    } else {
      res.push(arr2[j++]);
    }
  }

  /*
  if (i < arr1.length) {
    for (let k = i; k < arr1.length; k++) res.push(arr1[k]);
  }

  if (j < arr2.length) {
    for (let k = j; k < arr2.length; k++) res.push(arr2[k]);
  }
  */

  while (i < arr1.length) {
    res.push(arr1[i++]);
  }

  while (j < arr2.length) {
    res.push(arr2[j++]);
  }

  return res;
}

/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function mergeSort(arr) {
  // if (arr.length <= 1) {
  //   return arr;
  // }
  // // divide
  // const mid = Math.floor(arr.length / 2);
  // const arr1 = mergeSort(arr.slice(0, mid));
  // const arr2 = mergeSort(arr.slice(mid));

  // // conquer
  // return merge(arr1, arr2);

  return help(arr, 0, arr.length - 1);
}

function help(arr, left, right) {
  if (left === right) {
    return [arr[left]];
  }

  const mid = left + Math.floor((right - left) / 2);
  const leftArr = help(arr, left, mid);
  const rightArr = help(arr, mid + 1, right);

  return merge(leftArr, rightArr);
}

console.log(merge([1, 2], [3, 4]));

console.log(mergeSort([4, 5, 1, 2, 3]));
