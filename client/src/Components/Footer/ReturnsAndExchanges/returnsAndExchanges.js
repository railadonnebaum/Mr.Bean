import React, { useEffect } from 'react'
import './returnsAndExchange.css'

function ReturnsExchange(params) {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);
    
    return (
        <>
            <h1 className="headD">deliveryInformation</h1>
            <div className="returnsExchangeBody">
                <div className="returnsExchangeTitle">Returns & Exchanges</div>
                <div className="notice notice-lg">
                    <strong className="subtitle" >What is your return/exchange policy?</strong>
                    <br />
                    If Mr. Bean receives your returned merchandise within 10 days of the date you received your order, Mr. Bean will be happy to offer a full refund for the original purchase price. Returns will only be accepted for merchandise that has not been used. Please include original order ID with return. Your return will be processed within 3–5 business days upon receipt of the items to our warehouse. The refund will be applied to the original credit card used to make the purchase. Please be aware that some banks will often take up to 2 billing periods before refunds will appear on your credit card statement. Customer is responsible for return shipping.
                </div>
                <div className="notice notice-lg">
                    <strong className="subtitle">How can I make an exchange?</strong>
                    <br />
                    Send a letter along with the merchandise stating that you want to exchange your product to:
                    <br />
                    Mr. Bean
                    <br />
                    Attn: Returns 255 West 36th St
                    <br />
                    New York, NY 10018
                </div>
                <div className="notice notice-lg">
                    <strong className="subtitle">What do I do if I received a defective product?</strong>
                    <br />
                    Our products undergo strict quality control and our goal is that you will always receive a product with the highest level of finish. However, if you notice any defect in the product you received, contact us for our customer service, Attach a picture of the defect, proof of purchase, name and phone and we will get back to you soon. Subject to the exchange and return policies advertised on the site
                </div>
            </div>
        </>
    )
}

export default ReturnsExchange
