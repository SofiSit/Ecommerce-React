import React from 'react'
import CartProvider from '../CartContext/CartProvider'

import WishListProvider from '../WishListContext/WishListProvider'


const GeneralProvider = ({ children }) => {
    return (
        <>
                    <CartProvider>
                        <WishListProvider>
                          
                                        {children}
                             
                        </WishListProvider>
                    </CartProvider>
   
        </>
    )
}

export default GeneralProvider