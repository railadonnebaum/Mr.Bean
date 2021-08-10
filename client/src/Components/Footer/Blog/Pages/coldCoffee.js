import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import './coldCoffee.css';
import { TiWeatherSnow } from "react-icons/ti"
function ColdCoffee() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);

    return (
        <>
            <h1 className="titleB">Blog</h1>
            <Link to="/blog" className="float-left linkPage"><i className="fas fa-angle-double-left">back to blog page</i></Link>
            <section className="titleColdCoffee">There is no doubt that the official and winning refreshment of the summer is the cold coffee. The ease involved in its preparation, as well as the daily availability of its ingredients are what have made it such a sought-after drink in the Israeli summer, in the personal home setting, in hospitality, and outdoors.</section>
            <div className="bodyColdCoffee">
                <div className="divColdCoffee">
                    Already in the spring, the few days of the bush prepare us for the coming summer.
                    <br />
                    Whether you live in the north of the country or in the south and of course in the center - it is likely that the heat and humidity will not miss you.
                    <br />
                    So how do you cope? Aside from the air conditioner, cold (and short!) showers or ice popsicle, there are more interesting options.
                    <br />
                    There is no doubt that the official and winning refreshment of the summer is the cold coffee <TiWeatherSnow />.
                    <br />
                    The ease involved in its preparation, as well as the daily availability of its ingredients are what have made it such a sought-after drink in the Israeli summer, in the personal home setting, in hospitality, and outdoors.
                    <br />
                    As with other types of beverages, iced coffee has become an entire beverage category. The different types refer to the raw materials, the quantities, the manner of preparation and serving.
                    <br />
                    The popularity of iced coffee is based on being a substitute for the familiar cup of hot coffee.
                    <br />
                    As such, it is suitable for all hours of the day - as a first drink in the morning, as a refreshing drink during the lunch break, with friends in the evening and even at night - for a cool drink in front of your favorite program.
                </div>
                <h5 className="subTitleColdCoffee">So how to make cold coffee?</h5>
                <div className="divColdCoffee">
                    The basic ingredients of cold coffee, like hot coffee, are the coffee extract (instant or espresso ) milk and sugar.
                    <br />
                    It is recommended to add about 15 teaspoons of sugar to about 15 ml of hot water and thus get sugar water, in order to facilitate the sweetening of the drink.
                    <br />
                    It is important to remember that many of us tend to drink sweet coffee that is sweeter than hot coffee.
                    <br />
                    Therefore, be sure to sweeten it properly, to ensure maximum enjoyment. However, you can add sucrose and thus avoid excessive amounts of sugar.
                    <br />
                    Following on from the basic ingredients, many cold coffee recipes use simple instant coffee, one that dissolves easily in cold water or cold milk.
                    <br />
                    However, we recommend investing in the coffee extract as well, and using quality coffee that you like. This way you can enjoy a cup of cold coffee as a suitable and worthy substitute for your familiar cup of coffee.
                    <br />
                    Finally, the milk may be a special milk for coffee, but you can use low-fat milk and get similar and low-fat results.
                    <br />
                    In any case, it is recommended to shake the milk carton well before pouring it, thus ensuring volume for the milk.
                </div>
                <h5 className="subTitleColdCoffee">A (classic) recipe for iced coffee</h5>
                <div className="divColdCoffee">
                    One of my classic and favorite recipes is the “ice cubes” iced coffee.
                    <br />
                    Originally referring to coffee extract to which cold milk and sugar water are added and finally whole ice cubes are added to it.
                    <br />
                    From this stage there are different and creative developments. The first is to process the drink in a blender until an iced coffee drink is obtained.
                    <br />
                    The second, and most interesting, development came to me after I was looking for a way to avoid the changing
                            taste sometimes caused to iced coffee after the ice cubes melt.
                    <br />
                    And here came the next lovely offer - just freeze the contents of our favorite cup of coffee into an ice cube tray and add them to the morning for half a cup of hot and regular coffee. The result is cold and great coffee, in the familiar taste.
                    <br />
                    Other ways to make iced coffee is to take the basic ingredients and question their necessity.
                    <br />
                    One is to upgrade the cold coffee by adding sweet cream. Adding a small amount, like a teaspoon, sweetens the drink and gives it a softer texture.
                    <br />
                    Another worthwhile addition is a shot of alcohol, such as Irish cream. Irish Cream is known as a great addition to dairy drinks such as coffee and chocolate.
                    <br />
                    Here, too, it is recommended to use an amount of about 30 ml per glass.
                    <br />
                    Even a smaller amount will give the drink a delicate and interesting aroma.
                    <br />
                    Finally, we will note the existence of absolute alternatives to the raw materials for making cold coffee.
                    <br />
                    Such drinks offer the replacement of milk with soy milk, the use of artificial and dietary sugar and are even based on coffee substitutes such as cereal coffee (chico powder).
                    <br />
                    These alternatives are important for those of us who are sensitive to milk and its products or alternatively, to caffeine.
                </div>
            </div>
        </>
    )
}

export default ColdCoffee