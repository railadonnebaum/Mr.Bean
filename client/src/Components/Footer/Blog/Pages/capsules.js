import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './capsules.css'
function Capsules() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);

    return (
        <>
            <h1 className="titleB">Blog</h1>
            <Link to="/blog" className="float-left linkPage"><i className="fas fa-angle-double-left">back to blog page</i></Link>
            <section className="titleCapsules"></section>
            <div className="bodyCapsules">
                <div className="divCapsules">
                    More and more people are realizing that quality coffee can improve their day considerably. However, most of us also know that in our busy agenda there is not always time to grind the coffee, put it in the machine and hope that the coffee does indeed turn out fine as expected.
                    <br />
                    Fortunately, one can always know that every cup of coffee will come out exactly as he wants it, without any effort at all.
                    <br />
                    The genious invention that ensures this is called coffee capsules.
                </div>
                <h5 className="subTitleCapsules">' Coffee Capsules' - What exactly is it ?</h5>
                <div className="divCapsules">
                    Capsule is a sealed container that contains coffee and is ready to be used. The coffee is sealed with special filter paper, which is discarded after use.
                    <br />
                    The capsules are added to a coffee machine, which through the penetration of boiling water, the machine creates an espresso from them.
                    <br />
                    From each capsule, you can create one quality cup of coffee, perfect in a variety of flavors, without effort, without fear and without getting dirty. Making coffee using a capsule is convenient, clean and fast, and it does not require special knowledge.
                    <br />
                    A coffee machine that uses only capsules, is suitable for any need, business or family, and therefore, many coffee machines can be found in restaurants, cafes, conference rooms and businesses.
                </div>
                <h5 className="subTitleCapsules">Who are the capsules suitable for?</h5>
                <div className="divCapsules">
                    The capsules are suitable for anyone who wants quality coffee every time and does not want to make an effort to achieve it. The capsules are the perfect solution for small and large offices, which want to provide their employees with quality coffee, without soiling the coffee corner and without taking away employees' attention for long minutes.
                    <br />
                    However, keep in mind that capsules are a more expensive coffee solution than other coffee solutions: powders and coffee beans. Therefore, coffee capsules are especially suitable for offices and organizations that are willing to invest in their coffee to make sure that they are indeed getting the highest quality coffee.
                </div>
            </div>
        </>
    )
}

export default Capsules