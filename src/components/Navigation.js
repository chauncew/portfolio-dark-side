import React from 'react';
import {FaShoppingCart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"



const Navigation = () => {
    return (
        <div className="navigation">
        <div className="leftSide">
            <div className='hamburger'>
                <GiHamburgerMenu />
            </div>
            <div className="logo"></div>
            <div className="navItems">
                <ul>
                    <li>Styles</li>
                    <li>Shipping</li>
                    <li>Exclusives</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <div className="rightSide">
            <div className="icons">
                {/* <a href="#" class="home">Home</a> */}
                <i className="fas fa-search"></i>
                <a href="cart.html" className='cart'><FaShoppingCart /></a>
                <p className="shoppingAmt">0</p>
            </div>
        </div>
    </div>
    )
}

export default Navigation
