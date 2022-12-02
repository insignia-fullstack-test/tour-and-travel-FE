import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../.././store/actions/auth';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);

  return (
    <header className="header">
      <nav className="nav--tours">
        {/* <p className="nav__el"><Link to='/test'>All Tours</Link></p> */}
        <a className="nav__el" href="/">All Tours</a>
      </nav>
      <div className='header__logo'>
        <h1>TOUR-KUY</h1>
      </div>
      <nav className="nav nav--user">
        {
          isLoggedIn
            ? <>
              <a className="nav__el nav__el--logout" href='/' onClick={() => dispatch(logout())}>Log out</a>
              <a className="nav__el" href='/me'>
                <span>Hi, NAMA USER</span>
              </a>
            </>
            : <>
              <a className="nav__el" href="/login">Log in</a>
              <a className="nav__el nav__el--cta" href="/register">Register</a>
            </>
        }
      </nav>
    </header >
  )
};

export default Header;