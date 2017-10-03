/**
 * Created by nake12 on 2017/10/2.
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

 The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.


 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];

    for(var i =0;i< s.length;i++) {
        var ch = s[i];

        if(ch==='(' || ch ==='{' || ch==='[') {
            stack.push(ch)
        } else if(ch === ')' || ch==='}' || ch===']') {
            var top = stack.pop();
            if(!top || (top === '(' && ch !== ')') || (top === '{' && ch !== '}') || (top === '[' && ch !== ']')) {
                return false;
            }
        }
    }
    return stack.length === 0;
};