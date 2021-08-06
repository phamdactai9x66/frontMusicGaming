import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { ForminitialCart } from '../../../redux/cart/reducerCart';
import { formTypeAction, funcitonCart, typeAction } from '../../../redux/cart/typeCart';

interface Home<T> {

}

const Home: React.FC<Home<any>> = ({ ...props }) => {

    return (
        <div>
            this Home
        </div>
    )
}

export default Home
