import BigNumber from 'bignumber.js';

export type NumberLike = string | number | bigint | BigNumber;

/**
 * @description: 
 * @return {*}
 */
export const zero = new BigNumber(0);
/**
 * @description: 
 * @param {BigNumber} value
 * @return {bigint}
 */
export const toBigInt = (value: BigNumber): bigint => BigInt(value.dp(0).toFixed());

/**
 * @description: 
 * @param {NumberLike} value
 * @return {BigNumber}
 */
export const toBigNumber = (value: NumberLike): BigNumber =>
    new BigNumber((value + '').replaceAll(',', ''));

/**
 * @description: 
 * @param {number} decimals
 * @return {*}
 */
export const decimalsToNumber = (decimals: number) =>
    new BigNumber(10).pow(decimals);

/**
 * @description: 
 * @param {NumberLike} originTokenQty
 * @param {*} tokenDecimals
 * @param {number} precision
 * @param {*} BigNumber
 * @return {*}
 */
export function parseToCommon(
    originTokenQty: NumberLike,
    tokenDecimals = 0,
    precision: number
) {
    const replacedQty = (originTokenQty + '').replaceAll(',', '');
    const bn = new BigNumber(replacedQty).shiftedBy(-tokenDecimals);
    return bn.dp(precision, BigNumber.ROUND_DOWN);
}

/**
 * @description: 
 * @param {NumberLike} value
 * @return {*}
 */
export function getPrecision(value: NumberLike) {
    const replacedQty = (value + '').replaceAll(',', '');

    const [integer, float] = replacedQty.split('.');

    if (!float) return 0;

    const BN = toBigNumber(replacedQty);

    return BN.isNaN() ? 0 : float.length;
}

/**
 * @description: 
 * @param {NumberLike} commonQty
 * @param {number} tokenDecimals
 * @return {*}
 */
export const parseToOrigin = (commonQty: NumberLike, tokenDecimals: number) =>
    new BigNumber(commonQty + '').shiftedBy(tokenDecimals);


/**
 * @description: 
 * @param {NumberLike} originTokenQty
 * @param {number} precision
 * @return {BigNumber}
 */
export function toPrecision(originTokenQty: NumberLike, precision?: number): BigNumber {
    const bn = new BigNumber(originTokenQty + '');

    return new BigNumber(
        precision ? bn.decimalPlaces(precision).toPrecision() : bn.toPrecision()
    );
}