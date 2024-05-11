import React from 'react';

/**
 * Footer component for the website.
 * @returns {JSX.Element} The rendered FooterComponent.
 */
const FooterComponent = () => {
    return (
        <>
        <div class="square" style={{ width:'100%', marginTop: '8vh', marginBottom: '2vh'}}></div>
        <footer>
                <p class='footer'>Made with React.js, HTML, and CSS by Connor Jason</p>
                <p class='footer'>Code is on my <a href="https://github.com/connor-jason" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </footer>
        </>
    );
};

export default FooterComponent;
