import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "../FilterExpenses/ExpensesFilter";
import ExpensesChart from "../Chart/ExpensesChart"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const { items } = props;
  const onSelectedOption = (option) => {
    setFilteredYear(option);
  };

  const fileteredExpenses = items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSelectedOption={onSelectedOption}
      />
      <ExpensesChart expenses={fileteredExpenses} />
      <ExpensesList items={fileteredExpenses} />
    </Card>
  );
};

export default Expenses;
