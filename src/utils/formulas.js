/**
 * function to calculate mean measurement for the input data
 * @param {*} wineData 
 * @returns 
 */
export function calculateMean(wineData){
    let sumOfValues = wineData.reduce(function(sum, curr){
        sum=sum+Number(curr);
        return sum
    },0).toFixed(2);
    return (sumOfValues/178).toFixed(2);
}

/**
 * function to calculate median measurement for the input data
 * @param {*} wineData 
 * @returns 
 */
export function calculateMedian(wineData){
    const sortedData = wineData.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);
    
    if (sortedData.length % 2 === 0) {
        return ((sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2).toFixed(2);
    } else {
        return (sortedData[middleIndex]).toFixed(2);
    }
}

/**
 * function to calculate mode measurement for the input data
 * @param {*} wineData 
 * @returns 
 */
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
    return max;
}

/**
 * function defined to calculate 'Gamma' value and create a property for it  
 * @param {*} Ash 
 * @param {*} Hue 
 * @param {*} Magnesium 
 * @returns 
 */
export function calculateGamma(Ash, Hue, Magnesium){
    let gamma = (Ash * Hue)/Magnesium;
    return Number(gamma.toFixed(2));
}