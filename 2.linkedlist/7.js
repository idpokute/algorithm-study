/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let map = new Map();
  let curr = headA;

  while (curr) {
    map.set(curr, 0);
    curr = curr.next;
  }

  curr = headB;
  while (curr) {
    if (map.has(curr)) {
      return curr;
    }
    curr = curr.next;
  }
  return null;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let p1 = headA;
  let p2 = headB;

  while (1) {
    if (p1 === null && p2 === null) return null;
    if (p1 === null) {
      p1 = headB;
    }
    if (p2 === null) {
      p2 = headA;
    }
    if (p1 === p2) {
      return p1;
    }

    p1 = p1.next;
    p2 = p2.next;
  }
};
