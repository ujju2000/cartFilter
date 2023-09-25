
import React from 'react';
import { Navbar, Container, FormControl, Dropdown, Badge , Button} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { CartState } from '../context/Context';
import CartItem from './CartItem';

export default function Header() {
    const {state : {cart} , productDispatch} = CartState(); 
    return (    
        <div className = 'header'>
        <Navbar bg='dark' variant='dark' >
            <Container>
                <Navbar.Brand >
                    <Link to = '/cartFilter/'>Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text>
                    <FormControl style={{ width: 500 }}
                        placeholder='Search a product'
                        className='searchInput m-auto'
                        onChange = {(e) => productDispatch({
                            type : 'FILTER_BY_SEARCH',
                            payload : e.target.value
                        })}
                    />
                </Navbar.Text>
                <Dropdown menuAlign = 'right' id = 'dropdown-menu-align-right'>
                    <Dropdown.Toggle variant='success' id="dropdown-basic">
                        <FaShoppingCart color='white' size={20} />
                        <Badge variant="light" > {cart.length} </Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            cart.length  > 0  ?  (
                                <>
                                {
                                    cart.map(prod  => <CartItem prod = {prod} />)
                                }
                                    <Link to = '/cartFilter/cart'>
                                        <Button variant = 'primary' >Go to Cart </Button>
                                    </Link>
                                </>
                            )
                            :  (
                            <Dropdown.Item href="#/action-1">Cart is Empty</Dropdown.Item>
                            )
                        }
                        
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
        </div>
    )
}
