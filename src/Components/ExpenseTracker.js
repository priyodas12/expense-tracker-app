import React from 'react'
import Expense from './Expense'
import TransactionForm from './TransactionForm'
import TransactionHistory from './TransactionHistory'

function ExpenseTracker() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <Expense />
      <TransactionHistory />
      <TransactionForm />
    </div>
  )
}

export default ExpenseTracker
