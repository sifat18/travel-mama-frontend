import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Container, Modal, Table } from 'react-bootstrap';
import './allorder.css';
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
        fetch(`https://travelmama.onrender.com/orders`).then(res => res.json()).then(data => setorderData(data))
    }, [modifiid])

    const handleremove = (id) => {
        let check = window.confirm("Do U want to delete?");
        if (check) {
            axios.delete(`https://travelmama.onrender.com/order/${id}`).then(res => {
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
            axios.put(`https://travelmama.onrender.com/orderUpdate/${id}`).then(res => {
                if (res.data.modifiedCount) {
                    setmodifiid(true)
                }
            })
        }
        handleShow()
    }

    return (
        <Container fluid className='pt-3   text-center allorderbg'>
            <Table responsive striped bordered hover >
                <thead>
                    <tr className='text-center'>
                        <th className='fs-3 text-white'>Sl</th>
                        <th className='fs-3 text-white'>UserName</th>
                        <th className='fs-3 text-white'>Reserved Spot</th>
                        <th className='fs-3 text-white'>Status</th>
                        <th className='fs-3 text-white'>Delete</th>
                        <th className='fs-3 text-white'>Update Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orderData.map(order =>
                        <tr key={order._id} className='text-center'>
                            <td className='fs-4 text-white '>{++count}</td>
                            <td className='fs-4 text-white '>{order.Name}</td>
                            <td className='fs-4 text-white '>{order.site.name}</td>
                            <td className='fs-4 text-white fw-bold'><span className={order.orderStatus === 'Pending' ? 'text-danger' : 'text-success'}>{order.orderStatus}</span></td>
                            <td className='fs-4 text-white '><button type='button' onClick={() => handleremove(order?._id)} className='d-block border-0 mx-auto'><img src={deleImg} alt="" className='img-fluid  ' /></button></td>
                            <td className='fs-4 text-white '><button type='button' onClick={() => handleUpdate(order?._id)} className='d-block border-0 mx-auto'><img src={updateImg} alt="" className='img-fluid ' /></button></td>
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