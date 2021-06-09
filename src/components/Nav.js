import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../styles/Nav.css';

export default function Nav({ firstName }) {
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light'>
      <div className='container'>
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item dropdown'>
            {firstName !== '' ?
              <button className='nav-link dropdown-toggle border-0 bg-light' data-bs-toggle='dropdown'>Hello, {firstName}</button> :
              <Link to='/login' className='nav-link'>Log In</Link>
            }
            <ul className='dropdown-menu'>
              <li><Link to='/edit' onClick={() => $('.dropdown-menu').removeClass('show')} className='dropdown-item'>Edit Information</Link></li>
              <li><Link to='/logout' onClick={() => $('.dropdown-menu').removeClass('show')} className='dropdown-item'>Log Out</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}