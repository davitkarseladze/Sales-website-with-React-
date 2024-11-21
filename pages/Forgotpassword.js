import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom";
import './SignUpPage.css';

function Forgotpassword (props){
  let [email, setEmail]=useState('')
  function sendEmail(){
      if(email!==''){
          window.alert('email has been sent')
      }else {
        window.alert('Please input an email')
      }
  }
return (
  <div className='forgotpassword'>
         <div className='login'>
<div className="spacer1"></div>

    <div className="title">
      <h1>Forgot Password</h1>
    </div>
    <div className="spacer1"></div>
      <div className="logincontainer">
        <form onSubmit={(e)=>e.preventDefault()}>
          <label >
            <span>Email</span>
            <input type="text" placeholder='example@mail.com' onChange={(e)=>setEmail(e.target.value)}/>
          </label>
            <button className='themeBtn' onClick={()=>sendEmail()}>Send email</button>
         
        </form> 
   
       <Link to='/signup' className='forgotPasswordButton'>Return to login page</Link>
      </div>
    
  </div>
  </div>
)
}
export default Forgotpassword