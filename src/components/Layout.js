import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import M from "materialize-css"
import "materialize-css/dist/css/materialize.min.css"
import MenuIcon from "@material-ui/icons/Menu"
import Logo from "../images/good-times.svg"
import { SocialIcon } from "react-social-icons"

import "../styles/style.css"

export default function Layout({ children }) {
  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('.sidenav'))
    
  }, [])
  return (
    <>
      <Helmet>
        <link
          to="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          to="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />

        <link
          rel="stylesheet"
          to="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js"></script>
      </Helmet>
      <header>
        <nav className="white" role="navigation">
          <div className="nav-wrapper container">
            <Link id="logo-container" to="/" className="brand-logo">
              <img
                id="logo-image"
                src={Logo}
                alt="the good times logo"
                width="180"
                height="160"
              />
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/" className="black-text">
                  Home
                </Link>
              </li>
              <li>
                <AnchorLink to="/#packages" className="black-text">
                  Packages
                </AnchorLink>
              </li>
              <li>
                <Link to="/about" className="black-text">
                  Contacts
                </Link>
              </li>
              <li>
                <Link to="/about" className="black-text">
                  About
                </Link>
              </li>
            </ul>

            <ul id="nav-mobile" className="sidenav">
              <li>
                <Link to="/" className="brown-text text-darken-2">Home</Link>
              </li>
              <li>
                <AnchorLink to="/#packages" className="brown-text text-darken-2">Packages</AnchorLink>
              </li>
              <li>
                <Link to="/about" className="brown-text text-darken-2">Contacts</Link>
              </li>
              <li>
                <Link to="/about" className="brown-text text-darken-2">About</Link>
              </li>
            </ul>
            <Link to="/" data-target="nav-mobile" className="sidenav-trigger">
                <MenuIcon style={{color: "#5d4037"}}/>
            </Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="page-footer brown darken-2" data-sal="slide-up" data-sal-easing="ease">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="row">
                <div className="col s12 m12 l6">
                  <h5 className="white-text center">The Good Times</h5>
                </div>
                <div className="col s12 m12 l6">
                    <h5 className="white-text center">
                      <i>Where World Meets Wild</i>
                    </h5>
               </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <p className="grey-text text-lighten-4 center">
                    What makes the wild a friendly place depends on whom you
                    travel with. In the company of the right tour operator, the
                    wild is simply never a scary place. It's a place of
                    interacting with nature.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <h5 className="white-text center">Socials</h5>
              <div className="social-wrapper">
                <ul className="social-icons icon-circle list-unstyled list-inline">
                  <li>
                    {" "}
                    
                      <SocialIcon network="facebook" fgColor="white"/>
                    
                  </li>
                  <li>
                    {" "}
                    
                      <SocialIcon network="twitter" fgColor="white"/>
                    
                  </li>
                  <li>
                    {" "}
                    
                      <SocialIcon network="instagram" fgColor="white"/>
                    
                  </li>
                  <li>
                    {" "}
                    
                      <i className="fa fa-twitter"></i>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
