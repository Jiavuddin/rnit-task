import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function Details() {

    const location = useLocation();

    const data = location.state.data;

    console.log('-----location------', location);

    return (
        <div>
            <h1>Category: {data.category}</h1>
            <ul>
                {data.data.map(item => (
                    <li key={item.id}>
                        <span>name: {item.name}</span>
                        <br />
                        <span>price: {item.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Details;