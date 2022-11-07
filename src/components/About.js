import React from 'react';
import  './About.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
const About = () => {
  return (
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
                <Button variant="primary">Book now</Button>{' '}
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
                <Button variant="primary">Book now</Button>{' '}
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
                <Button variant="primary">Book now</Button>{' '}
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>

    

  )
}

export default About