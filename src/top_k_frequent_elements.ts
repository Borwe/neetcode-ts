type Num = {
    val:  number,
    count: number
}

function topKFrequent(nums: number[], k: number): number[] {
    let elementsCounter = new Map<number, Num>()

    for(const n of nums){
        const amount = elementsCounter.get(n)
        if(amount){
            elementsCounter.set(n, {
                count: amount.count+1,
                val: n
            })
            continue;
        }
        elementsCounter.set(n,{
            val: n,
            count: 1
        })
    }

    const result = Array.from(elementsCounter.values()).sort((a,b)=>{
        if(a.count < b.count){
            return 1
        }
        if(a.count > b.count){
            return -1
        }
        return 0
    }).map(a=>a.val)

    return result.slice(1,k)
};