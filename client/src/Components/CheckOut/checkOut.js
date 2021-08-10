import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InputLabel from './InputLabel';
import ModalPaymentOptions from '../Modals/modalPaymentOptions';
import {
    validateName,
    validateCity,
    validateAddress,
    validateZipCode,
    validatePhoneNumber,
    validateEmail
}
    from './validFunctions';
import './checkOut.css';

function Checkout(props) {
    const { itemList, currentCost, customer, setCurrentCost, setItemList, setItemListLength} = props;
    const [value, setValue] = useState({
        FirstName: customer.FirstName,
        LastName: customer.LastName,
        Address: "",
        City: "",
        Country: "",
        ZipCode: "",
        PhoneNumber: "",
        Email: customer.Email,
    });

    const termsRef = useRef()
    const [sumbit, setSumbit] = useState(false);
    const [fieldsFull, setFieldsFull] = useState(true);
    const [terms, setTerms] = useState(false);
    const [errors, setError] = useState({
        FirstName: false,
        LastName: false,
        Address: false,
        City: false,
        Country: false,
        ZipCode: false,
        PhoneNumber: false,
        Email: false,
    });


    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);

    function onInputChange(field, event) {
        setFieldsFull(true);
        setValue({ ...value, [field]: event.target.value })
    };

    function onInputBlur(validationFn, field) {
        setFieldsFull(true);
        const isValid = validationFn(value[field]);
        setError({ ...errors, [field]: !isValid });
    };


    function onSubmitform() {
        const allValidate = !(errors.FirstName ||
            errors.LastName ||
            errors.Address ||
            errors.City ||
            errors.Country ||
            errors.ZipCode ||
            errors.PhoneNumber ||
            errors.Email)

        const required = value.FirstName !== "" &&
            value.LastName !== "" &&
            value.Address !== "" &&
            value.City !== "" &&
            value.Country !== "" &&
            value.ZipCode !== "" &&
            value.PhoneNumber !== "" &&
            value.Email !== ""

        const allValid = allValidate && required;
        setFieldsFull(required);
        if (allValid && termsRef.current.checked) {
            setSumbit(true);
        }
        window.scrollTo({ top: 0, left: 0 });
        if (termsRef.current.checked !== true) {
            setTerms(<label className="terms">Please read and accept the terms and conditions to proceed with your order.</label>)
            return
        }
    };

    return (
        <>
            <h1 className="headD">checkOut</h1>
            <div id="divTable" className="InsideContentLeft">
                <table id="logtable">
                    <div className="container wrapper left">
                        <div className="row cart-body">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6">
                                <div className="panel panel-info">
                                    <div className="panel-heading"></div>
                                    <div className="panel-body billingDetails">
                                        <div className="form-group">
                                            <div className="col-md-12 titleCheckout">
                                                <h4>BILLING DETAILS</h4>
                                            </div>
                                            {!fieldsFull && <div className="noteRequired"> *all fields must be full</div>}
                                        </div>
                                        <InputLabel type="text"
                                            name="First Name"
                                            field="FirstName"
                                            defaultValue={customer.FirstName}
                                            onChange={onInputChange}
                                            onBlur={() => onInputBlur(validateName, "FirstName")}
                                            hasError={errors.FirstName} />
                                        <InputLabel type="text"
                                            name="Last Name"
                                            field="LastName"
                                            defaultValue={customer.LastName}
                                            onChange={onInputChange}
                                            onBlur={() => onInputBlur(validateName, "LastName")}
                                            hasError={errors.LastName} />
                                        <InputLabel type="text"
                                            name="Email Address"
                                            field="Email"
                                            defaultValue={customer.Email}
                                            onChange={onInputChange}
                                            onBlur={() => onInputBlur(validateEmail, "Email")}
                                            hasError={errors.Email} />
                                        <InputLabel type="text"
                                            name="Street Address"
                                            field="Address"
                                            onChange={onInputChange}
                                            onBlur={() => onInputBlur(validateAddress, "Address")}
                                            hasError={errors.Address} />
                                        <InputLabel type="text"
                                            name="City"
                                            field="City"
                                            onChange={onInputChange}
                                            onBlur={() => onInputBlur(validateCity, "City")}
                                            hasError={errors.City} />
                                        <InputLabel type="text"
                                            name="Country"
                                            field="Country"
                                            onChange={onInputChange}
                                            onBlur={() => onInputBlur(validateCity, "Country")}
                                            hasError={errors.Country} />
                                        <InputLabel type="text"
                                            name="Zip /Post Code"
                                            field="ZipCode"
                                            onChange={onInputChange}
                                            onBlur={() => onInputBlur(validateZipCode, "ZipCode")}
                                            hasError={errors.ZipCode} />
                                        <InputLabel type="text"
                                            name="Phone Number"
                                            field="PhoneNumber"
                                            onChange={onInputChange}
                                            onBlur={() => onInputBlur(validatePhoneNumber, "PhoneNumber")}
                                            hasError={errors.PhoneNumber} />
                                        <textarea
                                            className="form-control textarea"
                                            id="exampleFormControlTextarea1"
                                            rows="4"
                                            placeholder="Notes about your order, e.g. special notes for delivery."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </table>
            </div>
            <div id="divMessage" className="InsideContentRight" >
                <strong strong>YOUR ORDER</strong>
                <div className="form-group"><hr /></div>
                <div className="form-group" >
                    <div className="col-xs-12 block">
                        <strong className="contentSubTotalleft strong">Subtotal</strong>
                        <div className="pull-right contentright"><span>$</span><span>{currentCost}.00</span></div>
                    </div>
                    <div className="col-xs-12 block">
                        <strong className="contentShippingleft strong">Shipping</strong>
                        <div className="pull-right contentright"><span>$20.00</span></div>
                    </div>
                </div>
                <div className="form-group"><hr /></div>
                <div className="form-group" >
                    <div className="col-xs-12 block">
                        <strong className="contentTotalleft strong">Order Total</strong>
                        <div className="pull-right contentright"><span>$</span><span>{currentCost + 20}.00</span></div>
                    </div>
                </div>
                <div className="a">
                    <div className="form-check">
                        <label>
                            <input className="termsCheckBox" type="checkbox" ref={termsRef} onClick={() => { setTerms(termsRef.current.checked) }} name="terms" /> I have read and accept the <Link to="/terms" className="linkCheckOut">Terms and Conditions</Link>.
                        <br />
                            {terms}
                        </label>
                    </div>
                    <button className="buttonCheckOut" onClick={onSubmitform}>
                        <label className="labalCheckOut">PLACE ORDER</label>
                    </button>
                </div>
                {sumbit && <ModalPaymentOptions currentCost={currentCost} setSumbit={setSumbit} setCurrentCost={setCurrentCost} itemList={itemList} setItemList={setItemList} value={value} customer={customer} setItemListLength={setItemListLength}/>}
            </div>
        </>
    );
}

export default Checkout;

