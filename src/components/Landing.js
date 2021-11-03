import React from 'react'
import BackgroundImg from '../images/background-image.jpg';

const Landing = () => {
    return (
        <section className="landingPage">
            <img src ={BackgroundImg} className="landingImage" />
            <h1 className="mainHeading">Dark Side T-Shirts</h1>
            <h2 className="mainHeading2">Cross Over To The Dark Side</h2>
        </section>
    )
}

export default Landing
