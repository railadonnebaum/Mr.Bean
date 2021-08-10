import React, { useEffect, useState, } from 'react';
import { useLocation } from 'react-router';
import ModalPayment from '../Modals/modalPayment';
import {
    validateCCSecureNumber,
    validateCCNumber
}
    from './validCC';
import { getCustomerList,getCharacterList, getProducts, addToFileProducts, addToFileCustomer, sendEmail, addOrder } from '../../Service/service';
import './payment.css';

function Payment(props) {
    const { itemList, setItemList, setCurrentCost, customer, setItemListLength } = props;
    const location = useLocation()
    const cunsumer = location.state.cunsumer
    const [value, setValue] = useState({
        creditCardNumber: "",
        CVV: "",
        Month: "",
        Year: ""
    });

    const [errors, setError] = useState({
        creditCardNumber: false,
        CVV: false
    });

    const [AccessoriesList, setAccessoriesList] = useState([]);
    const [CoffeeCapsules, setCoffeeCapsules] = useState([]);
    const [CoffeeMachines, setCoffeeMachines] = useState([]);
    const [WholeBean, setWholeBean] = useState([]);
    const [CharacterList, setCharacterList] = useState([]);
    const [customerList, setCustomerList] = useState([]);
    async function fetchData() {
        let AccessoriesList = await getProducts('Accessories');
        setAccessoriesList(AccessoriesList);
        let CoffeeCapsules = await getProducts('CoffeeCapsules');
        setCoffeeCapsules(CoffeeCapsules);
        let CoffeeMachines = await getProducts('CoffeeMachines');
        setCoffeeMachines(CoffeeMachines);
        let WholeBean = await getProducts('WholeBean');
        setWholeBean(WholeBean);
        let customerList = await getCustomerList();
        setCustomerList(customerList);
        let CharacterList = await getCharacterList();
        setCharacterList(CharacterList);
    };

    const [fieldsFull, setFieldsFull] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchData();
        window.scrollTo({ top: 0, left: 0 })
    }, []);

    function onInputChange(field, event) {
        setValue({ ...value, [field]: event.target.value })
    };

    function onInputBlur(validationFn, field) {
        const isValid = validationFn(value[field]);
        setError({ ...errors, [field]: !isValid });
    };

    function addToCustomers(item) {
        if (item.category === "CoffeeCapsules") {
            for (let index = 0; index < 4; index++) {
                CharacterList.map((i => {
                        i.flavors.map(flavore => {
                            if (flavore === item.name) {
                                customerList.map(cust => {
                                    if (cust.Email === customer.Email) {
                                        const newCustomer = {
                                            UserName: customer.UserName,
                                            FirstName: customer.FirstName,
                                            LastName: customer.LastName,
                                            Email: customer.Email,
                                            Password: cust.Password,
                                            flavor: i.title,
                                            id: cust._id
                                        }
                                        addToFileCustomer(newCustomer)
                                        return;
                                    }
                                })
                            }
                        })
                    }))
            }
        }
    }

    function addtoFile() {
        let ProductList = {"Accessories":AccessoriesList,"CoffeeCapsules": CoffeeCapsules, "CoffeeMachines":CoffeeMachines,"WholeBean": WholeBean};
        let newOrder = []
        itemList?.forEach((item, index) => {
            let quantity, src;
            ProductList[item.category].forEach(prod => { if (prod._id === item.id) { quantity = prod.quantity; src = prod.src } })
            let newItem = {
                id: item.id,
                name: item.name,
                description: item.description,
                text: item.text,
                price: item.price,
                quantity: quantity - item.amount,
                src: src
            }
            addToFileProducts(newItem, item.category);
            newItem = {
                id: item.id,
                name: item.name,
                description: item.description,
                text: item.text,
                price: item.price,
                quantity: item.amount,
                src: src
            }
            newOrder.push(newItem)
            
            if (customer.UserName !== "") {
                addToCustomers(item);
            }
        })
        addOrder(newOrder)
    };

    function onclick() {
        const allValidate = !(errors.creditCardNumber ||
            errors.CVV)

        const required = value.creditCardNumber !== "" &&
            value.CVV !== "" &&
            value.Month !== "" &&
            value.Year !== ""
        const allValid = allValidate && required;
        setFieldsFull(required);
        if (allValid) {
            setShowModal(true);
            addtoFile();
            sendEmail({email:cunsumer.Email,name: cunsumer.FirstName+" "+ cunsumer.LastName},"purchase");
            setItemList([]);
            setCurrentCost(0);
            setItemListLength(0);
        }
    };

    return (
        <>
            <h1 className="head">payment</h1>
            <div className="container wrapper">
                <div className="cart-body">
                    <div className="panel panel-info">
                        <div className="panel-body paymentBody">
                            <div className="paymentTitle">
                                Enter Payment Information:
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Card Type:</strong></div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <select id="CreditCardType" name="CreditCardType" class="form-control">
                                        <option value="5">Visa</option>
                                        <option value="6">MasterCard</option>
                                        <option value="7">American Express</option>
                                        <option value="8">Discover</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Credit Card Number:</strong></div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <input type="text"
                                        className="form-control"
                                        name="car_number"
                                        onChange={(event) => onInputChange("creditCardNumber", event)}
                                        onBlur={() => onInputBlur(validateCCNumber, "creditCardNumber")} />
                                    {errors.creditCardNumber &&
                                        <div className="error">*Invalid credit card number </div>}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Card CVV:</strong></div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <input type="text"
                                        className="form-control"
                                        name="car_code"
                                        onChange={(event) => onInputChange("CVV", event)}
                                        onBlur={() => onInputBlur(validateCCSecureNumber, "CVV")} />
                                    {errors.CVV &&
                                        <div className="error">*Invalid CVV </div>}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <strong>Expiration Date</strong>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 selectPayment">
                                    <select className="form-control" onChange={(event) => onInputChange("Month", event)} >
                                        <option value="">Month</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 selectPayment">
                                    <select className="form-control" onChange={(event) => onInputChange("Year", event)}>
                                        <option value="">Year</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                        <option value="2029">2029</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <span>Pay secure using your credit card.</span>
                                </div>
                                <div className="col-md-12">
                                    <ul className="cards">
                                        <li className="visa hand">Visa</li>
                                        <li className="mastercard hand">MasterCard</li>
                                        <li className="amex hand">Amex</li>
                                    </ul>
                                </div>
                            </div>
                            {!fieldsFull && <div className="noteRequired"> *all fields must be full</div>}
                            <div className="form-group">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    {showModal && <ModalPayment modalShow={showModal} setModalShow={setShowModal} />}
                                    <button className="btn btn-submit-fix buttonPayment" onClick={onclick}>
                                        PROCESS
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment

