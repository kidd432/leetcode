/**
 * Created by nake12 on 2017/9/17.
 */
/**
 * @param {string} s
 * @return {number}
 *
 * Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


 */
var lengthOfLongestSubstring = function(s) {
    var ch,
        max = 0,
        chars = new Set ();
        leftBound = 0;
    for (var i = 0; i < s.length; i ++) {
        ch = s.charAt(i);
        if(chars.has(ch)) {
            while (leftBound < i  && s.charAt(leftBound) !== ch) {
                chars.delete(s.charAt(leftBound));
                leftBound ++;
            }

            leftBound ++;
        } else {
            chars.add(ch);
            max = Math.max(max, i-leftBound + 1);
        }
    }

    return max;
};