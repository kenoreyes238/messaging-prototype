function Login(){
    return (
      <div className='formContainer'>
          <div className='formWrapper'>
              <span className="logo">Yapper Chat</span>
              <span className="title">Login</span>
              <form>
                  <input type='email' placeholder='email'/>
                  <input type='password' placeholder='password'/>
                  <button>Sign In</button>
              </form>
              <p>Don't have an account with us? Create an account with us</p>
          </div>
      </div>
    )
  }
  
  export default Login