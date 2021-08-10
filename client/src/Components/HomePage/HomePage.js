import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MDBCarousel, 
         MDBCarouselCaption, 
         MDBCarouselInner, 
         MDBCarouselItem, 
         MDBView, 
         MDBMask }
  from "mdbreact";
import homepage1 from '../../images/homePage/homepage1.jpg';
import homepage2 from '../../images/homePage/homepage2.jpg';
import homepage3 from '../../images/homePage/homepage3.jpg';
import homepage4 from '../../images/homePage/homepage4.jpg';
import frontPage from '../../images/homePage/frontPage.jpg';
import './HomePage.css'
function HomePage() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, []);

  return (
    <>
      <h1 className="headC">homePage</h1>
      <MDBCarousel
        activeItem={1}
        length={5}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={frontPage}
                alt="front page"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={homepage1}
                alt="Coffee Capsules"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <button className="button1">
                <Link to="/coffee-capsules" role="button">
                  <h3 className="h3-responsive buttontitle1">Coffee Capsules</h3>
                </Link>
              </button>
              <h3 className="title1">Variety of Flavors</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={homepage2}
                alt="Coffee machines"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <button className="button2">
                <Link to="/coffee-machines" role="button">
                  <h3 className="h3-responsive buttontitle2">Coffee Machines</h3>
                </Link>
              </button>
              <h3 className="title2">First Class Espresso Bars</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src={homepage4}
                alt="Whole Bean"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <button className="button3">
                <Link to="/whole-bean" role="button">
                  <h3 className="h3-responsive buttontitle3">Whole Bean</h3>
                </Link>
              </button>
              <h3 className="title3">Freshly Roastaed Beans</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img
                className="d-block w-100"
                src={homepage3}
                alt="Accessories"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <button className="button4">
                <Link to="/accessories" role="button">
                  <h3 className="h3-responsive buttontitle4">Accessories</h3>
                </Link>
              </button>
              <h3 className="title4">To Enhance your Coffee</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </>
  );
}

export default HomePage;