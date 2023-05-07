class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    // edge case
    this.values.push(val);
    if (this.values.length === 1) return this;

    let currIdx = this.values.length - 1;

    // bubble up to correct spot
    while (currIdx > 0) {
      let parendIdx = Math.floor((currIdx - 1) / 2);
      let parent = this.values[parendIdx];
      let current = this.values[currIdx];

      if (parent > current) break;

      this.values[currIdx] = parent;
      this.values[parendIdx] = current;

      currIdx = parendIdx;
    }
    return this;
  }

  remove() {
    // remove the root of the heap
    if (heap.length === 0) return null;
    if (this.values.length === 1) {
      this.values.pop();
      return;
    }
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];

    this.values.pop();

    // 2. bubble down
    let currIdx = 0;
    let element = this.values[currIdx];
    while (currIdx <= (this.values.length - 2) / 2) {
      let leftIdx = currIdx * 2 + 1;
      let rightIdx = currIdx * 2 + 2;
      let swap = null;

      if (leftIdx < this.values.length) {
        let leftChild = this.values[leftIdx];
        if (leftChild > element) {
          swap = leftIdx;
        }
      }
      if (rightIdx < this.values.length) {
        let rightChild = this.values[rightIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap && rightChild > this.values[leftIdx])
        ) {
          swap = rightIdx;
        }
      }
      if (!swap) break;

      [this.values[currIdx], this.values[swap]] = [
        this.values[swap],
        this.values[currIdx],
      ];
      currIdx = swap;
    }
  }
}

const heap = new MaxBinaryHeap();

heap.values = [41, 39, 33, 18, 27, 12];
/**
      41
     /  \
  39     33
  /\     /
18  27  12
 */
console.log(heap);
heap.insert(55);
console.log(heap); //[55,39,41,18,27,12,33]
/**
      55
     /  \
  39     41
  /\     /\
18  27  12 33
 */

heap.remove();
console.log(heap);
heap.remove();
console.log(heap);
