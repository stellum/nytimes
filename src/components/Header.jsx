import React from 'react';
import { useNavigate } from 'react-router-dom';
function Header() {
  let navigate = useNavigate();
  return (
    <div>
      <h2>New York Times</h2>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate('/Clip');
        }}
      >
        Clip
      </button>
    </div>
  );
}

export default Header;
