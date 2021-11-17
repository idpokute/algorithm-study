/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let dummyA = new ListNode();
  let dummyB = new ListNode();
  let dummyHeadA = dummyA;
  let dummyHeadB = dummyB;
  let node = head;

  while (node) {
    if (node.val < x) {
      dummyA.next = node;
      dummyA = dummyA.next;
    } else {
      dummyB.next = node;
      dummyB = dummyB.next;
    }
    node = node.next;
  }
  dummyA.next = dummyHeadB.next;
  dummyB.next = null;
  return dummyHeadA.next;
};
