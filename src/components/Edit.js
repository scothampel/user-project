import $ from 'jquery';
import '../styles/Edit.css';

export default function Edit({ currentUser, setCurrentUser, users, setUsers, }) {
  const handleSubmit = (e) => {
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const age = $('#age').val();
    const phone = $('#phone').val();
    const password = $('#password').val();

    if (users) {
      const editedUsers = users.map(current => {
        if(current.firstName === currentUser.firstName && current.lastName === currentUser.lastName) {
          setCurrentUser({
            firstName: firstName || current.firstName,
            lastName: lastName || current.lastName,
            age: age || current.age,
            phone: phone || current.phone
          });
          return {
            firstName: firstName || current.firstName,
            lastName: lastName || current.lastName,
            age: age || current.age,
            phone: phone || current.phone,
            password: password || current.password
          }
        }
        else return current;
      });
      setUsers(editedUsers);
    }
    else {
      console.log('No Users');
    }

    e.preventDefault();
  }

  return (
    <div  className='container' id='edit'>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstName" placeholder={currentUser.firstName} />
        </div>
        <div className='mb-3'>
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastName" placeholder={currentUser.lastName} />
        </div>
        <div className='mb-3'>
          <label htmlFor="age" className="form-label">Age</label>
          <input type="number" className="form-control" id="age" placeholder={currentUser.age} />
        </div>
        <div className='mb-3'>
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phone" placeholder={currentUser.phone} />
        </div>
        <div className='mb-3'>
          <label htmlFor="password" className="form-label">New Password</label>
          <input type="password" className="form-control" id="password" placeholder='password' />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}