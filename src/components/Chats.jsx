import pfp2 from '../img/pfp2.png'

function Chats() {
    return (
      <div className='chats'>
        <div className="userChat">
          <img src={pfp2} />
          <div className="userChatInfo">
            <span>Jane</span>
            <p>hello there</p>
          </div>
        </div>
        <div className="userChat">
          <img src={pfp2} />
          <div className="userChatInfo">
            <span>Jane</span>
            <p>hello there</p>
          </div>
        </div>
        <div className="userChat">
          <img src={pfp2} />
          <div className="userChatInfo">
            <span>Jane</span>
            <p>hello there</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Chats