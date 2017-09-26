/**
 * Created by nake12 on 2017/9/23.
 *
 *
 The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

 P   A   H   N
 A P L S I I G
 Y   I   R
 And then read line by line: "PAHNAPLSIIGYIR"
 Write the code that will take a string and make this conversion given a number of rows:

 string convert(string text, int nRows);
 convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var size = 2 * numRows - 2,
        len = s.length,
        result = '',
        mid,
        i,
        j;

    if (numRows ===1) {
        return s
    }

    for(var i =0;i<numRows ;i ++) {
        for (j =i;j<len;j+=size) {
            result += s.charAt(j);

            if (i !==  0 && i !== numRows -1) {
                mid = j+size -2*i;

                if (mid<len ){
                    result += s.charAt(mid)
                }
            }
        }
    }

    return result;
}