import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InputLabel from '../../CheckOut/InputLabel'
import {
    validateName,
    validateEmail,
    validateZipCode
}
    from '../../CheckOut/validFunctions';
import ModalRegister from "../../Modals/modalRegister";
import { addCustomer, getCustomer } from '../../../Service/service';
import './register.css'

function Register(props) {
    const { setCustomer } = props;
    const [value, setValue] = useState({
        UserName: "",
        FirstName: "",
        LastName: "",
        Email: "",
        Password: ""
    });

    const [errors, setError] = useState({
        UserName: false,
        FirstName: false,
        LastName: false,
        Email: false,
        Password: false
    });

    const [fieldsFull, setFieldsFull] = useState(true);
    const [userExist, setUserExist] = useState(false);
    const [showModal, setShowModal] = useState(false);
   
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);

    function onInputChange(field, event) {
        setFieldsFull(true);
        setUserExist(false);
        setValue({ ...value, [field]: event.target.value })
    };

    function onInputBlur(validationFn, field) {
        setFieldsFull(true);
        setUserExist(false);
        const isValid = validationFn(value[field]);
        setError({ ...errors, [field]: !isValid });
    };

    async function onSubmitform() {
        debugger
        const newCustomer = {
            UserName: value.UserName,
            FirstName: value.FirstName,
            LastName: value.LastName,
            Email: value.Email,
            Password: value.Password,
            flavor: ""
        }
        const allValidate = !(errors.UserName ||
            errors.FirstName ||
            errors.LastName ||
            errors.Email ||
            errors.Password);

        const required = value.UserName !== "" &&
            value.FirstName !== "" &&
            value.LastName !== "" &&
            value.Email !== "" &&
            value.Password !== "";

        const allValid = allValidate && required;
        setFieldsFull(required);
        let exist = false
        if (allValid) {
            debugger
            let customer = await getCustomer(value.Email)
            if(!(customer == 0)){
                setUserExist(true);
                exist = true;
            }
            debugger
            if (!exist) {
                addCustomer(newCustomer);
                setShowModal(true);
                setCustomer({ UserName: newCustomer.UserName, FirstName: newCustomer.FirstName, LastName: newCustomer.LastName, Email: newCustomer.Email });
                localStorage.setItem('customer', JSON.stringify({ UserName: newCustomer.UserName, FirstName: newCustomer.FirstName, LastName: newCustomer.LastName, Email: newCustomer.Email }));
            }
        }
    };
    return (
        <>
            <h1 className="head">register</h1>
            <div className="registerDiv">
                {!fieldsFull && <div className="noteRequired"> *all fields must be full</div>}
                {userExist && <div className="noteRequired">*user already exist.<br/>In order to log in to your account:<Link to="login">Click Login</Link></div>}
                <InputLabel type="text"
                    name="USER NAME"
                    field="UserName"
                    onChange={onInputChange}
                    onBlur={() => onInputBlur(validateName, "UserName")}
                    hasError={errors.UserName} />
                <InputLabel type="text"
                    name="FIRST NAME"
                    field="FirstName"
                    onChange={onInputChange}
                    onBlur={() => onInputBlur(validateName, "FirstName")}
                    hasError={errors.FirstName} />
                <InputLabel type="text"
                    name="LAST NAME"
                    field="LastName"
                    onChange={onInputChange}
                    onBlur={() => onInputBlur(validateName, "LastName")}
                    hasError={errors.LastName} />
                <InputLabel type="text"
                    name="EMAIL"
                    field="Email"
                    onChange={onInputChange}
                    onBlur={() => onInputBlur(validateEmail, "Email")}
                    hasError={errors.Email} />
                <InputLabel type="password"
                    name="PASSWORD"
                    field="Password"
                    onChange={onInputChange}
                    onBlur={() => onInputBlur(validateZipCode, "Password")}
                    hasError={errors.Password} />
                <button className="registerButton" onClick={onSubmitform}>REGISTER</button>
                {showModal && <ModalRegister modalShow={showModal} setModalShow={setShowModal} />}
            </div>
        </>
    )
}

export default Register