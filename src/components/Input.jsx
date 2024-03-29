import Img from '../img/img.png'
import Attach from '../img/attach.png'

function Input() {
    return (
      <div className='input'>
        <input type='text' placeholder='Type something...' />
        <div className="send">
          <img src={Attach} />
          <input type='file' id='file' />
          <label htmlFor='file'>
            <img src={Img} />
          </label>
          <button>Send</button>
        </div>
      </div>
    )
  }
  
  export default Input