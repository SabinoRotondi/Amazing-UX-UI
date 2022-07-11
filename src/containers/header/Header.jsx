import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
            <h1 className="gradient__text">
                Let's Build Something amazing with Amazing UX-UI
            </h1>
            <p>
                Kickstart your business with Amazing UX-UI. Crafted with passion from people for people!
<br></br>
<br></br>
<br></br>
                *Thanks to  <a href="https://www.youtube.com/c/JavaScriptMastery">JavaScript Mastery</a> 

            </p>

            <div className="gpt3__header-content__input">
                <input type="email" placeholder="Your Email Address" />
                <button type="button">Get Started</button>
            </div>

            <div className="gpt3__header-content__people">
                <img src={people} alt="people" />
                <p>1,600+ people recommend Amazing UX-UI </p>
            </div>

        </div>
        <div className="gpt3__header-image">
            <img src={ai} alt="ai" />
        </div>

    </div>
);

export default Header;
