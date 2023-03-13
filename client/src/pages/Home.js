import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

return (
    <body>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar" style="background: var(--bs-accordion-color);color: var(--bs-accordion-active-color);">
        <div class="container"><i class="icon ion-ios-americanfootball-outline" style="padding-right: 10px;font-size: 35px;"></i><a class="navbar-brand logo" href="#">Bet Stone</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1" style="margin-left: -1px;margin-right: 0px;padding-right: 0px;">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item" style="margin-right: -10px;"><a class="nav-link active" href="index.html">Home</a></li>
                    <li class="nav-item" style="margin-right: 0px;padding-right: 0px;"><a class="nav-link" href="pricing.html" style="padding-right: 20px;">Leaderboards</a></li>
                    <li class="nav-item"><a class="nav-link" href="about-us.html">Profile</a></li>
                </ul><button class="btn btn-primary" type="button">Log In</button><button class="btn btn-primary" type="button" style="margin-left: 17px;">Join</button>
            </div>
        </div>
    </nav>
    <main class="page landing-page">
        <section class="clean-block clean-hero" style="color: rgba(28,28,28,0.85);background: url(&quot;assets/img/12nfl-sked-spencer-videoSixteenByNine3000.jpg&quot;) center / cover, url(&quot;assets/img/13nfl-matchups-kc-videoSixteenByNine3000.jpg&quot;), url(&quot;assets/img/16407114115545.jpg&quot;);height: 1100px;">
            <div class="text">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p><button class="btn btn-outline-light btn-lg" type="button" data-bs-target="SportsNav">BET NOW</button>
            </div>
        </section>
        <section class="clean-block clean-info dark">
            <nav class="navbar navbar-light navbar-expand-md" id="SportsNav" style="background: var(--bs-body-color);">
                <div class="container-fluid"><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-2"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse justify-content-center" id="navcol-2" style="padding-left: 0px;margin-left: 0px;color: rgb(255,255,255);">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link active" href="#" style="color: rgba(255,255,255,0.9);">ALL SPORTS</a></li>
                            <li class="nav-item"><a class="nav-link active" href="#" style="color: rgba(255,255,255,0.9);">NFL</a></li>
                            <li class="nav-item"><a class="nav-link" href="#" style="color: rgba(255,255,255,0.55);">NBA</a></li>
                            <li class="nav-item"><a class="nav-link" href="#" style="color: rgba(255,255,255,0.55);">MLB</a></li>
                            <li class="nav-item"><a class="nav-link" href="#" style="color: rgba(255,255,255,0.55);">SOCCER</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="col">
                <div class="accordion" role="tablist" id="accordion-1">
                    <div class="accordion-item">
                        <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="false" aria-controls="accordion-1 .item-1">NFL</button></h2>
                        <div class="accordion-collapse collapse item-1" role="tabpanel" data-bs-parent="#accordion-1" style="transform: perspective(0px);">
                            <div class="accordion-body d-flex flex-column">
                                <div class="row"></div>
                                <div class="row"></div>
                                <div class="row"></div>
                                <div class="row"></div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2" aria-expanded="false" aria-controls="accordion-1 .item-2">NBA</button></h2>
                        <div class="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion-1">
                            <div class="accordion-body">
                                <div class="row"></div>
                                <div class="row"></div>
                                <div class="row"></div>
                                <div class="row"></div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-3" aria-expanded="false" aria-controls="accordion-1 .item-3">MLB</button></h2>
                        <div class="accordion-collapse collapse item-3" role="tabpanel" data-bs-parent="#accordion-1">
                            <div class="accordion-body">
                                <div class="row"></div>
                                <div class="row"></div>
                                <div class="row"></div>
                                <div class="row"></div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-4" aria-expanded="false" aria-controls="accordion-1 .item-4">SOCCER</button></h2>
                        <div class="accordion-collapse collapse item-4" role="tabpanel" data-bs-parent="#accordion-1">
                            <div class="accordion-body">
                                <div class="row"></div>
                                <div class="row"></div>
                                <div class="row"></div>
                                <div class="row"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="clean-block about-us">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-6 col-lg-4">
                        <div class="card text-center clean-card"><img class="card-img-top w-100 d-block" src="assets/img/avatars/avatar1.jpg">
                            <div class="card-body info">
                                <h4 class="card-title">John Smith</h4>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div class="icons"><a href="#"><i class="icon-social-facebook"></i></a><a href="#"><i class="icon-social-instagram"></i></a><a href="#"><i class="icon-social-twitter"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="card text-center clean-card"><img class="card-img-top w-100 d-block" src="assets/img/avatars/avatar2.jpg">
                            <div class="card-body info">
                                <h4 class="card-title">Robert Downturn</h4>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div class="icons"><a href="#"><i class="icon-social-facebook"></i></a><a href="#"><i class="icon-social-instagram"></i></a><a href="#"><i class="icon-social-twitter"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4 col-xxl-4">
                        <div class="card text-center clean-card"><img class="card-img-top w-100 d-block" src="assets/img/avatars/avatar3.jpg">
                            <div class="card-body info">
                                <h4 class="card-title">Ally Sanders</h4>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div class="icons"><a href="#"><i class="icon-social-facebook"></i></a><a href="#"><i class="icon-social-instagram"></i></a><a href="#"><i class="icon-social-twitter"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer class="page-footer dark">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <h5>Get started</h5>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sign up</a></li>
                        <li><a href="#">Downloads</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="#">Company Information</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help desk</a></li>
                        <li><a href="#">Forums</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>Legal</h5>
                    <ul>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <p>© 2023 Copyright Text</p>
        </div>
    </footer>
    </body>
    );
}; 

export default Home;