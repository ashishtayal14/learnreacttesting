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
2. Jest is the recommended test library by React team.
3. But jest can be used in general to test any javascript application.
4. React and Jest both are under MIT licence now which is a less restricted licence.

### Practical Jest Usage

1. **Local test watch** :- This is something which helps the developers to see if their code is breaking the application in real time.
2. **CI build** :- This helps the CI pipeline to accept or reject and rollback a particular CI build. 
3. **Coverage** :- It is very e ssential to see the coverage of the application in our test.

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
5. 


## Start Jesting

### Jest Installation

1. You can install using Npm or Yarn.
2. The local installation should determine the version, but in practice the CLI may call the local or global installation. So the CLI behaviour is not consistant accross different machines. 
3. CI installs Jest and CLI automatically based on package.json file.

Intall Jest CLI :- 
1. `npm install -g jest-cli`
2. `jest` : If everything is correct then this should display the below screen.
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
2. Once you run `npm run test` it will throw an error saying that there are not tests to run.

jest | npm run test
--- | ---
We didn't get an error even if we don't have any test | We do get an error.

The reason for the above is that when we run `npm run test`, jest exits with an error code which is interpreted by the npm script and error is thrown. Whereas in the first case there is nothing to interpret that. This is the same script which is executed by the CI to check for any error in test execution.

### Test files

There are 2 ways to create test files
1. Place them inside `__test__` folder. 
2. Any file with  `.spec` or `.test` in their filename are considered test files. Eg header.test.js or header.spec.js

Jest goes through all the files and folder in your application to look for the test files.

Test in folder | Test using file name
--- | ---
Test files are segrigated than main files | Test are always adjacent to files
No need to have a specific name for test files | Possible to isolate test based on named patterns

Since we can run the test using file name, we can use this to run tests with similar files names at the same time. Eg `jest user-*.js`

### Jest Globals


## Mocking Functions and Modules

## Snapshot Testing

## Testing Components

## Advanced Jest Matchers
