import pfp2 from '../img/pfp2.png'

function Message() {
    return (
      <div className='message'>
          <div className="messageInfo">
              <img src={pfp2} />
              <span>just now</span>
          </div>
          <div className="messageContent">
            <p>hello there</p>
          </div>
      </div>
    )
  }
  
  export default Message