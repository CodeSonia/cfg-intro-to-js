## File Sture, Imports and Exports

### Imports
Import relative files by using:
```
from ./
```

Use the name of the file without the extension, so **NOT** App.js but:
```
import App from './App';
```
**OR**
```
import { App } from './App';
```

Use `export default` in the file being imported, this keeps the import nice and simple `import App`:

- Add the below to the App.js file

```
export deafult App;
```

**OR**
```
export { App };
```

## Expression
React components can be defined by using classes or functions. Originally it was purely class based but since support for functions was introduced, **functions are the recommended method for defining components**.

### Expression Method:
```
import React from 'react';

function Button() {
    return (
        <button type="button">Click Me</button>
    );
};

export default Button;
```
This is an example of a component `Button` defined using **function expression**. Key parts of this expression includes:
- `function` keyword
- Name of the function(Button)
- Round brackets - function arguments go here
- Curly brackets - inside goes the actual function code
- `return` keyword - what's being sent back

### Arrow Method:
The alternative to using the function expression for defining functions is the **arrow syntax**. The differences between an arror syntax and the expression are:
- Assignment to a variable `const Button =` this is not essential but allows it to be used later in a file
- Round brackers - function argument goes here
- The => arrow is what states it is a function 
- Curly brackets - inside goes the actual function code
- `return` keyword is what is being sent back 

The Pros to this is that:
- simple and single line function 

```
import React from 'react';

const Button = () => {
    return (
        <button type="button">Click Me</button>
    );
}

export default Button;
```
### Class Component
Key parts of a class component is:

- importing `Component` from react - not necessary, but it is more readable
- `class` keyword
- Name of the class `Button`
- `extends` keyword
- Name of the class to build on top of `Component` - React provides a parent class with common methods e.g. render
- `render` method - an internal function that defines what is rendered in the DOM

```
import React, { Component } from 'react';

class Button extends Component {
    render() {
        return <button type="button">Click Me</button>; 
    }
}

export default Button

```

## Props
Components can pass pieces of information to each other called **props**. It's similar to how we call functions in Python, and pass values for them for use. 

We can pass anything, and assign any ID/property name to the lower component - for example: `nameDoesNotMatter = "Prop'nameDoesNotMarrer' value"

> NOTE that all components receive a prop object anyway; adding values to it in the parent component above just means that the object actually as a **propNameID : propValue** this time

It is a way of making components customisable, as opposed to hard-coding stuff!

## Prop Validation
The whole purpose of components is reusability but how can you ensure the props being passed into that same component are what's needed?

You can do this with vanilla JS but it's easier and more common to use the `prop-types` packages. To install this:

- Go to your app directory in your terminal
- Run `npm install prop-types`
- Now you can import this in your component: `` import PropTypes from 'prop-types';
- It comes with pre-packages with all sorts of useful types you can check against and required props such as `isRequired`

## Testing
[View here for more information](https://legacy.reactjs.org/docs/testing-recipes.html#rendering)

- Unit testing - simple input/output tests for functions that could or should live outside components
- Snapshot testing - with dummy inputs does your compponent render and do the DOM elements match up to last time?
- Component testing - with the component rendered does it change to user inputs as expected?

```
const sum = (a,b) => a + b;

describe("sum tests", () => {
    test("adding 1 + 2 should return 3", () => {
        expect(sum(1,2)).toBe(3);
    })
})
```

```
it("renders correctly", () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
});
```