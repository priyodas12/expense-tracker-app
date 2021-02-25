import React from 'react'
import Expense from './Expense'
import TransactionForm from './TransactionForm'
import TransactionHistory from './TransactionHistory'
import { uniqueId } from '../utils'

const transcationData = [
  { id: uniqueId(), name: 'salary', amount: 3000, type: "income" },
  { id: uniqueId(), name: 'grocery', amount: 500, type: "expense" }
];

function ExpenseTracker() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <Expense income={3000} expense={1000} />
      <TransactionHistory transactions={transcationData} />
      <TransactionForm />
    </div>
  )
}

export default ExpenseTracker
