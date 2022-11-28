/**
 * @description: Deferred execution of functions
 * @param {number} ms
 * @return {void}
 */
export function sleep(ms) {
    var start = Date.now();
    var now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}
