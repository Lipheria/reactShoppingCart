import React, { useReducer } from 'react'
import { createContext, useContext  } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from './Reducer';



const Cart = createContext();
faker.seed(99);

function Context({children}) {
    const products = [...Array(20)].map(() =>({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.food(),
        inStock: faker.helpers.arrayElement([0,1,2,3,4,5]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1,2,3,4,5])
    }))

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })


    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
    })
    

    // console.log(products)
  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
        {children}
    </Cart.Provider>
  )
}

export default Context
export const CartState = () =>{
    return useContext(Cart)
}