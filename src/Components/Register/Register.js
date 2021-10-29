import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import pic1 from './voting.svg';
import pic2 from './enter.svg';
import useAuth from '../Context/useAuth';
import './register.css'

const Register = () => {
    const { createUser } = useAuth()
    const history = useHistory();
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const [error, seterror] = useState('')
    const [name, setname] = useState('')
    let repassword;

    const hadlePassblur = e => {
        console.log(e.target.value);
        setpass(e.target.value);
    }
    // getting pass and check if re entered pass matches
    const hadlePass = e => {
        console.log(e.target.value);
        repassword = e.target.value;
        if (pass === repassword) {
            console.log(pass, repassword)
            seterror('')
        } else {
            console.log(pass, repassword)
            seterror('passward doesnt match')

        }
    }
    // getting email
    const hadleEmailblur = e => {
        console.log(e.target.value);
        setemail(e.target.value)
    }
    // getting name
    const hadlename = e => {
        console.log(e.target.value);
        setname(e.target.value)
    }
    // create user
    const handleRegister = (e) => {
        e.preventDefault();
        if (pass.length < 6) {
            seterror('password needs to be atleast 6 characters long');
            return
        }
        createUser(name, email, pass);
        seterror('')
        history.push('/home')
    }
    return (
        <Container fluid className='my-5 py-2'>
            {/* register form */}
            <h2 className='text-center fs-1 fw-bold'><img src={pic1} alt="" height='60' width='60' /> Register</h2>
            <hr className='mx-auto w-25' />
            <form className='mt-3 pt-2' onSubmit={handleRegister}>
                <input required className='inputs my-4 w-50' type="text" onBlur={hadlename} placeholder='name' name="name" id="name" />
                <input required className='inputs my-4 w-50' type="email" onBlur={hadleEmailblur} placeholder='email' name="email" id="email" />
                <input required className='inputs my-4 w-50' type="password" onBlur={hadlePassblur} placeholder='password' name="pass" id="pass" />
                <input required className='inputs my-4 w-50' type="password" onBlur={hadlePass} placeholder='re-enter password' name="re-pass" id="pass" />
                {error ? <p className='text-danger text-center'>{error}</p> : ''}

                <button className='inputs btn-danger w-25 mt-2 fs-3 mb-5'>Register <img src={pic2} alt="" height='30' width='30' /></button>
            </form>

        </Container>
    );
};

export default Register;