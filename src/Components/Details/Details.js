import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../Context/useAuth';
import './detail.css';
import pic from './marginalia-location-access.png';
const Details = () => {
    const [siteData, setsiteData] = useState({})
    const { user } = useAuth();
    const { id } = useParams()
    const { register, handleSubmit, reset } = useForm();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // getting data from form
    const onSubmit = data => {
        reset('');
        data.site = siteData;
        data.orderStatus = 'Pending';
        axios.post('https://travelmama.onrender.com/order', data).then(res => res.data.insertedId ? handleShow() : '')

    }
    // fetching data from database
    useEffect(() => {
        fetch(`https://travelmama.onrender.com/site/${id}`).then(res => res.json()).then(data => setsiteData(data))
    }, [])





    return (
        <Container fluid className=' detailsbg'>
            <Row>
                {/* data from database */}
                <Col xs={12} md={6} data-aos="fade-up-left">
                    <h1 className='text-center mt-5 text-dark fw-bold' >{siteData?.name}</h1>
                    <img src={siteData?.img} alt="" className='img-fluid detail-pic' />
                    <h3 className='text-center fw-bold mt-3 text-white'>Cost Per day: ${siteData?.price}</h3>
                    <p className='text-center text-white fs-3'>{siteData?.descript}</p>

                </Col>
                {/* order form */}
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
            {/* modal after submit form */}
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