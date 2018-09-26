/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let n = nums.length;
    if (n < 3) return [];
    let result = [];
    nums.sort((a, b) => a - b);
  
    let index = 0;
    while (index < n - 2) {
      if (index > 0 && nums[index] === nums[index - 1]) {
        index++;
        continue;
      }
      let target = -nums[index];
  
      let start = index + 1;
      let end = n - 1;
      while (start < end) {
  
        let sum = nums[start] + nums[end];
        if (sum > target) {
          end--;
        } else if (sum < target) {
          start++;
        } else {

          if (start - 1 > index && nums[start] === nums[start - 1]) {
            start++;
            continue;
          }
          if (end + 1 < n &&  nums[end] === nums[end + 1]) {
            end--;
            continue;
          }
          result.push([nums[index], nums[start], nums[end]]);
          start++;
        }
  
      }
  
      index++;
    }
    return result;
  };
  
  