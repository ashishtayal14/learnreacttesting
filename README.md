# LEARN REACT TESTING

**This is a step by step guide to test your react application**

## Introduction

### Getting Started
1) Clone the repository
2) install dependencies
`npm install && npm run postinstall`
3) Run the dev server
`npm run start-dev`
4) Navigate to the application's url
`http://localhost:3000/`

## Understanding Testing

### Why testing?

1. **Prevents regression** : Regression is a phenomenon in which our website without us wanting it to, goes back to a previous state which is worse than our current state.

2. **Provides objective success criteria** : You can objectively create unit test and say the appliction successeds if they pass all the test.

3. **Facilitates large and complex application** : Testing is one of the tools of making a large application run smoothly.

### What are tests?

1. A suite of test is an application which checks your application.
2. It comprises of assertions
3. They are a part of the project and are commited with the project files
4. Suits are run by CI tools

### Advantages/Disadvantages

Advantage | Disadvantage
--- | ---
Prevents Regression | More Code, debug and maintain 
Reduces Manual Effort | More tools to use 
Verify Corner Cases | Additional Dependency and cloud compatablilty
Modular development | Sometimes tests are writhen just for the sake of writing 

### Kinds of Test

Test Type | What It Tests | Required Tools
--- | --- | ---
Unit test | A single function or service| Mocha/Jest
Component test | A single component(functionality) | Jest/Enzyme
Snapshot test | A single component(regression) | Jest
Performance test | Measures performace of application | 
Coverage test |  Test for the test(How much code is covered in test) |  Jest 
End to End test | Interaction b/w multiple components | Protractor/Cypress
 
## Introduction to Jest

### Introduction

1. Javascript library installed using npm or yarn and run via command line
2. It is a **test-runner**.

### Ecosystem

1. Jasmine/Mocha : 
    1. Tools that Jest is build on top off.
    2. Test-runners just like jest.
    3. They don't include Mocking and Snapshot.

2. Jest : 
    1. Build on top of Jasmine/Mocha.
    2. Includes mocking and snapshot.
    3. Has assertion libraries and CLI.
    4. Works with and without react.

3. Enzyme :
    1. Not a test-runner.
    2. Has tools to test react application.
    3. Other such libratry is React test renderer.

### Jest vs Mocha

 Task | Jest | Mocha
 --- | --- | ---
 Run Tests | Yes | Yes
 Asyncronous | Yes | Yes
 Spies Included | Yes | No(Need to use third party library)
 Snapshot Testing | Yes | No(Need to use third party library)
 Mocking module | Yes | No(Need to use third party library)

### Jest Vs Jest CLI

Jest | Jest CLI
--- | ---
Jest is generally installed localy in the project | Installed globally
Used with npm script("test" : "jest") | Run directly in command line
Task runner | CLI tool to configure jest(Also used by CI tools to configure and run jest).

### Jest and React the connection

1. Jest was created by a team which had memebers who also worked on creating react.
2. Jest is the recommended test library by React team.
3. But jest can be used in general to test any javascript application.
4. React and Jest both are under MIT licence now which is a less restricted licence.

### Practical Jest Usage

1. **Local test watch** :- This is something which helps the developers to see if their code is breaking the application in real time.
2. **CI build** :- This helps the CI pipeline to accept or reject(rollback) a particular CI build. 
3. **Coverage** :- It is very essential to see the test coverage of an application.

Junior Developer | Senior Developer
--- | ---
Proper use of **describe** and **it** or **suite** and **test** blocks | Configure Jest via CLI arguments and configuration files
Understand the importance and significance of a certain test and write good and robust test | Package the configuration into npm scripts which is used both by developers and CI.
Prevent regression | See the test coverage and advice if the test are effective or not. 

### Common Jest Pitfalls

1. Test are just writen for the sake of code coverage.
2. No integration with the version control system like GIT. So even the failing test files are commited.
3. Jest is not integrated with dev's workflow. This way the dev's move to the next story without writing the desired test.
4. No integration with CI.


## Start Jesting

### Jest Installation

1. You can install using Npm or Yarn.
2. The local installation should determine the version, but in practice the CLI may call the local or global installation. So the CLI behaviour is not consistant accross different machines. 
3. CI installs Jest and CLI automatically runs test script based on package.json file.

Intall Jest CLI :- 
1. `npm install -g jest-cli`
2. `jest` : If everything is correct the below screen will be displayed.
<img width="895" alt="screenshot 2018-12-26 at 8 04 54 pm" src="https://user-images.githubusercontent.com/12914629/50448860-9a72fb00-0949-11e9-9572-b47e57753f5d.png">
3. This is using the global jest installation since we don't have any local jest installation as yet.

Intall Jest localy :-
1. `npm install --save jest@22.3.0` here we are installing this jest verions specificaly since the test functions we are going to use might have changed in the latest version.

### Running test 

1. Test are run using Jest CLI. 
2. Different test scripts are configured in package.json. Eg :
    1. test
    2. test-watch
    3. test-e2e
    4. test-update
    5. test-prod
3. In practice test's are run by CI software and watched by developers

To start :
1. Add the script `test: "jest"` in your package.json script.
2. Once you run `npm run test` it will throw an error saying that there are no tests to run.

jest | npm run test
--- | ---
We didn't get an error even if we don't have any test | We do get an error.

The reason for the above is that when we run `npm run test`, jest exits with an error code which is interpreted by the npm script and error is thrown. Whereas in the first case there is nothing to interpret that. This is the same script which is executed by the CI to check for any error in test execution.

### Test files

There are 2 ways to create test files
1. Place them inside `__tests__` folder. 
2. Any file with  `.spec` or `.test` in their filename are considered test files. Eg header.test.js or header.spec.js

Jest goes through all the files and folder in your application to look for the test files.

Test in folder | Test using file name
--- | ---
Test files are segrigated from main files | Test are always adjacent to files
No need to have a specific name for test files | Possible to isolate test based on named patterns

Since we can run the test using file name, we can use this to run tests with similar files names at the same time. Eg `jest user-*.js`

### Jest Globals

1. **it(test)** : 
    1. This is a method to which you pass a function as an argument, which is executed as block of test by the test runner.
    2. There should be atlest 1 it/test block in our test file, otherwise jest presumes there is something fishy and throws an error.
    3. It generaly starts with a __"should"__. Eg : 
    ```javascript 
    it(`should not regress`, ()=>{})
    ```

2. **describe(suite)** :  
    1. This is an optional method for grouping the it/test blocks together. 
    2. You may or maynot have a describe/suite block in the test file.

### Globals Demo

1. Using `__tests__` folder
    1. Create a folder `__tests__` inside the components folder.
    2. Create a file `QuestionDetail.js` inside this folder.
    3. Write a describe and it block in it.
    4. Execute `jest`.

2. Using `.test` or `.spec` in the filename. 
    1. Create a file `QuestionList.spec.js` alogside `QuestionList.jsx`.
    2. Now write the describe and it block in it as well.
    3. Execute `jest`.

### Watching for changes

1. In watch mode test are run based upon which files have changed.
2. The changes are detected by jest automatically.
3. This prevent regression.
4. Just run `jest --watch` in the CLI and see that jest starts watching for any changes in the test files automaticaly. Check this by changing any test file.

Below are the options which you get in watch mode :
1. Press a to run all tests.
2. Press f to run only failed tests.
3. Press q to quit watch mode.
4. Press t to filter by a test name regex pattern.
5. Press p to filter by a filename regex pattern.
6. Press Enter to trigger a test run.

### More on Globals

1. **beforeEach** : 
    1. Runs a piece of code before each it/test block.
    2. Usefull for setup activity. Eg database, mock instances etc.

2. **beforeAll** :
    1. Runs only once before the first test in a test file.

3. **afterEach** :
    1. Runs after each it/test block.
    2. Usefull to close an open connection etc.

4. **afterAll** :
    1. Runs after the last test block has executed in a file.

**NOTE** : If these are declayered inside a suite(describe) block then they run only for the test in that perticular suite. But if they are declayered outside the suite then they run for all the test declayered inside that test file.

### More Globals Demo

1. In the `QuestionsList.spec.js` file add the below code block.
    ```javascript
        beforeAll(()=>{
            console.log("Before All");
        })
        beforeEach(()=>{
            console.log("Before Each");
        })
        it(`should not regress1`, ()=>{
            console.log("Test 1");
        })
        it(`should not regress2`, ()=>{
            console.log("Test 2");
        })
        afterEach(()=>{
            console.log("After Each");
        })
        afterAll(()=>{
            console.log("After All");
        })
    ```
2. Order of execution : `beforeAll` -> `beforeEach` -> `afterEach` -> `afterAll`

### Skip and Isolate Test

1. **Skip Test** : 
    1. It skips/ignores the test and prevents it from running.
    2. Keyword used `skip`.
    3. Use code block below to skip the first test and execute the rest of them.
    ```javascript
        it.skip(`should not regress1`, ()=>{
            console.log("Test 1");
        })
        it(`should not regress2`, ()=>{
            console.log("Test 2");
        })
        it(`should not regress3`, ()=>{
            console.log("Test 3");
        })
        it(`should not regress4`, ()=>{
            console.log("Test 4");
        })
    ```
2. **Isolate Test** : 
    1. It isolates/highlights the test to run and prevents other tests from running. 
    2. Opposite of Skip.
    3. Keyword used `only`.
    4. Use code block below to only execute the first test and skip the rest of test.
    ```javascript
        it.only(`should not regress1`, ()=>{
            console.log("Test 1");
        })
        it(`should not regress2`, ()=>{
            console.log("Test 2");
        })
        it(`should not regress3`, ()=>{
            console.log("Test 3");
        })
        it(`should not regress4`, ()=>{
            console.log("Test 4");
        })
    ```

### Async Testing

In async testing we need to inform or notify jest that the test execution is over.It's common in JavaScript for code to run asynchronously. When you have code that runs asynchronously, Jest needs to know when the code it is testing has completed, before it can move on to another test. Jest has several ways to handle this. **It is important to understand that the tests would run synchonously but the code inside the test is asynchronous**. For this we have 3 methods :

1. `Done` :
    1. Using `done` callback. This is a callback which is passed to the `it` block. Invoking `done()` informs jest that the test has executed.
    2. Code block :
        ```javascript
        it("async test 1", (done)=>{
            setTimeout(done,1000);
        })
        ```
2. `Promise` : 
    1. Any `it` block which return a promise automatically becomes an async test. Invoking the resolver informs jest that the test has executed.
    2. Code block :
        ```javascript
        it("async test 1", ()=>{
           return new Promise((resolve)=>setTimeout(resolve,1000));
        })
        ```

3. `Async` : 
    1. By passing an async test to the `it` block.
    2. Code block :
        ```javascript
        it("async test 1", async ()=>{
            await delay(1000);
        })
        //Here delay is a method which returns a promise. A utility which comes with redux saga.
        ```

`Note : The max value you can give to a setTimeout is 5000ms. It would throw an error if you give it a value more then that.`

## Mocking Functions and Modules

### Why Mocking?

1. **Reduce Dependencies** : It prevents us from loading multiple dependencies and hence improves performance of our application.
2. **Reduce Sideeffects** : It reduces the sideeffects like the api call etc while testing.
3. **Sets Custom State** : It helps us to set a custom application or component state during testing.

### What is Mocking?

A mock is a convincing duplicate without any internal workings. They can be created automatically(using jest) or manualy. Manual mocking gives more control on how the mock behaves. We can also use **spies** for improving our mocks.

**Process** :
1. Generaly we mock a api/class/object and import it to access it in the test file. Scan the original api/class/object and create a mock with the exact same methods as defined in the api/class/object.
2. Ensure that a method which returns a promise still returns a promise in the mock.
3. Create mocks values for complex values that are returned by methods which are required in the test. These mock values should have the exact same structure as the real values.

**Mock Functions** :
1. Also called as **spies**.
2. They don't have any sideeffests.
3. Counts functions calls. This can help is running assertions.
4. Records arguments passed when called.
5. Can be loaded with specific return value.

**Creating mock files** :

1. Appropriately names npm mocks are loaded automatically.
2. They must reside in a `__mocks__` folder next to mocked module.
3. Npm and local modules can both be mocked.
 
### Mock Demo

1. Create a file `fetch-question-sage.spec.js` alogside `fetch-question-sage.js`. To invoke this test file we would use `jest saga`. Here saga is the rejex we are using since this is the only test file whose name has saga in it.
2. Add the below code in this file :
    ```javascript
    import { handleFetchQuestion } from './fetch-question-saga'; // api to fetch the questions
    import fetch from 'isomorphic-fetch' // spy function to mock isomorphic-fetch npm module

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
    ```
3. Now we need to create the mock for `isomorphic-fetch`. This is done by creating a file with the same name ie `isomorphic-fetch.js` in a folder named `__mocks__` at the same level as the node_modules. Add the below code to the mock file :
    ```javascript
    let __value = 42;
    const isomorphicFetch = jest.fn(() => new Promise(resolve=> resolve(__value))); // This is a spy function which return a promise. This is called when you call fetch()
    isomorphicFetch.__setValue = v => __value = v;  
    export default isomorphicFetch;
    ```





## Snapshot Testing

## Testing Components

## Advanced Jest Matchers
