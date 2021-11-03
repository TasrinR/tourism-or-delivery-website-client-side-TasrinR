import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Ticket = (props) => {
    const {_id, name , description , location , time , price , availability ,img} = props.ticket;
    console.log(_id);
    return (
        <div className="m-3 p-3" style={{border: '1px solid grey'}}>
            <Row>
                <Col xs={6} md={4}>
                   <img src={img} alt="" />
                </Col>
                <Col xs={12} md={8} style={{textAlign:"left"}}>
                <h3>{name}</h3>
                <small>{time}</small>
                <p>{description}</p>
                <small>location : {location}</small>
                <small>availability : {availability}</small>
                <h4>Price : {price}</h4>
                <button className="btn-warning"><Link to={`/shipping/${_id}`}>Book Now</Link></button>
                </Col>
            </Row>
        </div>
    );
};

export default Ticket;