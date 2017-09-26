/**
 * Created by nake12 on 2017/9/25.
 *
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

 Given two integers x and y, calculate the Hamming distance.

 Note:
 0 ≤ x, y < 231.
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var res = 0;
    var num = x^y;

    for (var i = 0; i < 32; ++i) {
        res += (num >> i) & 1;
    }
    return res;
};