/**
 * function to calculate mean measurement for the input data
 * @param {*} wineData 
 * @returns 
 */
export function calculateMean(wineData){
    const sum = wineData.reduce((total, item) => total + Number(item), 0);
    return (sum / wineData.length).toFixed(2);
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
    let mode = Object.values(
        wineData.reduce((count, e) => {
            if (!(e in count)) {
            count[e] = [0, e];
            }
            
            count[e][0]++;
            return count;
        }, {})
    ).reduce((a, v) => v[0] < a[0] ? a : v, [0, null])[1];
    return mode;
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