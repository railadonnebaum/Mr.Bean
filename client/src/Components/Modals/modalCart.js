
import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './modalCart.css'
class ModalCart extends Component {
  constructor(props) {
    super();
  }
  state = {
    modal6: false,
    modal7: false
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
      <MDBContainer >
        <FaShoppingCart className="modalCart" id="cart" color="white" role="button" onClick={this.toggle(6)} size={20} />
        <span class="badge rounded-pill badge-notification bg-danger">{this.props.itemListLength}</span>
        <MDBModal backdrop={false} isOpen={this.state.modal6} toggle={this.toggle(6)} side position="top-right">
          <MDBModalHeader toggle={this.toggle(6)}></MDBModalHeader>
          {this.props.currentCost !== 0 ? <>
            <MDBModalBody className="modalCartDiv">
              No pressure,
            <br />
            your Products will be waiting for you in your cart.
            </MDBModalBody>
            <MDBModalFooter>
              <Link className="linkModalCart" to="/cart" onClick={this.toggle(6)}>cart</Link>
              <Link className="linkModalCart" to="/check-out" onClick={this.toggle(6)} >check out</Link>
            </MDBModalFooter>
          </>
            : <MDBModalBody className="modalCartDiv">No Products in cart.</MDBModalBody>}
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalCart;