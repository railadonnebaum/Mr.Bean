import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Item from './item'
import './cart.css'
function Cart(props) {
    const { itemList, addTOItem, removeItem, currentCost } = props;
   
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);
    return (
        <>
            <h1 className="headD">cart</h1>
            <div className="cart">
                {currentCost !== 0 ?
                    <div classNmae="container-fluid text-center d-none d-lg-block">
                        <div className="row">
                            <div className="col-10  col-lg-2 ">
                                <p className="text-uppercase  productTitle">product</p>
                            </div>
                            <div className="col-10  col-lg-2 ">
                                <p className="text-uppercase  priceTitle">price</p>
                            </div>
                            <div className="col-10  col-lg-2 ">
                                <p className="text-uppercase  quantityTitle">quantity</p>
                            </div>
                            <div className="col-10  col-lg-2" style={{ marginLeft: "30%" }}>
                                <p className="text-uppercase  totalTitle" >subtotal</p>
                            </div>
                        </div>
                        {itemList.map(item => {
                            return <Item item={item} addTOItem={addTOItem} removeItem={removeItem} />;
                        })}
                    </div>
                    : <>
                        <div className="cartEmpty">your cart is empty...</div>
                        <Link to="/" className="linkbutton"><button className="buttonReturnToShop">RETURN TO SHOP</button></Link>
                        <div className="buttom">cart</div></>}
                {currentCost !== 0 && <><div className="form-group"><hr /></div>
                    <div className="form-group" style={{ marginLeft: "70%" }}>
                        <div className="col-xs-12 block">
                            <strong className="contentSubTotalleft">Subtotal</strong>
                            <div class="pull-right contentright"><span>$</span><span>{currentCost}.00</span></div>
                        </div>
                        <div className="col-xs-12 block">
                            <strong className="contentShippingleft">Shipping</strong>
                            <div className="pull-right contentright"><span>$20.00</span></div>
                        </div>
                    </div>
                    <div className="form-group"><hr /></div>
                    <div className="form-group" style={{ marginLeft: "69%" }}>
                        <div className="col-xs-12 block">
                            <strong className="contentTotalleft">Order Total</strong>
                            <div className="pull-right contentright"><span>$</span><span>{currentCost + 20}.00</span></div>
                        </div>
                    </div>
                    <Link to="/check-out" role="button" className="linkbutton"><button className="buttonCheckout">PROCEED TO CHECKOUT </button></Link>
                    <div className="linkdivCart">
                        <Link to="/" className="linkCart">continue shopping</Link>
                    </div>
                </>}
            </div>
        </>
    );
};

export default Cart