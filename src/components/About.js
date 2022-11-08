import React, {useState} from 'react';
import  './About.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Card from 'react-bootstrap/Card';
// import  CardGroup  from 'react-bootstrap/CardGroup';
const About = () => {

    const bookingHandle =() =>{
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
                src= "/images/image1.jpg"
                alt="First slide"
            />
            <Carousel.Caption className='caption'>
                <h3 className='title'>Book online and begin your dream holyday</h3>
                <p className='description'>Travel with the Airline of the Year </p>
                <Button variant="primary" className='picture-button'  onClick={bookingHandle}>Book now</Button>{' '}
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
                <Button variant="primary" className='picture-button'  onClick={bookingHandle}>Book now</Button>{' '}
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
    <section className='container mt-5'>
        <div>
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
                <div class="card shadow-lg rounded-3">
                    <img src="/images/bag2.jpg" className=" images card-img-top" alt="..."/>
                    <div class="card-body">
                        <h2 class="card-title text-primary">Purchase extra baggage</h2>
                        <p class="card-text">Additional baggage allowance can be purchased before your trip. Save when you purchase it online.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-lg rounded-3">
                    <img src="/images/bag4.jpg" className=" images card-img-top" alt="..."/>
                    <div class="card-body">
                    <h2 class="card-title text-primary">Purchase extra baggage</h2>                    
                        <p class="card-text">Additional baggage allowance can be purchased before your trip. Save when you purchase it online.</p>
                    </div>
                </div>
            </div>
            <div class="col ">
                <div class="card shadow-lg rounded-3">
                    <img src="/images/bagage1.jpg"  className=" images card-img-top"  alt="..."/>
                    <div class="card-body">
                    <h2 class="card-title text-primary">Purchase extra baggage</h2>
                        <p class="card-text">Additional baggage allowance can be purchased before your trip. Save when you purchase it online.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-lg rounded-3">
                    <img src="/images/bag5.jpg"  className=" images card-img-top"  alt="..."/>
                    <div class="card-body">
                    <h2 class="card-title text-primary">Purchase extra baggage</h2>
                        <p class="card-text">Additional baggage allowance can be purchased before your trip. Save when you purchase it online.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-lg rounded-3">
                    <img src="/images/bagage1.jpg"  className=" images card-img-top"  alt="..."/>
                    <div class="card-body">
                    <h2 class="card-title text-primary">Purchase extra baggage</h2>
                        <p class="card-text">Additional baggage allowance can be purchased before your trip. Save when you purchase it online.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-lg rounded-3">
                    <img src="/images/bag2.jpg"  className=" images card-img-top"  alt="..."/>
                    <div class="card-body">
                    <h2 class="card-title text-primary">Purchase extra baggage</h2>
                        <p class="card-text">Additional baggage allowance can be purchased before your trip. Save when you purchase it online.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-lg rounded-3">
                    <img src="/images/bag3.jpg"  className=" images card-img-top"  alt="..."/>
                    <div class="card-body">
                    <h2 class="card-title text-primary">Purchase extra baggage</h2>
                        <p class="card-text">Additional baggage allowance can be purchased before your trip. Save when you purchase it online.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-lg rounded-3">
                    <img src="/images/baggae6.jpg"  className=" images card-img-top"  alt="..."/>
                    <div class="card-body">
                    <h2 class="card-title text-primary">Purchase extra baggage</h2>
                        <p class="card-text">Additional baggage allowance can be purchased before your trip. Save when you purchase it online.</p>
                    </div>
                </div>
            </div>
        </div>
        <br />
            

        </div>
    </section>
    <section>
        <h1 className='mt-5 text-center text-danger'>this is</h1>
    </section>
   </main>
   </>

    

  )
}

export default About