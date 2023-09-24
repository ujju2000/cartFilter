
import React from 'react'
import {AiFillDelete} from 'react-icons/ai';
import {CartState} from '../context/Context';
import './style.css';

export default function CartItem({prod}) {
    const {state, dispatch} = CartState();

  return (
    <div className = 'cartitem'>
        <img src=  {prod.image} alt="" className = 'cartItemImg'/>
        <div className="cartItemDetail">
            <h3>{prod.name}</h3>
            <span>{prod.price.split('.')[0]}</span>
        </div>

        <AiFillDelete size  = {30} 
            onClick = {() => dispatch({
                type : 'REMOVE_FROM_CART',
                payload : prod
            })}
            style = {{cursor : 'pointer'}}
        />


    </div>
  )
}
 