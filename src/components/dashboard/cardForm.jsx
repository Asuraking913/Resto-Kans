import React from 'react'

function CardForm() {
  return (
    <div className=''>
        <form action="#">
            <p>
                <label htmlFor="Car">Card Number</label>
                <p>Enter 16-digit card number on the card</p>
                <input type="text" name="" maxLength={16} id="" />
            </p>
        </form>
    </div>
  )
}

export default CardForm