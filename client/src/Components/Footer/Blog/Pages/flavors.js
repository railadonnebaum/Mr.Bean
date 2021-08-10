import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import './flavors.css';

function Flavors() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);

    return (
        <>
            <h1 className="titleB">Blog</h1>
            <Link to="/blog" className="float-left linkPage"><i className="fas fa-angle-double-left">back to blog page</i></Link>
            <section className="titleFlavors"></section>
            <div className="bodyFlavors">
                <div className="divFlavors">
                    Similar to Shakespeare's well-known saying that beauty is in the eyes of the beholder, so is the taste of coffee on the palate of the one who loves it. Indeed, everyone can choose the most delicious coffee for himself since there are many types of coffee beans, each of which has its own unique taste. However, because there are more than 25 different types of coffee beans in the world, how do you know what your favorite flavor is? Therefore, in this article we have compiled for you brief information about the taste characteristics of coffee beans and the elements that affect their taste.
                </div>
                <h5 className="subTitleFlavors">What are the taste characteristics of coffee beans?</h5>
                <div className="divFlavors">
                    Although each type has a different taste, most coffee beans consist of a number of main characteristics: aroma, body, acidity, taste, balance and after-taste.
                    <br />
                    The uniqueness of coffee is measured mainly by its acidity and taste.
                    <br />
                    Under their influence the coffee can be bitter, sweet, sour, nutty, cherry, fruity, earthy, etc.
                    <br />
                    The aroma characteristic refers to the aroma of the coffee while the body characteristic refers to the degree of richness and heaviness of the coffee.
                    <br />
                    Other important characteristics are the rest of the taste, ie the taste that remains in the mouth after sipping the coffee and the degree of balance, which is essential in mixtures of several varieties.
                    <br />
                    In each variety and type of coffee bean these characteristics can be quantified according to different levels from 'non-existent' to 'dominant component'.
                    <br />
                    Also, since these ingredients affect, both directly and indirectly, the taste of the coffee, they are the ones that determine the degree of its quality and prestige.
                </div>
                <div className="divFlavors">
                    <strong className="strong">The elements that affect the flavors of coffee:</strong>
                    <br />
                    There are many elements that affect the taste of coffee. Beyond the fact that in the very process of making coffee you can add various syrups that enrich its taste, the very roasting of the beans can significantly affect the final taste. For example, a short roasting of the beans will create a coffee with a sour taste, while a slow roasting over time will create a coffee that has a slightly burnt taste. However, the main element that affects the taste of coffee is the area where its beans grow.
                </div>
                <h5 className="subTitleFlavors">The main areas of coffee bean crops</h5>
                <div className="divFlavors">
                    Since the different varieties of coffee beans need certain climates and conditions in order to grow properly, there are several regions in the world where the beans are grown and exported for the rest of the countries. Here is a brief overview of the main areas:
                    <ul>
                        <li>South America - This region is responsible for the development of a significant part of the world coffee industry.
                            <br />
                            Brazil is considered the largest producer of the arabica variety characterized by a sweet and delicate taste.
                            <br />
                            Other varieties grown in the area include, among others, Colombia Suprimo with the strong and rich taste, Venezuela with the sweet taste, San Cristobal with the delicate and fruity taste and Jamaica Blue Mountain which is considered one of the most prestigious varieties due to its delicate and quality taste.</li>
                        <li>Far East - This region dominates much of the world coffee industry, as Vietnam is the world's largest producer of the Robusta variety.
                            <br />
                            In addition to this variety, the region is responsible for growing quality coffee varieties such as Sumatra Mandling which has a sweetish taste and nutty aroma, Java Closi which has a rich, sweet and delicate taste, and the prestigious Lavak coffee that leaves a taste of citrus fruits and nuts.</li>
                        <li>Africa - This region grows wonderful coffee varieties such as Ethiopia Sidamo with its strong and rich taste, Tanzania Kilimanjaro which has a sour-bitter taste and fragrance of flowers, and yes, the sour Kenya variety that leaves a great wine taste.</li>
                        <li>Australia - This region produces one of the rarest and most prestigious varieties in the world - the Skyberry variety.
                            <br />
                            Beans of this variety create coffee with a sweet and refined taste reminiscent of the taste of chocolate and nuts.</li>
                        <li>North America - Among the other countries of this region can be found the island of Hawaii where the Hawaiian species grows.
                            <br />
                            This type of coffee has a rich aroma and cherry flavor.</li>
                    </ul>
                </div>
                <div className="divFlavors">
                    In conclusion, it can be seen that the many types of coffee are significantly influenced by their country of origin.
                <br />
                    At the same time, in order to enhance the many benefits of each variety, you can create blends of several types and enjoy strong, high-quality flavors that will leave a taste of more.
                </div>
            </div>
        </>
    )
}

export default Flavors