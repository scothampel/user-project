import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../styles/Nav.css';

export default function Nav({ firstName, users }) {
  return (
    <nav className='navbar navbar-expand navbar-light bg-light'>
      <div className='container'>
        <ul className='navbar-nav'>
          <li className="nav-item">
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li className="nav-item">
          <Link to='/create' className='nav-link'>Add User</Link>
          </li>
        </ul>
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item dropdown'>
            {users ? 
              firstName !== '' ?
                <button className='nav-link dropdown-toggle border-0 bg-light' data-bs-toggle='dropdown'>Hello, {firstName}</button> :
                <Link to='/login' className='nav-link'>Log In</Link>
              : ''
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