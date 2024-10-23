import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Mobile No' />
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Landmark' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Pin Code' />
          <input type="text" placeholder='Country' />
        </div>
      </div>
      <div className="cart-total1">
        <h2>Cart Total</h2>
        <div className="cart-total-details">
          <b>Total Amount</b>
          <b>Rs {getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
        </div>
        <button>PROCEED TO PAYMENT</button>
      </div>
    </form>
  )
}
export default PlaceOrder