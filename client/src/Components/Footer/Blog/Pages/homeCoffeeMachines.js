import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import './homeCoffeeMachines.css';

function HomeCoffeeMachines() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);

    return (
        <>
            <h1 className="titleB">Blog</h1>
            <Link to="/blog" className="float-left linkPage"><i className="fas fa-angle-double-left">back to blog page</i></Link>
            <section className="titleCoffeeMachines">
                A quality coffee machine will make your morning pleasant with the help of a stimulating coffee aroma.
                <br />
                But do you want an automatic or semi-automatic machine? Coffee grinder? Capsules or beans?
            </section>
            <div className="bodyCoffeeMachines">
                <div className="divCoffeeMachines">
                    You wake up in the morning, look angrily at the alarm clock, and think about the day ahead of you and the variety of tasks you will have to complete.
                    <br />
                    You want to roll over and keep sleeping, and in your heart you know exactly what will make you happy now: a cup of steaming and fragrant coffee.
                    <br />
                    <strong>Listen to yourself: </strong>All that separates you from smiling mornings is the perfect coffee machine, which will fill your home with an evocative aroma. It's time to buy this coffee machine.
                    <br />
                    However, keep in mind that choosing the perfect coffee machine for you is no small matter. There are many models of coffee machines on the market, and even before you take out your wallet, you need to make sure that the machine you want to buy does indeed meet all your needs.
                    <br />
                    The following guide lists the main considerations to consider before you go to buy the machine that is just right for you.
                </div>
                <div className="divCoffeeMachines">
                    One of the main questions you need to answer when buying a coffee machine is: How much do you want to "mess" with the coffee machine.
                    <br />
                    Are you are the type who likes quality coffee without effort or you are one of those who like to hear the coffee grinding, examine the beans and adjust each step in the process yourself?
                    <br />
                    These are the three main types of coffee machines:
                </div>
                <h5 className="subTitleCoffeeMachines">Manual coffee machine</h5>
                <div className="divCoffeeMachines">
                    Machines that allow full control of the decision process and the pressure at which the water passes through the beans. These machines are just as expensive as they are nostalgic. In addition, manual machines require a lot of funding to operate them.
                    <br />
                    <strong>Bottom line: for those who are nostalgic coffee connoisseurs.</strong>
                </div>
                <h5 className="subTitleCoffeeMachines">Semi-automatic coffee machine</h5>
                <div className="divCoffeeMachines">
                    Designed for coffee consumers who want some control over the coffee process, but are not interested in babysitting the machine all the way.
                    <br />
                    Semi-automatic coffee machines create the water pressure automatically, however they do not grind the coffee and do not measure the amount of water poured into the glass.
                    <br />
                    The main advantage of semi-automatic coffee machines is their cheap price, which allows the fragrant coffee dream to peel off skin and tendons without breaking the bank.
                    <br />
                    <strong>Bottom line: for coffee consumers with a defined wallet and patience.</strong>
                </div>
                <h5 className="subTitleCoffeeMachines">Automatic coffee machine</h5>
                <div className="divCoffeeMachines">
                    This is a machine that does everything for you; From the pressure of the water passing through the beans, the amount of water poured into the glass to the whipping of the milk.
                    <br />
                    In other words, all you have to do is select the type of drink and press the appropriate button. Vending machines are more expensive, and their price increases as they are designed to satisfy more coffee consumers.
                    <br />
                    <strong>Bottom line: for coffee consumers in a hurry.</strong>
                </div>
            </div>
        </>
    )
}

export default HomeCoffeeMachines