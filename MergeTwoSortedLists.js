/**
 * Created by nake12 on 2017/10/2.
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var p1 = l1;
    var p2 =l2;
    var fn = new ListNode(-1);
    var np = fn;

    while(p1 && p2) {
        if(p1.val >= p2.val) {
            np.next= p2;
            p2 = p2.next
        } else {
            np.next = p1;
            p1 =p1.next
        }

        np = np.next
    }

    if(p1) {
        np.next = p1;
    } else {
        np.next = p2;
    }

    return fn.next;
};