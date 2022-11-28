/**
 * @description: The method of summation
 * @param {number} data
 * @return {number}
 */
 export function sum(data: number[]): number {
    return data.reduce((sum, item) => sum + item, 0);
}