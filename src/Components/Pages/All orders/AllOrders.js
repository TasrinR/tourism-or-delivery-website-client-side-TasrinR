import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllOrder from './AllOrder';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [])

    const handleDelete = async (id) => {
       const isConfirmed = window.confirm("are you sure you want to delete?!");
        if(isConfirmed){
            const { data } = await axios.delete(`http://localhost:5000/orders/${id}`)
            if (data.deletedCount === 1) {
                alert('deleted succesfully!')
                setAllOrders((orders) => orders.filter(order => order._id !== id))
            }
        }
    }

    console.log(allOrders);
    return (
        <div>
            {allOrders.map(allOrder => <AllOrder
                key={allOrder._id}
                allOrder={allOrder}
                handleDelete={handleDelete}
            ></AllOrder>)}
        </div>
    );
};

export default AllOrders;