import React from "react";
import ModalCreate from "../Modal.js";

function CreateCards(props) {
  return (
    <div className="row">
      {props.results.map((item) => (
      <div key={item.id} className="col-xxl-12" style={{ padding: '0', margin: '0' }}>
      <div className="card d-flex flex-row align-items-center" style={{ height: '57px', width: '100%', background: 'var(--bs-body-color)', borderRadius: '0', border: 'none', margin: '4px', color: 'rgba(255,255,255,0.7)', paddingTop:'15px', display: 'grid', gridTemplateColumns: '1fr auto 1fr auto auto auto auto' }}>
          <p style = {{textAlign: 'center', fontWeight: 'bold', width: '300px'}}>{item.away_team}</p>
          <p style={{textAlign:'center'}}>@</p>
          <p style = {{textAlign: 'center', fontWeight: 'bold', width: '300px', marginRight: '50px'}}>{item.home_team}</p> 
        <div className=" flex-row" style={{ fontSize: '16px', textAlign: 'left'}}>
          <p style= {{width: '200px'}}>Home: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {item.bookmakers[0].markets[0].outcomes[0].price}</p>
        </div>
        <div className="card-body flex-row" style={{ fontSize: '16px', textAlign: 'left' }}>
          <p>Away: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {item.bookmakers[0].markets[0].outcomes[0].price}</p>
        </div>
        <div className="card-body d-flex flex-row" style={{ fontSize: '16px'}}>
          {/* <p>Over:{item.bookmakers[0].markets[1].outcomes[0].point}/ {item.bookmakers[0].markets[1].outcomes[0].price} </p> */}
        </div>
        <div className="card-body d-flex flex-row" style={{ fontSize: '16px'}}>
          {/* <p>Under: {item.bookmakers[0].markets[1].outcomes[1].point}/ {item.bookmakers[0].markets[1].outcomes[1].price}</p> */}
        </div>
        <button className="btn btn-primary" type="button" style={{ height: '45px', padding: '0 20px', fontSize: '16px', marginRight: '6px', marginBottom: '15px', borderRadius: '0' }}>Bet Now!</button>
        <ModalCreate/>
      </div>
    </div>
      ))}
    </div>
  );
  }

export default CreateCards;