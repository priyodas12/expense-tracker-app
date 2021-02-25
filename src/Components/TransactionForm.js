import React from 'react'

function TransactionForm() {
  return (
    <div>
      <h3>Add New Transactions</h3>
      <form>
        <label>
          Name
          <div>
            <input type='text' />
          </div>
        </label>
        <label>
          Amount
          <div>
            <input type='Number'></input>
          </div>
        </label>
        <div>
          <button>Add Income</button>
        </div>
        <div>
          <button>Add Expense</button>
        </div>
      </form>
    </div >
  )
}

export default TransactionForm
