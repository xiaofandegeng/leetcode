var removeDuplicates = function(nums) {
  nums.sort((a,b)=>a-b);
  l = nums.length
  
  for(let i=0;i<l;i++){
      for(let j=l-1;j>i;j--){
          if(nums[i] === nums[j]){
              nums.splice(i,1)
          }
      }
  }
  
};