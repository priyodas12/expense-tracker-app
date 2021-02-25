import React from 'react'

function Expense({ income, expense }) {
  return (
    <div>
      <div>
        <h3>Your Balance</h3>
        <div className="balance">
          ${income - expense}
        </div>
      </div>
      <div>
        <div>
          <h3>Income</h3>
          <div>${income}</div>
        </div>
        <div>
          <h3>Expense</h3>
          <div>${expense}</div>
        </div>
      </div>
    </div>
  )
}

export default Expense
