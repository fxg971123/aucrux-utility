/**
 * @description: The method of summation
 * @param {number} data
 * @return {number}
 */
export function sum(data: number[]): number {
    return data.reduce((sum, item) => sum + item, 0);
}

/**
 * @description: 
 * @param {number} data
 * @return {number}
 */
export function getAve(data: number[]): number {
    return sum(data)/data.length;
}