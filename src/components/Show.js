import '../styles/Show.css';

export default function Show() {
  const users = localStorage.getItem('users');

  return (
    <div className='container' id='show'>
      {!users ? 'No Users To Display' : 
        <p>Show Users</p>
      }
    </div>
  );
}