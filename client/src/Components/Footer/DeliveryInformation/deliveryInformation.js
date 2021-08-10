import React, { useEffect } from 'react'
import './deliveryInformation.css'
function DeliveryInformation() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);
    return (
        <>
            <h1 className="headD">deliveryInformation</h1>
            <div className="deliveryInformationBody">
                <strong className="deliveryTitle">Delivery Information</strong>
                <br />
                <label>If you are looking for delivery options, you are in the right place. You will find all the necessary information here.</label>
                <br />
                <label className="deliverySubTitle">What Are The Basics?</label>
                <br />
                <div>We ship to all the countries via UPS and USPS. After we send your order, you receive a confirmation email. Don’t worry about tracking. You will be able to track your order all the time until it arrives at your place. There are a few differences between domestic and international shipping. But the common thing is delivery is entirely free.</div>
                <br />
                <label className="deliverySubTitle">Domestic Shipping</label>
                <ul>
                    <li>Typically, shipping takes 3-5 business days.</li>
                    <li>Most orders are shipped the next business day after payment has been confirmed.</li>
                    <li>1-2 weekdays is the average order processing time. Please bear with it.</li>
                </ul>
                <label className="deliverySubTitle">All You Need To Know About International Shipping</label>
                <ul>
                    <li>With care for international clients, we offer UPS or USPS shipping. Our motto for international delivery lies in three words – safety, cost-effectivity, in-time.</li>
                    <li>Some countries require additional import documentation. In this case, each customer has to shoulder that responsibility.</li>
                    <li>On average, shipping international orders takes 2-21 days. Terms depend on service level and destination point. To track orders and know the tentative delivery date, customers can sign up for UPS or USPS services and follow the parcel’s journey.</li>
                    <li>We ship most orders the next business day after payment confirmation.</li>
                </ul>
            </div>
        </>
    )
}

export default DeliveryInformation

