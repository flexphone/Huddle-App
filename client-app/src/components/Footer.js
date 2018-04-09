import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <Navbar default fixedBottom>


        <Nav>
          {/* <!--Footer--> */}
          <footer className="page-footer font-small indigo pt-5">
            {/* <!--Footer Links--> */}
            <div className="container">
              {/* <!--First row--> */}
              <div className="row">
                {/* <!--First column--> */}
                <div className="col-md-12 py-5">
                  <div className="mb-5 flex-center">
                    <div className="col-md-2 col-xs-4">
                      <ul>
                        <div>
                          <b>
                            <i class="fa fa-headphones" />
                            SUPPORT
                          </b>
                        </div>
                        <div>
                          <a href="/helpdesk">Helpdesk</a>
                        </div>
                      </ul>
                    </div>
                    <div class="col=md-2 col-xs-4">
                      <ul>
                        <div>
                          <b>
                            <i class="fas fa-exclamation" />
                            ABOUT
                          </b>
                        </div>
                        <div>
                          <a href="/components/Home/index">Huddle Home</a>
                        </div>
                        <div>
                          <a href="/About">About us</a>
                        </div>
                        <div>
                          <a href="/Careers">Careers</a>
                        </div>
                        <div>
                          <a href="/Testimonials">Testimonials</a>
                        </div>
                      </ul>
                    </div>
                    <div className="col-md-3 col-md-offset-1 border-left col-xs-12">
                      <ul>
                        <b>
                          <div class="margin-left-large">WOZ U</div>
                        </b>
                        <small>
                          8444 N 90th St
                          <br />
                          Scottsdale, AZ
                        </small>
                        <div>
                          <span class="margin-topsmall block">
                            <i class="fas fa-phone-square" />
                            &nbsp;602-555-7070
                          </span>
                        </div>
                      </ul>
                    </div>

                    <div class="col-md-3 col-md-offset-3">


                      <div class="col-md-1">
                        <a href="https://facebook.com"><i class="fab fa-facebook-square fa-2x"></i></a>
                      </div>

                      <div class="col-md-1">
                        <a href="https://github.com/Jeremy117/Huddle-App"><i class="fab fa-github fa-2x"></i></a>
                      </div>

                      <div class="col-md-1">
                        <a href="https://www.linkedin.com"><i class="fab fa-linkedin fa-2x"></i></a>
                      </div>

                      <div class="col-md-1">
                        <a href="https://www.google.com/"><i class="fab fa-google fa-2x"></i></a>
                      </div>


                    </div>
                  </div>
                </div>
                {/* <!--/First column--> */}
              </div>
              {/* <!--/First row--> */}
            </div>
            {/* <!--/Footer Links--> */}

            {/* <!--Copyright--> */}
            <div class="footer-copyright py-3 text-center">
              © 2018 Copyright:
              <a href="https://github.com/Jeremy117/Huddle-App">
                {" "}
                Team Huddle{" "}
              </a>
            </div>
            {/* <!--/Copyright--> */}
          </footer>
          {/* <!--/Footer--> */}
        </Nav>
      </Navbar>
    );
  }
}
