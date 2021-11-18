/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {    
  let map = new Map;
  let dummyHead = new ListNode('');
  dummyHead.next = head;
  let curr = dummyHead.next;
  
  while (curr) {        
      if (!map.has(curr)) map.set(curr, curr);
      else return map.get(curr);
      
      curr = curr.next;
  }
  
  return null;
};