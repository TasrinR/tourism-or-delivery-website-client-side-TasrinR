import React from 'react';
import { Col, Row } from 'react-bootstrap';

const MyOrder = (props) => {
    const {email, address, city, country, orderItem, orderStatus} = props.myOrder;
    return (
        <Row className="m-3 p-3" style={{border: '1px solid grey', textAlign:"justify"}}>
            <Col xs={12} md={8} className="pe-5">
                <h3>{orderItem.name}</h3>
                <p>{orderItem.description}</p>
                <p>{orderItem.location}</p>
                <p>availability : {orderItem.availability}</p>
                <h4>Price : {orderItem.price}</h4>
            </Col>
            <Col xs={12} md={4} style={{textAlign:"justify"}}>
                <h3>{address}</h3>
                <small>{city}</small>
                <p>{country}</p>
                <small>Your Email :{email}</small>
                <div className="p-2 m-2" style={{width:"100px", height: "50px", border:"1px solid red"}}>{orderStatus}</div>
            </Col>
        </Row>
    );
};

export default MyOrder;