import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Modal, Table, Button } from 'react-bootstrap';
import deleImg from './icons8-delete-64.png';
import updateImg from './icons8-update-64.png';

const AllOrder = () => {
    const [orderData, setorderData] = useState([])
    const [modifiid, setmodifiid] = useState(false)
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    let count = 0;
    useEffect(() => {
        fetch(`http://localhost:7000/orders`).then(res => res.json()).then(data => setorderData(data))
    }, [modifiid])

    const handleremove = (id) => {
        let check = window.confirm("Do U want to delete?");
        if (check) {
            axios.delete(`http://localhost:7000/order/${id}`).then(res => {
                if (res.data) {
                    const collect = orderData.filter(order => order._id !== id)
                    setorderData(collect);
                    setmodifiid(false)
                }
            })
        }
        handleShow()
    }
    const handleUpdate = (id) => {
        let check = window.confirm("Do U want to update?");
        if (check) {
            axios.put(`http://localhost:7000/orderUpdate/${id}`).then(res => {
                if (res.data.modifiedCount) {
                    setmodifiid(true)
                }
            })
        }
        handleShow()
    }

    return (
        <Container className='my-5'>
            <Table responsive striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <th>Sl</th>
                        <th>UserName</th>
                        <th>Reserved Spot</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th>Update Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orderData.map(order =>
                        <tr className='text-center'>
                            <td>{++count}</td>
                            <td>{order.Name}</td>
                            <td>{order.site.name}</td>
                            <td>{order.orderStatus}</td>
                            <td><button type='button' onClick={() => handleremove(order?._id)} className='d-block border-0 mx-auto'><img src={deleImg} alt="" className='img-fluid  ' /></button></td>
                            <td><button type='button' onClick={() => handleUpdate(order?._id)} className='d-block border-0 mx-auto'><img src={updateImg} alt="" className='img-fluid ' /></button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modifiid ? 'AYE MAMA CONFIRM KORSE' : 'DHUUURU'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modifiid ? 'AMAR MAMA JOSS' : 'Arreeeeh Tour cancel kore dilo -_-'}</Modal.Body>
                <Modal.Footer>
                    <Button variant={modifiid ? 'success' : 'warning'} onClick={handleClose}>
                        {modifiid ? "TOUR HOBE" : "TOUR CANCEL"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default AllOrder;