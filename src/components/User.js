import '../styles/User.css';

export default function User({ firstName, lastName }) {
  return (
    <div className='col'>
      <div className='card'>
        <img src='https://via.placeholder.com/250' className='card-img-top' alt='User headshot' />
        <div className='card-body'>
          <h4 className='card-title'>{firstName} {lastName}</h4>
        </div>
      </div>
    </div>
  );
}