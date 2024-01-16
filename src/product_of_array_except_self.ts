function productExceptSelf(nums: number[]): number[] {
    let result: number[] = new Array(nums.length).fill(0)
    let prefix = 1;
    for(let i = 0; i<nums.length;i++){
        result[i] = prefix
        prefix *= nums[i]
    }
    let postfix = 1;
    for(let j = nums.length -1; j >= 0; j--){
        result[j] *= postfix
        postfix *= nums[j]
    }
    return result
};