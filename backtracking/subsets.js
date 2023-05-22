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
