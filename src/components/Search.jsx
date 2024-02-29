import pfp2 from '../img/pfp2.png'

function Search() {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type='text' placeholder='Search user'/>
      </div>
      <div className="userChat">
        <img src={pfp2} />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search