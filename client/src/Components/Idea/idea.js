import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import { addRes, sendIdea, sendEmail } from '../../Service/service'
import './idea.css'

function Idea() {
    const [value, setValue] = useState({
        name: "",
        email: "",
        subject: "",
        text: ""
    });

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);

   
    function onInputChange(event, field) {
        setValue({ ...value, [field]: event.target.value })
    }

    function addIdea() {
        sendEmail({email:value.email}, 'idea');
        addRes(value, "ideas");
    }

    function onClick(){
        addIdea();
        window.scrollTo({ top: 0, left: 0 });
    }
    return (
        <>
            <h1 className="headC">idea</h1>
            <section className="ideaTitle">Share with us your idea</section>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <div className="ideaBody">
                            <div className="black-text">
                                <p className="h6 mb-4">Tell us who you are:</p>
                                <MDBInput id="input-a" label="Your name" icon="user" group type="text" validate error="wrong"
                                    success="right" onChange={(event) => onInputChange(event, "name")} />
                                <MDBInput id="input-b" label="Your email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" onChange={(event) => onInputChange(event, "email")} />
                                <p className="h6 mb-4">Your idea is related to:</p>
                                <MDBInput id="input-c" label="Subject" icon="tag" group type="text" validate error="wrong" success="right" onChange={(e) => onInputChange(e, "subject")} />
                                <p className="h6 mb-4">Is your idea:</p>
                                <div className="form-check">
                                    <label>
                                        <input type="radio" name="radio" /> <span className="label-text">A new suggestion or idea</span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label>
                                        <input type="radio" name="radio" /> <span className="label-text">An improvment to existing</span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label>
                                        <input type="radio" name="radio" /> <span className="label-text">A request to bring back a product</span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label>
                                        <input type="radio" name="radio" /> <span className="label-text">Other</span>
                                    </label>
                                </div>
                                <p className="h6 mb-4">Tell us about your idea:</p>
                                <MDBInput id="input-d" type="textarea" rows="2" label="Your idea" icon="pencil-alt" onChange={(e) => onInputChange(e, "text")} />
                            </div>
                            <div className="text-center">
                                <button className="bottonIdea" type="button" onClick={onClick}>Share
                                <MDBIcon far icon="paper-plane" className="ml-1" />
                                </button>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    )
};
export default Idea


