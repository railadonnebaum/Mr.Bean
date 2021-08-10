import React, {useEffect} from 'react';
import './About.css';
import background from '../../images/backgrounds/about.jpg'

function About() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);

    return(
        <div className="image"style={{ 
            backgroundImage: `url(${background})` 
          }}>
          <div className="divAbout">
            <label> Those who love coffee and coffee machines will love Mr. Bean</label>
            <label > People who live in the coffee world, and desire quality and service, will cherish Mr. Bean</label>
            <label>
            Mr. Bean was established in 2010 and has become the 'home of coffee' for the coffe connoisseur. 
            </label>
            <label>
            Mr. Bean offers its customers a huge variety of coffee machines from the leading brands in the world, at different price levels that are suitable for every use and pocket, from home use to office use.
            </label>
            <label>
            In addition to coffee machines and accessories, you will find in our site dozens of different types of coffee from leading brands, in different flavors and with different levels of roasting.
            </label>
            <label>
            As a leading and attentive chain for its customers, we take care to refresh and renew the inventory with new coffee brands, while maintaining a competitive and affordable price level for you, the customers.
            </label>
            <label>
            Everything we do is in the name of coffee. This is the culmination of it all—our pursuit of the highest state of coffee experience, our relentless and ongoing innovation—all captured in your cup.
            </label>
            <label>
            The coffee is always on us :-) because our blood type is COFFEE.                         
            </label>
            <label >
            And always remember: A good DAY start with a COFFEE.
            </label>
          </div>
        </div>
    )
}

export default About