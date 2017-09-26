/**
 * Created by nake12 on 2017/9/25.
 *
 * Given a roman numeral, convert it to an integer.

 Input is guaranteed to be within the range from 1 to 3999.
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var table = {};
    table["I"] = 1;
    table["X"] = 10;
    table["C"] = 100;
    table["M"] = 1000;
    table["V"] = 5;
    table["L"] = 50;
    table["D"] = 500;

    var sum= 0;
    for (var i = 0; i< s.length; i ++) {
        var item = table[s[i]];

        var next = i+1 === s.length ? 0 : table[s[i+1]]

        if(next > item) {
            sum += next-item;
            i++;
        } else {
            sum += item
        }
    }

    return sum;
};