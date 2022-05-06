import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [toggle, setToggle] = useState(false);
  const { onAddExpenseHandler } = props;

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

  return (
    <div className="new-expense">
      {toggle ? (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onToggle={onToggleFormHandler}
        />
      ) : (
        <button
          type="add expense"
          onClick={onToggleFormHandler}
          className="new-expense"
        >
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
