import React from 'react';
import Hamburger from '../hamburger/Hamburger';
import './Actions.css';

export default function Actions() {
  return (
    <div>
      <div className="actions">
        <div>Log In</div>
        <div>Sign Up</div>
        <div>Profile</div>
      </div>
      <div className="hamburger"><Hamburger /></div>
    </div>
  );
}
