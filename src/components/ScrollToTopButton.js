import React, { useState, useEffect } from 'react';
import { CgArrowUpO } from 'react-icons/cg'

const ScrollToTopButton = () =>  {
    const [visible, setVisible] = useState(false);

    const checkScroll = () => {
        const offset = window.pageYOffset;
        if (offset > 200 && !visible) {
            setVisible(true);
        } else if (offset <= 200 && visible) {
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
        <CgArrowUpO className={visible ? "scroll-button" : "scroll-button-hidden"} onClick={scrollTop} />
    );
};

export default ScrollToTopButton;