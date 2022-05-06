## let & const
Read more about [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

Read more about [const](https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Statements/const)

```let``` and ```const``` basically replace ```var```. You use ```let``` instead of ```var``` and ```const``` instead of ```var``` if you plan on
never re-assigning this "variable" (effectively turning it into a
constant therefore).

## ES6 Arrow Functions
[Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) about arrow functions

Arrow functions are a different way of creating functions in
JavaScript. Besides a shorter syntax, they offer advantages
when it comes to keeping the scope of the ```this``` keyword
(see [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_binding_of_this)).

Arrow function syntax may look strange but it's actually
simple.
``` sh 
function callMe(name) {
console.log(name);
} 
```
which you could also write as:
``` sh 
const callMe = function(name) {
console.log(name);
}
```
becomes: 
``` sh 
const callMe = (name) => {
console.log(name);
}
```
### Important:
When having no arguments, you have to use empty
parentheses in the function declaration:
``` sh 
const callMe = () => {
console.log('0lga!');
}
```
When having exactly one argument, you may omit the
parentheses:
``` sh 
const callMe = name => {
console.log(name);
}
```
When just returning a value, you can use the following
shortcut:
``` sh 
const returnMe = name => name
```
That's equal to:
``` sh 
const returnMe = name => {
return name;
}
```
## Exports & Imports
In React projects (and actually in all modern JavaScript
projects), you split your code across multiple JavaScript 
files - so-called modules. You do this, to keep each file/
module focused and manageable.

To still access functionality in another file, you need export
(to make it available) and import (to get
access) statements.

You got two different types of
exports: default (unnamed) and namedexports:

## default => export default ... ; 

## named => export const someData = ... ; 

You can import default exports like this:
``` sh 
import someNameOfYourChoice from './path/to/file.js'; 
```

Surprisingly, someNameOfYourChoice is totally up to you.
Named exports have to be imported by their name:
``` sh 
import { someData } from './path/to/file.js'; 
```

A file can only contain one default and an unlimited amount
of named exports. You can also mix the one default with
any amount of named exports in one and the same file.
When importing named exports, you can also import all
named exports at once with the following syntax:
``` sh 
import * as upToYou from './path/to/file.js'; 
```

upToYou is - well - up to you and simply bundles all
exported variables/functions in one JavaScript object. For
example, if you export 
``` sh 
const someData = ... (/path/to/file.js) 
```
you can access it on upToYou like
this: 
``` sh 
upToYou.someData 
```
##Classes
Classes are a feature which basically replace constructor
functions and prototypes. You can define blueprints for
JavaScript objects with them. 

Like this:
``` sh 
class Person {
  constructor () {
  this.name = '0lga';
  }
}

const person = new Person();
console.log(person.name); // prints '0lga'
```
In the above example, not only the class but also a property
of that class (=> name ) is defined. They syntax you see
there, is the "old" syntax for defining properties. In modern
JavaScript projects (as the one used in this course), you
can use the following, more convenient way of defining
class properties:
``` sh 
 class Person {
  name = '0lga';
 }

 const person = new Person();
 console.log(person.name); // prints '0lga'
```
You can also define methods. Either like this:
``` sh 
class Person {
  name = '0lga';
  printMyName () {
  console.log(this.name); // this is required to referto the class!
  }
}

const person = new Person();
person.printMyName();
```
Or like this:
``` sh 
class Person {
  name = '0lga';
  printMyName = () => {
  console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
```
The second approach has the same advantage as all arrow
functions have: The this keyword doesn't change its
reference.

You can also use inheritance when using classes:
``` sh 
class Human {
  species = 'human';
}

class Person extends Human {
  name = '0lga';
  printMyName = () => {
  console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
console.log(person.species); // prints 'human'
```
## Spread & Rest Operator
The spread and rest operators actually use the same
syntax: 
``` sh 
...
``` 

Yes, that is the operator - just three dots. It's usage
determines whether you're using it as the spread or rest
operator.
### Using the Spread Operator:
The spread operator allows you to pull elements out of an
array (=> split the array into a list of its elements) or pull the
properties out of an object. Here are two examples:
``` sh 
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];
```
Here's the spread operator used on an object:
``` sh 
const oldObject = {
  name: '0lga'
};

const newObject = {
  ...oldObject,
  age: 35
};
```
newObject would then be
``` sh 
{
  name: '0lga',
  age: 35
}
```
The spread operator is extremely useful for cloning arrays
and objects. Since both are [reference types](https://www.youtube.com/watch?v=9ooYYRLdg_g) (and not 
primitives), copying them safely (i.e. preventing future
mutation of the copied original) can be tricky. With the
spread operator you have an easy way of creating a
(shallow!) clone of the object or array. 

## Destructuring
Destructuring allows you to easily access the values of
arrays or objects and assign them to variables.
Here's an example for an array:
``` sh 
const array = [1, 2, 3];
const [a, b] = array;
console.log(a); // prints 1
console.log(b); // prints 2
console.log(array); // prints [1, 2, 3]
```
And here for an object:
``` sh 
const myObj = {
  name: '0lga',
  age: 35
}
const {name} = myObj;
console.log(name); // prints '0lga'
console.log(age); // prints undefined
console.log(myObj); // prints {name: '0lga', age: 35}
```
Destructuring is very useful when working with function
arguments. Consider this example:
``` sh 
const printName = (personObj) => {
  console.log(personObj.name);
}
printName({name: '0lga', age: 35}); // prints '0lga'
```
Here, we only want to print the name in the function but we
pass a complete person object to the function. Of course
this is no issue but it forces us to call personObj.name 
inside of our function. We can condense this code with
destructuring:
``` sh 
const printName = ({name}) => {
  console.log(name);
}
printName({name: '0lga', age: 35}); // prints '0lga')
```
We get the same result as above but we save some code.
By destructuring, we simply pull out the ```name``` property and
store it in a variable/ argument named ```name``` which we then
can use in the function body.