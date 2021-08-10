import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Recommended to drink coffee.css';
function RecommendedTime4Coffee() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);
    return (
        <>
            <h1 className="titleB">Blog</h1>
            <Link to="/blog" className="float-left linkPage"><i className="fas fa-angle-double-left">back to blog page</i></Link>
            <section className="titleCoffeeTime">
                Apart from being a great pleasure - coffee also has quite a few practical benefits.
                <br />
                When is it best to drink coffee and at what time is it most helpful?</section>
            <div className="bodyCoffeeTime">
                <div className="divCoffeeTime">
                    We like to drink it all the time, but what are the best times to sip coffee? Turns out there are a lot of those.
                <br />
                There are various circumstances in which coffee will help you - in awakening, activity and even disease prevention.
                <br />
                So when is it best to drink it?
                </div>
                <h5 className="subTitleCoffeeTime">When you wake up</h5>
                <div className="divCoffeeTime">
                    We are all familiar with the procedure. We would have been happy to sleep a little longer, but the alarm clock rings and wakes us up for another day of work. It's time to make a cup of coffee that will both soften the transition from pampering sleep to the demanding day and also help us wake up.
                <br />
                The caffeine in the beans from which the drink is extracted has a stimulating effect - which is exactly what we need for a kick start in the morning.
                </div>
                <h5 className="subTitleCoffeeTime">When studying</h5>
                <div className="divCoffeeTime">
                    Aside from the fact that coffee, as mentioned, improves alertness - which is an asset in itself when sitting down to study and memorize material - it also helps with concentration.
                <br />
                Some studies even state that caffeine significantly improves attention and memory - these are also qualities that you should possess while plowing your textbooks.
                </div>
                <h5 className="subTitleCoffeeTime">When depressed</h5>
                <div className="divCoffeeTime">
                    Coffee is not a substitute for ciprofloxacin, but studies have found it to be able to improve mood.
                <br />
                A 2011 study at 'Harvard University among Women' found that women who drank at least two cups of coffee a day were at a lower risk of developing depression.
                <br />
                Previous studies have found a lower percentage of suicides among coffee drinkers. The explanation is that changes in the chemical composition of the brain that produces caffeine are the ones responsible for improving mood.
                </div>
                <h5 className="subTitleCoffeeTime">When practicing</h5>
                <div className="divCoffeeTime">
                    Caffeine is known to improve athletic performance, so it is advisable to consume it before starting training.
                <br />
                When consumed, it releases energy in the direction of the muscles, by breaking down fats and releasing fatty acids into the bloodstream, which become energy. Many trainees swear that it improves their physical abilities during training and even helps to increase the level of endurance.
                <br />
                No wonder, since according to studies from recent years, caffeine allows the depletion of muscle fatigue during activity. It improves the body's ability to oxygenate fats and store glycogen in a muscle (a polysaccharide built from glucose and used to conserve available energy reserves) - which actually helps endurance training.
                <br />
                Runners consume caffeine because it increases heart rate and respiration rate - an action that contributes to long-distance running.
                <br />
                Cyclists use it as well, as its effect on the central nervous system and the muscular system, and its increased use of fat to create energy - allows for improved performance.
                </div>
                <h5 className="subTitleCoffeeTime">When dieting</h5>
                <div className="divCoffeeTime">
                    Caffeine stimulates the metabolic system, thus helping to burn fat faster. This is also why weight loss capsules contain caffeine.
                <br />
                Further help comes from the fact that coffee contributes to an increase in the feeling of satiety through the effect of caffeine on the center of hunger and satiety in the brain.
                <br />
                And when seventy - eat less and the diet is more successful. A US study published in 2006 found that subjects who increased their caffeine intake over the years gained a little less weight than those who reduced their caffeine intake, with an emphasis on women who were overweight and did not exercise.
                </div>
            </div>
        </>
    )
}

export default RecommendedTime4Coffee