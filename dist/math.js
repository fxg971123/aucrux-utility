/**
 * @description: The method of summation
 * @param {number} data
 * @return {number}
 */
export function sum(data) {
    return data.reduce((sum, item) => sum + item, 0);
}
/**
 * @description:
 * @param {number} data
 * @return {number}
 */
export function getAve(data) {
    return sum(data) / data.length;
}
