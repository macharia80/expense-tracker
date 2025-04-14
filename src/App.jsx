// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';

function App() {
  // State to store expenses
  const [expenses, setExpenses] = useState([]);
  // State to store search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle adding a new expense
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  // Function to handle deleting an expense
  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  // Function to handle search input change
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  // Filter expenses based on search query
  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar">
        <h1>Expense Tracker</h1>
        <p>
          Start taking control of your finances and life. Record, categorize, and analyze your spending.
        </p>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Search Bar */}
        <SearchBar onSearchChange={handleSearchChange} />

        {/* Add Expense Form */}
        <div className="add-expense-form-container">
          <AddExpenseForm onAddExpense={addExpense} />
        </div>

        {/* Expense Table */}
        <div className="expense-table-container">
          <ExpenseTable expenses={filteredExpenses} onDeleteExpense={deleteExpense} />
        </div>
      </div>
    </div>
  );
}

export default App; // Ensure this is the default export