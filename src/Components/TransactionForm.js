import React, { useState } from 'react'
import { uniqueId } from '../utils'

function TransactionForm({ onNewTransaction }) {
  const [trasactionDetails, setTrasactionDetails] = useState('');
  const [trasactionAmount, setTransactionAmount] = useState('');

  const addTransaction = (type, e) => {
    e.preventDefault();
    const newTransactionData = { id: uniqueId(), name: trasactionDetails, amount: parseInt(trasactionAmount), type: type };

    console.log(newTransactionData);
    onNewTransaction(newTransactionData);
  }


  return (
    <div>
      <h3>Add New Transactions</h3>
      <form>
        <label>
          <p>Name</p>
          <div>
            <input type='text' value={trasactionDetails} onChange={(e) => setTrasactionDetails(e.target.value)} />
          </div>
        </label>
        <label>
          <p>Amount</p>
          <div>
            <input type='number' value={trasactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} ></input>
          </div>
        </label>
        <div>
          <button onClick={(e) => addTransaction('income', e)}>Add Income</button>
        </div>
        <div>
          <button onClick={(e) => addTransaction('expense', e)}>Add Expense</button>
        </div>
      </form>
    </div >
  )
}

export default TransactionForm
