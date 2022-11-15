import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "el",
      title: "Car Purchase",
      amount: 1500000.0,
      date: new Date(2022, 0, 15),
    },
    {
      id: "el0",
      title: "OatMilk snack",
      amount: 2800.0,
      date: new Date(2022, 3, 18),
    },
    {
      id: "el1",
      title: "St. Ives Bath",
      amount: 3500.0,
      date: new Date(2022, 5, 20),
    },
    {
      id: "el2",
      title: "Cetaphil facial cleanser",
      amount: 6500.0,
      date: new Date(2022, 8, 15),
    },
    {
      id: "el3",
      title: "Mentos Chewing gum",
      amount: 1500.0,
      date: new Date(2022, 8, 8),
    },
    {
      id: "el4",
      title: "Vitamin C ",
      amount: 2800.0,
      date: new Date(2022, 9, 1),
    },
    {
      id: "el5",
      title: "Glove Sponge",
      amount: 1500.0,
      date: new Date(2022, 10, 7),
    },
  ];

  const addExpenseHandler = expense =>{
    console.log ("In App.js")
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
