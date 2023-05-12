// Create an linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");

a.next = b;
b.next = c;
console.log(a);

// * Add element
function appendNode(head, val) {
  if (head === null) {
    return new Node(val);
  }

  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
  }
  const node = new Node(val);
  curr.next = node;
  return head;
}

appendNode(a, "d");
console.dir(c.next);

// at index postion, insert this new node with val
function insertNode(head, index, val) {
  let curr = head;
  let idx = 0;
  while (curr !== null) {
    if (idx === index) {
      const nextNode = curr.next;
      const newNode = new Node(val);
      curr.next = newNode;
      newNode.next = nextNode;
      break;
    }
    idx += 1;
    curr = curr.next;
  }
  return head;
}

insertNode(a, 1, 0);
console.log("insert ", a, b.next.next);

//  * Remove node
function removeNode(head, val) {
  // O(N)
  if (head.val === val) return head.next;

  let curr = head;
  let prev = null;
  while (curr !== null) {
    if (curr.val === val) {
      prev.next = curr.next;
      break;
    }
    prev = curr;
    curr = curr.next;
  }
  return head;
}

// Access O(N)

// Search O(N)

// Update value O(N)
