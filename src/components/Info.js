import React from 'react'
import { FaExchangeAlt } from 'react-icons/fa'
import { FaPercent } from 'react-icons/fa'
import { FaShippingFast } from 'react-icons/fa'

const Info = () => {
    return (
        <section class="infoSection">
            <div class="percent">
                <FaPercent className= "percents"/>
                <p className="infoPara">Up to 20% Off On First Order</p>
                <p>Subscribe and get even more off on purchases</p>
            </div>
            <div class="returns">
                <FaExchangeAlt className="returning"/>
                <p className="infoPara">30 Day Return</p>
                <p class="para1">If you are not satisfied return it</p> 
                <p>with our 30 day return policy</p>
            </div>
            <div class="shipping">
                <FaShippingFast className="shippings"/>
                <p className="infoPara">Worldwide Shipping</p>
                <p>With purchase of $55 or more shipping is free</p>
            </div>
    </section>
    )
}

export default Info
