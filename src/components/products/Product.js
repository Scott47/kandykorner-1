import React from 'react';
import "./Product.css"

export const Product = ({ Product }) => (
    <div className="candy__product">
        <p className="candy__name">{Product.name}</p>
        <p className="product__type">{Product.productType}</p>
    </div>
)