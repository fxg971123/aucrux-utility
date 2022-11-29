import BigNumber from 'bignumber.js';
export type NumberLike = string | number | bigint | BigNumber;
/**
 * @description:
 * @return {*}
 */
export declare const zero: BigNumber;
/**
 * @description:
 * @param {BigNumber} value
 * @return {bigint}
 */
export declare const toBigInt: (value: BigNumber) => bigint;
/**
 * @description:
 * @param {NumberLike} value
 * @return {BigNumber}
 */
export declare const toBigNumber: (value: NumberLike) => BigNumber;
/**
 * @description:
 * @param {number} decimals
 * @return {*}
 */
export declare const decimalsToNumber: (decimals: number) => BigNumber;
/**
 * @description:
 * @param {NumberLike} originTokenQty
 * @param {*} tokenDecimals
 * @param {number} precision
 * @param {*} BigNumber
 * @return {*}
 */
export declare function parseToCommon(originTokenQty: NumberLike, tokenDecimals: number, precision: number): BigNumber;
/**
 * @description:
 * @param {NumberLike} value
 * @return {*}
 */
export declare function getPrecision(value: NumberLike): number;
/**
 * @description:
 * @param {NumberLike} commonQty
 * @param {number} tokenDecimals
 * @return {*}
 */
export declare const parseToOrigin: (commonQty: NumberLike, tokenDecimals: number) => BigNumber;
/**
 * @description:
 * @param {NumberLike} originTokenQty
 * @param {number} precision
 * @return {BigNumber}
 */
export declare function toPrecision(originTokenQty: NumberLike, precision?: number): BigNumber;
