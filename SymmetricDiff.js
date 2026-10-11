const symmetricDifference = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const combArr = [...set1, ...set2];
    const elObj = {}
    for(const el of combArr) {
        if(el in elObj) {
            elObj[el]++
        } else {
            elObj[el] = 1
        }
    }

    const output = []
    for(const el in elObj) {
        if(elObj[el] === 1) {
            output.push(el)
        }
    }
    return output
};

function sym(...args) {
    const allArray = [...arguments]
    const ouput = allArray[0]
    for(let i=1;i<allArray.length;i++) {
        output = symmetricDifference(ouput, allArray[1])
    }
    return output.sort((a,b) => a-b)
}


console.log(sym([1,2,3],[1,2,5,4]));