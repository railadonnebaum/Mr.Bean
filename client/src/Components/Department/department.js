import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getProducts } from '../../Service/service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './department.css';

function Department(props) {

    let link = window.location.pathname
    const { category, addItem, itemList } = props;

    const [ProductList, setProductList] = useState([])

    async function fetchData() {
        let ProductList = await getProducts(category);
        ProductList.forEach(Product => {
            Product.src = require('../../images/' + category + '/' + Product.src)
        });
        setProductList(ProductList);
    };

    useEffect(() => {
        fetchData()
        window.scrollTo({ top: 0, left: 0 })
    }, [props.category]);

    const notify = () => toast.dark("Your item is been added to your cart.");

    function onClick(Product) {
        addItem({
            id: Product._id,
            name: Product.name,
            description: Product.description,
            text: Product.text, price: Product.price,
            amount: 1,
            src: Product.src.default,
            category: category
        });
        setProductList(ProductList);
        notify();
    };

    var i = {}
    return (<>
        <h1 className="headD">department</h1>
        <div className="department">
            {ProductList.map(Product => {
                i = itemList.find(item => item.id === Product._id && item.name === Product.name) || {}
                return (<>
                    <Card style={{ width: '16rem' }}>
                        <Link to={{ state: { name: Product.name, description: Product.description, text: Product.text, src: Product.src.default, category: category, link: link, amount: i.amount }, pathname: `/product/${Product._id}/${Product.price}/${Product.quantity}` }}>
                            <Card.Img variant="top" src={Product.src.default} />
                        </Link>
                        <Card.Body className="cardbody">
                            <Card.Title className="cardTitle">{Product.name}</Card.Title>
                            {Product.description}
                            <Card.Text>${Product.price}.00</Card.Text>
                            {!(Product.quantity === 0 || Product.quantity - i.amount <= 0)
                                ? <button className="addtocartbutton" onClick={() => (onClick(Product))}>add to cart</button>
                                : <button className="addtocartbuttonOutOfStock" disabled="true">sorry, out of stock</button>}
                            <ToastContainer
                                position="bottom-left"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable={false}
                                pauseOnHover
                                msTransition="zoom"
                            />
                        </Card.Body>
                    </Card>
                </>)
            })}
            <div />
        </div>
    </>
    );
};

export default Department;


