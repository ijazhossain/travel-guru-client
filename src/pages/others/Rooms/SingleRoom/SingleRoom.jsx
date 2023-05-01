import React from 'react';
import './SingleRoom.css'
import { Col, Row } from 'react-bootstrap';
const SingleRoom = ({ room }) => {
    console.log(room);
    const { id, img, name, price, ratings, specification, total, flexibility, extra } = room;
    return (
        <Row className='mb-4'>
            <Col lg={6}>
                <img className='img-fluid' src={img} alt="" />
            </Col>
            <Col lg={6}>
                <h4>{name}</h4>
                <p>{specification}</p>
                <p>{extra}</p>
                <p>{flexibility}</p>
                <p>{ratings} ${price}/night {total}</p>
            </Col>
        </Row>
    );
};

export default SingleRoom;