import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { register } from '../../store/actions/auth';
import Header from "../UI/Header";
import Footer from "../UI/Footer";

const Register = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [name, setName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleAddress = (e) => {
    setAddress(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const submitForm = async (e) => {
    e.preventDefault()

    const data = {
      name,
      email,
      phone,
      address,
      password
    }

    const res = await dispatch(register(data, history)).then(response => ({ response }))
      .catch(error => ({ error }))

    console.log(res)
  }

  return (
    <>
      <Header />

      <div className="main">
        <div className="login-form">
          <h2 className="heading-secondary ma-bt-lg">Register</h2>
          <form className="form form--login" onSubmit={submitForm}>
            <div className="form__group">
              <label className="form__label">Name</label>
              <input onChange={handleName} id="name" className="form__input" type="text" placeholder="imam" />
            </div>
            <div className="form__group">
              <label className="form__label">Email Address</label>
              <input onChange={handleEmail} id="email" className="form__input" type="email" placeholder="imam@mail.com" />
            </div>
            <div className="form__group">
              <label className="form__label">Phone Number</label>
              <input onChange={handlePhoneNumber} id="phone" className="form__input" type="text" placeholder="081212212121" />
            </div>
            <div className="form__group">
              <label className="form__label">Address</label>
              <input onChange={handleAddress} id="address" className="form__input" type="text" placeholder="Bandung" />
            </div>
            <div className="form__group ma-bt-md">
              <label className="form__label">Password</label>
              <input onChange={handlePassword} id="password" className="form__input" type="password" placeholder="rahasia123" />
            </div>
            <div className="form__group">
              <button className="btn btn--green" type='submit'>Register</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
};

export default Register;