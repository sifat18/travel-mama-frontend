import React, { useEffect, useState } from 'react';
import { Col, Container, Modal, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../Context/useAuth';
import './detail.css';
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
        axios.post('http://localhost:7000/order', data).then(res => res.data.insertedId ? handleShow() : '')

    }

    useEffect(() => {
        fetch(`http://localhost:7000/site/${id}`).then(res => res.json()).then(data => setsiteData(data))
    }, [])





    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <h1 className='text-center mt-5  fw-bold' >{siteData?.name}</h1>
                    <img src={siteData?.img} alt="" className='img-fluid detail-pic' />
                    <h3 className='text-center fw-bold mt-1'>Cost Per day: ${siteData?.price}</h3>
                    <p>{siteData?.descript}</p>

                </Col>
                <Col xs={12} md={6} className='mb-5 pb-5'>
                    <img src={pic} alt="" className='img-fluid w-50 h-50 d-block mx-auto' />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-center mt-5  fw-bold'> Reserve Your Spot Today!!!</h2>
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
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, Your reservation Complete</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Details;