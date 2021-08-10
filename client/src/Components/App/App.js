import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import MyRouter from '../Router/router'
import Navbartop from '../Nav/nav'
import Footer from '../Footer/footer'
import ScrollToTop from '../ScrollToTop/scrollToTop'
import { Widget, addResponseMessage } from 'react-chat-widget';
import logo from '../../images/backgrounds/logo.jpg'
import 'react-chat-widget/lib/styles.css';
import './App.css';
function App(props) {

  useEffect(() => {
    addResponseMessage('We are currently busy, helping other customers. Please enjoy your coffee while you wait...');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    addResponseMessage("sorry, just a moment...");
  };

  const { history } = props;
  const [itemList, setItemList] = useState([]);
  const [currentCost, setCurrentCost] = useState(0);
  const [itemListLength, setItemListLength] = useState(0);
  const [customer, setCustomer] = useState(
    localStorage.getItem('customer') !== null ?
       JSON.parse(localStorage.getItem('customer')):
    {UserName: "",
    FirstName: "",
    LastName: "",
    Email: ""}
  )

  function addItem(newProduct, link) {
    if (newProduct["amount"] === 0) {
      history.push(link)
      return
    }
    for (let i = 0; i < itemList.length; i++) {
      if (itemList[i]["id"] === newProduct["id"] && itemList[i].category === newProduct.category) {
        setCurrentCost(currentCost + newProduct["amount"] * newProduct["price"])
        itemList[i]["amount"] += Number(newProduct.amount);
        setItemListLength(itemListLength + newProduct["amount"]);
        history.push(link)
        return
      }
    }
    setItemList([...itemList, newProduct]);
    setCurrentCost(currentCost + (newProduct.price * newProduct.amount));
    setItemListLength(itemListLength + newProduct["amount"]);
    history.push(link)
  };

  function addTOItem(item, amount) {
    for (let i = 0; i < itemList.length; i++) {
      if (itemList[i]["id"] === item["id"] && itemList[i].category === item.category) {
        if (itemList[i]["amount"] === 1 && amount === (-1)) {
          removeItem(item)
        }
        setCurrentCost(currentCost + item["price"] * amount);
        setItemListLength(itemListLength + amount);
        itemList[i]["amount"] += Number(amount);
        return
      }
    }
  }

  function removeItem(item) {
    setItemList(itemList.filter(_item => { if (item.id !== _item.id || item.category !== _item.category) return true; setCurrentCost(currentCost - (item.amount * item.price)); setItemListLength(itemListLength - item.amount); return false }))
  }
 
  return (
    <div>
      <Navbartop currentCost={currentCost} itemListLength={itemListLength} setItemListLength={setItemListLength} customer={customer} setCustomer={setCustomer} setItemList={setItemList} setCurrentCost={setCurrentCost} />
      <MyRouter customer={customer} setCustomer={setCustomer} currentCost={currentCost} itemList={itemList} addItem={addItem} addTOItem={addTOItem} removeItem={removeItem} setItemList={setItemList} setCurrentCost={setCurrentCost} setItemListLength={setItemListLength}/>
      <ScrollToTop />
      <Footer />
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Wellcome to Mr. Bean"
        subtitle=""
        profileAvatar={logo}
        titleAvatar={logo}
      />
    </div>
  );
}

export default withRouter(App);

