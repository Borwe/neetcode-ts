function valueAdd(c: string, map: Map<string, number>){
  let v = map.get(c);
  if(v==undefined){
    map.set(c, 1)
    return
  }

  v += 1
  map.set(c, v)
}

function isAnagram(s: string, t: string): boolean {
  if(s.length != t.length) return false;

  let sMap: Map<string, number> = new Map();
  let tMap: Map<string, number>= new Map();

  for(let i = 0;i<s.length; i++){
    valueAdd(s[i],sMap)
    valueAdd(t[i],tMap)
  }

  for(let key of sMap.keys()){
    if(sMap.get(key) != tMap.get(key)) return false;
  }

  return true
};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))
