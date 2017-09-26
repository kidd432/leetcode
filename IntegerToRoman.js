/**
 * Created by nake12 on 2017/9/24.
 *
 Given an integer, convert it to a roman numeral.

 Input is guaranteed to be within the range from 1 to 3999.

 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var dict = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var val = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var result = "";

    for(var i = 0; i <val.length;i++) {
        var v = val[i];
        if (num>=v) {
            var count = parseInt(num/v)
            num %=v;

            for(var j = 0; j < count; j++) {
                result = result + dict[i];
            }
        }
    }

    return result;
};