import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './coffeeBreak.css';
function CoffeeBreak() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);
    
    return (
        <>
            <h1 className="titleB">Blog</h1>
            <Link to="/blog" className="float-left linkPage"><i className="fas fa-angle-double-left">back to blog page</i></Link>
            <section className="titleCoffeeBreak"></section>
            <div className="bodyCoffeeBreak">
                <div className="divCoffeeBreak">
                    Researchers at the London School have found that caffeine helps strengthen memory, it improves employee concentration and reduces the total number of possible mistakes. It has also been found that drinking coffee helps in reducing work accidents, especially those that occur at the end of a long work day. Another study by psychologists at the University of Bristol in the UK found that drinking coffee can increase anxiety and stress and impair teamwork, but, at the same time, there are people for whom coffee increases confidence and alertness.
                    <br />
                    Although the benefits of drinking coffee while at work are controversial, the prevailing opinion is that because caffeine is a stimulant, it helps employees be more alert, attentive, focused and productive. These benefits have led many employers to allow employees to take a coffee break, and have even provided them with a coffee corner with coffee machines of various types. The need for coffee breaks also came from the employees, who felt tired during the work day, and needed an incentive.
                </div>
                <h5 className="subTitleCoffeeBreak">What is a coffee break?</h5>
                <div className="divCoffeeBreak">
                    A coffee break is the stopping of the workflow for the purpose of refreshing forces by drinking coffee with a cake or other snack. Unlike other breaks that take place during the work day, a coffee break is often intended for the needs of social gatherings and a discussion of trivial issues that are not necessarily related to the nature of the work.
                </div>
                <h5 className="subTitleCoffeeBreak">Coffee breaks in the country</h5>
                <div className="divCoffeeBreak">
                    Although coffee breaks in Israel are not as popular as abroad, almost every workplace has a coffee machine, which usually provides a variety of hot drinks based on coffee or cocoa. There are also workplaces that own espresso machines or cappuccino machines, but these, are usually designed for senior employees, and are not accessible to everyone.
                </div>
            </div>
        </>
    )
}

export default CoffeeBreak