import React from 'react'



function TransactionHistory({ transactions, onDeleteTransaction }) {
  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {
          transactions.map(data =>
            <li key={data.id}>{data.name} ${data.amount}
              <button
                onClick={() => onDeleteTransaction(data.id)}
              >x</button>
            </li>
          )
        }
      </ul>
    </div >
  )
}

export default TransactionHistory
