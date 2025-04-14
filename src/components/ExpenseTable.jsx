// src/components/ExpenseTable.jsx
import React from 'react';

const ExpenseTable = ({ expenses, onDeleteExpense }) => {
  return (
    <div className="expense-table">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Expense</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>{expense.amount}</td>
              <td>{expense.description}</td>
              <td>
                <button onClick={() => onDeleteExpense(expense.id)} className="delete-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;