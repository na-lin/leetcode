/**
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

 */

// Way 1 : Sliding window  + Set
function lengthOfLongestSubstring(s) {
  let left = 0;
  let right = 0;
  let res = 0;
  let set = new Set();

  while (right < s.length) {
    const char = s[right];
    if (!set.has(char)) {
      set.add(char);
      res = Math.max(res, right - left + 1);
      right++;
    } else {
      while (set.has(char)) {
        set.delete(s[left]);
        left++;
      }
    }
  }
  return res;
}
// O(N)Time
// O(K) space  K < N

// Way 2 :sliding window + hash table build by array

function way2(s) {
  const map = new Array(128).fill(-1);
  let l = 0;
  let res = 0;
  for (let r = 0; r < s.length; r++) {
    const char = s[r];
    const index = char.charCodeAt() - " ".charCodeAt();
    l = Math.max(l, map[index] + 1);
    res = Math.max(res, r - l + 1);
    map[index] = r;
  }
  return res;
}
