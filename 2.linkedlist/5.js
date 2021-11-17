/*
Add Two Numbers
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode();
  let node = dummyHead;
  let idx = 0;

  let cnt1 = 0;
  let cnt2 = 0;
  let sum = 0;

  while (1) {
    if (l1 === null && l2 === null) {
      if (sum > 9) node.next = new ListNode(Math.floor(sum / 10));

      break;
    }

    sum = Math.floor(sum / 10);
    if (l1 && idx === cnt1) {
      sum += l1.val;
      l1 = l1.next;
      cnt1++;
    }
    if (l2 && idx === cnt2) {
      sum += l2.val;
      l2 = l2.next;
      cnt2++;
    }

    node.next = new ListNode(sum % 10);
    node = node.next;
    idx++;
  }
  return dummyHead.next;
};
