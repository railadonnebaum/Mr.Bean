import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './secrets.css';
function Secrets() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);
    return (
        <>
            <h1 className="titleB">Blog</h1>
            <Link to="/blog" className="float-left linkPage"><i className="fas fa-angle-double-left">back to blog page</i></Link>
            <section className="titleSecrets"></section>
            <div className="bodySecrets">
                <div className="divSecrets">
                    Coffee is one of the most popular drinks in the world. Everyone likes to drink it but not everyone has similar preferences. Some like it weak, and others like strong. It does not matter what your requirement is - to satisfy it you need to know how to make coffee. Or at least hire someone who knew how to make it for you. A second condition for making quality coffee, apart from talent, is to own a quality coffee machine. Gone are the days when coffee machines were the exclusive domain of restaurants and cafes. Today they can also be found in many private homes and offices. There are small machines, capable of producing coffee for a small number of cups, and industrial machines which are capable of satisfying the coffee needs of a large number of people. Thanks to a few simple tips that we will offer you in this article, you will find that you too can become certified coffee makers and impress your friends at home or at work with a quality cup of coffee.
                </div>
                <h5 className="subTitleSecrets">Tips for making coffee with an espresso machine</h5>
                <div className="divSecrets">
                    Making an espresso is the basic purpose of any machine. One serving is called a short espresso, and a double serving - a double espresso. You can "extend" a dish with boiling water, but it is still important to observe the rule that espresso is served in a small cup of espresso.
                    <br />
                    Using the espresso machine you can make the popular drink cappuccino. Simply pour an equal amount of espresso extract, milk heated using the steamer (vaporizer) of the machine and frothed milk. It is recommended to add coffee beans and cocoa powder or cinnamon for seasoning and decoration. Cappuccino is usually served in a large cup.
                    <br />
                    Latte coffee, or as it is called in our places - 'inverted coffee', is an espresso mixed with heated milk.
                    <br />
                    Americano is prepared simply by espresso extract and hot water, in other words, it can simply be called 'very long espresso'. It is served in a large glass and is intended for people for whom the espresso taste is too strong. The nickname 'Americano' comes from the similarity between this drink and the American filter coffee, which is produced in a similar way.
                    <br />
                    Macchiato is simply an espresso with a touch of frothed milk on top. It can be served as a short or long macchiato. This is a very simple drink to prepare but nevertheless looks very elegant. Serve macchiato to guests and you will immediately look like a certified coffee maker.
                    <br />
                    Latte macchiato is the opposite of the short macchiato. This is a large glass, filled with frothed milk and the espresso extract is added on top. The ratio of coffee to milk is very similar to the ratio in the preparation of instant coffee and the drink is intended for people who like their coffee very weak.
                </div>
                <h5 className="subTitleSecrets">
                    More general tips
                </h5>
                <div className="divSecrets">
                    <ul>
                        <li>Coffee beans must be ground on the spot before preparing the drink, otherwise they lose their aroma and taste. Grinding the beans must continue for a limited time of only 25-30 seconds.</li>
                        <li> The water temperature should be stable, around 92-96 degrees.</li>
                        <li> The pressure of the steam on the coffee should be between 9 and 10 atmospheres.</li>
                        <li> Preparation time of two cups at a time will be between 25-30 seconds only.</li>
                        <li> It is very advisable to heat the espresso cup before pouring.</li>
                        <li>It is very important to clean the machine on a regular basis. An unclean machine will produce a cloudy flavored coffee.</li>
                        <li> A serving of coffee is measured in volume of 25-30 ml.</li>
                        <li>Good coffee is measured by the karma - the foam created by evaporating the ground beans. The color of the karma should be reddish-brown and form a thin layer over the coffee.</li>
                    </ul>
                </div>
                <div className="divSecrets">
                    At the end of the day you will find that playing with the coffee machine and discovering new recipes will become an addiction in itself. Home coffee machines promise innovations and patents, which increase quality and comfort. In this article we have mentioned only basic tips for those whose machine is still new in their home. In time you will find that the real pleasure is to keep experimenting on your own, until you find the perfect recipe for the perfect coffee.
                </div>
            </div>
        </>
    )
}

export default Secrets