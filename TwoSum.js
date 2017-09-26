/**
 * Created by nake12 on 2017/9/17.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * Given nums = [2, 7, 11, 15], target = 9,

 Because nums[0] + nums[1] = 2 + 7 = 9,
 return [0, 1].
 */
var twoSum = function(nums, target) {
    var result = [];
    var map = {};
   for (let i=0;i<nums.length;i++) {
       var value = nums[i];
       var needValue = target - nums[i];
       if (needValue in map) {
           result.push(map[needValue]);
           result.push(i);
           break
       } else {
         map[value] = i
       }
   }

    return result
};