import './style.css';
import React from 'react'
import { CartState } from '../context/Context'
import Filter from './Filter';
import SingleProduct from './SingleProduct';

export default function Home() {
    const {state : {products} , productState : {sort , byStock , byFastDelivery , searchQuery , byRating }} = CartState();
    const transformProducts  = () => {
      let sortedProducts = products;

      if(sort) {
        sortedProducts = products.sort((a,b) => sort === 'lowToHigh' ? a.price - b.price:  b.price - a.price);
      }
      if(!byStock) {
        sortedProducts = products.filter(prod => prod.inStock);
      }

      if(byFastDelivery) {
        sortedProducts = products.filter(prod => prod.fastDelivery);
      }
      if(byRating) {
        sortedProducts = products.filter(prod => prod.ratings >= byRating);
      }

      if(searchQuery){
        sortedProducts = products.filter(prod => prod.name.toLowerCase().includes(searchQuery));
      }

      return sortedProducts;
    }
  return (
    <div className = 'home'>
        <Filter/>
        <div className="productContainer">
            {transformProducts().map((prod) => <SingleProduct prod = {prod} />)}

        </div>
    </div>
  )
}
