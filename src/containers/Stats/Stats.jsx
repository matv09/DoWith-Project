import React from 'react'
import './Stats.scss'

function Stats() {
  return (
    <div className='statsBg'>
      <div className="statsContainer">
        <div className="stats">
          <h4>2800+</h4>
          <p>USER ACTIVE</p>
        </div>
        <div className="stats">
          <h4>520+</h4>
          <p>TRUSTED BY USER</p>
        </div>
        <div className="stats">
          <h4>$180M</h4>
          <p>TRANSACTION</p>
        </div>
      </div>
    </div>
  )
}

export default Stats