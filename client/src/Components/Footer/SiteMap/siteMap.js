import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './siteMap.css'
function SiteMap() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);
    
    return (
        <>
            <h1 className="headD">siteMap</h1>
            <div className="divSiteMap">
                <ul className="ulSiteMap">
                    <li><Link to="/" className="linkSiteMap">Home Page</Link></li>
                    <li><Link className="linkSiteMap" to="/coffee-capsules">Coffee Capsules</Link></li>
                    <li><Link className="linkSiteMap" to="/coffee-machines">Coffee Machines</Link></li>
                    <li><Link className="linkSiteMap" to="/whole-bean">Whole Bean</Link></li>
                    <li><Link className="linkSiteMap" to="/accessories">Accessories</Link></li>
                    <li><Link className="linkSiteMap" to="/cart">Cart</Link></li>
                    <li><Link className="linkSiteMap" to="/check-out">Checkout</Link></li>
                    <li><Link className="linkSiteMap" to="/account">My Account</Link></li>
                    <li><Link className="linkSiteMap" to="/returns-and-exchange">Returns & Exchanges</Link></li>
                    <li><Link className="linkSiteMap" to="/delivery-information">Delivery Information</Link></li>
                    <li><Link className="linkSiteMap" to="/terms">Terms & Condition</Link></li>
                    <li><Link className="linkSiteMap" to="/about">About Us</Link></li>
                    <li><Link className="linkSiteMap" to="/contact-us">Contac Us</Link></li>
                    <li><Link className="linkSiteMap" to="/blog">Blog</Link></li>
                    <li><Link className="linkSiteMap" to="/faq">FAQ</Link></li>
                    <li><Link className="linkSiteMap" to="/idea">Sumbit your idea</Link></li>
                    <li><Link className="linkSiteMap" to="/opinion">Opinion</Link></li>
                </ul>
            </div>
        </>
    )
}
export default SiteMap