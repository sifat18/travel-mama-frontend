import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button, Modal } from 'react-bootstrap';
import useAuth from '../Context/useAuth';

const MyOrders = () => {
    const [orders, setorders] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleremove = (id) => {
        let check = window.confirm("Do U want to delete?");
        if (check) {
            axios.delete(`http://localhost:7000/order/${id}`).then(res => {
                if (res.data) {
                    const collect = orders.filter(order => order._id !== id)
                    setorders(collect)
                }
            })
        }
        handleShow()
    }

    const { user } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:7000/order/${user.email}`).then(res => res.json()).then(data => setorders(data))
    }, [])
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                {orders.map(data =>
                    <Col>
                        <Card key={data?._id} className="text-center border-0 p-2">
                            <Card.Img variant="top" src={data?.site.img} className='img-fluid campic px-5' />
                            <Card.Body>
                                <Card.Title className='text-center fw-bold'>{data?.site.name}</Card.Title>
                                <Card.Text>{data?.site.descript.slice(0, 200)}</Card.Text>
                                <Card.Text className=' fs-3 fw-bold'>Cost ${data?.site.price}</Card.Text>
                                {console.log(data._id)}
                                <Button variant="warning" onClick={() => handleremove(data?._id)} className='text-dark'>Cancel Reservation</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>

                    </Col>
                )}
            </Row>
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