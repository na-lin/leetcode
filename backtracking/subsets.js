const subsets = (elements) => {
  // todo
  const result = [[]];
  for (let i = 1; i <= elements.length; i++) {
    backtracking(elements, result, i, [], 0);
  }
  return result;
};

function backtracking(elements, result, lens, subset, idx) {
  if (subset.length === lens) {
    result.push([...subset]);
    return;
  }

  for (let i = idx; i < elements.length; i++) {
    subset.push(elements[i]);
    backtracking(elements, result, lens, subset, i + 1);
    subset.pop();
  }
}

// DFS
function subset2(nums) {
  const result = [];
  dfs(nums, result, [], 0);
  return result;
}

function dfs(nums, result, subset, idx) {
  if (idx >= nums.length) return;

  if (subset.length <= nums.length) {
    result([...subset]);
  }

  for (let i = idx; i < nums.length; i++) {
    subset.push(nums[i]);
    dfs(nums, result, subset, i + 1);
    subset.pop();
  }
}

// Union Find

class UionFind {
  constructor() {
    this.root = [];
    this.count = 0;
  }
}

/**
nums = [1,2,3]

              []
      [1]           [2] [3]
  [1,2][1,3]       [2,3]
[1,2,3]
    */
