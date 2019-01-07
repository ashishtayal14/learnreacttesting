import { handleFetchQuestion } from './fetch-question-saga';
import fetch from 'isomorphic-fetch'

describe("", () => {
    beforeAll(() => {
        fetch.__setValue({ question_id: 42 }) // To set the value of the spy fetch function
    })
    it("", async () => {
        const gen = handleFetchQuestion({ question_id: 42 }); // Creates a generator
        const value = await gen.next().value; // To the 1st yield
        expect(value).toEqual({ question_id: 42 }); // To test the proper response of api
        expect(fetch).toHaveBeenCalledWith(`/api/questions/42`); // To test the proper request of api
    })
});