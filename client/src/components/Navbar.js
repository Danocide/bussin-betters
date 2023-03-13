import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar" style={{background: 'var(--bs-accordion-color)', color: 'var(--bs-accordion-active-color)'}}>
      <div className="container">
        <i className="icon ion-ios-americanfootball-outline" style={{paddingRight: '10px', fontSize: '35px'}} />
        <Link className="navbar-brand logo" to="/">Bet Stone</Link>
        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navcol-1" style={{marginLeft: '-1px', marginRight: '0px', paddingRight: '0px'}}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item" style={{marginRight: '-10px'}}>
            <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item" style={{marginRight: '0px', paddingRight: '0px'}}>
              <a className="nav-link" href="pricing.html" style={{paddingRight: '20px'}}>Leaderboards</a>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
            </li>
          </ul>
          <Link to="/login" className="btn btn-primary">Log In</Link>
          <Link to="/signup" className="btn btn-primary" style={{marginLeft: '17px'}}>Join</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;