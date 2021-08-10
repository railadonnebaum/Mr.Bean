import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import './amountOfCoffeeaDay.css';

function AmountOfCoffeeaDay() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);
    return (
        <>
            <h1 className="titleB">Blog</h1>
            <Link to="/blog" className="float-left linkPage"><i className="fas fa-angle-double-left">back to blog page</i></Link>
            <section className="titleAmountOfCoffeeaDay"></section>
            <div className="bodyAmountOfCoffeeaDay">
                <div className="divAmountOfCoffeeaDay">
                    During its 40 years of existence, the most senior nutrition committee in the United States (the "Dietary Advisory Committee") has refrained from commenting on coffee - for better or worse. However, the growing popularity of the drink, which was also reflected in many studies, as well as the growing anxiety of consumers about the possible dangers associated with its consumption - led the committee to come out with a clear recommendation: drink as much coffee as possible! (Up to a certain limit)
                    <br />
                    An official document released by the committee, made up of senior nutritionists, states that consuming 3-5 cups of coffee a day is considered "normal" and that there is clear evidence that consuming such an amount is "unrelated to long-term health risks in healthy people".
                    <br />
                    In fact, the panel argues, there is consistent evidence that drinking up to 5 glasses (or up to 400 milligrams of caffeine) a day has a number of health benefits, including a reduced risk of cardiovascular disease, type 2 diabetes and Parkinson's disease. "It is not certain that such an amount will make you healthier or stronger," the document reads, "but it probably won't hurt either. The health risks are minimal. "
                    <br />
                    Tom Berne, a nutritionist at Cornell University and a member of the committee, added: "I do not want to imply that coffee cures cancer - no one thinks so. But there is no proof that it causes an increased risk of getting sick, if the opposite is already true. "
                </div>
                <h5 className="subTitleAmountOfCoffeeaDay">Kids and caffeine do not go together</h5>
                <div className="divAmountOfCoffeeaDay">
                    The committee warned of increased caffeine consumption (more than 400 milligrams per day for adults and at a level not set for children and adolescents) in combination with large energy drinks. Information on the subject is still limited, they said, but it "suggests negative health effects, such as caffeine poisoning and cardiovascular events."
                    <br />
                    Experts added that the concern was greater when caffeine was consumed along with alcoholic beverages, and clarified that it is forbidden to consume, mix together or even drink nearby, energy drinks with high levels of caffeine along with alcoholic beverages. As a general rule, it is recommended that children and adolescents avoid or consume a limited amount of caffeinated beverages or products.
                    <br />
                    Also, in certain situations or due to medical problems, it is important to limit the level of daily caffeine consumption. Pregnant women, for example, are not advised to consume more than two cups of coffee a day.
                </div>
            </div>
        </>
    )
}

export default AmountOfCoffeeaDay