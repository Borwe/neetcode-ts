class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]):string {
    let result = ""
    for(const str of strs){
      result+=str+"#"+str.length+"#"
    }
    return result
  }

  parseNumber(str: string):number{
    const nums = ["1","2","3","4","5","6","7","8","9","0"]
    let strresult: string[] = []
    for(let i = str.length-1; i>=0; i--){
      const val = str[i]
      if(nums.filter(i=>i===val).length > 0){
	strresult.unshift(val)
	continue
      }
      break;
    }
    if(strresult.length===0){
      return -1
    }
    return +strresult.join("")
  }

  /**
     * @param {string} str
     * @returns {string[]}
     */
  decode(str: string): string[] {
    console.log(str)
    let result: string[] = []
    let strval = ""
    for(let i = 0; i<str.length; i++){
      let ch = str[i]
      if(ch === "#"){
	const len = this.parseNumber(strval)
	
	const val = strval.slice(0,len)
	//get supposed length
	console.log(`${strval.length} ${strval} ${len} ${val} ${val.length}`)
	if(val.length == len ){
	  result.push(val) 
	  strval = ""
	  continue
	}
      }
      strval+=ch
    }
    return result
  }
}

let solution = new Solution()
console.log(solution.decode(solution.
  encode([""])))

console.log(solution.decode(solution.
  encode(["neet", "code", "love", "you"])))
console.log(solution.decode(solution.
  encode(["we","say",":","yes","!@#$%^&*()"])))
console.log(solution.decode(solution.
  encode(["1,23","45,6","7,8,9"])))

