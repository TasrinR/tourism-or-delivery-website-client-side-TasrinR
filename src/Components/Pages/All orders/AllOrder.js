import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const AllOrder = (props) => {
    const {user} = useAuth()
    const {_id ,name, email, address, city, country, orderItem, img} = props.allOrder;
    const {handleDelete} = props;

    

    return (
        <Row  className="m-3 p-3" style={{border: '1px solid grey', textAlign:"justify"}}>
            <Col xs={12} md={8}>
                <h3>Tour Name: {orderItem.name}</h3>
                <p>Description: {orderItem.description}</p>
                <p>Location: {orderItem.location}</p>
                <p>Availability : {orderItem.availability}</p>
                <h4>Price : {orderItem.price}</h4>
            </Col>
            <Col xs={12} md={4} style={{textAlign:"justify"}}>
                <span><span className="me-5"><img src={img} alt="" style={{width:'50px', height:'50px', borderRadius:'50%'}}/></span>
                <span><b>{name}</b></span></span>
                <h5>{email}</h5>
                <p>Your City: {city}</p>
                <p>Your Country: {country}</p>
                <small>Your Address: {address}</small>
                <button className="btn-warning"  onClick={() => handleDelete(_id)}>DELETE</button>
            </Col>
        </Row>
    );
};

export default AllOrder;