import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { ForminitialCart } from '../../../redux/cart/reducerCart';
import { formTypeAction, funcitonCart, typeAction } from '../../../redux/cart/typeCart';

interface Home<T> {

}

const Home: React.FC<Home<any>> = ({ ...props }) => {
    const stateCart = useSelector<{ cart: any }>(state => state.cart) as ForminitialCart;
    const dispatchCart = useDispatch();
    return (
        <div>
            <p>{JSON.stringify(stateCart.dataCart)}</p>
            <button onClick={() => { dispatchCart(funcitonCart(typeAction.pustCart)) }}>pust Cart</button>
            this Home
        </div>
    )
}

export default Home
