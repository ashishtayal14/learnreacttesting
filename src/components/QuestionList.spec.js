import delay from 'redux-saga';

describe(`The question details component 2`, () => {
    beforeAll(() => {
        console.log("Before All");
    })
    beforeEach(() => {
        console.log("Before Each");
    })
    it(`should not regress1`, () => {
        console.log("Test 1");
    })
    it(`should not regress2`, () => {
        console.log("Test 2");
    })
    afterEach(() => {
        console.log("After Each");
    })
    afterAll(() => {
        console.log("After All");
    })
})

describe(`Async function testing`, () => {
    it("async test 1", (done) => {
        console.log("start async test 1");
        setTimeout(() => {
            console.log("async test 1");
            done();
        }
            , 1000);
    })
    it("async test 2", () => {
        console.log("start async test 2");
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("async test 2");
                resolve();
            }, 1000)
        }
        );
    })
    it("async test 3", async () => {
        console.log("start async test 3");
        await delay(1000);
        console.log("async test 3")
    })
})