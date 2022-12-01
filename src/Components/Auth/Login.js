import Header from "../UI/Header";
import Footer from "../UI/Footer";

const login = () => {
  return (
    <>
      <Header />

      <div className="main">
        <div className="login-form">
          <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
          <form className="form form--login">
            <div className="form__group">
              <label className="form__label">Email Address</label>
              <input id="email" className="form__input" type="email" placeholder="imam@mail.com" />
            </div>
            <div className="form__group ma-bt-md">
              <label className="form__label">Password</label>
              <input id="password" className="form__input" type="email" placeholder="rahasia123" />
            </div>
            <div className="form__group">
              <button className="btn btn--green">Login</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
};

export default login;