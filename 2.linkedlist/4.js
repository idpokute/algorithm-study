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
  let dummyHeadA = dummyA;
  let dummyB = new ListNode();
  let dummyHeadB = dummyB;

  let dummyHead = new ListNode(0, head);
  let node = head;

  while (node) {
    if (node.val < x) {
      dummyA.next = new ListNode(node.val);
      dummyA = dummyA.next;
    } else {
      dummyB.next = new ListNode(node.val);
      dummyB = dummyB.next;
    }
    node = node.next;
  }
  if (dummyHeadA.next) {
    dummyA.next = dummyHeadB.next;
    return dummyHeadA.next;
  } else {
    return dummyHeadB.next;
  }
};
