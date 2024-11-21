import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogoutPage.css';

const LogoutPage = ({ handleLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    handleLogout();
    navigate('/login');
  }, [handleLogout, navigate]);

  return (
    <div className="logout-container">
      <h1>Logging out...</h1>
    </div>
  );
};

export default LogoutPage;
