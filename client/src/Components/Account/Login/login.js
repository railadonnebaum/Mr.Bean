import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import InputLabel from '../../CheckOut/InputLabel';
import {
    validateEmail,
    validateZipCode
}
    from '../../CheckOut/validFunctions';
import {getCustomer } from '../../../Service/service';
import './login.css';

function Login(props) {
    const { history } = props;
    const { setCustomer } = props;
    const [value, setValue] = useState({
        Email: "",
        Password: ""
    });

    const [errors, setError] = useState({
        Email: false,
        Password: false
    });

    const [fieldsFull, setFieldsFull] = useState(true);
    const [fieldsCorrect, setFieldsCorrect] = useState(true);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);

    function onInputChange(field, event) {
        setFieldsFull(true);
        setFieldsCorrect(true);
        setValue({ ...value, [field]: event.target.value })
    };

    function onInputBlur(validationFn, field) {
        setFieldsFull(true);
        setFieldsCorrect(true);
        const isValid = validationFn(value[field]);
        setError({ ...errors, [field]: !isValid });
    };

    async function onSubmitform() {
        let UserName = ""
        let FirstName = ""
        let LastName = ""
        let Email = ""
        const allValidate = !(errors.Email ||
            errors.Password)

        const required = value.Email !== "" &&
            value.Password !== ""

        const allValid = allValidate && required;
        setFieldsFull(required);
        if (allValid) {
            let customer = await getCustomer(value.Email)
            if(!(customer == 0)){
                if (customer[0].Password === value.Password) {
                            UserName = customer[0].UserName;
                            FirstName = customer[0].FirstName;
                            LastName = customer[0].LastName;
                            Email = customer[0].Email;
                }
            }
            if (UserName !== "") {
                setCustomer({ UserName, FirstName, LastName, Email });
                localStorage.setItem('customer', JSON.stringify({ UserName, FirstName, LastName, Email }));
                history.push('/account');
            }
            else {
                setFieldsCorrect(false);
            }
        }
    };

    return (
        <>
            <h1 className="head">login</h1>
            <div className="loginDiv">
                {!fieldsFull && <div className="noteRequired"> *all fields must be full</div>}
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
                {!fieldsCorrect && <label>no match for email/password</label>}
                <button className="loginButton" onClick={onSubmitform}>LOGIN</button>
            </div>
        </>
    )
}
export default withRouter(Login)