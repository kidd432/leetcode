/**
 * Created by nake12 on 2017/9/24.
 *
 * // Implement regular expression matching with support for '.' and '*'.

 // '.' Matches any single character.
 // '*' Matches zero or more of the preceding element.

 // The matching should cover the entire input string (not partial).

 // The function prototype should be:
 // bool isMatch(const char *s, const char *p)

 // Some examples:
 // isMatch("aa","a") → false
 // isMatch("aa","aa") → true
 // isMatch("aaa","aa") → false
 // isMatch("aa", "a*") → true
 // isMatch("aa", ".*") → true
 // isMatch("ab", ".*") → true
 // isMatch("aab", "c*a*b") → true

 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var sLen = s.length,
        pLen = p.length,
        var dp = [];

    for (var i=0;i<sLen;i++) {
        var tmp = [];
        for (var j=0;j<pLen;j++){
            tmp.push(false)
        }

        dp.push(tmp)
    }

    for (i=0; i < sLen;i++) {
        for (j=0;j<pLen;j++) {
            if(p[j-1] !== '.' && p[i-1] !== '*') {
                if(i>0 && p[j-1] === s[i-1] && dp[i-1][j-1]){
                    dp[i][j] = true
                }
            } else if(p[j-1] === '.') {
                if(i>0 && dp[i-1][j-1]) {
                    dp[i][j] = true
                }
            } else if (j >1) {
                if(dp[i][j-2]) {
                    dp[i][j] = true
                }
            } else if((i > 0 && (p[j - 2] === s[i - 1] || p[j - 2] === '.') && dp[i - 1][j]) {
                dp[i][j] = true
            }


        }
    }

    return dp[sLen][pLen];
};