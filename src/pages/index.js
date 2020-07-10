import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
// import M from "materialize-css"
import Layout from "../components/Layout"
// import Elephant from "../images/elephant.jpg"
// import Buffalo from "../images/buffalo.jpg"
// import Rhino from "../images/rhino.jpg"
// import Lion from "../images/close-up-photo-of-lion-s-head.jpg"
// import Leopard from "../images/brown-leopard.jpg"
// import Safari from "../images/safari.jpg"
// import Hotel from "../images/hotel.jpg"
import Booking from "../images/booking.jpg"
import ContentLion from "../images/lion.jpg"
import Background3 from "../images/background3.jpg"
import Button from "../components/Button"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("materialize-css").then(M => {
        let elems = document.querySelectorAll(".carousel")
        M.Carousel.init(elems, {
          fullWidth: true,
          indicators: true,
        })
        M.Parallax.init(document.querySelectorAll(".parallax"))
      })
    }
  }, [])

  const data = useStaticQuery(graphql`
    query {
      elephant: file(relativePath: { eq: "elephant.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lion: file(relativePath: { eq: "close-up-photo-of-lion-s-head.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rhino: file(relativePath: { eq: "rhino.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      buffalo: file(relativePath: { eq: "buffalo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leopard: file(relativePath: { eq: "brown-leopard.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      safari: file(relativePath: { eq: "safari.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hotel: file(relativePath: { eq: "hotel.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      booking: file(relativePath: { eq: "booking.jpg" }) {
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
      <div className="row">
        <div className="col-s12">
          <div className="carousel carousel-slider center">
            <div className="carousel-fixed-item center">
              <h1 className="header center teal-text text-lighten-2">
                Experience the big 5
              </h1>
            </div>
            <div className="carousel-item">
              {/* <img src={Elephant} alt="elephant" /> */}
              <Img fluid={data.elephant.childImageSharp.fluid} />
            </div>
            <div className="carousel-item">
              {/* <img src={Lion} alt="lion" /> */}
              <Img fluid={data.lion.childImageSharp.fluid} />
            </div>
            <div className="carousel-item">
              {/* <img src={Rhino} alt="rhino" /> */}
              <Img fluid={data.rhino.childImageSharp.fluid} />
            </div>
            <div className="carousel-item">
              {/* <img src={Buffalo} alt="buffalo" /> */}
              <Img fluid={data.buffalo.childImageSharp.fluid} />
            </div>
            <div className="carousel-item">
              {/* <img src={Leopard} alt="Leopard" /> */}
              <Img fluid={data.leopard.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m12">
              <h2
                className="center teal-text text-lighten-2 load-hidden reveal-element"
                data-sal="slide-up"
                data-sal-delay="400"
                data-sal-easing="ease"
              >
                Our Services
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6 l4">
              <div
                className="card sticky-action hoverable load-hidden reveal-card"
                data-sal="slide-left"
                data-sal-delay="400"
                data-sal-easing="ease"
              >
                <div className="card-image waves-effect waves-block waves-light">
                  {/* <img className="activator" src={Safari} alt="Navigation" /> */}
                  <Img
                    fluid={data.safari.childImageSharp.fluid}
                    className="activator"
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Navigation
                  </span>
                  <p>
                    <a href="#" className="brown-text">
                      Contact Us
                    </a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text darken-4">
                    Navigation
                  </span>
                  <p>We offer transport services to your desired location</p>
                </div>
              </div>
            </div>

            <div className="col s12 m6 l4">
              <div
                className="card sticky-action hoverable load-hidden reveal-card"
                data-sal="slide-left"
                data-sal-delay="400"
                data-sal-easing="ease"
              >
                <div className="card-image waves-effect waves-block waves-light">
                  {/* <img
                    className="activator"
                    src={Hotel}
                    alt="Diani Reef Beach Resort Spa"
                  /> */}
                  <Img
                    fluid={data.hotel.childImageSharp.fluid}
                    className="activator"
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Hotels
                  </span>
                  <p>
                    <a href="#" className="brown-text">
                      Book with us
                    </a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Hotels
                  </span>
                  <p>
                    Book with us the best hotels in Kenya at an afordable rate
                  </p>
                </div>
              </div>
            </div>

            <div className="col s12 m6 l4">
              <div
                className="card sticky-action hoverable load-hidden reveal-card"
                data-sal="slide-left"
                data-sal-delay="400"
                data-sal-easing="ease"
              >
                <div className="card-image waves-effect waves-block waves-light">
                  {/* <img
                    className="activator"
                    src={Booking}
                    alt="Booking Services"
                  /> */}
                  <Img
                    fluid={data.booking.childImageSharp.fluid}
                    className="activator"
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Booking
                  </span>
                  <p>
                    <a href="#" className="brown-text">
                      Book with us
                    </a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Booking
                  </span>
                  <p>
                    Book with us local flights and get to experience the
                    beautiful land of Kenya
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
              <h3 className="header col s12 light teal-text text-lighten-2">
                Experience a game drive at the Nairobi National Park
              </h3>
            </div>
          </div>
        </div>
        <div className="parallax">
          <img src={ContentLion} alt="Lion" />
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 center">
              <h3>
                <i className="mdi-content-send brown-text"></i>
              </h3>
              <h4
                id="packages"
                className="load-hidden reveal-element teal-text text-lighten-2"
                data-sal="slide-up"
                data-sal-delay="400"
                data-sal-easing="ease"
              >
                Packages
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6 l4">
              <div
                className="card sticky-action hoverable load-hidden reveal-card"
                data-sal="slide-left"
                data-sal-delay="400"
                data-sal-easing="ease"
              >
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    className="activator"
                    src={Booking}
                    alt="Booking Services"
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Booking
                  </span>
                  <p>
                    <a href="#" className="brown-text">
                      Book with us
                    </a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Booking
                  </span>
                  <p>
                    Book with us local flights and get to experience the
                    beautiful land of Kenya
                  </p>
                </div>
              </div>
            </div>

            <div className="col s12 m6 l4">
              <div
                className="card sticky-action hoverable load-hidden reveal-card"
                data-sal="slide-left"
                data-sal-delay="400"
                data-sal-easing="ease"
              >
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    className="activator"
                    src={Booking}
                    alt="Booking Services"
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Booking
                  </span>
                  <p>
                    <a href="#" className="brown-text">
                      Book with us
                    </a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Booking
                  </span>
                  <p>
                    Book with us local flights and get to experience the
                    beautiful land of Kenya
                  </p>
                </div>
              </div>
            </div>

            <div className="col s12 m6 l4">
              <div
                className="card sticky-action hoverable load-hidden reveal-card"
                data-sal="slide-left"
                data-sal-delay="400"
                data-sal-easing="ease"
              >
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    className="activator"
                    src={Booking}
                    alt="Booking Services"
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Booking
                  </span>
                  <p>
                    <a href="#" className="brown-text">
                      Book with us
                    </a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Booking
                  </span>
                  <p>
                    Book with us local flights and get to experience the
                    beautiful land of Kenya
                  </p>
                </div>
              </div>
            </div>

            <div className="col s12 m6 l4">
              <div
                className="card sticky-action hoverable load-hidden reveal-card"
                data-sal="slide-left"
                data-sal-delay="400"
                data-sal-easing="ease"
              >
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    className="activator"
                    src={Booking}
                    alt="Booking Services"
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Booking
                  </span>
                  <p>
                    <a href="#" className="brown-text">
                      Book with us
                    </a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Booking
                  </span>
                  <p>
                    Book with us local flights and get to experience the
                    beautiful land of Kenya
                  </p>
                </div>
              </div>
            </div>

            <div className="col s12 m6 l4">
              <div
                className="card sticky-action hoverable load-hidden reveal-card"
                data-sal="slide-left"
                data-sal-delay="400"
                data-sal-easing="ease"
              >
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    className="activator"
                    src={Booking}
                    alt="Booking Services"
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Booking
                  </span>
                  <p>
                    <a href="#" className="brown-text">
                      Book with us
                    </a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Booking
                  </span>
                  <p>
                    Book with us local flights and get to experience the
                    beautiful land of Kenya
                  </p>
                </div>
              </div>
            </div>

            <div className="col s12 m6 l4">
              <div
                className="card sticky-action hoverable load-hidden reveal-card"
                data-sal="slide-left"
                data-sal-delay="400"
                data-sal-easing="ease"
              >
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    className="activator"
                    src={Booking}
                    alt="Booking Services"
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Booking
                  </span>
                  <p>
                    <a href="#" className="brown-text">
                      Book with us
                    </a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Booking
                  </span>
                  <p>
                    Book with us local flights and get to experience the
                    beautiful land of Kenya
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
              <h5 className="header col s12 light">
                World Meets Wild, Your world, Your way
              </h5>
            </div>
          </div>
        </div>
        <div className="parallax">
          <img src={Background3} alt="Unsplashed background img 3" />
        </div>
      </div>
      <div className="row">
        <div
          className="col s12 center"
          id="contact-main-page"
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-easing="ease"
        >
          <AnchorLink to="/about#contact-form">
            <Button text="Contact Us" />
          </AnchorLink>
        </div>
      </div>
    </Layout>
  )
}
