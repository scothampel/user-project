import '../styles/Show.css';
import User from './User';

export default function Show({ currentUser, users }) {
  return (
    <div className='container' id='show'>
      <div className='row row-cols-1 row-cols-md-4 py-3 g-3'>
        {!users ? 'No Users' : users.map((current, index) => {
          const flag = currentUser && current.firstName === currentUser.firstName && current.lastName === currentUser.lastName ? '* ' : '';
          return <User firstName={flag + current.firstName} lastName={current.lastName} key={index} />
        })}
      </div>
    </div>
  );
}