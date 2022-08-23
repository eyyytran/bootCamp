import React from 'react'
import { useAppDispatch } from '../app/hooks'
import { IProduct } from '../interfaces'

const CartContent = (props: IProduct) => {
    const dispatch = useAppDispatch()
    return (
        <div className='cart-content'>
            <div className='product'>{props?.description}</div>
            <div className='price'>{props?.price}</div>
            <button
                onClick={() =>
                    dispatch({ type: 'REMOVE_ITEM', payload: props })
                }
            >
                X
            </button>
        </div>
    )
}

export default CartContent
