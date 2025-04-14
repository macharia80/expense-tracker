// src/components/AddExpenseForm.jsx
import React, { useState } from 'react';

const AddExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !category || !amount || !date) {
      alert('Please fill all fields');
      return;
    }

    const newExpense = {
      id: Date.now(), // Unique ID
      description,
      category,
      amount,
      date,
    };

    // Clear the form
    setDescription('');
    setCategory('');
    setAmount('');
    setDate('');

    // Call the callback to add the expense
    onAddExpense(newExpense);
  };

  return (
    <div className="add-expense-form">
      <h2>Add Expense</h2>
      <p>Enter your expense details below</p>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter expense description"
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter expense category"
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter expense amount"
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="mm/dd/yyyy"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddExpenseForm;