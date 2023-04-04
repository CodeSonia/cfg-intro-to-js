## DOM Manipulation

> DOM = Document Object Model

The HTML DOM is the interfact created when a webpage first loads that contains all of the information relevant to the construction of that page. 

Through the DOM, JS gains the power to alter, manipulate elements, styles, and information. **The DOM is a std format for how we can get, change, add or delate elements.**

This also involes adding **events** i.e. when adding interaction whenever a button is clicked, animating an element or storing data given by a user.

> DOM manipulation add dynamic to a webpage by making it interactive!

## Accessing the DOM
- **getElementByID()**
This is one of the common methods as it allows you to access an element by it's id attributes. For example, if you have an html element called `myId` you can acess it using `const = document.getElementById("myId");`

- **querySelector() or querySelectorAll()** these use CSS-style selectors to access elements. For example, if you want to access the first `<p>` element with a class of `myClass`, you can do `const = document.querySelector("p.myClass");`

## What else can be done?
- Change all the HTML attributed and elements
- Create new HTML elements and attributes
- Remove HTML elements and attributes
- Change the CSS styling of elements
- React to events on the page

```
document.getElementById("blue-circle").style.color = "red";

document.getElementbyId("message-box").innerHTML = "Added text";

document.getElementById("pop-up").style.visibility = "hidden";
```

## DOM Events
DOM events are actions or occurrences that happen in the document i.e. a button being clicked or an element hovered over. These **events can trigger bits of JS code** which then in turn **change the structure of the DOM**. This allows us to create a level of interaction between the user and the interface i.e. sending info to a database, changing an image or adapting the style of certain elements. 

>Common examples of DOM events incl. clicks, mouseover movements, submit and load actions as well as key presses. 

## Event Listeners
Event listeners are an important part of the DOM manipulation; they are lines of code we create to listen for events to happen and then trigger reactions. There is a two part process for creating an event listener:
- We need to specify the element we're watching - in this case, called ```ourElement```: we do this by using the ```document.getElementById("ourElement");```
- We add our event listener, and specify the king of event we're looking for as well as what we want that to trigger: ```.addEventListener("click", displayTime);```

