/**
 * @description: The method of summation
 * @param {number} data
 * @return {number}
 */
export function sum(data) {
    return data.reduce(function (sum, item) { return sum + item; }, 0);
}
