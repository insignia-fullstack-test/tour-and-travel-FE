import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/auth';

import Header from "../UI/Header";
import Footer from "../UI/Footer";

const Login = () => {

  const dispatch = useDispatch();
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  };

  const submitForm = async (e) => {
    e.preventDefault()

    const data = {
      email,
      password
    }

    const res = await dispatch(login(data, history)).then(response => ({ response }))
      .catch(error => ({ error }))

    console.log(res)
  }


  return (
    <>
      <Header />

      <div className="main">
        <div className="login-form">
          <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
          <form className="form form--login" onSubmit={submitForm}>
            <div className="form__group">
              <label className="form__label">Email Address</label>
              <input
                id="email"
                className="form__input"
                type="email"
                placeholder="imam@mail.com"
                onChange={handleChangeEmail}
              />
            </div>
            <div className="form__group ma-bt-md">
              <label className="form__label">Password</label>
              <input
                id="password"
                className="form__input"
                type="password"
                placeholder="imam@mail.com"
                onChange={handleChangePassword}
              />
            </div>
            <div className="form__group">
              <button type="submit" className="btn btn--green">Login</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
};

export default Login;