/**
 * Created by nake12 on 2017/9/23.
 *
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

 Example:

 Input: "babad"

 Output: "bab"

 Note: "aba" is also a valid answer.
 Example:

 Input: "cbbd"

 Output: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(str) {
    let longer = '',
        tmpStr = '';
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            tmpStr = str.slice(i, j+1);
            if (isPalindrome(tmpStr)) {
                if ((tmpStr.length > longer.length)) {
                    longer = tmpStr;
                    arr.length = 0;
                    arr.push(tmpStr);
                } else if ((tmpStr.length === longer.length)) {
                    arr.push(tmpStr);
                }
            }
        }
    }
    return arr[0];
}

function isPalindrome (str) {
    return str === str.split("").reverse().join("");
}