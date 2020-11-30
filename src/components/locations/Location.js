import React from 'react';
import "./Location.css"

export const Location = ({ Location }) => (
    <section className = "location">
        <div className = "address">{Location.address}</div>
        <div className = "square__footage">{Location.squareFootage}sq. feet</div>
        <div className = "accessability">Handicap accessible? {Location.handicap}</div>
    </section>
)