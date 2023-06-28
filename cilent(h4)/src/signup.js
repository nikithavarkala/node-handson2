import React from 'react'
import { Link } from 'react-router-dom'

function Signup(){
  return (
    <>
    <div id="b2">
        <h2>SIGNUP</h2>
      <form action='' method=''>
        <label>Name: </label>
        <input type="text" name="name" id="name"/><br/><br/>
        <label>Email:  </label>
        <input type="email" name="email" id="email"/><br/><br/>
        <label>contact no: </label>
        <input type="number" name="mobile" id="mobile"/><br/><br/>
        <label>password: </label>
        <input type="text" name="pw" id="pw"/><br/><br/>
        {/* <input type="submit"  value="signup" className=''/> */}
        <button>Signup</button>
            <Link to='/'>      <h4>Already had an account</h4> </Link>
      </form>
      </div>
    </>
  )
}

export default Signup