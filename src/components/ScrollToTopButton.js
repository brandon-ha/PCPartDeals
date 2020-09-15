import React, { useState, useEffect } from 'react';
import { CgArrowUpO } from 'react-icons/cg'

const ScrollToTopButton = () =>  {
    const [visible, setVisible] = useState(false);

    const checkScroll = () => {
        if (window.pageYOffset > 500 && !visible) {
            setVisible(true);
        } else if (window.pageYOffset <= 500 && visible) {
            setVisible(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);
        
        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    });

    return (
        <>
            { visible ? <CgArrowUpO className="scroll-button" onClick={scrollTop}/> : null }
        </>
    );
};

export default ScrollToTopButton;