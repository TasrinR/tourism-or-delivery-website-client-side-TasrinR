import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const {id} = useParams()
    
    const {user}= useAuth();

    const { register, handleSubmit, reset } = useForm();

    const [selectedData, setSelectedData] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/tickets/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
           setSelectedData(data)
        })
    },[id])

    const onSubmit = data => {
        
        const formData= data;
        formData.img= user.photoURL;
        formData.userMail = user.email;
        formData.orderItem = selectedData;
        formData.orderStatus = "pending";

        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
                console.log(res.data);
            })
    }
    
    return (
        <Row className="shipping">
            <Col style={{textAlign:"left"}} xs={12} md={6}>
            <h5>{selectedData.name}</h5>
            <p>{selectedData.location}</p>
            <b>{selectedData.time}</b>
            <p>{selectedData.description}</p>
            <h5>{selectedData.price}</h5>

            </Col>
            <Col xs={12} md={6}>
            <h2>Please add shipiing info</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" defaultValue={user.displayName}/>
                <input {...register("email")} placeholder="Email" defaultValue={user.email}/>
                <textarea {...register("description")} placeholder="Description" />
                <textarea {...register("address")} placeholder="Enter your address" />
                <textarea {...register("country")} placeholder="Country" />
                <textarea {...register("city")} placeholder="City" />
                <input type="number" {...register("contactNo")} placeholder="Contact No" />
                <input type="submit" />
            </form>
            </Col>
        </Row>
    );
};

export default Shipping;