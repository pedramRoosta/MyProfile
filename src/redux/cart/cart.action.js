import { types } from './cart.types'
export const cartToggle = () =>
    (
        {
            type: types.TOGGLE_CART_LIST,
        }
    )
export const cartAddition = (item) =>
    (
        {
            type: types.ADD_TO_CART,
            payload:item
        }
    )