import React from 'react';
import GetMLBOdds from '../components/SportsOdds/MLBOdds';
import GetNBAOdds from '../components/SportsOdds/NBAOdds';
import GetXFLOdds from '../components/SportsOdds/XFLOdds';
import GetMLSOdds from '../components/SportsOdds/MLSOdds';



export default class App extends React.Component {
    render(){
       return(
        <div>
        <main className="page landing-page">
          <section className="clean-block clean-hero" style={{color: 'rgba(28,28,28,0.85)', background: 'url("assets/img/12nfl-sked-spencer-videoSixteenByNine3000.jpg") center / cover, url("assets/img/13nfl-matchups-kc-videoSixteenByNine3000.jpg"), url("assets/img/16407114115545.jpg")', height: '1100px'}}>
            <div className="text">
              <h2>Welcome to Bhet Stone</h2>
              <p>This is your wife's favorite sports betting website. No credit cards. Just bragging rights</p><button className="btn btn-outline-light btn-lg" type="button" data-bs-target="SportsNav">BET NOW</button>
            </div>
          </section>
          <section className="clean-block clean-info dark">
            <nav className="navbar navbar-light navbar-expand-md" id="SportsNav" style={{background: 'var(--bs-body-color)'}}>
              <div className="container-fluid"><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse justify-content-center" id="navcol-2" style={{paddingLeft: '0px', marginLeft: '0px', color: 'rgb(255,255,255)'}}>
                  <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link active" href="#" style={{color: 'rgba(255,255,255,0.55)'}}>ALL SPORTS</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" style={{color: 'rgba(255,255,255,0.55)'}}>XFL</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" style={{color: 'rgba(255,255,255,0.55)'}}>NBA</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" style={{color: 'rgba(255,255,255,0.55)'}}>MLB</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" style={{color: 'rgba(255,255,255,0.55)'}}>SOCCER</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="col">
              <div className="accordion" role="tablist" id="accordion-1">
                <div className="accordion-item">
                  <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="false" aria-controls="accordion-1 .item-1">NFL</button></h2>
                  <div className="accordion-collapse collapse item-1" role="tabpanel" data-bs-parent="#accordion-1" style={{transform: 'perspective(0px)'}}>
                    <div className="accordion-body d-flex flex-column" >
                      {/* <GetXFLOdds/> */}
                      <div className="row"> 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2" aria-expanded="false" aria-controls="accordion-1 .item-2">NBA</button></h2>
                  <div className="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion-1">
                    <div className="accordion-body">
                      <GetNBAOdds/>
                      <div className="row" />
                      <div className="row" />
                      <div className="row" />
                      <div className="row" />
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-3" aria-expanded="false" aria-controls="accordion-1 .item-3">MLB</button></h2>
                  <div className="accordion-collapse collapse item-3" role="tabpanel" data-bs-parent="#accordion-1">
                    <div className="accordion-body">
                      {/* <GetMLBOdds/> */}
                      <div className="row" />
                      <div className="row" />
                      <div className="row" />
                      <div className="row" />
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-4" aria-expanded="false" aria-controls="accordion-1 .item-4">MLS</button></h2>
                  <div className="accordion-collapse collapse item-4" role="tabpanel" data-bs-parent="#accordion-1">
                    <div className="accordion-body">
                      {/* <GetMLSOdds/> */}
                      </div> 
                      <div className="row" />
                      <div className="row" />
                      <div className="row" />
                      <div className="row" />
                    </div>
                  </div>
                </div>
              </div>
        <div>
        <h1 style={{textAlign: 'center', marginTop: '25px'}}>Leaderboards</h1>
        <div className="container" style={{marginTop: '25px', background: 'var(--bs-body-color)', borderRadius: '11px', border: '25px solid var(--bs-body-color)', borderTopStyle: 'solid', borderRight: '15px solid var(--bs-body-color)', borderBottomStyle: 'solid', borderLeft: '15px solid var(--bs-body-color)'}}>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body" style={{height: '550px'}}>
                  <h4 className="card-title" style={{textAlign: 'center'}}>Weekly</h4>
                  <div className="row d-flex flex-column" style={{marginBottom: '9px', borderRadius: '5px', borderBottom: '3px solid rgb(130,130,130)'}}>
                    <button className="col d-flex flex-row align-items-center align-content-center align-self-center" href="#" style={{marginBottom: '0px', border: 'none'}}>
                      <picture><img className="rounded-circle" src="assets/img/scenery/image6.jpg" style={{width: '65px', height: '65px'}} /></picture>
                      <div style={{marginLeft: '10px'}}>
                        <p style={{marginBottom: '0px', fontSize: '20px'}}>Username</p>
                        <p className="fw-bold" style={{marginBottom: '0px', marginRight: '0px', fontSize: '10px', marginLeft: '2px'}}>324.32</p>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="d-flex flex-column align-items-center" style={{width: '165px', marginLeft: '35px', marginTop: '25px'}}>
                          <p className="fw-semibold" style={{marginBottom: '0px', color: 'var(--bs-gray-600)', fontSize: '12px'}}>Wins:</p>
                          <p>36</p>
                        </div>
                        <div className="d-flex flex-column align-items-center" style={{width: '165px', marginLeft: '30px', marginTop: '25px'}}>
                          <p className="fw-semibold" style={{marginBottom: '0px', fontSize: '12px', color: 'var(--bs-gray-600)'}}>Losses:</p>
                          <p>21</p>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="row d-flex flex-column" style={{marginBottom: '9px', borderRadius: '5px', borderBottom: '3px solid rgb(130,130,130)'}}>
                    <button className="col d-flex flex-row align-items-center align-content-center align-self-center" href="#" style={{marginBottom: '0px', border: 'none'}}>
                      <picture><img className="rounded-circle" src="assets/img/scenery/image6.jpg" style={{width: '65px', height: '65px'}} /></picture>
                      <div style={{marginLeft: '10px'}}>
                        <p style={{marginBottom: '0px', fontSize: '20px'}}>Username</p>
                        <p className="fw-bold" style={{marginBottom: '0px', marginRight: '0px', fontSize: '10px', marginLeft: '2px'}}>324.32</p>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="d-flex flex-column align-items-center" style={{width: '165px', marginLeft: '35px', marginTop: '25px'}}>
                          <p className="fw-semibold" style={{marginBottom: '0px', color: 'var(--bs-gray-600)', fontSize: '12px'}}>Wins:</p>
                          <p>36</p>
                        </div>
                        <div className="d-flex flex-column align-items-center" style={{width: '165px', marginLeft: '30px', marginTop: '25px'}}>
                          <p className="fw-semibold" style={{marginBottom: '0px', fontSize: '12px', color: 'var(--bs-gray-600)'}}>Losses:</p>
                          <p>21</p>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="row d-flex flex-column" style={{marginBottom: '9px', borderRadius: '5px', borderBottom: '3px solid rgb(130,130,130)'}}>
                    <button className="col d-flex flex-row align-items-center align-content-center align-self-center" href="#" style={{marginBottom: '0px', border: 'none'}}>
                      <picture><img className="rounded-circle" src="assets/img/scenery/image6.jpg" style={{width: '65px', height: '65px'}} /></picture>
                      <div style={{marginLeft: '10px'}}>
                        <p style={{marginBottom: '0px', fontSize: '20px'}}>Username</p>
                        <p className="fw-bold" style={{marginBottom: '0px', marginRight: '0px', fontSize: '10px', marginLeft: '2px'}}>324.32</p>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="d-flex flex-column align-items-center" style={{width: '165px', marginLeft: '35px', marginTop: '25px'}}>
                          <p className="fw-semibold" style={{marginBottom: '0px', color: 'var(--bs-gray-600)', fontSize: '12px'}}>Wins:</p>
                          <p>36</p>
                        </div>
                        <div className="d-flex flex-column align-items-center" style={{width: '165px', marginLeft: '30px', marginTop: '25px'}}>
                          <p className="fw-semibold" style={{marginBottom: '0px', fontSize: '12px', color: 'var(--bs-gray-600)'}}>Losses:</p>
                          <p>21</p>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="row d-flex flex-column" style={{marginBottom: '9px', borderRadius: '5px', borderBottom: '3px solid rgb(130,130,130)'}}>
                    <div className="col d-flex flex-row align-items-center align-content-center align-self-center" style={{marginBottom: '0px'}}>
                      <picture><img className="rounded-circle" src="assets/img/scenery/image6.jpg" style={{width: '65px', height: '65px'}} /></picture>
                      <div style={{marginLeft: '10px'}}>
                        <p style={{marginBottom: '0px', fontSize: '20px'}}>Username</p>
                        <p className="fw-bold" style={{marginBottom: '0px', marginRight: '0px', fontSize: '10px', marginLeft: '2px'}}>324.32</p>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="d-flex flex-column align-items-center" style={{width: '165px', marginLeft: '35px', marginTop: '25px'}}>
                          <p className="fw-semibold" style={{marginBottom: '0px', color: 'var(--bs-gray-600)', fontSize: '12px'}}>Wins:</p>
                          <p>36</p>
                        </div>
                        <div className="d-flex flex-column align-items-center" style={{width: '165px', marginLeft: '30px', marginTop: '25px'}}>
                          <p className="fw-semibold" style={{marginBottom: '0px', fontSize: '12px', color: 'var(--bs-gray-600)'}}>Losses:</p>
                          <p>21</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex flex-column" style={{marginBottom: '9px', borderRadius: '5px', borderBottom: '3px solid rgb(130,130,130)'}}>
                    <div className="col d-flex flex-row align-items-center align-content-center align-self-center" style={{marginBottom: '0px'}}>
                      <picture><img className="rounded-circle" src="assets/img/scenery/image6.jpg" style={{width: '65px', height: '65px'}} /></picture>
                      <div style={{marginLeft: '10px'}}>
                        <p style={{marginBottom: '0px', fontSize: '20px'}}>Username</p>
                        <p className="fw-bold" style={{marginBottom: '0px', marginRight: '0px', fontSize: '10px', marginLeft: '2px'}}>324.32</p>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="d-flex flex-column align-items-center" style={{width: '165px', marginLeft: '35px', marginTop: '25px'}}>
                          <p className="fw-semibold" style={{marginBottom: '0px', color: 'var(--bs-gray-600)', fontSize: '12px'}}>Wins:</p>
                          <p>36</p>
                        </div>
                        <div className="d-flex flex-column align-items-center" style={{width: '165px', marginLeft: '30px', marginTop: '25px'}}>
                          <p className="fw-semibold" style={{marginBottom: '0px', fontSize: '12px', color: 'var(--bs-gray-600)'}}>Losses:</p>
                          <p>21</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body" style={{height: '550px'}}>
                  <h4 className="card-title" style={{textAlign: 'center'}}>Monthly</h4>
                  <div className="row d-flex flex-column" style={{marginBottom: '9px', borderRadius: '5px', borderBottom: '3px solid rgb(130,130,130)'}}>
                    <div className="col d-flex flex-row align-items-center align-content-center align-self-center" style={{marginBottom: '0px'}}>
                      <picture><img className="rounded-circle" src="assets/img/scenery/image6.jpg" style={{width: '65px', height: '65px'}} /></picture>
                      <div style={{marginLeft: '10px'}}>
                        <p style={{marginBottom: '0px', fontSize: '20px'}}>Username</p>
                        <p className="fw-bold" style={{marginBottom: '0px', marginRight: '0px', fontSize: '10px', marginLeft: '2px'}}>324.32</p>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="d-flex flex-column align-items-center" style={{width: '165px', marginLeft: '35px', marginTop: '25px'}}>
                          <p className="fw-semibold" style={{marginBottom: '0px', color: 'var(--bs-gray-600)', fontSize: '12px'}}>Wins:</p>
                          <p>36</p>
                        </div>
                        <div className="d-flex flex-column align-items-center" style={{width: '165px', marginLeft: '30px', marginTop: '25px'}}>
                          <p className="fw-semibold" style={{marginBottom: '0px', fontSize: '12px', color: 'var(--bs-gray-600)'}}>Losses:</p>
                          <p>21</p>
                        </div>
                      </div>
                    </div>
                    <div className="col d-flex flex-row align-items-center align-content-center align-self-center" style={{marginBottom: '0px'}}>
                      <picture><img className="rounded-circle" src="assets/img/scenery/image6.jpg" style={{width: '65px', height: '65px'}} /></picture>
                      <div style={{marginLeft: '10px'}}>
                        <p style={{marginBottom: '0px', fontSize: '20px'}}>Username</p>
                        <p className="fw-bold" style={{marginBottom: '0px', marginRight: '0px', fontSize: '10px', marginLeft: '2px'}}>324.32</p>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="d-flex flex-column align-items-center" style={{width: '165px', marginLeft: '35px', marginTop: '25px'}}>
                          <p className="fw-semibold" style={{marginBottom: '0px', color: 'var(--bs-gray-600)', fontSize: '12px'}}>Wins:</p>
                          <p>36</p>
                        </div>
                        <div className="d-flex flex-column align-items-center" style={{width: '165px', marginLeft: '30px', marginTop: '25px'}}>
                          <p className="fw-semibold" style={{marginBottom: '0px', fontSize: '12px', color: 'var(--bs-gray-600)'}}>Losses:</p>
                          <p>21</p>
                        </div>
                      </div>
                    </div>
                    <div className="col d-flex flex-row align-items-center align-content-center align-self-center" style={{marginBottom: '0px'}}>
                      <picture><img className="rounded-circle" src="assets/img/scenery/image6.jpg" style={{width: '65px', height: '65px'}} /></picture>
                      <div style={{marginLeft: '10px'}}>
                        <p style={{marginBottom: '0px', fontSize: '20px'}}>Username</p>
                        <p className="fw-bold" style={{marginBottom: '0px', marginRight: '0px', fontSize: '10px', marginLeft: '2px'}}>324.32</p>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="d-flex flex-column align-items-center" style={{width: '165px', marginLeft: '35px', marginTop: '25px'}}>
                          <p className="fw-semibold" style={{marginBottom: '0px', color: 'var(--bs-gray-600)', fontSize: '12px'}}>Wins:</p>
                          <p>36</p>
                        </div>
                        <div className="d-flex flex-column align-items-center" style={{width: '165px', marginLeft: '30px', marginTop: '25px'}}>
                          <p className="fw-semibold" style={{marginBottom: '0px', fontSize: '12px', color: 'var(--bs-gray-600)'}}>Losses:</p>
                          <p>21</p>
                        </div>
                      </div>
                    </div>
                    <div className="col d-flex flex-row align-items-center align-content-center align-self-center" style={{marginBottom: '0px'}}>
                      <picture><img className="rounded-circle" src="assets/img/scenery/image6.jpg" style={{width: '65px', height: '65px'}} /></picture>
                      <div style={{marginLeft: '10px'}}>
                        <p style={{marginBottom: '0px', fontSize: '20px'}}>Username</p>
                        <p className="fw-bold" style={{marginBottom: '0px', marginRight: '0px', fontSize: '10px', marginLeft: '2px'}}>324.32</p>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="d-flex flex-column align-items-center" style={{width: '165px', marginLeft: '35px', marginTop: '25px'}}>
                          <p className="fw-semibold" style={{marginBottom: '0px', color: 'var(--bs-gray-600)', fontSize: '12px'}}>Wins:</p>
                          <p>36</p>
                        </div>
                        <div className="d-flex flex-column align-items-center" style={{width: '165px', marginLeft: '30px', marginTop: '25px'}}>
                          <p className="fw-semibold" style={{marginBottom: '0px', fontSize: '12px', color: 'var(--bs-gray-600)'}}>Losses:</p>
                          <p>21</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </section>
          <section className="clean-block about-us">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-6 col-lg-4">
                  <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" src="assets/img/avatars/avatar1.jpg" />
                    <div className="card-body info">
                      <h4 className="card-title">John Smith</h4>
                      <p className="card-text">My wife wanted to leave me because of all the money I had been losing to my friends with traditional betting sites I even used up all my daughters college tuition! Thanks to Bhet Stone, now I get partial custody on weekends!</p>
                      <div className="icons"><a href="#"><i className="icon-social-facebook" /></a><a href="#"><i className="icon-social-instagram" /></a><a href="#"><i className="icon-social-twitter" /></a></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" src="assets/img/avatars/avatar2.jpg" />
                    <div className="card-body info">
                      <h4 className="card-title">Robert Downturn</h4>
                      <p className="card-text">After I lost my job due to a Corona problem I needed money, bad! After I found Bhet Stone I was so relieved that I could enjoy both my addictiona at the same time! Now to grab another corona!</p>
                      <div className="icons"><a href="#"><i className="icon-social-facebook" /></a><a href="#"><i className="icon-social-instagram" /></a><a href="#"><i className="icon-social-twitter" /></a></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 col-xxl-4">
                  <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" src="assets/img/avatars/avatar3.jpg" />
                    <div className="card-body info">
                      <h4 className="card-title">Ally Sanders</h4>
                      <p className="card-text">I let my husband use this site so he doesn't lose our house again. I'm asking for a divorce next time.</p>
                      <div className="icons"><a href="#"><i className="icon-social-facebook" /></a><a href="#"><i className="icon-social-instagram" /></a><a href="#"><i className="icon-social-twitter" /></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
    }
}