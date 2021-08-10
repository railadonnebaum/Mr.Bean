import React from 'react';
import { Modal } from "react-bootstrap";
import './modalDeleteAccount.css';
function ModalDeleteAccount(props) {

    const { modalShow, setModalShow, deletecustomer } = props;
    return (
        <>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="md"
                backdrop={false}
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal" className="titleModalDelete">confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="textModalDelete">
                        Are you sure you want to delete your account?
                  </h5>
                </Modal.Body>
                <Modal.Footer>
                    <button className="buttonDelete" onClick={deletecustomer}>ok</button>
                    <button className="buttonDelete" onClick={() => { setModalShow(false) }}>cancel</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteAccount;

