# [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)

```sh
new Date(year, month, day)
```
Creates a JavaScript Date instance that represents a single moment in time in a platform-independent format.Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

```sh
.toLocaleString('language', {options})
```
The toLocaleString() method returns a string with a language sensitive representation of this date.

The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function.

```sh
weekday: 'long'
day: '2-digit'
hour12: 'false'
```
# [Year](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
Because we are not declaring our date as: 
```sh
let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
```

we may not use ```year: 'numeric'```, the date is calculated form 1970, so the year gets crazy. We must use:

```sh
getFullYear()
```
# [{ props.children }](https://reactjs.org/docs/composition-vs-inheritance.html)
You may use a Card component to wrap other components with instead of a classic div. These Card components can still hold a specific classname, but it will add a base style to the components in additon to their special component-specific css. In this project we called ours ```Card.js``` and ```Card.css```

To use the Card as a wrapper, we must pass ```props.children``` between the divs. Essentially, ```props.children``` is a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component. These kinds of components are identified by the official documentation as “boxes”.

Inorder to utilise the additional classes present in the components within the Card component. we set a variable which adds the className value to the css of Card + props.className passed in as prop by the component's CSS.

## Card.js
```sh
const Card = (props) => {
  const classes = 'card ' + props.className;
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card
```
## Component.js wrapped in Card.js
```sh
const Component = () => {
  <Card classname="component-class">
  <Component />
  </Card>
}
```
# [JSX vs createElement](https://reactjs.org/docs/react-without-jsx.html)
React is an object. This is what the custom components are doing 'under the hood', no syntactic sugar.

```sh
return React.createElement(
  'div',
  {},
  React.createElement('h2', {}, "Lets get Started!"),
  React.createElement(Expenses, { items: expenses} )
);
```
The above is the same code as the JSX below:

```sh
return (
  <div>
    <h2>Lets get Started!</h2>
    <Expenses items={expenses} />
  </div>
);
```

# Module Takeaways

```In react we write Declarative JS code```
* With React, you define the "goal" (i.e what should be shown on the screen) and let React figure out how to get there.

```JSX```
* JSX is a special, non-standard syntax which is enabled in React Projects

```Components```
* "Components" are really just a way of thinking about user interfaces. React embraces that concept and gives you tools to build components that you can then combine.
* Every UI in the end is made up of multipe building blocks (=components), hense it makes sence to think about user interfaces as "combination of components".
* A component is just that: A JS function that typically returns some HTML (or, to be precise: JSX) code which will be shown on the screen when that component is used.

```Declerative```
* You define the desired outcome (e.g. a tagret UI) and let the library React figure out the steps.
* You define the target "state" (UI) and React figures out which JS commands need to be executed to bring that result to life.

```Root```
* In react, you build a component tree with one root component that's mounted into a DOM node.
* You build a component tree that has one root node.

```Component Tree```
* A component tree means that you have a root node which then has more components nested beneath it.
* You build a tree by nesting components into each other - just as you build a HTML tree when building a standard HTML document.

```Props```
* Props are used to pass data between components.
* They are custom HTML attributes.
* Because you build your own HTML elements in React, you also define your own attributes(props).

```Dynamic Data```
* You can use single curly braces { } with any JS expression between them.
* You can't put block statements (e.g. if statements) between those curly braces but you can output any result of any JS expression by using this special feature.