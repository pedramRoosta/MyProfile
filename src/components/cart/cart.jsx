import React from 'react'
import { ReactComponent as CartIcon } from '../../assets/cart-icon.svg'
import './cart.scss'
import { connect } from 'react-redux'
import { cartAction } from '../../redux/cart/cart.action'
const Cart = ({toggleCartListVisibility}) => {
    return <div className='cart' onClick={toggleCartListVisibility}>
        <CartIcon className='cart-logo' />
        <span className='cart-item-count'> 15 </span>
    </div>
}

const mapDispatchToProps = disp =>
    ({
        toggleCartListVisibility: () => disp(cartAction())
    })
export default connect(null, mapDispatchToProps)(Cart);