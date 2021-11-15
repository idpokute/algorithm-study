/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let node = head;

  let length = 0;
  while (node) {
    length++;
    node = node.next;
  }

  node = head;
  // header is special case
  if (length - n === 0) {
    if (node.next) return node.next;
    else return null;
  }

  for (let i = 0; i < length - n - 1; i++) {
    node = node.next;
  }
  node.next = node.next.next;
  return head;
};

// Testing
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))),
);
removeNthFromEnd(head, 2);

while (head) {
  console.log(head.val);
  head = head.next;
}
