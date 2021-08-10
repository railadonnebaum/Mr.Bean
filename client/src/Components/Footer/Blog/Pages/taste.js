import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './taste.css';

function Taste() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);
    return (
        <>
            <h1 className="titleB">Blog</h1>
            <Link to="/blog" className="float-left linkPage"><i className="fas fa-angle-double-left">back to blog page</i></Link>
            <section className="titleTaste"></section>
            <div className="bodyTaste">
                <div className="divTaste">
                    You're in the office and you're dying for coffee. But getting up and preparing for yourself seems like too much of a hassle.
                    <br />
                    Then, out of the corner of your eye, you catch the poor man on duty getting up from the table to make one for himself. He does not want to make you coffee, he does not want to make anyone, but he knows you caught it.
                    <br />
                    You send him your most charming hitchhiker's smile, and then he asks the obvious question: "How much sugar"?
                    <br />
                    This widespread assumption that our favorite coffee flavor is set almost exclusively on the amount of sugar consumed in a drink is outrageous!
                    <br />
                    Therefore and accordingly, we opened the email and nurtured a thirst in search of the recipes that you yourself sent to us, to really check: "What's Your Flavor"?
                    <br />
                    After countless tastings and lots of coffee breaks, here are some selected and especially original recipes, a must try at home!
                </div>
                <h5 className="subTitleTaste">The alcohol corner</h5>
                <div className="divTaste">
                    The alcohol corner stars the "Irish Coffee" - a rich coffee with a twist of Irish whiskey. The adventurous combination of coffee and whiskey leaves the rest of the candidates in the alcohol parade far behind. The whiskey is a refreshing reinforcement, which flatters without overshadowing the unique taste of the coffee, and ensures a celebration of flavors on the tongue. A nice amount of Irish cream may be a substitute and will do the job too.
                </div>
                <div className="divTaste">
                    Ingredients:
                    <ul>
                        <li> Hot coffee</li>
                        <li>Irish whiskey</li>
                        <li>Sugar</li>
                        <li>Soft whipped cream</li>
                    </ul>
                    How to prepare: Everything to taste.
                    <br />
                    In short: A Celebration for the Small Hours of the Night.
                </div>
                <h5 className="subTitleTaste">The exotic</h5>
                <div className="divTaste">
                    In the dairy scene, "Coconut Coffee" is the fashionable concoction reminiscent of an exotic Caribbean vacation cocktail with a thick and rich coffee texture, based on coconut milk and pieces of fruit.
                </div>
                <div className="divTaste">
                    Ingredients (for 1 - 4 cups):
                    <ul>
                        <li>1 whole coconut</li>
                        <li>2 cups coconut milk</li>
                        <li>4 cups of strong coffee</li>
                        <li>1 tablespoon sugar</li>
                    </ul>
                    How to prepare: Drain the coconut milk into a small pot, bake the coconut in a high heat oven for about half an hour, then finely grind the fruit flesh. Add the ground fruit and milk to the coconut milk and heat over low heat until thick / creamy. Strain the liquid to remove the fruit pieces, add the stew to the hot coffee and sweeten.
                    <br />
                    In short: For coconut lovers and vacationers at Copa-Cabana only.
                    <br />
                </div>
                <div className="divTaste">
                    Another strong candidate is the "Ice Coffee": served in a mixed style, not shaken and mostly cool.
                    <br />
                    Highly recommended in the cold and dairy method and includes a huge variety of flavors and combinations.
                    <br />
                    Airy, light and refreshing, it is also possible to diet.
                    </div>
                <div className="divTaste">
                    Ingredients:
                        <ul>
                        <li>1 teaspoon of coffee</li>
                        <li>5 ice cubes</li>
                        <li>1 cup milk</li>
                        <li>Vanilla extracts / walnut syrup / chocolate</li>
                        <li>Some cream</li>
                        <li>Sweeteners to taste</li>
                    </ul>
                        How to prepare: It is advisable to melt the sugar and coffee with a little hot water, put in a blender, run until the ice is crushed and sip with pleasure.
                        <br />
                        In short: Just perfect for a hot summer day.
                    </div>
                <h5 className="subTitleTaste">No it's not Coca Cola</h5>
                <div className="divTaste">
                    Coffee with soda is the leading underdog. The interesting combination of soda with coffee proves to be a pleasant surprise in the familiar style of flavors. The soda together with the ice cream give the drink a lightness and a creative flight that you have never tasted before. To sum up in two words: bouncy and bubbly.
                </div>
                <div className="divTaste">
                    Ingredients (for 3-4 cups):
                    <ul>
                        <li>Strong coffee cups / chilled espresso</li>
                        <li> 1 cup milk</li>
                        <li>4 tablespoons coffee-flavored ice cream</li>
                        <li>3/4 cup carbonated water</li>
                        <li>1 teaspoon sugar</li>
                        <li>Whipped cream to taste</li>
                    </ul>
                    How to prepare: Mix the coffee, sugar and milk. Pour the mixture into four full cups so that it is half full.
                    Add a scoop of ice cream to each cup and fill the cup with carbonated water. Add whipped cream to taste.
                    <br />
                    In short: For Adventurers.
                </div>
                <h5 className="subTitleTaste">On a small fire</h5>
                <div className="divTaste">
                    Despite the creative innovation, there is still no coffee recipe that will defeat the popularity of “Black Coffee Finjan”, which excels in the folk style.
                    <br />
                    With a deep and strong taste - at its best in the reserve, on the beach with sleeping bags or on the gas at home.
                </div>
                <div className="divTaste">
                    Ingredients:
                    <ul>
                        <li>Turkish / ground black coffee</li>
                        <li>Water</li>
                        <li>Sugar (if you really have to)</li>
                    </ul>
                    How to prepare: Cook over low heat.
                    <br />
                    In short: a classic ending.
                </div>
            </div>
        </>
    )
}

export default Taste