import {useState} from 'react'
import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      const onClickRemoveAllBtn = () => {
        removeAllCartItems()
      }

      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })
      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="remove-all-button"
                  onClick={onClickRemoveAllBtn}
                >
                  Remove All
                </button>
                <CartListView />
                <div className="total-cart">
                  <div>
                    <h1 className="order-paragraph">
                      Order Total: <span className="span"> Rs {total} /-</span>
                    </h1>
                    <p className="items-count">
                      {cartList.length} items in cart
                    </p>
                    <button type="button" className="checkout-button">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
