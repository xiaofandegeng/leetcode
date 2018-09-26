/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums){
    let len = nums.length;
    if(len < 3) return []

    let result = []
    nums.sort((a,b) => a-b)

    let index = 0;
    while(index < len-2){
        if(nums[index] === nums[index-1] && index>0){
            index++
            continue
        }
        let target = nums[index];
        let start = index + 1;
        let end = len - 1;
        let sum = nums[start] + nums[end]


        while(start < end){
            if(target < sum){
                index++
                continue
            }
            if(target > sum){
                end--
                continue
            }
            else{
                if(start-1 > index && nums[start]===nums[start-1]){
                    start++
                    continue
                }
                if(end+1 < len && nums[end] === end[end+1]){
                    end--
                    continue
                }
                else{
                    result.push([nums[index],nums[start],nums[end]])
                }
            }
        }
        index++
    }
    return result
}