import { useState } from 'react';
import Add from '../img/addAvatar.png'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function Register(){

  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
    } 
    catch(err) {
      setErr(true);
    }
  }

  

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Yapper Chat</span>
            <span className="title">Create an account</span>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='display name'/>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input type='file' id='file'className='pfp'/>
                <label htmlFor="file">
                    <img src={Add} />
                    <span>Add an Avatar</span>
                </label>
                <button>Sign up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>Have an account with us? Login</p>
        </div>
    </div>
  )
}

export default Register
