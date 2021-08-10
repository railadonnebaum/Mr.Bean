import React from 'react'
import './item.css'
function Item(props) {
  const { item, addTOItem, removeItem } = props;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={item.src} className="img-fluid imgItem" alt="pet" />
      </div>
      <div className="col-10 mx-auto col-lg-2 detailsItem">
        {item.name}
      </div>
      <div className="col-10 mx-auto col-lg-2 detailsItem">
        <strong>{item.price}$</strong>
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 buttonItem">
        <div className="d-flex justify-content-center" >
          <span className="btn  mx-1"
            onClick={() => addTOItem(item, -1)} >-</span>
          <span className="btn  mx-1">{item.amount}</span>
          <span className="btn  mx-1" onClick={() => addTOItem(item, 1)}>+</span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 detailsItem">
        <div className="cart-icon" onClick={() => removeItem(item)} >
          <i className="fas fa-trash iconTrash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 detailsItem">
        <strong>{item.amount * item.price}$</strong>
      </div>
    </div>
  )
}

export default Item