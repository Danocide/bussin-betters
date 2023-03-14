import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
      console.log(data); 
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

      return (
        <div>
          <main
            className="page login-page"
            style={{
              background: 'url("assets/img/16407114115545.jpg") top / auto',
            }}
          >
            <section
              className="clean-block clean-form dark"
              style={{
                color: "rgba(28,28,28,0.85)",
                background: "rgba(17,15,15,0.73)",
                filter: "grayscale(0%)",
                backdropFilter: "grayscale(0%) hue-rotate(0deg)",
                WebkitBackdropFilter: "grayscale(0%) hue-rotate(0deg)",
              }}
            >
              <div className="container">
                <div className="block-heading">
                  <h2 className="text-info">Log In</h2>
                  <p style={{ color: "rgb(255,255,255)" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quam urna, dignissim nec auctor in, mattis vitae leo.
                  </p>
                </div>
                <div>
                  {data ? (
                    <p>
                      Success! You may now head{" "}
                      <Link to="/">back to the homepage.</Link>
                    </p>
                  ) : (
                    <form onSubmit={handleFormSubmit}>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          className="form-control item"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          id="email"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          id="password"
                          name="password"
                          value={formState.password}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="checkbox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <button
                        className="btn btn-primary"
                        style={{ cursor: "pointer" }}
                        type="submit"
                      >
                        Log In
                      </button>
                    </form>
                  )}
                  ;
                  {error && (
                    <div className="my-3 p-3 bg-danger text-white">
                      {error.message}
                    </div>
                  )}
                </div>
              </div>
            </section>
          </main>
        </div>
      );
    };

  export default Login;