/**
 * @description:
 * @param {string} address
 * @param {string} position
 * @param {number} ellipsisLength
 * @return {string}
 */
export var formatAddress = function (address, position, ellipsisLength) {
    if (ellipsisLength === void 0) { ellipsisLength = 3; }
    var ellipsis = "...";
    return address.slice(0, position === "tail" ? 10 : 5) + (position === "tail" ? ellipsis : ellipsis + address.slice(-ellipsisLength));
};
