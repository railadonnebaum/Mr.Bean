import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import ReactImageMagnify from 'react-image-magnify';
import './Product.css';
function Product(props) {

  const { addItem } = props;
  const [newAmount, setAmount] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, []);

  function onInputChange(event) {
    setAmount(Number(event.target.value));
  };
  const location = useLocation()
  const url = window.location;
  const id = url.pathname.split('/')[2]
  const name = location.state.name
  const description = location.state.description
  const text = location.state.text
  const price = url.pathname.split('/')[3]
  const src = location.state.src
  const link = location.state.link
  const quantity = url.pathname.split('/')[4]
  const category = location.state.category
  let amount = location.state.amount;
  if (amount === undefined) {
    amount = 0;
  }
  return (
    <>
      <h1 className="headD">product</h1>
      <div className="row g-0 position-relative">
        <div className="col-md-6 ps-md-0 divProduct">
          <h5 className="mt-0 subTitleProduct">{name}</h5>
          <h6 className="mt-0 subTitleProduct">{description}</h6>
          <p>{text}</p>
          <h5 className="mt-0 subTitleProduct">${price}.00</h5>
            amount:
          <input className="amount" type="number" min="0" max={quantity} placeholder="1" defaultvalue="1" onChange={(event) => onInputChange(event)}></input>
          <div>
            {(!(quantity - amount <= 0) && (newAmount <= quantity - amount)) && <button className="buttonProduct" onClick={() => addItem({ id: id, name: name, description: description, text: text, price: price, amount: newAmount, src: src, category: category }, link)}>add to cart </button>}
            {(quantity - amount <= 0) && <button className="disabledButtonProduct" disabled="true">sorry, out of stock</button>}
            {!(quantity - amount <= 0) && (newAmount > quantity - amount) && <button className="disabledButtonProduct" disabled="true">Sorry, but the quantity you requested is missing from stock.</button>}
          </div>
        </div>
        <div className="col-md-6 mb-md-0 p-md-4">
          <div className="product-img">
            {(category === "CoffeeCapsules" || category === "WholeBean") ?
              <img src={src} className="w-100 " alt={name} />
              : <ReactImageMagnify {...{
                smallImage: {
                  alt: 'pic',
                  isFluidWidth: true,
                  src: src
                },
                largeImage: {
                  src: src,
                  width: 1200,
                  height: 1800
                }
              }} />
            }</div>
          </div>
      </div>
    </>
  )
}

export default Product









