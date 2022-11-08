import React, { useState, useEffect } from 'react';
import './About.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Card from 'react-bootstrap/Card';
// import  CardGroup  from 'react-bootstrap/CardGroup';
const About = () => {

    const [arrData, setArrData] = useState([]);

    useEffect(() => {

        // abort controller 
        const ac = new AbortController();


        // response
        try {

            ( async () => {
                const res = await axios.get(`https://fakestoreapi.com/products`, { signal: ac.signal })
                    setArrData(res?.data)
            })()

            // error exception
        } catch (err) {
            console.warn(err.response.data.message)
        }

        // unsubscription
        return () => ac.abort();


    }, [])

    console.log("arrData", arrData)


    const bookingHandle = () => {
        console.warn("Are you ready to book our Air tickets");
        setShow(true)
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
        <>
            <div className='parent-class'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="pictures d-block w-100"
                            src="/images/image1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className='caption'>
                            <h3 className='title'>Book online and begin your dream holyday</h3>
                            <p className='description'>Travel with the Airline of the Year </p>
                            <Button variant="primary" className='picture-button' onClick={bookingHandle}>Book now</Button>{' '}
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Yaahoo Big Offer</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    It's 20% of off tickets price to all of our Economic Class. Book to  your ticket. Happy Journey......
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Understood</Button>
                                </Modal.Footer>
                            </Modal>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" pictures d-block w-100 "
                            src="/images/images3.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption className='caption'>
                            <h3 className='title'>Book online and begin your dream holyday</h3>
                            <p className='description'>Travel with the Airline of the Year</p>
                            <Button variant="primary" className='picture-button' onClick={bookingHandle}>Book now</Button>{' '}
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Yaahoo Big Offer</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    It's 20% of off tickets price to all of our Economic Class. Book to  your ticket. Happy Journey......
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Understood</Button>
                                </Modal.Footer>
                            </Modal>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" pictures d-block w-100 "
                            src="/images/image2.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption className='caption'>
                            <h3 className='title'>Book online and begin your dream holyday</h3>
                            <p className='description'> Travel with the Airline of the Year</p>
                            <Button variant="primary" className='picture-button' onClick={bookingHandle}>Book now</Button>{' '}
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Yaahoo Big Offer</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    It's 20% of off tickets price to all of our Economic Class. Book to  your ticket. Happy Journey......
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Understood</Button>
                                </Modal.Footer>
                            </Modal>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <main>
                {/* Start card section */}
                <section className='container mt-5'>
                    <div className='d-flex align-items-center justify-content-between flex-wrap'>
                        {arrData.slice(0, 15).map((item, i) => {
                            return (
                                <div class=" row  col-md-4 col-sm-12 g-4 mb-4">
                                    <div class="col">
                                        <div class="card shadow-lg rounded-3">
                                            <img src={item.image} className=" images card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h2 class="card-title text-primary">{item.title}</h2>
                                                <p class="card-text"> { item.description.slice(0, 15) }... </p>
                                                <p class="card-text"> Price { item.price } </p>
                                                <p class="card-text"> Category { item.category } </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                        }

                        <br />
                    </div>
                </section>
                {/* End Card Section  */}

            </main>
        </>



    )
}

export default About