# State and array
* Add an object to state which is an array of objects
TO START OF LIST: 
```sh
const addExpenceHandler = (expense) => {
  setExpenses((prev) => {
    return [expense, ...prev];
  })
}
```
TO END OF LIST: 
```sh
const addExpenceHandler = (expense) => {
  setExpenses((prev) => {
    return [...prev, expense];
  })
}
```

# Key
* without keys, all items are updated to match the array. React must re-render very single list item. This results in performance issues.
* without keys you open yourself up to bugs with state. forexample if you update a stateful list item, without a key you will be overwriting state in the old item in that position. so overwriting the old first item with the new first item.
* key can be used by any component, this helps React identify individual compnents

# Key & Map
* using index is bad because it runs the same problem as without it, since it is always the same, not unique to the item
* you should alwyas have an id
```sh
items.map((item) => (
  <CustomComponent
  key={item.id}
  title={item.title}
  >
))
```
# Filter
All in One filter and map
```sh
  const parsedItem = items
    .filter((item) => {
      return item.date.getFullYear().toString() === filteredYear;
    })
    .map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
```
# Toggle & Open/Close

### Neat way to toggle state
```sh
 const onToggleFormHAndler = () => {
    setToggle(prev => !prev)
  }
```
### Toggle

* Parent
```sh
 const [toggle, setToggle] = useState(false);

 const onSaveExpenseDataHandler = (userInput) => {
    const expenseData = {
      ...userInput,
      id: Math.random().toString(),
    };
    onAddExpenseHandler(expenseData);
    onToggleFormHandler();
  };

  const onToggleFormHandler = () => {
    setToggle(toggle ? false : true);
  };

  OR

  const onToggleFormHAndler = () => {
    setToggle(prev => !prev)
  }

  return (
    <div className="new-expense">
      {toggle ? (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onToggle={onToggleFormHandler}
        />
      ) : (
        <ToggleForm onToggle={onToggleFormHandler} />
      )}
    </div>
  );
```
* Child 1
```sh
  const { onToggle } = props;
  return (
    <button type="submit" onClick={onToggle} className="new-expense">
      Add New Expense
    </button>
  );
```
* Child 2
```sh
<button type="cancel" onClick={onToggle}>Cancel</button>
```
### Open/Close
* Parent
```sh
 const [edit, setEdit] = useState(false);

 const onSaveExpenseDataHandler = (userInput) => {
    const expenseData = {
      ...userInput,
      id: Math.random().toString(),
    };
    onAddExpenseHandler(expenseData);
    setEdit(false);
  };

  const stopEditingHandler = () => {
    setEdit(false);
  };
  const startEditingHandler = () => {
    setEdit(true);
  }

  return (
    <div className="new-expense">
      {!edit && (
        <button onCLick={startEditingHandler}>Add New Expense</button>
      )}
      {edit && (
        <ExpenseForm
        onSaveExpenseData={saveExpenseDataHAndler}
        onCancel={stopEditingHandler}>
      )}
    </div>
  );
```

* Child 1
```sh
<button type="close" onClick={onCancel}>Cancel</button>
```

# Style in React Elements

You can se dynamic styles in REact through the ```style``` attribute
* style requires an object where the key is css property, and value is up to you
* if the css property has a dash, you have to put it in quotes
```sh
<div ClassName='some-class' style={{height: variable, 'background-color': 'red', fontWeight: 'bold'}}></div>
```
# Module Takeaways
```Map```
* Typically used in React with lists because it transforms an array into a new array full of JSX elements wich can be output by React
```Key```
* Required for React to correctly identify and update (if needed) the list elements
* Its a unique identification for every element
```Conditionals & Ternary```
* Conditional content in React components can work with regular ternary expressions of if checks to output or return different results in/from your component

