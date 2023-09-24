import React, { useEffect, useState } from 'react'
import './style.css';
import { CartState } from '../context/Context';

import { ListGroup, Form, Row, Col } from 'react-bootstrap';
import Rating from './Rating';


export default function Cart() {
  const { state: { cart }, dispatch } = CartState();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
  }, [cart])
  return (
    <div className="home">

      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) =>
            <ListGroup.Item key = {prod.id}>
            <Row>
              <Col>
                <img src= {prod.image} style = {{height : '50px' ,width : '50px'}}/>
              </Col>
              <Col>
                {prod.name}
              </Col>
              <Col>
                ₹ {prod.price}
              </Col>
              <Col> <Rating rating={prod.ratings} /></Col>
            </Row>
            <Col> 
              <Form.Control as = 'select' 
              value = {prod.qty} 
              onChange = {(e) => dispatch({
                type : 'CHANGE_QTY',
                payload : {
                  id : prod.id,
                  qty : e.target.value
                }
              })}
              >
                  {
                    [...Array(prod.inStock).keys()].map(x => 
                      <option key = {x+1}>{x+1}</option>
                    )
                  }
              </Form.Control>
            </Col>
            </ListGroup.Item> 
          )}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">
          Subtotal ({cart.length}) items
        </span>
        <span>Total Amount {total} </span>

      </div>
    </div>
  )
}
