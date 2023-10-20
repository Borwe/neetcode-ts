function groupAnagrams(strs: string[]): string[][] {
  let rMap: Map<string, number[]> = new Map()
  strs.map(s => s.split("").sort((a,b)=>b.localeCompare(a)).join(""))
	.forEach((v,i)=>{
	  if(rMap.has(v)){
		let indexes = rMap.get(v)!
		indexes.push(i)
		rMap.set(v, indexes)
	  }else{
		rMap.set(v, [i])
	  }
	})

  let result: string[][] = []
  for(let is of rMap.values()){
	result.push(is.map(i=>strs[i]))
  }
  return result
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))
