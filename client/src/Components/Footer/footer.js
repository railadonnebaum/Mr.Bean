import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { sendEmailNewsLetter, sendEmail } from '../../Service/service'

function Footer() {
  const [email, setEmail] = useState("");
  const [noEmail, setNoEmail] = useState(false)
  const [subscribe, setSubscribe] = useState(false)

  function onInputChange(event) {
    setNoEmail(false);
    setEmail(event.target.value)
  };

  function onClick() {
    if (email === "") {
      setNoEmail(true)
    }
    else {
      let res= {email:email}
      sendEmail(res ,'newsLetter' )
      setSubscribe(true)
    }
  }
  return (
    <footer className="bg-dark text-center text-white footer" >
      <div className="container p-4">
        {!subscribe &&
          <div className="row d-flex justify-content-center">
            <div className="col-auto divFooter  divEmailFooter">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
            <div className="col-md-5 col-12 divFooter">
              <div className="form-outline form-white mb-4">
                <input type="email" id="form5Example2" className="form-control" placeholder="Email Address" onInput={(e) => onInputChange(e)} />
              </div>
            </div>
            <div className="col-auto divFooter">
              <button onClick={() => onClick()} className="subscribeButton btn btn-outline-light mb-4">
                Subscribe
                  </button>
            </div>
            {noEmail && <p className="noteFooter">please enter an Email Address</p>}
          </div>}
        {subscribe && <p className="subscribe">Thank you for subscribing to our newsletter!</p>}
        <section className="footerbody">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 divFooterLink">
              <ul className="list-unstyled ">
                <li className="footerLi" >
                  <Link to="/account" className="text-white linkFooter">My Account</Link >
                </li>
                <li className="footerLi">
                  <Link to="/returns-and-exchange" className="text-white linkFooter">Returns & Exchanges </Link>
                </li>
                <li className="footerLi">
                  <Link to="/delivery-information" className="text-white linkFooter">Delivery Information</Link>
                </li>
                <li className="footerLi">
                  <Link to="/terms" className="text-white linkFooter">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 divFooterLink">
              <ul className="list-unstyled mb-0">
                <li className="footerLi">
                  <Link to="/about" className="text-white linkFooter">About Us</Link >
                </li>
                <li className="footerLi">
                  <Link to="/blog" className="text-white linkFooter">Blog</Link>
                </li>
                <li className="footerLi">
                  <Link to="/site-map" className="text-white linkFooter">Sitemap</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 divFooterLink">
              <ul className="list-unstyled mb-0">
                <li className="footerLi">
                  <Link className="text-white linkFooter" to="/faq">FAQ</Link>
                </li>
                <li className="footerLi">
                  <Link className="text-white linkFooter" to="/contact-us">Contact Us </Link >
                </li>
                <li className="footerLi">
                  <Link className="text-white linkFooter" to="/idea">Sumbit your idea</Link >
                </li>
                <li className="footerLi">
                  <Link className="text-white linkFooter" to="/opinion">Opinion</Link >
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="text-center p-3" >
        © 2021 Copyright:
        mr.bean48328@gmail.com
          </div>
    </footer>
  );
};

export default Footer

