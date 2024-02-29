import pfp from '../img/pfp.png'

function Navbar() {
    return (
      <div className='navbar'>
        <span className="logo">Yapper Chat</span>
        <div className='user'> 
        <div className='user'>
            <img src={pfp} alt='profile picture' />
            <span>John</span>
            <button>Sign Out</button>
        </div>
        </div>
      </div>
    )
  }
  
  export default Navbar