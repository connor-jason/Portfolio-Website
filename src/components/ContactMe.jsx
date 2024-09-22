import React, { useRef, useState } from 'react';
import linkedin from '../images/ContactMeLogos/linkedin.png';
import email from '../images/ContactMeLogos/email.png';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const SocialLinks = () => (
        <div className="social-links">
            <a href="mailto:connorejason@gmail.com">
                <img className="social-image" src={email} alt="Email" />
            </a>
            <a href="https://linkedin.com/in/connor-jason" target="_blank" rel="noopener noreferrer">
                <img className="social-image" src={linkedin} alt="LinkedIn" />
            </a>
        </div>
    );

    const EmailForm = () => {
        const form = useRef();
        const [isSubmitted, setIsSubmitted] = useState(false);

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs
                .sendForm('service_7fdqvqe', 'template_ahzskyg', form.current, 'LTwH67xrs1mmkzonA')
                .then(
                    () => {
                        console.log('SUCCESS!');
                        setIsSubmitted(true);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        };

        return (
            <div className="email-form-container">
                {isSubmitted ? (
                    <div className="thank-you-message">
                        <h1>Thank You!</h1>
                        <p>Your message has been successfully sent. I will contact you soon.</p>
                    </div>
                ) : (
                    <form ref={form} onSubmit={sendEmail} className="email-form">
                        <div className="form-row">
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="user_name" required />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="user_email" required />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required />
                        </div>

                        <div className="button-container">
                            <button type="submit" className="submit-button">Submit</button>
                        </div>
                    </form>
                )}
            </div>
        );
    };

    return (
        <div id="contact-me" style={{ marginTop: '10vh' }}>
            <div className="section-head">Contact Me</div>
            <div className="square" />
            <SocialLinks />
            <EmailForm />
        </div>
    );
};

export default ContactMe;
