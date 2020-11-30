import { LocationProvider } from './locations/LocationProvider';
import { LocationList } from './locations/LocationList';
import React from 'react';
import ReactDOM from 'react-dom';
import { ProductProvider } from './products/ProductProvider';
import { ProductList } from './products/ProductList';

export const KandyKorner = () => {
    return(
        <>
            <LocationProvider>
                <LocationList />
            </LocationProvider>
            <ProductProvider>
                <ProductList />
            </ProductProvider>
        </>
    )
}