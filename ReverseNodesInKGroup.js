/**
 * Created by nake12 on 2017/10/3.
 *
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

 k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

 You may not alter the values in the nodes, only nodes itself may be changed.

 Only constant memory is allowed.

 For example,
 Given this linked list: 1->2->3->4->5

 For k = 2, you should return: 2->1->4->3->5

 For k = 3, you should return: 3->2->1->4->5
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var cur = head;
    var pre = null;
    var post = null;
    var count = 0;

    while(cur !== null && count <k) {
        cur = cur.next;
        count ++;
    }

    if(count !== k ){
        return head;
    }

    cur = head;

    while(cur !== null && count > 0) {
        post = cur.next;
        cur.next = pre;
        pre =cur;
        cur=post;
        count --;
    }

    if(post!==null) {
        head.next = reverseKGroup(post, k);
    }

    return pre;
};