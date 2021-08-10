import React from 'react';
import { Modal, } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import './modalRegister.css';

function ModalRegister(props) {
    const { modalShow, setModalShow, history } = props;
    return (
        <>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="md"
                backdrop={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal" className="titleRegister">Your Account Has Been Created!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div >
                        <h6 className="subTitleRegister">Congratulations!</h6>
                        <div className="textRegister">
                            Your new account has been successfully created!
                        <br />
                        You can now take advantage of member privileges to enhance your online shopping experience with us.
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="buttonRegister" onClick={() => history.push('/account')}>continue</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default withRouter(ModalRegister);
