import React from 'react'
import Print1 from '../images/shirtImg1.jpg'
import Print2 from '../images/shirtImg2.jpg'
import Print3 from '../images/shirtImg3.jpg'
import Print4 from '../images/shirtImg4.jpg'
import Print5 from '../images/shirtImg5.jpg'
import Print6 from '../images/shirtImg6.jpg'
import { FaThumbsUp } from 'react-icons/fa' 


const Prints = () => {
    return (
        <div>
            <div className="shirtPrints">
                <h1 className="printsHeading">Choose A Blackout Print</h1>
                <div className="topPrints">
                    <div className="print1 prints">
                        <div className="imageDiv">
                            <img src={Print1} alt="" />
                        </div>
                        <h3 className="imageHeading">Skull And Roses</h3>
                        <div className="printInfo">
                            <p>$15.99</p>
                            <p><FaThumbsUp className="thumbsUp" />216</p>
                        </div>
                        <a href="#" className='printBtn'><h2>Add To Cart</h2></a>
                    </div>

                    <div className="print2 prints">
                        <div className="imageDiv">
                            <img src={Print2} alt="" />
                        </div>
                        <h3 className="imageHeading">Skull King</h3>
                        <div className="printInfo">
                            <p>$15.99</p>
                            <p><FaThumbsUp className="thumbsUp" />804</p>
                        </div>
                        <a href="#" className='printBtn'><h2>Add To Cart</h2></a>
                    </div>

                    <div className="print3 prints">
                        <div className="imageDiv">
                            <img src={Print3} alt="" />
                        </div>
                        <h3 className="imageHeading">Work N Skull</h3>
                        <div className="printInfo">
                            <p>$15.99</p>
                            <p><FaThumbsUp className="thumbsUp" />620</p>
                        </div>
                        <a href="#" className='printBtn'><h2>Add To Cart</h2></a>
                    </div>
                </div>
       
                <div className="bottomPrints">
                    <div className="print4 prints">
                        <div className="imageDiv">
                            <img src={Print4} alt="" />
                        </div>
                        <h3 className="imageHeading">Saloon Skull</h3>
                        <div className="printInfo">
                            <p>$15.99</p>
                            <p><FaThumbsUp className="thumbsUp" />450</p>
                        </div>
                        <a href="#" className='printBtn'><h2>Add To Cart</h2></a>
                    </div>

                    <div className="print5 prints">
                        <div className="imageDiv">
                            <img src={Print5} alt="" />
                        </div>
                        <h3 className="imageHeading">Snake Eyes</h3>
                        <div className="printInfo">
                            <p>$15.99</p>
                            <p><FaThumbsUp className="thumbsUp" />610</p>
                        </div>
                        <a href="#" className='printBtn'><h2>Add To Cart</h2></a>
                    </div>

                    <div className="print6 prints">
                        <div className="imageDiv">
                            <img src={Print6} alt="" />
                        </div>
                        <h3 className="imageHeading">Divinci Skull</h3>
                        <div className="printInfo">
                            <p>$15.99</p>
                            <p><FaThumbsUp className="thumbsUp" />218</p>
                        </div>
                        <a href="#" className='printBtn'><h2>Add To Cart</h2></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prints
