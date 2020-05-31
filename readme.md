# Payvision calculator

In this exercise you are given the legacy code of Payvision Calculator web app. Maintainance and new features development is your responsability.

## Your tasks

1. ✅ Code review: please list all good/bad practices you find in this application.
2. It seems the app is buggy... Could you fix it?
3. Add divide and multiply operations.
4. How would do you test this app?
5. Can you improve the UI/UX?

You are allowed to change as much code as you consider.

**Bonus:**

1. Configure the application to allow use of keyboard numpad.

### 1. Code review

There are multiple bugs and some bad decisions in the web app.
You will find all the functional and style fixes in the section 2.
By the other hand, UX fixes will be reported on the section 5.

In summary:

❌ Bad project structure. There is only one file mixing all the functionalities, styles and html. Mix style, js and html on the same file is a good approach for a small components (Vue.js) but not for a whole application.
❌ Bugs with operators and numbers misplaced.
❌ "id" property must be unique for html elements.
❌ Operator not restored after any operation.
❌ Not using a style naming convencion like BEM.
❌ Using 'for' loops to iterate over an array. It is highly recommended to use functional programming methods (map, forEach, filter, ...).
❌ Not ready for mobile version.
❌ There's not html, head and body tags and metadata neither.
❌ It using h2 for the web app title. It is recommended to use h1 in this case.
❌ Not restoring default browser css. The final result will be different on every browser.
❌ Not using variables for app colors.
❌ Very bad position of keys, not using a clear order.
❌ There's not hover and ative pseudo-class on buttons.
❌ Not using a good character for represent sum and minus operators. They are no place in the middle on the button.
❌ Key C was the standard in phisical calculators for clear the result. But nowdays, there are better approachs.
❌ Not good animation for broken (NaN) and infinite results.
❌ Hard to read long numbers on result area.
✅ Handle infinite and NaN
✅ Extract "el" function to get html element
✅ Use of relative sizes (em) insteand of pixels

### 2. Testing and bug fixing

Fixes:

- Minus and plus operations
- 0 and 3 button switched
- broken class fixed
- Split index on multiple files
- Restore operator after any operation
- For loops changed for forEach
- Set data-result attribute on viewer element and not on equals button
- Reractor switch case operators
- Reset styles
- Use BEM for naming classes
- Use a grid to display the calculator and not floats
- Use h1 for title page
- Add html, head and body tags
- Add metadata
- Add theme file and use color variables
- Fix layout for mobile version
- Added viewport

### 3. New features implementation

Current version is 1.2.2. Should we increase the version? How? Why?

Yes, we will upgrade the app version to 1.3.0 as [semver](https://semver.org/) recommend.
It is a MINOR upgrade because we add more funtionalities without make incompatible API changes.

### 4. Test automation

We would like to automate testing of this application.

- What kind of tests would you implement? Why?

**Bonus**: Implement the tests.

### 5. UI/UX design

Do you consider yourself a good designer or UI/UX developer?

- Improve the UI/UX to be more user friendly.

Feel free to do any changes. Show us what you are capable to!

## How to run the application using local server

To run the project, open a terminal and execute the following command from project root path:

- Install depencencies:

> yarn

- Run the application

> yarn serve

This command will run a local web server in port 8082:
[http://localhost:8082/src/index.html](http://localhost:8082/src/index.html)
