## Intro to React
React is a free and open-source front-end JS library for building user interfaces based on UI components. 

### JSX
The biggest difference between React and any other framework is **JSX**. It's essentially JS with the ability to write HTML-like tags:
```
const element = <h1>Hello, world!</h1>;
```

It is called JSX and it is a syntax extension to JS; it's recommended using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the fill power of JS. 

>JSX isn't essential for React, but it just makes things easier. Without you're basically writing a HTML file in JS. 

```
React.createElement('h1', null, 'Hello World!');
```

CSS is a stylesheed language, it describes how HTML should be displayed to the browser. 

Node.js is a cross-platform open-source server environment that enables us to run JS to run on Windows, MacOS and so on.

**npm** (Node Package Manager) is a library and registry for JS software packages. npm also has command-line tools to help you install the different packages and manage their dependencies.

- ``` npm i``` installs dependencies
- ``` npm run <script name>``` runs a specific script in "packages.json"

```
npx create-react-app {your project name}
```
We used npx to run the npm controlled package "create-react-app". This provided us with a boilerplat code to get an initial app up and running in a typical file structure.

Running ```npm start`` in the apps root directory will run a development server locally. 

## Pros of React
React is about creating and using 'components' which are self-contained elements that we manually create through code.

For example, we can create a new button ourselves that fits our vision of what it should be i.e. maybe the design. React allows us to contain all of this code into one "button" component like an object, that can be **deployed over and over again** which makes it easier to use and it be consistent. 

React's second benefit is its **virtual DOM**; it keeps a second copy of our DOM which is updated when we make changes, and publishes.pushes this change into the real DOM when it is ready.
- The benefit of this is **speed**, instead of reloading a page 5 times, React will batch new changes itself so the **entirety of the real DOM doesn't have to reload of change**. 

## Cons of React

- High Pace of Development
React is rapidly changing, which forces its developers to update the way they write code.

- Flexibility and Lack of Conventions
More a result of being a JS based framework but anything is possible and the barn doors are wide open

- Not a full-featured framework
If you look at the MVC (Model View Controller) architecture, React only handles the view part. Whereas frameworks like angular provide the complete MVC framework, which is more structured, and well managed. 

- JSX
This is like JS and HTML syntax, and allows to mix HTML and JS together, but this can make it difficult to work with when you start with React.