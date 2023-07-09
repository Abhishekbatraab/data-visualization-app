export function calculateMean(wineData){
    let sumOfValues = wineData.reduce(function(sum, curr){
        sum=sum+Number(curr);
        return sum
    },0).toFixed(2);
    console.log("Calculate Mean is ",(sumOfValues/178).toFixed(2));
    return (sumOfValues/178).toFixed(2);
}

export function calculateMedian(wineData){
    let length = wineData.length;
    let median = 0
    if(length % 2 == 1){
        median = (Number(wineData[length]) + 1)/2;
    }else{
        median = (Number(wineData[length/2]) + Number(wineData[(length/2)-1])) /2
    }
    console.log("Median is ", median);
    return median.toFixed(2);
}

export function calculateMode(wineData){
    const mode = {};
    let max = 0, count = 0;

    for(let i = 0; i < wineData.length; i++) {
        const item = wineData[i];
        
        if(mode[item]) {
            mode[item]++;
        } else {
            mode[item] = 1;
        }
        
        if(count < mode[item]) {
            max = item;
            count = mode[item];
        }
    }
    console.log(max, count);
    return max;
}

export function calculateGamma(Ash, Hue, Magnesium){
    let gamma = (Ash * Hue)/Magnesium;
    return Number(gamma.toFixed(2));
}