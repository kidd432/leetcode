/**
 * Created by nake12 on 2017/9/23.
 * Reverse digits of an integer.

 Example1: x = 123, return 321
 Example2: x = -123, return -321

 click to show spoilers.

 Have you thought about this?
 Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

 If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

 Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

 For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

 Note:
 The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var isNegative = x < 0 ? true : false,
      result = 0,
      reminder;

    if (isNegative) {
        x = x * -1;
    }

    while (x!==0) {
        reminder = x %10;
        result = result *10 +reminder

        x = Math.floor(x /10)
    }

    if (result >= 2147483648) {
        return 0;
    }

    return isNegative? result * (-1) : result;
};