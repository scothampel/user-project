import $ from 'jquery';
import '../styles/Login.css';

export default function Login({ setCurrentUser, users }) {
  const handleSubmit = (e) => {
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const password = $('#password').val();
    const userObj = {
      firstName,
      lastName
    }

    if (users) {
      if (users.filter(current => current.firstName === firstName && current.lastName === lastName && current.password === password).length === 1) {
        setCurrentUser(userObj);
      }
      else {
        console.log('invalid login');
      }
    }
    else {
      console.log('No Users');
    }

    e.preventDefault();
  }

  return (
    <div className='container' id='login'>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstName" required />
        </div>
        <div className='mb-3'>
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastName" required />
        </div>
        <div className='mb-3'>
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}