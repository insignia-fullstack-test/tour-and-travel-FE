import Header from "../UI/Header";
import Footer from "../UI/Footer";

const Register = () => {
  return (
    <>
      <Header />

      <div className="main">
        <div className="login-form">
          <h2 className="heading-secondary ma-bt-lg">Register</h2>
          <form className="form form--login">
            <div className="form__group">
              <label className="form__label">Name</label>
              <input id="name" className="form__input" type="text" placeholder="imam" />
            </div>
            <div className="form__group">
              <label className="form__label">Email Address</label>
              <input id="email" className="form__input" type="email" placeholder="imam@mail.com" />
            </div>
            <div className="form__group">
              <label className="form__label">Phone Number</label>
              <input id="phone" className="form__input" type="text" placeholder="081212212121" />
            </div>
            <div className="form__group ma-bt-md">
              <label className="form__label">Password</label>
              <input id="password" className="form__input" type="password" placeholder="rahasia123" />
            </div>
            <div className="form__group">
              <button className="btn btn--green">Register</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
};

export default Register;