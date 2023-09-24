
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { CartState } from '../context/Context';
import Rating from './Rating'

export default function SingleProduct({prod}) {
    const {state : {cart} , dispatch} = CartState();
  return (  
    <div className = 'products'>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={prod.image} />
    <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
       
        <Card.Subtitle style = {{paddingBottom : 10 }}> 
            <span> ₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? 
                <div>Fast Delivery</div>
            : <div>4 Days Delivery</div>
            }
            <div><Rating rating= {prod.ratings} /></div>
        </Card.Subtitle>
        {
            cart.some(p => p.id === prod.id) ?  (
                <Button variant = 'danger' onClick = {() => dispatch({
                    type : 'REMOVE_FROM_CART',
                    payload : prod   
                })
                }> Remove From Cart </Button>
            ) : 
            (
                <Button variant="primary" disabled = {!prod.inStock} onClick = {() => dispatch({
                    type : 'ADD_TO_CART',
                    payload : prod
                })}>{prod.inStock ? "Add to Cart" : "Out of Stock"}</Button>
            )
        }
        
        
    </Card.Body>
    </Card>
    </div>
  )
}
