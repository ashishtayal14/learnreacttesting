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
2. The comprise of assertions
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
    4. Works with and withoug react.

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
Task runner | CLI tool to configure jest(Also use by CI tools to configure and run jest).

### Jest and React the connection

1. Jest was created by a team which had memebers who also worked on creating react.
2. Jest is the recommended test library by React.
3. 

### 

## Test Running with Jest

## Mocking Functions and Modules

## Snapshot Testing

## Testing Components

## Advanced Jest Matchers
