import axios from 'axios';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const AllOrder = (props) => {
    const {user} = useAuth()
    const {name, email, address, city, country, orderItem, img} = props.allOrder;
    return (
        <Row  className="m-3 p-3" style={{border: '1px solid grey', textAlign:"justify"}}>
            <Col xs={12} md={8}>
                <h3>{orderItem.name}</h3>
                <p>{orderItem.description}</p>
                <p>{orderItem.location}</p>
                <p>availability : {orderItem.availability}</p>
                <h4>Price : {orderItem.price}</h4>
            </Col>
            <Col xs={12} md={4} style={{textAlign:"justify"}}>
                <span><span className="me-5"><img src={img} alt="" style={{width:'50px', height:'50px', borderRadius:'50%'}}/></span>
                <span><b>{name}</b></span></span>
                <h5>{email}</h5>
                <p>{city}</p>
                <p>{country}</p>
                <small>{address}</small>
                <button className="btn-warning" >DELETE</button>
            </Col>
        </Row>
    );
};

export default AllOrder;