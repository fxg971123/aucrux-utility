/**
 * @description: Deferred execution of functions
 * @param {number} ms
 * @return {void}
 */
export function sleep(ms: number): void {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}
