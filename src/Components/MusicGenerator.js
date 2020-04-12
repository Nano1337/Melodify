import React from "react";
import "./bootstrap.min.css";
import "./mdb.min.css";
import "./style.min.css";
import "./music/1.mp3";
import "./music/2.mp3";
import "./music/3.mp3";
import "./music/4.mp3";
import "./music/5.mp3";
import "./music/6.mp3";
import "./music/7.mp3";
import "./music/8.mp3";
import "./music/9.mp3";

function MusicGenerator(){
    return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>Melödify Web App</title>
          {/* Font Awesome */}
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
          {/* Bootstrap core CSS */}
          <link href="bootstrap.min.css" rel="stylesheet" />
          {/* Material Design Bootstrap */}
          <link href="mdb.min.css" rel="stylesheet" />
          {/* Your custom styles (optional) */}
          <link href="style.min.css" rel="stylesheet" />
          {/*Main Navigation*/}
          <header>
            {/* Navbar */}
            <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
              <div className="container">
                {/* Brand */}
                <a className="navbar-brand waves-effect" href="index.html" target="_blank">
                  <strong className="blue-text">Melödify</strong>
                </a>
                {/* Collapse */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                {/* Links */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  {/* Left */}
                  <ul className="navbar-nav mr-auto">
                    {/*
              <li class="nav-item active">
                <a class="nav-link waves-effect" href="#">Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link waves-effect" href="https://mdbootstrap.com/docs/jquery/" target="_blank">About MDB</a>
              </li>
              <li class="nav-item">
                <a class="nav-link waves-effect" href="https://mdbootstrap.com/docs/jquery/getting-started/download/"
                  target="_blank">Free download</a>
              </li>
              <li class="nav-item">
                <a class="nav-link waves-effect" href="https://mdbootstrap.com/education/bootstrap/" target="_blank">Free
                  tutorials</a>
              </li>
  */}
                  </ul>
                  {/* Right */}
                  
                </div>
              </div>
            </nav>
            {/* Navbar */}
          </header>
          {/*Main Navigation*/}
          {/*Main layout*/}
          <main className="mt-5 pt-5">
            <div className="container">
              {/*Section: Post*/}
              <section className="mt-4">
                {/*Grid row*/}
                <div className="row">
                  {/*Grid column*/}
                  <div className="col-md-8 mb-4">
                    {/*Card*/}
                    <div className="card mb-4 wow fadeIn">
                      {/*Card content*/}
                      <div className="card-body">
                        <p className="h5 my-4">Atmosphere</p>
                        <div className="Slider">
                          {/* PUT SLIDER FOR RAIN HERE */}
                        </div>
                        <div className="Slider">
                          {/* PUT SLIDER FOR THUNDER HERE */}
                        </div>
                        <p className="h5 my-4">Melody</p>
                        <div>
                          <table width="90%">
                            <tbody><tr>
                                <td className="Genre">
                                  {/* PUT BUTTON TO SELECT CELTIC HERE */}
                                </td>
                                <td className="Genre">
                                  {/* PUT BUTTON TO SELECT JAZZ HERE */}
                                </td>
                                <td className="Genre">
                                  {/* PUT BUTTON TO SELECT NATIVE AMERICAN HERE */}
                                </td>
                                <td className="Genre">
                                  {/* PUT BUTTON TO SELECT INDIAN HERE */}
                                </td>
                              </tr>
                            </tbody></table>
                        </div>
                        <div className="track">
                          {/* PUT BUTTON THAT CYCLES THROUGH ONE OF THE THREE TRACKS HERE */}
                        </div>
                      </div>
                    </div>
                    {/*/.Card*/}
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-md-4 mb-4">
                    {/*Card: Jumbotron*/}
                    {/*/.Card : Dynamic content wrapper*/}
                    {/*Card*/}
                    <div className="card mb-4 wow fadeIn">
                        
                      <div className="card-header">Featured Relaxation Tracks</div>
                      <br /><br />
                      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval={500}>
                        <div className="carousel-inner">
                          <div className="carousel-item">
                            <br />
                          </div>
                          <div className="carousel-item">
                            <center>
                              <p>Classical Indian Music</p>
                              <audio controls>
                                <source src="music/4.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                              </audio>
                              <p><br />Earth Drum</p>
                              <audio controls>
                                <source src="music/5.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                              </audio>
                              <p><br />The Winding Path</p>
                              <audio controls>
                                <source src="music/6.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                              </audio>
                            </center>
                            <br />
                          </div>
                          <div className="carousel-item active carousel-item-left">
                            <center>
                              <p>Marconi Union - Weightless</p>
                              <audio controls>
                                <source src="music/7.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                              </audio>
                              <p><br />R. Carlos Nakai - Echoes Of Time</p>
                              <audio controls>
                                <source src="music/8.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                              </audio>
                              <p><br />1 Hour Meditation Candle</p>
                              <audio controls>
                                <source src="music/9.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                              </audio>
                            </center>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>                
                  </div>
                </div>
                {/*/.Card*/}
                {/*Grid column*/}
                {/*Grid row*/}
              </section>
              {/*Section: Post*/}
            </div>
          </main>
          {/*Main layout*/}
          {/*Footer*/}
          <footer className="page-footer text-center font-small mdb-color darken-2 mt-4 wow fadeIn">
            {/*Copyright*/}
            <div className="footer-copyright py-3">
              © Melödify 2020
            </div>
            {/*/.Copyright*/}
          </footer>
          {/*/.Footer*/}
          {/* SCRIPTS */}
          {/* JQuery */}
          {/* Bootstrap tooltips */}
          {/* Bootstrap core JavaScript */}
          {/* MDB core JavaScript */}
          {/* Initializations */}
        </div>
      );
}

export default MusicGenerator;