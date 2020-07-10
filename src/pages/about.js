import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import M from "materialize-css"
import Layout from "../components/Layout"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import PhoneIcon from "@material-ui/icons/Phone"
import TextFieldsIcon from '@material-ui/icons/TextFields';
import Attraction from "../images/alberta-amazing-attraction.jpg"
import Fuji from "../images/beautiful-beauty-blue-bright.jpg"
import CEO from "../images/mwas.jpg"

export default function About() {
  useEffect(() => {
    M.Parallax.init(document.querySelectorAll(".parallax"))
  }, [])

  const data = useStaticQuery(graphql`
    query {
      attraction: file(relativePath: { eq: "alberta-amazing-attraction.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fuji: file(relativePath: { eq: "beauty-blue-bright.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ceo: file(relativePath: { eq: "mwas.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <br></br>
            <h1 className="header center teal-text text-lighten-2">
              The Good times 
            </h1>
            <h4 className="header center teal-text text-lighten-2">
              Where world meets wild
            </h4>
            <br></br>
          </div>
        </div>
        <div className="parallax">
          <img src={Attraction} alt="Calm clouds" />
          {/* <Img fluid={data.attraction.childImageSharp.fluid} /> */}
        </div>
      </div>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m12">
              <h2 className="center teal-text text-lighten-2 load-hidden reveal-element" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease">
                Who We Are
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col s12 center">
              <p className="left-align light load-hidden reveal-element" data-sal="slide-up" data-sal-delay="200" data-sal-easing="easing">
                World Meets Wild is one of the best upcoming tours and travel
                advisors in Kenya.Our specialty is the ability to design unique
                tours and safaris to fit every type of tourist, from the budget
                to the luxury providing a unique opportunity to combine bush and
                beach adventures with Kenya’s spectacular scenery. We also offer
                hotel booking services and car rental services for travelling to
                your desired location. At World Meets Wild clients are the heart
                of our operation, we therefore value our clientele and strive to
                offer them the best experience they can get.
                <i>World Meets Wild Your World, Your Way</i>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6 l6">
              <div className="card hoverable load-hidden reveal-card" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease">
                <div className="card-content">
                  <span className="card-title teal-text text-lighten-2">
                    Mission
                  </span>
                  <p>
                    To place our customers at the center of unforgetable
                    transport and tour services
                  </p>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l6">
              <div className="card hoverable load-hidden reveal-card" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease">
                <div className="card-content">
                  <span className="card-title teal-text text-lighten-2">
                    Vision
                  </span>
                  <p>
                    We look beyond the horizon to anticipate change and drive
                    you into a new era of tours and transport
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
              <h3 className="header col s12 light teal-text text-lighten-2"></h3>
            </div>
          </div>
        </div>
        <div className="parallax">
          <img src={Fuji} alt="Mt Fuji" />
          {/* <Img fluid={data.fuji.childImageSharp.fluid} /> */}
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m12">
              <h2 className="center teal-text text-lighten-2 load-hidden reveal-element" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease">
                Meet Our Team
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col s6 m6 l12 offset-s3 offset-m4 offset-l4">
              {/* <img
                src={CEO}
                className="circle responsive-img load-hidden reveal-element"
                id="ceo-image"
              /> */}
              <Img fluid={data.ceo.childImageSharp.fluid} className="circle responsive-img ceo-image"/>
            </div>
          </div>
          <div className="row">
            <div className="col s12 load-hidden reveal-element" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease">
              <h4 className="center teal-text text-lighten-2">CEO</h4>
              <p className="center">Peter Mwangi</p>
            </div>
          </div>

          <div id="contactus" className="row">
            <div className="col s12 m12">
              <h2 className="center teal-text text-lighten-2 load-hidden reveal-element" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease">
                Contact Us
              </h2>
            </div>
          </div>

          <div className="row">
            <form className="col s9 offset-s1" id="contact-form" method="POST" data-sal="slide-up" data-sal-easing="ease">
              <div className="row">
                <div className="input-field col s12">
                  <AccountCircleIcon fontSize="medium"/>
                  <input
                    id="name"
                    type="text"
                    className="validate"
                    name="contact_name"
                    placeholder="Name"
                  />
                  {/* <label for="name">Name</label> */}
                  <span className="red-text text-lighten-2"></span>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <MailOutlineIcon fontSize="medium"/>
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    name="contact_email"
                    placeholder="Email"
                  />
                  
                  <span className="red-text text-lighten-2"></span>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <PhoneIcon fontSize="medium"/>
                  <input
                    id="phone"
                    type="tel"
                    name="contact_phone"
                    className="validate"
                    placeholder="Phone"
                  />
                  {/* <label for="number">Phone</label> */}
                  <span className="red-text text-lighten-2"></span>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <TextFieldsIcon fontSize="medium"/>
                  <input id="text" type="text" name="message" placeholder="Your message" />
                  {/* <label for="text">Your Message</label> */}
                </div>
              </div>
              <div className="row">
                <div className="col s2 offset-s10">
                  <input
                    className="btn waves-effect waves-light"
                    type="submit"
                    name="submit"
                    value="submit"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
