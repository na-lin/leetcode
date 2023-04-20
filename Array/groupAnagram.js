/**
 * categorize string by sorted string
 * @param {strings[]} strs
 * @return {string[][]}
 */

function groupAnagram1(strs) {
  let ans = {};
  for (let str of strs) {
    const sortedStr = reOrder(str);
    if (!ans[sortedStr]) ans[sortedStr] = [];
    ans[sortedStr].push(str);
  }
  return Object.values(ans);
}
/**
 *
 * @param {string} str
 * @return {string}
 */
function reOrder(str) {
  return str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
}

/**
 * categorize string by character count
 * @param {strings[]} strs
 * @return {string[][]}
 */
function groupAnagram2(strs) {
  let ans = {};
  for (let str of strs) {
    const count = frequency(str);
    if (!ans[count]) ans[count] = [];
    ans[count].push(str);
  }
  return Object.values(ans);
}

function frequency(str) {
  const count = new Array(26).fill(0);
  for (let char of str) {
    const charIdx = char.charCodeAt(0) - "a".charCodeAt(0);
    count[charIdx] += 1;
  }
  return count.toString();
}

/* example
  Input: strs = ["eat","tea","tan","ate","nat","bat"]
  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

const result = groupAnagram2(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(result);
