import React from 'react';
import { Modal } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import './modalPayment.css';
function ModalPayment(props) {
    const { modalShow, setModalShow } = props;
    const history = useHistory();
    return (
        <>
            <Modal
                show={modalShow}
                onHide={() => { setModalShow(false); history.push('/') }}
                size="md"
                aria-labelledby="contained-modal"
                backdrop={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal"></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2 className="textModalPayment">Your order is on it's way... Thanks for shopping with us.</h2>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default ModalPayment;
