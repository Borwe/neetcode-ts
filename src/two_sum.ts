function twoSum(nums: number[], target: number): number[] {
  let sMap: Map<number, number> = new Map()
  for(let i = 0; i<nums.length; i++){
	let diff = target - nums[i];
	if(sMap.has(diff)){
	  return [i, sMap.get(diff)!]
	}
	sMap.set(nums[i],i)
  }
  return [];
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
