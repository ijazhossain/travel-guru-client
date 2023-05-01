import React from 'react';
import './Rooms.css'
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingleRoom from '../SingleRoom/SingleRoom';
const Rooms = () => {
    const rooms = useLoaderData()
    // console.log(rooms);
    return (
        <Container className='my-5 '>
            <Row>
                <Col lg={7}>
                    <p className='mb-2'>252 stays Apr 13-17 3 guests</p>
                    <h3 className='mb-3'>Stay in Cox’s Bazar</h3>
                    <div className='mt-5'>
                        {
                            rooms.map(room => <SingleRoom
                                key={room.id}
                                room={room}
                            ></SingleRoom>)
                        }
                    </div>
                </Col>
                <Col lg={5}>
                    <h1>google map</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Rooms;