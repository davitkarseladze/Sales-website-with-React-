import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './SignUpPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faYahoo } from '@fortawesome/free-brands-svg-icons';

function SignUpPage(props) {
  const [hasAccount, setHasAccount] = useState(true);
  const { name, setName, email, setEmail, password, setPassword, emailError, passwordError, handleLogin, handleSignup } = props;
  const navigate = useNavigate();

  function determineLoading() {
    if (props.loading) {
      return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>;
    } else {
      return hasAccount ? 'Log in' : 'Register';
    }
  }

  const isLoginDisabled = !email || !password;
  const isRegisterDisabled = !name || !email || !password;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (hasAccount) {
      handleLogin();
    } else {
      handleSignup();
    }
    navigate('/');
  };

  return (
    <div className="login">
      <div className="title">
        <h1>{hasAccount ? 'Log In' : 'Register'}</h1>
      </div>
      <div className="spacer1"></div>
      <div className="logincontainer">
        <form onSubmit={handleFormSubmit}>
          <label style={{ display: hasAccount ? 'none' : 'flex' }}>
            <span>Name</span>
            <input type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <span>Email</span>
            <input type="text" value={email} placeholder="store@mail.com" onChange={(e) => setEmail(e.target.value)} />
            <p className="errormsgLogin">{emailError}</p>
          </label>
          <label>
            <span>Password</span>
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <p className="errormsgLogin">{passwordError}</p>
          </label>
          {hasAccount ? (
            <div className="btnContainer">
              <button className="themeBtn" disabled={isLoginDisabled}>{determineLoading()}</button>
              <div className="flex" style={{ textAlign: 'center' }}>
                <Link to="/forgotpassword" className="forgotPasswordButton">Forgot your password?</Link>
                <div className="flexrow">
                <small>Don't have an account?<span onClick={() => setHasAccount(!hasAccount)} style={{ cursor: 'pointer' }}> Register</span></small>
                </div>
              </div>
            </div>
          ) : (
            <div className="btnContainer">
              <button className="themeBtn" style={{ marginBottom: '10px' }} disabled={isRegisterDisabled}>Register</button>
              <div className="flexrow">
                <small>Already have an account?<span onClick={() => setHasAccount(!hasAccount)} style={{ cursor: 'pointer' }}> Sign in</span></small>
              </div>
            </div>
          )}
          <div className="flexrow">
            <button className="login-btn gog-btn"><FontAwesomeIcon icon={faGoogle} /></button>
            <button className="login-btn fb-btn"><FontAwesomeIcon icon={faFacebook} /></button>
            <button className="login-btn yah-btn"><FontAwesomeIcon icon={faYahoo} /></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
