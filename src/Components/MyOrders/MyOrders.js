import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button, Modal } from 'react-bootstrap';
import useAuth from '../Context/useAuth';
import './myorder.css'
const MyOrders = () => {
    const [orders, setorders] = useState([])
    // for modals display
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // remove reservation
    const handleremove = (id) => {
        let check = window.confirm("Do U want to delete?");
        if (check) {
            axios.delete(`https://enigmatic-earth-69756.herokuapp.com/order/${id}`).then(res => {
                if (res.data) {
                    const collect = orders.filter(order => order._id !== id)
                    setorders(collect)
                }
            })
        }
        handleShow()
    }
    // data load by email
    const { user } = useAuth()
    useEffect(() => {
        fetch(`https://enigmatic-earth-69756.herokuapp.com/order/${user.email}`).then(res => res.json()).then(data => setorders(data))
    }, [])
    return (
        // booked data
        <Container fluid className='myorderbg py-5'>
            <Row xs={1} md={2} className="g-4" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                {orders.map(data =>
                    <Col>
                        <Card key={data?._id} className="text-center border-0 p-2  box1 orderCard zoom">
                            <Card.Img variant="top" src={data?.site.img} className='img-fluid orderPic' />
                            <Card.Body>
                                <Card.Title className='text-center fw-bold'>{data?.site.name}</Card.Title>
                                <Card.Text className=' fs-4'>{data?.site.descript.slice(0, 200)}</Card.Text>
                                <Card.Text className=' fs-3 fw-bold'>Cost ${data?.site.price}</Card.Text>
                                {console.log(data._id)}
                                <Button variant="warning" onClick={() => handleremove(data?._id)} className='text-dark fs-5 fw-bold'>Cancel Reservation</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>

                    </Col>
                )}
            </Row>
            {/* modals  */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>DHUUURU</Modal.Title>
                </Modal.Header>
                <Modal.Body>Arreeeeh Tour cancel kore dilo -_-</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        MAMA POCHA!
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default MyOrders;