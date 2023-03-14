import React from "react";

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function CreateCards(props) {
  return (
    <div className="row">
      {props.results.map((item) => (
        <div className="col-xxl-12" style={{marginLeft: '-10px'}}>
          <div className="card d-flex flex-row align-items-center" style={{height: '57px', width: '1352px'}}>
            <div className="card-body" style={{fontSize: '16px'}}>
              <p>{item.home_team}</p>
            </div>
            <div className="card-body d-flex flex-row" style={{fontSize: '16px', marginLeft: '-84px'}}>
              <p>-</p>
            </div>
            <div className="card-body d-flex flex-row" style={{marginLeft: '-79px'}}>
              <p>{item.away_team}</p>
            </div>
            <div className="card-body d-flex flex-row" style={{marginLeft: '20px'}}>
              <p>BetInfo</p>
            </div>
            <div className="card-body d-flex flex-row">
              <p>BetInfo</p>
            </div>
            <div className="card-body d-flex flex-row">
              <p>BetInfo</p>
            </div>
            <div className="card-body d-flex flex-row" style={{fontSize: '16px'}}>
              <p>23</p>
            </div>
            <div className="card-body d-flex flex-row" style={{fontSize: '16px', marginLeft: '0px'}}>
              <p>-</p>
            </div>
            <div className="card-body d-flex flex-row" style={{fontSize: '16px'}}>
              <p>21</p>
            </div><button className="btn btn-primary" type="button" style={{height: '45px'}}>Bet Now!</button>
          </div>
        </div>
      ))}
    </div>
  );
  }

export default CreateCards;
