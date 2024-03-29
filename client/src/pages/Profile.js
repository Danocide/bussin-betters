import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USER } from "../utils/queries";

const Profile = () => {
  const { username: userParam } = useParams();
  console.log(userParam);
  const { loading, data, error } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || { description: "" };
  console.log(user);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>Error: {error.message}</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <main className="d-flex flex-column page pricing-table-page">
      <section
        className="d-flex flex-grow-0 flex-shrink-1 clean-block clean-pricing dark"
        style={{ height: "660px" }}
      >
        <div
          className="card d-flex flex-column flex-shrink-1 align-items-center"
          style={{ width: "400px", height: "550px", margin: "30px" }}
        >
          <picture>
            <img
              className="rounded-circle"
              src="assets/img/13nfl-matchups-kc-videoSixteenByNine3000.jpg"
              alt="kc"
              style={{
                width: "200px",
                height: "200px",
                marginTop: "25px",
                marginBottom: "10px",
              }}
            />
          </picture>
          <h1 style={{ fontSize: "30px", marginBottom: "-1px" }}>
            {user.username}
          </h1>
          <p>{user.email}</p>
          <p>Balance: {user.accountBalance}</p>
          <p>{user.description}</p>
          <div className="row">
            <div
              className="col d-flex justify-content-around"
              style={{ paddingTop: "25px", width: "238px", opacity: "0.44" }}
            >
              <a
                className="icon ion-social-facebook-outline"
                style={{ fontSize: "55px" }}
                href="https://www.facebook.com/"
              />
              <a
                className="icon ion-social-instagram-outline"
                style={{ fontSize: "55px" }}
                href="https://www.instagram.com/"
              />
              <a
                className="icon ion-social-twitter-outline"
                style={{ fontSize: "55px" }}
                href="https://www.twitter.com/"
              />
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{ width: "850px", marginTop: "40px" }}
        >
          <h1>Upcoming Bets</h1>
          <div className="card">
            <div className="card-body" style={{ padding: "20px" }}>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                <li style={{ marginBottom: "10px" }}>
                  <strong>Manchester United vs. Chelsea</strong>
                  <br />
                  <span>Bet amount: $50</span>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <strong>NBA Finals: Phoenix Suns vs. Milwaukee Bucks</strong>
                  <br />
                  <span>Bet amount: $100</span>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <strong>
                    Australian Open: Novak Djokovic vs. Rafael Nadal
                  </strong>
                  <br />
                  <span>Bet amount: $75</span>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <strong>
                    MLB World Series: Los Angeles Dodgers vs. New York Yankees
                  </strong>
                  <br />
                  <span>Bet amount: $150</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{ width: "850px", marginTop: "40px" }}
        >
          <h1>Previous Bets</h1>
          <div className="card" style={{ marginRight: "20px" }}>
            <div className="card-body" style={{ padding: "20px" }}>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                <li style={{ marginBottom: "10px" }}>
                  <strong>
                    English Premier League: Liverpool vs. Manchester City
                  </strong>
                  <br />
                  <span>Winner: Liverpool</span>
                  <br />
                  <span>Bet amount: $100</span>
                  <br />
                  <span>Outcome: won</span>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <strong>Wimbledon: Serena Williams vs. Simona Halep</strong>
                  <br />
                  <span>Winner: Serena Williams</span>
                  <br />
                  <span>Bet amount: $50</span>
                  <br />
                  <span>Outcome: lost</span>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <strong>
                    NBA Playoffs: Golden State Warriors vs. Houston Rockets
                  </strong>
                  <br />
                  <span>Winner: Golden State Warriors</span>
                  <br />
                  <span>Bet amount: $75</span>
                  <br />
                  <span>Outcome: won</span>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <strong>
                    NHL Stanley Cup: Boston Bruins vs. St. Louis Blues
                  </strong>
                  <br />
                  <span>Winner: St. Louis Blues</span>
                  <br />
                  <span>Bet amount: $100</span>
                  <br />
                  <span>Outcome: won</span>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <strong>
                    MLB All-Star Game: National League vs. American League
                  </strong>
                  <br />
                  <span>Winner: National League</span>
                  <br />
                  <span>Bet amount: $25</span>
                  <br />
                  <span>Outcome: lost</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="clean-block clean-pricing dark d-flex flex-row"
        style={{ height: "500px" }}
      >
        <div>
          <div
            className="container"
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              marginRight: "125.5px",
            }}
          >
            <h1 style={{ opacity: "0.75" }}>Comments</h1>
            <input
              type="text"
              style={{ width: "1017px", marginRight: "10px", opacity: "0.75" }}
              placeholder="Add a comment..."
            />
            <input className="btn btn-primary" type="submit" />
          </div>
          <div className="container">
            <div className="card">
              <div
                className="card-body d-flex flex-row align-items-center"
                style={{
                  width: "1287px",
                  height: "59.984px",
                  borderRadius: "4px",
                  borderBottom: "2px inset rgb(217,217,217)",
                }}
              >
                <img
                  className="rounded-circle"
                  alt=""
                  width={100}
                  height={80}
                  style={{ width: "40px", height: "40px" }}
                  src="assets/img/avatars/avatar1.jpg"
                />
                <div className="col" style={{ marginBottom: "11px" }}>
                  <p
                    style={{
                      marginLeft: "6px",
                      marginBottom: "10px",
                      width: "130px",
                      fontSize: "14px",
                      opacity: "0.63",
                    }}
                  >
                    Johney321
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      margin: "-18px",
                      marginLeft: "5px",
                      marginTop: "-14px",
                    }}
                  >
                    This is an awesome profile!
                  </p>
                </div>
              </div>
              <div
                className="card-body d-flex flex-row align-items-center"
                style={{
                  width: "1287px",
                  height: "59.984px",
                  borderRadius: "4px",
                  borderBottom: "2px inset rgb(217,217,217)",
                }}
              >
                <img
                  className="rounded-circle"
                  alt=""
                  width={100}
                  height={80}
                  style={{ width: "40px", height: "40px" }}
                  src="assets/img/avatars/avatar2.jpg"
                />
                <div className="col" style={{ marginBottom: "11px" }}>
                  <p
                    style={{
                      marginLeft: "6px",
                      marginBottom: "10px",
                      width: "130px",
                      fontSize: "14px",
                      opacity: "0.63",
                    }}
                  >
                    Joe420
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      margin: "-18px",
                      marginLeft: "5px",
                      marginTop: "-14px",
                    }}
                  >
                    Your profile sucks!
                  </p>
                </div>
              </div>
              <div
                className="card-body d-flex flex-row align-items-center"
                style={{
                  width: "1287px",
                  height: "59.984px",
                  borderRadius: "4px",
                  borderBottom: "2px inset rgb(217,217,217)",
                }}
              >
                <img
                  className="rounded-circle"
                  alt=""
                  width={100}
                  height={80}
                  style={{ width: "40px", height: "40px" }}
                  src="assets/img/scenery/image6.jpg"
                />
                <div className="col" style={{ marginBottom: "11px" }}>
                  <p
                    style={{
                      marginLeft: "6px",
                      marginBottom: "10px",
                      width: "130px",
                      fontSize: "14px",
                      opacity: "0.63",
                    }}
                  >
                    ValorantTop500
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      margin: "-18px",
                      marginLeft: "5px",
                      marginTop: "-14px",
                    }}
                  >
                    Example comment.
                  </p>
                </div>
              </div>
              <div
                className="card-body d-flex flex-row align-items-center"
                style={{
                  width: "1287px",
                  height: "59.984px",
                  borderRadius: "4px",
                  borderBottom: "2px inset rgb(217,217,217)",
                }}
              >
                <img
                  className="rounded-circle"
                  alt=""
                  width={100}
                  height={80}
                  style={{ width: "40px", height: "40px" }}
                  src="assets/img/scenery/image5.jpg"
                />
                <div className="col" style={{ marginBottom: "11px" }}>
                  <p
                    style={{
                      marginLeft: "6px",
                      marginBottom: "10px",
                      width: "130px",
                      fontSize: "14px",
                      opacity: "0.63",
                    }}
                  >
                    MrDude
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      margin: "-18px",
                      marginLeft: "5px",
                      marginTop: "-14px",
                    }}
                  >
                    Example comment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Profile;
