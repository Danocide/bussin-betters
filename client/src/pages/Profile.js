import React from 'react';
// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import { QUERY_ME } from '../utils/queries';

// import Auth from '../utils/auth';

const Profile = () => {
  // const { username: userParam } = useParams();

  // // // Determine which query to use based on whether a userParam is provided
  // // const query = userParam ? QUERY_USER : QUERY_ME;

  // // // Include variables option only if query expects a variable
  // // const options = userParam ? { variables: { username: userParam } } : {};

  // const { loading, data } = useQuery(QUERY_ME, {
  //   variables: { username: userParam },
  //   onError: (error) => console.log(error),
  // });

  // const user = data?.me || {};
  // // navigate to personal profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Navigate to="/me" />;
  // }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this. Use the navigation links above to
  //       sign up or log in!
  //     </h4>
  //   );
  // }
  // console.log(user);

          return (
      
            <main className="d-flex flex-column page pricing-table-page">
              <section className="d-flex flex-grow-0 flex-shrink-1 clean-block clean-pricing dark" style={{height: '660px'}}>
                <div className="card d-flex flex-column flex-shrink-1 align-items-center" style={{width: '400px', height: '550px', margin: '30px'}}>
                  <picture><img className="rounded-circle" src="assets/img/13nfl-matchups-kc-videoSixteenByNine3000.jpg" alt='kc' style={{width: '200px', height: '200px', marginTop: '25px', marginBottom: '10px'}} /></picture>
                  <h1 style={{fontSize: '30px', marginBottom: '-1px'}}>Username</h1>
                  <p>John Doe</p>
                  <p className="text-center">This is an example of the "about me" section for the user.</p>
                  <div className="row">
                    <div className="col d-flex justify-content-around" style={{paddingTop: '65px', width: '238px', opacity: '0.44'}}><i className="icon ion-social-facebook-outline" style={{fontSize: '55px'}} /><i className="icon ion-social-instagram-outline" style={{fontSize: '55px'}} /><i className="icon ion-social-twitter-outline" style={{fontSize: '55px'}} /></div>
                  </div>
                </div>
                <div className="container" style={{width: '850px', marginTop: '40px'}}>
                  <h1>Upcoming Bets</h1>
                  <div className="card">
                    <div className="card-body" style={{height: '550px'}} />
                  </div>
                </div>
                <div className="container" style={{width: '850px', marginTop: '40px'}}>
                  <h1>Previous Bets</h1>
                  <div className="card" style={{marginRight: '20px'}}>
                    <div className="card-body" style={{height: '550px'}} />
                  </div>
                </div>
              </section>
              <section className="clean-block clean-pricing dark d-flex flex-row" style={{height: '500px'}}>
                <div>
                  <div className="container" style={{marginTop: '10px', marginBottom: '10px', marginRight: '125.5px'}}>
                    <h1 style={{opacity: '0.75'}}>Comments</h1><input type="text" style={{width: '1017px', marginRight: '10px', opacity: '0.75'}} placeholder="Add a comment..." /><input className="btn btn-primary" type="submit" />
                  </div>
                  <div className="container">
                    <div className="card">
                      <div className="card-body d-flex flex-row align-items-center" style={{width: '1287px', height: '59.984px', borderRadius: '4px', borderBottom: '2px inset rgb(217,217,217)'}}><img className="rounded-circle" alt='' width={100} height={80} style={{width: '40px', height: '40px'}} src="assets/img/avatars/avatar1.jpg" />
                        <div className="col" style={{marginBottom: '11px'}}>
                          <p style={{marginLeft: '6px', marginBottom: '10px', width: '130px', fontSize: '14px', opacity: '0.63'}}>Johney321</p>
                          <p style={{fontSize: '14px', margin: '-18px', marginLeft: '5px', marginTop: '-14px'}}>This is an awesome profile!</p>
                        </div>
                      </div>
                      <div className="card-body d-flex flex-row align-items-center" style={{width: '1287px', height: '59.984px', borderRadius: '4px', borderBottom: '2px inset rgb(217,217,217)'}}><img className="rounded-circle" alt= '' width={100} height={80} style={{width: '40px', height: '40px'}} src="assets/img/avatars/avatar2.jpg" />
                        <div className="col" style={{marginBottom: '11px'}}>
                          <p style={{marginLeft: '6px', marginBottom: '10px', width: '130px', fontSize: '14px', opacity: '0.63'}}>Joe420</p>
                          <p style={{fontSize: '14px', margin: '-18px', marginLeft: '5px', marginTop: '-14px'}}>Your profile sucks!</p>
                        </div>
                      </div>
                      <div className="card-body d-flex flex-row align-items-center" style={{width: '1287px', height: '59.984px', borderRadius: '4px', borderBottom: '2px inset rgb(217,217,217)'}}><img className="rounded-circle" alt='' width={100} height={80} style={{width: '40px', height: '40px'}} src="assets/img/scenery/image6.jpg" />
                        <div className="col" style={{marginBottom: '11px'}}>
                          <p style={{marginLeft: '6px', marginBottom: '10px', width: '130px', fontSize: '14px', opacity: '0.63'}}>ValorantTop500</p>
                          <p style={{fontSize: '14px', margin: '-18px', marginLeft: '5px', marginTop: '-14px'}}>Example comment.</p>
                        </div>
                      </div>
                      <div className="card-body d-flex flex-row align-items-center" style={{width: '1287px', height: '59.984px', borderRadius: '4px', borderBottom: '2px inset rgb(217,217,217)'}}><img className="rounded-circle" alt='' width={100} height={80} style={{width: '40px', height: '40px'}} src="assets/img/scenery/image5.jpg" />
                        <div className="col" style={{marginBottom: '11px'}}>
                          <p style={{marginLeft: '6px', marginBottom: '10px', width: '130px', fontSize: '14px', opacity: '0.63'}}>MrDude</p>
                          <p style={{fontSize: '14px', margin: '-18px', marginLeft: '5px', marginTop: '-14px'}}>Example comment.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          );
        }
export default Profile;