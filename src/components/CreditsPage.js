import React from 'react';
import Header from './Header';
import Footer from './Footer';

const CreditsPage = () => (
    <div className="creditsPage">
        <Header />
        <div className="credits">
            <h1 className="credits__title">Attributions</h1>
            <ul classname="credits__list">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <Footer />
    </div>
);

export default CreditsPage;