import React from "react";

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function CreateCards(props) {
  return (
    <div className="row">
      {props.results.map((item) => (
        <div key={item.id} className="col text-center align-self-center">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4 text-center">
                  <h3 style={{ marginTop: "14px" }}>{item.away_team}</h3>
                  <p style={{ marginTop: "42px" }}>-</p>
                </div>
                <div className="col-lg-4" />
                <div className="col-lg-4 text-center">
                  <h3 style={{ marginTop: "14px" }}>{item.home_team}</h3>
                  <p style={{ marginTop: "42px" }}>-</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  }

export default CreateCards;
