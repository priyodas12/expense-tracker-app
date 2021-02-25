import React from 'react'



function TransactionHistory({ transactions }) {
  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {
          transactions.map(data =>
            <li key={data.id}>{data.name} ${data.amount} <button>x</button></li>
          )
        }
      </ul>
    </div>
  )
}

export default TransactionHistory
