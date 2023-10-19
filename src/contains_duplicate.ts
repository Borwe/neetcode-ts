/// answers https://leetcode.com/problems/contains-duplicate/
function containsDuplicate(nums: number[]): boolean {
  let setVals = new Set()
  for(let i = 0; i < nums.length; ++i ){
    if(setVals.has(nums[i])){
      return true;
    }
    setVals.add(nums[i])
  }
  return false
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
