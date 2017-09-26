/**
 * Created by nake12 on 2017/9/24.
 *
 * Determine whether an integer is a palindrome. Do this without extra space.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x === x.split("").reverse().join("")
};