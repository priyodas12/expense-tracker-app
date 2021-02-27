import React, { useState, useEffect } from 'react'
import Expense from './Expense'
import TransactionForm from './TransactionForm'
import TransactionHistory from './TransactionHistory'


// eslint-disable-next-line no-lone-blocks
{/*const transcationData = [
  { id: uniqueId(), name: 'salary', amount: 3000, type: "income" },
  { id: uniqueId(), name: 'grocery', amount: 500, type: "expense" },
  { id: uniqueId(), name: 'phone', amount: 200, type: "expense" },
  { id: uniqueId(), name: 'sofa', amount: 800, type: "expense" }
];*/}

function ExpenseTracker() {

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTrasactions] = useState([]);

  const saveTransactionData = () => {
    localStorage.setItem('expenseTrackerData', JSON.stringify(transactions));
  }


  const calculateExpense = () => {
    let income = 0, expense = 0;
    transactions.forEach(t => {
      if (t.type === 'income') {
        income += t.amount;
      } else if (t.type === 'expense') {
        expense += t.amount;
      }
    });
    //we should not set directly component state;
    saveTransactionData();
    setIncome(income);
    setExpense(expense);
  }
  //console.log(transcationData);

  const newTransactionHandler = (newTransaction) => {
    //console.log(data);
    let cloneTransaction = [...transactions, newTransaction];
    setTrasactions(cloneTransaction);

  }
  const handleDeleteTransaction = (id) => {
    console.log('deleting transaction:', id);
    const newTransaction = transactions.filter(item =>
      item.id !== id
    );
    console.log('newTransaction:', newTransaction);
    setTrasactions(newTransaction);
  }

  useEffect(() => {
    let avlLocalStorage = JSON.parse(localStorage.getItem('expenseTrackerData'));
    if (avlLocalStorage) {
      setTrasactions(avlLocalStorage);
    }
    calculateExpense();
  }, []);

  useEffect(() => {
    calculateExpense();
  }, [transactions]);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <Expense income={income} expense={expense} />
      <TransactionHistory transactions={transactions} onDeleteTransaction={handleDeleteTransaction} />
      <TransactionForm onNewTransaction={newTransactionHandler} />
    </div>
  )
}

export default ExpenseTracker
