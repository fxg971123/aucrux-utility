/**
 * @description:
 * @param {string} address
 * @param {string} position
 * @param {number} ellipsisLength
 * @return {string}
 */
export const formatAddress = (address, position, ellipsisLength = 3) => {
    const ellipsis = "...";
    return address.slice(0, position === "tail" ? 10 : 5) + (position === "tail" ? ellipsis : ellipsis + address.slice(-ellipsisLength));
};
