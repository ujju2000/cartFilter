import './style.css';
import React from 'react'
import {Form , Button} from 'react-bootstrap';
import Rating from './Rating';
import { CartState } from '../context/Context';

export default function Filter() {
    const {productState : {sort , byStock , byFastDelivery , byRating }, productDispatch} = CartState();
    

  return (
    <div className = 'filters'>
        <h3>Filter Products</h3>
        <span>
            <Form.Check
                inline 
                label = "Ascending"
                name = 'group1'
                type = 'radio'
                id = {`inline-1`}

                onChange = {() => productDispatch({
                    type : 'SORT_BY_PRICE',
                    payload : 'lowToHigh'
                })}

                checked = {sort === 'lowToHigh' ? true: false}
                style = {{cursor : 'pointer'}}
            />
        </span>

        <span>
            <Form.Check
                inline 
                label = "Descending"
                name = 'group1'
                type = 'radio'
                id = {`inline-2`}
                onChange = {() => productDispatch({
                    
                    type : 'SORT_BY_PRICE',
                    payload : 'highToLow'
                })}

                checked = {sort === 'highToLow' ? true: false}
                style = {{cursor : 'pointer'}}
            />
        </span>

        <span>
        <Form.Check
                inline 
                label = "Include out of stock"
                name = 'group1'
                type = 'checkbox'
                id = {`inline-3`}

                onChange = {() => productDispatch({
                    type : 'FILTER_BY_STOCK',
                    payload : byStock
                })}

                checked = {byStock}
            />
        </span>

        <span>
        <Form.Check
                inline 
                label = "Fast Delivery Only"
                name = 'group1'
                type = 'checkbox'
                id = {`inline-4`}

                onChange = {() => productDispatch({
                    type : 'FILTER_BY_DELIVERY',
                    action : byFastDelivery
                })}

                checked = {byFastDelivery}
            />
        </span>
        <span>
            <label>Rating :</label>
            <Rating rating = {byRating} onClick = {(i) => productDispatch({
                type : 'FILTER_BY_RATING',
                payload : i+1
            })} style = {{cursor:"pointer"}} />
        </span>
        <Button variant = 'light' onClick = {() => productDispatch({
            type : 'CLEAR_FILTERS'
        })}>Clear Filter</Button>
    </div>
  )
}
