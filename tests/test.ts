import { formatAddress, sum } from "../src/index";
import { expect } from "chai";

describe("sum unit tests", (): void => {
    it("adding two positive numbers", (): void => {
        const actual: number = sum([1, 2]);
        expect(actual).is.equal(3);
    });
    it("adding two negative numbers", (): void => {
        const actual: number = sum([-5, -2]);
        expect(actual).is.equal(-7);
    });
    it("adding one positive and one negative number", (): void => {
        const actual: number = sum([7, -2]);
        expect(actual).is.equal(5);
    });
});

describe("formatAddress", (): void => {
    it("... in middle", (): void => {
        const out = formatAddress("jy6bm-spcda-fo3ru-3q7qr-j5nus-xr7wq-jqc5l-xxkji-g22pb-rvq7l-yae", "middle");
        console.info(out);
    });
    it("... in tail", (): void => {
        const out = formatAddress("0x3a744A6bcDbba73C93D088f349f9f4B9D36bDA3f", "tail");
        console.info(out);
    })
});