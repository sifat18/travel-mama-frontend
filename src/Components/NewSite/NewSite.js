import axios from 'axios';
import React, { useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './newsite.css';
import formPic from './looney-sign-up-form.png';
const NewSite = () => {
    const { register, handleSubmit, reset } = useForm();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onSubmit = data => {
        reset('');
        axios.post('https://enigmatic-earth-69756.herokuapp.com/sites', data).then(res => {
            console.log(res.data);
            if (res.data) {
                handleShow()
            }
        })

    }

    return (
        <Container fluid className='newsitebg w-100 pb-5 text-center pt-5'>
            <h3 className='fw-bold mb-4 fs-1 heading '><span className='text-white'>FOUND A NEW PLACE THAT NO ONE KNOWS??</span> </h3>
            <form className='addForm mx-auto w-50' onSubmit={handleSubmit(onSubmit)}>
                <h3 className='text-center mt-5  fw-bold'>PLEASE ADD THAT PLACE INFORMATION</h3>
                <img src={formPic} alt="" srcset="" className='img-fluid h-50 w-50 d-block mx-auto' />
                <input required placeholder='campCode' className='reservation w-75' {...register("key")} />
                <input required placeholder='name' className='reservation w-75'{...register("name")} />
                <input required placeholder='imgURL' className='reservation w-75'{...register("img")} />
                <input type='number' required placeholder='price' className='reservation w-75'{...register("price")} />
                <textarea rows='5' wrap='hard' required placeholder='desciption' className='reservation w-75'{...register("descript")} />
                <input className='reservation  add-btn fs-4 fw-bold ' type="submit" />
            </form>
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