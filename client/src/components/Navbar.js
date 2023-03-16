import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGOUT_USER } from '../utils/mutations';
import { useNavigate } from 'react-router-dom';
import { QUERY_ME } from '../utils/queries';

const Navbar = () => {
  const [logout, { error }] = useMutation(LOGOUT_USER, {
    context: {
      headers: {
        authorization: localStorage.getItem('id_token') ? `Bearer ${localStorage.getItem('id_token')}` : '',
      },
    },
    onError: (err) => {
      console.log(err.graphQLErrors[0].message);
    },
    update(cache, { data }) {
      // Clear the user from the cache and return to the home page
      cache.writeQuery({
        query: QUERY_ME,
        data: {
          me: null,
        },
      });
    },
  });
  
  const navigate = useNavigate();
  
  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      await logout();
      localStorage.removeItem('id_token');
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar" style={{background: 'var(--bs-accordion-color)', color: 'var(--bs-accordion-active-color)'}}>
      <div className="container">
        <i className="icon ion-ios-americanfootball-outline" style={{paddingRight: '10px', fontSize: '35px'}} />
        <Link className="navbar-brand logo" to="/">Bhet Stone</Link>
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
              <a className="nav-link" href="#leaderboard" style={{paddingRight: '20px'}}>Leaderboards</a>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
            </li>
          </ul>
          <Link to="/signup" className="btn btn-primary">Join</Link>
          {localStorage.getItem('id_token') ? (
            <button className="btn btn-primary" onClick={handleLogout} style={{marginLeft: '17px'}}>Logout</button>
        ) : (
          <Link to="/login" className="btn btn-primary" style={{marginLeft: '17px'}}>Log In</Link>
        )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;