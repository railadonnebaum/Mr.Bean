import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBlogPic } from '../../../Service/service';
import './blog.css';

function Blog() {

   const [PicList, setPicList] = useState([])

   async function fetchData() {
      let PicList = await getBlogPic();
      let pictureList = PicList.map(Picture => {
         let src = require('../../../images/Blog/' + Picture)
         return src.default;
      });
      setPicList(pictureList);
   };
   useEffect(() => {
      fetchData()
      window.scrollTo({ top: 0, left: 0 })
   }, []);

   return (
      <>
         <h1 className="headD">Blog</h1>
         <div class="row bodyBlog">
            <div className="col-md-4">
               <div className="card">
                  <img className="card-img-top" src={PicList[0]} alt="Card" />
                  <div className="card-body">
                     <h5 className="card-title border-bottom pb-3">The world of capsules</h5>
                     <p className="card-text">More and more people are realizing that quality coffee can improve their day considerably. However, most of us also know that in our busy agenda there is not always time to grind the coffee, put in ...</p>
                     <Link to="/capsules" className="float-right linkBlog readMoreBlog">Read more <i className="fas fa-angle-double-right"></i></Link>
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <div className="card">
                  <img className="card-img-top" src={PicList[1]} alt="Card" />
                  <div className="card-body">
                     <h5 className="card-title border-bottom pb-3">How to make cold coffee?</h5>
                     <p className="card-text">There is no doubt that the official and winning refreshment of the summer is the cold coffee. The ease involved in its preparation, as well as the daily availability of its ingredients are what made it such a sought-after drink in the Israeli summer, ...</p>
                     <Link to="/cold-coffee" className="float-right linkBlog">Read more <i class="fas fa-angle-double-right"></i></Link>
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <div className="card">
                  <img className="card-img-top" src={PicList[2]} alt="Card" />
                  <div className="card-body">
                     <h5 className="card-title border-bottom pb-3">About home coffee machines…</h5>
                     <p className="card-text">A quality coffee machine will make your morning pleasant with the help of a stimulating coffee aroma. But do you want an automatic or semi-automatic machine? Coffee grinder? Capsules or beans? </p>
                     <Link to="/home-coffee-machines" className="float-right linkBlog">Read more <i className="fas fa-angle-double-right"></i></Link>
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <div className="card">
                  <img className="card-img-top" src={PicList[3]} alt="Card" />
                  <div className="card-body">
                     <h5 className="card-title border-bottom pb-3">Facts about coffee you may not have known</h5>
                     <p className="card-text">The coffee accompanies us all throughout the day and there are those who will not be able to function at all throughout the day without a few glasses of it. So what is this coffee that we can not do without and what interesting information is there that you should know about?</p>
                     <Link to="/facts" className="float-right linkBlog">Read more <i className="fas fa-angle-double-right"></i></Link>
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <div className="card">
                  <img className="card-img-top" src={PicList[4]} alt="Card" />
                  <div className="card-body">
                     <h5 className="card-title border-bottom pb-3">How much coffee should you drink a day?</h5>
                     <p className="card-text">During its 40 years of existence, the most senior committee on nutrition in the United States (the "Advisory Committee on Nutritional Guidelines") has refrained from commenting on coffee - for better or worse. But the popularity ...</p>
                     <Link to="/amount-coffee-a-day" className="float-right readMoreBlog linkBlog">Read more <i className="fas fa-angle-double-right"></i></Link>
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <div className="card">
                  <img className="card-img-top" src={PicList[5]} alt="Card" />
                  <div className="card-body">
                     <h5 className="card-title border-bottom pb-3">Is coffee unhealthy? Rather the opposite!</h5>
                     <p className="card-text">There is no drink in the world that has been so researched by scientists, in search of its possible effects on the body, and in this context, there is no drink that has received so much attention from the media. Coffee, and its ingredients ...</p>
                     <Link to="/coffee-is-healthy" className="float-right readMoreBlog linkBlog">Read more <i className="fas fa-angle-double-right"></i></Link>
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <div className="card">
                  <img className="card-img-top" src={PicList[6]} alt="Card" />
                  <div className="card-body">
                     <h5 className="card-title border-bottom pb-3">When is it recommended to drink coffee?</h5>
                     <p className="card-text">Apart from being a great pleasure - coffee also has quite a few practical benefits...</p>
                     <Link to="/recommended-time-for-coffee" className="float-right readMoreBlog linkBlog">Read more<i class="fas fa-angle-double-right"></i></Link>
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <div className="card">
                  <img className="card-img-top" src={PicList[7]} alt="Card" />
                  <div className="card-body">
                     <h5 className="card-title border-bottom pb-3">Going out for a coffee break - coffee is not just an excuse</h5>
                     <p className="card-text">Researchers at the London School have found that caffeine helps strengthen memory, it improves employee concentration and reduces the total number of possible mistakes. </p>
                     <Link to="/coffee-break" className="float-right linkBlog">Read more <i className="fas fa-angle-double-right"></i></Link>
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <div className="card">
                  <img className="card-img-top" src={PicList[8]} alt="Card" />
                  <div className="card-body">
                     <h5 className="card-title border-bottom pb-3">Iced Coffee - Everything You Wanted to Know</h5>
                     <p className="card-text">Summer has arrived and with it the cold coffee. From every corner, in cafes, bars, restaurants and even explosions, large and clear plastic cups, filled with one of the most delicious drinks, look at us ...</p>
                     <Link to="/ice-coffee" className="float-right linkBlog">Read more <i className="fas fa-angle-double-right"></i></Link>
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <div className="card">
                  <img className="card-img-top" src={PicList[9]} alt="Card" />
                  <div className="card-body">
                     <h5 className="card-title border-bottom pb-3">The best kept secrets of making coffee</h5>
                     <p className="card-text">Coffee is one of the most popular drinks in the world. Everyone likes to drink it but not everyone has similar preferences. Some like it weak, and others like strong. </p>
                     <Link to="/secrets" className="float-right readMoreBlog linkBlog">Read more <i className="fas fa-angle-double-right"></i></Link>
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <div className="card">
                  <img className="card-img-top" src={PicList[10]} alt="Card" />
                  <div className="card-body">
                     <h5 className="card-title border-bottom pb-3">Everyone and his taste - coffee beans and flavors</h5>
                     <p className="card-text">Similar to Shakespeare's well-known saying that beauty is in the eye of the beholder, so is the taste of coffee on the palate of the one who loves it. Indeed, everyone can choose the most delicious coffee for him since ...</p>
                     <Link to="/flavors" className="float-right linkBlog">Read more <i className="fas fa-angle-double-right"></i></Link>
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <div className="card">
                  <img className="card-img-top" src={PicList[11]} alt="Card" />
                  <div className="card-body">
                     <h5 className="card-title border-bottom pb-3">Coffee - what is your taste?</h5>
                     <p className="card-text">You're in the office and you're dying for coffee. But getting up and preparing for yourself seems like too much of a hassle. Then, out of the corner of your eye, you catch the poor man on duty getting up from the table to make one for himself. he is not...</p>
                     <Link to="/taste" className="float-right linkBlog">Read more <i className="fas fa-angle-double-right"></i></Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Blog


