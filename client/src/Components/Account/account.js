import React, { useState, useEffect } from "react"
import InputLabel from '../CheckOut/InputLabel'
import {
    validateName,
    validateZipCode
}
    from '../CheckOut/validFunctions'; //validation functions.
import ModalDeleteAccount from '../Modals/modalDeleteAccount';
import { AiFillEdit } from "react-icons/ai";
import { BsPeopleCircle } from "react-icons/bs";
import { getCustomerList, addToFileCustomer, getCharacterList, deleteCustomer, getCustomer } from '../../Service/service'
import { Link, withRouter } from "react-router-dom";
import './account.css';

function Account(props) {
    const { history } = props;
    const { customer, setCustomer, setItemList, setCurrentCost, setItemListLength } = props;
    const [editInformation, setEditInformation] = useState(false);
    const [flavor, setFlavore] = useState("")
    const [customerList, setCustomerList] = useState([]);
    const [deleteModal, setDeleteModal] = useState(false);
    const [characterList, setCharacterList] = useState([]);
  
    async function fetchData() {
        let customerList = await getCustomerList();
        setCustomerList(customerList);
        let characterList = await getCharacterList();
        setCharacterList(characterList);
    };

    useEffect(() => {
        fetchData();
        window.scrollTo({ top: 0, left: 0 })
    }, []);

    useEffect(() => {
        customerList.map(person => {
            if (person.Email === customer.Email) {
                characterList.map((i => {
                    if (i.title === person.flavor) {
                        setFlavore(i.description);
                    }
                }))
                return
            }
        })
    })

    const [value, setValue] = useState({
        FirstName: "",
        LastName: "",
        Password: ""
    });

    const [errors, setError] = useState({
        FirstName: false,
        LastName: false,
        Password: false
    });

    const [fieldsFull, setFieldsFull] = useState(true);
    function onInputChange(field, event) {
        setFieldsFull(true);
        setValue({ ...value, [field]: event.target.value })
    };

    function onInputBlur(validationFn, field) {
        setFieldsFull(true);
        const isValid = validationFn(value[field]);
        setError({ ...errors, [field]: !isValid });
    };

    async function Delete() {
        await deleteCustomer(customer.Email)
        setCustomer({ UserName: "", FirstName: "", LastName: "", Email: "" });
        localStorage.setItem('customer', JSON.stringify({ UserName: "", FirstName: "", LastName: "", Email: "" }));
        setItemList([]);
        setCurrentCost(0)
        setItemListLength(0);
        history.push('/')
        return
    }

    async function save() {
        debugger
        const allValidate = !(errors.FirstName ||
            errors.LastName ||
            errors.Password)

        const required = value.FirstName !== "" &&
            value.LastName !== "" &&
            value.Password !== "";

        const allValid = allValidate && required;
        setFieldsFull(required);
        if (allValid) {
            let new_customer = await getCustomer(customer.Email)
                if(!(new_customer == 0)){
                    const newCustomer = {
                        UserName: customer.UserName,
                        FirstName: value.FirstName,
                        LastName: value.LastName,
                        Email: customer.Email,
                        Password: value.Password,
                        flavor: new_customer[0].flavor,
                        id: new_customer[0]._id
                    }
                    addToFileCustomer(newCustomer);
                }
            setEditInformation(false);
            setCustomer({ UserName: customer.UserName, FirstName: value.FirstName, LastName: value.LastName, Email: customer.Email });
        }
    }
    return (
        <>
            <h1 className="head">account</h1>
            <div className="accountBoddy">
                {customer.UserName !== "" ? <>
                    <h5 className="accountTitle">My Account<BsPeopleCircle className="accountIcon" /></h5>
                    <div className="accountDiv">
                        <h5 className="subtitleAccount">About Me:{!editInformation && <button className="editButton" onClick={() => setEditInformation(true)}><AiFillEdit /><label className="editLabel">edit</label></button>}</h5>
                        {!editInformation ?
                            <div>
                                <label className="labelAccount">USERNAME:</label> {customer.UserName}
                                <br />
                                <label className="labelAccount">FIRST NAME:</label> {customer.FirstName}
                                <br />
                                <label className="labelAccount">LAST NAME:</label> {customer.LastName}
                                <br />
                                <label className="labelAccount">EMAIL:</label> {customer.Email}
                                <br />
                                <label className="labelAccount">PASSWORD:</label> *****
                        </div>
                            : <div>
                                {!fieldsFull && <div className="noteRequired"> *all fields must be full</div>}
                                <label className="labelAccount">USERNAME:</label> {customer.UserName}
                                <br />
                                <label className="labelAccount">EMAIL:</label> {customer.Email}
                                <br />
                                <label className="labelAccount">FIRST NAME:</label><div className="inputAccount"><InputLabel type="text"
                                    name="FIRST NAME"
                                    field="FirstName"
                                    onChange={onInputChange}
                                    onBlur={() => onInputBlur(validateName, "FirstName")}
                                    hasError={errors.FirstName} /></div>
                                <br />
                                <label className="labelAccount">LAST NAME:</label><InputLabel type="text"
                                    name="LAST NAME"
                                    field="LastName"
                                    onChange={onInputChange}
                                    onBlur={() => onInputBlur(validateName, "LastName")}
                                    hasError={errors.LastName} />
                                <br />
                                <label className="labelAccount">PASSWORD:</label> <InputLabel type="password"
                                    name="PASSWORD"
                                    field="Password"
                                    onChange={onInputChange}
                                    onBlur={() => onInputBlur(validateZipCode, "Password")}
                                    hasError={errors.Password} />
                                <button className="buttonSave" onClick={save}>save</button>
                                <button className="buttonSave" onClick={() => setEditInformation(false)}>cancel</button>
                            </div>
                        }
                    </div>
                    <div className="accountDiv">
                        <h5 className="subtitleAccount">Characterization</h5>
                        {flavor !== "" && <div>{flavor}</div>}
                        {flavor === "" && <div>We know that with such a large range to choose from, it’s a difficult choice indeed.
                        <br />Choose a flavor and let us know who you are…</div>}
                    </div>
                    <div className="accountDiv">
                        <h5 className="subtitleAccount">Delete Account</h5>
                        <strong>Do you want to delete your account?</strong>
                        <br />
                        Deleting your account will delete all of your content and remove all data associated with it.
                        <br />
                        <button className="deleteButton" onClick={() => setDeleteModal(true)}>I want to delete my account</button>
                        {deleteModal && <ModalDeleteAccount modalShow={deleteModal} setModalShow={setDeleteModal} deletecustomer={Delete} />}
                    </div>
                </>
                    : <div className="accountDiv">
                        You do not have an account. you bet you are missing out...
                        <Link className="linkAccount" to="/login"><button className="loginButton">LOGIN</button></Link>
                        <Link className="linkAccount" to="/register"><button className="registerButton">REGISTER</button></Link>
                    </div>
                }
                 <div className="buttom">account</div>
            </div>
        </>
    )
}

export default withRouter(Account)