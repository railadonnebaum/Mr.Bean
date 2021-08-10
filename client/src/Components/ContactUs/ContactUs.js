import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from 'react-icons/fa';
import { BsFillEnvelopeFill, BsHouseFill } from 'react-icons/bs';
import { addRes, sendQestion, sendEmail } from '../../Service/service';
import './ContactUs.css';

function ContactUs() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    text: ""
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, []);

  function onInputChange(event, field) {
    setValue({ ...value, [field]: event.target.value })
  }

  function addContact() {
    sendEmail({email:value.email}, 'question');
    addRes(value, "contacts");
  }
  return (
    <>
      <h1 className="headC">contacts</h1>
      <div className="row g-0 position-relative">
        <section className="contactUsTitle">Contact Us</section>
        <div className="col-md-6 p-4 ps-md-0 body">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 pb-5">
              <div>
                  <div className="card-body p-3">
                    <div className="form-group">
                      <div className="input-group mb-2 divContactUs">
                        <FaPhoneAlt className="IconContactUS" size={24} />
                        <label className="labelContact" >058-3248-328</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group mb-2 divContactUs">
                        <BsFillEnvelopeFill className="IconContactUS" size={24} />
                        <label className="labelContact" size={30}>mr.bean48328@gmail.com</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group mb-2 divContactUs">
                        <BsHouseFill className="IconContactUS" size={24} />
                        <label className="labelContact">New York</label>
                      </div>
                    </div>
                    <input type="text" className="inputContactUs" placeholder="Name" onChange={(event) => onInputChange(event, "name")} />
                    <input type="email" className="inputContactUs" placeholder="Email" onChange={(event) => onInputChange(event, "email")} />
                    <input type="tel" className="inputContactUs" placeholder="Phone" onChange={(event) => onInputChange(event, "phone")} />
                    <textarea type="text" className="inputContactUs" placeholder="what can we help you with?" onChange={(event) => onInputChange(event, "text")} />
                    <button  className="buttonContactUs" onClick={ () => {addContact(); window.scrollTo({ top: 0, left: 0 })}}>send</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-md-0 p-md-4">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px", width: "700px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
              title="This is a unique title"
              width="100%"
              height="120%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactUs

