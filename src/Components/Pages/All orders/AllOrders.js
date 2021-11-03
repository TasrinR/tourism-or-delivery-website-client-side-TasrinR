import React, { useEffect, useState } from 'react';
import AllOrder from './AllOrder';

const AllOrders = () => {
    const[allOrders, setAllOrders]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setAllOrders(data));
    },[])
    return (
        <div>
            {allOrders.map(allOrder => <AllOrder
            key={allOrder._id}
            allOrder={allOrder}
            ></AllOrder>)}
        </div>
    );
};

export default AllOrders;