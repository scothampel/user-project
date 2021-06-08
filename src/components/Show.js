import '../styles/Show.css';
import User from './User';

export default function Show() {
  const users = JSON.parse(localStorage.getItem('users'));

  return (
    <div className='container' id='show'>
      <div className='row row-cols-1 row-cols-md-4 py-3 g-3'>
        {!users ? 'No Users' : users.map((current, index) => {
          return <User firstName={current.firstName} lastName={current.lastName} key={index} />
        })}
      </div>
    </div>
  );
}