import $ from 'jquery';
import '../styles/Create.css';

export default function Create({ users, setUsers }) {
  const handleSubmit = (e) => {
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const age = $('#age').val();
    const phone = $('#phone').val();
    const password = $('#password').val();
    const userObj = {
      firstName,
      lastName,
      age,
      phone,
      password
    };

    if (users) {
      if (users.filter(current => current.firstName === firstName && current.lastName === lastName).length === 0) {
        setUsers([...users, userObj]);
      }
    }
    else {
      setUsers([userObj]);
    }

    e.preventDefault();
  }

  return (
    <div className='container' id='create'>
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
          <label htmlFor="age" className="form-label">Age</label>
          <input type="number" className="form-control" id="age" />
        </div>
        <div className='mb-3'>
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phone" required />
        </div>
        <div className='mb-3'>
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}