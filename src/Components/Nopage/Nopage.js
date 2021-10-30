import React from 'react';
import { Container } from 'react-bootstrap';
import pic from './urban-654.png'
const Nopage = () => {
    return (
        // 404 image
        <Container>
            <img src={pic} alt="" className='img-fluid' />
        </Container>
    );
};
export default Nopage;