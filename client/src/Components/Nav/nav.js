import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
  } from "mdbreact";
import ModalCart from '../Modals/modalCart';
import logo from '../../images/homePage/logo.jpg';
import './nav.css';

class Navbartop extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  logout(props) {
    props.setCustomer({ UserName: "", FirstName: "", LastName: "", Email: "" })
    localStorage.setItem('customer', JSON.stringify({ UserName: "", FirstName: "", LastName: "", Email: "" }));
    props.setItemList([]);
    props.setCurrentCost(0)
    props.setItemListLength(0);
  }

  render() {
    return (
      <MDBNavbar className="nav" color="black" dark expand="md">
        <MDBNavbarBrand className="divlogo">
          <MDBNavLink to="/" color="white"><img src={logo} alt="homepage" className="logo"></img></MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem >
              <MDBNavLink to="/" className="linkNav">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/coffee-capsules" className="linkNav">Coffee Capsules</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/coffee-machines" className="linkNav">Coffee Machines</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/whole-bean" className="linkNav">Whole Bean</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/accessories" className="linkNav">Accessories</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              {this.props.customer.UserName !== "" && <>
                <h4 className="customerName">Hi {this.props.customer.UserName}</h4>
              </> 
              }
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  {this.props.customer.UserName === "" ? <>
                    <MDBDropdownItem><Link to="/login">LOGIN</Link></MDBDropdownItem>
                    <MDBDropdownItem><Link to="/register">JOIN NOW</Link></MDBDropdownItem>
                  </>
                    :
                    <>
                      <MDBDropdownItem><Link to="/account">MY ACCOUNT</Link></MDBDropdownItem>
                      <MDBDropdownItem><button className="buttonLogout" onClick={() => this.logout(this.props)}><Link to="/">LOG OUT</Link></button></MDBDropdownItem>
                      <MDBDropdownItem><button className="buttonLogout" onClick={() => this.logout(this.props)}><Link to="/login">CHANGE USER</Link></button></MDBDropdownItem>
                    </>
                  }
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <ModalCart itemListLength={this.props.itemListLength} currentCost={this.props.currentCost}/>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbartop;