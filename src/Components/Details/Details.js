import React, { useEffect, useState } from 'react';
import { Col, Container, Modal, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../Context/useAuth';
import './detail.css';
// import buddy from './buddy-30.png';
import pic from './marginalia-location-access.png'
import { useForm } from "react-hook-form";
import axios from 'axios';
const Details = () => {
    const [siteData, setsiteData] = useState({})
    const { user } = useAuth();
    const { id } = useParams()
    const { register, handleSubmit, reset } = useForm();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onSubmit = data => {
        reset('');
        data.site = siteData;
        data.orderStatus = 'Pending';
        axios.post('https://enigmatic-earth-69756.herokuapp.com/order', data).then(res => res.data.insertedId ? handleShow() : '')

    }

    useEffect(() => {
        fetch(`https://enigmatic-earth-69756.herokuapp.com/site/${id}`).then(res => res.json()).then(data => setsiteData(data))
    }, [])





    return (
        <Container fluid className=' detailsbg'>
            <Row>
                <Col xs={12} md={6} data-aos="fade-up-left">
                    <h1 className='text-center mt-5 text-dark fw-bold' >{siteData?.name}</h1>
                    <img src={siteData?.img} alt="" className='img-fluid detail-pic' />
                    <h3 className='text-center fw-bold mt-3'>Cost Per day: ${siteData?.price}</h3>
                    <p className='text-center text-white fs-3'>{siteData?.descript}</p>

                </Col>
                <Col xs={12} md={6} className='' data-aos="fade-up-right">
                    {/* <img src={pic} alt="" className='img-fluid h-25 mt-5 pt-3 d-block mx-auto' /> */}
                    <form className='order mt-5' onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-center mt-5  fw-bold'> Reserve Your Spot Today!!!</h2>
                        <img src={pic} alt="" className='img-fluid w-25  d-block mx-auto' />
                        <input required placeholder='Name' defaultValue={user.displayName} className='reservation w-75' {...register("Name")} />
                        <input required placeholder='email' defaultValue={user.email} className='reservation w-75'{...register("email")} />
                        <input required placeholder='adrress' className='reservation w-75'{...register("Adrress")} />
                        <select required className='reservation w-50'{...register("gender")}>
                            <option value="female">female</option>
                            <option value="male">male</option>
                        </select>
                        <input className='reservation w-75 bg-secondary text-white' type="submit" />
                    </form>

                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>YAYYYYYYY</Modal.Title>
                </Modal.Header>
                <Modal.Body>MAMA TOUR E NIA JAITEEEESEEEEE</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        MAMA TUMI JOSS!
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Details;