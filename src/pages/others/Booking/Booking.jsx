import React from 'react';
import './Booking.css'
/* import bg from '../../../assets/images/others/Rectangle 1.png'
import dk from '../../../assets/images/others/bg-tarnsprant.png' */
import { Col, Container, Row } from 'react-bootstrap';
const Booking = () => {
    return (
        <div className='banner-container text-white'>
            <Container>
                <Row className='banner-info  px-5'>
                    <Col className='px-5' md={6}>
                        <h1>Cox's bazar</h1>
                        <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                    </Col>
                    <Col className='px-5' md={6}>
                        <div className=" bg-white p-4 rounded-3">

                            <div className="mb-3">
                                <label className="fw-bold text-dark ps-1 form-label" htmlFor="formBasicOrigin">Origin</label>
                                <input placeholder="Start your journey from" type="text" id="formBasicOrigin" className="form-control" defaultValue="Dhaka" />
                            </div>
                            <div className="mb-3">
                                <label className="fw-bold text-dark ps-1 form-label" htmlFor="formBasicDestination">Destination</label>
                                <input placeholder="Enter your destination" type="text" id="formBasicDestination" className="form-control" defaultValue="Cox's Bazar" />
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="mb-3">
                                        <label className="fw-bold text-dark ps-1 form-label" htmlFor="from">From</label>
                                        <input placeholder="Journey starts" type="date" id="from" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="mb-3">
                                        <label className="fw-bold text-dark ps-1 form-label" htmlFor="from">To</label>
                                        <input placeholder="Journey ends" type="date" id="from" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="booking-btn w-100 my-3 btn btn-warning">Submit</button>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;