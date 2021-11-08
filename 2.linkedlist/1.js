function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function solution(head) {
  let table = new Map();
  let curr = head;

  while (curr) {
    if (table.has(curr.val)) table.set(curr.val, table.get(curr.val) + 1);
    else table.set(curr.val, 1);

    curr = curr.next;
  }

  const tmpHead = new ListNode("");
  let tail = tmpHead;

  // building a new LinkedList takes less time than modifying original Linked-List
  for (let item of table) {
    if (item[1] === 1) {
      const node = new ListNode(item[0]);
      tail.next = node;
      tail = tail.next;
    }
  }
  return tmpHead.next;
}

// Prepare a linked-list
let arr = [1, 2, 3, 2];
let nodes = [];
for (let i = 0; i < arr.length; i++) {
  nodes.push(new ListNode(arr[i]));
}

for (let i = 0; i < arr.length - 1; i++) {
  nodes[i].next = nodes[i + 1];
}

// Print values;
let head = solution(nodes[0]);
while (head) {
  console.log(head.val);
  head = head.next;
}
