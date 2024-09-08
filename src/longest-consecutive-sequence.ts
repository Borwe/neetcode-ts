function longestConsecutive(nums: number[]): number {
  const set = new Set(nums)

  let longest = 0

  for(const n of nums){
    if(!set.has(n-1)){
      let length = 0
      while(set.has(n+length)){
	length++
      }
      if(length>longest){
	longest =length
      }
    }
  }

  return longest
};

console.log(longestConsecutive([100,4,200,1,3,2]))
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
console.log(longestConsecutive([1,2,0,1]))
