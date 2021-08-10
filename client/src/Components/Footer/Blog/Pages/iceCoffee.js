import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import './iceCoffee.css';
function IceCoffee() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);
    return (
        <>
            <h1 className="titleB">Blog</h1>
            <Link to="/blog" className="float-left linkPage"><i className="fas fa-angle-double-left">back to blog page</i></Link>
            <section className="titleIceCoffee"></section>
            <div className="bodyIceCoffee">
                <div className="divCapsules">
                    Summer has arrived and with it the cold coffee. From every corner, in cafes, bars, restaurants and even explosions, we see large and clear plastic cups, filled with one of the most delicious and refreshing drinks - iced coffee.
                    <br />
                    Iced coffee, as the name implies, is cold coffee. It is made from simple ingredients like milk, sugar, water (crushed ice), coffee of course and sometimes also cream and other flavor enhancers. It can be found in a variety of flavors and textures. It can be purchased at large coffee chains and small coffee corners. You can buy powder for making in the office and even, you can make it at home, so just before we give the recipe for amazing iced coffee , some history.
                </div>
                <h5 className="subTitleIceCoffee">Iced Coffee - A Little History</h5>
                <div className="divIceCoffee">
                    Today’s iced coffee, unlike its coffee family and instant coffee, has no fascinating history of stories coming from the ends of the earth and no rich culture revolving around it. Iced coffee was created, perhaps by mistake, from the need of coffee and instant coffee lovers to enjoy its taste and aroma even in the hot and humid summer.
                    <br />
                    Some will say that many years ago, they did not call Ace Coffee by its current name, but called it "Granita". The "granita" was actually an Italian dessert of Sicilian origin, made from coffee beans combined with fruit juices or sugar syrup. Sounds a bit absurd, but it's good to know that iced coffee is so common that it has some long-standing Italian heritage.
                </div>
                <h5 className="subTitleIceCoffee">
                    The question of the day: Ice coffee - fattening or not?
                </h5>
                <div className="divIceCoffee">
                    One of the most common innovations recently is Ice Coffee Lite or Ice Coffee Diet. You must have come across them while wandering through the various cafes. Is there such a thing as low calorie iced coffee and how many calories are in regular iced coffee? In studies conducted in recent years, it has been found that iced coffee drinks contain a large number of calories, which are sometimes equivalent to a full meal. In coffee shop chains, it has been found that the caloric value of regular iced coffee ranges from 76 to 106 calories per 100 ml, which is between 340 calories and 480 calories per 450 ml glass (the average size usually provided). Abroad, by the way, you can find iced coffee drinks with a higher caloric value, up to 560 calories.
                    <br />
                    Ice Coffee Lite, on the other hand, is sold in coffee shop chains where it contains between 11 and 100 calories per 100 ml, which is between 50 calories and 450 calories per 450 ml glass. You got it right, how is it possible to have iced coffee lite with 400 calories and more? In studies done in coffee chains across the country, it has been found that there are many iced drinks that are equal to or close in caloric value to regular iced coffee drinks. We do not want to mention in this article the names of coffee shop chains, we only recommend that you ask and find out before you try and taste.
                </div>
                <h5 className="subTitleIceCoffee">Ice coffee - independent preparation</h5>
                <div className="divIceCoffee">
                    The most wonderful thing about iced coffee drinks is that they can be prepared at home or in the office, easily and quickly, without getting tangled up and messing with an unclear number of calories.
                    <br />
                    There are several recipes for independent preparation, here are the common and simple ones:
                    <br />
                    Ingredients: 1.5 teaspoons of coffee or instant coffee, 2.5 teaspoons of sugar, a drop of boiling water, cold milk, ice cubes, blender.
                    <br />
                    Preparation: Mix the coffee and sugar together with a little boiling water until completely dissolved. Add half a cup of cold milk and about ten ice cubes, put in a blender and mix in small pulses.
                    <br />
                    To enrich the taste you can add chocolate cubes, Irish cream, a scoop of ice cream or sweet cream. You can, by the way, also buy iced coffee powders, which all you have to do is add cold milk or milk and crushed ice cubes. The drink can be made low-calorie by using an artificial sweetener instead of sugar and 1% milk that can be frozen as ice cubes.
                    <br />
                    Enjoy!
                </div>
            </div>
        </>
    )
}

export default IceCoffee