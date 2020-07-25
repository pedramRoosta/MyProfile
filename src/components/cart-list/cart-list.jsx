import React from 'react'
import './cart-list.scss'
import {CustomButton} from '../controls/button/button'
const CartList = () => {
    return <div className='cart-list'>
        <div className='cart-list-items'></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
}
export default CartList;