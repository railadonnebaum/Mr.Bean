import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import './coffeeIsHealthy.css';
function CoffeeIsHealthy() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);

    return (
        <>
            <h1 className="titleB">Blog</h1>
            <Link to="/blog" className="float-left linkPage"><i className="fas fa-angle-double-left">back to blog page</i></Link>
            <section className="titleCoffeeIsHealthy">There is no drink in the world that has been so researched by scientists, in search of its possible effects on the body, and in this context, there is no drink that has received so much attention from the media.</section>
            <div className="bodyCoffeeIsHealthy">
                <div className="divCoffeeIsHealthy">
                    Coffee is undoubtedly one of the beverages that attracts particularly great attention from the international scientific community.
                    <br />
                    Is it due to the fact that it is so popular and consumed in huge quantity all over the world? Or maybe it can actually be attributed to caffeine, the same basic ingredient we consume like a drug to start the day?
                    <br />
                    The World Health Organization defines coffee as a "non-nutritious nutrient", or in other words: coffee is not considered a food, even though it contains several nutrients, along with a huge variety of different types of ingredients.
                    <br />
                    Coffee is a plant that grows in subtropical climates, mainly in Africa, Southeast Asia and Latin America, whose fruits can be easily ground and dissolved in boiling water by various methods for a variety of beverages.
                    <br />
                    One of the active ingredients in coffee beans is caffeine and in recent years there have been plenty of studies that have tried to determine how healthy or harmful drinking caffeinated beverages is.
                    <br />
                    Caffeine is also found in cocoa beans and in various amounts also in tea leaves.
                    <br />
                    The amount of caffeine varies depending on the different types of coffee: Robusta contains twice the amount of Arabica.
                    <br />
                    Caffeine is a bitter-tasting substance, but it is not the only one that gives coffee its bitterness: it varies, for example, depending on the degree of heat.
                    <br />
                    But its most important feature, the one for which it has become so famous, both among the general public and among researchers, is its pharmacological action.
                    <br />
                    It was unveiled 170 years ago, and thanks to it, caffeine is still used as a painkiller, although in a much higher dose than what exists naturally in coffee itself.
                    <br />
                    Let us now turn to the other components of coffee, which are extremely numerous.
                    <br />
                    For their detailed description, we needed an entire book, because we had to distinguish between the components that disappear during roasting or processing, and those that continue to exist even in the glass from which we drink.
                    <br />
                    We will first find the minerals, and especially the potassium, which is almost completely depleted during processing and reappears in the drink.
                    <br />
                    We will also find the fats, especially triglycerides, fatty acids and wax types.
                    <br />
                    However, many fats are eliminated during roasting and processing: Northern European boiled coffee is the only one in which a large proportion of those fats pass into the drink, and these may indeed interact with the body's various cholesterol levels.
                    <br />
                    The proteins, reliable acids and carbohydrates that are all found in beans, are largely eliminated while roasting.
                    <br />
                    Also, the unreasonable presence of contaminants, originating in the countries of origin, disappears thanks to roasting and processing procedures.
                </div>
                <h5 className="subTitleCoffeeIsHealthy">
                    Caffeine - a source of countless scientific debates</h5>
                <div className="divCoffeeIsHealthy">
                    For decades coffee drinking has been controversial in the scientific world.
                    <br />
                    Thousands and tens of thousands of studies have been conducted in recent decades, with the aim of investigating the various effects of drinking coffee on "drinkers".
                    <br />
                    While the vast majority of studies have tended to declare that coffee is mostly dangerous to health, in recent years more and more researchers are publishing saying, "One moment - we may have missed something"?
                    <br />
                    More and more studies indicate that contrary to conservative opinion, which holds that drinking a lot of coffee should be avoided, drinking coffee has a rather positive health effect.
                    <br />
                    Some of the findings are surprising and refreshing - just like a cup of fresh coffee in the morning…
                </div>
                <h5 className="subTitleCoffeeIsHealthy">Caffeine affects sleep</h5>
                <div className="divCoffeeIsHealthy">
                    Excessive doses of caffeine, which we drink before we go to bed, can adversely affect sleep, and this has been proven in studies.
                    <br />
                    However, due to the already short lifespan of caffeine, the effects are more noticeable in the first part of sleep.
                    <br />
                    It should be noted that caffeine only affects the first hours of sleep, not the duration of sleep.
                    <br />
                    Studies have shown that personal variables and early tendencies play a key role together.
                    <br />
                    In addition, it has never been proven that coffee regularly causes insomnia unless you intentionally consume large amounts of coffee during the night.
                </div>
            </div>
        </>
    )
}

export default CoffeeIsHealthy