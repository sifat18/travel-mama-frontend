import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Modal, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './newsite.css';
import formPic from './looney-sign-up-form.png';
import sidePic from './conifer-filling-in-personal-information.png';
const NewSite = () => {
    const { register, handleSubmit, reset } = useForm();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onSubmit = data => {
        reset('');
        axios.post('http://localhost:7000/sites', data).then(res => res.data.acknowledged ? handleShow() : '')

    }

    return (
        <Container>
            <Row>
                <Col xs={12} md={6} className='my-5 order-md-1 order-2 text-center '>
                    <h3 className='fw-bold mb-4 fs-1 heading '> FOUND A NEW PLACE THAT NO ONE KNOWS??</h3>
                    <form className='addForm ms-5 ' onSubmit={handleSubmit(onSubmit)}>
                        <h3 className='text-center mt-5  fw-bold'>PLEASE ADD THAT PLACE INFORMATION</h3>
                        <img src={formPic} alt="" srcset="" className='img-fluid h-50 w-50 d-block mx-auto' />
                        <input required placeholder='campCode' className='reservation w-75' {...register("key")} />
                        <input required placeholder='name' className='reservation w-75'{...register("name")} />
                        <input required placeholder='imgURL' className='reservation w-75'{...register("img")} />
                        <input type='number' required placeholder='price' className='reservation w-75'{...register("price")} />
                        <textarea rows='5' wrap='hard' required placeholder='desciption' className='reservation w-75'{...register("descript")} />
                        <input className='reservation w-75 add-btn ' type="submit" />
                    </form>
                </Col>
                <Col xs={12} md={6} className='order-md-2 order-1 my-5 pt-5 '>
                    <img src={sidePic} alt="" className='img-fluid space' />
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>MAMAR CAMP</Modal.Title>
                </Modal.Header>
                <Modal.Body>AREH MAMA CAMPING BUSINESS KORBE</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        BEST OF LUCK MAMA
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default NewSite;