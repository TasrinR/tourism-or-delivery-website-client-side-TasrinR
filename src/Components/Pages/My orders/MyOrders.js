import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const {user}= useAuth();
    const [ myOrders , setMyOrders ] = useState([]);
    useEffect(()=>{
        fetch('https://quiet-scrubland-74220.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data => {
            const myData = data.filter(data => data.email === user.email)
            setMyOrders(myData);
            console.log(myData);
        })
    },[])
    console.log(myOrders)
    console.log(user)
    return (
        <div>
            {
                myOrders.map(myOrder => <MyOrder
                key={myOrder._id}
                myOrder={myOrder}
                ></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;