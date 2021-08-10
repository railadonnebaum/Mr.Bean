import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Account from '../Account/account';
import Register from '../Account/Register/register';
import Login from '../Account/Login/login';
import Department from '../Department/department';
import Product from '../Product/product';
import Cart from '../Cart/cart';
import Checkout from '../CheckOut/checkOut';
import Payment from '../Payment/payment';
import About from '../About/About'
import ReturnsExchange from '../Footer/ReturnsAndExchanges/returnsAndExchanges'
import DeliveryInformation from '../Footer/DeliveryInformation/deliveryInformation'
import TermsCondition from '../Footer/Terms/terms'
import Blog from '../Footer/Blog/blog'
import SiteMap from '../Footer/SiteMap/siteMap';
import FAQ from '../FAQ/faq';
import ContactUs from '../ContactUs/ContactUs';
import Idea from '../Idea/idea';
import Opinion from '../Opinion/opinion';
import RecommendedTime4Coffee from '../Footer/Blog/Pages/Recommended to drink coffee'
import ColdCoffee from '../Footer/Blog/Pages/coldCoffee'
import HomeCoffeeMachines from '../Footer/Blog/Pages/homeCoffeeMachines'
import Facts from '../Footer/Blog/Pages/Facts'
import AmountOfCoffeeaDay from '../Footer/Blog/Pages/amountOfCoffeeaDay'
import Capsules from '../Footer/Blog/Pages/capsules'
import CoffeeBreak from '../Footer/Blog/Pages/coffeeBreak'
import CoffeeIsHealthy from '../Footer/Blog/Pages/coffeeIsHealthy'
import IceCoffee from '../Footer/Blog/Pages/iceCoffee';
import Secrets from '../Footer/Blog/Pages/secrets';
import Taste from '../Footer/Blog/Pages/taste';
import Flavors from '../Footer/Blog/Pages/flavors'
import Error from '../Error/error';

function MyRouter(props) {
  const { customer, setCustomer, currentCost, itemList, addItem, addTOItem, removeItem, setItemList, setCurrentCost, setItemListLength } = props;
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/account">
        <Account key="account" customer={customer} setCustomer={setCustomer} setItemList={setItemList} setCurrentCost={setCurrentCost} setItemListLength={setItemListLength}/>
      </Route>
      <Route path="/register">
        <Register key="register" setCustomer={setCustomer} />
      </Route>
      <Route path="/login">
        <Login key="login" setCustomer={setCustomer} />
      </Route>
      <Route path="/coffee-capsules">
        <Department key="coffee-capsules" category="CoffeeCapsules" addItem={addItem} itemList={itemList} />
      </Route>
      <Route path="/coffee-machines">
        <Department key="coffee-machines" category="CoffeeMachines" addItem={addItem} itemList={itemList} />
      </Route>
      <Route path="/whole-bean">
        <Department key="whole-bean" category="WholeBean" addItem={addItem} itemList={itemList} />
      </Route>
      <Route path="/accessories">
        <Department key="accessories" category="Accessories" addItem={addItem} itemList={itemList} />
      </Route>
      <Route path="/product">
        <Product key="product" addItem={addItem} />
      </Route>
      <Route path="/cart">
        <Cart key="cart" itemList={itemList} addTOItem={addTOItem} removeItem={removeItem} currentCost={currentCost} />
      </Route>
      <Route path="/check-out">
        <Checkout key="checkout" itemList={itemList} currentCost={currentCost} customer={customer} setCurrentCost={setCurrentCost} setItemList={setItemList} setItemListLength={setItemListLength}/>
      </Route>
      <Route path="/payment">
        <Payment key="payment" itemList={itemList} setItemList={setItemList} setCurrentCost={setCurrentCost} customer={customer} setItemListLength={setItemListLength} />
      </Route>
      <Route path="/about">
        <About key="about" />
      </Route>
      <Route path="/returns-and-exchange">
        <ReturnsExchange key="ReturnsExchange" />
      </Route>
      <Route path="/delivery-information">
        <DeliveryInformation key="deliveryInformation" />
      </Route>
      <Route path="/terms">
        <TermsCondition key="terms" />
      </Route>
      <Route path="/blog">
        <Blog key="blog" />
      </Route>
      <Route path="/site-map">
        <SiteMap key="siteMap" />
      </Route>
      <Route path="/faq">
        <FAQ key="faq" />
      </Route>
      <Route path="/contact-us">
        <ContactUs key="contactus" />
      </Route>
      <Route path="/idea">
        <Idea key="idea" />
      </Route>
      <Route path="/opinion">
        <Opinion key="opinion" />
      </Route>
      <Route path="/recommended-time-for-coffee">
        <RecommendedTime4Coffee key="coffeeTime" />
      </Route>
      <Route path="/cold-coffee">
        <ColdCoffee key="coldCoffee" />
      </Route>
      <Route path="/home-coffee-machines">
        <HomeCoffeeMachines key="homeCoffeeMachines" />
      </Route>
      <Route path="/facts">
        <Facts key="facts" />
      </Route>
      <Route path="/amount-coffee-a-day">
        <AmountOfCoffeeaDay key="facts" />
      </Route>
      <Route path="/capsules">
        <Capsules key="capsules" />
      </Route>
      <Route path="/coffee-break">
        <CoffeeBreak key="coffeeBreak" />
      </Route>
      <Route path="/coffee-is-healthy">
        <CoffeeIsHealthy key="coffeeIsHealthy" />
      </Route>
      <Route path="/ice-coffee">
        <IceCoffee key="iceCoffee" />
      </Route>
      <Route path="/secrets">
        <Secrets key="secrets" />
      </Route>
      <Route path="/flavors">
        <Flavors key="flavors" />
      </Route>
      <Route path="/taste">
        <Taste key="taste" />
      </Route>
      <Route component={Error}></Route>
    </Switch>
  )
}

export default MyRouter