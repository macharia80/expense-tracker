## **Folder Structure**
expense-tracker/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AddExpenseForm.jsx    # Form for adding new expenses
│   │   ├── ExpenseTable.jsx      # Table to display expenses
│   │   └── SearchBar.jsx         # Search bar component
│   ├── App.jsx               # Main application logic
│   ├── App.css               # Application-wide styles
│   └── main.jsx             # Entry point of the app
├── package.json             # Dependencies and scripts
└── vite.config.js           # Vite configuration

---

## **Setup Instructions**

### **1. Clone the Repository**
//```bash
//git clone https://github.com/macharia80/expense-tracker.git
cd expense-tracker//
### **2.Install Dependencies
npm install
### **3.Start The development Server
npm run dev
### ***4 Build For Production
npm run build
# **Expense Tracker**

The **Expense Tracker** is a simple and intuitive web application built with React and Vite. It helps users manage their finances by recording, categorizing, and analyzing expenses. The app provides a clean and modern interface with features like adding expenses, searching through records, and deleting entries.

---

## **Table of Contents**

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Folder Structure](#folder-structure)
5. [Setup Instructions](#setup-instructions)
6. [Usage](#usage)
7. [Customization](#customization)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

---

## **Overview**

The Expense Tracker is a lightweight web application designed to help users manage their personal finances. With this app, users can:
- Add expenses with details such as description, category, amount, and date.
- View all recorded expenses in a table format.
- Search for specific expenses using a search bar.
- Delete unwanted expenses from the list.

This app is fully responsive, ensuring a seamless experience on both desktop and mobile devices.

---

## **Features**

1. **Add Expenses**
   - Users can input expense details:
     - **Description**: A brief note about the expense (e.g., "Groceries").
     - **Category**: The type of expense (e.g., "Food," "Transportation").
     - **Amount**: The cost of the expense.
     - **Date**: When the expense occurred.

2. **View Expenses**
   - All added expenses are displayed in a table with columns for:
     - **Date**: When the expense occurred.
     - **Amount**: The cost of the expense.
     - **Description**: Brief details about the expense.
     - **Action**: A button to delete the expense.

3. **Search Functionality**
   - Users can search for specific expenses by entering keywords in the search bar. The app filters the table dynamically based on the input.

4. **Delete Expenses**
   - Each expense entry has a "Delete" button that allows users to remove the entry from the list.

5. **Responsive Design**
   - The app adapts seamlessly to different screen sizes, ensuring usability on both desktop and mobile devices.

---

## **Tech Stack**

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: CSS with modern design principles
- **Font**: Inter (imported via Google Fonts)

---


