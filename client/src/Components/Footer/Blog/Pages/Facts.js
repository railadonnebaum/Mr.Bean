import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import './facts.css';

function Facts() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);
    return (
        <>
            <h1 className="titleB">Blog</h1>
            <Link to="/blog" className="float-left linkPage"><i className="fas fa-angle-double-left">back to blog page</i></Link>
            <section className="titleFacts">Facts about coffee you may not have known</section>
            <div className="bodyFacts">
                <div className="divFacts">
                    There are those who drink it with a lot of milk and foam and there are those who prefer tiny cups in high concentration but one fact can not be argued - coffee accompanies us all throughout the day and there are those who can not function throughout the day without several cups of it - after all it is coffee! So many types of coffee and options to sip from, it is not really surprising that it is a cult moment for quite a few people and moreover - there is no shortage of people who without drinking coffee as they like and during normal hours - their productivity drops significantly and they are completely unable to function normally. So what is this coffee that we can not do without and what interesting information is there that you should know about?
                </div>
                <h5 className="subTitleFacts">Interesting facts about coffee</h5>
                <div className="divFacts">
                    <ul>
                        <li>Only two countries are responsible for the global coffee supply - Brazil and Colombia. There are other countries that supply coffee to other countries around the world but the massive and main supply is provided by only these two.</li>
                        <li>In the process of removing the caffeine from the coffee beans, re-use is performed - the caffeine is stored and packaged and then will take a significant part in the pharmaceutical and medical preparations industry designed for various needs.</li>
                        <li>The peak of coffee consumption per day is currently attributed to Honora de Balzac, a 19th-century French writer who is said to have drunk 40 cups of coffee daily!</li>
                        <li>In the professional agricultural world, coffee beans are considered one of the sub-varieties of red blueberries.</li>
                        <li>Once a coffee bean tree has been planted, it will take about 3-4 years for it to reach maturity and begin to bear fruit. In any growing season and given the right conditions, it will be possible to enjoy up to 1 kilo of coffee beans from the same tree.</li>
                        <li>The word espresso in Latin means by force. That is - coffee is created by applying great pressure on the beans that have just been ground and thus espresso coffee is obtained, hence its name.</li>
                        <li>Coffee can also be poisonous! The human body is unable to handle over 70 doses of caffeine in one day.</li>
                        <li>Do you drink coffee with milk? Know that milk significantly reduces the effect of caffeine. Anyone who wonders why he does not feel more alert after drinking coffee with milk - here is the answer.</li>
                    </ul>
                </div>
                <div className="divFacts">
                    There is no doubt that coffee is an integral part of the daily routine of almost every adult. There is no way to be in one place or another and not find a way to drink coffee just the way you like and as the body enjoys and is used to consuming. Many people attach great importance to the strength of the coffee, its drinking temperature, the cup in which it is served and of course other toppings or flavors - plain or soy-based milk, a sweetener like sugar or sucrose, cocoa powder or cinnamon and more. There is no doubt that the minutes of drinking coffee have become actions that simulate refueling for the vehicles and the coffee fuels the human body just as much.
                </div>
            </div>
        </>
    )
}

export default Facts