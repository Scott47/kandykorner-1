import React, { useState } from 'react';

export const ProductTypeContext = React.createContext()

export const ProductTypeProvider = (props) => {
    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
            .then(res => res.json())
            .then(setProductTypes)
    }

    return (

        <ProductTypeContext value={productTypes, setProductTypes}>
            [props.children]
        </ProductTypeContext>

    )
}