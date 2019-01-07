let __value = 42;
const isomorphicFetch = jest.fn(() => new Promise(resolve=> resolve(__value))); // This is a spy function
isomorphicFetch.__setValue = v => __value = v;
export default isomorphicFetch;