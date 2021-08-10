import React,{useEffect} from 'react';
import Faq from "react-faq-component";
import { Link } from 'react-router-dom';
import './faq.css'

const ServiceAndSales = {
    title: "Service and sales",
    rows: [
        {
            title: "What is your delivery time?",
            content: `The  commitment time is up to 7 business days, soft in most cases enough for us up to 3 business days.`,
        },
        {
            title: "Can we collect the products ourselves?",
            content: "Yes. Self-collection can be done (by prior arrangement) from our warehouse. Please note: we are a chain store, which means that as of today, it does not have physical branches, so it is not possible to come and see the products and purchase on the spot. However, because our delivery time is extremely short, we help you avoid the need for another stop on the way or a special trip to the store to make a purchase. Just go to the site, purchase the product, and receive it the next day at home",
        },
        {
            title: "Do you provide warranty on the coffee machines you sell?",
            content: "Every product we have in stock comes from a leading importer or manufacturer in his field who has been proven to know how to provide the warranty and service in the best way. We will try to help you with our connections in case you run into problems.",
        },
    ],
};

const CoffeeBeansandCoffeeCapsules = {
    title: "coffee beans and coffee capsules",
    rows: [
        {
            title: "How should I store the coffee I bought?",
            content: "Probably the most common question is probably The contradiction between the two leading versions: to the question of whether to keep the coffee in the freezer, the unequivocal answer is  no!  But… (the reservations at the end of the answer) the coffee should be stored in a cool, dry place - the kitchen cabinet will do the job, after opening the package it should be stored in an airtight box - better Vacuum box for maximum freshness, with grinders and coffee and automatic espresso machines - the bean container is not an airtight box! Fill the desired amount for that moment only and store the rest in an airtight box.Regarding storage in the freezer, when storing coffee for a period of one month or more, storage in an airtight box (not a vacuum) in the freezer will extend the life of the coffee."

        },
        {
            title: "Is it true that capsules retain much more freshness than a blend of whole or ground coffee beans?",
            content: "In an original package that has not been opened, a mixture of coffee beans will keep it fresh for several months to a year, depending on the quality of the package. Usually, the packaging of the coffee blends that come from abroad is more opaque and durable and will last longer. Close to a year. The difference between coffee beans that come in whole doubles and are ground just before cooking should also be considered, and ground coffee that arrives already after grinding.Fol coffee is easier to maintain freshness over time than ground coffee.",
        },
        {
            title: "How do you still maintain maximum freshness of the coffee bean mixture?",
            content: "First, do not use more than the amount you want at that moment, as the bean container in your machine will not be sealed and the beans that will remain in it will lose their freshness until the next preparation. Storage in general should preferably be in a vacuum box in a cool, dry place. Freezer storage is not recommended unless you are storing for a period of time and then putting it out for daily use. Once you have removed the mixture from the freezer, do not return it there because the freshness will be damaged."
        },
        {
            title: "How many cups of coffee will a pound of coffee beans be enough for? And does it depend on the machine?",
            content: "One cup of coffee is worth more or less 7 grams of coffee, and this is true for any coffee machine you purchase. In a quick calculation this means about 140 cups of coffee per pound of beans. We have built a special calculator that will help you make quick calculations regarding your coffee consumption. He can compare costs between coffee machines and capsules and vending machines, calculate costs for using up to a year in your machine or you thought of purchasing and more. Click here to go to the calculator."
        },
    ],
};

const CoffeeMachines = {
    title: "Coffee Machines",
    rows: [
        {
            title: " Which is better? Capsule-based coffee machine or not?",
            content: `In terms of coffee quality - very high quality coffee can be produced in both types of machines. The relative advantage of the capsules is convenience in terms of cleanliness and operation, the disadvantage of the capsules is a high price and often manufacturers' limitations - Nespresso coffee machines for example can only use original Nespresso capsules or Nespresso compatible coffee capsules , as well as Lavaza Amodo coffee machine- Miu, which can also be used only with original capsules or Amodo-Miu-compatible coffee capsules , etc. A non-capsule-based coffee machine will fit any blended coffee bean mixture`,
        },
        {
            title: "Which coffee machine is right for my home?",
            content: `The choice of machine depends on the amount of coffee you consume, if you drink between 2-10 cups of coffee a day, it is recommended to purchase the ESPRESSO 1PLUS machine that is suitable for light home consumption. If the amount of coffee you drink per day exceeds 10 cups of espresso, we recommend purchasing the appropriate MZ espresso machine for a larger amount of cups.`,
        },
        {
            title: "Is it true that only mineral water should be used for a coffee machine?",
            content: " Not true and vice versa. The level of scale in mineral water is even higher than in tap water, so they are the most harmful water to use for a coffee machine. The healthiest water for a coffee machine is water filtered from Brita tanks."
        },
        {
            title: "Regular cleaning of the machine?",
            content: `In all coffee machines, before the first use in the morning, it is recommended to clean / rinse the aisles using an empty capsule attached to each machine. The capsule should be inserted into the capsule compartment, place an empty cup under the pouring opening and press one of the coffee buttons. This is basically how we clean the aisles of coffee grounds.`,
        },
    ],
};

const styles = {
    titleTextColor: "brown",
    rowTitleColor: "black",
    rowContentColor: 'grey',
    arrowColor: "brown",
};

function FAQ() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);

    return (
        <>
            <div className="faq">
                <h1 className="head">faq</h1>
                <label className="faqTitle">Home coffee machines are designed to give us the opportunity to drink real quality coffee at home as well. Indeed, more and more people are buying coffee machines and related products, and for more and more people making coffee is becoming simple and clear. Still, for anyone who has not yet chosen to purchase a coffee machine, or has not yet specialized in all the secrets of the matter, we have gathered here a selection of frequently asked questions, so that you too will have all the necessary information.</label>
                <Faq
                    data={ServiceAndSales}
                    styles={styles}

                />
                <br />
                <Faq
                    data={CoffeeBeansandCoffeeCapsules}
                    styles={styles}

                />
                <br />
                <Faq
                    data={CoffeeMachines}
                    styles={styles}
                />
                <Link to="/contact-us"> <div className="linkFAQ">ask a question </div></Link>
            </div>
        </>
    );
}

export default FAQ;