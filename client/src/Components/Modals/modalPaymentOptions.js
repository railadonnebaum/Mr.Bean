import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import PayPalButton from '../Payment/PayPalButton';
import './modalPaymentOptions.css';

function ModalPaymentOptions(props) {
    const { currentCost, setSumbit, setCurrentCost, itemList, setItemList, value, customer } = props;
    const [modalShow, setModalShow] = useState(true);
    const history = useHistory();
    return (
        <>
            <Modal
                show={modalShow}
                onHide={() => { setModalShow(false); setSumbit(false) }}
                size="md"
                aria-labelledby="contained-modal"
                backdrop={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal" className="paymentOptionsTitle">Choose your favorite payment option:</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <button className="creditCardButton"><Link to={{ state: { cunsumer: value }, pathname: "/payment" }}>Credit Card</Link></button>
                    <PayPalButton history={history} total={currentCost} setCurrentCost={setCurrentCost} itemList={itemList} setItemList={setItemList} value={value} customer={customer} />
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalPaymentOptions;

