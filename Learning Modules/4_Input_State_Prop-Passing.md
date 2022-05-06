# [Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number)

We use validation to ensure correect behavior from our users.
## Number
```sh
<input type="number" min="0.01" step="0.01" />
```
```min``` The minimum value to accept for this input. If the value of the element is less than this, the element fails constraint validation. If a value is specified for min that isn't a valid number, the input has no minimum value.

```step``` The step attribute is a number that specifies the granularity that the value must adhere to, or the special value any, which is described below. Only values which are equal to the basis for stepping (min if specified, value otherwise, and an appropriate default value if neither of those is provided) are valid.
## Date
```sh
<input type="date" min="2019-01-01" max="2022-12-31" />
```
When the input type is date, it will provide a date picker for the user.Here we set min/max date because we will be implementing a filter function reliant on these dates.

# State as Object

Use a State object to store multiple states in one item

```sh
const [state, setState] = useState({
  key: "",
  key2: ""
})
```
When updateing the state we spread prev, to ensure that even though we may have multiple state updates schedules, the state is never in jepardy of mutation
```sh
const eventHandler = (e) => {
  setState((prev) => {
    return { ...prev, key1: e.target.value}
  })
}
```
# Bottom-up communication 
We set a ```pointer function``` and pass it down as prop to the child component. In the example below:
## Parent:
* in parent we create a function that takes in the state of the child
* that function adds an id using Math.random
* the component passes that ```pointer-function``` as prop to its child
```sh
  const onSaveExpenseDataHandler = (userInput) => {

    const expenseData = {
      ...userInput,
      id: Math.random().toString()
    }
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
  )
}
```
## Child:
* child recieves pointer function as prop 
* on submit - the final event of the form, holding the final updated state before rest - the pointer is called
* the pointer is passed the updated state object as the paramiter
* this is how a state can be set in child, but the update can travel back up to parent component

```sh
const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };

    onSaveExpenseData(expenseData);

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };
```

# Two Way Binding
Two-way binding — implicitly enforcing that some value in the DOM is always consistent with some React state — is concise and supports a wide variety of applications.

## Parent
* Pass a pointer function to child to collect the value
* Set state through a pointer function (onSelectedOption)
```sh
  const [filteredYear, setFilteredYear] = useState('2022')
  
  const onSelectedOption = (option) => {
    setFilteredYear(option)
  };
  
  return (
    <ExpensesFilter 
      selected={filteredYear} 
      onSelectedOption={onSelectedOption} />
  );
```
## Child
* Get ```selected(carrying state)``` and ```pointer-funtion(onSelectedOption)``` from the parent via props
* set the onChange function to the pointer and the ```<select>'s```  default value property to ```value={ selected }```

```sh
const ExpensesFilter = (props) => {

  const { onSelectedOption, selected } = props;

  const dropDownChangeHandler = (e) => {
    onSelectedOption(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>

        <select value={selected} onChange={dropDownChangeHandler}>

          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
```
# Controlled Component
In this example the logic is handled by Expenses.js, and ExpensesFilter.js is the controlled component because it simply renders the outcome. CC means that the changes to the value is not handled by this component, but by it's parent.

# Presentational vs Stateful Components
The components that manage state are stateful, there are less stateful components than Presentational. Most components should focus on Presentation and recieveing props.<br>
 ```Manage in a couple, use in most.```

# Module Takeaways

```No interprative code```
* When setting up event listeners do not "addEventListener"
* Useing this method is not using React's features, you would trigger some function that lives outside of React components and hence wouldn't be able to interact with React component state.

```onClick gets pointers```
* You want to pass a "pointer" at the to-be-executed function as a value to onClick etc. Then, this function gets executed "on your behalf" by React when the event occurs.

```Child to Parent Communication ```
* In JavaScript, functions are just objects (i.e. regular values) and hence you can pass them as values via props to a component. If that component then calls that function, it executes - and that's how you can trigger a function defined in a parent component from inside a child component.

```Change what a component displays on the screen```
* Create some "State" value (via useState) which you can then change and output in JSX
* React doesn't care whether you changed some variable values. It'll not re-evaluate the component function. It only does that for changes to registered state values (created via useState)

```State```
* Returns an array with exactly two elements -> state & setState
* It recieves an (optional) initial state value as an argument
* useState returns an array with exactly two elements - the second element is always a function which you can call to set a new value for your state. Calling that function will then also trigger React to re-evaluate the component.
* If you update state that depends on the previous state, you should use the "Function form" of the state updating function instead.
