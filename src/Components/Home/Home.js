import React from 'react';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import './home.css'
import b2 from '../../images/b2.mp4'
import review from '../../images/icons8-message-58.png'
import couple from '../../images/chermiti-mohamed-37-lm2otkas-unsplash.jpg'
import check from '../../images/icons8-checked-radio-button-48.png'
import plans from '../../images/icons8-camping-58.png'
import useSiteData from '../DataLoad/sites';
import useReviewData from '../DataLoad/reviews';
const Home = () => {
    const [reviews] = useReviewData()
    const [site] = useSiteData()

    // slider setting
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };
    return (
        <Container fluid >
            {/* video */}
            <Row className='top-video' >
                <video loop="true" autoplay="autoplay" muted >
                    <source src={b2} type='video/mp4' />
                </video>

                <div className='overlay'></div>
                <div className='d-flex flex-column justify-content-start align-items-center'>
                    <div className="text ">
                        <h2>Never Stop To </h2>
                        <h3>Exploring The World</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>
                    </div>
                </div>
            </Row>
            {/* about segment */}
            <Row className='mt-2 mb-5 py-5 about'>
                <Col xs={12} md={12} lg={6} className='order-md-2 order-1'>
                    <img src={couple} alt="" className='img-fluid border-0' />
                </Col>
                <Col xs={12} md={12} lg={6} className='order-md-1 order-2'>
                    <h1 className='fw-bold '>About US</h1>

                    <h2 className='fw-bold'>The Best Destination To Complete Your Adventure</h2>
                    <p className='text-center para'>The way we see it, life is just one big journey. Here at Travel MAMA, <br />
                        we focus on wandering with travelers—before, during and after <br />their trip.
                        "You'll Never Roam Alone®," holds true today as we<br /> continue to make it our mission to remove the <br />barriers to enjoyable travel experiences.</p>


                    <Row >
                        <h3 className='fs-3 fw-bold text-center mb-5'>We Provide You Best Activity & Unforgettable Experience</h3>

                        <Col xs={6} md={6} className=' ps-5' >
                            <p><img src={check} alt="" className='img-fluid ' /> Best Campsite</p>
                            <p><img src={check} alt="" className='img-fluid ' /> Nature Vibe</p>
                            <p><img src={check} alt="" className='img-fluid ' /> Far From City</p>
                        </Col>
                        <Col xs={6} md={6} >
                            <p><img src={check} alt="" className='img-fluid ' /> Convinient Place</p>
                            <p><img src={check} alt="" className='img-fluid ' /> Cheap Price</p>
                            <p><img src={check} alt="" className='img-fluid ' /> Beauty Landscape</p></Col>
                    </Row>



                </Col>

            </Row>
            {/* services */}
            <h2 className='text-center'><img src={plans} className='img-fluid ' alt="" />The Best Itinerary Destination</h2>
            <hr className='mx-auto w-50' />
            <Row xs={1} md={3} className="g-4">
                {site.map(data => (
                    <Col>
                        <Card key={data.key} className="text-center border-0 p-2">
                            <Card.Img variant="top" src={data.img} className='img-fluid campic px-5' />
                            <Card.Body>
                                <Card.Title className='text-center fw-bold'>{data.name}</Card.Title>
                                <Card.Text>{data.descript.slice(0, 200)}</Card.Text>
                                <Card.Text className=' fs-3 fw-bold'>Only at a rate of ${data.price}</Card.Text>
                                {console.log(data._id)}
                                <NavLink to={`/sites/${data._id}`}><Button variant="warning" className='text-dark'>visit for more details</Button></NavLink>
                            </Card.Body>
                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>
                    </Col>
                ))
                }

            </Row >
            {/* slider */}
            < Row className='my-5' >

                <Container className='slideWidth'>
                    <h2 className='fs-2 fw-bold  text-center '> <img src={review} alt="" /> <span className='text-danger'> Rev</span>iews</h2>
                    <hr className='mx-auto w-25 text-center' />
                    <Slider {...settings}>
                        {reviews.map(data => (

                            <Card key={data.key} className='border-0 p-2' style={{ width: '' }}>
                                <Card.Img variant="top" src={data.img} className='img-fluid picture px-5' />
                                <Card.Body>
                                    <Card.Title className='text-center fw-bold'>{data.name}</Card.Title>
                                    <Card.Text>
                                        {data.descript.slice(0, 250)}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        ))}
                    </Slider>
                </Container>

            </Row >

        </Container >
    );
};

export default Home;