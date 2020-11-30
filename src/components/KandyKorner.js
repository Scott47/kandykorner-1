import { LocationProvider } from './locations/LocationProvider';
import { LocationList } from './locations/LocationList';
import React from 'react';
import ReactDOM from 'react-dom';

export const KandyKorner = () => {
    return(
        <>
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        </>
    )
}