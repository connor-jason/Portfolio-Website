import React from 'react';

import linkedin from '../images/ContactMeLogos/linkedin.png';
import email from '../images/ContactMeLogos/email.png';

const ContactMeComponent = () => {

    return (
        <div id="contact-me" style={{ marginTop: '10vh' }}>
            <div className="section-head">Contact Me</div>
            <div className="square"/>
            <div className="socialLinks">
                <a href="mailto:connorejason@gmail.com">
                    <img className="socialImage" src={email} alt="Email" />
                </a>
                <a href="https://linkedin.com/in/connor-jason" target="_blank" rel="noopener noreferrer">
                    <img className="socialImage" src={linkedin} alt="LinkedIn" />
                </a>
            </div>
        </div>
    );
};

export default ContactMeComponent;
