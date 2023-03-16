import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    accountBalance: 100,
    description: 'I love my wife!',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { 
          ...formState,
        },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
        <main className="page registration-page" style={{background: 'url("assets/img/16407114115545.jpg") top'}}>
          <section className="clean-block clean-form dark" style={{background: 'rgba(16,16,16,0.83)', height: '1030px'}}>
            <div className="container">
              <div className="block-heading">
                <h2 className="text-info">Registration</h2>
                <p style={{color: 'rgb(255,255,255)'}}>Join today to recieve a bonus deposit of credits to show your friends and family you can make good choices!</p>
              </div>
              <div>
              {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3"><label className="form-label" htmlFor="name">Name</label>
                <input 
                className="form-control item" 
                name="username"
                type="text" 
                id="name" 
                value={formState.name}
                onChange={handleChange}
                />
                </div>
                <div className="mb-3"><label className="form-label" htmlFor="password">Password</label>
                <input 
                className="form-control item" 
                name="password"
                type="password" 
                id="password" 
                value={formState.password}
                onChange={handleChange}
                />
                </div>
                <div className="mb-3"><label className="form-label" htmlFor="email">Email</label>
                <input 
                className="form-control item" 
                name="email"
                type="email" 
                id="email" 
                value={formState.email}
                onChange={handleChange}
                />
                {/* <div className="mb-3"><label className="form-label" htmlFor="accountBalance">Account Balance</label>
                <input 
                className="form-control item" 
                name="accountBalance"
                type="number" 
                id="accountBalance" 
                value={formState.accountBalance}
                onChange={handleChange}
                />
                </div> */}
                </div>
                <button className="btn btn-primary" type="submit">Sign Up</button>
              </form>
              )}

              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
              </div>
            </div>
          </section>
        </main>
  );
};

export default Signup;
