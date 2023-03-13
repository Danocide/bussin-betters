import React from 'react';

export default class App extends React.Component {
    render(){
       return(
        <div>
    <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar" style={{background: 'var(--bs-accordion-color)', color: 'var(--bs-accordion-active-color)'}}>
          <div className="container"><i className="icon ion-ios-americanfootball-outline" style={{paddingRight: '10px', fontSize: '35px'}} /><a className="navbar-brand logo" href="#">Bet Stone</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navcol-1" style={{marginLeft: '-1px', marginRight: '0px', paddingRight: '0px'}}>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item" style={{marginRight: '-10px'}}><a className="nav-link active" href="index.html">Home</a></li>
                <li className="nav-item" style={{marginRight: '0px', paddingRight: '0px'}}><a className="nav-link" href="pricing.html" style={{paddingRight: '20px'}}>Leaderboards</a></li>
                <li className="nav-item"><a className="nav-link" href="about-us.html">Profile</a></li>
              </ul><button className="btn btn-primary" type="button">Log In</button><button className="btn btn-primary" type="button" style={{marginLeft: '17px'}}>Join</button>
            </div>
          </div>
        </nav>
        <main className="page landing-page">
          <section className="clean-block clean-hero" style={{color: 'rgba(28,28,28,0.85)', background: 'url("assets/img/12nfl-sked-spencer-videoSixteenByNine3000.jpg") center / cover, url("assets/img/13nfl-matchups-kc-videoSixteenByNine3000.jpg"), url("assets/img/16407114115545.jpg")', height: '1100px'}}>
            <div className="text">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p><button className="btn btn-outline-light btn-lg" type="button" data-bs-target="SportsNav">BET NOW</button>
            </div>
          </section>
          <section className="clean-block clean-info dark">
            <nav className="navbar navbar-light navbar-expand-md" id="SportsNav" style={{background: 'var(--bs-body-color)'}}>
              <div className="container-fluid"><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse justify-content-center" id="navcol-2" style={{paddingLeft: '0px', marginLeft: '0px', color: 'rgb(255,255,255)'}}>
                  <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link active" href="#" style={{color: 'rgba(255,255,255,0.9)'}}>ALL SPORTS</a></li>
                    <li className="nav-item"><a className="nav-link active" href="#" style={{color: 'rgba(255,255,255,0.9)'}}>NFL</a></li>
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
                    <div className="accordion-body d-flex flex-column">
                      <div className="row" />
                      <div className="row" />
                      <div className="row" />
                      <div className="row" />
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2" aria-expanded="false" aria-controls="accordion-1 .item-2">NBA</button></h2>
                  <div className="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion-1">
                    <div className="accordion-body">
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
                      <div className="row" />
                      <div className="row" />
                      <div className="row" />
                      <div className="row" />
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-4" aria-expanded="false" aria-controls="accordion-1 .item-4">SOCCER</button></h2>
                  <div className="accordion-collapse collapse item-4" role="tabpanel" data-bs-parent="#accordion-1">
                    <div className="accordion-body">
                      <div className="row" />
                      <div className="row" />
                      <div className="row" />
                      <div className="row" />
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
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <div className="icons"><a href="#"><i className="icon-social-facebook" /></a><a href="#"><i className="icon-social-instagram" /></a><a href="#"><i className="icon-social-twitter" /></a></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" src="assets/img/avatars/avatar2.jpg" />
                    <div className="card-body info">
                      <h4 className="card-title">Robert Downturn</h4>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <div className="icons"><a href="#"><i className="icon-social-facebook" /></a><a href="#"><i className="icon-social-instagram" /></a><a href="#"><i className="icon-social-twitter" /></a></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 col-xxl-4">
                  <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" src="assets/img/avatars/avatar3.jpg" />
                    <div className="card-body info">
                      <h4 className="card-title">Ally Sanders</h4>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <div className="icons"><a href="#"><i className="icon-social-facebook" /></a><a href="#"><i className="icon-social-instagram" /></a><a href="#"><i className="icon-social-twitter" /></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="page-footer dark">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <h5>Get started</h5>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Sign up</a></li>
                  <li><a href="#">Downloads</a></li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h5>About us</h5>
                <ul>
                  <li><a href="#">Company Information</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Reviews</a></li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h5>Support</h5>
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Help desk</a></li>
                  <li><a href="#">Forums</a></li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h5>Legal</h5>
                <ul>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <p>© 2023 Copyright Text</p>
          </div>
        </footer>
      </div>
    );
    }
}