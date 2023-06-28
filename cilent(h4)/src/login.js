import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

function Login(){
  return (
    <>
    <div id="b1">
        <h2>LOGIN</h2>
      <form action='' method='get'>
      {/* <label for="uname">Username  </label> */}
      <span className='icon'><ion-icon name="mail"></ion-icon></span>
      <input type="text" name="uname" id="uname" placeholder='username'/><br/><br/>
      {/* <label for="pass">Password  </label> */}
      <input type="text" name="pw" id="pw" placeholder='password'/><br/><br/>
      {/* <input type="submit"  value="login" className='login'/> &nbsp; &nbsp; &nbsp; */}
      <button>Login</button>
      <p>Don't have an account? <Link to='/signup' className='regtxt'>Register </Link></p>
     
      </form>
      </div>
    </>
  )
}

export default Login