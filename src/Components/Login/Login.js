import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import pic1 from './enter.svg';
import pic2 from './login.svg';
import google from './icons8-google.svg';
import useAuth from '../Context/useAuth';
const Login = () => {
    const { signGoogle, emailPass, setisLoading } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    //  google login
    const handleLogin = () => {
        signGoogle().then(result => {
            history.push(redirect_url)
        }).finally(() => setisLoading(false))
    }
    // setting states
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    // getting pass
    const hadlePassblur = e => {
        setpass(e.target.value)
    }
    // getting email
    const hadleEmailblur = e => {
        setemail(e.target.value)
    }
    // email pass login
    const handleSign = (e) => {
        e.preventDefault();
        emailPass(email, pass);
    }
    return (
        <Container className='my-5'>
            {/* login form */}
            <h2 className='text-center fs-1 fw-bold'><img src={pic2} alt="" height='60' width='60' /> Login with <span className='text-success'> Email </span >& <span className='text-primary'> Password</span></h2>
            <hr className='mx-auto w-50' />

            <form className=' pt-3' onSubmit={handleSign}>

                <input className='inputs my-4 w-50' onBlur={hadleEmailblur} type="email" placeholder='email' name="email" id="email" />
                <input className='inputs my-4 w-50' onBlur={hadlePassblur} type="password" placeholder='password' name="pass" id="pass" />
                <button className='inputs btn-danger mt-2 fs-3 w-25' type="submit">Login <img src={pic1} alt="" height='30' width='30' /> </button>
            </form >
            <div className='text-center mt-5 '>
                <p className='fs-3 fw-nromal'>New user? <NavLink to='/register'>Click me</NavLink></p>
                <p>-------OR------</p>
                <button className='btn bg-white border border-1 mb-5 ' onClick={handleLogin} > <img src={google} alt="" height='30' width='30' /> Google Sign In</button>
            </div>
        </Container>
    );
};

export default Login;