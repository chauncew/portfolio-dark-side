import React from 'react';
import Man from '../images/men.jpg';
import Woman from '../images/woman.jpg'

const MenWomen = () => {
    return (
        <section class="mensAndWomen">
        <div class="images">
            <div class="menImg">
                <img src={Man} class="menImage" alt=""/>
                <p class="men">MEN</p>
            </div>
            <div class="womenImg">
                <img src={Woman} class="womensImage" alt=""/>
                <p class="women">WOMEN</p>
            </div>
        </div>
    </section>
    )
}

export default MenWomen
